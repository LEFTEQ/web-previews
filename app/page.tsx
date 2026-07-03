// REMO ELEKTRO BRNO s.r.o. — návrh nového webu
// Koncept: „Rozvaděč" — stránka strukturovaná jako čelo rozvaděče NN,
// signature prvek: schématická linka fáze (L1) vedoucí hero sekcí.

const sluzby = [
  {
    kod: "L1",
    nazev: "Elektroinstalace a montáže",
    popis:
      "Kompletní silnoproudé montáže vyhrazených elektrických zařízení v prostorech třídy A i B — bez omezení napětí. Od bytového domu po průmyslový provoz.",
    stitek: "třída A + B, bez omezení napětí",
  },
  {
    kod: "L2",
    nazev: "Revize a opravy",
    popis:
      "Pravidelné i výchozí revize elektrických zařízení a hromosvodů. Závady odstraníme rovnou na místě — přijedeme s vybavenou dílnou na kolech.",
    stitek: "revizní zpráva do ruky",
  },
  {
    kod: "L3",
    nazev: "Výroba rozvaděčů NN",
    popis:
      "Rozvaděče nízkého napětí stavíme ve vlastní dílně v Líšni — na míru vašemu projektu, zapojené, označené a odzkoušené před expedicí.",
    stitek: "vlastní dílna v Brně-Líšni",
  },
  {
    kod: "N",
    nazev: "Projekce a inženýring",
    popis:
      "Projektová dokumentace elektrických zařízení s autorizací ve výstavbě. Projekt, který obstojí na stavebním úřadě i u revizního technika.",
    stitek: "autorizace ve výstavbě",
  },
  {
    kod: "PE",
    nazev: "Hromosvody",
    popis:
      "Montáž i revize hromosvodů podle platných norem. Dům, hala nebo bytovka — ochráníme, co má zůstat pod napětím jen tam, kde má.",
    stitek: "montáž + revize",
  },
  {
    kod: "EZS",
    nazev: "Zabezpečení a slaboproud",
    popis:
      "Elektronické zabezpečovací systémy a telekomunikační rozvody na koncesní listinu. Včetně zemních a výkopových prací a dopravy do 3,5 t.",
    stitek: "koncese na EZS",
  },
];

const kvalifikace = [
  {
    para: "§ 6",
    kdo: "Každý montér",
    text: "Všichni naši zaměstnanci mají minimálně oprávnění pro samostatnou činnost v elektrotechnice dle vyhl. 50/78 Sb. U nás nešroubuje nikdo bez papírů.",
  },
  {
    para: "§ 8",
    kdo: "Vedoucí prací",
    text: "Zakázky řídí pracovníci s vyšší kvalifikací — pro řízení provozu i činnosti prováděné dodavatelsky. Na stavbě víte, s kým mluvíte.",
  },
];

export default function Page() {
  return (
    <main className="re">
      {/* ===================== HERO ===================== */}
      <header className="re-hero">
        <div className="re-hero__topbar">
          <div className="re-wordmark" aria-label="REMO ELEKTRO BRNO">
            <span className="re-wordmark__bolt" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor" />
              </svg>
            </span>
            <span className="re-wordmark__text">
              REMO<b>ELEKTRO</b>
              <em>BRNO</em>
            </span>
          </div>
          <a className="re-hero__tel" href="tel:+420602770219">
            +420&nbsp;602&nbsp;770&nbsp;219
          </a>
        </div>

        <div className="re-hero__body">
          <p className="re-hero__eyebrow">
            <span className="re-dot" aria-hidden="true" />
            Elektromontáže · revize · rozvaděče — Brno-Líšeň, od roku 2003
          </p>

          <h1 className="re-hero__title">
            <span className="re-hero__line1">Elektřina má svá</span>
            <span className="re-hero__line2">pravidla.</span>
            <span className="re-hero__line3">My je známe zpaměti.</span>
          </h1>

          {/* Signature: schématická linka fáze L1 protínající hero */}
          <div className="re-circuit" aria-hidden="true">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="re-circuit__svg"
            >
              <path
                className="re-circuit__path"
                d="M0,60 H240 l30,-38 H420 M420,22 H560 l24,38 H760 M760,60 h60 m14,0 h14 m14,0 h14 m14,0 H1010 l26,-38 H1200"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle className="re-circuit__node" cx="240" cy="60" r="6" />
              <circle className="re-circuit__node" cx="420" cy="22" r="6" />
              <circle className="re-circuit__node" cx="760" cy="60" r="6" />
              <circle className="re-circuit__node" cx="1010" cy="60" r="6" />
            </svg>
            <span className="re-circuit__label">L1 — 230 V ~ 50 Hz</span>
          </div>

          <p className="re-hero__lead">
            Montáže, opravy a revize vyhrazených elektrických zařízení bez
            omezení napětí. Vlastní výroba rozvaděčů, projekce s autorizací a
            dílna v centru staré Líšně — do hodiny jsme kdekoli v Brně a okolí.
          </p>

          <div className="re-hero__facts" role="list">
            <div className="re-fact" role="listitem">
              <span className="re-fact__value">A&nbsp;+&nbsp;B</span>
              <span className="re-fact__label">prostory bez omezení napětí</span>
            </div>
            <div className="re-fact" role="listitem">
              <span className="re-fact__value">§ 6 / § 8</span>
              <span className="re-fact__label">kvalifikace dle vyhl. 50/78 Sb.</span>
            </div>
            <div className="re-fact" role="listitem">
              <span className="re-fact__value">Líšeň</span>
              <span className="re-fact__label">dílna, sklad a zázemí v Brně</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== SLUŽBY — „POLE ROZVADĚČE" ===================== */}
      <section className="re-sluzby" aria-labelledby="sluzby-h">
        <div className="re-section-head">
          <p className="re-section-head__eyebrow">Co pro vás zapojíme</p>
          <h2 id="sluzby-h" className="re-section-head__title">
            Šest okruhů, jedna firma
          </h2>
          <p className="re-section-head__note">
            Každá zakázka u nás má svůj okruh — a svého jističe. Od projektu po
            revizní zprávu nemusíte shánět nikoho dalšího.
          </p>
        </div>

        <div className="re-panel">
          {sluzby.map((s) => (
            <article className="re-modul" key={s.kod}>
              <div className="re-modul__head">
                <span className="re-modul__kod">{s.kod}</span>
                <span className="re-modul__switch" aria-hidden="true">
                  <span className="re-modul__lever" />
                </span>
              </div>
              <h3 className="re-modul__nazev">{s.nazev}</h3>
              <p className="re-modul__popis">{s.popis}</p>
              <p className="re-modul__stitek">{s.stitek}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== DŮVĚRA / O NÁS ===================== */}
      <section className="re-duvera" aria-labelledby="duvera-h">
        <div className="re-duvera__grid">
          <div className="re-duvera__intro">
            <p className="re-section-head__eyebrow re-section-head__eyebrow--light">
              Proč REMO ELEKTRO
            </p>
            <h2 id="duvera-h" className="re-duvera__title">
              Papíry v pořádku dřív, než sáhneme na první vodič
            </h2>
            <p className="re-duvera__text">
              Elektrika není řemeslo pro odhad a improvizaci. Proto u nás platí
              jednoduché pravidlo: každý, kdo pracuje na vašem zařízení, má
              kvalifikaci černou na bílém — a vy ji můžete kdykoli vidět.
            </p>
            <p className="re-duvera__text">
              Jsme smluvní partner distribuční společnosti E.ON, takže
              přípojky, přeložky a práce na distribuční síti řešíme napřímo,
              bez prostředníků a bez čekání.
            </p>
            <div className="re-duvera__partner">
              <span className="re-duvera__partner-label">Smluvní partner distribuce</span>
              <span className="re-duvera__partner-name">E.ON Distribuce</span>
            </div>
          </div>

          <div className="re-duvera__karty">
            {kvalifikace.map((k) => (
              <div className="re-stitek" key={k.para}>
                <span className="re-stitek__para">{k.para}</span>
                <div className="re-stitek__body">
                  <h3 className="re-stitek__kdo">{k.kdo}</h3>
                  <p className="re-stitek__text">{k.text}</p>
                </div>
              </div>
            ))}

            <div className="re-stitek re-stitek--adresa">
              <span className="re-stitek__para" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                  <path
                    d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <div className="re-stitek__body">
                <h3 className="re-stitek__kdo">Nám. Karla IV. 612/22, Brno-Líšeň</h3>
                <p className="re-stitek__text">
                  Montážní, skladové i sociální zázemí máme přímo v centru staré
                  Líšně. Operativní zásah v Brně a okolí zvládneme bez toho, aby
                  vás to stálo jedinou vaši hodinu navíc — včetně dopravy do
                  3,5 t a výkopových prací.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
