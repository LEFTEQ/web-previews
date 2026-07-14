import React from "react";

const pizzy = [
  { n: "Margherita", d: "Rajčata San Marzano, mozzarella, čerstvá bazalka", c: "169" },
  { n: "Diavola", d: "Pikantní salám, chilli, česnek, olivový olej", c: "209" },
  { n: "Havlovská", d: "Domácí klobása, cibule, křen, zrnitá hořčice", c: "229" },
  { n: "Funghi", d: "Žampiony, šunka, olivy, oregano", c: "199" },
  { n: "Quattro formaggi", d: "Čtyři sýry, lesní med, vlašské ořechy", c: "219" },
];

const tyden = [
  { den: "Po", jidlo: "Svíčková na smetaně, houskový knedlík" },
  { den: "Út", jidlo: "Pečené kuře, bramborová kaše, okurka" },
  { den: "St", jidlo: "Guláš po hanácku, domácí knedlík" },
  { den: "Čt", jidlo: "Smažený sýr, hranolky, tatarská omáčka" },
  { den: "Pá", jidlo: "Pečené koleno, křen, hořčice, chléb" },
];

const duvera = [
  {
    t: "Ubytování přímo v hostinci",
    d: "Pokoje jsou zase v provozu — přespíte pár kroků od stolu. Rezervace na tel. 777 762 338.",
  },
  {
    t: "Vlastní vinotéka",
    d: "Sudové i lahvové víno natočíme domů. K pizze i jen tak na cestu přes Olomouc.",
  },
  {
    t: "Polední menu Po–Pá",
    d: "Denně jiné jídlo z naší kuchyně, 10–14 h za 149 Kč. Stálý lístek pak celý den až do večera.",
  },
];

export default function Page() {
  return (
    <main className="u-main">
      <section className="u-hero" id="nahoru">
        <div className="u-wrap u-nav">
          <a className="u-mark" href="#nahoru" aria-label="Hostinec U Havlů — domů">
            <span className="u-mark-name">U&nbsp;Havlů</span>
            <span className="u-mark-tag">hostinec · pizza · Dolany</span>
          </a>
          <nav className="u-links" aria-label="Hlavní nabídka">
            <a href="#menu">Jídelní lístek</a>
            <a href="#duvera">Ubytování</a>
            <a href="#kontakt">Kontakt</a>
            <a className="u-call-mini" href="tel:+420585396627">585&nbsp;396&nbsp;627</a>
          </nav>
        </div>

        <div className="u-wrap u-hero-grid">
          <div className="u-hero-copy">
            <p className="u-eyebrow u-reveal" style={{ animationDelay: "0.05s" }}>
              Dolany u Olomouce · od pece na kameni
            </p>
            <h1 className="u-h1 u-reveal" style={{ animationDelay: "0.15s" }}>
              Pizza <em>z rozpálené pece</em>, hospoda jako od babičky.
            </h1>
            <p className="u-lede u-reveal" style={{ animationDelay: "0.3s" }}>
              Kousek za Olomoucí pečeme pizzu na kameni, vaříme denní menu a
              točíme víno z vlastní vinotéky. Přijeďte se najíst tam, kde se to
              nikam nespěchá.
            </p>
            <div className="u-cta u-reveal" style={{ animationDelay: "0.42s" }}>
              <a className="u-btn u-btn-primary" href="tel:+420585396627">
                Zavolat a rezervovat stůl
              </a>
              <a className="u-btn u-btn-ghost" href="#menu">
                Prohlédnout jídelní lístek
              </a>
            </div>
            <ul className="u-hero-facts u-reveal" style={{ animationDelay: "0.54s" }}>
              <li>
                <strong>4,5 ★</strong> 1&nbsp;714 hodnocení na Googlu
              </li>
              <li>
                <strong>Po–Pá</strong> 10–20 h, o víkendu zavřeno
              </li>
            </ul>
          </div>

          <div className="u-hero-disc u-reveal-disc">
            <img
              src="/hero.webp"
              alt="Čerstvě upečená pizza z kamenné pece v hostinci U Havlů"
              width={720}
              height={720}
            />
            <span className="u-disc-badge">na kameni</span>
          </div>
        </div>
      </section>

      <section className="u-menu" id="menu">
        <div className="u-wrap">
          <header className="u-sec-head">
            <span className="u-disc-num" aria-hidden="true">01</span>
            <div>
              <p className="u-eyebrow u-eyebrow-dark">Z pece a z kuchyně</p>
              <h2 className="u-h2">Co dnes přijde na stůl</h2>
            </div>
          </header>

          <div className="u-menu-grid">
            <div className="u-menu-list">
              <p className="u-list-label">Pizza z kamenné pece</p>
              <ul>
                {pizzy.map((p) => (
                  <li key={p.n} className="u-row">
                    <span className="u-row-name">{p.n}</span>
                    <span className="u-row-dots" aria-hidden="true" />
                    <span className="u-row-price">{p.c} Kč</span>
                    <span className="u-row-desc">{p.d}</span>
                  </li>
                ))}
              </ul>
              <p className="u-note">
                Těsto necháváme den odležet, sýr trháme ručně. Bezlepkový korpus
                upečeme na vyžádání.
              </p>
            </div>

            <aside className="u-week">
              <p className="u-list-label u-list-label-light">Polední menu tento týden</p>
              <ul>
                {tyden.map((t) => (
                  <li key={t.den} className="u-week-row">
                    <span className="u-week-day">{t.den}</span>
                    <span className="u-week-food">{t.jidlo}</span>
                  </li>
                ))}
              </ul>
              <p className="u-week-note">
                10–14 h · 149 Kč včetně polévky. Stálý jídelní lístek pak až do
                20 h.
              </p>
              <img
                src="/section-1.webp"
                alt="Prostřený stůl v hostinci U Havlů s denním menu"
                width={640}
                height={420}
                className="u-week-img"
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="u-about" id="duvera">
        <div className="u-wrap">
          <header className="u-sec-head">
            <span className="u-disc-num u-disc-num-light" aria-hidden="true">02</span>
            <div>
              <p className="u-eyebrow">Proč k Havlům</p>
              <h2 className="u-h2 u-h2-light">Hospoda, kam se lidé vrací</h2>
            </div>
          </header>

          <div className="u-about-grid">
            <div className="u-about-media">
              <img
                src="/section-2.webp"
                alt="Interiér hostince U Havlů v Dolanech u Olomouce"
                width={720}
                height={560}
              />
            </div>

            <div className="u-about-copy">
              <p className="u-lede u-lede-light">
                Vaříme tady po svém — bez zbytečné parády, zato poctivě. Přes
                1&nbsp;700 hostů nám dalo na Googlu 4,5 hvězdy a to nás drží u
                pece každý všední den.
              </p>

              <ul className="u-about-list">
                {duvera.map((d) => (
                  <li key={d.t}>
                    <h3>{d.t}</h3>
                    <p>{d.d}</p>
                  </li>
                ))}
              </ul>

              <div className="u-contact" id="kontakt">
                <div className="u-contact-col">
                  <p className="u-list-label u-list-label-light">Kde nás najdete</p>
                  <address>
                    Dolany 93
                    <br />
                    783 16 Dolany u Olomouce
                  </address>
                  <dl className="u-hours">
                    <div>
                      <dt>Pondělí–pátek</dt>
                      <dd>10:00–20:00</dd>
                    </div>
                    <div>
                      <dt>Sobota a neděle</dt>
                      <dd>zavřeno</dd>
                    </div>
                  </dl>
                </div>
                <div className="u-contact-col">
                  <p className="u-list-label u-list-label-light">Ozvěte se</p>
                  <a className="u-contact-link" href="tel:+420585396627">
                    585 396 627 <span>restaurace</span>
                  </a>
                  <a className="u-contact-link" href="tel:+420777762338">
                    777 762 338 <span>ubytování</span>
                  </a>
                  <a className="u-contact-link" href="mailto:uhavlu@seznam.cz">
                    uhavlu@seznam.cz <span>napište nám</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
