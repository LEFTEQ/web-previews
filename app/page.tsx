import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      name: "HIFU lifting",
      lede: "Neinvazivní lifting bez skalpelu",
      body: "Ultrazvuk pracuje v hloubce, kde vzniká kolagen. Zpevní ovál obličeje, podbradek i krk — bez řezu a bez rekonvalescence. Odcházíte rovnou zpět do dne.",
    },
    {
      no: "02",
      name: "Omlazení laserem",
      lede: "Neinvazivní, s viditelným výsledkem",
      body: "Cílíme na vrásky, jemné pigmentace i celkovou kvalitu pleti. Nastavení volíme podle vaší pleti, ne podle šablony — proto vidíte rozdíl, ne otisk přístroje.",
    },
    {
      no: "03",
      name: "Chemický & enzymatický peeling",
      lede: "Rozjasnění a hladkost",
      body: "Kontrolovaně sejmeme unavenou vrchní vrstvu a necháme vyniknout tu novou. Pomáhá na akné, ucpané póry i nerovnoměrný tón.",
    },
    {
      no: "04",
      name: "MRF — mikrojehličková radiofrekvence",
      lede: "Pevnost a struktura pleti",
      body: "Kombinace jemných mikrovpichů a radiofrekvence nastartuje tvorbu kolagenu tam, kde ochabla pevnost. Pro jizvy po akné, póry i ztrátu tonu.",
    },
    {
      no: "05",
      name: "Odstranění permanentního make-upu",
      lede: "Návrat k čisté linii",
      body: "Šetrně odstraníme nepovedený nebo přežitý permanent obočí i rtů. Krok za krokem, s ohledem na vaši pokožku.",
    },
  ];

  const beliefs = [
    {
      k: "Diagnostika napřed",
      v: "Než se pustíme do ošetření, přečteme si vaši pleť. Plán stavíme na tom, co vidíme, ne na tom, co je zrovna v akci.",
    },
    {
      k: "Přirozený výsledek",
      v: "Nechceme změnit, kdo jste. Chceme podpořit to nejlepší, co už máte — tak, aby to nikdo nepoznal jako „práci“.",
    },
    {
      k: "Moderní technologie",
      v: "HIFU, laser, MRF i peelingy pod jednou střechou v Pardubicích. Neinvazivně, s respektem k rekonvalescenci vašeho dne.",
    },
  ];

  return (
    <main className="kp">
      <header className="kp-nav" aria-label="Hlavní">
        <a className="kp-mark" href="#" aria-label="Kiss Perfekt, kosmetický salon Pardubice">
          <span className="kp-mark-kiss">Kiss</span>
          <span className="kp-mark-perfekt">Perfekt</span>
        </a>
        <nav className="kp-nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
        </nav>
        <a className="kp-book" href="#objednani">Objednat online</a>
      </header>

      <section className="kp-hero" id="objednani">
        <div className="kp-hero-copy">
          <p className="kp-eyebrow">Kosmetická &amp; estetická péče · Pardubice</p>
          <h1 className="kp-hero-title">
            Vaše pleť není pokus.
            <em> Je to investice.</em>
          </h1>
          <p className="kp-hero-lede">
            Přirozené omlazení, zdravá pleť a moderní technologie na jednom místě.
            Řešíme vrásky, akné, pigmentace, hydrataci i ztrátu pevnosti — s důrazem
            na výsledek, který vypadá jako vy, jen odpočatější.
          </p>
          <div className="kp-hero-actions">
            <a className="kp-book kp-book--lg" href="#objednani">Objednat se online</a>
            <a className="kp-tel" href="tel:+420775403390">+420 775 403 390</a>
          </div>
        </div>
        <figure className="kp-hero-figure">
          <img
            src="/hero.webp"
            alt="Kosmetické ošetření pleti v salonu Kiss Perfekt v Pardubicích"
            className="kp-hero-img"
          />
          <figcaption className="kp-hero-cap">Ošetření vždy na míru vaší pleti</figcaption>
        </figure>
      </section>

      <section className="kp-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="kp-sec-head">
          <p className="kp-eyebrow">Co u nás projdete</p>
          <h2 id="sluzby-h" className="kp-sec-title">Neinvazivní ošetření od diagnostiky po výsledek</h2>
        </div>
        <ol className="kp-list">
          {services.map((s) => (
            <li className="kp-row" key={s.no}>
              <span className="kp-row-no" aria-hidden="true">{s.no}</span>
              <div className="kp-row-main">
                <h3 className="kp-row-name">{s.name}</h3>
                <p className="kp-row-lede">{s.lede}</p>
              </div>
              <p className="kp-row-body">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="kp-note">
          Poskytované služby mají charakter kosmetické a estetické péče. Nejedná se o
          zdravotní služby ve smyslu zákona č. 372/2011 Sb.
        </p>
      </section>

      <section className="kp-about" id="o-nas" aria-labelledby="o-nas-h">
        <figure className="kp-about-figure">
          <img
            src="/section-1.webp"
            alt="Prostředí salonu Kiss Perfekt a přístrojová kosmetika"
            className="kp-about-img"
          />
        </figure>
        <div className="kp-about-copy">
          <p className="kp-eyebrow">O nás</p>
          <h2 id="o-nas-h" className="kp-sec-title">
            Naším cílem není změnit, kdo jste — ale podpořit to nejlepší, co už máte.
          </h2>
          <div className="kp-beliefs">
            {beliefs.map((b, i) => (
              <div className="kp-belief" key={b.k}>
                <span className="kp-belief-dot" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="kp-belief-k">{b.k}</h3>
                <p className="kp-belief-v">{b.v}</p>
              </div>
            ))}
          </div>
          <figure className="kp-about-figure kp-about-figure--wide">
            <img
              src="/section-2.webp"
              alt="Detail péče o pleť v salonu Kiss Perfekt v Pardubicích"
              className="kp-about-img"
            />
            <figcaption className="kp-about-cap">
              Individuální přístup ke každé pleti — Pardubice
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
