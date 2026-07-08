import type { CSSProperties } from "react";

export default function Page() {
  const glazury = [
    { name: "Lahvová zeleň", hex: "#1f6e5c", note: "nejžádanější odstín na klasická kamna" },
    { name: "Kobalt", hex: "#274a7a", note: "tmavá modř s hloubkou" },
    { name: "Sytá slonovina", hex: "#efe4cf", note: "krémový základ vzorníku" },
    { name: "Cihlová", hex: "#a8442c", note: "teplý pálený tón" },
    { name: "Antracit", hex: "#2c2b2a", note: "matně černá pod praskliny" },
    { name: "Medová", hex: "#c98a2b", note: "tekutá jantarová poleva" },
    { name: "Šalvěj", hex: "#8a9a6d", note: "tlumená přírodní zeleň" },
    { name: "Bordó", hex: "#6f2130", note: "hluboká vinná červeň" },
  ];

  const postup = [
    {
      krok: "Vzorník",
      text: "Vyberete si tvar kachle a jednu z přibližně 65 glazur základního vzorníku. Poradíme, co drží barvu i po letech topení.",
    },
    {
      krok: "Výroba",
      text: "Kachle točíme, taháme i lisujeme podle typu — rohy, římsy, pásky i doplňky. Repliky historických kamen děláme na míru.",
    },
    {
      krok: "Glazování",
      text: "Suroviny meleme v kulovém mlýně na jemný prášek, mícháme s vodou a nanášíme máčením, poléváním nebo stříkáním.",
    },
    {
      krok: "Stavba",
      text: "Kamna, krby ani sporáky nestavíme — kachle předáme kamnáři z naší sítě, který vám kamna postaví u vás doma.",
    },
  ];

  return (
    <main className="mk">
      <header className="mk-top">
        <a className="mk-mark" href="#uvod" aria-label="MK PROFI kachlová kamna, úvod">
          <span className="mk-mark__mk">MK</span>
          <span className="mk-mark__profi">PROFI</span>
          <span className="mk-mark__sub">kachlová kamna · Horní Planá</span>
        </a>
        <a className="mk-tel" href="tel:+420380728751">
          <span className="mk-tel__label">Kamnářství od roku výroby ruční</span>
          <span className="mk-tel__num">+420 380 728 751</span>
        </a>
      </header>

      <section className="mk-hero" id="uvod">
        <div className="mk-hero__media">
          <img
            src="/hero.webp"
            alt="Detail glazovaných keramických kachlů na kachlová kamna od MK Profi"
            className="mk-hero__img"
            width={1600}
            height={1200}
          />
          <span className="mk-hero__glow" aria-hidden="true" />
        </div>
        <div className="mk-hero__panel">
          <p className="mk-eyebrow">Kachlárna · Palackého 235, Horní Planá</p>
          <h1 className="mk-hero__title">
            Jeden kachel,
            <br />
            <span className="mk-hero__accent">65 glazur</span>,
            <br />
            desítky vzorů.
          </h1>
          <p className="mk-hero__lede">
            Vyrábíme keramické kachle na klasická kamna, repliky historických
            kamen, sporáky i krby. Vy si vyberete barvu a vzor — kamna postaví
            kamnář, se kterým spolupracujeme.
          </p>
          <div className="mk-hero__actions">
            <a className="mk-btn" href="#glazury">Prohlédnout vzorník glazur</a>
            <a className="mk-btn mk-btn--ghost" href="tel:+420380728751">Zavolat kachlárně</a>
          </div>
          <dl className="mk-facts">
            <div>
              <dt>Glazur ve vzorníku</dt>
              <dd>~65</dd>
            </div>
            <div>
              <dt>Certifikace</dt>
              <dd>TZÚS</dd>
            </div>
            <div>
              <dt>Cech kamnářů</dt>
              <dd>zakládající člen</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mk-section mk-glazury" id="glazury" aria-labelledby="glazury-nadpis">
        <div className="mk-section__head">
          <p className="mk-eyebrow mk-eyebrow--dark">Vzorník</p>
          <h2 id="glazury-nadpis" className="mk-h2">Barva začíná v kulovém mlýně</h2>
          <p className="mk-section__lede">
            Každou glazuru mícháme z frit, kaolinu, oxidů kovů a kalidel. Tady je
            výběr z odstínů, které zákazníci chtějí nejčastěji — celý vzorník má
            kolem pětašedesáti barev.
          </p>
        </div>

        <ul className="mk-swatches" role="list">
          {glazury.map((g) => (
            <li
              key={g.name}
              className="mk-swatch"
              style={{ "--glaze": g.hex } as CSSProperties}
            >
              <span className="mk-swatch__chip" aria-hidden="true" />
              <span className="mk-swatch__name">{g.name}</span>
              <span className="mk-swatch__note">{g.note}</span>
            </li>
          ))}
        </ul>

        <figure className="mk-figure">
          <img
            src="/section-1.webp"
            alt="Ručně glazované kachle složené do plochy kamen v dílně MK Profi"
            className="mk-figure__img"
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption className="mk-figure__cap">
            Kachloví od MK Profi je certifikováno Technickým a zkušebním ústavem
            stavebním. Rohy, římsy, pásky i doplňky dodáme ve stejné glazuře jako
            plochu.
          </figcaption>
        </figure>
      </section>

      <section className="mk-section mk-onas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="mk-onas__grid">
          <div className="mk-onas__text">
            <p className="mk-eyebrow mk-eyebrow--dark">Jak to u nás chodí</p>
            <h2 id="onas-nadpis" className="mk-h2">Vyrábíme kachle. Kamna staví kamnář.</h2>
            <p className="mk-section__lede">
              Jsme kachlárna v Horní Plané — děláme keramické kachle a glazury,
              nic víc a nic míň. Od vzorníku po hotové kachle projde zakázka
              čtyřmi kroky.
            </p>

            <ol className="mk-steps" role="list">
              {postup.map((p, i) => (
                <li className="mk-step" key={p.krok}>
                  <span className="mk-step__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="mk-step__title">{p.krok}</h3>
                    <p className="mk-step__text">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="mk-onas__aside">
            <img
              src="/section-2.webp"
              alt="Hotová kachlová kamna postavená z kachlů MK Profi u zákazníka"
              className="mk-onas__img"
              width={1200}
              height={1400}
              loading="lazy"
            />
            <div className="mk-card">
              <p className="mk-card__eyebrow">Kachlárna</p>
              <p className="mk-card__addr">
                MK PROFI kachlová kamna, s.r.o.
                <br />
                Palackého 235
                <br />
                382 26 Horní Planá
              </p>
              <dl className="mk-card__contact">
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href="tel:+420380728751">+420 380 728 751</a>
                  </dd>
                  <dd>
                    <a href="tel:+420777295608">+420 777 295 608</a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:mkprofi@mkprofi.cz">mkprofi@mkprofi.cz</a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
