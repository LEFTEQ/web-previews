const islands = [
  { name: "Gran Canaria", note: "Duny v Maspalomas, věčné jaro na jižním pobřeží.", coord: "27°57′ S" },
  { name: "Tenerife", note: "Vulkán Teide, 3 715 m — nejvyšší hora celého Španělska.", coord: "28°27′ S" },
  { name: "Lanzarote", note: "Měsíční krajina Timanfaya a vinice zasazené v lávě.", coord: "29°02′ S" },
  { name: "Fuerteventura", note: "Nekonečné pláže, stálý vítr a nejlepší surf souostroví.", coord: "28°21′ S" },
];

const deals = [
  { tag: "LAST MINUTE", island: "Gran Canaria", place: "San Agustín", hotel: "Abora Interclub Atlantic", date: "1.–8. 8. 2026", board: "all inclusive", old: "36 400", price: "34 390" },
  { tag: "FIRST MINUTE", island: "Gran Canaria", place: "Maspalomas", hotel: "Cordial Green Golf", date: "21.–28. 4. 2027", board: "bez stravování", old: "20 600", price: "18 100" },
  { tag: "LAST MINUTE", island: "Lanzarote", place: "Playa Blanca", hotel: "H10 Timanfaya Palace", date: "11.–18. 8. 2026", board: "polopenze", old: "34 700", price: "32 790" },
  { tag: "LAST MINUTE", island: "Fuerteventura", place: "Corralejo", hotel: "Riu Oliva Beach Resort", date: "2.–9. 8. 2026", board: "all inclusive", old: "33 900", price: "31 190" },
];

const reasons = [
  { k: "01", h: "Jen Kanáry, nic jiného", p: "Neprodáváme celý svět. Známe každý ze čtyř ostrovů, hotel po hotelu, a poradíme podle toho, co od dovolené čekáte." },
  { k: "02", h: "First minute už od zálohy 1 000 Kč", p: "Rezervujte termín na příští léto s minimální zálohou 1 000 Kč na osobu. Doplatíte až před odletem." },
  { k: "03", h: "Čeští delegáti na místě", p: "Na všech čtyřech ostrovech máte k dispozici českého delegáta — od transferu z letiště po tipy na výlety." },
  { k: "04", h: "Přímé lety z Prahy", p: "Letenku, transfer i cestovní pojištění vyřídíme za vás. Vy si sbalíte jen plavky a opalovací krém." },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero" id="nahoru">
        <div className="hero__sun" aria-hidden="true" />
        <div className="wrap hero__wrap">
          <div className="mark">
            <span className="mark__name">Canaria<span className="mark__dot" aria-hidden="true" />Travel</span>
            <span className="mark__sub">Cestovní kancelář · Praha</span>
          </div>

          <p className="hero__eyebrow">28° severní šířky — ostrovy věčného jara</p>

          <h1 className="hero__title">
            <span className="line">
              <span className="word" style={{ ['--i' as string]: 0 }}>Věčné</span>{" "}
              <span className="word" style={{ ['--i' as string]: 1 }}>jaro</span>
            </span>
            <span className="line line--em">
              <span className="word" style={{ ['--i' as string]: 2 }}>na 28° severní šířky.</span>
            </span>
          </h1>

          <p className="hero__lead">
            Cestovní kancelář zaměřená jen na Kanárské ostrovy. Přímé lety z Prahy na
            Gran Canaria, Tenerife, Lanzarote a Fuerteventuru — a +22 °C i v lednu, kdy
            u nás mrzne.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#nabidka">Vybrat zájezd</a>
            <a className="btn btn--ghost" href="#proc">Proč zrovna s námi</a>
          </div>

          <ul className="hero__index" aria-label="Čtyři ostrovy souostroví">
            {islands.map((is) => (
              <li key={is.name} className="hero__island">
                <span className="hero__island-name">{is.name}</span>
                <span className="hero__island-coord">{is.coord}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--sand" id="nabidka" aria-labelledby="nabidka-h">
        <div className="wrap">
          <header className="sec__head">
            <p className="sec__eyebrow">Nabídka zájezdů</p>
            <h2 className="sec__title" id="nabidka-h">Čtyři ostrovy, každý úplně jiný</h2>
            <p className="sec__intro">
              Sopečné souostroví u břehů Afriky. Vyberte si podle nálady — ať už chcete
              duny, měsíční lávu, nebo pláž až k obzoru.
            </p>
          </header>

          <ol className="islands">
            {islands.map((is, n) => (
              <li key={is.name} className="island reveal">
                <span className="island__no">{String(n + 1).padStart(2, "0")}</span>
                <h3 className="island__name">{is.name}</h3>
                <p className="island__note">{is.note}</p>
                <span className="island__coord">{is.coord}</span>
              </li>
            ))}
          </ol>

          <div className="deals__head">
            <p className="sec__eyebrow">Akční termíny</p>
            <h3 className="deals__title">Last minute i first minute</h3>
          </div>

          <ul className="deals">
            {deals.map((d) => (
              <li key={d.hotel} className="deal reveal">
                <span className={"deal__tag deal__tag--" + (d.tag === "LAST MINUTE" ? "last" : "first")}>
                  {d.tag}
                </span>
                <p className="deal__loc">{d.island} · {d.place}</p>
                <h4 className="deal__hotel">{d.hotel}</h4>
                <dl className="deal__meta">
                  <div><dt>Termín</dt><dd>{d.date}</dd></div>
                  <div><dt>Strava</dt><dd>{d.board}</dd></div>
                </dl>
                <p className="deal__price">
                  <span className="deal__old">{d.old} Kč</span>
                  <span className="deal__now">{d.price} Kč</span>
                  <span className="deal__per">za osobu</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--dark" id="proc" aria-labelledby="proc-h">
        <div className="wrap">
          <header className="sec__head">
            <p className="sec__eyebrow sec__eyebrow--light">Proč s námi</p>
            <h2 className="sec__title sec__title--light" id="proc-h">
              Kanáry umíme líp než univerzální eshop
            </h2>
          </header>

          <ul className="reasons">
            {reasons.map((r) => (
              <li key={r.k} className="reason reveal">
                <span className="reason__k">{r.k}</span>
                <h3 className="reason__h">{r.h}</h3>
                <p className="reason__p">{r.p}</p>
              </li>
            ))}
          </ul>

          <div className="office reveal">
            <div className="office__col">
              <p className="office__label">Pobočka v centru Prahy</p>
              <p className="office__val">Ukázková 123, Praha 1</p>
            </div>
            <div className="office__col">
              <p className="office__label">Otevřeno</p>
              <p className="office__val">Po–Pá 09.00–17.30 · víkendy zavřeno</p>
            </div>
            <div className="office__col">
              <p className="office__label">Zeptejte se nás</p>
              <p className="office__val">777 111 222 · info@example.cz</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
