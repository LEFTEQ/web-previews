import type { ReactNode } from "react";

type Service = { n: string; title: string; body: string };

const services: Service[] = [
  {
    n: "01",
    title: "Bazény na míru",
    body: "Zapuštěné i nadzemní, libovolný tvar a velikost. Skořepinu vyvaříme těžkou fólií přesně na váš pozemek.",
  },
  {
    n: "02",
    title: "Lamelové krytí",
    body: "Rolující kryt, který drží teplo i čistotu a ráno se stočí pryč pod hladinu. Prodej i montáž.",
  },
  {
    n: "03",
    title: "Zastřešení",
    body: "Ke každému bazénu navrhneme a zajistíme odpovídající zastřešení — od nízkého po pochozí.",
  },
  {
    n: "04",
    title: "Vířivé vany",
    body: "Prodej a servis vířivek pro celoroční provoz, včetně zapojení a zaškolení.",
  },
  {
    n: "05",
    title: "Údržba vody",
    body: "Značková bazénová chemie, filtrace, skimmery a poradenství, ať je voda vždy čirá.",
  },
  {
    n: "06",
    title: "Servis a PVC-U",
    body: "Kompletace, montáž a široký sortiment vodoinstalačního materiálu z PVC-U.",
  },
];

const specials: string[] = [
  "vyvařování bazénů těžkou fólií",
  "vyhledávání úniku vody detektorem",
  "kalibrace dávkovacích stanic",
  "zazimování a odzimování",
  "protiproud a noční osvětlení",
  "filtrace, skimmery a schůdky",
];

const now: { tag: string; title: string; body: string }[] = [
  { tag: "Ceník", title: "Aktuální ceník", body: "Výběr nejprodávanějších bazénů pro tuto sezónu." },
  { tag: "Sklad", title: "Výprodej příslušenství", body: "Prodej výstavních vzorků za zvýhodněné ceny." },
  { tag: "Voda", title: "Údržba vody", body: "Chytrá příručka, jak udržet hladinu čirou po celý rok." },
];

function Slats(): ReactNode {
  return (
    <div className="hero__cover" aria-hidden="true">
      <div className="slat" />
      <div className="slat" />
      <div className="slat" />
      <div className="slat" />
      <div className="slat" />
      <div className="slat" />
    </div>
  );
}

export default function Page(): ReactNode {
  return (
    <main>
      <header className="reg hero">
        <div className="grid hero__bar">
          <a className="mark" href="#sluzby">
            <span className="mark__icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="mark__text">
              Bazéni&nbsp;<b>CZ</b>
            </span>
          </a>
          <span className="mark__place">Ostrava-Hrabová · od 90. let</span>
        </div>

        <div className="hero__stage">
          <div className="hero__water" aria-hidden="true" />
          <Slats />
          <div className="grid hero__content">
            <p className="eyebrow eyebrow--light">Bazény · zastřešení · lamelové krytí · servis</p>
            <h1 className="hero__title">
              Postavíme bazén,<br />
              který se sám přikryje.
            </h1>
            <p className="hero__lede">
              Rodinná firma z Ostravy staví zapuštěné i nadzemní bazény na míru — a k nim lamelové
              krytí, které se ráno stočí pryč a večer zase přikryje hladinu.
            </p>
            <a className="hero__link" href="#sluzby">
              Prohlédnout, co stavíme
            </a>
          </div>
        </div>
      </header>

      <section className="reg reg--light" id="sluzby">
        <div className="grid">
          <div className="reg__head">
            <span className="reg__num">02</span>
            <div>
              <h2 className="reg__title">Co u vás postavíme, zapojíme a udržíme</h2>
              <p className="reg__lead">
                Co nabídneme, to i sami smontujeme a servisujeme — od první skořepiny až po první
                zazimování.
              </p>
            </div>
          </div>

          <ol className="cards">
            {services.map((s) => (
              <li className="card" key={s.n}>
                <span className="card__n">{s.n}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="specials">
            <span className="specials__label">A ještě zvládneme</span>
            <ul className="specials__list">
              {specials.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="reg reg--dark" id="o-nas">
        <div className="grid about">
          <div className="reg__head">
            <span className="reg__num reg__num--brass">03</span>
            <div>
              <h2 className="reg__title">
                Rodinná firma. Od 90. let stavíme bazény kolem Ostravy.
              </h2>
              <p className="reg__lead reg__lead--light">
                Postavíme bazén přesně na váš pozemek — od výběru přes montáž a kompletaci až po
                zazimování. Poradíme s údržbou vody, najdeme skrytý únik detektorem a zkalibrujeme
                dávkovací stanici.
              </p>
            </div>
          </div>

          <div className="about__grid">
            <ul className="nowlist">
              {now.map((item) => (
                <li className="nowlist__item" key={item.title}>
                  <span className="nowlist__tag">{item.tag}</span>
                  <div>
                    <h3 className="nowlist__title">{item.title}</h3>
                    <p className="nowlist__body">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="facts">
              <h3 className="facts__title">Kde nás najdete</h3>
              <dl className="facts__list">
                <div>
                  <dt>Adresa</dt>
                  <dd>Ukázková 123, Ostrava</dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href="tel:+420777111222">777 111 222</a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:info@example.cz">info@example.cz</a>
                  </dd>
                </div>
                <div>
                  <dt>Sezóna (duben–září)</dt>
                  <dd>po–pá 9:00–17:00</dd>
                </div>
                <div>
                  <dt>Zimní provoz</dt>
                  <dd>po–pá 9:00–16:00</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
