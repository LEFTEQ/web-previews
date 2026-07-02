export default function Page() {
  return (
    <main className="ft">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Chata Fortunae mezi stromy nedaleko Hradce Králové, večerní světlo v oknech"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <div className="brand">
            <span className="brand__mark" aria-hidden="true">
              {/* klíč od chaty jako wordmark-symbol */}
              <svg viewBox="0 0 32 32" width="28" height="28" role="presentation" focusable="false">
                <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
                <path d="M15.5 15.5 L27 27 M23 23 l3.5 -3.5 M19.5 19.5 l3 -3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="brand__word">Fortunae</span>
            <span className="brand__tag">chata u Hradce Králové</span>
          </div>

          <div className="hero__copy">
            <p className="hero__eyebrow">Klíč visí na hřebíku. Je váš.</p>
            <h1 className="hero__title">
              Dřevo, les a ticho,
              <br />
              <em>dvacet minut</em> od Hradce.
            </h1>
            <p className="hero__lead">
              Roubená chata pro 6 lidí na kraji lesa. Kamna, sauna, terasa s
              grilem — a večer taková tma, že uvidíte Mléčnou dráhu. Bez
              recepce, bez sousedů, bez formulářů na tři strany.
            </p>
            <div className="hero__actions">
              <a href="#terminy" className="btn btn--solid">
                Ověřit volný termín
              </a>
              <a href="tel:+420495516162" className="btn btn--ghost">
                Zavolat: 495 516 162
              </a>
            </div>
          </div>

          {/* signature: dřevěná cedulka s fakty, jako na vrátkách chaty */}
          <aside className="hero__plank" aria-label="Základní údaje o chatě">
            <dl className="plank">
              <div className="plank__item">
                <dt>Lůžka</dt>
                <dd>6 + 2</dd>
              </div>
              <div className="plank__item">
                <dt>Z Hradce autem</dt>
                <dd>20 min</dd>
              </div>
              <div className="plank__item">
                <dt>Víkend od</dt>
                <dd>4 900 Kč</dd>
              </div>
              <div className="plank__item">
                <dt>Pes</dt>
                <dd>vítán</dd>
              </div>
            </dl>
          </aside>
        </div>
      </header>

      {/* ===== SEKCE 1: CO NA CHATĚ NAJDETE ===== */}
      <section className="amenities" id="terminy" aria-labelledby="amenities-h">
        <div className="section-head">
          <p className="section-head__eyebrow">Uvnitř a kolem chaty</p>
          <h2 id="amenities-h" className="section-head__title">
            Všechno, co k víkendu v lese potřebujete. Nic navíc.
          </h2>
        </div>

        <div className="amenities__grid">
          <figure className="amenities__media">
            <img
              src="/section-1.webp"
              alt="Světnice chaty s kamny, dřevěným stolem a výhledem do lesa"
              className="amenities__img"
            />
            <figcaption className="amenities__caption">
              Světnice s kamny — v zimě zatopíte za deset minut, dřevo je
              narovnané u dveří.
            </figcaption>
          </figure>

          <ul className="amenities__list">
            <li className="amenity">
              <h3 className="amenity__name">Sauna na dřevo</h3>
              <p className="amenity__desc">
                Vedle chaty, pro 4 osoby. Ochlazení? Sud s dešťovkou, v zimě
                sníh za dveřmi.
              </p>
            </li>
            <li className="amenity">
              <h3 className="amenity__name">Kuchyň, co vaří</h3>
              <p className="amenity__desc">
                Plná výbava, lednice, myčka. Základní koření a olej necháváme —
                nemusíte vozit celou spíž.
              </p>
            </li>
            <li className="amenity">
              <h3 className="amenity__name">Terasa s grilem a ohništěm</h3>
              <p className="amenity__desc">
                Litinový gril, kotlík na guláš, špekáčkové vidlice. Dřevo na
                oheň je v ceně.
              </p>
            </li>
            <li className="amenity">
              <h3 className="amenity__name">Les hned za plotem</h3>
              <p className="amenity__desc">
                Houby od července, běžkařská stopa v zimě, cyklostezka do
                Hradce podél Orlice.
              </p>
            </li>
            <li className="amenity">
              <h3 className="amenity__name">Teplo a horká voda vždy</h3>
              <p className="amenity__desc">
                Kamna jsou pro radost — topení a bojler jedou samy. Přijedete
                do vytopené chaty.
              </p>
            </li>
            <li className="amenity">
              <h3 className="amenity__name">Wi-Fi, když ji chcete</h3>
              <p className="amenity__desc">
                Funguje spolehlivě, router má ale vypínač. Doporučujeme ho
                aspoň na večer použít.
              </p>
            </li>
          </ul>
        </div>

        <div className="amenities__note">
          <p>
            <strong>Volné termíny a cena:</strong> napište nám dva tři termíny,
            které se vám hodí, na{" "}
            <a href="mailto:fortunae@seznam.cz">fortunae@seznam.cz</a> — do
            druhého dne odpovíme s potvrzením a celkovou cenou. Žádné skryté
            poplatky, kauce se vrací při předání klíčů.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: KDO SE O VÁS STARÁ + REFERENCE ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust__grid">
          <div className="trust__copy">
            <p className="section-head__eyebrow">Kdo vám předá klíče</p>
            <h2 id="trust-h" className="section-head__title">
              Chatu spravujeme sami, z Hradce Králové. Od roku 2004.
            </h2>
            <p className="trust__text">
              Fortunae je hradecká rodinná firma — nemovitostem se věnujeme přes
              dvacet let a tahle chata je naše srdcovka. Klíče vám předáme
              osobně, ukážeme kamna i saunu a necháme telefon, na kterém to
              opravdu někdo zvedne. Sídlíme ve Švehlově ulici v budově Městských
              lázní, takže když se cokoliv semele, jsme u chaty do půl hodiny.
            </p>
            <ul className="trust__facts">
              <li>Osobní předání klíčů a zaučení u kamen</li>
              <li>Telefon na správce 24 hodin denně během pobytu</li>
              <li>Úklid a povlečení v ceně, nic nedoplácíte</li>
            </ul>
          </div>

          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Předání klíčů od chaty před vstupními dveřmi"
              className="trust__img"
            />
          </figure>
        </div>

        <div className="reviews" aria-label="Co říkají hosté">
          <blockquote className="review">
            <p>
              „Přijeli jsme v pátek za tmy a chata byla vytopená, na stole
              lísteček, kde co najdeme. V neděli se nám nechtělo domů.“
            </p>
            <footer className="review__by">Vanessa N. — víkend v listopadu</footer>
          </blockquote>
          <blockquote className="review">
            <p>
              „Sauna a pak sníh, děti z toho nemohly. Pan správce nám ráno
              přivezl čerstvé rohlíky, to jsem nikde nezažil.“
            </p>
            <footer className="review__by">Rodina Doležalových — jarní prázdniny</footer>
          </blockquote>
          <blockquote className="review">
            <p>
              „Jezdíme s partou na houby už třetí rok. Rezervace mailem, klíče
              na ruku, žádné aplikace. Přesně tak to má být.“
            </p>
            <footer className="review__by">Petr K. — stálý host z Hradce</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
