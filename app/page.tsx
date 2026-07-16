import { AiImage } from "./_ui";

const wirePath =
  "M 8 1 C 11 5, 15 6, 21 9 C 30 12, 30 13, 34 16 C 47 21, 67 28, 80 34 C 89 38, 85 47, 74 51 C 55 58, 31 48, 18 52 C 8 55, 11 64, 21 68 C 41 76, 66 63, 74 70 C 84 76, 70 82, 52 84 C 43 85, 34 85, 30 86 C 25 87, 31 93, 41 96 C 46 97, 50 97, 52 97";

const nodes = [
  { left: "34%", top: "16%" },
  { left: "80%", top: "34%" },
  { left: "18%", top: "52%" },
  { left: "74%", top: "70%" },
  { left: "30%", top: "86%" },
  { left: "52%", top: "97%" },
];

const services = [
  {
    code: "L",
    title: "Elektroinstalace novostaveb",
    body: "Kompletní rozvody od základů: kabeláž, krabice, zásuvky a vypínače přesně podle projektu a normy.",
  },
  {
    code: "N",
    title: "Rekonstrukce a výměna hliníku",
    body: "Staré hliníkové rozvody nahradíme mědí. Bez zbytečné destrukce a vždy s revizní zprávou na závěr.",
  },
  {
    code: "PE",
    title: "Rozvaděče a jističe",
    body: "Nové rozvaděče, přejištění, proudové chrániče a přehledně popsané okruhy, ve kterých se vyznáte.",
  },
  {
    code: "L",
    title: "Revize a revizní zprávy",
    body: "Výchozí i pravidelné revize s dokumentací, kterou uzná pojišťovna, banka i stavební úřad.",
  },
  {
    code: "N",
    title: "Přípojky a elektroměry",
    body: "Připravíme přípojku a elektroměrový rozvaděč pro připojení k distribuční síti ČEZ.",
  },
  {
    code: "PE",
    title: "Přepětí a hromosvody",
    body: "Ochrana před přepětím a bleskem — pro citlivé spotřebiče i pro celý dům.",
  },
];

const facts = [
  "Revizní technik s platným oprávněním — revizi vystavíme sami, nečekáte na cizí firmu.",
  "Pracujeme podle platných ČSN a každou zakázku doložíme revizní zprávou.",
  "Ústí nad Labem a celý Ústecký kraj — na obhlídku dojedeme po domluvě.",
  "Cenu i termín si odsouhlasíme předem. Co je ve zdi, musí držet roky.",
];

export default function Page() {
  return (
    <div className="page">
      <div className="wire-layer" aria-hidden="true">
        <svg
          className="wire-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path className="wire" d={wirePath} pathLength={1} />
          <path className="pulse" d={wirePath} pathLength={1} />
        </svg>
        {nodes.map((n, i) => (
          <span
            key={i}
            className="node"
            style={{ left: n.left, top: n.top, animationDelay: `${i * -40}ms` }}
          />
        ))}
        <span className="mains-tag">hlavní přívod</span>
      </div>

      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="SLP-ELEKTRO, úvod">
          <span className="wm-slp">SLP</span>
          <span className="wm-dash" aria-hidden="true" />
          <span className="wm-el">ELEKTRO</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#co-zapojime">Co zapojíme</a>
          <a href="#o-nas">O nás</a>
          <span className="nav-loc">Ústí nad Labem</span>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-text">
          <p className="eyebrow">Elektroinstalace · Ústí nad Labem</p>
          <h1 className="hero-h1">
            Od hlavního jističe<br />
            po poslední zásuvku.
          </h1>
          <p className="hero-lead">
            Kompletní elektroinstalace, rozvaděče a revize v Ústí nad Labem
            a okolí. Jedno čisté vedení — od projektu až po revizní zprávu,
            kterou nikdo nezpochybní.
          </p>
          <ul className="legend" aria-label="Barevné značení vodičů">
            <li className="lg lg-l">
              <span className="lg-swatch" />L — fáze
            </li>
            <li className="lg lg-n">
              <span className="lg-swatch" />N — nulák
            </li>
            <li className="lg lg-pe">
              <span className="lg-swatch" />PE — uzemnění
            </li>
          </ul>
        </div>
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Elektrikář zapojuje domovní rozvaděč, urovnané měděné vodiče"
            className="hero-img"
          />
        </div>
      </section>

      <section className="section services" id="co-zapojime">
        <div className="section-head">
          <p className="eyebrow">Služby</p>
          <h2 className="section-h2">Co zapojíme</h2>
          <p className="section-intro">
            Od kabelu ve zdi po chránič v rozvaděči. Vše, co potřebuje dům,
            byt nebo provozovna, aby elektřina byla bezpečná a doložená.
          </p>
        </div>
        <ul className="svc-grid">
          {services.map((s) => (
            <li className="svc" key={s.title}>
              <span className={`svc-code code-${s.code.toLowerCase()}`}>
                {s.code}
              </span>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section about" id="o-nas">
        <div className="about-media">
          <AiImage
            src="/section-1.webp"
            alt="Nový domovní rozvaděč s popsanými jističi a proudovými chrániči"
            className="about-img"
          />
          <AiImage
            src="/section-2.webp"
            alt="Detail urovnané kabeláže v instalační krabici"
            className="about-img about-img--small"
          />
        </div>
        <div className="about-text">
          <p className="eyebrow">O nás</p>
          <h2 className="section-h2">
            Řemeslo, které se schová do zdi — a musí držet roky.
          </h2>
          <p className="section-intro">
            SLP-ELEKTRO je elektroinstalační firma z Ústí nad Labem. Děláme
            práci, kterou po nás nikdo nemusí předělávat: urovnané vodiče,
            přehledný rozvaděč a revizní zprávu, se kterou obstojíte u
            pojišťovny i na úřadě.
          </p>
          <ul className="facts">
            {facts.map((f) => (
              <li className="fact" key={f}>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
