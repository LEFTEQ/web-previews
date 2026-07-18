import { HeroHeadline, HeroGoniometer } from "./motion";

type Sluzba = {
  num: string;
  range: [number, number];
  color: string;
  title: string;
  body: string;
  detaily: string[];
};

const sluzby: Sluzba[] = [
  {
    num: "01",
    range: [0, 30],
    color: "var(--teal)",
    title: "Fyzioterapie a léčba bolesti",
    body:
      "Náprava bolestivých stavů pohybového aparátu — kolena, kyčle, ramena — i stavy po artroskopických operacích.",
    detaily: [
      "Bolesti zad a akutní blokády",
      "Degenerativní onemocnění páteře (výhřez, spondylolistéza)",
      "Rehabilitace po operaci páteře i kloubů",
    ],
  },
  {
    num: "02",
    range: [30, 60],
    color: "var(--coral)",
    title: "Orgánová terapie a úrazy",
    body:
      "Orgánová terapie, hlavně jícnový reflux (GERD/NERD) — kdy problém vnitřního orgánu má odezvu v pohybu a naopak.",
    detaily: [
      "Sportovní úrazy u amatérských sportovců",
      "Přetížení z tréninku i z práce",
      "Provázání vnitřních orgánů a pohybového aparátu",
    ],
  },
  {
    num: "03",
    range: [60, 90],
    color: "var(--brass)",
    title: "Problematika nohou",
    body:
      "Podiatrie, podologie a ortotika — bolesti chodidel i individuálně vyráběné stélky (Formthotics, Schein, Vasyli).",
    detaily: [
      "Ostruhy, vbočené palce, únavové syndromy",
      "Vývoj dětské nohy, plochonoží, růstové bolesti",
      "Stélky měřené přesně na tvoje chodidlo",
    ],
  },
];

function arcPoint(a: number, r: number, cx: number, cy: number): [number, number] {
  const rad = (a * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy - r * Math.sin(rad)];
}

function arcPath(a0: number, a1: number, r: number, cx: number, cy: number): string {
  const [x0, y0] = arcPoint(a0, r, cx, cy);
  const [x1, y1] = arcPoint(a1, r, cx, cy);
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 0 0 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

function ServiceArc({ range, color }: { range: [number, number]; color: string }) {
  const cx = 14;
  const cy = 116;
  const r = 100;
  const ticks: number[] = [];
  for (let a = 0; a <= 90; a += 15) ticks.push(a);
  return (
    <svg className="kx-svc-arc" viewBox="0 0 132 130" aria-hidden="true" focusable="false">
      <path d={arcPath(0, 90, r, cx, cy)} className="kx-svc-arc-base" />
      {ticks.map((a) => {
        const [ox, oy] = arcPoint(a, r, cx, cy);
        const [ix, iy] = arcPoint(a, r - 12, cx, cy);
        return (
          <line
            key={a}
            x1={ix.toFixed(2)}
            y1={iy.toFixed(2)}
            x2={ox.toFixed(2)}
            y2={oy.toFixed(2)}
            className="kx-svc-tick"
          />
        );
      })}
      <path
        d={arcPath(range[0], range[1], r, cx, cy)}
        className="kx-svc-arc-live"
        style={{ stroke: color }}
      />
      <circle cx={cx} cy={cy} r={5.5} className="kx-svc-pivot" style={{ fill: color }} />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="kx">
      <header className="kx-topbar">
        <a className="kx-wordmark" href="#uvod">
          <span className="kx-wordmark-name">Kineos</span>
          <span className="kx-wordmark-arc" aria-hidden="true" />
          <span className="kx-wordmark-sub">fyziocentrum · Plzeň</span>
        </a>
        <a className="kx-btn kx-btn-ghost" href="tel:+420777111222">Zavolat</a>
      </header>

      <section className="kx-section kx-hero" id="uvod">
        <div className="kx-hero-copy">
          <HeroHeadline />
          <p className="kx-lede">
            To se stává. Snížená pohyblivost přichází od sezení v kanceláři i v autě,
            z vrozených vad, po úrazech a přetížení. Poradíme si i tam, kde už to
            skoro vzdáváš — vždycky se snažím přijít problému na kloub :)
          </p>
          <div className="kx-hero-actions">
            <a className="kx-btn kx-btn-solid" href="tel:+420777111222">Objednat se</a>
            <a className="kx-btn kx-btn-ghost" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
          </div>
          <p className="kx-hero-note">
            Tomáš Mráz, fyzioterapeut — alej u Ukázkové 123, Plzeň.
          </p>
        </div>
        <HeroGoniometer />
      </section>

      <section className="kx-section kx-services" id="pomoc">
        <div className="kx-section-head">
          <span className="kx-eyebrow">S čím pomáhám</span>
          <h2 className="kx-h2">Tři oblasti, jeden cíl — rozhýbat tě zpátky.</h2>
          <p className="kx-section-sub">
            Každá oblast má svůj rozsah pohybu. Vedu tě jeho obloukem od prvního
            stupně zpátky k plnému pohybu.
          </p>
        </div>
        <ul className="kx-svc-grid">
          {sluzby.map((s) => (
            <li key={s.num} className="kx-svc-card">
              <div className="kx-svc-top">
                <ServiceArc range={s.range} color={s.color} />
                <span className="kx-svc-range" style={{ color: s.color }}>
                  {s.range[0]}–{s.range[1]}°
                </span>
              </div>
              <span className="kx-svc-num">{s.num}</span>
              <h3 className="kx-svc-title">{s.title}</h3>
              <p className="kx-svc-body">{s.body}</p>
              <ul className="kx-svc-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="kx-section kx-trust" id="omne">
        <div className="kx-trust-grid">
          <div className="kx-trust-lead">
            <span className="kx-eyebrow">O mně</span>
            <blockquote className="kx-quote">
              „Jsem v pohybu. Pořád — v práci, s rodinou, na polních cestách i na
              horách. Vím, co pohyb znamená, a vím, jaké to je, když to nejde.
              Vždycky se snažím přijít problému na kloub.“
            </blockquote>
            <p className="kx-quote-by">
              <strong>Tomáš Mráz</strong> — fyzioterapeut, Kineos fyziocentrum
            </p>
            <p className="kx-trust-place">
              Najdeš mě na adrese Ukázková 123, Plzeň. Termíny domlouvám telefonicky
              na 777 111 222 nebo e-mailem na info@example.cz.
            </p>
          </div>
          <ul className="kx-trust-points">
            <li className="kx-trust-point">
              <span className="kx-trust-badge">HTTPS</span>
              <h3>Zabezpečené spojení</h3>
              <p>
                Web běží celý na HTTPS. Tvoje zdravotní údaje po cestě nikdo nečte —
                základ pro zdravotnickou službu.
              </p>
            </li>
            <li className="kx-trust-point">
              <span className="kx-trust-badge">2025</span>
              <h3>Aktuální obsah</h3>
              <p>
                Naposledy upraveno v květnu 2025. Ceny, metody i volné termíny
                sedí — žádné roky staré informace.
              </p>
            </li>
            <li className="kx-trust-point">
              <span className="kx-trust-badge">&lt;1 MB</span>
              <h3>Načte se hned</h3>
              <p>
                Odlehčeno pod 1 MB bez těžkých knihoven. Otevře se rychle i na
                horším signálu a neseká se při klikání.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
