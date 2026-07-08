import type { CSSProperties } from "react";

const profese = [
  {
    kod: "MaR",
    nazev: "Měření a regulace",
    popis:
      "Od čidla teploty po dispečink. Navrhneme, zapojíme a naladíme regulaci tak, aby vytápění, výměník i vzduchotechnika běžely přesně a levně.",
  },
  {
    kod: "AUT",
    nazev: "Automatizace a řídicí systémy",
    popis:
      "Programujeme Tecomat Foxtrot, Sauter EY, Honeywell i Siemens. Řídicí a dispečerské systémy pro kotelny, výměníkové stanice a budovy.",
  },
  {
    kod: "EL",
    nazev: "Elektroinstalace",
    popis:
      "Silnoproud i slaboproudé rozvody, kompletní montáž na klíč. Od projektu přes realizaci až po revizi a předání s razítkem.",
  },
  {
    kod: "RVN",
    nazev: "Výroba rozvaděčů NN",
    popis:
      "Vlastní výroba rozvaděčů nízkého napětí na míru zakázce. Osazení, zapojení, kusová zkouška a dokumentace.",
  },
  {
    kod: "REV",
    nazev: "Revize a servis",
    popis:
      "Pravidelné revize elektro, výchozí revize nových instalací a pohotovostní servis regulace, když topení stojí a nesmí.",
  },
  {
    kod: "FM",
    nazev: "Facility management",
    popis:
      "Staráme se o provoz technologií i po předání — plánovaná údržba, energetický dohled a rychlé zásahy na dálku i na místě.",
  },
];

const reference = [
  {
    misto: "Centrální zásobování teplem",
    detail:
      "Teplofikace měst — výměníkové stanice, regulace sítě a dispečink pro dodavatele tepla.",
  },
  {
    misto: "Budovy a technologie",
    detail:
      "Regulace vytápění, chlazení a vzduchotechniky ve školách, úřadech a průmyslových halách.",
  },
  {
    misto: "Biomasa a zdroje tepla",
    detail:
      "Automatizace kotelen na biomasu — řízení spalování, akumulace a dálkový dohled.",
  },
];

export default function Page() {
  return (
    <main className="ie">
      <header className="ie-nav">
        <a className="ie-mark" href="#uvod" aria-label="INELSEV ENERGIE — úvod">
          <span className="ie-mark-i">INELSEV</span>
          <span className="ie-mark-e">ENERGIE</span>
        </a>
        <nav className="ie-links" aria-label="Hlavní navigace">
          <a href="#profese">Profese</a>
          <a href="#reference">Reference</a>
          <a href="#profil">O nás</a>
        </nav>
      </header>

      <section className="ie-hero" id="uvod">
        <div className="ie-hero-media">
          <img
            src="/hero.webp"
            alt="Rozvaděč a měřicí technika INELSEV ENERGIE při montáži"
            className="ie-hero-img"
          />
          <div className="ie-hero-scrim" aria-hidden="true" />
        </div>

        <div className="ie-hero-body">
          <p className="ie-eyebrow">Pardubice · od roku 1992</p>
          <h1 className="ie-h1">
            Když má topit celé město,
            <br />
            <span className="ie-h1-accent">reguluje se to u nás.</span>
          </h1>
          <p className="ie-lede">
            Měření a regulace, automatizace a elektroinstalace pro centrální
            zásobování teplem, výměníkové stanice a budovy. Od čidla po dispečink,
            od projektu po revizi.
          </p>
          <div className="ie-hero-cta">
            <a className="ie-btn" href="#profese">
              Co umíme
            </a>
            <a className="ie-btn ie-btn-ghost" href="#profil">
              O firmě
            </a>
          </div>
        </div>

        <dl className="ie-readout" aria-label="Provozní hodnoty v číslech">
          <div className="ie-readout-cell">
            <dt>na trhu</dt>
            <dd>30+ let</dd>
          </div>
          <div className="ie-readout-cell">
            <dt>profesí pod jednou střechou</dt>
            <dd>6</dd>
          </div>
          <div className="ie-readout-cell">
            <dt>rozvaděče NN</dt>
            <dd>vlastní výroba</dd>
          </div>
        </dl>
      </section>

      <section className="ie-section" id="profese">
        <div className="ie-section-head">
          <p className="ie-eyebrow">Profese</p>
          <h2 className="ie-h2">Šest oborů, jedna dodávka na klíč</h2>
          <p className="ie-section-lede">
            Nemusíte skládat dohromady tři firmy. Projekt, výrobu rozvaděčů,
            montáž, oživení i revizi zvládneme pod jednou hlavičkou — a taky za
            to ručíme.
          </p>
        </div>

        <ul className="ie-grid">
          {profese.map((p) => (
            <li className="ie-card" key={p.kod}>
              <span className="ie-card-kod" aria-hidden="true">
                {p.kod}
              </span>
              <h3 className="ie-card-nazev">{p.nazev}</h3>
              <p className="ie-card-popis">{p.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ie-section ie-section-alt" id="reference">
        <div className="ie-split">
          <div className="ie-split-media">
            <img
              src="/section-1.webp"
              alt="Výměníková stanice a regulace tepla realizovaná firmou INELSEV ENERGIE"
              className="ie-split-img"
            />
          </div>
          <div className="ie-split-text">
            <p className="ie-eyebrow">Reference</p>
            <h2 className="ie-h2">Teplo, které jde do tisíců domácností</h2>
            <p className="ie-section-lede">
              Naše regulace a automatizace běží tam, kde se výpadek pozná hned —
              v soustavách centrálního zásobování teplem, ve výměníkových
              stanicích a v kotelnách na biomasu.
            </p>
            <ul className="ie-ref">
              {reference.map((r) => (
                <li className="ie-ref-item" key={r.misto}>
                  <span className="ie-ref-misto">{r.misto}</span>
                  <span className="ie-ref-detail">{r.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ie-section" id="profil">
        <div className="ie-split ie-split-reverse">
          <div className="ie-split-text">
            <p className="ie-eyebrow">O nás</p>
            <h2 className="ie-h2">
              Z ENERGIE MaR se stala INELSEV ENERGIE. Řemeslo zůstalo.
            </h2>
            <p className="ie-section-lede">
              Firmu jsme založili v Pardubicích v roce 1992 jako ENERGIE MaR.
              Přes třicet let stavíme měření a regulaci pro teplárenství a
              průmysl. Programujeme Tecomat Foxtrot, Sauter, Honeywell i
              Siemens a rozvaděče nízkého napětí si vyrábíme sami.
            </p>
            <p className="ie-section-lede">
              Děláme projekci, montáž, řídicí a dispečerské systémy, servis,
              revize i školení a BOZP. Jeden partner na celou technologii — od
              první čáry v projektu po razítko na revizní zprávě.
            </p>
            <p className="ie-signature-line">
              Pardubice · měření a regulace · automatizace · elektroinstalace
            </p>
          </div>
          <div className="ie-split-media">
            <img
              src="/section-2.webp"
              alt="Technik INELSEV ENERGIE u dispečerského řídicího systému"
              className="ie-split-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

// typové rozšíření není potřeba; ponecháno pro čitelnost
export type { CSSProperties };
