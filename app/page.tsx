import { AiImage } from "./_ui";

const sluzby = [
  {
    kod: "01",
    nazev: "Bytové jádro na cihlu",
    popis:
      "Umakartové jádro vybouráme, odvezeme a postavíme znovu z ytongu. Nové rozvody vody a odpadu, elektrika do kuchyně, hydroizolace pod obklad. V panelu na Porubě to zvládneme za 14 pracovních dnů.",
    detail: ["bourání a odvoz sutě", "rozvody voda / odpad / elektro", "stěrka + hydroizolace", "obklad a dlažba"],
  },
  {
    kod: "02",
    nazev: "Koupelna v rodinném domě",
    popis:
      "Větší plocha, větší rozhodování. Sprchový kout do roviny podlahy, topný žebřík, závěsné WC na předstěně. Poradíme, kde se vyplatí velkoformát 60×120 a kde naopak drobná spárová kresba.",
    detail: ["sprcha v úrovni podlahy", "předstěny a instalační šachty", "podlahové topení", "osvětlení zrcadla"],
  },
  {
    kod: "03",
    nazev: "Kuchyně na míru k nové koupelně",
    popis:
      "Když už je byt rozkopaný, dává smysl udělat i kuchyň. Dvířka a korpusy si necháváme dělat u truhláře v Ostravě-Kunčicích, takže sedí i v bytech, kde není jediný pravý úhel.",
    detail: ["zaměření a 3D návrh", "korpusy od ostravského truhláře", "spotřebiče a zapojení", "obkladový pás za linkou"],
  },
];

const postup = [
  { krok: "Zaměření u vás doma", text: "Přijedeme, změříme, poslechneme si, co vám na staré koupelně vadí. Zdarma a bez závazku." },
  { krok: "Rozpočet po položkách", text: "Do pěti dnů dostanete cenu rozepsanou na práce a materiál. Žádné „ostatní náklady“." },
  { krok: "Termín a jeden parťák", text: "Dostanete datum nástupu a jedno telefonní číslo na stavbyvedoucího po celou dobu." },
  { krok: "Předání a úklid", text: "Odvezeme suť, vytřeme, ukážeme uzávěry. Záruka 5 let na provedené práce." },
];

export default function Page() {
  return (
    <main className="fc-page">
      {/* ---------- HERO ---------- */}
      <section className="fc-band fc-band--hero" aria-labelledby="fc-hero-title">
        <div className="fc-wrap">
          <div className="fc-brand">
            <span className="fc-brand__mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="fc-brand__word">
              FLIPCOM<span className="fc-brand__thin">servis</span>
            </span>
            <span className="fc-brand__loc">Ostrava · od roku 2009</span>
          </div>

          <div className="fc-hero">
            <div className="fc-hero__text">
              <p className="fc-eyebrow">Rekonstrukce koupelen a bytových jader</p>
              <h1 id="fc-hero-title" className="fc-h1">
                <span className="fc-h1__row">DVACET</span>
                <span className="fc-h1__row">METRŮ</span>
                <span className="fc-h1__row fc-h1__row--accent">SPÁRY</span>
                <span className="fc-h1__row fc-h1__row--thin">v jedné rovině</span>
              </h1>
              <p className="fc-lede">
                Děláme koupelny v ostravských panelácích i v domech na Hrabové. Od vybouraného
                umakartu po zaspárovaný obklad, který drží linku od dveří až za vanu. Jedna parta,
                jeden termín, jedna cena.
              </p>
              <div className="fc-actions">
                <a className="fc-btn fc-btn--primary" href="tel:+420777111222">
                  Zavolat 777111 222
                </a>
                <a className="fc-btn fc-btn--ghost" href="#sluzby">
                  Co děláme
                </a>
              </div>
              <dl className="fc-specs">
                <div>
                  <dt>Nástup</dt>
                  <dd>do 6 týdnů</dd>
                </div>
                <div>
                  <dt>Jádro v panelu</dt>
                  <dd>14dnů</dd>
                </div>
                <div>
                  <dt>Záruka</dt>
                  <dd>5 let</dd>
                </div>
              </dl>
            </div>

            {/* Spárová mřížka — pokládka obkladu */}
            <div className="fc-grid" aria-hidden="true">
              <div className="fc-tile fc-tile--img fc-tile--wide" style={{ animationDelay: "0ms" }}>
                <AiImage
                  src="/hero.webp"
                  alt="Hotová koupelna po rekonstrukci s velkoformátovým obkladem"
                  className="fc-img"
                />
              </div>
              <div className="fc-tile fc-tile--glaze" style={{ animationDelay: "40ms" }} />
              <div className="fc-tile fc-tile--copper" style={{ animationDelay: "80ms" }}>
                <span className="fc-tile__num">147</span>
                <span className="fc-tile__cap">koupelen</span>
              </div>
              <div className="fc-tile fc-tile--patina" style={{ animationDelay: "120ms" }} />
              <div className="fc-tile fc-tile--glaze" style={{ animationDelay: "160ms" }} />
              <div className="fc-tile fc-tile--slag" style={{ animationDelay: "200ms" }}>
                <span className="fc-tile__cap fc-tile__cap--light">60×120 mm spára 6</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SLUŽBY ---------- */}
      <section id="sluzby" className="fc-band fc-band--patina" aria-labelledby="fc-sluzby-title">
        <div className="fc-wrap">
          <header className="fc-head">
            <p className="fc-eyebrow fc-eyebrow--light">Nabídka služeb</p>
            <h2 id="fc-sluzby-title" className="fc-h2">
              TŘI ZAKÁZKY,
              <br />
              KTERÉ DĚLÁME
              <br />
              NEJČASTĚJI
            </h2>
          </header>

          <ul className="fc-cards">
            {sluzby.map((s) => (
              <li key={s.kod} className="fc-card">
                <span className="fc-card__kod">{s.kod}</span>
                <h3 className="fc-card__nazev">{s.nazev}</h3>
                <p className="fc-card__popis">{s.popis}</p>
                <ul className="fc-card__list">
                  {s.detail.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <figure className="fc-figure">
            <AiImage
              src="/section-1.webp"
              alt="Detail obkladu a spárování v rekonstruované koupelně"
              className="fc-img fc-img--band"
            />
            <figcaption>
              Byt 3+1, Ostrava-Poruba. Umakartové jádro nahradila zděná koupelna se sprchou v úrovni
              podlahy. Obklad 30×60, spára3mm, šedomodrá.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- PŘED A PO / DŮVĚRA ---------- */}
      <section className="fc-band fc-band--glaze" aria-labelledby="fc-pred-title">
        <div className="fc-wrap">
          <header className="fc-head">
            <p className="fc-eyebrow">Před a po · jak to u nás chodí</p>
            <h2 id="fc-pred-title" className="fc-h2 fc-h2--dark">
              STARÝ UMAKART
              <br />
              ODVEZEME
              <br />
              V PONDĚLÍ
            </h2>
          </header>

          <div className="fc-prepo">
            <div className="fc-flip">
              <div className="fc-flip__inner">
                <div className="fc-flip__face fc-flip__face--pred">
                  <AiImage
                    src="/section-2.webp"
                    alt="Původní umakartové bytové jádro před rekonstrukcí"
                    className="fc-img"
                  />
                  <span className="fc-flip__tag">PŘED</span>
                </div>
                <div className="fc-flip__face fc-flip__face--po">
                  <AiImage
                    src="/hero.webp"
                    alt="Stejná koupelna po kompletní rekonstrukci"
                    className="fc-img"
                  />
                  <span className="fc-flip__tag fc-flip__tag--po">PO</span>
                </div>
              </div>
            </div>

            <ol className="fc-postup">
              {postup.map((p, i) => (
                <li key={p.krok}>
                  <span className="fc-postup__kod">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.krok}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="fc-ref">
            <blockquote className="fc-quote">
              <p>
                „Bydlíme v paneláku na Fifejdách a báli jsme se hlavně toho bordelu. Kluci zakryli
                chodbu, každý večer zametli a v pátek byla koupelna hotová i s omytým obkladem.
                Termín sedl na den.“
              </p>
              <footer>Jana P. · Ostrava-Fifejdy · jádro 4,1 m²</footer>
            </blockquote>

            <div className="fc-kontakt">
              <h3 className="fc-kontakt__nadpis">Přijedeme zaměřit</h3>
              <p className="fc-kontakt__text">
                Zavolejte a domluvíme si schůzku u vás doma. Zaměření i rozpočet jsou zdarma.
              </p>
              <p className="fc-kontakt__radek">
                <a href="tel:+420777111222">777 111 222</a>
              </p>
              <p className="fc-kontakt__radek">
                <a href="mailto:info@example.cz">info@example.cz</a>
              </p>
              <p className="fc-kontakt__adresa">
                FLIPCOM servis, s.r.o.
                <br />
                Ukázková 123, Ostrava
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
