import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      idx: "I",
      title: "Servis mechanických hodinek",
      desc: "Kompletní přečištění strojku, výměna olejů, seřízení chodu na pár vteřin za den. Automaty, ručně natahovací i chronografy — každý strojek rozebereme, vyčistíme v ultrazvuku a znovu smontujeme.",
      meta: "ETA · Sellita · Miyota · Valjoux"
    },
    {
      idx: "II",
      title: "Výměna baterie a těsnění",
      desc: "Nová baterie na počkání, výměna těsnicích kroužků a tlaková zkouška vodotěsnosti. Odejdete s hodinkami, které vydrží déšť i mytí rukou.",
      meta: "Renata · Maxell · tlak do 10 ATM"
    },
    {
      idx: "III",
      title: "Řemínky, tahy a nápravy",
      desc: "Zkrácení kovového tahu, usazení kožených i ocelových řemínků, leštění pouzdra a skla. Vybíráme z desítek šířek, aby seděl přesně na vaše zápěstí.",
      meta: "kůže · ocel · milanese · NATO"
    }
  ];

  const trust = [
    { k: "1994", v: "otevřeli jsme první ponk v centru Pardubic" },
    { k: "3 týdny", v: "běžná lhůta na kompletní servis strojku" },
    { k: "12 měsíců", v: "záruka na každou opravu i seřízení" }
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#" aria-label="Soliter — hodinářství Pardubice">
          <span className="mark__word">Soliter</span>
          <span className="mark__sub">hodinářství · Pardubice</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní navigace">
          <a href="#servis">Servis</a>
          <a href="#dilna">Dílna</a>
          <a href="tel:+420466612345">466&nbsp;612&nbsp;345</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Otevřený strojek náramkových hodinek s pinzetou při opravě na ponku"
            loading="eager"
            decoding="async"
          />
          <div className="hero__tick" aria-hidden="true">
            {["XII", "III", "VI", "IX"].map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Ponk v Pardubicích · od roku 1994</p>
          <h1 className="hero__h">
            Vaše hodinky<br />
            <em>zase&nbsp;přesně</em><br />
            tikají.
          </h1>
          <p className="hero__lead">
            Rozebereme strojek do posledního kamínku, vyčistíme, naolejujeme
            a seřídíme. Mechaniku i křemík vracíme s chodem, na který se dá
            spolehnout — a se zárukou.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420466612345">
              Zavolat do dílny
            </a>
            <a className="btn btn--ghost" href="#servis">
              Co opravujeme
            </a>
          </div>
          <p className="hero__note">
            Osobní převzetí Po–Pá 9–17 · Pernštýnské nám. 4, Pardubice
          </p>
        </div>
      </section>

      <section className="svc" id="servis">
        <div className="svc__head">
          <p className="eyebrow eyebrow--dark">Co necháme znovu chodit</p>
          <h2 className="sec__h">Tři věci, které řešíme denně</h2>
        </div>
        <ol className="svc__list">
          {services.map((s) => (
            <li className="card" key={s.idx}>
              <span className="card__idx" aria-hidden="true">{s.idx}</span>
              <h3 className="card__h">{s.title}</h3>
              <p className="card__p">{s.desc}</p>
              <p className="card__meta">{s.meta}</p>
            </li>
          ))}
        </ol>
        <figure className="svc__fig">
          <img
            src="/section-1.webp"
            alt="Detail hodinářského nářadí a rozpracovaného strojku na pracovním stole"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Každou opravu děláme na ponku v Pardubicích — nic neposíláme pryč.
          </figcaption>
        </figure>
      </section>

      <section className="abt" id="dilna">
        <figure className="abt__fig">
          <img
            src="/section-2.webp"
            alt="Hodinář u lupy při jemné práci se strojkem hodinek"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="abt__text">
          <p className="eyebrow eyebrow--dark">O dílně</p>
          <h2 className="sec__h">
            Třicet let u&nbsp;lupy, <br className="br--md" />pořád ve&nbsp;stejné ulici.
          </h2>
          <p className="abt__p">
            Soliter není řetězec ani e-shop. Je to ponk, lupa a ruce, které
            dokážou seřídit stroječek menší než nehet. Přineste hodinky po
            dědečkovi i každodenní automat — vždycky se na ně díváme, jako by
            byly naše.
          </p>
          <dl className="abt__stats">
            {trust.map((t) => (
              <div className="stat" key={t.k}>
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
          <p className="abt__quote">
            „Donesl jsem hodinky, co stály deset let. Vrátil mi je za týden
            a jdou na vteřinu.“
            <span>— Petr H., zákazník z&nbsp;Chrudimi</span>
          </p>
        </div>
      </section>
    </main>
  );
}
