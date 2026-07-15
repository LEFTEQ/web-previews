import type { ReactNode } from "react";

const nav = [
  { href: "#produkty", label: "Sortiment" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

const plate = [
  { k: "Založeno", v: "2006" },
  { k: "Provoz", v: "Vítkovice" },
  { k: "Centrum", v: "Milwaukee" },
  { k: "Zkušenost", v: "17+ let" },
];

const cards = [
  {
    ref: "DW",
    title: "DeWALT a další značky",
    body: "Brusky a leštičky, frézky, hoblíky, kombo sady elektrického nářadí i kompresory. Poradíme s výběrem podle toho, na čem zrovna děláte.",
  },
  {
    ref: "NAV",
    title: "Robotické sekačky",
    body: "Segway Navimow, Mammotion, Terramow, Ecovacs i Roborock. Chytré sekačky bez obvodových drátů — trávník sečou podle satelitní navigace.",
  },
  {
    ref: "FIS",
    title: "Kotevní technika",
    body: "Fischer a SOLIDA: chemické kotvy a malty, hmoždinky, ocelové kotvy a montážní systémy pro každý podklad.",
  },
  {
    ref: "DUN",
    title: "Protipožární ucpávky",
    body: "Prodej i školení protipožárního systému DUNAMENTI. Vysvětlíme, co norma vyžaduje, a dodáme přesně to, co k tomu potřebujete.",
  },
];

const advantages = [
  {
    n: "01",
    title: "Odbornost a zkušenosti",
    body: "Na trhu jsme přes 17 let. V nářadí se opravdu vyznáme a doporučíme podle toho, co s ním budete dělat — ne podle marže.",
  },
  {
    n: "02",
    title: "Rychlost a spolehlivost",
    body: "Zakládáme si na rychlém a spolehlivém dodání zboží až k vám. Když něco slíbíme, platí to.",
  },
  {
    n: "03",
    title: "Lidský a férový přístup",
    body: "Spokojenost zákazníka je u nás na prvním místě. Jednáme narovinu a s každým osobně.",
  },
];

const hours = [
  { d: "Pondělí", h: "7:30 – 16:00" },
  { d: "Úterý", h: "7:30 – 16:00" },
  { d: "Středa", h: "7:30 – 16:00" },
  { d: "Čtvrtek", h: "7:30 – 16:00" },
  { d: "Pátek", h: "7:30 – 15:00" },
  { d: "Sobota", h: "zavřeno" },
  { d: "Neděle", h: "zavřeno" },
];

function Wordmark(): ReactNode {
  return (
    <a className="lx-brand" href="#top" aria-label="LIXUS TECHNIK — úvod">
      <span className="lx-brand__mark" aria-hidden="true" />
      <span className="lx-brand__text">
        <span className="lx-brand__name">LIXUS TECHNIK</span>
        <span className="lx-brand__tag">// železářství · Ostrava</span>
      </span>
    </a>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="lx" id="top">
      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Profesionální ruční elektrické nářadí ve vzorkové prodejně LIXUS TECHNIK"
          width={1600}
          height={1000}
        />
        <div className="hero__scrim" aria-hidden="true" />

        <header className="topbar">
          <Wordmark />
          <nav className="topnav" aria-label="Hlavní navigace">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a className="topnav__call" href="tel:+420602332275">
              602 332 275
            </a>
          </nav>
        </header>

        <div className="hero__inner">
          <p className="eyebrow eyebrow--light lx-a" style={{ animationDelay: "80ms" }}>
            Železářství · Ostrava-Vítkovice · od roku 2006
          </p>
          <h1 className="hero__title lx-a" style={{ animationDelay: "160ms" }}>
            Nářadí, které
            <br />
            přežije každou
            <span className="hero__title-accent"> směnu.</span>
          </h1>
          <p className="hero__lead lx-a" style={{ animationDelay: "260ms" }}>
            Vzorková prodejna v Ostravě s nejširším sortimentem Milwaukee na
            severní Moravě. Ruční elektrické nářadí, stroje a technika pro
            řemeslo — s osobním přístupem a dodáním, na které je spoleh.
          </p>
          <div className="hero__cta lx-a" style={{ animationDelay: "340ms" }}>
            <a className="btn btn--red" href="tel:+420602332275">
              Zavolat 602 332 275
            </a>
            <a className="btn btn--ghost" href="#produkty">
              Prohlédnout sortiment
            </a>
          </div>

          <dl className="plate lx-a" style={{ animationDelay: "440ms" }}>
            {plate.map((p) => (
              <div className="plate__cell" key={p.k}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="sec sec--products" id="produkty">
        <div className="wrap">
          <header className="sec__head">
            <p className="eyebrow">01 — Sortiment</p>
            <h2 className="sec__title">Co u nás najdete</h2>
            <p className="sec__intro">
              Prodáváme kvalitní ruční elektrické nářadí, stroje a technologie
              pro stavbu i všechny druhy řemesel. Vše si u nás můžete v klidu
              osahat a nechat poradit dřív, než utratíte peníze.
            </p>
          </header>

          <article className="feature">
            <div className="feature__media">
              <img
                src="/section-1.webp"
                alt="Akumulátorové a elektrické nářadí Milwaukee v prodejně LIXUS TECHNIK"
                width={1200}
                height={900}
              />
              <span className="feature__ref">REF. M18 · M12</span>
            </div>
            <div className="feature__body">
              <p className="feature__kicker">Naše specializace</p>
              <h3 className="feature__title">Milwaukee centrum</h3>
              <p>
                Ve vzorkové prodejně máme nejširší sortiment Milwaukee
                elektrického a akumulátorového ručního nářadí na severní Moravě,
                a to včetně příslušenství. Platformy M18 a M12, brusky, vrtačky,
                utahováky i osvětlení — přijďte si je vyzkoušet do ruky.
              </p>
              <a className="link-arrow" href="#kontakt">
                Přijít do prodejny
              </a>
            </div>
          </article>

          <ul className="grid">
            {cards.map((c) => (
              <li className="card" key={c.ref}>
                <span className="card__ref">REF. {c.ref}</span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__body">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--about" id="o-nas">
        <div className="wrap about">
          <div className="about__left">
            <p className="eyebrow eyebrow--light">02 — Proč LIXUS TECHNIK</p>
            <h2 className="sec__title sec__title--light">
              Přes 17 let mezi řemeslníky
            </h2>
            <p className="about__lead">
              Firmu jsme založili v roce 2006 a zázemí máme v
              Ostravě-Vítkovicích. Cíl je pořád stejný: nabídnout kvalitní
              nářadí, stroje a moderní technologie pro stavbu i řemeslo — a stát
              si za tím, co prodáme.
            </p>

            <ul className="adv">
              {advantages.map((a) => (
                <li className="adv__item" key={a.n}>
                  <span className="adv__n">{a.n}</span>
                  <div>
                    <h3 className="adv__title">{a.title}</h3>
                    <p className="adv__body">{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="about__right">
            <img
              className="about__img"
              src="/section-2.webp"
              alt="Zázemí a nářadí firmy LIXUS TECHNIK v Ostravě-Vítkovicích"
              width={900}
              height={700}
            />

            <div className="info" id="kontakt">
              <div className="info__block">
                <h3 className="info__title">Otevírací doba</h3>
                <table className="hours">
                  <tbody>
                    {hours.map((row) => (
                      <tr key={row.d} className={row.h === "zavřeno" ? "is-off" : undefined}>
                        <th scope="row">{row.d}</th>
                        <td>{row.h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="info__block">
                <h3 className="info__title">Prodejna</h3>
                <address className="contact">
                  <a href="tel:+420602332275">+420 602 332 275</a>
                  <a href="mailto:info@lixustechnik.cz">info@lixustechnik.cz</a>
                  <span>Halasova 333/27</span>
                  <span>Ostrava-Vítkovice, 703 00</span>
                </address>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
