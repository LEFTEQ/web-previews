const kroky = [
  {
    cislo: "1",
    nazev: "Přijedeme a zaměříme",
    text: "Podíváme se na vaši koupelnu, změříme prostor a posoudíme stav rozvodů vody a elektřiny. V Plzni a okolí jsme u vás obvykle do týdne.",
  },
  {
    cislo: "2",
    nazev: "Návrh a pevná cena",
    text: "Navrhneme rozvržení, pomůžeme vybrat obklady, dlažbu i sanitu. Dostanete přehlednou nabídku — cena i termín pak platí, bez skrytých vícenákladů.",
  },
  {
    cislo: "3",
    nazev: "Bouráme a stavíme",
    text: "Vybourání staré koupelny, nové rozvody, hydroizolace, obklady, dlažba, montáž sanity. Vše zvládne jedna parta — nemusíte shánět žádné další řemeslníky.",
  },
  {
    cislo: "4",
    nazev: "Předáme hotovou koupelnu",
    text: "Uklidíme, předáme a projdeme s vámi každý detail. Jsme k zastižení i po předání — kdyby cokoliv, stačí zavolat.",
  },
];

const sluzby = [
  {
    nazev: "Koupelna na klíč",
    popis:
      "Kompletní proměna od bourání po poslední spáru. Instalatérské, elektrikářské i obkladačské práce v jedné partě, včetně dodání materiálu.",
    doba: "10–14 dní",
  },
  {
    nazev: "Koupelna v paneláku",
    popis:
      "Vybourání umakartového jádra a stavba zděné koupelny. Známe plzeňské paneláky na Lochotíně, Borech i Doubravce — víme, co v nich čekat.",
    doba: "12–16 dní",
  },
  {
    nazev: "Sprchový kout místo vany",
    popis:
      "Bezbariérový vstup, skleněná zástěna, odtokový žlab. Praktické řešení, které koupelnu opticky zvětší a usnadní každodenní užívání.",
    doba: "5–7 dní",
  },
  {
    nazev: "Nové rozvody a podlahové topení",
    popis:
      "Výměna staré vody a odpadů, elektrické podlahové vytápění, otopný žebřík. Základ, na kterém nová koupelna vydrží desítky let.",
    doba: "3–5 dní",
  },
];

export default function Page() {
  return (
    <main className="fl">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">
              FALCO<span className="brand-sub">interiér</span>
            </span>
            <span className="brand-loc">Plzeň</span>
          </div>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Nová</span>
            <span className="ht-line ht-2">koupelna</span>
            <span className="ht-line ht-3">
              za <em>14 dní.</em>
            </span>
          </h1>

          <p className="hero-lead">
            Rekonstrukce koupelen v Plzni a okolí — od vybourání umakartového
            jádra po poslední spáru. Jedna parta, pevná cena, pevný termín.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420777771693">
              Zavolat 777 771 693
            </a>
            <a className="btn btn-ghost" href="mailto:info@falcointerier.cz">
              Napsat e-mail
            </a>
          </div>

          <ul className="hero-facts">
            <li>
              <strong>Pevný rozpočet</strong>
              <span>cena z nabídky platí</span>
            </li>
            <li>
              <strong>Vše v jedné partě</strong>
              <span>voda, elektřina, obklady</span>
            </li>
            <li>
              <strong>Místní firma</strong>
              <span>Klatovská třída, Plzeň</span>
            </li>
          </ul>
        </div>

        {/* signature: kachličková stěna se spárami */}
        <div className="hero-tiles" aria-hidden="true">
          <div className="tile-grid">
            <span className="t t-a" />
            <span className="t t-b" />
            <span className="t t-c" />
            <span className="t t-a" />
            <span className="t t-d" />
            <span className="t t-b" />
            <span className="t t-a" />
            <span className="t t-c" />
            <span className="t t-b" />
            <span className="t t-a" />
            <span className="t t-c" />
            <span className="t t-a" />
            <span className="t t-b" />
            <span className="t t-d" />
            <span className="t t-a" />
          </div>
          <div className="tile-level">
            <span className="level-bubble" />
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sec sec-sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">
            Od umakartu ke koupelně,
            <br />
            do které se budete těšit
          </h2>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.nazev}>
              <div className="sluzba-top">
                <h3>{s.nazev}</h3>
                <span className="sluzba-doba">{s.doba}</span>
              </div>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-note">
          Materiál dodáme, nebo klidně použijeme obklady a sanitu, které si
          vyberete sami. Poradíme, co se do vaší koupelny hodí — a co je jen
          zbytečně drahé.
        </p>
      </section>

      {/* ================= POSTUP / DŮVĚRA ================= */}
      <section className="sec sec-postup" aria-labelledby="postup-h">
        <div className="sec-head sec-head-light">
          <p className="eyebrow eyebrow-light">Jak spolupráce probíhá</p>
          <h2 id="postup-h">Čtyři kroky — a mezi nimi žádné překvapení</h2>
          <p className="sec-lead">
            Koupelna je nejmenší, ale nejsložitější místnost v bytě. Proto
            jednáme na rovinu od první schůzky: víte, kdy začneme, kdy skončíme
            a kolik to bude stát.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k) => (
            <li className="krok" key={k.cislo}>
              <span className="krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="krok-body">
                <h3>{k.nazev}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <blockquote className="duvera-quote">
            <p>
              „Za dvanáct dní jsme měli místo jádra z roku 1978 novou zděnou
              koupelnu. Parta přišla každý den ráno, večer po sobě uklidila.
              Cena přesně podle nabídky.“
            </p>
            <footer>— rekonstrukce bytu 3+1, Plzeň-Lochotín</footer>
          </blockquote>
          <ul className="duvera-fakta">
            <li>
              <strong>25+ let</strong>
              <span>rekonstrukcí v Plzni a okolí</span>
            </li>
            <li>
              <strong>Vlastní řemeslníci</strong>
              <span>žádní najatí subdodavatelé</span>
            </li>
            <li>
              <strong>Záruka na práci</strong>
              <span>a servis i po předání</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
