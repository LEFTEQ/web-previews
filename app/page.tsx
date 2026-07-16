import { PictoCar, PictoMoto, PictoWheel, PictoBadge } from "./_picto";

export default function Page() {
  return (
    <main className="page">
      <div className="lane" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span className="brand-text">
            <strong>Formánek</strong>
            <span className="brand-sub">Autoškola · Liberec</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#ridicak">Řidičák B</a>
          <a href="#cenik">Ceník</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Autoškola · Liberec · od první hodiny na řidičák</p>
          <h1 className="hero-title">
            Naučíme tě řídit.
            <br />
            <span className="hl">Klidně a poctivě.</span>
          </h1>
          <p className="hero-lead">
            Skupina&nbsp;B i&nbsp;A, školení referentů a kondiční jízdy. Klidný
            instruktor, který ti v&nbsp;pohodě odpoví na každý dotaz — a&nbsp;učebna
            přímo v&nbsp;budově Kolosea v&nbsp;Nových Pavlovicích.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#sluzby">Chci vědět víc</a>
            <a className="btn btn-ghost" href="tel:+420602101102">Zavolat 602 101 102</a>
          </div>
        </div>

        <aside className="routepanel" aria-label="Kudy vede cesta k řidičáku">
          <span className="routepanel-kicker">Trasa výcviku</span>
          <ol className="routestops">
            <li><span className="stopnum">01</span> Přihláška a lékařský posudek</li>
            <li><span className="stopnum">02</span> 36 hodin teorie v&nbsp;7 přednáškách</li>
            <li><span className="stopnum">03</span> 28 hodin za volantem — Škoda Yeti</li>
            <li><span className="stopnum">04</span> Zkouška a&nbsp;řidičské oprávnění</li>
          </ol>
        </aside>
      </section>

      <section className="section" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">Služby</p>
          <h2 className="section-title">Vyber si svou značku</h2>
          <p className="section-lead">
            Čtyři kurzy, každý s&nbsp;jasnými podmínkami. Vpravo dole čteš to
            podstatné jako na značce — hmotnost, místa, hodiny.
          </p>
        </div>

        <div className="plates">
          <article className="plate">
            <div className="plate-sign"><PictoCar /></div>
            <h3 className="plate-title">Skupina B</h3>
            <p className="plate-desc">
              Řízení motorových vozidel do 3500&nbsp;kg. Nejčastější kurz — auto,
              se kterým vyrazíš do práce i&nbsp;na hory.
            </p>
            <div className="plate-strip">
              <span>≤ 3500 kg</span>
              <span>9 míst</span>
              <span>od 18 let</span>
            </div>
          </article>

          <article className="plate">
            <div className="plate-sign"><PictoMoto /></div>
            <h3 className="plate-title">Skupina A</h3>
            <p className="plate-desc">
              Zprostředkujeme kompletní výcvik na motorku — od přihlášky až po
              zkoušku, s&nbsp;prověřeným partnerem.
            </p>
            <div className="plate-strip">
              <span>motocykl</span>
              <span>kompletní kurz</span>
            </div>
          </article>

          <article className="plate">
            <div className="plate-sign"><PictoBadge /></div>
            <h3 className="plate-title">Řidiči referenti</h3>
            <p className="plate-desc">
              Školení pro zaměstnance, kteří řídí služební vozidlo jako vedlejší
              pracovní činnost. Rozsah domluvíme podle firmy.
            </p>
            <div className="plate-strip">
              <span>firmy</span>
              <span>dle dohody</span>
            </div>
          </article>

          <article className="plate">
            <div className="plate-sign"><PictoWheel /></div>
            <h3 className="plate-title">Kondiční jízdy</h3>
            <p className="plate-desc">
              Oprášíš znalosti a&nbsp;získáš jistotu za volantem. Ideální po
              pauze nebo před delší cestou.
            </p>
            <div className="plate-strip">
              <span>600 Kč</span>
              <span>45 minut</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-dark" id="ridicak">
        <div className="section-head">
          <p className="eyebrow eyebrow-light">Řidičské oprávnění · skupina B</p>
          <h2 className="section-title section-title-light">Krok za krokem k&nbsp;béčku</h2>
          <p className="section-lead section-lead-light">
            Výuka jede podle individuálního plánu — na učebnu docházíš jen na
            konzultace, ve skupině nejvýš pěti žáků. Tady je celá trasa v&nbsp;datech.
          </p>
        </div>

        <div className="specgrid">
          <div className="specplate"><span className="specnum">18</span><span className="speclabel">věk pro udělení oprávnění</span></div>
          <div className="specplate"><span className="specnum">28</span><span className="speclabel">hodin za volantem, Škoda Yeti</span></div>
          <div className="specplate"><span className="specnum">36</span><span className="speclabel">hodin teorie v&nbsp;7 přednáškách</span></div>
          <div className="specplate"><span className="specnum">6</span><span className="speclabel">hodin údržby a&nbsp;zdravovědy</span></div>
        </div>

        <div className="trust">
          <p className="trust-quote">
            „Klidný instruktor, který vám rád odpoví na všechny dotazy.“ To není
            slogan — je to způsob, jak u&nbsp;nás výcvik vypadá.
          </p>
          <div className="trust-facts">
            <div><span className="trust-k">Učebna</span> Generála Svobody 83, Liberec 13 — budova Kolosea</div>
            <div><span className="trust-k">Sídlo</span> Zelené Údolí 1187, Liberec 6</div>
            <div><span className="trust-k">Domluva</span> 602&nbsp;101&nbsp;102 · formankova.zuzan@seznam.cz</div>
          </div>
        </div>
      </section>

      <section className="section" id="cenik">
        <div className="section-head">
          <p className="eyebrow">Ceník · platný od 21. 10. 2025</p>
          <h2 className="section-title">Ceny bez překvapení</h2>
        </div>

        <ul className="pricelist">
          <li className="pricerow pricerow-lead">
            <span className="priceitem">Skupina B — kompletní výcvik</span>
            <span className="pricetag">20 000 Kč</span>
          </li>
          <li className="pricerow">
            <span className="priceitem">Kondiční jízda</span>
            <span className="pricetag">600 Kč / 45 min</span>
          </li>
          <li className="pricerow">
            <span className="priceitem">Školení řidičů referentů</span>
            <span className="pricetag">dle dohody</span>
          </li>
          <li className="pricerow pricerow-minor">
            <span className="priceitem">Přistavení auta ke zkoušce</span>
            <span className="pricetag">400 Kč</span>
          </li>
          <li className="pricerow pricerow-minor">
            <span className="priceitem">Neomluvená hodina / prostoj</span>
            <span className="pricetag">600 Kč</span>
          </li>
          <li className="pricerow pricerow-minor">
            <span className="priceitem">Storno poplatek</span>
            <span className="pricetag">1 500 Kč</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
