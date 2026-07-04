import type { CSSProperties } from "react";

const species = [
  { name: "Dub", note: "tvrdý, kresba jako otisk let", hex: "#8a5a2b" },
  { name: "Buk", note: "hladký, rovnoměrný, pro nábytek", hex: "#c79a63" },
  { name: "Jasan", note: "pružný, výrazná léta", hex: "#d9b98a" },
  { name: "Olše", note: "měkká, teplá do interiéru", hex: "#b06a45" },
  { name: "Borovice", note: "vonná, klasika na okna", hex: "#e0c088" },
  { name: "Smrk", note: "lehký, konstrukční", hex: "#e7d3a6" },
];

const work = [
  {
    kroj: "01",
    title: "Eurookna a dveře",
    body: "Eurookna profilu 78, vchodové i interiérové dveře, vrata a výlohy. Od kastlových oken jsme přešli přes zdvojená až k dnešním Eurooknům — víme, jak se dřevo v rámu chová po letech.",
    tag: "stavební truhlářství",
  },
  {
    kroj: "02",
    title: "Kuchyně a vestavěné skříně",
    body: "Kuchyňské linky včetně vestavěných spotřebičů, šatny a úložné prostory na míru vašim stěnám. Grafický návrh linky, skříně nebo vstupní haly kreslíme zdarma, ještě než začne pila.",
    tag: "interiér na míru",
  },
  {
    kroj: "03",
    title: "Nábytek a schodiště",
    body: "Stoly, židle, postele, dětské pokoje, jídelní i zahradní sestavy, kancelářský nábytek a masivní schodiště. Kus, který má vydržet generaci a pasovat přesně tam, kam patří.",
    tag: "solitéry a schody",
  },
];

export default function Page() {
  return (
    <main className="mk">
      <header className="mk-nav">
        <a className="mk-mark" href="#top" aria-label="Stolařství Miklík, úvod">
          <span className="mk-mark-line1">STOLAŘSTVÍ</span>
          <span className="mk-mark-line2">Miklík</span>
          <span className="mk-mark-est">Olomouc · od 1990</span>
        </a>
        <a className="mk-call" href="tel:+420737506714">Zavolat 737 506 714</a>
      </header>

      <section className="mk-hero" id="top">
        <div className="mk-hero-copy">
          <p className="mk-eyebrow">Zakázková truhlárna · Daskabát, Olomouc</p>
          <h1 className="mk-h1">
            Z masivu, <em>na míru</em>,<br />už 35 let.
          </h1>
          <p className="mk-lead">
            Rodinná dílna, kde dub, buk a jasan dostanou tvar podle vaší
            představy. Okna, dveře, kuchyně i schodiště — kreslíme, hoblujeme a
            osazujeme sami. Skloubit vaši představu s reálným výsledkem je celá
            naše práce.
          </p>
          <div className="mk-hero-actions">
            <a className="mk-btn" href="#poptavka">Nezávazně poptat výrobu</a>
            <a className="mk-btn-ghost" href="#rez">Prohlédnout dřeviny</a>
          </div>
        </div>
        <figure className="mk-hero-fig">
          <img
            src="/hero.webp"
            alt="Truhlářská dílna Stolařství Miklík — rozpracovaný nábytek z masivního dřeva"
            className="mk-hero-img"
          />
          <figcaption className="mk-hero-cap">Dílna Daskabát 210</figcaption>
        </figure>
      </section>

      <section className="mk-rez" id="rez" aria-labelledby="rez-h">
        <div className="mk-rez-head">
          <p className="mk-eyebrow mk-eyebrow--pale">Z čeho vyrábíme</p>
          <h2 className="mk-h2" id="rez-h">Řez dřevem</h2>
          <p className="mk-rez-note">
            Pracujeme výhradně s přírodním masivem a poradíme, který se hodí ke
            kterému výrobku. Kde je to praktické, doplníme laminovanými deskami.
          </p>
        </div>
        <ul className="mk-species" role="list">
          {species.map((s) => (
            <li
              key={s.name}
              className="mk-chip"
              style={{ "--ring": s.hex } as CSSProperties}
            >
              <span className="mk-chip-ring" aria-hidden="true" />
              <span className="mk-chip-name">{s.name}</span>
              <span className="mk-chip-note">{s.note}</span>
            </li>
          ))}
        </ul>
        <figure className="mk-rez-fig">
          <img
            src="/section-1.webp"
            alt="Detail masivního dřeva a truhlářského zpracování ve Stolařství Miklík"
            className="mk-rez-img"
          />
        </figure>
      </section>

      <section className="mk-work" id="poptavka" aria-labelledby="work-h">
        <div className="mk-work-head">
          <p className="mk-eyebrow mk-eyebrow--pale">Co pro vás uděláme</p>
          <h2 className="mk-h2" id="work-h">Tři linky výroby</h2>
        </div>
        <ol className="mk-work-list" role="list">
          {work.map((w) => (
            <li key={w.kroj} className="mk-work-item">
              <span className="mk-work-kroj" aria-hidden="true">{w.kroj}</span>
              <div className="mk-work-text">
                <p className="mk-work-tag">{w.tag}</p>
                <h3 className="mk-work-title">{w.title}</h3>
                <p className="mk-work-body">{w.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mk-trust">
          <figure className="mk-trust-fig">
            <img
              src="/section-2.webp"
              alt="Hotová zakázka Stolařství Miklík — nábytek z masivního dřeva v interiéru"
              className="mk-trust-img"
            />
          </figure>
          <div className="mk-trust-copy">
            <p className="mk-eyebrow mk-eyebrow--pale">Proč zrovna my</p>
            <h2 className="mk-h2 mk-h2--tight">Rodinná tradice od roku 1990</h2>
            <p className="mk-trust-lead">
              Začínali jsme kusovým nábytkem, skříňkami a kastlovými okny. Dnes
              stavíme celé interiéry restaurací i kanceláří — ale drobná zakázka
              nás pořád baví stejně. Vyrábíme jen na zakázku, s důrazem na
              originalitu a poctivé dílenské zpracování.
            </p>
            <dl className="mk-facts">
              <div className="mk-fact">
                <dt>Dílna</dt>
                <dd>Daskabát 210, 779 00 Olomouc</dd>
              </div>
              <div className="mk-fact">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420737506714">737 506 714</a> ·{" "}
                  <a href="tel:+420603483620">603 483 620</a>
                </dd>
              </div>
              <div className="mk-fact">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:stolarstvi.janmiklik@seznam.cz">
                    stolarstvi.janmiklik@seznam.cz
                  </a>
                </dd>
              </div>
              <div className="mk-fact">
                <dt>Návrh</dt>
                <dd>Grafický návrh kuchyně či skříně kreslíme zdarma</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
