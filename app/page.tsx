import type { CSSProperties } from "react";

export default function Page() {
  const aplikace = [
    { k: "Slévárny a pece", t: "Horké spaliny, prach z tavby, jiskrová zátěž." },
    { k: "Svařovny", t: "Odtah svařovacího dýmu přímo od hořáku i celoplošně." },
    { k: "Brusírny", t: "Kovový a abrazivní prach, riziko výbušné směsi." },
    { k: "Dřevozpracující provozy", t: "Piliny, hobliny a jemný prach s odvodem odpadu." },
    { k: "Automotive", t: "Linky s vysokými nároky na čistotu a takt." },
    { k: "Potravinářské provozy", t: "Hygienicky nezávadný odtah a filtrace." },
    { k: "Kotle na tuhá paliva", t: "Odsávání kotelen, uhlí a koksu." },
    { k: "Centrální vysavače", t: "Rozvod podtlaku po celém provozu." }
  ];

  const produkty = [
    "Odsávací a filtrační zařízení",
    "Odlučovače",
    "Ventilátory",
    "Digestoře a odsávací kabiny",
    "Rekuperátory",
    "Rotační podavače a šnekové dopravníky"
  ];

  const dilna = [
    "pálicí laser",
    "CNC ohraňovací lis",
    "svařovna",
    "brusírna",
    "prášková lakovna",
    "tryskací automat",
    "šicí dílna",
    "montáž"
  ];

  return (
    <main className="cf">
      <header className="cf-top">
        <a className="cf-brand" href="#" aria-label="CIPRES FILTR Brno – domů">
          <span className="cf-brand-mark" aria-hidden="true">
            <span className="cf-airline" />
            <span className="cf-airline" />
            <span className="cf-airline" />
          </span>
          <span className="cf-brand-word">
            <b>CIPRES</b>
            <i>FILTR&nbsp;BRNO</i>
          </span>
        </a>
        <a className="cf-call" href="tel:+420545220506">Zavolat: 545&nbsp;220&nbsp;506</a>
      </header>

      <section className="cf-hero" aria-labelledby="cf-hero-h">
        <img
          className="cf-hero-img"
          src="/hero.webp"
          alt="Průmyslové odsávací a filtrační zařízení CIPRES FILTR Brno v provozu"
          width={1600}
          height={1000}
        />
        <div className="cf-hero-scrim" aria-hidden="true" />
        <div className="cf-hero-body">
          <p className="cf-eyebrow">Odsávání a filtrace vzduchu · Brno · od roku 1990</p>
          <h1 id="cf-hero-h">
            Špinavý vzduch<br />
            <span className="cf-accent">odejde čistý.</span>
          </h1>
          <p className="cf-lead">
            Navrhneme, vyrobíme a nainstalujeme průmyslovou vzduchotechniku na míru
            vašemu provozu. Zhruba 90&nbsp;% technologie vzniká v naší vlastní dílně —
            od návrhu po servis vše pod jednou střechou.
          </p>
          <div className="cf-cta-row">
            <a className="cf-btn" href="tel:+420545220506">Zavolat technikovi</a>
            <a className="cf-btn cf-btn-ghost" href="#produkty">Co vyrábíme</a>
          </div>
          <dl className="cf-facts">
            <div><dt>90&nbsp;%</dt><dd>technologie z vlastní výroby</dd></div>
            <div><dt>1990</dt><dd>rok, kdy jsme začali</dd></div>
            <div><dt>2 provozy</dt><dd>Brno &amp; Boršice</dd></div>
          </dl>
        </div>
      </section>

      <section className="cf-sec cf-makers" id="produkty" aria-labelledby="cf-makers-h">
        <div className="cf-sec-head">
          <p className="cf-eyebrow cf-eyebrow-dark">Jsme výrobci</p>
          <h2 id="cf-makers-h">Vlastní dílna, ne katalog cizích dodavatelů</h2>
          <p className="cf-sec-lead">
            Odsávací zařízení, odlučovače, ventilátory i digestoře vyrábíme sami.
            Když má provoz nezvyklý požadavek, upravíme konstrukci — nečekáme na
            žádného subdodavatele.
          </p>
        </div>

        <div className="cf-makers-grid">
          <figure className="cf-figure">
            <img
              src="/section-1.webp"
              alt="Výroba odsávacích a filtračních zařízení v dílně CIPRES FILTR Brno"
              width={1200}
              height={900}
            />
          </figure>
          <div className="cf-makers-text">
            <ol className="cf-products">
              {produkty.map((p, i) => (
                <li key={p}>
                  <span className="cf-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
            <div className="cf-shop">
              <p className="cf-shop-label">Naše výrobní kapacity</p>
              <ul className="cf-tags">
                {dilna.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cf-sec cf-apps" aria-labelledby="cf-apps-h">
        <div className="cf-sec-head">
          <p className="cf-eyebrow cf-eyebrow-dark">Aplikace</p>
          <h2 id="cf-apps-h">Víme, co se ve vašem provozu vznáší ve vzduchu</h2>
          <p className="cf-sec-lead">
            Od tavicích pecí po pily. Každý provoz má jiný prach, jinou teplotu a jiná
            rizika — technologii proto navrhujeme podle toho, co konkrétně odsáváme.
          </p>
        </div>

        <div className="cf-apps-layout">
          <ul className="cf-apps-list">
            {aplikace.map((a) => (
              <li key={a.k}>
                <h3>{a.k}</h3>
                <p>{a.t}</p>
              </li>
            ))}
          </ul>
          <aside className="cf-apps-aside">
            <figure className="cf-figure">
              <img
                src="/section-2.webp"
                alt="Instalovaná průmyslová vzduchotechnika CIPRES FILTR Brno u zákazníka"
                width={1000}
                height={1200}
              />
            </figure>
            <div className="cf-turnkey">
              <p className="cf-turnkey-label">Dodávka na klíč</p>
              <p>
                Analýza potřeb → návrh řešení → výroba → montáž → servis. Vše zvládnou
                naši kmenoví technici, včetně vlastního servisního oddělení pro rychlý
                zásah.
              </p>
              <p className="cf-turnkey-note">
                Inteligentní řízení navíc šetří elektrickou i tepelnou energii.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
