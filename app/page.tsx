const services = [
  {
    title: "Mechanika bez obíhání",
    text: "Servisní prohlídky, rozvody, brzdy, diagnostika, elektroopravy i běžný rychloservis pro vozy Škoda, VW, Ford, Peugeot, Renault, Kia, Hyundai, Fiat a další.",
  },
  {
    title: "Karoserie a lak",
    text: "Opravy karoserií, rovnací stolice, lakování, výměna čelních skel a montáž autodoplňků v jedné navazující dílně.",
  },
  {
    title: "Pneuservis a geometrie",
    text: "Přezutí, vyvážení, kontrola podvozku, seřízení geometrie a příprava auta na sezonu bez zbytečného čekání.",
  },
  {
    title: "STK zařízená prakticky",
    text: "Příprava vozidla, odstranění závad a zprostředkování STK tak, aby zákazník řešil hlavně termín předání a vyzvednutí.",
  },
];

const trustItems = [
  "Rodinný autoservis funguje od roku 1999.",
  "Dílna je v Třemošné - Záluží, jen zhruba 3 km od Plzně Košutky.",
  "Odvoz zákazníků je možné domluvit předem.",
  "Otevřeno pondělí až pátek 8:00-17:00, sobota po domluvě.",
];

export default function Page() {
  return (
    <main className="svarc-page" aria-labelledby="hero-title">
      <section className="hero-section" aria-label="Autoservis Švarc">
        <div className="hero-rail" aria-hidden="true">
          <span>1999</span>
          <span>3 km od Plzně</span>
          <span>8-17</span>
        </div>

        <div className="hero-topline">
          <a className="wordmark" href="tel:606709455" aria-label="Autoservis Švarc, zavolat">
            <span className="wordmark-mark">Š</span>
            <span>
              <strong>Švarc</strong>
              <small>servisní dílna Záluží</small>
            </span>
          </a>
          <div className="quick-contact" aria-label="Rychlý kontakt">
            <a href="tel:606709455">606 709 455</a>
            <a href="mailto:autoservis.jiri.svarc@seznam.cz">autoservis.jiri.svarc@seznam.cz</a>
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Autoservis Plzeň, Košutka, Lochotín, Bolevec, Třemošná - Záluží</p>
            <h1 id="hero-title">Auto po servisu má jezdit rovně, brzdit jistě a nepřidělávat starosti.</h1>
            <p className="hero-lede">
              Rodinný autoservis Jiřího Švarce spojuje mechaniku, autoklempířství, lakování a pneuservis. Zákazník přijede s jedním problémem a odjíždí s jasně vyřešeným autem.
            </p>
            <div className="hero-actions" aria-label="Kontaktní možnosti">
              <a className="primary-link" href="tel:606709455">Zavolat do dílny</a>
              <a className="secondary-link" href="mailto:autoservis.jiri.svarc@seznam.cz">Napsat e-mail</a>
            </div>
          </div>

          <div className="diagnostic-card" aria-label="Přehled hlavních služeb">
            <div className="gauge" aria-hidden="true">
              <span className="gauge-needle" />
            </div>
            <p>Mechanika</p>
            <p>Karoserie</p>
            <p>Pneuservis</p>
            <p>STK</p>
          </div>
        </div>
      </section>

      <section className="service-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Nabídka</p>
          <h2 id="services-title">Dílna pro běžný servis i větší opravu po nehodě.</h2>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-item" key={service.title}>
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-section" aria-labelledby="trust-title">
        <div className="trust-panel">
          <div>
            <p className="eyebrow">Proč sem zákazníci jezdí z Plzně</p>
            <h2 id="trust-title">Osobní přístup malé dílny, rozsah služeb většího servisu.</h2>
          </div>
          <p>
            Autoservis Švarc staví na doporučeních a vracejících se zákaznících. Pro řidiče z Košutky, Lochotína, Bolevce i Třemošné je důležité, že servis komunikuje přímo, opravuje prakticky a drží se domluvy.
          </p>
        </div>
        <div className="trust-grid">
          {trustItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <address className="address-strip">
          <span>Jiří Švarc</span>
          <span>Ledecká 190, 330 11 Třemošná - Záluží</span>
          <span>IČO 69930791</span>
        </address>
      </section>
    </main>
  );
}
