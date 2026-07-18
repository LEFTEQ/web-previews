export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <svg
          className="comet"
          viewBox="0 0 1200 720"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="trail" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#37d6c6" stopOpacity="0" />
              <stop offset="0.35" stopColor="#37d6c6" />
              <stop offset="0.7" stopColor="#ffc24b" />
              <stop offset="1" stopColor="#ff5c7c" />
            </linearGradient>
            <radialGradient id="head" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#fff4e2" />
              <stop offset="0.45" stopColor="#ffc24b" />
              <stop offset="1" stopColor="#ff5c7c" />
            </radialGradient>
          </defs>
          <g className="stars">
            <circle cx="240" cy="150" r="3" />
            <circle cx="520" cy="90" r="2" />
            <circle cx="860" cy="210" r="2.5" />
            <circle cx="1060" cy="330" r="3" />
            <circle cx="360" cy="400" r="2" />
            <circle cx="980" cy="470" r="2.5" />
          </g>
          <path
            className="comet-trail"
            d="M120 620 C 380 560 560 400 780 300 C 940 226 1050 180 1130 130"
            fill="none"
            stroke="url(#trail)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <circle className="comet-head" cx="1130" cy="130" r="28" fill="url(#head)" />
        </svg>

        <div className="wrap hero-inner">
          <div className="brandbar">
            <span className="wordmark">
              kometka
              <svg className="wordmark-comet" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 22 L14 10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="17" cy="7" r="5" fill="currentColor" />
              </svg>
            </span>
            <a className="btn btn-ghost brandbar-cta" href="#navsteva">Přijít na návštěvu</a>
          </div>

          <p className="eyebrow reveal r1">Mateřská škola&nbsp;· Brno · děti od 2 do 6 let</p>
          <h1 className="hero-title reveal r2">
            Nejsportovnější<br />
            školka na Moravě
          </h1>
          <p className="hero-lead reveal r3">
            V Kometce má každý den svůj pohyb, svoji angličtinu a spoustu kamarádů.
            Přijďte se k nám podívat — nejlíp dopoledne, když to u nás žije.
          </p>
          <div className="hero-actions reveal r4">
            <a className="btn btn-primary" href="#navsteva">Přijít na návštěvu</a>
            <a className="btn btn-ghost" href="#tridy">Jak se přihlásit</a>
          </div>
          <ul className="facts reveal r5">
            <li className="facts-item">Sport každý den</li>
            <li className="facts-item">Angličtina hravě</li>
            <li className="facts-item">Tři třídy pro každý věk</li>
          </ul>
        </div>
      </header>

      <section className="band band-cream" id="nabidka" aria-labelledby="nabidka-h">
        <div className="wrap">
          <p className="kicker">Co u nás děti zažijí</p>
          <h2 className="band-title" id="nabidka-h">
            Den v pohybu, ne u stolečku
          </h2>

          <ul className="offer">
            <li className="offer-card c-turq">
              <span className="offer-badge" aria-hidden="true">
                <svg viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M6 20h28M20 6v28" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
              <h3 className="offer-h">Sport každý den</h3>
              <p className="offer-p">
                Tělocvična, hřiště i bazén. Děti u nás lezou, běhají a plavou — a učí se,
                že pohyb je radost, ne dřina.
              </p>
            </li>
            <li className="offer-card c-gold">
              <span className="offer-badge" aria-hidden="true">
                <svg viewBox="0 0 40 40">
                  <rect x="6" y="8" width="28" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M14 28l-3 6 8-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="offer-h">Angličtina hravě</h3>
              <p className="offer-p">
                Ve třídě Bumblebees slyší děti angličtinu přirozeně — u her, písniček
                i svačiny, ne u tabule.
              </p>
            </li>
            <li className="offer-card c-coral">
              <span className="offer-badge" aria-hidden="true">
                <svg viewBox="0 0 40 40">
                  <path d="M5 14q5-6 10 0t10 0 10 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M5 22q5-6 10 0t10 0 10 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M5 30q5-6 10 0t10 0 10 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="offer-h">Plavání a výlety</h3>
              <p className="offer-p">
                Každý týden vyrážíme plavat a za dobrodružstvím — od solné jeskyně
                po výlety do přírody.
              </p>
            </li>
            <li className="offer-card c-plum">
              <span className="offer-badge" aria-hidden="true">
                <svg viewBox="0 0 40 40">
                  <path d="M20 12c-4-4-14-2-14 8s10 14 14 14 14-4 14-14-10-12-14-8z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M20 12c1-4 4-6 7-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="offer-h">Zdravá strava</h3>
              <p className="offer-p">
                Vaříme podle programu Zdravá&nbsp;5. Ovoce, zelenina a pitný režim celý den,
                žádné přeslazené svačiny.
              </p>
            </li>
          </ul>

          <h3 className="subhead" id="tridy">Naše tři třídy</h3>
          <ul className="classes">
            <li className="class-card c-turq">
              <span className="class-tag">Sportovní třída</span>
              <h4 className="class-name">Rarášci</h4>
              <p className="class-p">
                Pro malé neposedy, kteří chvíli neposedí. Pohyb od rána do odpoledne
                a spousta vybité energie.
              </p>
            </li>
            <li className="class-card c-gold">
              <span className="class-tag">Anglická třída</span>
              <h4 className="class-name">Bumblebees</h4>
              <p className="class-p">
                Den plný angličtiny i češtiny. Děti se jazyk učí tím nejjednodušším
                způsobem — prostě ho žijí.
              </p>
            </li>
            <li className="class-card c-coral">
              <span className="class-tag">Přípravná třída</span>
              <h4 className="class-name">Budulínci</h4>
              <p className="class-p">
                Předškoláci na startu. Připravíme je na školu v klidu, s jistotou
                a bez zbytečného tlaku.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="band band-night" id="navsteva" aria-labelledby="ref-h">
        <div className="wrap">
          <p className="kicker kicker-light">Co říkají rodiče</p>
          <h2 className="band-title band-title-light" id="ref-h">
            Rodiče, kteří nám svěřili to nejcennější
          </h2>

          <ul className="quotes">
            <li className="quote">
              <p className="quote-text">
                „Kometka je přesně to, co jsme pro naše děti hledali. Sport každý den,
                skvělý přístup — a děti se do školky pokaždé těší.“
              </p>
              <p className="quote-by">maminka Elišky</p>
            </li>
            <li className="quote">
              <p className="quote-text">
                „Školku jsme dlouho vybírali a přihláška do Kometky byla nejlepší
                rozhodnutí. Vašeho přístupu k dětem si nesmírně vážíme.“
              </p>
              <p className="quote-by">rodiče Adámka</p>
            </li>
            <li className="quote">
              <p className="quote-text">
                „Paní učitelky jsou usměvavé a mají k dětem krásný vztah. Když s nimi
                přijdou plavat, vždycky se na ně těšíme.“
              </p>
              <p className="quote-by">z plaveckého bazénu, kam chodíme každý čtvrtek</p>
            </li>
          </ul>

          <div className="find">
            <div className="find-copy">
              <h3 className="find-h">Kde nás najdete</h3>
              <p className="find-p">
                Sídlíme v Brně, kousek od parku. Zazvoňte klidně i bez ohlášení —
                nejraději vás provedeme dopoledne, když si děti hrají.
              </p>
            </div>
            <dl className="find-info">
              <div className="find-row">
                <dt>Adresa</dt>
                <dd>Ukázková 123, 602 00 Brno</dd>
              </div>
              <div className="find-row">
                <dt>Telefon</dt>
                <dd>—</dd>
              </div>
              <div className="find-row">
                <dt>E-mail</dt>
                <dd>—</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
