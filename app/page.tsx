import { AiImage } from "./_ui";
import { StatusBar } from "./motion";

function Tick() {
  return (
    <svg className="tick" viewBox="0 0 40 24" aria-hidden="true">
      <path d="M2 14 C 8 21, 12 22, 17 16 C 24 8, 31 5, 38 3" />
    </svg>
  );
}

const services = [
  { name: "Přezutí a vyvážení", note: "osobní vůz, 4 kola", price: "od 890 Kč", tick: true },
  { name: "Vyvážení kola", note: "olověná i lepená závaží", price: "120 Kč / kolo" },
  { name: "Geometrie 3D náprav", note: "měření + seřízení", price: "od 690 Kč" },
  { name: "Oprava defektu", note: "knot i vulkanizace zevnitř", price: "od 250 Kč" },
  { name: "Uskladnění pneu", note: "přes sezónu, včetně kontroly", price: "690 Kč / sezóna" },
  { name: "Plnění klimatizace", note: "R134a i R1234yf", price: "od 990 Kč" },
];

const pillars = [
  {
    key: "RYCHLOST",
    body:
      "Standardní přezutí i s vyvážením zvládneme, než dopijete kávu ve zdejší čekárně. Přijeďte na Ukázkovou 123, nebo se objednejte na konkrétní čas a nestůjte ve frontě.",
  },
  {
    key: "SPOLEHLIVOST",
    body:
      "Vyvažovačku i 3D geometrii kalibrujeme, mechanici chodí na pravidelná školení. Každé kolo dotáhneme momentovým klíčem na předepsaný utahovací moment — žádné „od oka“.",
  },
  {
    key: "ZÁRUKA",
    body:
      "Za odvedenou práci ručíme. Když s koly nebo tlakem něco nebude sedět, vrátíte se a doladíme to. Poradíme i zadarmo — třeba jaká guma sedne na váš vůz a rozpočet.",
  },
];

export default function Page() {
  return (
    <div className="page">
      <StatusBar />

      <header className="hero">
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Kolo na vyvažovačce v pneuservisu DM servis v Českých Budějovicích"
            className="media-img"
          />
        </div>
        <div className="hero-inner wrap">
          <p className="eyebrow">Pneuservis &nbsp;·&nbsp; České Budějovice</p>
          <h1 className="hero-title">
            Přezuto,
            <br />
            vyváženo,
            <br />
            <span className="hi">hotovo.</span>
          </h1>
          <p className="hero-sub">
            Kolo dolů, vyvážit, dotáhnout momentem — a jedete dál. Čtyři gumy
            zvládneme za desítky minut, ne za půl dne.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="tel:+420777111222">
              <Tick />
              Objednat přezutí
            </a>
            <a className="btn btn-ghost" href="#cenik">
              Prohlédnout ceník
            </a>
          </div>
        </div>
      </header>

      <div className="tread" role="presentation" aria-hidden="true" />

      <section className="section" id="cenik">
        <div className="wrap">
          <div className="sec-head">
            <span className="dial" aria-hidden="true">
              <span className="dial-num">01</span>
            </span>
            <div>
              <h2 className="sec-title">Co u nás natočíte na zvedák</h2>
              <p className="sec-lead">
                Orientační ceny za osobní vozy. Přesnou částku řekneme na místě
                podle rozměru kol a stavu gum — nikdy až na faktuře.
              </p>
            </div>
          </div>

          <div className="sec-grid">
            <ul className="pricelist">
              {services.map((s) => (
                <li className={"price-row" + (s.tick ? " is-active" : "")} key={s.name}>
                  <span className="pr-mark" aria-hidden="true">
                    {s.tick ? <Tick /> : null}
                  </span>
                  <span className="pr-name">
                    {s.name}
                    <span className="pr-note">{s.note}</span>
                  </span>
                  <span className="pr-price">{s.price}</span>
                </li>
              ))}
            </ul>
            <figure className="sec-figure">
              <AiImage
                src="/section-1.webp"
                alt="Mechanik přezouvá zimní pneumatiku na přezouvačce"
                className="media-img"
              />
            </figure>
          </div>
        </div>
      </section>

      <div className="tread" role="presentation" aria-hidden="true" />

      <section className="section section-dark">
        <div className="wrap">
          <div className="sec-head">
            <span className="dial" aria-hidden="true">
              <span className="dial-num">02</span>
            </span>
            <div>
              <h2 className="sec-title">Proč nechat kola nám</h2>
              <p className="sec-lead">
                Rychloservis v Českých Budějovicích, který funguje pořád — ne
                web, co zůstal stát v roce 2016.
              </p>
            </div>
          </div>

          <div className="pillars">
            {pillars.map((p) => (
              <article className="pillar" key={p.key}>
                <h3 className="pillar-key">
                  <Tick />
                  {p.key}
                </h3>
                <p className="pillar-body">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="trust">
            <figure className="sec-figure trust-figure">
              <AiImage
                src="/section-2.webp"
                alt="Dílna pneuservisu DM servis s regály sezonních pneumatik"
                className="media-img"
              />
            </figure>
            <div className="trust-notes">
              <blockquote className="quote">
                „Přijel jsem bez objednání v listopadovém náporu a za tři čtvrtě
                hodiny jsem měl přezuto a vyvážené. Přesně tak si rychloservis
                představuju.“
                <cite>— Petr H., Rožnov, jezdí sem pátým rokem</cite>
              </blockquote>
              <dl className="facts">
                <div>
                  <dt>Kde nás najdete</dt>
                  <dd>Ukázková 123, České Budějovice</dd>
                </div>
                <div>
                  <dt>Objednávky na čas</dt>
                  <dd>777 111 222</dd>
                </div>
                <div>
                  <dt>Otevřeno</dt>
                  <dd>Po–Pá 7:30–17:00 · So 7:30–12:00</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
