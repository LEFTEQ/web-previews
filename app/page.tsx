import type { CSSProperties } from "react";

export default function Page() {
  const menu = [
    { key: "01", name: "Espresso Pascucci", note: "sametová crema, sladké aroma z Monte Cerignone", pour: "25 ml" },
    { key: "02", name: "Cappuccino", note: "mléko našlehané do hedvábí, klasika z Matice", pour: "180 ml" },
    { key: "03", name: "Filtr dne", note: "pomalá extrakce, zrno po „fázi dechu“", pour: "250 ml" },
    { key: "04", name: "Labužnictví", note: "dobroty od kavárenského sourozence hned vedle", pour: "denně" },
  ];

  return (
    <main className="mtc">
      <header className="mtc-nav">
        <a className="mtc-wordmark" href="#uvod" aria-label="Kavárna Matice, České Budějovice">
          <span className="mtc-wordmark-k">Kavárna</span>
          <span className="mtc-wordmark-m">Matice</span>
        </a>
        <nav className="mtc-nav-links" aria-label="Hlavní">
          <a href="#menu">Co naléváme</a>
          <a href="#pribeh">Náš příběh</a>
          <a href="#navsteva">Návštěva</a>
        </nav>
      </header>

      <section className="mtc-hero" id="uvod">
        <div className="mtc-hero-media">
          <img
            src="/hero.webp"
            alt="Šálek italské kávy Pascucci se sametovou cremou v Kavárně Matice"
            className="mtc-hero-img"
          />
          <span className="mtc-hero-tag">České Budějovice · od 7. 5. 2016</span>
        </div>

        <div className="mtc-hero-copy">
          <p className="mtc-eyebrow">Otevřeno každý den · italská káva Pascucci</p>
          <h1 className="mtc-title">
            <span className="mtc-title-line">Neprosněte</span>
            <span className="mtc-title-line mtc-title-em">svůj život —</span>
            <span className="mtc-title-line">prožijte své sny</span>
          </h1>
          <p className="mtc-lede">
            Kavárna, kterou jsme v roce 2016 otevřeli v prostoru bývalé pivnice u Basy.
            Vložili jsme do ní sny, představy i srdce — a šálek kávy, u kterého se hosté
            rádi vracejí. Místo, kde nasytíme všechny vaše smysly.
          </p>
          <div className="mtc-hero-actions">
            <a className="mtc-btn" href="#navsteva">Přijít na kávu</a>
            <a className="mtc-btn-ghost" href="#menu">Co dnes naléváme</a>
          </div>
        </div>
      </section>

      <section className="mtc-menu" id="menu" aria-labelledby="menu-h">
        <div className="mtc-section-head">
          <p className="mtc-eyebrow">Z varného stolu</p>
          <h2 id="menu-h" className="mtc-h2">Co u nás naléváme</h2>
          <p className="mtc-section-sub">
            Zrno z rodinné pražírny Pascucci v Monte Cerignone — po „fázi dechu“, praženo
            tak, aby byla crema sametová a kompaktní. Připravíme ji, jak ji máte rádi.
          </p>
        </div>

        <ol className="mtc-menu-list">
          {menu.map((item) => (
            <li className="mtc-menu-row" key={item.key}>
              <span className="mtc-menu-key" aria-hidden="true">{item.key}</span>
              <span className="mtc-menu-name">{item.name}</span>
              <span className="mtc-menu-note">{item.note}</span>
              <span className="mtc-menu-pour">{item.pour}</span>
            </li>
          ))}
        </ol>

        <figure className="mtc-figure">
          <img
            src="/section-1.webp"
            alt="Interiér Kavárny Matice v Českých Budějovicích s příjemným posezením"
            className="mtc-figure-img"
          />
          <figcaption className="mtc-figure-cap">
            Prostor, kde nasytíme všechny vaše smysly — hned vedle najdete i Labužnictví Matice.
          </figcaption>
        </figure>
      </section>

      <section className="mtc-story" id="pribeh" aria-labelledby="story-h">
        <div className="mtc-story-grid">
          <div className="mtc-story-copy">
            <p className="mtc-eyebrow">Náš příběh</p>
            <h2 id="story-h" className="mtc-h2 mtc-h2-light">
              Z pivnice u Basy vznikl<br /> wellness pro duši
            </h2>
            <p className="mtc-story-p">
              Na podzim 2015 jsme začali koketovat s myšlenkou o kavárně. Když jsme objevili
              tenhle prostor — na štítu ještě stálo „pivnice u Basy“ — chytili jsme příležitost
              za pačesy. Od první myšlenky k otevření to trvalo vlastně jen chvilku.
            </p>
            <p className="mtc-story-p">
              Chtěli jsme spojit pohodově strávené chvíle v inspirujícím prostředí s chutí
              dobré italské kávy, kterou máme tak rádi. A jak se ukázalo, prostor nám brzy
              začal být těsný — tak vzniklo i Labužnictví Matice, náš mladší kavárenský sourozenec.
            </p>
            <p className="mtc-signoff">Vaši kavárníci z Matice</p>

            <dl className="mtc-facts">
              <div className="mtc-fact">
                <dt>Otevřeli jsme</dt>
                <dd>7. 5. 2016</dd>
              </div>
              <div className="mtc-fact">
                <dt>Káva</dt>
                <dd>Pascucci, rodinná pražírna od 1883</dd>
              </div>
              <div className="mtc-fact">
                <dt>A navíc</dt>
                <dd>Labužnictví Matice, od podzimu 2021</dd>
              </div>
            </dl>
          </div>

          <figure className="mtc-story-figure">
            <img
              src="/section-2.webp"
              alt="Labužnictví Matice — mladší kavárenský sourozenec Kavárny Matice"
              className="mtc-story-img"
            />
          </figure>
        </div>

        <div className="mtc-visit" id="navsteva">
          <div className="mtc-visit-card">
            <p className="mtc-eyebrow">Zastavte se</p>
            <p className="mtc-visit-line">České Budějovice</p>
            <div className="mtc-visit-row">
              <a className="mtc-visit-link" href="tel:+420602385158">602 385 158</a>
              <a className="mtc-visit-link" href="mailto:info@kavarnamatice.cz">info@kavarnamatice.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
