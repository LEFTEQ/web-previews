import { AiImage } from "./_ui";

const rhythm = [
  { h: 8, v: 74, peak: true },
  { h: 9, v: 44 },
  { h: 10, v: 52 },
  { h: 11, v: 90, peak: true },
  { h: 12, v: 62 },
  { h: 13, v: 48 },
  { h: 14, v: 84, peak: true },
  { h: 15, v: 58 },
  { h: 16, v: 54 },
  { h: 17, v: 96, peak: true },
  { h: 18, v: 66 },
  { h: 19, v: 46 },
  { h: 20, v: 28 },
];

const days = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
const TODAY = 4; // Pátek

const services = [
  {
    title: "Expresní vyzvednutí do 60 minut",
    body: "Objednávku z dm.cz vyzvednete na prodejně už do hodiny — bez čekání na doručení.",
  },
  {
    title: "Scan&Go",
    body: "Naskenujte zboží v aplikaci Moje dm a projděte pokladnou bez fronty.",
  },
  {
    title: "Samoobslužná pokladna",
    body: "Zaplaťte sami, rychle a v klidu — hotově i kartou.",
  },
  {
    title: "Zdraví a výživa",
    body: "Rozšířený sortiment doplňků stravy a rostlinných produktů Alpro.",
  },
  {
    title: "Dekorativní kosmetika",
    body: "Gabriella Salvete, rom&nd, miss sporty, Rimmel London i Max Factor.",
  },
  {
    title: "S dětmi v pohodě",
    body: "Přebalovací pult, hrací koutek a Wi-Fi zdarma po celou otevírací dobu.",
  },
];

const nearby = [
  { name: "Centrum · Dukelská třída", dist: "1,2 km", until: "do 20 hod." },
  { name: "Gočárova třída", dist: "1,6 km", until: "do 21 hod." },
  { name: "Brněnská", dist: "2,6 km", until: "do 21 hod." },
  { name: "Rašínova třída", dist: "3,9 km", until: "do 20 hod." },
  { name: "Pardubice", dist: "18,8 km", until: "do 20 hod." },
];

function Bars() {
  return (
    <div className="ribbon__bars" aria-hidden="true">
      {rhythm.map((b) => (
        <span
          key={b.h}
          className={"bar" + (b.peak ? " bar--peak" : "")}
          style={{ height: b.v + "%" }}
        />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div className="page">
      {/* ---------- HERO ---------- */}
      <header className="band band--blue hero-band">
        <div className="wrap">
          <a className="wordmark" href="#" aria-label="dm drogerie a lékárna, Hradec Králové">
            <span className="wordmark__tag">dm</span>
            <span className="wordmark__text">
              drogerie <span>·</span> lékárna
            </span>
          </a>

          <div className="hero">
            <div className="hero__copy">
              <p className="eyebrow">dm prodejna <span>·</span> Hradec Králové</p>
              <h1 className="hero__title">
                Drogerie a lékárna, která drží stejný rytmus jako Vy.
              </h1>
              <p className="status">
                <span className="status__dot" aria-hidden="true" />
                Dnes jsme tu pro Vás do 20 hod.
              </p>

              {/* Signature: today rhythm ribbon */}
              <figure className="ribbon ribbon--today">
                <figcaption className="ribbon__cap">
                  Pátek — exponované časy
                </figcaption>
                <div className="ribbon__stage">
                  <Bars />
                  <div className="ribbon__now" aria-hidden="true" />
                </div>
                <div className="ribbon__axis" aria-hidden="true">
                  <span>8</span>
                  <span>11</span>
                  <span>14</span>
                  <span>17</span>
                  <span>20</span>
                </div>
                <p className="ribbon__legend">
                  Nejvíc lidí bývá kolem 11., 14. a 17. hodiny — teď je klidněji.
                </p>
              </figure>

              <div className="cta-row">
                <a className="btn btn--primary" href="#navigovat">
                  Navigovat
                </a>
                <a className="btn btn--ghost" href="tel:+420777111222">
                  Zavolat 777 111 222
                </a>
              </div>
              <address className="hero__addr">
                Ukázková 123, 500 03 Hradec Králové
              </address>
            </div>

            <div className="hero__figure">
              <AiImage
                src="/hero.webp"
                alt="Prodejna dm drogerie a lékárna v Hradci Králové"
                className="hero__media"
              />
              <div className="pin" aria-hidden="true">
                <span className="pin__tag">dm</span>
                <span className="pin__ribbon">
                  <i style={{ height: "55%" }} />
                  <i style={{ height: "90%" }} />
                  <i style={{ height: "48%" }} />
                  <i style={{ height: "84%" }} />
                  <i style={{ height: "40%" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="rhythm-divider" aria-hidden="true">
        <div className="wrap">
          <Bars />
          <Bars />
          <Bars />
        </div>
      </div>

      {/* ---------- SECTION 1: SLUŽBY ---------- */}
      <section className="band band--white" aria-labelledby="nabidka">
        <div className="wrap">
          <p className="eyebrow eyebrow--dark">Na prodejně</p>
          <h2 id="nabidka" className="section__title">
            Co u nás vyřídíte
          </h2>

          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </article>
            ))}
          </div>

          <div className="feature">
            <AiImage
              src="/section-1.webp"
              alt="Interiér dm prodejny — regály s drogerií a kosmetikou"
              className="feature__media"
            />
            <div className="feature__panel">
              <h3 className="feature__title">Zaplatíte, jak Vám vyhovuje</h3>
              <ul className="pay">
                <li>Hotovost</li>
                <li>Platba kartou</li>
                <li>active beauty body</li>
                <li>Dárkové poukázky</li>
              </ul>
              <p className="feature__note">
                Doprava zdarma při nákupu od 1 290 Kč a expresní vyzvednutí
                v prodejně zdarma pro přihlášené zákazníky.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SECTION 2: OTEVÍRACÍ DOBA + DŮVĚRA ---------- */}
      <section className="band band--blue" aria-labelledby="doba">
        <div className="wrap">
          <p className="eyebrow">Otevírací doba</p>
          <h2 id="doba" className="section__title section__title--light">
            Kdy máme otevřeno a kdy je plno
          </h2>

          <div className="hours-grid">
            <table className="hours">
              <caption className="hours__cap">
                Každý den 08:00–20:00
              </caption>
              <tbody>
                {days.map((d, i) => (
                  <tr key={d} className={i === TODAY ? "is-today" : ""}>
                    <th scope="row">
                      {d}
                      {i === TODAY && <span className="tag-today">dnes</span>}
                    </th>
                    <td>08:00–20:00</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <AiImage
              src="/section-2.webp"
              alt="Vstup do dm prodejny s otevírací dobou"
              className="hours__media"
            />
          </div>

          {/* Full week rhythm ribbon — the signature at full scale */}
          <div className="week">
            <p className="week__head">
              Exponované časy <span>— podle dne v týdnu</span>
            </p>
            {days.map((d, i) => (
              <div
                className={"week__row" + (i === TODAY ? " week__row--today" : "")}
                key={d}
              >
                <span className="week__label">{d}</span>
                <div className="ribbon ribbon--mini">
                  <div className="ribbon__stage">
                    <Bars />
                  </div>
                </div>
                <span className="week__hours">08–20</span>
              </div>
            ))}
          </div>

          <div className="nearby">
            <h3 className="nearby__title">Další prodejny dm v okolí</h3>
            <ul className="nearby__list">
              {nearby.map((n) => (
                <li key={n.name} className="nearby__item">
                  <span className="nearby__name">{n.name}</span>
                  <span className="nearby__meta">
                    <span className="nearby__dist">{n.dist}</span>
                    <span className="nearby__until">otevřeno {n.until}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <a className="sticky-cta" href="#navigovat">
        Navigovat na prodejnu
      </a>
    </div>
  );
}
