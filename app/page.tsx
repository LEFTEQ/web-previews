import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moravská vinotéka Brno — vína z jižní Moravy, degustace i rozvoz",
  description:
    "Vinotéka v centru Brna. Vybraná vína od malých moravských vinařů, poradenství při výběru, řízené degustace a rozvoz po Brně. Zavolejte nebo napište, poradíme.",
  openGraph: {
    title: "Moravská vinotéka Brno",
    description:
      "Vybraná vína od malých moravských vinařů, degustace a rozvoz po Brně. Přijďte ochutnat.",
    type: "website",
    locale: "cs_CZ",
  },
};

const odrudy = [
  { nazev: "Ryzlink rýnský", barva: "bílé", puvod: "Mikulovská" },
  { nazev: "Veltlínské zelené", barva: "bílé", puvod: "Znojemská" },
  { nazev: "Pálava", barva: "bílé", puvod: "Mikulovská" },
  { nazev: "Frankovka", barva: "červené", puvod: "Velkopavlovická" },
  { nazev: "Svatovavřinecké", barva: "červené", puvod: "Slovácká" },
  { nazev: "Rulandské šedé", barva: "bílé", puvod: "Znojemská" },
];

const sluzby = [
  {
    krok: "Do sklenice",
    nazev: "Výběr a poradenství",
    text:
      "Řekněte nám, k čemu víno hledáte — ke svíčkové, na dárek, nebo jen tak na čtvrtek. Vytáhneme z regálu tři lahve a vysvětlíme, čím se liší. Nakupujeme přímo od rodinných vinařství mezi Mikulovem a Znojmem, takže víme, kdo víno dělal a jak.",
  },
  {
    krok: "K stolu",
    nazev: "Řízené degustace",
    text:
      "Šest vzorků, jeden vinař, jeden večer. Degustace pořádáme přímo ve vinotéce pro skupiny do dvanácti lidí — na oslavu, teambuilding i pro ty, kdo se chtějí naučit rozeznat ryzlink od veltlínu poslepu.",
  },
  {
    krok: "Ke dveřím",
    nazev: "Rozvoz po Brně",
    text:
      "Objednávku nad šest lahví přivezeme po Brně ještě týž den, když zavoláte do poledne. Karton na svatbu, firemní dárky, nebo jen sud sudového na zahradní párty — dovezeme a vychladíme.",
  },
];

export default function Page() {
  return (
    <main className="mv">
      <header className="mv-top">
        <a className="mv-mark" href="#" aria-label="Moravská vinotéka, úvod">
          <span className="mv-mark__m">M</span>
          <span className="mv-mark__rest">oravská vinotéka</span>
        </a>
        <span className="mv-loc">Brno · jižní Morava</span>
      </header>

      <section className="mv-hero" aria-labelledby="mv-hero-title">
        <div className="mv-hero__grid" aria-hidden="true">
          <span className="mv-drop mv-drop--1" />
          <span className="mv-drop mv-drop--2" />
          <span className="mv-drop mv-drop--3" />
        </div>

        <p className="mv-eyebrow">Vinotéka v centru Brna od roku 2003</p>
        <h1 id="mv-hero-title" className="mv-title">
          <span className="mv-title__l1">Víno</span>
          <span className="mv-title__l2">se jménem</span>
          <span className="mv-title__l3">vinaře.</span>
        </h1>
        <p className="mv-lead">
          Neprodáváme etikety, ale konkrétní lahve od lidí, které známe jménem —
          malá rodinná vinařství z Mikulovska, Znojemska a Slovácka. Přijďte
          ochutnat, než koupíte.
        </p>

        <div className="mv-actions">
          <a className="mv-btn mv-btn--wine" href="tel:+420542210330">
            Zavolat: 542&nbsp;210&nbsp;330
          </a>
          <a className="mv-btn mv-btn--ghost" href="mailto:ahoj@moravska-vinoteka.cz">
            Napsat e-mail
          </a>
        </div>
      </section>

      <section className="mv-sec mv-regal" aria-labelledby="mv-regal-title">
        <div className="mv-sec__head">
          <p className="mv-eyebrow mv-eyebrow--dark">Co teď stojí v regálu</p>
          <h2 id="mv-regal-title" className="mv-h2">
            Odrůdy, které vám doporučíme jako první
          </h2>
        </div>

        <ul className="mv-shelf">
          {odrudy.map((o) => (
            <li className="mv-bottle" key={o.nazev} data-barva={o.barva}>
              <span className="mv-bottle__barva">{o.barva}</span>
              <span className="mv-bottle__nazev">{o.nazev}</span>
              <span className="mv-bottle__puvod">{o.puvod} podoblast</span>
            </li>
          ))}
        </ul>
        <p className="mv-note">
          Sortiment se mění podle ročníku i sezóny. Aktuální nabídku vždy rádi
          projdeme s vámi u pultu.
        </p>
      </section>

      <section className="mv-sec mv-sluzby" aria-labelledby="mv-sluzby-title">
        <div className="mv-sec__head">
          <p className="mv-eyebrow mv-eyebrow--dark">Jak to u nás chodí</p>
          <h2 id="mv-sluzby-title" className="mv-h2">
            Od výběru po dveře — cesta jedné lahve
          </h2>
        </div>

        <ol className="mv-flow">
          {sluzby.map((s, i) => (
            <li className="mv-flow__item" key={s.nazev}>
              <span className="mv-flow__krok">{s.krok}</span>
              <h3 className="mv-flow__nazev">
                <span className="mv-flow__num">{`0${i + 1}`}</span>
                {s.nazev}
              </h3>
              <p className="mv-flow__text">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="mv-adresa">
          Najdete nás v centru Brna, kousek od Zelného trhu. Otevřeno
          úterý–sobota, po telefonu se domluvíme i mimo.
        </p>
      </section>
    </main>
  );
}
