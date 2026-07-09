import type { CSSProperties } from "react";

const services = [
  {
    id: "01",
    name: "Izolace plochých střech",
    material: "Fatrafol · Rhenofol",
    text: "Hydroizolační a termoizolační vrstvy střešního pláště rozhodují o životnosti celé konstrukce. Skladbu navrhneme podle sklonu, provozu a zatížení — od bytových domů po průmyslové haly.",
  },
  {
    id: "02",
    name: "Hydroizolace spodních staveb",
    material: "Fólie · asfaltové pásy",
    text: "Spolehlivá clona proti podpovrchové a tlakové vodě. Zabráníme pronikání vlhkosti do základů, sklepů a suterénů dřív, než napáchá škodu.",
  },
  {
    id: "03",
    name: "Tepelné izolace",
    material: "Ti Ventizol · minerální vlna",
    text: "Tepelné izolace stropů, plášťů a průmyslových celků. Šetří energii a drží konstantní teplotu tam, kde na ní záleží.",
  },
  {
    id: "04",
    name: "Pokrývačské práce",
    material: "skládaná krytina",
    text: "Dobře položená krytina s poctivým podkladem plní svou funkci desítky let. Od podkladu po hřeben pracujeme na detailech, které vidí až déšť.",
  },
  {
    id: "05",
    name: "Klempířské práce",
    material: "měděný · pozinkovaný plech",
    text: "Lemování, oplechování, žlaby a svody. Ruční zpracování plechu, které odvede vodu přesně tam, kam má.",
  },
];

const projects = [
  { name: "Pošta 10", material: "Rhenofol", place: "Olomouc" },
  { name: "Hala Mapei", material: "Fatrafol 803", place: "Olomouc" },
  { name: "Pošta — kolejová hala", material: "Měděný plech", place: "Olomouc" },
  { name: "Zásobníková nádoba vč. rozvodů", material: "Ti Ventizol + Al plech", place: "Dolní Dunajovice" },
];

export default function Page() {
  return (
    <main className="si-main">
      <header className="si-topbar">
        <a className="si-wordmark" href="#" aria-label="STAV-IZOL ISO — specialista na izolace">
          <span className="si-wordmark-stav">STAV</span>
          <span className="si-wordmark-dash" aria-hidden="true">—</span>
          <span className="si-wordmark-izol">IZOL</span>
          <span className="si-wordmark-iso">ISO</span>
        </a>
        <div className="si-topmeta">
          <span>Lazecká 568/53A, Olomouc</span>
          <a href="tel:+420585204773">585&nbsp;204&nbsp;773</a>
        </div>
      </header>

      <section className="si-hero" aria-labelledby="si-hero-title">
        <div className="si-hero-media">
          <img
            src="/hero.webp"
            alt="Realizace izolace ploché střechy firmou STAV-IZOL ISO v Olomouci"
            className="si-hero-img"
          />
          <span className="si-hero-scrim" aria-hidden="true" />
        </div>

        <div className="si-hero-inner">
          <p className="si-eyebrow">Olomouc · od roku 1996 · 30 let řemesla</p>
          <h1 id="si-hero-title" className="si-hero-title">
            Tam, kde končí střecha,<br />
            <span className="si-hero-em">začíná naše práce.</span>
          </h1>
          <p className="si-hero-lede">
            Jsme specialisté na izolace. Držíme suché ploché střechy, základy i haly —
            vrstvu po vrstvě, spoj po spoji. Stovky hotových projektů napříč Olomouckým krajem.
          </p>
          <div className="si-hero-cta">
            <a className="si-btn si-btn-primary" href="tel:+420585204773">Zavolat na 585&nbsp;204&nbsp;773</a>
            <a className="si-btn si-btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>

        <ul className="si-strata" aria-label="Vrstvy izolačního souvrství">
          <li><span className="si-strata-n">1</span> Nosná konstrukce</li>
          <li><span className="si-strata-n">2</span> Parozábrana</li>
          <li><span className="si-strata-n">3</span> Tepelná izolace</li>
          <li><span className="si-strata-n">4</span> Hydroizolační fólie</li>
        </ul>
      </section>

      <section className="si-services" id="sluzby" aria-labelledby="si-services-title">
        <div className="si-section-head">
          <p className="si-eyebrow si-eyebrow-dark">Co umíme</p>
          <h2 id="si-services-title" className="si-section-title">Pět řemesel, jedna suchá stavba</h2>
          <p className="si-section-note">
            Vše provádějí naši kvalifikovaní pracovníci proškolení jednotlivými dodavateli
            materiálů — s oprávněním ke zpracování jejich výrobků.
          </p>
        </div>

        <div className="si-services-grid">
          <img
            src="/section-1.webp"
            alt="Detail hydroizolační fólie a klempířských prvků na ploché střeše"
            className="si-services-img"
          />
          <ol className="si-service-list">
            {services.map((s) => (
              <li className="si-service" key={s.id} style={{ "--i": s.id } as CSSProperties}>
                <span className="si-service-id">{s.id}</span>
                <div className="si-service-body">
                  <h3 className="si-service-name">{s.name}</h3>
                  <p className="si-service-material">{s.material}</p>
                  <p className="si-service-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="si-trust" id="reference" aria-labelledby="si-trust-title">
        <div className="si-trust-media">
          <img
            src="/section-2.webp"
            alt="Dokončená realizace izolace haly firmou STAV-IZOL ISO"
            className="si-trust-img"
          />
        </div>
        <div className="si-trust-inner">
          <p className="si-eyebrow si-eyebrow-dark">Vybrané realizace</p>
          <h2 id="si-trust-title" className="si-section-title">
            Poznáte nás po Olomouci — podle střech, které drží
          </h2>
          <p className="si-section-note">
            Stavíme na odbornosti, profesionalitě a komplexním servisu. Tady je jen výběr
            z toho, co jsme nechali za sebou.
          </p>

          <table className="si-projects">
            <caption className="si-visually-hidden">Přehled vybraných realizací</caption>
            <thead>
              <tr>
                <th scope="col">Objekt</th>
                <th scope="col">Materiál</th>
                <th scope="col">Místo</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.name}>
                  <td data-label="Objekt">{p.name}</td>
                  <td data-label="Materiál">{p.material}</td>
                  <td data-label="Místo">{p.place}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <dl className="si-facts">
            <div>
              <dt>Na trhu</dt>
              <dd>30&nbsp;let</dd>
            </div>
            <div>
              <dt>Hotových projektů</dt>
              <dd>stovky</dd>
            </div>
            <div>
              <dt>Kde působíme</dt>
              <dd>Olomoucký kraj</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
