import { useEffect, useRef, useState } from "react";

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

const COLORS = [0xe2361f, 0xffc21a, 0x5b6b3a, 0x1f6f78, 0xd6246e, 0xb8913a];
const SLOTS = [
  [-1.05, 0, -0.55], [0, 0, -0.55], [1.05, 0, -0.55],
  [-1.05, 0, 0.55], [0, 0, 0.55], [1.05, 0, 0.55],
  [-0.52, 1, -0.55], [0.52, 1, -0.55], [-0.52, 1, 0.55], [0.52, 1, 0.55],
];

function initScene(THREE, wrap, initialCount) {
  const canvas = document.createElement("canvas");
  canvas.className = "crate-canvas";
  canvas.setAttribute("aria-hidden", "true");

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  wrap.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(5.6, 4.6, 6.4);
  camera.lookAt(0, 0.7, 0);

  scene.add(new THREE.AmbientLight(0xfff4e6, 1.4));
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.position.set(4, 8, 5);
  scene.add(sun);

  const geometries = [];
  const materials = [];
  const group = new THREE.Group();
  scene.add(group);

  const palletGeo = new THREE.BoxGeometry(3.6, 0.22, 2.6);
  const palletMat = new THREE.MeshStandardMaterial({ color: 0xc9a46a, roughness: 0.9 });
  geometries.push(palletGeo);
  materials.push(palletMat);
  const pallet = new THREE.Mesh(palletGeo, palletMat);
  pallet.position.y = -0.61;
  group.add(pallet);

  const crateGeo = new THREE.BoxGeometry(0.96, 0.96, 0.96);
  const edgeGeo = new THREE.EdgesGeometry(crateGeo);
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x1b1d1f });
  geometries.push(crateGeo, edgeGeo);
  materials.push(edgeMat);
  const crateMats = COLORS.map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.7 }));
  materials.push(...crateMats);

  const crates = SLOTS.map((slot, i) => {
    const mesh = new THREE.Mesh(crateGeo, crateMats[i % crateMats.length]);
    mesh.add(new THREE.LineSegments(edgeGeo, edgeMat));
    mesh.position.set(slot[0], slot[1], slot[2]);
    mesh.visible = false;
    group.add(mesh);
    return { mesh, targetY: slot[1], shown: false };
  });

  const setCount = (n) => {
    crates.forEach((c, i) => {
      if (i < n && !c.shown) {
        c.shown = true;
        c.mesh.visible = true;
        c.mesh.position.y = c.targetY + 3;
      } else if (i >= n && c.shown) {
        c.shown = false;
        c.mesh.visible = false;
      }
    });
    kick();
  };

  const resize = () => {
    const w = wrap.clientWidth || 1;
    const h = wrap.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };

  let raf = 0;
  let last = 0;
  let inView = false;
  const loop = (t) => {
    const dt = Math.min(0.05, last ? (t - last) / 1000 : 0.016);
    last = t;
    group.rotation.y += dt * 0.18;
    crates.forEach((c) => {
      if (!c.shown) return;
      const y = c.mesh.position.y;
      c.mesh.position.y = y + (c.targetY - y) * Math.min(1, dt * 7);
    });
    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  };
  const start = () => {
    if (raf || !inView || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(loop);
  };
  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };
  function kick() {
    if (inView && !document.hidden) start();
    else renderer.render(scene, camera);
  }

  const io = new IntersectionObserver((entries) => {
    inView = entries.some((e) => e.isIntersecting);
    if (inView) start();
    else stop();
  });
  io.observe(wrap);
  const onVis = () => (document.hidden ? stop() : start());
  document.addEventListener("visibilitychange", onVis);
  const ro = new ResizeObserver(resize);
  ro.observe(wrap);

  resize();
  setCount(initialCount);

  return {
    setCount,
    dispose() {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}

export default function CrateScene({ count }) {
  const stageRef = useRef(null);
  const apiRef = useRef(null);
  const countRef = useRef(count);
  const [active, setActive] = useState(false);

  useEffect(() => {
    countRef.current = count;
    apiRef.current?.setCount(count);
  }, [count]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined" || typeof ResizeObserver === "undefined") return;
    if (!hasWebGL()) return;
    let disposed = false;
    import("three")
      .then((THREE) => {
        if (disposed || !stageRef.current) return;
        const api = initScene(THREE, stageRef.current, countRef.current);
        if (!api) return;
        apiRef.current = api;
        setActive(true);
      })
      .catch(() => {});
    return () => {
      disposed = true;
      apiRef.current?.dispose();
      apiRef.current = null;
    };
  }, []);

  return (
    <figure className={`crate-stage ${active ? "is-3d" : ""}`}>
      <div className="crate-stage-inner" ref={stageRef}>
        <img
          src="/section-2.webp"
          alt="Ilustrační obrázek vytvořený pomocí AI, nejde o skutečnou akci ani realizaci firmy"
          className="crate-fallback"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="crate-caption">
        {active ? "Dekorativní 3D náhled: každá bedna je jedna položka ve vaší poptávce." : "Ilustrační AI obrázek – nejde o realizaci firmy."}
      </figcaption>
    </figure>
  );
}
