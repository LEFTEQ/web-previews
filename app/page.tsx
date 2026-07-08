import type { CSSProperties } from "react";

export const metadata = {
  title: "Masová Bedýnka — řeznictví s původem, Merhautova 51, Brno",
  description:
    "Řeznictví na Merhautově v Brně. Hovězí, vepřové a kuřecí maso ze 100% českých chovů, doložený původ, vyzrálé steaky a domácí speciality. Vlastní bedýnky masa s dovozem po Brně.",
  openGraph: {
    title: "Masová Bedýnka — řeznictví s původem, Brno",
    description:
      "Maso, u kterého víte, z jakého chovu je. Řeznictví Merhautova 51, Brno. Bedýnky s dovozem po celém Brně.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

type Cut = {
  no: string;
  name: string;
  origin: string;
  note: string;
  price: string;
  unit: string;
  stav: "skladem" | "na objednávku";
};

const pult: Cut[] = [
  {
    no: "01",
    name: "Vepřové zadní koleno s kostí",
    origin: "Český chov, doložený původ",
    note: "Na pomalé pečení do křupava",
    price: "129",
    unit: "Kč / kg",
    stav: "skladem",
  },
  {
    no: "02",
    name: "Kuře celé",
    origin: "Český chov, doložený původ",
    note: "Čerstvé, nemražené",
    price: "143",
    unit: "Kč / kg",
    stav: "skladem",
  },
  {
    no: "03",
    name: "Klobása se sýrem na gril",
    origin: "Vlastní výroba v řeznictví",
    note: "Točíme sami, grilovací sezóna",
    price: "239",
    unit: "Kč / kg",
    stav: "na objednávku",
  },
  {
    no: "04",
    name: "Špekáčky",
    origin: "Vlastní receptura",
    note: "Poctivé, na oheň i na pánev",
    price: "207",
    unit: "Kč / kg",
    stav: "skladem",
  },
];

const duvera = [
  {
    k: "100%",
    t: "doložený původ",
    d: "U každého kusu víme, z jakého českého chovu je. Žádné „odněkud z EU“.",
  },
  {
    k: "So 8–12",
    t: "otevřeno i v sobotu",
    d: "Merhautova 51, Brno. Přijďte si vybrat u pultu, poradíme s výběrem.",
  },
  {
    k: "Brnem",
    t: "rozvoz bedýnek",
    d: "Nad 700 Kč po Brně zdarma, do 699 Kč za 99 Kč. Do všech městských částí.",
  },
];

export default function Page() {
  return (
    <main className="mb-page">
      <header className="mb-top">
        <a className="mb-brand" href="#" aria-label="Masová Bedýnka, řeznictví Brno">
          <span className="mb-brand-word">Masová</span>
          <span className="mb-brand-word mb-brand-word--fill">Bedýnka</span>
          <span className="mb-brand-sub">řeznictví · Brno · od pultu</span>
        </a>
        <a className="mb-toplink" href="tel:+420731508289">731&nbsp;508&nbsp;289</a>
      </header>

      <section className="mb-hero" aria-labelledby="mb-hero-title">
        <div className="mb-hero-media">
          <img
            src="/hero.webp"
            alt="Vyzrálé hovězí maso na pultu řeznictví Masová Bedýnka v Brně"
            className="mb-hero-img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="mb-hero-body">
          <p className="mb-eyebrow">Merhautova 51, Brno · řeznictví u pultu</p>
          <h1 id="mb-hero-title" className="mb-hero-title">
            Víte, z&nbsp;jakého chovu
            <br />
            je maso ve&nbsp;vaší <span className="mb-underline">bedýnce</span>?
          </h1>
          <p className="mb-lede">
            My ano. Hovězí, vepřové a&nbsp;kuřecí ze&nbsp;100&nbsp;% českých chovů
            s&nbsp;doloženým původem. Vyzrálé steaky, čerstvé nemražené maso
            a&nbsp;domácí speciality — sádlo se&nbsp;škvarky i&nbsp;klobásy točíme
            přímo u&nbsp;nás v&nbsp;řeznictví.
          </p>
          <div className="mb-hero-actions">
            <a className="mb-cta" href="#pult">Prohlédnout pult</a>
            <a className="mb-cta mb-cta--ghost" href="#duvera">Jak vozíme bedýnky</a>
          </div>
          <dl className="mb-stamp">
            <div>
              <dt>Původ</dt>
              <dd>české chovy</dd>
            </div>
            <div>
              <dt>Zrání</dt>
              <dd>vyzrálé i čerstvé</dd>
            </div>
            <div>
              <dt>Výroba</dt>
              <dd>vlastní, u pultu</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mb-section" id="pult" aria-labelledby="mb-pult-title">
        <div className="mb-section-head">
          <p className="mb-eyebrow">Dnes na pultu</p>
          <h2 id="mb-pult-title" className="mb-h2">
            Čerstvá nabídka &amp;&nbsp;naše speciality
          </h2>
          <p className="mb-section-note">
            Ceny za&nbsp;kilo, maso vážíme a&nbsp;bouráme na&nbsp;místě. Co je
            skladem, přidáte rovnou do&nbsp;bedýnky.
          </p>
        </div>

        <ul className="mb-cuts">
          {pult.map((c) => (
            <li className="mb-cut" key={c.no}>
              <span className="mb-cut-no" aria-hidden="true">
                {c.no}
              </span>
              <div className="mb-cut-main">
                <h3 className="mb-cut-name">{c.name}</h3>
                <p className="mb-cut-origin">{c.origin}</p>
                <p className="mb-cut-note">{c.note}</p>
              </div>
              <div className="mb-cut-price">
                <span className="mb-cut-value">{c.price}</span>
                <span className="mb-cut-unit">{c.unit}</span>
                <span
                  className={
                    "mb-tag " +
                    (c.stav === "skladem" ? "mb-tag--in" : "mb-tag--order")
                  }
                >
                  {c.stav}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="mb-figure">
          <img
            src="/section-1.webp"
            alt="Domácí speciality řeznictví — klobásy, špekáčky a sádlo se škvarky"
            className="mb-figure-img"
            width={1600}
            height={1000}
          />
          <figcaption className="mb-figure-cap">
            Klobásy, špekáčky i&nbsp;sádlo se&nbsp;škvarky škvaříme a&nbsp;točíme
            sami — přímo v&nbsp;řeznictví na&nbsp;Merhautově.
          </figcaption>
        </figure>
      </section>

      <section className="mb-section mb-section--dark" id="duvera" aria-labelledby="mb-duvera-title">
        <div className="mb-trust">
          <div className="mb-trust-copy">
            <p className="mb-eyebrow mb-eyebrow--light">Proč k nám</p>
            <h2 id="mb-duvera-title" className="mb-h2 mb-h2--light">
              Maso s&nbsp;jménem, ne&nbsp;s&nbsp;etiketou
            </h2>
            <p className="mb-trust-lede">
              Jsme řeznictví na&nbsp;Merhautově 51 v&nbsp;Brně. Nakupujeme
              z&nbsp;českých chovů s&nbsp;doloženým původem, protože chuť čerstvého
              a&nbsp;vyzrálého masa se&nbsp;s&nbsp;mraženým nedá srovnat. Maso
              od&nbsp;nás už berou i&nbsp;brněnské restaurace a&nbsp;hospůdky,
              kterým na&nbsp;kvalitě talíře záleží.
            </p>
            <ul className="mb-facts">
              {duvera.map((f) => (
                <li className="mb-fact" key={f.t}>
                  <span className="mb-fact-k">{f.k}</span>
                  <span className="mb-fact-t">{f.t}</span>
                  <span className="mb-fact-d">{f.d}</span>
                </li>
              ))}
            </ul>
            <div className="mb-contact">
              <a className="mb-cta mb-cta--light" href="tel:+420731508289">
                Zavolat 731&nbsp;508&nbsp;289
              </a>
              <a className="mb-mail" href="mailto:nakup@masovabedynka.cz">
                nakup@masovabedynka.cz
              </a>
            </div>
          </div>
          <figure className="mb-figure mb-figure--trust">
            <img
              src="/section-2.webp"
              alt="Řeznický pult Masové Bedýnky s výběrem masa z českých chovů"
              className="mb-figure-img"
              width={1200}
              height={1400}
            />
            <figcaption className="mb-figure-cap mb-figure-cap--light">
              Otevřeno i&nbsp;v&nbsp;sobotu 8–12. Přijďte si vybrat u&nbsp;pultu.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
