// Maron CZ — markýzy a stínicí technika, Praha 10-Malešice
// Koncept: „stín jako materiál" — hero postavené na animovaném lamelovém rastru markýzy,
// signature prvek = pruhy plátna, které se „vysouvají" jako markýza při načtení stránky.

const produkty = [
  {
    nazev: "Markýzy na terasu",
    popis:
      "Kloubové i kazetové markýzy s výsuvem až 4 metry. Plátno vybíráte z více než 200 dezénů, motor ovládáte dálkově nebo z telefonu.",
    stitek: "terasy a balkony",
  },
  {
    nazev: "Pergoly a baldachýny",
    popis:
      "Hliníkové pergoly Futurol a baldachýn MarVelum — stín nad posezením, který vydrží vítr i déšť. Zaměříme, vyrobíme na míru, smontujeme.",
    stitek: "zahrady",
  },
  {
    nazev: "Venkovní rolety a screeny",
    popis:
      "Předokenní hliníkové rolety se solárním pohonem: v létě odstíní horko, v zimě drží teplo uvnitř. Bez sekání do fasády, bez kabelů.",
    stitek: "okna",
  },
  {
    nazev: "Vnitřní žaluzie a plisé",
    popis:
      "Žaluzie, rolety, stropní plisé do zimních zahrad a střešních oken. Přesně na milimetr, v barvě vašich rámů.",
    stitek: "interiér",
  },
  {
    nazev: "Sítě proti hmyzu",
    popis:
      "Pevné, rolovací i dveřní sítě. Okno necháte otevřené celé léto a komáři zůstanou venku.",
    stitek: "okna a dveře",
  },
  {
    nazev: "Servis a opravy stínění",
    popis:
      "Vyměníme plátno, motor i převod — i u markýz, které jsme nemontovali my. Servisní linka 602 392 317.",
    stitek: "celoročně",
  },
];

const realizace = [
  {
    misto: "Zdiby",
    co: "Pergola Futurol u rodinného domu",
    detail: "Bioklimatická pergola 5 × 4 m s naklápěcími lamelami a LED osvětlením.",
  },
  {
    misto: "Praha 6",
    co: "Stínění oken zimní zahrady",
    detail: "Screenové rolety na 11 oken, propojené do jednoho dálkového ovládání.",
  },
  {
    misto: "Nupaky",
    co: "Stropní plisé v zimní zahradě",
    detail: "Plisé na míru šikmému prosklení — v poledne stín, večer volný výhled na oblohu.",
  },
  {
    misto: "Praha 10",
    co: "Baldachýn Light nad terasou",
    detail: "Dostupné zastínění pergoly posuvným baldachýnem, hotové za jedno dopoledne.",
  },
];

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedeme k vám, změříme prostor a poradíme, co bude ve vašich podmínkách opravdu fungovat — sluneční strana, vítr, kotvení.",
  },
  {
    krok: "Návrh a cena",
    text: "Dostanete konkrétní nabídku s dezénem plátna, typem pohonu a pevnou cenou. Žádné „od“.",
  },
  {
    krok: "Montáž",
    text: "Montují naši proškolení technici s certifikovaným kotvením — ne subdodavatel, kterého vidíme poprvé.",
  },
  {
    krok: "Servis",
    text: "Záruční i pozáruční. Markýza má sloužit dvacet let, ne dvě sezóny — a my u toho budeme.",
  },
];

export default function Page() {
  return (
    <main className="mk">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="Maron">
            MAR<span className="wordmark-o" aria-hidden="true"></span>N
          </span>
          <span className="hero-lokalita">Praha 10 — Malešice · showroom Teplárenská 601/7</span>
        </div>

        {/* signature: lamely markýzy vysouvající se přes titulek */}
        <div className="awning" aria-hidden="true">
          <span className="lam lam-1"></span>
          <span className="lam lam-2"></span>
          <span className="lam lam-3"></span>
          <span className="lam lam-4"></span>
          <span className="lam lam-5"></span>
        </div>

        <h1 className="hero-titulek">
          <span className="radek radek-slunce">Slunce si poručit nedá.</span>
          <span className="radek radek-stin">Stín ano.</span>
        </h1>

        <p className="hero-perex">
          Markýzy, pergoly a venkovní stínění na míru — 30 let měříme, montujeme a
          servisujeme stín po celé Praze a okolí.
        </p>

        <div className="hero-akce">
          <a className="btn btn-plna" href="tel:+420725928503">
            Zavolat 725 928 503
          </a>
          <a className="btn btn-linka" href="mailto:info@maron.cz">
            Napsat na info@maron.cz
          </a>
        </div>

        <ul className="hero-fakta" aria-label="Základní fakta o firmě">
          <li>
            <strong>30 let</strong>
            <span>v oboru stínění</span>
          </li>
          <li>
            <strong>Tisíce</strong>
            <span>realizací v Praze a okolí</span>
          </li>
          <li>
            <strong>Vlastní</strong>
            <span>montážní i servisní tým</span>
          </li>
        </ul>
      </header>

      {/* ================= SEKCE 1: NABÍDKA ================= */}
      <section className="sekce sekce-nabidka" aria-labelledby="nabidka-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Co stíníme</p>
          <h2 id="nabidka-h">Od terasy po střešní okno</h2>
          <p className="sekce-perex">
            Stínění řešíme od A do Z: dodáme, namontujeme a postaráme se o servis.
            Doporučíme jen techniku, které sami věříme.
          </p>
        </div>

        <div className="mrizka">
          {produkty.map((p) => (
            <article className="karta" key={p.nazev}>
              <span className="karta-stitek">{p.stitek}</span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
            </article>
          ))}
        </div>

        <aside className="novinka">
          <span className="novinka-znak" aria-hidden="true">☀</span>
          <div>
            <h3>Novinka: rolety na solární pohon</h3>
            <p>
              Předokenní hliníkové rolety s vlastním solárním panelem — žádné sekání
              do zdi, žádná elektroinstalace. V létě chladí, v zimě izolují.
            </p>
          </div>
        </aside>
      </section>

      {/* ================= SEKCE 2: DŮVĚRA ================= */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava">
          <p className="eyebrow eyebrow-svetly">Jak pracujeme</p>
          <h2 id="duvera-h">Čtyři kroky od slunce ke stínu</h2>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="kroky-polozka" key={k.krok}>
              <span className="kroky-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{k.krok}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="realizace">
          <h3 className="realizace-titulek">Kde už náš stín stojí</h3>
          <ul className="realizace-seznam">
            {realizace.map((r) => (
              <li className="realizace-polozka" key={r.co}>
                <span className="realizace-misto">{r.misto}</span>
                <div>
                  <strong>{r.co}</strong>
                  <p>{r.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="realizace-pozn">
            Chcete vidět stínění naživo? Náš showroom v Malešicích je vám otevřený —
            plátna si osaháte, motory vyzkoušíte.
          </p>
        </div>
      </section>
    </main>
  );
}
