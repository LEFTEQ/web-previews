export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <div className="mark">
          <span className="mark__edge" aria-hidden="true" />
          <span className="mark__name">Pokojný malíř</span>
        </div>
        <p className="mark__meta">Malířství · Praha-Vinohrady</p>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__text">
          <p className="eyebrow"><span className="eyebrow__cut" aria-hidden="true" />Malujeme byty, domy i kavárny · Praha</p>
          <h1 id="hero-title">
            <span className="hero__line">V&nbsp;klidu</span>
            <span className="hero__line">a&nbsp;bez</span>
            <span className="hero__line">starostí.<span className="hero__dot" aria-hidden="true" /></span>
          </h1>
          <p className="lead">
            Nemovitost vám vrátíme vymalovanou a čistou &mdash; a hlavně s&nbsp;ostrou hranou tam, kde stěna
            potkává lištu. Vy se zatím věnujte tomu, co baví vás.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420731016095">Zavolat 731&nbsp;016&nbsp;095</a>
            <a className="btn btn--ghost" href="mailto:marek@pokojnymalir.cz">Napsat e-mail</a>
          </div>
        </div>

        <div className="swatches" aria-hidden="true">
          <div className="swatch swatch--rose">
            <span className="swatch__name">váleček</span>
            <span className="swatch__code">rose · stopa válečku</span>
          </div>
          <div className="swatch swatch--sage">
            <span className="swatch__name">klid</span>
            <span className="swatch__code">sage · pokoj na stěně</span>
          </div>
          <div className="swatch swatch--kraft">
            <span className="swatch__name">maskáč</span>
            <span className="swatch__code">kraft · páska a plachta</span>
          </div>
        </div>
      </section>

      <section className="section section--craft" aria-labelledby="craft-title">
        <div className="wrap">
          <p className="eyebrow eyebrow--dark"><span className="eyebrow__cut" aria-hidden="true" />Co a jak malujeme</p>
          <h2 id="craft-title" className="section__title">Řemeslo, na které je&nbsp;vidět.</h2>
          <p className="section__lead">
            Prázdný byt, vybavený dům, novostavba, kavárna nebo komerční prostor. Poradíme s&nbsp;odstínem
            i&nbsp;postupem, zakryjeme, vymalujeme a&nbsp;po sobě uklidíme. K&nbsp;práci přistupujeme, jako
            bychom malovali u&nbsp;sebe doma.
          </p>

          <ul className="cards">
            <li className="card card--rose">
              <h3 className="card__title">Kvalita</h3>
              <p className="card__body">Doporučíme materiály a&nbsp;postupy tak, aby výsledek odpovídal vašemu záměru i&nbsp;očekávání.</p>
            </li>
            <li className="card card--slate">
              <h3 className="card__title">Systém</h3>
              <p className="card__body">Sehraný tým jako pitstop ve&nbsp;Formuli&nbsp;1 &mdash; od&nbsp;přípravy a&nbsp;zakrytí až po&nbsp;úklid.</p>
            </li>
            <li className="card card--kraft">
              <h3 className="card__title">Čistota</h3>
              <p className="card__body">Nenajdete po&nbsp;nás kapku ani šmouhu. Čistota přináší klid a&nbsp;klid je&nbsp;základ.</p>
            </li>
            <li className="card card--sage">
              <h3 className="card__title">Pečlivost</h3>
              <p className="card__body">Detaily dělají radost &mdash; od&nbsp;oprav omítky po&nbsp;tmelení lišt. Pracujeme vždy &bdquo;jako na&nbsp;svém&ldquo;.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--people" aria-labelledby="people-title">
        <div className="wrap">
          <ul className="dna" aria-label="Proč to děláme">
            <li>Láska ke&nbsp;svobodě</li>
            <li>Okamžitý výsledek</li>
            <li>Spokojený zákazník</li>
          </ul>

          <p className="eyebrow eyebrow--light"><span className="eyebrow__cut" aria-hidden="true" />Náš tým &amp; reference</p>
          <h2 id="people-title" className="section__title">Lidé, kterým otevřete&nbsp;dveře.</h2>

          <ul className="crew">
            <li className="crew__member">
              <h3 className="crew__name">Marek</h3>
              <p className="crew__body">Miluje pořádek. Nejspíš ho zastihnete, jak organizuje pracoviště nebo hadříkem loví poslední kapku barvy, která skončila jinde než na&nbsp;stěně.</p>
            </li>
            <li className="crew__member">
              <h3 className="crew__name">Jakub</h3>
              <p className="crew__body">Ostravský synek s&nbsp;čistou prací. Měří přes dva metry, takže na&nbsp;štafle skoro nesáhne &mdash; a&nbsp;cestou vám sundá kočku ze&nbsp;stromu.</p>
            </li>
            <li className="crew__member">
              <h3 className="crew__name">Jan</h3>
              <p className="crew__body">Honza z&nbsp;pohádek v&nbsp;tom nejlepším smyslu. Odvede perfektní výkon a&nbsp;často udělá i&nbsp;něco navíc. Bez řečí, sám od&nbsp;sebe.</p>
            </li>
            <li className="crew__member">
              <h3 className="crew__name">Lukáš</h3>
              <p className="crew__body">Roky prodával barvy za&nbsp;pultem. Pak vyměnil kasu za&nbsp;váleček a&nbsp;barvy začal nanášet rovnou na&nbsp;stěny.</p>
            </li>
          </ul>

          <ul className="quotes">
            <li className="quote">
              <p className="quote__body">Na&nbsp;čem jsme se dohodli, bylo splněno, a&nbsp;v&nbsp;krátkém termínu. Slyšet větu &bdquo;my malujeme rádi&ldquo; je jako z&nbsp;jiné planety.</p>
              <p className="quote__by">Taťána Šinovská</p>
            </li>
            <li className="quote">
              <p className="quote__body">Celá akce byla naprosto super. Milé jednání, vše dojednáno rychle a&nbsp;práce do&nbsp;posledního puntíku perfektní. Můžu doporučit všem.</p>
              <p className="quote__by">Petra Brožová</p>
            </li>
            <li className="quote">
              <p className="quote__body">Příjemná komunikace, profesionálně odvedená práce včetně drobných oprav omítky a&nbsp;následného úklidu. Doporučuji.</p>
              <p className="quote__by">Miroslava Holá</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
