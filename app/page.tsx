import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Zemní a výkopové práce",
      popis:
        "Základové jámy, rýhy pro inženýrské sítě, srovnání pozemku. Kopeme přesně podle projektu, i v místech, kam se velký bagr nedostane.",
      detail: "Rýpadla 1,5 – 15 t",
    },
    {
      kod: "02",
      nazev: "Demolice a bourání",
      popis:
        "Rozebereme stavbu, zbouráme příčky i celý objekt. Suť rovnou naložíme a odvezeme, staveniště po nás zůstane čisté.",
      detail: "Bourací kladiva, drapák",
    },
    {
      kod: "03",
      nazev: "Kontejnery a odvoz",
      popis:
        "Přistavíme kontejner na suť, zeminu i stavební odpad, kdy potřebujete. Autodoprava sklápěči po Praze i mimo ni.",
      detail: "3 – 24 m³, sklápěče",
    },
    {
      kod: "04",
      nazev: "Recyklace materiálu",
      popis:
        "Beton a suť podrtíme na recyklát, který se dá znovu použít na podsypy a zásypy. Méně odvozu, nižší cena, méně odpadu na skládce.",
      detail: "Drcený recyklát",
    },
  ];

  const duvody = [
    {
      cislo: "Praha + Střední Čechy",
      text: "Působíme tam, kde to znáte. Na stavbu dorazíme rychle a bez zbytečných přejezdů navíc.",
    },
    {
      cislo: "Malé i velké zakázky",
      text: "Od výkopu pro rodinný dům po přípravu většího staveniště. Techniku i lidi máme na obojí.",
    },
    {
      cislo: "Termín, který drží",
      text: "Domluvíme se na dni, kdy začneme, a ten den přijedeme. Vaše stavba nečeká na nás.",
    },
  ];

  return (
    <main className="zb">
      {/* HERO */}
      <header className="zb-hero">
        <img
          className="zb-hero__img"
          src="/hero.webp"
          alt="Rýpadlo Bayer při zemních pracích na staveništi v Praze"
        />
        <div className="zb-hero__scrim" aria-hidden="true" />

        <nav className="zb-nav" aria-label="Hlavní">
          <a className="zb-mark" href="#uvod" aria-label="ZP Bayer, úvod">
            <span className="zb-mark__zp">ZP</span>
            <span className="zb-mark__name">BAYER</span>
          </a>
          <ul className="zb-nav__links">
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#onas">O nás</a></li>
            <li>
              <a className="zb-nav__tel" href="tel:+420775163806">
                775 163 806
              </a>
            </li>
          </ul>
        </nav>

        <div className="zb-hero__body">
          <p className="zb-eyebrow">Zemní práce · Praha a Střední Čechy</p>
          <h1 className="zb-h1">
            Kopeme,
            <br />
            bouráme,
            <br />
            <span className="zb-h1__accent">odvezeme.</span>
          </h1>
          <p className="zb-lead">
            Výkopy, demolice, kontejnery a recyklace suti. Přijedeme s vlastní
            technikou, odděláme práci a po nás zůstane čisté staveniště.
          </p>
          <div className="zb-hero__cta">
            <a className="zb-btn" href="tel:+420775163806">Zavolat</a>
            <a className="zb-btn zb-btn--ghost" href="#sluzby">Co uděláme</a>
          </div>
        </div>

        <ul className="zb-strip" aria-label="Naše čísla">
          <li><b>1,5–15 t</b><span>rýpadla</span></li>
          <li><b>3–24 m³</b><span>kontejnery</span></li>
          <li><b>Ø 24 h</b><span>na staveništi</span></li>
        </ul>
      </header>

      {/* SLUŽBY */}
      <section className="zb-sec zb-sluzby" id="sluzby" aria-labelledby="sluzby-nad">
        <div className="zb-sec__head">
          <p className="zb-eyebrow zb-eyebrow--dark">Co pro vás uděláme</p>
          <h2 className="zb-h2" id="sluzby-nad">
            Čtyři věci, které umíme<br />pořádně od začátku do konce.
          </h2>
        </div>

        <div className="zb-grid">
          <div className="zb-media">
            <img
              src="/section-1.webp"
              alt="Nakladač při odvozu suti a zeminy ze stavby"
              className="zb-media__img"
            />
          </div>

          <ol className="zb-list">
            {sluzby.map((s) => (
              <li className="zb-item" key={s.kod}>
                <span className="zb-item__kod" aria-hidden="true">{s.kod}</span>
                <div className="zb-item__body">
                  <h3 className="zb-item__nazev">{s.nazev}</h3>
                  <p className="zb-item__popis">{s.popis}</p>
                  <span className="zb-item__detail">{s.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="zb-sec zb-onas" id="onas" aria-labelledby="onas-nad">
        <div className="zb-onas__wrap">
          <div className="zb-onas__media">
            <img
              src="/section-2.webp"
              alt="Technika Zemní práce Bayer připravená na staveništi"
              className="zb-media__img"
            />
          </div>

          <div className="zb-onas__text">
            <p className="zb-eyebrow">O nás</p>
            <h2 className="zb-h2 zb-h2--light" id="onas-nad">
              Zemní práce Bayer.
              <br />Malá parta, velké bagry.
            </h2>
            <p className="zb-onas__p">
              Děláme zemní a výkopové práce, demolice, terénní úpravy, dopravu
              materiálu i přistavení a odvoz kontejnerů na suť, zeminu a stavební
              odpad. Od drobných projektů po realizace většího rozsahu — s vlastní
              technikou a znalostí řemesla, kterou stavba potřebuje.
            </p>

            <ul className="zb-duvody">
              {duvody.map((d, i) => (
                <li key={i}>
                  <b>{d.cislo}</b>
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>

            <div className="zb-onas__cta">
              <a className="zb-btn" href="tel:+420775163806">Zavolat 775 163 806</a>
              <a className="zb-btn zb-btn--outline" href="mailto:otto.bayer@seznam.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
