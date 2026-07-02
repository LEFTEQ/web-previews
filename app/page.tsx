import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mototechna Group Pardubice — ojetá auta s prověřenou historií",
  description:
    "Autobazar Mototechna Group v Pardubicích. Prověřené ojeté vozy se zárukou, možnost protiúčtu a financování. Přijeďte se podívat na Hůrka nebo zavolejte.",
  openGraph: {
    title: "Mototechna Group Pardubice — ojetá auta s prověřenou historií",
    description:
      "Prověřené ojeté vozy se zárukou, protiúčet a financování. Autobazar v Pardubicích.",
    type: "website",
    locale: "cs_CZ",
  },
};

const nabidka = [
  {
    stav: "Naskladem",
    znacka: "Škoda Octavia Combi",
    motor: "2.0 TDI · 110 kW",
    rok: "2021",
    najeto: "78 400 km",
    cena: "429 000",
    poznamka: "Servisní kniha, jeden majitel, tažné.",
  },
  {
    stav: "Naskladem",
    znacka: "Volkswagen Passat",
    motor: "2.0 TDI · 140 kW",
    rok: "2020",
    najeto: "112 900 km",
    cena: "459 000",
    poznamka: "DSG, virtual cockpit, po velkém servisu.",
  },
  {
    stav: "Rezervace",
    znacka: "Hyundai Tucson",
    motor: "1.6 T-GDI · 130 kW",
    rok: "2022",
    najeto: "41 200 km",
    cena: "569 000",
    poznamka: "Zbytek tovární záruky, 4x4.",
  },
];

const kroky = [
  {
    cislo: "01",
    nadpis: "Prověříme původ",
    text: "Každý vůz projede kontrolou historie, stavu tachometru a záznamů o nehodách. Co u něj najdeme, to vám řekneme — i to nepříjemné.",
  },
  {
    cislo: "02",
    nadpis: "Osaháte, projedete",
    text: "Zkušební jízda po Pardubicích i po dálnici na Hradec. Bez tlaku, bez chvatu — auto se má koupit s klidnou hlavou.",
  },
  {
    cislo: "03",
    nadpis: "Dořešíme papíry",
    text: "Financování, protiúčet vašeho starého vozu, přepis i pojištění vyřídíme na místě. Odjíždíte s klíči a se zárukou.",
  },
];

export default function Page() {
  return (
    <main className="mt">
      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-plate" aria-hidden="true">
          <span className="plate-eu">
            <span className="plate-stars">★</span>
            <span className="plate-cz">CZ</span>
          </span>
          <span className="plate-code">MTG</span>
          <span className="plate-num">01 E</span>
        </div>

        <p className="hero-eyebrow">Autobazar · Pardubice-Hůrka</p>

        <h1 id="hero-nadpis" className="hero-nadpis">
          <span className="line line-a">Ojeté auto,</span>
          <span className="line line-b">u kterého víte,</span>
          <span className="line line-c">kudy jezdilo.</span>
        </h1>

        <p className="hero-lead">
          Mototechna Group nekupuje kočku v pytli — a vám ji taky neprodá.
          Prověřená historie, poctivý stav tachometru a záruka ke každému vozu.
        </p>

        <div className="hero-akce">
          <a className="btn btn-primar" href="tel:+420466100100">
            Zavolat na bazar
          </a>
          <a className="btn btn-sekundar" href="#nabidka">
            Projít nabídku
          </a>
        </div>

        <dl className="hero-fakta">
          <div>
            <dt>Na skladě dnes</dt>
            <dd>60+ vozů</dd>
          </div>
          <div>
            <dt>Záruka</dt>
            <dd>až 24 měsíců</dd>
          </div>
          <div>
            <dt>Protiúčet</dt>
            <dd>na počkání</dd>
          </div>
        </dl>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <header className="sekce-hlavicka">
          <p className="eyebrow">Z odstavné plochy</p>
          <h2 id="nabidka-nadpis">Vozy, co u nás teď stojí</h2>
          <p className="sekce-podnadpis">
            Výběr z aktuálního skladu. U každého víme rok, nájezd i to, jak se
            k nám dostal.
          </p>
        </header>

        <ul className="vozy">
          {nabidka.map((v) => (
            <li className="vuz" key={v.znacka}>
              <div className="vuz-top">
                <span
                  className={
                    "vuz-stav " +
                    (v.stav === "Rezervace" ? "vuz-stav--rez" : "")
                  }
                >
                  {v.stav}
                </span>
                <span className="vuz-rok">{v.rok}</span>
              </div>
              <h3 className="vuz-znacka">{v.znacka}</h3>
              <p className="vuz-motor">{v.motor}</p>
              <p className="vuz-poznamka">{v.poznamka}</p>
              <div className="vuz-spodek">
                <span className="vuz-najeto">{v.najeto}</span>
                <span className="vuz-cena">
                  {v.cena}
                  <span className="vuz-mena">Kč</span>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="nabidka-pata">
          Nevidíte to pravé?{" "}
          <a href="tel:+420466100100">Zavolejte</a> nebo{" "}
          <a href="mailto:prodej@mototechnagroup.cz">napište</a> — sháníme
          vozy i na objednávku.
        </p>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <header className="sekce-hlavicka sekce-hlavicka--svetla">
          <p className="eyebrow">Jak to u nás chodí</p>
          <h2 id="duvera-nadpis">Od prohlídky ke klíčům ve třech krocích</h2>
        </header>

        <ol className="kroky">
          {kroky.map((k) => (
            <li className="krok" key={k.cislo}>
              <span className="krok-cislo">{k.cislo}</span>
              <div className="krok-obsah">
                <h3>{k.nadpis}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="kontakt-karta">
          <div>
            <p className="kontakt-mesto">Najdete nás v Pardubicích</p>
            <p className="kontakt-adresa">
              Areál Hůrka, Pardubice · po–pá 8–18, so 9–13
            </p>
          </div>
          <div className="kontakt-akce">
            <a className="btn btn-primar" href="tel:+420466100100">
              466 100 100
            </a>
            <a className="btn btn-sekundar" href="mailto:prodej@mototechnagroup.cz">
              prodej@mototechnagroup.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
