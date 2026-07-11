export default function Page() {
  return (
    <main>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="wordmark" href="#top" aria-label="OL TRANS CZ — úvod">
            OL<b>TRANS</b>
            <span className="plate">CZ · OL</span>
          </a>
          <nav className="nav-links" aria-label="Hlavní">
            <a href="#doprava">Kamionová doprava</a>
            <a href="#logistika">Logistika</a>
            <a href="#servis">Servis</a>
            <a href="#o-nas">O firmě</a>
          </nav>
          <a className="nav-call" href="tel:+420585316377">+420 585 316 377</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
        </div>
        <div className="wrap hero-inner">
          <p className="hero-eyebrow rise d1">
            <span className="dash" /> Olomouc · v provozu od roku 1991
          </p>
          <h1 className="rise d2">
            Náklad, který <span className="paint">dojede</span> <span className="out">včas</span>.
          </h1>
          <p className="hero-sub rise d3">
            Jsme rodinná firma z Olomouce, která vozí zboží po celé Evropě
            už přes třicet let. <b>Vlastní vozový park, sklady i servis</b> —
            za každou jízdu ručíme jménem, ne subdodavatelem.
          </p>

          <div className="odo rise d3" role="list" aria-label="Firma v číslech">
            <div className="odo-cell" role="listitem">
              <div className="odo-num">1991</div>
              <div className="odo-lbl">Na silnici od</div>
            </div>
            <div className="odo-cell" role="listitem">
              <div className="odo-num">EU<span>27</span></div>
              <div className="odo-lbl">Zemí obsluhujeme</div>
            </div>
            <div className="odo-cell" role="listitem">
              <div className="odo-num">24<span>/7</span></div>
              <div className="odo-lbl">Dispečink &amp; servis</div>
            </div>
          </div>

          <a className="hero-cta rise d4" href="tel:+420585316377">
            Zavolat dispečink <span className="arr">→</span>
          </a>
        </div>
      </section>

      <div className="tape" aria-hidden="true" />

      <section className="sec" id="doprava">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-eyebrow">Co vozíme &amp; skladujeme</p>
              <h2 className="sec-title">Tři věci,<br />které umíme dohromady</h2>
            </div>
            <p className="sec-note">
              Doprava, sklad i servis pod jednou střechou — nemusíte to
              slepovat z pěti dodavatelů. Zavoláte jednou, řešíme celý řetězec.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <div className="card-idx">01 · Doprava</div>
              <h3>Kamionová přeprava</h3>
              <p>
                Plné i dokládkové zásilky po Česku a celé Evropě. Vlastní
                soupravy do 24 tun, každá s GPS a stálým řidičem.
              </p>
              <ul>
                <li>Celovozové i sběrné zásilky</li>
                <li>Plachtové i skříňové návěsy</li>
                <li>Sledování polohy v reálném čase</li>
              </ul>
            </article>

            <article className="card" id="logistika">
              <div className="card-idx">02 · Logistika</div>
              <h3>Sklady a překládka</h3>
              <p>
                Vlastní skladové haly v Olomouci pro naskladnění, kompletaci
                i přebalení zboží před dalším rozvozem.
              </p>
              <ul>
                <li>Krátkodobé i sezonní skladování</li>
                <li>Křížové překládky a kompletace</li>
                <li>Evidence a výdej podle objednávek</li>
              </ul>
            </article>

            <article className="card" id="servis">
              <div className="card-idx">03 · Servis</div>
              <h3>Vlastní autoservis</h3>
              <p>
                Vlastní dílna pro nákladní vozy a návěsy — proto naše auta
                nestojí a vaše zboží nečeká na odtahovku.
              </p>
              <ul>
                <li>Údržba tahačů a návěsů</li>
                <li>Pneváhá s pryžemi a brzdami</li>
                <li>Pohotovost pro vlastní flotilu</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="sec trust" id="o-nas">
        <div className="wrap trust-grid">
          <div className="trust-media">
            <img src="/section-1.webp" alt="Vozový park OL TRANS CZ připravený k výjezdu" />
            <span className="stamp">Vlastní flotila · Olomouc</span>
          </div>
          <div>
            <span className="since">Vozíme od <b>1991</b></span>
            <h2>Rodinná firma, ne <span className="paint">anonymní</span> spedice</h2>
            <p>
              Začínali jsme s jedním autem a jménem, které jsme si nemohli
              dovolit poškodit. Dnes máme <b>vlastní vozový park, sklady i
              dílnu</b> — ale ručení jménem zůstalo stejné.
            </p>
            <p>
              Když voláte na dispečink, mluvíte s člověkem, který vaši zásilku
              zná. Žádné přepojování po call centru, žádné „ozveme se
              vám". Řešíme to hned.
            </p>

            <div className="spec">
              <div className="spec-row">
                <div className="spec-k">Sídlo</div>
                <div className="spec-v">Příčná 129/3, Olomouc</div>
              </div>
              <div className="spec-row">
                <div className="spec-k">Působnost</div>
                <div className="spec-v">Celá Evropa</div>
              </div>
              <div className="spec-row">
                <div className="spec-k">Dispečink</div>
                <div className="spec-v">585 316 377</div>
              </div>
              <div className="spec-row">
                <div className="spec-k">IČ</div>
                <div className="spec-v">25879502</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap trust-grid">
          <div>
            <p className="sec-eyebrow">Jak spolupráce probíhá</p>
            <h2 className="sec-title" style={{ marginBottom: "22px" }}>
              Od poptávky<br />k vyložení
            </h2>
            <p className="sec-note" style={{ maxWidth: "48ch", fontSize: "17px", color: "#cfccc6" }}>
              Nepotřebujete rozumět logistice — od toho jsme tady my. Řeknete,
              co a kam, my navrhneme trasu, termín i cenu. Naložíme, hlídáme
              cestu a dáme vědět, až je zboží na místě.
            </p>
            <a className="hero-cta" href="mailto:info@oltrans.cz" style={{ marginTop: "28px" }}>
              Poptat přepravu e-mailem <span className="arr">→</span>
            </a>
          </div>
          <div className="trust-media">
            <img src="/section-2.webp" alt="Nakládka zásilek ve skladu OL TRANS CZ" />
            <span className="stamp">Sklad &amp; překládka</span>
          </div>
        </div>
      </section>
    </main>
  );
}
