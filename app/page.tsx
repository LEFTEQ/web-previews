import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MODOS Olomouc — kanalizace, vodovody a dopravní stavby na Hané",
  description:
    "MODOS spol. s r.o. staví od roku 1991 vodovody, kanalizace, ČOV, mosty a komunikace na Olomoucku. Komplexní stavební dílo včetně projektu, certifikace ISO 9001 a 14001.",
  openGraph: {
    title: "MODOS Olomouc — stavíme to, co používáte denně",
    description:
      "Kanalizace, vodovody, ČOV, mosty a silnice na Hané. Stavební firma z Olomouce s praxí od roku 1991.",
    locale: "cs_CZ",
    type: "website",
  },
};

const obory = [
  {
    kod: "H2O",
    nazev: "Vodovody",
    popis:
      "Nové řady i rekonstrukce stávajících sítí. Pokládáme potrubí tak, aby voda tekla ještě vašim vnukům — vodovod ul. Družstevní v Horce nad Moravou postavený v trase nové komunikace.",
    hloubka: "1,2–1,5 m pod terénem",
  },
  {
    kod: "KAN",
    nazev: "Kanalizace a ČOV",
    popis:
      "Gravitační i tlaková kanalizace, kompletní odkanalizování obcí. Ve Svébohově jsme uložili 4 260 m stok, v Olomouci na Jiráskově a Blanické rekonstruovali kameninu DN 150–500.",
    hloubka: "až 5 m ve výkopu",
  },
  {
    kod: "COM",
    nazev: "Dopravní stavby",
    popis:
      "Mosty, silnice, místní komunikace i cyklostezky. Nový most přes Blatu v Cakově po bleskové povodni 2019, cyklostezka Úsov–Klopina, opravy vozovek po celém Olomoucku.",
    hloubka: "od podloží po obrusnou vrstvu",
  },
];

const reference = [
  {
    nazev: "Most ev. č. 43716‑1",
    misto: "Hradčany",
    rok: "2020",
    delka: "nová nosná konstrukce",
    popis:
      "Výměna nevyhovujících prefabrikátových nosníků za novou monolitickou konstrukci.",
  },
  {
    nazev: "Kanalizace ul. Jiráskova",
    misto: "Olomouc",
    rok: "2020",
    delka: "370 m",
    popis:
      "Rekonstrukce gravitační splaškové kanalizace v hustě obydlené městské ulici.",
  },
  {
    nazev: "Kanalizace Svébohov",
    misto: "obec Svébohov",
    rok: "2021",
    delka: "4 260 m",
    popis:
      "Kompletní gravitační splašková síť pro celou obec — od projektu po kolaudaci.",
  },
  {
    nazev: "Horní most v Cakově",
    misto: "Senice na Hané",
    rok: "2020",
    delka: "18,39 m",
    popis:
      "Nový most přes vodní tok Blata, obnova po bleskové povodni v roce 2019.",
  },
];

export default function Page() {
  return (
    <main className="md-main">
      <section className="md-hero" aria-labelledby="md-hero-title">
        <div className="md-hero-grid" aria-hidden="true">
          <span className="md-datum md-datum--a" />
          <span className="md-datum md-datum--b" />
          <span className="md-terrain" />
        </div>

        <div className="md-hero-inner">
          <p className="md-eyebrow">
            <span className="md-mark">MODOS</span>
            <span>Olomouc · Masarykova třída · od 1991</span>
          </p>

          <h1 id="md-hero-title" className="md-hero-title">
            <span className="md-line md-line-1">Stavíme to,</span>
            <span className="md-line md-line-2">co používáte</span>
            <span className="md-line md-line-3">
              <span className="md-under">denně.</span>
            </span>
          </h1>

          <p className="md-hero-lead">
            Vodovody, kanalizace, čistírny, mosty a silnice na Hané. Většinou
            jsou pod nohama nebo pod terénem — a právě proto musí vydržet
            desítky let. To je práce, po které nezůstane nepořádek, ale funkční
            město.
          </p>

          <dl className="md-facts">
            <div>
              <dt>Na trhu</dt>
              <dd>od 1991</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Olomouc</dd>
            </div>
            <div>
              <dt>Certifikace</dt>
              <dd>ISO 9001 · 14001</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="md-obory" aria-labelledby="md-obory-title">
        <header className="md-sec-head">
          <p className="md-sec-kicker">Obory činnosti</p>
          <h2 id="md-obory-title">
            Tři vrstvy, které drží město pohromadě.
          </h2>
          <p className="md-sec-note">
            Umíme zajistit celé dílo — od projektové dokumentace po předání
            hotové stavby. Jeden dodavatel, jedna odpovědnost.
          </p>
        </header>

        <ul className="md-obor-list">
          {obory.map((o) => (
            <li key={o.kod} className="md-obor">
              <span className="md-obor-kod" aria-hidden="true">
                {o.kod}
              </span>
              <div className="md-obor-body">
                <h3>{o.nazev}</h3>
                <p>{o.popis}</p>
                <p className="md-obor-hloubka">{o.hloubka}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="md-ref" aria-labelledby="md-ref-title">
        <header className="md-sec-head md-sec-head--dark">
          <p className="md-sec-kicker">Referenční projekty</p>
          <h2 id="md-ref-title">Postavené a předané.</h2>
          <p className="md-sec-note">
            Konkrétní stavby na Olomoucku, Litovelsku a Šumpersku — s délkou,
            místem a datem dokončení, jak je vidí investoři, kterým jsme je
            předali.
          </p>
        </header>

        <ol className="md-ref-list">
          {reference.map((r, i) => (
            <li key={r.nazev} className="md-ref-item">
              <span className="md-ref-no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md-ref-main">
                <h3>{r.nazev}</h3>
                <p className="md-ref-meta">
                  <span>{r.misto}</span>
                  <span className="md-ref-dot" aria-hidden="true">
                    ·
                  </span>
                  <span>{r.rok}</span>
                </p>
                <p className="md-ref-popis">{r.popis}</p>
              </div>
              <span className="md-ref-delka">{r.delka}</span>
            </li>
          ))}
        </ol>

        <p className="md-ref-foot">
          Certifikáty ČSN EN ISO 9001, ISO 14001 a OHSAS 18001 nejsou jen papír
          na zdi — znamenají, že stavbu odevzdáme uklizenou, změřenou a s
          dokumentací skutečného provedení.
        </p>
      </section>
    </main>
  );
}
