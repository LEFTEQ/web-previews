import type { CSSProperties } from "react";

const sortiment = [
  {
    name: "Poplastované pletivo",
    note: "Zelené i pozinkované, na roli k odvozu",
    spec: "RAL 6005 · V 100–200 cm",
  },
  {
    name: "Svařované panely",
    note: "3D i 2D, pevný plot bez prověšení",
    spec: "RAL 7016 · antracit",
  },
  {
    name: "Sloupky, vzpěry, dráty",
    note: "Pozinkované, do betonu i do patky",
    spec: "Zn · Ø 38–48 mm",
  },
  {
    name: "Branky a brány",
    note: "Křídlové i posuvné, na míru vjezdu",
    spec: "š. 90–600 cm",
  },
  {
    name: "Elektrické pohony",
    note: "Bránu otevřete ovladačem i mobilem",
    spec: "dálkové ovládání",
  },
  {
    name: "Spojovací materiál",
    note: "Příchytky, napínáky, čepičky — vše skladem",
    spec: "kompletní sortiment",
  },
];

const duvera = [
  "Roky zkušeností s oplocením v Podblanicku",
  "Celý sortiment skladem, připraven k okamžité expedici",
  "Montáž plotů, branek i bran na klíč",
  "Posuvné brány s elektrickým pohonem — otevřete z auta i z mobilu",
];

export default function Page() {
  return (
    <>
      <header className="site-head">
        <a className="wordmark" href="#top" aria-label="Ploty Vlašim — úvod">
          <span className="wordmark-top">PLOTY</span>
          <span className="wordmark-bottom">VLAŠIM</span>
        </a>
        <a className="head-call" href="tel:+420775555842">
          <span className="head-call-label">Prodejna U&nbsp;Kozla</span>
          <span className="head-call-num">775&nbsp;555&nbsp;842</span>
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-text">
            <p className="eyebrow">Prodejna · Montáž · Vlašim</p>
            <h1 id="hero-title">
              Celý plot naložíte
              <br />
              na jednom místě
            </h1>
            <p className="hero-lead">
              Pletivo, sloupky, panely, branky i brány — všechno máme skladem ve
              Vlašimi a připravené hned k odvozu. Postavíte si sami, nebo vám
              plot smontujeme na klíč.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420775555842">
                Zavolat 775&nbsp;555&nbsp;842
              </a>
              <a
                className="btn btn-ghost"
                href="mailto:eshop@ploty-vlasim.cz"
              >
                Napsat na e-shop
              </a>
            </div>
            <ul className="chips" aria-label="Proč k nám">
              <li>Skladem · ihned k odvozu</li>
              <li>Montáž na klíč</li>
              <li>Posuvné brány s pohonem</li>
            </ul>
          </div>

          <div className="hero-media">
            <img
              src="/hero.webp"
              alt="Nové oplocení z poplastovaného pletiva u rodinného domu ve Vlašimi"
              className="hero-img"
              loading="eager"
            />
            <span className="hero-mesh" aria-hidden="true" />
            <span className="hero-tag mono" aria-hidden="true">
              PLETIVO · RAL 6005
            </span>
          </div>
        </section>

        <section className="panel panel-light" aria-labelledby="sortiment-title">
          <div className="section-head">
            <p className="eyebrow eyebrow-dark">Sortiment</p>
            <h2 id="sortiment-title">Co u nás pořídíte</h2>
            <p className="section-sub">
              Od jednoho pletiva po kompletní vjezd s automatickou bránou. Co
              nemáte, doměříme a doplníme — a poradíme, ať plot drží roky.
            </p>
          </div>

          <ol className="grid">
            {sortiment.map((item, i) => (
              <li
                className="card"
                key={item.name}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="card-idx mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="card-name">{item.name}</h3>
                <p className="card-note">{item.note}</p>
                <span className="card-spec mono">{item.spec}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="panel panel-dark" aria-labelledby="onas-title">
          <div className="onas">
            <div className="onas-media">
              <img
                src="/section-2.webp"
                alt="Prodejna Ploty Vlašim s příslušenstvím k oplocení na Vlasákově ulici"
                className="onas-img"
                loading="lazy"
              />
            </div>

            <div className="onas-text">
              <p className="eyebrow">Prodejna U Kozla</p>
              <h2 id="onas-title">
                Ve Vlašimi nás najdete
                <br />
                na Vlasákově
              </h2>
              <p className="onas-lead">
                Přijďte si sortiment prohlédnout naživo. Poradíme s výběrem
                pletiva i panelů, spočítáme spotřebu sloupků a připravíme
                všechno k odvozu. Umíme i projekci, výrobu a montáž posuvných
                bran s elektrickým pohonem — a nově řešíme i bezpečný domov,
                třeba dálkové otevírání dveří.
              </p>

              <ul className="trust">
                {duvera.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="contact">
                <div className="contact-block">
                  <span className="contact-label mono">Adresa</span>
                  <a
                    className="contact-value"
                    href="https://mapy.cz/?q=Vlas%C3%A1kova%20222%20Vla%C5%A1im"
                  >
                    Vlasákova 222/6, 258&nbsp;01 Vlašim
                  </a>
                </div>
                <div className="contact-block">
                  <span className="contact-label mono">Zavolejte</span>
                  <a className="contact-value" href="tel:+420775555842">
                    775&nbsp;555&nbsp;842
                  </a>
                  <a className="contact-value" href="tel:+420734245292">
                    734&nbsp;245&nbsp;292
                  </a>
                </div>
                <div className="contact-block">
                  <span className="contact-label mono">E-shop</span>
                  <a
                    className="contact-value"
                    href="mailto:eshop@ploty-vlasim.cz"
                  >
                    eshop@ploty-vlasim.cz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
