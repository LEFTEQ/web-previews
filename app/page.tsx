export const metadata = {
  title: "INTO CZ — bezpečnostní agentura Pardubice | Ostraha, recepce, dohled 24/7",
  description:
    "Bezpečnostní agentura INTO CZ z Pardubic: fyzická ostraha objektů, recepční služby, obchůzky a napojení na pult centralizované ochrany. Nepřetržitý dohled 24 hodin denně, 7 dní v týdnu.",
  openGraph: {
    title: "INTO CZ — bezpečnostní agentura Pardubice",
    description:
      "Fyzická ostraha, recepce a dohled 24/7 pro firmy a objekty v Pardubicích a okolí.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "OS",
    nazev: "Fyzická ostraha objektů",
    popis:
      "Strážný ve vaší provozovně, skladu nebo areálu — v uniformě, s průkazem a jasnými pokyny. Kontrola vjezdu, vozidel a osob, evidence návštěv, zásah při narušení.",
    detail: "Nepřetržitě nebo jen v noci a o víkendech — podle vašeho provozu.",
  },
  {
    kod: "RC",
    nazev: "Recepční a vrátní služba",
    popis:
      "První člověk, kterého vaše návštěva potká. Vydávání klíčů a karet, ohlašování návštěv, přebírání zásilek, obsluha telefonní ústředny a kamerového systému.",
    detail: "Reprezentativní vystupování, čeština i základní angličtina.",
  },
  {
    kod: "OB",
    nazev: "Kontrolní obchůzky",
    popis:
      "Pravidelné i namátkové pochůzky areálem s elektronickým záznamem každého kontrolního bodu. Ráno dostanete protokol: kdo, kdy a kde prošel — bez výmluv.",
    detail: "Čipované kontrolní body, protokol každý den do vaší schránky.",
  },
  {
    kod: "PD",
    nazev: "Připojení na dohledové centrum",
    popis:
      "Váš alarm napojíme na pult centralizované ochrany. Při poplachu vyjíždí zásahová hlídka — obvykle do několika minut, v Pardubicích a blízkém okolí.",
    detail: "Výjezd hlídky, ověření poplachu, zpráva na váš telefon.",
  },
];

const zasady = [
  {
    cislo: "22:00",
    label: "začíná směna",
    text: "Většina škod vzniká v noci. Naši lidé nastupují, když ostatní odcházejí — noční směny jsou u nás pravidlo, ne výjimka.",
  },
  {
    cislo: "60 min",
    label: "interval obchůzek",
    text: "Strážný neobchází, „když si vzpomene“. Každá obchůzka je zaznamenaná čipem na kontrolním bodě a druhý den ji vidíte v protokolu.",
  },
  {
    cislo: "1 číslo",
    label: "na které se dovoláte",
    text: "Žádná ústředna, žádné přepojování. Vedoucí směny bere telefon ve dne i v noci — protože ostraha bez odezvy není ostraha.",
  },
];

export default function Page() {
  return (
    <main className="into">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-brand">
            <span className="wordmark">
              INTO<span className="wordmark-cz">CZ</span>
            </span>
            <span className="brand-tag">bezpečnostní agentura · Pardubice</span>
          </div>

          <div className="hero-main">
            <p className="hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              služba běží — 24 hodin denně, 7 dní v týdnu
            </p>
            <h1 className="hero-title">
              Váš objekt hlídáme,
              <br />
              <span className="hero-title-strong">i když vy spíte.</span>
            </h1>
            <p className="hero-lead">
              Fyzická ostraha, recepce a napojení na dohledové centrum pro firmy,
              sklady a areály v Pardubicích a okolí. Bez subdodavatelů — hlídají
              naši vlastní, proškolení lidé.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="tel:+420466123456">
                Zavolat vedoucímu směny
              </a>
              <a className="btn btn-ghost" href="mailto:info@intocz.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          {/* signature: strážní deník / log obchůzky */}
          <aside className="hero-log" aria-label="Ukázka záznamu z obchůzky">
            <p className="log-head">STRÁŽNÍ DENÍK · OBJEKT SKLAD-PCE-03</p>
            <ul className="log-list">
              <li className="log-row">
                <span className="log-time">22:00</span>
                <span className="log-event">Nástup směny, převzetí klíčů</span>
                <span className="log-ok">OK</span>
              </li>
              <li className="log-row">
                <span className="log-time">23:00</span>
                <span className="log-event">Obchůzka — bod 1–8, brána zajištěna</span>
                <span className="log-ok">OK</span>
              </li>
              <li className="log-row log-row-alert">
                <span className="log-time">00:14</span>
                <span className="log-event">Pohyb u rampy B — prověřeno, kočka</span>
                <span className="log-ok">VYŘEŠENO</span>
              </li>
              <li className="log-row">
                <span className="log-time">01:00</span>
                <span className="log-event">Obchůzka — bod 1–8, bez závad</span>
                <span className="log-ok">OK</span>
              </li>
              <li className="log-row log-row-live">
                <span className="log-time">TEĎ</span>
                <span className="log-event">Strážný na stanovišti</span>
                <span className="log-ok">VE SLUŽBĚ</span>
              </li>
            </ul>
          </aside>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <div className="section-head">
            <h2 id="sluzby-h" className="section-title">
              Co pro vás hlídáme
            </h2>
            <p className="section-sub">
              Čtyři služby, které jde libovolně kombinovat. Rozsah a režim
              nastavíme podle vašeho objektu — ne podle ceníku.
            </p>
          </div>
          <div className="sluzby-grid">
            {sluzby.map((s) => (
              <article className="sluzba" key={s.kod}>
                <span className="sluzba-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-popis">{s.popis}</p>
                <p className="sluzba-detail">{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <div className="section-head">
            <h2 id="duvera-h" className="section-title section-title-light">
              Proč nám firmy v Pardubicích svěřují klíče
            </h2>
            <p className="section-sub section-sub-light">
              Ostraha se neprodává slovy, ale záznamy. Tři čísla, na kterých
              stojí naše práce:
            </p>
          </div>
          <div className="zasady-grid">
            {zasady.map((z) => (
              <article className="zasada" key={z.label}>
                <p className="zasada-cislo">{z.cislo}</p>
                <p className="zasada-label">{z.label}</p>
                <p className="zasada-text">{z.text}</p>
              </article>
            ))}
          </div>
          <blockquote className="reference">
            <p className="reference-text">
              „Po dvou vloupáních do skladu jsme přešli k INTO CZ. Od té doby
              máme každé ráno protokol z obchůzek a za tři roky ani jednu škodu.
              A když v neděli v noci spadl alarm, do dvaceti minut mi volal
              vedoucí směny, že je vše prověřené.“
            </p>
            <footer className="reference-autor">
              — provozní ředitel velkoobchodu, Pardubice-Fáblovka
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
