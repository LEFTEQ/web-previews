import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lidařík, s.r.o. — studnaři a sanace podzemních vod, Brno",
  description:
    "Od roku 1996 pracujeme s podzemní vodou na Brněnsku. Čištění studní a vrtů, TV kamera do vrtu, čerpací zkoušky, sanace znečištěných vod i odvodnění stavebních jam.",
  openGraph: {
    title: "Lidařík, s.r.o. — studnaři a sanace podzemních vod, Brno",
    description:
      "Studnaři z Brna. Čištění a prohlídka vrtů TV kamerou, čerpací zkoušky, montáž vodáren, sanace podzemních vod.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    hloubka: "0–2 m",
    zona: "Hlava studny",
    nazev: "Čištění studní a montáž vodáren",
    popis:
      "Vyčerpáme studnu, odstraníme nános a bahno ze dna, vydezinfikujeme a znovu rozjedeme. Připojíme vodárnu, tlakovou nádobu i automatiku, aby vám z kohoutku tekla čistá voda.",
  },
  {
    hloubka: "2–40 m",
    zona: "Zvodnělá vrstva",
    nazev: "Prohlídka vrtu TV kamerou",
    popis:
      "Spustíme do vrtu barevnou kameru a natočíme, co se děje pod hladinou — praskliny v pažnici, zanesené perforace, hloubku usazenin. Dostanete záznam a jasné doporučení, ne dohady.",
  },
  {
    hloubka: "měření",
    zona: "Vydatnost",
    nazev: "Čerpací a hydrodynamické zkoušky",
    popis:
      "Změříme, kolik vody vrt reálně dá a jak rychle se hladina vrací. Podklad pro projekt, kolaudaci i pro to, abyste věděli, na čem jste, ještě před stavbou.",
  },
  {
    hloubka: "kontaminace",
    zona: "Znečištění",
    nazev: "Sanace podzemních vod a vzduchu",
    popis:
      "Řešíme ropné látky, chlorované uhlovodíky i pesticidy. Vodu odčerpáme, vyčistíme a teprve pak vypouštíme do vodoteče či kanalizace — vše v souladu s předpisy.",
  },
  {
    hloubka: "stavba",
    zona: "Stavební jáma",
    nazev: "Odvodnění stavební jámy",
    popis:
      "Když voda plní jámu při stavbě, převezmeme čerpání i případné čištění znečištěné vody před vypuštěním. Stavba nestojí a vy máte hlídané limity.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav" aria-label="Hlavní">
        <a className="wordmark" href="#" aria-label="Lidařík, studnaři Brno">
          <span className="wordmark__drop" aria-hidden="true" />
          <span className="wordmark__name">Lidařík</span>
          <span className="wordmark__sub">studnaři · Brno · od 1996</span>
        </a>
        <nav className="nav__links">
          <a href="#sluzby">Co děláme</a>
          <a href="#profil">O firmě</a>
          <a className="nav__tel" href="tel:+420602000000">
            <span aria-hidden="true">☎</span> 602 000 000
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Čerpání a práce s podzemní vodou u vrtané studny"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Technické práce s podzemními vodami · Brno a okolí</p>
          <h1 id="hero-title" className="hero__title">
            Vidíme<br />
            <span className="hero__title-em">dolů</span> do vrtu.
          </h1>
          <p className="hero__lead">
            Studna přestala dávat vodu? Zakalila se, nebo nevíte, co se děje
            pod hladinou? Spustíme do vrtu kameru, změříme vydatnost a vyčistíme,
            co je třeba — pracujeme s podzemní vodou od roku 1996.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420602000000">
              Zavolat studnaře
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme s vodou
            </a>
          </div>
        </div>
        <div className="hero__gauge" aria-hidden="true">
          <span>0 m</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>40 m</span>
        </div>
      </section>

      <section id="sluzby" className="log" aria-labelledby="log-title">
        <div className="log__head">
          <p className="eyebrow">Vrtný profil služeb</p>
          <h2 id="log-title" className="section-title">
            Odshora dolů — co řešíme v jednom vrtu
          </h2>
          <p className="section-note">
            Seřazeno tak, jak jdou práce pod zem: od hlavy studny přes zvodnělou
            vrstvu až po měření a sanaci. Každá položka je samostatná zakázka,
            klidně jen jedna.
          </p>
        </div>

        <ol className="strata">
          {sluzby.map((s, i) => (
            <li className="strata__row" key={s.nazev}>
              <div className="strata__mark">
                <span className="strata__depth">{s.hloubka}</span>
                <span className="strata__zone">{s.zona}</span>
              </div>
              <div className="strata__body">
                <h3 className="strata__title">
                  <span className="strata__num">{String(i + 1).padStart(2, "0")}</span>
                  {s.nazev}
                </h3>
                <p className="strata__text">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="log__figure">
          <img
            src="/section-1.webp"
            alt="Technika pro čerpání a čištění podzemní vody v terénu"
          />
          <figcaption>
            Vlastní čerpací a měřicí technika — vyjíždíme po Brně i do okresu.
          </figcaption>
        </figure>
      </section>

      <section id="profil" className="profil" aria-labelledby="profil-title">
        <figure className="profil__figure">
          <img
            src="/section-2.webp"
            alt="Prohlídka vrtu a odběr vzorku podzemní vody"
          />
        </figure>
        <div className="profil__body">
          <p className="eyebrow">Kdo pod tu vodu leze</p>
          <h2 id="profil-title" className="section-title">
            Bez podzemní vody neděláme od roku 1996 nic jiného
          </h2>
          <p className="profil__text">
            Lidařík, s.r.o. jsou brněnští studnaři a hydrogeologické práce.
            Nesázíme okna ani nekopeme bazény — děláme jednu věc: vodu pod zemí.
            Proto vám u vrtu poradíme věcně a napíšeme jen to, co se opravdu
            musí udělat.
          </p>
          <ul className="profil__facts">
            <li>
              <span className="profil__k">Od roku 1996</span>
              <span className="profil__v">práce jen s podzemní vodou</span>
            </li>
            <li>
              <span className="profil__k">Brno + okres</span>
              <span className="profil__v">výjezd i do okolních obcí</span>
            </li>
            <li>
              <span className="profil__k">TV kamera</span>
              <span className="profil__v">záznam vrtu na ruku</span>
            </li>
            <li>
              <span className="profil__k">Sanace</span>
              <span className="profil__v">ropné látky, CLU, pesticidy</span>
            </li>
          </ul>
          <blockquote className="profil__quote">
            „Než začneme vrtat nebo čerpat, řekneme vám, co uvidíme — a co
            se s tím reálně dá dělat. Žádné práce navíc.“
          </blockquote>
        </div>
      </section>
    </main>
  );
}
