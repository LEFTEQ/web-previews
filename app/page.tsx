import React from "react";

const beers = [
  {
    abv: "11°",
    type: "Světlý ležák",
    name: "Světlá jedenáctka",
    desc: "Klasika po libereckém způsobu — chlebová sladovost, jemná hořkost žateckého chmele a čistý, suchý závěr. Pivo, které chcete druhé.",
    color: "#E0A63A",
  },
  {
    abv: "12°",
    type: "Polotmavý ležák",
    name: "Polotmavá dvanáctka",
    desc: "Karamelové a oříškové tóny z pražených sladů, plné tělo a doznívající hořkost. Vařeno pomalu, na spodní kvasnice.",
    color: "#8A4B22",
  },
  {
    abv: "5,4 %",
    type: "Svrchní speciál",
    name: "Domácí ALE",
    desc: "Ovocnější, přístupnější, s vůní po marmeládě a citrusu. Svrchní kvašení, které dává pivu šťávu i charakter.",
    color: "#C6521B",
  },
  {
    abv: "6,2 %",
    type: "IPA se zámoř. chmely",
    name: "Liberecká IPA",
    desc: "Zahraniční chmely tady rozdávají tropické ovoce, pryskyřici a šťavnatou hořkost. Náš experiment, ze kterého se stal stálý čep.",
    color: "#D9822B",
  },
];

export default function Page() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="mark">
            Kousek&nbsp;<b>Piva</b> <span>Liberec</span>
          </div>
          <div className="nav-links">
            <a href="#piva">Naše piva</a>
            <a href="#pivovar">O pivovaru</a>
            <a href="#ochutnat">Kde ochutnat</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Měděná varna minipivovaru Kousek Piva s vroucí mladinou"
        />
        <div className="hero-veil" />
        <div className="wrap hero-inner">
          <span className="hero-eyebrow reveal">Minipivovar v areálu starého mlýna · Liberec</span>
          <h1 className="reveal d1">
            Poctivost <em>v každém</em> <span className="cu">doušku.</span>
          </h1>
          <p className="hero-lede reveal d2">
            Řemeslný pivovar z Liberce. Na desetihektolitrové varně vaříme české
            ležáky z domácích sladů i svrchní speciály se zámořskými chmely —
            ručně, po várkách, bez zbytečného spěchu.
          </p>
          <dl className="hero-meta reveal d3">
            <div>
              <dt>Varna</dt>
              <dd>10 HL</dd>
            </div>
            <div>
              <dt>Na čepu</dt>
              <dd>4 stálice</dd>
            </div>
            <div>
              <dt>Kvašení</dt>
              <dd>Spodní i svrchní</dd>
            </div>
          </dl>
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>Světlý 11°</span>
            <span>Polotmavá 12°</span>
            <span>Domácí ALE</span>
            <span>Liberecká IPA</span>
            <span>České slady</span>
            <span>Žatecký chmel</span>
            <span>Světlý 11°</span>
            <span>Polotmavá 12°</span>
            <span>Domácí ALE</span>
            <span>Liberecká IPA</span>
            <span>České slady</span>
            <span>Žatecký chmel</span>
          </div>
        </div>
      </header>

      <section id="piva" className="piva">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">Náš čep · stupňovitost podle receptu</span>
            <h2>Čtyři piva, čtyři povahy</h2>
            <p>
              Dva tradiční ležáky pro každý den a dva svrchně kvašené speciály,
              když máte chuť na něco svého. Vše vaříme sami, tady v Liberci.
            </p>
          </div>
          <div className="piva-grid">
            {beers.map((b) => (
              <article className="beer" key={b.name}>
                <span className="beer-swatch" style={{ background: b.color }} />
                <div className="beer-abv">
                  {b.abv}
                </div>
                <div className="beer-type">{b.type}</div>
                <h3>{b.name}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pivovar" className="about">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <span className="kicker">O pivovaru · řemeslo a suroviny</span>
              <h2>Ve starém mlýně se rodí piva s charakterem</h2>
              <p>
                V areálu bývalého mlýna jsme vybudovali moderní provoz, kde se
                každý den potkává technologie s ruční prací. Vaříme převážně
                tradiční české ležáky z kvalitních českých sladů a chmelů —
                a nebojíme se sáhnout po zahraničních chmelech, které našim
                speciálům dodávají nečekané ovocné tóny.
              </p>
              <p>
                Kousek Piva není jen pivovar. Je to parta nadšenců, která stojí
                za každým douškem — od výběru surovin až po nalití. V čele je
                sládek, který hlídá každou várku a rád experimentuje s chutěmi.
              </p>
              <dl className="facts">
                <div>
                  <dt>2017</dt>
                  <dd>Vaříme od</dd>
                </div>
                <div>
                  <dt>100 %</dt>
                  <dd>České slady v ležácích</dd>
                </div>
                <div>
                  <dt>ruční</dt>
                  <dd>Práce u každé várky</dd>
                </div>
              </dl>
            </div>
            <figure className="about-fig">
              <img
                src="/section-1.webp"
                alt="Sládek Kousek Piva kontroluje várku ve varně starého mlýna"
              />
              <figcaption>„Za každou várkou stojí konkrétní člověk.“</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="ochutnat" className="piva" style={{ background: "var(--foam)" }}>
        <div className="wrap">
          <div className="about-grid">
            <figure className="about-fig">
              <img
                src="/section-2.webp"
                alt="Načepované pivo Kousek Piva na baru v libereckém Beer WAREHOUSE"
              />
            </figure>
            <div>
              <span className="kicker">Kde ochutnat · Liberec, Hanychovská</span>
              <h2>Čerstvé přímo od zdroje</h2>
              <p style={{ opacity: 0.85 }}>
                Naše piva čepujeme tam, kde vznikají. Zastavte se na jedno —
                nebo rovnou na ochutnávkovou sadu všech čtyř.
              </p>
              <div className="taps">
                <div className="tap" style={{ borderColor: "var(--line)" }}>
                  <b>Beer WAREHOUSE</b>
                  <span>Restaurace · piva z tanku a poctivá kuchyně</span>
                </div>
                <div className="tap" style={{ borderColor: "var(--line)" }}>
                  <b>Club WAREHOUSE</b>
                  <span>Hudební klub · pivo k dobré muzice</span>
                </div>
              </div>
              <div className="taps">
                <div className="tap" style={{ borderColor: "var(--line)" }}>
                  <b>Hanychovská 328/10</b>
                  <span>460 07 Liberec · areál starého mlýna</span>
                </div>
                <div className="tap" style={{ borderColor: "var(--line)" }}>
                  <b>+420 737 525 577</b>
                  <span>info@kousekpiva.cz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
