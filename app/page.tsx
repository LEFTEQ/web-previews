import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optika Strnad — malá útulná optika v Hradci Králové",
  description:
    "Brýle na jednu návštěvu, opravy i brýlový tuning. Malá optika v Hradci Králové s dobrou kávou, poctivými cenami a službami, které jinde nenajdete.",
  openGraph: {
    title: "Optika Strnad — Hradec Králové",
    description:
      "Prodej, výroba, opravy a úpravy brýlí. Brýle na jednu návštěvu, opravy a brýlový tuning ve staré poctivé optice v Hradci Králové.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

export default function Page() {
  return (
    <main className="os">
      <header className="os-top">
        <a className="os-mark" href="#" aria-label="Optika Strnad, úvodní strana">
          <span className="os-mark-o" aria-hidden="true">
            <span className="os-lens" />
            <span className="os-lens" />
          </span>
          <span className="os-wordmark">
            <span className="os-word-1">Optika</span>
            <span className="os-word-2">Strnad</span>
          </span>
        </a>
        <nav className="os-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="os-nav-tel" href="tel:+420777407421">777 407 421</a>
        </nav>
      </header>

      <section className="os-hero" aria-labelledby="os-hero-h">
        <div className="os-hero-copy">
          <p className="os-eyebrow">Oční optika · Kubcova 236/16a · Hradec Králové</p>
          <h1 id="os-hero-h" className="os-hero-title">
            Brýle
            <span className="os-hero-line">na jednu</span>
            <span className="os-hero-line os-underline">návštěvu.</span>
          </h1>
          <p className="os-hero-lead">
            Vybereme spolu obrubu, domluvíme čočky, změříme vše potřebné pro
            zábrus — a doručení hotových brýlí už necháte na nás. Malá útulná
            optika, kde k měření patří i dobrá káva.
          </p>
          <div className="os-hero-cta">
            <a className="os-btn" href="tel:+420777407421">Zavolat a domluvit se</a>
            <a className="os-btn os-btn-ghost" href="#sluzby">Co u nás najdete</a>
          </div>
        </div>
        <figure className="os-hero-media">
          <img
            src="/hero.webp"
            alt="Interiér optiky Strnad s vystavenými obrubami brýlí"
            width={900}
            height={1100}
            loading="eager"
          />
          <figcaption className="os-hero-tag">
            <span className="os-hero-tag-num">Ø</span>
            Prodej · výroba · opravy · úpravy brýlí
          </figcaption>
        </figure>
      </section>

      <section className="os-sluzby" id="sluzby" aria-labelledby="os-sluzby-h">
        <div className="os-sec-head">
          <p className="os-eyebrow">Co děláme</p>
          <h2 id="os-sluzby-h">Tři věci, co u nás děláme rádi</h2>
          <p className="os-sec-lead">
            Od výběru obruby po letování rozlomené stranice. A pár nápadů navíc,
            se kterými si jinde nedají práci.
          </p>
        </div>

        <div className="os-media-band">
          <img
            src="/section-1.webp"
            alt="Detail práce na brýlích v dílně optiky"
            width={1200}
            height={520}
            loading="lazy"
          />
        </div>

        <ol className="os-cards">
          <li className="os-card">
            <span className="os-card-idx">Brýle na jednu návštěvu</span>
            <h3>Od obruby k hotovým brýlím</h3>
            <p>
              Společně vybereme obrubu, domluvíme typ čoček a změříme vše
              potřebné pro přesný zábrus. Zbytek — výrobu i doručení — bereme
              na sebe.
            </p>
          </li>
          <li className="os-card">
            <span className="os-card-idx">Opravy brýlí</span>
            <h3>Letování, sedýlka, stranice</h3>
            <p>
              Zajišťujeme všechny opravy brýlí. Nejdřív si upřímně řekneme, jestli
              má oprava smysl — pak řešíme šroubky, matičky, hmoždinky, silony i
              výměny stranic.
            </p>
          </li>
          <li className="os-card">
            <span className="os-card-idx">Brýlový tuning</span>
            <h3>Aby to byl váš jediný kousek</h3>
            <p>
              Designová úprava stranic, gravírování čoček dle vlastního návrhu nebo
              nenápadné trvalé označení — třeba telefon pro případ ztráty. Z brýlí
              uděláme originál.
            </p>
          </li>
        </ol>

        <aside className="os-akce" aria-label="Aktuální akce">
          <div className="os-akce-row">
            <p className="os-akce-tag">Akce · platí do odvolání</p>
            <h3>Obruba za půlku, kompletní brýle o čtvrtinu levněji</h3>
            <p>
              Provětráváme poličky: na vybrané kolekce obrub dáváme slevu 50 %,
              nebo si odnesete kompletní brýle se slevou 25 %. Žádné podmínky
              typu minimální cena zakázky se u nás nenosí.
            </p>
          </div>
          <div className="os-akce-row">
            <p className="os-akce-tag">Stálá sleva · 25 %</p>
            <h3>Pro uniformované složky a IZS</h3>
            <p>
              Jako projev úcty k lidem, kteří zasvětili život službě ostatním,
              nabízíme členům IZS, uniformovaných složek, Aktivních záloh AČR a
              SDH celý sortiment se slevou 25 %.
            </p>
          </div>
        </aside>
      </section>

      <section className="os-onas" id="o-nas" aria-labelledby="os-onas-h">
        <figure className="os-onas-media">
          <img
            src="/section-2.webp"
            alt="Útulný prostor optiky Strnad"
            width={900}
            height={1000}
            loading="lazy"
          />
        </figure>
        <div className="os-onas-copy">
          <p className="os-eyebrow">O nás</p>
          <h2 id="os-onas-h">
            Malá útulná optika, kde vás nikdo nežene
          </h2>
          <p className="os-onas-lead">
            Příjemné prostředí, poctivé ceny, odborná obsluha, dobrá káva a k tomu
            možnosti, které jiní nenabízí. Přesně kvůli tomu k nám lidé chodí.
          </p>
          <ul className="os-facts">
            <li>
              <span className="os-fact-k">Platba</span>
              <span className="os-fact-v">Hotovost i karta · Edenred, Sodexo/Pluxee, UP</span>
            </li>
            <li>
              <span className="os-fact-k">Navíc</span>
              <span className="os-fact-v">U nás vyřídíte i Balíkovnu</span>
            </li>
            <li>
              <span className="os-fact-k">Kde</span>
              <span className="os-fact-v">Kubcova 236/16a, 500 04 Hradec Králové</span>
            </li>
          </ul>

          <div className="os-hours">
            <p className="os-hours-h">Otevírací doba</p>
            <dl className="os-hours-grid">
              <div><dt>Po</dt><dd>9:00–12:00 · 12:30–15:30</dd></div>
              <div><dt>Út</dt><dd>9:00–12:00 · 12:30–15:30</dd></div>
              <div><dt>St</dt><dd>jen domluvené schůzky</dd></div>
              <div><dt>Čt</dt><dd>15:00–18:00</dd></div>
              <div><dt>Pá</dt><dd>jen domluvené schůzky</dd></div>
              <div><dt>So–Ne</dt><dd>zavřeno</dd></div>
            </dl>
            <p className="os-hours-note">
              Schůzku mimo běžnou dobu klidně domluvíme telefonicky — stačí
              zavolat na <a href="tel:+420777407421">777 407 421</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
