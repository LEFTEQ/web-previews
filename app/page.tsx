import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      title: "Klíč vám předáme osobně",
      text: "Sejdeme se u chaty, projdeme ji spolu a ukážeme, kde je co. Žádný samoobslužný schránkový zámek naslepo — na místě jste vždy vítaní.",
    },
    {
      cislo: "02",
      title: "Vyladíme délku i termín",
      text: "Prodloužený víkend, dovolená na týden nebo sezónní pronájem přes léto. Termíny držíme rezervované, dokud si nejste jistí.",
    },
    {
      cislo: "03",
      title: "Zůstáváme na příjmu",
      text: "Kdyby cokoli — netekla teplá voda, zaseklý kotel, ztracený klíč — voláte přímo nám. Ozveme se a dojedeme.",
    },
  ];

  const recenze = [
    {
      text: "Velmi oceňuji komplexní přístup, srozumitelnou komunikaci a dostupnost kdykoli během celého pobytu. Chatu jsme si zamilovali a příští léto jedeme zas.",
      autor: "Václav Tom Šlajer",
    },
    {
      text: "Vše dle domluvy a v maximálním nasazení. Předání klíčů proběhlo přesně na čas, chata byla připravená a čistá. Moc děkujeme.",
      autor: "Jan Kuchyňka",
    },
    {
      text: "Jsme velmi spokojeni. Oceňujeme odborné, spolehlivé a v neposlední řadě i sympatické jednání. Poradili nám i s výlety v okolí.",
      autor: "manželé Čapkovi",
    },
  ];

  return (
    <main className="pb-page">
      <header className="pb-nav" aria-label="Hlavní navigace">
        <a className="pb-wordmark" href="#hero" aria-label="Pubec — chata k pronájmu, domů">
          <span className="pb-wordmark__name">Pubec</span>
          <span className="pb-wordmark__tag">chata&nbsp;·&nbsp;Plzeňsko</span>
        </a>
        <nav className="pb-nav__links">
          <a href="#chata">Chata</a>
          <a href="#jak">Jak to chodí</a>
          <a href="#reference">Reference</a>
          <a className="pb-nav__call" href="tel:+420734202600">Zavolat</a>
        </nav>
      </header>

      <section id="hero" className="pb-hero">
        <div className="pb-hero__frame">
          <img
            className="pb-hero__img"
            src="/hero.webp"
            alt="Dřevěná chata k pronájmu na okraji lesa u Plzně, podvečerní světlo v oknech"
          />
          <span className="pb-hero__tag">Volno · sezóna 2025</span>
        </div>
        <div className="pb-hero__text">
          <p className="pb-eyebrow">Realitní kancelář Pubec &middot; Plzeň &middot; od roku 1990</p>
          <h1 className="pb-hero__title">
            Chata, kam se<br />
            <span className="pb-hero__accent">vrací celá rodina</span>
          </h1>
          <p className="pb-hero__lede">
            Klíč od dřevěné chaty na Plzeňsku, kde voní krb a z okna je vidět les. Pronajímáme ji
            na víkendy, dovolené i celou sezónu — vždy s předáním z ruky do ruky.
          </p>
          <div className="pb-hero__actions">
            <a className="pb-btn pb-btn--solid" href="tel:+420734202600">Rezervovat termín</a>
            <a className="pb-btn pb-btn--ghost" href="#chata">Prohlédnout chatu</a>
          </div>
          <dl className="pb-hero__facts">
            <div>
              <dt>Kapacita</dt>
              <dd>6 lůžek</dd>
            </div>
            <div>
              <dt>Vytápění</dt>
              <dd>Krb &amp; kotel</dd>
            </div>
            <div>
              <dt>Do lesa</dt>
              <dd>50 metrů</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="chata" className="pb-chata">
        <div className="pb-chata__head">
          <p className="pb-eyebrow">Co k chatě patří</p>
          <h2 className="pb-h2">Dřevo, klid a všechno, co potřebujete</h2>
        </div>
        <div className="pb-chata__grid">
          <figure className="pb-chata__figure">
            <img
              src="/section-1.webp"
              alt="Interiér chaty s dřevěným obložením, krbem a prostřeným stolem pro rodinu"
            />
          </figure>
          <ul className="pb-chata__list">
            <li>
              <span className="pb-chata__label">Uvnitř</span>
              <p>Vytápěný obývací prostor s krbem, plně vybavená kuchyň, dvě ložnice a podkroví se třemi lůžky. Ručníky a povlečení připravené.</p>
            </li>
            <li>
              <span className="pb-chata__label">Venku</span>
              <p>Oplocený pozemek, zastřešená terasa, ohniště na opékání a dřevo na topení pod přístřeškem. Parkování pro dvě auta u vjezdu.</p>
            </li>
            <li>
              <span className="pb-chata__label">V okolí</span>
              <p>Značené trasy do lesů kolem Plzně, koupání do 10 minut autem a hospůdka v sousední vsi. Rádi poradíme, kam vyrazit.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="jak" className="pb-jak">
        <div className="pb-jak__head">
          <p className="pb-eyebrow">Jak to u nás chodí</p>
          <h2 className="pb-h2">Od telefonu po klíč ve dveřích</h2>
        </div>
        <ol className="pb-jak__steps">
          {kroky.map((k) => (
            <li key={k.cislo} className="pb-step">
              <span className="pb-step__num">{k.cislo}</span>
              <h3 className="pb-step__title">{k.title}</h3>
              <p className="pb-step__text">{k.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="reference" className="pb-ref">
        <div className="pb-ref__grid">
          <div className="pb-ref__intro">
            <p className="pb-eyebrow">Vaše spokojenost je pro nás odměnou</p>
            <h2 className="pb-h2">Kdo u nás byl, vrací se</h2>
            <p className="pb-ref__lede">
              Chatu i celé Plzeňsko známe od roku 1990. Postaráme se o hladké předání a jsme na
              příjmu po celý pobyt.
            </p>
            <div className="pb-ref__scores">
              <div className="pb-score">
                <span className="pb-score__val">4,8</span>
                <span className="pb-score__src">Google</span>
              </div>
              <div className="pb-score">
                <span className="pb-score__val">4,9</span>
                <span className="pb-score__src">Firmy.cz</span>
              </div>
            </div>
            <figure className="pb-ref__figure">
              <img
                src="/section-2.webp"
                alt="Terasa chaty s ohništěm za soumraku, prostor pro posezení rodiny"
              />
            </figure>
          </div>
          <ul className="pb-ref__list">
            {recenze.map((r, i) => (
              <li key={i} className="pb-quote" style={{ "--i": i } as CSSProperties}>
                <p className="pb-quote__text">{r.text}</p>
                <p className="pb-quote__autor">— {r.autor}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
