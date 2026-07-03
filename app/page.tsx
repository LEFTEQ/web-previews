import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terasy Café — privátní wellness, apartmány a vinárna v centru Liberce",
  description:
    "Privátní finská sauna a infrasauna, nadstandardní apartmány a vinárna v toskánském stylu v centru Liberce. Rezervujte wellness jen pro sebe — bez sdílení, bez spěchu.",
  openGraph: {
    title: "Terasy Café — privátní wellness a apartmány v Liberci",
    description:
      "Sauna jen pro vás, apartmány s hotelovým servisem a vinárna se zemskými víny z Moravy. V centru Liberce.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Terasy Café — domů">
          <span className="wordmark__terasy">Terasy</span>
          <span className="wordmark__cafe">Café</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#wellness">Wellness</a>
          <a href="#pobyt">Pobyt &amp; vinárna</a>
          <a className="topnav__call" href="tel:+420725522718">
            +420&nbsp;725&nbsp;522&nbsp;718
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <p className="hero__eyebrow">Privátní wellness · centrum Liberce</p>

        <h1 className="hero__title" id="hero-title">
          <span className="hero__line hero__line--1">Sauna,</span>
          <span className="hero__line hero__line--2">
            ve které <em>jste</em>
          </span>
          <span className="hero__line hero__line--3">jen vy dva.</span>
        </h1>

        <div className="hero__grid" aria-hidden="true">
          <div className="heat">
            <span className="heat__wave" />
            <span className="heat__wave" />
            <span className="heat__wave" />
          </div>
          <div className="heat__scale">
            <span>40&nbsp;°C</span>
            <span>infra</span>
            <span>90&nbsp;°C</span>
            <span>finská</span>
          </div>
        </div>

        <p className="hero__lede">
          Zavřete za sebou dveře, roztopíte finskou saunu nebo zapnete
          infrakabinu — a příští dvě hodiny patří vám. Žádní cizí lidé,
          žádné čekání na volné lehátko. K tomu apartmán s hotelovým
          servisem a sklenka moravského vína z vinárny o patro níž.
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="tel:+420725522718">
            Zavolat a rezervovat
          </a>
          <a className="btn btn--ghost" href="mailto:info@terasycafe.cz">
            Napsat e-mail
          </a>
        </div>
      </section>

      <section className="section section--wellness" id="wellness" aria-labelledby="wellness-title">
        <div className="section__head">
          <p className="section__label">Co si dopřejete</p>
          <h2 className="section__title" id="wellness-title">
            Wellness jen pro sebe
          </h2>
          <p className="section__intro">
            Privátní wellness znamená, že celý prostor rezervujete jen pro
            svou společnost. Setřesete starosti, prohřejete se a v klidu
            načerpáte energii — přesně tempem, které vám vyhovuje.
          </p>
        </div>

        <div className="treat">
          <img
            className="treat__img"
            src="/section-1.webp"
            alt="Prohřátý interiér privátního wellness v Terasy Café v Liberci"
            loading="lazy"
            width={1200}
            height={800}
          />
          <ol className="menu">
            <li className="menu__item">
              <span className="menu__temp">90°</span>
              <div className="menu__body">
                <h3>Finská sauna</h3>
                <p>
                  Suché sálavé teplo pro hluboké prohřátí. Poléváte podle
                  sebe, dýcháte pomalu, mezi vstupy chladíte.
                </p>
              </div>
            </li>
            <li className="menu__item">
              <span className="menu__temp">40°</span>
              <div className="menu__body">
                <h3>Infrasauna</h3>
                <p>
                  Mírnější, šetrnější k oběhu. Ideální, když chcete uvolnit
                  záda po sjezdovce nebo dni v kanceláři.
                </p>
              </div>
            </li>
            <li className="menu__item">
              <span className="menu__temp">2h</span>
              <div className="menu__body">
                <h3>Klid a soukromí</h3>
                <p>
                  Prostor máte celý pro sebe. Bez sdílení, bez spěchu —
                  odejdete, až budete opravdu odpočatí.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--pobyt" id="pobyt" aria-labelledby="pobyt-title">
        <div className="section__head">
          <p className="section__label">Zůstaňte přes noc</p>
          <h2 className="section__title" id="pobyt-title">
            Apartmány a vinárna
          </h2>
          <p className="section__intro">
            V centru Liberce, kousek od tramvaje i sjezdovek Ještědu.
            Moderní apartmány s hotelovým servisem a vinárna v toskánském
            stylu se zemskými víny od menších moravských vinařů.
          </p>
        </div>

        <div className="stay">
          <img
            className="stay__img"
            src="/section-2.webp"
            alt="Vinárna a kavárna Terasy Café v toskánském stylu v centru Liberce"
            loading="lazy"
            width={1200}
            height={800}
          />
          <div className="stay__panel">
            <ul className="facts">
              <li>
                <span className="facts__key">Apartmány</span>
                <span className="facts__val">32–80 m², až 6 hostů</span>
              </li>
              <li>
                <span className="facts__key">Vinárna &amp; kavárna</span>
                <span className="facts__val">Zemská a lahvová vína z Moravy</span>
              </li>
              <li>
                <span className="facts__key">Pro sportovce</span>
                <span className="facts__val">Lyžárna, sušák bot, dílna na kola</span>
              </li>
              <li>
                <span className="facts__key">Doprava</span>
                <span className="facts__val">Nabíječky pro elektromobily, úschovna kol</span>
              </li>
            </ul>
            <p className="stay__note">
              Ideální na prodloužený víkend: přes den Ještěd nebo procházka
              městem, večer sauna a sklenka vína, a spíte hned nad tím.
            </p>
            <a className="btn btn--solid" href="tel:+420606608081">
              Zavolat na ubytování
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
