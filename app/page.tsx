import type { CSSProperties } from "react";

export default function Page() {
  const kolekce = [
    {
      cislo: "01",
      nazev: "Eco-Friendly plyš",
      popis:
        "Plyšáci, kteří vypadají jako živí — divoký pes, ovce, King Charles španěl. Šité tak, aby vydržely mazlení i praní.",
      priklad: "Divoký pes hyenovitý, 35 cm",
      cena: "437 Kč",
    },
    {
      cislo: "02",
      nazev: "RAPPA unikátní hračky",
      popis:
        "Trolejbusy s otevíracími dveřmi, koleje pro mini železnici, farmy s příslušenstvím. Naše vlastní kolekce, kterou jinde nekoupíte.",
      priklad: "Trolejbus MHD žlutý, 16 cm",
      cena: "89 Kč",
    },
    {
      cislo: "03",
      nazev: "Karnevalové kostýmy",
      popis:
        "Vlastní kolekce kostýmů pro maškarní i školní besídky. Od nejmenších princezen po pořádné příšery.",
      priklad: "Kolekce Karneval",
      cena: "skladem",
    },
    {
      cislo: "04",
      nazev: "Figurky Zvířata z celého světa",
      popis:
        "Detailní figurky zvířat od savany po hlubiny. Kolekce, se kterou si děti hrají a rovnou se učí.",
      priklad: "Kolekce Zvířata",
      cena: "skladem",
    },
  ];

  return (
    <main className="rp">
      <header className="rp-top">
        <a className="rp-mark" href="#" aria-label="RAPPA — hračkářství Ostrava">
          <span className="rp-mark-word">RAPPA</span>
          <span className="rp-mark-sub">hračky · Ostrava</span>
        </a>
        <div className="rp-top-contact">
          <a href="tel:+420608270801">+420 608 270 801</a>
          <a href="mailto:eshop@rappa.cz">eshop@rappa.cz</a>
        </div>
      </header>

      <section className="rp-hero" aria-labelledby="hero-nadpis">
        <div className="rp-hero-copy">
          <p className="rp-eyebrow">Rodinná dílna hraček od roku 1993</p>
          <h1 id="hero-nadpis">
            Hračky, které<br />
            <span className="rp-hl">přežijou dětství.</span>
          </h1>
          <p className="rp-lead">
            Přes třicet let vyrábíme a dovážíme hračky z Ostravy do celé
            republiky i na Slovensko. Eco-friendly plyšáci jako živí, unikátní
            trolejbusy i figurky zvířat — všechno, s čím si vaše děti opravdu
            hrají.
          </p>
          <div className="rp-hero-cta">
            <a className="rp-btn" href="#kolekce">Prohlédnout kolekce</a>
            <a className="rp-btn-ghost" href="#o-nas">Kdo jsme</a>
          </div>
        </div>
        <figure className="rp-hero-media">
          <img
            src="/hero.webp"
            alt="Eco-friendly plyšový pes z ostravské kolekce RAPPA"
            width={880}
            height={880}
          />
          <figcaption className="rp-hero-tag">
            <span>Kolekce Eco-Friendly</span>
            <span>vypadá jako živá</span>
          </figcaption>
        </figure>
      </section>

      <section className="rp-strip" aria-label="Čím jsme jiní">
        <div className="rp-strip-item"><b>30+</b><span>let na trhu</span></div>
        <div className="rp-strip-item"><b>ČR + SK</b><span>doručujeme</span></div>
        <div className="rp-strip-item"><b>Vlastní</b><span>kolekce RAPPA</span></div>
        <div className="rp-strip-item"><b>Skladem</b><span>100+ kusů</span></div>
      </section>

      <section className="rp-kolekce" id="kolekce" aria-labelledby="kolekce-nadpis">
        <div className="rp-sec-head">
          <p className="rp-eyebrow">Naše nabídka</p>
          <h2 id="kolekce-nadpis">Čtyři kolekce, jeden regál</h2>
          <p className="rp-sec-lead">
            Nejsme jen e-shop s cizím zbožím. Většinu toho, co u nás najdete,
            navrhujeme a vyrábíme sami — proto to jinde neseženete.
          </p>
        </div>

        <ol className="rp-cards">
          {kolekce.map((k) => (
            <li className="rp-card" key={k.cislo}>
              <span className="rp-card-num" aria-hidden="true">{k.cislo}</span>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
              <p className="rp-card-meta">
                <span>{k.priklad}</span>
                <span className="rp-card-price">{k.cena}</span>
              </p>
            </li>
          ))}
        </ol>

        <figure className="rp-kolekce-media">
          <img
            src="/section-1.webp"
            alt="Výběr hraček z ostravské kolekce RAPPA"
            loading="lazy"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="rp-onas" id="o-nas" aria-labelledby="onas-nadpis">
        <figure className="rp-onas-media">
          <img
            src="/section-2.webp"
            alt="Rodinný podnik RAPPA z Ostravy"
            loading="lazy"
            width={1000}
            height={1000}
          />
        </figure>
        <div className="rp-onas-copy">
          <p className="rp-eyebrow">RAPPA v kostce</p>
          <h2 id="onas-nadpis">Tradiční český rodinný podnik z Ostravy</h2>
          <p>
            Hračky pro děti děláme přes třicet let. Nejde nám o kvantitu — jde
            nám o to, aby hračka byla bezpečná, kvalitní, za rozumnou cenu a u
            vás doma rychle.
          </p>
          <ul className="rp-hodnoty">
            <li>
              <b>Bezpečnost především</b>
              <span>Každá hračka projde kontrolou kvality, než ji pošleme dětem.</span>
            </li>
            <li>
              <b>Rychlé dodání</b>
              <span>Většina sortimentu skladem, expedujeme obratem z Ostravy.</span>
            </li>
            <li>
              <b>Rozumná cena</b>
              <span>Vlastní výroba znamená férovou cenu bez zbytečných marží.</span>
            </li>
          </ul>
          <p className="rp-note">
            Vzděláváme se díky podpoře z Národního plánu obnovy — abychom byli
            připraveni i na hračky, se kterými si budou hrát vaše vnoučata.
          </p>
        </div>
      </section>
    </main>
  );
}
