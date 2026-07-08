import type { CSSProperties } from "react";

const hero = "/hero.webp";
const s1 = "/section-1.webp";
const s2 = "/section-2.webp";

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "01",
    nazev: "Výměna a oprava autoskel",
    popis:
      "Prasklé čelní sklo vyměníme, malý kamínek většinou vyplníme bez výměny. Osobní i užitková vozidla, včetně přesného usazení a nalepení.",
  },
  {
    cislo: "02",
    nazev: "Výměna z pojištění zdarma",
    popis:
      "Máte havarijko nebo připojištění skel? Vyřídíme pojistnou událost za vás a sklo vyměníme bez doplatku. Jen přijedete a odjedete.",
  },
  {
    cislo: "03",
    nazev: "Tónování autoskel",
    popis:
      "Bezpečnostní i pohledové fólie na míru. Chladněji v létě, soukromí vzadu, UV ochrana. Vše v souladu s předpisy pro přední okna.",
  },
  {
    cislo: "04",
    nazev: "Pískování VIN",
    popis:
      "Vyražení VIN do skel jako ochrana proti krádeži a bonus u pojišťovny. Rychlé, čisté a trvalé značení.",
  },
  {
    cislo: "05",
    nazev: "Servis vozidel a pneuservis",
    popis:
      "Když už tu auto máte, doladíme i zbytek. Přezutí, vyvážení, drobný servis — abyste to nemuseli řešit dvakrát.",
  },
];

const duvody = [
  {
    k: "Ostrava a okolí",
    v: "Jsme z Ostravska a známe zdejší silnice — od dálnice po výtluky na periferii. Přijedete k nám nebo se domluvíme na odtahu.",
  },
  {
    k: "Pojistku vyřídíme",
    v: "Papírování s pojišťovnou bereme na sebe. Vy řešíte jen to, kdy přivezete auto.",
  },
  {
    k: "Sklo ještě dnes",
    v: "Běžné čelní skla máme skladem nebo je seženeme obratem. Většinu výměn zvládneme týž den.",
  },
];

export default function Page() {
  return (
    <main className="ms">
      <a className="ms-skip" href="#sluzby">
        Přeskočit na služby
      </a>

      <header className="ms-top">
        <div className="ms-wm" aria-label="MS steel, autosklo Ostrava">
          <span className="ms-wm-mark">MS</span>
          <span className="ms-wm-text">
            <strong>steel</strong>
            <em>autosklo · Ostrava</em>
          </span>
        </div>
        <a className="ms-call ms-call--top" href="tel:+420000000000">
          Zavolat
        </a>
      </header>

      <section className="ms-hero" aria-labelledby="ms-hero-h">
        <div className="ms-hero-media">
          <img
            src={hero}
            alt="Výměna čelního autoskla v dílně MS steel v Ostravě"
            className="ms-hero-img"
            width={1600}
            height={1200}
          />
          <div className="ms-hero-scan" aria-hidden="true">
            <span className="ms-crack" />
          </div>
        </div>

        <div className="ms-hero-body">
          <p className="ms-eyebrow">Prasklé čelní sklo? Klid.</p>
          <h1 id="ms-hero-h" className="ms-hero-h">
            Nové sklo <span className="ms-hl">bez trhliny</span>
            <br />
            i bez papírování.
          </h1>
          <p className="ms-lead">
            Autosklo MS steel v Ostravě. Vyměníme prasklé čelní sklo, opravíme
            kamínek, natónujeme okna a pojistnou událost vyřídíme za vás — často
            ještě týž den.
          </p>
          <div className="ms-hero-cta">
            <a className="ms-call" href="tel:+420000000000">
              Zavolat a domluvit termín
            </a>
            <a className="ms-mail" href="mailto:info@mssteel.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="ms-hero-note">
            Výměna z pojištění bez doplatku · osobní i užitková vozidla
          </p>
        </div>
      </section>

      <section id="sluzby" className="ms-sec ms-services" aria-labelledby="ms-svc-h">
        <div className="ms-sec-head">
          <p className="ms-eyebrow ms-eyebrow--dark">Co pro auto uděláme</p>
          <h2 id="ms-svc-h">Od jednoho kamínku po celé sklo</h2>
          <p className="ms-sec-intro">
            Autosklo je řemeslo přesnosti — pár milimetrů rozhodne, jestli sklo
            drží a netáhne. Tady je, s čím za námi lidé nejčastěji přijedou.
          </p>
        </div>

        <div className="ms-svc-wrap">
          <ol className="ms-svc-list">
            {sluzby.map((s) => (
              <li key={s.cislo} className="ms-svc">
                <span className="ms-svc-num" aria-hidden="true">
                  {s.cislo}
                </span>
                <div className="ms-svc-txt">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="ms-svc-fig">
            <img
              src={s1}
              alt="Detail lepení a usazení nového autoskla u vozidla"
              width={1200}
              height={1500}
            />
            <figcaption>
              Lepené sklo drží karoserii pohromadě — proto ho usazujeme na
              přesně předepsaný tmel a necháme ho pořádně vytvrdit.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ms-sec ms-trust" aria-labelledby="ms-trust-h">
        <div className="ms-trust-grid">
          <figure className="ms-trust-fig">
            <img
              src={s2}
              alt="Dílna autoskla MS steel v Ostravě s připraveným vozem"
              width={1400}
              height={1050}
            />
          </figure>

          <div className="ms-trust-body">
            <p className="ms-eyebrow ms-eyebrow--dark">Proč zrovna k nám</p>
            <h2 id="ms-trust-h">Autoskláři, ne mezisklad</h2>
            <p className="ms-sec-intro">
              Sklo vám neobjednáme a nepředáme dál — děláme ho sami, ve vlastní
              dílně, a stojíme si za tím, že netáhne a neteče.
            </p>

            <dl className="ms-facts">
              {duvody.map((d) => (
                <div className="ms-fact" key={d.k}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="ms-quote">
              <p>
                „Kamínek na D1 mi během chvíle rozjel prasklinu přes půl skla.
                V MS steel to řešili s pojišťovnou beze mě, druhý den jsem
                odjížděl s novým sklem.“
              </p>
              <cite>Radek P., řidič dodávky, Ostrava-Poruba</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
