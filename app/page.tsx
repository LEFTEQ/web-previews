import type { CSSProperties } from "react";

const tydenniNabidka = [
  { name: "Kváskový žitno-pšeničný", day: "denně", desc: "Dvoudenní vedení kvásku, pečený na kameni do tmava.", price: "64 Kč" },
  { name: "Antonínův selský", day: "denně", desc: "Poctivá pšeničná střída, silná křupavá kůrka.", price: "58 Kč" },
  { name: "Máslový croissant", day: "út–ne", desc: "Francouzské máslo, 27 vrstev, pečeno ráno.", price: "49 Kč" },
  { name: "Skořicový šnek", day: "pá–ne", desc: "Skořice, třtinový cukr, poleva z pravé vanilky.", price: "52 Kč" },
  { name: "Špaldová bageta", day: "st a so", desc: "Celozrnná špalda, dlouhá noční fermentace.", price: "42 Kč" },
];

const pekarstvi = [
  { hood: "Vinohrady", addr: "Náměstí Míru 585/11" },
  { hood: "Vinohrady", addr: "Laubova 4" },
  { hood: "Smíchov", addr: "Štefánikova 339/39" },
  { hood: "Bubeneč", addr: "Čs. armády 729/28" },
  { hood: "Holešovice", addr: "Strossmayerovo nám. 11" },
  { hood: "Karlín", addr: "Sokolovská 55" },
  { hood: "Vršovice", addr: "Moskevská 38" },
];

export default function Page() {
  const imgStyle: CSSProperties = { width: "100%", height: "auto", display: "block" };
  return (
    <main>
      <header className="nav">
        <div className="wrap">
          <a className="wordmark" href="#" aria-label="Antonínovo pekařství — domů">
            <span className="a">Antonínovo</span>
            <span className="rest">pekařství · Praha</span>
          </a>
          <nav aria-label="Hlavní">
            <ul className="nav-links">
              <li><a href="#nabidka">Tento týden</a></li>
              <li><a href="#pekarstvi">O pekařství</a></li>
              <li><a href="#pekarstvi">Kudy k nám</a></li>
              <li><a href="#hledame">Hledáme pekaře</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-clock">04:12 — pece už běží</p>
            <h1>
              <span className="line">Zatímco ještě</span>
              <span className="line"><em>spíte,</em></span>
              <span className="line">my zaděláváme.</span>
            </h1>
            <p className="hero-lead">
              Kvásek vedeme dva dny, chleba pečeme na kameni a ráno ho
              klademe na pult teplý. Sedm pekáren po Praze — a pečeme
              přímo před vašima očima.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#nabidka">Co pečeme tento týden</a>
              <a className="btn btn-ghost" href="#pekarstvi">Najít nejbližší pekárnu</a>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/hero.webp" alt="Čerstvě upečené bochníky kváskového chleba na dřevěném pultu Antonínova pekařství" />
          </div>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="wrap">
          <span>Kváskový chléb</span>
          <span>Máslové croissanty</span>
          <span>Voňavá káva</span>
          <span>Pečeno v noci</span>
          <span>Sedm pekáren v Praze</span>
        </div>
      </div>

      <section className="section offer" id="nabidka">
        <div className="wrap">
          <div className="offer-head">
            <div>
              <p className="eyebrow"><span className="num">1</span>Aktuální nabídka</p>
              <h2>Co vaříme a pečeme <em>tento týden</em></h2>
            </div>
            <p className="section-lead">
              Nabídka se mění podle dne a podle toho, co dozraje v kvásku.
              Nejlepší je přijít ráno — nebo si nechat dobroty poslat přes
              Wolt či Bolt Food až domů.
            </p>
          </div>

          <div className="offer-media">
            <img src="/section-1.webp" alt="Výběr čerstvého pečiva — bagety, croissanty a sladké šneky v pekárně" style={imgStyle} />
          </div>

          <div className="menu-list">
            {tydenniNabidka.map((it) => (
              <div className="menu-item" key={it.name}>
                <div className="name">
                  {it.name}
                  <span className="day">{it.day}</span>
                </div>
                <div className="price">{it.price}</div>
                <p className="desc">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="pekarstvi">
        <div className="wrap">
          <p className="eyebrow"><span className="num">2</span>O pekařství</p>
          <div className="about-grid">
            <div className="about-media">
              <img src="/section-2.webp" alt="Pekař tvaruje těsto u pece v Antonínově pekařství" style={imgStyle} />
            </div>
            <div className="about-copy">
              <h2>Poctivé řemeslo, <em>žádné zkratky</em></h2>
              <p>
                Antonínovo pekařství vzniklo z jednoduché myšlenky: chleba
                má vonět po mouce a kvásku, ne po zlepšovácích. Pečeme
                v noci, aby na vás ráno čekaly teplé bochníky s křupavou
                kůrkou.
              </p>
              <p>
                K pečivu přímo z pece si u nás dáte i dobrou kávu.
                Přijďte si posedět — nebo si necháte něco dobrého zabalit
                domů. Za těch pár let jsme vyrostli na sedm pekáren po
                celé Praze.
              </p>

              <div className="shops">
                {pekarstvi.map((s) => (
                  <div className="shop" key={s.addr}>
                    <div className="hood">{s.hood}</div>
                    <div className="addr">{s.addr}</div>
                  </div>
                ))}
              </div>

              <div className="hire" id="hledame">
                <div className="txt">
                  <h3>Máte chuť dělat poctivé řemeslo?</h3>
                  <p>Hledáme pekaře, které baví práce rukama a vůně kvásku po ránu.</p>
                </div>
                <a className="btn btn-primary" href="mailto:info@antoninovopekarstvi.cz?subject=Hledáme%20pekaře">Napsat nám</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
