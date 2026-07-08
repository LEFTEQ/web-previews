import type { CSSProperties } from "react";

export default function Page() {
  const kategorie = [
    {
      cislo: "01",
      nazev: "Pro hráče",
      popis: "Brusle, hole, chrániče, helmy i tašky od Bauer, CCM a Warrior. Vše, co potřebuješ na led — od výstroje pro nejmenší po výbavu na ligovou úroveň.",
      znacky: ["Bauer", "CCM", "Warrior"],
    },
    {
      cislo: "02",
      nazev: "Pro brankáře",
      popis: "Kompletní vybavení do brány — betony, lapačky, vyrážečky, masky. Poradíme s výběrem velikosti tak, aby ti výstroj seděla a chránila.",
      znacky: ["Bauer", "CCM", "Vaughn"],
    },
    {
      cislo: "03",
      nazev: "Servis a broušení",
      popis: "Nabroušení bruslí na počkání, výměna nožů, ostření profilů a servis inline koleček. Vlastní brusky přímo na prodejně.",
      znacky: ["Hokej", "Inline"],
    },
    {
      cislo: "04",
      nazev: "Inline a kraso",
      popis: "Kolečkové brusle CCM a Bauer, výstroj na inline hokej i vybavení pro krasobruslení a fitness bruslení pro celou rodinu.",
      znacky: ["Inline", "Kraso", "Fitness"],
    },
  ];

  const novinky = [
    { nazev: "Brusle CCM Tacks XR70 SR", stav: "Skladem > 5 ks", pred: "8 599 Kč", cena: "7 739 Kč", stitek: "−10 %" },
    { nazev: "Hůl Bauer Pastrňák JR 40", stav: "Skladem > 5 ks", pred: "2 999 Kč", cena: "2 699 Kč", stitek: "TIP" },
    { nazev: "Helma Bauer Re-Akt 90 Combo", stav: "Skladem > 5 ks", pred: "5 599 Kč", cena: "5 039 Kč", stitek: "Doprava zdarma" },
    { nazev: "Brusle Bauer Vapor Fly30 SR", stav: "Skladem > 5 ks", pred: "8 999 Kč", cena: "8 099 Kč", stitek: "−10 %" },
  ];

  const prodejny = [
    {
      adresa: "Dlážděná 3, Praha 1",
      poznamka: "Nová prodejna v centru — NHL zóna a Český hokej",
      hodiny: ["Po–Pá: 10:00–19:00", "So: 10:00–14:00"],
      tel: "739 428 367",
    },
    {
      adresa: "Na Rozdílu 1, Praha 6",
      poznamka: "Prodejna a servis",
      hodiny: ["Po–Pá: 13:00–19:00"],
      tel: "602 720 659",
    },
    {
      adresa: "Mikuleckého 1584/1, Praha 4",
      poznamka: "Prodejna a servis",
      hodiny: ["Po–Pá: 13:00–19:00"],
      tel: "739 428 367",
    },
  ];

  const recenze = [
    { text: "Velmi rychlé dodání, spolehlivost, zboží odpovídá fotografii i popisu z webu. Maximální spokojenost.", datum: "1. 6. 2026" },
    { text: "Perfektní přístup na prodejně. Poradili s velikostí a nabrousili brusle na počkání.", datum: "13. 5. 2026" },
    { text: "Rychlá, milá a ochotná obsluha. Nákup během dvou dnů zcela bez chyby.", datum: "29. 4. 2026" },
  ];

  return (
    <main className="jb">
      <header className="jb-top">
        <a className="jb-mark" href="#" aria-label="JB Sport — domů">
          <span className="jb-mark__badge">JB</span>
          <span className="jb-mark__word">SPORT</span>
        </a>
        <nav className="jb-nav" aria-label="Hlavní">
          <a href="#kategorie">Sortiment</a>
          <a href="#novinky">Novinky</a>
          <a href="#prodejny">Prodejny</a>
        </nav>
        <a className="jb-call" href="tel:+420739428367">
          <span>739 428 367</span>
        </a>
      </header>

      <section className="jb-hero">
        <div className="jb-hero__img">
          <img src="/hero.webp" alt="Hokejové brusle a výstroj na prodejně JB Sport v Praze" />
        </div>
        <div className="jb-hero__panel">
          <p className="jb-eyebrow">Praha · rodinná firma · 30 let na ledě</p>
          <h1 className="jb-hero__title">
            Než vyjedeš<br />na led,<br />
            <span className="jb-hero__accent">nabrousíme ti to.</span>
          </h1>
          <p className="jb-hero__lead">
            Hokejová výstroj Bauer a CCM, brankářská výbava, inline i kraso — a hlavně
            servis, který nemá e-shop. Přijď na prodejnu, poradíme s velikostí a brusle
            nabrousíme na počkání.
          </p>
          <div className="jb-hero__cta">
            <a className="jb-btn" href="#kategorie">Prohlédnout sortiment</a>
            <a className="jb-btn jb-btn--ghost" href="#prodejny">Kde nás najdeš</a>
          </div>
          <ul className="jb-ticker">
            <li>Doručujeme do ČR i EU</li>
            <li>3 prodejny v Praze</li>
            <li>Servis hokej i inline</li>
          </ul>
        </div>
      </section>

      <section className="jb-section" id="kategorie" aria-labelledby="kat-nadpis">
        <div className="jb-section__head">
          <p className="jb-eyebrow">Co u nás pořídíš</p>
          <h2 className="jb-h2" id="kat-nadpis">Od prvních bruslí po ligovou výstroj</h2>
        </div>
        <div className="jb-cats">
          {kategorie.map((k) => (
            <article className="jb-cat" key={k.cislo}>
              <span className="jb-cat__num" aria-hidden="true">{k.cislo}</span>
              <h3 className="jb-cat__title">{k.nazev}</h3>
              <p className="jb-cat__text">{k.popis}</p>
              <ul className="jb-tags">
                {k.znacky.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="jb-novi" id="novinky">
          <div className="jb-novi__img">
            <img src="/section-1.webp" alt="Nové hokejové brusle a hole v regálech prodejny" />
          </div>
          <div className="jb-novi__list">
            <h3 className="jb-h3">Nejnovější kousky skladem</h3>
            {novinky.map((p) => (
              <div className="jb-prod" key={p.nazev}>
                <div className="jb-prod__main">
                  <span className="jb-prod__badge">{p.stitek}</span>
                  <span className="jb-prod__name">{p.nazev}</span>
                  <span className="jb-prod__stav">{p.stav}</span>
                </div>
                <div className="jb-prod__cena">
                  <span className="jb-prod__pred">{p.pred}</span>
                  <strong>{p.cena}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="jb-section jb-section--dark" id="prodejny" aria-labelledby="o-nadpis">
        <div className="jb-about">
          <div className="jb-about__img">
            <img src="/section-2.webp" alt="Broušení bruslí na prodejně JB Sport" />
          </div>
          <div className="jb-about__text">
            <p className="jb-eyebrow jb-eyebrow--light">O nás</p>
            <h2 className="jb-h2" id="o-nadpis">Třicet let stojíme za pultem, ne za robotem</h2>
            <p>
              JB Sport je česká rodinná firma. Za tři desítky let jsme obuli a vystrojili
              generace hráčů — od přípravky až po ty, co dnes hrají ligu. Spolupracujeme
              s pražskými kluby jako HC Kobra nebo Hvězda Praha.
            </p>
            <p>
              Neprodáváme jen krabice. Poradíme s velikostí, nabrousíme brusle a když se
              něco rozbije, opravíme to. To e-shop bez lidí nedá.
            </p>
            <dl className="jb-stats">
              <div><dt>30 let</dt><dd>na trhu</dd></div>
              <div><dt>3</dt><dd>prodejny v Praze</dd></div>
              <div><dt>600+</dt><dd>recenzí na Heurece</dd></div>
            </dl>
          </div>
        </div>

        <div className="jb-shops">
          {prodejny.map((p) => (
            <article className="jb-shop" key={p.adresa}>
              <h3 className="jb-shop__adresa">{p.adresa}</h3>
              <p className="jb-shop__pozn">{p.poznamka}</p>
              <ul className="jb-shop__hodiny">
                {p.hodiny.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <a className="jb-shop__tel" href={`tel:+420${p.tel.replace(/\s/g, "")}`}>
                {p.tel}
              </a>
            </article>
          ))}
        </div>

        <div className="jb-recenze">
          <p className="jb-eyebrow jb-eyebrow--light">Co říkají zákazníci</p>
          <div className="jb-recenze__grid">
            {recenze.map((r) => (
              <blockquote className="jb-quote" key={r.datum}>
                <p>„{r.text}“</p>
                <cite>Recenze z {r.datum}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
