const sluzby = [
  {
    nazev: "Protézy horních i dolních končetin",
    popis:
      "Od prvního sejmutí míry přes zkušební lůžko až po finální protézu. Stavíme na dílech Otto Bock a Streifeneder, ale lůžko tvarujeme vždy podle vaší kultě — žádné dvě nejsou stejné.",
    stitek: "individuální výroba",
  },
  {
    nazev: "Ortézy a korzety na míru",
    popis:
      "Trupové korzety, ortézy kolen, kotníků i zápěstí. Vyrábíme podle sádrového odlitku nebo skenu, takže pomůcka drží tam, kde má — a netlačí tam, kde nemá.",
    stitek: "podle odlitku těla",
  },
  {
    nazev: "Ortopedická obuv šitá na míru",
    popis:
      "Vlastní obuvnická dílna přímo v Ostravě. Šijeme boty na kopyto vytvořené podle vaší nohy — pro diabetiky, po amputacích prstů i pro výrazné deformity. Nabízíme také ZIPky BILLY Footwear se zipem po celém obvodu.",
    stitek: "vlastní dílna",
  },
  {
    nazev: "Ortopedické vložky",
    popis:
      "Vložky do bot podle otisku a vyšetření stoje. Pomáhají při plochonoží, ostruze i po operacích. Hotové obvykle do dvou týdnů, úpravy zdarma, dokud nesedí.",
    stitek: "do 2 týdnů",
  },
];

const kroky = [
  {
    krok: "Míra",
    text: "Přijdete k nám do provozovny v Ostravě. Protetik vás vyšetří, sejme míru nebo zhotoví sádrový odlitek. Počítejte s hodinou času.",
  },
  {
    krok: "Výroba",
    text: "Pomůcku vyrábíme ručně v naší dílně. U protéz nejdřív zkušební lůžko — přijdete na zkoušku a doladíme každý milimetr.",
  },
  {
    krok: "Předání",
    text: "Pomůcku si vyzkoušíte přímo u nás, naučíme vás s ní zacházet. Úpravy a servis řešíme průběžně, jsme tu i po předání.",
  },
];

export default function Page() {
  return (
    <main className="op-main">
      {/* ===================== HERO ===================== */}
      <header className="op-hero">
        <div className="op-hero-topbar">
          <span className="op-wordmark">
            ORTO<span className="op-wordmark-dash">–</span>PRO
            <span className="op-wordmark-city">Ostrava</span>
          </span>
          <a className="op-tel" href="tel:+420596110110">
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 2h3l1.5 3.5L5.8 7a10 10 0 0 0 3.2 3.2l1.5-1.7L14 10v3a1 1 0 0 1-1 1C6.9 14 2 9.1 2 3a1 1 0 0 1 1-1Z"
                fill="currentColor"
              />
            </svg>
            596&nbsp;110&nbsp;110
          </a>
        </div>

        <div className="op-hero-grid">
          <div className="op-hero-text">
            <p className="op-eyebrow">
              Ortopedická protetika · rodinná dílna od roku 1992
            </p>
            <h1 className="op-h1">
              Pomůcka tvarovaná
              <br />
              <em>podle vašeho těla,</em>
              <br />
              ne podle tabulky.
            </h1>
            <p className="op-lede">
              Protézy, ortézy, korzety, vložky i boty šité na míru — vyrobené
              ručně v Ostravě a hrazené zdravotními pojišťovnami. Přes třicet
              let bereme míru lidem, ne velikostem.
            </p>
            <div className="op-hero-cta">
              <a className="op-btn op-btn-solid" href="tel:+420596110110">
                Zavolat do dílny
              </a>
              <a className="op-btn op-btn-ghost" href="mailto:info@orto-pro.cz">
                Napsat e-mail
              </a>
            </div>
            <ul className="op-hero-facts" aria-label="Základní fakta">
              <li>Hradí pojišťovny</li>
              <li>Vlastní obuvnická dílna</li>
              <li>Díly Otto Bock &amp; Streifeneder</li>
            </ul>
          </div>

          {/* Signature: měřicí pásmo / vrstevnice odlitku */}
          <div className="op-hero-figure" aria-hidden="true">
            <svg
              className="op-contour"
              viewBox="0 0 360 520"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* vrstevnice sádrového odlitku – stylizovaný profil končetiny */}
              <path className="op-line op-line-1" d="M120 20 C 90 90, 100 150, 130 210 C 160 270, 150 340, 110 400 C 90 430, 90 470, 110 505" stroke="var(--gips)" strokeWidth="2"/>
              <path className="op-line op-line-2" d="M150 15 C 122 88, 132 150, 160 210 C 188 270, 178 342, 140 402 C 120 432, 120 472, 138 508" stroke="var(--gips)" strokeWidth="2"/>
              <path className="op-line op-line-3" d="M182 12 C 156 86, 166 150, 192 210 C 218 270, 208 344, 172 404 C 152 434, 152 474, 168 510" stroke="var(--med)" strokeWidth="2.5"/>
              <path className="op-line op-line-4" d="M214 15 C 190 86, 200 150, 224 210 C 248 270, 238 344, 204 404 C 186 434, 186 474, 200 508" stroke="var(--gips)" strokeWidth="2"/>
              <path className="op-line op-line-5" d="M246 22 C 224 88, 234 150, 256 210 C 278 268, 268 342, 236 400 C 218 430, 218 468, 232 504" stroke="var(--gips)" strokeWidth="2"/>
              {/* měrné body */}
              <circle className="op-dot op-dot-1" cx="192" cy="210" r="5" fill="var(--med)"/>
              <circle className="op-dot op-dot-2" cx="160" cy="210" r="3.5" fill="var(--ink)"/>
              <circle className="op-dot op-dot-3" cx="224" cy="210" r="3.5" fill="var(--ink)"/>
              {/* kóta */}
              <line className="op-line op-line-kota" x1="40" y1="210" x2="320" y2="210" stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 5"/>
            </svg>
            <span className="op-figure-label">obvod v místě míry — 41,5 cm</span>
          </div>
        </div>

        {/* měřicí pásmo přes celou šířku */}
        <div className="op-tape" role="presentation">
          <div className="op-tape-inner">
            {Array.from({ length: 36 }, (_, i) => (
              <span key={i} className={i % 5 === 0 ? "op-tick op-tick-big" : "op-tick"}>
                {i % 5 === 0 ? <b>{i + 30}</b> : null}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="op-section op-sluzby" aria-labelledby="sluzby-h">
        <div className="op-section-head">
          <p className="op-eyebrow">Co vyrábíme</p>
          <h2 id="sluzby-h" className="op-h2">
            Čtyři řemesla pod jednou střechou
          </h2>
          <p className="op-section-lede">
            Všechno vzniká v naší provozovně v Ostravě — od sejmutí míry po
            poslední steh. Pomůcky předepisuje váš lékař a hradí je zdravotní
            pojišťovna.
          </p>
        </div>

        <div className="op-cards">
          {sluzby.map((s) => (
            <article className="op-card" key={s.nazev}>
              <span className="op-card-tag">{s.stitek}</span>
              <h3 className="op-h3">{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== JAK TO PROBÍHÁ / DŮVĚRA ===================== */}
      <section className="op-section op-duvera" aria-labelledby="duvera-h">
        <div className="op-duvera-grid">
          <div className="op-duvera-text">
            <p className="op-eyebrow op-eyebrow-light">Jak to u nás probíhá</p>
            <h2 id="duvera-h" className="op-h2 op-h2-light">
              Tři návštěvy.
              <br />
              Pomůcka na roky.
            </h2>
            <p className="op-section-lede op-lede-light">
              Jsme rodinná firma — u míry, zkoušky i předání potkáte stejné
              lidi. V oboru pracujeme od roku 1992 a spolupracujeme se značkami
              Otto Bock, Streifeneder, C-PRODIRECT, BILLY Footwear a Alinker.
            </p>

            <blockquote className="op-quote">
              <p>
                „Manžel nosí protézu z ORTO-PRO devátým rokem. Když bylo po
                zhubnutí potřeba upravit lůžko, stačilo zavolat a do týdne
                sedělo jak ulité.“
              </p>
              <cite>— paní Vaňková, Ostrava-Poruba</cite>
            </blockquote>
          </div>

          <ol className="op-kroky">
            {kroky.map((k, i) => (
              <li className="op-krok" key={k.krok}>
                <span className="op-krok-cislo" aria-hidden="true">
                  {i + 1}. návštěva
                </span>
                <h3 className="op-h3 op-h3-light">{k.krok}</h3>
                <p>{k.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="op-duvera-pas">
          <span>Od roku 1992</span>
          <span>Hrazeno pojišťovnami</span>
          <span>Provozovna Ostrava</span>
          <span>Otto Bock · Streifeneder · BILLY Footwear</span>
        </div>
      </section>
    </main>
  );
}
