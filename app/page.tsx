import { Count60 } from "./motion";

const heroFacts = [
  {
    tag: "P01",
    kind: "brass",
    body: (
      <>
        <span className="factNum">
          <Count60 />
        </span>
        <span className="factLabel">let na jednom místě · 1965–2025</span>
      </>
    ),
  },
  {
    tag: "P02",
    kind: "ink",
    body: (
      <>
        <span className="factNum">6&nbsp;200+</span>
        <span className="factLabel">spravovaných bytů v Liberci</span>
      </>
    ),
  },
  {
    tag: "P03",
    kind: "render",
    body: (
      <>
        <span className="factNum accent">24/7</span>
        <span className="factLabel">havarijní služba, celý rok</span>
      </>
    ),
  },
  {
    tag: "P04",
    kind: "concrete",
    body: (
      <>
        <span className="factNum">Liberec</span>
        <span className="factLabel">domy, SVJ i družstevní byty</span>
      </>
    ),
  },
];

const services = [
  {
    tag: "P01",
    title: "Ekonomika a účetnictví",
    body: "Vedeme účetnictví domu, rozúčtujeme služby a hlídáme platby i dlužníky. Roční vyúčtování dostanete včas a srozumitelně — víte, kam jde každá koruna z fondu oprav.",
  },
  {
    tag: "P02",
    title: "Technická správa",
    body: "Plánujeme revize, opravy a rekonstrukce dopředu. Od výtahu přes rozvody a střechu až po zateplení fasády — vždycky s odhadem nákladů na stole předem.",
  },
  {
    tag: "P03",
    title: "Havarijní služba",
    body: "Prasklá stoupačka o půlnoci? Jedno číslo, které to zvedne. Havarijní technik vyjede nonstop, o víkendu i o svátcích — bez čekání do pondělí.",
  },
  {
    tag: "P04",
    title: "Právo a chod SVJ",
    body: "Připravíme shromáždění, stanovy i hlasování a odhlasované usnesení zavedeme do praxe. Pohledávky vymáháme, smlouvy hlídáme za vás.",
  },
  {
    tag: "P05",
    title: "Zateplení a dotace",
    body: "Poradíme s Novou zelenou úsporám i výběrem dodavatele. Zateplení paneláku provedeme od žádosti přes projekt až po kolaudaci — pod jedním vedením.",
  },
  {
    tag: "P06",
    title: "Přehled online",
    body: "Vlastní portál pro vlastníky: vyúčtování, dokumenty domu a stav plateb máte po ruce kdykoli. Žádné papírování a shánění po kanceláři.",
  },
];

const board = [
  {
    label: "Výročí",
    title: "60 let družstevní správy",
    body: "Sever se stará o liberecké domy od roku 1965. Šest desetiletí revizí, vyúčtování a nočních výjezdů — bez jediné vynechané topné sezóny.",
  },
  {
    label: "Reference",
    title: "„Poprvé máme jasno, kam jdou peníze.“",
    body: "Přešli jsme k Severu před osmi lety. Fond oprav je konečně přehledný a na výbor za námi jezdí přímo do domu. — předseda SVJ, Rochlice",
  },
  {
    label: "Proč družstvo",
    title: "Jsme družstvo, ne řetězec",
    body: "Rozhodují vlastníci, ne vzdálená centrála. Nemáme call centrum — správce vašeho domu znáte jménem a přijede za vámi na výbor.",
  },
  {
    label: "Kontakt",
    title: "Kde nás najdete",
    body: "Kancelář v Liberci, otevřeno pro členy Po–Čt. Havarijní linka běží nonstop, celý rok — i když je kancelář zavřená.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero band" aria-labelledby="hero-title">
        <div className="wrap heroGrid">
          <div className="heroDisplay">
            <p className="wordmark">
              <span className="wordmarkShort">SBD</span>
              <span className="wordmarkLong">Sever</span>
            </p>
            <p className="eyebrow">Správa nemovitostí · Liberec · družstvo od roku 1965</p>
            <h1 id="hero-title" className="heroTitle">
              Vaše domy.
              <br />
              Naše starost.
              <br />
              <span className="heroTitleAccent">Už šedesát let.</span>
            </h1>
            <p className="heroLead">
              Stavební bytové družstvo Sever drží liberecké panelové domy v
              kondici — účetnictví, revize, opravy i havarijní službu máte pod
              jednou střechou a s jedním správcem, kterého znáte jménem.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary" href="#sluzby">
                Poptat správu domu
              </a>
              <a className="btn btnGhost" href="#deska">
                Havarijní linka
              </a>
            </div>
          </div>

          <div className="seam" aria-hidden="true">
            <span className="seamTag seamTag1">P01</span>
            <span className="seamTag seamTag2">P02</span>
            <span className="seamTag seamTag3">P03</span>
            <span className="seamTag seamTag4">P04</span>
          </div>

          <div className="heroFacts">
            {heroFacts.map((f, i) => (
              <article
                key={f.tag}
                className={`fact fact--${f.kind}`}
                style={{ ["--i" as string]: i }}
              >
                <span className="panelTag">{f.tag}</span>
                <div className="factBody">{f.body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band services" id="sluzby" aria-labelledby="services-title">
        <div className="wrap">
          <header className="sectionHead">
            <p className="eyebrow">Modulová správa — co na vašem domě zajistíme</p>
            <h2 id="services-title" className="sectionTitle">
              Celá fasáda povinností. My držíme každý panel.
            </h2>
          </header>
          <div className="panelGrid">
            {services.map((s) => (
              <article className="servicePanel" key={s.tag}>
                <span className="panelTag">{s.tag}</span>
                <h3 className="panelTitle">{s.title}</h3>
                <p className="panelText">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band deska" id="deska" aria-labelledby="deska-title">
        <div className="wrap">
          <header className="sectionHead">
            <p className="eyebrow">Informační deska — vývěska družstva</p>
            <h2 id="deska-title" className="sectionTitle">
              Šedesát let na jedné vývěsce
            </h2>
          </header>
          <div className="boardGrid">
            {board.map((b) => (
              <article className="note" key={b.title}>
                <span className="noteLabel">{b.label}</span>
                <h3 className="noteTitle">{b.title}</h3>
                <p className="noteText">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
