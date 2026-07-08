import type { CSSProperties } from "react";

export default function Page() {
  const opravy = [
    {
      cislo: "01",
      nazev: "Zipy a zdrhovadla",
      popis:
        "Vyměníme rozbitý zip u bundy, kalhot, sukně i kabelky. Kovové, plastové i spirálové — vždycky ten správný typ a délku.",
      detail: "od 150 Kč",
    },
    {
      cislo: "02",
      nazev: "Zkrácení a úprava",
      popis:
        "Zkrátíme kalhoty, sukně i rukávy, zúžíme příliš volný střih. Odnesete si to, co vám konečně sedne.",
      detail: "od 120 Kč",
    },
    {
      cislo: "03",
      nazev: "Roztržené švy a díry",
      popis:
        "Zašití, záplaty i neviditelné látání. Roztržené kapsy, prodřené kolena, přetržený sedací šev — spravíme.",
      detail: "od 90 Kč",
    },
    {
      cislo: "04",
      nazev: "Společenské a svatební šaty",
      popis:
        "Úpravy na míru pro velký den. Přišití, sešněrování, zkrácení lemu s ohledem na materiál a střih.",
      detail: "cena dle úpravy",
    },
  ];

  const duvody = [
    {
      k: "Individuálně",
      v: "Každý kus si prohlédneme, řekneme, co s ním jde udělat, a navrhneme řešení. Žádné automaty — posoudíme opravu podle materiálu.",
    },
    {
      k: "Bez odsudku",
      v: "Oblíbené kalhoty se dají zachránit i podeváté. Přineste, s čím jste, my se ptát nebudeme.",
    },
    {
      k: "Pardubice",
      v: "Malá dílna, kterou najdete přímo ve městě. Osobní převzetí, žádné zasílání kamsi a čekání týdny.",
    },
  ];

  return (
    <main className="zz">
      <header className="zz-nav" aria-label="Hlavní navigace">
        <a className="zz-brand" href="#uvod" aria-label="Žouželková Jindra — opravy oděvů, domů">
          <span className="zz-brand-mark" aria-hidden="true">
            <span className="zz-stitch" />
          </span>
          <span className="zz-brand-text">
            <span className="zz-brand-name">Žouželková</span>
            <span className="zz-brand-sub">krejčovská dílna · Pardubice</span>
          </span>
        </a>
        <nav className="zz-links">
          <a href="#nabidka">Nabídka</a>
          <a href="#onas">O dílně</a>
          <a className="zz-tel" href="tel:+420466000000">Zavolat</a>
        </nav>
      </header>

      <section className="zz-hero" id="uvod">
        <div className="zz-hero-media">
          <img
            src="/hero.webp"
            alt="Detail šicího stroje a rozešité látky v krejčovské dílně"
            className="zz-hero-img"
            width={1600}
            height={1100}
          />
          <div className="zz-hero-tag" aria-hidden="true">
            <span>otevřeno · Pardubice</span>
          </div>
        </div>

        <div className="zz-hero-text">
          <p className="zz-eyebrow">Opravy oděvů od roku 2014</p>
          <h1 className="zz-title">
            Víme,
            <br />
            <span className="zz-title-em">co s tím</span>
            <br />
            děláme.
          </h1>
          <p className="zz-lead">
            Roztržené kalhoty, rozbitý zip u bundy nebo společenské šaty — přineste, co se
            vám zdálo neopravitelné. Prohlédneme si to s vámi, řekneme rovnou, co jde, a
            navrhneme řešení.
          </p>
          <div className="zz-hero-cta">
            <a className="zz-btn" href="tel:+420466000000">Zavolat a domluvit se</a>
            <a className="zz-btn-ghost" href="#nabidka">Co spravíme</a>
          </div>
        </div>
      </section>

      <section className="zz-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="zz-sec-head">
          <p className="zz-eyebrow">Nabídka dílny</p>
          <h2 id="nabidka-h" className="zz-h2">
            Čtyři věci, se kterými k nám lidé chodí nejčastěji
          </h2>
        </div>

        <ol className="zz-list">
          {opravy.map((o) => (
            <li className="zz-item" key={o.cislo}>
              <span className="zz-item-num" aria-hidden="true">{o.cislo}</span>
              <div className="zz-item-body">
                <div className="zz-item-top">
                  <h3 className="zz-item-name">{o.nazev}</h3>
                  <span className="zz-item-price">{o.detail}</span>
                </div>
                <p className="zz-item-desc">{o.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="zz-note">
          Ceny jsou orientační — konečnou řekneme rovnou při prohlídce, než se do práce
          pustíme.
        </p>
      </section>

      <section className="zz-about" id="onas" aria-labelledby="onas-h">
        <div className="zz-about-media">
          <img
            src="/section-1.webp"
            alt="Ruce při šití, jehla a nit nad rozešitým oděvem"
            className="zz-about-img"
            width={1200}
            height={900}
          />
        </div>

        <div className="zz-about-text">
          <p className="zz-eyebrow">O dílně</p>
          <h2 id="onas-h" className="zz-h2">
            Jindra Žouželková a jeden šicí stroj, který pamatuje spoustu zachráněných kabátů
          </h2>
          <p className="zz-about-p">
            Nešijeme nové věci — vracíme život těm, které už máte rádi. Za těch pár let
            prošly dílnou stovky bund, kalhot i svatebních šatů. Ke každému kusu
            přistupujeme zvlášť: podíváme se na materiál, švy a to, jak ho nosíte, a podle
            toho navrhneme opravu.
          </p>

          <dl className="zz-reasons">
            {duvody.map((d) => (
              <div className="zz-reason" key={d.k}>
                <dt>{d.k}</dt>
                <dd>{d.v}</dd>
              </div>
            ))}
          </dl>

          <figure className="zz-quote">
            <blockquote>
              „Zip u zimní bundy byl v tahu a nová bunda by mě stála majlant. Tady mi ho
              vyměnili do druhého dne a bunda vydržela další dvě zimy.“
            </blockquote>
            <figcaption>— zákaznice z Pardubic</figcaption>
          </figure>

          <div className="zz-about-strip">
            <img
              src="/section-2.webp"
              alt="Vyspravený oděv s pečlivě dokončeným švem"
              className="zz-strip-img"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
