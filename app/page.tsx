import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1. HFK Olomouc — fotbalový klub z Holice",
  description:
    "Krajský přebor, mládež od U6 po U19 a domácí trávník na Staškově. 1. HFK Olomouc — fotbal z olomoucké Holice.",
};

const tabulka = [
  { poradi: 1, tym: "1. SK Prostějov „B“", z: 24, skore: "86:24", b: 57 },
  { poradi: 2, tym: "TJ Sokol Bělotín", z: 24, skore: "78:25", b: 55 },
  { poradi: 3, tym: "SK Uničov „B“ — Medlov", z: 24, skore: "77:28", b: 53 },
  { poradi: 4, tym: "1. HFK Olomouc", z: 25, skore: "62:19", b: 52, nas: true },
  { poradi: 5, tym: "FC Želatovice", z: 24, skore: "51:44", b: 41 },
  { poradi: 6, tym: "Jiskra Rapotín", z: 24, skore: "49:48", b: 40 },
];

const vysledky = [
  { kolo: "22. kolo", domaci: "FK Brodek u Přerova", d: 0, h: 2, host: "1. HFK Olomouc", datum: "19. 4.", venku: true },
  { kolo: "23. kolo", domaci: "1. HFK Olomouc", d: 5, h: 0, host: "Sokol Konice", datum: "25. 4.", venku: false },
  { kolo: "24. kolo", domaci: "TJ Postřelmov", d: 0, h: 4, host: "1. HFK Olomouc", datum: "2. 5.", venku: true },
  { kolo: "25. kolo", domaci: "1. HFK Olomouc", d: 4, h: 0, host: "1. FC Viktorie Přerov", datum: "8. 5.", venku: false },
];

const strelci = [
  { zk: "TS", jmeno: "Tomáš Svrčina", goly: 16 },
  { zk: "MS", jmeno: "Matěj Stoppen", goly: 10 },
  { zk: "AZ", jmeno: "Adam Zdráhal", goly: 4 },
  { zk: "PS", jmeno: "Patrik Stoklasa", goly: 4 },
];

const tymy = [
  { kat: "Muži", nazev: "A tým", detail: "Krajský přebor Olomouckého kraje" },
  { kat: "Dorost", nazev: "U19 · U19B · U17", detail: "Starší a mladší dorost" },
  { kat: "Žáci", nazev: "U15 · U14 · U13 · U12", detail: "Starší a mladší žáci" },
  { kat: "Přípravky", nazev: "U11 · U10 · U9 · U8", detail: "Základ fotbalové abecedy" },
  { kat: "Školička", nazev: "U7 · U6", detail: "První kopání do míče" },
];

export default function Page() {
  return (
    <main className="hfk">
      <header className="hfk-top">
        <a className="hfk-mark" href="#" aria-label="1. HFK Olomouc — domů">
          <span className="hfk-mark-num">1.</span>
          <span className="hfk-mark-hfk">HFK</span>
          <span className="hfk-mark-city">Olomouc</span>
        </a>
        <nav className="hfk-nav" aria-label="Hlavní">
          <a href="#tymy">Naše týmy</a>
          <a href="#klub">Klub</a>
          <a href="#tabulka">Tabulka</a>
        </nav>
      </header>

      <section className="hfk-hero">
        <img
          className="hfk-hero-img"
          src="/hero.webp"
          alt="Hráči 1. HFK Olomouc na domácím trávníku v Holici"
          fetchPriority="high"
        />
        <div className="hfk-hero-grad" aria-hidden="true" />
        <div className="hfk-hero-inner">
          <p className="hfk-eyebrow">Holice · Staškova 28 · založeno v Olomouci</p>
          <h1 className="hfk-hero-title">
            Fotbal, který<br />
            <span className="hfk-hero-em">roste z Holice.</span>
          </h1>
          <p className="hfk-hero-lead">
            Od školičky U6 po áčko v krajském přeboru. Patnáct mládežnických
            kategorií, jeden trávník a jedna barva — zelená 1. HFK Olomouc.
          </p>
          <div className="hfk-hero-cta">
            <a className="hfk-btn" href="#tymy">Přihlásit dítě do klubu</a>
            <a className="hfk-btn hfk-btn-ghost" href="#tabulka">Jak si vede áčko</a>
          </div>
        </div>

        <div className="hfk-scoreband" aria-label="Poslední zápas">
          <span className="hfk-scoreband-tag">Poslední zápas · 25. kolo</span>
          <span className="hfk-scoreband-team hfk-scoreband-home">1. HFK Olomouc</span>
          <span className="hfk-scoreband-score">4<em>:</em>0</span>
          <span className="hfk-scoreband-team">Viktorie Přerov</span>
          <span className="hfk-scoreband-when">Holice, Staškova 28</span>
        </div>
      </section>

      <section className="hfk-sec" id="tymy">
        <div className="hfk-sec-head">
          <p className="hfk-eyebrow hfk-eyebrow-dark">Naše týmy</p>
          <h2 className="hfk-h2">Od prvního kopnutí až do krajského přeboru</h2>
          <p className="hfk-sec-lead">
            V Holici trénujeme každou generaci zvlášť. Vyberte kategorii podle
            ročníku dítěte — a přijďte se nezávazně podívat na trénink.
          </p>
        </div>

        <div className="hfk-teams">
          <div className="hfk-teams-photo">
            <img
              src="/section-1.webp"
              alt="Mládežnický tým 1. HFK Olomouc při tréninku"
              loading="lazy"
            />
          </div>
          <ol className="hfk-teams-list">
            {tymy.map((t, i) => (
              <li className="hfk-team" key={t.kat}>
                <span className="hfk-team-idx">{String(i + 1).padStart(2, "0")}</span>
                <div className="hfk-team-body">
                  <span className="hfk-team-kat">{t.kat}</span>
                  <span className="hfk-team-nazev">{t.nazev}</span>
                  <span className="hfk-team-detail">{t.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="hfk-cards">
          <a className="hfk-card" href="#tymy">
            <span className="hfk-card-k">Léto</span>
            <span className="hfk-card-t">Příměstský tábor 2026</span>
            <span className="hfk-card-d">Týden fotbalu, her a obědů přímo v Holici. Pro děti i mimo klub.</span>
          </a>
          <a className="hfk-card" href="#tymy">
            <span className="hfk-card-k">Individuálně</span>
            <span className="hfk-card-t">Osobní fotbalové tréninky</span>
            <span className="hfk-card-d">Práce s míčem, střelba, jeden na jednoho s trenérem.</span>
          </a>
          <a className="hfk-card" href="#tymy">
            <span className="hfk-card-k">Pro veřejnost</span>
            <span className="hfk-card-t">Pronájem UMT</span>
            <span className="hfk-card-d">Umělá tráva se osvětlením k pronájmu na trénink i turnaj.</span>
          </a>
        </div>
      </section>

      <section className="hfk-sec hfk-sec-dark" id="klub">
        <div className="hfk-klub">
          <div className="hfk-klub-text">
            <p className="hfk-eyebrow hfk-eyebrow-light">Klub · Naše Holice</p>
            <h2 className="hfk-h2 hfk-h2-light">Domácí je pro nás Staškova</h2>
            <p className="hfk-klub-lead">
              1. HFK Olomouc hraje v holické čtvrti na stadionu Staškova 28.
              Áčko drží krok o špičku krajského přeboru a za ním roste patnáct
              mládežnických týmů, které tvoří skutečné jádro klubu.
            </p>
            <dl className="hfk-facts" id="tabulka">
              <div className="hfk-fact">
                <dt>Áčko v tabulce</dt>
                <dd>4. místo · 52 bodů</dd>
              </div>
              <div className="hfk-fact">
                <dt>Skóre sezóny</dt>
                <dd>62 : 19</dd>
              </div>
              <div className="hfk-fact">
                <dt>Mládežnických týmů</dt>
                <dd>15 kategorií</dd>
              </div>
            </dl>
          </div>
          <div className="hfk-klub-photo">
            <img
              src="/section-2.webp"
              alt="Stadion a hřiště 1. HFK Olomouc v Holici"
              loading="lazy"
            />
          </div>
        </div>

        <div className="hfk-tables">
          <div className="hfk-table-box">
            <h3 className="hfk-table-title">Krajský přebor — čelo tabulky</h3>
            <table className="hfk-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tým</th>
                  <th scope="col">Z</th>
                  <th scope="col">Skóre</th>
                  <th scope="col">B</th>
                </tr>
              </thead>
              <tbody>
                {tabulka.map((r) => (
                  <tr key={r.poradi} className={r.nas ? "hfk-row-nas" : ""}>
                    <td>{r.poradi}.</td>
                    <td>{r.tym}</td>
                    <td>{r.z}</td>
                    <td>{r.skore}</td>
                    <td className="hfk-td-b">{r.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="hfk-side">
            <div className="hfk-table-box">
              <h3 className="hfk-table-title">Poslední zápasy áčka</h3>
              <ul className="hfk-results">
                {vysledky.map((v) => (
                  <li key={v.kolo} className="hfk-result">
                    <span className="hfk-result-kolo">{v.kolo}</span>
                    <span className={"hfk-result-t" + (!v.venku ? " is-us" : "")}>{v.domaci}</span>
                    <span className="hfk-result-score">{v.d} : {v.h}</span>
                    <span className={"hfk-result-t" + (v.venku ? " is-us" : "")}>{v.host}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hfk-table-box">
              <h3 className="hfk-table-title">Nejlepší střelci</h3>
              <ul className="hfk-scorers">
                {strelci.map((s) => (
                  <li key={s.zk} className="hfk-scorer">
                    <span className="hfk-scorer-badge">{s.zk}</span>
                    <span className="hfk-scorer-name">{s.jmeno}</span>
                    <span className="hfk-scorer-goly">{s.goly}<em> gólů</em></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
