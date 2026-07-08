import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body Express Hradec Králové — EMS trénink, 20 minut jednou týdně",
  description:
    "EMS studio v Hradci Králové. Celé tělo zapojíte za 20 minut, stačí jednou týdně. 85 impulzů za sekundu, kompletní vybavení na místě. Rezervujte si první lekci.",
  openGraph: {
    title: "Body Express Hradec Králové — EMS trénink za 20 minut",
    description:
      "Nejrychlejší cesta do kondice. EMS trénink v Hradci Králové, jednou týdně 20 minut. Rezervujte první lekci.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const tempo = [
  {
    krok: "01",
    titulek: "Přijdete, jak jste",
    text: "Žádné tenisky, žádné cvičky, žádná taška přes rameno. Funkční oblek i podložku máte připravené na místě.",
  },
  {
    krok: "02",
    titulek: "20 minut pod proudem",
    text: "Slabé impulzy — 85 za sekundu, stejné jaké si tělo tvoří samo — zapojí naráz i svaly, které při běžném cvičení skoro nezapracují.",
  },
  {
    krok: "03",
    titulek: "Jdete domů",
    text: "Jedna lekce týdně. Zbytek času vám zůstává. Tělo dopaluje kalorie ještě dlouho poté, co jste odešli.",
  },
];

const reference = [
  {
    jmeno: "Eva",
    vek: "60 let",
    cil: "bolavá záda",
    text:
      "Měla jsem velké problémy se zády a běžné cvičení nestačilo. Co se nepodařilo za roky, změnilo se za pár týdnů. Chodím přes rok, záda jsou v pohodě a já si zase užívám dlouhé procházky se psem.",
  },
  {
    jmeno: "Tomáš",
    vek: "42 let",
    cil: "Ironman",
    text:
      "Na jiný trénink mi při práci a rodině nezbývá čas. Přesto jsem letos zvládl Ironmana — 3,8 km plavání, 180 km kolo, 42 km běh. Díky dvaceti minutám EMS týdně tělo zapojuje víc svalů, než je obvyklé.",
  },
  {
    jmeno: "Lenka",
    vek: "23 let",
    cil: "forma na léto",
    text:
      "Začaly jsme s kamarádkou před létem. Už po první lekci jsme byly nadšené. Zpevnil se zadek, stáhl pas — a výsledky byly vidět na první pohled.",
  },
];

export default function Page() {
  return (
    <main className="be">
      <header className="be-nav">
        <a className="be-mark" href="#top" aria-label="Body Express Hradec Králové">
          <span className="be-mark__body">BODY</span>
          <span className="be-mark__express">EXPRESS</span>
          <span className="be-mark__loc">Hradec Králové</span>
        </a>
        <nav className="be-links" aria-label="Hlavní">
          <a href="#tempo">Jak to funguje</a>
          <a href="#duvera">Řekli o nás</a>
          <a className="be-navcta" href="#rezervace">Rezervovat</a>
        </nav>
      </header>

      <section className="be-hero" id="top">
        <div className="be-hero__copy">
          <p className="be-eyebrow">EMS studio · Hradec Králové</p>
          <h1 className="be-h1">
            <span className="be-h1__line">20 minut.</span>
            <span className="be-h1__line be-h1__line--accent">Jednou týdně.</span>
            <span className="be-h1__line">Celé tělo.</span>
          </h1>
          <p className="be-lede">
            EMS je dnes nejrychlejší způsob, jak dostat tělo do kondice, srovnat svalové nerovnováhy
            a nastartovat spalování. A Body Express je nejrychlejší EMS — stačí jedna lekce za týden.
          </p>
          <div className="be-hero__actions">
            <a className="be-cta" href="#rezervace">Rezervovat první lekci</a>
            <a className="be-ghost" href="#tempo">Co je EMS trénink</a>
          </div>

          <dl className="be-pulse" aria-label="Parametry tréninku">
            <div>
              <dt>impulzů za sekundu</dt>
              <dd>85</dd>
            </div>
            <div>
              <dt>minut na lekci</dt>
              <dd>20</dd>
            </div>
            <div>
              <dt>lekce týdně</dt>
              <dd>1×</dd>
            </div>
          </dl>
        </div>

        <figure className="be-hero__media">
          <img
            src="/hero.webp"
            alt="Trénink v EMS obleku ve studiu Body Express"
            width={1200}
            height={1500}
            loading="eager"
          />
          <figcaption aria-hidden="true" className="be-wave">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
          </figcaption>
        </figure>
      </section>

      <section className="be-tempo" id="tempo" aria-labelledby="tempo-h">
        <div className="be-tempo__head">
          <p className="be-eyebrow be-eyebrow--dark">Elektro-myo-stimulace</p>
          <h2 id="tempo-h" className="be-h2">
            Intenzivně, rychleji, efektivněji
          </h2>
          <p className="be-tempo__intro">
            EMS aktivuje celé tělo slabými elektrickými impulzy — stejnými, jaké si vytváří samo.
            Zapojíte i hluboké svaly, na které se při klasickém cvičení těžko dostanete. Tělo se
            rovnoměrně zpevní a vytvaruje.
          </p>
        </div>

        <ol className="be-steps">
          {tempo.map((k) => (
            <li className="be-step" key={k.krok}>
              <span className="be-step__num">{k.krok}</span>
              <h3 className="be-step__title">{k.titulek}</h3>
              <p className="be-step__text">{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="be-prep">
          <img
            src="/section-1.webp"
            alt="Klient připravený na EMS lekci v Body Express"
            width={900}
            height={700}
            loading="lazy"
          />
          <div className="be-prep__copy">
            <h3 className="be-h3">Než přijdete poprvé</h3>
            <p className="be-prep__note">
              Na tělo působí EMS jako pořádně intenzivní trénink. Připravte se na něj:
            </p>
            <ul className="be-check">
              <li>Večer předtím vynechte alkohol.</li>
              <li>Buďte odpočatí a dobře se vyspěte.</li>
              <li>Pijte hodně vody — litr dopoledne, litr odpoledne.</li>
              <li>Dobře se najezte, ať máte dost energie.</li>
            </ul>
            <p className="be-prep__foot">
              Vším ostatním vás vybavíme my. Nepotřebujete vůbec nic.
            </p>
          </div>
        </div>
      </section>

      <section className="be-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="be-duvera__head">
          <p className="be-eyebrow">Řekli o nás</p>
          <h2 id="duvera-h" className="be-h2 be-h2--light">
            Cíle jsou různé. Cesta stejná.
          </h2>
        </div>

        <div className="be-quotes">
          {reference.map((r) => (
            <figure className="be-quote" key={r.jmeno}>
              <p className="be-quote__tag">{r.cil}</p>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <strong>{r.jmeno}</strong>
                <span>{r.vek}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="be-info" id="rezervace">
          <img
            src="/section-2.webp"
            alt="Studio Body Express v Hradci Králové"
            width={900}
            height={700}
            loading="lazy"
          />
          <div className="be-info__copy">
            <h3 className="be-h3">Body Express Hradec Králové</h3>
            <p className="be-info__lede">
              Rezervujte si svých 20 minut. První lekci si domluvíte telefonem nebo e-mailem — poradíme
              vám s termínem a se vším ostatním.
            </p>
            <dl className="be-contact">
              <div>
                <dt>Otevřeno</dt>
                <dd>Pondělí až pátek, 8:00–18:00</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420724645801">+420 724 645 801</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@bodyexpress.cz">info@bodyexpress.cz</a></dd>
              </div>
              <div>
                <dt>Cena lekce</dt>
                <dd>990 Kč</dd>
              </div>
            </dl>
            <a className="be-cta be-cta--wide" href="tel:+420724645801">
              Zavolat a rezervovat termín
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
