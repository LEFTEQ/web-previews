import type { CSSProperties } from "react";

const store = {
  name: "dm Galerie Šantovka",
  street: "Polská 1201/1",
  place: "Galerie Šantovka",
  zip: "779 00",
  city: "Olomouc",
  phone: "+420 585 968 797",
  phoneHref: "+420585968797",
  today: "Dnes 08:00–21:00",
};

const hours: { day: string; time: string; today?: boolean }[] = [
  { day: "Pondělí", time: "08:00–21:00" },
  { day: "Úterý", time: "08:00–21:00" },
  { day: "Středa", time: "08:00–21:00", today: true },
  { day: "Čtvrtek", time: "08:00–21:00" },
  { day: "Pátek", time: "08:00–21:00" },
  { day: "Sobota", time: "08:00–21:00" },
  { day: "Neděle", time: "08:00–21:00" },
];

const services = [
  {
    kicker: "Rychle ven",
    title: "Expresní vyzvednutí do 60 minut",
    body: "Objednávku z aplikace Moje dm si vyzvednete na Šantovce do hodiny. U registrovaných zákazníků je vyzvednutí zdarma.",
  },
  {
    kicker: "Bez fronty",
    title: "Scan\u0026Go",
    body: "Zboží načtete telefonem přímo v regálu a projdete rovnou k východu. Platba kartou i active beauty body.",
  },
  {
    kicker: "Víc na výběr",
    title: "Rozšířená dekorativní kosmetika",
    body: "NYX Professional Makeup, Gabriella Salvete, miss sporty a péče o nehty Essie i Sally Hansen — vše na jednom místě.",
  },
  {
    kicker: "Pro pleť",
    title: "Rozšířená péče o pleť",
    body: "Ziaja, Dermacol, Aknelot, Dr. Pawpaw i Geek\u0026Gorgeous. Poradíme s výběrem přímo na prodejně.",
  },
  {
    kicker: "Zdravě",
    title: "Rozšířený sortiment Alpro",
    body: "Rostlinné nápoje, jogurty a alternativy — širší výběr než v běžné prodejně dm.",
  },
  {
    kicker: "Pro celou rodinu",
    title: "Hrací koutek \u0026 balicí pult",
    body: "Wi-Fi, bezbariérový přístup a koutek pro děti, ať je nákup pohodový i s malými.",
  },
];

const nearby = [
  { addr: "8. května 465/24", city: "779 00 Olomouc", dist: "1,03 km", open: "od 7:30" },
  { addr: "Pavlovická 272/18", city: "779 00 Olomouc", dist: "2,28 km", open: "od 8:00" },
  { addr: "Kafkova 465/39", city: "779 00 Olomouc", dist: "2,66 km", open: "od 8:00" },
  { addr: "Olomoucká 90", city: "783 72 Velký Týnec", dist: "4,73 km", open: "od 9:00" },
  { addr: "Konečná 4563/8", city: "796 01 Prostějov", dist: "15,13 km", open: "od 8:00" },
];

const pay = ["Hotovost", "Platba kartou", "active beauty body", "Dárkové poukázky"];

export default function Page() {
  const mapsHref =
    "https://www.google.com/maps/dir/?api=1\u0026destination=" +
    encodeURIComponent(`${store.street}, ${store.zip} ${store.city}`);

  return (
    <main className="dm">
      <header className="dm-top">
        <a className="dm-mark" href="#" aria-label="dm drogerie markt Olomouc">
          <span className="dm-mark__box">dm</span>
          <span className="dm-mark__sub">drogerie&nbsp;markt · Olomouc</span>
        </a>
        <span className="dm-status">
          <span className="dm-dot" aria-hidden="true" /> Otevřeno · {store.today.replace("Dnes ", "")}
        </span>
      </header>

      <section className="dm-hero" aria-labelledby="hero-title">
        <div className="dm-hero__copy">
          <p className="dm-eyebrow">Prodejna · Galerie Šantovka</p>
          <h1 id="hero-title">
            Vaše dm
            <span className="dm-hero__hl">na Šantovce</span>
          </h1>
          <p className="dm-lede">
            Polská 1201/1, {store.city}. Krása, péče o dítě, domácnost i zdraví —
            a dnes máte otevřeno až do devíti večer.
          </p>

          <div className="dm-actions">
            <a className="dm-btn dm-btn--primary" href={mapsHref}>
              <span aria-hidden="true">➜</span> Navigovat na prodejnu
            </a>
            <a className="dm-btn dm-btn--ghost" href={`tel:${store.phoneHref}`}>
              <span aria-hidden="true">✆</span> Zavolat {store.phone}
            </a>
          </div>

          <dl className="dm-facts">
            <div>
              <dt>Adresa</dt>
              <dd>{store.street}<br />{store.zip} {store.city}</dd>
            </div>
            <div>
              <dt>Vzdálenost k dalšímu dm</dt>
              <dd>1,03 km · 8. května</dd>
            </div>
            <div>
              <dt>Dnes</dt>
              <dd>{store.today.replace("Dnes ", "")}</dd>
            </div>
          </dl>
        </div>

        <figure className="dm-hero__media">
          <img
            src="/hero.webp"
            alt="Prodejna dm drogerie markt v Galerii Šantovka v Olomouci"
            className="dm-hero__img"
          />
          <figcaption className="dm-hero__tag">
            <span className="dm-hero__tagno">01</span>
            Galerie Šantovka, přízemí
          </figcaption>
        </figure>
      </section>

      <section className="dm-hours" aria-label="Otevírací doba">
        <h2 className="dm-sr">Otevírací doba</h2>
        <ul className="dm-hours__list">
          {hours.map((h) => (
            <li key={h.day} className={h.today ? "is-today" : undefined}>
              <span className="dm-hours__day">{h.day}</span>
              <span className="dm-hours__time">{h.time}</span>
            </li>
          ))}
        </ul>
        <p className="dm-hours__note">Exponované časy bývají v pracovní dny kolem 17. hodiny.</p>
      </section>

      <section className="dm-services" aria-labelledby="services-title">
        <div className="dm-sec-head">
          <p className="dm-eyebrow dm-eyebrow--red">Co tu navíc pořídíte</p>
          <h2 id="services-title">Služby a sortiment na Šantovce</h2>
        </div>

        <figure className="dm-band">
          <img
            src="/section-1.webp"
            alt="Regály s kosmetikou a drogerií v prodejně dm"
            className="dm-band__img"
          />
        </figure>

        <ul className="dm-grid">
          {services.map((s, i) => (
            <li key={s.title} className="dm-card" style={{ "--i": i } as CSSProperties}>
              <span className="dm-card__no">{String(i + 1).padStart(2, "0")}</span>
              <p className="dm-card__kicker">{s.kicker}</p>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>

        <div className="dm-pay">
          <span className="dm-pay__label">Platíte:</span>
          <ul>
            {pay.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dm-trust" aria-labelledby="trust-title">
        <div className="dm-trust__grid">
          <figure className="dm-trust__media">
            <img
              src="/section-2.webp"
              alt="Interiér prodejny dm s balicím pultem a hracím koutkem"
              className="dm-trust__img"
            />
          </figure>
          <div className="dm-trust__copy">
            <p className="dm-eyebrow dm-eyebrow--red">Proč sem chodí Olomoučané</p>
            <h2 id="trust-title">Vybavení pro pohodový nákup</h2>
            <p className="dm-lede">
              Prodejna v Galerii Šantovka je bezbariérová, s Wi-Fi, balicím pultem
              i koutkem pro děti. Vyzvednete si tu objednávku z aplikace a přes
              Scan&amp;Go projdete bez čekání u pokladny.
            </p>
            <ul className="dm-checks">
              <li>Bezbariérový přístup</li>
              <li>Expresní vyzvednutí do 60 minut</li>
              <li>Doprava zdarma od 1 290 Kč pro přihlášené</li>
              <li>Dárek za stažení aplikace Moje dm</li>
            </ul>
          </div>
        </div>

        <div className="dm-nearby">
          <h3>Další dm v okolí</h3>
          <ul>
            {nearby.map((n) => (
              <li key={n.addr}>
                <span className="dm-nearby__addr">
                  {n.addr}
                  <small>{n.city}</small>
                </span>
                <span className="dm-nearby__meta">
                  <span className="dm-nearby__dist">{n.dist}</span>
                  <span className="dm-nearby__open">otevírá {n.open}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
