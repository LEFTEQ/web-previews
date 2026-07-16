import { HeroBrow, Hairline } from "./motion";

const SERVICES = [
  {
    name: "Microblading",
    who: "Andrea",
    time: "2 h",
    text: "Ruční tahy micročepelkou, které kopírují vaše vlastní chloupky. Nejjemnější a nejpřirozenější technika obočí.",
  },
  {
    name: "Microblading & shading",
    who: "Andrea",
    time: "2 h",
    text: "Ruční tahy doplněné o jemný ruční stín. Pro řidší obočí a chvíle, kdy chcete plnější tvar — stále přirozeně.",
  },
  {
    name: "Magic shading",
    who: "Lucie",
    time: "2 h",
    text: "Pudrový, plošně stínovaný efekt strojkem. Nejvýraznější z technik obočí a vhodný pro všechny typy pleti.",
  },
  {
    name: "Hairstrokes",
    who: "Andrea",
    time: "3 h",
    text: "Strojkem tvořené rozpráškované chloupky do ztracena. Nejvzdušnější a nejrealističtější výsledek.",
  },
  {
    name: "Oční linky",
    who: "Lucie",
    time: "2 h",
    text: "Klasická linka s protáhlou špičkou i jemně stínovaná varianta. Výraznější oči, přirozený vzhled.",
  },
  {
    name: "Aquarelle lips",
    who: "Lucie",
    time: "2 h",
    text: "Akvarelové tónování rtů. Oživí přirozenou barvu a jemně zvýrazní konturu bez ostrého okraje.",
  },
  {
    name: "Odstranění PMU",
    who: "Sandra",
    time: "dle rozsahu",
    text: "Šetrné odstranění staršího permanentního make-upu a karbonový peeling. Nový začátek pro váš tvar.",
  },
];

const TEAM = [
  {
    name: "Andrea Velanová",
    tags: ["Microblading", "Hairstrokes", "Microblading & shading"],
    tel: "+420 605 565 108",
    telHref: "tel:+420605565108",
  },
  {
    name: "Lucie Slavíčková",
    tags: ["Magic shading", "Aquarelle lips", "Oční linky"],
    tel: "+420 607 826 264",
    telHref: "tel:+420607826264",
  },
  {
    name: "Sandra Jakubcová",
    tags: ["Odstranění PMU", "Karbonový peeling", "Kosmetika", "Depilace"],
    tel: "+420 775 072 548",
    telHref: "tel:+420775072548",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <p className="kicker">Permanentní make-up · Brno–Křenová</p>
        <h1 className="wordmark">
          Studio<span className="wordmark__w"> W</span>
        </h1>
        <div className="brow-wrap">
          <HeroBrow />
        </div>
        <p className="lede">
          Obočí, oči a rty kreslíme ručně — tah po tahu, podle vaší tváře.
          Vyměříme tvar, vybereme pigment k vaší pleti a odejdete jako vy,
          jen svěžejší.
        </p>
        <div className="cta-row">
          <a className="btn" href="tel:+420605565108">
            Rezervovat termín
            <svg className="btn__mark" viewBox="0 0 34 16" aria-hidden="true">
              <path d="M1 8 H27" />
              <path d="M21 2 L30 8 L21 14" />
            </svg>
          </a>
          <a className="btn btn--ghost" href="#sluzby">Prohlédnout techniky</a>
        </div>
        <p className="hero-meta">
          Křenová 53, Brno-střed · <a href="mailto:studio-w@seznam.cz">studio-w@seznam.cz</a>
        </p>
      </header>

      <section id="sluzby" className="sec">
        <div className="sec-head">
          <p className="eyebrow">Obočí · Oči · Rty</p>
          <h2 className="sec-title">Co pro vás uděláme</h2>
          <Hairline variant="rule" />
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <article className="svc" key={s.name}>
              <div className="svc__top">
                <h3 className="svc__name">{s.name}</h3>
                <span className="svc__tag">{s.who} · {s.time}</span>
              </div>
              <p className="svc__text">{s.text}</p>
            </article>
          ))}
        </div>
        <p className="sec-note">
          Každý termín začíná konzultací, volbou pigmentu a vyměřením tvaru.
          Permanentní make-up líčení nenahrazuje — dává mu podklad.
        </p>
      </section>

      <section id="tym" className="sec sec--ink">
        <div className="sec-head">
          <p className="eyebrow">Andrea · Lucie · Sandra</p>
          <h2 className="sec-title">Tři páry rukou</h2>
          <Hairline variant="rule" />
        </div>
        <p className="sec-intro">
          Jsme vystudované kosmetičky a permanentní make-up je naše řemeslo.
          Každá z nás vede svoje techniky — dohromady pokryjeme obočí, oči,
          rty i odstranění staršího PMU.
        </p>
        <div className="team">
          {TEAM.map((m, i) => (
            <div className="team__item" key={m.name}>
              {i > 0 && <Hairline variant="divider" />}
              <div className="stylist">
                <h3 className="stylist__name">{m.name}</h3>
                <ul className="stylist__tags">
                  {m.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a className="stylist__tel" href={m.telHref}>{m.tel}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
