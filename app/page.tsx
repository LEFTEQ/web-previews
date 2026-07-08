import type { CSSProperties } from "react";

export default function Page() {
  const provozniDoba = [
    { den: "Po–Pá", cas: "7:00 – 22:00" },
    { den: "So–Ne", cas: "8:00 – 22:00" },
  ];

  const cinky = [
    { kg: "6", vyska: 74 },
    { kg: "10", vyska: 88 },
    { kg: "16", vyska: 104 },
    { kg: "24", vyska: 124 },
    { kg: "32", vyska: 148 },
  ];

  const sluzby = [
    {
      cislo: "01",
      nazev: "Posilovna",
      popis:
        "Přes 40 strojů a volných vah na dvou patrech. Trenér na place vám poradí, s čím začít i jak nepřehnat první týden.",
      detail: "Vstup jednorázově i na permanentku",
    },
    {
      cislo: "02",
      nazev: "Skupinové lekce",
      popis:
        "Kruháče, spinning, jóga i zdravá záda. Léto 2026 běží podle nového rozvrhu — lekce si zarezervujete přes appku i na recepci.",
      detail: "Rezervace nutná, kapacita omezená",
    },
    {
      cislo: "03",
      nazev: "Bowling",
      popis:
        "Šest nových drah hned vedle šaten. Po tréninku, nebo místo něj — dobré i pro firemní večer nebo oslavu.",
      detail: "Novinka v H Centru",
    },
    {
      cislo: "04",
      nazev: "Snídaně 8:00–10:30",
      popis:
        "Ranní kafe, vajíčka a poctivá kaše přímo v centru. Zajděte před prací nebo po ranní lekci a nechte to na nás.",
      detail: "Každý všední den",
    },
  ];

  return (
    <main className="hc">
      <header className="hc-topbar">
        <a className="hc-wordmark" href="#" aria-label="H Centrum Pardubice — domů">
          <span className="hc-wordmark__h">H</span>
          <span className="hc-wordmark__rest">Centrum</span>
          <span className="hc-wordmark__mesto">Pardubice</span>
        </a>
        <nav className="hc-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a href="#kontakt">Kontakt</a>
          <a className="hc-nav__cta" href="#kontakt">Rezervovat</a>
        </nav>
      </header>

      <section className="hc-hero" aria-labelledby="hero-nadpis">
        <div className="hc-hero__media">
          <img
            src="/hero.webp"
            alt="Interiér fitness centra H Centrum ve Starém Hradišti u Pardubic"
            className="hc-hero__img"
            width={1600}
            height={1000}
          />
        </div>

        <div className="hc-hero__panel">
          <p className="hc-eyebrow">Fitness &amp; bowling · Staré Hradiště u Pardubic</p>
          <h1 id="hero-nadpis" className="hc-hero__nadpis">
            Zvedni to,<br />
            <span className="hc-hero__zvyraznene">co tě posune.</span>
          </h1>
          <p className="hc-hero__lead">
            Posilovna, skupinové lekce, bowling i ranní snídaně — všechno pod
            jednou střechou, otevřené od sedmi ráno. První návštěva je na nás.
          </p>
          <div className="hc-hero__akce">
            <a className="hc-btn hc-btn--plna" href="#kontakt">
              Přijít na zkoušku zdarma
            </a>
            <a className="hc-btn hc-btn--linka" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>

          <dl className="hc-hero__doba">
            {provozniDoba.map((d) => (
              <div className="hc-hero__dobaRadek" key={d.den}>
                <dt>{d.den}</dt>
                <dd>{d.cas}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="hc-cinky" aria-label="Kilogramové řady kettlebellů">
        <div className="hc-cinky__popis">
          <span className="hc-cinky__label">Zátěž na míru</span>
          <p>Od rozcvičky po dřepy pod pořádnou vahou — najdeš si svoje kilo.</p>
        </div>
        <ul className="hc-cinky__rada" aria-hidden="true">
          {cinky.map((c) => (
            <li
              className="hc-cinky__kus"
              key={c.kg}
              style={{ "--h": `${c.vyska}px` } as CSSProperties}
            >
              <span className="hc-cinky__kg">{c.kg}</span>
              <span className="hc-cinky__jednotka">kg</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="hc-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="hc-sekce__hlava">
          <span className="hc-sekce__cislo">§ 01</span>
          <h2 id="sluzby-nadpis">Co u nás zvládneš za jeden den</h2>
          <p className="hc-sekce__perex">
            Ráno lekce, snídaně, odpoledne posilovna, večer bowling s partou.
            Nemusíš přejíždět půl města — je to všechno tady.
          </p>
        </div>

        <ol className="hc-karty">
          {sluzby.map((s) => (
            <li className="hc-karta" key={s.cislo}>
              <span className="hc-karta__cislo">{s.cislo}</span>
              <h3 className="hc-karta__nazev">{s.nazev}</h3>
              <p className="hc-karta__popis">{s.popis}</p>
              <span className="hc-karta__detail">{s.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="hc-o-nas" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="hc-o-nas__media">
          <img
            src="/section-1.webp"
            alt="Cvičící v posilovně H Centrum"
            width={1200}
            height={900}
          />
          <img
            src="/section-2.webp"
            alt="Skupinová lekce v sále H Centrum"
            width={1200}
            height={900}
          />
        </div>

        <div className="hc-o-nas__text">
          <span className="hc-sekce__cislo">§ 02</span>
          <h2 id="o-nas-nadpis">Blízko Pardubic, otevřeno každý den</h2>
          <p>
            H Centrum stojí ve Starém Hradišti hned za Pardubicemi. Sedm dní
            v týdnu, brzy ráno i večer — ať máte směny, děti, nebo obojí,
            čas na sebe si tu vždycky najdete.
          </p>

          <ul className="hc-vyhody">
            <li>
              <span className="hc-vyhody__cislo">1/2</span>
              <span>Členství za polovinu na první 2 měsíce, bez závazku na dobu určitou.</span>
            </li>
            <li>
              <span className="hc-vyhody__cislo">0 Kč</span>
              <span>První návštěva zdarma — zkusíte stroje i lekci, než se rozhodnete.</span>
            </li>
            <li>
              <span className="hc-vyhody__cislo">7:00</span>
              <span>Otevíráme brzy ráno, ať stihnete trénink před prací.</span>
            </li>
          </ul>

          <div className="hc-kontakt" id="kontakt">
            <div>
              <span className="hc-kontakt__label">Kde nás najdete</span>
              <p>Staré Hradiště 197<br />533 52 Pardubice</p>
            </div>
            <div>
              <span className="hc-kontakt__label">Zavolejte nám</span>
              <p>
                <a href="tel:+420466412044">+420 466 412 044</a>
                <br />
                <a href="mailto:info@hcentrum.net">info@hcentrum.net</a>
              </p>
            </div>
          </div>

          <a className="hc-btn hc-btn--plna" href="tel:+420466412044">
            Zavolat a domluvit zkoušku
          </a>
        </div>
      </section>
    </main>
  );
}
