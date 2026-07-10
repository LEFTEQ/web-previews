import type { CSSProperties } from "react";

type Material = {
  code: string;
  name: string;
  price: string;
  desc: string;
  tag: string;
};

const materialy: Material[] = [
  {
    code: "0/4",
    name: "Písek do betonu",
    price: "210",
    desc: "Praný betonářský písek. Splňuje ČSN EN 12620+A1 pro kamenivo do betonu.",
    tag: "praný",
  },
  {
    code: "4/8",
    name: "Kamenivo do betonu",
    price: "400",
    desc: "Přírodní prané kamenivo do betonu i pod asfaltové směsi. Norma ČSN EN 13043.",
    tag: "praný",
  },
  {
    code: "8/16",
    name: "Kamenivo do betonu",
    price: "400",
    desc: "Hrubší prané kamenivo do betonu i pod komunikace a dopravní plochy.",
    tag: "praný",
  },
  {
    code: "16/32",
    name: "Okrasné kamenivo",
    price: "400",
    desc: "Do jezírek, zahrad a drenáží. Prané, oblé, připravené k dekoraci.",
    tag: "okrasný",
  },
  {
    code: "32/250",
    name: "Solitérní kámen",
    price: "405",
    desc: "Velký prané kamenivo jako solitér do zahrady i vodních prvků.",
    tag: "okrasný",
  },
  {
    code: "—",
    name: "Tříděná zemina",
    price: "130",
    desc: "Pro zásypy, násypy a terénní úpravy kolem novostaveb.",
    tag: "zemina",
  },
  {
    code: "0/63",
    name: "Betonový recyklát",
    price: "280",
    desc: "Podkladní vrstva pod dlažby, obsyp základů, zpevnění terénu.",
    tag: "recyklát",
  },
  {
    code: "4/8",
    name: "Drcený štěrk",
    price: "720",
    desc: "Ostrohranné drcené kamenivo přesně pod zámkovou dlažbu.",
    tag: "drcený",
  },
  {
    code: "0/32",
    name: "Drcený štěrk",
    price: "490",
    desc: "Hrubá podkladní vrstva pod komunikace, chodníky a obsypy.",
    tag: "drcený",
  },
];

type Odpad = { druh: string; kod: string; cena: string };

const odpady: Odpad[] = [
  { druh: "Výkopová zemina čistá", kod: "170504", cena: "250" },
  { druh: "Výkopová zemina s kameny", kod: "170504", cena: "450" },
  { druh: "Výkopová zemina s betony", kod: "170504", cena: "450" },
  { druh: "Beton do 40×40 cm", kod: "170101", cena: "190" },
  { druh: "Beton nad 40×40 cm", kod: "170101", cena: "270" },
  { druh: "Armované betony nad 40×40 cm", kod: "170101", cena: "380" },
  { druh: "Betony znečištěné zeminou", kod: "170101", cena: "300" },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wm" href="#top" aria-label="Hradecký písek, úvod">
          <span className="wm-h">HRADECKÝ</span>
          <span className="wm-p">PÍSEK</span>
          <span className="wm-grade" aria-hidden="true" />
        </a>
        <nav className="nav-links">
          <a href="#material">Ceník materiálu</a>
          <a href="#ukladka">Ukládka odpadů</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Prané kamenivo a písek na skládce pískovny u Hradce Králové"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-body">
          <p className="hero-eyebrow">Písník Dubina · Hradec Králové</p>
          <h1 className="hero-title">
            <span className="line l1">Prané</span>
            <span className="line l2">kamenivo,</span>
            <span className="line l3">písek do</span>
            <span className="line l4">betonu.</span>
          </h1>
          <p className="hero-lede">
            Těžíme a pereme kamenivo přímo v báňském prostoru písníku
            Dubina. Perná technologie znamená čistší materiál a beton, který
            drží. K tomu ukládka zeminy a recyklace betonového odpadu.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420722906906">
              Zavolat 722&nbsp;906&nbsp;906
            </a>
            <a className="btn btn-line" href="#material">
              Prohlédnout ceník
            </a>
          </div>
        </div>
        <div className="sieve" aria-hidden="true">
          <span>0/4</span>
          <span>4/8</span>
          <span>8/16</span>
          <span>16/32</span>
          <span>32/250</span>
        </div>
      </section>

      <section className="materialy" id="material" aria-labelledby="material-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Ceník 2024 · ceny bez DPH za tunu</p>
          <h2 id="material-h">Sypké materiály setříděné podle frakce</h2>
          <p className="sec-lede">
            Frakce je rozmezí zrn v milimetrech — čím vyšší číslo, tím hrubší
            kámen. Vyberte podle toho, co stavíte. Při větším odběru počítejte
            se slevou.
          </p>
        </div>

        <ul className="grid">
          {materialy.map((m, i) => (
            <li
              className="card"
              key={`${m.name}-${m.code}-${i}`}
              style={{ ["--d" as keyof CSSProperties]: `${i * 60}ms` } as CSSProperties}
            >
              <div className="card-top">
                <span className="card-frakce">{m.code}</span>
                <span className="card-tag">{m.tag}</span>
              </div>
              <h3 className="card-name">{m.name}</h3>
              <p className="card-desc">{m.desc}</p>
              <p className="card-price">
                <span className="num">{m.price}</span>
                <span className="unit">Kč/t</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="sec-note">
          Kromě kameniva vozíme i zahradní hlínu a zeminu včetně dopravy.
          Ozvěte se, spočítáme dovoz na vaši adresu.
        </p>
      </section>

      <section className="onas" id="kontakt" aria-labelledby="onas-h">
        <div className="onas-inner">
          <div className="onas-text">
            <p className="sec-eyebrow light">O nás &amp; ukládka odpadů</p>
            <h2 id="onas-h">
              Vlastní pískovna s praním kameniva — a místo, kam odvézt suť
            </h2>
            <p>
              Těžba a úprava kameniva probíhá v báňském prostoru písníku
              Dubina. Pískovna je vybavená technologií praní, díky které z ní
              vychází materiál v konstantní kvalitě — přesně to, na co se
              spolehne betonárka i kdo si míchá beton sám.
            </p>
            <p>
              Drtíme a třídíme stavební suť i přímo na místě demolice —
              čelisťovým drtičem Finlay J-1160 a mobilním hrubotřídičem
              Finlay 883. Cena drcení a třídění na stavbě 30–110&nbsp;Kč/t.
            </p>
            <div className="contact-card" id="kontakt-card">
              <div className="cc-row">
                <span className="cc-label">Telefon</span>
                <a href="tel:+420722906906">722 906 906</a>
              </div>
              <div className="cc-row">
                <span className="cc-label">E-mail</span>
                <a href="mailto:info@hradeckypisek.cz">
                  info@hradeckypisek.cz
                </a>
              </div>
              <div className="cc-row">
                <span className="cc-label">Kde</span>
                <span>Písník Dubina, Hradec Králové</span>
              </div>
            </div>
          </div>

          <figure className="onas-fig">
            <img
              src="/section-1.webp"
              alt="Praní a úprava kameniva v pískovně Dubina"
            />
            <figcaption>Technologie praní kameniva v pískovně Dubina</figcaption>
          </figure>
        </div>

        <div className="ukladka" id="ukladka">
          <div className="ukladka-head">
            <h3>Ceník ukládky a likvidace odpadů</h3>
            <p>
              Ceny bez DPH za tunu. Ke každému odpadu doložte laboratorní
              rozbor podle tabulky 10.1 vyhlášky č.&nbsp;294/2005&nbsp;Sb.
            </p>
          </div>

          <div className="table-wrap" role="region" aria-label="Ceník ukládky odpadů" tabIndex={0}>
            <table className="cenik">
              <thead>
                <tr>
                  <th scope="col">Druh odpadu</th>
                  <th scope="col">Kód</th>
                  <th scope="col" className="r">Cena / t</th>
                </tr>
              </thead>
              <tbody>
                {odpady.map((o, i) => (
                  <tr key={`${o.druh}-${i}`}>
                    <td>{o.druh}</td>
                    <td className="kod">{o.kod}</td>
                    <td className="r">
                      <span className="num sm">{o.cena}</span> Kč
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="ukladka-fig">
            <img
              src="/section-2.webp"
              alt="Drcení a třídění stavební suti mobilní technikou Finlay"
            />
            <figcaption>
              Drcení a třídění suti přímo v místě demolice
            </figcaption>
          </figure>

          <p className="warn">
            Neukládáme jíl, směsný stavební odpad, plasty, papíry,
            sádrokartony, plynosilikáty, sklo ani stavební keramiku. Odpady
            s jiným znečištěním, než uvádí ceník, nepřevezmeme.
          </p>
        </div>
      </section>
    </main>
  );
}
