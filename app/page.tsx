import type { CSSProperties } from "react";

export default function Page() {
  const produkty = [
    {
      cislo: "01",
      nazev: "Brány",
      popis:
        "Křídlové, pojezdové samonosné i klasické. Kované do klenutého detailu, nebo hladké s tahokovem a děrovaným plechem. Osazujeme pohony Nice, Came, Cedamatic a Key na dálkové ovládání.",
    },
    {
      cislo: "02",
      nazev: "Ploty",
      popis:
        "Klasické kované i řada MODERN STYL — kombinace hladké oceli s tahokovem. Barvu ladíme k vašemu domu, nebo naopak do kontrastu, aby dílo vyniklo.",
    },
    {
      cislo: "03",
      nazev: "Zábradlí",
      popis:
        "Na schody, terasy i balkony. Vyrobíme na míru podle zaměření na místě — od návrhu přes montáž až po servis.",
    },
    {
      cislo: "04",
      nazev: "Ocelové konstrukce",
      popis:
        "Schody, přístřešky, mycí boxy pro auta i typizované haly pro portálové mycí linky. Máme vlastní bagr, náklaďák se sklápěcím kontejnerem a mechanizaci na zemní práce.",
    },
  ];

  const uprava = [
    { nazev: "Žárové pozinkování", detail: "ponor do roztaveného zinku" },
    { nazev: "Galvanizace", detail: "galvanické zinkování" },
    { nazev: "Komaxit", detail: "vypalované práškové barvy" },
    { nazev: "Lakování", detail: "kovářské barvy, odstíny RAL" },
    { nazev: "Patinování", detail: "ruční zvýraznění reliéfu" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="BPZ Metal — domovská stránka">
          <span className="wordmark__mark" aria-hidden="true">
            <span>B</span>
            <span>P</span>
            <span>Z</span>
          </span>
          <span className="wordmark__full">Metal</span>
        </a>
        <p className="topbar__meta">Brány · Ploty · Zábradlí · Brno</p>
      </header>

      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Kovaná vjezdová brána vyrobená dílnou BPZ Metal v Brně"
          width={1600}
          height={1100}
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__body">
          <p className="hero__eyebrow">Kovářská dílna v Brně · od roku 2006</p>
          <h1 className="hero__title">
            Brána, která<br />
            <em>drží tvar</em><br />
            třicet let.
          </h1>
          <p className="hero__lede">
            Vyrábíme kované i moderní brány, ploty a zábradlí na míru. Dvojitá
            antikorozní ochrana — pozinek plus barva — chrání každý svár před
            rzí až na třicet let.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420777112617">
              Zavolat 777 112 617
            </a>
            <a className="btn btn--ghost" href="#produkty">
              Prohlédnout výrobu
            </a>
          </div>
        </div>
        <dl className="hero__facts">
          <div>
            <dt>Na klíč</dt>
            <dd>zaměření · návrh · montáž · servis</dd>
          </div>
          <div>
            <dt>Působíme</dt>
            <dd>Brno, Jihomoravský kraj i celá ČR</dd>
          </div>
        </dl>
      </section>

      <section className="produkty" id="produkty" aria-labelledby="produkty-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Co vyrábíme</p>
          <h2 className="section-head__title" id="produkty-nadpis">
            Čtyři řemesla,<br />jedna dílna
          </h2>
          <p className="section-head__note">
            Ocel řežeme, ohýbáme a svařujeme u nás v Brně. Zednické, výkopové i
            demoliční práce zvládneme vlastní technikou — nemusíte shánět další
            firmu.
          </p>
        </div>

        <ol className="grid">
          {produkty.map((p) => (
            <li className="card" key={p.cislo}>
              <span className="card__num" aria-hidden="true">
                {p.cislo}
              </span>
              <h3 className="card__title">{p.nazev}</h3>
              <p className="card__text">{p.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="showcase">
          <img
            src="/section-1.webp"
            alt="Detail moderního plotu z hladké oceli kombinované s tahokovem"
            width={1400}
            height={900}
          />
          <figcaption>
            Řada MODERN STYL — hladká ocel v kombinaci s tahokovem a děrovaným
            plechem.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__media">
          <img
            src="/section-2.webp"
            alt="Kovaný plot s antikorozní úpravou od BPZ Metal"
            width={1200}
            height={1400}
          />
        </div>

        <div className="onas__body">
          <p className="section-head__eyebrow section-head__eyebrow--light">
            Proč nám lidé věří
          </p>
          <h2 className="section-head__title section-head__title--light" id="onas-nadpis">
            Začalo to koníčkem.<br />Zůstalo řemeslo.
          </h2>
          <p className="onas__text">
            Výroba u nás vznikla roku 2006 jako záliba. V roce 2011 z ní byla
            firma — BPZ, tedy <strong>Brány · Ploty · Zábradlí</strong>. Od té
            doby děláme celé zakázky na klíč: přijedeme zaměřit, navrhneme
            provedení, dáme cenu, vyrobíme a namontujeme.
          </p>

          <div className="onas__cover">
            <p className="onas__cover-head">
              Antikorozní ochrana pro dlouhou životnost
            </p>
            <ul className="finishes">
              {uprava.map((u) => (
                <li key={u.nazev}>
                  <span className="finishes__name">{u.nazev}</span>
                  <span className="finishes__detail">{u.detail}</span>
                </li>
              ))}
            </ul>
            <p className="onas__cover-note">
              Pozinek + barva = dvojitá ochrana. Brána, plot i zábradlí zůstanou
              bezúdržbové až na 30 let.
            </p>
          </div>

          <div className="contact">
            <a className="contact__phone" href="tel:+420777112617">
              777 112 617
            </a>
            <a className="contact__phone" href="tel:+420606558459">
              606 558 459
            </a>
            <a className="contact__mail" href="mailto:info@bpzmetal.cz">
              info@bpzmetal.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

const _unused: CSSProperties = {};
void _unused;
