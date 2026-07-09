import type { CSSProperties } from "react";

export default function Page() {
  const zaziky = [
    {
      cislo: "01",
      nazev: "Wellness s výhledem na hřeben",
      popis:
        "Sauna, vířivka a klidná ochlazovna. Za sklem hořický hřeben, v chladných měsících posezení u krbu v krbovně. Wellness rezervujeme jen pro vás — nikdo cizí, žádný spěch.",
      meta: "privátní · 2–8 osob",
    },
    {
      cislo: "02",
      nazev: "Masáže od Markéty a Pavla",
      popis:
        "Klasická, relaxační i partnerská masáž. Dva páry rukou, které statek znají roky. Objednáte se dopředu a čas patří jen vašemu tělu.",
      meta: "60 / 90 min",
    },
    {
      cislo: "03",
      nazev: "Ubytování v deseti pokojích",
      popis:
        "Dvoulůžkové pokoje, rodinné, apartmán i komfortní studio. Ráno káva z kavárny, moravské víno večer, hřiště a ohrada se zvířaty pro nejmenší.",
      meta: "10 pokojů · Blansko",
    },
  ];

  const duvody = [
    {
      k: "Moravský kras za humny",
      v: "Výchozí bod k jeskyním, propasti Macocha i vyhlídkám — pěšky, na kole nebo autem. Klid okraje Blanska, ale všechno kousek.",
    },
    {
      k: "Celý statek v zeleni",
      v: "Deset pokojů, kavárna s výběrovou kávou, krbovna, hřiště a zvířata. Prostor, kde se dá vydechnout od každodenního shonu.",
    },
    {
      k: "Svatby i firemní pobyty",
      v: "Obřad pod hřebenem, teambuilding nebo cvičební víkend — program přizpůsobíme vám. Soukromí máte automaticky.",
    },
  ];

  return (
    <main className="sam">
      <header className="sam-top">
        <a className="sam-mark" href="#" aria-label="Statek Samsara, Blansko">
          <span className="sam-mark-line1">STATEK</span>
          <span className="sam-mark-line2">
            SAM<span className="sam-mark-drop">SÁRA</span>
          </span>
        </a>
        <nav className="sam-nav" aria-label="Hlavní">
          <a href="#zazitky">Wellness</a>
          <a href="#zazitky">Ubytování</a>
          <a href="#statek">O statku</a>
          <a className="sam-nav-cta" href="tel:+420727945560">
            Rezervovat
          </a>
        </nav>
      </header>

      <section className="sam-hero">
        <div className="sam-hero-media">
          <img
            src="/hero.webp"
            alt="Wellness Statku Samsara s výhledem na hořický hřeben nad Blanskem"
            className="sam-hero-img"
            width={1600}
            height={1000}
          />
          <div className="sam-hero-veil" aria-hidden="true" />
        </div>

        <div className="sam-hero-body">
          <p className="sam-eyebrow">Statek &amp; wellness · okraj Blanska · Moravský kras</p>
          <h1 className="sam-hero-title">
            Teplá voda,
            <span className="sam-hero-em"> ticho hřebene</span>
            <br />a nikdo, kdo by spěchal.
          </h1>
          <p className="sam-hero-lede">
            Privátní wellness, masáže od Markéty a Pavla a deset pokojů v zeleni.
            Útočiště od shonu na dohled Macochy — vyhrazené jen pro vás.
          </p>
          <div className="sam-hero-actions">
            <a className="sam-btn" href="tel:+420727945560">
              Zavolat a rezervovat
            </a>
            <a className="sam-btn sam-btn-ghost" href="#zazitky">
              Co u nás zažijete
            </a>
          </div>

          <dl className="sam-hero-facts">
            <div>
              <dt>Klid</dt>
              <dd>+420 727 945 560</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Blansko, Moravský kras</dd>
            </div>
            <div>
              <dt>Pokoje</dt>
              <dd>10 · od dvoulůžka po studio</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sam-sec" id="zazitky" aria-labelledby="zazitky-h">
        <div className="sam-sec-head">
          <p className="sam-eyebrow sam-eyebrow-dark">Tři důvody sem přijet</p>
          <h2 id="zazitky-h" className="sam-sec-title">
            Den, který se počítá
            <br />
            od první teplé chvíle.
          </h2>
        </div>

        <div className="sam-grid">
          <ol className="sam-list">
            {zaziky.map((z) => (
              <li className="sam-item" key={z.cislo}>
                <span className="sam-item-num" aria-hidden="true">
                  {z.cislo}
                </span>
                <div className="sam-item-body">
                  <div className="sam-item-row">
                    <h3 className="sam-item-title">{z.nazev}</h3>
                    <span className="sam-item-meta">{z.meta}</span>
                  </div>
                  <p className="sam-item-text">{z.popis}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="sam-fig">
            <img
              src="/section-1.webp"
              alt="Zákoutí wellness na Statku Samsara — sauna a odpočinek u krbu"
              className="sam-fig-img"
              width={900}
              height={1100}
              loading="lazy"
            />
            <figcaption className="sam-fig-cap">
              Wellness rezervujeme jen pro vás — bez cizích lidí a bez hodin na zdi.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sam-sec sam-sec-dark" id="statek" aria-labelledby="statek-h">
        <div className="sam-about">
          <figure className="sam-about-fig">
            <img
              src="/section-2.webp"
              alt="Statek Samsara obklopený zelení na okraji Blanska poblíž Moravského krasu"
              className="sam-about-img"
              width={1000}
              height={760}
              loading="lazy"
            />
          </figure>

          <div className="sam-about-body">
            <p className="sam-eyebrow sam-eyebrow-light">O statku</p>
            <h2 id="statek-h" className="sam-about-title">
              Malebné místo na okraji Blanska, obklopené jen zelení.
            </h2>
            <p className="sam-about-text">
              Objevte kouzlo Statku Samsara — klid a soukromí pro rodiny s dětmi,
              páry i svatební hosty. Ubytujete se v jednom z deseti pokojů,
              ochutnáte výběrovou kávu a moravská vína a večer se ohřejete
              u krbu v krbovně.
            </p>

            <dl className="sam-about-list">
              {duvody.map((d) => (
                <div className="sam-about-item" key={d.k}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
            </dl>

            <p className="sam-about-contact">
              Rezervace na{" "}
              <a href="tel:+420727945560">+420 727 945 560</a> nebo{" "}
              <a href="mailto:info@stateksamsara.cz">info@stateksamsara.cz</a>.
              Uděláme pro vás to nejlepší.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
