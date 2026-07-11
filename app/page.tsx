import type { ReactNode } from "react";

const bestsellers = [
  { name: "Hovězí mleté s červenou řepou", unit: "1 kg", price: "69", tag: "Hovězí" },
  { name: "Masová směs EXTRA — hovězí, kuřecí, vepřové", unit: "1 kg", price: "55", tag: "Směs" },
  { name: "Kuřecí krky", unit: "1 kg", price: "63", tag: "Kuřecí" },
  { name: "Kuřecí salám syrový", unit: "1 kg", price: "38", tag: "Kuřecí" },
  { name: "Losos s kuřecím", unit: "1 kg", price: "49", tag: "Ryby" },
  { name: "Masová směs Baryk", unit: "1 ks", price: "83", tag: "Směs" }
];

const novinky = [
  { name: "Šproty sušené", unit: "70 g", price: "67" },
  { name: "Krůtí sval mletý s chrupavkou", unit: "1 kg", price: "93" },
  { name: "Buvolí ucho", unit: "1 ks", price: "33" },
  { name: "Bílá ryba", unit: "1 kg", price: "77" },
  { name: "Pasta z kuřecích kostí", unit: "0,5 kg", price: "46" },
  { name: "Extrudované BARF s kelpou", unit: "1 kg", price: "104" }
];

const rozvozy = [
  { line: "Trasa A + B", day: "každé úterý", note: "odpoledne a podvečer" },
  { line: "Trasa C", day: "každou středu", note: "uzávěrka den předem ve 14:00" }
];

function Paw(): ReactNode {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="paw">
      <ellipse cx="32" cy="42" rx="16" ry="13" />
      <ellipse cx="14" cy="26" rx="6.5" ry="8.5" />
      <ellipse cx="26" cy="17" rx="6" ry="9" />
      <ellipse cx="40" cy="17" rx="6" ry="9" />
      <ellipse cx="52" cy="26" rx="6.5" ry="8.5" />
    </svg>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Štěkej.cz — syrové krmivo pro psy, Ostrava">
          <span className="brand-mark"><Paw /></span>
          <span className="brand-word">Štěkej<span className="brand-dot">.cz</span></span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Do misky</a>
          <a href="#o-nas">O prodejně</a>
          <a href="#rozvozy">Rozvozy</a>
        </nav>
        <a className="topcart" href="#nabidka">Nakoupit maso</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Řeznictví pro psy &middot; Ostrava-Poruba</p>
          <h1>
            Syrové maso,<br />
            <em>jak by si ho pes</em><br />
            koupil sám.
          </h1>
          <p className="lead">
            BARF, vnitřnosti, kosti i hotovky &bdquo;šup s tím do misky&ldquo;. Čerstvé
            navážíme na prodejně na Heyrovského, nebo přivezeme domů — trasy A, B a C každý týden.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#nabidka">Vybrat maso do misky</a>
            <a className="btn btn-ghost" href="#rozvozy">Kdy k nám jede rozvoz</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Prodejna</dt><dd>Heyrovského 5, Poruba</dd></div>
            <div><dt>Otevřeno</dt><dd>Po–Pá 10–18</dd></div>
            <div><dt>Objednávky</dt><dd>eshop &amp; telefon</dd></div>
          </dl>
        </div>
        <figure className="hero-figure">
          <img src="/hero.webp" alt="Čerstvé syrové maso a masové směsi pro psy z prodejny Štěkej.cz" />
          <figcaption>Naváženo dnes ráno v Porubě.</figcaption>
        </figure>
      </section>

      <section className="section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Nejčastěji do misky</p>
          <h2 id="nabidka-h">Co si psi &bdquo;objednávají&ldquo; nejvíc</h2>
          <p className="section-sub">
            Ceny jsou za balení tak, jak ho dostanete z pultu. Vše syrové, chlazené,
            připravené k rozmražení do misky.
          </p>
        </div>

        <ul className="pricelist">
          {bestsellers.map((p) => (
            <li className="row" key={p.name}>
              <span className="row-tag">{p.tag}</span>
              <span className="row-name">{p.name}</span>
              <span className="row-unit">{p.unit}</span>
              <span className="row-price">{p.price}<span className="kc">Kč</span></span>
            </li>
          ))}
        </ul>

        <div className="newshelf">
          <figure className="newshelf-fig">
            <img src="/section-1.webp" alt="Nově přidané zboží ze sortimentu Štěkej.cz — sušené pamlsky a doplňky pro BARF" />
          </figure>
          <div className="newshelf-body">
            <p className="eyebrow">Nově na pultě</p>
            <h3>Čerstvé přírůstky do sortimentu</h3>
            <ul className="minilist">
              {novinky.map((p) => (
                <li key={p.name}>
                  <span>{p.name} <em>{p.unit}</em></span>
                  <span className="mini-price">{p.price} Kč</span>
                </li>
              ))}
            </ul>
            <a className="btn btn-primary" href="#o-nas">Celý sortiment v eshopu</a>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="o-nas" aria-labelledby="onas-h">
        <div className="about">
          <figure className="about-fig">
            <img src="/section-2.webp" alt="Prodejna Štěkej.cz s krmivem a doplňky pro psy v Ostravě-Porubě" />
          </figure>
          <div className="about-body">
            <p className="eyebrow">O prodejně</p>
            <h2 id="onas-h">Pes je masožravec. My tomu věříme od roku, kdy jsme začali.</h2>
            <p>
              Ve Štěkej.cz vybíráme syrové maso, vnitřnosti a kosti tak, jak dávají
              smysl pro krmení podle BARF. Poradíme, co do misky patří, kolik toho a v jaké
              skladbě — ať už krmíte jednoho jezevčíka, nebo smečku vlčáků.
            </p>
            <ul className="trust">
              <li>
                <strong>Kamenná prodejna v Porubě</strong>
                Heyrovského 5 — přijďte si maso prohlédnout a navážit osobně.
              </li>
              <li>
                <strong>Poradíme s přechodem na BARF</strong>
                Mýty o syrovém krmení, skladba misky i množství podle váhy psa.
              </li>
              <li>
                <strong>Yoggies, granule i doplňky</strong>
                Oleje, řasy, probiotika, parožené pamlsky i osoblažský med.
              </li>
            </ul>
          </div>
        </div>

        <div className="delivery" id="rozvozy">
          <div className="delivery-head">
            <p className="eyebrow">Rozvozy domů</p>
            <h3>Přivezeme maso až k vám</h3>
          </div>
          <ul className="routes">
            {rozvozy.map((r) => (
              <li key={r.line}>
                <span className="route-line">{r.line}</span>
                <span className="route-day">{r.day}</span>
                <span className="route-note">{r.note}</span>
              </li>
            ))}
          </ul>
          <p className="delivery-contact">
            Objednávky přes eshop nebo na <a href="tel:+420739247267">+420&nbsp;739&nbsp;247&nbsp;267</a>,
            e-mail <a href="mailto:eshop@stekej.cz">eshop@stekej.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
