import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kantor Sport — vybavení pro tělocvičny, kluby a školy | Ústí nad Labem",
  description:
    "Kompletní sportovní vybavení z Ústí nad Labem. Atletika Polanik, gymnastické nářadí Bänfer, míče Gala a Molten, tatami i posilovací stroje. Školám a obcím dodáváme na fakturu.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230b3d2e'/%3E%3Ctext x='16' y='23' font-family='Arial' font-size='18' font-weight='900' fill='%23f2c14e' text-anchor='middle'%3EKS%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    title: "Kantor Sport — vybavení pro tělocvičny, kluby a školy",
    description:
      "Sportovní potřeby z Ústí nad Labem. Od atletiky a gymnastiky po míčové hry. Školám a obcím na fakturu.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Sortiment Kantor Sport" }],
  },
};

const oddeleni = [
  { nazev: "Atletika", pocet: 761, popis: "Polanik, Getra, Nordic — od překážek po vrhačské náčiní." },
  { nazev: "Volejbal, beach, vybíjená", pocet: 230, popis: "Sítě, antény, míče Gala a Mikasa." },
  { nazev: "Posilovací stroje", pocet: 219, popis: "Kettler a činkové sestavy do posiloven i domů." },
  { nazev: "Fotbal, futsal, nohejbal", pocet: 217, popis: "Dresy, branky, trenažéry i trenýrky ke garniturám." },
  { nazev: "Basketbal, streetball", pocet: 194, popis: "Koše, desky a míče Molten pro haly i hřiště." },
  { nazev: "Žíněnky, koberce, klíny", pocet: 171, popis: "Doskočiště a bezpečné plochy pro gymnastiku." },
  { nazev: "Házená", pocet: 115, popis: "Míče Select, branky a příslušenství." },
  { nazev: "Tělocvičné nářadí", pocet: 111, popis: "Žebřiny, švédské bedny, kladiny." },
];

const akce = [
  { nazev: "Tenisová síť 3 mm, zdvojená standard", kod: "14059", cena: "3 294", puvodni: "3 600" },
  { nazev: "Žebřina Ribstol Speciál 215 × 80 cm", kod: "9036", cena: "5 399", puvodni: "6 000" },
  { nazev: "Tatami judo žíněnka 200 × 100 × 4 cm", kod: "11027", cena: "3 368", puvodni: "4 000" },
  { nazev: "Florbalová maska Unihoc", kod: "14099", cena: "2 099", puvodni: "2 200" },
  { nazev: "Míč házená Select HB Mundo, muži", kod: "4043", cena: "720", puvodni: "800" },
  { nazev: "Trampolína 100 cm", kod: "10005", cena: "1 239", puvodni: "1 500" },
];

export default function Page() {
  return (
    <main className="ks">
      <header className="ks-top">
        <a className="ks-mark" href="#" aria-label="Kantor Sport, úvod">
          <span className="ks-mark__ks">KANTOR</span>
          <span className="ks-mark__sport">SPORT</span>
          <span className="ks-mark__loc">Ústí nad Labem</span>
        </a>
        <nav className="ks-nav" aria-label="Hlavní">
          <a href="#oddeleni">Oddělení</a>
          <a href="#akce">Akce</a>
          <a href="#o-nas">Pro školy a kluby</a>
        </nav>
      </header>

      <section className="ks-hero" aria-labelledby="hero-nadpis">
        <div className="ks-hero__img">
          <img
            src="/hero.webp"
            alt="Sportovní vybavení Kantor Sport — nářadí, míče a náčiní připravené k odeslání"
            width={1600}
            height={1100}
          />
        </div>
        <div className="ks-hero__text">
          <p className="ks-eyebrow">Sportovní potřeby · od roku na hřišti i v tělocvičně</p>
          <h1 id="hero-nadpis">
            Vybavíme celou<br />
            <em>tělocvičnu</em> — ne jen<br />
            jednu poličku.
          </h1>
          <p className="ks-lead">
            Přes 4 500 položek pod jednou střechou v Ústí nad Labem. Atletika Polanik,
            gymnastické nářadí Bänfer, míče Gala i Molten, tatami, žebřiny a posilovací
            stroje. Poradíme, spočítáme rozpočet a připravíme dodávku pro celý klub.
          </p>
          <div className="ks-hero__cta">
            <a className="ks-btn" href="#o-nas">Poptat vybavení pro klub</a>
            <a className="ks-btn ks-btn--ghost" href="#akce">Prohlédnout akční ceny</a>
          </div>
          <ul className="ks-hero__stats">
            <li><strong>44</strong> sportovních oddělení</li>
            <li><strong>4 500+</strong> položek skladem i na objednávku</li>
            <li><strong>Na fakturu</strong> školám, obcím, institucím</li>
          </ul>
        </div>
      </section>

      <section className="ks-oddeleni" id="oddeleni" aria-labelledby="oddeleni-nadpis">
        <div className="ks-sec-head">
          <p className="ks-eyebrow">Katalog podle sportu</p>
          <h2 id="oddeleni-nadpis">Najdete tu sport, který zrovna trénujete</h2>
          <p className="ks-sec-sub">
            Rozdělené tak, jak přemýšlí trenér — podle disciplíny. Čísla ukazují,
            kolik položek v daném oddělení právě vedeme.
          </p>
        </div>
        <ul className="ks-grid">
          {oddeleni.map((o) => (
            <li key={o.nazev} className="ks-card">
              <span className="ks-card__num">{o.pocet}</span>
              <span className="ks-card__label">položek</span>
              <h3>{o.nazev}</h3>
              <p>{o.popis}</p>
            </li>
          ))}
        </ul>
        <div className="ks-oddeleni__more">
          <img
            src="/section-1.webp"
            alt="Regály s míči a sportovním náčiním v prodejně Kantor Sport"
            width={1200}
            height={800}
          />
          <div>
            <h3>A dalších 36 oddělení</h3>
            <p>
              Badminton, box, kimona a tatami, stolní tenis, plavecké potřeby,
              trampolíny, vodní turistika i rehabilitace. Když si nevíte rady,
              zavolejte — dohledáme i to, co v katalogu nevidíte.
            </p>
          </div>
        </div>
      </section>

      <section className="ks-akce" id="akce" aria-labelledby="akce-nadpis">
        <div className="ks-sec-head">
          <p className="ks-eyebrow">Právě zlevněno</p>
          <h2 id="akce-nadpis">Akční ceny, které skutečně platí</h2>
          <p className="ks-sec-sub">
            Garantujeme nejnižší ceny sportovních potřeb v ČR. Najdete-li zboží
            jinde levněji, ozvěte se — srovnáme se.
          </p>
        </div>
        <ul className="ks-akce__list">
          {akce.map((a) => (
            <li key={a.kod} className="ks-akce__item">
              <div className="ks-akce__info">
                <h3>{a.nazev}</h3>
                <span className="ks-akce__kod">kód {a.kod}</span>
              </div>
              <div className="ks-akce__price">
                <span className="ks-akce__now">{a.cena} Kč</span>
                <span className="ks-akce__old">{a.puvodni} Kč</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="ks-onas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="ks-onas__img">
          <img
            src="/section-2.webp"
            alt="Sportovní vybavení připravené k expedici pro školu"
            width={1200}
            height={900}
          />
        </div>
        <div className="ks-onas__text">
          <p className="ks-eyebrow">Kantor Sport — Tomáš Strašík</p>
          <h2 id="onas-nadpis">Dodáváme školám, obcím a klubům na fakturu</h2>
          <p>
            Nejsme e-shop, který jen odešle balík. Sedneme si nad rozpočtem
            tělocvičny, doporučíme značky, které vydrží každodenní zátěž, a
            zajistíme dodávku i pro celou obec najednou. Státním institucím
            účtujeme na fakturu se splatností.
          </p>
          <ul className="ks-onas__points">
            <li>
              <strong>Značky, na kterých stavíme.</strong> Atletika Polanik,
              Getra a Nordic, gymnastika Bänfer, míče Gala Prostějov, Molten a Mikasa,
              posilovací stroje Kettler.
            </li>
            <li>
              <strong>Ceníky na vyžádání.</strong> Kompletní ceník Polaniku ke stažení,
              ceníky Getra a Nordic rádi zašleme e-mailem.
            </li>
            <li>
              <strong>Osobní odběr v Ústí nad Labem.</strong> Zboží si můžete
              prohlédnout a vyzvednout přímo u nás.
            </li>
          </ul>
          <a className="ks-btn" href="#o-nas">Vyžádat ceník a nabídku</a>
        </div>
      </section>
    </main>
  );
}
