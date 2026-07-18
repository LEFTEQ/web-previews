import type { ReactNode } from "react";

type Product = {
  tag: string;
  title: string;
  body: string;
  online: boolean;
};

const products: Product[] = [
  {
    tag: "Vozidla",
    title: "Povinné ručení i havarijko",
    body: "Sjednáte online za pár minut. Po nehodě voláte nám, ne úřadům — škodu nahlásíte z mobilu a auto do servisu domluvíme za vás.",
    online: true,
  },
  {
    tag: "Život a úraz",
    title: "Životní pojištění NEON",
    body: "Ochrana příjmu, když přijde úraz nebo nemoc. Připojištění trvalých následků teď se slevou 30 %.",
    online: false,
  },
  {
    tag: "Majetek",
    title: "Bydlení DOMEX+",
    body: "Byt, dům i vybavení proti požáru, vodě a vloupání. Rozsah nastavíme přesně na to, co doopravdy máte doma.",
    online: true,
  },
  {
    tag: "Cesty",
    title: "Cestovní pojištění",
    body: "Léčebné výlohy, storno zájezdu i ztracená zavazadla. Se slevou 10 % při sjednání online, klidně den před odletem.",
    online: true,
  },
  {
    tag: "Podnikání",
    title: "Firmy SIMPLEX",
    body: "Když při podnikání přijdou potíže, přenechte je nám. V anketě Pojišťovna roku oceněné jako nejlepší na trhu.",
    online: false,
  },
  {
    tag: "Mazlíčci",
    title: "Pojištění psů HAFAN",
    body: "Proplatíme náklady na veterináře, když pes onemocní nebo se zraní. Ať vás starost o čtyřnožce nebrzdí.",
    online: true,
  },
];

type Result = {
  value: string;
  label: string;
};

const results: Result[] = [
  { value: "TOP 5", label: "mezi největšími pojišťovnami v Česku" },
  { value: "1,3 mil.+", label: "klientů, kteří nám svěřili svoje pojištění" },
  { value: "1,4 mil.+", label: "pojištěných vozidel na silnicích" },
  { value: "2,4 mil.+", label: "platných pojistných smluv" },
  { value: "2005", label: "od tohoto roku jsme součástí Vienna Insurance Group" },
  { value: "Zlato", label: "Pojišťovna roku za pojištění podnikatelů" },
];

function Arc(): ReactNode {
  return (
    <svg
      className="cpp-arc"
      viewBox="0 0 1200 440"
      role="img"
      aria-label="Skoková křivka — trajektorie skoku přes překážku"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Taxisův příkop — brush fence a příkop pod vrcholem oblouku */}
      <g className="cpp-hurdle" aria-hidden="true">
        <rect x="556" y="330" width="88" height="66" rx="4" fill="#b5793f" />
        <rect x="556" y="322" width="88" height="14" rx="3" fill="#274a30" />
        <path d="M556 396 h88" stroke="#1b1a18" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* skoková křivka */}
      <path
        className="cpp-arc-path"
        d="M70 396 Q600 -30 1130 396"
        pathLength={1}
        fill="none"
        stroke="#d51f26"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle className="cpp-arc-land" cx="1130" cy="396" r="9" fill="#d51f26" />
    </svg>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="cpp">
      <header className="cpp-nav">
        <a className="cpp-logo" href="#hero" aria-label="ČPP — pojišťovací poradce Pardubice">
          <span className="cpp-logo-mark">ČPP</span>
          <span className="cpp-logo-sub">pojišťovací poradce · Pardubice</span>
        </a>
        <a className="cpp-nav-tel" href="tel:777111222">
          <span className="cpp-nav-tel-label">Zavolejte poradci</span>
          <span className="cpp-nav-tel-num">777 111 222</span>
        </a>
      </header>

      <section className="cpp-hero" id="hero" aria-labelledby="hero-title">
        <div className="cpp-hero-inner">
          <Arc />
          <p className="cpp-eyebrow">Pojišťovací poradce · Pardubice</p>
          <h1 className="cpp-title" id="hero-title">
            Každou <span className="cpp-title-hi">překážku</span>
            <br />
            vezmeme za vás.
          </h1>
          <p className="cpp-lede">
            Osobní poradce z Pardubic. Vozidla, majetek, život i podnikání sjednáme přesně
            na míru — a když přijde škoda, jsme u toho první a vyřídíme ji za vás. Přeneseme
            vás bezpečně na druhou stranu.
          </p>
          <div className="cpp-cta">
            <a className="cpp-btn cpp-btn--red" href="tel:777111222">Domluvit poradce</a>
            <a className="cpp-btn cpp-btn--ghost" href="#nabidka">Spočítat pojištění online</a>
          </div>
        </div>
      </section>

      <section className="cpp-services" id="nabidka" aria-labelledby="nabidka-title">
        <div className="cpp-section-head">
          <p className="cpp-kicker">01 — Co pro vás pojistíme</p>
          <h2 className="cpp-h2" id="nabidka-title">
            Šest překážek, přes které vás přeneseme
          </h2>
          <p className="cpp-sub">
            Nemusíte se orientovat v pojistných podmínkách. Řekněte, co chcete ochránit,
            zbytek je naše práce.
          </p>
        </div>
        <ul className="cpp-grid">
          {products.map((p) => (
            <li className="cpp-card" key={p.title}>
              <span className="cpp-card-tag">{p.tag}</span>
              <h3 className="cpp-card-title">{p.title}</h3>
              <p className="cpp-card-body">{p.body}</p>
              {p.online ? (
                <span className="cpp-card-online">Sjednáte online</span>
              ) : (
                <span className="cpp-card-online cpp-card-online--advisor">S poradcem na pobočce</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="cpp-board" id="o-nas" aria-labelledby="o-nas-title">
        <div className="cpp-board-curve" aria-hidden="true">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path d="M0 80 Q600 -18 1200 80 Z" fill="#274a30" />
          </svg>
        </div>
        <div className="cpp-board-inner">
          <div className="cpp-section-head cpp-section-head--light">
            <p className="cpp-kicker cpp-kicker--light">02 — Kde stojíme</p>
            <h2 className="cpp-h2" id="o-nas-title">Výsledková listina</h2>
            <p className="cpp-sub cpp-sub--light">
              Čísla, o která se opřete, když nám svěříte to svoje. Sečteno napříč celou
              Českou republikou.
            </p>
          </div>
          <ol className="cpp-results">
            {results.map((r) => (
              <li className="cpp-result" key={r.label}>
                <span className="cpp-result-value">{r.value}</span>
                <span className="cpp-result-label">{r.label}</span>
              </li>
            ))}
          </ol>
          <figure className="cpp-quote">
            <blockquote>
              „Po nehodě jsem čekal týdny papírování. Místo toho mi poradce zavolal do
              hodiny a škodu vyřídil za mě. Přesně tak jsem si pojištění vždycky
              představoval.“
            </blockquote>
            <figcaption>Marek Havelka — klient z Pardubic, pojištění vozidla</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
