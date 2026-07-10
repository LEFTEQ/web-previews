import type { CSSProperties } from "react";

export default function Page() {
  const machines = [
    {
      no: "01",
      cat: "Strojky",
      name: "Kwadron Equaliser Enduro2",
      desc: "Bezdrátový rotační strojek s nastavitelným zdvihem. Tichý chod, stálý výkon od první do poslední linky.",
      price: "592,49",
      tag: "Rotační",
    },
    {
      no: "02",
      cat: "Strojky",
      name: "Bishop Power Wand Advanced",
      desc: "RCA liner pro čisté, sytě tažené kontury. Vyvážený těžiště padne do ruky na celý pracovní den.",
      price: "746,65",
      tag: "Pen",
    },
    {
      no: "03",
      cat: "Barvy",
      name: "Panthera Ink — Polar White",
      desc: "Plná krycí běloba pro maximální kontrast a highlighty. Hustá konzistence, čistě se roztírá.",
      price: "17,75",
      tag: "Solid White",
    },
    {
      no: "04",
      cat: "Hygiena",
      name: "Melag Tray — Sterilizátor 75 2B",
      desc: "Originální nerezový tray do autoklávu Melag 75 2B. Sterilizace bez kompromisů, den co den.",
      price: "54,94",
      tag: "Autokláv",
    },
  ];

  const promises = [
    {
      k: "Velkoobchod",
      t: "Velkoobchodní ceny",
      d: "Nakupujete jako studio, ne jako koncový zákazník. Množstevní hladiny a stálé ceny pro registrované provozovny.",
    },
    {
      k: "Původ",
      t: "Záruka originality",
      d: "Každá kazeta, strojek i barva jde přímo od výrobce nebo autorizovaného distributora. Žádné padělky, žádné šedé dovozy.",
    },
    {
      k: "Věrnost",
      t: "Věrnostní program",
      d: "Body za každou objednávku, které proměníte za spotřební materiál. Čím víc tetujete, tím víc se vrací.",
    },
    {
      k: "Osobní odběr",
      t: "Vyzvednutí v centru Prahy",
      d: "Objednáte online do 14:00, ještě týž den si to vyzvednete na prodejně v centru. Bez čekání na kurýra.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="brand" href="#top" aria-label="Euro Tattoo Supply — domů">
          <span className="brand-eu">EURO</span>
          <span className="brand-ts">TATTOO&nbsp;SUPPLY</span>
          <span className="brand-dot" aria-hidden="true" />
        </a>
        <nav className="nav-links">
          <a href="#sortiment">Sortiment</a>
          <a href="#studio">Pro studia</a>
          <a className="nav-tel" href="tel:+420775644477">+420&nbsp;775&nbsp;644&nbsp;477</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail profesionálního tetovacího strojku připraveného k práci"
            className="hero-img"
            width={1600}
            height={1100}
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Velkoobchod pro tetovací studia · Praha</p>
          <h1 className="hero-title">
            Vybavení,<br />
            které <em>drží</em><br />
            <span className="hero-line">první&nbsp;linku</span>
          </h1>
          <p className="hero-lede">
            Strojky, kazety, barvy a sterilizace od značek jako Kwadron, Bishop
            nebo Panthera — s garancí původu a osobním odběrem v centru Prahy.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#sortiment">Prohlédnout sortiment</a>
            <a className="btn btn-ghost" href="tel:+420775644477">Zavolat na e-shop</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Skladem</dt><dd>2&nbsp;400+ položek</dd></div>
            <div><dt>Odběr</dt><dd>Ještě dnes v centru</dd></div>
            <div><dt>Původ</dt><dd>Přímo od výrobců</dd></div>
          </dl>
        </div>
      </section>

      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="sec-head">
          <p className="eyebrow">Novinky na skladě</p>
          <h2 id="sortiment-h" className="sec-title">Co teď leží na regálech</h2>
          <p className="sec-sub">
            Čtyři kusy, které řeší celý pracovní den — od tažení linky po sterilní
            provoz. Ceny bez DPH pro registrovaná studia.
          </p>
        </div>

        <div className="grid">
          {machines.map((m) => (
            <article className="card" key={m.no}>
              <div className="card-top">
                <span className="card-no">{m.no}</span>
                <span className="card-cat">{m.cat}</span>
              </div>
              <h3 className="card-name">{m.name}</h3>
              <p className="card-desc">{m.desc}</p>
              <div className="card-foot">
                <span className="card-tag">{m.tag}</span>
                <span className="card-price">
                  <span className="card-price-num">{m.price}</span>
                  <span className="card-price-cur">€</span>
                </span>
              </div>
              <a className="card-link" href="#sortiment">
                Zobrazit produkt
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>

        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Uspořádané kazety s tetovacími jehlami a barvami na pracovním stole"
            className="strip-img"
            width={1600}
            height={700}
          />
          <figcaption className="strip-cap">
            Kazety, barvy a hygiena skladem — připravené k expedici i osobnímu odběru.
          </figcaption>
        </figure>
      </section>

      <section className="studio" id="studio" aria-labelledby="studio-h">
        <div className="studio-grid">
          <div className="studio-media">
            <img
              src="/section-2.webp"
              alt="Interiér tetovacího studia s profesionálním vybavením"
              className="studio-img"
              width={1200}
              height={1400}
            />
          </div>
          <div className="studio-copy">
            <p className="eyebrow eyebrow-light">Proč nakupovat u nás</p>
            <h2 id="studio-h" className="sec-title sec-title-light">
              Dodavatel, na kterého se studio spolehne
            </h2>
            <p className="studio-lede">
              Zásobujeme pražská i mimopražská studia od jehel po autokláv.
              Čtyři věci, které u nás dostanete pokaždé:
            </p>
            <ol className="promise-list">
              {promises.map((p, i) => (
                <li className="promise" key={p.t}>
                  <span className="promise-no" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="promise-body">
                    <span className="promise-k">{p.k}</span>
                    <h3 className="promise-t">{p.t}</h3>
                    <p className="promise-d">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// silence unused type import in strict setups
type _CSS = CSSProperties;
