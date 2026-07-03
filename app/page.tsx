export default function Page() {
  return (
    <main className="sa">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="S-A Okna, Nový Bor">
            <span className="wm-frame">
              <span className="wm-sa">S–A</span>
            </span>
            <span className="wm-rest">
              OKNA <em>Nový Bor</em>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420739465823">
            +420&nbsp;739&nbsp;465&nbsp;823
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Výměna oken v panelácích i rodinných domech — Novoborsko a Českolipsko</p>

          {/* Signature: typografická "okenní tabule" — nadpis sázený do rámu s příčníkem */}
          <div className="pane" aria-hidden="false">
            <div className="pane-cell pane-a">
              <h1 className="pane-word">Nová</h1>
            </div>
            <div className="pane-cell pane-b">
              <h1 className="pane-word">okna,</h1>
            </div>
            <div className="pane-cell pane-c">
              <h1 className="pane-word">klid</h1>
            </div>
            <div className="pane-cell pane-d">
              <h1 className="pane-word outline">a&nbsp;teplo.</h1>
            </div>
            <span className="pane-handle" aria-hidden="true" />
          </div>

          <div className="hero-foot">
            <p className="hero-lede">
              Zaměříme, vyrobíme na míru a vyměníme okna za jeden den na místnost —
              včetně vybourání starých rámů, zednického začištění a ekologické likvidace.
              Bez prachu po celém bytě, bez čekání na tři různé firmy.
            </p>
            <ul className="hero-facts">
              <li>
                <strong>Zaměření zdarma</strong>
                <span>přijedeme do 5 dnů</span>
              </li>
              <li>
                <strong>Uw od 0,74</strong>
                <span>trojskla v plastových profilech</span>
              </li>
              <li>
                <strong>Nový Bor</strong>
                <span>Tř. T. G. Masaryka — jsme odsud</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u vás uděláme</h2>
          <p>
            Jedna parta, jedna odpovědnost. Od prvního zaměření po předání hotové
            místnosti nemusíte nic zařizovat.
          </p>
        </div>

        <div className="sluzby-grid">
          <article className="sluzba">
            <span className="sluzba-glyph glyph-okno" aria-hidden="true" />
            <h3>Plastová okna a dveře</h3>
            <p>
              Šestikomorové profily s trojsklem na míru. Vyměníme okna v paneláku
              během dopoledne — večer větráte novým oknem.
            </p>
          </article>

          <article className="sluzba">
            <span className="sluzba-glyph glyph-posuv" aria-hidden="true" />
            <h3>Posuvné a vchodové dveře</h3>
            <p>
              Posuvné portály na terasu i bezpečnostní vchodové dveře. Hliníkové
              provedení tam, kde plast nestačí.
            </p>
          </article>

          <article className="sluzba">
            <span className="sluzba-glyph glyph-vrata" aria-hidden="true" />
            <h3>Garážová a průmyslová vrata</h3>
            <p>
              Sekční vrata s pohonem pro rodinné garáže i haly. Montujeme včetně
              elektroinstalace a servisu.
            </p>
          </article>

          <article className="sluzba">
            <span className="sluzba-glyph glyph-zed" aria-hidden="true" />
            <h3>Bourání, zednické práce, likvidace</h3>
            <p>
              Stará okna vybouráme, špalety začistíme a zamalujeme. Vybourané rámy
              a sklo odvezeme k ekologické likvidaci — doklad dostanete.
            </p>
          </article>
        </div>

        <div className="postup" aria-label="Jak výměna probíhá">
          <h3 className="postup-title">Jak to u nás probíhá</h3>
          <ol className="postup-list">
            <li>
              <span className="postup-krok">Zaměření</span>
              <span className="postup-pop">Přijedeme, změříme každý otvor, poradíme s členěním a barvou.</span>
            </li>
            <li>
              <span className="postup-krok">Kalkulace</span>
              <span className="postup-pop">Do 3 dnů máte cenu na koruně přesně. Nezávazně, bez záloh předem.</span>
            </li>
            <li>
              <span className="postup-krok">Montáž</span>
              <span className="postup-pop">Zakryjeme podlahy, vybouráme, osadíme, zapěníme a začistíme.</span>
            </li>
            <li>
              <span className="postup-krok">Předání</span>
              <span className="postup-pop">Seřídíme kování, ukážeme mikroventilaci a předáme záruční list.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* ================= REFERENCE / DŮVĚRA ================= */}
      <section className="reference" aria-labelledby="ref-h">
        <div className="section-head section-head--light">
          <h2 id="ref-h">Poznáte nás podle oken v okolí</h2>
          <p>
            Vyměňujeme okna na Novoborsku a Českolipsku přes deset let. Většina
            zakázek k nám chodí na doporučení od sousedů.
          </p>
        </div>

        <div className="ref-grid">
          <article className="ref-card">
            <p className="ref-typ">Panelový dům · Česká Lípa</p>
            <h3>84 oken za dva týdny, byty obydlené</h3>
            <p>
              Kompletní výměna oken a lodžiových sestav pro SVJ. Práce po
              stoupačkách, každý byt hotový a uklizený týž den.
            </p>
          </article>

          <article className="ref-card">
            <p className="ref-typ">Škola · Česká Lípa</p>
            <h3>Výměna o prázdninách, v září se učilo</h3>
            <p>
              Okna do tříd a tělocvičny s bezpečnostním sklem. Harmonogram jsme
              dodrželi na den — škola otevřela bez omezení.
            </p>
          </article>

          <article className="ref-card">
            <p className="ref-typ">Rodinný dům — okál · Novoborsko</p>
            <h3>Okál konečně bez průvanu</h3>
            <p>
              Specifická montáž do dřevěné konstrukce okálu včetně parotěsných
              pásek. Úspora na topení znatelná první zimu.
            </p>
          </article>

          <article className="ref-card">
            <p className="ref-typ">Centrum Zdraví · Česká Lípa</p>
            <h3>Výměna za provozu ordinací</h3>
            <p>
              Etapy domluvené podle ordinačních hodin, prašné práce mimo provoz.
              Pacienti výměnu skoro nezaznamenali.
            </p>
          </article>
        </div>

        <div className="duvera">
          <blockquote className="duvera-quote">
            <p>
              „Přišli v sedm, v jednu byla okna vyměněná, začištěná a uklizeno.
              Doporučila jsem je celému vchodu.“
            </p>
            <cite>— paní Havlová, panelový dům Česká Lípa</cite>
          </blockquote>
          <ul className="duvera-body">
            <li>
              <strong>Firma z Nového Boru</strong>
              <span>Sídlíme na Tř. T. G. Masaryka. Na reklamaci dojedeme do dvou dnů, ne „někdy“.</span>
            </li>
            <li>
              <strong>Záruka 5 let na montáž</strong>
              <span>Kování seřídíme kdykoli v záruce zdarma — stačí zavolat.</span>
            </li>
            <li>
              <strong>Cena předem, na koruně</strong>
              <span>Kalkulace je závazná. Žádné doúčtování „za vícepráce“ po montáži.</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
