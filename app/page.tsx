import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BODY EXPRESS České Budějovice — EMS trénink 20 minut týdně",
  description:
    "EMS studio v Českých Budějovicích. Celé tělo zpevníte za 20 minut jednou týdně — 85 impulzů za sekundu a osobní trenér u každé lekce. Rezervujte si první trénink.",
  openGraph: {
    title: "BODY EXPRESS — EMS trénink v Českých Budějovicích",
    description:
      "20 minut, 1× týdně, celé tělo. EMS elektro-myo-stimulace s osobním trenérem v Českých Budějovicích.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const procedury = [
  {
    kod: "01",
    nazev: "EMS Poprvé",
    cena: "990 Kč",
    popis:
      "Seznámíme vás s technologií, nastavíme stimulaci přesně na vaše tělo a projdete úvodní program s osobním trenérem.",
    pro: "první návštěva",
  },
  {
    kod: "02",
    nazev: "EMS Znám",
    cena: "990 Kč",
    popis:
      "Máte první lekci za sebou? Naplno využijete nejefektivnější trénink — s trenérem a přesně podle vašich cílů.",
    pro: "opakovaná lekce",
  },
  {
    kod: "03",
    nazev: "EMS Plus",
    cena: "1 190 Kč",
    popis:
      "EMS Znám se zrychlenou regenerací. Hned po tréninku přidáme 10 minut červeného světla — fotobiomodulaci.",
    pro: "trénink + regenerace",
  },
];

const kurzy = [
  {
    nazev: "Nastartuj změnu",
    delka: "10 týdnů",
    tyden: "790 Kč / týden",
    celkem: "7 900 Kč",
    usetri: "ušetříte 2 000 Kč",
    popis:
      "Zpevníme svalový korzet, záda přestanou bolet a aktivní svaly pálí tuky i mezi tréninky. Pevný termín a váš trenér.",
  },
  {
    nazev: "Skvělá kondice",
    delka: "25 týdnů",
    tyden: "690 Kč / týden",
    celkem: "17 250 Kč",
    usetri: "ušetříte 7 500 Kč",
    popis:
      "Půl roku práce na sobě, kterou pozná okolí — a hlavně vy. Fit, bez bolesti, zvládnete toho víc. Týdně jen 20 minut.",
  },
];

const priprava = [
  "Večer před lekcí vynechte alkohol.",
  "Buďte odpočatí a dobře se vyspěte.",
  "V den lekce hodně pijte — litr dopoledne, litr odpoledne.",
  "Dobře se najezte, ať máte dost energie.",
];

function Pulse() {
  return (
    <svg
      className="pulse"
      viewBox="0 0 600 60"
      preserveAspectRatio="none"
      role="img"
      aria-label="Křivka 85 elektrických impulzů za sekundu"
    >
      <polyline
        className="pulse-line"
        points="0,30 40,30 52,30 60,8 68,52 76,30 120,30 132,30 140,12 148,48 156,30 220,30 232,30 240,6 248,54 256,30 320,30 332,30 340,14 348,46 356,30 420,30 432,30 440,9 448,51 456,30 520,30 532,30 540,12 548,48 556,30 600,30"
        fill="none"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="be">
      <header className="be-nav">
        <a className="be-mark" href="#" aria-label="BODY EXPRESS">
          <span className="be-mark-body">BODY</span>
          <span className="be-mark-express">EXPRESS</span>
        </a>
        <span className="be-loc">České Budějovice</span>
      </header>

      <section className="be-hero">
        <img className="be-hero-img" src="/hero.webp" alt="Trénink EMS v elektrodovém obleku v studiu Body Express" />
        <div className="be-hero-veil" />
        <div className="be-hero-text">
          <p className="be-eyebrow">EMS &middot; elektro-myo-stimulace</p>
          <h1 className="be-h1">
            <span>20 minut.</span>
            <span>1&times; týdně.</span>
            <span className="hot">Celé tělo.</span>
          </h1>
          <Pulse />
          <p className="be-rhythm">
            <strong>85 impulzů za sekundu</strong> zapojí svaly tak, jak to při běžném cvičení nedokážete.
          </p>
          <div className="be-cta-row">
            <a className="be-btn" href="tel:+420724645801">Rezervovat první lekci</a>
            <a className="be-btn ghost" href="#jak">Jak EMS funguje</a>
          </div>
        </div>
      </section>

      <section className="be-sec be-jak" id="jak" aria-labelledby="jak-h">
        <div className="be-sec-head">
          <p className="be-eyebrow dark">Nabídka tréninků</p>
          <h2 className="be-h2" id="jak-h">Vyberte si svých 20 minut</h2>
          <p className="be-lead">
            EMS aktivuje celé tělo slabými elektrickými impulzy — stejnými, jaké si tělo vytváří samo. Vším vás
            vybavíme: žádné oblečení, tenisky ani pomůcky s sebou.
          </p>
        </div>

        <div className="be-grid be-grid-3">
          {procedury.map((p) => (
            <article className="be-card" key={p.kod}>
              <span className="be-kod">{p.kod}</span>
              <h3 className="be-card-h">{p.nazev}</h3>
              <p className="be-card-pro">{p.pro}</p>
              <p className="be-card-text">{p.popis}</p>
              <p className="be-cena">{p.cena}</p>
            </article>
          ))}
        </div>

        <div className="be-kurzy">
          <img className="be-kurzy-img" src="/section-1.webp" alt="Cvičenka při EMS tréninku s osobním trenérem" />
          <div className="be-kurzy-list">
            <h3 className="be-h3">Výhodné kurzy s pevným termínem</h3>
            {kurzy.map((k) => (
              <div className="be-kurz" key={k.nazev}>
                <div className="be-kurz-top">
                  <span className="be-kurz-nazev">{k.nazev}</span>
                  <span className="be-kurz-delka">{k.delka}</span>
                </div>
                <p className="be-card-text">{k.popis}</p>
                <div className="be-kurz-cena">
                  <strong>{k.tyden}</strong>
                  <span>{k.celkem} &middot; {k.usetri}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="be-sec be-doved" aria-labelledby="dov-h">
        <div className="be-doved-grid">
          <div className="be-doved-text">
            <p className="be-eyebrow">Studio v Českých Budějovicích</p>
            <h2 className="be-h2 light" id="dov-h">Připravíme vás na první trénink</h2>
            <p className="be-lead light">
              EMS působí jako velmi intenzivní trénink. Než přijdete, stačí pár drobností — o zbytek se postaráme my
              i váš osobní trenér.
            </p>
            <ol className="be-checks">
              {priprava.map((t, i) => (
                <li key={i}>
                  <span className="be-check-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <div className="be-info">
              <div>
                <span className="be-info-label">Otevírací doba</span>
                <span className="be-info-val">Pondělí–Pátek, 8:00–18:00</span>
              </div>
              <div>
                <span className="be-info-label">Zavolejte nám</span>
                <a className="be-info-link" href="tel:+420724645801">+420 724 645 801</a>
              </div>
              <div>
                <span className="be-info-label">Napište nám</span>
                <a className="be-info-link" href="mailto:info@bodyexpress.cz">info@bodyexpress.cz</a>
              </div>
            </div>
          </div>
          <img className="be-doved-img" src="/section-2.webp" alt="Interiér studia Body Express v Českých Budějovicích" />
        </div>
      </section>
    </main>
  );
}
