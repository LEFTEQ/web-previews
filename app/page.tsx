import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pohřebnictví NOSTALGIE — pohřební služba Brno',
  description:
    'Pohřební služba v Brně, která zůstane u vás od prvního telefonu až po poslední rozloučení. Kremace s obřadem i bez, pohřeb do země, obřadní síně v Brně, Modřicích a Hustopečích. Dispečink nonstop.',
}

const kroky = [
  {
    doba: 'Kdykoli',
    nadpis: 'Zavoláte',
    text:
      'Ať je noc nebo svátek, dispečink zvedne telefon a zůstane s vámi na lince tak dlouho, jak potřebujete. Neřešíte formuláře — řeknete jen, co se stalo.',
  },
  {
    doba: 'Do dvou hodin',
    nadpis: 'Přijedeme',
    text:
      'Zajistíme šetrný převoz zesnulého z domova, nemocnice i domova pro seniory — v Brně i okolí, v kteroukoli hodinu. O nic dalšího se ten den nemusíte starat.',
  },
  {
    doba: 'V klidu, spolu',
    nadpis: 'Domluvíme obřad',
    text:
      'Sejdeme se u nás nebo u vás doma. Vybereme rakev, hudbu i slova, dohodneme květiny a parte. Rozpočet znáte předem, do koruny.',
  },
  {
    doba: 'Den rozloučení',
    nadpis: 'Doprovodíme',
    text:
      'Připravíme obřadní síň, uvítáme hosty a postaráme se o každý detail, abyste se mohli plně věnovat vzpomínce. Zůstaneme opodál, dokud neodejde poslední host.',
  },
]

const formy = [
  {
    nazev: 'Kremace s obřadem',
    popis:
      'Rozloučení v obřadní síni s hudbou, řečníkem a květinovou výzdobou. Urnu předáme podle vašeho přání, nebo pomůžeme s uložením do kolumbária.',
  },
  {
    nazev: 'Kremace bez obřadu',
    popis:
      'Tichá, komorní forma bez veřejného obřadu. Vše zařídíme diskrétně a urnu doručíme rodině. Volba mnoha rodin, které chtějí soukromí.',
  },
  {
    nazev: 'Pohřeb do země',
    popis:
      'Klasické uložení do hrobu na hřbitově dle vaší volby. Zajistíme rakev, výkop, nosiče i celý obřad u hrobu.',
  },
]

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Pohřebnictví Nostalgie, úvod">
          <span className="wordmark__name">Nostalgie</span>
          <span className="wordmark__sub">pohřební služba · Brno</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#pruvodce">Jak to probíhá</a>
          <a href="#formy">Formy rozloučení</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="call call--top" href="tel:+420602891347">
          <span className="call__label">Dispečink nonstop</span>
          <span className="call__num">602 891 347</span>
        </a>
      </header>

      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Ranní les v mlze u Brna — místo tichého rozloučení"
          width={1600}
          height={1000}
        />
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Rodinná pohřební služba v Brně od roku 1996</p>
          <h1 className="hero__title">
            Zůstaneme u&nbsp;vás<br />
            <em>od prvního telefonu</em><br />
            až po poslední&nbsp;rozloučení.
          </h1>
          <p className="hero__lede">
            Když odejde někdo blízký, není čas na papírování ani na hledání. Jsme na
            náměstí 28. dubna v&nbsp;Brně a zvedneme telefon v&nbsp;kteroukoli hodinu.
          </p>
          <div className="hero__actions">
            <a className="call call--hero" href="tel:+420602891347">
              Zavolat: 602&nbsp;891&nbsp;347
            </a>
            <a className="ghost" href="#pruvodce">Jak to probíhá</a>
          </div>
        </div>
      </section>

      <section className="section pruvodce" id="pruvodce" aria-labelledby="pruvodce-nadpis">
        <div className="section__head">
          <p className="section__eyebrow">Čtyři kroky, o zbytek se postaráme</p>
          <h2 id="pruvodce-nadpis" className="section__title">
            Nemusíte vědět, kde začít. My ano.
          </h2>
          <p className="section__intro">
            Většina lidí volá poprvé a naposledy v&nbsp;životě. Provedeme vás celou
            cestou v&nbsp;tempu, které zvládnete — bez zbytečných rozhodnutí v&nbsp;první den.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.nadpis}>
              <span className="krok__cislo" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="krok__body">
                <span className="krok__doba">{k.doba}</span>
                <h3 className="krok__nadpis">{k.nadpis}</h3>
                <p className="krok__text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="formy" id="formy">
          <h3 className="formy__nadpis">Formy rozloučení, které zajistíme</h3>
          <div className="formy__grid">
            {formy.map((f) => (
              <article className="forma" key={f.nazev}>
                <h4 className="forma__nazev">{f.nazev}</h4>
                <p className="forma__popis">{f.popis}</p>
              </article>
            ))}
          </div>
          <p className="formy__pozn">
            Cenu vždy dohodneme předem a písemně. Žádné položky navíc, se kterými
            byste nepočítali.
          </p>
        </div>
      </section>

      <section className="section duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <div className="duvera__media">
            <img
              src="/section-1.webp"
              alt="Obřadní síň Pohřebnictví Nostalgie připravená na rozloučení"
              width={900}
              height={1100}
            />
          </div>
          <div className="duvera__text">
            <p className="section__eyebrow">O nás</p>
            <h2 id="duvera-nadpis" className="section__title">
              Vlastní obřadní síně i&nbsp;krematorium — nic nepředáváme dál.
            </h2>
            <p className="duvera__lede">
              Nejsme přeprodejci. Rozloučení, převoz i&nbsp;kremaci vedeme sami, pod
              jednou střechou. Díky tomu víme přesně, kde váš blízký je, a&nbsp;víte to
              i&nbsp;vy.
            </p>

            <dl className="mista">
              <div className="misto">
                <dt>Obřadní síň Brno</dt>
                <dd>náměstí 28. dubna 238/25, 635&nbsp;00 Brno</dd>
              </div>
              <div className="misto">
                <dt>Obřadní síň Modřice</dt>
                <dd>Chrlická 661 — nově otevřená a&nbsp;bezbariérová</dd>
              </div>
              <div className="misto">
                <dt>Vlastní krematorium Hustopeče</dt>
                <dd>Oceněné jako moderní krematorium i&nbsp;v&nbsp;zahraničí</dd>
              </div>
            </dl>

            <blockquote className="cit">
              „Nehledejme slzy a&nbsp;smutek, ale těšme se z&nbsp;pomyšlení, že náš blízký
              je v&nbsp;myšlenkách stále s&nbsp;námi.“
            </blockquote>

            <a className="call call--inline" href="tel:+420602891347">
              Potřebuji pomoc teď — 602&nbsp;891&nbsp;347
            </a>
            <p className="duvera__mail">
              Nebo napište na{' '}
              <a href="mailto:dispecink@nostalgie.cz">dispecink@nostalgie.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
