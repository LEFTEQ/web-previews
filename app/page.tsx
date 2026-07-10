import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pavel Kühnel — truhlářství | špaletová a EURO okna, dveře, schodiště, Liberec',
  description:
    'Rodinná truhlárna u Liberce vyrábí od roku 1994 špaletová a EURO okna 68, interiérové i venkovní dveře, schodiště a repliky oken pro Národní památkový ústav. Výhradně z přírodního řeziva.',
  openGraph: {
    title: 'Pavel Kühnel — truhlářství, Liberec',
    description:
      'Špaletová a EURO okna, dveře, schodiště a památkové repliky z přírodního řeziva. Rodinná dílna od roku 1994.',
    type: 'website',
    locale: 'cs_CZ',
    images: ['/hero.webp'],
  },
}

const prace = [
  {
    cislo: '01',
    nazev: 'Špaletová okna',
    profil: 'dvojitá špaleta',
    text:
      'Dvojité rámy s vnitřním a vnějším křídlem — přesně ta konstrukce, kterou žádají staré libereké domy. Zachovají členění fasády a přitom drží teplo dovnitř.',
  },
  {
    cislo: '02',
    nazev: 'EURO okna 68',
    profil: 'trojvrstvý hranol 68 mm',
    text:
      'Lepený trojvrstvý hranol 68 mm, izolační dvojsklo a celoobvodové kování. Zakázkové rozměry na milimetr, od jednoho okna po celý dům.',
  },
  {
    cislo: '03',
    nazev: 'Dveře interiérové i venkovní',
    profil: 'masiv a rámová konstrukce',
    text:
      'Vstupní dveře, které drží počasí, i pokojové dveře sladěné s podlahou a zárubní. Kování a povrch vybíráme u vás v obýváku, ne z katalogu naslepo.',
  },
  {
    cislo: '04',
    nazev: 'Schodiště na míru',
    profil: 'od rovných po točitá',
    text:
      'Samonosná schodiště — rovná, zalomená i točitá. Zaměříme prostor, spočítáme stupně a smontujeme tak, aby ani po letech nevrzalo.',
  },
]

export default function Page() {
  return (
    <main className="tk">
      <header className="tk-top">
        <a className="tk-mark" href="#" aria-label="Pavel Kühnel, truhlářství — domů">
          <span className="tk-mark-name">Pavel Kühnel</span>
          <span className="tk-mark-sub">truhlářství · Liberec</span>
        </a>
        <nav className="tk-nav" aria-label="Hlavní">
          <a href="#prace">Výroba</a>
          <a href="#dilna">O dílně</a>
          <a className="tk-nav-cta" href="#poptavka">Nezávazná poptávka</a>
        </nav>
      </header>

      <section className="tk-hero" aria-labelledby="hero-nadpis">
        <div className="tk-hero-copy">
          <p className="tk-eyebrow">Rodinná dílna &nbsp;·&nbsp; od roku 1994</p>
          <h1 id="hero-nadpis" className="tk-hero-h1">
            Okna, dveře a schodiště,
            <br />
            <span className="tk-emph">řezaná z přírodního&nbsp;dřeva.</span>
          </h1>
          <p className="tk-lede">
            Špaletová a EURO okna, dveře a schody vyrábíme na míru u Liberce. Repliky
            původních oken děláme i pro objekty v péči Národního památkového ústavu —
            výhradně z rostlého řeziva, žádné dýhy přes dřevotřísku.
          </p>
          <div className="tk-hero-actions">
            <a className="tk-btn" href="#poptavka">Poptat výrobu</a>
            <a className="tk-btn-ghost" href="#prace">Co vyrábíme</a>
          </div>
        </div>
        <figure className="tk-hero-fig">
          <img
            src="/hero.webp"
            alt="Detail zakázkově vyrobeného dřevěného okna z dílny Pavla Kühnela"
            className="tk-hero-img"
            width={1200}
            height={1500}
          />
          <figcaption className="tk-grain">
            <span>rostlé řezivo</span>
            <span>lepený hranol 68</span>
            <span>ruční začišťování</span>
          </figcaption>
        </figure>
      </section>

      <section className="tk-prace" id="prace" aria-labelledby="prace-nadpis">
        <div className="tk-sec-head">
          <h2 id="prace-nadpis" className="tk-h2">Čtyři věci, které umíme do detailu</h2>
          <p className="tk-sec-sub">
            Nezaměřujeme se na všechno. Držíme se toho, co dřevo umí nejlíp —
            a co u nás v podhůří lidé opravdu shánějí.
          </p>
        </div>

        <ol className="tk-list">
          {prace.map((p) => (
            <li className="tk-item" key={p.cislo}>
              <span className="tk-item-num" aria-hidden="true">{p.cislo}</span>
              <div className="tk-item-body">
                <h3 className="tk-item-h3">{p.nazev}</h3>
                <p className="tk-item-profil">{p.profil}</p>
                <p className="tk-item-text">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="tk-band">
          <img
            src="/section-1.webp"
            alt="Rozpracovaná okenní křídla a rámy v truhlářské dílně"
            className="tk-band-img"
            width={1400}
            height={780}
          />
        </figure>
      </section>

      <section className="tk-dilna" id="dilna" aria-labelledby="dilna-nadpis">
        <figure className="tk-dilna-fig">
          <img
            src="/section-2.webp"
            alt="Hoblované fošny přírodního řeziva připravené k výrobě"
            className="tk-dilna-img"
            width={900}
            height={1100}
          />
        </figure>
        <div className="tk-dilna-copy">
          <p className="tk-eyebrow tk-eyebrow-dark">O dílně</p>
          <h2 id="dilna-nadpis" className="tk-h2 tk-h2-light">
            Malá rodinná firma z&nbsp;Dlouhého Mostu — kousek za Libercem
          </h2>
          <p className="tk-dilna-text">
            Dřevěný nábytek a interiéry děláme od roku 1994. Za tu dobu jsme
            zjistili jednu věc: kvalita se pozná až za deset zim. Proto
            pracujeme jen s přírodním řezivem, které necháme vyschnout, a
            každý spoj kontrolujeme rukou.
          </p>
          <ul className="tk-fakta">
            <li>
              <span className="tk-fakt-cislo">1994</span>
              <span className="tk-fakt-popis">první zakázka — dodnes stejná rodina, stejná dílna</span>
            </li>
            <li>
              <span className="tk-fakt-cislo">NPÚ</span>
              <span className="tk-fakt-popis">repliky původních oken pro památkově chráněné objekty</span>
            </li>
            <li>
              <span className="tk-fakt-cislo">100&nbsp;%</span>
              <span className="tk-fakt-popis">přírodní rostlé řezivo, žádné náhražky</span>
            </li>
          </ul>
          <p className="tk-dilna-mist">
            Přijeďte se podívat do dílny v Dlouhém Mostě, nebo přijedeme
            zaměřit k vám — po celém Liberecku.
          </p>
        </div>
      </section>
    </main>
  )
}
