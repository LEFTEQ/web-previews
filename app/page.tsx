export const metadata = {
  title: "Tomáš Procházka — Psychoterapie Liberec",
  description:
    "Individuální psychoterapie v Liberci. Bezpečný prostor pro rozhovor o úzkosti, vztazích i životních změnách. Tomáš Procházka, ordinace v centru Liberce. První sezení do 14 dnů.",
};

const temata = [
  {
    nazev: "Úzkost a vnitřní napětí",
    text: "Když se hlava nezastaví, tělo je pořád ve střehu a odpočinek nepomáhá. Hledáme, co úzkost drží, a učíme se s ní zacházet — ne ji jen přehlušit.",
  },
  {
    nazev: "Vztahy a blízkost",
    text: "Opakující se konflikty s partnerem, rodiči nebo dětmi. Pocit, že jste v vztazích vždy tím, kdo dává. Rozplétáme vzorce, které jste si nevybrali.",
  },
  {
    nazev: "Vyčerpání a ztráta smyslu",
    text: "Práce, která dřív bavila, teď jen ubírá. Rána bez chuti vstát. Nemusí to být slabost — často je to signál, že něco důležitého dlouho přehlížíte.",
  },
  {
    nazev: "Životní změny a ztráty",
    text: "Rozchod, ztráta blízkého, nová role, nemoc. Období, kdy staré jistoty nefungují a nové ještě nejsou. Nemusíte jím procházet sami.",
  },
];

const prubeh = [
  {
    krok: "První e-mail nebo telefonát",
    text: "Napíšete pár vět o tom, co vás přivádí. Odpovídám do dvou pracovních dnů a domluvíme termín — první sezení nabízím zpravidla do 14 dnů.",
  },
  {
    krok: "Úvodní sezení, 50 minut",
    text: "Poznáme se. Vy zjistíte, jestli vám sedí můj způsob práce, já jestli vám mohu být užitečný. Nic nepodepisujete, k ničemu se nezavazujete.",
  },
  {
    krok: "Pravidelná setkání",
    text: "Obvykle jednou týdně, vždy ve stejný čas. Tempo i délku spolupráce určujete vy — někomu stačí pár měsíců, jiná témata potřebují víc času.",
  },
];

export default function Page() {
  return (
    <main className="tp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Tomáš Procházka, psychoterapie">
            <span className="wordmark-name">Tomáš Procházka</span>
            <span className="wordmark-sub">psychoterapie · Liberec</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Padesát minut,</span>
            <span className="hero-line hero-line-2">které patří</span>
            <span className="hero-line hero-line-3">jenom&nbsp;vám<span className="tecka">.</span></span>
          </h1>

          <p className="hero-lead">
            Individuální terapie pro dospělé v&nbsp;centru Liberce. Klidná místnost,
            dvě křesla a&nbsp;rozhovor bez hodnocení — o&nbsp;úzkosti, vztazích,
            vyčerpání i&nbsp;o&nbsp;tom, co se zatím nedá pojmenovat.
          </p>

          <div className="hero-cta">
            <a className="btn btn-plna" href="#prubeh">Domluvit první sezení</a>
            <a className="btn btn-tichy" href="#temata">S čím pomáhám</a>
          </div>

          <p className="hero-fakta">
            50 minut · 1&nbsp;100&nbsp;Kč · také online · první termín do&nbsp;14&nbsp;dnů
          </p>
        </div>

        {/* Signature: dvě křesla naproti sobě — abstrahovaný půdorys terapeutické místnosti */}
        <div className="kresla" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="kresla-svg" role="presentation" focusable="false">
            {/* soustředné dechové kruhy */}
            <circle cx="200" cy="200" r="190" className="dech dech-1" />
            <circle cx="200" cy="200" r="140" className="dech dech-2" />
            <circle cx="200" cy="200" r="90" className="dech dech-3" />
            {/* dvě křesla — půdorys */}
            <g className="kreslo kreslo-a">
              <path d="M96 168 a44 44 0 0 1 0 64" />
              <circle cx="112" cy="200" r="22" />
            </g>
            <g className="kreslo kreslo-b">
              <path d="M304 232 a44 44 0 0 1 0 -64" />
              <circle cx="288" cy="200" r="22" />
            </g>
            {/* linka rozhovoru mezi nimi */}
            <path d="M148 200 C 172 184, 228 216, 252 200" className="linka-rozhovoru" />
          </svg>
        </div>
      </header>

      {/* ===== TÉMATA ===== */}
      <section className="sekce temata" id="temata" aria-labelledby="temata-h">
        <div className="sekce-inner">
          <p className="eyebrow">S čím lidé přicházejí</p>
          <h2 id="temata-h" className="sekce-title">
            Nemusíte mít diagnózu.<br />Stačí, že je vám těžko.
          </h2>
          <p className="sekce-lead">
            Většina lidí, kteří ke mně chodí, dlouho „fungovala“. Terapie není
            přiznání selhání — je to místo, kde se dá zastavit a&nbsp;podívat se,
            co se vlastně děje.
          </p>

          <div className="temata-grid">
            {temata.map((t) => (
              <article className="tema" key={t.nazev}>
                <h3 className="tema-nazev">{t.nazev}</h3>
                <p className="tema-text">{t.text}</p>
              </article>
            ))}
          </div>

          <p className="temata-pozn">
            Pracuji také online — pokud dojíždíte, jste s&nbsp;malými dětmi doma,
            nebo je pro vás videohovor jednodušší první krok.
          </p>
        </div>
      </section>

      {/* ===== PRŮBĚH + DŮVĚRA ===== */}
      <section className="sekce prubeh" id="prubeh" aria-labelledby="prubeh-h">
        <div className="sekce-inner">
          <div className="prubeh-layout">
            <div className="prubeh-kroky">
              <p className="eyebrow eyebrow-svetly">Jak to probíhá</p>
              <h2 id="prubeh-h" className="sekce-title sekce-title-svetly">
                Od prvního e-mailu k&nbsp;prvnímu sezení
              </h2>

              <ol className="kroky">
                {prubeh.map((k, i) => (
                  <li className="krok" key={k.krok}>
                    <span className="krok-cislo" aria-hidden="true">{i + 1}</span>
                    <div className="krok-obsah">
                      <h3 className="krok-nazev">{k.krok}</h3>
                      <p className="krok-text">{k.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="o-mne">
              <h3 className="o-mne-title">Kdo sedí v druhém křesle</h3>
              <p className="o-mne-text">
                Jsem Tomáš Procházka, psychoterapeut s&nbsp;výcvikem
                v&nbsp;gestalt terapii a&nbsp;více než deseti lety praxe.
                Pracuji pod pravidelnou supervizí a&nbsp;řídím se etickým
                kodexem České asociace pro psychoterapii.
              </p>
              <p className="o-mne-text">
                Ordinaci najdete pět minut pěšky od&nbsp;liberecké radnice.
                Vše, co v&nbsp;ní zazní, zůstává mezi námi — mlčenlivost
                je základ, ne bonus.
              </p>

              <dl className="o-mne-fakta">
                <div className="fakt">
                  <dt>Sezení</dt>
                  <dd>50 minut, osobně nebo online</dd>
                </div>
                <div className="fakt">
                  <dt>Cena</dt>
                  <dd>1&nbsp;100&nbsp;Kč, platba po sezení</dd>
                </div>
                <div className="fakt">
                  <dt>Kde</dt>
                  <dd>centrum Liberce, u&nbsp;radnice</dd>
                </div>
                <div className="fakt">
                  <dt>Termíny</dt>
                  <dd>po–čt, včetně podvečerů</dd>
                </div>
              </dl>

              <blockquote className="reference">
                <p>
                  „Bál jsem se, že budu muset hned mluvit o&nbsp;dětství.
                  Místo toho jsme začali tím, co mě tížilo ten týden.
                  Po půl roce spím a&nbsp;neděsí mě neděle večer.“
                </p>
                <footer className="reference-autor">— klient, 34 let, po roce spolupráce</footer>
              </blockquote>
            </aside>
          </div>
        </div>
      </section>

      {/* Lepivé mobilní CTA */}
      <a className="mobil-cta" href="#prubeh">Domluvit první sezení</a>
    </main>
  );
}
