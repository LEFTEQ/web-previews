import type { CSSProperties } from "react";

const kroky = [
  {
    faze: "01",
    nazev: "Oblepíme a zakryjeme",
    text: "Podlahy, nábytek, zárubně, vypínače. Než sundáme první víčko z barvy, je celý byt pod fólií a páskou. Nic nezastříkáme."
  },
  {
    faze: "02",
    nazev: "Vystěrkujeme",
    text: "Praskliny, díry po hmoždinkách, nerovnosti po předchozích malbách. Stěrka schne, brousíme do hladka — pod světlem to prostě musí sedět."
  },
  {
    faze: "03",
    nazev: "Natřeme",
    text: "Základ, dvě krycí vrstvy, ostré hrany u lišt a stropů. Malba, fasáda, střecha i radiátory — podle toho, co dům potřebuje."
  },
  {
    faze: "04",
    nazev: "Uklidíme",
    text: "Fólie ven, pásky dolů, podlaha vytřená. Předáváme byt, do kterého se dá týž večer nastěhovat zpátky."
  }
];

const sluzby = [
  { nazev: "Malování bytů a domů", detail: "Byty, rodinné domy, ordinace, školky i kanceláře v Brně a okolí." },
  { nazev: "Nátěry fasád a střech", detail: "Venkovní práce od lešení po finální krycí vrstvu." },
  { nazev: "Tapetování", detail: "Klasické i vliesové tapety, přesné napojení vzoru." },
  { nazev: "Stěrkování", detail: "Hladké stěny bez map a přechodů, připravené pod světlo." },
  { nazev: "Broušení parket", detail: "Obnova staré podlahy do nového lesku." },
  { nazev: "Rekonstrukce pokojů", detail: "Drobné zednické práce, když je před malbou co spravit." }
];

export default function Page() {
  return (
    <main className="mb">
      <header className="mb-top">
        <a className="mb-logo" href="#" aria-label="Malbyt — lakýrnictví Brno">
          <span className="mb-logo-mark" aria-hidden="true" />
          <span className="mb-logo-word">Malbyt</span>
          <span className="mb-logo-tag">lakýrnictví · Brno</span>
        </a>
        <a className="mb-nav-cta" href="#poptavka">Nezávazná poptávka</a>
      </header>

      <section className="mb-hero">
        <div className="mb-hero-media">
          <img
            src="/hero.webp"
            alt="Lakýrník Malbyt při nanášení krycí vrstvy na stěnu"
            className="mb-hero-img"
          />
          <span className="mb-hero-drip" aria-hidden="true" />
        </div>
        <div className="mb-hero-body">
          <p className="mb-eyebrow">Žijeme řemeslem od roku 2004</p>
          <h1 className="mb-hero-title">
            Oblepíme, <span className="mb-hl">natřeme</span>,
            <br />uklidíme po sobě.
          </h1>
          <p className="mb-hero-lead">
            Malířské a natěračské práce pro brněnské byty, domy, ordinace i kanceláře.
            Přijdeme, zakryjeme každý kout — a odejdeme, jako bychom tu nikdy nebyli.
            Jen ty stěny budou nové.
          </p>
          <div className="mb-hero-actions">
            <a className="mb-btn" href="#poptavka">Chci cenovou nabídku</a>
            <a className="mb-btn mb-btn-ghost" href="#postup">Jak pracujeme</a>
          </div>
          <dl className="mb-hero-facts">
            <div><dt>20 let</dt><dd>na trhu v Brně</dd></div>
            <div><dt>Byty i fasády</dt><dd>menší a střední zakázky</dd></div>
            <div><dt>Čistota</dt><dd>je součást ceny</dd></div>
          </dl>
        </div>
      </section>

      <section className="mb-section mb-postup" id="postup" aria-labelledby="postup-nadpis">
        <div className="mb-section-head">
          <p className="mb-eyebrow">Náš postup</p>
          <h2 className="mb-h2" id="postup-nadpis">Čtyři kroky, po kterých se dá zavřít dveře</h2>
          <p className="mb-section-lead">
            Malování není jen tah štětcem. Většina práce je příprava a úklid — a přesně na tom
            se u nás pozná rozdíl. Tady je celá cesta od prázdného pokoje po hotovo.
          </p>
        </div>
        <ol className="mb-steps">
          {kroky.map((k) => (
            <li className="mb-step" key={k.faze}>
              <span className="mb-step-num" aria-hidden="true">{k.faze}</span>
              <h3 className="mb-step-name">{k.nazev}</h3>
              <p className="mb-step-text">{k.text}</p>
            </li>
          ))}
        </ol>
        <figure className="mb-figure">
          <img
            src="/section-1.webp"
            alt="Připravená místnost se zakrytou podlahou před malováním"
            className="mb-figure-img"
          />
          <figcaption className="mb-figure-cap">
            Zakrytá místnost před prací — takhle to u nás vypadá, než sáhneme po válečku.
          </figcaption>
        </figure>
      </section>

      <section className="mb-section mb-duvera" id="poptavka" aria-labelledby="duvera-nadpis">
        <div className="mb-duvera-grid">
          <div className="mb-duvera-text">
            <p className="mb-eyebrow">Proč právě my</p>
            <h2 className="mb-h2" id="duvera-nadpis">Řemeslo jsme se učili i na stavbách v Německu</h2>
            <p className="mb-section-lead">
              Postupy a preciznost jsme sbírali na zahraničních zakázkách, hlavně v Německu.
              Doma v Brně na nich stavíme každý den. Chceme zákazníka, který se vrátí —
              a doporučí nás dál.
            </p>
            <ul className="mb-values">
              <li><strong>Osobní přístup.</strong> Domluvíme se přímo s vámi, ne přes tři telefony.</li>
              <li><strong>Čistota bez výmluv.</strong> Zakrýváme, uklízíme a nábytek vracíme, kam patří.</li>
              <li><strong>Ekologická likvidace.</strong> Obaly a zbytky barev třídíme a likvidujeme správně.</li>
            </ul>
            <a className="mb-btn" href="#poptavka">Domluvit si termín</a>
          </div>
          <figure className="mb-duvera-media">
            <img
              src="/section-2.webp"
              alt="Hotová vymalovaná místnost s čistě natřenými stěnami"
              className="mb-duvera-img"
            />
          </figure>
        </div>
        <ul className="mb-tags" aria-label="Nabízené práce">
          {sluzby.map((s) => (
            <li className="mb-tag" key={s.nazev}>
              <span className="mb-tag-name">{s.nazev}</span>
              <span className="mb-tag-detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
