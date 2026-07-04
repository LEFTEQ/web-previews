import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zdravotní potřeby Horáčková — ortopedické pomůcky, Praha 8 Kobylisy",
  description:
    "Ortopedické a kompenzační pomůcky, zdravotní obuv, ortézy a kompresní punčochy. Poradíme vám s výběrem osobně na provozovně v Kobylisích i v dalších pobočkách. Zboží na poukaz objednáte přes zásilkový výdej.",
  openGraph: {
    title: "Zdravotní potřeby Horáčková — ortopedické pomůcky",
    description:
      "Zdravotní obuv, ortézy, kompresní punčochy a kompenzační pomůcky. Osobní poradenství na provozovnách v Praze a Polabí. Zboží na poukaz vyřídíme za vás.",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/hero.webp" }],
  },
};

const kategorie = [
  {
    nazev: "Zdravotní obuv",
    popis:
      "Vyzkoušíme velikost i našlápnutí přímo na místě. Obuv pro citlivé nohy, po operacích i na každý den.",
  },
  {
    nazev: "Ortézy",
    popis:
      "Fixace kolena, kotníku, zápěstí i páteře. Změříme obvod a doporučíme správnou míru a tuhost.",
  },
  {
    nazev: "Kompresní punčochy",
    popis:
      "Přeměříme nohu a vybereme kompresní třídu podle poukazu i doporučení lékaře.",
  },
  {
    nazev: "Vložky a korektory",
    popis:
      "Ortopedické vložky do bot, korektory palců a klenby. Poradíme podle otisku i vašich potíží.",
  },
  {
    nazev: "Kompenzační pomůcky",
    popis:
      "Hole, chodítka, nástavce na WC a madla. Pomůžeme vybrat to, co doma opravdu využijete.",
  },
  {
    nazev: "Antidekubitní pomůcky",
    popis:
      "Polohovací a antidekubitní podložky pro dlouhodobě ležící. Poradíme s péčí i údržbou.",
  },
];

const provozovny = [
  {
    mesto: "Praha 8 — Kobylisy",
    adresa: "Klapkova 46",
    tel: "602 391 707",
    hodiny: "Po–Pá 9:00–17:30",
  },
  {
    mesto: "Čelákovice",
    adresa: "Masarykova 212/11",
    tel: "602 571 390",
    hodiny: "Po–Pá 8:30–17:30, So 8:30–11:30",
  },
  {
    mesto: "Kralupy nad Vltavou",
    adresa: "Mostní 934, areál nemocnice",
    tel: "315 704 412",
    hodiny: "Po–Čt 8:00–16:00, Pá 8:00–15:00",
  },
  {
    mesto: "Lysá nad Labem",
    adresa: "Masarykova 739/8",
    tel: "606 098 111",
    hodiny: "Po–Pá 8:30–17:30, So 8:30–11:30",
  },
  {
    mesto: "Poděbrady",
    adresa: "Palackého 240",
    tel: "602 656 945",
    hodiny: "Po–Pá 8:30–17:30, So 8:30–11:30",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#uvod" aria-label="Zdravotní potřeby Horáčková, úvod">
          <span className="wordmark-mark" aria-hidden="true">
            <span className="cross-h" />
            <span className="cross-v" />
          </span>
          <span className="wordmark-text">
            <span className="wordmark-name">Horáčková</span>
            <span className="wordmark-sub">zdravotní potřeby</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#pomucky">Pomůcky</a>
          <a href="#provozovny">Provozovny</a>
          <a className="nav-call" href="tel:+420602391707">602&nbsp;391&nbsp;707</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-copy">
          <p className="eyebrow">Ortopedické pomůcky · Praha 8 a Polabí</p>
          <h1 className="hero-title">
            Pomůcku vám <em>vyzkoušíme</em>, než ji koupíte.
          </h1>
          <p className="hero-lede">
            Zdravotní obuv, ortézy a kompresní punčochy nejsou zboží od stolu.
            Přeměříme, vyzkoušíme a poradíme osobně — na pěti kamenných
            provozovnách. Zboží na poukaz za vás vyřídíme přes zásilkový výdej.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#provozovny">
              Najít nejbližší výdejnu
            </a>
            <a className="btn btn-ghost" href="tel:+420602391707">
              Zavolat na Kobylisy
            </a>
          </div>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Odborné měření a výběr ortopedické pomůcky na provozovně Zdravotní potřeby Horáčková"
            width={1200}
            height={1400}
          />
          <figcaption className="hero-badge">
            <span className="hero-badge-num">na míru</span>
            <span className="hero-badge-label">výběr přímo na pobočce</span>
          </figcaption>
        </figure>
      </section>

      <section className="pomucky" id="pomucky" aria-labelledby="pomucky-nadpis">
        <div className="section-head">
          <p className="eyebrow">Co u nás vyřešíte</p>
          <h2 id="pomucky-nadpis" className="section-title">
            Šest oborů, ve kterých se opravdu vyznáme
          </h2>
          <p className="section-lede">
            Většinu pomůcek proplácí zdravotní pojišťovna na poukaz. Přineste ho
            k nám — s papíry, mírami i objednávkou vám pomůžeme.
          </p>
        </div>

        <ul className="cards">
          {kategorie.map((k, i) => (
            <li className="card" key={k.nazev}>
              <span className="card-idx" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="card-title">{k.nazev}</h3>
              <p className="card-text">{k.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Regály s ortopedickou obuví, ortézami a kompenzačními pomůckami ve výdejně"
            width={1600}
            height={800}
          />
        </figure>
      </section>

      <section className="provozovny" id="provozovny" aria-labelledby="prov-nadpis">
        <div className="prov-grid">
          <div className="prov-intro">
            <p className="eyebrow">Kde nás najdete</p>
            <h2 id="prov-nadpis" className="section-title">
              Pět výdejen, kam se dá přijít bez objednání
            </h2>
            <p className="section-lede">
              Rodinná firma Horáčková provozuje kamenné prodejny zdravotních
              potřeb v Praze i v Polabí. Zastavte se, zavolejte, nebo si nechte
              zboží na poukaz poslat přes zásilkový výdej.
            </p>
            <figure className="prov-media">
              <img
                src="/section-2.webp"
                alt="Prodavačka pomáhá zákazníkovi s výběrem zdravotní obuvi na provozovně"
                width={1000}
                height={1200}
              />
            </figure>
          </div>

          <ul className="prov-list">
            {provozovny.map((p) => (
              <li className="prov-item" key={p.mesto}>
                <div className="prov-place">
                  <h3 className="prov-city">{p.mesto}</h3>
                  <p className="prov-addr">{p.adresa}</p>
                  <p className="prov-hours">{p.hodiny}</p>
                </div>
                <a
                  className="prov-tel"
                  href={`tel:+420${p.tel.replace(/\s/g, "")}`}
                >
                  {p.tel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
