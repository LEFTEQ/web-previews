const zavady = [
  {
    kod: "ERR-01",
    nazev: "Notebook se přehřívá nebo hučí",
    popis:
      "Vyčistíme chlazení od prachu a vyměníme teplovodivou pastu na procesoru. Notebook zase poběží tiše a chladně.",
    cena: "od 650 Kč",
  },
  {
    kod: "ERR-02",
    nazev: "Prasklý displej nebo dotykové sklo",
    popis:
      "Vyměníme displej u notebooku i dotykové sklo (digitizér) u tabletu. Díly objednáme přesně na váš model.",
    cena: "od 450 Kč",
  },
  {
    kod: "ERR-03",
    nazev: "Politý notebook",
    popis:
      "Čím dřív ho přinesete, tím víc zachráníme. Notebook rozebereme, vyčistíme od tekutiny a zkontrolujeme desku.",
    cena: "od 650 Kč",
  },
  {
    kod: "ERR-04",
    nazev: "Zlomený pant nebo konektor",
    popis:
      "Vyměníme panty displeje, napájecí, zvukové i USB konektory. Nejčastější mechanické závady opravíme do pár dnů.",
    cena: "od 450 Kč",
  },
  {
    kod: "ERR-05",
    nazev: "Pomalý nebo zavirovaný systém",
    popis:
      "Přeinstalujeme Windows, odstraníme viry a převedeme vaše data. Počítač dostanete zpátky rychlejší, než býval.",
    cena: "od 550 Kč",
  },
  {
    kod: "ERR-06",
    nazev: "Počítač nejde zapnout, data jsou pryč",
    popis:
      "Nezoufejte — fotky, dokumenty i účetnictví se většinou dají zachránit. Obnovujeme data z disků i po havárii.",
    cena: "cena dle diagnostiky",
  },
];

const duvody = [
  {
    titulek: "Diagnostika zdarma",
    text: "Zařízení nejdřív prohlédneme a řekneme vám přesnou cenu opravy. Teprve pak se rozhodnete. Za diagnostiku neplatíte nic.",
  },
  {
    titulek: "Opravíme všechny značky",
    text: "Lenovo, HP, Dell, Asus, Acer, Apple i stovky typů tabletů. Pozáruční servis hardwaru i softwaru pod jednou střechou.",
  },
  {
    titulek: "Přijedeme, nebo pošlete kurýra",
    text: "Servis objednáte i k vám domů nebo do firmy v Praze. Z celé ČR zajistíme svoz zařízení kurýrní službou.",
  },
];

export default function Page() {
  return (
    <main className="dcs">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark" aria-label="Delta computer systems">
              <span className="wordmark-delta" aria-hidden="true">Δ</span>
              <span className="wordmark-text">
                delta<em>computer</em>systems
              </span>
            </span>
            <span className="hero-loc">Svatovítská 3 · Praha 6</span>
          </div>

          <div className="hero-main">
            <p className="hero-boot" aria-hidden="true">
              &gt; diagnostika spuštěna … OK
            </p>
            <h1 className="hero-title">
              Váš počítač
              <br />
              <span className="hero-strike">nefunguje.</span>
              <br />
              <span className="hero-fix">Opravíme ho.</span>
            </h1>
            <p className="hero-sub">
              Servis notebooků, tabletů a počítačů v Praze 6. Diagnostiku
              uděláme zdarma, cenu řekneme předem a opravu zvládneme často do
              druhého dne.
            </p>
            <div className="hero-cta-row">
              <a className="btn-primary" href="tel:+420233320941">
                Zavolat servis: 233 320 941
              </a>
              <a className="btn-ghost" href="#zavady">
                Nejčastější závady a ceny
              </a>
            </div>
          </div>

          <dl className="hero-status" aria-label="Rychlá fakta o servisu">
            <div className="status-item">
              <dt>Diagnostika</dt>
              <dd>zdarma</dd>
            </div>
            <div className="status-item">
              <dt>Objednání svozu</dt>
              <dd>24/7</dd>
            </div>
            <div className="status-item">
              <dt>Svoz kurýrem</dt>
              <dd>celá ČR</dd>
            </div>
            <div className="status-item">
              <dt>Opravy u vás</dt>
              <dd>Praha</dd>
            </div>
          </dl>
        </div>

        {/* signature: obří delta postavená z „pinů“ desky plošných spojů */}
        <div className="hero-delta" aria-hidden="true">
          <svg viewBox="0 0 400 360" className="delta-svg" role="presentation">
            <polygon
              points="200,14 388,346 12,346"
              className="delta-outline"
            />
            <polygon
              points="200,96 322,314 78,314"
              className="delta-inner"
            />
            {/* trace lines running out of the delta like PCB tracks */}
            <path className="trace" d="M200,14 L200,60 L260,120" />
            <path className="trace" d="M12,346 L60,300 L120,300" />
            <path className="trace" d="M388,346 L340,346 L300,300" />
            <circle className="pad" cx="200" cy="14" r="7" />
            <circle className="pad" cx="12" cy="346" r="7" />
            <circle className="pad" cx="388" cy="346" r="7" />
            <circle className="pad pad-small" cx="260" cy="120" r="5" />
            <circle className="pad pad-small" cx="120" cy="300" r="5" />
            <circle className="pad pad-small" cx="300" cy="300" r="5" />
          </svg>
        </div>
      </header>

      {/* ================= ZÁVADY / CENÍK ================= */}
      <section className="zavady" id="zavady" aria-labelledby="zavady-h">
        <div className="section-inner">
          <p className="eyebrow">Nejčastější závady · ceny s DPH</p>
          <h2 id="zavady-h" className="section-title">
            Poznáváte svůj problém? Známe řešení.
          </h2>
          <p className="section-lead">
            Šest závad, které opravujeme nejčastěji. Ceny jsou za práci, cenu
            náhradního dílu vám řekneme po diagnostice — ta je vždy zdarma.
          </p>

          <ul className="zavady-grid" role="list">
            {zavady.map((z) => (
              <li className="zavada" key={z.kod}>
                <div className="zavada-head">
                  <span className="zavada-kod">{z.kod}</span>
                  <span className="zavada-cena">{z.cena}</span>
                </div>
                <h3 className="zavada-nazev">{z.nazev}</h3>
                <p className="zavada-popis">{z.popis}</p>
              </li>
            ))}
          </ul>

          <p className="zavady-note">
            Vaše závada tu není? Přineste zařízení, nebo{" "}
            <a href="tel:+420774293966">zavolejte 774 293 966</a> — poradíme i
            s výběrem nového stroje.
          </p>
        </div>
      </section>

      {/* ================= DŮVĚRA / JAK TO PROBÍHÁ ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <p className="eyebrow eyebrow-light">Servisní středisko Praha 6 — Dejvice</p>
          <h2 id="duvera-h" className="section-title section-title-light">
            Nejdřív diagnóza, pak cena. Žádná překvapení.
          </h2>

          <ol className="postup" role="list">
            <li className="krok">
              <span className="krok-cislo">1</span>
              <div>
                <h3>Přinesete nebo pošlete zařízení</h3>
                <p>
                  Najdete nás na Svatovítské 3, dvě minuty od metra Dejvická.
                  Nemůžete přijet? Pošleme pro zařízení kurýra kamkoli v ČR.
                </p>
              </div>
            </li>
            <li className="krok">
              <span className="krok-cislo">2</span>
              <div>
                <h3>Zdarma ho prohlédneme</h3>
                <p>
                  Zjistíme přesnou příčinu závady a zavoláme vám s cenou opravy.
                  Do ničeho se nepouštíme bez vašeho souhlasu.
                </p>
              </div>
            </li>
            <li className="krok">
              <span className="krok-cislo">3</span>
              <div>
                <h3>Opravíme a předáme</h3>
                <p>
                  Hardwarové i softwarové opravy děláme přímo u nás, menší
                  zásahy i u vás doma či ve firmě. O stavu zakázky víte po
                  celou dobu.
                </p>
              </div>
            </li>
          </ol>

          <div className="duvody-grid">
            {duvody.map((d) => (
              <article className="duvod" key={d.titulek}>
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>

          <p className="duvera-adresa">
            Delta computer systems s.r.o. · Svatovítská 518/3, Praha 6 ·{" "}
            <a href="mailto:info@deltacomp.cz">info@deltacomp.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
