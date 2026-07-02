export default function Page() {
  return (
    <main className="pipa">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="hero-shade" />
        </div>

        <div className="hero-inner">
          <div className="brand">
            <span className="brand-tap" aria-hidden="true">
              {/* originální wordmark: pípa jako typografický znak */}
              <svg viewBox="0 0 48 48" role="img" aria-label="Znak toulavé pípy">
                <path
                  d="M10 14 h20 v6 h-8 v14 a4 4 0 0 1-8 0 v-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M30 17 h8 l4 -5 v10 l-4 -5" fill="currentColor" stroke="none" />
                <circle cx="10" cy="14" r="3.5" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              U&nbsp;Toulavé <em>pípy</em>
            </span>
          </div>

          <p className="hero-eyebrow">Pivnice · Loď Otava · Podpípí — Bělobranské nám. 9, Pardubice</p>

          <h1 className="hero-title">
            <span className="line line-1">„Teprve s pivem</span>
            <span className="line line-2">je žízeň krásná.“</span>
          </h1>

          <p className="hero-lead">
            Řemeslná piva z toulavé pípy, langoše v neděli a tři propojené prostory
            kousek od Zelené brány. Přijďte na jedno — nebo rovnou na oslavu.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:608120183">Zavolat 608 120 183</a>
            <a className="btn btn-ghost" href="#prostory">Prohlédnout prostory</a>
          </div>

          <p className="hero-tap-note" aria-hidden="true">
            čep 01 — dnes na pípě: to, co si sládek zrovna vytoulal
          </p>
        </div>
      </header>

      {/* ================= SEKCE 1: CO TEČE A CO SE DĚJE ================= */}
      <section className="section section-cepy" aria-labelledby="cepy-title">
        <div className="section-head">
          <p className="eyebrow">Pípodění</p>
          <h2 id="cepy-title">Pípa se toulá po pivních stylech.<br />Vy se toulejte s ní.</h2>
          <p className="section-lead">
            Nejsme hospoda jedné značky. Kohouty u nás střídají malé pivovary a styly,
            o kterých si u nás i počtete — od ležáků po kyseláče.
          </p>
        </div>

        <ol className="tap-rail" aria-label="Co u nás najdete">
          <li className="tap">
            <span className="tap-handle" aria-hidden="true">čep 01</span>
            <h3>Řemeslná piva na čepu</h3>
            <p>
              Rotující nabídka ležáků, ale i weissbierů, stoutů, ALE a sour ale.
              Ke každému stylu vám rádi řekneme, proč chutná tak, jak chutná —
              a do jaké sklenice patří.
            </p>
          </li>
          <li className="tap">
            <span className="tap-handle" aria-hidden="true">čep 02</span>
            <h3>Nedělní langoše</h3>
            <p>
              Každou neděli od 14:00 smažíme langoše. Křupavé, česnekové, k pivu
              jako dělané. Choďte včas, mizí rychleji než pěna z ležáku.
            </p>
          </li>
          <li className="tap">
            <span className="tap-handle" aria-hidden="true">čep 03</span>
            <h3>Řízené ochutnávky</h3>
            <p>
              Degustace piv, vín a rumů s výkladem. Ideální dárek nebo teambuilding,
              po kterém se kolegové konečně shodnou — aspoň na tom, co bylo nejlepší.
            </p>
          </li>
          <li className="tap">
            <span className="tap-handle" aria-hidden="true">čep 04</span>
            <h3>Beerologie ke čtení</h3>
            <p>
              Rozdíl mezi stoutem a porterem? Weissbier vs. witbier? Naše pípodění
              doprovázíme články o pivních stylech — pivo u nás chutná i hlavě.
            </p>
          </li>
        </ol>
      </section>

      {/* ================= SEKCE 2: TŘI PROSTORY ================= */}
      <section className="section section-prostory" id="prostory" aria-labelledby="prostory-title">
        <div className="prostory-grid">
          <div className="prostory-media">
            <img
              src="/section-2.webp"
              alt="Interiér pivnice U Toulavé pípy v centru Pardubic"
            />
            <p className="media-caption">Bělobranské náměstí 9 — dvě minuty pěšky od Zelené brány</p>
          </div>

          <div className="prostory-text">
            <p className="eyebrow">Tři prostory pod jednou pípou</p>
            <h2 id="prostory-title">Od stolu pro dva po oslavu pro čtyřicet pět</h2>
            <p className="section-lead">
              Unikátní propojení tří prostor uprostřed Pardubic. Pronajmete si je
              ve vlastní režii, nebo se servisem, řemeslnými pivy a naší kuchyní.
            </p>

            <ul className="rooms">
              <li className="room">
                <div className="room-name">
                  <h3>Pivnice U&nbsp;Toulavé pípy</h3>
                  <span className="room-cap">50 míst</span>
                </div>
                <p>Srdce podniku. Pípa, štamgasti, příběhy z obyčejnýho života.</p>
              </li>
              <li className="room">
                <div className="room-name">
                  <h3>Loď Otava</h3>
                  <span className="room-cap">45 míst</span>
                </div>
                <p>Sál pro koncerty, večírky a neformální pracovní setkání.</p>
              </li>
              <li className="room">
                <div className="room-name">
                  <h3>Podpípí — moravský sklípek</h3>
                  <span className="room-cap">45 míst</span>
                </div>
                <p>Sklípek pod hospodou. Víno, rum, tlumené světlo, dobrá akustika řečí.</p>
              </li>
            </ul>

            <div className="rezervace">
              <p>
                <strong>Rezervace stolu i celé akce:</strong> zavolejte, nebo napište —
                každou rezervaci potvrzujeme. Když to hoří, radši rovnou telefon.
              </p>
              <div className="rezervace-actions">
                <a className="btn btn-solid" href="tel:608120183">Zavolat 608 120 183</a>
                <a className="btn btn-ghost" href="mailto:provozni@utoulavepipy.cz">
                  Napsat na provozni@utoulavepipy.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
