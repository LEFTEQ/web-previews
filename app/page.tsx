import type { CSSProperties } from 'react';

export default function Page() {
  const spotrebice = [
    { c: 'Pračky', d: 'Netočí, neodčerpává, hlučí nebo neohřívá vodu.' },
    { c: 'Myčky', d: 'Nedomývá, nenapouští nebo hlásí chybový kód.' },
    { c: 'Sušičky', d: 'Nesuší, neběží program nebo zůstává vlhké prádlo.' },
    { c: 'Sporáky', d: 'Elektrické i plynové — plotýnky, zapalování, termostat.' },
    { c: 'Pečicí trouby', d: 'Netopí, nehlídá teplotu nebo nefunguje program.' },
    { c: 'Varné desky', d: 'Indukce i sklokeramika — zóny, spínání, ovládání.' },
    { c: 'Digestoře', d: 'Slabý tah, hluk motoru nebo vadné osvětlení.' },
    { c: 'Prodej spotřebičů', d: 'Nové i zánovní kusy včetně zapojení technikem.' },
  ];

  const kroky = [
    { n: '01', t: 'Zavoláte nám', d: 'Popíšete závadu a značku. Domluvíme termín na nejbližší možný den.' },
    { n: '02', t: 'Přijedeme k vám', d: 'Technik dorazí domů po celé Praze i do Středních Čech. Opravu řešíme na místě.' },
    { n: '03', t: 'Diagnostika a oprava', o: 'U pozáručních oprav vám technik rovnou řekne, jestli se oprava vyplatí.', d: 'Díky vlastnímu skladu náhradních dílů málokdy něco objednáváme — spravíme hned.' },
  ];

  const reference = [
    { text: 'S opravou pračky jsem byl velice spokojený. Bydlím v menším městě kus za Prahou a sehnat autorizovaný servis pračky zde není jednoduché.', by: 'František H.' },
    { text: 'Po diagnostice závady mé myčky technikem jsem se rozhodl starou myčku neopravovat a na jeho doporučení zakoupil zánovní myčku AEG.', by: 'Robert D.' },
    { text: 'Jelikož bydlím na Praze 4, rozhodla jsem se využít služeb HB servisu. Díky tomu jsem ušetřila za cestovné opraváře a pračka opět funguje. Děkuji.', by: 'Milena T.' },
  ];

  const znacky = ['Beko', 'Blomberg', 'Malber', 'Electrolux', 'AEG', 'Zanussi'];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="HB Servis Praha, domovská stránka">
          <span className="wordmark__hb">HB</span>
          <span className="wordmark__rest">
            <span className="wordmark__name">Servis Praha</span>
            <span className="wordmark__sub">opravy spotřebičů od roku 1990</span>
          </span>
        </a>
        <a className="topbar__call" href="tel:+420774430623">
          <span className="topbar__dot" aria-hidden="true" />
          774 43 06 23
        </a>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Praha 4 · Schulhoffova · po celé Praze a Středních Čechách</p>
            <h1 className="hero__title">
              Doma vám<br />
              <span className="hero__accent">dosloužila</span> pračka?
            </h1>
            <p className="hero__lead">
              Přijedeme k vám, najdeme závadu a spravíme ji na místě. Pračky, myčky,
              sušičky, sporáky i trouby — se servisem spotřebičů to umíme od roku 1990.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420774430623">Zavolat 774 43 06 23</a>
              <a className="btn btn--ghost" href="#sluzby">Co opravujeme</a>
            </div>
            <dl className="hero__facts">
              <div><dt>Od roku</dt><dd>1990</dd></div>
              <div><dt>Díly</dt><dd>vlastní sklad</dd></div>
              <div><dt>Oprava</dt><dd>u vás doma</dd></div>
            </dl>
          </div>
          <figure className="hero__media">
            <img src="/hero.webp" alt="Servisní technik HB Servis Praha při opravě domácího spotřebiče" className="hero__img" loading="eager" />
            <figcaption className="hero__badge">Záruční i pozáruční servis</figcaption>
          </figure>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Naše dílna</p>
          <h2 id="sluzby-h" className="section__title">Co vám spravíme</h2>
          <p className="section__intro">
            Volně stojící i vestavěné spotřebiče. Většinu závad vyřešíme přímo u vás doma,
            a když si oprava žádá dílnu, spotřebič odvezeme a zase přivezeme.
          </p>
        </div>

        <ul className="tiles">
          {spotrebice.map((s, i) => (
            <li className="tile" key={s.c} style={{ ['--i' as keyof CSSProperties]: i } as CSSProperties}>
              <span className="tile__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="tile__title">{s.c}</h3>
              <p className="tile__desc">{s.d}</p>
            </li>
          ))}
        </ul>

        <div className="process">
          <div className="process__head">
            <h3 className="process__title">Jak oprava probíhá</h3>
            <p className="process__note">Bez formulářů a čekání — stačí zvednout telefon.</p>
          </div>
          <ol className="steps">
            {kroky.map((k) => (
              <li className="step" key={k.n}>
                <span className="step__num">{k.n}</span>
                <div className="step__body">
                  <h4 className="step__title">{k.t}</h4>
                  <p className="step__desc">{k.d}</p>
                  {k.o && <p className="step__hint">{k.o}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="onas" aria-labelledby="onas-h">
        <div className="onas__grid">
          <figure className="onas__media">
            <img src="/section-1.webp" alt="Vlastní sklad náhradních dílů HB Servis Praha" className="onas__img" loading="lazy" />
          </figure>
          <div className="onas__text">
            <p className="eyebrow eyebrow--dark">Kdo jsme</p>
            <h2 id="onas-h" className="section__title">Rodinná dílna, ne kolotoč call centra</h2>
            <p className="onas__lead">
              Jsme tým techniků s dlouholetou praxí. Jako smluvní partneři značek
              <strong> Beko</strong>, <strong> Blomberg</strong> a <strong> Malber</strong> zajišťujeme
              záruční servis; pozáruční opravy děláme i pro Electrolux, AEG a Zanussi. Díky tomu,
              že nejsme jednotlivec, vám nabídneme opravdu příznivé termíny.
            </p>
            <div className="onas__points">
              <div className="point">
                <h4>Vlastní sklad dílů</h4>
                <p>Rozsáhlý sortiment náhradních dílů znamená, že jen zřídka musíme něco objednávat.</p>
              </div>
              <div className="point">
                <h4>Poctivá diagnostika</h4>
                <p>U pozáruční opravy vám rovnou řekneme, jestli se vyplatí, nebo je lepší koupit nový kus.</p>
              </div>
            </div>
            <div className="znacky">
              <span className="znacky__label">Servisujeme značky</span>
              <ul className="znacky__list">
                {znacky.map((z) => <li key={z}>{z}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="reference__head">
            <h3 className="reference__title">Co říkají zákazníci</h3>
            <img src="/section-2.webp" alt="Opravený spotřebič po servisu HB Servis Praha" className="reference__img" loading="lazy" />
          </div>
          <ul className="quotes">
            {reference.map((r) => (
              <li className="quote" key={r.by}>
                <p className="quote__text">{r.text}</p>
                <p className="quote__by">{r.by}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
