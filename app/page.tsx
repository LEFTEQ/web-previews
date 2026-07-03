export default function Page() {
  return (
    <main className="ndc">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="na dobré cestě — hospoda v Brně">
        <header className="hero-top">
          <span className="wordmark">
            na dobré<span className="wordmark-arrow" aria-hidden="true">→</span>cestě
          </span>
          <a className="hero-call" href="tel:+420722364823">
            <span className="hero-call-dot" aria-hidden="true"></span>
            722 364 823
          </a>
        </header>

        <div className="hero-main">
          <p className="hero-eyebrow">Hospoda · Sokolská 4 · Brno</p>
          <h1 className="hero-title">
            <span className="line line-1">pivo</span>
            <span className="line line-2">
              <span className="tap" aria-hidden="true"></span>lidi
            </span>
            <span className="line line-3">my</span>
          </h1>
          <p className="hero-sub">
            Vyklidněná cajkovka kousek od centra. Řádně natočená pivа, jídlo,
            zahrádka a parta, co si vás bude pamatovat jménem.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420722364823">Zavolat a rezervovat</a>
            <a className="btn btn-line" href="https://maps.google.com/?q=Sokolsk%C3%A1+364%2F4+Brno" rel="noopener">Trefit k nám</a>
          </div>
        </div>

        {/* pípa — pěnová linka */}
        <div className="foam" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" focusable="false">
            <path d="M0,60 C120,20 240,80 360,50 C480,20 600,75 720,45 C840,15 960,70 1080,40 C1200,15 1320,65 1440,35 L1440,90 L0,90 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="hero-hours" aria-label="Otvírací doba">
          <span className="hours-label">Otvíračka</span>
          <span className="hours-time">každý den 16:00–23:00</span>
          <span className="hours-note">svátky taky · výjimky najdete na Googlu</span>
        </div>
      </section>

      {/* ===== SEKCE: CO U NÁS TEČE A JÍ SE ===== */}
      <section className="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Co u nás teče a jí se</p>
          <h2 id="nabidka-h">Pípa jede od čtyř,<br />kuchyň hned za ní</h2>
        </div>

        <div className="tacky">
          <article className="tacek">
            <div className="tacek-kruh" aria-hidden="true">
              <span className="tacek-obsah">0,5&nbsp;l</span>
            </div>
            <h3>Pivo, jak má být</h3>
            <p>
              Točíme pořádně vychlazené a s pěnou, za kterou se nemusíme stydět.
              Hladinka, šnyt nebo mlíko — sklenice je vaše volba, ne naše nálada.
            </p>
          </article>

          <article className="tacek">
            <div className="tacek-kruh" aria-hidden="true">
              <span className="tacek-obsah">k pivu</span>
            </div>
            <h3>Jídlo bez cirkusu</h3>
            <p>
              Poctivá hospodská kuchyně — nic nadesignovaného, prostě jídlo,
              které k pivu sedí. Co je zrovna na tabuli, to je čerstvé.
            </p>
          </article>

          <article className="tacek">
            <div className="tacek-kruh" aria-hidden="true">
              <span className="tacek-obsah">venku</span>
            </div>
            <h3>Zahrádka bez rezervace</h3>
            <p>
              Když je hezky, sedí se venku. Zahrádka funguje bez rezervací —
              prostě přijďte, sedněte si a mávněte na obsluhu.
            </p>
          </article>
        </div>

        <div className="rezervace" role="note">
          <h3 className="rezervace-title">Rezervace? Jednoduše:</h3>
          <ul className="rezervace-list">
            <li><strong>Volejte od 15:00</strong> na <a href="tel:+420722364823">722 364 823</a></li>
            <li>Rezervace bereme <strong>nejpozději na 19:00</strong></li>
            <li>Minimální délka rezervace jsou <strong>tři hodiny</strong> — u nás se nesedí na otočku</li>
            <li>Platební terminál máme, hotovost bereme taky</li>
          </ul>
        </div>
      </section>

      {/* ===== SEKCE: KDO ZA PÍPOU STOJÍ ===== */}
      <section className="parta" aria-labelledby="parta-h">
        <div className="section-head section-head-light">
          <p className="eyebrow">Kdo za pípou stojí</p>
          <h2 id="parta-h">Hospodu nedělají židle.<br />Dělají ji lidi.</h2>
        </div>

        <p className="parta-intro">
          Jsme malá parta, která chtěla hospodu, kam by sama ráda chodila.
          Žádný koncept z manuálu — jen Sokolská 4, dobře natočené pivo
          a lidi, co se k vám za pípou chovají jako doma.
        </p>

        <ul className="jmena" aria-label="Naše parta">
          <li>Bertička</li>
          <li>Čtverda</li>
          <li>Hanička</li>
          <li>Janča</li>
          <li>Kamča</li>
          <li>Martin</li>
          <li>Marťa</li>
          <li>Maťka</li>
          <li>Míra</li>
          <li>Pan&nbsp;Mezcal</li>
          <li>Tomáš</li>
        </ul>

        <div className="parta-fakta">
          <div className="fakt">
            <span className="fakt-cislo">16:00</span>
            <span className="fakt-text">otvíráme každý den, svátky nevyjímaje</span>
          </div>
          <div className="fakt">
            <span className="fakt-cislo">Sokolská 4</span>
            <span className="fakt-text">pár minut pěšky od centra Brna</span>
          </div>
          <div className="fakt">
            <span className="fakt-cislo">3 hodiny</span>
            <span className="fakt-text">minimální rezervace — sedí se u nás dlouho a rádo</span>
          </div>
        </div>
      </section>

      {/* mobilní lišta se zavoláním */}
      <a className="call-bar" href="tel:+420722364823">
        Zavolat hospodě — 722 364 823
      </a>
    </main>
  );
}
