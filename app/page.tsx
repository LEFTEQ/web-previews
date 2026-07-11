import type { CSSProperties } from "react";

export default function Page() {
  const provozovny = [
    { c: "01", ctvrt: "Vinohrady", adresa: "Náměstí Míru 585/11", psc: "Praha 2", tel: "+420 603 816 942" },
    { c: "02", ctvrt: "Vinohrady", adresa: "Laubova 4", psc: "Praha 3", tel: "+420 605 202 861" },
    { c: "03", ctvrt: "Smíchov", adresa: "Štefánikova 339/39", psc: "Praha 5", tel: "+420 734 140 650" },
    { c: "04", ctvrt: "Bubeneč", adresa: "Československé armády 729/28", psc: "Praha 6", tel: "+420 739 027 750" },
    { c: "05", ctvrt: "Holešovice", adresa: "Strossmayerovo náměstí 11", psc: "Praha 7", tel: "+420 734 783 443" },
    { c: "06", ctvrt: "Karlín", adresa: "Sokolovská 55", psc: "Praha 8", tel: "+420 731 611 812" },
    { c: "07", ctvrt: "Vršovice", adresa: "Moskevská 38", psc: "Praha 10", tel: "+420 733 593 925" },
  ];

  const denniPlan = [
    { cas: "03:00", akce: "Rozděláváme kvásek a zaděláváme těsto", detail: "Žitný kvas z naší matečky, který krmíme každý den už roky." },
    { cas: "04:30", akce: "Tvarujeme bochníky rukama", detail: "Šumava, konzum, tvarohové koláče — každý kus prochází dlaněmi." },
    { cas: "06:00", akce: "Sázíme do rozpálené pece", detail: "Pečeme přímo před vámi, dokřupava, v kamenné peci na provozovně." },
    { cas: "07:00", akce: "Otevíráme a voní to až na ulici", detail: "První voňavé a křupavé bochníky čekají na pultě, když přijdete." },
  ];

  return (
    <main className="apk">
      <header className="apk-nav">
        <a className="apk-logo" href="#top" aria-label="Antonínovo pekařství — domů">
          <span className="apk-logo-mark">A</span>
          <span className="apk-logo-word">
            <span className="apk-logo-line1">Antonínovo</span>
            <span className="apk-logo-line2">pekařství</span>
          </span>
        </a>
        <nav className="apk-nav-links" aria-label="Hlavní navigace">
          <a href="#pec">Jak pečeme</a>
          <a href="#nabidka">Nabídka</a>
          <a href="#kudy">Kudy k nám</a>
        </nav>
      </header>

      <section className="apk-hero" id="top">
        <img className="apk-hero-img" src="/hero.webp" alt="Čerstvě upečené bochníky chleba z kamenné pece Antonínova pekařství" width={1600} height={1000} />
        <div className="apk-hero-veil" aria-hidden="true" />
        <div className="apk-hero-inner">
          <p className="apk-eyebrow">Praha · pečeme od roku, kdy jsme rozdělali první kvásek</p>
          <h1 className="apk-hero-title">
            Zatímco ještě&nbsp;spíte,
            <span className="apk-hero-accent">my už zaděláváme těsto.</span>
          </h1>
          <p className="apk-hero-lede">
            Poctivý chléb z žitného kvásku, tvarovaný rukama a upečený v kamenné peci
            přímo na provozovně. Ráno na vás čekají první křupavé bochníky — sedm pekařství po celé Praze.
          </p>
          <div className="apk-hero-cta">
            <a className="apk-btn" href="#kudy">Najít nejbližší pekařství</a>
            <a className="apk-btn-ghost" href="#nabidka">Co pečeme tento týden</a>
          </div>
        </div>
        <div className="apk-hero-ticker" aria-hidden="true">
          <div className="apk-ticker-row">
            <span>Žitný kvásek</span><span aria-hidden>·</span><span>Kamenná pec</span><span aria-hidden>·</span><span>Tvarováno rukama</span><span aria-hidden>·</span><span>Vůně od 7:00</span><span aria-hidden>·</span>
            <span>Žitný kvásek</span><span aria-hidden>·</span><span>Kamenná pec</span><span aria-hidden>·</span><span>Tvarováno rukama</span><span aria-hidden>·</span><span>Vůně od 7:00</span><span aria-hidden>·</span>
          </div>
        </div>
      </section>

      <section className="apk-pec" id="pec">
        <div className="apk-section-head">
          <p className="apk-kicker">Náš pekařský den</p>
          <h2 className="apk-h2">Než rozsvítíte lampu, my už máme rozpálenou pec</h2>
          <p className="apk-section-sub">
            Nic nezmrazujeme a nedopékáme z polotovarů. Celý proces se odehrává v noci a časně ráno,
            aby ranní pečivo bylo opravdu čerstvé. Takhle vypadá jedno naše ráno.
          </p>
        </div>

        <ol className="apk-timeline">
          {denniPlan.map((k) => (
            <li className="apk-step" key={k.cas}>
              <div className="apk-step-time">{k.cas}</div>
              <div className="apk-step-body">
                <h3 className="apk-step-title">{k.akce}</h3>
                <p className="apk-step-detail">{k.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="apk-figure">
          <img src="/section-1.webp" alt="Pekař tvaruje těsto rukama v pekárně Antonínova pekařství" width={1400} height={900} />
          <figcaption>Pečeme přímo před vašima očima — přijďte se podívat, jak vzniká váš bochník.</figcaption>
        </figure>
      </section>

      <section className="apk-nabidka" id="nabidka">
        <div className="apk-nabidka-grid">
          <div className="apk-nabidka-text">
            <p className="apk-kicker apk-kicker-light">Nejen pečivo</p>
            <h2 className="apk-h2 apk-h2-light">K čerstvému chlebu i voňavá káva</h2>
            <p className="apk-section-sub apk-sub-light">
              Přijďte si posedět a pochutnat si u nás, nebo si nechte něco dobrého zabalit domů.
              Aktuální nabídku obměňujeme každý týden podle toho, co je zrovna nejlepší.
            </p>
            <ul className="apk-list">
              <li><span className="apk-list-title">Chleba z kvásku</span><span className="apk-list-desc">Šumava, konzum i žitný — dokřupava upečený každé ráno.</span></li>
              <li><span className="apk-list-title">Sladké pečivo</span><span className="apk-list-desc">Tvarohové koláče, buchty a záviny podle babiččiných receptů.</span></li>
              <li><span className="apk-list-title">Káva k tomu</span><span className="apk-list-desc">Dobrá káva ke křupavému pečivu přímo z pece. Těšíme se na vás.</span></li>
              <li><span className="apk-list-title">Rozvoz domů</span><span className="apk-list-desc">Naše dobroty rádi pošleme přes Wolt i Bolt Food až k vám.</span></li>
            </ul>
          </div>
          <figure className="apk-nabidka-fig">
            <img src="/section-2.webp" alt="Vitrína s čerstvým pečivem a šálek kávy v Antonínově pekařství" width={1200} height={1400} />
          </figure>
        </div>
      </section>

      <section className="apk-kudy" id="kudy">
        <div className="apk-section-head">
          <p className="apk-kicker">Kudy k nám</p>
          <h2 className="apk-h2">Sedm pekařství po Praze — jedno máte blízko</h2>
          <p className="apk-section-sub">
            Vinohrady, Smíchov, Bubeneč, Holešovice, Karlín i Vršovice. Zastavte se ráno pro chleba,
            přes den na kávu. Voláme — nezavoláme, prostě přijďte.
          </p>
        </div>

        <ul className="apk-shops">
          {provozovny.map((p) => (
            <li className="apk-shop" key={p.c}>
              <span className="apk-shop-num">{p.c}</span>
              <div className="apk-shop-body">
                <h3 className="apk-shop-name">{p.ctvrt}</h3>
                <p className="apk-shop-addr">{p.psc} · {p.adresa}</p>
                <a className="apk-shop-tel" href={"tel:" + p.tel.replace(/\s/g, "")}>{p.tel}</a>
              </div>
            </li>
          ))}
        </ul>

        <div className="apk-kudy-note">
          <p>
            <strong>Máte chuť dělat poctivé řemeslo?</strong> Hledáme pekaře do noční směny.
            Ozvěte se na <a href="mailto:info@antoninovopekarstvi.cz">info@antoninovopekarstvi.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
