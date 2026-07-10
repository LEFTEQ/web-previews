import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAVI servis — čištění a renovace DPF filtrů, Plzeň",
  description:
    "Renovace filtrů pevných částic a katalyzátorů v Plzni-Křimicích. Vícestupňové čištění včetně termického procesu, bez chemie, s protokolem měření a renovací do 48 hodin. Ušetříte desítky tisíc oproti novému DPF.",
};

const mereni = [
  {
    stav: "PŘED",
    label: "Diferenční tlak",
    hodnota: "412",
    jednotka: "mbar",
    poznamka: "Ucpaný filtr, vůz v nouzovém režimu",
  },
  {
    stav: "PO",
    label: "Diferenční tlak",
    hodnota: "38",
    jednotka: "mbar",
    poznamka: "Tovární hodnota, kontrolka zhasnutá",
  },
];

const priznaky = [
  "Rozsvítila se kontrolka DPF nebo kontrolka motoru",
  "Vůz má znatelně vyšší spotřebu paliva",
  "Nedosahuje výkonu jako dřív, „táhne\u201c hůř",
  "Auto opakovaně přechází do nouzového režimu",
  "Prasklý filtr se projevuje kouřivostí z výfuku",
];

const postup = [
  {
    n: "01",
    t: "Vstupní měření",
    d: "Změříme diferenční tlak a hmotnostní obsah filtru. Zjistíme, jestli je renovace vůbec potřeba — a jestli má smysl.",
  },
  {
    n: "02",
    t: "Podíváme se dovnitř",
    d: "Skryté vady nejdou odhalit zvenčí. Filtr proto otevřeme a zkontrolujeme stav vložky i oxidačního katalyzátoru.",
  },
  {
    n: "03",
    t: "Vícestupňové čištění",
    d: "Renovujeme včetně termického procesu, zcela bez chemikálií. Šetrně k filtru i k životnímu prostředí.",
  },
  {
    n: "04",
    t: "Výstupní protokol",
    d: "Ke každému DPF dostanete protokol z měření před a po. Černé na bílém, ne slova. Renovace do 48 hodin.",
  },
];

const bazar = [
  { model: "Ford Transit Connect 1.8 TDCi", cena: "24 000" },
  { model: "Citroën C5 2.0 HDI", cena: "21 000" },
  { model: "VW Transporter T5 Facelift 2.0 TDI", cena: "28 000" },
  { model: "Mercedes-Benz Sprinter 313 CDI", cena: "36 000" },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="top">
        <a className="brand" href="#" aria-label="SAVI servis, úvodní stránka">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-bar" />
            <span className="brand-bar" />
            <span className="brand-bar" />
          </span>
          <span className="brand-word">
            SAVI<span className="brand-thin">servis</span>
          </span>
        </a>
        <a className="top-phone" href="tel:+420702040270">
          <span className="top-phone-label">Volejte</span>
          <span className="top-phone-num">+420 702 040 270</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Rozříznutý filtr pevných částic s viditelnou zanesenou keramickou voštinou"
            className="hero-img"
          />
          <span className="hero-scan" aria-hidden="true" />
        </div>
        <div className="hero-body">
          <p className="eyebrow">DPF renovace · Plzeň-Křimice</p>
          <h1 id="hero-h">
            Ucpaná voština
            <br />
            <span className="hero-accent">nemusí</span> znamenat
            <br />
            nový filtr.
          </h1>
          <p className="hero-lead">
            Filtr pevných částic je uvnitř jemná keramická síť. My ji vyčistíme
            termicky a vícestupňově — bez chemie. Vrátíme jí tovární prostupnost
            a vám ušetříme desítky tisíc za nový kus, který nepotřebujete.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420702040270">
              Zavolat a poradit se
            </a>
            <a className="btn btn-ghost" href="#postup">
              Jak renovace probíhá
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Do 48 h</dt>
              <dd>hotová renovace</dd>
            </div>
            <div>
              <dt>Bez chemie</dt>
              <dd>jen teplo a tlak</dd>
            </div>
            <div>
              <dt>Protokol</dt>
              <dd>měření před i po</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="gauge" aria-labelledby="gauge-h">
        <div className="gauge-head">
          <p className="eyebrow">Změřeno, ne odhadnuto</p>
          <h2 id="gauge-h">Rozdíl, který uvidíte na přístroji</h2>
          <p className="gauge-sub">
            Diferenční tlak je řeč, kterou mluví každý DPF. Takhle vypadá typický
            filtr před renovací a po ní.
          </p>
        </div>
        <div className="gauge-grid">
          {mereni.map((m) => (
            <div key={m.stav} className={`gcard g-${m.stav.toLowerCase()}`}>
              <span className="gcard-stav">{m.stav}</span>
              <p className="gcard-label">{m.label}</p>
              <p className="gcard-val">
                <span className="gcard-num">{m.hodnota}</span>
                <span className="gcard-unit">{m.jednotka}</span>
              </p>
              <p className="gcard-note">{m.poznamka}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="postup" id="postup" aria-labelledby="postup-h">
        <div className="postup-media">
          <img
            src="/section-1.webp"
            alt="Práce na renovaci filtru pevných částic v servisní dílně"
            className="postup-img"
          />
        </div>
        <div className="postup-body">
          <p className="eyebrow">Poctivá ruční práce</p>
          <h2 id="postup-h">Čtyři kroky k záchraně vašeho DPF</h2>
          <ol className="steps">
            {postup.map((s) => (
              <li key={s.n} className="step">
                <span className="step-n" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="signs" aria-labelledby="signs-h">
        <div className="signs-head">
          <p className="eyebrow">Nevyčkávejte — řešte</p>
          <h2 id="signs-h">Podle čeho poznáte ucpaný filtr</h2>
        </div>
        <ul className="signs-list">
          {priznaky.map((p, i) => (
            <li key={i}>
              <span className="signs-dot" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="bazar" aria-labelledby="bazar-h">
        <div className="bazar-media">
          <img
            src="/section-2.webp"
            alt="Skladem renovované originální filtry pevných částic s výstupním protokolem"
            className="bazar-img"
          />
        </div>
        <div className="bazar-body">
          <p className="eyebrow">Bazar filtrů · originální díly</p>
          <h2 id="bazar-h">Renovované DPF skladem, s protokolem</h2>
          <p className="bazar-lead">
            Když už renovace vašeho kusu nestačí, nabídneme vám zrenovovaný
            originální filtr ze skladu. Každý prošel naší dílnou a vykazuje
            tovární hodnoty. Ke každému dostanete výstupní protokol.
          </p>
          <ul className="price-list">
            {bazar.map((b) => (
              <li key={b.model}>
                <span className="price-model">{b.model}</span>
                <span className="price-val">
                  {b.cena}&nbsp;<span className="price-cur">Kč</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="bazar-note">
            Ceny jsou orientační podle stavu konkrétního kusu. Zavolejte, řekneme
            vám přesně, co pro váš vůz máme.
          </p>
        </div>
      </section>
    </main>
  );
}
