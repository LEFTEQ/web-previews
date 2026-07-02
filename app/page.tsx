const revize = [
  {
    id: "E",
    nazev: "Elektroinstalace a hromosvody",
    popis:
      "Výchozí i pravidelné revize elektrických instalací v bytech, firmách i průmyslu. Revize hromosvodů (LPS) včetně měření zemních odporů a protokolu, který obstojí u pojišťovny i inspekce.",
    lhuta: "lhůty 1–5 let dle prostředí",
  },
  {
    id: "P",
    nazev: "Plynová zařízení",
    popis:
      "Revize a kontroly odběrných plynových zařízení — kotelny, rozvody, spotřebiče. Zjištěné závady popíšeme srozumitelně a řekneme, co je potřeba opravit hned a co počká.",
    lhuta: "kontrola 1× ročně, revize 1× za 3 roky",
  },
  {
    id: "T",
    nazev: "Tlakové nádoby stabilní",
    popis:
      "Provozní revize, vnitřní revize a zkoušky těsnosti TNS — vzdušníky, expanzní nádoby, výměníky. Pohlídáme termíny, abyste na zkoušku nezapomněli.",
    lhuta: "provozní revize 1× ročně",
  },
  {
    id: "K",
    nazev: "Kotelny a vytápění",
    popis:
      "Odborné prohlídky nízkotlakých kotelen a kontroly provozovaných systémů vytápění podle zákona o hospodaření energií. Včetně doporučení, kde topíte zbytečně draze.",
    lhuta: "prohlídka kotelny 1× ročně",
  },
  {
    id: "CH",
    nazev: "Klimatizace a chladivo",
    popis:
      "Kontroly systémů klimatizace a kontroly úniku chladiva podle nařízení o F-plynech. Vedeme evidenci a hlídáme intervaly podle náplně zařízení.",
    lhuta: "interval dle množství chladiva",
  },
  {
    id: "Š",
    nazev: "Školení obsluh",
    popis:
      "Školení obsluh plynových zařízení, kotelen a tlakových nádob přímo u vás v provozu. Prakticky, na vašem zařízení, s osvědčením pro každého účastníka.",
    lhuta: "opakování zpravidla 1× za 3 roky",
  },
];

const kraje = [
  "Jižní Čechy",
  "Střední Čechy",
  "Praha",
  "Plzeňský kraj",
  "Vysočina",
];

export default function Page() {
  return (
    <main className="rd">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-scrim" />
        </div>

        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-sign" aria-hidden="true">
              ⚡
            </span>
            <span className="wordmark-text">
              REVIZE <strong>DOBEŠ</strong>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420776388233">
            776 388 233
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-stamp">
            <span className="stamp-line" aria-hidden="true" />
            Revizní technik &amp; energetický specialista · České Budějovice
          </p>
          <h1 className="hero-title">
            Zařízení <em>schopné</em>
            <br />
            bezpečného provozu.
          </h1>
          <p className="hero-sub">
            Ta jedna věta v protokolu, kvůli které voláte revizního technika.
            Elektro, plyn, tlakové nádoby a kotelny — zrevidované, změřené a
            s termíny pohlídanými za vás.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420776388233">
              Zavolat technikovi
            </a>
            <a className="btn btn-ghost" href="mailto:info@revize-dobes.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        <div className="hero-strip" role="list" aria-label="Rozsah oprávnění">
          <span role="listitem">Elektro</span>
          <span role="listitem">Plyn</span>
          <span role="listitem">TNS</span>
          <span role="listitem">Kotelny</span>
          <span role="listitem">Klimatizace</span>
        </div>
      </header>

      {/* ================= REVIZE ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Co revidujeme</p>
          <h2 id="sluzby-h">
            Jedna firma, všechna vyhrazená technická zařízení
          </h2>
          <p className="sekce-perex">
            Nemusíte shánět pět techniků. Elektroinstalaci, plyn, tlakové
            nádoby i kotelnu vám zreviduje jeden člověk, kterému se dovoláte.
            Písmeno u každé položky odpovídá razítku na protokolu.
          </p>
        </div>

        <div className="sluzby-grid">
          {revize.map((r) => (
            <article className="karta" key={r.id}>
              <div className="karta-znacka" aria-hidden="true">
                {r.id}
              </div>
              <h3>{r.nazev}</h3>
              <p>{r.popis}</p>
              <p className="karta-lhuta">{r.lhuta}</p>
            </article>
          ))}
        </div>

        <figure className="sluzby-foto">
          <img
            src="/section-1.webp"
            alt="Měření elektrické instalace v rozvaděči při revizi"
          />
          <figcaption>
            Každá revize začíná měřením, ne papírem. Protokol dostanete do
            týdne, u havárií do 48 hodin.
          </figcaption>
        </figure>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-text">
          <p className="eyebrow eyebrow-light">Kdo za tím stojí</p>
          <h2 id="duvera-h">Dva Dobešové, jedno řemeslo</h2>
          <p>
            Revize děláme jako rodinná dvojice: <strong>Ing. Jakub Dobeš</strong>{" "}
            v Českých Budějovicích a <strong>František Dobeš</strong> ve
            Voticích. Oba jsme revizní technici a energetičtí specialisté —
            takže vedle razítka dostanete i radu, jak provoz zlevnit.
          </p>
          <p>
            Jezdíme tam, kde zařízení skutečně stojí: do bytových domů, škol,
            výrobních hal i penzionů. Termín držíme, na místě nic zbytečně
            nedramatizujeme a závady popíšeme tak, aby jim rozuměl i ten, kdo
            šroubovák v ruce nedrží.
          </p>

          <dl className="duvera-fakta">
            <div>
              <dt>Působíme v pěti krajích</dt>
              <dd>
                <ul className="kraje">
                  {kraje.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>České Budějovice</dt>
              <dd>
                Ing. Jakub Dobeš · U Trojice 31
                <br />
                <a href="tel:+420776388233">+420 776 388 233</a>
              </dd>
            </div>
            <div>
              <dt>Votice</dt>
              <dd>
                František Dobeš · Wolkerova 742
                <br />
                <a href="tel:+420736190591">+420 736 190 591</a>
              </dd>
            </div>
          </dl>
        </div>

        <figure className="duvera-foto">
          <img
            src="/section-2.webp"
            alt="Revizní technik při odborné prohlídce kotelny"
          />
          <figcaption>
            Odborná prohlídka kotelny — jednou ročně, bez upomínání. Termíny
            všech vašich zařízení hlídáme v evidenci my.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
