import { AiImage } from "./_ui";

const KEYBIT_PATH =
  "M0,44 L0,26 L50,26 L50,16 L100,16 L100,30 L150,30 L150,12 L200,12 L200,22 L250,22 L250,18 L300,18 L300,32 L350,32 L350,10 L400,10 L400,24 L450,24 L450,16 L500,16 L500,28 L550,28 L550,14 L600,14 L600,20 L650,20 L650,30 L700,30 L700,12 L750,12 L750,26 L800,26 L800,18 L850,18 L850,32 L900,32 L900,14 L950,14 L950,22 L1000,22 L1000,16 L1050,16 L1050,28 L1100,28 L1100,12 L1150,12 L1150,24 L1200,24 L1200,44 Z";

function KeyBit({ cut = false }: { cut?: boolean }) {
  return (
    <div className={cut ? "divider divider-cut" : "divider"} aria-hidden="true">
      <svg viewBox="0 0 1200 44" preserveAspectRatio="none" role="presentation">
        <path d={KEYBIT_PATH} />
      </svg>
    </div>
  );
}

const SLUZBY = [
  "Výroba všech druhů klíčů na počkání",
  "Výroba a opravy autoklíčů a motoklíčů",
  "Prodej a opravy zámků",
  "Montáž dveřního kování",
  "Bezpečnostní dveře FORNOX a CAG",
  "Prodej a servis trezorů",
  "Otevírací služba při zabouchnutí",
  "Autorizované servisní středisko FAB",
];

const DUVERA = [
  {
    k: "Koncese",
    t: "Ochrana majetku a osob",
    d: "Máme koncesi v oboru technických služeb k ochraně majetku a osob — děláme jen to, na co jsme oprávnění.",
  },
  {
    k: "1991",
    t: "Přes 30 let v Olomouci",
    d: "Rodinná dílna s tradicí od roku 1991. Stejné ruce, stejný obor, stejná adresa.",
  },
  {
    k: "FAB",
    t: "Servisní středisko",
    d: "Autorizovaný servis FAB s originálními díly a vložkami do stavebnicových systémů.",
  },
];

export default function Page() {
  return (
    <>
      <header className="site-head">
        <a className="wordmark" href="#" aria-label="KZT Novák, zámečnictví Olomouc">
          <span className="wm-badge">KZT</span>
          <span className="wm-name">
            NOVÁK
            <small>zámečnictví · Olomouc</small>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby" className="active">Naše služby</a>
          <a href="#tym">Náš tým</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Čerstvě vyfrézovaný klíč a odhalený zámkový mechanismus v dílně KZT Novák"
            className="hero-img"
          />
        </div>
        <div className="hero-inner">
          <p className="eyebrow"><span className="tick" />Zámečnictví s koncesí · od roku 1991</p>
          <h1 className="triad">
            <span className="w">KLÍČE</span>
            <span className="sep" aria-hidden="true">·</span>
            <span className="w">ZÁMKY</span>
            <span className="sep" aria-hidden="true">·</span>
            <span className="w">TREZORY</span>
          </h1>
          <p className="lede">
            Klíč na počkání, otevření zabouchnutých dveří, bezpečnostní dveře i trezor.
            Řemeslo, které v Olomouci děláme přes třicet let.
          </p>
          <a className="cta" href="tel:777111222">Zavolat 777 111 222</a>
        </div>
        <KeyBit cut />
      </section>

      <section className="band" id="sluzby">
        <div className="band-grid">
          <div className="band-copy">
            <p className="eyebrow"><span className="tick" />Naše služby</p>
            <h2 className="band-title">Co u nás vyřídíte</h2>
            <span className="rule keybit-line" aria-hidden="true" />
            <ul className="pins">
              {SLUZBY.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="callout">
              <strong>Specialisté na bezpečnostní dveře.</strong> Právě probíhá výprodej
              skladových zásob — slevy až&nbsp;70&nbsp;%.
            </p>
          </div>
          <figure className="band-figure">
            <AiImage
              src="/section-1.webp"
              alt="Výroba klíčů a montáž bezpečnostního kování v zámečnictví KZT Novák"
              className="band-img"
            />
          </figure>
        </div>
      </section>

      <KeyBit />

      <section className="band band-alt" id="tym">
        <div className="band-grid reverse">
          <figure className="band-figure lift">
            <AiImage
              src="/section-2.webp"
              alt="Miroslav Novák u pracovního stolu s bezpečnostními vložkami a nářadím"
              className="band-img"
            />
          </figure>
          <div className="band-copy">
            <p className="eyebrow"><span className="tick" />Proč právě my</p>
            <h2 className="band-title">Řemeslo, na které se spolehnete</h2>
            <span className="rule keybit-line" aria-hidden="true" />
            <div className="facts">
              {DUVERA.map((f) => (
                <div className="fact" key={f.k}>
                  <span className="fact-key">{f.k}</span>
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
