import React from "react";

const vyrobky = [
  {
    tag: "PVC · GEALAN S 9000",
    name: "Plastov\u00e1 okna",
    text: "V\u00edcekomorov\u00e9 profily GEALAN drž\u00ed teplo doma i p\u0159i nejp\u0159\u00edsn\u011bj\u0161\u00edch po\u017eadavc\u00edch na izolaci. Vyr\u00e1b\u00edme na m\u00edru \u2014 tvar i design profilu p\u0159izp\u016fsob\u00edme historick\u00e9mu i modern\u00edmu domu.",
    detail: "B\u00edl\u00e1, odst\u00edny RAL, imitace d\u0159eva, Acrylcolor i opl\u00e1\u0161t\u011bn\u00ed AluClipem."
  },
  {
    tag: "Al · HEROAL",
    name: "Hlin\u00edkov\u00e1 okna",
    text: "Cen\u011bn\u00fd architektonick\u00fd prvek s v\u00fdborn\u00fdmi tepeln\u011b izola\u010dn\u00edmi vlastnostmi. Profily Heroal se hod\u00ed na rodinn\u00e9 domy, zimn\u00ed zahrady i velk\u00e9 administrativn\u00ed budovy.",
    detail: "I kruhov\u00e9, segmentov\u00e9 a ov\u00e1ln\u00e9 oblouky ve zvl\u00e1\u0161tn\u00edm proveden\u00ed."
  },
  {
    tag: "PVC / Al",
    name: "Plastov\u00e9 dve\u0159e",
    text: "Spolehlivost, design a komfort. Odoln\u00e9 proti pov\u011btrnosti i opot\u0159eben\u00ed, s bezpe\u010dnostn\u00edm kov\u00e1n\u00edm a kvalitn\u00edmi z\u00e1mky. Vstupte dom\u016f stylov\u011b a bezpe\u010dn\u011b.",
    detail: "R\u016fzn\u00e9 barvy, v\u00fdpln\u011b a designy v jak\u00fdchkoliv rozm\u011brech."
  },
  {
    tag: "Al · HEROAL",
    name: "Hlin\u00edkov\u00e9 dve\u0159e",
    text: "Uspokoj\u00ed i ty nejn\u00e1ro\u010dn\u011bj\u0161\u00ed. Posuvn\u00e9 nebo otev\u00edrac\u00ed, pro rodinn\u00e9 domky i proskl\u00e9n\u00e1 z\u00e1dve\u0159\u00ed n\u00e1kupn\u00edch center.",
    detail: "V\u00fdplň i z\u00e1rubn\u011b p\u0159izp\u016fsob\u00edme stavebn\u00edmu stylu objektu."
  },
  {
    tag: "NA M\u00cdRU",
    name: "Zimn\u00ed zahrady",
    text: "Prostor, kde se potk\u00e1 interi\u00e9r s p\u0159\u00edrodou. Stavba na m\u00edru podle va\u0161eho domu, s v\u00fdbornou tepelnou izolac\u00ed, v\u011btr\u00e1n\u00edm i st\u00edn\u011bn\u00edm pro pohodl\u00ed v l\u00e9t\u011b.",
    detail: "Tak\u0159ka neomezen\u00e9 rozm\u011bry a tvary v jak\u00e9koliv barv\u011b."
  },
  {
    tag: "SKLO",
    name: "Proskl\u00e9n\u00e9 st\u011bny",
    text: "Jedine\u010dn\u00fd prvek, kter\u00fd d\u00e1 interi\u00e9ru originalitu a zajist\u00ed faktick\u00e9 i optick\u00e9 odd\u011blen\u00ed prostor \u2014 aniž byste ztratili sv\u011btlo.",
    detail: "\u0158e\u0161en\u00ed na m\u00edru pro obchodn\u00ed i obytn\u00e9 prostory."
  }
];

const povrchy = ["B\u00edl\u00e1", "Odst\u00edny RAL", "Imitace d\u0159eva", "Acrylcolor", "AluClip"];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a href="#top" className="wordmark" aria-label="NELAN \u2014 v\u00fdroba oken, Cheb">
          <span className="wm-name">NELAN<span className="wm-dot" aria-hidden="true">.</span></span>
          <span className="wm-sub">V\u00fdroba oken &amp; dve\u0159\u00ed \u00b7 Cheb</span>
        </a>
        <nav className="nav-links" aria-label="Hlavn\u00ed">
          <a href="#vyrobky">V\u00fdrobky</a>
          <a href="#ofirme">O firm\u011b</a>
          <a href="#poptavka" className="nav-cta">Poptat okna</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-text">
          <p className="eyebrow reveal" style={{ animationDelay: "0.05s" }}>
            <span className="tick" aria-hidden="true" />GEALAN &amp; HEROAL \u00b7 v\u00fdroba na zak\u00e1zku
          </p>
          <h1 className="reveal" style={{ animationDelay: "0.15s" }}>
            Okna, co ut\u011bsn\u00ed<br />i chebskou zimu.
          </h1>
          <p className="lede reveal" style={{ animationDelay: "0.28s" }}>
            V d\u00edln\u011b v Chebu vyr\u00e1b\u00edme plastov\u00e1 a hlin\u00edkov\u00e1 okna na m\u00edru. V\u00edcekomorov\u00e9 profily GEALAN drž\u00ed teplo doma, a\u0165 venku fi\u010d\u00ed od Smr\u010din cokoli \u2014 a k tomu z\u00e1ru\u010dn\u00ed i poz\u00e1ru\u010dn\u00ed servis.
          </p>
          <div className="hero-actions reveal" style={{ animationDelay: "0.4s" }}>
            <a href="#poptavka" className="btn-primary">Spo\u010d\u00edtat okna na m\u00edru</a>
            <a href="#vyrobky" className="btn-ghost">Co vyr\u00e1b\u00edme</a>
          </div>
        </div>

        <figure className="window reveal" style={{ animationDelay: "0.2s" }} aria-labelledby="win-cap">
          <div className="sash">
            <img
              className="pane-img"
              src="/hero.webp"
              width={1200}
              height={900}
              alt="Plastov\u00e9 okno NELAN s v\u00fdhledem \u2014 vyroben\u00e9 na m\u00edru v Chebu"
            />
            <span className="bar-v" aria-hidden="true" />
            <span className="bar-h" aria-hidden="true" />
            <span className="handle" aria-hidden="true" />
            <span className="tag tag-a">6 komor</span>
            <span className="tag tag-b">Uw od 0,9</span>
            <span className="tag tag-c">RAL + dekor d\u0159eva</span>
          </div>
          <figcaption id="win-cap" className="win-cap">
            Profil GEALAN S 9000 \u00b7 zasklen\u00ed na m\u00edru
          </figcaption>
        </figure>
      </section>

      <section className="vyrobky" id="vyrobky">
        <div className="sec-head">
          <p className="eyebrow"><span className="tick" aria-hidden="true" />Katalog v\u00fdroby</p>
          <h2>Vyr\u00e1b\u00edme p\u0159esn\u011b na va\u0161e rozm\u011bry</h2>
          <p className="sec-intro">
            Od jednoho okna po proskl\u00e9nou fas\u00e1du. Design profilu i tvar
            p\u0159izp\u016fsob\u00edme historick\u00e9mu i modern\u00edmu \u0159e\u0161en\u00ed objektu \u2014 a v\u017edy s
            d\u016frazem na tepelnou izolaci.
          </p>
        </div>

        <img
          className="sec-photo"
          src="/section-1.webp"
          width={1600}
          height={900}
          alt="Realizace oken a dve\u0159\u00ed NELAN na rodinn\u00e9m dom\u011b"
        />

        <ul className="grid">
          {vyrobky.map((v) => (
            <li className="card" key={v.name}>
              <span className="card-tag">{v.tag}</span>
              <h3>{v.name}</h3>
              <p className="card-text">{v.text}</p>
              <p className="card-detail">{v.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ofirme" id="ofirme">
        <div className="of-grid">
          <img
            className="of-photo"
            src="/section-2.webp"
            width={1200}
            height={1200}
            alt="Detail zabudovan\u00e9ho okna NELAN s kvalitn\u00edm kov\u00e1n\u00edm"
          />
          <div className="of-body">
            <p className="eyebrow light"><span className="tick" aria-hidden="true" />O firm\u011b NELAN</p>
            <h2>P\u0159es dvacet let d\u011bl\u00e1me okna v Chebu</h2>
            <p className="of-lede">
              Nejsme p\u0159eprodejci \u2014 okna a dve\u0159e vyr\u00e1b\u00edme sami, na zak\u00e1zku a
              p\u0159esn\u011b podle va\u0161eho p\u0159\u00e1n\u00ed. Postar\u00e1me se o m\u011b\u0159en\u00ed, mont\u00e1\u017e i o
              servis, aby okno slou\u017eilo desetilet\u00ed.
            </p>

            <dl className="facts">
              <div>
                <dt>V\u00fdroba na zak\u00e1zku</dt>
                <dd>Jak\u00fdkoliv rozm\u011br i tvar, od klasiky po ov\u00e1ln\u00e9 oblouky.</dd>
              </div>
              <div>
                <dt>Z\u00e1ru\u010dn\u00ed i poz\u00e1ru\u010dn\u00ed servis</dt>
                <dd>Nahl\u00e1\u0161en\u00ed reklamace i objedn\u00e1n\u00ed \u00fadr\u017eby vy\u0159\u00eddime rychle.</dd>
              </div>
              <div>
                <dt>Profily GEALAN &amp; Heroal</dt>
                <dd>Ov\u011b\u0159en\u00e9 syst\u00e9my s \u0161pi\u010dkovou tepelnou izolac\u00ed.</dd>
              </div>
            </dl>

            <div className="surfaces">
              <span className="surfaces-label">Povrchy a barvy</span>
              <ul>
                {povrchy.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <p className="addr">
              NELAN, spol. s r.o. \u2014 K Nemocnici 2, 350 02 Cheb 2
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
