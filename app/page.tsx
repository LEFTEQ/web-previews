const products = [
  {
    title: "Prapory a vlajky",
    text: "Ručně vyšívané slavnostní prapory i odolné venkovní vlajky pro obce, hasiče, spolky a firmy.",
    mark: "V",
  },
  {
    title: "Znaky a heraldika",
    text: "Návrh, odborné posouzení i výroba znaků ze smaltu, kovu, kamene nebo výšivky.",
    mark: "Z",
  },
  {
    title: "Medaile a insignie",
    text: "Odznaky, pamětní mince, vyznamenání a reprezentační symboly zpracované do posledního detailu.",
    mark: "M",
  },
];

export default function Page() {
  return (
    <main>
      <header className="siteHeader" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="Alerion, začátek stránky">
          <span className="wordmarkBird" aria-hidden="true">A</span>
          <span>ALERION</span>
          <small>Brno · od roku 1996</small>
        </a>
        <nav aria-label="Obsah stránky">
          <a href="#vyroba">Co vyrábíme</a>
          <a href="#remeslo">Jak pracujeme</a>
        </nav>
        <a className="headerAction" href="tel:+420513035545">Zavolat</a>
      </header>

      <section className="hero" id="top">
        <div className="heroImageWrap">
          <img
            className="heroImage"
            src="/hero.webp"
            alt="Detail precizně vyšívaného heraldického praporu v dílně Alerion"
          />
          <div className="heroSeal" aria-hidden="true">
            <span>Brno</span>
            <strong>A</strong>
            <span>1996</span>
          </div>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Heraldická a vlajkařská dílna · Brno</p>
          <h1>Symboly,<br />které <em>přežijí</em><br />svou dobu.</h1>
          <p className="heroIntro">
            Navrhujeme a vyrábíme prapory, vlajky, znaky a insignie pro chvíle,
            které se zapisují do paměti obcí, sborů i rodin.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="mailto:INFO@ALERION.CZ?subject=Poptávka zakázkové výroby">
              Poptat vlastní symbol <span aria-hidden="true">→</span>
            </a>
            <a className="textLink" href="#vyroba">Prohlédnout možnosti</a>
          </div>
          <p className="heroNote">Od prvního návrhu po poslední steh vzniká vše pod odborným dohledem.</p>
        </div>
      </section>

      <section className="products" id="vyroba" aria-labelledby="productsTitle">
        <div className="sectionHeading">
          <p className="eyebrow">Co pro vás vyrobíme</p>
          <h2 id="productsTitle">Vašemu příběhu dáme tvar, barvu a materiál.</h2>
          <p>
            Každý symbol má jiný účel. Doporučíme technologii, která odpovídá jeho významu,
            místu použití i rozpočtu.
          </p>
        </div>

        <div className="productLayout">
          <div className="productImageFrame">
            <img
              src="/section-1.webp"
              alt="Řemeslné zpracování výšivky na slavnostním praporu"
            />
            <p><span>Detail</span> Nit, kov a barva vedené pevnou rukou.</p>
          </div>

          <div className="productList">
            {products.map((product) => (
              <article className="productItem" key={product.title}>
                <span className="productMark" aria-hidden="true">{product.mark}</span>
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                </div>
              </article>
            ))}
            <a className="catalogLink" href="mailto:INFO@ALERION.CZ?subject=Výběr vhodného provedení">
              Pomozte mi vybrat vhodné provedení <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="craft" id="remeslo" aria-labelledby="craftTitle">
        <div className="craftImageFrame">
          <img
            src="/section-2.webp"
            alt="Hotový heraldický prapor z brněnské dílny Alerion"
          />
          <div className="qualityRibbon">Vyrobeno v Brně</div>
        </div>

        <div className="craftCopy">
          <p className="eyebrow">Jistota pro významnou zakázku</p>
          <h2 id="craftTitle">Tradici neimitujeme. Rozumíme jí.</h2>
          <p className="craftLead">
            Přes 25 let převádíme heraldická pravidla do výrobků, které dobře vypadají při
            slavnostním nástupu i po letech používání.
          </p>

          <dl className="proofList">
            <div>
              <dt>Odborná garance</dt>
              <dd>Heraldický návrh zkontrolujeme dřív, než se dotkne materiálu.</dd>
            </div>
            <div>
              <dt>Vhodná technologie</dt>
              <dd>Výšivku, tisk, smalt i kov volíme podle skutečného způsobu použití.</dd>
            </div>
            <div>
              <dt>Osobní péče</dt>
              <dd>Zakázku s vámi řeší člověk, který zná její zadání i stav výroby.</dd>
            </div>
          </dl>

          <blockquote>
            „Prapor nemá být dekorace na jednu sezonu. Má nést jméno a hodnoty dalších generací.“
          </blockquote>
          <address>
            Dílna a prodejna · Chaloupkova 1, Brno–Královo Pole
          </address>
        </div>
      </section>
    </main>
  );
}
