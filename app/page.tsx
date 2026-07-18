import { LouverRake } from "./motion";

const zones = [
  {
    place: "Na fasádě",
    note: "Zachytíme slunce dřív, než ohřeje sklo. Nejúčinnější clona proti přehřívání.",
    items: [
      { name: "Venkovní žaluzie", desc: "Nakloněné lamely řídí světlo po milimetrech — od plného průhledu po tmu." },
      { name: "Screenové rolety", desc: "Tkanina, přes kterou vidíte ven, ale žár a oslnění zůstanou venku." },
      { name: "Venkovní rolety", desc: "Úplné zatemnění a klid — na ložnici i na letní přehřívání." },
      { name: "Markýzy", desc: "Stín nad terasou i oknem, vytažený přesně tam, kde svítí." },
    ],
  },
  {
    place: "V interiéru",
    note: "Doladění atmosféry v pokoji — barva, tkanina, kolik denního světla pustíte dál.",
    items: [
      { name: "Vnitřní žaluzie", desc: "Klasika do každého okna, sladěná s rámem i podlahou." },
      { name: "Plisé žaluzie", desc: "Skládaná clona i pro střešní a atypická okna." },
      { name: "Vnitřní rolety", desc: "Od průsvitných po zatemňovací — jedno okno, dvě nálady." },
      { name: "Závěsy a záclony", desc: "Měkký závěr dne, když má světlo jen zteplat." },
    ],
  },
  {
    place: "Nad terasou",
    note: "Venkovní obývák, který funguje v poledním žáru i večer na kávu.",
    items: [
      { name: "Pergoly", desc: "Naklápěcí lamely nad terasou — stín, nebo hvězdy, jak potřebujete." },
      { name: "Stínění zimních zahrad", desc: "Aby sklo nad hlavou v létě nepálilo a v zimě hřálo." },
      { name: "Sítě proti hmyzu", desc: "Téměř neviditelná ochrana — otevřete okno a máte klid." },
    ],
  },
];

const pillars = [
  { k: "20 let", v: "na českém trhu — rodinná firma, na kterou se spolehnete" },
  { k: "3 mil.+", v: "zastíněných oken po celé republice" },
  { k: "4 roky", v: "záruka na kvalitní výrobky" },
  { k: "11", v: "showroomů, vždy blízko místa realizace" },
];

const quotes = [
  {
    name: "Pavel Šlambora",
    role: "venkovní rolety, rodinný dům",
    text: "Řešili jsme přehřívání vnitřních prostor. Od zaměření přes nabídku až po montáž firma pracovala profesionálně, rychle a spolehlivě. Výsledkem jsou perfektní venkovní rolety, které nám opravdu dobře slouží.",
  },
  {
    name: "Tereza Gluzová",
    role: "venkovní zatemňovací roleta",
    text: "Komunikace byla rychlá a transparentní, instalace proběhla v řádu několika týdnů — a to v létě, kdy se na venkovní stínění obvykle čeká déle. Roleta splňuje přesně to, co jsem si od ní slibovala.",
  },
  {
    name: "Kateřina Šilhánová",
    role: "venkovní žaluzie",
    text: "Skvělé jednání od první návštěvy až po instalaci. Rychlá dodávka, velmi zkušení technici si při montáži poradili i se všemi obtížemi na místě. Nic pro ně nebyl problém.",
  },
];

export default function Page() {
  return (
    <>
      <LouverRake />
      <main className="page">
        <header className="hero">
          <div className="hero__inner">
            <div className="wordmark">
              <span className="wordmark__name">PROKLIMA</span>
              <span className="wordmark__tag">stínicí technika</span>
            </div>
            <p className="eyebrow">Stínicí technika · Praha 5 — Košíře</p>
            <h1 className="hero__title">
              Prodáváme <em>řízené světlo</em>.<br />
              Ne jenom žaluzie.
            </h1>
            <p className="hero__lead">
              Dvacet let ladíme, kolik denního světla pustíme do bytů, domů a
              kanceláří. Rodinná firma z Košíř — přes tři miliony zastíněných
              oken po celé České republice. Naklopte lamelu a světlo poslechne.
            </p>
            <ul className="hero__meta">
              <li><b>20 let</b> zkušeností</li>
              <li><b>3 mil.+</b> oken</li>
              <li><b>11</b> showroomů</li>
              <li><b>4 roky</b> záruka</li>
            </ul>
          </div>
        </header>

        <section className="section products" aria-labelledby="products-h">
          <div className="section__inner">
            <div className="section__head">
              <p className="eyebrow">Nabídka</p>
              <h2 id="products-h">Zastínění podle toho, kde padá světlo</h2>
              <p className="section__lead">
                Světlo se dá zastavit na třech místech. Podle toho vybíráme
                řešení — venku má největší sílu proti žáru, uvnitř dolaďuje
                atmosféru, nad terasou dělá stín na míru.
              </p>
            </div>

            <div className="zones">
              {zones.map((z) => (
                <article className="zone" key={z.place}>
                  <div className="zone__band" aria-hidden="true" />
                  <h3 className="zone__place">{z.place}</h3>
                  <p className="zone__note">{z.note}</p>
                  <ul className="zone__list">
                    {z.items.map((it) => (
                      <li className="prod" key={it.name}>
                        <span className="prod__name">{it.name}</span>
                        <span className="prod__desc">{it.desc}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="partner">
              Největší partner české značky <b>Climax</b> · stínění napojíme na
              chytrou domácnost <b>Somfy</b> i solární pohon.
            </p>
          </div>
        </section>

        <section className="section trust" aria-labelledby="trust-h">
          <div className="section__inner">
            <div className="section__head">
              <p className="eyebrow">O nás</p>
              <h2 id="trust-h">Rodinná firma, na kterou se spolehnete</h2>
              <p className="section__lead">
                Každý výrobek prochází testováním a pečlivou výstupní kontrolou.
                Jsme v místě realizace — a o vaše žaluzie se postaráme i po
                záruce.
              </p>
            </div>

            <ul className="pillars">
              {pillars.map((p) => (
                <li className="pillar" key={p.k}>
                  <span className="pillar__k">{p.k}</span>
                  <span className="pillar__v">{p.v}</span>
                </li>
              ))}
            </ul>

            <div className="quotes">
              {quotes.map((q) => (
                <figure className="quote" key={q.name}>
                  <blockquote className="quote__text">{q.text}</blockquote>
                  <figcaption className="quote__by">
                    <span className="quote__name">{q.name}</span>
                    <span className="quote__role">{q.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
