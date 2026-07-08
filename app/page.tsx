import type { CSSProperties } from "react";

export default function Page() {
  const capabilities = [
    {
      id: "01",
      title: "Projekt kamer na míru budově",
      body: "Projdeme objekt, zakreslíme zorná pole a mrtvé úhly. Navrhneme rozmístění, které pokryje vjezdy, pokladny i sklad — ne jen prázdnou zeď za recepcí.",
    },
    {
      id: "02",
      title: "Instalace bez rozkopaného provozu",
      body: "Kabeláž, montáž kamer, nastavení záznamu i vzdáleného přístupu. Táhneme trasy tak, aby se u vás dál normálně pracovalo a chodilo.",
    },
    {
      id: "03",
      title: "Živý dohled do mobilu",
      body: "Obraz z kamer vidíte v telefonu i z domova. Nastavíme upozornění na pohyb v noci a přístupová práva pro každého, kdo je má mít.",
    },
    {
      id: "04",
      title: "Servis s garantovaným zásahem",
      body: "Záruční i pozáruční péče o celý systém. Když kamera vypadne, řešíme to přes Helpdesk hned — ne až vás okradou a záznam chybí.",
    },
  ];

  const proof = [
    {
      label: "Odbornost prověřená lety",
      body: "Kamery a slaboproud děláme v Ostravě přes dvacet let. Většina techniků má v oboru dvě dekády praxe — poznají špatně mířený objektiv na první pohled.",
    },
    {
      label: "Rychlá reakce",
      body: "Máme jednoduchou organizační strukturu, takže mezi vaším telefonátem a technikem na místě nestojí pět schvalovacích kolonek.",
    },
    {
      label: "Řešení podle rozpočtu",
      body: "Nabídneme bezpečné a spolehlivé pokrytí s ohledem na co nejnižší náklady. Neprodáme vám dvacet kamer tam, kde stačí šest dobře umístěných.",
    },
    {
      label: "Bez omezení rozsahem",
      body: "Bytový dům, hala, areál i síť poboček. Personálně i ekonomicky zvládneme i velké zakázky — a doprovodíme je až k pozáručnímu servisu.",
    },
  ];

  return (
    <main className="eiko">
      <header className="eiko-top">
        <a className="eiko-mark" href="#" aria-label="EIKO — kamerové systémy Ostrava">
          <span className="eiko-mark__lens" aria-hidden="true">
            <span className="eiko-mark__iris" />
          </span>
          <span className="eiko-mark__word">EIKO</span>
          <span className="eiko-mark__sub">kamerové systémy · Ostrava</span>
        </a>
        <a className="eiko-call" href="tel:+420596718930">+420 596 718 930</a>
      </header>

      <section className="eiko-hero">
        <div className="eiko-hero__frame">
          <img
            className="eiko-hero__img"
            src="/hero.webp"
            alt="Bezpečnostní kamera sledující vjezd do objektu v Ostravě"
          />
          <div className="eiko-hero__hud" aria-hidden="true">
            <span className="eiko-rec"><span className="eiko-rec__dot" />REC</span>
            <span className="eiko-cam">CAM 01 · HRABŮVKA</span>
            <span className="eiko-grid" />
          </div>
        </div>

        <div className="eiko-hero__text">
          <p className="eiko-eyebrow">Kamerové systémy · projekt · instalace · servis</p>
          <h1 className="eiko-hero__title">
            Vidíte, co se děje ve vašem objektu.
            <span className="eiko-hero__title--em"> I ve tři ráno.</span>
          </h1>
          <p className="eiko-hero__lead">
            Navrhneme a nainstalujeme kamery, které skutečně vidí — vjezd, pokladnu i tmavý roh skladu.
            Obraz máte v mobilu, záznam v bezpečí a servis, který zvedá telefon. Ostrava a okolí.
          </p>
          <div className="eiko-hero__actions">
            <a className="eiko-btn" href="tel:+420596718930">Zavolat technikovi</a>
            <a className="eiko-btn eiko-btn--ghost" href="#sluzby">Jak to probíhá</a>
          </div>
        </div>
      </section>

      <section className="eiko-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="eiko-section__head">
          <p className="eiko-eyebrow">Co pro vás uděláme</p>
          <h2 className="eiko-h2" id="sluzby-h">Od zakreslení do plánu až po záznam, který u soudu obstojí</h2>
        </div>

        <div className="eiko-split">
          <ol className="eiko-steps">
            {capabilities.map((c) => (
              <li className="eiko-step" key={c.id}>
                <span className="eiko-step__no" aria-hidden="true">{c.id}</span>
                <div className="eiko-step__body">
                  <h3 className="eiko-step__title">{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="eiko-figure">
            <img
              src="/section-1.webp"
              alt="Technik EIKO nastavuje kamerový systém a záznamové zařízení"
            />
            <figcaption>Každou kameru zaměříme a otestujeme přímo na místě — než odjedeme, vidíte přesně to, co má.</figcaption>
          </figure>
        </div>
      </section>

      <section className="eiko-section eiko-section--alt" id="o-nas" aria-labelledby="onas-h">
        <div className="eiko-trust">
          <figure className="eiko-figure eiko-figure--wide">
            <img
              src="/section-2.webp"
              alt="Dohledové centrum s obrazem z více kamer najednou"
            />
          </figure>
          <div className="eiko-trust__text">
            <p className="eiko-eyebrow">Proč lidé v Ostravě volají nám</p>
            <h2 className="eiko-h2" id="onas-h">Dvacet let stavíme systémy, které pracují i&nbsp;když spíte</h2>
            <p className="eiko-trust__lead">
              Sídlíme na Moravské 758/95 v&nbsp;Ostravě-Hrabůvce. Neschováváme se za automatické linky —
              zvedneme telefon a přijedeme se podívat, kde vám kamera pomůže a kde jen visela zbytečně.
            </p>
            <dl className="eiko-proof">
              {proof.map((p) => (
                <div className="eiko-proof__item" key={p.label}>
                  <dt>{p.label}</dt>
                  <dd>{p.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
