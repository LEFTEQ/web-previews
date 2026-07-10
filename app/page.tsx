import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optik Studio Jana Čížková — nezávislá optika v Praze",
  description:
    "Nezávislá pražská optika s vlastním výběrem značek — od Moscot a Etnia Barcelona po Tom Ford a Persol. Vyšetření zraku, přesné zabroušení skel, poctivé poradenství.",
};

const znacky = [
  "MOSCOT",
  "PERSOL",
  "RAY BAN",
  "TOM FORD",
  "OAKLEY",
  "ETNIA BARCELONA",
  "ic! berlin",
  "SILHOUETTE",
  "CHRISTIAN DIOR",
  "PRADA",
  "GUCCI",
  "CELINE",
  "TAG HEUER",
  "CHOPARD",
  "CAROLINE ABRAM",
  "DSQUARED2",
  "BVLGARI",
  "FENDI",
];

const sluzby = [
  {
    krok: "Vyšetření",
    nadpis: "Změření zraku bez spěchu",
    text: "Sedneme si k tomu v klidu. Změříme dioptrie, probereme, jak a kde brýle nosíte — u počítače, za volantem, na kole. Bez tlaku na okamžitý nákup.",
  },
  {
    krok: "Výběr",
    nadpis: "Obruby, které vám sednou k obličeji",
    text: "Neprodáváme, co je zrovna v regálu navíc. Zkusíme spolu tvary a barvy, dokud nenajdeme ty, ve kterých se poznáte — od ručně stavěných Moscot po titanové Silhouette.",
  },
  {
    krok: "Zabroušení",
    nadpis: "Přesné centrování a broušení skel",
    text: "Skla brousíme na míru přímo pro vaše oči a vaši obrubu. Změříme rozestup zornic i výšku pohledu, ať vidíte ostře v celé ploše skla.",
  },
  {
    krok: "Péče",
    nadpis: "Servis, dokud brýle nosíte",
    text: "Rozviklané stranice, ohnutý nosník, výměna šroubku — dorovnáme a doladíme, i když brýle koupíte a nosíte roky. Přijďte, spravíme na počkání.",
  },
];

export default function Page() {
  return (
    <main className="os">
      <header className="os-nav" aria-label="Hlavní">
        <a className="os-wordmark" href="#uvod" aria-label="Optik Studio Jana Čížková — domů">
          <span className="os-wordmark__mark" aria-hidden="true">
            <span className="os-wordmark__lens" />
            <span className="os-wordmark__lens" />
          </span>
          <span className="os-wordmark__text">
            Optik&nbsp;Studio
            <span className="os-wordmark__sub">Jana Čížková · Praha</span>
          </span>
        </a>
        <nav className="os-nav__links">
          <a href="#sluzby">Co pro vás uděláme</a>
          <a href="#znacky">Značky</a>
          <a href="#studio">O studiu</a>
        </nav>
      </header>

      <section className="os-hero" id="uvod">
        <div className="os-hero__copy">
          <p className="os-eyebrow">Nezávislá optika · Praha</p>
          <h1 className="os-hero__title">
            Brýle vybíráme<br />
            <em>okem</em>, ne podle regálu.
          </h1>
          <p className="os-hero__lead">
            Malé studio, kde si na vás najdeme čas. Změříme zrak, zkusíme spolu
            tvary a barvy a skla zabrousíme přesně pro váš pohled. Vybíráme si
            značky sami — proto u nás najdete kousky, které jinde nepotkáte.
          </p>
          <div className="os-hero__actions">
            <a className="os-btn os-btn--primary" href="#sluzby">
              Jak to u nás chodí
            </a>
            <a className="os-btn os-btn--ghost" href="#znacky">
              Prohlédnout značky
            </a>
          </div>
          <p className="os-hero__note">
            Rodinné studio od roku 2019 · e-mail dotazy@optik.studio
          </p>
        </div>
        <figure className="os-hero__media">
          <img
            src="/hero.webp"
            alt="Detail brýlových obrub a skel v Optik Studio Jana Čížková"
            className="os-hero__img"
            width={900}
            height={1100}
          />
          <figcaption className="os-hero__tag">Výběr z aktuální kolekce</figcaption>
        </figure>
      </section>

      <section className="os-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="os-section-head">
          <p className="os-eyebrow">Od dveří po hotové brýle</p>
          <h2 id="sluzby-nadpis" className="os-section-title">
            Čtyři kroky, které si u nás projdete
          </h2>
        </div>
        <ol className="os-steps">
          {sluzby.map((s, i) => (
            <li className="os-step" key={s.krok}>
              <span className="os-step__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="os-step__body">
                <p className="os-step__krok">{s.krok}</p>
                <h3 className="os-step__nadpis">{s.nadpis}</h3>
                <p className="os-step__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="os-services__media">
          <img
            src="/section-1.webp"
            alt="Zabrušování a centrování skel v dílně optiky"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="os-studio" id="studio" aria-labelledby="studio-nadpis">
        <figure className="os-studio__media">
          <img
            src="/section-2.webp"
            alt="Interiér Optik Studio Jana Čížková v Praze"
            width={1000}
            height={1100}
          />
        </figure>
        <div className="os-studio__copy">
          <p className="os-eyebrow">O studiu</p>
          <h2 id="studio-nadpis" className="os-section-title">
            Šest let vybíráme brýle, u kterých se s vámi rádi bavíme
          </h2>
          <p className="os-studio__text">
            Optik Studio vede Jana Čížková a je to opravdu studio — ne řetězec.
            Značky vybíráme podle toho, co samy umí: ruční kloub u ic! berlin,
            acetát Moscot stavěný jako před sto lety, barvy Etnia Barcelona
            mixované v Barceloně. Když si u nás vyberete obrubu, víme o ní všechno.
          </p>
          <ul className="os-facts">
            <li>
              <span className="os-facts__k">Kde jsme</span>
              <span className="os-facts__v">Praha — přijďte se poradit osobně</span>
            </li>
            <li>
              <span className="os-facts__k">Od kdy</span>
              <span className="os-facts__v">Rodinné studio od roku 2019</span>
            </li>
            <li>
              <span className="os-facts__k">Napište nám</span>
              <span className="os-facts__v">dotazy@optik.studio</span>
            </li>
          </ul>
          <blockquote className="os-quote">
            „Snad to je trošku i díky brýlím od nás.“
            <cite>— po titulu dvojnásobné mistryně světa naší zákaznice Karolíny</cite>
          </blockquote>
        </div>
      </section>

      <section className="os-brands" id="znacky" aria-labelledby="znacky-nadpis">
        <div className="os-section-head">
          <p className="os-eyebrow">Vybíráme si samy</p>
          <h2 id="znacky-nadpis" className="os-section-title">
            Značky, které u nás vyzkoušíte
          </h2>
        </div>
        <ul className="os-brands__list">
          {znacky.map((z) => (
            <li className="os-brands__item" key={z}>
              {z}
            </li>
          ))}
        </ul>
        <p className="os-brands__note">
          A další — od Persol a Carrera po Caroline Abram. Zeptejte se na konkrétní
          model, rádi ho pro vás objednáme.
        </p>
      </section>
    </main>
  );
}
