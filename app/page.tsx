export default function Page() {
  return (
    <main className="mc">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Michal Číla, malířství">
            <span className="wordmark-name">ČÍLA</span>
            <span className="wordmark-sub">malířství &amp; natěračství · Milovice</span>
          </div>
          <a className="hero-tel" href="tel:+420777000000">
            <span aria-hidden="true">☎</span> Zavolat
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Malíř a natěrač od roku 1999</p>
          <h1 className="hero-title">
            <span className="stroke stroke-1"><em>Bílá</em> je jen začátek.</span>
            <span className="stroke stroke-2">Vymaluji vám byt, dům</span>
            <span className="stroke stroke-3">i fasádu — čistě, včas</span>
            <span className="stroke stroke-4">a bez kapky na podlaze.</span>
          </h1>
          <p className="hero-lead">
            Jsem Michal Číla, malíř z Milovic. Řemeslo dělám sám, vlastníma
            rukama — od zakrytí nábytku po finální úklid. Vy jen vyberete odstín.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420777000000">Zavolat a domluvit termín</a>
            <a className="btn btn-ghost" href="mailto:info@malbycila.cz">Napsat e‑mail</a>
          </div>
        </div>

        {/* signature: vzorník odstínů jako karty vějíře */}
        <div className="fan" aria-hidden="true">
          <span className="chip chip-1"><i>NCS S 0502‑Y</i></span>
          <span className="chip chip-2"><i>RAL 5024</i></span>
          <span className="chip chip-3"><i>RAL 1002</i></span>
          <span className="chip chip-4"><i>RAL 3012</i></span>
          <span className="chip chip-5"><i>RAL 6021</i></span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás natřu a vymaluji</h2>
          <p>
            Každá zakázka začíná obhlídkou zdarma — přijedu, změřím, poradím
            s odstínem i materiálem a do dvou dnů pošlu cenu. Ta pak platí.
          </p>
        </div>

        <ul className="sluzby-grid">
          <li className="karta">
            <span className="karta-vzorek v-interier" aria-hidden="true"></span>
            <h3>Malování interiérů</h3>
            <p>
              Byty, domy, kanceláře i dětské pokoje. Otěruvzdorné a omyvatelné
              malby, které vydrží dětské ruce i každodenní provoz.
            </p>
            <p className="karta-detail">Zakrytí a úklid v ceně · práce o víkendu po domluvě</p>
          </li>
          <li className="karta">
            <span className="karta-vzorek v-natery" aria-hidden="true"></span>
            <h3>Nátěry dřeva a kovu</h3>
            <p>
              Okna, dveře, zábradlí, ploty, radiátory. Staré nátěry obrousím
              nebo opálím — nový nátěr drží na podkladu, ne na špíně.
            </p>
            <p className="karta-detail">Renovace starých dveří místo výměny — ušetříte tisíce</p>
          </li>
          <li className="karta">
            <span className="karta-vzorek v-fasady" aria-hidden="true"></span>
            <h3>Fasády a venkovní zdi</h3>
            <p>
              Akrylátové, silikonové i silikátové nátěry — poradím, který se
              hodí právě na vaši zeď, aby fasáda dýchala a neodprýskala.
            </p>
            <p className="karta-detail">Vhodné období: duben–říjen, objednávejte s předstihem</p>
          </li>
          <li className="karta">
            <span className="karta-vzorek v-tapety" aria-hidden="true"></span>
            <h3>Tapetování a poradna</h3>
            <p>
              Tapety lepím i strhávám. A když si chcete malovat sami, poradím
              vám zdarma s výběrem barvy, válečku i postupu.
            </p>
            <p className="karta-detail">Rada po telefonu nic nestojí — klidně zavolejte</p>
          </li>
        </ul>
      </section>

      {/* ===== JAK PRACUJI / DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">Jak u vás pracuji</h2>
            <ol className="postup">
              <li>
                <strong>Obhlídka a cena předem.</strong> Přijedu, změřím a pošlu
                jasnou cenu. Žádné „uvidíme podle toho, jak to půjde“.
              </li>
              <li>
                <strong>Zakryji úplně všechno.</strong> Podlahy, nábytek, kliky,
                zásuvky. Fólie a papír jsou levnější než vaše nervy.
              </li>
              <li>
                <strong>Kvalitní materiál, žádné náhražky.</strong> Právě kvůli
                šizeným barvám jsem v roce 2005 odešel z firem a začal na sebe.
              </li>
              <li>
                <strong>Uklidím po sobě.</strong> Odcházím, až když si můžete
                sednout do čisté, vymalované místnosti. Ten den, ne „někdy“.
              </li>
            </ol>
          </div>

          <div className="duvera-side">
            <figure className="reference">
              <blockquote>
                „Pan Číla vymaloval dětský pokoj za jeden den. Ráno přišel,
                večer jsme dětem stlali do hotového. A nikde ani kapka.“
              </blockquote>
              <figcaption>rodina Horákova, Milovice — dětský pokoj, 2 odstíny</figcaption>
            </figure>
            <figure className="reference">
              <blockquote>
                „Renovace vstupních dveří místo výměny. Vypadají líp než nové
                a stály nás třetinu.“
              </blockquote>
              <figcaption>bytový dům Praha, Národní třída — nátěry dveří</figcaption>
            </figure>
            <div className="fakta">
              <p><strong>25 let</strong> v řemesle, od roku 2005 na vlastní živnost</p>
              <p><strong>Milovice a okolí</strong> — Lysá n. L., Nymburk, Čelákovice, Praha</p>
              <p><strong>Topolová 970</strong>, 289 24 Milovice nad Labem</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
