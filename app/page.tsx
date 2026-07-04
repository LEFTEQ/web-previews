import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tombek Company — schodiště na míru, Brno",
  description:
    "Truhlářské schodiště na míru z Brna. Dřevěná, kombinovaná i samonosná schodiště — zaměření, výroba a montáž od jednoho mistra. Reference z domů i bytů po celé jižní Moravě.",
  openGraph: {
    title: "Tombek Company — schodiště na míru, Brno",
    description:
      "Truhlářské schodiště na míru z Brna. Dřevo, ocel, kámen. Zaměření, výroba, montáž.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const rungs = [
  {
    no: "01",
    title: "Zaměření u vás",
    body: "Přijedu k vám do rozestavěného domu i do hotového bytu. Laserem změřím výšku podlaží, stupně dopočítám tak, aby se po nich chodilo přirozeně — ne aby seděly jen na papíře.",
  },
  {
    no: "02",
    title: "Návrh a dřevo",
    body: "Vyberete si materiál — dub, jasan, buk nebo kombinaci dřeva s ocelí. Ukážu vám vzorky i skutečnou kresbu letokruhů, ne render. Kotvení a nosnost řeším ještě před tím, než se cokoli řeže.",
  },
  {
    no: "03",
    title: "Výroba v dílně",
    body: "Stupně, madla i zábradlí vyrábím ve vlastní dílně na Brněnsku. Každý spoj lícuje, hrany jsou sražené na dotek. Nic se neobrušuje až na stavbě.",
  },
  {
    no: "04",
    title: "Montáž a úklid",
    body: "Schodiště usadím za den až dva, s minimem prachu. Odejdu, až po mně zůstane jen schodiště — ne nepořádek. Na konstrukci dávám záruku pět let.",
  },
];

const types = [
  {
    label: "Schodnicová",
    desc: "Stupně nesené po stranách masivními schodnicemi. Klasika do rodinných domů, kde má dřevo hrát hlavní roli.",
  },
  {
    label: "Samonosná",
    desc: "Stupně kotvené do zdi, vizuálně bez opory. Vzdušné řešení do moderních interiérů a podkroví.",
  },
  {
    label: "Vřetenová",
    desc: "Točité schodiště kolem středového sloupu. Když je málo místa a přesto to má mít eleganci.",
  },
  {
    label: "Dřevo & ocel",
    desc: "Dubové stupně, černá ocelová konstrukce a nerezová madla. Průmyslový charakter s teplem dřeva.",
  },
];

export default function Page() {
  return (
    <main className="tb">
      <header className="tb-nav">
        <a className="tb-mark" href="#top" aria-label="Tombek Company — úvod">
          <span className="tb-mark__t">TOMBEK</span>
          <span className="tb-mark__sub">schodiště · Brno</span>
        </a>
        <nav className="tb-navlinks" aria-label="Hlavní">
          <a href="#druhy">Druhy schodišť</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#o-dilne">O dílně</a>
        </nav>
      </header>

      <section className="tb-hero" id="top">
        <div className="tb-hero__img">
          <img
            src="/hero.webp"
            alt="Dřevěné schodiště na míru s masivními dubovými stupni v brněnském rodinném domě"
          />
        </div>
        <div className="tb-hero__panel">
          <p className="tb-eyebrow">Truhlářská dílna · Brno a jižní Morava</p>
          <h1 className="tb-h1">
            Schodiště,<br />
            <span className="tb-h1__accent">po kterém se chodí</span><br />
            celý život.
          </h1>
          <p className="tb-lead">
            Navrhuji, vyrábím a montuji schodiště z masivu na míru vašemu
            domu. Ne katalogové kusy — každý stupeň sedí na milimetr do
            vašeho podlaží.
          </p>
          <div className="tb-cta">
            <a className="tb-btn" href="#postup">Chci nacenit schodiště</a>
            <a className="tb-btn tb-btn--ghost" href="#druhy">
              Prohlédnout druhy
            </a>
          </div>
        </div>
        <ul className="tb-riser" aria-hidden="true">
          <li><span>dub</span></li>
          <li><span>jasan</span></li>
          <li><span>buk</span></li>
          <li><span>ocel</span></li>
        </ul>
      </section>

      <section className="tb-sec" id="druhy" aria-labelledby="druhy-h">
        <div className="tb-sec__head">
          <p className="tb-eyebrow">Co pro vás udělám</p>
          <h2 className="tb-h2" id="druhy-h">Druhy schodišť z dílny</h2>
          <p className="tb-sub">
            Podle prostoru, podlaží i stylu domu vám doporučím konstrukci,
            která se do interiéru hodí — a hlavně vydrží.
          </p>
        </div>

        <div className="tb-split">
          <ul className="tb-types">
            {types.map((t) => (
              <li className="tb-type" key={t.label}>
                <h3 className="tb-type__h">{t.label}</h3>
                <p className="tb-type__d">{t.desc}</p>
              </li>
            ))}
          </ul>
          <figure className="tb-figure">
            <img
              src="/section-1.webp"
              alt="Detail spoje dubového stupně schodiště s černou ocelovou konstrukcí"
            />
            <figcaption>
              Dub s černou ocelí — nejžádanější kombinace do brněnských
              novostaveb.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="tb-sec tb-sec--dark" id="postup" aria-labelledby="postup-h">
        <div className="tb-sec__head">
          <p className="tb-eyebrow tb-eyebrow--light">Krok za krokem</p>
          <h2 className="tb-h2" id="postup-h">Jak to probíhá</h2>
        </div>
        <ol className="tb-steps">
          {rungs.map((r) => (
            <li className="tb-step" key={r.no}>
              <span className="tb-step__no">{r.no}</span>
              <div>
                <h3 className="tb-step__h">{r.title}</h3>
                <p className="tb-step__b">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="tb-sec" id="o-dilne" aria-labelledby="about-h">
        <div className="tb-about">
          <figure className="tb-figure tb-figure--tall">
            <img
              src="/section-2.webp"
              alt="Truhlář v dílně opracovává dřevěný stupeň schodiště"
            />
          </figure>
          <div className="tb-about__text">
            <p className="tb-eyebrow">O dílně</p>
            <h2 className="tb-h2" id="about-h">
              Jeden mistr od zaměření po poslední stupeň.
            </h2>
            <p className="tb-p">
              Tombek Company je malá truhlárna na Brněnsku. Nedělám sériové
              schody z půjčovny strojů — každou zakázku vedu od prvního
              zaměření až po montáž sám. Díky tomu vím, proč který spoj drží
              a proč zrovna toto madlo padne do ruky.
            </p>
            <p className="tb-p">
              Za roky práce jsem osadil schodiště do rodinných domů v
              Kohoutovicích, do rekonstruovaných bytů v centru i do
              podkrovních ateliérů. Nejraději pracuji s domácím dubem a
              jasanem — dřevem, které za deset let vypadá líp než v den
              montáže.
            </p>
            <dl className="tb-facts">
              <div>
                <dt>Kde stavím</dt>
                <dd>Brno a jižní Morava</dd>
              </div>
              <div>
                <dt>Záruka na konstrukci</dt>
                <dd>5 let</dd>
              </div>
              <div>
                <dt>Materiál</dt>
                <dd>masivní dub, jasan, buk, ocel</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
