import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autostory Plzeň – ověřené ojeté vozy s doživotní zárukou původu",
  description:
    "Autobazar Autostory v Plzni: vozy skutečně na provozovně, kontrola najetých kilometrů, doživotní záruka na legální původ. Financování i povinné ručení vyřídíme na místě. Volejte 608 11 44 22.",
  openGraph: {
    title: "Autostory Plzeň – ojeté vozy, které si prohlédnete naživo",
    description:
      "Každé auto máme fyzicky na dvoře v Plzni. Ověřený nájezd, doživotní záruka na původ, prohlídku vaším mechanikem vítáme.",
    type: "website",
    locale: "cs_CZ",
    siteName: "Autostory s.r.o.",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vozy na dvoře autobazaru Autostory v Plzni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autostory Plzeň – ojeté vozy s ověřeným původem",
    description:
      "Vozy skutečně na provozovně, kontrola nájezdu, doživotní záruka na legální původ. Plzeň.",
    images: ["/hero.webp"],
  },
};

const vozy = [
  {
    znacka: "Volkswagen Golf",
    verze: "1,6 TDI · klima · bez koroze",
    cena: "99 000",
    rok: "2012",
    palivo: "Nafta",
    detail:
      "První majitel, rozvody dělané ve 190 tis. km, olej vyměněný před 2 tis. km, absolutně bez koroze, dva klíče. Nová STK na 2 roky v ceně, s vozem lze ihned odjet.",
    stav: "Vlastníme, dovezli jsme sami",
  },
  {
    znacka: "Peugeot 207",
    verze: "1,6 i · 110 kW · digi klima · vyhřev",
    cena: "75 000",
    rok: "2007",
    palivo: "Benzín",
    detail:
      "První majitel, velice zachovalý a plně funkční vůz s bohatou výbavou, bez koroze. Nájezd na přání zdarma prověříme, s vozem lze ihned odjet.",
    stav: "Přihlášení vozidla jen 800 Kč",
  },
  {
    znacka: "Jeep Cherokee",
    verze: "2,2 M-Jet · Night Eagle · 1. maj.",
    cena: "259 000",
    rok: "2016",
    palivo: "Nafta",
    detail:
      "První majitel, pravidelný servis, rozvody dělané ve 134 tis. km (02/2023), absolutně bez koroze, dva klíče. Možnost prodloužené záruky až na 3 roky.",
    stav: "Vlastníme",
  },
];

const zaruky = [
  {
    cislo: "01",
    titul: "Auto tu opravdu stojí",
    text: "Každý inzerovaný vůz máme fyzicky na provozovně v Plzni. Přijeďte, sedněte si do něj, nastartujte. Nic neposíláme z fotky.",
  },
  {
    cislo: "02",
    titul: "Doživotní záruka na původ",
    text: "Na legální původ každého vozu dáváme doživotní záruku. Víte, co kupujete, a máte to černé na bílém.",
  },
  {
    cislo: "03",
    titul: "Ověřený nájezd",
    text: "Kontrolu najetých kilometrů vám na přání zdarma prověříme. Žádné stočené tachometry, žádné dohady.",
  },
  {
    cislo: "04",
    titul: "Přiveďte si mechanika",
    text: "Prohlídka vozu vaším mechanikem u nás není problém — naopak ji vítáme. Technický stav kontrolujeme u každého kusu.",
  },
];

export default function Page() {
  return (
    <main className="as">
      <header className="as-top">
        <a className="as-mark" href="#" aria-label="Autostory – domů">
          <span className="as-mark-word">Auto<em>story</em></span>
          <span className="as-mark-plz">Plzeň</span>
        </a>
        <nav className="as-nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#proc">Proč u nás</a>
          <a href="tel:+420608114422" className="as-nav-call">608 11 44 22</a>
        </nav>
      </header>

      <section className="as-hero">
        <div className="as-hero-media">
          <img
            src="/hero.webp"
            alt="Řada ojetých vozů připravených k prodeji na dvoře autobazaru Autostory v Plzni"
            className="as-hero-img"
          />
          <div className="as-hero-tag">
            <span className="as-hero-tag-dot" aria-hidden="true" />
            Dnes otevřeno 10:00–18:00
          </div>
        </div>
        <div className="as-hero-copy">
          <p className="as-eyebrow">Autobazar · Plzeň · od roku 2010</p>
          <h1 className="as-h1">
            Auto, které si<br />
            <span className="as-h1-accent">osaháte</span> dřív,<br />
            než ho koupíte.
          </h1>
          <p className="as-lead">
            Žádné fotky z ciziny. Každý vůz stojí na našem dvoře v Plzni, má ověřený
            nájezd a doživotní záruku na legální původ. Přijďte, prohlédněte si ho —
            klidně s vlastním mechanikem.
          </p>
          <div className="as-hero-actions">
            <a className="as-btn as-btn-primary" href="tel:+420608114422">Zavolat 608 11 44 22</a>
            <a className="as-btn as-btn-ghost" href="#nabidka">Prohlédnout vozy</a>
          </div>
          <dl className="as-hero-facts">
            <div>
              <dt>Vozy na dvoře</dt>
              <dd>Skladem k prohlídce</dd>
            </div>
            <div>
              <dt>Přihlášení</dt>
              <dd>Vyřídíme za 800 Kč</dd>
            </div>
            <div>
              <dt>Financování</dt>
              <dd>Sjednáme na místě</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="as-offer" id="nabidka">
        <div className="as-section-head">
          <p className="as-eyebrow">Nově na dvoře</p>
          <h2 className="as-h2">Vozy, které právě máme</h2>
          <p className="as-section-sub">
            Otevírací dobu máme pružnou — zavolejte prosím předem, ať se vám můžeme
            naplno věnovat a vůz pro vás nachystáme.
          </p>
        </div>

        <div className="as-offer-body">
          <img
            src="/section-1.webp"
            alt="Detail ojetého vozu z nabídky autobazaru Autostory"
            className="as-offer-photo"
          />
          <ul className="as-cards">
            {vozy.map((v) => (
              <li className="as-card" key={v.znacka + v.cena}>
                <div className="as-card-top">
                  <div>
                    <h3 className="as-card-title">{v.znacka}</h3>
                    <p className="as-card-verze">{v.verze}</p>
                  </div>
                  <p className="as-card-price">
                    {v.cena}<span>Kč</span>
                  </p>
                </div>
                <p className="as-card-detail">{v.detail}</p>
                <div className="as-card-meta">
                  <span className="as-chip">{v.rok}</span>
                  <span className="as-chip">{v.palivo}</span>
                  <span className="as-chip as-chip-alt">{v.stav}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="as-trust" id="proc">
        <div className="as-trust-grid">
          <div className="as-trust-intro">
            <p className="as-eyebrow as-eyebrow-light">Proč koupit u nás</p>
            <h2 className="as-h2 as-h2-light">
              Čtyři věci, za&nbsp;kterými si stojíme
            </h2>
            <p className="as-trust-text">
              Ojetina není loterie. U nás víte přesně, co kupujete — a proč je cena
              taková, jaká je. Vozy často vlastníme a sami je vozíme do Česka.
            </p>
            <img
              src="/section-2.webp"
              alt="Předání ojetého vozu zákazníkovi v autobazaru Autostory v Plzni"
              className="as-trust-photo"
            />
          </div>
          <ol className="as-trust-list">
            {zaruky.map((z) => (
              <li className="as-trust-item" key={z.cislo}>
                <span className="as-trust-num">{z.cislo}</span>
                <div>
                  <h3 className="as-trust-item-title">{z.titul}</h3>
                  <p className="as-trust-item-text">{z.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
