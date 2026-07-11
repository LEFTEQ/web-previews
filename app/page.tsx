import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vodoměrné šachty s.r.o. — svařované šachty z polypropylenu, Brno",
  description:
    "Vyrábíme vodoměrné a studnařské šachty, nádrže, jímky a septiky z polypropylenu. Svařováno napevno, 100% svařitelnost, doprava po ČR i SK. Brno, Lidická 700/19.",
  openGraph: {
    title: "Vodoměrné šachty s.r.o. — šachty a nádrže z polypropylenu",
    description:
      "Studnařské a vodoměrné šachty svařené na míru. Výroba v Brně, doprava po ČR i SK, vodovodní přípojka na klíč.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vodoměrná šachta z polypropylenu" }],
  },
};

export default function Page() {
  const rozmery = [
    { kod: "VŠ 1000×1200+300", stav: "Skladem", popis: "Vodoměrná šachta, kruhová, s nástavcem 300 mm" },
    { kod: "VŠ 1200×1200+300", stav: "Skladem", popis: "Vodoměrná šachta, větší průměr, s nástavcem" },
    { kod: "Atypický rozměr", stav: "Na zakázku", popis: "Svaříme přesně na hloubku a přípojku u vás" },
  ];

  const vyrobky = [
    {
      c: "01",
      nazev: "Vodoměrné šachty",
      text: "Kruhové i hranaté, se zateplením i bez. Připravené na osazení vodoměru a napojení přípojky.",
    },
    {
      c: "02",
      nazev: "Studnařské šachty a zhlaví vrtaných studní",
      text: "Zhlaví na vrtanou studnu, které utěsní a zpřístupní vrt. Spolupracujeme se studnaři po celé ČR i SK.",
    },
    {
      c: "03",
      nazev: "Šachty pro tepelná čerpadla",
      text: "Rozdělovací šachty pro zemní vrty tepelných čerpadel, svařené na počet a průměr potrubí.",
    },
    {
      c: "04",
      nazev: "Nádrže a skladovací nádrže",
      text: "Nádrže na dešťovou i užitkovou vodu, akumulační a skladovací nádrže v sériových i atypických objemech.",
    },
    {
      c: "05",
      nazev: "Jímky, žumpy, septiky",
      text: "Bezodtokové jímky a septiky z polypropylenu s vysokou odolností a plnou svařitelností.",
    },
    {
      c: "06",
      nazev: "Bazény a atypická výroba",
      text: "Výroba bazénů, bazénový servis a jednorázové svařence přesně podle vašeho zadání.",
    },
  ];

  return (
    <main className="vs">
      <header className="vs-top">
        <a className="vs-brand" href="#" aria-label="Vodoměrné šachty s.r.o. — domů">
          <span className="vs-brand-mark" aria-hidden="true">
            <span className="vs-ring" />
            <span className="vs-ring vs-ring--2" />
          </span>
          <span className="vs-brand-txt">
            <span className="vs-brand-name">Vodoměrné šachty</span>
            <span className="vs-brand-sub">s.r.o. · Brno</span>
          </span>
        </a>
        <nav className="vs-nav" aria-label="Hlavní">
          <a href="#vyroba">Výroba</a>
          <a href="#firma">O nás</a>
          <a className="vs-nav-cta" href="tel:+420773611469">Zavolat</a>
        </nav>
      </header>

      <section className="vs-hero" aria-labelledby="vs-hero-h">
        <div className="vs-hero-copy">
          <p className="vs-eyebrow">Svařováno z polypropylenu · výroba Brno</p>
          <h1 id="vs-hero-h">
            Šachta, která<span className="vs-hero-em"> nepustí vodu ven.</span>
          </h1>
          <p className="vs-lead">
            Vodoměrné a studnařské šachty, nádrže, jímky a septiky svaříme jako jeden kus.
            Žádné lepené spoje — 100% svařitelnost polypropylenu a odolnost, která vydrží pod zemí desítky let.
          </p>
          <div className="vs-hero-actions">
            <a className="vs-btn" href="tel:+420773611469">Zavolat 773 611 469</a>
            <a className="vs-btn vs-btn--ghost" href="#vyroba">Co vyrábíme</a>
          </div>
          <dl className="vs-specs">
            <div>
              <dt>Materiál</dt>
              <dd>Polypropylen (PP)</dd>
            </div>
            <div>
              <dt>Spoj</dt>
              <dd>Svařeno, ne lepeno</dd>
            </div>
            <div>
              <dt>Doprava</dt>
              <dd>Celá ČR i SK</dd>
            </div>
          </dl>
        </div>
        <figure className="vs-hero-fig">
          <img
            src="/hero.webp"
            alt="Řez vodoměrné šachty z polypropylenu s nástavcem a poklopem"
            width={900}
            height={1100}
          />
          <figcaption>Vodoměrná šachta s nástavcem — svařená sestava na míru přípojky.</figcaption>
        </figure>
      </section>

      <section className="vs-band" aria-label="Aktuálně skladem">
        <p className="vs-band-lead">Skladem k okamžitému odběru:</p>
        <ul className="vs-band-list">
          {rozmery.slice(0, 2).map((r) => (
            <li key={r.kod}>
              <span className="vs-band-kod">{r.kod}</span>
              <span className="vs-band-dot" aria-hidden="true" />
              <span className="vs-band-stav">{r.stav}</span>
            </li>
          ))}
          <li>
            <span className="vs-band-kod">Ostatní výrobky</span>
            <span className="vs-band-dot" aria-hidden="true" />
            <span className="vs-band-stav">Krátké dodací termíny</span>
          </li>
        </ul>
      </section>

      <section className="vs-section" id="vyroba" aria-labelledby="vs-vyroba-h">
        <div className="vs-section-head">
          <p className="vs-eyebrow">Sortiment</p>
          <h2 id="vs-vyroba-h">Co pro vás svaříme</h2>
          <p className="vs-section-intro">
            Sériová výroba i jednorázové svařence. Řekněte nám hloubku, kudy vede přípojka a co má šachta obsahovat —
            zbytek vyřešíme ve výrobě v Brně.
          </p>
        </div>

        <div className="vs-grid">
          <div className="vs-grid-media">
            <img
              src="/section-1.webp"
              alt="Výroba a svařování šachet z polypropylenu ve výrobní hale"
              width={800}
              height={600}
            />
          </div>
          <ol className="vs-cards">
            {vyrobky.map((v) => (
              <li key={v.c} className="vs-card">
                <span className="vs-card-num" aria-hidden="true">{v.c}</span>
                <h3>{v.nazev}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="vs-turnkey">
          <div>
            <p className="vs-eyebrow vs-eyebrow--light">Novinka · na klíč</p>
            <h3>Vodovodní přípojka na klíč</h3>
            <p>
              Dodáme vodoměrnou šachtu včetně výkopových prací, osazení a dopojení. Přijedeme, vykopeme, osadíme a napojíme —
              vy převezmete hotovou přípojku.
            </p>
          </div>
          <a className="vs-btn vs-btn--onaccent" href="tel:+420773611469">Poptat přípojku</a>
        </div>
      </section>

      <section className="vs-section vs-section--firma" id="firma" aria-labelledby="vs-firma-h">
        <div className="vs-firma">
          <div className="vs-firma-media">
            <img
              src="/section-2.webp"
              alt="Hotové plastové nádrže a šachty připravené k expedici"
              width={800}
              height={640}
            />
          </div>
          <div className="vs-firma-copy">
            <p className="vs-eyebrow">O firmě</p>
            <h2 id="vs-firma-h">Česká výroba z plastů, na kterou se dá spolehnout</h2>
            <p>
              Jsme brněnská firma, která vyrábí a distribuuje výrobky z polypropylenu — hlavně vodoměrné a studnařské
              šachty, nádrže na vodu, jímky a septiky. Kromě sériové výroby zvládáme i atypické zakázky podle konkrétních
              požadavků.
            </p>
            <p>
              Vyrábíme z kvalitních materiálů se zaručenou vysokou odolností a 100% svařitelností. Samozřejmostí je
              záruční i pozáruční servis a doprava po celé České i Slovenské republice. Se studnaři po celé ČR a SK
              spolupracujeme dlouhodobě.
            </p>

            <ul className="vs-trust">
              <li>
                <strong>100%</strong>
                <span>svařitelnost polypropylenu — spoje bez lepidla</span>
              </li>
              <li>
                <strong>ČR + SK</strong>
                <span>vlastní doprava k zákazníkovi</span>
              </li>
              <li>
                <strong>Na míru</strong>
                <span>atypické rozměry a svařence dle zadání</span>
              </li>
            </ul>

            <div className="vs-contact">
              <p className="vs-contact-h">Kontakt na výrobu</p>
              <p>
                Vodoměrné šachty s.r.o.<br />
                Lidická 700/19, 602 00 Brno
              </p>
              <p className="vs-contact-links">
                <a href="tel:+420773611469">+420 773 611 469</a>
                <a href="mailto:info@vodomernesachty.cz">info@vodomernesachty.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
