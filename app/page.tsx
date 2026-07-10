import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naše Vinotéka Olomouc — víno se zárukou, 38 vín na čepu",
  description:
    "Vinotéka v Olomouci s až 38 čepovanými víny, širokým výběrem lahví a zárukou na kvalitu. Načepujeme, zchladíme, doporučíme. Sladkovského 656/38, Olomouc-Holice.",
  openGraph: {
    title: "Naše Vinotéka Olomouc — víno se zárukou",
    description:
      "Až 38 čepovaných vín, vybrané chladíme. Poradíme, načepujeme, dáme záruku na kvalitu. Vinotéka v Olomouci-Holici.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vinný kohout na čepu v Naší Vinotéce" }],
  },
};

const naCepu = [
  {
    id: "01",
    nazev: "Modrý Portugal",
    typ: "Červené, suché",
    puvod: "Morava",
    popis: "Svěží, pitelné, s vůní višní. Naše nejčastěji dotáčené víno.",
    teplota: "16 °C",
  },
  {
    id: "02",
    nazev: "Ryzlink rýnský",
    typ: "Bílé, polosuché",
    puvod: "Znojemsko",
    popis: "Broskev a lipový květ, čerstvá kyselinka. Vybrané chladíme.",
    teplota: "9 °C",
  },
  {
    id: "03",
    nazev: "Frankovka rosé",
    typ: "Růžové, polosuché",
    puvod: "Mikulovsko",
    popis: "Jahoda a granátové jablko. Do ruky i domů na terasu.",
    teplota: "8 °C",
  },
  {
    id: "04",
    nazev: "Primitivo",
    typ: "Červené, suché",
    puvod: "Apulie, Itálie",
    popis: "Novinka na čepu. Plné, hřejivé, se švestkou a kořením.",
    teplota: "17 °C",
  },
];

const nabidka = [
  {
    kicker: "Na čep",
    nadpis: "Čepovaná vína, čerstvě do vaší lahve",
    text: "Vybíráme si čas, abychom vám doporučili to pravé. Ochutnáte, než koupíte, a načepujeme přesně tolik, kolik chcete.",
  },
  {
    kicker: "Lahve",
    nadpis: "Lahvová vína z Moravy i ze světa",
    text: "Pestrý výběr od domácích vinařů po jižní Evropu. Poradíme k jídlu, k příležitosti i jen tak na večer.",
  },
  {
    kicker: "K vínu",
    nadpis: "Sýry, uzeniny a sezónní punče",
    text: "Holandské sýry, italské uzeniny a v zimě punče, které voní celou ulicí. Sestavíme dárkový balíček na počkání.",
  },
];

export default function Page() {
  return (
    <main className="nv">
      <header className="nv-top">
        <a className="nv-brand" href="#" aria-label="Naše Vinotéka Olomouc">
          <span className="nv-brand-mark" aria-hidden="true">NV</span>
          <span className="nv-brand-name">
            Naše Vinotéka
            <span className="nv-brand-sub">Olomouc · víno se zárukou</span>
          </span>
        </a>
        <a className="nv-top-link" href="#nabidka">Co u nás najdete</a>
      </header>

      <section className="nv-hero">
        <div className="nv-hero-copy">
          <p className="nv-eyebrow">Vinotéka na Sladkovského, Olomouc-Holice</p>
          <h1 className="nv-hero-title">
            <span>Až</span>
            <span className="nv-hero-num">38</span>
            <span>vín na čepu.</span>
            <span className="nv-hero-em">Vybrané chladíme.</span>
          </h1>
          <p className="nv-hero-lead">
            Přijďte s prázdnou lahví nebo si vezměte na cestu do ruky. Ochutnáte, poradíme a načepujeme
            přesně tolik, kolik potřebujete — s naší zárukou na kvalitu.
          </p>
          <div className="nv-hero-actions">
            <a className="nv-btn" href="#nabidka">Prohlédnout nabídku</a>
            <a className="nv-btn nv-btn-ghost" href="#zaruka">Co znamená „se zárukou“</a>
          </div>
          <dl className="nv-hero-facts">
            <div><dt>Na čepu</dt><dd>38 vín</dd></div>
            <div><dt>Poboček na Moravě</dt><dd>16</dd></div>
            <div><dt>V Olomouci</dt><dd>Holice</dd></div>
          </dl>
        </div>
        <figure className="nv-hero-media">
          <img
            src="/hero.webp"
            alt="Detail vinného kohoutu na čepu, jak plní sklenici červeného vína"
            width={1200}
            height={1500}
            loading="eager"
          />
          <figcaption>Čepujeme denně — ryzlink, frankovka i nové Primitivo.</figcaption>
        </figure>
      </section>

      <section className="nv-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="nv-section-head">
          <p className="nv-eyebrow">Co u nás natočíme a nabalíme</p>
          <h2 id="nabidka-h" className="nv-h2">Od čepu po dárek</h2>
          <p className="nv-section-lead">
            Nejsme regál se samoobsluhou. U pultu se s vámi pobavíme o tom, co máte rádi, necháme
            ochutnat a vyladíme výběr na míru večeru i příležitosti.
          </p>
        </div>

        <div className="nv-cards">
          {nabidka.map((n) => (
            <article className="nv-card" key={n.kicker}>
              <p className="nv-card-kicker">{n.kicker}</p>
              <h3 className="nv-card-title">{n.nadpis}</h3>
              <p className="nv-card-text">{n.text}</p>
            </article>
          ))}
        </div>

        <div className="nv-tap">
          <div className="nv-tap-head">
            <h3 className="nv-tap-title">Dnes na čepu</h3>
            <p className="nv-tap-note">Výběr se mění — tohle jsou stálice, na které se vyplatí zajet.</p>
          </div>
          <ul className="nv-tap-list">
            {naCepu.map((v) => (
              <li className="nv-tap-item" key={v.id}>
                <span className="nv-tap-id" aria-hidden="true">{v.id}</span>
                <div className="nv-tap-main">
                  <p className="nv-tap-name">{v.nazev}</p>
                  <p className="nv-tap-meta">{v.typ} · {v.puvod}</p>
                  <p className="nv-tap-desc">{v.popis}</p>
                </div>
                <span className="nv-tap-temp">{v.teplota}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nv-section nv-trust" id="zaruka" aria-labelledby="zaruka-h">
        <figure className="nv-trust-media">
          <img
            src="/section-1.webp"
            alt="Regál s lahvovými víny v Naší Vinotéce"
            width={1000}
            height={1200}
            loading="lazy"
          />
        </figure>
        <div className="nv-trust-copy">
          <p className="nv-eyebrow">Proč „se zárukou“</p>
          <h2 id="zaruka-h" className="nv-h2">Na kvalitu vína,<br />které u nás koupíte, ručíme</h2>
          <p className="nv-section-lead">
            Kdyby vám láhev nebo natočené víno nesedlo nebo bylo vadné, vyměníme ho nebo vrátíme peníze.
            Bez řečí. Proto můžete klidně zkoušet i vína, která ještě neznáte.
          </p>
          <ul className="nv-guarantee">
            <li>
              <span className="nv-guarantee-k">Ochutnáte předem</span>
              U čepu vám dáme malý vzorek, ať kupujete jistotu.
            </li>
            <li>
              <span className="nv-guarantee-k">Vadné vyměníme</span>
              Zkorkovatělé nebo vadné víno bereme zpět bez otázek.
            </li>
            <li>
              <span className="nv-guarantee-k">Poradíme k jídlu</span>
              Řekněte, co vaříte, a vybereme víno, které to podtrhne.
            </li>
          </ul>
          <div className="nv-visit">
            <img
              src="/section-2.webp"
              alt="Interiér vinotéky s pultem a nabídkou pochutin"
              width={900}
              height={600}
              loading="lazy"
            />
            <div className="nv-visit-info">
              <p className="nv-visit-title">Zastavte se u nás</p>
              <p className="nv-visit-addr">Sladkovského 656/38<br />779 00 Olomouc 9 — Holice</p>
              <p className="nv-visit-line"><span>Kancelář</span> po–pá 8:00–16:00</p>
              <a className="nv-visit-tel" href="tel:+420730159099">Zavolat: 730 159 099</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
