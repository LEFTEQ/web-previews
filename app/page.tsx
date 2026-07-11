import type { ReactNode } from "react";

export default function Page() {
  return (
    <main className="iz">
      <header className="iz-nav" aria-label="Hlavní navigace">
        <a className="iz-mark" href="#uvod" aria-label="Allstav Plzeň — domů">
          <span className="iz-mark-line" aria-hidden="true" />
          <span className="iz-mark-word">ALLSTAV</span>
          <span className="iz-mark-sub">sanace zdiva · Plzeň</span>
        </a>
        <nav className="iz-links">
          <a href="#metody">Metody</a>
          <a href="#duvera">O firmě</a>
          <a className="iz-tel" href="tel:+420603418498">603 418 498</a>
        </nav>
      </header>

      <section className="iz-hero" id="uvod">
        <div className="iz-hero-media">
          <img
            src="/hero.webp"
            alt="Podřezané zdivo s dodatečně vloženou vodotěsnou izolací při sanaci vlhkého domu"
            className="iz-hero-img"
          />
          <span className="iz-hero-scrim" aria-hidden="true" />
        </div>

        <div className="iz-hero-body">
          <p className="iz-eyebrow">Izolatérství &amp; sanace vlhkého zdiva · od roku 1992</p>
          <h1 className="iz-h1">
            Vodu ze zdi<br />
            <span className="iz-h1-em">odřízneme</span> u kořene.
          </h1>
          <p className="iz-lede">
            Podřezáváme cihelné, kamenné i smíšené zdivo a vkládáme dodatečnou
            izolaci s životností <strong>80–100 let</strong>. Ne zázračné omítky
            přes vlhkou zeď — skutečná mechanická clona proti vzlínající vodě.
          </p>
          <div className="iz-cta-row">
            <a className="iz-btn" href="tel:+420603418498">Zavolat 603 418 498</a>
            <a className="iz-btn iz-btn-ghost" href="mailto:allstavplzen@allstavplzen.cz">
              Napsat na e-mail
            </a>
          </div>
          <dl className="iz-facts">
            <div>
              <dt>Řez</dt>
              <dd>lišta &amp; diamantové lano</dd>
            </div>
            <div>
              <dt>Působnost</dt>
              <dd>celá ČR z Plzně</dd>
            </div>
            <div>
              <dt>Odbornost</dt>
              <dd>člen WTA · ISO</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="iz-section" id="metody" aria-labelledby="metody-nadpis">
        <div className="iz-section-head">
          <p className="iz-eyebrow iz-eyebrow-dark">Čtyři cesty, jak dostat vlhkost ze zdiva</p>
          <h2 id="metody-nadpis" className="iz-h2">Podle toho, z čeho je vaše zeď</h2>
          <p className="iz-section-note">
            Před prací vždy předložíme technické řešení; u větších zakázek zpracujeme
            projektovou dokumentaci. Jako izolaci vkládáme Ekoten, Penefol nebo
            sklolaminát 2 mm — materiály, které zároveň drží radon.
          </p>
        </div>

        <ol className="iz-methods">
          <Method
            depth="cihla"
            title="Podřezání cihelného zdiva"
            desc="Řetězovou nebo lištovou pilou prořízneme spáru, do řezu vložíme vodotěsnou izolaci a zeď opět stabilizujeme. Rychlé a čisté řešení pro klasické cihelné domy."
          />
          <Method
            depth="kamen"
            title="Podřezání smíšeného a kamenného zdiva"
            desc="Na kámen, beton i míchané zdivo nasazujeme lanovou pilu s lanem z diamantových perel. Prořízne i to, co běžná pila nezvládne — bez otřesů do konstrukce."
          />
          <Method
            depth="chemie"
            title="Chemická injektáž — silikonová mikroemulze"
            desc="Tam, kde nelze podřezávat, vytvoříme clonu injektáží. Mikroemulze prostoupí zdivem a uzavře cesty, kterými voda vzlíná vzhůru."
          />
          <Method
            depth="povrch"
            title="Povrchová úprava a odvětrání"
            desc="Sanační omítky, stěrky a nopové fólie Delta PT či Platon dovedou zeď dosucha. Doprovodné práce, které dělají rozdíl mezi opravou a jen zamalováním."
          />
        </ol>
      </section>

      <section className="iz-section iz-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="iz-duvera-grid">
          <div className="iz-duvera-copy">
            <p className="iz-eyebrow iz-eyebrow-dark">Firma z Kleisslovy ulice, Plzeň</p>
            <h2 id="duvera-nadpis" className="iz-h2">
              Třicet let stavíme, sanujeme od roku 1995
            </h2>
            <p className="iz-duvera-text">
              Allstav vznikl 20. května 1992. Osm let jsme stavěli pro německou
              společnost ATU z Weidenu — v SRN i u nás. Dnes se soustředíme na to,
              co umíme nejlíp: rekonstrukce, rodinné domy a hlavně odstraňování
              vlhkosti kompletní sanací. Spolupracujeme s předními odborníky v oboru
              a řídíme se pravidly WTA.
            </p>

            <ul className="iz-badges">
              <li><span>ISO</span> certifikát jakosti</li>
              <li><span>WTA</span> člen odborného sdružení</li>
              <li><span>80–100</span> let životnost izolace</li>
            </ul>

            <div className="iz-contact">
              <p>
                <span className="iz-contact-label">Kde nás najdete</span>
                Kleisslova 11, 301 00 Plzeň
              </p>
              <p>
                <span className="iz-contact-label">Domluvte prohlídku</span>
                <a href="tel:+420377538141">377 538 141</a> ·{" "}
                <a href="tel:+420603418498">603 418 498</a>
              </p>
              <p>
                <span className="iz-contact-label">E-mail</span>
                <a href="mailto:allstavplzen@allstavplzen.cz">
                  allstavplzen@allstavplzen.cz
                </a>
              </p>
            </div>
          </div>

          <figure className="iz-duvera-figure">
            <img
              src="/section-1.webp"
              alt="Lanová pila s diamantovým lanem při podřezávání kamenného zdiva"
              className="iz-fig-img"
            />
            <img
              src="/section-2.webp"
              alt="Dokončená sanovaná stěna se sanační omítkou a nopovou fólií"
              className="iz-fig-img iz-fig-img-2"
            />
            <figcaption>
              Nahoře řez kamenem diamantovým lanem, dole hotová sanovaná stěna.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

function Method({
  depth,
  title,
  desc,
}: {
  depth: string;
  title: string;
  desc: string;
}): ReactNode {
  return (
    <li className="iz-method" data-depth={depth}>
      <div className="iz-method-mark" aria-hidden="true" />
      <div className="iz-method-text">
        <h3 className="iz-method-title">{title}</h3>
        <p className="iz-method-desc">{desc}</p>
      </div>
    </li>
  );
}
