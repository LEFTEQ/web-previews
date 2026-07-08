import type { CSSProperties } from "react";

export default function Page() {
  const problemy = [
    { stav: "Táhne od nich", detail: "Studený průvan podél křídla i při zavřeném okně." },
    { stav: "Slyším ulici", detail: "Hluk z venku proniká dovnitř, i když je okno dovřené." },
    { stav: "Nejdou dovřít", detail: "Klika drhne, křídlo sedá jinak než dřív." },
    { stav: "Rosí se", detail: "Ráno kapky na skle i na rámu, vlhko na parapetu." },
    { stav: "Platím moc za teplo", detail: "Teplo uniká netěsnostmi, účet za energie roste." },
    { stav: "Nikdy neseřízená", detail: "Okna běží roky bez údržby a začínají blbnout." },
  ];

  const kroky = [
    {
      c: "01",
      titul: "Kontrola u vás doma",
      text: "Přijedeme, projdeme každé okno a řekneme rovnou, co mu je. Kontrola i konzultace jsou zdarma.",
    },
    {
      c: "02",
      titul: "Seřízení a přetěsnění",
      text: "Srovnáme kování, vyměníme těsnění za to nejkvalitnější, které v ČR používá jen pár firem. Hotovo do pár hodin.",
    },
    {
      c: "03",
      titul: "Uklidíme a platíte až potom",
      text: "Než si uvaříte kávu, po sobě uklidíme. Platba až po realizaci — žádné zálohy ani skryté poplatky.",
    },
  ];

  const srovnani = {
    okna: {
      titul: "Výměna oken",
      radky: [
        ["Investice", "200 000+ Kč"],
        ["Čas", "Týden bourání a nepořádku"],
        ["Výsledek", "Teplo a ticho"],
      ],
    },
    servis: {
      titul: "Servis MámOkno",
      radky: [
        ["Investice", "Pár tisíc korun"],
        ["Čas", "Do pár hodin je hotovo"],
        ["Výsledek", "Teplo, ticho a úspora desítek tisíc"],
      ],
    },
  };

  return (
    <main className="mo">
      <header className="mo-nav">
        <a className="mo-logo" href="#" aria-label="MámOkno.cz — servis oken Praha">
          <span className="mo-logo-mark" aria-hidden="true">
            <span className="mo-pane" />
            <span className="mo-pane" />
          </span>
          <span className="mo-logo-word">
            Mám<em>Okno</em>
          </span>
        </a>
        <a className="mo-tel" href="tel:800881908">
          <span className="mo-tel-label">Zavolejte zdarma</span>
          800 881 908
        </a>
      </header>

      <section className="mo-hero" aria-labelledby="hero-nadpis">
        <div className="mo-hero-media">
          <img
            src="/hero.webp"
            alt="Technik MámOkno seřizuje kování plastového okna v pražském bytě"
            className="mo-hero-img"
          />
        </div>
        <div className="mo-hero-inner">
          <p className="mo-eyebrow">Servis plastových oken · Praha</p>
          <h1 id="hero-nadpis" className="mo-hero-title">
            Servis oken je chytřejší
            <span className="mo-rotator">
              <span>než měnit okna za statisíce</span>
              <span>než se doma potit v létě</span>
              <span>než poslouchat hluk z ulice</span>
            </span>
          </h1>
          <p className="mo-hero-lead">
            Nemusíte kupovat nová okna. Seřídíme, přetěsníme a zastavíme průvan — za
            tisíce místo statisíců. V průměru o <strong>7&nbsp;300&nbsp;Kč</strong>{" "}
            levněji než konkurence.
          </p>
          <div className="mo-hero-cta">
            <a className="mo-btn mo-btn-primary" href="tel:800881908">
              Objednat servis oken
            </a>
            <a className="mo-btn mo-btn-ghost" href="#jak">
              Jak to probíhá
            </a>
          </div>
        </div>
      </section>

      <section className="mo-symptomy" aria-labelledby="sympt-nadpis">
        <div className="mo-section-head">
          <p className="mo-eyebrow mo-eyebrow-dark">Co trápí vaše okna</p>
          <h2 id="sympt-nadpis">Poznáte to svoje?</h2>
          <p className="mo-section-sub">
            Šest věcí, se kterými nám v pražských bytech, domech i firmách voláte
            nejčastěji. Každou z nich vyřešíme bez výměny oken.
          </p>
        </div>
        <ul className="mo-symptomy-grid">
          {problemy.map((p, i) => (
            <li key={p.stav} className="mo-symptom">
              <span className="mo-symptom-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{p.stav}</h3>
              <p>{p.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mo-jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="mo-jak-media">
          <img
            src="/section-1.webp"
            alt="Detail nového těsnění osazeného do rámu plastového okna"
            className="mo-jak-img"
          />
        </div>
        <div className="mo-jak-body">
          <div className="mo-section-head">
            <p className="mo-eyebrow">Jak servis probíhá</p>
            <h2 id="jak-nadpis">Od kontroly po uklizený byt ve třech krocích</h2>
          </div>
          <ol className="mo-kroky">
            {kroky.map((k) => (
              <li key={k.c} className="mo-krok">
                <span className="mo-krok-num" aria-hidden="true">
                  {k.c}
                </span>
                <div>
                  <h3>{k.titul}</h3>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mo-badges">
            <span>Kontrola oken zdarma</span>
            <span>Termín do 24 h</span>
            <span>Platba až po realizaci</span>
          </div>
          <a className="mo-btn mo-btn-primary" href="tel:800881908">
            Objednat kontrolu zdarma
          </a>
        </div>
      </section>

      <section className="mo-duvera" aria-labelledby="duvera-nadpis">
        <div className="mo-section-head mo-section-head-center">
          <p className="mo-eyebrow mo-eyebrow-dark">Statisíce vs. tisíce</p>
          <h2 id="duvera-nadpis">Proč měnit okna, když stačí servis?</h2>
        </div>

        <div className="mo-srovnani">
          <div className="mo-karta mo-karta-mute">
            <h3>{srovnani.okna.titul}</h3>
            <dl>
              {srovnani.okna.radky.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mo-uspora" aria-hidden="true">
            <span className="mo-uspora-cislo">90&nbsp;%</span>
            <span className="mo-uspora-label">úspora</span>
          </div>

          <div className="mo-karta mo-karta-hi">
            <h3>{srovnani.servis.titul}</h3>
            <dl>
              {srovnani.servis.radky.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="mo-ref">
          <img
            src="/section-2.webp"
            alt="Spokojená zákaznice u nově seřízeného okna v pražském bytě"
            className="mo-ref-img"
          />
          <blockquote>
            <p>
              „Nová okna jsem vůbec nepotřebovala. Zastavili průvan, odstranili
              hluk z ulice a byli hotoví, než jsem stihla uvařit kávu. Rozdíl bylo
              cítit hned.“
            </p>
            <figcaption>
              <strong>Magdalena Binová</strong>
              <span>bytový dům, Praha 4</span>
            </figcaption>
          </blockquote>
        </figure>

        <ul className="mo-cisla" aria-label="Čísla naší práce">
          <li>
            <span className="mo-cislo">200+</span>
            <span className="mo-cislo-label">realizací měsíčně</span>
          </li>
          <li>
            <span className="mo-cislo">24 h</span>
            <span className="mo-cislo-label">a máte termín</span>
          </li>
          <li>
            <span className="mo-cislo">98 %</span>
            <span className="mo-cislo-label">spokojených zákazníků</span>
          </li>
          <li>
            <span className="mo-cislo">0 Kč</span>
            <span className="mo-cislo-label">záloha předem</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
