import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dobré stavby — klempířství Ostrava | střechy, okapy, oplechování",
  description:
    "Klempířské práce v Ostravě od roku 1999. Střechy, okapové systémy, oplechování atik a komínů, opravy po krupobití. Ohýbáme plech z titanzinku, mědi a poplastovaného plechu. Zavolejte 596 965 179.",
  openGraph: {
    title: "Dobré stavby — klempířství Ostrava",
    description:
      "Střechy, okapy a oplechování z titanzinku i mědi. Ostravská klempírna s praxí od roku 1999.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Klempíř ohýbá plechovou lemovku na střeše" }],
  },
};

const prace = [
  {
    kod: "01",
    nazev: "Střechy a krytina",
    popis:
      "Nová plechová krytina, falcovaná stojatá drážka i maloformátové šablony. Klademe titanzinek, poplastovaný plech i měď — každý spoj je ohnutý na míru vaší střechy.",
    material: "titanzinek · měď · poplastovaný plech",
  },
  {
    kod: "02",
    nazev: "Okapové systémy",
    popis:
      "Žlaby, svody, kotlíky a lapače listí. Spádujeme tak, aby voda odtékala i za ostravského přívalu, a kotvíme háky do krokví, ne do podbití.",
    material: "půlkulaté i hranaté žlaby · Ø 100–150",
  },
  {
    kod: "03",
    nazev: "Oplechování a lemování",
    popis:
      "Atiky, parapety, komíny, úžlabí a nároží. Tam, kde se plech potkává se zdivem, těsníme detail, který jinak zatéká jako první.",
    material: "atiky · komíny · úžlabí · parapety",
  },
  {
    kod: "04",
    nazev: "Opravy a krupobití",
    popis:
      "Prohlídka po vichřici, výměna utržených plechů, dotěsnění spojů. Nafotíme škodu pro pojišťovnu a opravíme tak, aby vydržela další zimu.",
    material: "posudek pro pojišťovnu · rychlý zásah",
  },
];

const reference = [
  { nazev: "Střecha hasičské zbrojnice", kde: "Ostrava-Kunčice", kdo: "Hasičský záchranný sbor MSK", rok: "2018", typ: "Falcovaná krytina" },
  { nazev: "Střecha kulturního střediska", kde: "Ostrava-Hrabová", kdo: "SMO Hrabová", rok: "2017", typ: "Krytina + klempířina" },
  { nazev: "Oprava fasády a střecha bytového domu", kde: "Mariánské Hory", kdo: "soukromá osoba", rok: "2017", typ: "Okapy + oplechování" },
  { nazev: "Zateplení fasády a střecha rodinného domu", kde: "Tísek", kdo: "soukromá osoba", rok: "2018", typ: "Nová krytina" },
  { nazev: "Střecha rodinného domu", kde: "Janovice", kdo: "soukromá osoba", rok: "2017", typ: "Krytina na klíč" },
  { nazev: "Oprava levé kaple na hřbitově", kde: "Ostrava-Zábřeh", kdo: "SMO Ostrava-Jih", rok: "2017", typ: "Měděné oplechování" },
];

export default function Page() {
  return (
    <main className="kl">
      <header className="kl-top">
        <a className="kl-wordmark" href="#" aria-label="Dobré stavby, klempířství Ostrava">
          <span className="kl-wordmark-fold">Dobré</span>
          <span className="kl-wordmark-sub">stavby · klempířství</span>
        </a>
        <a className="kl-phone" href="tel:+420596965179">
          <span className="kl-phone-label">Ostrava od 1999</span>
          <span className="kl-phone-num">596 965 179</span>
        </a>
      </header>

      <section className="kl-hero" aria-labelledby="hero-nadpis">
        <div className="kl-hero-text">
          <p className="kl-eyebrow">Klempířství · střechy · okapy · Ostravsko</p>
          <h1 id="hero-nadpis">
            Plech ohnutý tak,
            <span className="kl-hero-accent">aby voda tekla, kam má.</span>
          </h1>
          <p className="kl-lede">
            Děláme klempířskou práci, která je vidět až ve chvíli, kdy chybí — falcovanou drážku, těsné úžlabí,
            svod, co odvede přívalový déšť. Od roku 1999 kryjeme střechy a lemujeme detaily po celém Ostravsku.
          </p>
          <div className="kl-hero-cta">
            <a className="kl-btn" href="tel:+420596965179">Zavolat klempíři</a>
            <a className="kl-btn kl-btn-ghost" href="mailto:info@dobrestavby.cz">Napsat na e-mail</a>
          </div>
          <dl className="kl-meta">
            <div><dt>Praxe</dt><dd>od 1999</dd></div>
            <div><dt>Materiály</dt><dd>titanzinek · měď</dd></div>
            <div><dt>Kraj</dt><dd>Moravskoslezský</dd></div>
          </dl>
        </div>
        <figure className="kl-hero-fig">
          <img src="/hero.webp" alt="Klempíř ohýbá plechovou lemovku na střeše rodinného domu" width={900} height={1100} />
          <figcaption>Falcovaná drážka — spoj, který drží vodu venku.</figcaption>
        </figure>
      </section>

      <section className="kl-services" aria-labelledby="sluzby-nadpis">
        <div className="kl-section-head">
          <p className="kl-eyebrow">Co pro vás ohneme</p>
          <h2 id="sluzby-nadpis">Čtyři věci, kterými stojí a padá suchá střecha</h2>
        </div>
        <div className="kl-service-media">
          <img src="/section-1.webp" alt="Detail falcované plechové střechy s okapovým žlabem" width={1200} height={700} />
        </div>
        <ol className="kl-service-list">
          {prace.map((p) => (
            <li key={p.kod} className="kl-service">
              <span className="kl-service-kod" aria-hidden="true">{p.kod}</span>
              <div className="kl-service-body">
                <h3>{p.nazev}</h3>
                <p>{p.popis}</p>
                <p className="kl-service-mat">{p.material}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="kl-trust" aria-labelledby="reference-nadpis">
        <div className="kl-trust-intro">
          <p className="kl-eyebrow">O nás &amp; reference</p>
          <h2 id="reference-nadpis">Rodinná klempírna, kterou znají hasiči i radnice</h2>
          <p className="kl-trust-text">
            Jsme ryze česká rodinná firma z Ostravy. Neposíláme na střechu partu, kterou vidíte poprvé —
            pracují tu naši vlastní řemeslníci, kteří vám řeknou, jestli stačí spravit svody, nebo je čas
            na novou krytinu. Před každou zakázkou vylezeme nahoru, poměříme a napíšeme rozpočet, který sedí.
          </p>
          <ul className="kl-trust-points">
            <li>Vlastní tým klempířů, žádní překupníci práce</li>
            <li>Posudek a fotodokumentace pro pojišťovnu</li>
            <li>Materiál z titanzinku, mědi i poplastovaného plechu</li>
            <li>Zakázky pro města, sbor i domácnosti Ostravska</li>
          </ul>
          <figure className="kl-trust-fig">
            <img src="/section-2.webp" alt="Klempíř při práci na okapovém svodu bytového domu" width={900} height={600} />
          </figure>
        </div>
        <div className="kl-ref">
          <p className="kl-ref-title">Vybrané realizace na Ostravsku</p>
          <ul className="kl-ref-list">
            {reference.map((r, i) => (
              <li key={i} className="kl-ref-item">
                <span className="kl-ref-typ">{r.typ}</span>
                <span className="kl-ref-nazev">{r.nazev}</span>
                <span className="kl-ref-kde">{r.kde}</span>
                <span className="kl-ref-kdo">{r.kdo} · {r.rok}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
