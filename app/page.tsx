import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebola Sport — cykloservis Plzeň | seřídíme, spravíme, odjedete",
  description:
    "Cykloservis v Plzni. Seřízení řazení, servis odpružení, výplet kol, přehození brzd i kompletní prohlídka před sezónou. Rotwild a CUBE máme v malíčku. Objednejte se telefonem nebo e-mailem.",
  openGraph: {
    title: "Ebola Sport — cykloservis Plzeň",
    description:
      "Seřízení řazení, servis odpružení, výplet kol i prohlídka před sezónou. Cykloservis v Plzni, který kolu rozumí.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Kolo v servisním stojanu v dílně Ebola Sport" }],
  },
};

const vykony = [
  {
    id: "01",
    nazev: "Seřízení řazení",
    popis:
      "Přehazovačka i přesmykač do puntíku. Nastavíme dorazy, napětí lanka i indexování, ať řadíte tiše a bez cvakání.",
    cas: "do 45 min",
    cena: "od 350 Kč",
  },
  {
    id: "02",
    nazev: "Servis odpružení",
    popis:
      "Vidlice a tlumiče vyčistíme, promažeme a přetěsníme. Vrátíme jim citlivost, kterou znáte z prvního dne na trailu.",
    cas: "1–3 dny",
    cena: "od 890 Kč",
  },
  {
    id: "03",
    nazev: "Výplet a centrování kol",
    popis:
      "Osmičky, výška, napnutí paprsků. Vypleteme nové kolo nebo zachráníme to vaše po nešťastném doskoku.",
    cas: "do 2 dnů",
    cena: "od 490 Kč",
  },
  {
    id: "04",
    nazev: "Brzdy a odvzdušnění",
    popis:
      "Vyměníme destičky, odvzdušníme hydrauliku a srovnáme třmeny. Brzda musí kousnout přesně tam, kde chcete.",
    cas: "do 60 min",
    cena: "od 390 Kč",
  },
  {
    id: "05",
    nazev: "E-bike diagnostika",
    popis:
      "Bosch, Brose i BMZ. Přečteme chyby, aktualizujeme firmware a zkontrolujeme baterii i motor. Rotwild a CUBE bez čekání.",
    cas: "do 90 min",
    cena: "od 590 Kč",
  },
  {
    id: "06",
    nazev: "Prohlídka před sezónou",
    popis:
      "Kompletní kontrola: pohon, ložiska, brzdy, tlaky. Sepíšeme, co drží, co dojíždí a co je na výměnu — bez překvapení.",
    cas: "do 2 hodin",
    cena: "od 690 Kč",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Ebola Sport, cykloservis Plzeň">
          <span className="wordmark__spoke" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </span>
          <span className="wordmark__text">
            Ebola<span className="wordmark__sport">Sport</span>
          </span>
        </a>
        <a className="topbar__call" href="tel:+420377000000">
          <span className="topbar__dot" aria-hidden="true"></span>
          Objednat servis
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Horské kolo upnuté v servisním stojanu v plzeňské dílně Ebola Sport"
            className="hero__img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Cykloservis · Plzeň</p>
          <h1 id="hero-title" className="hero__title">
            Přivezete rozladěné.
            <br />
            <span className="hero__title-accent">Odjedete jako nové.</span>
          </h1>
          <p className="hero__lead">
            Dílna, kde kolo nezůstane stát ve frontě. Rozebereme, seřídíme a poskládáme
            zpátky tak, aby řazení cvaklo přesně a vidlice zase dýchala. Rotwild a CUBE
            servisujeme každý den.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420377000000">
              Zavolat do dílny
            </a>
            <a className="btn btn--ghost" href="mailto:servis@ebolasport.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Kola v dílně měsíčně</dt>
              <dd>120+</dd>
            </div>
            <div>
              <dt>Běžné seřízení</dt>
              <dd>do 45 min</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Plzeň</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="work" aria-labelledby="work-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Servisní list</p>
          <h2 id="work-title" className="section-head__title">
            Co s vaším kolem uděláme
          </h2>
          <p className="section-head__note">
            Ceny jsou za práci, díly navrch podle skutečné spotřeby. Vždycky napřed
            řekneme, co kolo potřebuje — a co ještě klidně vydrží.
          </p>
        </div>

        <ul className="card-grid">
          {vykony.map((v) => (
            <li key={v.id} className="card">
              <span className="card__id" aria-hidden="true">
                {v.id}
              </span>
              <h3 className="card__title">{v.nazev}</h3>
              <p className="card__text">{v.popis}</p>
              <div className="card__meta">
                <span className="card__time">{v.cas}</span>
                <span className="card__price">{v.cena}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about__media">
          <img
            src="/section-1.webp"
            alt="Mechanik seřizuje řazení kola v dílně Ebola Sport"
            width={1200}
            height={1400}
          />
        </div>
        <div className="about__body">
          <p className="section-head__eyebrow">O dílně</p>
          <h2 id="about-title" className="section-head__title">
            Mechanici, kteří sami jezdí
          </h2>
          <p className="about__text">
            Ebola Sport je plzeňská dílna a prodejna zároveň. Roky prodáváme a servisujeme
            kola Rotwild a CUBE, takže je známe rozebrané do posledního ložiska. Když
            vám něco děláme, je to proto, že bychom to udělali i na svém kole.
          </p>
          <p className="about__text">
            Nepracujeme naslepo. Před opravou vám vysvětlíme, co jsme našli, kolik to
            bude stát a jestli to spěchá. Žádné nemilé účty na konci — jen kolo, které
            zase jede tak, jak má.
          </p>

          <ul className="proof">
            <li className="proof__item">
              <img
                src="/section-2.webp"
                alt="Detail seřízené přehazovačky a kazety kola"
                width={800}
                height={600}
                className="proof__img"
              />
              <p className="proof__caption">
                E-bike diagnostika Bosch, Brose i BMZ přímo na místě — nemusíte kolo
                nikam posílat.
              </p>
            </li>
            <li className="proof__quote">
              <blockquote>
                „Přivezl jsem Rotwilda s házející vidlicí a divným řazením. Vyzvedával
                jsem kolo, které jelo líp než z obchodu.“
              </blockquote>
              <cite>Martin H., Plzeň · horské kolo Rotwild</cite>
            </li>
          </ul>

          <div className="about__contact">
            <a className="btn btn--solid" href="tel:+420377000000">
              Zavolat a domluvit termín
            </a>
            <a className="about__mail" href="mailto:servis@ebolasport.cz">
              servis@ebolasport.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
