import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storex FST — pneuservis a autoservis, Ústí nad Labem",
  description:
    "Pneuservis a autoservis v Ústí nad Labem s 33 lety praxe. Přezutí, uskladnění pneu, čištění klimatizace i servis pro firemní flotily. Rezervujte termín online.",
};

const sluzby = [
  {
    kod: "01",
    nazev: "Přezutí a vyvážení",
    popis:
      "Osobní i dodávková vozidla přezujeme na počkání. Kola vyvážíme na moderní vyvažovačce, aby volant za jízdy neházel a pneu se sjížděly rovnoměrně.",
    detail: "osobní · dodávková · SUV",
  },
  {
    kod: "02",
    nazev: "Uskladnění pneu",
    popis:
      "Sezónní sadu vám uložíme do vytápěného skladu. Na jaře i na podzim vám dáme vědět, kdy je čas přijet, a kola máme připravená.",
    detail: "vytápěný sklad · značené sady",
  },
  {
    kod: "03",
    nazev: "Nákladní a zemědělská technika",
    popis:
      "Zvládáme i velké rozměry — nákladní vozy, traktory, zemní a industriální stroje. Máme na to techniku i lidi, kteří s tím pracují roky.",
    detail: "nákladní · zemědělské · industriální",
  },
  {
    kod: "04",
    nazev: "Autoservis a klimatizace",
    popis:
      "K pneuservisu jsme přidali běžnou údržbu — výměnu olejů, brzdy, kontroly a čištění klimatizace. Jedno zastavení místo tří.",
    detail: "údržba · brzdy · čištění klima",
  },
];

const duvody = [
  { c: "33", label: "let na trhu s pneumatikami" },
  { c: "7", label: "prodejen v Česku" },
  { c: "2", label: "pobočky přímo v Ústí nad Labem" },
];

export default function Page() {
  return (
    <main className="sx-main">
      <header className="sx-nav">
        <a className="sx-brand" href="#" aria-label="Storex FST — domů">
          <span className="sx-brand-mark" aria-hidden="true">
            <span className="sx-tread" />
          </span>
          <span className="sx-brand-word">
            STOREX<span className="sx-brand-fst">FST</span>
          </span>
        </a>
        <nav className="sx-nav-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="sx-nav-cta" href="#rezervace">Rezervovat přezutí</a>
        </nav>
      </header>

      <section className="sx-hero" aria-labelledby="sx-hero-title">
        <div className="sx-hero-media">
          <img
            src="/hero.webp"
            alt="Mechanik při přezutí kola v pneuservisu Storex FST v Ústí nad Labem"
            className="sx-hero-img"
            width={1600}
            height={1100}
          />
          <div className="sx-hero-scrim" aria-hidden="true" />
        </div>
        <div className="sx-hero-inner">
          <p className="sx-eyebrow">Pneuservis &amp; autoservis · Ústí nad Labem</p>
          <h1 id="sx-hero-title" className="sx-hero-title">
            Přezouváme
            <br />
            <span className="sx-hero-accent">na počkání</span>
            <br />
            už třiatřicet let.
          </h1>
          <p className="sx-hero-lede">
            Sadu z osobáku i kola z traktoru zvládneme stejně dobře. Domluvte si termín
            online, přijeďte a odjeďte — o uskladnění staré sady se postaráme.
          </p>
          <div className="sx-hero-actions">
            <a className="sx-btn sx-btn-primary" href="#rezervace">Rezervovat přezutí</a>
            <a className="sx-btn sx-btn-ghost" href="#sluzby">Co všechno umíme</a>
          </div>
          <dl className="sx-hero-stats">
            {duvody.map((d) => (
              <div key={d.label} className="sx-stat">
                <dt className="sx-stat-num">{d.c}</dt>
                <dd className="sx-stat-label">{d.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="sx-services" id="sluzby" aria-labelledby="sx-services-title">
        <div className="sx-section-head">
          <p className="sx-eyebrow sx-eyebrow-dark">Co pro vás uděláme</p>
          <h2 id="sx-services-title" className="sx-h2">
            Od jednoho kola<br />po celou flotilu
          </h2>
          <p className="sx-section-note">
            Nejsme jen „gumárna“. Kombinujeme pneuservis s běžnou údržbou, takže auto
            odevzdáte na jednom místě a vyzvednete připravené.
          </p>
        </div>

        <ol className="sx-service-list">
          {sluzby.map((s) => (
            <li key={s.kod} className="sx-service">
              <span className="sx-service-kod" aria-hidden="true">{s.kod}</span>
              <div className="sx-service-body">
                <h3 className="sx-service-nazev">{s.nazev}</h3>
                <p className="sx-service-popis">{s.popis}</p>
                <p className="sx-service-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sx-service-figure">
          <img
            src="/section-1.webp"
            alt="Regály s uskladněnými pneumatikami ve skladu Storex FST"
            className="sx-figure-img"
            width={1400}
            height={900}
          />
        </figure>
      </section>

      <section className="sx-about" id="onas" aria-labelledby="sx-about-title">
        <figure className="sx-about-figure">
          <img
            src="/section-2.webp"
            alt="Pracoviště pneuservisu Storex FST s montážním strojem na pneumatiky"
            className="sx-figure-img"
            width={1400}
            height={1000}
          />
        </figure>
        <div className="sx-about-body" id="rezervace">
          <p className="sx-eyebrow sx-eyebrow-dark">O nás · pro firmy i řidiče</p>
          <h2 id="sx-about-title" className="sx-h2">
            Místní servis, který znáte<br />jménem, ne číslem zakázky
          </h2>
          <p className="sx-about-text">
            Storex FST prodává a montuje pneumatiky přes tři desítky let. V Ústí nad Labem
            nás najdete na dvou pobočkách — v Žižkově a Havířské ulici — a jsme součástí sítě
            sedmi prodejen po celém Česku.
          </p>
          <p className="sx-about-text">
            Jezdí k nám řidiči s jedním autem i firmy s desítkami vozů. Všechny naše provozy
            jsou autorizované pro obsluhu vozidel v operativním leasingu, takže flotilu
            vyřídíme bez papírování navíc.
          </p>

          <ul className="sx-badges">
            <li className="sx-badge">Autorizováno pro operativní leasing</li>
            <li className="sx-badge">Online rezervace termínu</li>
            <li className="sx-badge">Čištění klimatizace</li>
          </ul>

          <div className="sx-about-cta">
            <a className="sx-btn sx-btn-primary" href="#rezervace">Rezervovat termín</a>
            <p className="sx-about-place">
              Žižkova 864/73, 400 01 Ústí nad Labem
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
