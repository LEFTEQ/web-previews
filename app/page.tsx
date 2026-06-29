import type { CSSProperties } from "react";

const services = [
  { code: "24", title: "Vyvolání z filmu i mobilu", note: "Kinofilm, dia, 6×9 i fotky rovnou z telefonu — minilab přímo u nás." },
  { code: "24A", title: "Digitální ateliér", note: "Rodiny s dětmi, portréty, reklamní a produktová fotografie." },
  { code: "25", title: "Průkazové fotografie", note: "Občanky, víza, zbrojní i studentské průkazy ve všech rozměrech." },
  { code: "25A", title: "Svatby a video", note: "Reportáž, fotografie i natáčení — od obřadu po hotový sestřih." },
  { code: "26", title: "Fotoknihy a fotodárky", note: "Hrnky, plátna, kalendáře i puzzle. Dárky hotové do tří dnů." },
  { code: "26A", title: "Renovace starých fotografií", note: "Retuše, fotomontáže a keramické foto na hroby." },
  { code: "27", title: "Přepisy na DVD a USB", note: "VHS, VHS-C, Hi8, mini DV i 6mm filmové kotouče." },
  { code: "27A", title: "DTP a tisk", note: "Grafické studio, malonákladový barevný tisk, černobílé kopie." },
];

const hours = [
  { day: "Pondělí a středa", time: "8–17 hod." },
  { day: "Úterý, čtvrtek, pátek", time: "8–16 hod." },
];

export default function Page() {
  return (
    <main className="fv">
      <header className="fv-top">
        <a className="fv-mark" href="#" aria-label="Foto-studio Vavruška, úvod">
          <span className="fv-mark-sub">FOTO · STUDIO</span>
          <span className="fv-mark-name">VAVRUŠKA</span>
          <span className="fv-mark-loc">Plzeň · Husova 37</span>
        </a>
        <nav className="fv-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#studio">O nás</a>
        </nav>
      </header>

      <section className="fv-hero">
        <div className="fv-hero-edge" aria-hidden="true">
          <span>VAVRUŠKA&nbsp;PLZEŇ → 22 · 22A · 23 · 23A · 24 · → VAVRUŠKA&nbsp;PLZEŇ</span>
        </div>
        <div className="fv-hero-grid">
          <div className="fv-hero-copy">
            <p className="fv-eyebrow">Fotolab v Plzni od první ruky</p>
            <h1>
              Všechno, co u&nbsp;nás objednáte,
              <span className="fv-hl"> u nás taky vznikne.</span>
            </h1>
            <p className="fv-lede">
              Jako jediní v Plzni jsme zcela soběstační — vyvolávání, fotoknihy,
              fotodárky i přepisy nosičů zpracováváme na vlastní technice. Výsledek
              tak máme stoprocentně pod kontrolou.
            </p>
            <div className="fv-actions">
              <a className="fv-btn" href="#sluzby">Prohlédnout služby</a>
              <a className="fv-btn fv-btn-ghost" href="tel:+420377227968">
                Zavolat 377 227 968
              </a>
            </div>
          </div>
          <figure className="fv-hero-fig">
            <img
              src="/hero.webp"
              alt="Fotoateliér Vavruška v Plzni — práce s fotografiemi a technikou"
              className="fv-hero-img"
            />
            <figcaption className="fv-regmark">
              <span>C</span><span>M</span><span>Y</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="fv-sec" id="sluzby">
        <div className="fv-sechead">
          <p className="fv-eyebrow">Kontaktní list · co děláme</p>
          <h2>Šestnáct políček jednoho ateliéru</h2>
          <p className="fv-sechead-note">
            Od kinofilmu po keramické foto na hroby. Vyberte si políčko —
            zbytek vyřešíme v Husově ulici.
          </p>
        </div>
        <ul className="fv-sheet">
          {services.map((s) => (
            <li className="fv-frame" key={s.code}>
              <span className="fv-frame-num">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="fv-sec fv-studio" id="studio">
        <div className="fv-studio-grid">
          <figure className="fv-studio-fig">
            <img
              src="/section-1.webp"
              alt="Zpracování fotografií ve fotostudiu Vavruška"
            />
          </figure>
          <div className="fv-studio-copy">
            <p className="fv-eyebrow">Husova 37, Plzeň</p>
            <h2>Rodinný minilab, který nic neposílá pryč</h2>
            <p>
              Disponujeme rozsáhlou technikou pro zpracování fotografií všeho
              druhu — od starého kinofilmu a diapozitivů po snímky z mobilu.
              Fotoknihu ze vzpomínek z dětství s vámi sestavíme přímo na
              provozovně a ukážeme všechny možnosti.
            </p>
            <p>
              Fotíme i natáčíme svatby, maturitní plesy, taneční kurzy,
              promoce, křtiny i firemní akce. Fotodárky zvládneme do tří
              pracovních dnů, s příplatkem expres do druhého dne.
            </p>
            <dl className="fv-facts">
              <div>
                <dt>Adresa</dt>
                <dd>Husova 37, Plzeň</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420377227968">377 227 968</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:husova@foto-vavruska.cz">husova@foto-vavruska.cz</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="fv-hours-block">
          <figure className="fv-hours-fig">
            <img
              src="/section-2.webp"
              alt="Hotové fotografie a fotodárky z ateliéru Vavruška"
            />
          </figure>
          <div className="fv-hours">
            <h3>Kdy se stavit</h3>
            <ul>
              {hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span className="fv-hours-time">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="fv-hours-note">
              Fotky k vytištění pošlete přes úschovnu na
              <a href="mailto:minilab@foto-vavruska.cz"> minilab@foto-vavruska.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
