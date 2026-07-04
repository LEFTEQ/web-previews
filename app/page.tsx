import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      kod: "08\u201319 mm",
      nazev: "Podlahov\u00e9 a obkladov\u00e9 palubky",
      popis:
        "Pero-dr\u00e1\u017eka ve smrku i borovici, \u0161\u00ed\u0159e 96 a\u017e 146 mm, d\u00e9lka do 5 metr\u016f. Skladem klasik s kr\u00e1tk\u00fdm p\u00e9rem i softline s dlouh\u00fdm.",
      detail: "na st\u011bny, stropy i podlahy",
    },
    {
      kod: "D",
      nazev: "Fas\u00e1dn\u00ed palubky",
      popis:
        "Srubov\u00fd profil (D profil) na obklad vn\u011bj\u0161\u00edch st\u011bn. Dr\u017e\u00ed po\u010das\u00ed a \u010das.",
      detail: "venkovn\u00ed obklad",
    },
    {
      kod: "8\u201310 %",
      nazev: "Truhl\u00e1\u0159sk\u00e9 \u0159ezivo",
      popis:
        "Su\u0161eno na 8 a\u017e 10 % vlhkosti \u2014 smrk, borovice, mod\u0159\u00edn, dub, buk, jasan, javor, ol\u0161e, b\u0159\u00edza. R\u016fzn\u00e9 tlou\u0161\u0165ky.",
      detail: "komorov\u00e9 su\u0161en\u00ed",
    },
    {
      kod: "3\u00d75",
      nazev: "Stavebn\u00ed \u0159ezivo a lat\u011b",
      popis:
        "Impregnovan\u00e9 i syrov\u00e9 lat\u011b, prkna, hranoly, su\u0161en\u00e9 hoblovan\u00e9 KVH a OSB desky P+D 675\u00d72500 mm v s\u00edle 12 a\u017e 25 mm.",
      detail: "pro stavbu",
    },
    {
      kod: "25/33",
      nazev: "\u0160t\u00edpan\u00e9 palivov\u00e9 d\u0159evo",
      popis:
        "Jehli\u010dnat\u00e9 i listnat\u00e9, v d\u00e9lk\u00e1ch 25 a 33 cm. Na objedn\u00e1vku i 40, 50 cm nebo jin\u00e9 m\u00edry.",
      detail: "do kamen i krbu",
    },
    {
      kod: "4\u00d7",
      nazev: "Plotovky",
      popis:
        "Su\u0161en\u00e1 \u010dty\u0159strann\u011b hoblovan\u00e1 prkna na ploty, pergoly i vrata. Smrk a borovice.",
      detail: "ploty a pergoly",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="brand" href="#" aria-label="Truhl\u00e1\u0159stv\u00ed Domino, dom\u016f">
          <span className="brand-mark" aria-hidden="true">
            <span className="pip pip-1" />
            <span className="pip pip-2" />
          </span>
          <span className="brand-word">
            <span className="brand-name">DOMINO</span>
            <span className="brand-sub">truhl\u00e1\u0159stv\u00ed &middot; Plze\u0148</span>
          </span>
        </a>
        <a className="nav-cta" href="tel:+420">Zavolat do prodejny</a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Naskl\u00e1dan\u00e9 su\u0161en\u00e9 \u0159ezivo a palubky na sklad\u011b truhl\u00e1\u0159stv\u00ed Domino v Plzni"
            className="hero-img"
          />
          <div className="hero-veil" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Prodejna \u0159eziva &middot; Plze\u0148</p>
          <h1 className="hero-h1">
            D\u0159evo su\u0161en\u00e9
            <span className="hero-em"> na&nbsp;8\u201310&nbsp;%,</span>
            <br />
            \u0159ezan\u00e9 na&nbsp;m\u00edru.
          </h1>
          <p className="hero-lead">
            Palubky, \u0159ezivo, plotovky i palivov\u00e9 d\u0159evo. P\u0159ij\u010fte si vybrat
            na prodejnu \u2014 poradíme, kter\u00fd profil a s\u00edla se hod\u00ed pr\u00e1v\u011b k va\u0161\u00ed pr\u00e1ci.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#sortiment">Prohl\u00e9dnout sortiment</a>
            <a className="btn btn-ghost" href="tel:+420">Zavolat</a>
          </div>

          <dl className="hours">
            <div className="hours-row">
              <dt>Prodejn\u00ed doba</dt>
              <dd>Po\u2013P\u00e1 &nbsp;8:00\u201312:00 &nbsp;a&nbsp; 12:30\u201316:00</dd>
            </div>
            <div className="hours-row hours-note">
              <dt>Dovolen\u00e1</dt>
              <dd>20.&nbsp;7. \u2013 2.&nbsp;8.&nbsp;2026 prodejna uzav\u0159ena</dd>
            </div>
          </dl>
        </div>

        <a className="hero-sale" href="#sortiment">
          <span className="hero-sale-tag">Sleva do vyprod\u00e1n\u00ed z\u00e1sob</span>
          <span className="hero-sale-item">Palubky klasik</span>
          <span className="hero-sale-price">
            od <strong>108&nbsp;K\u010d</strong>/m<sup>2</sup> s DPH
          </span>
        </a>
      </section>

      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="sec-head">
          <p className="eyebrow">Co v\u00e1m na\u0159e\u017eeme</p>
          <h2 id="sortiment-h" className="sec-h2">
            Sortiment prodejny
          </h2>
          <p className="sec-lead">
            Kód u&nbsp;ka\u017ed\u00e9 polo\u017eky je m\u00edra, se&nbsp;kterou pracujeme na&nbsp;pile
            \u2014 s\u00edla, profil nebo d\u00e9lka. \u0158ekn\u011bte, co stav\u00edte, zbytek dolad\u00edme.
          </p>
        </div>

        <ul className="cards">
          {sortiment.map((s) => (
            <li className="card" key={s.nazev}>
              <span className="card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="card-text">
                <h3 className="card-h3">{s.nazev}</h3>
                <p className="card-p">{s.popis}</p>
                <span className="card-detail">{s.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="sortiment-more">
          D\u00e1le skladem: OSB desky, d\u0159ev\u011bn\u00e9 prahy, terasov\u00e1 prkna, d\u0159ev\u011bn\u00e9 brikety,
          obkladov\u00e9 PVC panely a n\u00e1t\u011brov\u00e9 hmoty.
        </p>
      </section>

      <section className="about" aria-labelledby="about-h">
        <div className="about-media">
          <img
            src="/section-1.webp"
            alt="Detail hoblovan\u00e9 palubky s profilem pero-dr\u00e1\u017eka"
            className="about-img about-img-1"
          />
          <img
            src="/section-2.webp"
            alt="Su\u0161en\u00e9 truhl\u00e1\u0159sk\u00e9 \u0159ezivo p\u0159ipraven\u00e9 k odb\u011bru"
            className="about-img about-img-2"
          />
        </div>

        <div className="about-body">
          <p className="eyebrow">Pro\u010d k&nbsp;n\u00e1m</p>
          <h2 id="about-h" className="sec-h2">
            Prodejna, kde d\u0159evu rozum\u00ed
          </h2>
          <p className="about-p">
            Domino je plze\u0148sk\u00e1 prodejna \u0159eziva a palubek. Materi\u00e1l m\u00e1me
            proschl\u00fd, roz\u0159\u00edznut\u00fd a p\u0159ipraven\u00fd k&nbsp;odb\u011bru \u2014 nemus\u00edte \u010dekat.
            Poradíme s&nbsp;v\u00fdb\u011brem d\u0159eviny, s\u00edly i&nbsp;profilu podle toho,
            jestli obkl\u00e1d\u00e1te st\u011bnu, kladete podlahu, nebo stav\u00edte plot.
          </p>

          <ul className="proofs">
            <li>
              <strong>Su\u0161eno na 8\u201310 %</strong>
              <span>\u0158ezivo nepracuje a&nbsp;nekrout\u00ed se po zabudov\u00e1n\u00ed.</span>
            </li>
            <li>
              <strong>Skladem, ne na objedn\u00e1vku</strong>
              <span>Palubky klasik i&nbsp;softline si odvezete hned.</span>
            </li>
            <li>
              <strong>Osm d\u0159evin</strong>
              <span>Od smrku po dub, buk a&nbsp;jasan v&nbsp;r\u016fzn\u00fdch tlou\u0161\u0165k\u00e1ch.</span>
            </li>
          </ul>

          <div className="about-cta">
            <a className="btn btn-primary" href="tel:+420">Zeptat se telefonicky</a>
            <span className="about-loc">\u0158ezivo &amp; palubky &middot; Plze\u0148</span>
          </div>
        </div>
      </section>
    </main>
  );
}
