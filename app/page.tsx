import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JKNstavby s.r.o. — stavební firma Ústí nad Labem | zateplení, domy na klíč, rekonstrukce",
  description:
    "Stavební firma z Ústí nad Labem. Zateplování fasád (STO, Baumit, BASF, Weber), rodinné domy na klíč, rekonstrukce bytů a koupelen. Certifikát ISO 9001, program Zelená úsporám. Působíme po celých severních Čechách.",
  openGraph: {
    title: "JKNstavby — stavíme a zateplujeme v severních Čechách",
    description:
      "Rodinné domy na klíč, zateplení fasád, rekonstrukce bytů. Ústí nad Labem a okolí. Certifikovaný dodavatel Zelená úsporám.",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%231B2A41'/><rect x='4' y='18' width='11' height='10' fill='%23E8B93E'/><rect x='17' y='10' width='11' height='18' fill='%23F5F2EB'/><rect x='17' y='4' width='11' height='4' fill='%23E8B93E'/></svg>`
      ),
  },
};

const sluzby = [
  {
    kod: "ETICS",
    nazev: "Zateplení fasád",
    popis:
      "Kompletní zateplovací systémy včetně lešení a nové fasády. Máme osvědčení odborné způsobilosti pro systémy STO, Baumit, BASF, MultiTherm a Weber — zateplíme systémem, na který výrobce drží záruku.",
    detail: "Rodinné i bytové domy · dotace Zelená úsporám",
  },
  {
    kod: "RD",
    nazev: "Rodinné domy na klíč",
    popis:
      "Od projektu přes základovou desku až po předání klíčů. Jeden dodavatel, jedna odpovědnost — nemusíte koordinovat pět part a hlídat, kdo na koho čeká.",
    detail: "Včetně projektové dokumentace a stavebního povolení",
  },
  {
    kod: "REK",
    nazev: "Rekonstrukce objektů",
    popis:
      "Rekonstrukce domů, bytů, koupelen a kuchyní. Zvládáme i drobnější stavební práce, které velké firmy odmítají — vybourání jádra, nové rozvody, obklady, podlahy.",
    detail: "Byty, koupelny, kuchyně i celé objekty",
  },
  {
    kod: "PROJ",
    nazev: "Projektování staveb",
    popis:
      "Projekt připravíme sami, takže víme, co kreslíme a co se dá reálně postavit. Papírování kolem stavebního úřadu vyřídíme za vás.",
    detail: "Projekční práce · inženýring · stavební dozor",
  },
];

const certifikaty = [
  { nazev: "ČSN EN ISO 9001", popis: "certifikát řízení kvality" },
  { nazev: "Zelená úsporám", popis: "seznam odborných dodavatelů SFŽP" },
  { nazev: "STO · Baumit · BASF", popis: "osvědčení zateplovacích systémů" },
  { nazev: "MultiTherm · Weber", popis: "osvědčení zateplovacích systémů" },
];

export default function Page() {
  return (
    <main className="jkn">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <span className="bm-a" />
              <span className="bm-b" />
              <span className="bm-c" />
            </span>
            <span className="brand-word">
              JKN<em>stavby</em>
            </span>
          </div>

          <p className="hero-eyebrow">Stavební firma · Ústí nad Labem · severní Čechy</p>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Zateplíme.</span>
            <span className="ht-line ht-2">Postavíme.</span>
            <span className="ht-line ht-3">
              Předáme <span className="ht-accent">hotové.</span>
            </span>
          </h1>

          <p className="hero-lead">
            Fasády, domy na klíč a rekonstrukce od investičního záměru po předání
            díla. Držíme certifikát ISO 9001 a jsme v seznamu odborných dodavatelů
            programu Zelená úsporám.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420475000000">
              Zavolat na stavbu
            </a>
            <a className="btn btn-line" href="mailto:info@jknstavby.cz">
              Poslat poptávku e‑mailem
            </a>
          </div>
        </div>

        {/* Signature: profil zatepleného souvrství — řez fasádou */}
        <div className="facade" aria-hidden="true">
          <div className="facade-track">
            <div className="layer l-zdivo">
              <span className="layer-label">zdivo</span>
            </div>
            <div className="layer l-lepidlo">
              <span className="layer-label">lepicí hmota</span>
            </div>
            <div className="layer l-izolant">
              <span className="layer-label">izolant 160&nbsp;mm</span>
              <span className="kotva k1" />
              <span className="kotva k2" />
              <span className="kotva k3" />
            </div>
            <div className="layer l-sit">
              <span className="layer-label">výztužná síť</span>
            </div>
            <div className="layer l-omitka">
              <span className="layer-label">omítka</span>
            </div>
          </div>
          <p className="facade-caption">Řez zateplenou fasádou — takhle vypadá naše každodenní práce</p>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás postavíme</h2>
          <p>
            Čtyři věci děláme pořád dokola už léta. Proto je umíme odhadnout na
            korunu i na den.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <span className="sluzba-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <aside className="zelena">
          <span className="zelena-stitek">Dotace</span>
          <p>
            <strong>Zateplení s podporou Zelená úsporám.</strong> Působíme v
            programu Ministerstva životního prostředí zaměřeném na úspory energie
            v rodinných a bytových domech. S žádostí o dotaci vám pomůžeme —
            spočítáme, kolik z fasády zaplatí stát.
          </p>
        </aside>
      </section>

      {/* ================= DŮVĚRA / REFERENCE ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head sh-invert">
          <h2 id="duvera-h">Proč nám lidé v Ústí svěřují svoje domy</h2>
          <p>
            „Spokojený zákazník od investičního záměru až po úspěšné předání
            hotového díla“ — to není slogan na web, to je jediný způsob, jak tady
            v kraji dostanete další zakázku.
          </p>
        </div>

        <div className="duvera-grid">
          <article className="reference">
            <p className="ref-typ">Referenční stavba</p>
            <h3>RD Štefánikova, Ústí nad Labem — Klíše</h3>
            <p>
              Kompletní zateplení fasády rodinného domu certifikovaným systémem
              včetně nové finální omítky. Lešení, izolant, kotvení, síťování,
              omítka — a úklid po sobě. Majitelé topí méně a dům z ulice vypadá
              jako nový.
            </p>
            <p className="ref-mista">
              Realizujeme po celých severních Čechách: Ústí nad Labem · Teplice ·
              Děčín · Litoměřice · Most
            </p>
          </article>

          <div className="certifikaty">
            <h3 className="cert-h">Papíry, které za nás mluví</h3>
            <ul>
              {certifikaty.map((c) => (
                <li key={c.nazev}>
                  <span className="cert-razitko" aria-hidden="true">✓</span>
                  <div>
                    <strong>{c.nazev}</strong>
                    <span>{c.popis}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="cert-pozn">
              Osvědčení předložíme k nahlédnutí u každé nabídky — chtějte je i po
              jiných firmách.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
