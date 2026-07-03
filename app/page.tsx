export const metadata = {
  title: "Pohřební služba Cajzl — Brno | NON-STOP 603 361 061",
  description:
    "Rodinná pohřební služba v Brně od roku 1983. NON-STOP odvoz zesnulých, sjednání pohřbu na Kolišti 65 v Brně a v Zbýšově u Brna. Zavolejte 603 361 061.",
  openGraph: {
    title: "Pohřební služba Cajzl — Brno",
    description:
      "Rodinná pohřební služba od roku 1983. NON-STOP odvoz zesnulých, kanceláře v Brně a Zbýšově u Brna.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    nazev: "Odvoz zesnulého — kdykoli",
    text: "Přijedeme kamkoli v Brně a okolí, ve dne i v noci, o víkendu i o svátcích. Zesnulého převezeme důstojně a bez zbytečného čekání. Stačí zavolat 603 361 061.",
    stitek: "non-stop",
  },
  {
    nazev: "Sjednání pohřbu",
    text: "Obřad v kostele, v obřadní síni nebo rozloučení v úzkém rodinném kruhu. Projdeme s vámi vše krok za krokem — rakev, květiny, hudbu, parte i termín. Nic nemusíte znát dopředu.",
    stitek: "v kanceláři i po telefonu",
  },
  {
    nazev: "Kremace a uložení",
    text: "Zajistíme kremaci, urnu podle vašeho výběru i uložení do hrobu nebo kolumbária. Poradíme s výběrem hřbitova v Brně i v okolních obcích.",
    stitek: "včetně vyřízení dokladů",
  },
  {
    nazev: "Vyřízení úmrtního listu",
    text: "Matriku, úmrtní list a doklady pro notáře vyřídíme za vás. Poradíme také s tím, na co máte nárok — pohřebné a volno v zaměstnání.",
    stitek: "bez úřadů",
  },
];

const kancelare = [
  {
    mesto: "Brno",
    adresa: "Koliště 65",
    hodiny: "pondělí–pátek 8.00–16.00",
    tel: "533 433 100",
    telHref: "tel:+420533433100",
    pozn: "Přímo v centru, u zastávky Malinovského náměstí.",
  },
  {
    mesto: "Zbýšov u Brna",
    adresa: "Masarykova 119",
    hodiny: "pondělí–pátek 8.00–14.00",
    tel: "603 361 061",
    telHref: "tel:+420603361061",
    pozn: "Pro Zbýšov, Rosice, Oslavany a okolí.",
  },
];

export default function Page() {
  return (
    <main className="cz">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="brand-name">Cajzl</span>
            <span className="brand-sub">pohřební služba · Brno</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Jsme tu,</span>
            <span className="hero-line hero-line-2">když nevíte,</span>
            <span className="hero-line hero-line-3">
              jak dál<span className="tecka">.</span>
            </span>
          </h1>

          <p className="hero-text">
            Rodinná pohřební služba v&nbsp;Brně od&nbsp;roku&nbsp;1983. Postaráme se
            o&nbsp;vše&nbsp;— od&nbsp;převozu zesnulého po&nbsp;důstojné rozloučení.
            V&nbsp;klidu, bez spěchu a&nbsp;za&nbsp;cenu, kterou znáte předem.
          </p>

          <div className="hero-cta">
            <a className="btn-call" href="tel:+420603361061">
              <span className="btn-call-label">NON-STOP odvoz zesnulých</span>
              <span className="btn-call-number">603 361 061</span>
            </a>
            <p className="hero-note">
              Voláte-li v&nbsp;noci nebo o&nbsp;víkendu, přijedeme stejně jako
              ve&nbsp;všední den. Jsme na&nbsp;telefonu opravdu nepřetržitě.
            </p>
          </div>
        </div>

        {/* signature: světlo svíce — tichý vertikální gradient s plamenem z čar */}
        <div className="svice" aria-hidden="true">
          <span className="svice-plamen"></span>
          <span className="svice-knot"></span>
          <span className="svice-telo"></span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sekce sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-inner">
          <p className="eyebrow">Co pro vás zařídíme</p>
          <h2 id="sluzby-h" className="sekce-title">
            Vše na jednom místě, na jeden telefon
          </h2>
          <p className="sekce-perex">
            Úmrtí blízkého člověka s&nbsp;sebou nese desítky drobných kroků.
            Většinu z&nbsp;nich můžete nechat na&nbsp;nás.
          </p>

          <ul className="sluzby-grid">
            {sluzby.map((s) => (
              <li key={s.nazev} className="sluzba">
                <p className="sluzba-stitek">{s.stitek}</p>
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA / KANCELÁŘE ===== */}
      <section className="sekce duvera" aria-labelledby="duvera-h">
        <div className="sekce-inner">
          <div className="duvera-hlava">
            <div>
              <p className="eyebrow eyebrow-svetly">Rodinná firma od roku 1983</p>
              <h2 id="duvera-h" className="sekce-title sekce-title-svetly">
                Přes čtyřicet let doprovázíme brněnské rodiny
              </h2>
              <p className="sekce-perex sekce-perex-svetly">
                Pohřebnictví Cajzl založil Pavel Cajzl v&nbsp;roce&nbsp;1983.
                Dodnes jsme rodinná firma&nbsp;— sjednání pohřbu s&nbsp;vámi
                neřeší anonymní přepážka, ale člověk, který ponese odpovědnost
                za&nbsp;celé rozloučení. Ceny říkáme předem a&nbsp;písemně,
                nic navíc vás nepřekvapí.
              </p>
            </div>
            <div className="letopocet" aria-hidden="true">
              <span className="letopocet-od">1983</span>
              <span className="letopocet-linka"></span>
              <span className="letopocet-do">dodnes</span>
            </div>
          </div>

          <div className="kancelare">
            {kancelare.map((k) => (
              <article key={k.mesto} className="kancelar">
                <h3 className="kancelar-mesto">{k.mesto}</h3>
                <p className="kancelar-adresa">{k.adresa}</p>
                <p className="kancelar-hodiny">{k.hodiny}</p>
                <p className="kancelar-pozn">{k.pozn}</p>
                <a className="kancelar-tel" href={k.telHref}>
                  {k.tel}
                </a>
              </article>
            ))}
            <article className="kancelar kancelar-nutne">
              <h3 className="kancelar-mesto">Mimo provozní dobu</h3>
              <p className="kancelar-pozn">
                V&nbsp;nutných případech s&nbsp;vámi pohřeb sjednáme i&nbsp;večer
                nebo o&nbsp;víkendu&nbsp;— po&nbsp;dohodě na&nbsp;telefonu.
              </p>
              <a className="kancelar-tel" href="tel:+420603446859">
                603 446 859
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
