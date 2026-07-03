export default function Page() {
  const sluzby = [
    {
      kod: "HSV",
      nazev: "Novostavby a hrubá stavba",
      popis:
        "Rodinné domy, bytové domy i haly od základové desky po střechu. Vlastní party zedníků a betonářů, žádné přeprodávání zakázky dál.",
      detail: "Základy · zdivo · monolity · stropy",
    },
    {
      kod: "REK",
      nazev: "Rekonstrukce a přestavby",
      popis:
        "Kompletní rekonstrukce bytů, domů i provozoven. Umíme pracovat za provozu a v obydleném domě — domluvíme etapy tak, abyste mohli normálně žít.",
      detail: "Dispozice · statika · sítě · povrchy",
    },
    {
      kod: "ZAT",
      nazev: "Zateplení a fasády",
      popis:
        "Zateplovací systémy, nové fasády a výměny výplní. Spočítáme vám návratnost a pohlídáme detaily, kde fasády nejčastěji selhávají.",
      detail: "ETICS · omítky · klempířina",
    },
    {
      kod: "INŽ",
      nazev: "Stavby na klíč s inženýringem",
      popis:
        "Vyřídíme povolení, koordinujeme profese a hlídáme rozpočet. Vy jednáte s jedním člověkem — jednatelem, ne s call centrem.",
      detail: "Povolení · rozpočet · dozor · kolaudace",
    },
  ];

  const zasady = [
    {
      rok: "1992",
      titulek: "Založeno v Kuklenách",
      text: "Firmu založil Ing. Pavel Valc 17. března 1992. Sídlíme pořád na stejné adrese — Pražská třída 13, Hradec Králové.",
    },
    {
      rok: "2 gen.",
      titulek: "Rodinná firma, dvě generace",
      text: "Vedení dnes drží Ing. Pavel Valc a Ing. Tomáš Valc. Když voláte do firmy, mluvíte s Valcem — jméno na fasádě je jméno na smlouvě.",
    },
    {
      rok: "30+ let",
      titulek: "Stavíme v kraji přes tři dekády",
      text: "Většina zakázek k nám chodí na doporučení investorů z Hradce Králové a okolí. Reference vám ukážeme naživo, ne v katalogu.",
    },
  ];

  return (
    <main className="vc">
      {/* ===== HERO ===== */}
      <section className="vc-hero" aria-label="VALC, stavební firma Hradec Králové">
        <header className="vc-topbar">
          <a className="vc-wordmark" href="#" aria-label="VALC s.r.o. — úvod">
            <span className="vc-wordmark-block" aria-hidden="true"></span>
            VALC<span className="vc-wordmark-sro">s.r.o.</span>
          </a>
          <a className="vc-topbar-tel" href="tel:+420495536827">
            495 536 827
          </a>
        </header>

        <div className="vc-hero-grid" aria-hidden="true">
          <span className="vc-brick b1"></span>
          <span className="vc-brick b2"></span>
          <span className="vc-brick b3"></span>
          <span className="vc-brick b4"></span>
          <span className="vc-brick b5"></span>
          <span className="vc-brick b6"></span>
          <span className="vc-brick b7"></span>
        </div>

        <div className="vc-hero-inner">
          <p className="vc-hero-eyebrow">
            Stavební firma · Hradec Králové — Kukleny · od roku 1992
          </p>
          <h1 className="vc-hero-title">
            <span className="vc-line l1">Stavíme</span>
            <span className="vc-line l2">na jméně,</span>
            <span className="vc-line l3">
              které je <em>na&nbsp;vratech.</em>
            </span>
          </h1>
          <p className="vc-hero-lead">
            Rodinná stavební firma dvou generací Valců. Novostavby, rekonstrukce
            a zateplení v Hradci Králové a okolí — s vlastními lidmi a jednatelem,
            který za stavbou stojí osobně.
          </p>
          <div className="vc-hero-cta">
            <a className="vc-btn vc-btn-solid" href="tel:+420495536827">
              Zavolat 495 536 827
            </a>
            <a className="vc-btn vc-btn-line" href="mailto:sekretariat@valc-hk.cz">
              Napsat poptávku
            </a>
          </div>
          <p className="vc-hero-note">
            Ozveme se do druhého pracovního dne. Prohlídku a nacenění menších
            zakázek děláme zdarma.
          </p>
        </div>

        <div className="vc-hero-strip" role="list" aria-label="Fakta o firmě">
          <p role="listitem">
            <strong>1992</strong> rok založení
          </p>
          <p role="listitem">
            <strong>2,9 mil. Kč</strong> základní kapitál
          </p>
          <p role="listitem">
            <strong>2 generace</strong> rodiny Valcových
          </p>
          <p role="listitem">
            <strong>Kukleny</strong> Pražská třída 13
          </p>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="vc-sluzby" aria-labelledby="sluzby-h">
        <div className="vc-section-head">
          <p className="vc-eyebrow">Co pro vás postavíme</p>
          <h2 id="sluzby-h">
            Provádění staveb, jejich změn <span className="vc-accent">a&nbsp;odstraňování.</span>
          </h2>
          <p className="vc-section-lead">
            Přesně tak to máme třicet let zapsáno v rejstříku. V praxi to znamená
            čtyři věci, které umíme opravdu dobře:
          </p>
        </div>

        <div className="vc-sluzby-grid">
          {sluzby.map((s) => (
            <article className="vc-karta" key={s.kod}>
              <p className="vc-karta-kod" aria-hidden="true">
                {s.kod}
              </p>
              <h3>{s.nazev}</h3>
              <p className="vc-karta-popis">{s.popis}</p>
              <p className="vc-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <p className="vc-sluzby-pozn">
          Nevíte, kam vaše stavba spadá? Zavolejte —{" "}
          <a href="tel:+420495536827">495 536 827</a>. Za pět minut vám řekneme,
          jestli je to pro nás, a co bude potřeba.
        </p>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="vc-onas" aria-labelledby="onas-h">
        <div className="vc-onas-inner">
          <div className="vc-onas-text">
            <p className="vc-eyebrow vc-eyebrow-light">Proč se stavět s Valcem</p>
            <h2 id="onas-h">
              Dvaadvacetiletí projektanti přicházejí a odcházejí.{" "}
              <span className="vc-accent">My tu stavíme od roku 1992.</span>
            </h2>
            <p className="vc-onas-lead">
              VALC, s.r.o. není developerská značka na jednu sezónu. Je to rodinná
              firma z hradeckých Kuklen, kde jednatelé chodí na vlastní stavby a
              zedníky znají jménem.
            </p>
          </div>

          <ol className="vc-milniky">
            {zasady.map((z) => (
              <li className="vc-milnik" key={z.titulek}>
                <p className="vc-milnik-rok">{z.rok}</p>
                <div>
                  <h3>{z.titulek}</h3>
                  <p>{z.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="vc-vizitka">
            <p className="vc-vizitka-titul">Kde nás najdete</p>
            <p className="vc-vizitka-adresa">
              Pražská třída 13/84, Kukleny
              <br />
              500 04 Hradec Králové
            </p>
            <p className="vc-vizitka-kontakty">
              <a href="tel:+420495536827">495 536 827</a>
              <a href="mailto:sekretariat@valc-hk.cz">sekretariat@valc-hk.cz</a>
            </p>
            <p className="vc-vizitka-ic">IČO 45537151 · zapsáno u KS v Hradci Králové, C 1677</p>
          </div>
        </div>
      </section>
    </main>
  );
}
