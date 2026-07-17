export default function Page() {
  return (
    <main className="k-page">
      {/* ---------------- HERO: powder-coated enclosure, powers up ---------------- */}
      <header className="k-hero">
        <div className="k-topbar">
          <a className="k-wordmark" href="#top" aria-label="KOMEL CZ">
            <span className="k-wordmark__k">KOMEL</span>
            <span className="k-wordmark__cz">CZ</span>
          </a>
          <nav className="k-lang" aria-label="Jazyk">
            <button type="button" className="k-lang__opt is-active" aria-current="true">CZ</button>
            <button type="button" className="k-lang__opt">EN</button>
            <button type="button" className="k-lang__opt">RU</button>
          </nav>
        </div>

        <div className="k-hero__inner" id="top">
          <p className="k-eyebrow">Pardubice&nbsp;· revize elektro&nbsp;· výroba rozváděčů&nbsp;· od 1990</p>

          <h1 className="k-hero__title">
            Revize, se&nbsp;kterou
            <br />
            projde&nbsp;<span className="k-hero__hl">i&nbsp;přísná</span>
            <br />
            kontrola.
          </h1>

          {/* the busbar rail: draws in, then a PE pulse energizes it */}
          <div className="k-rail k-rail--hero" aria-hidden="true">
            <div className="k-rail__phase">
              <span className="k-rail__ph-lbl">L1</span>
              <span className="k-rail__line" style={{ animationDelay: "0.15s" }} />
              <span className="k-rail__term" style={{ animationDelay: "1.05s" }} />
            </div>
            <div className="k-rail__phase">
              <span className="k-rail__ph-lbl">L2</span>
              <span className="k-rail__line" style={{ animationDelay: "0.3s" }} />
              <span className="k-rail__pulse" />
              <span className="k-rail__term" style={{ animationDelay: "1.15s" }} />
            </div>
            <div className="k-rail__phase">
              <span className="k-rail__ph-lbl">L3</span>
              <span className="k-rail__line" style={{ animationDelay: "0.45s" }} />
              <span className="k-rail__term" style={{ animationDelay: "1.25s" }} />
            </div>
          </div>

          <p className="k-hero__lead">
            Výchozí i&nbsp;pravidelné revize elektroinstalací, hromosvodů, spotřebičů
            a&nbsp;rozváděčů nízkého napětí. Přijedeme, změříme, najdeme závady dřív
            než revizor pojišťovny — a&nbsp;vystavíme revizní zprávu, která platí.
          </p>

          <ul className="k-hero__spec" aria-label="Parametry">
            <li><span className="k-hero__spec-k">Norma</span> ČSN 33 2000 · ISO 9001</li>
            <li><span className="k-hero__spec-k">Působnost</span> Pardubický kraj + celá ČR</li>
            <li><span className="k-hero__spec-k">Zpráva do</span> 5 pracovních dnů</li>
          </ul>
        </div>
      </header>

      {/* ---------------- MODUL 01 — Služby ---------------- */}
      <section className="k-band k-band--panel" aria-labelledby="sluzby-h">
        <RailDivider label="Modul 01 · Služby" />
        <div className="k-band__inner">
          <div className="k-tab">
            <span className="k-tab__clip" aria-hidden="true" />
            <span className="k-tab__id">M-01</span>
            <h2 id="sluzby-h" className="k-band__title">Co u&nbsp;vás oživíme a&nbsp;přeměříme</h2>
          </div>

          <p className="k-band__intro">
            Od bytového jističe po velín výrobní haly. Každou zakázku vedeme jako
            samostatný okruh — s&nbsp;protokolem měření, fotodokumentací a&nbsp;jasným
            verdiktem: <strong>schopno provozu</strong>, nebo <strong>oprav před uvedením</strong>.
          </p>

          <div className="k-grid">
            <article className="k-mod">
              <span className="k-mod__node k-node--scroll" aria-hidden="true" />
              <p className="k-mod__code">REV·EI</p>
              <h3 className="k-mod__h">Revize elektroinstalací</h3>
              <p className="k-mod__p">Výchozí revize nových rozvodů i&nbsp;pravidelné kontroly bytů, provozoven a&nbsp;hal. Měření izolačních odporů, impedance smyčky, proudových chráničů.</p>
            </article>

            <article className="k-mod">
              <span className="k-mod__node k-node--scroll" aria-hidden="true" />
              <p className="k-mod__code">REV·LPS</p>
              <h3 className="k-mod__h">Revize hromosvodů</h3>
              <p className="k-mod__p">Kontrola systémů ochrany před bleskem (LPS) i&nbsp;přepěťových ochran. Změříme zemní odpor a&nbsp;spojitost svodů, doporučíme opravy.</p>
            </article>

            <article className="k-mod">
              <span className="k-mod__node k-node--scroll" aria-hidden="true" />
              <p className="k-mod__code">REV·SP</p>
              <h3 className="k-mod__h">Revize spotřebičů a&nbsp;nářadí</h3>
              <p className="k-mod__p">Elektrické spotřebiče, prodlužovačky a&nbsp;ruční nářadí na pracovišti podle ČSN 33 1600. Označení štítkem s&nbsp;datem příští revize.</p>
            </article>

            <article className="k-mod k-mod--live">
              <span className="k-mod__node k-node--scroll" aria-hidden="true" />
              <p className="k-mod__code">REV·RZ</p>
              <h3 className="k-mod__h">Revize rozváděčů nn</h3>
              <p className="k-mod__p">Naše domácí disciplína. Prohlídka přípojnic, dotažení spojů, termografie a&nbsp;kontrola PE/PEN. Živé části bereme vážně.</p>
              <span className="k-mod__warn">Živá část&nbsp;— PE zapojen</span>
            </article>

            <article className="k-mod k-mod--wide">
              <span className="k-mod__node k-node--scroll" aria-hidden="true" />
              <p className="k-mod__code">VYR·RZ</p>
              <h3 className="k-mod__h">Výroba rozváděčů nízkého napětí</h3>
              <p className="k-mod__p">Sami stavíme to, co jinde revidujeme. Rozváděče nn na míru — od jednotlivé skříně po sériové dodávky s&nbsp;přípojnicovým systémem, testované a&nbsp;odzkoušené před expedicí do celé EU.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------- MODUL 02 — Proč Komel ---------------- */}
      <section className="k-band k-band--steel" aria-labelledby="onas-h">
        <RailDivider label="Modul 02 · Proč my" />
        <div className="k-band__inner">
          <div className="k-tab k-tab--dark">
            <span className="k-tab__clip" aria-hidden="true" />
            <span className="k-tab__id">M-02</span>
            <h2 id="onas-h" className="k-band__title">Od garáže v&nbsp;roce 1990 k&nbsp;přípojnici, které věříte</h2>
          </div>

          <p className="k-band__intro k-band__intro--light">
            Komel začal jako jeden člověk, jedna garáž a&nbsp;jeden zákazník v&nbsp;regionu.
            Dobré jméno jsme si stavěli po jedné zakázce — dnes jsme jedním z&nbsp;předních
            českých výrobců rozváděčů nn a&nbsp;revizní firmou, na kterou se správci budov
            v&nbsp;Pardubicích spolehnou.
          </p>

          <dl className="k-facts">
            <div className="k-fact">
              <dt className="k-fact__k">Praxe</dt>
              <dd className="k-fact__v">1990</dd>
              <p className="k-fact__note">rok založení — přes tři dekády v&nbsp;oboru</p>
            </div>
            <div className="k-fact">
              <dt className="k-fact__k">Systém kvality</dt>
              <dd className="k-fact__v">ISO&nbsp;9001</dd>
              <p className="k-fact__note">řízení výroby i&nbsp;služeb podle certifikované normy</p>
            </div>
            <div className="k-fact">
              <dt className="k-fact__k">Dosah dodávek</dt>
              <dd className="k-fact__v">ČR&nbsp;+&nbsp;EU</dd>
              <p className="k-fact__note">a&nbsp;dál do Celní unie i&nbsp;mimo ni</p>
            </div>
          </dl>

          <blockquote className="k-quote">
            <p>„Revizní zprávu od&nbsp;Komelu si pojišťovna nikdy nevyžádala dvakrát. Přijedou,
            proměří velín, dotáhnou spoje na rozváděči a&nbsp;odjedou s&nbsp;protokolem, kterému
            rozumí i&nbsp;účetní.“</p>
            <footer className="k-quote__by">— provozní technik, potravinářský závod, Pardubicko</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

function RailDivider({ label }: { label: string }) {
  return (
    <div className="k-divider" aria-hidden="true">
      <span className="k-divider__label">{label}</span>
      <div className="k-divider__rail">
        <span className="k-divider__line" />
        <span className="k-divider__line" />
        <span className="k-divider__line" />
        <span className="k-divider__node k-node--scroll" />
      </div>
    </div>
  );
}
