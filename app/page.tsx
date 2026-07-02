// DOSY CB s.r.o. — elektroinstalace & slaboproudé bezpečnostní systémy, České Budějovice
// Koncept: „schéma zapojení" — celý web je postaven na vizuálním jazyku elektro dokumentace:
// vodicí linky (obvody), svorkovnicové štítky, fázové značení L1/L2/L3, jistič jako signature prvek.

const sluzby = [
  {
    kod: "L1",
    nazev: "Silnoproud — kompletní elektroinstalace",
    popis:
      "Nové rozvody i rekonstrukce v bytech, domech a firemních objektech. Rozvaděče, jištění, zásuvkové a světelné okruhy — vše podle platných norem, s revizní zprávou v ruce.",
    polozky: ["Rozvody a rozvaděče", "Rekonstrukce bytových jader", "Revize a revizní zprávy"],
  },
  {
    kod: "L2",
    nazev: "Slaboproud — bezpečnostní systémy",
    popis:
      "Naše hlavní specializace. Zabezpečovací ústředny, kamerové systémy a přístupové systémy navrhujeme diskrétně, na míru objektu — a mlčíme o tom, kde co máte.",
    polozky: ["Zabezpečovací systémy (EZS)", "Kamerové systémy (CCTV)", "Přístupové a docházkové systémy"],
  },
  {
    kod: "L3",
    nazev: "Servis — záruční i pozáruční",
    popis:
      "Instalací to u nás nekončí. Pravidelné kontroly, opravy a rozšíření systémů řešíme flexibilně podle vašeho provozu — večer, o víkendu, jak potřebujete.",
    polozky: ["Pravidelné prohlídky systémů", "Opravy a výměny komponent", "Rozšíření stávajících instalací"],
  },
];

const zasady = [
  {
    stitek: "X1",
    titul: "Diskrétnost především",
    text: "Kde máte ústřednu, kudy vedou kabely a co hlídá kamera — to zůstává mezi námi. U bezpečnostních systémů je mlčenlivost součást řemesla, ne bonus.",
  },
  {
    stitek: "X2",
    titul: "Termín podle vás",
    text: "Zakázku plánujeme kolem vašeho provozu. Firma nemůže zavřít kvůli elektrikáři — pracujeme tak, abyste to skoro nepoznali.",
  },
  {
    stitek: "X3",
    titul: "Rozumná cena, jasně předem",
    text: "Nabídku dostanete rozepsanou po položkách. Žádné dopočítávání na konci — co je v nabídce, to platí.",
  },
  {
    stitek: "X4",
    titul: "Servis i po záruce",
    text: "Systém, který jsme zapojili, umíme opravit i za pět let. Držíme dokumentaci ke každé zakázce, takže servis netrvá dny, ale hodiny.",
  },
];

export default function Page() {
  return (
    <main className="dc-main">
      {/* ============ HERO — schéma zapojení ============ */}
      <header className="dc-hero">
        <div className="dc-hero-top">
          <div className="dc-wordmark" aria-label="DOSY CB">
            <span className="dc-wordmark-name">DOSY</span>
            <span className="dc-wordmark-cb">CB</span>
          </div>
          <p className="dc-hero-locale">České Budějovice · elektro s.r.o.</p>
        </div>

        <div className="dc-hero-body">
          <p className="dc-hero-eyebrow">
            <span className="dc-term">L</span> silnoproud&nbsp;&nbsp;·&nbsp;&nbsp;
            <span className="dc-term">S</span> slaboproud&nbsp;&nbsp;·&nbsp;&nbsp;
            <span className="dc-term">PE</span> bezpečnost
          </p>

          <h1 className="dc-hero-title">
            <span className="dc-line dc-line-1">Elektroinstalace</span>
            <span className="dc-line dc-line-2">a&nbsp;zabezpečení,</span>
            <span className="dc-line dc-line-3">
              které <em>drží</em>.
            </span>
          </h1>

          <p className="dc-hero-sub">
            Kompletní elektroinstalace a slaboproudé bezpečnostní systémy pro domácnosti
            i&nbsp;firmy v&nbsp;Českých Budějovicích a&nbsp;okolí. Diskrétně, podle norem,
            se&nbsp;servisem i&nbsp;po&nbsp;záruce.
          </p>

          <div className="dc-hero-actions">
            <a className="dc-btn dc-btn-primary" href="tel:+420387000000">
              Zavolat elektrikáři
            </a>
            <a className="dc-btn dc-btn-ghost" href="#cinnost">
              Co zapojíme
            </a>
          </div>
        </div>

        {/* Signature prvek: jistič — schematická značka + "páčka" v poloze ZAP */}
        <div className="dc-breaker" aria-hidden="true">
          <svg viewBox="0 0 320 560" className="dc-breaker-svg" role="presentation" focusable="false">
            {/* přívodní vodič */}
            <line x1="160" y1="0" x2="160" y2="150" className="dc-wire" />
            {/* svorka horní */}
            <circle cx="160" cy="158" r="9" className="dc-node" />
            {/* páčka jističe — sepnuto */}
            <line x1="160" y1="166" x2="236" y2="330" className="dc-lever" />
            {/* svorka dolní */}
            <circle cx="160" cy="352" r="9" className="dc-node" />
            {/* odchozí vodič */}
            <line x1="160" y1="360" x2="160" y2="560" className="dc-wire dc-wire-out" />
            {/* označení jističe */}
            <text x="196" y="140" className="dc-breaker-label">FA1</text>
            <text x="196" y="400" className="dc-breaker-label">B16/1</text>
          </svg>
          <span className="dc-breaker-state">ZAP</span>
        </div>

        <div className="dc-hero-rail" aria-hidden="true">
          <span>230&nbsp;V</span>
          <span>50&nbsp;Hz</span>
          <span>ČSN&nbsp;33&nbsp;2000</span>
        </div>
      </header>

      {/* ============ SEKCE 1 — ČINNOST (tři fáze) ============ */}
      <section className="dc-sekce dc-cinnost" id="cinnost" aria-labelledby="cinnost-h">
        <div className="dc-sekce-head">
          <p className="dc-sekce-eyebrow">Činnost</p>
          <h2 id="cinnost-h" className="dc-sekce-title">
            Tři fáze naší práce
          </h2>
          <p className="dc-sekce-lead">
            Stejně jako v&nbsp;rozvaděči: každá fáze má svůj okruh, své jištění a&nbsp;svého
            odpovědného člověka. Od&nbsp;zásuvky po&nbsp;kamerový systém.
          </p>
        </div>

        <div className="dc-faze-grid">
          {sluzby.map((s) => (
            <article className="dc-faze" key={s.kod}>
              <div className="dc-faze-head">
                <span className="dc-faze-kod">{s.kod}</span>
                <h3 className="dc-faze-nazev">{s.nazev}</h3>
              </div>
              <p className="dc-faze-popis">{s.popis}</p>
              <ul className="dc-faze-list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ============ SEKCE 2 — DŮVĚRA (svorkovnice zásad) ============ */}
      <section className="dc-sekce dc-duvera" aria-labelledby="duvera-h">
        <div className="dc-sekce-head dc-sekce-head-invert">
          <p className="dc-sekce-eyebrow">Proč DOSY CB</p>
          <h2 id="duvera-h" className="dc-sekce-title">
            Na čem u nás nikdy nešetříte
          </h2>
          <p className="dc-sekce-lead">
            Elektro je řemeslo, kde se chyby nepromíjejí. Proto máme čtyři pevné svorky,
            na&nbsp;kterých stojí každá naše zakázka — od&nbsp;malého bytu po&nbsp;firemní areál.
          </p>
        </div>

        <dl className="dc-svorky">
          {zasady.map((z) => (
            <div className="dc-svorka" key={z.stitek}>
              <dt className="dc-svorka-head">
                <span className="dc-svorka-stitek">{z.stitek}</span>
                {z.titul}
              </dt>
              <dd className="dc-svorka-text">{z.text}</dd>
            </div>
          ))}
        </dl>

        <p className="dc-duvera-pozn">
          Pracujeme v&nbsp;Českých Budějovicích a&nbsp;do&nbsp;30&nbsp;km okolo — Hluboká nad
          Vltavou, Rudolfov, Borek, Litvínovice i&nbsp;dál po&nbsp;domluvě. Reference sdělujeme
          osobně: naši klienti si přejí diskrétnost a&nbsp;my ji držíme.
        </p>
      </section>
    </main>
  );
}
