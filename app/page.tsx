export default function Page() {
  return (
    <main className="dilna">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="hero-shade" />
        </div>

        <div className="hero-inner">
          <div className="wordmark">
            <span className="wordmark-badge">AN</span>
            <span className="wordmark-text">
              AUTO<em>NÁMĚSTEK</em>
              <small>autoservis · karosárna · Plzeň-Lobzy</small>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Od pomačkaného plechu</span>
            <span className="hero-line hero-line-2">po&nbsp;<mark>lak jako nový.</mark></span>
          </h1>

          <p className="hero-lead">
            Rovnací stolice, lakovna, čelní skla i&nbsp;klimatizace pod jednou
            střechou. Bouračku vyřídíme s&nbsp;pojišťovnou za&nbsp;vás — a&nbsp;po
            dobu opravy jezdíte naším autem zdarma.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420723700641">Zavolat 723 700 641</a>
            <a className="btn btn-ghost" href="mailto:autonami@seznam.cz">Napsat e-mail</a>
          </div>

          <dl className="hero-strip" aria-label="Provozní informace">
            <div>
              <dt>Dílna</dt>
              <dd>Pod Vrchem 311/6, Plzeň-Lobzy</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:00–16:00</dd>
            </div>
            <div>
              <dt>Pojistná událost</dt>
              <dd>Oprava bez vaší finanční účasti</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SLUŽBY — ZAKÁZKOVÝ LIST ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Zakázkový list</p>
          <h2 id="sluzby-h">Co pro vaše auto uděláme</h2>
          <p className="section-sub">
            Každá zakázka u&nbsp;nás projde stejným listem — od&nbsp;příjmu vozu
            po&nbsp;předání klíčů. Tohle jsou položky, které na&nbsp;něm najdete
            nejčastěji.
          </p>
        </div>

        <div className="zakazky">
          <article className="zakazka">
            <h3>Karosárna a&nbsp;rovnací stolice</h3>
            <p>
              Opravy karoserií po&nbsp;nehodě, vytažení deformací na&nbsp;rovnací
              stolici, výměny dílů. Geometrii skeletu vrátíme na&nbsp;tovární
              míry, ne&nbsp;„od&nbsp;oka“.
            </p>
            <p className="zakazka-pozn">☐ příjem · ☐ stolice · ☐ kontrola měr</p>
          </article>

          <article className="zakazka">
            <h3>Lakovna</h3>
            <p>
              Lakování dílů i&nbsp;celků, přesné míchání odstínu podle kódu barvy
              vašeho vozu. Přechody laku uděláme tak, že&nbsp;opravu nepoznáte.
            </p>
            <p className="zakazka-pozn">☐ odstín dle VIN · ☐ tmelení · ☐ lak</p>
          </article>

          <article className="zakazka">
            <h3>Mechanické opravy</h3>
            <p>
              Brzdy, podvozek, rozvody, výfuky, příprava a&nbsp;zajištění STK.
              Běžný servis, na&nbsp;který se objednáte telefonem a&nbsp;odpoledne
              odjedete.
            </p>
            <p className="zakazka-pozn">☐ diagnostika · ☐ oprava · ☐ zkušební jízda</p>
          </article>

          <article className="zakazka">
            <h3>Čelní skla</h3>
            <p>
              Výměny a&nbsp;opravy čelních skel. Drobný kamínek zaskleníme, prasklé
              sklo vyměníme — u&nbsp;havarijní pojistky často zcela bez doplatku.
            </p>
            <p className="zakazka-pozn">☐ posouzení · ☐ oprava / výměna</p>
          </article>

          <article className="zakazka">
            <h3>Klimatizace</h3>
            <p>
              Plnění, dezinfekce a&nbsp;servis autoklimatizací. Zkontrolujeme
              těsnost okruhu, doplníme chladivo a&nbsp;olej kompresoru.
            </p>
            <p className="zakazka-pozn">☐ test těsnosti · ☐ plnění · ☐ dezinfekce</p>
          </article>

          <article className="zakazka">
            <h3>Pneuservis a&nbsp;doplňky</h3>
            <p>
              Přezutí a&nbsp;vyvážení kol, uskladnění pneumatik, montáž tažných
              zařízení a&nbsp;autodoplňků včetně zápisu do&nbsp;dokladů.
            </p>
            <p className="zakazka-pozn">☐ přezutí · ☐ vyvážení · ☐ tažné zařízení</p>
          </article>
        </div>

        <figure className="sluzby-foto">
          <img
            src="/section-1.webp"
            alt="Oprava karoserie na rovnací stolici v dílně autoservisu Náměstek v Plzni"
          />
          <figcaption>
            Rovnací stolice v&nbsp;naší dílně — srdce karosárny. Právě tady se
            z&nbsp;bouraného auta stává zase auto.
          </figcaption>
        </figure>
      </section>

      {/* ===== POJISTNÁ UDÁLOST / DŮVĚRA ===== */}
      <section className="pojistka" aria-labelledby="pojistka-h">
        <div className="pojistka-grid">
          <div className="pojistka-text">
            <p className="eyebrow eyebrow-light">Bouračka? Klid.</p>
            <h2 id="pojistka-h">Pojistnou událost vyřídíme za&nbsp;vás</h2>
            <p>
              Ťukanec na&nbsp;parkovišti nebo větší nehoda — nemusíte obvolávat
              pojišťovnu ani hlídat termíny. Auto k&nbsp;nám přivezete (nebo ho
              odtáhneme my) a&nbsp;o&nbsp;zbytek se postaráme.
            </p>

            <ol className="kroky">
              <li>
                <strong>Zavoláte nám.</strong> Domluvíme přistavení vozu
                a&nbsp;nafotíme poškození pro pojišťovnu.
              </li>
              <li>
                <strong>Dostanete náhradní auto.</strong> Při pojistné události
                vám ho půjčíme zdarma, po&nbsp;celou dobu opravy.
              </li>
              <li>
                <strong>Jednáme s&nbsp;pojišťovnou.</strong> Prohlídku likvidátora,
                krycí dopis i&nbsp;fakturaci řešíme přímo my.
              </li>
              <li>
                <strong>Předáme hotové auto.</strong> V&nbsp;řadě případů zcela
                bez vaší finanční účasti.
              </li>
            </ol>

            <div className="pojistka-kontakt">
              <p className="pojistka-kontakt-label">Stanislav Náměstek, Plzeň-Lobzy</p>
              <a className="btn btn-light" href="tel:+420723700641">Zavolat 723 700 641</a>
              <p className="pojistka-kontakt-pozn">
                Pevná linka 377 450 867 · Po–Pá 7:00–16:00 · GPS 49°44'49"N, 13°24'52"E
              </p>
            </div>
          </div>

          <figure className="pojistka-foto">
            <img
              src="/section-2.webp"
              alt="Předání klíčů od opraveného vozu zákazníkovi před autoservisem v Plzni-Lobzích"
            />
            <figcaption>
              Rodinná dílna Pod Vrchem funguje léta na&nbsp;jednoduchém principu:
              auto vracíme, až když bychom s&nbsp;ním sami vyjeli.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
