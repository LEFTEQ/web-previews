import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="lk">
      {/* HERO */}
      <header className="lk-hero">
        <div className="lk-hero__grid">
          <div className="lk-hero__intro">
            <a className="lk-mark" href="#" aria-label="M. Liška — Subaru Plzeň, úvod">
              <span className="lk-mark__fox">M.&nbsp;LIŠKA</span>
              <span className="lk-mark__sub">SUBARU · PLZEŇ</span>
            </a>

            <p className="lk-eyebrow">Autorizovaný prodej a servis · od roku 2005</p>

            <h1 className="lk-title">
              Symetrický pohon
              <br />
              <span className="lk-title__hand">na všechna čtyři.</span>
            </h1>

            <p className="lk-lede">
              Boxer a stálý pohon 4×4 v jednom voze — a člověk, který ho zná
              jménem. Skladové, předváděcí i ojeté vozy Subaru na Skladové ulici
              v Plzni na Slovanech. Přijďte na zkušební jízdu, ne na prospekt.
            </p>

            <div className="lk-cta-row">
              <a className="lk-btn lk-btn--primary" href="tel:+420603880099">
                Zavolat na prodej
              </a>
              <a className="lk-btn lk-btn--ghost" href="#nabidka">
                Nabídka vozů
              </a>
            </div>

            <dl className="lk-people">
              <div className="lk-person">
                <dt>Prodej — Jan Havel</dt>
                <dd><a href="tel:+420603880099">603&nbsp;88&nbsp;00&nbsp;99</a></dd>
              </div>
              <div className="lk-person">
                <dt>Servis — Marek Šedivec</dt>
                <dd><a href="tel:+420737222777">737&nbsp;222&nbsp;777</a></dd>
              </div>
            </dl>
          </div>

          <figure className="lk-hero__media">
            <img
              src="/hero.webp"
              alt="Vůz Subaru připravený k předání v autosalonu M. Liška v Plzni"
              className="lk-hero__img"
              width={960}
              height={1200}
            />
            <figcaption className="lk-hero__badge">
              <span className="lk-hero__badge-num">4×4</span>
              <span className="lk-hero__badge-txt">stálý symetrický pohon</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — NABÍDKA / SLUŽBY */}
      <section className="lk-offer" id="nabidka" aria-labelledby="nabidka-h">
        <div className="lk-section-head">
          <p className="lk-eyebrow lk-eyebrow--dark">Co u nás pořídíte</p>
          <h2 className="lk-h2" id="nabidka-h">
            Tři cesty k Subaru
          </h2>
          <p className="lk-section-note">
            Vyberte podle toho, jestli chcete čerstvý plech, kilometry za
            zvýhodněnou cenu, nebo prověřený ojetý vůz s historií.
          </p>
        </div>

        <ol className="lk-cards">
          {[
            {
              n: "01",
              h: "Skladové a nové vozy",
              p: "Modely 2025 skladem — od Foresteru po elektrické Solterru a nový Uncharted. Zkušební jízdu domluvíme obratem s Lukášem Behenským.",
              tel: "+420604298871",
              label: "604 298 871 — Lukáš Behenský",
            },
            {
              n: "02",
              h: "Předváděcí vozy",
              p: "Nízký nájezd, plná záruka a cena pod novým vozem. Auta, která si u nás sami řídíme a víme, co mají za sebou.",
              tel: "+420603880099",
              label: "603 88 00 99 — prodej",
            },
            {
              n: "03",
              h: "Ojetá Subaru",
              p: "Prověřený plech s doloženou historií a servisem u nás. Rád vám ke každému vozu řeknu, proč zrovna tenhle.",
              tel: "+420603880099",
              label: "603 88 00 99 — prodej",
            },
          ].map((c) => (
            <li className="lk-card" key={c.n}>
              <span className="lk-card__num" aria-hidden="true">
                {c.n}
              </span>
              <h3 className="lk-card__h">{c.h}</h3>
              <p className="lk-card__p">{c.p}</p>
              <a className="lk-card__tel" href={c.tel === "" ? undefined : c.tel}>
                {c.label}
              </a>
            </li>
          ))}
        </ol>

        <div className="lk-servis">
          <img
            src="/section-1.webp"
            alt="Autorizovaný servis Subaru M. Liška — práce na voze v dílně"
            className="lk-servis__img"
            width={900}
            height={600}
          />
          <div className="lk-servis__body">
            <p className="lk-eyebrow lk-eyebrow--dark">Autorizovaný servis</p>
            <h3 className="lk-servis__h">Vaše Subaru u nás v bavlnce</h3>
            <p className="lk-servis__p">
              Servisní práce se školenými techniky a originálními díly.
              Kompletní servis klimatizace novou plničkou — a to i u vozů jiných
              značek. Pískování VIN kódů přes Cebia jako pojistka proti krádeži.
            </p>
            <ul className="lk-servis__list">
              <li>Plnění klimatizace od 990 Kč bez DPH + plnivo</li>
              <li>Pískování VIN kódů (Cebia / OCIS), všechny značky</li>
              <li>Objednání servisu: 737 222 777 — p. Šedivec</li>
            </ul>
            <a className="lk-btn lk-btn--primary" href="tel:+420737222777">
              Objednat do servisu
            </a>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA / O NÁS */}
      <section className="lk-trust" aria-labelledby="trust-h">
        <div className="lk-trust__grid">
          <div className="lk-trust__text">
            <p className="lk-eyebrow">Kdo jsme</p>
            <h2 className="lk-h2 lk-h2--light" id="trust-h">
              Dvacet let na Slovanech —
              <br /> a pořádná parta subaristů kolem
            </h2>
            <p className="lk-trust__lede">
              M. LIŠKA, spol. s r.o. prodává a servisuje Subaru v Plzni od roku
              2005. Nejsme velkosklad — jsme lidi, kteří značku sami jezdí,
              vozí BRZ na okruh v Písku a Foresterem do terénu.
            </p>

            <div className="lk-stats">
              <div className="lk-stat">
                <span className="lk-stat__num">57</span>
                <span className="lk-stat__lbl">subárek na našem sjezdu zákazníků</span>
              </div>
              <div className="lk-stat">
                <span className="lk-stat__num">~100</span>
                <span className="lk-stat__lbl">subaristů, co s námi den strávili</span>
              </div>
              <div className="lk-stat">
                <span className="lk-stat__num">2005</span>
                <span className="lk-stat__lbl">rok, kdy jsme začali</span>
              </div>
            </div>

            <blockquote className="lk-quote">
              „Bylo 57 subárek a kolem 100 subaristů, byl to fofr, ale bylo to
              super.“
              <cite>— z našeho setkání zákazníků Subaru Liška</cite>
            </blockquote>

            <address className="lk-address">
              <strong>Autosalon</strong> · Skladová 7, 326 00 Plzeň — Slovany
              <br />
              M. LIŠKA, spol. s r.o. · IČO 26337070
            </address>
          </div>

          <figure className="lk-trust__media">
            <img
              src="/section-2.webp"
              alt="Setkání zákazníků a majitelů vozů Subaru s autosalonem M. Liška"
              className="lk-trust__img"
              width={900}
              height={1080}
            />
            <figcaption>Den pro zákazníky — sjezd vozů Subaru</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
