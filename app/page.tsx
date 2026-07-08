import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1. HP Servis — servis a prodej vestavných spotřebičů, Ostrava",
  description:
    "Opravy praček, myček, chladniček, trub i varných desek v Ostravě. Vlastní dispečink, originální náhradní díly a nové centrum vestavných spotřebičů v Kunčičkách.",
  openGraph: {
    title: "1. HP Servis — servis spotřebičů, Ostrava",
    description:
      "Opravy a prodej bílé techniky v Ostravě. Diagnostika u vás doma, originální díly, autorizovaný servis.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const spotrebice = [
  {
    kod: "PR",
    nazev: "Pračky a sušičky",
    zavada: "Nevytáčí, neodčerpává, hučí ložisko",
    poznamka: "Výměna ložisek, čerpadel i elektroniky.",
  },
  {
    kod: "MY",
    nazev: "Myčky nádobí",
    zavada: "Nenapouští, nesuší, hlásí chybu",
    poznamka: "Čištění okruhu, ventily, řídicí deska.",
  },
  {
    kod: "CH",
    nazev: "Chladničky a mrazáky",
    zavada: "Nechladí, namrzá, teče voda",
    poznamka: "Kompresory, těsnění, doplnění chladiva.",
  },
  {
    kod: "TR",
    nazev: "Trouby a vestavné pečení",
    zavada: "Netopí, nehlídá teplotu, nesvítí",
    poznamka: "Topná tělesa, čidla, dvířka.",
  },
  {
    kod: "VD",
    nazev: "Varné desky",
    zavada: "Nezapaluje, indukce nehřeje",
    poznamka: "Indukční cívky, dotyk, sklo Faber.",
  },
  {
    kod: "OD",
    nazev: "Odsavače par",
    zavada: "Slabý tah, hlučný motor",
    poznamka: "Motory, filtry, osvětlení.",
  },
];

const kroky = [
  {
    c: "01",
    t: "Popíšete závadu",
    d: "Zavoláte na dispečink nebo vyplníte poptávku opravy. Řekněte značku, model a co spotřebič dělá.",
  },
  {
    c: "02",
    t: "Domluvíme termín",
    d: "Ozveme se s konkrétním dnem. Technik dorazí za vámi po Ostravě i okolí s vybaveným autem.",
  },
  {
    c: "03",
    t: "Diagnostika na místě",
    d: "Najdeme příčinu, řekneme cenu opravy dopředu. Běžné díly vezeme s sebou, ostatní doobjednáme.",
  },
  {
    c: "04",
    t: "Oprava a záruka",
    d: "Vyměníme díl, otestujeme a předáme funkční spotřebič. Na práci i díly dostanete záruční list.",
  },
];

export default function Page() {
  return (
    <main className="hp">
      <header className="hp-nav" aria-label="Hlavní">
        <a className="hp-logo" href="#" aria-label="1. HP Servis, domů">
          <span className="hp-logo-mark" aria-hidden="true">1<span>.</span>HP</span>
          <span className="hp-logo-word">Servis</span>
        </a>
        <nav className="hp-nav-links">
          <a href="#sluzby">Co opravujeme</a>
          <a href="#duvera">O firmě</a>
          <a className="hp-nav-tel" href="tel:+420596613720">596&nbsp;613&nbsp;720</a>
        </nav>
      </header>

      <section className="hp-hero">
        <div className="hp-hero-media">
          <img
            src="/hero.webp"
            alt="Prodejna a servisní centrum vestavných spotřebičů 1. HP Servis v Ostravě-Kunčičkách"
            className="hp-hero-img"
          />
          <div className="hp-hero-scrim" aria-hidden="true" />
        </div>

        <div className="hp-hero-inner">
          <p className="hp-eyebrow">
            <span className="hp-dot" aria-hidden="true" />
            Ostrava-Kunčičky · dispečink pro celý kraj
          </p>
          <h1 className="hp-hero-title">
            Když spotřebič <em>stávkuje</em>,<br />
            my víme, kde hledat.
          </h1>
          <p className="hp-hero-lead">
            Servis bílé techniky a prodej vestavných spotřebičů pod jednou
            střechou. Diagnostika u vás doma, originální náhradní díly, cena
            opravy dopředu — a nové centrum vestaveb, kde si vyberete i novou
            lednici Liebherr nebo desku Faber.
          </p>
          <div className="hp-hero-cta">
            <a className="hp-btn hp-btn-primary" href="tel:+420596613720">
              Zavolat na dispečink
            </a>
            <a className="hp-btn hp-btn-ghost" href="#sluzby">
              Poptat opravu
            </a>
          </div>
          <dl className="hp-hero-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Čt 8–16, Pá 8–15</dd>
            </div>
            <div>
              <dt>Záruka Liebherr</dt>
              <dd>až 10 let na spotřebič</dd>
            </div>
            <div>
              <dt>Servis vozí díly</dt>
              <dd>k vám domů po Ostravě</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="hp-services" aria-labelledby="sluzby-nadpis">
        <div className="hp-section-head">
          <p className="hp-eyebrow hp-eyebrow-dark">Servisní list</p>
          <h2 id="sluzby-nadpis" className="hp-h2">
            Šest okruhů, které řešíme každý den
          </h2>
          <p className="hp-section-sub">
            Ať máte spotřebič od jakékoli značky, nejčastější závady známe
            zpaměti. U poptávky nám napište, co přístroj dělá — čím přesnější
            popis, tím rychleji přivezeme správný díl.
          </p>
        </div>

        <ul className="hp-cards">
          {spotrebice.map((s) => (
            <li key={s.kod} className="hp-card">
              <span className="hp-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="hp-card-title">{s.nazev}</h3>
              <p className="hp-card-zavada">{s.zavada}</p>
              <p className="hp-card-pozn">{s.poznamka}</p>
            </li>
          ))}
        </ul>

        <div className="hp-shop">
          <img
            src="/section-1.webp"
            alt="Vystavené vestavné spotřebiče v centru vestaveb 1. HP Servis"
            className="hp-shop-img"
          />
          <div className="hp-shop-text">
            <p className="hp-eyebrow hp-eyebrow-dark">Nové centrum vestaveb</p>
            <h3 className="hp-h3">Nekupujte spotřebič naslepo</h3>
            <p>
              V prodejně v Kunčičkách si vestavné trouby, desky a chladničky
              osaháte naživo. Poradíme s rozměry do kuchyňské linky, s energií
              i s tím, co se vyplatí opravit a co už vyměnit. Vezeme značky,
              které umíme i servisovat — Liebherr, Faber a další.
            </p>
            <ul className="hp-tick">
              <li>Výběr podle rozměru vaší linky, ne podle letáku</li>
              <li>Doprava a montáž po Ostravě vlastními techniky</li>
              <li>Starý spotřebič odvezeme k ekologické likvidaci</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="duvera" className="hp-trust" aria-labelledby="duvera-nadpis">
        <div className="hp-trust-grid">
          <div className="hp-trust-media">
            <img
              src="/section-2.webp"
              alt="Technik 1. HP Servis při opravě spotřebiče"
              className="hp-trust-img"
            />
          </div>
          <div className="hp-trust-text">
            <p className="hp-eyebrow hp-eyebrow-dark">O firmě</p>
            <h2 id="duvera-nadpis" className="hp-h2">
              Ostravská firma, kterou zvednete telefonem
            </h2>
            <p>
              1. HP Servis s.r.o. sídlí v Ostravě-Kunčičkách a spojuje dvě věci,
              které jinde bývají rozdělené: servis bílé techniky a prodej
              vestavných spotřebičů. Díky tomu máme přehled o dílech i o tom,
              jak se která značka chová po pár letech provozu.
            </p>
            <p>
              Máme vlastní dispečink a servisní techniky, kteří jezdí za vámi.
              Cenu opravy řekneme dřív, než začneme. A když se nedovoláte —
              třeba při výpadku linky — stačí vyplnit poptávku opravy a
              ozveme se sami.
            </p>
          </div>
        </div>

        <ol className="hp-steps">
          {kroky.map((k) => (
            <li key={k.c} className="hp-step">
              <span className="hp-step-c" aria-hidden="true">{k.c}</span>
              <h3 className="hp-step-t">{k.t}</h3>
              <p className="hp-step-d">{k.d}</p>
            </li>
          ))}
        </ol>

        <div className="hp-contact">
          <div>
            <p className="hp-contact-label">Dispečink oprav</p>
            <a className="hp-contact-big" href="tel:+420596613720">
              596 613 720
            </a>
          </div>
          <div className="hp-contact-side">
            <p>
              <span>E-mail</span>
              <a href="mailto:hpservis@hpservis.com">hpservis@hpservis.com</a>
            </p>
            <p>
              <span>Kde nás najdete</span>
              Ostrava-Kunčičky
            </p>
            <p>
              <span>Otevírací doba</span>
              Po–Čt 8:00–16:00 · Pá 8:00–15:00
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
