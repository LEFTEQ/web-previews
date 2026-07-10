import type { CSSProperties } from "react";

export default function Page() {
  const denniMenu = [
    { den: "Pondělí", polevka: "Frgálová s uzeninou", hlavni: "Svíčková na smetaně, houskový knedlík", cena: "149" },
    { den: "Úterý", polevka: "Zelňačka na klobáse", hlavni: "Vepřo knedlo zelo po ostravsku", cena: "149" },
    { den: "Středa", polevka: "Hovězí vývar s játrovými knedlíčky", hlavni: "Smažený řízek, bramborová kaše", cena: "159" },
    { den: "Čtvrtek", polevka: "Česneková se sýrem a krutony", hlavni: "Guláš z hovězího líčka, houskový knedlík", cena: "165" },
    { den: "Pátek", polevka: "Kulajda s vejcem", hlavni: "Pečené koleno na tmavém pivu, křen, hořčice", cena: "189" },
  ];

  const naCep = [
    { pivo: "Radegast 12°", puvod: "Nošovice", mira: "0,5 l", cena: "48" },
    { pivo: "Radegast Ryze hořká 12°", puvod: "Nošovice", mira: "0,5 l", cena: "48" },
    { pivo: "Kozel černý 10°", puvod: "Velké Popovice", mira: "0,5 l", cena: "42" },
    { pivo: "Birell nealko", puvod: "nealko", mira: "0,5 l", cena: "38" },
  ];

  return (
    <main className="ud">
      <header className="ud-nav">
        <a className="ud-mark" href="#uvod" aria-label="Restaurace U Dvořáčků">
          <span className="ud-mark-u">U</span>
          <span className="ud-mark-name">Dvořáčků</span>
        </a>
        <nav className="ud-nav-links" aria-label="Hlavní navigace">
          <a href="#menu">Denní menu</a>
          <a href="#cep">Na čepu</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="ud-nav-cta" href="tel:+420703679239">Rezervovat stůl</a>
      </header>

      <section className="ud-hero" id="uvod">
        <img className="ud-hero-img" src="/hero.webp" alt="Interiér restaurace U Dvořáčků s prostřenými stoly" />
        <div className="ud-hero-scrim" aria-hidden="true" />
        <div className="ud-hero-inner">
          <p className="ud-eyebrow">Slezská Ostrava · Hladnovská 19 · od roku 1998</p>
          <h1 className="ud-hero-title">
            Poctivá česká<br />kuchyně a vždycky<br /><span className="ud-hero-accent">čerstvá dvanáctka.</span>
          </h1>
          <p className="ud-hero-lead">
            Hospoda U Dvořáčků na Hladnovské. Vaříme domácí obědy každý všední
            den, čepujeme nošovický Radegast a v létě sedíte na zahrádce z Mahenovy ulice.
          </p>
          <div className="ud-hero-actions">
            <a className="ud-btn ud-btn-primary" href="tel:+420703679239">Zavolat a rezervovat</a>
            <a className="ud-btn ud-btn-ghost" href="#menu">Co dneska vaříme</a>
          </div>
          <dl className="ud-hours">
            <div><dt>Po–Čt</dt><dd>11–22</dd></div>
            <div><dt>Pá–So</dt><dd>11–23</dd></div>
            <div><dt>Ne</dt><dd>11–21</dd></div>
          </dl>
        </div>
      </section>

      <section className="ud-menu" id="menu">
        <div className="ud-section-head">
          <p className="ud-eyebrow ud-eyebrow-dark">Polední menu · 11:00–14:30</p>
          <h2 className="ud-h2">Tento týden na tabuli</h2>
          <p className="ud-section-note">
            Napsané křídou nad výčepem, tady přepsané do stránky. K obědu vždycky
            polévka a hlavní jídlo. Kdo si chce nechat posílat denní nabídku na mail,
            řekne u nás obsluze.
          </p>
        </div>

        <ol className="ud-board">
          {denniMenu.map((row) => (
            <li className="ud-board-row" key={row.den}>
              <span className="ud-board-day">{row.den}</span>
              <span className="ud-board-dishes">
                <span className="ud-board-soup">{row.polevka}</span>
                <span className="ud-board-main">{row.hlavni}</span>
              </span>
              <span className="ud-board-price">{row.cena}&nbsp;Kč</span>
            </li>
          ))}
        </ol>

        <div className="ud-menu-figure">
          <img src="/section-1.webp" alt="Talíř domácí české kuchyně z restaurace U Dvořáčků" />
          <p className="ud-figure-cap">
            Vaříme z toho, co seženeme čerstvé — knedlíky točíme ráno, omáčky
            táhneme dlouho a pomalu. Žádné polotovary.
          </p>
        </div>
      </section>

      <section className="ud-about" id="onas">
        <div className="ud-about-grid">
          <div className="ud-about-text">
            <p className="ud-eyebrow ud-eyebrow-dark">Kdo jsme</p>
            <h2 className="ud-h2">Rodinná hospoda ve Slezské Ostravě</h2>
            <p>
              U Dvořáčků stojíme na dvou věcech — na dobrém jídle a pití a na tom,
              že se k nám lidé rádi vracejí. Vaříme skutečnou domácí kuchyni, takovou,
              po jaké se člověk odpoledne nezvedne od stolu s pocitem, že jedl z mikrovlnky.
            </p>
            <p>
              Salonek vzadu si můžete zamluvit na oslavu, křtiny i svatbu — sesadíme stoly,
              domluvíme menu a postaráme se o zbytek. V létě otevíráme zahrádku z Mahenovy ulice,
              kde se dobře sedí u dvanáctky až do večera.
            </p>
            <a className="ud-btn ud-btn-primary" href="tel:+420703679239">Domluvit salonek</a>
          </div>

          <aside className="ud-cep" id="cep" aria-label="Nabídka na čepu">
            <h3 className="ud-cep-title">Na čepu</h3>
            <ul className="ud-cep-list">
              {naCep.map((p) => (
                <li className="ud-cep-item" key={p.pivo}>
                  <span className="ud-cep-name">{p.pivo}</span>
                  <span className="ud-cep-meta">{p.puvod} · {p.mira}</span>
                  <span className="ud-cep-price">{p.cena}&nbsp;Kč</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="ud-about-figure">
          <img src="/section-2.webp" alt="Zahrádka a posezení u restaurace U Dvořáčků" />
          <div className="ud-about-contact">
            <p className="ud-eyebrow ud-eyebrow-dark">Najdete nás</p>
            <p className="ud-addr">
              Restaurace U Dvořáčků<br />
              Hladnovská 1311/19<br />
              710 00 Slezská Ostrava
            </p>
            <p className="ud-addr">
              <a href="tel:+420703679239">+420 703 679 239</a><br />
              <a href="mailto:udvoracku@udvoracku.cz">udvoracku@udvoracku.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
