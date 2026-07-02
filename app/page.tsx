export const metadata = {
  title: "ATROS sádrokartony s.r.o. — Sádrokartonářské práce Liberec",
  description:
    "Sádrokartonové příčky, podhledy, půdní vestavby a akustické konstrukce v Liberci a okolí. ATROS sádrokartony — rovné stěny, čisté spáry, pevné termíny.",
  openGraph: {
    title: "ATROS sádrokartony s.r.o. — Liberec",
    description:
      "Příčky, podhledy, půdní vestavby a akustika ze sádrokartonu. Liberecký kraj.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "W 111",
    nazev: "Příčky a předstěny",
    popis:
      "Jednoduše i dvojitě opláštěné příčky na CW/UW profilech. Rozdělíme byt, kancelář nebo ordinaci — bez mokrého procesu, do týdne hotovo včetně tmelení v kvalitě Q2–Q3.",
    detail: "tl. 75–155 mm · vata uvnitř",
  },
  {
    kod: "D 112",
    nazev: "Podhledy a světelné rampy",
    popis:
      "Zavěšené podhledy na křížovém roštu CD 60/27. Schováme rozvody, připravíme otvory na bodovky a vzduchotechniku, srovnáme křivý strop v paneláku i novostavbě.",
    detail: "snížení od 60 mm · LED nika na přání",
  },
  {
    kod: "D 611",
    nazev: "Půdní vestavby",
    popis:
      "Z půdy pokoj. Parozábrana, minerální izolace mezi a pod krokvemi, protipožární desky. V Liberci a Jablonci děláme podkroví, ve kterých se dá bydlet i v lednu.",
    popisB: "",
    detail: "izolace až 300 mm · desky DF (červené)",
  },
  {
    kod: "W 116",
    nazev: "Akustické konstrukce",
    popis:
      "Instalační a akustické příčky s dvojitým roštem. Modré desky, těžká vata, oddělené profily — soused za stěnou přestane existovat. Měřitelně, ne pocitově.",
    detail: "Rw až 61 dB · desky MA (modré)",
  },
];

const zasady = [
  {
    tag: "Rovina",
    text: "Každou stěnu kontrolujeme dvoumetrovou latí. Odchylka nad 2 mm znamená, že se tmelí znovu — na náš účet.",
  },
  {
    tag: "Termín",
    text: "Řekneme datum a to platí. Materiál vozíme vlastní dodávkou ze skladu v Liberci, nečekáme na cizí závoz.",
  },
  {
    tag: "Úklid",
    text: "Prach ze sádrokartonu umíme udržet v jedné místnosti. Zakrýváme, brousíme s odsáváním, odvážíme odřezky.",
  },
];

export default function Page() {
  return (
    <main className="at">
      {/* ================= HERO ================= */}
      <header className="at-hero">
        <div className="at-hero__topbar">
          <span className="at-wordmark" aria-label="ATROS sádrokartony">
            ATROS<span className="at-wordmark__sub">sádrokartony</span>
          </span>
          <span className="at-hero__loc">Liberec · od r. 2004</span>
        </div>

        <div className="at-hero__grid">
          <div className="at-hero__text">
            <p className="at-eyebrow">
              <span className="at-eyebrow__rule" aria-hidden="true"></span>
              Sádrokartonářské práce · Liberecký kraj
            </p>
            <h1 className="at-hero__title">
              Stěna rovná
              <br />
              jako <em>deska,</em>
              <br />
              ze které je.
            </h1>
            <p className="at-hero__lead">
              Příčky, podhledy, podkroví a akustika ze sádrokartonu. Suchá
              stavba znamená: v pondělí profily, ve středu desky, v pátek
              malujete. Bez mokrého procesu, bez týdnů schnutí.
            </p>
            <div className="at-hero__cta">
              <a className="at-btn at-btn--primary" href="tel:+420485000000">
                Zavolat a domluvit obhlídku
              </a>
              <a className="at-btn at-btn--ghost" href="#sluzby">
                Co stavíme
              </a>
            </div>
          </div>

          <figure className="at-hero__media">
            <img
              src="/hero.webp"
              alt="Sádrokartonář montuje desku na kovový rošt příčky"
              className="at-img"
            />
            <figcaption className="at-hero__caption">
              Montáž dvojitě opláštěné příčky · Liberec-Rochlice
            </figcaption>
          </figure>
        </div>

        {/* signature: pásek rozměrů jako popis na hraně sádrokartonové desky */}
        <div className="at-edge" aria-hidden="true">
          <span>KNAUF WHITE 12,5 × 1250 × 2000</span>
          <span className="at-edge__dot">●</span>
          <span>ROŠT CW 75 à 625 mm</span>
          <span className="at-edge__dot">●</span>
          <span>TMELENÍ Q3</span>
          <span className="at-edge__dot">●</span>
          <span>ROVINNOST ±2 mm / 2 m</span>
          <span className="at-edge__dot">●</span>
          <span>ATROS · LIBEREC</span>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="at-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="at-section__head">
          <p className="at-eyebrow">
            <span className="at-eyebrow__rule" aria-hidden="true"></span>
            Konstrukce, které montujeme
          </p>
          <h2 className="at-h2" id="sluzby-h">
            Každá stěna má své číslo.
            <span className="at-h2__note">
              Konstrukce značíme systémovými kódy — podle nich přesně víte, co
              vám nabízíme a co bude ve zdi.
            </span>
          </h2>
        </div>

        <div className="at-services">
          {sluzby.map((s) => (
            <article className="at-card" key={s.kod}>
              <div className="at-card__kod">{s.kod}</div>
              <h3 className="at-card__title">{s.nazev}</h3>
              <p className="at-card__text">{s.popis}</p>
              <p className="at-card__detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <figure className="at-band">
          <img
            src="/section-1.webp"
            alt="Kovový rošt z CD profilů připravený na opláštění podhledu"
            className="at-img"
          />
          <figcaption className="at-band__caption">
            Rošt podhledu před opláštěním. To, co nebude vidět, rozhoduje o
            tom, jak dlouho vydrží to, co vidět bude.
          </figcaption>
        </figure>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="at-section at-section--dark" aria-labelledby="duvera-h">
        <div className="at-trust">
          <div className="at-trust__text">
            <p className="at-eyebrow at-eyebrow--light">
              <span className="at-eyebrow__rule" aria-hidden="true"></span>
              Proč ATROS
            </p>
            <h2 className="at-h2 at-h2--light" id="duvera-h">
              Dvacet let děláme jedno řemeslo. Pořádně.
            </h2>
            <p className="at-trust__lead">
              Nejsme parta, co „umí všechno“. Montujeme sádrokarton — od bytu
              v paneláku na Kunratické po kanceláře v centru Liberce. Majitel
              firmy je na každé stavbě a spáru pozná po hmatu.
            </p>

            <ul className="at-rules">
              {zasady.map((z) => (
                <li className="at-rules__item" key={z.tag}>
                  <span className="at-rules__tag">{z.tag}</span>
                  <p className="at-rules__text">{z.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="at-trust__side">
            <figure className="at-trust__media">
              <img
                src="/section-2.webp"
                alt="Hotový interiér s dokončeným sádrokartonovým podhledem a čistými spárami"
                className="at-img"
              />
            </figure>
            <blockquote className="at-quote">
              <p>
                „Podkroví 68 m² hotové za dvanáct dní včetně tmelení. Přišli,
                kdy řekli, a po odchodu jsme luxovali jen z povinnosti.“
              </p>
              <cite>— rodina Hendrychova, Liberec-Ruprechtice</cite>
            </blockquote>
            <dl className="at-facts">
              <div className="at-facts__item">
                <dt>Působíme</dt>
                <dd>Liberec, Jablonec n. N., Frýdlantsko</dd>
              </div>
              <div className="at-facts__item">
                <dt>Obhlídka a nacenění</dt>
                <dd>Zdarma, do 5 pracovních dnů</dd>
              </div>
              <div className="at-facts__item">
                <dt>Materiál</dt>
                <dd>Systémy Knauf a Rigips, vlastní sklad</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
