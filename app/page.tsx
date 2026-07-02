const rooms = [
  {
    name: "Dvoulůžkový pokoj se sprchou",
    detail: "Oddělené postele, vlastní koupelna, satelitní TV",
    capacity: 2,
    area: "22 m²",
    price: "od 900 Kč",
  },
  {
    name: "Dvoulůžkový deluxe se sprchou",
    detail: "Prostorný pokoj pro dva až tři hosty",
    capacity: 3,
    area: "38 m²",
    price: "od 1 820 Kč",
  },
  {
    name: "Apartmán s výhledem a balkonem",
    detail: "Balkon s výhledem přímo na Andrův stadion",
    capacity: 4,
    area: "54 m²",
    price: "od 2 169 Kč",
    highlight: true,
  },
  {
    name: "Apartmá pro rodinu",
    detail: "Dvě místnosti, ideální pro rodinu se dvěma dětmi",
    capacity: 4,
    area: "38 m²",
    price: "od 1 602 Kč",
  },
  {
    name: "Dvoulůžkové studio",
    detail: "Úsporná varianta se sdíleným sociálním zařízením",
    capacity: 2,
    area: "28 m²",
    price: "od 1 026 Kč",
  },
  {
    name: "Čtyřlůžkové studio",
    detail: "Nejvýhodnější ubytování pro party a týmy",
    capacity: 4,
    area: "—",
    price: "od 845 Kč",
  },
];

const distances = [
  { place: "Andrův stadion (SK Sigma)", time: "2 min pěšky" },
  { place: "Tenisové kurty a hala", time: "3 min pěšky" },
  { place: "Plavecký bazén", time: "5 min pěšky" },
  { place: "Horní náměstí — orloj", time: "15 min pěšky" },
  { place: "Zimní stadion", time: "7 min pěšky" },
];

export default function Page() {
  return (
    <main className="gol">
      {/* ============ HERO ============ */}
      <header className="hero" aria-label="Hotel Gól Olomouc">
        <div className="hero-top">
          <span className="wordmark">
            HOTEL <em>GÓL</em>
          </span>
          <span className="hero-loc">Olomouc · u Androva stadionu</span>
        </div>

        <div className="hero-pitch" aria-hidden="true">
          {/* stylizovaná půlka fotbalového hřiště — signature prvek */}
          <div className="pitch-line pitch-half" />
          <div className="pitch-circle" />
          <div className="pitch-box" />
          <div className="pitch-spot" />
        </div>

        <h1 className="hero-title">
          <span className="ht-row ht-1">Spíte</span>
          <span className="ht-row ht-2">na dohled</span>
          <span className="ht-row ht-3">
            trávníku<span className="ht-dot">.</span>
          </span>
        </h1>

        <p className="hero-sub">
          87 lůžek dvě minuty od Androva stadionu a čtvrt hodiny pěšky od
          orloje. Vlastní koupelna, hlídané parkoviště, klid po zápase.
        </p>

        <div className="hero-score" role="list" aria-label="Hotel v číslech">
          <div className="score-cell" role="listitem">
            <strong>87</strong>
            <span>lůžek</span>
          </div>
          <div className="score-cell" role="listitem">
            <strong>2&nbsp;min</strong>
            <span>na stadion</span>
          </div>
          <div className="score-cell" role="listitem">
            <strong>845&nbsp;Kč</strong>
            <span>noc od</span>
          </div>
          <div className="score-cell score-cta" role="listitem">
            <a className="btn-primary" href="tel:+420773602612">
              Rezervovat pokoj
            </a>
          </div>
        </div>
      </header>

      {/* ============ SEKCE 1 — POKOJE ============ */}
      <section className="rooms" aria-labelledby="rooms-h">
        <div className="section-head">
          <span className="eyebrow">Základní sestava</span>
          <h2 id="rooms-h">Pokoje a apartmány</h2>
          <p>
            Od úsporných studií pro sportovní týmy po apartmány s balkonem a
            výhledem přímo na hrací plochu. Každý pokoj má satelitní TV a
            internet, většina vlastní koupelnu.
          </p>
        </div>

        <figure className="rooms-photo">
          <img
            src="/section-1.webp"
            alt="Apartmán hotelu Gól s výhledem na Andrův stadion v Olomouci"
          />
          <figcaption>Apartmán s výhledem — balkon míří přímo na tribuny Androva stadionu</figcaption>
        </figure>

        <ul className="rooms-list">
          {rooms.map((r) => (
            <li
              key={r.name}
              className={r.highlight ? "room room-highlight" : "room"}
            >
              <div className="room-main">
                <h3>{r.name}</h3>
                <p>{r.detail}</p>
              </div>
              <dl className="room-meta">
                <div>
                  <dt>Hosté</dt>
                  <dd>{r.capacity}</dd>
                </div>
                <div>
                  <dt>Plocha</dt>
                  <dd>{r.area}</dd>
                </div>
                <div className="room-price">
                  <dt>Cena / noc</dt>
                  <dd>{r.price}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <p className="rooms-note">
          Domácí mazlíčci jsou vítáni. K dispozici hlídané parkoviště i
          podzemní garáž — po zápase i v centru bez starostí o auto.
        </p>
      </section>

      {/* ============ SEKCE 2 — POLOHA A DŮVĚRA ============ */}
      <section className="place" aria-labelledby="place-h">
        <div className="place-grid">
          <div className="place-text">
            <span className="eyebrow eyebrow-light">Domácí půda</span>
            <h2 id="place-h">
              Klidná čtvrť, dvě minuty od tribun, patnáct od orloje
            </h2>
            <p>
              Hotel Gól stojí v klidné části Olomouce hned vedle sportovního
              areálu SK Sigma. Ráno si zaběháte kolem Moravy, odpoledne
              vyrazíte na squash, bowling nebo do relaxačního centra OMEGA —
              všechno máte za rohem.
            </p>
            <p>
              Pořádáme také firemní školení, semináře a svatební hostiny.
              Zavolejte a domluvíme prostor i menu na míru.
            </p>

            <table className="place-table">
              <caption className="sr-only">
                Vzdálenosti od hotelu pěšky
              </caption>
              <tbody>
                {distances.map((d) => (
                  <tr key={d.place}>
                    <th scope="row">{d.place}</th>
                    <td>{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="place-contact">
              <a className="btn-outline" href="tel:+420773602612">
                Zavolat +420 773 602 612
              </a>
              <a className="place-mail" href="mailto:info@hotel-gol.eu">
                info@hotel-gol.eu
              </a>
            </div>
          </div>

          <figure className="place-photo">
            <img
              src="/section-2.webp"
              alt="Okolí hotelu Gól — sportovní areál a historické centrum Olomouce"
            />
            <figcaption>
              Sportovní areál za rohem, historické centrum na dohled
            </figcaption>
          </figure>
        </div>

        <blockquote className="place-quote">
          <p>
            „Byli jsme tu s týmem na soustředění — hřiště přes ulici, snídaně
            v sedm, večer bowling. Přesně to, co potřebujete.“
          </p>
          <cite>— trenér mládežnického týmu, jaro 2024</cite>
        </blockquote>
      </section>
    </main>
  );
}
