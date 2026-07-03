const vrstvy = [
  { n: "V1", nazev: "Nosná konstrukce", popis: "Zdivo nebo dřevěný rám vašeho domu. Před zateplením zkontrolujeme stav, vlhkost a rovinnost podkladu." },
  { n: "V2", nazev: "Izolant", popis: "Minerální vata, šedý polystyren nebo foukaná celulóza do dutin. Tloušťku navrhneme výpočtem, ne odhadem." },
  { n: "V3", nazev: "Kotvení a výztuž", popis: "Hmoždinky podle podkladu, výztužná síťovina v celé ploše. To, co na hotové fasádě nikdy neuvidíte — a proto na tom nejvíc záleží." },
  { n: "V4", nazev: "Fasádní omítka", popis: "Silikonová nebo silikátová omítka v odstínu podle vás. Finální vrstva, kterou dům ukazuje ulici dalších třicet let." },
];

const sluzby = [
  {
    nazev: "Zateplení fasády",
    text: "Kompletní kontaktní zateplovací systém (ETICS) pro rodinné domy i bytovky. Od zaměření a návrhu tloušťky izolantu přes lešení až po finální omítku. Certifikované systémy, na které dostanete záruku.",
    stitek: "Rodinné domy · bytové domy",
  },
  {
    nazev: "Foukaná izolace",
    text: "Stropy, půdy a dutiny stěn zateplíme foukanou celulózou nebo minerální vlnou bez bourání. U běžné půdy jsme hotoví za jeden den — ráno přijedeme, večer topíte do izolované střechy.",
    stitek: "Hotovo za 1 den",
  },
  {
    nazev: "Zateplené dřevostavby",
    text: "Stavíme nízkoenergetické dřevostavby, kde je izolace součástí konstrukce od prvního návrhu. Difuzně otevřené skladby, suchá montáž, rychlá výstavba.",
    stitek: "Nízkoenergetický standard",
  },
  {
    nazev: "Dotace Nová zelená úsporám",
    text: "Pomůžeme s podklady pro dotaci — energetické hodnocení, výpis prací, fotodokumentace. Většina našich zákazníků na zateplení dotaci čerpá.",
    stitek: "Až statisíce zpět",
  },
];

const kroky = [
  { krok: "Prohlídka zdarma", text: "Přijedeme k vám kamkoli po Olomouci a okolí, změříme fasádu nebo půdu a řekneme na rovinu, co má smysl zateplit a co ne." },
  { krok: "Nabídka po vrstvách", text: "Dostanete rozpočet rozepsaný po jednotlivých vrstvách a pracích — vidíte, za co přesně platíte. Žádné položky typu „ostatní“." },
  { krok: "Realizace v termínu", text: "Domluvený termín platí. Fasáda rodinného domu obvykle 2–3 týdny, foukaná izolace půdy jeden den." },
];

export default function Page() {
  return (
    <main className="rv">
      {/* ===== HERO ===== */}
      <header className="rv-hero">
        <div className="rv-topbar">
          <span className="rv-wordmark" aria-label="REVAS">
            RE<span className="rv-wordmark-cut">VAS</span>
          </span>
          <span className="rv-topbar-loc">Zateplování · Olomouc</span>
        </div>

        <div className="rv-hero-grid">
          <div className="rv-hero-text">
            <p className="rv-eyebrow">REVAS s.r.o. — Dolní novosadská, Olomouc</p>
            <h1 className="rv-h1">
              <span className="rv-h1-line rv-h1-line-1">Teplo drží</span>
              <span className="rv-h1-line rv-h1-line-2">to, co není</span>
              <span className="rv-h1-line rv-h1-line-3">vidět.</span>
            </h1>
            <p className="rv-hero-perex">
              Zateplujeme fasády, půdy a dřevostavby na Olomoucku. Dobře provedená
              izolace zmizí pod omítkou — a vy ji pak dvacet let poznáváte jen na
              vyúčtování za topení.
            </p>
            <div className="rv-hero-cta">
              <a className="rv-btn" href="tel:+420777707971">Zavolat 777 707 971</a>
              <a className="rv-btn rv-btn-ghost" href="mailto:info@revas.cz">Napsat e‑mail</a>
            </div>
          </div>

          {/* Signature: řez zateplenou stěnou */}
          <div className="rv-cut" aria-hidden="true">
            <div className="rv-cut-layer rv-cut-l1"><span>fasádní omítka</span></div>
            <div className="rv-cut-layer rv-cut-l2"><span>výztužná síť</span></div>
            <div className="rv-cut-layer rv-cut-l3"><span>izolant 200 mm</span></div>
            <div className="rv-cut-layer rv-cut-l4"><span>lepicí vrstva</span></div>
            <div className="rv-cut-layer rv-cut-l5"><span>nosná stěna</span></div>
            <div className="rv-cut-temp rv-cut-temp-out">−12 °C venku</div>
            <div className="rv-cut-temp rv-cut-temp-in">+22 °C doma</div>
          </div>
        </div>

        <div className="rv-hero-strip" role="list" aria-label="Fakta o firmě">
          <span role="listitem">Prohlídka a nabídka zdarma</span>
          <span role="listitem">Certifikované zateplovací systémy</span>
          <span role="listitem">Olomouc a celá Morava</span>
        </div>
      </header>

      {/* ===== SEKCE 1: SLUŽBY / VRSTVY ===== */}
      <section className="rv-section rv-section-sluzby" aria-labelledby="sluzby-h">
        <div className="rv-section-head">
          <p className="rv-eyebrow">Co pro vás uděláme</p>
          <h2 className="rv-h2" id="sluzby-h">Zateplíme dům odshora dolů</h2>
        </div>

        <div className="rv-sluzby-grid">
          {sluzby.map((s) => (
            <article className="rv-karta" key={s.nazev}>
              <p className="rv-karta-stitek">{s.stitek}</p>
              <h3 className="rv-h3">{s.nazev}</h3>
              <p className="rv-karta-text">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="rv-vrstvy">
          <h3 className="rv-h3 rv-vrstvy-h">Z čeho se skládá poctivé zateplení</h3>
          <p className="rv-vrstvy-perex">
            Každou fasádu stavíme jako skladbu vrstev. Když jedna chybí nebo se
            ošidí, poznáte to za pár zim — plísní v rohu nebo prasklinami v omítce.
          </p>
          <ol className="rv-vrstvy-list">
            {vrstvy.map((v) => (
              <li className="rv-vrstva" key={v.n}>
                <span className="rv-vrstva-n" aria-hidden="true">{v.n}</span>
                <div>
                  <h4 className="rv-vrstva-nazev">{v.nazev}</h4>
                  <p className="rv-vrstva-popis">{v.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / JAK PRACUJEME ===== */}
      <section className="rv-section rv-section-duvera" aria-labelledby="duvera-h">
        <div className="rv-section-head">
          <p className="rv-eyebrow rv-eyebrow-inv">Proč REVAS</p>
          <h2 className="rv-h2" id="duvera-h">Stavíme na Moravě přes dvacet let</h2>
        </div>

        <div className="rv-duvera-grid">
          <div className="rv-duvera-text">
            <p>
              REVAS s.r.o. sídlí na Dolní novosadské v Olomouci. Začínali jsme
              dřevostavbami — a právě u nich se člověk naučí, že izolace není
              položka v rozpočtu, ale to hlavní, co dům dělá domem. Dnes zateplujeme
              hlavně starší rodinné a bytové domy, kterým fasáda vrátí druhý život.
            </p>
            <p>
              Pracujeme s vlastní partou, ne s najatými subdodavateli. Na stavbě
              potkáte pořád stejné lidi a na telefonu jednatele, ne call centrum.
            </p>
          </div>

          <ol className="rv-kroky">
            {kroky.map((k, i) => (
              <li className="rv-krok" key={k.krok}>
                <span className="rv-krok-n" aria-hidden="true">{i + 1}.</span>
                <div>
                  <h3 className="rv-krok-h">{k.krok}</h3>
                  <p className="rv-krok-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="rv-citace">
          <blockquote>
            „Půdu nám vyfoukali za dopoledne a hned první zimu jsme topili o třetinu
            míň. Přijeli, kdy slíbili, a uklidili po sobě.“
          </blockquote>
          <figcaption>— rodinný dům, Olomouc‑Nové Sady</figcaption>
        </figure>
      </section>
    </main>
  );
}
