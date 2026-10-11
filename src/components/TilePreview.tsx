import { useEffect, useRef, useState } from "react";

const TILE_PATHS = (() => {
  const out: string[] = [];
  for (let r = 0; r < 6; r++) {
    const y = r * 54 - 10;
    const off = r % 2 ? 25 : 0;
    for (let c = -1; c < 9; c++) {
      const x = c * 50 + off;
      out.push(`M${x} ${y} h50 v50 q-25 14 -50 0 z`);
    }
  }
  return out;
})();

/* Schematický náhled krytiny: statické SVG (vždy, i bez JS) + volitelně three.js
   vrstva. Žádný renderer při prefers-reduced-motion; pauza mimo viewport a ve skryté
   záložce; v cleanupu dispose všeho. */
export function TilePreview({ hex, name }: { hex: string; name: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const setColorRef = useRef<((c: string) => void) | null>(null);
  const hexRef = useRef(hex);
  const [gl, setGl] = useState(false);

  useEffect(() => {
    hexRef.current = hex;
    setColorRef.current?.(hex);
  }, [hex]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let cleanup: () => void = () => {};

    const start = () => {
      if (mq.matches) return;
      import("three")
        .then((THREE) => {
          const host = wrapRef.current;
          if (disposed || !host || mq.matches) return;
          let renderer: InstanceType<typeof THREE.WebGLRenderer>;
          try {
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
          } catch {
            return;
          }
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
          const canvas = renderer.domElement;
          canvas.className = "absolute inset-0 block h-full w-full";
          canvas.setAttribute("aria-hidden", "true");
          host.appendChild(canvas);

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
          camera.position.set(0, -2.4, 4.4);
          camera.lookAt(0, 0, 0);

          const geo = new THREE.PlaneGeometry(4.4, 3.4, 176, 100);
          const pos = geo.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            const wave = Math.pow(Math.abs(Math.sin((x * Math.PI) / 0.44)), 0.7) * 0.085;
            const row = ((y + 10) % 0.5) / 0.5;
            pos.setZ(i, wave + (1 - row) * 0.07);
          }
          geo.computeVertexNormals();
          const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(hexRef.current), metalness: 0.45, roughness: 0.42 });
          const mesh = new THREE.Mesh(geo, mat);
          scene.add(mesh);
          const amb = new THREE.AmbientLight(0xffffff, 0.7);
          const key = new THREE.DirectionalLight(0xffffff, 2.2);
          key.position.set(-2, -1, 4);
          const rim = new THREE.DirectionalLight(0xffe6d0, 0.8);
          rim.position.set(3, 2, 2);
          scene.add(amb, key, rim);

          const from = new THREE.Color();
          const to = new THREE.Color(hexRef.current);
          let fadeStart = -1;
          let visible = false;
          let raf = 0;

          const frame = (now: number) => {
            raf = 0;
            if (fadeStart >= 0) {
              const k = Math.min(1, (now - fadeStart) / 250);
              mat.color.copy(from).lerp(to, k);
              if (k >= 1) fadeStart = -1;
            }
            mesh.rotation.x = Math.sin(now * 0.00035) * 0.05;
            mesh.rotation.y = Math.sin(now * 0.00025) * 0.1;
            renderer.render(scene, camera);
            if (visible && !document.hidden) raf = requestAnimationFrame(frame);
          };
          const kick = () => {
            if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
          };
          const stop = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = 0;
          };

          setColorRef.current = (c: string) => {
            from.copy(mat.color);
            to.set(c);
            fadeStart = performance.now();
            if (!visible || document.hidden) {
              mat.color.copy(to);
              fadeStart = -1;
            }
            kick();
          };

          const resize = () => {
            const w = host.clientWidth;
            const h = host.clientHeight;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.render(scene, camera);
          };
          const ro = new ResizeObserver(resize);
          ro.observe(host);
          resize();

          const io = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible) kick();
            else stop();
          });
          io.observe(host);

          const onVis = () => {
            if (document.hidden) stop();
            else kick();
          };
          document.addEventListener("visibilitychange", onVis);
          setGl(true);

          cleanup = () => {
            stop();
            io.disconnect();
            ro.disconnect();
            document.removeEventListener("visibilitychange", onVis);
            setColorRef.current = null;
            scene.clear();
            geo.dispose();
            mat.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            canvas.remove();
          };
        })
        .catch(() => {});
    };

    const onMq = () => {
      if (mq.matches) {
        cleanup();
        cleanup = () => {};
        setGl(false);
      } else {
        start();
      }
    };

    start();
    mq.addEventListener("change", onMq);
    return () => {
      disposed = true;
      mq.removeEventListener("change", onMq);
      cleanup();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label={`Schematický náhled střešní krytiny v odstínu ${name}`}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-antracit/20 bg-pozink"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${gl ? "opacity-0" : "opacity-100"}`}
      >
        <defs>
          <linearGradient id="tileShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
            <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {TILE_PATHS.map((d, i) => (
          <g key={i}>
            <path d={d} fill={hex} className="tile-fill" />
            <path d={d} fill="url(#tileShade)" stroke="rgba(0,0,0,0.25)" strokeWidth="0.8" />
          </g>
        ))}
      </svg>
      <span className="absolute bottom-2 left-2 z-10 rounded-sm bg-titan/90 px-2 py-0.5 font-mono text-[11px] text-antracit">
        schematická ilustrace
      </span>
    </div>
  );
}
