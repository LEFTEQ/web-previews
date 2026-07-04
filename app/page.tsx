import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CalorTech — servis kotlů Hradec Králové | Buderus, Vaillant, Geminox",
  description:
    "Autorizovaný servis a opravy plynových i kondenzačních kotlů pro Hradec Králové, Pardubice a okolí. Buderus, Dakon, Geminox, Intergas, Junkers, Vaillant, Thermona. Náhradní díly skladem.",
  openGraph: {
    title: "CalorTech — servis kotlů, který přijede",
    description:
      "Opravy a záruční servis kotlů pro Hradec Králové a okolí. Autorizovaný servis značek Buderus, Vaillant, Geminox, Dakon, Thermona a dalších.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Technik CalorTech u kotle" }],
  },
};

const znacky = [
  { name: "Buderus", od: "1731", pozn: "topná technika" },
  { name: "Vaillant", od: "1874", pozn: "tepelná technika" },
  { name: "Geminox", od: "1990", pozn: "kondenzace" },
  { name: "Dakon", od: "české kotle", pozn: "elektro i tuhá paliva" },
  { name: "Intergas", od: "1989", pozn: "kondenzační" },
  { name: "Thermona", od: "1990", pozn: "plyn i elektro" },
  { name: "Junkers", od: "Bosch", pozn: "plynové kotle" },
  { name: "Baxi", od: "instalace", pozn: "závěsné kotle" },
];

const kroky = [
  {
    kdy: "Zavoláte",
    text:
      "Popíšete, co kotel dělá — hlásí poruchu, netopí, kape, nenahřívá vodu. Na infolince zvedáme telefon, ne robot.",
  },
  {
    kdy: "Domluvíme termín",
    text:
      "Řekneme reálný čas, kdy jsme u vás. Do Hradce Králové, Pardubic a okolí vyjíždíme běžně týž nebo následující den.",
  },
  {
    kdy: "Diagnostika",
    text:
      "Zjistíme příčinu — od zaneseného hořáku po vadné čerpadlo Grundfos nebo cívku SIT. Řekneme, co to bude stát, než začneme.",
  },
  {
    kdy: "Oprava a díl skladem",
    text:
      "Většinu dílů — ventilátory Dakon, hořákové automaty, kondenzátory čerpadel — vezeme s sebou z vlastního skladu. Bez čekání na objednávku.",
  },
];

export default function Page() {
  return (
    <main className="ct">
      <header className="ct-nav">
        <a className="ct-mark" href="#" aria-label="CalorTech, servis kotlů">
          <span className="ct-mark-cal">Calor</span>
          <span className="ct-mark-tech">Tech</span>
          <span className="ct-mark-dot" aria-hidden="true" />
        </a>
        <a className="ct-tel" href="tel:+420603777271">
          <span className="ct-tel-label">Servis kotlů</span>
          <span className="ct-tel-num">+420 603 777 271</span>
        </a>
      </header>

      <section className="ct-hero" aria-labelledby="ct-hero-h">
        <div className="ct-hero-media">
          <img
            src="/hero.webp"
            alt="Technik CalorTech při opravě plynového kotle"
            width={1400}
            height={1600}
            fetchPriority="high"
          />
        </div>
        <div className="ct-hero-body">
          <p className="ct-eyebrow">Hradec Králové · Pardubice · okolí</p>
          <h1 id="ct-hero-h">
            Když kotel<br />
            <em>hlásí poruchu</em>,<br />
            zvedneme telefon.
          </h1>
          <p className="ct-lead">
            Autorizovaný servis a opravy plynových i kondenzačních kotlů. Díl vezeme s sebou,
            cenu řekneme dopředu, teplo vracíme dřív, než vychladne dům.
          </p>
          <div className="ct-hero-cta">
            <a className="ct-btn" href="tel:+420603777271">Zavolat na servis</a>
            <a className="ct-btn ct-btn-ghost" href="mailto:calortech@calortech.cz">
              Napsat, o co jde
            </a>
          </div>
          <dl className="ct-hero-facts">
            <div>
              <dt>Autorizace</dt>
              <dd>na značky výrobců</dd>
            </div>
            <div>
              <dt>Díly</dt>
              <dd>vlastní sklad</dd>
            </div>
            <div>
              <dt>Výjezd</dt>
              <dd>Hradecko &amp; Pardubicko</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ct-flow" aria-labelledby="ct-flow-h">
        <div className="ct-flow-head">
          <p className="ct-eyebrow ct-eyebrow-flame">Jak to u nás chodí</p>
          <h2 id="ct-flow-h">Od poruchy k teplu ve čtyřech krocích</h2>
          <p className="ct-flow-sub">
            Žádné čekání na kolečku podpory. Konkrétní člověk, konkrétní termín, konkrétní cena.
          </p>
        </div>
        <ol className="ct-steps">
          {kroky.map((k, i) => (
            <li className="ct-step" key={k.kdy}>
              <span className="ct-step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{k.kdy}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ct-trust" aria-labelledby="ct-trust-h">
        <div className="ct-trust-media">
          <img
            src="/section-1.webp"
            alt="Náhradní díly a nářadí pro servis kotlů ve skladu CalorTech"
            width={1200}
            height={1400}
            loading="lazy"
          />
        </div>
        <div className="ct-trust-body">
          <p className="ct-eyebrow ct-eyebrow-flame">Značky, které umíme naslepo</p>
          <h2 id="ct-trust-h">Autorizovaný servis pro výrobce topné techniky</h2>
          <p className="ct-trust-lead">
            Neopravujeme „něco s topením". Držíme autorizaci u konkrétních výrobců a známe jejich
            kotle do posledního těsnění — od desítky let staré Dakony po dnešní kondenzační Geminox.
          </p>
          <ul className="ct-brands">
            {znacky.map((z) => (
              <li className="ct-brand" key={z.name}>
                <span className="ct-brand-name">{z.name}</span>
                <span className="ct-brand-meta">{z.pozn}</span>
                <span className="ct-brand-od">{z.od}</span>
              </li>
            ))}
          </ul>
          <p className="ct-trust-note">
            Díly skladem: ventilátory Dakon DUA, hořákové automaty Bertelli, cívky SIT, čerpadla
            Grundfos i Wilo, izolace. Co nemáme na skladě, dovezeme rychle.
          </p>
          <address className="ct-address">
            CalorTech s.r.o. · Kydlinovská 741, 500&nbsp;02 Hradec Králové ·{" "}
            <a href="tel:+420603777271">+420 603 777 271</a>
          </address>
        </div>
      </section>
    </main>
  );
}
