import type { CSSProperties } from "react";

export default function Page() {
  const days = [
    { d: "01", t: "Bourání a příprava", note: "Vyklidíme staré jádro, odvezeme suť, zakryjeme byt." },
    { d: "02–03", t: "Rozvody vody a odpadu", note: "Nové trubky, přesně tam, kam patří. Revize." },
    { d: "04–05", t: "Elektrika a topení", note: "Zásuvky, světla, radiátor — podle vašeho návrhu." },
    { d: "06–07", t: "Zdění, izolace, hydroizolace", note: "Aby voda zůstala tam, kde má. Žádné pozdější mokvání." },
    { d: "08–09", t: "Obklady a dlažba", note: "Spáry na milimetr. Tady se pozná řemeslo." },
    { d: "10", t: "Montáž a úklid", note: "Baterie, umyvadlo, WC — a hotovo. Odcházíme čisto." }
  ];

  return (
    <main className="peops">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="PEOPS — rekonstrukce koupelen Pardubice">
          <span className="wordmark__name">PEOPS</span>
          <span className="wordmark__tag">koupelny · Pardubice</span>
        </a>
        <a className="nav__phone" href="tel:+420603856161">+420 603 856 161</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img src="/hero.webp" alt="Nová koupelna po rekonstrukci bytového jádra — obklady, dlažba, sprchový kout" />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Bytová jádra a koupelny · od roku 1993</p>
          <h1 id="hero-title">
            Staré jádro
            <span className="hero__strike"> ven.</span><br />
            Nová koupelna <span className="hero__accent">za deset dní.</span>
          </h1>
          <p className="hero__lede">
            Rekonstrukce panelákového jádra v Pardubicích a okolí — na klíč, se smlouvou
            a pojištěním, za cenu, kterou vám řekneme předem a už ji nezměníme.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420603856161">Zavolat a domluvit termín</a>
            <a className="btn btn--ghost" href="mailto:info@peops.cz">Napsat na info@peops.cz</a>
          </div>
          <ul className="hero__facts">
            <li><strong>10</strong> dní na jádro</li>
            <li><strong>0 Kč</strong> záloha předem</li>
            <li><strong>30+</strong> let řemesla</li>
          </ul>
        </div>
      </section>

      <section className="prom" aria-label="Co u nás máte jisté">
        <ul className="prom__list">
          <li><span className="prom__mark">Držíme cenu</span> Domluvenou částku nezvyšujeme o „vícepráce“.</li>
          <li><span className="prom__mark">Bez záloh</span> Platíte až za hotovou práci, kterou vidíte.</li>
          <li><span className="prom__mark">Ubytování zdarma</span> Po dobu rekonstrukce máte kde bydlet.</li>
          <li><span className="prom__mark">3D návrh zdarma</span> Uvidíte koupelnu dřív, než začneme bourat.</li>
        </ul>
      </section>

      <section className="days" aria-labelledby="days-title" style={{"--reveal-count": days.length} as CSSProperties}>
        <div className="days__head">
          <p className="eyebrow">Harmonogram rekonstrukce</p>
          <h2 id="days-title">Deset dní, den po dni</h2>
          <p className="days__intro">
            Bez funkčního jádra je byt neobyvatelný — proto plánujeme každý den dopředu.
            Pozor na „zázračné“ termíny do pěti dní; kvalitní hydroizolace a vyzrálé lepidlo
            svůj čas potřebují. Tady vidíte, kdy co u vás děláme.
          </p>
        </div>
        <ol className="days__grid">
          {days.map((s, i) => (
            <li className="day" key={s.d} style={{"--i": i} as CSSProperties}>
              <span className="day__num">{s.d}</span>
              <h3 className="day__title">{s.t}</h3>
              <p className="day__note">{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about__media">
          <img src="/section-1.webp" alt="Realizace rekonstrukce bytového jádra v panelovém bytě v Pardubicích" />
        </div>
        <div className="about__body">
          <p className="eyebrow">Proč s námi</p>
          <h2 id="about-title">Stovky pardubických jader. To vaše zvládneme taky.</h2>
          <p>
            PEOPS s.r.o. rekonstruuje bytová jádra a koupelny v Pardubicích a okolí od roku 1993.
            Za tu dobu jsme si vypracovali postupy, které drží kvalitu i tempo — a naučili jsme se,
            kde se dá spěchat a kde v žádném případě ne.
          </p>
          <p>
            Děláme kompletní realizaci na klíč: od 3D návrhu, přes bourání, instalatéry, topenáře,
            elektrikáře, obkladače a malíře, až po finální úklid. Zajistíme i statický posudek
            a revize elektřiny, vody a plynu, které bytová družstva a pojišťovny často vyžadují.
          </p>
          <dl className="about__stats">
            <div><dt>1993</dt><dd>rok, kdy jsme začali</dd></div>
            <div><dt>Pardubice</dt><dd>a okolí — sem jezdíme</dd></div>
            <div><dt>Na klíč</dt><dd>od návrhu po úklid</dd></div>
          </dl>
          <p className="about__final">
            Budeme se o vaši přízeň ucházet poctivě odvedenou prací a pevným rozpočtem — bez
            nemilých překvapení na konci.
          </p>
          <a className="btn btn--primary" href="tel:+420603856161">Zavolat si o cenovou nabídku</a>
        </div>
      </section>
    </main>
  );
}
