export default function Page() {
  return (
    <main className="hh">
      <header className="hh-nav">
        <a className="hh-mark" href="#top" aria-label="Harmony Haven Head Spa, úvod">
          <span className="hh-mark-line">harmony</span>
          <span className="hh-mark-line hh-mark-jp">haven<em>頭</em></span>
        </a>
        <nav className="hh-menu" aria-label="Hlavní navigace">
          <a href="#procedury">Procedury</a>
          <a href="#onas">O nás</a>
          <a className="hh-nav-cta" href="tel:+420730471777">Objednat termín</a>
        </nav>
      </header>

      <section className="hh-hero" id="top">
        <div className="hh-hero-media">
          <img src="/hero.webp" alt="Klientka při japonské péči o vlasovou pokožku Head Spa v salonu Harmony Haven v Ostravě" />
        </div>
        <div className="hh-hero-body">
          <p className="hh-eyebrow">Head Spa · Ostrava-Mariánské Hory</p>
          <h1 className="hh-title">
            Ležíte v teplé vodě.<br />
            <span className="hh-title-accent">Ruce hledají napětí</span><br />
            v pokožce hlavy.
          </h1>
          <p className="hh-lead">
            Japonská péče, kde se masáž hlavy potká s teplým pramenem, aromaterapií
            a hloubkovým čištěním vlasové pokožky. Odejdete s lehčí hlavou,
            lesklejšími vlasy a klidem, který drží ještě druhý den.
          </p>
          <div className="hh-hero-actions">
            <a className="hh-btn" href="tel:+420730471777">Zavolat 730&nbsp;471&nbsp;777</a>
            <a className="hh-btn hh-btn-ghost" href="#procedury">Vybrat proceduru</a>
          </div>
          <dl className="hh-hero-facts">
            <div><dt>Délka rituálu</dt><dd>60–90 minut</dd></div>
            <div><dt>Ve dvou</dt><dd>dvě lehátka vedle sebe</dd></div>
            <div><dt>Kde</dt><dd>Halasova 20, Ostrava</dd></div>
          </dl>
        </div>
      </section>

      <section className="hh-menu-sec" id="procedury" aria-labelledby="procedury-h">
        <div className="hh-sec-head">
          <p className="hh-eyebrow">Menu rituálů</p>
          <h2 id="procedury-h">Vyberte si podle toho,<br />co dnes hlava potřebuje.</h2>
        </div>

        <ol className="hh-rituals">
          <li className="hh-ritual">
            <span className="hh-ritual-jp">緩</span>
            <div className="hh-ritual-body">
              <h3>Relax</h3>
              <p className="hh-ritual-tag">Uvolnění pro tělo i mysl</p>
              <p>Masáž hlavy, šíje a ramen v teplém prameni. Naše základní procedura pro každého, kdo si potřebuje vypnout hlavu.</p>
            </div>
            <span className="hh-ritual-time">60 min</span>
          </li>
          <li className="hh-ritual">
            <span className="hh-ritual-jp">洗</span>
            <div className="hh-ritual-body">
              <h3>Detox</h3>
              <p className="hh-ritual-tag">Hloubkové čištění vlasové pokožky</p>
              <p>Zbavíme pokožku hlavy zbytků stylingu, mazu a nečistot. Vlasy nadechnou a získají čerstvý objem od kořínků.</p>
            </div>
            <span className="hh-ritual-time">70 min</span>
          </li>
          <li className="hh-ritual">
            <span className="hh-ritual-jp">診</span>
            <div className="hh-ritual-body">
              <h3>Trichology care</h3>
              <p className="hh-ritual-tag">Péče při problémech s vlasy</p>
              <p>Cílená péče při padání vlasů, lupech nebo podráždění. Zhodnotíme stav pokožky a přizpůsobíme přípravky vašim potřebám.</p>
            </div>
            <span className="hh-ritual-time">80 min</span>
          </li>
          <li className="hh-ritual">
            <span className="hh-ritual-jp">花</span>
            <div className="hh-ritual-body">
              <h3>Flowerfall</h3>
              <p className="hh-ritual-tag">Ájurvédská terapie</p>
              <p>Teplý olej stéká pramínkem přes čelo a pokožku hlavy. Nejhlubší forma zklidnění nervové soustavy v naší nabídce.</p>
            </div>
            <span className="hh-ritual-time">90 min</span>
          </li>
        </ol>

        <aside className="hh-add">
          <div className="hh-add-body">
            <p className="hh-eyebrow">Doplněk k rituálu</p>
            <h3>Terapie červeným světlem</h3>
            <p>Červené světlo prohřívá buňky a podporuje prokrvení, regeneraci pokožky i růst vlasů. Neinvazivní, vhodné pro všechny typy pleti.</p>
            <p className="hh-add-price"><strong>300 Kč</strong> / 15 minut &nbsp;·&nbsp; k proceduře Relax jen <strong>+200 Kč</strong></p>
          </div>
          <img src="/section-1.webp" alt="Detail terapie červeným světlem během procedury Head Spa" />
        </aside>
      </section>

      <section className="hh-about" id="onas" aria-labelledby="onas-h">
        <div className="hh-about-media">
          <img src="/section-2.webp" alt="Klidný interiér salonu Harmony Haven s lehátky pro proceduru Head Spa" />
        </div>
        <div className="hh-about-body">
          <p className="hh-eyebrow">O nás</p>
          <h2 id="onas-h">Malý salon v Ostravě,<br />postavený kolem jedné věci.</h2>
          <p>
            V Harmony Haven neděláme vlasy nakrátko a nebarvíme. Věnujeme se jediné
            věci pořádně — péči o vlasovou pokožku japonskou metodou Head Spa.
            Přijdete, lehnete si a na dalších 60 až 90 minut se o vás postaráme.
          </p>

          <ul className="hh-faq">
            <li>
              <p className="hh-q">Je Head Spa vhodné i pro muže?</p>
              <p className="hh-a">Ano, chodí k nám muži i ženy. Procedura funguje stejně bez ohledu na délku vlasů.</p>
            </li>
            <li>
              <p className="hh-q">Můžeme přijít ve dvou?</p>
              <p className="hh-a">Máme dvě lehátka vedle sebe — ideální pro páry, kamarádky nebo maminku s dcerou. Termín pro dva prosím domluvte telefonicky.</p>
            </li>
            <li>
              <p className="hh-q">Bolí to?</p>
              <p className="hh-a">Ne. Masáž pokožky hlavy a šíje je jemná a uklidňující, většina lidí u ní usne.</p>
            </li>
          </ul>

          <div className="hh-contact">
            <a className="hh-btn" href="tel:+420730471777">Zavolat a objednat se</a>
            <p className="hh-contact-meta">
              Halasova 20, Ostrava · <a href="mailto:info@hhspa.cz">info@hhspa.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
