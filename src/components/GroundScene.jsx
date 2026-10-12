import { useEffect, useRef, useState } from 'react';
import { GroundFallback } from './Drawings.jsx';

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

/** Vykreslí 3D blok zeminy se sítěmi. Rotace je vázaná na scroll — nic se necyklí. */
function initScene(THREE, host, onReady) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  host.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 4 / 3, 0.1, 100);
  camera.position.set(6.4, 4.4, 8.6);
  camera.lookAt(0, -0.15, 0);

  const geos = [];
  const mats = [];
  const group = new THREE.Group();
  scene.add(group);

  const edgeMat = new THREE.LineBasicMaterial({ color: 0x3b2e22, transparent: true, opacity: 0.35 });
  mats.push(edgeMat);

  const addBox = (w, h, d, color, x, y, z) => {
    const g = new THREE.BoxGeometry(w, h, d);
    const m = new THREE.MeshStandardMaterial({ color, roughness: 0.95, metalness: 0 });
    geos.push(g);
    mats.push(m);
    const mesh = new THREE.Mesh(g, m);
    mesh.position.set(x, y, z);
    group.add(mesh);
    const eg = new THREE.EdgesGeometry(g);
    geos.push(eg);
    const lines = new THREE.LineSegments(eg, edgeMat);
    lines.position.copy(mesh.position);
    group.add(lines);
  };

  let top = 1.6;
  [
    [0.4, 0x3b2e22],
    [1.2, 0xa8714a],
    [0.9, 0x8a5c3c],
    [0.7, 0x9c978d],
  ].forEach(([h, c]) => {
    addBox(4, h, 2.4, c, 0, top - h / 2, 0);
    top -= h;
  });
  addBox(1.7, 0.12, 2.4, 0x4a4743, 1.15, 1.66, 0);

  const addPipe = (r, color, x, y) => {
    const g = new THREE.CylinderGeometry(r, r, 3.3, 32);
    const m = new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0 });
    geos.push(g);
    mats.push(m);
    const mesh = new THREE.Mesh(g, m);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.set(x, y, 0);
    group.add(mesh);
  };
  addPipe(0.17, 0x1e6fb8, -1.0, 0.25);
  addPipe(0.24, 0x6b4a2b, 0.2, -0.35);
  [1.05, 1.2, 1.35].forEach((x) => addPipe(0.05, 0xc8321e, x, 0.85));

  scene.add(new THREE.HemisphereLight(0xfaf8f3, 0x3b2e22, 1.1));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(5, 8, 6);
  scene.add(sun);

  let visible = false;
  let raf = 0;
  let current = -0.45;
  let target = -0.45;

  const computeTarget = () => {
    const r = host.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
    target = -0.55 + p * 0.95;
  };
  const frame = () => {
    raf = 0;
    current += (target - current) * 0.12;
    group.rotation.y = current;
    renderer.render(scene, camera);
    if (Math.abs(target - current) > 0.0008 && visible && !document.hidden) {
      raf = requestAnimationFrame(frame);
    }
  };
  const kick = () => {
    if (!visible || document.hidden) return;
    computeTarget();
    if (!raf) raf = requestAnimationFrame(frame);
  };
  const stopLoop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
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

  const ro = new ResizeObserver(() => {
    resize();
    kick();
  });
  ro.observe(host);
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) kick();
    else stopLoop();
  });
  io.observe(host);
  const onVis = () => (document.hidden ? stopLoop() : kick());
  window.addEventListener('scroll', kick, { passive: true });
  document.addEventListener('visibilitychange', onVis);

  computeTarget();
  current = target;
  group.rotation.y = current;
  resize();
  onReady();

  return () => {
    stopLoop();
    ro.disconnect();
    io.disconnect();
    window.removeEventListener('scroll', kick);
    document.removeEventListener('visibilitychange', onVis);
    geos.forEach((g) => g.dispose());
    mats.forEach((m) => m.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
    canvas.remove();
  };
}

export function GroundScene() {
  const hostRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let teardown = null;
    let cancelled = false;

    const stop = () => {
      cancelled = true;
      if (teardown) {
        teardown();
        teardown = null;
      }
      setReady(false);
    };
    const start = () => {
      cancelled = false;
      if (mq.matches || teardown || !hasWebGL()) return;
      import('three')
        .then((THREE) => {
          if (cancelled || mq.matches || teardown) return;
          try {
            teardown = initScene(THREE, el, () => setReady(true));
          } catch {
            teardown = null;
          }
        })
        .catch(() => {});
    };
    const onChange = () => (mq.matches ? stop() : start());

    start();
    mq.addEventListener('change', onChange);
    return () => {
      mq.removeEventListener('change', onChange);
      stop();
    };
  }, []);

  return (
    <figure className="min-w-0">
      <div ref={hostRef} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-loam/15 bg-stake">
        <div className={`absolute inset-0 transition-opacity duration-300 ${ready ? 'opacity-0' : 'opacity-100'}`}>
          <GroundFallback />
        </div>
      </div>
      <figcaption className="mt-2 text-sm text-loam/75">
        Schematický řez terénem: vodovod (modrá), kanalizace (hnědá) a kabely (červená) pod povrchem a komunikací. Ilustrace, nikoli projektový výkres.
      </figcaption>
    </figure>
  );
}
