import type { CSSProperties } from "react";

type Cell = {
  no: string;
  title: string;
  desc: string;
  tag: string;
};

const catalog: Cell[] = [
  {
    no: "01",
    title: "Svařování oceli a nerezu",
    desc: "Metody MAG 135 a TIG 141, robotické svařování Panasonic a Valkwelding. Svařence do 5 000 kg.",
    tag: "MAG 135 · \u2264 5000 kg",
  },
  {
    no: "02",
    title: "Přesné obrábění",
    desc: "CNC i klasické soustružení, frézování, vrtání a broušení. Kontrola laserovými rameny Hexagon.",
    tag: "CNC · Ra 0,8",
  },
  {
    no: "03",
    title: "Dělení materiálů",
    desc: "Vodní paprsek, vláknový laser, plazma a plamen. Ocel i nerez do tloušťky 150 mm.",
    tag: "LASER · \u00b1 0,1 mm",
  },
  {
    no: "04",
    title: "Tváření kovů",
    desc: "Ohraňovací lis 130 t s předhybem stolu, hydraulické lisy, ohýbání a zakružování profilů.",
    tag: "LIS · 130 t",
  },
  {
    no: "05",
    title: "Vyvažování rotačních součástí",
    desc: "Vyvažovačky do 2 000 kg a Ø 1 400 mm, vždy včetně vyvažovacího protokolu.",
    tag: "BALANCE · \u2264 2000 kg",
  },
  {
    no: "06",
    title: "Povrchové úpravy a optimalizace",
    desc: "Lakování a pískování, technologická i konstrukční optimalizace výrobku před výrobou.",
    tag: "FINISH · dle RAL",
  },
];

type Fact = { label: string; note: string; tag: string };

const facts: Fact[] = [
  { label: "Založeno 1992", note: "Středně velká strojírenská firma s vlastními výrobními kapacitami.", tag: "33 let výroby" },
  { label: "Součást JPS Group", note: "Ekonomická stabilita a zázemí většího holdingu za každou zakázkou.", tag: "holding" },
  { label: "Dvě provozovny", note: "České Budějovice a Bystřice nad Pernštejnem (Imetal s.r.o.).", tag: "ČB · BnP" },
  { label: "ISO 9001", note: "Řízení kvality QMS certifikované nepřetržitě od roku 2003.", tag: "od 2003" },
  { label: "ISO 3834-2", note: "Vyšší požadavky na jakost při tavném svařování kovových materiálů.", tag: "svařování" },
  { label: "EN 15085-2 CL1", note: "Drážní certifikace pro svařování dílů kolejových vozidel.", tag: "kolejová vozidla" },
];

const clients = ["ACCS", "AUTOMA", "AWAC", "BOSCH", "ČVUT"];

export default function Page() {
  return (
    <main className="j-page">
      <header className="j-top j-wrap">
        <a className="j-mark" href="#top" aria-label="JOSA, strojírenská výroba">
          JOSA<span className="j-mark__dot" aria-hidden="true" />
          <span className="j-mark__suf">s.r.o.</span>
        </a>
        <nav className="j-nav" aria-label="Hlavní">
          <a href="#vyroba">Výroba</a>
          <a href="#duvera">O nás</a>
          <a className="j-nav__tel" href="tel:+420602155211">602 155 211</a>
        </nav>
      </header>

      <section className="j-hero j-wrap" id="top">
        <p className="j-eyebrow">Strojírenská výroba — svařování — obrábění · České Budějovice</p>

        <h1 className="j-h1">
          Svařence a obrobky
          <br />
          na setinu milimetru.
        </h1>

        <div className="j-weld" aria-hidden="true">
          <span className="j-weld__bead" />
          <span className="j-weld__arc" />
        </div>

        <div className="j-hero__grid">
          <p className="j-lead">
            Vyrábíme komplexní strojní součásti přesně dle vaší výkresové dokumentace —
            pro topné systémy, vzduchotechniku i kolejová vozidla. Svařeno, obrobeno a
            proměřeno ve vlastních provozovnách.
          </p>

          <div className="j-callout" role="group" aria-label="Tolerance">
            <span className="j-callout__leader" aria-hidden="true" />
            <span className="j-callout__tag">TOL · \u00b1 0,01 mm — dle výkresu</span>
          </div>
        </div>

        <ul className="j-chips" aria-label="Certifikace">
          <li>ISO 9001</li>
          <li>ISO 3834-2</li>
          <li>EN 15085-2 CL1</li>
        </ul>
      </section>

      <section className="j-section j-wrap" id="vyroba" aria-labelledby="vyroba-h">
        <div className="j-head">
          <p className="j-kick">Katalog výroby</p>
          <h2 className="j-h2" id="vyroba-h">Obory činnosti</h2>
          <p className="j-head__note">
            Šest výrobních uzlů pod jednou střechou. Ke každému uvádíme metodu a mezní
            parametr — přesně tak, jak je čtete na výkrese.
          </p>
        </div>

        <ol className="j-catalog">
          {catalog.map((c) => (
            <li className="j-cell" key={c.no}>
              <span className="j-cell__no">{c.no}</span>
              <h3 className="j-cell__title">{c.title}</h3>
              <p className="j-cell__desc">{c.desc}</p>
              <span className="j-tag">
                <span className="j-tag__line" aria-hidden="true" />
                <span className="j-tag__label">{c.tag}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="j-section j-section--alt j-wrap" id="duvera" aria-labelledby="duvera-h">
        <div className="j-trust">
          <div className="j-trust__intro">
            <p className="j-kick">O nás</p>
            <h2 className="j-h2" id="duvera-h">Přesnost, kterou doloží protokol.</h2>
            <p className="j-trust__text">
              JOSA vyrábí od roku 1992. Vysoké standardy držíme dlouhodobě díky stabilnímu
              týmu kvalifikovaných svářečů a obráběčů, investicím do moderních technologií
              a managementu kvality dle ISO 9001, ISO 3834-2 a EN 15085-2 CL1. Na návrhu a
              vývoji konstrukčních celků spolupracujeme s Fakultou strojní ČVUT v Praze.
            </p>
            <div className="j-clients">
              <span className="j-clients__lbl">Vyrábíme pro</span>
              <ul className="j-clients__list">
                {clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="j-facts">
            {facts.map((f, i) => (
              <li className="j-fact" key={f.label} style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}>
                <div className="j-fact__body">
                  <h3 className="j-fact__label">{f.label}</h3>
                  <p className="j-fact__note">{f.note}</p>
                </div>
                <span className="j-tag j-tag--right">
                  <span className="j-tag__line" aria-hidden="true" />
                  <span className="j-tag__label">{f.tag}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
