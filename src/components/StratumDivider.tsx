import { useDrawOnView } from "../hooks/useDrawOnView";

type Variant = "clay" | "water" | "rubble" | "ink";

const W = 1440;

function contour(variant: Variant): [number, number][] {
  const pts: [number, number][] = [];
  if (variant === "water") {
    for (let x = 0; x <= W; x += 24) {
      pts.push([x, 46 + 5 * Math.sin(x / 140) + 2 * Math.sin(x / 53)]);
    }
  } else if (variant === "rubble") {
    let i = 0;
    for (let x = 0; x <= W; x += 34) {
      const jitter = ((i * 37) % 23) - 11;
      pts.push([x, 44 + jitter * 0.9 + (i % 2 ? 9 : -7)]);
      i++;
    }
    pts[pts.length - 1] = [W, 44];
  } else {
    const phase = variant === "ink" ? 2.1 : 0.6;
    for (let x = 0; x <= W; x += 20) {
      pts.push([x, 44 + 13 * Math.sin(x / 210 + phase) + 5 * Math.sin(x / 77) + 2 * Math.sin(x / 23)]);
    }
  }
  if (pts[pts.length - 1][0] !== W) pts.push([W, pts[pts.length - 1][1]]);
  return pts.map(([x, y]) => [Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
}

function toPath(pts: [number, number][]) {
  return pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
}

type Props = {
  id: string;
  variant: Variant;
  from: string;
  to: string;
  stroke: string;
  hatch: string;
};

export default function StratumDivider({ id, variant, from, to, stroke, hatch }: Props) {
  const ref = useDrawOnView<HTMLDivElement>();
  const pts = contour(variant);
  const line = toPath(pts);
  const depth = variant === "water" ? 22 : 16;
  const lower = [...pts].reverse().map(([x, y]) => `L${x} ${Math.round((y + depth) * 10) / 10}`).join(" ");
  const hatchArea = `${line} ${lower} Z`;
  const patternId = `hatch-${id}`;

  return (
    <div ref={ref} className="contour" aria-hidden="true" style={{ background: to }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[54px] w-full md:h-[84px]" focusable="false">
        <defs>
          <pattern id={patternId} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="9" stroke={hatch} strokeWidth="1.4" />
          </pattern>
        </defs>
        <path d={`${line} L${W} 0 L0 0 Z`} fill={from} />
        <path d={hatchArea} fill={`url(#${patternId})`} opacity="0.6" />
        <path className="contour-line" d={line} pathLength={1} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
