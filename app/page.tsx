import type { CSSProperties } from "react";

export default function Page() {
  const hours = [
    { day: "Pondělí", time: "9:00–21:00" },
    { day: "Úterý", time: "9:00–21:00" },
    { day: "Středa", time: "9:00–21:00" },
    { day: "Čtvrtek", time: "9:00–21:00" },
    { day: "Pátek", time: "9:00–21:00" },
    { day: "Sobota", time: "9:00–21:00" },
    { day: "Neděle", time: "9:00–21:00" },
  ];

  const sortiment = [
    {
      label: "Pleť & tělo",
      note: "Rozšířená péče o pleť",
      detail: "Ziaja, Dermacol, Geek & Gorgeous, Dr. Pawpaw — širší výběr než v běžné prodejně.",
    },
    {
      label: "Dekorativní",
      note: "Líčení navíc",
      detail: "miss sporty, Rimmel London, Max Factor a péče o nehty Essie i Sally Hansen.",
    },
    {
      label: "Zdravá výživa",
      note: "Rostlinné novinky",
      detail: "Rozšířený sortiment Alpro a potravin pro každodenní zdravé nakupování.",
    },
    {
      label: "Péče o dítě",
      note: "Pro celou rodinu",
      detail: "Plenky, kojenecká výživa i drogerie pro nejmenší — vše na jednom místě.",
    },
  ];

  const sluzby = [
    { title: "Scan & Go", body: "Naskenujte zboží telefonem a projděte pokladnou bez čekání." },
    { title: "Expresní vyzvednutí do 60 minut", body: "Objednáte online, my nachystáme a vy si vyzvednete ještě dnes." },
    { title: "Bezbariérový přístup", body: "Prodejna i balicí pult jsou přístupné pro kočárky i vozíky." },
    { title: "Hrací koutek & Wi-Fi", body: "Děti si hrají, vy nakupujete v klidu a připojeni." },
  ];

  const okoli = [
    { addr: "Polská 1201/1", city: "779 00 Olomouc", dist: "4,73 km", open: "do 21 hod." },
    { addr: "Pavlovická 272/18", city: "779 00 Olomouc", dist: "5,25 km", open: "do 20 hod." },
    { addr: "8. května 465/24", city: "779 00 Olomouc", dist: "5,72 km", open: "do 20 hod." },
    { addr: "Kafkova 465/39", city: "779 00 Olomouc", dist: "6,02 km", open: "do 20 hod." },
  ];

  return (
    <main className="dm">
      <header className="dm-bar">
        <a className="dm-mark" href="#" aria-label="dm drogerie markt, Olomouc">
          <span className="dm-mark__d">dm</span>
          <span className="dm-mark__place">Olomouc</span>
        </a>
        <span className="dm-open" aria-label="Dnes otevřeno do 21 hodin">
          <span className="dm-dot" aria-hidden="true" />
          Dnes otevřeno do 21:00
        </span>
      </header>

      <section className="dm-hero">
        <div className="dm-hero__media">
          <img
            src="/hero.webp"
            alt="Prodejna dm drogerie markt v Olomouci, Olomoucká 90 – Olympia"
            width={1600}
            height={1200}
            loading="eager"
          />
        </div>
        <div className="dm-hero__panel">
          <p className="dm-eyebrow">Prodejna · Olomoucká 90 · Olympia</p>
          <h1 className="dm-hero__title">
            Vaše drogerie<br />
            hned <em>za rohem</em>
          </h1>
          <p className="dm-hero__lede">
            Krása, péče o dítě, domácnost i zdraví na jednom místě.
            Otevřeno každý den až do devíti večer.
          </p>
          <div className="dm-actions">
            <a className="dm-btn dm-btn--primary" href="tel:+420585150698">
              Zavolat na prodejnu
            </a>
            <a
              className="dm-btn dm-btn--ghost"
              href="https://mapy.cz/?q=Olomoucká+90+Velký+Týnec"
            >
              Navigovat sem
            </a>
          </div>
          <dl className="dm-hero__meta">
            <div>
              <dt>Adresa</dt>
              <dd>Olomoucká 90, 783 72 Velký Týnec</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420585150698">+420 585 150 698</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="dm-section dm-section--price" aria-labelledby="nabidka">
        <div className="dm-head">
          <p className="dm-eyebrow">Co u nás najdete</p>
          <h2 id="nabidka" className="dm-h2">
            Prodejna s rozšířeným sortimentem
          </h2>
          <p className="dm-head__note">
            Tady je toho na regálech víc — od dekorativní kosmetiky přes
            rostlinnou výživu až po širší péči o pleť.
          </p>
        </div>

        <div className="dm-shelf">
          {sortiment.map((s, i) => (
            <article className="dm-tag" key={s.label} style={{ "--i": i } as CSSProperties}>
              <span className="dm-tag__price">{s.label}</span>
              <span className="dm-tag__note">{s.note}</span>
              <p className="dm-tag__detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <div className="dm-split">
          <div className="dm-split__media">
            <img
              src="/section-1.webp"
              alt="Regály dm drogerie markt s kosmetikou a péčí o pleť"
              width={1200}
              height={900}
              loading="lazy"
            />
          </div>
          <ul className="dm-services">
            {sluzby.map((sv) => (
              <li className="dm-service" key={sv.title}>
                <h3>{sv.title}</h3>
                <p>{sv.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dm-section dm-section--trust" aria-labelledby="kdy">
        <div className="dm-trust">
          <div className="dm-trust__media">
            <img
              src="/section-2.webp"
              alt="Zákaznice u pokladny v prodejně dm drogerie markt"
              width={1200}
              height={900}
              loading="lazy"
            />
          </div>
          <div className="dm-trust__body">
            <p className="dm-eyebrow">Otevírací doba</p>
            <h2 id="kdy" className="dm-h2">
              Kdy se u nás stavit
            </h2>
            <table className="dm-hours">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day}>
                    <th scope="row">{h.day}</th>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="dm-pay">
              Platíte hotově, kartou i active beauty body. K dispozici je
              balicí pult, Wi-Fi a hrací koutek pro děti.
            </p>
          </div>
        </div>

        <div className="dm-near">
          <h3 className="dm-near__title">Další dm v okolí</h3>
          <ul className="dm-near__list">
            {okoli.map((o) => (
              <li className="dm-near__item" key={o.addr}>
                <span className="dm-near__dist">{o.dist}</span>
                <span className="dm-near__addr">
                  {o.addr}
                  <small>{o.city}</small>
                </span>
                <span className="dm-near__open">Dnes {o.open}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
