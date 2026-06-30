import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReNova Autoservice — autoservis u Arény, Liberec",
  description:
    "Servis vozů všech značek v Liberci. Pravidelná údržba, příprava na STK, opravy brzd, spojek a výfuků, geometrie i klimatizace. Volejte rovnou z mobilu.",
  openGraph: {
    title: "ReNova Autoservice — Liberec, u Arény",
    description:
      "Auta všech značek opravujeme už 25 let. Údržba, STK, brzdy, geometrie, klima. Objednejte se telefonem nebo e-mailem.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const tel = "+420482000000";
const telLabel = "482 000 000";
const email = "servis@renova-liberec.cz";

const brands = [
  "Škoda",
  "Volkswagen",
  "Ford",
  "Renault",
  "Seat",
  "Opel",
  "Peugeot",
];

const orders = [
  {
    no: "01",
    title: "Pravidelná servisní údržba",
    items: [
      "výměna oleje a provozních kapalin",
      "výměna filtrů a rozvodových řemenů",
      "kontrola brzdového systému",
    ],
  },
  {
    no: "02",
    title: "Příprava na STK",
    items: [
      "prohlídka vozu před technickou kontrolou",
      "návštěvu STK zařídíme za vás",
      "vrátíte se s razítkem, ne se starostmi",
    ],
  },
  {
    no: "03",
    title: "Opravy, co se pokazilo",
    items: [
      "brzdy, čepy a tlumiče pérování",
      "spojky, opravy a výměny výfuků",
      "seřízení geometrie kol",
    ],
  },
  {
    no: "04",
    title: "Zařídíme i zbytek",
    items: [
      "lakýrnické a karosářské práce",
      "výměny a opravy autoskel",
      "servis klimatizace",
    ],
  },
];

export default function Page() {
  return (
    <main className="ra">
      <header className="ra-hero">
        <img
          className="ra-hero__img"
          src="/hero.webp"
          alt="Dílna autoservisu ReNova v Liberci se zvednutým vozem na zvedáku"
        />
        <div className="ra-hero__veil" aria-hidden="true" />
        <div className="ra-hero__top">
          <span className="ra-wordmark">
            Re<span className="ra-wordmark__nova">Nova</span>
          </span>
          <span className="ra-plate">LBC&nbsp;·&nbsp;autoservis</span>
        </div>
        <div className="ra-hero__body">
          <p className="ra-eyebrow">u Arény · Karoliny Světlé 44 · od 1999</p>
          <h1 className="ra-hero__title">
            Do Renovy jezdí auta
            <br />
            <em>všech</em> značek.
          </h1>
          <p className="ra-brands" aria-label="Značky, které servisujeme">
            {brands.map((b) => (
              <span key={b} className="ra-brands__chip">
                {b}
              </span>
            ))}
            <span className="ra-brands__chip ra-brands__chip--more">a další</span>
          </p>
          <div className="ra-hero__cta">
            <a className="ra-btn ra-btn--amber" href={`tel:${tel}`}>
              Zavolat {telLabel}
            </a>
            <a className="ra-btn ra-btn--ghost" href={`mailto:${email}`}>
              Napsat e-mail
            </a>
          </div>
        </div>
      </header>

      <section className="ra-orders" aria-labelledby="orders-h">
        <div className="ra-orders__head">
          <p className="ra-section-label">Zakázkový list / co u nás projedete</p>
          <h2 id="orders-h" className="ra-h2">
            Od oleje po STK, čtyři zastávky pod jednou střechou.
          </h2>
        </div>
        <ol className="ra-orders__grid">
          {orders.map((o) => (
            <li key={o.no} className="ra-card">
              <span className="ra-card__no">{o.no}</span>
              <h3 className="ra-card__title">{o.title}</h3>
              <ul className="ra-card__list">
                {o.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="ra-note">
          <span className="ra-note__mark">!</span> Montáže tažných zařízení
          neprovádíme — ať víte předem.
        </p>
      </section>

      <section className="ra-trust" aria-labelledby="trust-h">
        <div className="ra-trust__media">
          <img
            src="/section-1.webp"
            alt="Mechanik ReNova při práci na motoru vozu"
            className="ra-trust__img"
          />
          <img
            src="/section-2.webp"
            alt="Detail nářadí a diagnostiky v dílně ReNova"
            className="ra-trust__img ra-trust__img--low"
          />
        </div>
        <div className="ra-trust__text">
          <p className="ra-section-label">25 let v jedné dílně</p>
          <h2 id="trust-h" className="ra-h2">
            Čtvrt století opravujeme liberecká auta. Pořád na stejné adrese.
          </h2>
          <p className="ra-trust__lead">
            Servisujeme Škodu, Volkswagen, Ford, Renault, Seat, Opel, Peugeot i
            další. Žádné objednání na tři týdny dopředu jen kvůli olejům —
            zavolejte a domluvíme se po lidsku.
          </p>
          <dl className="ra-facts">
            <div className="ra-fact">
              <dt>Kde nás najdete</dt>
              <dd>Karoliny Světlé 44, Liberec 7 — u Arény</dd>
            </div>
            <div className="ra-fact">
              <dt>Otevřeno</dt>
              <dd>po–pá 8:00–17:00</dd>
            </div>
            <div className="ra-fact">
              <dt>Telefon</dt>
              <dd>
                <a href={`tel:${tel}`}>{telLabel}</a>
              </dd>
            </div>
            <div className="ra-fact">
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
          </dl>
          <a className="ra-btn ra-btn--amber" href={`tel:${tel}`}>
            Objednat vůz do servisu
          </a>
        </div>
      </section>
    </main>
  );
}
