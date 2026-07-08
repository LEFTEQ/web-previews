import type { CSSProperties } from "react";

const pobocka = {
  mesto: "České Budějovice",
  ulice: "Okružní 2615",
  otevreno: "Po–Pá 7:00–16:00 · So 8:00–11:00",
};

const sortiment = [
  {
    ral: "RAL 3009",
    barva: "#8A3324",
    nazev: "Trapézový plech TR18",
    odstin: "tmavě červená",
    kod: "EVROTR18CH03",
    rozmer: "0,5 × 1110 × 3000 mm · PE25",
    cena: "1 033,34",
    puvodni: "1 476,20",
    sklad: "skladem > 20 ks",
  },
  {
    ral: "RAL 8017",
    barva: "#45322E",
    nazev: "Trapézový plech TR18",
    odstin: "hnědá",
    kod: "EVROTR18HN04",
    rozmer: "0,5 × 1110 × 4000 mm · PE25",
    cena: "1 378,07",
    puvodni: "1 968,67",
    sklad: "skladem > 20 ks",
  },
  {
    ral: "RAL 7016",
    barva: "#383E42",
    nazev: "Trapézový plech TR18",
    odstin: "antracit",
    kod: "EVROTR18AN02",
    rozmer: "0,5 × 1110 × 2000 mm · PE25",
    cena: "689,46",
    puvodni: "984,94",
    sklad: "skladem > 20 ks",
  },
];

const oddeleni = [
  { c: "01", n: "Střešní krytiny", d: "Beton, pálená, plech i šindel — Bramac, Tondach, Ruukki skladem." },
  { c: "02", n: "Okapy a klempířina", d: "Titanzinek i lakovaný plech, ohýbáme přesně na míru vaší střechy." },
  { c: "03", n: "Střešní okna", d: "Okna, lemování a doplňky s odborným zaměřením zdarma." },
  { c: "04", n: "Fólie a izolace", d: "Difúzní fólie a tepelné izolace na míru skladby střechy." },
  { c: "05", n: "Dřevosortiment", d: "Latě, kontralatě, řezivo — nařežeme a naložíme na jeden zátah." },
  { c: "06", n: "Spojovací materiál", d: "Vruty, tmely, kotvy a nářadí. Půjčovna nářadí přímo na pobočce." },
];

export default function Page() {
  return (
    <main className="pch">
      <header className="pch-top">
        <a className="pch-brand" href="#" aria-label="První chodská, stavebniny">
          <span className="pch-brand-row">
            <span className="pch-brand-num">1.</span>
            <span className="pch-brand-name">CHODSKÁ</span>
          </span>
          <span className="pch-brand-sub">Stavebniny &amp; střechy · od 1994</span>
        </a>
        <span className="pch-loc">{pobocka.mesto}</span>
      </header>

      <section className="pch-hero" aria-labelledby="pch-hero-nad">
        <div className="pch-hero-media">
          <img
            src="/hero.webp"
            alt="Sklad střešních krytin a trapézových plechů První chodské v Českých Budějovicích"
            className="pch-hero-img"
          />
          <div className="pch-hero-scrim" aria-hidden="true" />
        </div>

        <div className="pch-hero-body">
          <p className="pch-eyebrow">Stavebniny se střešní specializací · {pobocka.mesto}</p>
          <h1 id="pch-hero-nad" className="pch-h1">
            Střechu spočítáme<br />
            <span className="pch-h1-em">do posledního vrutu.</span>
          </h1>
          <p className="pch-lead">
            Přineste rozměry, my dodáme krytinu, klempířinu, fólie i řezivo
            na jednu paletu. Kalkulace střechy zdarma, dovoz materiálu
            po celém Českobudějovicku.
          </p>
          <div className="pch-hero-actions">
            <a className="pch-btn pch-btn-primary" href="#kalkulace">Nezávaznou kalkulaci</a>
            <a className="pch-btn pch-btn-ghost" href="#sortiment">Prohlédnout sortiment</a>
          </div>
        </div>

        <ul className="pch-swatches" aria-label="Odstíny plechu skladem">
          {sortiment.map((s) => (
            <li key={s.ral} className="pch-swatch">
              <span className="pch-swatch-chip" style={{ background: s.barva } as CSSProperties} aria-hidden="true" />
              <span className="pch-swatch-ral">{s.ral}</span>
              <span className="pch-swatch-name">{s.odstin}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pch-akce" id="sortiment" aria-labelledby="pch-akce-nad">
        <div className="pch-sec-head">
          <p className="pch-eyebrow pch-eyebrow-red">Akce na skladě</p>
          <h2 id="pch-akce-nad" className="pch-h2">Trapézový plech TR18, tři odstíny, hned k odvozu</h2>
          <p className="pch-sec-note">
            Ceny s DPH za kus. Škrtnutá cena je běžná, tučná je akční. Dostupnost
            ověříme na pobočce, než vyrazíte.
          </p>
        </div>

        <ol className="pch-cards">
          {sortiment.map((s) => (
            <li key={s.kod} className="pch-card">
              <span className="pch-card-band" style={{ background: s.barva } as CSSProperties} aria-hidden="true" />
              <div className="pch-card-body">
                <div className="pch-card-ral">
                  <span className="pch-card-ral-tag">{s.ral}</span>
                  <span className="pch-card-odstin">{s.odstin}</span>
                </div>
                <h3 className="pch-card-name">{s.nazev}</h3>
                <p className="pch-card-rozmer">{s.rozmer}</p>
                <p className="pch-card-kod">Kód {s.kod} · {s.sklad}</p>
                <div className="pch-card-cena">
                  <span className="pch-card-cena-now">{s.cena} Kč</span>
                  <span className="pch-card-cena-old">{s.puvodni} Kč</span>
                </div>
                <a className="pch-card-link" href="#kalkulace">Rezervovat na pobočce</a>
              </div>
            </li>
          ))}
        </ol>

        <div className="pch-oddeleni-wrap" id="kalkulace">
          <img
            src="/section-1.webp"
            alt="Rozložený sortiment stavebnin — střešní tašky, latě a klempířské prvky"
            className="pch-oddeleni-img"
          />
          <div className="pch-oddeleni">
            <h3 className="pch-h3">Šest oddělení pod jednou střechou</h3>
            <ul className="pch-odd-list">
              {oddeleni.map((o) => (
                <li key={o.c} className="pch-odd">
                  <span className="pch-odd-num">{o.c}</span>
                  <div>
                    <p className="pch-odd-name">{o.n}</p>
                    <p className="pch-odd-desc">{o.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pch-onas" aria-labelledby="pch-onas-nad">
        <div className="pch-onas-media">
          <img
            src="/section-2.webp"
            alt="Klempířská dílna První chodské při ohýbání okapového plechu na míru"
            className="pch-onas-img"
          />
        </div>
        <div className="pch-onas-body">
          <p className="pch-eyebrow pch-eyebrow-red">Proč k nám</p>
          <h2 id="pch-onas-nad" className="pch-h2">
            Vlastní klempířská dílna. Ohneme, co katalog nemá.
          </h2>
          <p className="pch-onas-lead">
            Nejsme jen regál s materiálem. Okapy, lemování a atypické prvky
            vyrábíme přímo v dílně — přesně na rozměr vaší střechy, obvykle
            do druhého dne.
          </p>

          <dl className="pch-fakta">
            <div className="pch-fakt">
              <dt>Kalkulace střechy</dt>
              <dd>zdarma, i s výkazem materiálu</dd>
            </div>
            <div className="pch-fakt">
              <dt>Doprava materiálu</dt>
              <dd>hydraulická ruka po Českobudějovicku</dd>
            </div>
            <div className="pch-fakt">
              <dt>Půjčovna nářadí</dt>
              <dd>přímo na pobočce {pobocka.mesto}</dd>
            </div>
            <div className="pch-fakt">
              <dt>Bonus program</dt>
              <dd>sleva pro řemeslníky i stálé zákazníky</dd>
            </div>
          </dl>

          <div className="pch-pobocka">
            <p className="pch-pobocka-mesto">{pobocka.ulice}, {pobocka.mesto}</p>
            <p className="pch-pobocka-cas">{pobocka.otevreno}</p>
            <p className="pch-pobocka-mail">eshop@chodska.cz</p>
          </div>
        </div>
      </section>
    </main>
  );
}
