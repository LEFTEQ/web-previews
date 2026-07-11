import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krby & kamna FORTELL — kamnářství v Praze 10 Hostivaři",
  description:
    "Stavíme krby a kachlová kamna na míru od roku 1993. Výhradní dovozce HARK do ČR. Prodejna Kamelova 1, Praha 10 – Hostivař.",
};

const offers = [
  {
    idx: "tah 01",
    name: "Krby na míru",
    desc: "Návrh i vyzdění přímo do vašeho obývacího pokoje — od otevřeného ohniště po prosklenou vložku s rozvodem tepla.",
  },
  {
    idx: "tah 02",
    name: "Krbová kamna",
    desc: "Litinová i ocelová kamna s moderním spalováním. Postavíme, napojíme na komín a předvedeme první zátop.",
  },
  {
    idx: "tah 03",
    name: "Kachlová kamna",
    desc: "Ručně skládané kachle, které akumulují teplo dlouho po vyhasnutí. Sálavé teplo, jaké kovová kamna nedají.",
  },
  {
    idx: "tah 04",
    name: "Servis & komín",
    desc: "Prohlídka, čištění a revize. Poradíme, co s dřevem, tahem i vlhkým komínem — ne až když přijde chladno.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="mark" href="#top" aria-label="FORTELL — krby a kamna, úvod">
          <span>
            FOR<span className="flame">T</span>ELL
          </span>
          <span className="co">kamnářství</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#hark">HARK</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-img-wrap">
          <img
            className="hero-img"
            src="/hero.webp"
            width={1600}
            height={686}
            alt="Hořící krb s prosklenou vložkou v obývacím pokoji"
            fetchPriority="high"
          />
          <div className="hero-veil" />
        </div>
        <div className="hero-copy">
          <p className="hero-eyebrow">Kamnářství Praha 10 · od roku 1993</p>
          <h1>
            Postavíme oheň, u&nbsp;kterého <em>zůstanete</em> sedět.
          </h1>
          <p className="hero-lead">
            Krby a kachlová kamna vyzděná na míru vašeho pokoje. Přijďte se
            podívat do prodejny v Hostivaři — vedle centra Vivo — a odejděte s
            plánem, ne s letákem.
          </p>
          <div className="hero-cta">
            <a className="btn btn-fire" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="btn btn-ghost" href="tel:+420272652780">
              Zavolat 272&nbsp;652&nbsp;780
            </a>
            <span className="hero-since">30&nbsp;let u&nbsp;jednoho komína</span>
          </div>
        </div>
      </section>

      <div className="facts">
        <div className="facts-grid">
          <div className="fact">
            <b>1993</b>
            <span>rok, kdy jsme zatopili poprvé</span>
          </div>
          <div className="fact">
            <b>1000+</b>
            <span>modelů krbů a kamen</span>
          </div>
          <div className="fact">
            <b>HARK</b>
            <span>výhradní dovozce do ČR</span>
          </div>
          <div className="fact">
            <b>8&nbsp;h</b>
            <span>hoření na jedno přiložení</span>
          </div>
        </div>
      </div>

      <section id="nabidka">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <div>
              <p className="sec-kicker">Co pro vás vyzdíme</p>
              <h2 className="sec-title">Od návrhu po první zátop</h2>
            </div>
          </div>
          <p className="offer-lead">
            Nejsme e-shop, kde si oheň objednáte v krabici. Přijedeme, změříme
            pokoj i komín a poradíme, co dává smysl u vás doma — ať už chcete
            praskající dřevo za sklem, nebo sálavé teplo z kachlí až do rána.
          </p>
          <div className="offers">
            {offers.map((o) => (
              <article className="offer" key={o.name}>
                <div className="rule" />
                <span className="offer-idx">{o.idx}</span>
                <h3>{o.name}</h3>
                <p>{o.desc}</p>
              </article>
            ))}
          </div>

          <div className="hark-band" id="hark">
            <div className="hark-txt">
              <span className="tag">Německá práce</span>
              <h3>Jsme výhradní dovozce HARK do Česka.</h3>
              <p>
                HARK staví kachlová kamna a krby v Německu už přes padesát let.
                My je jako jediní vozíme sem — včetně hybridních kamen
                HARK&nbsp;HYBRID.8, která topí kusovým dřevem i peletami. Jedno
                topeniště, dvě paliva, žádný kompromis.
              </p>
              <a className="btn btn-fire" href="#kontakt">
                Zeptat se na HARK
              </a>
            </div>
            <div className="hark-img">
              <img
                src="/section-1.webp"
                width={800}
                height={560}
                alt="Kachlová kamna HARK v interiéru"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trust" id="reference">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <div>
              <p className="sec-kicker">Proč nám lidé věří</p>
              <h2 className="sec-title">Teplo, které se osvědčí</h2>
            </div>
          </div>

          <div className="trust-grid">
            <div>
              <p className="quote">
                Váhal jsem, jestli se investice do nových kamen vyplatí. Po měsíci
                musím říct — kamna předčila má očekávání ve všech směrech.
                Neuvěřitelná výhřevnost, hoří bez problémů osm hodin a drží teplo.
              </p>
              <p className="quote-by">
                <b>Roman K.</b> — zákazník z Prahy
              </p>
              <p className="quote-model">Krbová kamna HARK 44 GT ECOplus</p>
            </div>

            <div className="trust-panel" id="kontakt">
              <h3>Kdy přijít do prodejny</h3>
              <ul className="hours">
                <li>
                  <span>Pondělí–Pátek</span>
                  <b>10:00–17:00</b>
                </li>
                <li>
                  <span>Sobota</span>
                  <b>10:00–13:00</b>
                </li>
                <li className="closed">
                  <span>Neděle</span>
                  <b>Zavřeno</b>
                </li>
              </ul>
              <p className="note">
                <b>Pozor:</b> o letních prázdninách (1.&nbsp;7.–31.&nbsp;8.) máme
                v sobotu zavřeno.
              </p>
              <div className="contact-line">
                <a href="tel:+420272652780">+420&nbsp;272&nbsp;652&nbsp;780</a>
                <a href="tel:+420602391474">+420&nbsp;602&nbsp;391&nbsp;474</a>
                <a href="mailto:info@krby-fortell.cz">info@krby-fortell.cz</a>
              </div>
              <p className="addr">
                Kamelova 1, 106&nbsp;00 Praha 10 – Hostivař
                <br />
                Vedle obchodního centra Vivo Hostivař.
              </p>
            </div>
          </div>

          <div className="trust-photo">
            <img
              src="/section-2.webp"
              width={1400}
              height={612}
              alt="Realizace krbu od firmy FORTELL v obývacím pokoji"
            />
            <p className="trust-photo-cap">
              Jedna z našich realizací — přijďte si prohlédnout další přímo na
              prodejně.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
