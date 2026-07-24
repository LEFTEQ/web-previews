import { AiImage } from "./_ui";

const services = [
  {
    t: "Nové střechy na klíč",
    d: "Krov, kontralatě a laťování, pojistná hydroizolace a skládaná krytina Tondach nebo Bramac. Předáme hotovou, zaměřenou a odzkoušenou.",
  },
  {
    t: "Rekonstrukce a přeložení",
    d: "Sundáme starou krytinu, opravíme co drží, doplníme co chybí. Staré pálené tašky umíme i přeložit a vrátit zpět.",
  },
  {
    t: "Klempířina",
    d: "Okapy, svody, oplechování komínů a úžlabí z titanzinku i mědi. Spoje, které v olomouckém dešti netečou.",
  },
  {
    t: "Ploché střechy",
    d: "Fóliové i asfaltové pásy, zateplení a spádové vrstvy pro garáže, přístavby i bytové domy.",
  },
  {
    t: "Opravy a servis",
    d: "Po vichřici, po kroupách, nebo když jen zatéká u komína. Přijedeme, zajistíme a spravíme.",
  },
];

const trust = [
  "Přes 400 dokončených střech ve Chválkovicích, Hejčíně, Řepčíně i na vesnicích kolem Olomouce",
  "Certifikovaní pokládači skládaných krytin Tondach a Bramac",
  "Záruka na provedenou práci 5 let, na těsnost pojistné hydroizolace písemně",
  "Pevná cena z položkového rozpočtu — bez příplatků, které vyskočí až na faktuře",
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Nová skládaná střecha s měděným oplechováním nad Olomoucí"
            className="hero-img"
          />
        </div>
        <div className="hero-battens" aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />

        <div className="hero-inner">
          <p className="eyebrow reveal" style={{ animationDelay: "0.55s" }}>
            Pokrývačství · Olomouc a okolí · od roku 2004
          </p>

          <div className="lockup">
            <div className="crown" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, i) => (
                <i
                  key={i}
                  className="tile"
                  style={{ animationDelay: `${0.12 + i * 0.06}s` }}
                />
              ))}
            </div>
            <div className="wordmark reveal" style={{ animationDelay: "0.7s" }}>
              <span className="wm-name">Drnovský</span>
              <span className="wm-sub">pokrývačství — Olomouc</span>
            </div>
          </div>

          <h1 id="hero-title" className="reveal" style={{ animationDelay: "0.82s" }}>
            Střecha, která přečká<br />
            každý olomoucký liják.
          </h1>

          <p className="lede reveal" style={{ animationDelay: "0.92s" }}>
            Skládané krytiny, plech i měď. Od krovu po hřebenáč pokládáme každou
            řadu tak, aby vydržela déle než vaše hypotéka.
          </p>

          <div className="hero-cta reveal" style={{ animationDelay: "1s" }}>
            <a className="btn" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
            <span className="hero-note">Zaměření a rozpočet zdarma</span>
          </div>
        </div>
      </section>

      <section className="band band-light" aria-labelledby="sluzby-title">
        <div className="wrap grid-flow">
          <div className="col-lead">
            <p className="eyebrow eyebrow-dark">Co na střeše uděláme</p>
            <h2 id="sluzby-title">Od laťování<br />po hřebenáč.</h2>
            <p className="section-lede">
              Malá parta, žádní subdodavatelé, na které se svádí chyba. Bereme
              celou střechu jako jednu zakázku — od bednění až po poslední tašku
              u okapu.
            </p>
            <div className="col-figure">
              <AiImage
                src="/section-1.webp"
                alt="Pokrývač pokládá skládanou krytinu na laťování"
                className="figure-img"
              />
            </div>
          </div>

          <ol className="services">
            {services.map((s) => (
              <li key={s.t} className="service">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-dark" aria-labelledby="onas-title">
        <div className="wrap grid-flow reverse">
          <div className="col-figure figure-dark">
            <AiImage
              src="/section-2.webp"
              alt="Detail měděného oplechování hřebene a úžlabí"
              className="figure-img"
            />
          </div>

          <div className="col-lead">
            <p className="eyebrow">Kdo to dělá</p>
            <h2 id="onas-title">Řemeslo, za kterým<br />si stojíme.</h2>
            <p className="section-lede">
              Miroslav Drnovský dělá střechy v Olomouci a okolí od roku 2004. Na
              střechu leze ten, kdo vám podal ruku. Pracujeme s materiály, které
              známe do posledního šroubu — a co pokládáme, to i podepíšeme.
            </p>

            <ul className="trust">
              {trust.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <dl className="spec">
              <div>
                <dt>Sídlo</dt>
                <dd>Ukázková 123, 779 00 Olomouc</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420777111222">777 111 222</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@example.cz">info@example.cz</a>
                </dd>
              </div>
              <div>
                <dt>Působnost</dt>
                <dd>Olomouc a okolí do 30 km</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
