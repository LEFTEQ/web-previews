import type { CSSProperties } from "react";

export default function Page() {
  const naCepu = [
    {
      nazev: "Gose 10 %",
      pridavek: "Citrusy · Poupě",
      styl: "Svrchně kvašené, kysele slané",
      popis:
        "Starobylý německý styl s příjemnou kyselostí a jemnou slaností. Výrazná vůně calamansi, chuť po pomerančích a osvěžující hořkost červeného grepu.",
      cena: "75 / 95 Kč",
    },
    {
      nazev: "DDH Pale Ale 12 %",
      pridavek: "Double Dry Hopped · Poupě",
      styl: "Světlé svrchně kvašené",
      popis:
        "Ovesný a pšeničný slad pro jemnější strukturu, dvojí chmelení za studena. Tóny tropického ovoce, ananasu, broskve a mučenky.",
      cena: "69 / 89 Kč",
    },
    {
      nazev: "Ejlík 5 %",
      pridavek: "Marakuja · Poupě",
      styl: "Lehké svrchně kvašené",
      popis:
        "Lehounká verze pro zahnání žízně. Chuť a vůně exotické marakuji doplněné chmelovou linkou odrůdy Talus.",
      cena: "65 Kč / 0,4 l",
    },
    {
      nazev: "Osvald 10 %",
      pridavek: "Dalešice",
      styl: "Světlé výčepní, tankové",
      popis:
        "Chmeleno deseti českými chmely, jejichž odrůdy se běžně pěstují napříč českými a moravskými chmelnicemi. Klasika, co sedne každému.",
      cena: "51 / 65 Kč",
    },
  ];

  const obedovyTyden = [
    {
      den: "Pondělí",
      polevka: "Rajčatová polévka s těstovinou",
      hlavni: [
        "Zapečené těstoviny s kuřecím masem, květákem a sýrem — 170 Kč",
        "Vepřová kotleta na kmíně, rýže — 185 Kč",
        "Bramborové knedlíky plněné kachním masem, červené zelí na víně — 195 Kč",
      ],
    },
    {
      den: "Úterý",
      polevka: "Hovězí vývar s játrovou rýží",
      hlavni: [
        "Čočka na kyselo, sázené vejce, okurek, chléb — 170 Kč",
        "Pečené kuřecí stehno na bylinkách, rýže — 195 Kč",
        "Hovězí flamendr, bramboráčky — 195 Kč",
      ],
    },
    {
      den: "Středa",
      polevka: "Brokolicová polévka",
      hlavni: [
        "Domácí bramborové šišky s mákem a máslem — 170 Kč",
        "Plněná paprika, rajská omáčka, knedlík — 185 Kč",
        "Smažený sýr se šunkou, hranolky, tatarka — 195 Kč",
      ],
    },
    {
      den: "Čtvrtek",
      polevka: "Dýňová polévka s chilli",
      hlavni: [
        "Bramborový guláš, chléb — 170 Kč",
        "Caesar salát s kuřecím masem a krutony — 185 Kč",
        "Smažený řízek z krkovičky s česnekem, bramborový salát — 195 Kč",
      ],
    },
    {
      den: "Pátek",
      polevka: "Pikantní drůbeží vývar s rýžovými nudlemi",
      hlavni: [
        "Tagliatelle s pečenou cuketou, cherry rajčaty a parmazánem — 170 Kč",
        "Holandský řízek, bramborová kaše, okurek — 185 Kč",
        "Hovězí líčka na červeném víně, karlovarský knedlík — 195 Kč",
      ],
    },
  ];

  const otviraci = [
    { dny: "Pondělí–Čtvrtek", cas: "11:00–23:00" },
    { dny: "Pátek", cas: "11:00–24:00" },
    { dny: "Sobota", cas: "11:00–23:00" },
    { dny: "Neděle", cas: "zavřeno" },
  ];

  return (
    <main className="pd">
      <a className="pd-skip" href="#nacepu">
        Přejít na točené pivo
      </a>

      <header className="pd-top">
        <div className="pd-wordmark" aria-label="Pivovarský dům Poupě">
          <span className="pd-wordmark__pre">Pivovarský dům</span>
          <span className="pd-wordmark__main">Poupě</span>
        </div>
        <nav className="pd-nav" aria-label="Hlavní">
          <a href="#nacepu">Na čepu</a>
          <a href="#obedy">Obědy</a>
          <a href="#kdejsme">Kde nás najdete</a>
        </nav>
        <a className="pd-rez" href="tel:+420730151903">
          Rezervovat · 730 151 903
        </a>
      </header>

      <section className="pd-hero" aria-labelledby="pd-hero-nadpis">
        <div className="pd-hero__media">
          <img
            src="/hero.webp"
            alt="Nálevna Pivovarského domu Poupě s výčepem a lesklými pivními tanky"
            width={1600}
            height={1000}
          />
        </div>
        <div className="pd-hero__panel">
          <p className="pd-eyebrow">Pivnice a minipivovar · Dominikánská, Brno</p>
          <h1 id="pd-hero-nadpis" className="pd-hero__nadpis">
            Tanková jedenáctka,
            <br />
            co teče přímo
            <br />
            <em>od sklepa k výčepu.</em>
          </h1>
          <p className="pd-hero__lead">
            Znovuzrozená pivovarnická tradice v centru Brna. Sedne si tu celá
            parta — špičkové tankové pivo, vlastní várky od Poupěte a poctivá
            kuchyně z lokálních surovin.
          </p>
          <div className="pd-hero__akce">
            <a className="pd-btn" href="#nacepu">
              Co máme na čepu
            </a>
            <a className="pd-btn pd-btn--ghost" href="tel:+420730151903">
              Zarezervovat stůl
            </a>
          </div>
          <dl className="pd-hours">
            {otviraci.map((o) => (
              <div
                key={o.dny}
                className={
                  "pd-hours__row" +
                  (o.cas === "zavřeno" ? " pd-hours__row--off" : "")
                }
              >
                <dt>{o.dny}</dt>
                <dd>{o.cas}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pd-section pd-tap" id="nacepu" aria-labelledby="pd-tap-nadpis">
        <div className="pd-section__head">
          <p className="pd-kicker">Aktuálně na čepu</p>
          <h2 id="pd-tap-nadpis">Osm kohoutů, jedna tanková stálice</h2>
          <p className="pd-section__intro">
            Na čepu vždycky najdete dokonale vychytanou tankovou jedenáctku
            z Dalešic. Vedle ní vaříme pod značkou Poupě vlastní várky — čerpáme
            z dalešické technologie, ale přidáváme neotřelé chutě a styly
            s vybroušenou pitelností.
          </p>
        </div>

        <ol className="pd-taplist">
          {naCepu.map((p, i) => (
            <li className="pd-tapcard" key={p.nazev}>
              <span
                className="pd-tapcard__num"
                style={{ "--i": String(i + 1) } as CSSProperties}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pd-tapcard__body">
                <h3>{p.nazev}</h3>
                <p className="pd-tapcard__meta">{p.pridavek}</p>
                <p className="pd-tapcard__styl">{p.styl}</p>
                <p className="pd-tapcard__popis">{p.popis}</p>
              </div>
              <span className="pd-tapcard__cena">{p.cena}</span>
            </li>
          ))}
        </ol>
        <p className="pd-tap__pozn">
          Nabídka se točí podle sezóny — síla i styl piva respektují roční
          období. Zeptejte se u výčepu, co zrovna dozrálo.
        </p>
      </section>

      <section className="pd-section pd-lunch" id="obedy" aria-labelledby="pd-lunch-nadpis">
        <div className="pd-lunch__grid">
          <div className="pd-lunch__intro">
            <p className="pd-kicker">Polední menu</p>
            <h2 id="pd-lunch-nadpis">Obědy od pondělí do pátku</h2>
            <p>
              Každý den polévka, čtyři hlavní jídla a jedna stálice, co tu
              zůstává celý týden. Cena menu zahrnuje polévku nebo salát.
            </p>
            <p className="pd-lunch__stal">
              <strong>Stálice týdne:</strong> Kuřecí supreme, grilovaná zelenina,
              mačkané brambory — 225 Kč
            </p>
            <figure className="pd-lunch__foto">
              <img
                src="/section-1.webp"
                alt="Talíř s poctivým obědem z kuchyně Pivovarského domu Poupě"
                width={900}
                height={700}
              />
            </figure>
          </div>

          <div className="pd-lunch__dny">
            {obedovyTyden.map((d) => (
              <article className="pd-day" key={d.den}>
                <h3 className="pd-day__nazev">{d.den}</h3>
                <p className="pd-day__polevka">{d.polevka}</p>
                <ul>
                  {d.hlavni.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-section pd-about" id="kdejsme" aria-labelledby="pd-about-nadpis">
        <figure className="pd-about__foto">
          <img
            src="/section-2.webp"
            alt="Interiér Pivovarského domu Poupě na Dominikánské v Brně"
            width={1200}
            height={900}
          />
        </figure>
        <div className="pd-about__text">
          <p className="pd-kicker">Kde nás najdete</p>
          <h2 id="pd-about-nadpis">Dominikánská, kousek od náměstí Svobody</h2>
          <p>
            Naším cílem je otevřít vám nové obzory pivního světa při garanci
            prvotřídní kvality. Sázíme na kvalitní čerstvé suroviny a pivo, které
            respektuje roční období — od klasické tankové jedenáctky po
            extravagantní várky Poupěte.
          </p>
          <dl className="pd-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Dominikánská 342/15, Brno</dd>
            </div>
            <div>
              <dt>Rezervace</dt>
              <dd>
                <a href="tel:+420730151903">+420 730 151 903</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:provozni.poupe@pivovar-dalesice.cz">
                  provozni.poupe@pivovar-dalesice.cz
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
