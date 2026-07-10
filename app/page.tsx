import type { CSSProperties } from "react";

export const metadata = {
  title: "IZOLEX izolace staveb — ploché střechy a hydroizolace, Hradec Králové",
  description:
    "Kompletní dodávky střešních plášťů: parozábrany, tepelné izolace, fóliové hydroizolace, klempířina a jiskrová zkouška těsnosti. Hradec Králové.",
};

type Layer = {
  n: string;
  name: string;
  role: string;
  note: string;
};

// Skladba plochého střešního pláště — zdola nahoru, jak ji firma reálně montuje.
const skladba: Layer[] = [
  {
    n: "01",
    name: "Parotěsná zábrana",
    role: "Drží vlhkost dole",
    note: "Brání kondenzaci vodní páry z interiéru uvnitř skladby.",
  },
  {
    n: "02",
    name: "Tepelná izolace",
    role: "Ušetří na vytápění",
    note: "Spádové i rovné desky ve vrstvách, spáry na vazbu.",
  },
  {
    n: "03",
    name: "Hydroizolační fólie",
    role: "Nepustí vodu dovnitř",
    note: "Mechanicky kotvená nebo přitížená, svary horkým vzduchem.",
  },
  {
    n: "04",
    name: "Klempířina a detaily",
    role: "Uzavře okraje",
    note: "Oplechování atik, prostupy, vpusti, hromosvod, světlíky.",
  },
];

type Job = {
  date: string;
  place: string;
  what: string;
  area: string;
};

const realizace: Job[] = [
  {
    date: "31 / 05 2023",
    place: "BD Mladá Boleslav",
    what: "Jiskrová zkouška těsnosti hydroizolace",
    area: "570 m²",
  },
  {
    date: "20 / 05 2023",
    place: "Hala KRPA Hostinné",
    what: "Oprava střešního pláště haly",
    area: "1 770 m²",
  },
];

export default function Page() {
  return (
    <main className="iz-main">
      <a className="iz-skip" href="#skladba">
        Přeskočit na obsah
      </a>

      {/* ===== HERO ===== */}
      <header className="iz-hero">
        <div className="iz-hero__bar">
          <span className="iz-mark" aria-label="IZOLEX izolace staveb">
            IZO<span className="iz-mark__x">L</span>EX
            <span className="iz-mark__sub">izolace staveb</span>
          </span>
          <span className="iz-hero__loc">Hradec Králové</span>
        </div>

        <div className="iz-hero__grid">
          <div className="iz-hero__copy">
            <p className="iz-eyebrow">Ploché střechy · od parozábrany po poslední svar</p>
            <h1 className="iz-h1">
              Střecha, kterou<br />
              <span className="iz-h1__accent">nezmáčí déšť</span>
            </h1>
            <p className="iz-lead">
              Montujeme kompletní ploché střešní pláště — parozábrany, tepelné
              izolace, fóliové hydroizolace i klempířinu. Každý spoj kontrolujeme
              jiskrovou zkouškou těsnosti, takže víte, že drží.
            </p>
            <div className="iz-hero__cta">
              <a className="iz-btn iz-btn--solid" href="tel:+420602427655">
                Zavolat 602 427 655
              </a>
              <a className="iz-btn iz-btn--ghost" href="#reference">
                Prohlédnout realizace
              </a>
            </div>
          </div>

          <figure className="iz-hero__media">
            <img
              className="iz-hero__img"
              src="/hero.webp"
              alt="Montáž fóliové hydroizolace na ploché střeše"
            />
            <figcaption className="iz-hero__tag">
              <span className="iz-hero__tagNum">28</span>
              <span className="iz-hero__tagTxt">let v terénu — od atiky po vpust</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SEKCE 1: SKLADBA / SLUŽBY ===== */}
      <section className="iz-sec iz-sec--skladba" id="skladba" aria-labelledby="skladba-h">
        <div className="iz-sec__head">
          <p className="iz-eyebrow iz-eyebrow--dark">Co skládáme na vaši střechu</p>
          <h2 className="iz-h2" id="skladba-h">
            Čtyři vrstvy, které rozhodují o&nbsp;suchu
          </h2>
          <p className="iz-sec__intro">
            Střešní plášť čteme odspodu nahoru — přesně v tom pořadí ho i montujeme.
            Každá vrstva má jeden úkol, a když jeden článek chybí, promokne celek.
          </p>
        </div>

        <ol className="iz-stack">
          {skladba.map((l, i) => (
            <li
              className="iz-layer"
              key={l.n}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="iz-layer__n">{l.n}</span>
              <div className="iz-layer__body">
                <h3 className="iz-layer__name">{l.name}</h3>
                <p className="iz-layer__role">{l.role}</p>
                <p className="iz-layer__note">{l.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="iz-sec__figure">
          <img
            className="iz-sec__img"
            src="/section-1.webp"
            alt="Detail svařované fóliové hydroizolace na ploché střeše"
          />
          <figcaption>
            Fólii svařujeme horkým vzduchem a každý svar prověříme — projekt detailů
            a odborné posudky bereme jako součást dodávky.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / REFERENCE ===== */}
      <section className="iz-sec iz-sec--ref" id="reference" aria-labelledby="ref-h">
        <div className="iz-ref__grid">
          <figure className="iz-ref__media">
            <img
              className="iz-ref__img"
              src="/section-2.webp"
              alt="Dokončený plochý střešní plášť průmyslové haly"
            />
          </figure>

          <div className="iz-ref__copy">
            <p className="iz-eyebrow iz-eyebrow--dark">Poslední práce z terénu</p>
            <h2 className="iz-h2" id="ref-h">
              Metry, které už drží
            </h2>
            <p className="iz-sec__intro">
              Neděláme vzorníky do brožur — děláme střechy hal a bytových domů.
              Tady jsou dvě čerstvé zakázky i s tím, kolik metrů jsme uzavřeli.
            </p>

            <ul className="iz-jobs">
              {realizace.map((j) => (
                <li className="iz-job" key={j.place}>
                  <span className="iz-job__date">{j.date}</span>
                  <div className="iz-job__main">
                    <span className="iz-job__place">{j.place}</span>
                    <span className="iz-job__what">{j.what}</span>
                  </div>
                  <span className="iz-job__area">{j.area}</span>
                </li>
              ))}
            </ul>

            <div className="iz-trust">
              <p className="iz-trust__line">
                Autorizovaná firma na kompletní dodávky střešních plášťů. Součástí
                je projekční zpracování detailů, návrh nejvhodnější skladby i
                zajištění odborných posudků a expertiz.
              </p>
              <address className="iz-trust__addr">
                IZOLEX izolace staveb s.r.o. · Hradecká 1152/11, 500&nbsp;02 Hradec
                Králové · tel.{" "}
                <a href="tel:+420602427655">+420 602 427 655</a>
              </address>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
