import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROKLIMA — venkovní žaluzie a stínicí technika, Praha 8",
  description:
    "Zastíníme vám okna tak, aby dům v létě nepřehříval a v zimě neztrácel teplo. Venkovní žaluzie, rolety, screeny a pergoly. Showroom v Zenklově ulici, Praha 8.",
  openGraph: {
    title: "PROKLIMA — venkovní žaluzie a stínicí technika",
    description:
      "Rodinná firma s 20 lety praxe a přes 3 miliony zastíněných oken. Přijďte si sáhnout na lamely do showroomu v Praze 8.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 800, alt: "Fasáda se spuštěnými venkovními žaluziemi PROKLIMA" }],
  },
};

const produkty = [
  {
    kod: "Z90 / C80",
    nazev: "Venkovní žaluzie",
    popis:
      "Naklápěcí lamely před sklem — zachytí slunce dřív, než ohřeje interiér. Prokládáte světlo a soukromí jedním tahem dálkového ovladače.",
  },
  {
    kod: "ZIP",
    nazev: "Screenové rolety",
    popis:
      "Napnutá technická tkanina v bočních lištách. Tlumí žár, ale necháte si výhled ven i za zataženého stavu.",
  },
  {
    kod: "MZ",
    nazev: "Venkovní rolety",
    popis:
      "Hliníkové profily plněné pěnou. Zatemní ložnici, ztlumí hluk z ulice a v zimě přidají oknu vrstvu navíc.",
  },
  {
    kod: "PLI",
    nazev: "Plisé a vnitřní stínění",
    popis:
      "Skládaná látka na míru atypických oken — střešních, šikmých, kulatých. Vnitřní žaluzie a rolety do interiéru.",
  },
  {
    kod: "INS",
    nazev: "Sítě proti hmyzu",
    popis:
      "Posuvné i rámečkové sítě, které v okně skoro nevidíte. Otevřete na noc a komáři zůstanou venku.",
  },
  {
    kod: "PRG",
    nazev: "Pergoly a markýzy",
    popis:
      "Stínění terasy a zimní zahrady. Lamelová střecha, kterou natočíte podle toho, kde zrovna stojí slunce.",
  },
];

const showroomy = [
  "Praha 8",
  "Praha 5",
  "Praha 6",
  "Jesenice u Prahy",
  "Český Brod",
  "Mladá Boleslav",
  "Liberec",
  "Plzeň",
  "Brno",
  "Prostějov",
  "Olomouc",
];

const reference = [
  {
    jmeno: "Pavel Šlambora",
    mesto: "rodinný dům",
    text:
      "Řešili jsme přehřívání vnitřních prostor. Vybrali jsme venkovní rolety a byl to vynikající výběr — od zaměření až po montáž vše rychle a spolehlivě.",
  },
  {
    jmeno: "Tereza Gluzová",
    mesto: "byt",
    text:
      "Objednala jsem venkovní zatemňovací roletu. Instalace proběhla v řádu týdnů, a to i v létě, kdy se na stínění obvykle čeká déle. Roleta dělá přesně to, co jsem chtěla.",
  },
  {
    jmeno: "Vít Spišek",
    mesto: "Jesenice",
    text:
      "Objednali jsme venkovní žaluzie i posuvné sítě proti hmyzu. Vše nám předvedli v showroomu, technik přijel na zaměření, dodrželi termíny i ceny. Sítě jsou téměř neviditelné.",
  },
];

export default function Page() {
  return (
    <main className="pk">
      <header className="pk-top">
        <a className="pk-mark" href="#" aria-label="PROKLIMA, úvodní stránka">
          <span className="pk-mark-slats" aria-hidden="true">
            <i></i><i></i><i></i><i></i>
          </span>
          <span className="pk-mark-word">
            PRO<strong>KLIMA</strong>
          </span>
        </a>
        <nav className="pk-nav" aria-label="Hlavní">
          <a href="#produkty">Produkty</a>
          <a href="#onas">O nás</a>
          <a href="#showroomy">Showroomy</a>
        </nav>
        <a className="pk-cta-top" href="#showroomy">Najít showroom</a>
      </header>

      <section className="pk-hero" aria-labelledby="pk-hero-h">
        <div className="pk-hero-copy">
          <p className="pk-eyebrow">Stínicí technika · Praha 8, Zenklova&nbsp;43</p>
          <h1 id="pk-hero-h">
            Slunce zastavíme<br />
            <span className="pk-hero-accent">před sklem.</span>
          </h1>
          <p className="pk-lead">
            Venkovní žaluzie zachytí žár dřív, než se opře do oken a rozpálí
            pokoj. Přijďte si do showroomu naklonit lamely vlastní rukou —
            uvidíte rozdíl mezi typy stínění na živo.
          </p>
          <div className="pk-hero-actions">
            <a className="pk-btn" href="#showroomy">Přijít do showroomu</a>
            <a className="pk-btn pk-btn-ghost" href="#produkty">
              Pomůžeme s výběrem
            </a>
          </div>
          <dl className="pk-facts">
            <div>
              <dt>let na trhu</dt>
              <dd>20</dd>
            </div>
            <div>
              <dt>zastíněných oken</dt>
              <dd>3 mil.</dd>
            </div>
            <div>
              <dt>záruka</dt>
              <dd>4 roky</dd>
            </div>
          </dl>
        </div>
        <figure className="pk-hero-media">
          <img
            src="/hero.webp"
            alt="Fasáda domu se spuštěnými venkovními žaluziemi PROKLIMA, které tlumí ostré letní slunce"
            width={1200}
            height={1400}
            loading="eager"
          />
          <figcaption>Venkovní žaluzie C80 · naklopeno na 45°</figcaption>
        </figure>
      </section>

      <section id="produkty" className="pk-section" aria-labelledby="pk-prod-h">
        <div className="pk-section-head">
          <p className="pk-eyebrow">Co pro vaše okna máme</p>
          <h2 id="pk-prod-h">Od venkovní lamely po pergolu nad terasou</h2>
          <p className="pk-section-lead">
            Největší partner české značky Climax. Každé řešení vyrobíme na míru
            vašeho okna a osadíme vlastními techniky.
          </p>
        </div>
        <ul className="pk-grid">
          {produkty.map((p) => (
            <li key={p.kod} className="pk-card">
              <span className="pk-card-kod" aria-hidden="true">
                {p.kod}
              </span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="onas" className="pk-trust" aria-labelledby="pk-trust-h">
        <div className="pk-trust-media">
          <img
            src="/section-1.webp"
            alt="Technici PROKLIMA při montáži venkovních žaluzií na fasádu"
            width={900}
            height={1100}
            loading="lazy"
          />
        </div>
        <div className="pk-trust-body">
          <p className="pk-eyebrow">Rodinná firma, ne prodejní řetězec</p>
          <h2 id="pk-trust-h">
            Dvacet let děláme jednu věc — a děláme ji celou
          </h2>
          <p>
            Zaměříme, vyrobíme, namontujeme a postaráme se i po záruce. Výrobek
            projde výstupní kontrolou, než k vám dorazí. Když je potřeba, napojíme
            stínění na chytrou domácnost Somfy, aby se žaluzie samy stáhly, když
            přijde slunce nebo vítr.
          </p>
          <ul className="pk-steps">
            <li>
              <span className="pk-step-n">01</span>
              <div>
                <strong>Zaměření na místě</strong>
                <p>Technik přijede, změří okna a poradí, co dává smysl.</p>
              </div>
            </li>
            <li>
              <span className="pk-step-n">02</span>
              <div>
                <strong>Výroba na míru</strong>
                <p>Přesně na vaše rozměry, s výstupní kontrolou každého kusu.</p>
              </div>
            </li>
            <li>
              <span className="pk-step-n">03</span>
              <div>
                <strong>Montáž a servis</strong>
                <p>Osadíme vlastní tým a zůstáváme na příjmu i po záruce.</p>
              </div>
            </li>
          </ul>

          <figure className="pk-quotes">
            {reference.map((r) => (
              <blockquote key={r.jmeno}>
                <p>„{r.text}“</p>
                <cite>
                  {r.jmeno} <span>· {r.mesto}</span>
                </cite>
              </blockquote>
            ))}
          </figure>
        </div>
      </section>

      <section id="showroomy" className="pk-showrooms" aria-labelledby="pk-sh-h">
        <div className="pk-showrooms-head">
          <p className="pk-eyebrow">11 poboček po celé ČR</p>
          <h2 id="pk-sh-h">Sáhněte si na materiály osobně</h2>
          <p>
            Ve showroomu porovnáte typy stínění vedle sebe, projdete vzorníky
            látek a lamel a odejdete s konkrétním doporučením. Nejblíž k nám to
            máte do Zenklovy ulice v Praze&nbsp;8.
          </p>
        </div>
        <ul className="pk-cities">
          {showroomy.map((m, i) => (
            <li key={m} className={i === 0 ? "pk-city pk-city-home" : "pk-city"}>
              {m}
              {i === 0 && <span className="pk-city-tag">nejblíž</span>}
            </li>
          ))}
        </ul>
        <img
          className="pk-showrooms-strip"
          src="/section-2.webp"
          alt="Vzorník lamel a látek v showroomu PROKLIMA"
          width={1400}
          height={600}
          loading="lazy"
        />
      </section>
    </main>
  );
}
