export default function Page() {
  return (
    <main className="pk">
      {/* ================= HERO ================= */}
      <header className="pk-hero">
        <div className="pk-hero__media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="pk-hero__scrim" />
        </div>

        <div className="pk-hero__inner">
          <nav className="pk-nav" aria-label="Hlavní navigace">
            <a className="pk-wordmark" href="#" aria-label="HT Parket CZ — úvod">
              <span className="pk-wordmark__ht">HT</span>
              <span className="pk-wordmark__stack">
                <span>PARKET</span>
                <span className="pk-wordmark__cz">CZ · Praha</span>
              </span>
            </a>
            <div className="pk-nav__links">
              <a href="#sortiment">Sortiment</a>
              <a href="#duvera">Proč u nás</a>
              <a className="pk-nav__call" href="tel:+420272690770">
                272 690 770
              </a>
            </div>
          </nav>

          <div className="pk-hero__content">
            <p className="pk-hero__eyebrow">Třívrstvé dřevěné podlahy · vlastní výroba od roku 2001</p>
            <h1 className="pk-hero__title">
              <span className="pk-hero__line pk-hero__line--1">Dub,</span>
              <span className="pk-hero__line pk-hero__line--2">který doma</span>
              <span className="pk-hero__line pk-hero__line--3">vydrží generaci.</span>
            </h1>
            <p className="pk-hero__lead">
              Vyrábíme třívrstvá dubová a jasanová prkna na míru — od šířky lamely po povrchovou
              úpravu. V showroomech v Čestlicích a ve Vlašimi si na podlahu sáhnete dřív, než ji koupíte.
            </p>
            <div className="pk-hero__cta">
              <a className="pk-btn pk-btn--solid" href="tel:+420272690770">
                Zavolat do showroomu
              </a>
              <a className="pk-btn pk-btn--ghost" href="#sortiment">
                Prohlédnout sortiment
              </a>
            </div>
          </div>

          {/* Signature: parketový vlys — vzor rybí kosti jako grafický podpis */}
          <div className="pk-herring" aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
          </div>
        </div>
      </header>

      {/* ================= SORTIMENT ================= */}
      <section className="pk-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="pk-section__head">
          <p className="pk-eyebrow">Sortiment</p>
          <h2 id="sortiment-h" className="pk-h2">
            Od masivního dubu po vinyl do koupelny
          </h2>
          <p className="pk-section__intro">
            Podlahu vybíráte na dvacet let dopředu. Proto u nás nejdřív mluvíme o tom, jak bydlíte —
            děti, pes, podlahové topení — a teprve potom o dekorech a ceně.
          </p>
        </div>

        <div className="pk-grid">
          <article className="pk-card pk-card--featured">
            <div className="pk-card__media">
              <img
                src="/section-1.webp"
                alt="Detail třívrstvé dubové podlahy s kartáčovaným povrchem"
              />
            </div>
            <div className="pk-card__body">
              <p className="pk-card__tag">Vlastní výroba</p>
              <h3>Třívrstvá dubová prkna na míru</h3>
              <p>
                Naše vlajková loď. Šířku, délku i povrch — olej, lak, kartáčování — připravíme přesně
                podle vašeho interiéru. Dub Country, Antique, Rustik i Provence skladem k vidění.
              </p>
              <p className="pk-card__note">Záruka až 10 let</p>
            </div>
          </article>

          <article className="pk-card">
            <div className="pk-card__body">
              <p className="pk-card__tag">Praktické do bytu</p>
              <h3>Laminátové podlahy</h3>
              <p>
                Alsafloor, PAR-KY, kolekce Pacific. Odolné dekory dřeva za cenu, která nechá rozpočet
                na zbytek rekonstrukce.
              </p>
            </div>
          </article>

          <article className="pk-card">
            <div className="pk-card__body">
              <p className="pk-card__tag">Do vlhka i zátěže</p>
              <h3>Vinyl a PVC</h3>
              <p>
                Floor Forever Design Vinyl, Adore Herringbone. Do kuchyně, předsíně i komerčních
                prostor — tiché, teplé, snadno se udržují.
              </p>
            </div>
          </article>

          <article className="pk-card">
            <div className="pk-card__body">
              <p className="pk-card__tag">Kompletní interiér</p>
              <h3>Dveře, zárubně, kování</h3>
              <p>
                Interiérové dveře Hörmann sladíme s podlahou na jedné návštěvě showroomu. Dodáme
                včetně zárubní a kování.
              </p>
            </div>
          </article>

          <article className="pk-card">
            <div className="pk-card__body">
              <p className="pk-card__tag">Ven i na terasu</p>
              <h3>Exteriérové podlahy</h3>
              <p>
                Terasová prkna a venkovní krytiny, které zvládnou české počasí. Poradíme s roštem i
                údržbou.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="pk-section pk-section--dark" id="duvera" aria-labelledby="duvera-h">
        <div className="pk-section__head">
          <p className="pk-eyebrow pk-eyebrow--light">Proč HT Parket</p>
          <h2 id="duvera-h" className="pk-h2">
            Podlaháři, ne překupníci
          </h2>
          <p className="pk-section__intro">
            Na trhu jsme od roku 2001. Za tu dobu jsme položili stovky podlah — od garsonek na Jižním
            Městě po rodinné domy v Průhonicích.
          </p>
        </div>

        <div className="pk-facts">
          <div className="pk-fact">
            <p className="pk-fact__key">Od r. 2001</p>
            <p className="pk-fact__val">
              Přes dvacet let na českém trhu. Firma, která tu bude i v době, kdy budete řešit
              reklamaci nebo dokup lamel.
            </p>
          </div>
          <div className="pk-fact">
            <p className="pk-fact__key">Vlastní výroba</p>
            <p className="pk-fact__val">
              Dubová prkna vyrábíme sami. Když potřebujete atypickou šířku nebo dořez do niky,
              nečekáte na dovoz z ciziny.
            </p>
          </div>
          <div className="pk-fact">
            <p className="pk-fact__key">Záruka 10 let</p>
            <p className="pk-fact__val">
              Na vybrané podlahy dáváme desetiletou záruku. Protože víme, z čeho jsou a kdo je
              vyrobil.
            </p>
          </div>
          <div className="pk-fact">
            <p className="pk-fact__key">Školený personál</p>
            <p className="pk-fact__val">
              Prodává vám člověk, který podlahy pokládal. Poradí s podkladem, přechodovými lištami i
              podlahovým topením.
            </p>
          </div>
        </div>

        <div className="pk-showrooms">
          <div className="pk-showroom">
            <h3>Showroom Čestlice</h3>
            <p>SHOP PARK, Průhonická 119<br />251 01 Čestlice u Průhonic</p>
            <a className="pk-showroom__tel" href="tel:+420272690770">+420 272 690 770</a>
          </div>
          <div className="pk-showroom">
            <h3>Prodejna Vlašim</h3>
            <p>Žižkovo náměstí 137<br />258 01 Vlašim (okr. Benešov)</p>
            <a className="pk-showroom__tel" href="tel:+420317845938">+420 317 845 938</a>
          </div>
        </div>
      </section>
    </main>
  );
}
