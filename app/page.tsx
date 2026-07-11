import type { CSSProperties } from 'react'

export const metadata = {
  title: 'Tiskárna Protisk — knižní tiskárna, České Budějovice',
  description:
    'Ofsetový tisk knih, katalogů a publikací v Českých Budějovicích. Prepress, press, postpress i knihařská vazba pod jednou střechou. Naše knihy sbírají ocenění Nejkrásnější kniha roku.',
  openGraph: {
    title: 'Tiskárna Protisk — knižní tiskárna, České Budějovice',
    description:
      'Ofsetový tisk knih a publikací s knihařskou péčí. Prepress, press i postpress pod jednou střechou. Nejkrásnější české knihy roku 2023.',
    type: 'website',
    locale: 'cs_CZ',
    images: [{ url: '/hero.webp', width: 1200, height: 630, alt: 'Tisková hala Tiskárny Protisk v Českých Budějovicích' }],
  },
  icons: {
    icon:
      'data:image/svg+xml,' +
      encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#141210"/><text x="16" y="23" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#E52521" text-anchor="middle">P</text></svg>',
      ),
  },
}

type Stage = {
  no: string
  name: string
  lead: string
  items: string[]
}

const stages: Stage[] = [
  {
    no: '01',
    name: 'Prepress',
    lead: 'Než se rozběhne stroj, sedí korektor nad archy.',
    items: ['CTP osvit tiskových desek', 'Kontrola dat a nátisk', 'Sazba a příprava PDF k tisku'],
  },
  {
    no: '02',
    name: 'Press',
    lead: 'Ofsetový tisk barevných i černobílých archů.',
    items: ['Archový ofset až B1', 'Přesné soutisk a barevnost', 'Malé i vyšší náklady knih'],
  },
  {
    no: '03',
    name: 'Postpress',
    lead: 'Z potištěných archů se stává hotová kniha.',
    items: ['Bigování strojem CRF 362', 'Skládání, snášení, šití', 'Lepená i šitá vazba obálek'],
  },
  {
    no: '04',
    name: 'Knihařská dílna',
    lead: 'Pevná vazba, kde rozhoduje ruční práce.',
    items: ['Šitá vazba V8', 'Ražba a povrchová úprava desek', 'Kompletace a expedice'],
  },
]

type Award = {
  year: string
  place: string
  title: string
  contest: string
}

const awards: Award[] = [
  {
    year: '2023',
    place: '4 knihy',
    title: 'Najkrajšie knihy Slovenska',
    contest: 'oceněné tituly vytištěné u nás',
  },
  {
    year: '2023',
    place: '3 knihy',
    title: 'Nejkrásnější české knihy roku',
    contest: 'mezi oceněnými publikacemi',
  },
  {
    year: '2022',
    place: '1.–3. místo',
    title: 'Nejkrásnější česká kniha roku',
    contest: 'Frankenstein · Nožička a Wohryzek · Čhávata z manéže',
  },
]

export default function Page() {
  return (
    <main className="pt">
      <header className="pt-top">
        <a className="pt-mark" href="#" aria-label="Tiskárna Protisk — domů">
          <span className="pt-mark__glyph" aria-hidden="true">Pro</span>
          <span className="pt-mark__rest">tisk</span>
          <span className="pt-mark__reg">tiskárna · České Budějovice</span>
        </a>
        <nav className="pt-nav" aria-label="Hlavní">
          <a href="#vyroba">Výroba</a>
          <a href="#oceneni">Ocenění</a>
          <a className="pt-nav__cta" href="tel:+420387000000">Zavolat</a>
        </nav>
      </header>

      <section className="pt-hero" aria-labelledby="hero-h">
        <div className="pt-hero__type">
          <p className="pt-eyebrow">Knižní tiskárna od roku 1991 · České Budějovice</p>
          <h1 id="hero-h" className="pt-hero__h">
            Tiskneme knihy,
            <br />
            <span className="pt-hero__accent">které dostávají</span>
            <br />
            ceny za krásu.
          </h1>
          <p className="pt-hero__lead">
            Sazba, ofsetový tisk, bigování i šitá vazba — celá cesta od PDF k hotové
            knize pod jednou střechou. Od nákladu tří set kusů po celé edice.
          </p>
          <div className="pt-hero__actions">
            <a className="pt-btn" href="tel:+420387000000">Poptat tisk knihy</a>
            <a className="pt-btn pt-btn--ghost" href="#vyroba">Jak vyrábíme</a>
          </div>
        </div>
        <figure className="pt-hero__fig">
          <img
            src="/hero.webp"
            width={1200}
            height={1400}
            alt="Ofsetový tiskový stroj a čerstvě potištěné archy v hale Tiskárny Protisk"
            className="pt-hero__img"
          />
          <figcaption className="pt-hero__cap">Tisková hala · archový ofset</figcaption>
        </figure>
      </section>

      <section id="vyroba" className="pt-flow" aria-labelledby="flow-h">
        <div className="pt-flow__head">
          <p className="pt-eyebrow pt-eyebrow--dark">Cesta archu tiskárnou</p>
          <h2 id="flow-h" className="pt-h2">
            Čtyři dílny, jedna kniha
          </h2>
          <p className="pt-flow__intro">
            Rukopis u nás projde čtyřmi rukama v pořadí, ve kterém vzniká každá
            kniha. Postupujeme přesně takto — proto ta čísla nejsou jen ozdoba.
          </p>
        </div>
        <ol className="pt-grid">
          {stages.map((s) => (
            <li key={s.no} className="pt-card">
              <span className="pt-card__no" aria-hidden="true">
                {s.no}
              </span>
              <h3 className="pt-card__name">{s.name}</h3>
              <p className="pt-card__lead">{s.lead}</p>
              <ul className="pt-card__list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <figure className="pt-flow__fig">
          <img
            src="/section-1.webp"
            width={1200}
            height={700}
            alt="Bigovací a skládací stroj CRF 362 při přípravě obálek knih"
            className="pt-flow__img"
            loading="lazy"
          />
          <figcaption>
            Bigovací a skládací stroj <strong>CRF 362</strong> — pořízený 2023 pro
            čisté hřbety obálek s perfektní vazbou.
          </figcaption>
        </figure>
      </section>

      <section id="oceneni" className="pt-trust" aria-labelledby="trust-h">
        <div className="pt-trust__grid">
          <div className="pt-trust__type">
            <p className="pt-eyebrow">Co o naší práci řekla porota</p>
            <h2 id="trust-h" className="pt-h2 pt-h2--light">
              Naše knihy stojí
              <br />
              na výstavních stolech
            </h2>
            <p className="pt-trust__intro">
              Kniha není leták. Pozná se na dotek — podle papíru, hřbetu i toho,
              jak drží tvar. Že to děláme dobře, potvrzují soutěže nejkrásnějších
              knih, kam nakladatelé posílají tituly vytištěné právě u nás.
            </p>
            <dl className="pt-awards">
              {awards.map((a) => (
                <div key={a.year + a.title} className="pt-award">
                  <dt className="pt-award__place">
                    {a.place}
                    <span className="pt-award__year">{a.year}</span>
                  </dt>
                  <dd className="pt-award__body">
                    <span className="pt-award__title">{a.title}</span>
                    <span className="pt-award__contest">{a.contest}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="pt-trust__contact">
              Chcete znát cenu a termín na svůj titul?{' '}
              <a href="mailto:tisk@protisk.cz">tisk@protisk.cz</a> nebo{' '}
              <a href="tel:+420387000000">387 000 000</a>.
            </p>
          </div>
          <figure className="pt-trust__fig">
            <img
              src="/section-2.webp"
              width={900}
              height={1100}
              alt="Hotové vázané knihy z produkce Tiskárny Protisk"
              className="pt-trust__img"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  )
}
