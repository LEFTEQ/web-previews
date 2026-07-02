export default function Page() {
  const sluzby = [
    {
      kod: "HSV",
      nazev: "Průmyslové stavby na klíč",
      popis:
        "Výrobní haly, sklady a technologické celky od projektu po kolaudaci. Jeden partner, jedna odpovědnost — vy řešíte provoz, my stavbu.",
      detaily: ["Ocelové i železobetonové konstrukce", "Zpevněné plochy a komunikace", "Inženýrské sítě a přípojky"],
    },
    {
      kod: "REK",
      nazev: "Rekonstrukce a přestavby",
      popis:
        "Modernizace starších provozů za chodu firmy. Naplánujeme etapy tak, aby vaše výroba stála co nejkratší dobu — často vůbec.",
      detaily: ["Statické zajištění objektů", "Zateplení a nové opláštění hal", "Změny dispozic a vestavby"],
    },
    {
      kod: "KAM",
      nazev: "Kamenická výroba",
      popis:
        "Vlastní kamenická dílna u panelárny v Olomouci. Žula, mramor a pískovec — od schodišť a parapetů po obklady fasád. Řežeme na míru.",
      detaily: ["Schodiště, parapety, dlažby", "Kamenné obklady a fasády", "Zakázkové řezání a leštění"],
    },
  ];

  const duvera = [
    {
      stavba: "Výrobní hala, Olomouc-Holice",
      rozsah: "3 200 m² · generální dodávka",
      text: "Hala pro strojírenskou výrobu včetně jeřábových drah a administrativní vestavby. Předáno za 11 měsíců, v termínu.",
    },
    {
      stavba: "Rekonstrukce provozu, Prostějov",
      rozsah: "1 800 m² · za plného provozu",
      text: "Nové opláštění, střecha a podlahy ve třech etapách. Výroba klienta se nezastavila ani na den.",
    },
    {
      stavba: "Kamenné schodiště a fasáda, centrum Olomouce",
      rozsah: "žula Mrákotín · vlastní dílna",
      text: "Repase historického schodiště a nový kamenný sokl činžovního domu. Kámen jsme řezali a leštili u nás u panelárny.",
    },
  ];

  return (
    <main className="tk">
      {/* ===== HERO ===== */}
      <section className="tk-hero" aria-label="Stavební firma Tomek — úvod">
        <div className="tk-hero-grid" aria-hidden="true">
          {/* Panelová spára — signature prvek: rastr prefabrikovaných panelů */}
          <span className="tk-panel tk-panel-a" />
          <span className="tk-panel tk-panel-b" />
          <span className="tk-panel tk-panel-c" />
          <span className="tk-panel tk-panel-d" />
        </div>

        <header className="tk-topbar">
          <a href="#top" className="tk-wordmark" aria-label="Stavební firma Tomek — domů">
            <span className="tk-wordmark-blok">TOMEK</span>
            <span className="tk-wordmark-pod">stavební firma · Olomouc</span>
          </a>
          <nav className="tk-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co stavíme</a>
            <a href="#reference">Realizace</a>
            <a href="tel:+420585123456" className="tk-nav-tel">585 123 456</a>
          </nav>
        </header>

        <div className="tk-hero-inner">
          <p className="tk-hero-eyebrow">
            <span className="tk-eyebrow-mark" aria-hidden="true" />
            Generální dodavatel · sídlo u panelárny, Olomouc
          </p>
          <h1 className="tk-hero-title">
            <span className="tk-hero-line tk-hero-line-1">Haly, provozy</span>
            <span className="tk-hero-line tk-hero-line-2">a&nbsp;kámen,</span>
            <span className="tk-hero-line tk-hero-line-3">který přežije<span className="tk-tecka">.</span></span>
          </h1>
          <p className="tk-hero-perex">
            Stavíme průmyslové stavby a technologické celky po celé Hané. A protože máme
            vlastní kamenickou dílnu, umíme dodat i to, co jiné stavební firmy objednávají
            — schodiště, obklady a fasády z žuly a mramoru.
          </p>
          <div className="tk-hero-cta">
            <a className="tk-btn tk-btn-hlavni" href="tel:+420585123456">Zavolat: 585 123 456</a>
            <a className="tk-btn tk-btn-vedlejsi" href="mailto:stavby@tomek-olomouc.cz">Napsat poptávku</a>
          </div>
          <dl className="tk-hero-fakta">
            <div>
              <dt>Od roku</dt>
              <dd>1992</dd>
            </div>
            <div>
              <dt>Dílna</dt>
              <dd>U panelárny, Olomouc</dd>
            </div>
            <div>
              <dt>Dodávky</dt>
              <dd>Stavba + kámen z jedné ruky</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="tk-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="tk-sekce-hlava">
          <p className="tk-eyebrow">
            <span className="tk-eyebrow-mark" aria-hidden="true" />
            Co pro vás postavíme
          </p>
          <h2 id="sluzby-h" className="tk-sekce-titul">
            Tři řemesla pod jednou střechou
          </h2>
          <p className="tk-sekce-perex">
            Nemusíte koordinovat pět dodavatelů. Hrubou stavbu, rekonstrukci
            i kamenické detaily řešíte s jedním stavbyvedoucím a jednou smlouvou.
          </p>
        </div>

        <div className="tk-sluzby-mriz">
          {sluzby.map((s) => (
            <article className="tk-karta" key={s.kod}>
              <div className="tk-karta-kod" aria-hidden="true">{s.kod}</div>
              <h3 className="tk-karta-titul">{s.nazev}</h3>
              <p className="tk-karta-popis">{s.popis}</p>
              <ul className="tk-karta-seznam">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== REFERENCE ===== */}
      <section className="tk-reference" id="reference" aria-labelledby="reference-h">
        <div className="tk-sekce-hlava tk-sekce-hlava-svetla">
          <p className="tk-eyebrow tk-eyebrow-svetly">
            <span className="tk-eyebrow-mark" aria-hidden="true" />
            Realizace, na které se můžete jet podívat
          </p>
          <h2 id="reference-h" className="tk-sekce-titul">
            Stavby mluví za nás
          </h2>
          <p className="tk-sekce-perex">
            Na Hané stavíme přes třicet let. Většina zakázek k nám přichází
            na doporučení — od lidí, kterým jsme už něco postavili.
          </p>
        </div>

        <ol className="tk-ref-seznam">
          {duvera.map((r, i) => (
            <li className="tk-ref" key={r.stavba}>
              <div className="tk-ref-cislo" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
              <div className="tk-ref-telo">
                <h3 className="tk-ref-titul">{r.stavba}</h3>
                <p className="tk-ref-rozsah">{r.rozsah}</p>
                <p className="tk-ref-text">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="tk-ref-pruh" role="note">
          <p>
            <strong>Kde nás najdete:</strong> areál U Panelárny, Olomouc.
            Kamenická dílna i kancelář na jednom místě — vzorky kamene si
            můžete osahat, než se rozhodnete.
          </p>
        </div>
      </section>
    </main>
  );
}
