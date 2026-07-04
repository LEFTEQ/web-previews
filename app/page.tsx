import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gastronom 1 — catering pro rauty, svatby a festivaly v Českých Budějovicích",
  description:
    "Cateringová společnost z Českých Budějovic od roku 2002. Grilování býků a selat, párty stany, vlastní kuchyně i doprava. Rauty, svatby, firemní večírky i městské slavnosti po celé ČR.",
};

export default function Page() {
  return (
    <main className="g1">
      {/* HERO — otevřeno tím nejcharakterističtějším: oheň, gril, celé sele */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Grilování celého selete nad žhavými uhlíky na venkovní akci"
            className="hero-img"
            width={1600}
            height={1000}
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <div className="brand" aria-label="Gastronom 1">
            <span className="brand-mark">GASTRONOM</span>
            <span className="brand-num">1</span>
          </div>

          <p className="hero-eyebrow">Catering · České Budějovice · od roku 2002</p>

          <h1 id="hero-title" className="hero-title">
            Býka na rožni,
            <br />
            <em>a stovku hostů</em> u talíře.
          </h1>

          <p className="hero-lede">
            Přivezeme venkovní kuchyni, párty stany i elektřinu — a připravíme
            vám celé sele, špízy nebo klobásy z vlastní výrobny. Na festival,
            svatbu i firemní večírek, kdekoli v Česku.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420000000000">
              Zavolat a probrat termín
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Co všechno zajistíme
            </a>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <span>Býci na rožni</span>
          <span>Selata &amp; kuřata</span>
          <span>Vlastní udírna</span>
          <span>Párty stany</span>
          <span>Venkovní kuchyně</span>
          <span>Rauty &amp; svatby</span>
        </div>
      </section>

      {/* SEKCE 1 — nabídka: čitelná jako „co dostanete“, ne dekorace */}
      <section id="nabidka" className="offer" aria-labelledby="offer-title">
        <div className="section-head">
          <p className="eyebrow">Kompletní zázemí</p>
          <h2 id="offer-title">
            Přijedeme s celou kuchyní. Vy řešíte jen hosty.
          </h2>
          <p className="section-lede">
            Gastronomii zvládneme od masa po poslední talíř — a technika k tomu.
            Vyberte si, kolik toho máme přivézt.
          </p>
        </div>

        <ol className="menu-list">
          <li className="menu-item">
            <span className="menu-price">Grill</span>
            <div className="menu-body">
              <h3>Grilování na místě</h3>
              <p>
                Celí býci, selata, kuřata, špízy, klobásy i pečená masa —
                z vlastní výrobny masa a uzenin. Rožeň roztočíme přímo u vás.
              </p>
            </div>
          </li>

          <li className="menu-item">
            <span className="menu-price">Raut</span>
            <div className="menu-body">
              <h3>Rauty, svatby a večírky</h3>
              <p>
                Teplá i studená kuchyně v plném rozsahu. Ve vlastních prostorách
                Budvar Areny, v Parku Korálkov v Jivně nebo tam, kam řeknete.
              </p>
            </div>
          </li>

          <li className="menu-item">
            <span className="menu-price">Open&nbsp;air</span>
            <div className="menu-body">
              <h3>Festivaly a slavnosti pod stanem</h3>
              <p>
                Vlastní párty stany, doprava, elektřina i venkovní kuchyně.
                Doplníme pódium, ozvučení, osvětlení, oplocení a hygienu.
              </p>
            </div>
          </li>

          <li className="menu-item">
            <span className="menu-price">Show</span>
            <div className="menu-body">
              <h3>Netradiční nápady</h3>
              <p>
                Umělecká produkce i ohňostroj. Máte neobvyklé přání? Rádi ho
                s vámi vymyslíme a postavíme — venku i uvnitř.
              </p>
            </div>
          </li>
        </ol>

        <figure className="offer-figure">
          <img
            src="/section-1.webp"
            alt="Bohatě prostřený raut se studenou i teplou kuchyní připravený na akci"
            width={1400}
            height={900}
          />
          <figcaption>
            Studená kuchyně z vlastní výrobny — připravená na servírování.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — důvěra / o nás */}
      <section className="trust" aria-labelledby="trust-title">
        <figure className="trust-figure">
          <img
            src="/section-2.webp"
            alt="Párty stan a venkovní zázemí Gastronomu 1 postavené na akci pod širým nebem"
            width={1400}
            height={1000}
          />
        </figure>

        <div className="trust-body">
          <p className="eyebrow">Od roku 2002</p>
          <h2 id="trust-title">
            Dvě desetiletí praxe v jižních Čechách.
          </h2>
          <p>
            Gastronom 1 s.r.o. zajišťuje gastronomii v plném rozsahu ve vlastních
            prostorách i po celém území České republiky. Máme vlastní výrobnu
            masa a uzenin, výrobnu teplé i studené kuchyně a techniku, se kterou
            postavíme akci prakticky kdekoli.
          </p>

          <ul className="venues">
            <li>
              <span className="venue-name">Budvar Arena</span>
              <span className="venue-meta">Restaurace v Českých Budějovicích</span>
            </li>
            <li>
              <span className="venue-name">Park Korálkov, Jivno</span>
              <span className="venue-meta">Dvě restaurace a venkovní terasy</span>
            </li>
            <li>
              <span className="venue-name">Mercury Centrum</span>
              <span className="venue-meta">Restaurace v obchodním domě, Č. Budějovice</span>
            </li>
          </ul>

          <p className="trust-close">
            Ať jde o svatbu pro rodinu, nebo pivní festival pro celé město —
            přizpůsobíme se. A rádi vyřešíme i to, na co si jiní netroufnou.
          </p>
        </div>
      </section>
    </main>
  );
}
