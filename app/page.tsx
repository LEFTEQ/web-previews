import type { CSSProperties } from "react";

export const metadata = {
  title: "BICYKLY.CZ — servis a stavba kol, Ostrava",
  description:
    "Servis jízdních kol a zakázková stavba v Ostravě na Nádražní. Zapletená kola Industry Nine, systém Powerplay Rocky Mountain, testovací kola.",
};

const servisy = [
  {
    kod: "S1",
    nazev: "Prohlídka a seřízení",
    popis:
      "Kolo na stojanu projedeme od hlavy k patě: řazení, brzdy, vůle v ložiskách, tlak i stav plášťů. Řekneme rovnou, co snese do sezóny a co je na výměnu.",
    detail: "od 690 Kč · hotovo do 3 dnů",
  },
  {
    kod: "S2",
    nazev: "Zapletená kola na míru",
    popis:
      "Splétáme ruční kola na nábojích Industry Nine — vy si vyberete barvu paprsků a zátěž, my dodržíme přesný tah drátů. Kolo, které drží pravdu i po roce v terénu.",
    detail: "náboje i9 · barevné paprsky · centrování na desetinky",
  },
  {
    kod: "S3",
    nazev: "Servis pohonu Powerplay",
    popis:
      "Elektrokola Rocky Mountain se systémem Powerplay umíme rozebrat i diagnostikovat — motor, baterie, aktualizace firmwaru. Bez čekání na servis kdesi za hranicí.",
    detail: "autorizovaný přístup · diagnostika na místě",
  },
  {
    kod: "S4",
    nazev: "Zakázková stavba kola",
    popis:
      "Postavíme kolo přesně na vaši postavu, terén a peněženku — rám, komponenty, geometrie. Než něco objednáme, sedneme si a probereme, kde jezdíte.",
    detail: "konzultace zdarma · komponenty Garbaruk",
  },
];

const duvody = [
  {
    cislo: "01",
    tit: "Kamenná prodejna, ne jen e-shop",
    text: "Nádražní 385/34, Moravská Ostrava. Přijďte s kolem, ne s objednávkovým číslem.",
  },
  {
    cislo: "02",
    tit: "Testovací kola k vyzkoušení",
    text: "Než utratíte desítky tisíc, projedete se. Půjčíme testovací kolo přímo z prodejny.",
  },
  {
    cislo: "03",
    tit: "Regionální exkluzivita značek",
    text: "Rocky Mountain, Industry Nine, Garbaruk — v regionu jen u nás, se servisem od stejných lidí.",
  },
];

export default function Page() {
  return (
    <main className="bx">
      <header className="bx-top">
        <a className="bx-logo" href="#" aria-label="BICYKLY.CZ — úvod">
          <span className="bx-logo-mark" aria-hidden="true">
            <span className="bx-spoke" />
            <span className="bx-spoke" />
            <span className="bx-spoke" />
          </span>
          <span className="bx-logo-word">
            BICYKLY<span className="bx-logo-dot">.cz</span>
          </span>
        </a>
        <div className="bx-top-right">
          <span className="bx-hours">Po–Pá 10–18</span>
          <a className="bx-phone" href="tel:+420773594957">
            773 594 957
          </a>
        </div>
      </header>

      <section className="bx-hero" aria-labelledby="bx-hero-tit">
        <div className="bx-hero-img">
          <img
            src="/hero.webp"
            alt="Ruční stavba jízdního kola v dílně BICYKLY.CZ v Ostravě"
            loading="eager"
          />
        </div>
        <div className="bx-hero-body">
          <p className="bx-eyebrow">Servis &amp; stavba kol · Ostrava-Nádražní</p>
          <h1 id="bx-hero-tit" className="bx-hero-tit">
            Kolo,
            <br />
            které drží
            <br />
            <span className="bx-hl">pravdu.</span>
          </h1>
          <p className="bx-hero-lead">
            Splétáme, seřizujeme a stavíme kola ručně — dráty se doťahují na
            desetinky, náboje Industry Nine drží, řazení sedí. Přivezte kolo,
            řekneme vám na rovinu, co potřebuje.
          </p>
          <div className="bx-hero-cta">
            <a className="bx-btn" href="tel:+420773594957">
              Objednat na servis
            </a>
            <a className="bx-btn bx-btn-ghost" href="#servis">
              Co umíme
            </a>
          </div>
        </div>
        <div className="bx-truings" aria-hidden="true">
          <span>0,00</span>
          <span>0,05</span>
          <span>0,10</span>
          <span>0,15</span>
        </div>
      </section>

      <section className="bx-section" id="servis" aria-labelledby="bx-servis-tit">
        <div className="bx-sec-head">
          <p className="bx-eyebrow">Dílna</p>
          <h2 id="bx-servis-tit" className="bx-sec-tit">
            Čtyři věci, které tu
            <br />
            uděláme líp než jinde
          </h2>
        </div>

        <div className="bx-sec-media">
          <img
            src="/section-1.webp"
            alt="Detail zapletených kol s barevnými paprsky Industry Nine"
            loading="lazy"
          />
        </div>

        <ol className="bx-list">
          {servisy.map((s) => (
            <li className="bx-item" key={s.kod}>
              <span className="bx-item-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="bx-item-body">
                <h3 className="bx-item-tit">{s.nazev}</h3>
                <p className="bx-item-text">{s.popis}</p>
                <p className="bx-item-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bx-trust" aria-labelledby="bx-trust-tit">
        <div className="bx-trust-grid">
          <div className="bx-trust-media">
            <img
              src="/section-2.webp"
              alt="Showroom BICYKLY.CZ na Nádražní ulici v Ostravě"
              loading="lazy"
            />
          </div>
          <div className="bx-trust-text">
            <p className="bx-eyebrow bx-eyebrow-dark">Proč k nám</p>
            <h2 id="bx-trust-tit" className="bx-sec-tit bx-sec-tit-dark">
              Lidi od kol,
              <br />
              ne skladníci
            </h2>
            <p className="bx-trust-lead">
              Trh je přeplněný značkami a kategoriemi. My jsme malá ostravská
              parta, která kolům rozumí a postaví vám takové, co vydrží tu
              vaši trať — od Beskyd po městské kostky.
            </p>
            <dl className="bx-trust-list">
              {duvody.map((d) => (
                <div className="bx-trust-row" key={d.cislo}>
                  <dt className="bx-trust-num">{d.cislo}</dt>
                  <dd>
                    <span className="bx-trust-row-tit">{d.tit}</span>
                    <span className="bx-trust-row-text">{d.text}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="bx-trust-addr">
              Nádražní 385/34, Moravská Ostrava a Přívoz ·{" "}
              <a href="mailto:bicykly@bicykly.cz">bicykly@bicykly.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
