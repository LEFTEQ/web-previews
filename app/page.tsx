import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MegaBeton — stavby z betonových bloků na míru | Svatý Mikuláš",
  description:
    "Vyrábíme a stavíme z modulárních betonových bloků přímo u vás. Haly, silážní žlaby, opěrné zdi i kóje na materiál. Mobilní výroba po celé ČR, statický posudek v ceně.",
};

const bloky = [
  {
    kod: "BLK-1600",
    nazev: "Zámek nahoře, zámek dole",
    popis:
      "Každý blok má na horní hraně výstupky a na spodní přesně padnoucí drážky. Skládají se do sebe jako stavebnice — bez malty, bez tvrdnutí, bez čekání.",
  },
  {
    kod: "MOBIL",
    nazev: "Výroba přímo na stavbě",
    popis:
      "Naše mobilní zařízení přijede za vámi a bloky lije na místě. Odpadá drahá doprava hotových kusů i objížďky s nadrozměrným nákladem.",
  },
  {
    kod: "TZÚS",
    nazev: "Certifikováno a spočítáno",
    popis:
      "Bloky mají certifikaci Technického a zkušebního ústavu stavebního Praha. Ke každé stavbě dodáme statický posudek — kvůli schválení i vašemu klidu.",
  },
];

const stavby = [
  "Výrobní a skladovací haly",
  "Silážní žlaby a jímky",
  "Opěrné a protipovodňové zdi",
  "Kóje na materiál a sypké směsi",
  "Protihlukové stěny",
  "Boxy na odpad, ohrady",
];

const cisla = [
  { hodnota: "12", jednotka: "let", popis: "vyvíjíme vlastní statický program na posuzování staveb" },
  { hodnota: "500", jednotka: "staveb", popis: "dokončených projektů po celé České republice" },
  { hodnota: "145 000", jednotka: "bloků", popis: "vyrobených a uložených na místo stavby" },
];

export default function Page() {
  return (
    <main className="mb">
      <header className="mb-top">
        <a className="mb-mark" href="#" aria-label="MegaBeton, úvod">
          <span className="mb-mark__mega">MEGA</span>
          <span className="mb-mark__beton">BETON</span>
        </a>
        <nav className="mb-nav" aria-label="Hlavní">
          <a href="#stavby">Co stavíme</a>
          <a href="#proc">Proč my</a>
          <a className="mb-nav__cta" href="tel:+420734316106">Zavolat</a>
        </nav>
      </header>

      <section className="mb-hero" aria-labelledby="hero-nadpis">
        <div className="mb-hero__grid" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="mb-hero__text">
          <p className="mb-eyebrow">Modulární betonové bloky · Svatý Mikuláš</p>
          <h1 id="hero-nadpis">
            Skládáme stavby<br />
            jako <span className="mb-hl">stavebnici</span>.
          </h1>
          <p className="mb-lead">
            Blok zapadne do bloku, zámek do drážky — a stojí hala, žlab nebo opěrná
            zeď. Bez malty, bez čekání na beton. Vyrobíme je přímo u vás na stavbě.
          </p>
          <div className="mb-hero__akce">
            <a className="mb-btn" href="#poptavka">Nezávazná kalkulace</a>
            <a className="mb-btn mb-btn--ghost" href="#stavby">Co dokážeme postavit</a>
          </div>
        </div>
        <figure className="mb-hero__foto">
          <img
            src="/hero.webp"
            alt="Stavba z šedých modulárních betonových bloků MegaBeton skládaných na sebe"
            width={1200}
            height={900}
          />
        </figure>
      </section>

      <section className="mb-sys" id="proc" aria-labelledby="sys-nadpis">
        <div className="mb-sys__head">
          <p className="mb-eyebrow">Jak to funguje</p>
          <h2 id="sys-nadpis">Tři věci, které nás odlišují</h2>
        </div>
        <ol className="mb-sys__list">
          {bloky.map((b, i) => (
            <li key={b.kod} className="mb-cell">
              <span className="mb-cell__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="mb-cell__kod">{b.kod}</span>
              <h3>{b.nazev}</h3>
              <p>{b.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-stavby" id="stavby" aria-labelledby="stavby-nadpis">
        <figure className="mb-stavby__foto">
          <img
            src="/section-1.webp"
            alt="Realizovaná stavba z betonových bloků MegaBeton"
            width={1000}
            height={800}
          />
        </figure>
        <div className="mb-stavby__text">
          <p className="mb-eyebrow">Co pro vás postavíme</p>
          <h2 id="stavby-nadpis">Od silážního žlabu po protipovodňovou zeď</h2>
          <p className="mb-stavby__uvod">
            Ze stejných bloků poskládáme velmi rozdílné stavby. Kde jsou hotové,
            dají se rozebrat a přeskládat jinde — spoj není trvalý, jen přesný.
          </p>
          <ul className="mb-stavby__seznam">
            {stavby.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mb-stavby__pozn">
            Nenašli jste to, co potřebujete postavit? Zavolejte — z bloků
            zvládneme mnohem víc.
          </p>
        </div>
      </section>

      <section className="mb-proc" id="poptavka" aria-labelledby="proc-nadpis">
        <figure className="mb-proc__foto">
          <img
            src="/section-2.webp"
            alt="Betonové bloky MegaBeton připravené k montáži"
            width={1000}
            height={800}
          />
        </figure>
        <div className="mb-proc__text">
          <p className="mb-eyebrow">Proč MegaBeton</p>
          <h2 id="proc-nadpis">Levněji, protože bloky lijeme u vás</h2>
          <p>
            Jsme výrobce i realizátor v jednom. Díky mobilní výrobě se cena
            nezvedá o dopravu hotových bloků a vy platíte za stavbu, ne za kilometry.
            Statický posudek vyvíjíme na vlastním programu už dvanáct let, takže
            stavba projde schválením bez zdržení.
          </p>
          <dl className="mb-cisla">
            {cisla.map((c) => (
              <div key={c.hodnota} className="mb-cislo">
                <dt>
                  <span className="mb-cislo__h">{c.hodnota}</span>
                  <span className="mb-cislo__j">{c.jednotka}</span>
                </dt>
                <dd>{c.popis}</dd>
              </div>
            ))}
          </dl>
          <p className="mb-proc__adresa">
            MegaBeton s.r.o. · Svatý Mikuláš 139, 284 01 · Po–Pá 6:30–15:00 ·{" "}
            <a href="tel:+420734316106">734 316 106</a>
          </p>
        </div>
      </section>
    </main>
  );
}
