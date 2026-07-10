import type { CSSProperties } from "react";

const services = [
  {
    reg: "01",
    name: "Vizuální identita",
    lead: "Značka, která drží od vizitky po fasádu.",
    body: "Logo, barevnost, typografie a pravidla použití. Dostanete brand manuál i připravené šablony, ať vám značka nedrhne ani po roce.",
    tags: ["Logo & wordmark", "Brand manuál", "Barvy & typo"],
  },
  {
    reg: "02",
    name: "Sazba pro tisk",
    lead: "Data, která tiskárna vezme bez jediného telefonátu.",
    body: "Katalogy, knihy, letáky i obaly. CMYK, spadávky, ořezové značky, přetisk černé — připraveno přesně tak, jak to výroba potřebuje.",
    tags: ["PDF/X pro tisk", "Spadávka 3 mm", "Kontrola preflight"],
  },
  {
    reg: "03",
    name: "Digitál & web",
    lead: "Tatáž značka, jen ve světle displeje.",
    body: "Bannery, sociální sítě, prezentace a jednoduché weby. Přenášíme tiskovou pečlivost do pixelů — s ohledem na rychlost i čitelnost.",
    tags: ["Sociální sítě", "Prezentace", "Web na míru"],
  },
];

const press = [
  { plate: "C", label: "Cyan", ink: "#00a9e0" },
  { plate: "M", label: "Magenta", ink: "#e5007e" },
  { plate: "Y", label: "Yellow", ink: "#ffcc00" },
  { plate: "K", label: "Key", ink: "#1a1a1a" },
];

const proof = [
  {
    q: "Předali jsme jim rozpracovaný katalog tři dny před uzávěrkou. Data byla čistá, tiskárna nevrátila jedinou stránku.",
    who: "Marketing, výrobní firma z Kuřimi",
  },
  {
    q: "Rebranding jsme rozjeli u kávy na Zelňáku. Za měsíc jsme měli identitu, kterou v oboru nikdo nemá.",
    who: "Zakladatelka bistra, Brno-střed",
  },
];

export default function Page() {
  return (
    <main className="g-main">
      <header className="g-top">
        <a className="g-mark" href="#top" aria-label="Gradiko — grafické studio Brno">
          <span className="g-mark__word">Gradiko</span>
          <span className="g-mark__reg">grafické studio · Brno</span>
        </a>
        <nav className="g-nav" aria-label="Hlavní">
          <a href="#sluzby">Co děláme</a>
          <a href="#studio">Studio</a>
          <a className="g-nav__cta" href="#sluzby">Chci návrh</a>
        </nav>
      </header>

      <section className="g-hero" id="top">
        <div className="g-hero__grid">
          <div className="g-hero__copy">
            <p className="g-eyebrow">Sazba · identita · předtisková příprava</p>
            <h1 className="g-hero__title">
              Grafika, která projde
              <span className="g-hero__ink"> tiskem napoprvé</span>.
            </h1>
            <p className="g-hero__lead">
              Jsme brněnské grafické studio. Navrhujeme značky a chystáme data
              tak, aby na výstupu z tiskového stroje seděla každá barva i každý
              milimetr spadávky. Bez dohadování, bez reklamací.
            </p>
            <div className="g-hero__cta">
              <a className="g-btn g-btn--solid" href="#sluzby">
                Domluvit zakázku
              </a>
              <a className="g-btn g-btn--ghost" href="#studio">
                Jak pracujeme
              </a>
            </div>

            <ul className="g-registration" aria-label="Soutiskové barvy">
              {press.map((p) => (
                <li key={p.plate} style={{ "--ink": p.ink } as CSSProperties}>
                  <span className="g-registration__dot" aria-hidden="true" />
                  <span className="g-registration__plate">{p.plate}</span>
                  <span className="g-registration__label">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="g-hero__plate">
            <img
              src="/hero.webp"
              alt="Detail archu s barevnými soutiskovými značkami a řezy grafiky připravené k tisku"
              className="g-hero__img"
            />
            <figcaption className="g-hero__caption">
              <span>Kontrolní pruh</span>
              <span>100 % soutisk CMYK</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="g-services" id="sluzby" aria-labelledby="services-title">
        <div className="g-section-head">
          <p className="g-eyebrow">Nabídka</p>
          <h2 className="g-section-title" id="services-title">
            Tři barvy, jeden soutisk
          </h2>
          <p className="g-section-note">
            Značka, tisk a digitál se u nás potkávají v jednom registru — jako
            barvy v soutisku. Vyberte, kde chcete začít.
          </p>
        </div>

        <div className="g-cards">
          {services.map((s) => (
            <article className="g-card" key={s.reg}>
              <span className="g-card__reg" aria-hidden="true">
                {s.reg}
              </span>
              <h3 className="g-card__name">{s.name}</h3>
              <p className="g-card__lead">{s.lead}</p>
              <p className="g-card__body">{s.body}</p>
              <ul className="g-card__tags">
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="g-strip">
          <img
            src="/section-1.webp"
            alt="Rozpracovaný grafický návrh na monitoru vedle vytištěných nátisků na stole ve studiu"
            className="g-strip__img"
          />
          <figcaption className="g-strip__cap">
            Od návrhu na obrazovce k nátisku na stole — každou barvu vidíme
            dřív, než jde do velkého nákladu.
          </figcaption>
        </figure>
      </section>

      <section className="g-studio" id="studio" aria-labelledby="studio-title">
        <div className="g-studio__grid">
          <figure className="g-studio__media">
            <img
              src="/section-2.webp"
              alt="Pracovní stůl grafického studia s pantonovým vzorníkem, lupou a rozloženými návrhy"
              className="g-studio__img"
            />
          </figure>

          <div className="g-studio__copy">
            <p className="g-eyebrow">Studio</p>
            <h2 className="g-section-title" id="studio-title">
              Malé studio, které rozumí stroji
            </h2>
            <p className="g-studio__lead">
              Gradiko vede grafik, který léta stál u tiskového stroje. Proto
              nekreslíme jen hezké obrázky — víme, co udělá 300% pokrytí barvou,
              proč se textová čerň dělá jinak než plocha a kdy je lepší papír
              matný. Data odevzdáváme připravená k výrobě, ne k opravování.
            </p>

            <dl className="g-facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Brno · osobně i online po celé ČR</dd>
              </div>
              <div>
                <dt>Data pro tisk</dt>
                <dd>PDF/X, ověřená před odesláním</dd>
              </div>
              <div>
                <dt>První návrh</dt>
                <dd>obvykle do 5 pracovních dnů</dd>
              </div>
            </dl>

            <div className="g-proof">
              {proof.map((p) => (
                <blockquote className="g-proof__item" key={p.who}>
                  <p>{p.q}</p>
                  <cite>{p.who}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
