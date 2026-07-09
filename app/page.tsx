import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INGOMAT, spol. s r.o. — spojovací materiál a železářství Plzeň",
  description:
    "Šrouby, matice, podložky, vruty, kotvy a spojovací materiál podle norem DIN, ISO i ČSN. Výroba na zakázku a povrchové úpravy. Prodejna v Plzni, výdej Po–Pá 7:00–15:00.",
  openGraph: {
    title: "INGOMAT, spol. s r.o. — spojovací materiál Plzeň",
    description:
      "Železářství se skladem spojovacího materiálu v Plzni. Šrouby, matice, vruty, kotvy podle DIN / ISO / ČSN, výroba na zakázku, převodník norem.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Sklad spojovacího materiálu INGOMAT" }],
  },
};

const sortiment = [
  {
    kod: "DIN 933 / 931",
    nazev: "Šrouby se šestihrannou hlavou",
    detail: "Se závitem po celé délce i s dříkem, třídy pevnosti 8.8 až 12.9.",
  },
  {
    kod: "DIN 934",
    nazev: "Matice šestihranné",
    detail: "Nízké, vysoké, samojistné i korunové. Zinek bílý, žlutý i nerez A2.",
  },
  {
    kod: "DIN 125 / 127",
    nazev: "Podložky ploché a pružné",
    detail: "Ploché, vějířové a pérové podložky od M3 po M36.",
  },
  {
    kod: "DIN 571 / 7505",
    nazev: "Vruty a stavební šrouby",
    detail: "Vruty do dřeva, samovrtné i konstrukční šrouby s TORX hlavou.",
  },
  {
    kod: "DIN 7337",
    nazev: "Nýty, kolíky a pojistné kroužky",
    detail: "Trhací nýty, válcové a kuželové kolíky, seegerky, pera i závlačky.",
  },
  {
    kod: "ETA",
    nazev: "Kotvy a hmoždinky",
    detail: "Chemické i mechanické kotvy, natloukací a rámové hmoždinky.",
  },
];

const sluzby = [
  {
    n: "01",
    t: "Výroba na zakázku",
    p: "Atypické šrouby, čepy a dílce podle výkresu nebo vzorku — když katalogový rozměr nestačí.",
  },
  {
    n: "02",
    t: "Povrchové úpravy",
    p: "Galvanický zinek, žárový pozink i černění. Povlaky se závitem dle ČSN ISO 4042.",
  },
  {
    n: "03",
    t: "Převodník norem",
    p: "Poradíme s převodem mezi DIN, ISO a ČSN, ať vám k výkresu sedne správný díl.",
  },
];

export default function Page() {
  return (
    <main className="ing">
      <header className="ing-top">
        <a className="ing-logo" href="#top" aria-label="INGOMAT, spol. s r.o. — úvod">
          <span className="ing-logo-mark" aria-hidden="true">
            <span className="ing-hex">◇</span>
          </span>
          <span className="ing-logo-word">
            INGO<span className="ing-logo-thin">MAT</span>
          </span>
        </a>
        <nav className="ing-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#sluzby">Služby</a>
          <a href="#firma">O firmě</a>
        </nav>
        <a className="ing-call" href="tel:+420377442800">377 442 800</a>
      </header>

      <section className="ing-hero" id="top">
        <div className="ing-hero-text">
          <p className="ing-eyebrow">Železářství &amp; spojovací materiál · Plzeň</p>
          <h1 className="ing-h1">
            Každý spoj má
            <br />
            svou <span className="ing-h1-em">normu.</span>
          </h1>
          <p className="ing-lead">
            Šrouby, matice, podložky, vruty i kotvy skladem — vytříděné podle DIN, ISO a ČSN.
            Přijďte s výkresem nebo utrženým vzorkem, my dohledáme přesný rozměr.
          </p>
          <div className="ing-hero-cta">
            <a className="ing-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="ing-btn ghost" href="mailto:obchod@ingomat.cz">obchod@ingomat.cz</a>
          </div>
          <dl className="ing-hours">
            <div>
              <dt>Výdej a prodej</dt>
              <dd>Po–Pá 7:00–15:00</dd>
            </div>
            <div>
              <dt>Normy</dt>
              <dd>DIN · ISO · ČSN</dd>
            </div>
          </dl>
        </div>
        <figure className="ing-hero-media">
          <img
            src="/hero.webp"
            width={1200}
            height={1400}
            alt="Přehledně roztříděný spojovací materiál — šrouby, matice a podložky ve skladových přihrádkách"
          />
          <figcaption className="ing-thread" aria-hidden="true">
            <span>M3</span><span>M5</span><span>M8</span><span>M10</span><span>M12</span><span>M16</span><span>M20</span><span>M24</span>
          </figcaption>
        </figure>
      </section>

      <section className="ing-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="ing-section-head">
          <p className="ing-eyebrow dark">Skladem v Plzni</p>
          <h2 id="sortiment-h" className="ing-h2">Vybíráme podle normy, ne od oka</h2>
          <p className="ing-section-sub">
            Sortiment je uspořádaný stejně jako náš sklad — podle rozměrů, tříd pevnosti
            a povrchové úpravy. Řekněte nám značku dílu, my ho vytáhneme z přihrádky.
          </p>
        </div>
        <ul className="ing-grid">
          {sortiment.map((s) => (
            <li className="ing-card" key={s.nazev}>
              <span className="ing-card-kod">{s.kod}</span>
              <h3 className="ing-card-t">{s.nazev}</h3>
              <p className="ing-card-p">{s.detail}</p>
            </li>
          ))}
        </ul>
        <figure className="ing-band">
          <img
            src="/section-1.webp"
            alt="Detail regálů s roztříděnými šrouby a maticemi v prodejně INGOMAT"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="ing-section alt" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ing-two">
          <div className="ing-two-media">
            <img
              src="/section-2.webp"
              alt="Zázemí INGOMATu — příprava zakázkového spojovacího materiálu"
              loading="lazy"
            />
          </div>
          <div className="ing-two-text" id="firma">
            <p className="ing-eyebrow dark">O firmě &amp; služby</p>
            <h2 id="sluzby-h" className="ing-h2">
              Když katalog končí, my teprve začínáme
            </h2>
            <p className="ing-section-sub">
              INGOMAT vznikl spojením technických, obchodních a ekonomických zkušeností
              zakládajících společníků. Vedle prodeje běžného spojovacího materiálu zvládneme
              i to, co v regálu nenajdete.
            </p>
            <ol className="ing-steps">
              {sluzby.map((s) => (
                <li key={s.n}>
                  <span className="ing-step-n" aria-hidden="true">{s.n}</span>
                  <div>
                    <h3 className="ing-step-t">{s.t}</h3>
                    <p className="ing-step-p">{s.p}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ing-contactline">
              <a href="tel:+420732539172">Zavolat: 732 539 172</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:obchod@ingomat.cz">Napsat e‑mail</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
