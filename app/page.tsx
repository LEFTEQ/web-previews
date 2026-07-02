// SPORTCENTRUM DELFÍN — České Budějovice
// Návrh: „vlna delfína" — plavná sinusová linka jako signature prvek,
// hluboká bazénová modř + korálová (tep, výkon). Typograficky vedený hero.

const dnesniLekce = [
  { cas: "8:30", nazev: "Body Balance", trener: "Lukáš", typ: "klid" },
  { cas: "15:30", nazev: "Pilates", trener: "Danča", typ: "klid" },
  { cas: "17:30", nazev: "Power Yoga", trener: "Majda", typ: "střed" },
  { cas: "18:30", nazev: "Body Forming", trener: "Lukáš", typ: "střed" },
  { cas: "19:30", nazev: "Spinning", trener: "Pavel", typ: "nálož" },
];

const sluzby = [
  {
    nazev: "Sálové lekce",
    popis:
      "Spinning, Power Yoga, Pilates, Body Forming a další. Přes 30 lekcí týdně od rána do večera — vyberete si, ať pracujete na směny, nebo od devíti do pěti.",
    detail: "30+ lekcí týdně",
  },
  {
    nazev: "BODYTEC — EMS trénink",
    popis:
      "20 minut s elektrostimulací zapojí svaly, na které klasické cvičení nedosáhne. Trénujete jeden na jednoho s trenérem, ideální když máte málo času.",
    detail: "20 min = plný trénink",
  },
  {
    nazev: "Rázová vlna",
    popis:
      "Úleva od bolesti ramen, loktů, pat i zad. Neinvazivní terapie, kterou u nás vede fyzioterapeut — často stačí 3–5 sezení.",
    detail: "úleva od bolesti",
  },
  {
    nazev: "Masáže a fyzioterapie",
    popis:
      "Regenerace po tréninku i pomoc s dlouhodobými potížemi. Sportovní masáž, měkké techniky, individuální plán od fyzioterapeuta.",
    detail: "regenerace na míru",
  },
];

const treneri = [
  { jmeno: "Lukáš Haas", role: "Body Balance · Body Forming" },
  { jmeno: "Jitka Záhorková Nitrianská", role: "Pilates · zdravá záda" },
  { jmeno: "Lucie Veithová", role: "Power Yoga" },
  { jmeno: "Adéla Machová", role: "jóga · protažení" },
  { jmeno: "Jan Csóka", role: "Spinning · kondice" },
  { jmeno: "Tomáš Cibulka", role: "BODYTEC · silový trénink" },
];

function Vlna({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 160"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 80 C 150 10, 300 10, 450 80 S 750 150, 900 80 S 1150 10, 1200 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="vlna-path"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="delfin">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <span className="wordmark">
            DEL<span className="wordmark-flip">F</span>ÍN
            <span className="wordmark-sub">sportcentrum · České Budějovice</span>
          </span>
          <a className="nav-cta" href="#rozvrh">
            Dnešní rozvrh
          </a>
        </nav>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Boženy Němcové, České Budějovice · dnes otevřeno 6:30–21:30
          </p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Změňte</span>
            <span className="hero-line hero-line-2">svůj&nbsp;rytmus</span>
            <span className="hero-line hero-line-3">
              s&nbsp;Delfínem<span className="tecka">.</span>
            </span>
          </h1>
          <Vlna className="hero-vlna" />
          <p className="hero-perex">
            Fitness, sálové lekce, BODYTEC i fyzioterapie pod jednou střechou.
            První návštěva je u nás zdarma — přijďte si vyzkoušet lekci, která
            vás bude bavit.
          </p>
          <div className="hero-akce">
            <a className="btn btn-hlavni" href="#rozvrh">
              Chci první lekci zdarma
            </a>
            <a className="btn btn-tichy" href="#sluzby">
              Co u nás najdete
            </a>
          </div>
          <dl className="hero-fakta">
            <div>
              <dt>Po–Pá</dt>
              <dd>6:30–21:30</dd>
            </div>
            <div>
              <dt>So–Ne</dt>
              <dd>7:30–21:00</dd>
            </div>
            <div>
              <dt>Recepce</dt>
              <dd>
                <a href="tel:+420387872950">387 872 950</a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ---------- SLUŽBY + ROZVRH ---------- */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <h2 id="sluzby-nadpis">Od první lekce po regeneraci</h2>
          <p>
            Nejsme jen posilovna. Delfín je místo, kde zvládnete celý cyklus:
            trénink, protažení i úlevu od bolesti — bez ježdění po městě.
          </p>
        </div>

        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.nazev} className="sluzba">
              <p className="sluzba-detail">{s.detail}</p>
              <h3>{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="rozvrh" id="rozvrh">
          <div className="rozvrh-hlava">
            <h3>Dnes na sále</h3>
            <p>
              Místo si rezervujete online nebo telefonicky na recepci. Na první
              lekci stačí přijít 15 minut předem.
            </p>
          </div>
          <ol className="rozvrh-seznam">
            {dnesniLekce.map((l) => (
              <li key={l.cas + l.nazev} className="lekce">
                <time className="lekce-cas">{l.cas}</time>
                <span className="lekce-nazev">{l.nazev}</span>
                <span className="lekce-trener">vede {l.trener}</span>
                <span className={`lekce-typ typ-${l.typ === "klid" ? "klid" : l.typ === "střed" ? "stred" : "naloz"}`}>
                  {l.typ}
                </span>
              </li>
            ))}
          </ol>
          <p className="rozvrh-pozn">
            Tempo lekce: <strong>klid</strong> — vhodné pro každého ·{" "}
            <strong>střed</strong> — zapotíte se · <strong>nálož</strong> — pro
            zkušené
          </p>
        </div>
      </section>

      {/* ---------- TÝM / DŮVĚRA ---------- */}
      <section className="tym" aria-labelledby="tym-nadpis">
        <div className="sekce-hlava sekce-hlava-svetla">
          <h2 id="tym-nadpis">U nás cvičí všichni</h2>
          <p>
            Od lidí, co začínají po letech u počítače, po závodníky. Trenéři vás
            znají jménem, hlídají techniku a lekce přizpůsobí tomu, jak na tom
            zrovna jste.
          </p>
        </div>

        <ul className="tym-seznam">
          {treneri.map((t) => (
            <li key={t.jmeno} className="trener">
              <span className="trener-inicialy" aria-hidden="true">
                {t.jmeno
                  .split(" ")
                  .slice(0, 2)
                  .map((c) => c[0])
                  .join("")}
              </span>
              <span className="trener-jmeno">{t.jmeno}</span>
              <span className="trener-role">{t.role}</span>
            </li>
          ))}
        </ul>

        <div className="duvera">
          <blockquote className="citace">
            <Vlna className="citace-vlna" />
            <p>
              „Přišla jsem s bolavými zády na fyzioterapii a zůstala na
              Pilates. Za půl roku mě záda přestala budit — a ráno se do
              Delfína vlastně těším.“
            </p>
            <cite>— členka klubu, České Budějovice</cite>
          </blockquote>
          <dl className="duvera-fakta">
            <div>
              <dt>Otevřeno denně</dt>
              <dd>i o víkendu od 7:30</dd>
            </div>
            <div>
              <dt>7 trenérů a instruktorů</dt>
              <dd>certifikace na každou lekci</dd>
            </div>
            <div>
              <dt>Delfín Café</dt>
              <dd>káva a svačina po tréninku</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
