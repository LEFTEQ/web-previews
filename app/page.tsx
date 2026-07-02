const sluzby = [
  {
    id: "podlahy",
    nazev: "Podlahové konstrukce",
    popis:
      "Průmyslové drátkobetonové podlahy, lité anhydritové i cementové potěry. Rovinnost hlídáme laserem, povrch strojně hladíme — podlaha unese vysokozdvižný vozík i regálový sklad.",
    detail: "skladové haly · výrobní provozy · garáže",
  },
  {
    id: "monolit",
    nazev: "Monolitické konstrukce",
    popis:
      "Základové desky, stěny, sloupy a stropy ze železobetonu. Kompletní dodávka: bednění, armatura, betonáž, ošetření. Vše podle statiky a norem, s protokoly o zkouškách betonu.",
    detail: "základy · stropy · opěrné stěny",
  },
  {
    id: "vrtani",
    nazev: "Jádrové vrtání",
    popis:
      "Přesné prostupy do betonu a železobetonu pro rozvody, vzduchotechniku nebo kanalizaci. Vrtáme diamantovou korunkou bez otřesů — konstrukce zůstane nedotčená.",
    detail: "prostupy Ø 25–500 mm · bez prachu a vibrací",
  },
  {
    id: "zemni",
    nazev: "Zemní práce",
    popis:
      "Výkopy základů, terénní úpravy, přípojky. Vlastní technika a řidiči, kteří znají liberecké podloží — žula pod Ještědem nás nepřekvapí.",
    detail: "výkopy · hutnění · odvoz zeminy",
  },
  {
    id: "demolice",
    nazev: "Demoliční práce",
    popis:
      "Demolice objektů i ocelových konstrukcí včetně třídění a likvidace odpadů. Připravíme parcelu tak, aby se na ní dalo hned stavět.",
    detail: "objekty · ocelové haly · likvidace sutě",
  },
];

const duvody = [
  {
    titulek: "Beton je naše jediné řemeslo",
    text: "Neděláme všechno. Děláme betonové konstrukce a to, co k nim patří — od výkopu po zahlazenou podlahu. Proto víme, kde se šetřit nesmí.",
  },
  {
    titulek: "Jednáte přímo s tím, kdo staví",
    text: "Na stavbu přijede jednatel nebo výrobní ředitel osobně. Cenu i termín vám řekne člověk, který za dílo ručí, ne obchodník z kanceláře.",
  },
  {
    titulek: "Liberec a okolí známe do detailu",
    text: "Sídlíme v Liberci 7 a stavíme po celém Liberecku — od rodinných domů v Ruprechticích po haly v průmyslové zóně Jih. Na stavbě jsme do hodiny.",
  },
];

const reference = [
  { co: "Drátkobetonová podlaha 2 400 m²", kde: "skladová hala, Liberec — průmyslová zóna Jih" },
  { co: "Železobetonová základová deska", kde: "bytový dům, Jablonec nad Nisou" },
  { co: "Demolice ocelové haly + nové základy", kde: "výrobní areál, Vratislavice nad Nisou" },
];

export default function Page() {
  return (
    <main className="ub">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="Unibuilding — betonování Liberec">
        <div className="hero-top">
          <span className="wordmark">
            UNI<b>BUILDING</b>
            <span className="wordmark-sub">s.r.o. · Liberec</span>
          </span>
          <a className="hero-tel" href="tel:+420724063101">
            +420 724 063 101
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Betonové konstrukce · podlahy · monolity · demolice</p>
          <h1 className="hero-title">
            <span className="row row-1">LIJEME</span>
            <span className="row row-2">BETON,</span>
            <span className="row row-3">
              KTERÝ <em>DRŽÍ.</em>
            </span>
          </h1>
          <p className="hero-lead">
            Základové desky, průmyslové podlahy a monolitické konstrukce pro firmy i&nbsp;rodinné
            domy na Liberecku. Od výkopu po strojně hlazený povrch — jedna parta, jedna
            odpovědnost.
          </p>
          <div className="hero-cta">
            <a className="btn btn-fill" href="tel:+420724063101">
              Zavolat: 724 063 101
            </a>
            <a className="btn btn-line" href="mailto:info@unibuilding.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        {/* signature: rozhraní čerstvé zálivky — šalovací prkna / bednění */}
        <div className="pour" aria-hidden="true">
          <div className="pour-edge" />
          <div className="pour-slab">
            <span className="pour-mark">C 25/30 · XC2 · S3</span>
            <span className="pour-mark pour-mark-2">rovinnost ± 2 mm / 2 m</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <h2 id="sluzby-h">Co pro vás vybetonujeme</h2>
          <p className="sec-sub">
            Pět věcí, které umíme pořádně. Ceníky čerpání betonu a&nbsp;litých směsí pošleme
            obratem e‑mailem.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.id} className={`karta karta-${s.id}`}>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="karta-detail">{s.detail}</span>
            </li>
          ))}
          <li className="karta karta-cenik">
            <h3>Ceník čerpání</h3>
            <p>
              Čerpání betonu i litých podlahových směsí účtujeme podle objemu a&nbsp;dojezdu.
              Zavolejte, do 24&nbsp;hodin máte konkrétní cenu pro vaši stavbu.
            </p>
            <a className="karta-link" href="mailto:info@unibuilding.cz?subject=Cen%C3%ADk%20%C4%8Derp%C3%A1n%C3%AD%20betonu">
              Vyžádat ceník e‑mailem
            </a>
          </li>
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sec-head sec-head-inv">
          <h2 id="duvera-h">Proč stavebníci na Liberecku volají nám</h2>
        </div>

        <div className="duvera-grid">
          {duvody.map((d) => (
            <article key={d.titulek} className="duvod">
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <div className="realizace">
          <h3 className="realizace-h">Z posledních realizací</h3>
          <ul className="realizace-list">
            {reference.map((r) => (
              <li key={r.co}>
                <strong>{r.co}</strong>
                <span>{r.kde}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="kontakty">
          <div className="kontakt">
            <span className="kontakt-role">Tomáš Uchytil — jednatel</span>
            <a href="tel:+420724063101">+420 724 063 101</a>
          </div>
          <div className="kontakt">
            <span className="kontakt-role">Petr Kapeš — výrobní ředitel</span>
            <a href="tel:+420608177441">+420 608 177 441</a>
          </div>
          <div className="kontakt">
            <span className="kontakt-role">Sídlo</span>
            <span className="kontakt-adresa">Rovná 202/2, 460 07 Liberec 7</span>
          </div>
        </div>
      </section>
    </main>
  );
}
