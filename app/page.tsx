import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mgr. Radim Sedláček — advokát v Brně",
  description:
    "Advokátní kancelář v Brně. Občanské, obchodní, rodinné, pracovní, trestní a správní právo. Jasná domluva, srozumitelná odměna, poctivé zastupování.",
  openGraph: {
    title: "Mgr. Radim Sedláček — advokát v Brně",
    description:
      "Advokátní kancelář v Brně. Střežíme vaše práva — občanské, obchodní, rodinné, pracovní, trestní a správní právo.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23142019'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' fill='%23c99a5b' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",
  },
};

const obory = [
  {
    kod: "§ 89",
    nazev: "Občanské právo",
    text:
      "Smlouvy, sousedské spory, náhrada škody, dluhy a jejich vymáhání. Sepíšu, zkontroluji, zastoupím u soudu.",
  },
  {
    kod: "§ 90",
    nazev: "Obchodní právo",
    text:
      "Založení a změny s.r.o., obchodní smlouvy, spory mezi společníky, valné hromady. Právo psané pro podnikatele, vyložené srozumitelně.",
  },
  {
    kod: "§ 94",
    nazev: "Rodinné právo",
    text:
      "Rozvod, péče o děti, výživné, vypořádání společného jmění. Provedu vás citlivě a bez zbytečného přiostřování.",
  },
  {
    kod: "§ 262",
    nazev: "Pracovní právo",
    text:
      "Výpovědi, neplatné rozvázání poměru, mzdové nároky. Hájím zaměstnance i zaměstnavatele.",
  },
  {
    kod: "§ 209",
    nazev: "Trestní právo",
    text:
      "Obhajoba od prvního výslechu, zastoupení poškozeného, návrh na náhradu újmy. Jsem po ruce, i když jde do tuhého.",
  },
  {
    kod: "§ 500",
    nazev: "Správní právo",
    text:
      "Stavební řízení, přestupky, správní žaloby, jednání s úřady. Přeložím úřední jazyk do řeči, které rozumíte.",
  },
];

const zavazky = [
  {
    n: "01",
    titul: "Řeknu vám to na rovinu",
    text:
      "Na první schůzce dostanete střízlivý odhad — jaké máte šance, co to obnáší a kolik to zabere. Radši dvě věty pravdy než hodinu naděje.",
  },
  {
    n: "02",
    titul: "Cenu domluvíme dopředu",
    text:
      "Hodinová sazba, paušál nebo odměna za výsledek — vyberete, co vám sedne. Žádné překvapení v konečné faktuře.",
  },
  {
    n: "03",
    titul: "Berete si celou kancelář",
    text:
      "Zastupuji osobně, od porady po jednací síň. Váš spis nikam neputuje — víte, kdo za vámi stojí.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Advokátní kancelář Mgr. Radim Sedláček">
          <span className="wordmark__mark">R<span className="wordmark__amp">·</span>S</span>
          <span className="wordmark__name">
            <strong>Sedláček</strong>
            <em>advokátní kancelář · Brno</em>
          </span>
        </a>
        <a className="topbar__tel" href="tel:+420773988897">
          +420 773 988 897
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Advokátní kancelář Mgr. Radima Sedláčka v Brně"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Advokátní kancelář · Brno</p>
          <blockquote className="hero__maxim">
            <span className="hero__latin">Vigilantibus iura scripta sunt.</span>
            <span className="hero__cz">
              Práva náležejí bdělým. Střežení těch vašich vezmu za vás.
            </span>
          </blockquote>
          <p className="hero__lead">
            Jsem Radim Sedláček, advokát. Pomáhám lidem i firmám z Brna a okolí
            projít situacemi, na které se sami necítí — od smlouvy po soudní síň.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420773988897">
              Zavolat kanceláři
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Čím se zabývám
            </a>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Právní služby</p>
          <h2 className="section-head__title" id="sluzby-nadpis">
            Šest oblastí, ve kterých se cítím doma
          </h2>
          <p className="section-head__note">
            Nezáleží na tom, jestli řešíte hraniční plot, výpověď nebo obvinění.
            Vezmu to od začátku a povedu vás krok po kroku.
          </p>
        </div>
        <ol className="obory">
          {obory.map((o) => (
            <li className="obor" key={o.nazev}>
              <span className="obor__kod">{o.kod}</span>
              <h3 className="obor__nazev">{o.nazev}</h3>
              <p className="obor__text">{o.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__media">
          <img
            src="/section-1.webp"
            alt="Pracovna advokáta — spisy a paragrafy nad stolem"
            className="onas__img"
          />
          <img
            src="/section-2.webp"
            alt="Detail z advokátní kanceláře v Brně"
            className="onas__img onas__img--second"
          />
        </div>
        <div className="onas__body">
          <p className="section-head__eyebrow">Jak spolu budeme pracovat</p>
          <h2 className="section-head__title" id="onas-nadpis">
            Tři věci, na které se u mě můžete spolehnout
          </h2>
          <ol className="zavazky">
            {zavazky.map((z) => (
              <li className="zavazek" key={z.n}>
                <span className="zavazek__n" aria-hidden="true">
                  {z.n}
                </span>
                <div>
                  <h3 className="zavazek__titul">{z.titul}</h3>
                  <p className="zavazek__text">{z.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="onas__kontakt">
            Kancelář najdete v Brně. Napište na{" "}
            <a href="mailto:brnoak@brnoak.cz">brnoak@brnoak.cz</a> nebo zavolejte —
            první poradu domluvíme rychle.
          </p>
        </div>
      </section>
    </main>
  );
}
