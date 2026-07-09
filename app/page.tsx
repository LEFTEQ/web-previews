import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      c: "C",
      cislo: "01",
      nazev: "Grafika a DTP",
      popis:
        "Vizuální identita, tiskoviny, sazba a příprava dat pro tisk. Od loga po velkoformát — vždy s korektními křivkami a přesnou barevností CMYK.",
      polozky: ["Logo a značka", "Katalogy a letáky", "Sazba a předtisková příprava"],
    },
    {
      c: "M",
      cislo: "02",
      nazev: "Web a multimédia",
      popis:
        "Internetové a multimediální prezentace, které se otevřou na mobilu i na plátně. Rychlé, bezpečné přes HTTPS a připravené na sdílení.",
      polozky: ["Internetové prezentace", "Multimediální prezentace", "Náhledy pro sociální sítě"],
    },
    {
      c: "Y",
      cislo: "03",
      nazev: "IT a správa sítí",
      popis:
        "Hardware, software a správa sítí pod jednou střechou. Postaráme se o techniku, ať se vy staráte o svoje zákazníky.",
      polozky: ["Hardware a software", "Správa sítí", "Servis a údržba"],
    },
    {
      c: "K",
      cislo: "04",
      nazev: "Produkce a ozvučení",
      popis:
        "Produkční a reklamní služby i ozvučení akcí — od konference po koncert. Zvuk, technika a lidé, kteří vědí, kdy má být ticho.",
      polozky: ["Reklamní služby", "Ozvučení akcí", "Produkce na klíč"],
    },
  ];

  return (
    <main className="jn">
      {/* HERO */}
      <header className="jn-hero">
        <div className="jn-hero__bar">
          <a className="jn-mark" href="#top" id="top" aria-label="Jasnet — domů">
            <span className="jn-mark__dot" aria-hidden="true" />
            <span className="jn-mark__word">Jasnet</span>
            <span className="jn-mark__reg">spol. s r.o.</span>
          </a>
          <span className="jn-hero__loc">Grafické studio · Ústí nad Labem</span>
        </div>

        <div className="jn-hero__grid">
          <div className="jn-hero__copy">
            <p className="jn-eyebrow">Od návrhu po tisk, síť i pódium</p>
            <h1 className="jn-title">
              <span className="jn-title__line">Ostrá</span>
              <span className="jn-title__line jn-title__line--em">soutisk</span>
              <span className="jn-title__line">na každé zakázce.</span>
            </h1>
            <p className="jn-lede">
              Grafické a DTP studio v Ústí nad Labem. Skládáme značky, tiskoviny
              a weby do jednoho čistého obrazu — a když je potřeba, ještě to
              ozvučíme. Přesně na doraz, bez rozmazaných okrajů.
            </p>
            <div className="jn-cmyk" aria-hidden="true">
              <span style={{ "--i": "#00AEEF" } as CSSProperties}>Cyan</span>
              <span style={{ "--i": "#EC008C" } as CSSProperties}>Magenta</span>
              <span style={{ "--i": "#FFF200" } as CSSProperties}>Yellow</span>
              <span style={{ "--i": "#111014" } as CSSProperties}>Key</span>
            </div>
          </div>

          <figure className="jn-hero__fig">
            <img
              src="/hero.webp"
              alt="Detail práce grafického studia Jasnet — tiskové archy a barevné soutiskové značky"
              className="jn-hero__img"
              width={1200}
              height={1500}
            />
            <figcaption className="jn-hero__reg">
              <span>Soutisková značka</span>
              <span aria-hidden="true">＋</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="jn-sec jn-services" aria-labelledby="sluzby-nadpis">
        <div className="jn-sec__head">
          <p className="jn-eyebrow jn-eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis" className="jn-h2">
            Čtyři kanály, jedna dílna
          </h2>
          <p className="jn-sec__sub">
            Jako v tiskárně: barvy jedou zvlášť, ale výsledkem je jeden čistý
            tisk. U nás se grafika, web, síť i produkce potkají v jednom týmu.
          </p>
        </div>

        <figure className="jn-services__fig">
          <img
            src="/section-1.webp"
            alt="Pracoviště studia Jasnet — obrazovky s grafickým návrhem a barevné vzorníky"
            width={1400}
            height={800}
          />
        </figure>

        <ol className="jn-cards">
          {sluzby.map((s) => (
            <li key={s.cislo} className="jn-card">
              <span className="jn-card__chan" aria-hidden="true">
                {s.c}
              </span>
              <span className="jn-card__num">{s.cislo}</span>
              <h3 className="jn-card__title">{s.nazev}</h3>
              <p className="jn-card__desc">{s.popis}</p>
              <ul className="jn-card__list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="jn-sec jn-about" aria-labelledby="onas-nadpis">
        <div className="jn-about__grid">
          <figure className="jn-about__fig">
            <img
              src="/section-2.webp"
              alt="Tým studia Jasnet při přípravě zakázky v Ústí nad Labem"
              width={1000}
              height={1200}
            />
          </figure>

          <div className="jn-about__copy">
            <p className="jn-eyebrow jn-eyebrow--dark">Proč zrovna my</p>
            <h2 id="onas-nadpis" className="jn-h2">
              Ústecká dílna, která to umí od A do Z
            </h2>
            <p className="jn-about__lede">
              Jsme Jasnet, spol. s r.o. — grafické a DTP studio z Moskevské
              v Ústí nad Labem. Děláme grafiku, weby, staráme se o techniku
              i sítě a ozvučíme vám akci. Jeden partner místo pěti dodavatelů.
            </p>

            <dl className="jn-facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Moskevská 1365/3, 400 01 Ústí nad Labem</dd>
              </div>
              <div>
                <dt>Zavolejte</dt>
                <dd>
                  <a href="tel:+420475216528">+420 475 216 528</a>
                  <span aria-hidden="true"> · </span>
                  <a href="tel:+420475211620">+420 475 211 620</a>
                </dd>
              </div>
              <div>
                <dt>Napište nám</dt>
                <dd>
                  <a href="mailto:info@jasnet.cz">info@jasnet.cz</a>
                </dd>
              </div>
              <div>
                <dt>Servis a produkce</dt>
                <dd>
                  <a href="mailto:servis@jasnet.cz">servis@jasnet.cz</a>
                  <span aria-hidden="true"> · </span>
                  <a href="mailto:produkce@jasnet.cz">produkce@jasnet.cz</a>
                </dd>
              </div>
            </dl>

            <a className="jn-btn" href="tel:+420475216528">
              Zavolat do studia
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
