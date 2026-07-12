import React from "react";

export default function Page() {
  const okruhy = [
    {
      cislo: "01",
      faze: "L1",
      nazev: "Elektroinstalace nn",
      popis:
        "Elektromontážní práce na zařízeních nízkého napětí — od nové kabeláže v novostavbě po rekonstrukci rozvodů ve starším domě. Vše dle platných norem, s revizí a dokumentací.",
      body: ["Novostavby i rekonstrukce", "Silnoproud i slaboproud", "Revize a předání dokumentace"],
    },
    {
      cislo: "02",
      faze: "L2",
      nazev: "Výroba rozvaděčů",
      popis:
        "Rozvaděče nízkého napětí do 1000 A vyrábíme ve vlastní dílně na míru projektu. Osazení, zapojení, popis a kusová zkouška před expedicí — připraveno k okamžitému nasazení.",
      body: ["Do 1000 A", "Výroba na míru projektu", "Kusová zkouška před expedicí"],
    },
    {
      cislo: "03",
      faze: "L3",
      nazev: "Bazénové technologie",
      popis:
        "Dodávka a montáž bazénových automatů ASEKO a Pooltechnologie pro soukromé i veřejné bazény a vířivky. Filtrace, elektropříslušenství, uvedení do provozu.",
      body: ["Automaty ASEKO a Pooltechnologie", "Soukromé i veřejné bazény", "Filtrace a příslušenství"],
    },
    {
      cislo: "04",
      faze: "N",
      nazev: "EZS a kamery",
      popis:
        "Zabezpečovací systémy a kamerové systémy — návrh, dodávka a montáž. Klid v domě i firmě, přehled o dění na jednom místě.",
      body: ["Elektronické zabezpečení", "Kamerové systémy", "Návrh i montáž"],
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="RC Elektro, domů">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__phase brand__phase--l1" />
            <span className="brand__phase brand__phase--l2" />
            <span className="brand__phase brand__phase--l3" />
          </span>
          <span className="brand__word">
            RC<span className="brand__word-accent">Elektro</span>
          </span>
        </a>
        <a className="topbar__tel" href="tel:+420603279000">
          +420&nbsp;603&nbsp;279&nbsp;000
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Rozvaděč nízkého napětí zapojený techniky RC Elektro"
            className="hero__img"
          />
          <span className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="hero__pin" aria-hidden="true" />
            Elektroinstalace &middot; Brno-Zábrdovice &middot; od roku 2008
          </p>
          <h1 id="hero-title" className="hero__title">
            Zapojeno tak,
            <br />
            <em>aby to drželo</em>
          </h1>
          <p className="hero__lead">
            RC Elektro s.r.o. dělá poctivou elektroinstalaci, vlastní rozvaděče
            do 1000&nbsp;A a technologie pro bazény. Jeden tým od kabelu po
            revizi — v Brně a okolí.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420603279000">
              Zavolat elektrikáři
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>

          <dl className="hero__meter" aria-label="Parametry práce">
            <div className="hero__meter-cell">
              <dt>Rozvaděče</dt>
              <dd>do 1000&nbsp;A</dd>
            </div>
            <div className="hero__meter-cell">
              <dt>Napětí</dt>
              <dd>230 / 400&nbsp;V</dd>
            </div>
            <div className="hero__meter-cell">
              <dt>Výstup</dt>
              <dd>s revizí</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Rozvod činností</p>
          <h2 id="sluzby-title" className="section-head__title">
            Čtyři fáze, jeden dodavatel
          </h2>
          <p className="section-head__note">
            Značíme je jako fáze na svorkovnici — L1 až N. Každou zvládneme
            sami, bez subdodavatelů, na které byste čekali.
          </p>
        </div>

        <div className="rails">
          <ol className="okruhy">
            {okruhy.map((o) => (
              <li className="okruh" key={o.cislo}>
                <div className="okruh__head">
                  <span className="okruh__cislo">{o.cislo}</span>
                  <span className="okruh__faze">{o.faze}</span>
                </div>
                <h3 className="okruh__nazev">{o.nazev}</h3>
                <p className="okruh__popis">{o.popis}</p>
                <ul className="okruh__body">
                  {o.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <figure className="sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Detail elektroinstalační práce — zapojování vodičů"
          />
          <figcaption>
            Dílna i stavba: od kusové výroby rozvaděče po zapojení na místě.
          </figcaption>
        </figure>
      </section>

      <section className="duvera" id="o-nas" aria-labelledby="duvera-title">
        <div className="duvera__grid">
          <figure className="duvera__foto">
            <img
              src="/section-2.webp"
              alt="Technik RC Elektro u bazénové technologie"
            />
          </figure>

          <div className="duvera__text">
            <p className="section-head__eyebrow">Kdo za tím stojí</p>
            <h2 id="duvera-title" className="section-head__title">
              Brněnská firma, co si stojí za svou prací
            </h2>
            <p className="duvera__lead">
              Sídlíme v Zábrdovicích a jezdíme po celém Brně i okolí. Děláme
              elektro pro rodinné domy, firmy i veřejné bazény — a to samé, co
              namontujeme, vám i zrevidujeme a předáme s papíry.
            </p>

            <dl className="duvera__stitky">
              <div>
                <dt>Sídlo</dt>
                <dd>
                  Zábrdovická 872/9
                  <br />
                  615&nbsp;00 Brno
                </dd>
              </div>
              <div>
                <dt>IČ / DIČ</dt>
                <dd>
                  28351053
                  <br />
                  CZ28351053
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420603279000">603&nbsp;279&nbsp;000</a>
                  <br />
                  <a href="tel:+420721321723">721&nbsp;321&nbsp;723</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:cetl@rcelektro.cz">cetl@rcelektro.cz</a>
                  <br />
                  <a href="mailto:svec@rcelektro.cz">svec@rcelektro.cz</a>
                </dd>
              </div>
            </dl>

            <a
              className="btn btn--primary"
              href="mailto:cetl@rcelektro.cz?subject=Popt%C3%A1vka%20elektroinstalace"
            >
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
