import { useEffect, useRef } from "react";

/**
 * Dekorativní three.js scéna: šikmé světlo klouže po ilustračním vzorku
 * stěrky. Statický CSS vzorek pod ní slouží jako fallback (bez JS/WebGL,
 * při prefers-reduced-motion se renderer vůbec nevytvoří).
 */
export function SurfaceScene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) return;

    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      const canvas = renderer.domElement;
      canvas.setAttribute("aria-hidden", "true");
      canvas.className = "surface-canvas";
      el.appendChild(canvas);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(0, 3.1, 2.2);
      camera.lookAt(0, 0, 0);

      // Procedurální textura „tahů hladítkem“
      const c = document.createElement("canvas");
      c.width = c.height = 1024;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "#cbc5bc";
      ctx.fillRect(0, 0, 1024, 1024);
      let seed = 7;
      const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
      for (let i = 0; i < 900; i++) {
        const x = rnd() * 1024, y = rnd() * 1024, r = 60 + rnd() * 220;
        const a0 = rnd() * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * (0.35 + rnd() * 0.4), rnd() * Math.PI, a0, a0 + 0.6 + rnd() * 1.2);
        ctx.lineWidth = 8 + rnd() * 46;
        const light = rnd() > 0.5;
        ctx.strokeStyle = light ? `rgba(244,241,236,${0.05 + rnd() * 0.1})` : `rgba(74,71,67,${0.03 + rnd() * 0.07})`;
        ctx.stroke();
      }
      const img = ctx.getImageData(0, 0, 1024, 1024);
      for (let i = 0; i < img.data.length; i += 4) {
        const n = (rnd() - 0.5) * 14;
        img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
      }
      ctx.putImageData(img, 0, 0);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());

      const geo = new THREE.PlaneGeometry(4.2, 4.2);
      const mat = new THREE.MeshStandardMaterial({ map: tex, bumpMap: tex, bumpScale: 2.2, roughness: 0.82, metalness: 0 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      const hemi = new THREE.HemisphereLight(0xf4f1ec, 0x4a4743, 1.1);
      scene.add(hemi);
      const sun = new THREE.DirectionalLight(0xffe4c4, 2.4);
      scene.add(sun);

      let raf = 0, running = false, visible = false, last = 0, t = 0;
      const draw = () => {
        sun.position.set(Math.cos(t * 0.25) * 4, 0.9, Math.sin(t * 0.25) * 2.5);
        renderer.render(scene, camera);
      };
      const tick = (now: number) => {
        t += Math.min(0.05, (now - last) / 1000);
        last = now;
        draw();
        if (running) raf = requestAnimationFrame(tick);
      };
      const start = () => {
        if (running || !visible || document.hidden) return;
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      };
      const stop = () => {
        running = false;
        cancelAnimationFrame(raf);
      };

      const resize = () => {
        const w = el.clientWidth, h = el.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        if (!running) draw();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();
      requestAnimationFrame(() => canvas.classList.add("is-live"));

      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      });
      io.observe(el);

      const onVisibility = () => (document.hidden ? stop() : start());
      document.addEventListener("visibilitychange", onVisibility);

      cleanup = () => {
        stop();
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        mq.removeEventListener("change", onMotionPref);
        geo.dispose();
        mat.dispose();
        tex.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        canvas.remove();
        cleanup = () => {};
      };

      const onMotionPref = () => {
        if (mq.matches) cleanup();
      };
      mq.addEventListener("change", onMotionPref);
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <figure className="relative">
      <div ref={host} className="swatch mat-cement relative aspect-[4/3] overflow-hidden" />
      <figcaption className="mt-2 font-mono text-[11px] leading-snug text-beton">
        Ilustrační, počítačově generovaný vzorek stěrky v pohyblivém světle — nejde o fotografii realizace.
      </figcaption>
    </figure>
  );
}
