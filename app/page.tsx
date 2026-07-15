export default function Page() {
  return (
    <div className="krem">
      <div className="krem-seam" aria-hidden="true" />

      <div className="krem-inner">
        {/* HERO ---------------------------------------------------------- */}
        <section className="krem-section krem-hero" aria-labelledby="krem-title">
          <p className="krem-mark">
            <span className="krem-mark-name">Krematorium</span>
            <span className="krem-mark-city">Ostrava</span>
            <span className="krem-mark-meta">a.s. &middot; Slezská Ostrava</span>
          </p>

          <h1 id="krem-title" className="krem-hero-title">
            Vaši bolest nezmírníme.{" "}
            <em>Můžeme vám ale pomoci</em> rozhodnout, jak doprovodíte blízkého
            člověka na poslední cestě.
          </h1>

          <p className="krem-hero-lead">
            Jsme krematorium ve funkcionalistické budově na Těšínské ulici.
            Na této stránce najdete vše potřebné &mdash; přehled obřadů, řád
            krematoria, nabídku hudby i podklady pro smuteční projev.
          </p>

          <div className="krem-hero-actions">
            <a className="krem-btn" href="tel:+420596248466">
              Zavolat 596&nbsp;248&nbsp;466
            </a>
            <span className="krem-hours">Po&ndash;Pá&nbsp;&nbsp;8:00&ndash;16:00</span>
          </div>
        </section>

        {/* SLUŽBY -------------------------------------------------------- */}
        <section className="krem-section" aria-labelledby="krem-services">
          <p className="krem-eyebrow">Nabídka služeb</p>
          <h2 id="krem-services" className="krem-section-title">Co u nás vyřídíte</h2>
          <p className="krem-section-lead">
            Většina rozhodování se dá zvládnout z domova. Níže je vše, co
            budete potřebovat &mdash; k přečtení i ke stažení. S čímkoli
            dalším vám pomůžeme telefonicky nebo osobně v kanceláři.
          </p>

          <ul className="krem-services">
            <li className="krem-service">
              <h3>Přehled obřadů</h3>
              <p>Jak obřad probíhá, jak dlouho trvá a co si připravit předem.</p>
            </li>
            <li className="krem-service">
              <h3>Řád krematoria</h3>
              <p>Pravidla provozu a co je během rozloučení v obřadní síni možné.</p>
            </li>
            <li className="krem-service">
              <h3>Nabídka hudby</h3>
              <p>Seznam skladeb k obřadu, připravený ke stažení v PDF.</p>
            </li>
            <li className="krem-service">
              <h3>Podklady pro smuteční projev</h3>
              <p>Formulář v PDF i ve Wordu, který v klidu vyplníte doma.</p>
            </li>
            <li className="krem-service">
              <h3>Rezervace obřadní síně</h3>
              <p>Termín rozloučení domluvíme telefonicky nebo přímo u nás.</p>
            </li>
            <li className="krem-service">
              <h3>Ochrana osobních údajů</h3>
              <p>Jak nakládáme s údaji pozůstalých podle GDPR &mdash; srozumitelně.</p>
            </li>
          </ul>

          <aside className="krem-panel" aria-label="Než k nám přijdete">
            <p className="krem-panel-eyebrow">Než k nám přijdete</p>
            <dl className="krem-panel-list">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Těšínská 710, 710&nbsp;07 Ostrava-Slezská Ostrava</dd>
              </div>
              <div>
                <dt>Kdy máme otevřeno</dt>
                <dd>Pondělí až pátek, 8:00&ndash;16:00</dd>
              </div>
              <div>
                <dt>Spojení</dt>
                <dd>
                  <a href="tel:+420596248466">596&nbsp;248&nbsp;466</a>
                  {" · "}
                  <a href="mailto:krematoriumslezskaostrava@seznam.cz">krematoriumslezskaostrava@seznam.cz</a>
                </dd>
              </div>
            </dl>
            <p className="krem-panel-note">
              Nejste si jistí, co s sebou a jak postupovat? Zavolejte nám
              předem. Projdeme to s vámi krok po kroku.
            </p>
          </aside>
        </section>

        {/* SLOVO ŘEDITELE / O NÁS --------------------------------------- */}
        <section className="krem-section" aria-labelledby="krem-word">
          <p className="krem-eyebrow">Slovo ředitele</p>
          <h2 id="krem-word" className="krem-visually-hidden">Slovo ředitele krematoria</h2>

          <blockquote className="krem-address">
            <p>
              Zavítali jste na naše stránky nejspíš proto, že vás navždy
              opustil někdo velmi blízký. Je to nejtěžší chvíle, jakou
              člověk zná. Nemůžeme ji odejmout &mdash; můžeme však stát
              vedle vás, vysvětlit každý krok a postarat se, aby rozloučení
              proběhlo důstojně a v&nbsp;klidu.
            </p>
            <footer className="krem-address-sign">
              <span className="krem-sign-name">Mgr. Bc. Jiří Stoch</span>
              <span className="krem-sign-role">ředitel Krematoria Ostrava</span>
            </footer>
          </blockquote>

          <div className="krem-contacts">
            <div className="krem-contact">
              <h3>Adresa</h3>
              <p>
                Krematorium Ostrava, a.s.<br />
                Těšínská 710<br />
                710&nbsp;07 Ostrava-Slezská Ostrava
              </p>
            </div>
            <div className="krem-contact">
              <h3>Telefon</h3>
              <p>
                <a href="tel:+420596248466">596&nbsp;248&nbsp;466</a><br />
                <a href="tel:+420596248465">596&nbsp;248&nbsp;465</a>
              </p>
            </div>
            <div className="krem-contact">
              <h3>E-mail</h3>
              <p>
                <a href="mailto:krematoriumslezskaostrava@seznam.cz">krematoriumslezskaostrava@seznam.cz</a><br />
                <a href="mailto:reditel@krematoriumostrava.cz">reditel@krematoriumostrava.cz</a>
              </p>
            </div>
            <div className="krem-contact">
              <h3>Úřední hodiny</h3>
              <p>
                Pondělí&ndash;pátek 8:00&ndash;16:00<br />
                <span className="krem-ico">IČ 25393430 &middot; DIČ CZ25393430</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
