export default function Page() {
  const sluzby = [
    {
      kod: "230 V",
      nazev: "Domovní elektroinstalace",
      popis:
        "Nové rozvody i rekonstrukce bytů a domů v Olomouci a okolí. Zásuvky, světla, rozvaděče, jističe — všechno zapojíme, zdokumentujeme a uklidíme po sobě.",
    },
    {
      kod: "400 V",
      nazev: "Servis a revize svářeček",
      popis:
        "Naše specialita. Opravíme invertor, trafo i CO₂ svářečku, provedeme revizi a vrátíme vám stroj se zprávou, které rozumíte. Rychle, protože víme, že bez svářečky stojí práce.",
    },
    {
      kod: "REV",
      nazev: "Revize elektrických spotřebičů",
      popis:
        "Pravidelné revize spotřebičů a nářadí pro firmy i živnostníky. Přijedeme k vám, změříme, označíme štítkem a hlídáme za vás termíny další revize.",
    },
    {
      kod: "PŮJČ",
      nazev: "Půjčovna svářecí techniky",
      popis:
        "Potřebujete svářečku jen na víkend? Půjčíme vám odzkoušený a zrevidovaný stroj včetně kabelů a krátkého zaškolení, ať svaříte hned napoprvé.",
    },
  ];

  return (
    <main className="page">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* zásuvka jako usměvavá tvář */}
              <svg viewBox="0 0 48 48" width="44" height="44" role="img" aria-hidden="true">
                <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="16.5" cy="19" r="3" fill="currentColor" />
                <circle cx="31.5" cy="19" r="3" fill="currentColor" />
                <path d="M15 30 q9 8 18 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <span className="brand-word">
              ELEKTRO<em>s&nbsp;lidskou&nbsp;tváří</em>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Elektrikář,</span>
            <span className="line line-2">kterému se</span>
            <span className="line line-3">
              dovoláte<span className="spark">.</span>
            </span>
          </h1>

          <p className="hero-sub">
            Elektroinstalace, revize a servis svářeček pro Olomouc a okolí.
            Dva chlapi, dvě telefonní čísla — a na obě to zvedáme.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420723822384">
              Zavolat 723 822 384
            </a>
            <a className="btn btn-ghost" href="mailto:sedlak@eslt.cz">
              Napsat e-mail
            </a>
          </div>

          <p className="hero-loc">Hamerská 12, Olomouc · vyjíždíme po celé Olomouci a okolí</p>
        </div>

        {/* signature: schéma obvodu, které se při načtení „zapojí“ */}
        <div className="circuit" aria-hidden="true">
          <svg viewBox="0 0 1200 260" preserveAspectRatio="none">
            <path
              className="wire"
              d="M-10 200 H240 l40 -60 h80 l40 60 H560 l30 -40 30 40 30 -40 30 40 H840 l40 -110 40 110 H1210"
              fill="none"
            />
            <circle className="node n1" cx="240" cy="200" r="7" />
            <circle className="node n2" cx="560" cy="200" r="7" />
            <circle className="node n3" cx="840" cy="200" r="7" />
          </svg>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">Od zásuvky po svářečku</h2>
          <p className="section-lead">
            Každá zakázka má na štítku napětí, se kterým pracujeme. Vy nemusíte
            rozumět voltům — stačí říct, co vás trápí.
          </p>
        </div>

        <div className="karty">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <span className="karta-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-pozn">
          Nenašli jste to svoje? Děláme „a&nbsp;mnoho dalšího“ — zavolejte a
          domluvíme se, jestli je to práce pro nás.
        </p>
      </section>

      {/* ================= DŮVĚRA / LIDÉ ================= */}
      <section className="lide" aria-labelledby="lide-h">
        <div className="section-head">
          <p className="eyebrow">Kdo k vám přijede</p>
          <h2 id="lide-h">Ta lidská tvář nejsme jen ve jménu</h2>
          <p className="section-lead">
            Žádný dispečink, žádné „technik vás bude kontaktovat“. Voláte přímo
            tomu, kdo u vás pak bude šroubovat.
          </p>
        </div>

        <div className="vizitky">
          <article className="vizitka">
            <span className="vizitka-faze" aria-hidden="true">L1</span>
            <h3>Otakar Sedlák</h3>
            <p className="vizitka-role">Svářečky, revize, elektroinstalace</p>
            <div className="vizitka-kontakty">
              <a href="tel:+420723822384">723 822 384</a>
              <a href="mailto:sedlak@eslt.cz">sedlak@eslt.cz</a>
            </div>
          </article>

          <article className="vizitka">
            <span className="vizitka-faze" aria-hidden="true">L2</span>
            <h3>Michal Frank</h3>
            <p className="vizitka-role">Elektroinstalace, servis, půjčovna</p>
            <div className="vizitka-kontakty">
              <a href="tel:+420732736990">732 736 990</a>
              <a href="mailto:frank@eslt.cz">frank@eslt.cz</a>
            </div>
          </article>
        </div>

        <ul className="zaruky">
          <li>
            <strong>Domluvíme se lidsky.</strong> Vysvětlíme, co a proč děláme,
            bez odborného ptydepe. Cenu řekneme dopředu.
          </li>
          <li>
            <strong>Jsme odsud.</strong> Sídlíme na Hamerské v Olomouci, takže u
            vás nejsme za hodinu cesty, ale za chvíli.
          </li>
          <li>
            <strong>Spolupracujeme s poruchovou službou.</strong> Když hoří
            termín (nebo jistič), víme, komu zavolat, aby vám bylo pomoženo
            hned.
          </li>
        </ul>

        <aside className="vtip">
          <p className="vtip-label">Elektro vtípek na závěr</p>
          <p className="vtip-text">
            Hádají se Facebook, Wikipedie a Google, kdo z nich všechno zná a
            všechno najde. Pak přijde elektrika a říká: „Tak se uklidníme,
            jo?!“ — U nás v dílně se prostě bez humoru neškrtne.
          </p>
        </aside>
      </section>
    </main>
  );
}
