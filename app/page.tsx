import { AiImage } from "./_ui";
import { BatchStatus } from "./motion";

const PRODUKTY = [
  {
    name: "Štěrbinové žlaby",
    tab: "DN400",
    text: "Úzká štěrbina odvede vodu z parkoviště i z průmyslové plochy — a v dlažbě skoro zmizí. Únosnost do tříd pro pojezd nákladních aut.",
  },
  {
    name: "Transportbeton",
    tab: "C25/30",
    text: "Namícháme beton přesně podle receptury a dovezeme ho autodomíchávačem — čerstvý, ve správné konzistenci a se zkušebními protokoly.",
  },
  {
    name: "Prvky pro komunikace",
    tab: "Obrubník",
    text: "Dlažba, obrubníky a zatravňovací tvárnice pro cesty, zpevněné plochy a terasy. Formáty Kostka, Čtverec i skladba B&BC.",
  },
  {
    name: "Prvky pro kanalizaci",
    tab: "Ø1000",
    text: "Skruže, šachty a přechodové díly pro výstavbu a opravy inženýrských sítí. Ucelený sortiment od vpusti po revizní šachtu.",
  },
  {
    name: "Armovna",
    tab: "Ø10–Ø32",
    text: "Výroba, doprava a montáž armovací oceli podle výkresu. Stříháme, ohýbáme a svařujeme armokoše přímo na míru stavby.",
  },
  {
    name: "Prvky pro stropní konstrukce",
    tab: "Strop",
    text: "Nosníky a vložky pro stropy, dopravní cesty a zpevnění průmyslových ploch. Systém, který se skládá rychle a drží normu.",
  },
];

const REFERENCE = [
  { misto: "Plzeň", akce: "Techmania Science Center" },
  { misto: "Neveklov", akce: "Dlažba B&BC Kostka" },
  { misto: "Sušice", akce: "Parkovací místa" },
  { misto: "Golčův Jeníkov – Vlkaneč", akce: "Odvodňovací žlaby" },
  { misto: "Trhanov", akce: "Dlažba Čtverec a Kostka, RD" },
  { misto: "Hradec u Stoda", akce: "Rodinný dům" },
];

export default function Page() {
  return (
    <main>
      <header className="top">
        <div className="wrap top__inner">
          <a className="brand" href="#katalog">
            <span className="brand__mark">
              B<span className="brand__amp">&amp;</span>BC
            </span>
            <span className="brand__sub">Betonárna &middot; prefabrikáty</span>
          </a>
          <span className="top__region">Jihočeský kraj &middot; České Budějovice</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Betonový štěrbinový žlab osazený v čerstvě položené dlažbě"
            className="hero__img"
          />
          <span className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="wrap hero__content">
          <p className="eyebrow">Betonové stavební prvky &amp; transportbeton</p>
          <h1 className="hero__title">
            Beton podle normy,<br />ne podle odhadu
          </h1>
          <p className="hero__lead">
            Vyrábíme a mícháme prvky pro odvodnění, komunikace a kanalizaci —
            od štěrbinového žlabu, který v ploše skoro zmizí, po autodomíchávač
            čerstvého betonu na vaši stavbu v okolí Českých Budějovic.
          </p>

          <BatchStatus />

          <ul className="specstrip" aria-label="Typické značení výrobků">
            <li className="tab">C25/30</li>
            <li className="tab">DN400</li>
            <li className="tab">Ø300</li>
            <li className="tab">Ø10–Ø32</li>
          </ul>
        </div>

        <div className="hero__scribe" aria-hidden="true">
          <span className="slot slot--scribe" />
        </div>
      </section>

      <section className="section section--catalog" id="katalog">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Katalog prvků</p>
            <h2 className="section__title">Co u nás odlijeme a namícháme</h2>
            <p className="section__intro">
              Každý prvek nese své skutečné značení — třídu betonu, jmenovitou
              světlost nebo profil oceli. Přesně podle něj se objednává na stavbu.
            </p>
          </div>

          <div className="formwork">
            <ul className="grid">
              {PRODUKTY.map((p) => (
                <li className="product" key={p.name}>
                  <span className="slot" aria-hidden="true" />
                  <div className="product__body">
                    <span className="tab tab--stamp">{p.tab}</span>
                    <h3 className="product__name">{p.name}</h3>
                    <p className="product__text">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="feature">
            <AiImage
              src="/section-1.webp"
              alt="Detail štěrbinového žlabu — úzká podélná drážka v betonovém dílci"
              className="feature__img"
            />
            <figcaption className="feature__cap">
              Řez štěrbinovým žlabem — tenká drážka, kterou jsme si půjčili i pro
              linku na téhle stránce.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--proof" id="reference">
        <div className="wrap proof__grid">
          <div className="proof__text">
            <p className="eyebrow">O nás &amp; reference</p>
            <h2 className="section__title">Odlito, dovezeno, osazeno</h2>
            <p className="proof__body">
              B &amp; BC vyrábí betonové stavební prvky a transportbeton pro
              Jihočeský kraj a okolí Českých Budějovic. Provozujeme vlastní
              betonárnu, armovnu i výrobu prefabrikátů — materiál dovezeme na
              stavbu a poradíme s výběrem tak, aby seděl profil, třída i termín.
            </p>
            <p className="proof__body">
              Nejsme sklad s katalogem odjinud. Beton mícháme sami a za každou
              recepturou stojí zkušební protokol.
            </p>

            <ul className="reflist">
              {REFERENCE.map((r) => (
                <li className="refrow" key={r.misto + r.akce}>
                  <span className="refrow__place">{r.misto}</span>
                  <span className="refrow__act">{r.akce}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="proof__figure">
            <AiImage
              src="/section-2.webp"
              alt="Hotová plocha z betonové dlažby B&BC s osazenými obrubníky"
              className="proof__img"
            />
            <figcaption className="feature__cap">
              Zpevněná plocha z dlažby B&amp;BC Kostka s betonovými obrubníky.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
