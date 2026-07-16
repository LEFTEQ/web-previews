const STOREYS = ["A", "S", "T", "O", "R", "Y"];

const ROOMS = [
  {
    idx: "01",
    name: "Jednolůžkový pokoj",
    text: "Praktický pokoj pro jednoho. Pohodlné lůžko, pracovní stůl a klid pár kroků od nádraží.",
    tag: "Pro 1 hosta",
  },
  {
    idx: "02",
    name: "Jednolůžkový bezbariérový",
    text: "Bezbariérový pokoj navržený pro maximální pohodlí a snadnou dostupnost — bezpečný pobyt bez omezení.",
    tag: "Bez bariér",
  },
  {
    idx: "03",
    name: "Dvoulůžkový pokoj",
    text: "Pro páry i kolegy na cestách. Dost prostoru na odpočinek i práci. Možnost přistýlky.",
    tag: "Pro 2 + přistýlka",
  },
  {
    idx: "04",
    name: "Business pokoj",
    text: "Vyšší standard vybavení a víc prostoru pro klidnější pracovní cesty. Možnost přistýlky.",
    tag: "Nejvyšší standard",
  },
];

const SERVICES = [
  "Wi-Fi zdarma",
  "Parkoviště",
  "Nekuřácký hotel",
  "Domácí mazlíčci vítáni",
  "Televize na pokoji",
  "Mini lednička",
  "Snídaně na přání",
  "Pokojová služba",
  "Kavárna pro hosty",
  "Koupelna s fénem",
  "Posilovna a večerní bar",
];

const REVIEWS = [
  {
    text: "Super lokalita, snadná dostupnost, dobré ceny a čisté pokoje. Nechybělo ani příjemné vystupování personálu.",
    name: "Dominik Skála",
  },
  {
    text: "Čistý a tichý pokoj, i přesto že je blízko vlakové nádraží — které není vůbec slyšet. Blízko do centra i do pivovaru.",
    name: "Aimemilos",
  },
  {
    text: "Vřele doporučujeme! Čisté, perfektně vybavené, personál přátelský a snídaním nelze nic vytknout. Pobyt jsme si o den prodloužili.",
    name: "Eva Naihaiplová",
  },
];

export default function Page() {
  return (
    <main className="as-main">
      <section className="as-hero">
        <div className="as-hero__inner">
          <p className="as-hero__eyebrow">
            Designový hotel &middot; Plzeň, Nádražní&nbsp;26
          </p>

          <div className="as-storey" role="img" aria-label="Astory">
            <div className="as-storey__stack">
              {STOREYS.map((letter, i) => (
                <div className="as-storey__row" key={letter}>
                  <span className="as-storey__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="as-storey__glyph">{letter}</span>
                </div>
              ))}
            </div>
            <div className="as-storey__stack as-storey__stack--fill" aria-hidden="true">
              {STOREYS.map((letter) => (
                <div className="as-storey__row" key={letter}>
                  <span className="as-storey__num" />
                  <span className="as-storey__glyph">{letter}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="as-hero__caption">
            <p className="as-hero__lede">
              Šest pater klidu v srdci Plzně. Pivovar, náměstí i stadion máte
              pár minut pěšky — a vlakem jste přímo u dveří.
            </p>
            <a className="as-btn" href="mailto:rezervace@astory.cz?subject=Rezervace%20pokoje%20-%20Hotel%20Astory">
              Zarezervovat pokoj
            </a>
            <p className="as-hero__foot">
              5&nbsp;min od hlavního nádraží &middot; 8&nbsp;min k Prazdroji
            </p>
          </div>
        </div>
      </section>

      <section className="as-section as-section--rooms">
        <div className="as-divider">
          <span className="as-divider__label">Ubytování</span>
          <span className="as-rule" aria-hidden="true" />
          <span className="as-divider__meta">4 typy pokojů</span>
        </div>

        <h2 className="as-h2">Vyberte si patro, my se postaráme o zbytek</h2>

        <ul className="as-rooms">
          {ROOMS.map((room) => (
            <li className="as-room" key={room.idx}>
              <span className="as-room__idx">{room.idx}</span>
              <div className="as-room__body">
                <h3 className="as-room__name">{room.name}</h3>
                <p className="as-room__text">{room.text}</p>
                <div className="as-room__footer">
                  <span className="as-room__tag">{room.tag}</span>
                  <a
                    className="as-link"
                    href={`mailto:rezervace@astory.cz?subject=${encodeURIComponent(
                      "Rezervace: " + room.name,
                    )}`}
                  >
                    Rezervovat
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="as-section as-section--trust">
        <div className="as-divider">
          <span className="as-divider__label">Služby &amp; hosté</span>
          <span className="as-rule" aria-hidden="true" />
          <span className="as-divider__meta">Hodnocení 5,0★</span>
        </div>

        <div className="as-trust">
          <div className="as-trust__col">
            <h2 className="as-h2">Vše pro pohodlný pobyt — pod jednou střechou</h2>
            <ul className="as-services">
              {SERVICES.map((s) => (
                <li className="as-chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>
            <dl className="as-contact">
              <div className="as-contact__item">
                <dt>Recepce</dt>
                <dd>
                  <a className="as-link" href="tel:+420379302302">
                    +420&nbsp;379&nbsp;302&nbsp;302
                  </a>
                </dd>
              </div>
              <div className="as-contact__item">
                <dt>Rezervace</dt>
                <dd>
                  <a className="as-link" href="mailto:rezervace@astory.cz">
                    rezervace@astory.cz
                  </a>
                </dd>
              </div>
              <div className="as-contact__item">
                <dt>Adresa</dt>
                <dd>Nádražní 26, Plzeň, 301&nbsp;00</dd>
              </div>
            </dl>
          </div>

          <div className="as-trust__col">
            <ul className="as-reviews">
              {REVIEWS.map((r) => (
                <li className="as-review" key={r.name}>
                  <p className="as-review__text">{r.text}</p>
                  <p className="as-review__meta">
                    <span className="as-review__stars" aria-label="5 z 5 hvězd">
                      ★★★★★
                    </span>
                    <span className="as-review__name">{r.name}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
