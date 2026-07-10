import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BiCar Detailing — čištění interiérů aut, České Budějovice",
  description:
    "Detailní čištění interiérů vozidel v Českých Budějovicích. Tepování, parní čištění, keramická ochrana kůže i laku od Artdeshine.",
};

const sluzby = [
  {
    zona: "Kabina",
    nazev: "Péče o interiér",
    popis:
      "Kompletní vysátí každé spáry, tepování všech textilií a parní čištění plastů. Skvrny mizí, vzduch v autě je zase svěží.",
    body: [
      "Důkladné vysátí celého vozu",
      "Tepování sedaček a koberců",
      "Odstranění skvrn z textilií",
      "Parní čištění plastových částí",
    ],
  },
  {
    zona: "Karoserie",
    nazev: "Péče o exteriér",
    popis:
      "Ruční mytí bez škrábanců, dekontaminace laku a bezpečné sušení i ve spárách. Zakončeno keramickou ochranou Artdeshine.",
    body: [
      "Precizní ruční mytí karoserie",
      "Kompletní dekontaminace laku",
      "Šetrné sušení včetně spár",
      "Keramická ochrana Artdeshine",
    ],
  },
  {
    zona: "Ochrana",
    nazev: "Doplňkové služby",
    popis:
      "Detailní práce na míru náročným klientům — retuše laku a dlouhodobá keramická ochrana kůže, kol i oken.",
    body: [
      "Detailní retuše laku",
      "Keramická ochrana kůže a plastů",
      "2letá keramická ochrana kol",
      "2letá keramická ochrana oken",
    ],
  },
];

const reference = [
  {
    text:
      "Interiér vozu byl v žalostném stavu, ale po čištění je jako nový. Oceňuji profesionální přístup a kvalitní přípravky, které využiji i sama doma.",
    jmeno: "Martina Voráčková",
  },
  {
    text:
      "V ČB jsem vyzkoušel několik firem na čištění auta, ale teprve tady jsem byl spokojen. Skvělá domluva i práce na 200 %. Jinam už s autem nepůjdu!",
    jmeno: "Petr Vomáčka",
  },
  {
    text:
      "Termín rychle domluven, auto se doslova leskne — všimla si toho i rodina. Koupila jsem si i pastu na fleky. Ráda se vrátím.",
    jmeno: "Markéta Sedláčková",
  },
];

export default function Page() {
  return (
    <main className="bc">
      <header className="bc-top">
        <a className="bc-mark" href="#top" aria-label="BiCar Detailing, domů">
          <span className="bc-mark-bi">Bi</span>
          <span className="bc-mark-car">Car</span>
          <span className="bc-mark-dot" aria-hidden="true" />
        </a>
        <p className="bc-loc">Detailing interiérů · České Budějovice</p>
      </header>

      <section className="bc-hero" id="top">
        <div className="bc-hero-copy">
          <p className="bc-eyebrow">
            <span className="bc-eyebrow-swab" aria-hidden="true" />
            Jako jediní v ČB s produkty Artdeshine
          </p>
          <h1 className="bc-h1">
            Vysajeme, vytepujeme<br />
            a chráníme každou<br />
            <span className="bc-h1-em">spáru vašeho vozu.</span>
          </h1>
          <p className="bc-lede">
            Čistíme interiéry aut od základního úklidu až po náročný detailing.
            Profesionální stroje, prvotřídní autokosmetika a ochrana, která
            vydrží — v Kněžskodvorské ulici v Českých Budějovicích.
          </p>
          <div className="bc-cta-row">
            <a className="bc-btn" href="tel:+420774492941">Objednat mytí</a>
            <a className="bc-btn bc-btn-ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
          <dl className="bc-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 9–16</dd>
            </div>
            <div>
              <dt>Kosmetika</dt>
              <dd>Artdeshine</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420774492941">774 492 941</a>
              </dd>
            </div>
          </dl>
        </div>
        <figure className="bc-hero-media">
          <img
            src="/hero.webp"
            alt="Detailně vyčištěný interiér vozu po zásahu BiCar Detailing"
            className="bc-hero-img"
          />
          <figcaption className="bc-hero-tag">Interiér po kompletním detailingu</figcaption>
        </figure>
      </section>

      <section className="bc-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="bc-sec-head">
          <h2 className="bc-h2" id="sluzby-nadpis">Co pro vaše auto uděláme</h2>
          <p className="bc-sec-sub">
            Tři zóny péče. Vyberte podle toho, co vůz zrovna potřebuje — nebo
            spojíme všechny do jednoho kompletního detailingu.
          </p>
        </div>

        <div className="bc-media-strip">
          <img
            src="/section-1.webp"
            alt="Ruční mytí a čištění karoserie vozu při detailingu"
            className="bc-strip-img"
          />
        </div>

        <ol className="bc-cards">
          {sluzby.map((s, i) => (
            <li className="bc-card" key={s.nazev}>
              <div className="bc-card-top">
                <span className="bc-card-zona">{s.zona}</span>
                <span className="bc-card-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="bc-card-nazev">{s.nazev}</h3>
              <p className="bc-card-popis">{s.popis}</p>
              <ul className="bc-card-body">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="bc-duvera" aria-labelledby="duvera-nadpis">
        <div className="bc-duvera-grid">
          <div className="bc-duvera-copy">
            <p className="bc-eyebrow bc-eyebrow-light">
              <span className="bc-eyebrow-swab" aria-hidden="true" />
              O nás
            </p>
            <h2 className="bc-h2" id="duvera-nadpis">
              Máme rádi, když se auto vrátí lepší, než přijelo.
            </h2>
            <p className="bc-duvera-text">
              Jsme BiCar Detailing — specialisté na čištění interiérů vozidel z
              Českých Budějovic. Používáme profesionální stroje a moderní čisticí
              technologie, takže interiér nejen vypadá dokonale, ale zůstane
              chráněný a snadno se udržuje.
            </p>
            <p className="bc-duvera-text">
              Jako jediní v Českých Budějovicích pracujeme s inovativní
              kosmetikou Artdeshine — od keramické ochrany laku po ochranu kůže,
              kol i oken.
            </p>
            <img
              src="/section-2.webp"
              alt="Aplikace keramické ochrany a detailing povrchů vozu"
              className="bc-duvera-img"
            />
          </div>

          <div className="bc-ref">
            <h3 className="bc-ref-nadpis">Co říkají zákazníci</h3>
            <ul className="bc-ref-list">
              {reference.map((r) => (
                <li className="bc-ref-item" key={r.jmeno}>
                  <p className="bc-ref-text">„{r.text}“</p>
                  <p className="bc-ref-jmeno">— {r.jmeno}</p>
                </li>
              ))}
            </ul>
            <address className="bc-adresa">
              Kněžskodvorská 535/25, 370 04 České Budějovice<br />
              <a href="tel:+420774492941">+420 774 492 941</a> ·{" "}
              <a href="mailto:servis@bicar-detailing.cz">servis@bicar-detailing.cz</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
