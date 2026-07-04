import type { CSSProperties } from "react";

export const metadata = {
  title: "ART 4 PROMOTION — multimediální show a eventy | České Budějovice",
  description:
    "Studio pro multimediální show, video mapping, laser show a B2B eventy z Českých Budějovic. Od roku 2003 stavíme světelné zážitky, na které se nezapomíná.",
};

type Discipline = {
  cue: string;
  name: string;
  desc: string;
};

const disciplines: Discipline[] = [
  {
    cue: "T-00:00",
    name: "Multimediální show",
    desc: "Formát, který jsme v Česku uvedli jako první už v roce 2003. Světlo, obraz, zvuk a scéna sladěné do jedné dramaturgie.",
  },
  {
    cue: "T-00:12",
    name: "Video mapping",
    desc: "Fasády a objekty se rozehrají 3D modely a animacemi na míru — od scénáře přes soundtrack až po projekci na místě.",
  },
  {
    cue: "T-00:24",
    name: "Laser show",
    desc: "Laserová animace i laser mapping ve světové kvalitě, klidně v kombinaci s videomappingem do jednoho obrazu.",
  },
  {
    cue: "T-00:36",
    name: "Vodní stěny",
    desc: "Velkoplošné vodní stěny s vlastní odladěnou technologií — ostrý holografický obraz venku i uvnitř.",
  },
  {
    cue: "T-00:48",
    name: "Gala eventy",
    desc: "B2B, B2C i B2E akce od kreativního konceptu přes obsah a techniku až po produkci na místě.",
  },
  {
    cue: "T-01:00",
    name: "Scénografie & technika",
    desc: "Stage design, LED stěny, projekce, ozvučení i zastřešená pódia. Show navrhne a odladí Rudolf Střítecký.",
  },
];

type Award = {
  year: string;
  title: string;
  place: string;
};

const awards: Award[] = [
  { year: "2025", title: "GRAND PRIX Czech Event Awards", place: "nejlepší event roku, Praha" },
  { year: "2025", title: "Conventa Awards — 2× první místo", place: "Best B2C Event & Best in Creativity, evropské finále" },
  { year: "2024", title: "ILDA Artistic Awards", place: "nejlepší multimediální show z 160 projektů, Las Vegas" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="ART 4 PROMOTION — domů">
          <span className="wordmark__art">ART</span>
          <span className="wordmark__num" aria-hidden="true">4</span>
          <span className="wordmark__promo">PROMOTION</span>
        </a>
        <span className="topbar__where">České Budějovice · od 2003</span>
      </header>

      <section className="hero" id="top">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Velkoplošná multimediální show s laserovými paprsky a projekcí do prostoru"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__panel">
          <p className="hero__eyebrow">Zážitková a multimediální agentura</p>
          <h1 className="hero__title">
            Show, která<br />
            <em>zhasne sál</em><br />
            a rozsvítí lidi.
          </h1>
          <p className="hero__lead">
            Multimediální show, video mapping, laser a B2B eventy z Českých
            Budějovic. Píšeme světlem, obrazem a zvukem — a stavíme příběhy,
            na které se nezapomíná.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#tvorba">Prohlédnout tvorbu</a>
            <a className="btn btn--ghost" href="#duvera">Proč právě my</a>
          </div>
        </div>
        <div className="hero__ticker" aria-hidden="true">
          <span>GRAND PRIX 2025</span>
          <span>·</span>
          <span>ILDA · Las Vegas</span>
          <span>·</span>
          <span>2× Conventa Awards</span>
          <span>·</span>
          <span>první multimediální show v ČR</span>
          <span>·</span>
          <span>GRAND PRIX 2025</span>
          <span>·</span>
          <span>ILDA · Las Vegas</span>
          <span>·</span>
        </div>
      </section>

      <section className="block block--services" id="tvorba" aria-labelledby="tvorba-nadpis">
        <div className="block__head">
          <p className="block__eyebrow">Cuelist / co umíme rozehrát</p>
          <h2 className="block__title" id="tvorba-nadpis">
            Šest disciplín, jedna dramaturgie
          </h2>
          <p className="block__intro">
            Každou show čteme jako scénář: kdy zhasnout, kdy nechat naskočit
            laser, kdy pustit vodní stěnu. Časové značky vlevo nejsou ozdoba —
            tak vypadá reálný odpočet naší režie na place.
          </p>
        </div>

        <ol className="cuelist">
          {disciplines.map((d) => (
            <li className="cue" key={d.name}>
              <span className="cue__time">{d.cue}</span>
              <div className="cue__body">
                <h3 className="cue__name">{d.name}</h3>
                <p className="cue__desc">{d.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="block__figure">
          <img
            src="/section-1.webp"
            alt="Detail laserové a projekční techniky během multimediální produkce"
            loading="lazy"
          />
          <figcaption>
            Z režie jedné z našich show — světlo řešíme po sekundách.
          </figcaption>
        </figure>
      </section>

      <section className="block block--trust" id="duvera" aria-labelledby="duvera-nadpis">
        <figure className="trust__figure">
          <img
            src="/section-2.webp"
            alt="Rudolf Střítecký při přípravě velkolepé multimediální scény"
            loading="lazy"
          />
        </figure>

        <div className="trust__copy">
          <p className="block__eyebrow">Kdo za tím stojí</p>
          <h2 className="block__title" id="duvera-nadpis">
            Vede nás show designer Rudolf Střítecký
          </h2>
          <p className="trust__lead">
            Uznávaný show designer, dramaturg a kreativní lídr. Celou kariéru
            zasvětil velkolepým, emočně silným show, které propojují nejmodernější
            technologie s uměleckým rukopisem. Klasický event u něj mění pravidla —
            a odjíždíte s obrazem, který vám zůstane v hlavě.
          </p>

          <ul className="awards" aria-label="Ocenění">
            {awards.map((a) => (
              <li className="award" key={a.title}>
                <span className="award__year">{a.year}</span>
                <span className="award__title">{a.title}</span>
                <span className="award__place">{a.place}</span>
              </li>
            ))}
          </ul>

          <p className="trust__foot">
            Zázemí máme v Českých Budějovicích, sehraný tým a vlastní odzkoušené
            technologie. Nezůstávejte na zemi — nabijte značku emocemi.
          </p>
        </div>
      </section>
    </main>
  );
}
