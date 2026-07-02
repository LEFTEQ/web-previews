// VODÁK sport, s.r.o. — Brno / Praha
// Koncept: „Dvě sezóny, jedna prodejna." Voda a sníh — kajaky v létě, běžky v zimě.
// Signature: vlnová linka řeky, která protíná celou stránku a v zimní sekci
// se láme do stopy běžkařských lyží. Paleta odvozená z říční vody, PE plastu
// kajaků a skluznice běžek.

const lode = [
  {
    nazev: "Rapid Fire",
    typ: "Sportovní kánoe",
    posadka: "1–2 vodáci",
    hmotnost: "15 kg",
    popis:
      "Malá lehká kánoe i na menší řeky. Vylévací rukáv, širší prostor pro rozklek, posuvné sedačky a čtyři madla na nošení. Skvěle jede.",
  },
  {
    nazev: "Rapid Wild",
    typ: "Kánoe na divokou vodu",
    posadka: "2–3 vodáci",
    hmotnost: "—",
    popis:
      "Rychlá a obratná loď i na vodnaté řeky. Málo se zalévá a rychle vylévá — na jarní vodu ideál.",
  },
  {
    nazev: "Rapid Tramp",
    typ: "Expediční kánoe",
    posadka: "až 4 dospělí",
    hmotnost: "—",
    popis:
      "Delší loď pro rodinu s dětmi nebo vícedenní plavbu s bagáží. Uveze čtyři dospělé vodáky i výbavu na týden.",
  },
  {
    nazev: "Bandita C1",
    typ: "Singl pro specialisty",
    posadka: "1 vodák",
    hmotnost: "—",
    popis:
      "Zajímavá lodička od WTX pro singlíře a milovníky OC1. Recenzi z Vavřince najdete v našich článcích.",
  },
];

const sluzby = [
  {
    cislo: "Léto",
    nazev: "Prodejna a e-shop",
    popis:
      "Nafukovací lodě WTX vyráběné v Česku, pádla, vesty, neopreny a vodácké vybavení. Lodě si u nás můžete před koupí vyzkoušet — stačí dát vědět.",
  },
  {
    cislo: "Léto",
    nazev: "Půjčovna lodí",
    popis:
      "Kánoe, kajaky i rafty Alka na víkend nebo celou dovolenou. Poradíme, která řeka zrovna jede a co si na ni vzít.",
  },
  {
    cislo: "Zima",
    nazev: "Speciálka na běžky",
    popis:
      "Běžky, boty, hůlky a vosky. Vybereme délku i tvrdost přesně na vaši váhu a styl — klasika i skate.",
  },
  {
    cislo: "Celý rok",
    nazev: "Servis a opravy",
    popis:
      "Opravy lodí a vodácké výstroje, servis skluznic a mazání běžek. Kdo maže, ten jede.",
  },
];

const akce = [
  {
    datum: "19. 1. a 9. 2.",
    nazev: "Kurz mazání běžek",
    kde: "Kaštanová 127, Brno · od 17.00",
    popis:
      "Naučíte se namazat běžky na jakýkoli sníh. Počet míst je omezen, hlaste se v prodejně.",
  },
  {
    datum: "úterky",
    nazev: "Večerní výjezd na běžky",
    kde: "odjezd z Brna na Vysočinu · 16.15",
    popis:
      "Společný večerní trénink na upravených stopách. Na Vysočině leží sníh — jedete s námi?",
  },
  {
    datum: "do vyprodání",
    nazev: "Výprodej skladu −30 %",
    kde: "prodejna Brno",
    popis:
      "Totální výprodej skladových zásob běžek, lodí a vybavení. Skladové kajaky postupně dáváme na Facebook — kdo se ozve první, má ho za uvedenou cenu.",
  },
];

// Vlna řeky — signature prvek (SVG path používaný v hero i jako dělítko)
function Vlna({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0,60 C120,20 240,20 360,60 C480,100 600,100 720,60 C840,20 960,20 1080,60 C1200,100 1320,100 1440,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="vs">
      {/* ===================== HERO ===================== */}
      <header className="vs-hero">
        <div className="vs-hero-top">
          <span className="vs-wordmark" aria-label="VODÁK sport">
            VOD<span className="vs-wordmark-vlna">Á</span>K
            <span className="vs-wordmark-sport">sport</span>
          </span>
          <nav className="vs-hero-nav" aria-label="Hlavní navigace">
            <a href="#lode">Lodě</a>
            <a href="#sluzby">Služby</a>
            <a href="#zima">Zima</a>
          </nav>
        </div>

        <div className="vs-hero-body">
          <p className="vs-hero-eyebrow">
            Brno · Kaštanová 127 &nbsp;—&nbsp; vodácká a běžkařská speciálka
          </p>
          <h1 className="vs-hero-title">
            <span className="vs-hero-line vs-hero-line-1">V létě řeka,</span>
            <span className="vs-hero-line vs-hero-line-2">v zimě stopa.</span>
          </h1>
          <p className="vs-hero-perex">
            Prodáváme, půjčujeme a opravujeme lodě i běžky už přes dvacet let.
            Nafukovací kánoe WTX vyrobené v Česku, servis skluznic a lidi za
            pultem, kteří o víkendu sami sedí v lodi nebo stojí ve stopě.
          </p>
          <div className="vs-hero-akce" role="note">
            <strong>Vyklízíme sklady kajaků</strong> — skladové lodě dáváme na
            Facebook, kdo se ozve první, má loď za uvedenou cenu. Výprodej běžek
            a lodí −30&nbsp;%.
          </div>
        </div>

        {/* Signature: řeka teče hero sekcí */}
        <div className="vs-hero-reka" aria-hidden="true">
          <Vlna className="vs-vlna vs-vlna-1" />
          <Vlna className="vs-vlna vs-vlna-2" />
          <Vlna className="vs-vlna vs-vlna-3" />
        </div>
      </header>

      {/* ===================== LODĚ WTX ===================== */}
      <section className="vs-sekce vs-lode" id="lode" aria-labelledby="lode-h">
        <div className="vs-sekce-hlava">
          <p className="vs-eyebrow">Nafukovací lodě WTX — vyrobené v Česku</p>
          <h2 id="lode-h">Loď si u nás vyzkoušíte dřív, než ji koupíte</h2>
          <p className="vs-sekce-perex">
            V sezóně je výroba WTX vytížená a dodací lhůty delší — teď je pravý
            čas objednat. Chcete si lodičky nejdřív osahat na vodě? Dejte nám
            vědět, domluvíme testovačku.
          </p>
        </div>

        <ul className="vs-lode-mrizka">
          {lode.map((l) => (
            <li key={l.nazev} className="vs-lod">
              <div className="vs-lod-hlava">
                <h3>{l.nazev}</h3>
                <span className="vs-lod-typ">{l.typ}</span>
              </div>
              <p className="vs-lod-popis">{l.popis}</p>
              <dl className="vs-lod-parametry">
                <div>
                  <dt>Posádka</dt>
                  <dd>{l.posadka}</dd>
                </div>
                {l.hmotnost !== "—" && (
                  <div>
                    <dt>Hmotnost</dt>
                    <dd>{l.hmotnost}</dd>
                  </div>
                )}
              </dl>
            </li>
          ))}
        </ul>

        <div className="vs-lode-pozn">
          <p>
            Vedle kánoí vozíme i rafty <strong>Alka 5, 7 a 9</strong> a
            rekreační kajaky <strong>Relax duo</strong> a{" "}
            <strong>Relax trio</strong>. Katalog lodí najdete na stránkách
            výrobce WTX — nebo se prostě zastavte na Kaštanové.
          </p>
        </div>
      </section>

      {/* ===================== SLUŽBY + ZIMA ===================== */}
      <section
        className="vs-sekce vs-zima"
        id="sluzby"
        aria-labelledby="sluzby-h"
      >
        {/* přechod řeky do stopy */}
        <div className="vs-stopa" aria-hidden="true">
          <span className="vs-stopa-linka" />
          <span className="vs-stopa-linka" />
        </div>

        <div className="vs-sekce-hlava">
          <p className="vs-eyebrow vs-eyebrow-zima">
            Čtyři služby, dvě sezóny
          </p>
          <h2 id="sluzby-h">Když zamrzne řeka, mažeme skluznice</h2>
        </div>

        <ul className="vs-sluzby">
          {sluzby.map((s) => (
            <li key={s.nazev} className="vs-sluzba">
              <span className="vs-sluzba-sezona">{s.cislo}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="vs-zima-akce" id="zima">
          <h3 className="vs-zima-akce-titul">Co se děje ve VODÁK sportu</h3>
          <ol className="vs-akce-seznam">
            {akce.map((a) => (
              <li key={a.nazev} className="vs-akce">
                <span className="vs-akce-datum">{a.datum}</span>
                <div className="vs-akce-telo">
                  <h4>{a.nazev}</h4>
                  <p className="vs-akce-kde">{a.kde}</p>
                  <p>{a.popis}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="vs-zima-kontakt">
            Hlásit se můžete v prodejně nebo na{" "}
            <a href="mailto:prodejna@vodak-sport.cz">
              prodejna@vodak-sport.cz
            </a>
            . Přijímáme dárkové poukazy i stravenky Sodexo, Ticket Benefits a
            Chèque Déjeuner.
          </p>
        </div>
      </section>
    </main>
  );
}
