export const metadata = {
  title: "letterhead s.r.o. — reklamní agentura, Pardubice",
  description:
    "Reklamní agentura letterhead z Pardubic. Vizuální identity, kampaně a tisk, které si lidé zapamatují. Od hlavičkového papíru po billboard u nadjezdu.",
  openGraph: {
    title: "letterhead s.r.o. — reklamní agentura, Pardubice",
    description:
      "Značky, kampaně a tiskoviny z Pardubic. Děláme reklamu, která nese vaše jméno v prvním řádku.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23101418'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' fill='%23ffd42a' text-anchor='middle'%3El%3C/text%3E%3C/svg%3E",
  },
};

export default function Page() {
  return (
    <main className="lh">
      {/* ===== HERO ===== */}
      <header className="lh-hero">
        <div className="lh-hero-bar">
          <div className="lh-wordmark" aria-label="letterhead s.r.o.">
            <span className="lh-wordmark-l">letter</span>
            <span className="lh-wordmark-h">head</span>
            <span className="lh-wordmark-tld">s.r.o.</span>
          </div>
          <p className="lh-hero-locality">Reklamní agentura · Pardubice</p>
        </div>

        <div className="lh-hero-grid">
          <div className="lh-hero-copy">
            <p className="lh-eyebrow">
              <span aria-hidden="true">¶</span> první řádek rozhoduje
            </p>
            <h1 className="lh-hero-title">
              Vaše jméno patří
              <br />
              do <em>hlavičky</em>,
              <br />
              ne pod čáru.
            </h1>
            <p className="lh-hero-lead">
              Jsme letterhead — pardubická reklamní agentura. Stavíme značky od
              hlavičkového papíru po kampaň přes celé město. Když od nás něco
              odejde do světa, poznáte to podle prvního řádku.
            </p>
            <div className="lh-hero-actions">
              <a className="lh-btn lh-btn-solid" href="#sluzby">
                Co pro vás uděláme
              </a>
              <a className="lh-btn lh-btn-line" href="#reference">
                Podívat se na práci
              </a>
            </div>
          </div>

          <figure className="lh-hero-figure">
            <img
              src="/hero.webp"
              alt="Studio agentury letterhead v Pardubicích — tiskoviny, vzorníky barev a rozpracované návrhy na stole"
              className="lh-img"
            />
            <figcaption className="lh-hero-caption">
              Studio letterhead, Pardubice — tady vzniká první řádek vaší
              značky.
            </figcaption>
          </figure>
        </div>

        <div className="lh-rule" aria-hidden="true">
          <span className="lh-rule-mark">— — — zde odtrhněte a čtěte dál — — —</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="lh-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="lh-section-head">
          <p className="lh-eyebrow">
            <span aria-hidden="true">¶</span> služby
          </p>
          <h2 className="lh-h2" id="sluzby-h">
            Od dopisu po dálnici.
            <br />
            Všechno, co nese vaše jméno.
          </h2>
        </div>

        <div className="lh-services">
          <article className="lh-service">
            <p className="lh-service-format">A4</p>
            <h3 className="lh-service-title">Identita a tiskoviny</h3>
            <p className="lh-service-text">
              Logo, hlavičkový papír, vizitky, obálky, faktury. Papír je pořád
              první dojem — dostanete identitu, která funguje na obrazovce i v
              ruce, včetně tiskových dat a manuálu.
            </p>
          </article>

          <article className="lh-service">
            <p className="lh-service-format">B1</p>
            <h3 className="lh-service-title">Kampaně v ulicích</h3>
            <p className="lh-service-text">
              Plakáty, citylighty, polepy výloh a aut. Známe Pardubice — víme,
              kudy chodí lidé z Pernštýnského náměstí na Palackého třídu a kde
              si plakátu opravdu všimnou.
            </p>
          </article>

          <article className="lh-service">
            <p className="lh-service-format">16:9</p>
            <h3 className="lh-service-title">Digitál a sociální sítě</h3>
            <p className="lh-service-text">
              Web, bannery, správa profilů a placené kampaně. Stejná značka,
              stejný hlas — ať vás zákazník potká na Instagramu, nebo na
              Googlu, pozná vás na první řádek.
            </p>
          </article>

          <article className="lh-service">
            <p className="lh-service-format">DL</p>
            <h3 className="lh-service-title">Texty a direct mail</h3>
            <p className="lh-service-text">
              Slogany, letáky, newslettery a dopisy, které si lidé přečtou
              celé. Píšeme česky, srozumitelně a bez frází — slovo je náš
              nejlevnější a nejostřejší nástroj.
            </p>
          </article>
        </div>
      </section>

      {/* ===== REFERENCE / DŮVĚRA ===== */}
      <section
        className="lh-section lh-section-dark"
        id="reference"
        aria-labelledby="reference-h"
      >
        <div className="lh-section-head">
          <p className="lh-eyebrow lh-eyebrow-light">
            <span aria-hidden="true">¶</span> důvěra
          </p>
          <h2 className="lh-h2" id="reference-h">
            Malá agentura. Krátká cesta
            <br />
            od nápadu k tiskárně.
          </h2>
        </div>

        <div className="lh-trust-grid">
          <figure className="lh-trust-figure">
            <img
              src="/section-2.webp"
              alt="Ukázky prací agentury letterhead — vytištěné plakáty a firemní tiskoviny rozložené na stole"
              className="lh-img"
            />
          </figure>

          <div className="lh-trust-copy">
            <p className="lh-trust-lead">
              U nás nemluvíte s account manažerem, který to „předá dál". Návrh
              vám ukáže ten, kdo ho kreslil. Proto jsme rychlí a proto se k
              nám firmy z Pardubicka vracejí.
            </p>

            <ul className="lh-facts">
              <li className="lh-fact">
                <span className="lh-fact-key">Kde nás najdete</span>
                <span className="lh-fact-val">
                  Pardubice, pár minut od Pernštýnského náměstí
                </span>
              </li>
              <li className="lh-fact">
                <span className="lh-fact-key">Pro koho pracujeme</span>
                <span className="lh-fact-val">
                  Rodinné firmy, výrobní podniky a služby z Pardubického kraje
                </span>
              </li>
              <li className="lh-fact">
                <span className="lh-fact-key">Jak to probíhá</span>
                <span className="lh-fact-val">
                  První schůzka a nacenění zdarma, návrh do dvou týdnů
                </span>
              </li>
              <li className="lh-fact">
                <span className="lh-fact-key">Co dostanete do ruky</span>
                <span className="lh-fact-val">
                  Zdrojová data, tisková PDF i manuál — všechno je vaše
                </span>
              </li>
            </ul>

            <blockquote className="lh-quote">
              <p>
                „Přišli jsme s logem z devadesátek a odešli se značkou, za
                kterou se nestydíme na veletrhu v Německu. A poprvé nám někdo
                vysvětlil proč."
              </p>
              <cite>— majitel strojírenské firmy, Pardubice-Rosice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
