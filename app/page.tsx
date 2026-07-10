import type { CSSProperties } from "react";

export const metadata = {
  title: "Vivodent — dentální hygiena v Ústí nad Labem",
  description:
    "Dentální hygiena ve Vivodentu, Velká Hradební 9, Ústí nad Labem. Odstranění zubního kamene a pigmentací, air-flow, nácvik čištění a plán prevence na míru.",
  openGraph: {
    title: "Vivodent — dentální hygiena v Ústí nad Labem",
    description:
      "Profesionální dentální hygiena, air-flow a prevence zubního kazu. Velká Hradební 9, Ústí nad Labem.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23103b3a'/%3E%3Cpath d='M16 7c-3.6 0-6 2-6 5.4 0 2.2.9 4.5 1.9 7.6.7 2.2 1.2 4.9 2.1 4.9.8 0 .9-2.1 2-2.1s1.2 2.1 2 2.1c.9 0 1.4-2.7 2.1-4.9 1-3.1 1.9-5.4 1.9-7.6C22 9 19.6 7 16 7z' fill='%232bb0a6'/%3E%3C/svg%3E",
  },
};

const hodiny: { den: string; cas: string; dnes?: boolean }[] = [
  { den: "Pondělí", cas: "8:00 – 15:00" },
  { den: "Úterý", cas: "8:00 – 15:00" },
  { den: "Středa", cas: "12:00 – 19:00" },
  { den: "Čtvrtek", cas: "8:00 – 15:00" },
  { den: "Pátek", cas: "dle objednání" },
];

const kroky: { c: string; titul: string; text: string; cas: string }[] = [
  {
    c: "01",
    titul: "Vstupní vyšetření a zmapování",
    text: "Projdeme spolu každý mezizubní prostor, změříme hloubku dásňových chobotů a najdeme místa, kterým kartáček nestačí. Uvidíte to, co při běžné prohlídce zůstane skryté.",
    cas: "~15 min",
  },
  {
    c: "02",
    titul: "Odstranění kamene a pigmentací",
    text: "Ultrazvukem sundáme zubní kámen nad i pod dásní, air-flow práškem šetrně smyjeme povlak od kávy, čaje a cigaret. Zub se vrátí ke své vlastní barvě, ne k umělé bělobě.",
    cas: "~30 min",
  },
  {
    c: "03",
    titul: "Nácvik čištění na míru",
    text: "Ukážeme vám přesně u vašich zubů, jak vést kartáček, jaké mezizubní kartáčky sedí do vašich prostor a proč nitka nestačí všude. Techniku si vyzkoušíte přímo v křesle.",
    cas: "~10 min",
  },
  {
    c: "04",
    titul: "Leštění a fluoridace",
    text: "Zuby doleštíme do hladka, aby se na ně povlak hůř chytal, a zapečetíme sklovinu fluoridovým lakem. Odcházíte s hladkým, čistým chrupem a plánem, kdy přijít znovu.",
    cas: "~10 min",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Vivodent — úvod">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 30" width="22" height="27">
              <path
                d="M12 2C6.9 2 3.4 4.9 3.4 9.7c0 3 1.3 6.3 2.8 10.5C7.2 23.3 7.9 28 9.2 28c1.2 0 1.4-3 2.8-3s1.6 3 2.8 3c1.3 0 2-4.7 3-7.8 1.5-4.2 2.8-7.5 2.8-10.5C20.6 4.9 17.1 2 12 2z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="brand-name">
            Vivo<span className="brand-accent">dent</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#hygiena">Hygiena krok za krokem</a>
          <a href="#ordinace">Ordinace</a>
          <a className="nav-cta" href="tel:+420773610569">
            Objednat: 773 610 569
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-copy">
          <p className="eyebrow">Dentální hygiena · Ústí nad Labem</p>
          <h1 id="hero-nadpis">
            Čistý zub cítíte
            <br />
            <span className="hl">jazykem dřív</span>
            <br />
            než ho vidíte.
          </h1>
          <p className="lead">
            Ve Vivodentu je dentální hygiena samostatná návštěva, ne pár
            minut na konci prohlídky. Sundáme kámen, který si sami nesundáte,
            a naučíme vás udržet zuby čisté doma — aby vydržely bez plomb co
            nejdéle.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420773610569">
              Objednat hygienu
            </a>
            <a className="btn btn-ghost" href="#hygiena">
              Co se v křesle stane
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Doba návštěvy</dt>
              <dd>60–75 min</dd>
            </div>
            <div>
              <dt>Doporučeně</dt>
              <dd>2× ročně</dd>
            </div>
            <div>
              <dt>Adresa</dt>
              <dd>Velká Hradební 9</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Dentální hygienistka Vivodent při ošetření pacienta v ordinaci"
            width={880}
            height={1040}
            loading="eager"
          />
          <figcaption className="hero-tag">
            <span className="dot" aria-hidden="true" />
            Ordinace na Velké Hradební, centrum Ústí
          </figcaption>
        </figure>
      </section>

      <section className="kroky" id="hygiena" aria-labelledby="kroky-nadpis">
        <div className="section-head">
          <p className="eyebrow">Ošetření · krok za krokem</p>
          <h2 id="kroky-nadpis">Jedna návštěva ve čtyřech krocích</h2>
          <p className="section-sub">
            Nemusíte tušit, co vás čeká. Tady je celý postup přesně v pořadí,
            jak proběhne — od prvního zmapování po vyleštěný chrup.
          </p>
        </div>
        <ol className="steps">
          {kroky.map((k) => (
            <li className="step" key={k.c}>
              <span className="step-num" aria-hidden="true">
                {k.c}
              </span>
              <div className="step-body">
                <div className="step-topline">
                  <h3>{k.titul}</h3>
                  <span className="step-time">{k.cas}</span>
                </div>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="kroky-media">
          <img
            src="/section-1.webp"
            alt="Detail nástrojů pro dentální hygienu a air-flow ve Vivodentu"
            width={1200}
            height={720}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="ordinace" id="ordinace" aria-labelledby="ordinace-nadpis">
        <figure className="ordinace-media">
          <img
            src="/section-2.webp"
            alt="Interiér zubní ordinace Vivodent v Ústí nad Labem"
            width={1040}
            height={1200}
            loading="lazy"
          />
        </figure>
        <div className="ordinace-copy">
          <p className="eyebrow">Ordinace Vivodent · o nás</p>
          <h2 id="ordinace-nadpis">
            Malá ordinace v centru, kde na vás mají čas
          </h2>
          <p className="section-sub">
            Vivodent najdete na Velké Hradební přímo v centru Ústí nad Labem.
            Vedle běžné stomatologie — od prevence a plomb po implantáty a
            estetiku — se tu naplno věnujeme i samostatné dentální hygieně.
            Objednáváme na čas, takže se v čekárně netlačíte.
          </p>

          <div className="info-grid">
            <div className="info-card hours">
              <h3>Ordinační hodiny</h3>
              <table className="hours-table">
                <tbody>
                  {hodiny.map((h) => (
                    <tr key={h.den}>
                      <th scope="row">{h.den}</th>
                      <td>{h.cas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="hours-note">
                Ve středu ordinujeme až do večera — hygiena po práci bez
                spěchu.
              </p>
            </div>

            <div className="info-card contact">
              <h3>Kontakt a objednání</h3>
              <ul className="contact-list">
                <li>
                  <span className="c-label">Telefon</span>
                  <a href="tel:+420773610569">773 610 569</a>
                </li>
                <li>
                  <span className="c-label">E-mail</span>
                  <a href="mailto:vivodentcz@gmail.com">
                    vivodentcz@gmail.com
                  </a>
                </li>
                <li>
                  <span className="c-label">Adresa</span>
                  <a
                    href="https://mapy.cz/?q=Velk%C3%A1%20Hradebn%C3%AD%203385%2F9%20%C3%9Ast%C3%AD%20nad%20Labem"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Velká Hradební 3385/9, Ústí nad Labem
                  </a>
                </li>
              </ul>
              <a className="btn btn-primary btn-block" href="tel:+420773610569">
                Zavolat a objednat se
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
