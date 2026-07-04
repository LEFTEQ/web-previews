import React from "react";

export default function Page() {
  const sortiment = [
    {
      kod: "U-w",
      hodnota: "0,72",
      nazev: "Plastová okna",
      popis:
        "Šestikomorové profily, tři těsnění a trojsklo. Na míru vyměříme, starý rám odvezeme a otvor začistíme, takže po nás zůstane jen čistá zeď a okno, které těsní.",
    },
    {
      kod: "U-d",
      hodnota: "1,1",
      nazev: "Vchodové a interiérové dveře",
      popis:
        "Bezpečnostní vchodové dveře i tiché interiérové s dorazovou lištou. Vybereme kování, práh i zámek podle toho, kudy chodíte a jak často.",
    },
    {
      kod: "U-g",
      hodnota: "—",
      nazev: "Garážová vrata",
      popis:
        "Sekční vrata s pohonem na dálkové ovládání, zateplená lamela proti mrazu. Naměříme podle stávajícího otvoru, i když není úplně pravoúhlý.",
    },
    {
      kod: "U-ž",
      hodnota: "—",
      nazev: "Žaluzie, sítě a rolety",
      popis:
        "Doplňky, na které se při výměně oken zapomíná. Venkovní rolety proti letnímu horku, sítě proti hmyzu, žaluzie mezi skla i předokenní.",
    },
  ];

  return (
    <main className="okno">
      <header className="okno__nav">
        <a className="okno__logo" href="#" aria-label="U Světa — okna a dveře Třeboň">
          <span className="okno__logo-u">U</span>
          <span className="okno__logo-txt">
            <span>Světa</span>
            <span className="okno__logo-sub">okna &middot; dveře &middot; Třeboň</span>
          </span>
        </a>
        <a className="okno__tel" href="tel:+420777129602">
          777 129 602
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__frame">
          <div className="hero__glass">
            <img
              className="hero__img"
              src="/hero.webp"
              alt="Nové plastové okno s výhledem do jihočeské krajiny"
            />
          </div>
          <div className="hero__mullion" aria-hidden="true" />
          <div className="hero__transom" aria-hidden="true" />
        </div>

        <div className="hero__text">
          <p className="eyebrow">Dveře Okna U Světa Třeboň &middot; celé Jižní Čechy</p>
          <h1 id="hero-nadpis">
            Rám ven, rám dovnitř.
            <br />
            <em>Za jeden den, bez nepořádku.</em>
          </h1>
          <p className="hero__lead">
            Vyměňujeme stará okna za plastová v rodinných i bytových domech od
            Třeboně po České Budějovice. Přijedeme zaměřit, staré okno
            odvezeme, otvor zednicky začistíme &mdash; a vy jen otevřete a
            zavřete rukou, která už netáhne.
          </p>
          <div className="hero__akce">
            <a className="btn btn--plna" href="tel:+420777129602">
              Zavolat a domluvit zaměření
            </a>
            <a className="btn btn--linka" href="#nabidka">
              Co vyměníme
            </a>
          </div>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Co vám dodáme a osadíme</p>
          <h2 id="nabidka-nadpis">
            Čtyři věci, které dělají okno oknem
          </h2>
          <p className="sekce-hlava__lead">
            U okna se první poznají čísla, která nevidíte &mdash; součinitel
            prostupu tepla <span className="nowrap">U<sub>w</sub></span>. Čím
            nižší, tím míň tepla uteče ven. Tady je, s čím k vám přijedeme.
          </p>
        </div>

        <ul className="karty">
          {sortiment.map((s) => (
            <li className="karta" key={s.nazev}>
              <div className="karta__hlava">
                <span className="karta__kod">{s.kod}</span>
                <span className="karta__hodnota">
                  {s.hodnota}
                  {s.hodnota !== "—" && (
                    <span className="karta__jed">W/m²K</span>
                  )}
                </span>
              </div>
              <h3 className="karta__nazev">{s.nazev}</h3>
              <p className="karta__popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="nabidka__foto">
          <img
            src="/section-1.webp"
            alt="Detail plastového okenního profilu s vícekomorovou konstrukcí a těsněním"
          />
          <figcaption>
            Šestikomorový profil na řezu &mdash; přesně tohle drží teplo
            uvnitř, když venku mrzne nad rybníkem.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <figure className="onas__foto">
          <img
            src="/section-2.webp"
            alt="Montér při osazování nového okna do rodinného domu"
          />
        </figure>

        <div className="onas__text">
          <p className="eyebrow">Kdo k vám přijede</p>
          <h2 id="onas-nadpis">
            Stovky vyměněných oken v Jižních Čechách &mdash; a pořád jedna
            parta, co si za tím stojí
          </h2>
          <p>
            Jsme rodinná firma z Třeboně. Nemontujeme okna anonymně přes
            subdodavatele &mdash; přijede tým, který dům zaměří, a ten samý ho
            osadí. Když se za rok něco zadrhne, zvednete telefon a ozve se
            někdo, kdo si vaše okno pamatuje.
          </p>

          <dl className="onas__fakta">
            <div>
              <dt>Vzorkovna</dt>
              <dd>
                Břilice u Třeboně &mdash; okna, dveře i vrata si osaháte
                naživo, ne z katalogu.
              </dd>
            </div>
            <div>
              <dt>Servis</dt>
              <dd>
                Seřízení kování, výměna těsnění, doladění kliky. O okna se
                staráme i roky po montáži.
              </dd>
            </div>
            <div>
              <dt>Kam jezdíme</dt>
              <dd>
                Třeboň, České Budějovice a celé Jižní Čechy. Po ČR po
                domluvě.
              </dd>
            </div>
          </dl>

          <div className="onas__kontakt">
            <p>
              Zavolejte Kateřině Porembové &mdash; vyměří termín zaměření,
              který vám sedne.
            </p>
            <a className="btn btn--plna" href="tel:+420777129602">
              Zavolat 777 129 602
            </a>
            <a className="onas__mail" href="mailto:info@usveta.cz">
              info@usveta.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
