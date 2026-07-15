import { AiImage } from "./_ui";

const services = [
  {
    grade: "C 20/25",
    name: "Základové desky a pasy",
    desc:
      "Vytyčíme, vybedníme a zalijeme základ v jednom záběru. Beton zhutníme ponorným vibrátorem a srovnáme do roviny ±3 mm na 2m lati.",
  },
  {
    grade: "C 30/37",
    name: "Průmyslové podlahy",
    desc:
      "Drátkobetonové a vyztužené podlahy pro haly a sklady. Strojní hlazení, vsyp a řezané smršťovací spáry podle zatížení provozu.",
  },
  {
    grade: "pohled",
    name: "Pohledový beton",
    desc:
      "Bednění s viditelným rastrem spínacích tyčí a spár prken. Kompaktní plocha bez kavern — přesně tam, kde beton zůstane vidět.",
  },
  {
    grade: "do 42 m",
    name: "Čerpání a zpracování",
    desc:
      "Autočerpadlo dopraví beton až k bednění. Na místě ho zhutníme, uhladíme a ošetříme proti vysychání i mrazu.",
  },
];

const stats = [
  { n: "18 let", l: "na východočeských stavbách" },
  { n: "9 500 m³", l: "litého betonu ročně" },
  { n: "± 3 mm", l: "rovinnost na 2m lati" },
];

function Seam() {
  return (
    <div className="seam" aria-hidden="true">
      <div className="seam__ply" />
      <div className="seam__line" />
      <div className="seam__dots" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="band band--oil hero">
        <div className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Čerstvě odbedněná pohledová betonová stěna se zapuštěnými otvory po spínacích tyčích"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="band__inner hero__inner">
          <div className="wordmark">
            <span className="wordmark__mark">TECAM&#8202;·&#8202;PCV</span>
            <span className="wordmark__sub">betonáž a monolitické konstrukce</span>
          </div>

          <p className="hero__eyebrow">Hradec Králové &amp; východní Čechy</p>
          <h1 className="hero__title">
            Beton, který
            <br />
            drží rozměr.
          </h1>
          <p className="hero__lede">
            Bedníme, vážeme výztuž, čerpáme a hladíme beton — od základové
            desky po pohledovou stěnu. Ke každé lité části dodáme protokol
            o&nbsp;tlakové pevnosti.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420495405111">
              Zavolat mistrovi
            </a>
            <a className="btn btn--ghost" href="mailto:beton@tecampcv.cz">
              Napsat poptávku
            </a>
          </div>

          <ul className="hero__spec" aria-label="Pevnostní třídy a dosah">
            <li>C20/25 – C35/45</li>
            <li>Čerpání do 42 m</li>
            <li>Protokol pevnosti</li>
          </ul>
        </div>
      </header>

      <section className="band band--pale" aria-labelledby="svc-title">
        <Seam />
        <div className="band__inner">
          <div className="sec-head">
            <p className="eyebrow">Co betonujeme</p>
            <h2 id="svc-title" className="sec-title">
              Čtyři záběry, jedna tolerance
            </h2>
            <p className="sec-lede">
              Každou zakázku vedeme od receptury betonu po ošetření hotové
              plochy. Pevnostní třídu volíme podle zatížení — od základu po
              provozovanou podlahu.
            </p>
          </div>

          <div className="band__grid">
            <div className="media-frame">
              <AiImage
                src="/section-1.webp"
                alt="Čerpání a hlazení průmyslové betonové podlahy na stavbě haly"
                className="media-frame__img"
              />
            </div>

            <ul className="svc">
              {services.map((s) => (
                <li className="svc__item" key={s.name}>
                  <span className="svc__grade">{s.grade}</span>
                  <div className="svc__body">
                    <h3 className="svc__name">{s.name}</h3>
                    <p className="svc__desc">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band band--cement" aria-labelledby="about-title">
        <Seam />
        <div className="band__inner">
          <div className="band__grid band__grid--rev">
            <div className="about">
              <p className="eyebrow eyebrow--steel">Kdo lije váš beton</p>
              <h2 id="about-title" className="sec-title">
                Parta, která umí počkat na správnou konzistenci
              </h2>
              <p className="sec-lede">
                Jsme betonářská firma z&nbsp;Hradce Králové. Pracujeme pro
                developery, průmyslové haly i&nbsp;rodinné stavby v&nbsp;Pardubickém
                a&nbsp;Královéhradeckém kraji. Na stavbu jezdí tým, který beton
                nejen uloží, ale i&nbsp;ošetří — protože kvalita se pozná až po
                odbednění.
              </p>

              <dl className="stats">
                {stats.map((s) => (
                  <div className="stats__row" key={s.n}>
                    <dt className="stats__n">{s.n}</dt>
                    <dd className="stats__l">{s.l}</dd>
                  </div>
                ))}
              </dl>

              <p className="refs__label">Kde nás najdete odbedněné</p>
              <ul className="refs">
                <li>Výrobní hala, Hradec Králové – Plačice</li>
                <li>Bytový dům Slezské Předměstí</li>
                <li>Skladová podlaha 2 400 m², Opatovice</li>
                <li>Pohledové schodiště, Nový Hradec</li>
              </ul>
            </div>

            <div className="media-frame">
              <AiImage
                src="/section-2.webp"
                alt="Betonáři vážou ocelovou výztuž v bednění před litím monolitické stěny"
                className="media-frame__img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
