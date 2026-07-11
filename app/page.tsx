import type { CSSProperties } from "react";

export default function Page() {
  const languages = [
    { code: "EN", name: "Angli\u010Dtina", note: "od za\u010D\u00E1te\u010Dn\u00EDk\u016F po Cambridge zkou\u0161ky" },
    { code: "DE", name: "N\u011Bm\u010Dina", note: "konverzace i pr\u00E1vnick\u00E1 terminologie" },
    { code: "ES", name: "\u0160pan\u011Bl\u0161tina", note: "rodil\u00ED mluv\u010D\u00ED z Madridu i Latinsk\u00E9 Ameriky" },
    { code: "FR", name: "Francouz\u0161tina", note: "pro cestovatele i pro DELF" },
    { code: "IT", name: "Ital\u0161tina", note: "\u017Eiv\u011B v ateli\u00E9ru na Horn\u00EDm n\u00E1m\u011Bst\u00ED" },
    { code: "CZ", name: "\u010Ce\u0161tina pro cizince", note: "v\u010Detn\u011B p\u0159\u00EDpravy na trvalý pobyt" },
  ];

  const courses = [
    {
      no: "01",
      title: "Skupinov\u00E9 kurzy",
      desc: "Mal\u00E9 skupiny do \u0161esti lid\u00ED, dvakr\u00E1t t\u00FDdn\u011B v podve\u010Der. Za\u010D\u00EDnaj\u00ED v z\u00E1\u0159\u00ED a v \u00FAnoru, semestr trv\u00E1 patn\u00E1ct t\u00FDdn\u016F.",
      meta: "od 3\u00A0290 K\u010D / semestr",
    },
    {
      no: "02",
      title: "Individu\u00E1ln\u00ED v\u00FDuka",
      desc: "Lektor jen pro v\u00E1s, tempo i téma podle vás. Vhodn\u00E9 na pohovor, st\u011Bhov\u00E1n\u00ED do zahrani\u010D\u00ED nebo dohn\u00E1n\u00ED l\u00E1tky.",
      meta: "od 490 K\u010D / lekce",
    },
    {
      no: "03",
      title: "Firemn\u00ED jazykov\u00E9 vzd\u011Bl\u00E1v\u00E1n\u00ED",
      desc: "P\u0159ijedeme k v\u00E1m do firmy v Olomouci i okol\u00ED. Vstupn\u00ED test, ro\u010Dn\u00ED pl\u00E1n a m\u011B\u0159iteln\u00FD posun.",
      meta: "kalkulace na m\u00EDru",
    },
    {
      no: "04",
      title: "P\u0159\u00EDprava na zkou\u0161ky",
      desc: "Cambridge, Goethe-Zertifikat, DELF i maturita. Zkou\u0161kové form\u00E1ty tr\u00E9nujeme na\u010Distoto.",
      meta: "intenzivn\u00ED bloky",
    },
  ];

  return (
    <main className="us">
      <header className="us-topbar">
        <a href="#obsah" className="us-skip">P\u0159eskočit na obsah</a>
        <span className="us-wordmark" aria-label="UniStudies">
          Uni<span className="us-wordmark-accent">Studies</span>
        </span>
        <nav className="us-nav" aria-label="Hlavn\u00ED">
          <a href="#kurzy">Kurzy</a>
          <a href="#jazyky">Jazyky</a>
          <a href="#duvera">O \u0161kole</a>
        </nav>
      </header>

      <section className="us-hero" id="obsah">
        <div className="us-hero-media">
          <img
            src="/hero.webp"
            alt="V\u00FDuka v jazykov\u00E9 \u0161kole UniStudies v Olomouci"
            className="us-hero-img"
          />
        </div>
        <div className="us-hero-text">
          <p className="us-eyebrow">Jazykov\u00E1 \u0161kola v Olomouci &middot; od roku 2003</p>
          <h1 className="us-hero-title">
            Nau\u010D\u00EDme v\u00E1s mluvit
            <span className="us-hero-line">tak, aby v\u00E1m rozum\u011Bli.</span>
          </h1>
          <p className="us-hero-lead">
            Mal\u00E9 skupiny, rodil\u00ED mluv\u010D\u00ED a lekto\u0159i, kte\u0159\u00ED u n\u00E1s u\u010D\u00ED
            l\u00E9ta. \u0160est jazyk\u016F, jedno m\u00EDsto &mdash; kousek od Horn\u00EDho n\u00E1m\u011Bst\u00ED.
          </p>
          <div className="us-hero-actions">
            <a href="#kurzy" className="us-btn us-btn-primary">Vybrat kurz</a>
            <a href="#duvera" className="us-btn us-btn-ghost">Uk\u00E1zkov\u00E1 lekce zdarma</a>
          </div>
          <dl className="us-hero-facts">
            <div><dt>6</dt><dd>vyu\u010Dovan\u00FDch jazyk\u016F</dd></div>
            <div><dt>21</dt><dd>let na Horn\u00EDm n\u00E1m\u011Bst\u00ED</dd></div>
            <div><dt>do 6</dt><dd>studentů ve skupin\u011B</dd></div>
          </dl>
        </div>
      </section>

      <section className="us-langs" id="jazyky" aria-labelledby="jazyky-nadpis">
        <h2 id="jazyky-nadpis" className="us-sr-only">Jazyky, kter\u00E9 u\u010D\u00EDme</h2>
        <ul className="us-lang-strip">
          {languages.map((l) => (
            <li key={l.code} className="us-lang">
              <span className="us-lang-code">{l.code}</span>
              <span className="us-lang-name">{l.name}</span>
              <span className="us-lang-note">{l.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="us-courses" id="kurzy" aria-labelledby="kurzy-nadpis">
        <div className="us-courses-head">
          <p className="us-eyebrow">Nab\u00EDdka</p>
          <h2 id="kurzy-nadpis" className="us-h2">
            \u010Ty\u0159i cesty, jak se posunout d\u00E1l
          </h2>
          <p className="us-section-lead">
            A\u0165 za\u010D\u00EDn\u00E1te od nuly, nebo dohán\u00EDte konkr\u00E9tn\u00ED zkou\u0161ku,
            vybereme v\u00E1m form\u00E1t, kter\u00FD sedne va\u0161emu \u010Dasu i c\u00EDli.
          </p>
        </div>
        <ol className="us-course-grid">
          {courses.map((c) => (
            <li key={c.no} className="us-course">
              <span className="us-course-no">{c.no}</span>
              <h3 className="us-course-title">{c.title}</h3>
              <p className="us-course-desc">{c.desc}</p>
              <span className="us-course-meta">{c.meta}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="us-trust" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="us-trust-media">
          <img
            src="/section-1.webp"
            alt="Lekto\u0159i UniStudies p\u0159i konverza\u010Dn\u00ED hodin\u011B"
            className="us-trust-img"
          />
        </div>
        <div className="us-trust-text">
          <p className="us-eyebrow">Pro\u010D pr\u00E1v\u011B my</p>
          <h2 id="duvera-nadpis" className="us-h2">
            U\u010D\u00EDme v Olomouci od roku 2003.
          </h2>
          <p className="us-section-lead">
            Za tu dobu pro\u0161ly na\u0161imi kurzy stovky student\u016F &mdash; od gymnazist\u016F
            p\u0159ed maturitou po fir\u0079 na Holick\u00E9. Ka\u017Ed\u00FD lektor u n\u00E1s u\u010D\u00ED
            napl\u0079no, ne p\u0159i\u010Desan\u011B mezi jin\u00FDmi pracemi.
          </p>
          <ul className="us-trust-list">
            <li>
              <strong>Rodil\u00ED mluv\u010D\u00ED i \u010De\u0161t\u00ED lekto\u0159i</strong>
              <span>Gramatiku vysv\u011Btl\u00ED \u010Desky, mluven\u00ED tren\u00E9rujete s rodil\u00FDm mluv\u010D\u00EDm.</span>
            </li>
            <li>
              <strong>V centru, p\u011B\u0161ky od zast\u00E1vky</strong>
              <span>U\u010D\u00EDme kousek od Horn\u00EDho n\u00E1m\u011Bst\u00ED, tramvaj i parkovi\u0161t\u011B na dosah.</span>
            </li>
            <li>
              <strong>Vstupn\u00ED test zdarma</strong>
              <span>Nejd\u0159\u00EDv zjist\u00EDme, kde jste, a\u017E pak doporu\u010D\u00EDme kurz.</span>
            </li>
          </ul>
          <figure className="us-quote">
            <blockquote>
              &bdquo;Za rok jsem z &lsquo;dobr\u00FD den&rsquo; do\u0161la k pohovoru
              cel\u00E9mu v n\u011Bm\u010Din\u011B. A zvládla ho.&ldquo;
            </blockquote>
            <figcaption>Kate\u0159ina H. &middot; kurz n\u011Bm\u010Diny B1</figcaption>
          </figure>
          <img
            src="/section-2.webp"
            alt="U\u010Debna jazykov\u00E9 \u0161koly UniStudies"
            className="us-trust-img-2"
          />
        </div>
      </section>
    </main>
  );
}
