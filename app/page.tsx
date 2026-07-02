// V-PODLAHY, s.r.o. — podlahářství, Ústí nad Labem
// Náhledový web: hero + 2 obsahové sekce. Signature prvek: „parketový
// rybinový vzor“ (herringbone) postavený čistě z CSS bloků — vizuál řemesla
// přenesený do layoutu. Bez footeru a bez závěrečné CTA sekce (doplní studio).

export const metadata = {
  title: "V-PODLAHY | Podlahářství Ústí nad Labem — pokládka, renovace, vyrovnání",
  description:
    "Podlahářství V-PODLAHY z Ústí nad Labem: pokládka vinylu, dřeva a laminátu, broušení a renovace parket, vyrovnání podkladu. Zaměření a nezávazná kalkulace zdarma.",
  openGraph: {
    title: "V-PODLAHY — podlahářství Ústí nad Labem",
    description:
      "Pokládka vinylu, dřeva a laminátu, renovace parket, příprava podkladu. Ústí nad Labem a okolí.",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%232B2118'/><path d='M6 8 L14 16 L6 24' stroke='%23D98E32' stroke-width='4' fill='none'/><path d='M16 8 L24 16 L16 24' stroke='%23E8DCC8' stroke-width='4' fill='none'/></svg>`
      ),
  },
};

const sluzby = [
  {
    krok: "Zaměření",
    nazev: "Přijedeme a změříme zdarma",
    text: "Do dvou dnů přijedeme k vám — do bytu, domu i provozovny v Ústí a okolí. Změříme plochu, zkontrolujeme podklad vlhkoměrem a na místě řekneme, co doporučujeme a proč.",
  },
  {
    krok: "Podklad",
    nazev: "Vyrovnání a příprava podkladu",
    text: "Nerovný beton nebo starý potěr srovnáme samonivelační stěrkou. Podklad je 80 % výsledku — proto ho nikdy nepřeskakujeme, i když to prodlouží práci o den.",
  },
  {
    krok: "Pokládka",
    nazev: "Vinyl, dřevo, laminát i PVC",
    text: "Lepený i click vinyl, třívrstvé dřevo, laminát, PVC a koberce. Materiál vám přivezeme na výběr domů — vzorky položíme přímo na vaši podlahu, ve vašem světle.",
  },
  {
    krok: "Renovace",
    nazev: "Broušení a olejování parket",
    text: "Staré parkety zbrousíme do čistého dřeva, vytmelíme spáry a zakončíme olejem nebo lakem. Původní vzor po dědečkovi zachráníme častěji, než byste čekali.",
  },
];

const duvody = [
  {
    cislo: "18 let",
    text: "pokládáme podlahy v Ústí nad Labem, Teplicích a Děčíně. Známe zdejší paneláky, prvorepublikové činžáky na Klíši i novostavby na Severní Terase.",
  },
  {
    cislo: "2 roky",
    text: "záruka na práci nad rámec záruky materiálu. Když spoj po roce lupne, přijedeme a opravíme ho. Bez diskuze a bez faktury.",
  },
  {
    cislo: "0 Kč",
    text: "za zaměření, konzultaci i kalkulaci. Cenu dostanete písemně, rozepsanou po položkách — materiál, podklad, práce, lišty. Žádná položka „ostatní“.",
  },
];

const reference = [
  {
    citace:
      "Byt 3+1 na Střekově, lepený vinyl v celém bytě včetně srovnání podkladu. Hotovo za tři dny, uklizeno, lišty sedí do milimetru.",
    autor: "paní Kroupová, Ústí nad Labem — Střekov",
  },
  {
    citace:
      "Zbrousili nám dubové parkety z roku 1962, které jsme chtěli původně vyhodit. Teď jsou to nejhezčí věc v celém domě.",
    autor: "rodina Šimkova, Trmice",
  },
];

export default function Page() {
  return (
    <main className="vp">
      {/* ===== HERO ===== */}
      <header className="vp-hero">
        <div className="vp-topbar">
          <span className="vp-wordmark" aria-label="V-PODLAHY">
            <span className="vp-wordmark-v" aria-hidden="true">V</span>
            <span className="vp-wordmark-txt">PODLAHY</span>
          </span>
          <a className="vp-topbar-tel" href="tel:+420475000000">
            +420 475 000 000
          </a>
        </div>

        <div className="vp-hero-grid">
          <div className="vp-hero-copy">
            <p className="vp-eyebrow">Podlahářství · Ústí nad Labem a okolí</p>
            <h1 className="vp-h1">
              Podlaha se pokládá\u00a0
              <em className="vp-h1-em">lamela po\u00a0lamele.</em>
              <br />
              My u toho jsme od\u00a0první do\u00a0poslední.
            </h1>
            <p className="vp-hero-perex">
              Pokládka vinylu, dřeva a laminátu, renovace starých parket a
              vyrovnání podkladu. Zaměříme zdarma, cenu dáme písemně a na
              práci držíme dvouletou záruku.
            </p>
            <div className="vp-hero-akce">
              <a className="vp-btn" href="tel:+420475000000">
                Zavolat a domluvit zaměření
              </a>
              <a className="vp-btn vp-btn--tichy" href="mailto:info@v-podlahy.cz">
                Napsat e-mail
              </a>
            </div>
            <p className="vp-hero-pozn">
              Zaměření a kalkulace zdarma · Ústí n. L., Teplice, Děčín
            </p>
          </div>

          {/* Signature: rybinový (herringbone) vzor z CSS lamel */}
          <div className="vp-parkety" aria-hidden="true">
            <div className="vp-lamela l1" />
            <div className="vp-lamela l2" />
            <div className="vp-lamela l3" />
            <div className="vp-lamela l4" />
            <div className="vp-lamela l5" />
            <div className="vp-lamela l6" />
            <div className="vp-lamela l7" />
            <div className="vp-lamela l8" />
            <div className="vp-lamela l9" />
            <div className="vp-lamela l10" />
            <div className="vp-lamela l11" />
            <div className="vp-lamela l12" />
          </div>
        </div>

        <div className="vp-hero-lista" aria-hidden="true">
          <span>vinyl</span>
          <span className="vp-lista-tecka">·</span>
          <span>třívrstvé dřevo</span>
          <span className="vp-lista-tecka">·</span>
          <span>laminát</span>
          <span className="vp-lista-tecka">·</span>
          <span>PVC</span>
          <span className="vp-lista-tecka">·</span>
          <span>renovace parket</span>
          <span className="vp-lista-tecka">·</span>
          <span>samonivelační stěrky</span>
        </div>
      </header>

      {/* ===== SEKCE 1: JAK PRACUJEME / SLUŽBY ===== */}
      <section className="vp-sekce" aria-labelledby="sluzby-h">
        <div className="vp-sekce-hlava">
          <p className="vp-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="vp-h2">
            Od zaměření po poslední lištu
          </h2>
          <p className="vp-sekce-perex">
            Podlaha je pořadí kroků, které nejde přeskočit. Takhle jdou po
            sobě u nás — a u každého kroku víte, co se děje a kolik stojí.
          </p>
        </div>

        <ol className="vp-sluzby">
          {sluzby.map((s, i) => (
            <li className="vp-sluzba" key={s.krok}>
              <div className="vp-sluzba-znacka" aria-hidden="true">
                <span className="vp-sluzba-sipka">❯</span>
                <span className="vp-sluzba-krok">{s.krok}</span>
              </div>
              <h3 className="vp-h3">{s.nazev}</h3>
              <p className="vp-text">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / REFERENCE ===== */}
      <section className="vp-sekce vp-sekce--tmava" aria-labelledby="duvera-h">
        <div className="vp-sekce-hlava">
          <p className="vp-eyebrow vp-eyebrow--svetly">Proč lidé volají zpátky nám</p>
          <h2 id="duvera-h" className="vp-h2 vp-h2--svetly">
            Řemeslo z Ústí, ne z katalogu
          </h2>
        </div>

        <div className="vp-duvody">
          {duvody.map((d) => (
            <div className="vp-duvod" key={d.cislo}>
              <p className="vp-duvod-cislo">{d.cislo}</p>
              <p className="vp-duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="vp-reference">
          {reference.map((r) => (
            <figure className="vp-ref" key={r.autor}>
              <blockquote className="vp-ref-citace">„{r.citace}“</blockquote>
              <figcaption className="vp-ref-autor">{r.autor}</figcaption>
            </figure>
          ))}
        </div>

        <p className="vp-aktualnost">
          Ceník i termíny průběžně aktualizujeme — naposledy v\u00a0únoru 2025.
        </p>
      </section>
    </main>
  );
}
