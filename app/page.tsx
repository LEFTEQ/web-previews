export default function Page() {
  return (
    <main className="ddz">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="Dům duševního zdraví Ostrava">
        <div className="hero-top">
          <div className="wordmark" aria-label="Dům duševního zdraví">
            <span className="wordmark-roof" aria-hidden="true">
              <svg viewBox="0 0 48 22" width="48" height="22" role="presentation">
                <path d="M2 20 L24 3 L46 20" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="wordmark-text">
              Dům<br />duševního<br />zdraví
            </span>
          </div>
          <p className="hero-place">Ostrava-Poruba · denní stacionář a psychiatrická ambulance</p>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="line line-1">Místo, kam se</span>
            <span className="line line-2">chodí <em>ve dne</em> —</span>
            <span className="line line-3">a večer domů.</span>
          </h1>
          <p className="hero-lede">
            Léčíme úzkosti, deprese a psychická vyčerpání v denním stacionáři:
            přes den intenzivní psychoterapie s týmem, večer vlastní postel.
            Bez hospitalizace, bez vytržení ze života. V Porubě od roku 1992.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420596000000">Zavolat a objednat se</a>
            <a className="btn btn-ghost" href="#programy">Jak léčba probíhá</a>
          </div>
        </div>

        {/* signature: rytmus dne — svislé "hodinové" pruhy stacionáře */}
        <div className="dayband" aria-hidden="true">
          <div className="dayband-track">
            <span className="seg seg-a"><i>8:00</i>příchod</span>
            <span className="seg seg-b"><i>9:00</i>skupina</span>
            <span className="seg seg-c"><i>11:00</i>terapie</span>
            <span className="seg seg-d"><i>13:00</i>relaxace</span>
            <span className="seg seg-e"><i>15:00</i>domů</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: PROGRAMY ===== */}
      <section className="programs" id="programy" aria-labelledby="programy-h">
        <div className="section-head">
          <p className="eyebrow">S čím pomáháme</p>
          <h2 id="programy-h">Tři cesty, kterými k nám lidé přicházejí</h2>
          <p className="section-lede">
            Nejsme nemocnice ani anonymní poradna. Jsme zdravotnické zařízení
            s psychiatry a psychoterapeuty pod jednou střechou — a podle toho,
            co právě prožíváte, vám nabídneme jednu ze tří forem péče.
          </p>
        </div>

        <div className="program-grid">
          <article className="program">
            <h3>Denní stacionář</h3>
            <p className="program-tag">6–8 týdnů · všední dny 8–15 h</p>
            <p>
              Intenzivní léčba úzkostí, depresí a neurotických potíží.
              Skupinová i individuální psychoterapie, relaxační techniky,
              arteterapie. Přes den u nás, večer a víkendy doma — léčba
              nevytrhne z rodiny ani ze čtvrti, kde žijete.
            </p>
          </article>

          <article className="program">
            <h3>Psychiatrická ambulance</h3>
            <p className="program-tag">pravidelně i jednorázově</p>
            <p>
              Pro každého, kdo potřebuje stálý nebo jen občasný kontakt
              s psychiatrem: diagnostika, nastavení a kontrola léků,
              dlouhodobé vedení. Objednáváme na konkrétní čas, čekárna
              se u nás nepřeplňuje.
            </p>
          </article>

          <article className="program">
            <h3>Rehabilitace psychóz</h3>
            <p className="program-tag">dlouhodobý program</p>
            <p>
              Komplexní doléčování po atace psychotického onemocnění:
              nácvik denního režimu, sociálních dovedností a návratu do
              práce. Na sociální služby navazujeme přes partnerská
              sdružení projektu Pavučina.
            </p>
          </article>
        </div>

        <aside className="honest-note">
          <p>
            <strong>Co u nás neléčíme:</strong> závislosti na alkoholu, drogách
            a hráčství. Rádi vám ale doporučíme specializovanou ambulanci —
            zavolejte, nasměrujeme vás správně hned napoprvé.
          </p>
        </aside>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-text">
            <p className="eyebrow eyebrow-light">Proč právě k nám</p>
            <h2 id="trust-h">Třicet let jedno místo, jeden tým, jedna střecha</h2>
            <p>
              Dům duševního zdraví vznikl na počátku 90. let jako jedno
              z prvních nestátních zařízení svého druhu v Ostravě. Od té doby
              stojíme na stejné adrese v Porubě — a generace pacientů se k nám
              vrací, protože ví, koho tu potkají.
            </p>
            <p>
              V roce 2023 jsme budovu kompletně zrekonstruovali: nová
              ambulance s rozšířenou péčí, modernizovaný denní stacionář
              a bezbariérový přístup do všech prostor. Dům, který léčí,
              musí být sám v pořádku.
            </p>
          </div>

          <ul className="trust-facts">
            <li>
              <span className="fact-value">od 1992</span>
              <span className="fact-label">nestátní zdravotnické zařízení pro prevenci, léčbu a rehabilitaci duševních poruch</span>
            </li>
            <li>
              <span className="fact-value">bez doporučení</span>
              <span className="fact-label">k objednání nepotřebujete žádanku od praktického lékaře — stačí zavolat</span>
            </li>
            <li>
              <span className="fact-value">bezbariérově</span>
              <span className="fact-label">po rekonstrukci 2023 je celý dům přístupný i pro pacienty s omezenou pohyblivostí</span>
            </li>
            <li>
              <span className="fact-value">Pavučina</span>
              <span className="fact-label">na léčbu navazují sociální služby spolupracujících sdružení — pomoc nekončí u dveří ordinace</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
