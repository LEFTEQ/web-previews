import { AiImage } from "./_ui";

// The effleurage stroke — a single continuous line that swells thick then
// tapers thin, drawn like a masseur's long gliding hand-pass. Each variant
// is a different gesture (swell centred, left, or right; different weight).
const STROKE = {
  center:
    "M0,10 C300,3 500,2 700,5 C900,8 1100,10 1200,10 C1100,11.5 900,15 700,17 C500,20 300,19 0,10 Z",
  left:
    "M0,10 C200,1.5 360,0.5 520,4 C780,9.5 1020,11 1200,11 C1020,12 780,14.5 520,17.5 C360,21 200,20 0,10 Z",
  right:
    "M0,11 C300,10.5 560,9.5 760,6 C920,3 1060,2 1200,10 C1060,12.5 920,14.5 760,16.5 C560,20 300,21 0,11 Z",
  long:
    "M0,10 C400,5 700,4 900,6 C1050,7.5 1130,9 1200,10 C1130,11 1050,13 900,15 C700,17.5 400,18 0,10 Z",
};

function Stroke({
  variant,
  className = "",
  once = false,
}: {
  variant: keyof typeof STROKE;
  className?: string;
  once?: boolean;
}) {
  return (
    <svg
      className={`efl ${once ? "efl--once" : "efl--draw"} ${className}`}
      viewBox="0 0 1200 20"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={STROKE[variant]} fill="currentColor" />
    </svg>
  );
}

const SERVICES = [
  {
    name: "Klasická masáž zad a šíje",
    meta: "30–50 min · od 450 Kč",
    desc: "Uvolní ztuhlou trapézovku a bederní páteř po dlouhém sezení u počítače. Nejčastější volba našich klientů z okolí Horního náměstí.",
    stroke: "center" as const,
  },
  {
    name: "Sportovní a hluboká tkáňová",
    meta: "60 min · 790 Kč",
    desc: "Intenzivní práce do hloubky svalu — na přetížené nohy po běhu kolem Poděbrad i na regeneraci před závodem.",
    stroke: "right" as const,
  },
  {
    name: "Relaxační celotělová s aromaterapií",
    meta: "90 min · 1090 Kč",
    desc: "Dlouhé, plynulé tahy teplým mandlovým olejem a vůně dle vaší nálady. Devadesát minut, kdy nemusíte nikam spěchat.",
    stroke: "long" as const,
  },
  {
    name: "Lymfatická masáž",
    meta: "60 min · 750 Kč",
    desc: "Jemná, rytmická technika, která rozproudí mízu a odlehčí oteklým nohám — vhodná i po cestování nebo v létě.",
    stroke: "left" as const,
  },
  {
    name: "Masáž lávovými kameny",
    meta: "75 min · 990 Kč",
    desc: "Prohřáté čedičové kameny prohřejí sval dřív, než se ho ruce dotknou. Hluboké teplo pro chladné dny.",
    stroke: "center" as const,
  },
  {
    name: "Těhotenská masáž",
    meta: "50 min · 690 Kč",
    desc: "Šetrná úleva pro záda a nohy ve druhém a třetím trimestru, v polohách, které jsou pro vás pohodlné a bezpečné.",
    stroke: "right" as const,
  },
];

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="band band--hero">
        <div className="wrap hero">
          <p className="eyebrow eyebrow--light">Masérské studio · Olomouc</p>

          <div className="ave">
            <span className="ave__mark">AVE</span>
            <Stroke variant="long" className="ave__underline" once />
          </div>

          <h1 className="hero__title">
            Ruce, které tělu
            <br />
            vrátí klid.
          </h1>

          <p className="hero__lead">
            Klasické, sportovní i relaxační masáže v centru Olomouce. Objednejte
            se na termín, který sedne vašemu tělu i diáři — a odejděte lehčí,
            než jste přišli.
          </p>

          <div className="cta-row">
            <a className="btn btn--primary" href="tel:+420775204060">
              Zavolat a objednat
            </a>
            <a className="btn btn--ghost" href="#nabidka">
              Prohlédnout masáže
            </a>
          </div>

          <p className="hero__note">
            Denisova 12, Olomouc · po předchozím objednání · Po–Pá 8–20, So 9–14
          </p>
        </div>
      </section>

      {/* NABÍDKA */}
      <section className="band band--services" id="nabidka">
        <div className="divider divider--amber" aria-hidden="true">
          <Stroke variant="center" />
        </div>

        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow">Co u nás vyberete</p>
            <h2 className="sec-title">Nabídka masáží</h2>
            <p className="sec-intro">
              Každá masáž je jiný pohyb ruky. Vyberte podle toho, co vaše tělo
              zrovna potřebuje — poradíme i na místě.
            </p>
          </header>

          <div className="svc-grid">
            {SERVICES.map((s) => (
              <article className="svc" key={s.name}>
                <div className="svc__head">
                  <h3 className="svc__name">{s.name}</h3>
                  <span className="svc__meta">{s.meta}</span>
                </div>
                <div className="svc__stroke" aria-hidden="true">
                  <Stroke variant={s.stroke} />
                </div>
                <p className="svc__desc">{s.desc}</p>
              </article>
            ))}
          </div>

          <p className="svc-foot">
            Dárkové poukazy na jakoukoli masáž vystavíme na počkání — oblíbený
            tip pod stromeček i k narozeninám.
          </p>
        </div>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section className="band band--trust">
        <div className="divider divider--chalk" aria-hidden="true">
          <Stroke variant="left" />
        </div>

        <div className="wrap trust">
          <div className="trust__intro">
            <p className="eyebrow eyebrow--light">Proč AVE Studio</p>
            <h2 className="sec-title sec-title--light">
              Osm let praxe a jedny ruce, které si pamatujete.
            </h2>
            <p className="trust__lead">
              Studio vede Ave Nováková, certifikovaná masérka se zdravotnickým
              vzděláním. Žádná konvejrová linka — v jednom čase je tu jen jeden
              klient a jeden pár rukou, který se věnuje právě vám.
            </p>

            <ul className="facts">
              <li className="fact">
                <span className="fact__k">8 let</span>
                <span className="fact__v">praxe s masáží zad, sportovní i lymfatickou technikou</span>
              </li>
              <li className="fact">
                <span className="fact__k">2 min</span>
                <span className="fact__v">pěšky od Horního náměstí, bezbariérový vstup z Denisovy</span>
              </li>
              <li className="fact">
                <span className="fact__k">1 : 1</span>
                <span className="fact__v">vždy jen vy a masérka, bez spěchu a bez přeobjednávání</span>
              </li>
            </ul>
          </div>

          <div className="trust__quotes">
            <figure className="quote">
              <blockquote>
                „Chodím na záda po dlouhých směnách v nemocnici. Po klasické
                masáži jsem poprvé za měsíce prospala celou noc.“
              </blockquote>
              <figcaption>— Petra K., Olomouc</figcaption>
            </figure>
            <figure className="quote">
              <blockquote>
                „Hluboká tkáňová mi zachránila přípravu na půlmaraton. Ave přesně
                věděla, kde to bude bolet, a proč.“
              </blockquote>
              <figcaption>— Martin V., Nová Ulice</figcaption>
            </figure>

            <a className="btn btn--primary btn--wide" href="tel:+420775204060">
              Zavolat: 775 204 060
            </a>
            <p className="trust__hours">
              Nezvedneme to hned? Napište na <a href="mailto:ahoj@avestudio.cz">ahoj@avestudio.cz</a>,
              ozveme se do konce dne.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
