export default function Page() {
  const modules = [
    { code: "L·01", h: "Osvětlení a scény", p: "Jedno tlačítko rozsvítí přesně to, co potřebujete — ranní kuchyň, večerní čtení, film. Žádné hledání vypínačů." },
    { code: "L·02", h: "Žaluzie a stínění", p: "Ráno vytáhnou, v poledním žáru se naklopí. Interiér se nepřehřeje a vy nemusíte na nic myslet." },
    { code: "L·03", h: "Topení po místnostech", p: "Každý pokoj drží svou teplotu sám. Systém zná chování domu, pozná svátky i vaši nepřítomnost." },
    { code: "L·04", h: "Alarm ze stávajících čidel", p: "Pohybová čidla a audiosystém rovnou hlídají dům. Simulace přítomnosti rozsvěcí, když jste pryč." },
    { code: "L·05", h: "Spotřeba v grafech", p: "Na tabletu vidíte, kolik jde energie a vody. Hlídáme i výměny filtrů a servisní intervaly." },
    { code: "L·06", h: "Multiroom audio", p: "Oblíbená hudba v každé místnosti — z aplikace i tlačítkem. Poslouží i jako budík nebo zvonek." },
  ];

  return (
    <>
      <header className="bar">
        <div className="wrap bar-in">
          <a className="mark" href="#" aria-label="NEOGENE elektro – úvod">
            <span className="lead">NEOGENE</span>
            <span className="dot" aria-hidden="true"></span>
            <span className="tail">elektro</span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#dum">Chytrý dům</a>
            <a href="#co-umi">Co umí</a>
            <a href="#duvera">Reference</a>
          </nav>
          <a className="bar-tel" href="tel:+420460000000">Pardubice · zavolat</a>
        </div>
      </header>

      <main>
        <section className="hero" id="dum">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow rise d1">Elektroinstalace &amp; Loxone · Pardubice</span>
                <h1 className="rise d2">
                  Dům, který <em>reaguje</em> dřív,<br />než sáhnete po vypínači.
                </h1>
                <p className="lede rise d3">
                  Navrhneme a zapojíme kompletní elektroinstalaci i chytrou domácnost Loxone —
                  od rozvaděče po poslední zásuvku. V Pardubicích a okolí, s revizní zprávou a zárukou.
                </p>
                <div className="cta-row rise d4">
                  <a className="btn btn-main" href="tel:+420460000000">Zavolat elektrikáře</a>
                  <a className="btn btn-ghost" href="#co-umi">Co chytrý dům umí</a>
                </div>
              </div>
              <div className="hero-visual">
                <img src="/hero.webp" alt="Zapojený rozvaděč a instalace chytré domácnosti Loxone v rodinném domě" />
                <span className="chip c1" aria-hidden="true"><span className="led"></span> ROZVADĚČ · online</span>
                <span className="chip c2" aria-hidden="true"><span className="led"></span> TEPLOTA · 21,5 °C</span>
                <span className="chip c3" aria-hidden="true"><span className="led"></span> ŽALUZIE · auto</span>
              </div>
            </div>
          </div>
        </section>

        <section className="band" aria-label="Základní údaje">
          <div className="wrap">
            <div className="strip">
              <div><span className="k">MÍSTO</span><b>Pardubice a okolí</b></div>
              <div><span className="k">SYSTÉM</span><b>Loxone Smart Home</b></div>
              <div><span className="k">ROZSAH</span><b>Novostavby i rekonstrukce</b></div>
              <div><span className="k">DODÁVKA</span><b>Vč. revize a záruky</b></div>
            </div>
          </div>
        </section>

        <section className="sec" id="co-umi">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num">01 — MODULY CHYTRÉHO DOMU</span>
              <h2>Ovládání, které <em>nemusíte</em> studovat.</h2>
              <p>
                Topení, hudba nebo vzdálený přístup z dovolené — vše se dá nastavit podle vás.
                Nemusíte být počítačový expert; my jednotlivé moduly zapojíme a odladíme tak,
                aby dům pracoval sám.
              </p>
            </div>
            <div className="board">
              {modules.map((m) => (
                <div className="mod" key={m.code}>
                  <div className="mod-code">
                    <span>{m.code}</span>
                    <span className="sw" aria-hidden="true"></span>
                  </div>
                  <h3>{m.h}</h3>
                  <p>{m.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec trust" id="duvera">
          <div className="wrap">
            <div className="sec-head trust-head">
              <span className="sec-num">02 — PROČ NEOGENE</span>
              <h2>Řemeslo v pořádku — <em>od projektu po revizi</em>.</h2>
              <p className="trust-head p">
                Elektroinstalaci nevidíte, ale žijete s ní každý den. Proto ji zapojujeme tak,
                jak bychom ji chtěli mít doma sami — čistě, popsaně a s papíry, které obstojí.
              </p>
            </div>

            <div className="trust-grid">
              <figure className="trust-fig">
                <img src="/section-1.webp" alt="Detail čisté kabeláže a popsaného rozvaděče v rodinném domě v Pardubicích" />
                <figcaption className="figcap">Rekonstrukce rodinného domu · rozvaděč Loxone, Pardubice</figcaption>
              </figure>
              <ul className="facts">
                <li>
                  <span className="n">15<span className="u"> let</span></span>
                  <span className="t"><b>Za elektrikou od praxe</b>Rozvaděče, silnoproud i slaboproud — bez subdodavatelů.</span>
                </li>
                <li>
                  <span className="n">100<span className="u"> %</span></span>
                  <span className="t"><b>Zakázek s revizní zprávou</b>Předáváme dům s platnou revizí a dokumentací zapojení.</span>
                </li>
                <li>
                  <span className="n">1<span className="u"> partner</span></span>
                  <span className="t"><b>Certifikace Loxone</b>Chytrou domácnost projektujeme i servisujeme přímo my.</span>
                </li>
              </ul>
            </div>

            <div className="ref-line">
              <p className="q">„Přišli s hotovým projektem rozvaděče, dodrželi termín a všechno je popsané.
                Žaluzie a topení si teď dům řídí sám.“</p>
              <span className="who">— rekonstrukce RD, Pardubice-Polabiny</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
