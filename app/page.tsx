import { AiImage } from "./_ui";
import { WordmarkWash } from "./motion";

const programy = [
  {
    n: "01",
    name: "PĚNA",
    color: "var(--signal)",
    text: "Aktivní pěna se nanese po celém laku a rozpustí hmyz, silniční sůl i hrubou špínu — aby ji tlak nešoupal po plechu.",
    cena: "od 30 Kč",
  },
  {
    n: "02",
    name: "MYTÍ",
    color: "var(--cyan)",
    text: "Vysokotlaká lance a horká voda. Smyje pěnu i nečistotu z prahů, masky, disků i kol — přesně tam, kam ji namíříte.",
    cena: "od 30 Kč",
  },
  {
    n: "03",
    name: "VOSK",
    color: "var(--amber)",
    text: "Horký vosk uzavře lak. Voda z něj pak stéká v kapkách a auto schne bez map a zaschlých kruhů.",
    cena: "od 25 Kč",
  },
  {
    n: "04",
    name: "OPLACH",
    color: "var(--foam)",
    text: "Závěrečný oplach demi vodou. Voda bez minerálů zaschne do lesku, na skle ani laku nezůstanou šmouhy.",
    cena: "od 20 Kč",
  },
];

const duvody = [
  {
    k: "Nonstop, 7 dní v týdnu",
    v: "Boxy jsou otevřené ve dne v noci. Myjete, kdy se vám to hodí — po směně, před schůzkou i o víkendu.",
  },
  {
    k: "Platíte jen za skutečný čas",
    v: "Samoobsluha na žetony a mince. Žádné balíčky navíc — spotřebujete jen program a minuty, které opravdu vyjezdíte.",
  },
  {
    k: "I na dodávku nebo se střešním nosičem",
    v: "Boxy mají dostatečnou výšku i šířku. Bez problému projede velké SUV, dodávka i auto s boxem na střeše.",
  },
  {
    k: "Vysavače a ofuk hned u boxu",
    v: "Po umytí rovnou vyluxujete interiér a ofouknete zrcátka i kliky. Všechno na jednom místě, bez přejíždění.",
  },
];

function SprayArc({ variant }: { variant: "cyan" | "amber" }) {
  const stroke = variant === "cyan" ? "var(--cyan)" : "var(--amber)";
  const dots = [
    [872, 40, 3.2], [908, 33, 2.2], [948, 47, 2.8], [986, 29, 1.8],
    [1024, 52, 3.4], [1064, 37, 2.1], [1102, 60, 2.6], [1138, 31, 1.9],
    [1168, 50, 3.0], [1190, 40, 1.7],
  ];
  return (
    <div className="arc" aria-hidden="true">
      <svg viewBox="0 0 1200 130" preserveAspectRatio="none" role="presentation">
        <path
          className="arc-path"
          d="M0,104 C230,26 580,20 830,58 C998,84 1116,74 1200,44"
          fill="none"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <g className="arc-spatter" fill={stroke}>
          {dots.map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <span className="topbar-mark">
          MYJE<span className="dot">·</span>TO
        </span>
        <a className="btn btn-topbar" href="tel:—" aria-label="Zavolat na myčku">
          Zavolat
        </a>
      </header>

      {/* ── HERO / asfalt ── */}
      <section className="band band-hero" aria-labelledby="hero-h">
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Auto ve vysokotlaké samoobslužné myčce, tryskající proud vody na lak"
            className="hero-img"
          />
        </div>
        <div className="hero-inner">
          <p className="eyebrow eyebrow-light">Samoobslužná myčka · Plzeň · nonstop</p>
          <h1 id="hero-h" className="hero-h">
            <WordmarkWash />
          </h1>
          <p className="hero-sub">
            Zajeďte do boxu, hoďte žeton a projeďte si celý program sami —
            pěna, vysoký tlak, vosk a oplach demi vodou. Auto máte čisté za pár minut
            a za pár korun.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:—">Zavolat</a>
            <a className="btn btn-ghost" href="#program">Jak to funguje</a>
          </div>
          <p className="hero-note">Otevřeno teď a každý den — žádné čekání, žádné objednání.</p>
        </div>
      </section>

      <SprayArc variant="cyan" />

      {/* ── PROGRAM / pěna → mytí → vosk → oplach ── */}
      <section className="band band-program" id="program" aria-labelledby="prog-h">
        <div className="wrap">
          <p className="eyebrow">Program na kolečku</p>
          <h2 id="prog-h" className="section-h">Čtyři kroky od zaparkování k lesku</h2>
          <p className="section-lede">
            Na ovládacím panelu v boxu přepínáte program po programu — v tomhle pořadí.
            Každý běží, dokud ho nezastavíte, takže platíte přesně za to, co spotřebujete.
          </p>
          <ol className="program-list">
            {programy.map((p) => (
              <li className="prog" key={p.n}>
                <span className="prog-bar" style={{ background: p.color }} aria-hidden="true" />
                <span className="prog-num">{p.n}</span>
                <div className="prog-body">
                  <h3 className="prog-name">{p.name}</h3>
                  <p className="prog-text">{p.text}</p>
                </div>
                <span className="prog-cena">{p.cena}</span>
              </li>
            ))}
          </ol>
          <p className="program-foot">
            Žetony koupíte v automatu u vjezdu — na mince i bezkontaktně. Nevyjeté minuty
            propadnou jen tehdy, když program sami vypnete, jinak dojede do konce.
          </p>
        </div>
      </section>

      <SprayArc variant="amber" />

      {/* ── PROČ MY / důvěra + pobočka ── */}
      <section className="band band-trust" aria-labelledby="trust-h">
        <div className="wrap trust-grid">
          <div className="trust-copy">
            <p className="eyebrow eyebrow-light">Kde nás v Plzni najdete</p>
            <h2 id="trust-h" className="section-h section-h-light">
              Sedm boxů, otevřeno, když ostatní zavírají
            </h2>
            <p className="section-lede section-lede-light">
              Vysokotlaká technologie, demi voda pro sušení bez map a dost místa i pro velká
              auta. Žádná obsluha vám nediktuje tempo — myčku máte celou jen pro sebe.
            </p>
            <ul className="duvody">
              {duvody.map((d) => (
                <li className="duvod" key={d.k}>
                  <h3 className="duvod-k">{d.k}</h3>
                  <p className="duvod-v">{d.v}</p>
                </li>
              ))}
            </ul>
            <div className="kontakt" aria-label="Kontakt a poloha">
              <div className="kontakt-row">
                <span className="kontakt-l">Kde</span>
                <span className="kontakt-v">—, Plzeň</span>
              </div>
              <div className="kontakt-row">
                <span className="kontakt-l">Telefon</span>
                <span className="kontakt-v">—</span>
              </div>
              <div className="kontakt-row">
                <span className="kontakt-l">E-mail</span>
                <span className="kontakt-v">—</span>
              </div>
              <div className="kontakt-cta">
                <a className="btn btn-primary" href="tel:—">Zavolat</a>
                <a className="btn btn-ghost btn-ghost-light" href="#program">Navigovat na myčku</a>
              </div>
            </div>
          </div>
          <div className="trust-media">
            <AiImage
              src="/section-2.webp"
              alt="Řidič drží vysokotlakou lanci a myje přední masku svého auta v boxu"
              className="trust-img"
            />
            <figure className="trust-card">
              <AiImage
                src="/section-1.webp"
                alt="Nastříkaná aktivní pěna stékající po laku vozu"
                className="trust-card-img"
              />
              <figcaption className="trust-card-cap">
                Aktivní pěna v prvním kroku programu
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
