import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Jelínek s. r. o. — stavební firma, Ústí nad Labem",
  description:
    "Rekonstrukce, novostavby, ocelové konstrukce a atypická výroba v Ústí nad Labem. Realizace pro školy, kulturní střediska i veřejnou správu od roku 2019.",
  openGraph: {
    title: "Studio Jelínek s. r. o. — stavba, která drží",
    description:
      "Rekonstrukce, novostavby a ocelové konstrukce v Ústí nad Labem. Od podkladů pro výběrové řízení až po předání hotové stavby.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Realizace Studia Jelínek v Ústí nad Labem" }],
  },
};

const obory = [
  {
    kod: "REK",
    nazev: "Rekonstrukce a změny staveb",
    popis:
      "Renovace, sanace a přestavby budov v provozu. Tělocvičny, učebny, sociální zázemí — pracujeme tam, kde se nesmí zastavit chod školy ani úřadu.",
  },
  {
    kod: "NOV",
    nazev: "Novostavby",
    popis:
      "Od základů po předání. Poradenské centrum UJEP i venkovní amfiteátr jsme postavili od výkopu až po kolaudaci.",
  },
  {
    kod: "OCK",
    nazev: "Ocelové konstrukce",
    popis:
      "Ploty, brány, rampy a nosné konstrukce. Vlastní zámečnická a atypická výroba — vyrobíme přesně to, co stavba vyžaduje.",
  },
  {
    kod: "INT",
    nazev: "Vybavení interiéru",
    popis:
      "Protipožární uzávěry, posuvné dveře, kompletní vybavení učeben. Atypická výroba na míru rozměrům, které nejsou v katalogu.",
  },
  {
    kod: "PRO",
    nazev: "Podklady a projekty",
    popis:
      "Zpracování podkladů pro výběrová řízení, rozpočty, výkazy výměr a zajištění projektové dokumentace. Připravíme zakázku dřív, než se kopne.",
  },
];

const realizace = [
  { rok: "2020", nazev: "Venkovní amfiteátr UJEP", typ: "Novostavba" },
  { rok: "2018", nazev: "Poradenské centrum UJEP", typ: "Novostavba" },
  { rok: "2019", nazev: "Tělocvična ZŠ Neštěmická, Ústí n. L.", typ: "Stavební úpravy" },
  { rok: "2018", nazev: "Učebny fyziky a chemie ZŠ E. Krásnohorské", typ: "Modernizace" },
  { rok: "2017", nazev: "Kulturní středisko města Chlumec, I. etapa", typ: "Rekonstrukce" },
  { rok: "2016", nazev: "Přístav Saalehafen a Moldauhafen", typ: "Obnova funkce" },
];

export default function Page() {
  return (
    <main className="sj">
      <header className="sj-top">
        <a href="#obsah" className="sj-wordmark" aria-label="Studio Jelínek, stavební firma">
          <span className="sj-wordmark-main">JELÍNEK</span>
          <span className="sj-wordmark-sub">stavební firma · Ústí n.&nbsp;L.</span>
        </a>
        <a className="sj-tel" href="tel:+420607076419">+420 607 076 419</a>
      </header>

      <section className="sj-hero" id="obsah">
        <div className="sj-hero-media">
          <img
            src="/hero.webp"
            width={1600}
            height={1000}
            alt="Realizace Studia Jelínek — dokončená stavba v Ústí nad Labem"
            className="sj-hero-img"
            fetchPriority="high"
          />
        </div>
        <div className="sj-hero-panel">
          <p className="sj-eyebrow">Stavební firma · Moskevská 40, Ústí nad Labem</p>
          <h1 className="sj-hero-title">
            Postavíme to,<br />
            <span className="sj-em">co jiní odloží</span> na&nbsp;příště.
          </h1>
          <p className="sj-hero-lead">
            Rekonstrukce v běžícím provozu, novostavby od výkopu i ocel na míru. Stavíme pro
            školy, kulturní střediska a veřejnou správu v Ústeckém kraji — a předáváme stavbu,
            která drží.
          </p>
          <div className="sj-hero-actions">
            <a className="sj-btn" href="tel:+420607076419">Zavolat na stavbu</a>
            <a className="sj-btn sj-btn-ghost" href="#realizace">Prohlédnout realizace</a>
          </div>
          <dl className="sj-facts">
            <div>
              <dt>Od roku</dt>
              <dd>2019</dd>
            </div>
            <div>
              <dt>Působíme v</dt>
              <dd>Ústeckém kraji</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>veřejné zakázky</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sj-sekce" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sj-sekce-hlav">
          <p className="sj-eyebrow">Co pro vás postavíme</p>
          <h2 id="sluzby-nadpis" className="sj-h2">Od podkladu pro výběrko až po předání klíčů</h2>
        </div>
        <div className="sj-grid">
          <div className="sj-grid-media">
            <img
              src="/section-1.webp"
              width={900}
              height={1100}
              alt="Detail stavební realizace Studia Jelínek"
              loading="lazy"
              className="sj-img"
            />
          </div>
          <ul className="sj-obory">
            {obory.map((o) => (
              <li className="sj-obor" key={o.kod}>
                <span className="sj-obor-kod" aria-hidden="true">{o.kod}</span>
                <div className="sj-obor-text">
                  <h3 className="sj-obor-nazev">{o.nazev}</h3>
                  <p className="sj-obor-popis">{o.popis}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sj-sekce sj-sekce-tmava" id="realizace" aria-labelledby="real-nadpis">
        <div className="sj-sekce-hlav">
          <p className="sj-eyebrow sj-eyebrow-svetly">Reference · veřejné zakázky</p>
          <h2 id="real-nadpis" className="sj-h2 sj-h2-svetly">
            Stavby, které v kraji stojí a slouží
          </h2>
          <p className="sj-sekce-lead">
            Ptejte se, kdo za to ručí. My jmenujeme každou zakázku i rok — od amfiteátru UJEP
            po přístav na Labi. Kompletní seznam osvědčení rádi doložíme k nabídce.
          </p>
        </div>
        <div className="sj-real-wrap">
          <ol className="sj-real">
            {realizace.map((r) => (
              <li className="sj-real-radek" key={r.nazev}>
                <span className="sj-real-rok">{r.rok}</span>
                <span className="sj-real-nazev">{r.nazev}</span>
                <span className="sj-real-typ">{r.typ}</span>
              </li>
            ))}
          </ol>
          <figure className="sj-real-foto">
            <img
              src="/section-2.webp"
              width={900}
              height={700}
              alt="Dokončená realizace Studia Jelínek v Ústeckém kraji"
              loading="lazy"
              className="sj-img"
            />
            <figcaption className="sj-real-popisek">
              Moskevská 1483/40, Ústí nad Labem · datová schránka 89wkhhg
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
