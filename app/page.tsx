import type { CSSProperties } from "react";

export default function Page() {
  const piva = [
    {
      cislo: "11°",
      nazev: "Skalák",
      typ: "Světlý ležák",
      popis:
        "Vlajková loď z Malého Rohozce. Řízne hořkostí žateckého chmele, dopije se hladce. Pivo, které si na výčepu poznáte poslepu.",
      alk: "4,9 %",
      barva: "12 EBC",
    },
    {
      cislo: "12°",
      nazev: "Podskalák",
      typ: "Světlý ležák prémiový",
      popis:
        "Delší ležení ve sklepě, plnější tělo, medová dozvuk. Na tohle chodí štamgasti z libereckých hospod dvakrát.",
      alk: "5,2 %",
      barva: "14 EBC",
    },
    {
      cislo: "13°",
      nazev: "Skalní tmavé",
      typ: "Tmavý speciál",
      popis:
        "Praženým sladem k pečeni i k svíčkové. Karamel, káva, kapka hořkosti na konec. Zima na Ještědu ho má ráda.",
      alk: "5,5 %",
      barva: "90 EBC",
    },
    {
      cislo: "Cherry",
      nazev: "Cherry Beer",
      typ: "Ovocný speciál",
      popis:
        "Višeň z okolních sadů, teď i v nealko verzi. Oceněné pivo, které vítá lásky čas — a překvapí i toho, kdo „ovocná piva nepije\u201c.",
      alk: "4,5 %",
      barva: "—",
    },
  ];

  const kroky = [
    {
      krok: "Varna",
      popis:
        "Slad, voda z Českého ráje, chmel. Ve varně se rozhoduje o sladině — základ chuti, který nejde ošidit.",
    },
    {
      krok: "Spilka",
      popis:
        "Otevřené kvasné kádě. Kvasnice pracují po svém, my jim jen držíme teplotu a čas. Žádný spěch.",
    },
    {
      krok: "Ležácké sklepy",
      popis:
        "Pivo zraje v chladu, klidně týdny. Proto na exkurzi doporučujeme teple obléknout i v létě.",
    },
    {
      krok: "Ležácký tank",
      popis:
        "Třešnička prohlídky: ochutnávka rovnou z tanku. Nefiltrované, nepasterované, tak jak má být.",
    },
  ];

  return (
    <main className="pr">
      {/* HERO */}
      <header className="pr-hero">
        <div className="pr-hero__bar">
          <a className="pr-mark" href="#" aria-label="Pivovar Rohozec, úvod">
            <span className="pr-mark__word">ROHOZEC</span>
            <span className="pr-mark__est">Malý Rohozec · od 1850</span>
          </a>
          <nav className="pr-nav" aria-label="Hlavní">
            <a href="#piva">Naše piva</a>
            <a href="#vyroba">Jak vaříme</a>
            <a href="#navsteva">Exkurze</a>
          </nav>
        </div>

        <div className="pr-hero__grid">
          <div className="pr-hero__copy">
            <p className="pr-eyebrow">Minipivovar · Malý Rohozec u Turnova · Liberecký kraj</p>
            <h1 className="pr-hero__title">
              Pivo, které<br />
              zraje ve <em>skále</em>.
            </h1>
            <p className="pr-hero__lead">
              Vaříme na Malém Rohozci pod Českým rájem od poloviny
              19. století. Nefiltrovaný Skalák, tmavý speciál i oceněné
              višňové pivo — a sklepy vytesané do pískovce, kde všechno
              v klidu doleží.
            </p>
            <div className="pr-hero__cta">
              <a className="pr-btn pr-btn--solid" href="#navsteva">
                Přijít na exkurzi
              </a>
              <a className="pr-btn pr-btn--ghost" href="#piva">
                Ochutnat sortiment
              </a>
            </div>
          </div>

          <figure className="pr-hero__media">
            <img
              src="/hero.webp"
              alt="Čerstvě natočené světlé pivo Skalák z pivovaru Rohozec"
              className="pr-hero__img"
              width={880}
              height={1100}
            />
            <figcaption className="pr-hero__tag">
              <span>Skalák 11°</span>
              <span>z tanku, dnes ráno</span>
            </figcaption>
          </figure>
        </div>

        <dl className="pr-facts">
          <div>
            <dt>Od roku</dt>
            <dd>1850</dd>
          </div>
          <div>
            <dt>Vaříme</dt>
            <dd>ležáky &amp; speciály</dd>
          </div>
          <div>
            <dt>Kde</dt>
            <dd>Malý Rohozec 29</dd>
          </div>
          <div>
            <dt>Sklepy</dt>
            <dd>v pískovci</dd>
          </div>
        </dl>
      </header>

      {/* SEKCE 1 — PIVA */}
      <section className="pr-section" id="piva" aria-labelledby="piva-h">
        <div className="pr-section__head">
          <p className="pr-eyebrow">Sortiment</p>
          <h2 id="piva-h" className="pr-h2">
            Na výčepu i do baňky
          </h2>
          <p className="pr-section__lead">
            Stálice, které točíme celý rok, a speciály, co se objeví a zas
            zmizí. Stupňovitost čtěte jako řádek na tapu — od svěžího
            jedenáctku po tmavý třináctku.
          </p>
        </div>

        <ul className="pr-tap">
          {piva.map((p) => (
            <li className="pr-tap__row" key={p.nazev}>
              <span className="pr-tap__deg" aria-hidden="true">
                {p.cislo}
              </span>
              <div className="pr-tap__main">
                <h3 className="pr-tap__name">{p.nazev}</h3>
                <p className="pr-tap__type">{p.typ}</p>
                <p className="pr-tap__desc">{p.popis}</p>
              </div>
              <div className="pr-tap__meta">
                <span>
                  <b>{p.alk}</b>
                  <small>alkohol</small>
                </span>
                <span>
                  <b>{p.barva}</b>
                  <small>barva</small>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="pr-figure">
          <img
            src="/section-1.webp"
            alt="Detail várečné soupravy a chmelového nálevu při vaření piva v Rohozci"
            width={1200}
            height={720}
          />
          <figcaption>
            Ve varně na Malém Rohozci — sladina těsně před chmelovarem.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — VÝROBA / EXKURZE */}
      <section className="pr-section pr-section--dark" id="vyroba" aria-labelledby="vyroba-h">
        <div className="pr-section__head">
          <p className="pr-eyebrow pr-eyebrow--light">Jak to u nás chodí</p>
          <h2 id="vyroba-h" className="pr-h2">
            Od sladu ke sklepu
          </h2>
          <p className="pr-section__lead">
            Cesta piva pivovarem je pořád stejná a záměrně bez zkratek.
            Na exkurzi si ji projdete krok po kroku — a na konci ochutnáte
            přímo z ležáckého tanku.
          </p>
        </div>

        <ol className="pr-steps">
          {kroky.map((k, i) => (
            <li className="pr-steps__item" key={k.krok} style={{ "--i": i } as CSSProperties}>
              <span className="pr-steps__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pr-steps__title">{k.krok}</h3>
              <p className="pr-steps__desc">{k.popis}</p>
            </li>
          ))}
        </ol>

        <div className="pr-visit">
          <figure className="pr-visit__media">
            <img
              src="/section-2.webp"
              alt="Ležácké pískovcové sklepy pivovaru Rohozec s dřevěnými sudy"
              width={900}
              height={640}
            />
          </figure>
          <div className="pr-visit__copy">
            <h3 className="pr-visit__h">Přijďte se podívat do skály</h3>
            <p>
              Zkušený průvodce — a někdy i sládek — vás provede varnou,
              spilkou i ležáckými sklepy. Prohlídka trvá zhruba 1 až
              1,5 hodiny a končí ochutnávkou z tanku. Sezona běží od
              začátku dubna do poloviny září.
            </p>
            <ul className="pr-visit__list">
              <li>Sezona: duben – 13. září</li>
              <li>Trvání: 1 – 1,5 hodiny</li>
              <li>Rada: teple se oblečte i v létě, ve sklepě je chladno</li>
            </ul>
            <a className="pr-btn pr-btn--solid" href="#navsteva" id="navsteva">
              Domluvit prohlídku
            </a>
            <p className="pr-visit__contact">
              Expedice a rezervace: <a href="tel:+420481323166">+420 481 323 166</a>
              <br />
              Malý Rohozec 29, 511 01 Turnov
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
