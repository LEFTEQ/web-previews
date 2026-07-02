export default function Page() {
  return (
    <main className="fz-page">
      {/* ===== HERO ===== */}
      <header className="fz-hero">
        <div className="fz-hero-inner">
          <div className="fz-brand">
            <span className="fz-brand-mark" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
            <span className="fz-brand-name">FOK <em>žaluzie</em></span>
          </div>

          <h1 className="fz-hero-title">
            <span className="fz-slat fz-slat-1"><span>Světlo</span></span>
            <span className="fz-slat fz-slat-2"><span>na&nbsp;vaší</span></span>
            <span className="fz-slat fz-slat-3"><span>straně.</span></span>
          </h1>

          <p className="fz-hero-lead">
            Žaluzie, rolety a stínění na míru — vyrábíme a montujeme
            v&nbsp;Brně od&nbsp;roku&nbsp;1992. Zaměříme okna u&nbsp;vás doma,
            poradíme s&nbsp;materiálem a&nbsp;namontujeme čistě a&nbsp;rychle.
          </p>

          <div className="fz-hero-facts" role="list">
            <div className="fz-fact" role="listitem">
              <strong>33 let</strong>
              <span>vlastní výroby v&nbsp;Brně</span>
            </div>
            <div className="fz-fact" role="listitem">
              <strong>Zaměření zdarma</strong>
              <span>přijedeme, změříme, spočítáme</span>
            </div>
            <div className="fz-fact" role="listitem">
              <strong>Barvičova 77</strong>
              <span>Brno&#8209;Stránice, vzorkovna</span>
            </div>
          </div>
        </div>

        {/* Signature: lamely — sloupec naklápěcích lamel jako světelný přechod */}
        <div className="fz-lamellas" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="fz-section fz-offer" aria-labelledby="nabidka">
        <div className="fz-section-head">
          <p className="fz-eyebrow">Co stíníme</p>
          <h2 id="nabidka">Od okna v&nbsp;kuchyni po celou fasádu</h2>
          <p className="fz-section-lead">
            Každé okno je jiné — plastové, dřevěné, střešní, atypické.
            Proto všechno měříme na místě a&nbsp;vyrábíme přesně na váš rám.
          </p>
        </div>

        <div className="fz-grid">
          <article className="fz-card">
            <span className="fz-card-icon fz-icon-horizontal" aria-hidden="true">
              <i></i><i></i><i></i><i></i>
            </span>
            <h3>Horizontální žaluzie</h3>
            <p>
              Naše hlavní řemeslo. Hliníkové lamely v&nbsp;desítkách barev,
              do plastových i&nbsp;dřevěných oken, naklápění řetízkem nebo tyčkou.
            </p>
            <p className="fz-card-note">Vyrábíme sami — bez čekání na dovoz.</p>
          </article>

          <article className="fz-card">
            <span className="fz-card-icon fz-icon-vertical" aria-hidden="true">
              <i></i><i></i><i></i><i></i>
            </span>
            <h3>Vertikální žaluzie</h3>
            <p>
              Do kanceláří, ordinací i&nbsp;velkých prosklených stěn.
              Látkové lamely tlumí světlo měkce a&nbsp;dají se prát.
            </p>
            <p className="fz-card-note">Šířky lamel 89 a&nbsp;127&nbsp;mm.</p>
          </article>

          <article className="fz-card">
            <span className="fz-card-icon fz-icon-roleta" aria-hidden="true">
              <i></i>
            </span>
            <h3>Interiérové rolety</h3>
            <p>
              Látkové rolety a&nbsp;stínění střešních oken — od průsvitných
              látek po úplné zatemnění do ložnice a&nbsp;dětského pokoje.
            </p>
            <p className="fz-card-note">Vzorky látek u&nbsp;nás na Barvičově.</p>
          </article>

          <article className="fz-card">
            <span className="fz-card-icon fz-icon-sit" aria-hidden="true">
              <i></i>
            </span>
            <h3>Sítě proti hmyzu</h3>
            <p>
              Pevné, otevírací i&nbsp;dveřní sítě přesně na míru rámu.
              Otevřené okno celé léto — bez komárů a&nbsp;vos.
            </p>
            <p className="fz-card-note">Montáž bez vrtání do rámu.</p>
          </article>

          <article className="fz-card">
            <span className="fz-card-icon fz-icon-markyza" aria-hidden="true">
              <i></i>
            </span>
            <h3>Markýzy</h3>
            <p>
              Stín na terase a&nbsp;balkoně přesně tehdy, kdy ho chcete.
              Kloubové markýzy s&nbsp;klikou nebo motorem a&nbsp;ovladačem.
            </p>
            <p className="fz-card-note">Kotvíme do zdi i&nbsp;do stropu.</p>
          </article>

          <article className="fz-card">
            <span className="fz-card-icon fz-icon-servis" aria-hidden="true">
              <i></i>
            </span>
            <h3>Servis a&nbsp;opravy</h3>
            <p>
              Prasklý řetízek, vyklouzlá lamela, ztuhlá roleta?
              Opravíme i&nbsp;žaluzie, které jsme nemontovali my.
            </p>
            <p className="fz-card-note">Většinu oprav zvládneme na místě.</p>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / JAK PRACUJEME ===== */}
      <section className="fz-section fz-trust" aria-labelledby="duvera">
        <div className="fz-trust-grid">
          <div className="fz-trust-text">
            <p className="fz-eyebrow fz-eyebrow-light">Od roku 1992</p>
            <h2 id="duvera">Brněnská firma, kterou znáte podle práce, ne podle reklamy</h2>
            <p>
              Žaluzie FOK jsme založili v&nbsp;roce 1992 a&nbsp;od té doby děláme
              jedno řemeslo pořádně: vyrábíme horizontální žaluzie z&nbsp;kvalitních
              materiálů a&nbsp;montujeme stínicí techniku předních výrobců.
              Za třicet let jsme zastínili tisíce brněnských oken — v&nbsp;panelácích
              na Lesné, ve vilách na Stránicích i&nbsp;v&nbsp;kancelářích v&nbsp;centru.
            </p>
            <p>
              Nejsme e&#8209;shop s&nbsp;call centrem. Když zavoláte, mluvíte s&nbsp;člověkem,
              který žaluzie sám měřil a&nbsp;montoval. A&nbsp;když se za pět let něco
              pokazí, víte, kde nás najdete.
            </p>
          </div>

          <ol className="fz-steps">
            <li className="fz-step">
              <span className="fz-step-num" aria-hidden="true">1</span>
              <div>
                <h3>Zavoláte nebo napíšete</h3>
                <p>Popíšete nám okna a&nbsp;co od stínění čekáte. Hned řekneme, co dává smysl a&nbsp;kolik to zhruba stojí.</p>
              </div>
            </li>
            <li className="fz-step">
              <span className="fz-step-num" aria-hidden="true">2</span>
              <div>
                <h3>Přijedeme zaměřit</h3>
                <p>Zaměření u&nbsp;vás doma je zdarma. Přivezeme vzorky barev a&nbsp;látek, ať vybíráte u&nbsp;svého okna, ne z&nbsp;katalogu.</p>
              </div>
            </li>
            <li className="fz-step">
              <span className="fz-step-num" aria-hidden="true">3</span>
              <div>
                <h3>Vyrobíme a&nbsp;namontujeme</h3>
                <p>Horizontální žaluzie vyrábíme sami v&nbsp;Brně, montáž trvá pár minut na okno. Uklidíme po sobě.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="fz-contact-strip">
          <div className="fz-contact-item">
            <span className="fz-contact-label">Telefon</span>
            <a href="tel:+420543243558">+420 543 243 558</a>
          </div>
          <div className="fz-contact-item">
            <span className="fz-contact-label">E&#8209;mail</span>
            <a href="mailto:fok@zaluziefok.cz">fok@zaluziefok.cz</a>
          </div>
          <div className="fz-contact-item">
            <span className="fz-contact-label">Vzorkovna</span>
            <span>Barvičova 77, Brno</span>
          </div>
        </div>
      </section>
    </main>
  );
}
