import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Návrh a montáž split klimatizace",
      popis:
        "Nástěnná jednotka do bytu, kanceláře nebo ordinace. Vybereme výkon podle plochy a oslunění, vytrasujeme měď tak, aby nerušila, a osadíme kondenzátor tam, kde nebude vadit sousedům ani fasádě.",
      detail: "Daikin · Mitsubishi Electric · LG"
    },
    {
      kod: "02",
      nazev: "Multisplit pro celý byt",
      popis:
        "Jedna venkovní jednotka, více vnitřních. Ideální pro panelák na Fifejdách i pro rodinný dům v Porubě — chladíte ložnici i obývák z jednoho místa a máte na střeše jen jednu skříň.",
      detail: "2 až 5 místností"
    },
    {
      kod: "03",
      nazev: "Servis, čištění a plnění chladiva",
      popis:
        "Pravidelná údržba prodlouží životnost i výkon. Vyčistíme výparník, zkontrolujeme těsnost okruhu, doplníme chladivo R32 a vystavíme protokol podle vyhlášky o F-plynech.",
      detail: "Pravidelná prohlídka 1× ročně"
    }
  ];

  const duvody = [
    {
      cislo: "12 °C",
      popis:
        "O tolik dokážeme srazit teplotu v podkrovní ložnici během ostravského srpna, kdy se rtuť venku šplhá přes třicítku."
    },
    {
      cislo: "48 h",
      popis:
        "Do dvou pracovních dnů dorazíme na výjezd v rámci Ostravy a okolí — Havířov, Karviná, Frýdek-Místek."
    },
    {
      cislo: "14 let",
      popis:
        "Montujeme klimatizace v Moravskoslezském kraji od roku 2011. Máme za sebou byty, ordinace i serverovny."
    }
  ];

  return (
    <main className="kt">
      <a className="kt-skip" href="#sluzby">
        Přejít na obsah
      </a>

      <header className="kt-top">
        <span className="kt-mark" aria-label="Klimatechnika Ostrava">
          <span className="kt-mark-k">Klima</span>technika
          <span className="kt-mark-city">Ostrava</span>
        </span>
        <span className="kt-top-note">Klimatizace · montáž · servis</span>
      </header>

      <section className="kt-hero" aria-labelledby="kt-hero-h">
        <div className="kt-hero-media">
          <img
            src="/hero.webp"
            alt="Nástěnná klimatizační jednotka nad oknem s výhledem na ostravskou zástavbu"
            className="kt-hero-img"
          />
          <span className="kt-temp kt-temp-out" style={{ "--d": "0.15s" } as CSSProperties}>
            <b>34°</b> venku
          </span>
          <span className="kt-temp kt-temp-in" style={{ "--d": "0.45s" } as CSSProperties}>
            <b>22°</b> uvnitř
          </span>
        </div>

        <div className="kt-hero-text">
          <p className="kt-eyebrow">Ostrava a Moravskoslezský kraj</p>
          <h1 id="kt-hero-h">
            Když se z bytu stane
            <span className="kt-hero-strong"> rozpálená plechovka</span>,
            přivezeme chlad.
          </h1>
          <p className="kt-lede">
            Navrhneme, namontujeme a odservisujeme klimatizaci přesně na míru
            vašeho paneláku, domu nebo kanceláře. Bez zbytečných kabelů přes celou
            zeď a bez hluku, který by rušil sousedy.
          </p>
          <div className="kt-hero-cta">
            <a className="kt-btn" href="tel:+420511150120">
              Zavolat a domluvit zaměření
            </a>
            <a className="kt-btn kt-btn-ghost" href="#sluzby">
              Co montujeme
            </a>
          </div>
        </div>
      </section>

      <section className="kt-sec kt-services" id="sluzby" aria-labelledby="kt-sluzby-h">
        <div className="kt-sec-head">
          <p className="kt-eyebrow">Nabídka</p>
          <h2 id="kt-sluzby-h">Od jedné jednotky po celý byt</h2>
          <p className="kt-sec-lede">
            Nezáleží, jestli chcete zchladit jen ložnici, nebo celé patro. Vždycky
            začneme zaměřením u vás doma a řekneme, co dává smysl.
          </p>
        </div>

        <ol className="kt-list">
          {sluzby.map((s) => (
            <li className="kt-card" key={s.kod}>
              <span className="kt-card-kod">{s.kod}</span>
              <div className="kt-card-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <span className="kt-card-detail">{s.detail}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="kt-sec-media">
          <img
            src="/section-1.webp"
            alt="Technik při montáži venkovní kondenzační jednotky klimatizace na fasádě"
            className="kt-sec-img"
          />
        </div>
      </section>

      <section className="kt-sec kt-trust" aria-labelledby="kt-trust-h">
        <div className="kt-trust-grid">
          <div className="kt-trust-media">
            <img
              src="/section-2.webp"
              alt="Detail měděného potrubí a chladicího okruhu připraveného k zapojení"
              className="kt-sec-img"
            />
          </div>
          <div className="kt-trust-text">
            <p className="kt-eyebrow">Proč zrovna my</p>
            <h2 id="kt-trust-h">Ostravská firma, která u vás zůstane i po montáži</h2>
            <p className="kt-sec-lede">
              Klimatizaci nenainstalujeme a nezmizíme. Zůstaneme vaším servisem —
              vyčistíme filtry před sezonou, doplníme chladivo a poradíme po telefonu.
            </p>

            <dl className="kt-stats">
              {duvody.map((d) => (
                <div className="kt-stat" key={d.cislo}>
                  <dt>{d.cislo}</dt>
                  <dd>{d.popis}</dd>
                </div>
              ))}
            </dl>

            <p className="kt-note">
              Držíme se vyhlášky o fluorovaných plynech — montujeme i servisujeme
              s platným certifikátem a ke každému zásahu dostanete protokol.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
