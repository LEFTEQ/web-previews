import { Weigh } from "./motion";

export default function Page() {
  return (
    <main id="top" className="page">
      {/* ——— HERO ——— */}
      <header className="hero">
        <div className="wrap hero-wrap">
          <a className="mark rise" href="#top" aria-label="Simple Café — domů" style={{ animationDelay: "0s" }}>
            <span className="mark-cushion" aria-hidden="true" />
            <span className="mark-txt">simple <em>café</em></span>
          </a>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow rise" style={{ animationDelay: "0.08s" }}>
                Kavárna s obsluhou u pultu · Hradec Králové
              </p>
              <h1 className="hero-title">
                <span className="rise" style={{ animationDelay: "0.14s" }}>Objednáš</span>{" "}
                <span className="rise" style={{ animationDelay: "0.22s" }}>u pultu.</span>{" "}
                <span className="rise hl" style={{ animationDelay: "0.32s" }}>Kávu máš hned.</span>
              </h1>
              <p className="hero-lead rise" style={{ animationDelay: "0.42s" }}>
                Žádné čekání. Přijď, objednej, zaplať a odnes si čerstvě uvařenou kávu — a k tomu klidně
                kus ovocného koláče. Jestli vyrazíš zpátky do světa, nebo se posadíš na žlutou pohovku,
                je jen na tobě.
              </p>
              <div className="hero-chips rise" style={{ animationDelay: "0.52s" }}>
                <span className="chip">Otevřeno každý den</span>
                <span className="chip">Po–Pá 8:00–20:00</span>
                <span className="chip">Specialty káva</span>
              </div>
            </div>

            {/* Signature: the yellow sofa, drawn in CSS */}
            <div className="sofa rise" role="img" aria-label="Ilustrace ikonické žluté pohovky Simple Café" style={{ animationDelay: "0.3s" }}>
              <div className="sofa-body">
                <div className="sofa-arm" />
                <div className="sofa-cushions">
                  <div className="sofa-back"><span /><span /></div>
                  <div className="sofa-seat"><span /><span /></div>
                </div>
                <div className="sofa-arm" />
              </div>
              <div className="sofa-legs"><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </header>

      {/* ——— SEKCE 1: NABÍDKA U PULTU ——— */}
      <section id="nabidka" className="sec" aria-labelledby="nabidka-h">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Katalog pultu</p>
            <h2 id="nabidka-h" className="sec-title">Co u nás dostaneš</h2>
          </div>

          <div className="cards">
            <article className="module">
              <div className="ticket">
                <header className="ticket-head">
                  <span className="tag">U pultu</span>
                  <span className="card-no">01 / 04</span>
                </header>
                <h3 className="card-title">Espresso bar</h3>
                <p className="card-body">
                  Kavárna s obsluhou u pultu — a v tom je to celé kouzlo. Objednáš, zaplatíš a rovnou
                  dostaneš čerstvě uvařenou kávu. K tomu ovocný koláč a chvíle klidu, kolik jen chceš.
                </p>
                <ul className="pills">
                  <li>Espresso</li>
                  <li>Flat white</li>
                  <li>Filtr</li>
                  <li>Ovocný koláč</li>
                </ul>
              </div>
            </article>

            <article className="module">
              <div className="ticket">
                <header className="ticket-head">
                  <span className="tag">Zrno</span>
                  <span className="card-no">02 / 04</span>
                </header>
                <h3 className="card-title">Specialty coffee</h3>
                <p className="card-body">
                  Ručně vybraná zrna certifikovaného původu a té nejvyšší kvality. Připravujeme je na
                  gravimetrickém stroji Black Eagle s mlýnkem Mythos 2 od Victoria Arduino — přesně podle
                  receptury, do desetiny gramu.
                </p>

                <div className="scale" aria-label="Receptura espressa, kterou Black Eagle váží u každého šálku">
                  <p className="scale-cap">Black Eagle váží každý shot:</p>
                  <div className="scale-grid">
                    <div className="scale-row">
                      <span className="scale-val"><Weigh value={18} decimals={1} /><i>g</i></span>
                      <span className="scale-lbl">namleto do sítka</span>
                    </div>
                    <div className="scale-row">
                      <span className="scale-val"><Weigh value={36} decimals={1} /><i>g</i></span>
                      <span className="scale-lbl">espresso v šálku</span>
                    </div>
                    <div className="scale-row">
                      <span className="scale-val"><Weigh value={25} decimals={0} /><i>s</i></span>
                      <span className="scale-lbl">doba extrakce</span>
                    </div>
                    <div className="scale-row">
                      <span className="scale-val"><Weigh value={93} decimals={0} /><i>°C</i></span>
                      <span className="scale-lbl">teplota vody</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ——— SEKCE 2: KDE + OTEVŘENO ——— */}
      <section id="najdete" className="sec sec-alt" aria-labelledby="najdete-h">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">V centru města</p>
            <h2 id="najdete-h" className="sec-title">Kde nás najdeš</h2>
          </div>

          <div className="cards">
            <article className="module">
              <div className="ticket">
                <header className="ticket-head">
                  <span className="tag">Kde</span>
                  <span className="card-no">03 / 04</span>
                </header>
                <h3 className="card-title">Jak k nám</h3>
                <p className="card-body">
                  Najdeš nás v centru Hradce Králové. Zastav se na kávu, na koláč, nebo jen na chvíli klidu
                  u pultu.
                </p>
                <address className="addr">
                  <span className="addr-line">Ukázková 123</span>
                  <span className="addr-line">500 02 Hradec Králové</span>
                  <a className="addr-link" href="tel:+420777111222">+420 777 111 222</a>
                  <a className="addr-link" href="mailto:info@example.cz">info@example.cz</a>
                </address>
              </div>
            </article>

            <article className="module">
              <div className="ticket">
                <header className="ticket-head">
                  <span className="tag">Otevřeno</span>
                  <span className="card-no">04 / 04</span>
                </header>
                <h3 className="card-title">Otevírací doba</h3>
                <table className="hours">
                  <tbody>
                    <tr><th scope="row">Pondělí</th><td>8:00 – 20:00</td></tr>
                    <tr><th scope="row">Úterý</th><td>8:00 – 20:00</td></tr>
                    <tr><th scope="row">Středa</th><td>8:00 – 20:00</td></tr>
                    <tr><th scope="row">Čtvrtek</th><td>8:00 – 20:00</td></tr>
                    <tr><th scope="row">Pátek</th><td>8:00 – 20:00</td></tr>
                    <tr><th scope="row">Sobota</th><td>9:00 – 20:00</td></tr>
                    <tr><th scope="row">Neděle</th><td>10:00 – 20:00</td></tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
