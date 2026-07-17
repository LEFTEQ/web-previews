import type { CSSProperties } from "react";

type Service = {
  addr: string;
  title: string;
  desc: string;
  cyan?: boolean;
};

const services: Service[] = [
  {
    addr: "N01",
    title: "Elektronická kniha jízd \u0026 GPS monitoring",
    desc: "Sledujte každou jízdu vozového parku a hlídejte spotřebu PHM. Data běží po skrytém vedení, na palubovce po nás nezůstane ani drátek.",
    cyan: true,
  },
  {
    addr: "N02",
    title: "Záznamové DVR kamery",
    desc: "Palubní autokamery — „černé skříňky\u201c — v několika variantách. Trvalý záznam přední i zadní scény pro případ nehody.",
    cyan: true,
  },
  {
    addr: "N03",
    title: "Parkovací systémy \u0026 couvací kamery",
    desc: "Kamera schovaná do třetího brzdového světla, noční infrapřísvit, 7\" monitor se spustí sám při zařazení zpátečky. Pro osobní i nákladní vozy.",
  },
  {
    addr: "N04",
    title: "Vyhřívání sedadel",
    desc: "Dodatečné vyhřívání do všech značek vozů. Topné rohože vkládáme přímo pod čalounění, ovládání ladíme s originálními tlačítky.",
  },
  {
    addr: "N05",
    title: "Antiradary",
    desc: "Prodej, montáž i aktualizace databází. Instalace bez viditelných modulů — jednotka zmizí za palubní deskou.",
  },
  {
    addr: "N06",
    title: "Tažná zařízení",
    desc: "Montáž tažných zařízení na osobní i užitkové vozy včetně elektroinstalace zásuvky a nastavení asistentů.",
  },
];

type Ref = {
  car: string;
  work: string;
};

const refs: Ref[] = [
  {
    car: "FIAT DUCATO",
    work: "Parkovací kamerový systém do dodávky. Kamera v třetím brzdovém světle s nočním infrapřísvitem, 7\" monitor zobrazí obraz automaticky při couvání.",
  },
  {
    car: "MERCEDES E",
    work: "Multimediální monitory pro cestující vzadu. Kabely jsou vedené skrytě, vnitřkem sedadel — v interiéru po nich není stopa.",
  },
  {
    car: "BMW X7",
    work: "Monitory do opěrek pro zadní řadu. Celá kabeláž schovaná uvnitř sedadel a sloupků, konektory na originálních rozvodech.",
  },
];

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Montáž zabezpečení vozidel · Brno-Černá Pole
          </p>

          <h1 className="wordmark">
            <span className="wordmark-line">AUTO</span>
            <span className="wordmark-line wordmark-line--b">SCREAM</span>
          </h1>

          <p className="hero-thesis">
            Alarm, kamery i GPS zapojíme tak, že kabely nikdo nenajde —
            <span className="hero-em"> vedeme je skrytě, vnitřkem sedadel.</span>
          </p>

          <dl className="cluster" aria-label="Stav instalace">
            <div className="cluster-item">
              <dt>Stav</dt>
              <dd className="cluster-armed">STŘEŽENO</dd>
            </div>
            <div className="cluster-item">
              <dt>Kabeláž</dt>
              <dd>skrytá</dd>
            </div>
            <div className="cluster-item">
              <dt>Vozy</dt>
              <dd>osobní · užitkové</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SLUŽBY — routing diagram */}
      <section className="block" aria-labelledby="sluzby-nadpis">
        <div className="block-head">
          <p className="block-kicker">Schéma zapojení · 6 uzlů</p>
          <h2 id="sluzby-nadpis" className="block-title">Co do vozu zapojíme</h2>
          <p className="block-lede">
            Každá služba je jeden konektor na jedné měděné trase. Jak sjíždíte
            níž, signál dobíhá k dalšímu uzlu a jeho kontrolka se „ozbrojí\u201c.
          </p>
        </div>

        <div className="loom-wrap">
          <svg
            className="loom"
            viewBox="0 0 40 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="loom-track" d="M20 0 L20 1000" />
            <path className="loom-pulse" d="M20 0 L20 1000" />
          </svg>

          <ol className="nodes">
            {services.map((s) => (
              <li className="node" key={s.addr}>
                <span className="node-rail" aria-hidden="true">
                  <span
                    className={
                      "node-dot" + (s.cyan ? " node-dot--cyan" : "")
                    }
                  />
                </span>
                <div className="node-body">
                  <span className="node-addr">{s.addr}</span>
                  <h3 className="node-title">{s.title}</h3>
                  <p className="node-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DŮVĚRA / REFERENCE */}
      <section className="block block--trust" aria-labelledby="ref-nadpis">
        <div className="block-head">
          <p className="block-kicker">Reference · z naší dílny</p>
          <h2 id="ref-nadpis" className="block-title">Montáže, které nejsou vidět</h2>
        </div>

        <blockquote className="ethos">
          <span className="ethos-mark" aria-hidden="true">„</span>
          Kabely vedeme skrytě — vnitřkem sedadel, pod čalouněním a ve sloupcích.
          Po dobré montáži poznáte jen tu funkci, ne to, kudy jde proud.
        </blockquote>

        <ul className="refs">
          {refs.map((r, i) => (
            <li className="ref" key={r.car}>
              <span className="ref-idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="ref-car">{r.car}</h3>
              <p className="ref-work">{r.work}</p>
            </li>
          ))}
        </ul>

        <dl className="assur">
          <div className="assur-item">
            <dt>Dílna</dt>
            <dd>Brno-Černá Pole, Ukázková 123</dd>
          </div>
          <div className="assur-item">
            <dt>Značky</dt>
            <dd>všechny — osobní, dodávky i nákladní</dd>
          </div>
          <div className="assur-item">
            <dt>Zapojení</dt>
            <dd>na originální rozvody, bez řezání svazků naslepo</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
