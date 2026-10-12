import { useEffect, useRef, useState } from "react";

type ThreeNS = typeof import("three");

function StaticSection() {
  return (
    <svg viewBox="0 0 600 420" className="h-full w-full" role="img" aria-label="Schematický řez terénem: vrstvy zeminy, jílu a podloží, vodní nádrž a hromada suti">
      <defs>
        <pattern id="fb-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#6E5338" strokeWidth="1.2" />
        </pattern>
      </defs>
      <path d="M20 130 C120 118 200 140 280 128 S350 120 370 132 C390 175 460 178 480 134 S560 122 580 130 L580 210 C450 220 300 196 20 214 Z" fill="#C9B48F" />
      <path d="M20 214 C300 196 450 220 580 210 L580 290 C420 300 250 280 20 296 Z" fill="#8A6A4A" />
      <path d="M20 214 C300 196 450 220 580 210 L580 290 C420 300 250 280 20 296 Z" fill="url(#fb-hatch)" opacity="0.5" />
      <path d="M20 296 C250 280 420 300 580 290 L580 380 L20 380 Z" fill="#A7A9A6" />
      <path d="M374 140 C394 170 456 172 476 140 Z" fill="#2F5D50" />
      <path d="M60 126 l14 -18 l10 10 l12 -16 l16 20 l10 -8 l14 14 Z" fill="#8C8E8B" stroke="#1F2124" strokeWidth="1.5" />
      <line x1="250" y1="128" x2="250" y2="78" stroke="#1F2124" strokeWidth="3" />
      <rect x="244" y="70" width="12" height="10" fill="#F2B705" stroke="#1F2124" />
      <path d="M20 130 C120 118 200 140 280 128 S350 120 370 132 C390 175 460 178 480 134 S560 122 580 130" fill="none" stroke="#1F2124" strokeWidth="2" />
      <rect x="20" y="110" width="560" height="270" fill="none" stroke="#1F2124" strokeWidth="0" />
      <path d="M20 130 L20 380 L580 380 L580 130" fill="none" stroke="#1F2124" strokeWidth="2" />
      <g fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#1F2124">
        <text x="30" y="402">A</text>
        <text x="562" y="402">A</text>
        <text x="236" y="60">km 0,000</text>
      </g>
    </svg>
  );
}

function setup(THREE: ThreeNS, wrap: HTMLElement, canvas: HTMLCanvasElement, onReady: () => void) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 4 / 3, 0.1, 100);

  const W = 6;
  const D = 3;
  let y = -1.4;
  const layers = [
    { h: 0.7, c: "#8F918E" },
    { h: 0.55, c: "#8A6A4A" },
    { h: 0.45, c: "#C9B48F" },
  ];
  const edgeMat = new THREE.LineBasicMaterial({ color: "#1F2124" });
  for (const l of layers) {
    const g = new THREE.BoxGeometry(W, l.h, D);
    const m = new THREE.MeshStandardMaterial({ color: l.c, roughness: 0.95, metalness: 0 });
    const mesh = new THREE.Mesh(g, m);
    mesh.position.y = y + l.h / 2;
    scene.add(mesh);
    const eg = new THREE.EdgesGeometry(g);
    const lines = new THREE.LineSegments(eg, edgeMat);
    lines.position.copy(mesh.position);
    scene.add(lines);
    y += l.h;
  }
  const top = y;

  // Terrain surface with a pond depression
  const tg = new THREE.PlaneGeometry(W, D, 96, 48);
  tg.rotateX(-Math.PI / 2);
  const pos = tg.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const relief = 0.07 * Math.sin(x * 1.4) + 0.045 * Math.cos(z * 2.1 + x);
    const pond = Math.exp(-((x - 1.3) ** 2 / 0.55 + z ** 2 / 0.45));
    const e = Math.max(0, Math.min(1, (W / 2 - Math.abs(x)) / 0.3, (D / 2 - Math.abs(z)) / 0.3));
    const h = 0.14 + relief - 0.42 * pond;
    pos.setY(i, top + h * e);
  }
  tg.computeVertexNormals();
  const tm = new THREE.MeshStandardMaterial({ color: "#8B7D5A", roughness: 1, flatShading: true });
  scene.add(new THREE.Mesh(tg, tm));

  const wg = new THREE.CircleGeometry(0.72, 48);
  wg.rotateX(-Math.PI / 2);
  const wm = new THREE.MeshStandardMaterial({ color: "#2F5D50", roughness: 0.3, transparent: true, opacity: 0.92 });
  const water = new THREE.Mesh(wg, wm);
  water.scale.set(1.05, 1, 0.85);
  water.position.set(1.3, top - 0.08, 0);
  scene.add(water);

  // Rubble heap (demolition)
  const rg = new THREE.DodecahedronGeometry(0.16, 0);
  const rm = new THREE.MeshStandardMaterial({ color: "#A7A9A6", roughness: 1, flatShading: true });
  const rubble: [number, number, number, number][] = [
    [-2.2, 0.1, 0.3, 1], [-2.0, 0.12, -0.1, 1.2], [-2.35, 0.1, -0.3, 0.9], [-2.1, 0.3, 0.05, 0.8],
    [-1.85, 0.08, 0.35, 0.7], [-2.5, 0.08, 0.1, 0.8], [-1.95, 0.25, -0.35, 0.7],
  ];
  for (const [x, yy, z, s] of rubble) {
    const r = new THREE.Mesh(rg, rm);
    r.position.set(x, top + 0.1 + yy, z);
    r.scale.setScalar(s);
    r.rotation.set(x * 3, z * 5, yy * 7);
    scene.add(r);
  }

  // Survey stake
  const sg = new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8);
  const sm = new THREE.MeshStandardMaterial({ color: "#1F2124" });
  const stake = new THREE.Mesh(sg, sm);
  stake.position.set(-0.4, top + 0.45, 0.6);
  scene.add(stake);
  const fg = new THREE.BoxGeometry(0.16, 0.12, 0.04);
  const fm = new THREE.MeshStandardMaterial({ color: "#F2B705" });
  const flag = new THREE.Mesh(fg, fm);
  flag.position.set(-0.32, top + 0.74, 0.6);
  scene.add(flag);

  scene.add(new THREE.HemisphereLight("#FFF7E8", "#5A4A3A", 1.7));
  const sun = new THREE.DirectionalLight("#FFFFFF", 1.9);
  sun.position.set(4, 6, 3);
  scene.add(sun);

  const place = (p: number) => {
    const a = -1.0 + 0.42 * p;
    const r = 11.5 - 1.2 * p;
    camera.position.set(Math.sin(a) * r, 5.6 - 1.4 * p, Math.cos(a) * r);
    camera.lookAt(0, -0.35, 0);
  };
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

  let progress = 0;
  let raf = 0;
  let last = 0;
  let inView = false;
  const DUR = 1200;

  const draw = () => {
    place(ease(progress));
    renderer.render(scene, camera);
  };
  const frame = (now: number) => {
    const dt = last ? now - last : 16;
    last = now;
    progress = Math.min(1, progress + dt / DUR);
    draw();
    raf = progress < 1 ? requestAnimationFrame(frame) : 0;
  };
  const start = () => {
    if (raf || progress >= 1 || !inView || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  const resize = () => {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (!raf) draw();
  };
  resize();
  onReady();

  const ro = new ResizeObserver(resize);
  ro.observe(wrap);

  const io = new IntersectionObserver(
    (entries) => {
      inView = entries.some((e) => e.isIntersecting);
      if (inView) start();
      else stop();
    },
    { threshold: 0.25 },
  );
  io.observe(wrap);

  const onVis = () => {
    if (document.hidden) stop();
    else start();
  };
  document.addEventListener("visibilitychange", onVis);

  return () => {
    stop();
    ro.disconnect();
    io.disconnect();
    document.removeEventListener("visibilitychange", onVis);
    const geos = new Set<{ dispose: () => void }>();
    const mats = new Set<{ dispose: () => void }>();
    scene.traverse((obj) => {
      const o = obj as unknown as { geometry?: { dispose: () => void }; material?: { dispose: () => void } | { dispose: () => void }[] };
      if (o.geometry) geos.add(o.geometry);
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => mats.add(m));
    });
    geos.forEach((g) => g.dispose());
    mats.forEach((m) => m.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
  };
}

export default function SectionModel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window) || !("ResizeObserver" in window)) return;
    const probe = document.createElement("canvas");
    const gl = probe.getContext("webgl2") || probe.getContext("webgl");
    if (!gl) return;
    (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context")?.loseContext();

    let disposed = false;
    let cleanup: () => void = () => {};
    import("three")
      .then((THREE) => {
        if (disposed) return;
        try {
          cleanup = setup(THREE, wrap, canvas, () => setReady(true));
        } catch {
          setReady(false);
        }
      })
      .catch(() => setReady(false));

    return () => {
      disposed = true;
      cleanup();
      setReady(false);
    };
  }, []);

  return (
    <figure>
      <div ref={wrapRef} className="relative aspect-[4/3] w-full border border-ink/30 bg-loess-deep/50">
        <div className={`absolute inset-0 p-4 ${ready ? "invisible" : ""}`}>
          <StaticSection />
        </div>
        <canvas ref={canvasRef} aria-hidden="true" className={`model-canvas absolute inset-0 h-full w-full ${ready ? "is-ready" : ""}`} />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-ink/80">
        Schematický model řezu terénem · dekorativní ilustrace, nejde o projekt ani zakázku firmy
      </figcaption>
    </figure>
  );
}
