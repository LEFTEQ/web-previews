import type { CSSProperties } from "react";

export default function Page() {
  const pokeBowls = [
    {
      name: "Kuřecí Mango",
      base: "rýže • kuřecí maso • zelí • mrkev • okurka • mango • edamame • ředkvičky • kukuřice • sezam • lemon mayo",
      big: "259 Kč",
      small: "199 Kč / 300 g",
      tag: "nejprodávanější",
    },
    {
      name: "Fresh Losos",
      base: "rýže • losos • zelí • mrkev • okurka • edamame • wakame • ředkvičky • sezam • chilli • lemon mayo",
      big: "279 Kč",
      small: "219 Kč / 300 g",
      tag: null,
    },
    {
      name: "Mexiko",
      base: "rýže • trhané hovězí • avokádo • červené fazole • nakládaná cibule • kukuřice • jalapeños • rajčata • koriandr • chipotle mayo",
      big: "289 Kč",
      small: "229 Kč / 300 g",
      tag: "pálí",
    },
    {
      name: "Vegan",
      base: "rýže • tofu • zelí • mrkev • okurka • wakame • mango • ředkvičky • sezam • arašídy • vegan lemon mayo",
      big: "249 Kč",
      small: "189 Kč / 300 g",
      tag: "rostlinné",
    },
    {
      name: "Krevety",
      base: "rýže • krevety • zelí • mrkev • okurka • mango • wakame • edamame • sezam • arašídy • lemon mayo",
      big: "279 Kč",
      small: "219 Kč / 300 g",
      tag: null,
    },
    {
      name: "Yuzu Losos",
      base: "rýže • nakládaný losos • mrkev • okurka • edamame • ananas • jarní cibulka • ředkvičky • avokádo • yuzu mayo",
      big: "289 Kč",
      small: "229 Kč / 300 g",
      tag: null,
    },
  ];

  const dalsi = [
    { line: "Hot Bowls", desc: "Kuřecí teriyaki, sweet chilli — teplé misky na jasmínové rýži.", price: "od 259 Kč" },
    { line: "Sushi Burrito", desc: "Hugo s lososem a krevetami, nebo vegan tofu — sushi, které se drží v ruce.", price: "od 279 Kč" },
    { line: "Sweet Bowls", desc: "Čoko a Açaí snídaňové misky s granolou a čerstvým ovocem.", price: "189 Kč" },
  ];

  return (
    <main className="mp">
      <header className="mp-nav">
        <a className="mp-mark" href="#" aria-label="Mr. Poke — domů">
          <span className="mp-mark-mr">MR.</span>
          <span className="mp-mark-poke">POKE</span>
          <span className="mp-mark-dot" aria-hidden="true" />
        </a>
        <nav className="mp-nav-links" aria-label="Hlavní nabídka">
          <a href="#poke">Poke bowls</a>
          <a href="#dalsi">Další menu</a>
          <a href="#kde">Kde nás najdete</a>
        </nav>
        <a className="mp-nav-cta" href="tel:+420720554001">Objednat</a>
      </header>

      <section className="mp-hero">
        <div className="mp-hero-media">
          <img
            src="/hero.webp"
            alt="Poke bowl Mr. Poke — rýže, čerstvá ryba, mango a zelenina naskládané v misce"
            width={1200}
            height={1500}
          />
        </div>
        <div className="mp-hero-copy">
          <p className="mp-eyebrow">Poke bowls • Olomouc</p>
          <h1 className="mp-hero-title">
            Postav si <span className="mp-hl">misku</span>,<br />
            co tě zasytí do večera.
          </h1>
          <p className="mp-hero-lead">
            Rýže, čerstvá ryba nebo tofu, spousta zeleniny a omáčka, kterou si
            pamatuješ. Nabalíme ji a přivezeme po Olomouci ještě teplou.
          </p>
          <div className="mp-hero-actions">
            <a className="mp-btn" href="tel:+420720554001">Objednat rozvoz</a>
            <a className="mp-btn-ghost" href="#poke">Prohlédnout misky</a>
          </div>
          <ul className="mp-hero-facts">
            <li><strong>500 g</strong> plná porce</li>
            <li><strong>6</strong> poke variant</li>
            <li><strong>čerstvě</strong> každé ráno</li>
          </ul>
        </div>
      </section>

      <section className="mp-sec" id="poke" aria-labelledby="poke-h">
        <div className="mp-sec-head">
          <p className="mp-eyebrow">Menu — poke</p>
          <h2 id="poke-h" className="mp-sec-title">Vyber si základ. Zbytek dáme čerstvý.</h2>
          <p className="mp-sec-note">
            Každá miska je vyskládaná na míru — proto vidíš, co v ní přesně je.
            Ceny za 500 g, menší 300 g porce v druhém řádku.
          </p>
        </div>

        <ul className="mp-list">
          {pokeBowls.map((b, i) => (
            <li className="mp-item" key={b.name}>
              <div className="mp-item-top">
                <span className="mp-item-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mp-item-name">
                  {b.name}
                  {b.tag ? <span className="mp-chip">{b.tag}</span> : null}
                </h3>
              </div>
              <p className="mp-item-base">{b.base}</p>
              <div className="mp-item-price">
                <span className="mp-big">{b.big}</span>
                <span className="mp-small">{b.small}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mp-band">
          <img
            src="/section-1.webp"
            alt="Detail poke bowlu Mr. Poke s mangem, edamame a sezamem"
            width={1200}
            height={800}
          />
          <div className="mp-band-copy">
            <h3>Ideální proteinová svačina</h3>
            <p>
              Plná antioxidantů, vitamínů a kvalitního proteinu, co tě zasytí na
              celé dopoledne. Žádné kompromisy v chuti.
            </p>
          </div>
        </div>
      </section>

      <section className="mp-sec mp-sec-alt" id="dalsi" aria-labelledby="dalsi-h">
        <div className="mp-two">
          <div className="mp-two-media">
            <img
              src="/section-2.webp"
              alt="Nabídka Mr. Poke — teplé misky, sushi burrito a sweet bowls"
              width={1000}
              height={1200}
            />
          </div>
          <div className="mp-two-copy">
            <p className="mp-eyebrow">Nejen poke</p>
            <h2 id="dalsi-h" className="mp-sec-title">Máš chuť na něco jiného?</h2>
            <ul className="mp-rows">
              {dalsi.map((d) => (
                <li className="mp-row" key={d.line}>
                  <div>
                    <h3>{d.line}</h3>
                    <p>{d.desc}</p>
                  </div>
                  <span className="mp-row-price">{d.price}</span>
                </li>
              ))}
            </ul>
            <p className="mp-two-note">
              Alergeny a plné složení najdeš u každé misky při objednávce.
            </p>
          </div>
        </div>

        <div className="mp-kde" id="kde">
          <div className="mp-kde-head">
            <p className="mp-eyebrow">Kde nás najdete</p>
            <h2 className="mp-sec-title">Vaříme čerstvě, vozíme po Olomouci.</h2>
          </div>
          <dl className="mp-kde-grid">
            <div>
              <dt>Zavolej a objednej</dt>
              <dd><a href="tel:+420720554001">+420 720 554 001</a></dd>
            </div>
            <div>
              <dt>Napiš nám</dt>
              <dd><a href="mailto:manager@mrpoke.cz">manager@mrpoke.cz</a></dd>
            </div>
            <div>
              <dt>Provozovna</dt>
              <dd>Lučina 6, 739 39 Lučina</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
