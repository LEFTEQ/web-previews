import type { CSSProperties } from 'react'

export default function Page() {
  const kroky = [
    {
      c: '01',
      t: 'Zaměření a návrh',
      d: 'Přijedeme k vám do bytu, změříme prostor a probereme, co od nové koupelny čekáte. Dostanete jasný plán — kam přijde vana, sprcha, skříňka i každá zásuvka.',
    },
    {
      c: '02',
      t: 'Bourání a rozvody',
      d: 'Vybouráme starý obklad, srovnáme podlahu a natáhneme nové rozvody vody a odpadu. Před obkladem uděláme tlakovou zkoušku, aby vás nikdy nepřekvapila voda pod dlažbou.',
    },
    {
      c: '03',
      t: 'Hydroizolace a obklad',
      d: 'Kouty a podlahu pod sprchou natřeme hydroizolační stěrkou. Pak přijde obklad a dlažba — spáry vedeme na milimetr, aby řady lícovaly i po letech.',
    },
    {
      c: '04',
      t: 'Osazení a předání',
      d: 'Osadíme baterie, sprchový kout, umyvadlo i topný žebřík, zasilikonujeme a uklidíme. Předáváme hotovou koupelnu, do které stačí pověsit ručník.',
    },
  ]

  const duvody = [
    {
      k: 'Jeden tým, jeden termín',
      v: 'Vodu, obklad i elektriku uděláme sami. Nečekáte, až se domluví tři řemeslníci — termín platí, protože ho držíme my.',
    },
    {
      k: 'Cena, co se nemění',
      v: 'Rozpočet dostanete předem a položkově. Co si odsouhlasíme, to zaplatíte — bez příplatků, které „vyskočí“ až na konci.',
    },
    {
      k: 'Suchá koupelna po letech',
      v: 'Hydroizolace a tlaková zkouška jsou u nás samozřejmost, ne příplatková služba. Proto na naši práci dáváme záruku.',
    },
  ]

  return (
    <main className="vv">
      <header className="vv-nav" aria-label="Hlavní">
        <a className="vv-logo" href="#top" aria-label="VV Instal — domů">
          <span className="vv-logo-mark" aria-hidden="true">VV</span>
          <span className="vv-logo-word">Instal</span>
        </a>
        <a className="vv-call" href="tel:+420776144811">
          <span className="vv-call-label">Zavolat</span>
          <span className="vv-call-num">776&nbsp;144&nbsp;811</span>
        </a>
      </header>

      <section className="vv-hero" id="top">
        <div
          className="vv-tiles"
          aria-hidden="true"
          style={{ ['--rows' as keyof CSSProperties]: 8 } as CSSProperties}
        >
          {Array.from({ length: 96 }).map((_, i) => (
            <span key={i} className="vv-tile" style={{ ['--d' as keyof CSSProperties]: `${(i % 12) * 0.03 + Math.floor(i / 12) * 0.05}s` } as CSSProperties} />
          ))}
        </div>

        <div className="vv-hero-inner">
          <p className="vv-eyebrow">Rekonstrukce koupelen · Brno a okolí</p>
          <h1 className="vv-h1">
            Stará koupelna dolů.
            <span className="vv-h1-line">Nová do <em>tří&nbsp;týdnů</em>.</span>
          </h1>
          <p className="vv-lede">
            Od vybourání po poslední spáru — vodu, obklad i elektriku zvládne
            jeden tým. Přijedeme, zaměříme a řekneme přesnou cenu i termín, který
            platí.
          </p>
          <div className="vv-hero-cta">
            <a className="vv-btn" href="tel:+420776144811">Zavolat a domluvit zaměření</a>
            <span className="vv-hero-note">Zaměření v Brně zdarma</span>
          </div>
        </div>

        <dl className="vv-spec">
          <div>
            <dt>Spáry</dt>
            <dd>na milimetr</dd>
          </div>
          <div>
            <dt>Hydroizolace</dt>
            <dd>vždy pod obklad</dd>
          </div>
          <div>
            <dt>Termín</dt>
            <dd>drží se</dd>
          </div>
        </dl>
      </section>

      <section className="vv-sekce" id="postup" aria-labelledby="postup-h">
        <div className="vv-sekce-head">
          <p className="vv-eyebrow vv-eyebrow--dark">Jak to u vás proběhne</p>
          <h2 id="postup-h" className="vv-h2">
            Čtyři etapy od holé stěny k hotové koupelně
          </h2>
        </div>
        <ol className="vv-kroky">
          {kroky.map((k) => (
            <li key={k.c} className="vv-krok">
              <span className="vv-krok-c" aria-hidden="true">{k.c}</span>
              <h3 className="vv-krok-t">{k.t}</h3>
              <p className="vv-krok-d">{k.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="vv-sekce vv-sekce--dark" id="proc" aria-labelledby="proc-h">
        <div className="vv-sekce-head">
          <p className="vv-eyebrow vv-eyebrow--light">Proč zrovna my</p>
          <h2 id="proc-h" className="vv-h2">
            Koupelnu děláte jednou za dvacet let. Uděláme ji tak, aby vydržela.
          </h2>
        </div>
        <ul className="vv-duvody">
          {duvody.map((d) => (
            <li key={d.k} className="vv-duvod">
              <h3 className="vv-duvod-k">{d.k}</h3>
              <p className="vv-duvod-v">{d.v}</p>
            </li>
          ))}
        </ul>
        <div className="vv-firma">
          <p>
            <strong>VV Instal s.r.o.</strong> — Vodařská 143/13, Horní
            Heršpice, 619&nbsp;00 Brno
          </p>
          <p>Koupelny stavíme po celém Brně i v okolních obcích Jihomoravského kraje.</p>
        </div>
      </section>
    </main>
  )
}
