import type { CSSProperties } from "react";

const sluzby = [
  {
    kod: "A1",
    nazev: "Odtah nehody i poruchy",
    popis:
      "Bourané, poškozené i nepojízdné auto naložíme a odvezeme, kam potřebujete — domů, do servisu, na STK. Malá i velká odtahovka, do 45 minut u vás.",
  },
  {
    kod: "A2",
    nazev: "Vyproštění z garáží a svahů",
    popis:
      "Vůz uvízlý v podzemní garáži, příkopu nebo na nepřístupném místě dostaneme ven hydraulickou rukou i navijákem.",
  },
  {
    kod: "A3",
    nazev: "Startování a palivo na cestě",
    popis:
      "Vybitá baterie? Došel benzín nebo nafta? Přijedeme nastartovat na kabely nebo dovezeme palivo — často odtah ani nepotřebujete.",
  },
  {
    kod: "A4",
    nazev: "Náhradní vozidlo k poruše",
    popis:
      "Pro vaše porouchané auto dojedeme a na místo přivezeme náhradní vůz, ať můžete pokračovat v cestě. Zápůjčka od 500 Kč/den bez limitu kilometrů.",
  },
  {
    kod: "A5",
    nazev: "Odtah dvou i tří vozidel",
    popis:
      "Souprava s vozíkem odveze najednou dvě nebo tři auta — pro autobazary, servisy i po hromadné nehodě.",
  },
  {
    kod: "A6",
    nazev: "Přeprava strojů a nadměrných nákladů",
    popis:
      "Podvalník naloží těžkou techniku i špatně skladné předměty. Zvládneme i vykládku zámořských kontejnerů bez rampy.",
  },
];

const cenik = [
  { polozka: "Malá odtahovka — km", cena: "25 Kč" },
  { polozka: "Velká odtahovka — km", cena: "28 Kč" },
  { polozka: "Hydraulická ruka — km", cena: "32 Kč" },
  { polozka: "Paušál odtah v Praze (malá)", cena: "1 800 Kč" },
  { polozka: "Odtah motocyklu v Praze", cena: "1 800 Kč" },
  { polozka: "Manipulace", cena: "200 Kč" },
];

const vozovyPark = [
  "Mercedes-Benz Axor 1833 — velký odtah",
  "DAF XF106 s nízkoložným podvalníkem — těžká technika",
  "Atego 1218 s hydraulickou rukou — vyproštění",
  "Toyota HiLux — rychlý zásah a doprovod",
];

export default function Page() {
  return (
    <main className="pg">
      <header className="top">
        <a className="wm" href="#" aria-label="Doubrava Beneš, odtahová služba">
          <span className="wm-d">DOUBRAVA</span>
          <span className="wm-b">BENEŠ</span>
          <span className="wm-s">odtahová služba · Praha</span>
        </a>
        <a className="top-call" href="tel:+420777155150">
          <span className="top-call-l">nonstop</span>
          777 155 150
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-img">
          <img
            src="/hero.webp"
            alt="Odtahový speciál Doubrava Beneš nakládá nepojízdné vozidlo v Praze"
          />
        </div>
        <div className="hero-panel">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            ve službě 24 h denně · 365 dní v roce
          </p>
          <h1 id="hero-h">
            Stojíte u silnice?
            <br /> Vytočte a my vyrazíme.
          </h1>
          <a className="bignum" href="tel:+420777155150">
            777&nbsp;155&nbsp;150
          </a>
          <a className="bignum bignum--2" href="tel:+420777156150">
            777&nbsp;156&nbsp;150
          </a>
          <p className="hero-note">
            U vás do <strong>45 minut</strong> od zavolání. Praha a okolí, nehody
            i poruchy, ve dne v noci.
          </p>
          <div className="hazard" role="presentation" aria-hidden="true" />
        </div>
      </section>

      <section className="svc" aria-labelledby="svc-h">
        <div className="sec-head">
          <p className="eyebrow eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="svc-h">Šest situací, kdy stačí jeden telefon</h2>
        </div>
        <ol className="svc-grid">
          {sluzby.map((s) => (
            <li className="svc-card" key={s.kod}>
              <span className="svc-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ol>
        <figure className="svc-figure">
          <img
            src="/section-1.webp"
            alt="Odtahová technika Doubrava Beneš připravená k výjezdu"
          />
          <figcaption>
            Podvalník i hydraulická ruka — naložíme osobák, motorku i stroj.
          </figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="sec-head">
          <p className="eyebrow">Proč nám auto svěřit</p>
          <h2 id="trust-h">Vozidlo i posádka jsou u nás pojištěné</h2>
        </div>

        <div className="trust-body">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Naložené vozidlo zajištěné na odtahovém speciálu"
            />
          </figure>

          <div className="trust-cols">
            <div className="trust-text">
              <p>
                Každé přepravované auto je pojištěné proti poškození u České
                pojišťovny. Vozidla i jejich posádky jsou navíc pod právní
                ochranou pojišťovny DAS. Odvezeme vás v klidu — o zbytek se
                postaráme.
              </p>
              <p className="trust-where">
                Sídlo: Khodlova 1001/13, 193 00 Praha 20 · Email{" "}
                <a href="mailto:odtahovka@odtahovkanonstop.cz">
                  odtahovka@odtahovkanonstop.cz
                </a>
              </p>
              <ul className="park">
                {vozovyPark.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>

            <div className="cenik" aria-label="Orientační ceník">
              <p className="cenik-h">Orientační ceník</p>
              <dl>
                {cenik.map((c) => (
                  <div className="cenik-row" key={c.polozka}>
                    <dt>{c.polozka}</dt>
                    <dd>{c.cena}</dd>
                  </div>
                ))}
              </dl>
              <p className="cenik-note">
                Ceny bez DPH 21 %. K ceně za kilometr se připočítává mýtné.
                Noční výjezd (20–7 h) +550 Kč.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
