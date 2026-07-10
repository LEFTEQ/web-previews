import type { CSSProperties } from "react";

const revizeSteps = [
  {
    kod: "01",
    title: "Objednávka a termín",
    text: "Zavoláte nebo napíšete, domluvíme termín obvykle do několika dnů. Řekneme dopředu, co budeme potřebovat a jak dlouho revize zabere.",
  },
  {
    kod: "02",
    title: "Měření a prohlídka",
    text: "Přijedeme s přístroji, změříme izolační stavy, spojitost ochranných vodičů, impedanci smyčky a otestujeme proudové chrániče. Nic neděláme od stolu.",
  },
  {
    kod: "03",
    title: "Revizní zpráva",
    text: "Dostanete platnou revizní zprávu s jasným verdiktem — schopno / neschopno provozu — a seznamem závad seřazených podle rizika.",
  },
];

const sluzby = [
  {
    label: "E1A",
    title: "Revize elektro v rozsahu E1A",
    text: "Výchozí i pravidelné revize objektů bez nebezpečí výbuchu a bez omezení napětí. Byty, rodinné domy, kanceláře, provozovny i bytové domy v Brně a okolí.",
  },
  {
    label: "FVE",
    title: "Revize fotovoltaických elektráren",
    text: "Revize FVE před připojením i pravidelné kontroly. Součástí bývá i vyřízení dotace Nová zelená úsporám, ať se v papírech nemusíte topit.",
  },
  {
    label: "BYT",
    title: "Revize bytových instalací",
    text: "Před koupí nemovitosti, po rekonstrukci nebo když jističe padají bez zjevné příčiny. Najdeme, kde to hoří — obrazně i doslova.",
  },
  {
    label: "Ostatní",
    title: "Podlahové topení, zabezpečení, montážní plošina",
    text: "Instalace a revize podlahového topení Fénix a Danfoss, zabezpečovacích systémů Jablotron a Hikvision. Vysoké spoje řešíme z plošiny AVIA MP16.",
  },
];

export default function Page() {
  return (
    <main className="ep-main">
      <header className="ep-topbar">
        <a className="ep-brand" href="#uvod" aria-label="Elektro Pavlík, domů">
          <span className="ep-brand-mark" aria-hidden="true">
            <span className="ep-brand-phase" />
            <span className="ep-brand-phase" />
            <span className="ep-brand-phase" />
          </span>
          <span className="ep-brand-text">
            Elektro <strong>Pavlík</strong>
          </span>
        </a>
        <nav className="ep-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Revize</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="ep-call ep-call--top" href="tel:+420737035290">
          <span aria-hidden="true">✆</span> 737 035 290
        </a>
      </header>

      <section className="ep-hero" id="uvod">
        <div className="ep-hero-media">
          <img
            src="/hero.webp"
            alt="Revizní technik Elektro Pavlík při měření elektroinstalace v rozvaděči"
            className="ep-hero-img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="ep-hero-body">
          <p className="ep-eyebrow">Revize elektro · Brno · rozsah E1A</p>
          <h1 className="ep-hero-title">
            Než to jiskří,
            <br />
            <span className="ep-hero-accent">změříme to.</span>
          </h1>
          <p className="ep-hero-lede">
            Výchozí a pravidelné revize elektroinstalací, fotovoltaiky a
            zabezpečení. Přijedeme s přístroji, ne s odhadem — a odjíždíme až s
            platnou revizní zprávou v ruce.
          </p>
          <div className="ep-hero-actions">
            <a className="ep-call ep-call--primary" href="tel:+420737035290">
              Zavolat 737 035 290
            </a>
            <a className="ep-ghost" href="#sluzby">
              Co revidujeme
            </a>
          </div>
          <dl className="ep-hero-facts">
            <div>
              <dt>Oprávnění</dt>
              <dd>E1A · bez omezení napětí</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Brno a okolí</dd>
            </div>
            <div>
              <dt>Zpráva</dt>
              <dd>Do 3 dnů po měření</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ep-section ep-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ep-section-head">
          <p className="ep-eyebrow">Co pro vás změříme</p>
          <h2 id="sluzby-nadpis" className="ep-section-title">
            Čtyři obory pod jednou revizní zprávou
          </h2>
          <p className="ep-section-lede">
            Neděláme všechno na světě. Děláme to, čemu rozumíme do detailu —
            elektroinstalace, fotovoltaiku, topení a zabezpečení. A za každý
            protokol se podepíšeme.
          </p>
        </div>

        <div className="ep-media-strip">
          <img
            src="/section-1.webp"
            alt="Detail rozvaděče s jističi a proudovými chrániči připravený k revizi"
            className="ep-media-img"
            width={1400}
            height={900}
          />
        </div>

        <ul className="ep-cards">
          {sluzby.map((s) => (
            <li className="ep-card" key={s.label}>
              <span className="ep-card-label">{s.label}</span>
              <h3 className="ep-card-title">{s.title}</h3>
              <p className="ep-card-text">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ep-section ep-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="ep-duvera-grid">
          <div className="ep-duvera-media">
            <img
              src="/section-2.webp"
              alt="Montážní plošina AVIA MP16 při práci na venkovní elektroinstalaci"
              className="ep-media-img"
              width={1200}
              height={1400}
            />
          </div>
          <div className="ep-duvera-body">
            <p className="ep-eyebrow">Jak revize probíhá</p>
            <h2 id="duvera-nadpis" className="ep-section-title">
              Tři kroky od telefonu k razítku
            </h2>
            <ol className="ep-steps">
              {revizeSteps.map((krok) => (
                <li className="ep-step" key={krok.kod}>
                  <span className="ep-step-kod" aria-hidden="true">
                    {krok.kod}
                  </span>
                  <div>
                    <h3 className="ep-step-title">{krok.title}</h3>
                    <p className="ep-step-text">{krok.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ep-badge-row">
              <span className="ep-badge">Fénix · Danfoss</span>
              <span className="ep-badge">Jablotron · Hikvision</span>
              <span className="ep-badge">AVIA MP16</span>
            </div>
            <p className="ep-duvera-note">
              Elektro Pavlík s.r.o., Masarykova 413/34, 602 00 Brno.
              Na telefonu <a href="tel:+420737035290">737 035 290</a> nás
              zastihnete i mimo úřední hodiny.
            </p>
          </div>
        </div>
      </section>

      <a className="ep-fab" href="tel:+420737035290" aria-label="Zavolat na 737 035 290">
        <span aria-hidden="true">✆</span>
        <span className="ep-fab-text">Zavolat</span>
      </a>
    </main>
  );
}

export const dynamic = "force-static";

const _unused: CSSProperties = {};
void _unused;
