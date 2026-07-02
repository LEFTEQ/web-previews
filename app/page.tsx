const cuts = [
  {
    label: "Hovězí",
    detail: "Roštěná, svíčková, žebra, kližka na guláš. Bouráme sami, maso krájíme na počkání.",
  },
  {
    label: "Vepřové",
    detail: "Krkovice, kýta, bůček, panenka. Řekněte, na co vaříte — nakrájíme přesně na váš recept.",
  },
  {
    label: "Marinované na gril",
    detail: "Krkovice a kuřecí v našich marinádách. V sezóně nakládáme denně, stačí hodit na rošt.",
  },
  {
    label: "Uzeniny z udírny",
    detail: "Špekáčky, klobásy, tlačenka, šunka od kosti. Udíme na bukovém dřevě, bez zbytečné chemie.",
  },
  {
    label: "Domácí výroba",
    detail: "Pečená sekaná každý den čerstvá, škvarky, sádlo, jitrnice a jelita v zabijačkové sezóně.",
  },
];

const hours = [
  { day: "Pondělí", time: "8:00 – 17:30" },
  { day: "Úterý", time: "8:00 – 17:30" },
  { day: "Středa", time: "8:00 – 17:30" },
  { day: "Čtvrtek", time: "8:00 – 17:30" },
  { day: "Pátek", time: "8:00 – 17:30" },
  { day: "Sobota", time: "7:30 – 11:00" },
];

export default function Page() {
  return (
    <main className="plot">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Řeznictví a uzenářství Plot">
            <span className="wordmark-main">PLOT</span>
            <span className="wordmark-sub">řeznictví &amp; uzenářství</span>
          </div>
          <a className="hero-phone" href="tel:+420777610243">
            <span className="hero-phone-label">Zavolat do krámu</span>
            <span className="hero-phone-number">777 610 243</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">J. Purkyně 829 · Hradec Králové · od roku 2004</p>
          <h1 className="hero-title">
            <span className="line line-1">Čerstvé maso</span>
            <span className="line line-2">z vlastní bourárny,</span>
            <span className="line line-3 accent">každý den ráno.</span>
          </h1>
          <p className="hero-lede">
            Malé rodinné řeznictví na Moravském Předměstí. Bouráme sami, udíme na
            buku a sekanou pečeme dřív, než otevřeme. Přijďte, poradíme vám s výběrem
            i s receptem.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420777610243">Zavolat: 777 610 243</a>
            <a className="btn btn-line" href="#oteviraci-doba">Kdy máme otevřeno</a>
          </div>
        </div>

        {/* signature: řeznický papír s razítkem a "cenovkou" */}
        <div className="hero-ticket" aria-hidden="true">
          <div className="ticket-row"><span>DNES PEČEME</span><span className="ticket-dots" /><span>SEKANOU</span></div>
          <div className="ticket-row"><span>Z UDÍRNY</span><span className="ticket-dots" /><span>KLOBÁSY</span></div>
          <div className="ticket-row"><span>NA GRIL</span><span className="ticket-dots" /><span>KRKOVICE</span></div>
          <div className="ticket-stamp">PLOT · HK</div>
        </div>
      </header>

      {/* ===== PULT ===== */}
      <section className="counter" aria-labelledby="counter-h">
        <div className="section-head">
          <h2 id="counter-h">Co najdete na pultu</h2>
          <p>
            Sortiment se točí podle toho, co je zrovna nejlepší. Tohle u nás
            ale seženete prakticky pořád — a když chcete něco speciálního,
            zavolejte den dopředu a připravíme to.
          </p>
        </div>

        <ul className="cuts">
          {cuts.map((c) => (
            <li className="cut" key={c.label}>
              <span className="cut-mark" aria-hidden="true" />
              <h3>{c.label}</h3>
              <p>{c.detail}</p>
            </li>
          ))}
          <li className="cut cut-order">
            <h3>Objednávka na míru</h3>
            <p>
              Selátko na oslavu, maso na zabijačku nebo 5 kilo krkovice na firemní
              grilovačku? Domluvíme po telefonu, vyzvednete hotové.
            </p>
            <a className="cut-order-link" href="tel:+420777610243">Objednat na 777 610 243</a>
          </li>
        </ul>
      </section>

      {/* ===== KRÁM / DŮVĚRA ===== */}
      <section className="shop" id="oteviraci-doba" aria-labelledby="shop-h">
        <div className="shop-grid">
          <div className="shop-story">
            <h2 id="shop-h">Řezník, kterého znáte jménem</h2>
            <p>
              Za pultem stojíme sami — žádný řetězec, žádné maso z folie. Víme, odkud
              každý kus pochází, a vážíme přesně tolik, kolik potřebujete. Půl kila
              na svíčkovou pro dva? Není problém.
            </p>
            <p>
              Zákazníci k nám jezdí z celého Hradce i okolí — pro sekanou, která
              zmizí do oběda, a pro špekáčky, které na ohni nesplasknou.
            </p>
            <ul className="shop-claims">
              <li>Vlastní bourárna a udírna přímo v provozovně</li>
              <li>Nakrájíme, namelame a naložíme na počkání</li>
              <li>Zabijačkové speciality v sezóně — hlaste se včas</li>
            </ul>
          </div>

          <div className="shop-card">
            <h3>Otevírací doba</h3>
            <table className="hours">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day}>
                    <th scope="row">{h.day}</th>
                    <td>{h.time}</td>
                  </tr>
                ))}
                <tr className="closed">
                  <th scope="row">Neděle</th>
                  <td>zavřeno</td>
                </tr>
              </tbody>
            </table>
            <address className="shop-address">
              Řeznictví a uzenářství PLOT s.r.o.<br />
              J. Purkyně 829, 500 02 Hradec Králové
            </address>
            <a className="btn btn-solid btn-block" href="tel:+420777610243">
              Zavolat: 777 610 243
            </a>
            <a
              className="shop-map-link"
              href="https://mapy.cz/zakladni?q=J.%20Purkyn%C4%9B%20829%2C%20Hradec%20Kr%C3%A1lov%C3%A9"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ukázat cestu na mapě
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
