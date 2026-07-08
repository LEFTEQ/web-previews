import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pavel Choleva — Rekonstrukce bytů v Ostravě",
  description:
    "Kompletní rekonstrukce bytů v Ostravě a okolí. Jeden tým na bourání, elektriku, vodu, topení i finální úklid. Pevný termín, pevná cena, denní fotky z bytu.",
};

const faze = [
  {
    cislo: "01",
    nazev: "Prohlídka a rozpočet",
    doba: "do 5 dnů",
    text: "Přijedu k vám do bytu, změřím, poklepu na omítky a poslechnu si, co potřebujete. Do pěti dnů máte položkový rozpočet — bez skrytých položek, které naskočí až v půlce stavby.",
  },
  {
    cislo: "02",
    nazev: "Bourání a jádro",
    doba: "1–2 týdny",
    text: "Vybouráme příčky, staré bytové jádro a rozvody. Suť odvezeme sami, sousedům dopředu rozdáme lísteček do schránky. Beton řežeme, ne kladivem — méně prachu, méně hluku.",
  },
  {
    cislo: "03",
    nazev: "Rozvody a instalace",
    doba: "1–2 týdny",
    text: "Elektrika, voda, topení, plyn i kanalizace — všechno pod jednou partou. Nemusíte shánět čtyři řemeslníky a hlídat, aby si předali práci. Předám je já.",
  },
  {
    cislo: "04",
    nazev: "Povrchy a finiš",
    doba: "2–3 týdny",
    text: "Omítky, obklady, podlahy, malování a montáž kuchyně i koupelny. Byt předávám uklizený a s revizemi v ruce — kolaudace i pojišťovna berou papíry bez řečí.",
  },
];

const rozsah = [
  { t: "Bytová jádra", d: "Výměna umakartového jádra za zděné, na míru dispozici." },
  { t: "Koupelny na klíč", d: "Od hydroizolace přes obklad po zavěšené WC a sprchu v úrovni podlahy." },
  { t: "Kuchyně", d: "Příprava rozvodů, obklad, montáž linky a spotřebičů." },
  { t: "Elektroinstalace", d: "Nové rozvody, rozvaděč a revizní zpráva k bytu." },
  { t: "Voda • topení • plyn", d: "Rozvody, radiátory, plynové spotřebiče včetně revizí." },
  { t: "Podlahy a povrchy", d: "Vyrovnání, vinyl, dlažba, štukové omítky a malby." },
];

export default function Page() {
  return (
    <main className="pc">
      <header className="pc-nav">
        <a className="pc-mark" href="#" aria-label="Pavel Choleva — rekonstrukce bytů">
          <span className="pc-mark-l">CHOLEVA</span>
          <span className="pc-mark-s">rekonstrukce bytů · Ostrava</span>
        </a>
        <a className="pc-tel" href="tel:+420604338637">
          <span className="pc-tel-dot" aria-hidden="true" />
          604&nbsp;338&nbsp;637
        </a>
      </header>

      <section className="pc-hero">
        <div className="pc-hero-img">
          <img
            src="/hero.webp"
            alt="Rozestavěný byt během rekonstrukce — nové rozvody a připravené jádro"
            width={1600}
            height={1100}
          />
        </div>
        <div className="pc-hero-body">
          <p className="pc-eyebrow">Byt od holých cihel po nastěhování · Ostrava a okolí</p>
          <h1 className="pc-h1">
            Váš byt <em>vybouráme</em> a předáme
            <br /> hotový. <span className="pc-h1-hi">Jedna parta, jeden termín.</span>
          </h1>
          <p className="pc-lead">
            Jsem Pavel Choleva. Rekonstruuju byty v Ostravě přes patnáct let — od panelákových
            jader v Zábřehu po celé dispozice v cihlových domech. Nekoordinujete pět řemeslníků.
            Domluvíte se se mnou a byt vám předám hotový, uklizený a s revizemi.
          </p>
          <div className="pc-hero-cta">
            <a className="pc-btn" href="tel:+420604338637">Zavolat a domluvit prohlídku</a>
            <a className="pc-btn-ghost" href="#rozsah">Co všechno zvládneme</a>
          </div>
          <dl className="pc-stats">
            <div>
              <dt>15+ let</dt>
              <dd>rekonstrukcí bytů v Ostravě</dd>
            </div>
            <div>
              <dt>Pevná cena</dt>
              <dd>v rozpočtu předem, ne po stavbě</dd>
            </div>
            <div>
              <dt>Revize v ruce</dt>
              <dd>elektro · plyn · voda při předání</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pc-faze" id="postup" aria-labelledby="faze-nadpis">
        <div className="pc-sec-head">
          <p className="pc-eyebrow">Jak to u vás proběhne</p>
          <h2 id="faze-nadpis" className="pc-h2">
            Čtyři fáze, které na sebe navazují
          </h2>
          <p className="pc-sec-lead">
            Nejhorší na rekonstrukci je, když jedna parta čeká na druhou a byt stojí. Proto
            plánuju práce jako řetěz — každý den víte, kdo v bytě je a co dělá.
          </p>
        </div>

        <ol className="pc-faze-list">
          {faze.map((f) => (
            <li key={f.cislo} className="pc-faze-item">
              <span className="pc-faze-num" aria-hidden="true">
                {f.cislo}
              </span>
              <div className="pc-faze-txt">
                <div className="pc-faze-top">
                  <h3>{f.nazev}</h3>
                  <span className="pc-faze-doba">{f.doba}</span>
                </div>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="pc-faze-fig">
          <img
            src="/section-1.webp"
            alt="Detail rozpracované rekonstrukce bytu — nové rozvody před zapravením"
            width={1400}
            height={950}
          />
          <figcaption>Rozvody vedeme tak, aby vydržely další generaci — ne aby jen prošly revizí.</figcaption>
        </figure>
      </section>

      <section className="pc-rozsah" id="rozsah" aria-labelledby="rozsah-nadpis">
        <div className="pc-rozsah-media">
          <img
            src="/section-2.webp"
            alt="Dokončený zrekonstruovaný interiér bytu"
            width={1400}
            height={1050}
          />
        </div>
        <div className="pc-rozsah-body">
          <p className="pc-eyebrow">Všechno pod jednou partou</p>
          <h2 id="rozsah-nadpis" className="pc-h2">
            Nesháníte řemeslníky. Máte jednoho člověka za všechno.
          </h2>
          <p className="pc-sec-lead">
            Elektrikáře, instalatéry, obkladače i podlaháře už mám prověřené léty společné práce.
            Vy komunikujete se mnou — a když se něco nepovede, řeší to jeden člověk, ne
            přehazování odpovědnosti mezi firmami.
          </p>
          <ul className="pc-rozsah-list">
            {rozsah.map((r) => (
              <li key={r.t}>
                <span className="pc-rozsah-t">{r.t}</span>
                <span className="pc-rozsah-d">{r.d}</span>
              </li>
            ))}
          </ul>
          <p className="pc-mistni">
            Pracujeme po celé Ostravě — Zábřeh, Poruba, Výškovice, Mariánské Hory i okolní obce.
            Sídlíme na Petruškově v Ostravě-Zábřehu, takže na prohlídku dorazíme rychle.
          </p>
          <a className="pc-btn" href="tel:+420604338637">Zavolat 604 338 637</a>
        </div>
      </section>
    </main>
  );
}
