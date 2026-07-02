export default function Page() {
  return (
    <main className="uz">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="Úsporné závlahy">
            úsporné<em>závlahy</em>
          </span>
          <a className="hero-tel" href="tel:+420737437150">737 437 150</a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Podpovrchová kapková závlaha · Praha a okolí</p>
          <h1 className="hero-title">
            <span className="line line-1">Voda jde</span>
            <span className="line line-2">rovnou ke&nbsp;kořenům.</span>
            <span className="line line-3">
              Ušetříte&nbsp;<strong className="big-70">70&nbsp;%</strong>&nbsp;z&nbsp;ní.
            </span>
          </h1>
          <p className="hero-sub">
            Žádné rozstřikovače, které kropí chodník a odpařují vodu do vzduchu.
            Hadice s&nbsp;kapkovači leží pár centimetrů pod trávníkem a&nbsp;zalévá
            přesně tam, kde rostlina pije. Jediná závlaha, na kterou dostanete
            dotaci z&nbsp;programu Dešťovka.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#reseni">Vybrat závlahu pro moji zahradu</a>
            <a className="btn btn-ghost" href="#duvera">Jak to funguje</a>
          </div>
        </div>

        {/* Signature: řez trávníkem — kapková linie pod drnem */}
        <div className="soil-cut" aria-hidden="true">
          <div className="turf">
            <span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" /><span className="blade" />
          </div>
          <div className="soil">
            <div className="dripline">
              <span className="dripper d1"><i className="drop" /></span>
              <span className="dripper d2"><i className="drop" /></span>
              <span className="dripper d3"><i className="drop" /></span>
              <span className="dripper d4"><i className="drop" /></span>
              <span className="dripper d5"><i className="drop" /></span>
              <span className="dripper d6"><i className="drop" /></span>
              <span className="dripper d7"><i className="drop" /></span>
            </div>
            <p className="soil-caption">−12&nbsp;cm: tady zalévá kapková linie. Nic se neodpaří, nic neuteče.</p>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: ŘEŠENÍ ===== */}
      <section className="reseni" id="reseni">
        <div className="section-head">
          <h2>Co chcete zalévat?</h2>
          <p>
            Každá zahrada pije jinak. Vyberte, co u&nbsp;vás roste — u&nbsp;většiny
            řešení rovnou vidíte, kolik to stojí.
          </p>
        </div>

        <div className="reseni-grid">
          <article className="karta">
            <span className="karta-tag">trávník</span>
            <h3>Nový trávník</h3>
            <p>
              Nejlevnější chvíle na podpovrchovou závlahu je před založením
              trávníku. Linie položíme do připravené půdy a&nbsp;pak už jen
              sejete — provoz vyjde trvale levněji než postřik.
            </p>
            <a className="karta-link" href="tel:+420737437150">Spočítat cenu</a>
          </article>

          <article className="karta">
            <span className="karta-tag">trávník</span>
            <h3>Stávající trávník</h3>
            <p>
              Trávník kvůli závlaze nerozkopeme. Speciální stroj šetrně rozřízne
              drn, položí hadici a&nbsp;spáru za sebou zavře. Za pár dní není po
              zásahu ani stopa.
            </p>
            <a className="karta-link" href="tel:+420737437150">Spočítat cenu</a>
          </article>

          <article className="karta">
            <span className="karta-tag">sad · vinice</span>
            <h3>Sad nebo vinice</h3>
            <p>
              Kapková závlaha nad zemí i&nbsp;pod ní. Stromy a&nbsp;réva dostanou
              vodu k&nbsp;patě kmene, vy ušetříte až polovinu vody proti
              konvenčnímu zavlažování.
            </p>
            <a className="karta-link" href="tel:+420737437150">Nechat si navrhnout</a>
          </article>

          <article className="karta">
            <span className="karta-tag">záhony</span>
            <h3>Záhony s&nbsp;květinami a&nbsp;zeleninou</h3>
            <p>
              Kapková hadice mezi rostlinami zalévá sama a&nbsp;přesně. Závlaha
              pro 10&nbsp;m² vyjde na cca 3&nbsp;500&nbsp;Kč, každých dalších
              5&nbsp;m² jen 500&nbsp;Kč navíc.
            </p>
            <a className="karta-link" href="tel:+420737437150">Spočítat cenu</a>
          </article>

          <article className="karta">
            <span className="karta-tag">balkon · terasa</span>
            <h3>Květináče a&nbsp;truhlíky</h3>
            <p>
              Mikrozávlaha zalije truhlíky i&nbsp;v&nbsp;srpnu, když jste u&nbsp;moře.
              10&nbsp;květináčů za cca 3&nbsp;000&nbsp;Kč, každých dalších 10 jen
              800&nbsp;Kč navíc.
            </p>
            <a className="karta-link" href="tel:+420737437150">Spočítat cenu</a>
          </article>

          <article className="karta karta-plna">
            <span className="karta-tag">celá zahrada</span>
            <h3>Všechno dohromady</h3>
            <p>
              Trávník, záhony i&nbsp;truhlíky na jednom systému s&nbsp;jedním
              ovládáním. Navrhneme celek tak, aby spotřeboval co nejméně vody
              a&nbsp;co nejméně vaší pozornosti.
            </p>
            <a className="karta-link" href="mailto:info@usporne-zavlahy.cz">Popsat nám zahradu</a>
          </article>
        </div>

        <p className="reseni-pozn">
          Zvládnete to i&nbsp;sami: ke&nbsp;všem komponentům dodáváme katalog
          a&nbsp;návody k&nbsp;instalaci svépomocí. U&nbsp;složitějších systémů
          nainstalujeme hlavní části za vás.
        </p>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / ČÍSLA ===== */}
      <section className="duvera" id="duvera">
        <div className="section-head section-head-inv">
          <h2>Proč zalévat pod povrchem</h2>
          <p>
            Počítáme s&nbsp;cenou vody 144&nbsp;Kč/m³ a&nbsp;dvaceti lety provozu —
            tak dlouho totiž závlaha na zahradě reálně slouží.
          </p>
        </div>

        <dl className="fakta">
          <div className="fakt">
            <dt>Úspora vody</dt>
            <dd><span className="fakt-num">až&nbsp;70&nbsp;%</span> proti postřiku — voda se neodpaří ani neodteče mimo kořeny.</dd>
          </div>
          <div className="fakt">
            <dt>Pořízení</dt>
            <dd><span className="fakt-num">≈ stejné</span> náklady jako u&nbsp;konvenčního systému. Rozdíl uděláte na provozu.</dd>
          </div>
          <div className="fakt">
            <dt>Dotace</dt>
            <dd><span className="fakt-num">Dešťovka</span> — jediný typ závlahy, na který lze čerpat státní dotaci.</dd>
          </div>
          <div className="fakt">
            <dt>Údržba</dt>
            <dd><span className="fakt-num">minimum</span> — pod zemí nic neurazíte sekačkou a&nbsp;nic nezamrzá naprasklé.</dd>
          </div>
        </dl>

        <div className="duvera-body">
          <blockquote className="citace">
            <p>
              „Rostlina zalitá ke&nbsp;kořenům je odolnější — kořeny rostou do
              hloubky za vodou, ne k&nbsp;povrchu za rosou. Trávník pak zvládne
              i&nbsp;týden veder bez zalévání.“
            </p>
            <cite>— proto stavíme závlahy pod povrch, ne nad něj</cite>
          </blockquote>

          <div className="onas">
            <h3>Kdo za tím stojí</h3>
            <p>
              Jsme pražská firma specializovaná na úsporné zavlažování. Nemáme
              v&nbsp;nabídce všechno — jen systémy, u&nbsp;kterých si za úsporou
              vody stojíme. Navrhneme, spočítáme cenu předem, nainstalujeme
              nebo vás naučíme instalovat.
            </p>
            <ul className="onas-kontakty">
              <li><a href="tel:+420737437150">Zavolat: 737&nbsp;437&nbsp;150</a></li>
              <li><a href="mailto:info@usporne-zavlahy.cz">Napsat: info@usporne-zavlahy.cz</a></li>
              <li><span>Působíme v&nbsp;Praze a&nbsp;Středočeském kraji</span></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
