const PATHS = [
  'M0 40 V24 C70 16 140 30 230 22 S400 8 510 18 S690 32 820 20 S1010 6 1130 18 S1330 30 1440 16 V40 Z',
  'M0 40 V18 C110 28 200 10 320 20 S520 30 640 16 S860 6 980 22 S1200 30 1300 18 S1400 14 1440 22 V40 Z',
  'M0 40 V26 C90 12 210 26 300 18 S470 28 600 14 S780 24 900 26 S1100 8 1220 20 S1380 26 1440 12 V40 Z',
];

/** Nerovná hranice vrstev zeminy — horní okraj sekce. */
export function SoilEdge({ variant = 0, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 bottom-full -mb-px block h-5 w-full md:h-8 ${className}`}
    >
      <path d={PATHS[variant % PATHS.length]} fill="currentColor" />
    </svg>
  );
}
