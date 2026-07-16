import type { CSSProperties } from "react";

const services = [
  {
    code: "P0100",
    name: "Diagnostika elektroniky",
    desc: "Čtení a mazání chybových kódů, měření na sběrnici a kódování řídicích jednotek. Najdeme příčinu, ne jen rozsvícenou kontrolku.",
  },
  {
    code: "P0560",
    name: "Autoelektrika",
    desc: "Startéry, alternátory, kabeláže i bludné elektronické závady, které jinde vzdali. Generálky startérů a alternátorů.",
  },
  {
    code: "C1000",
    name: "Laserová geometrie kol",
    desc: "Seřízení geometrie na laserové stolici pro osobní i dodávková vozidla. Auto zase drží stopu a pneu se nežerou.",
  },
  {
    code: "P0530",
    name: "Klimatizace",
    desc: "Kontrola těsnosti, doplnění chladiva a dezinfekce výparníku. Aby v kabině zase táhl studený a čistý vzduch.",
  },
  {
    code: "P0234",
    name: "Turbodmychadla",
    desc: "Generální opravy a výměny turbodmychadel včetně ověření příčiny poruchy, ať se závada nevrátí.",
  },
  {
    code: "P1000",
    name: "Příprava na STK a ME",
    desc: "Prohlídka před technickou, odstranění závad a zajištění samotné STK i měření emisí za vás.",
  },
  {
    code: "T0000",
    name: "Pneuservis",
    desc: "Přezutí, vyvážení, opravy a uskladnění pneumatik. Sezónní přezutí bez čekání celý den.",
  },
  {
    code: "B0010",
    name: "Servis a údržba",
    desc: "Výměny olejů, brzd a rozvodů, mechanické i karosářské a lakýrnické práce pro vozy všech značek.",
  },
];

const reasons = [
  {
    k: "od 1999",
    t: "Čteme ostravská auta 25 let",
    d: "Nezávislý autoservis osobních i dodávkových vozidel, člen Svazu autoopraven ČR (SAČR).",
  },
  {
    k: "záruka",
    t: "Bloková výjimka",
    d: "Servis a údržbu uděláme, aniž přijdete o tovární záruku. Ke garančním opravám máme oprávnění.",
  },
  {
    k: "náhrada",
    t: "Náhradní vozidlo",
    d: "Po dobu opravy vám půjčíme auto, ať nezůstanete bez kol. Podrobnosti rádi řekneme telefonicky.",
  },
  {
    k: "všechny značky",
    t: "Sériové vozy všech značek",
    d: "Tým zkušených mechaniků a diagnostiků opraví prakticky každý sériově vyráběný vůz.",
  },
];

function HeroTrace() {
  return (
    <svg
      className="trace-hero"
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="trace-hero__line"
        d="M0,60 L120,60 L138,60 L150,40 L162,84 L174,60 L300,60 L326,60 L338,18 L350,102 L362,54 L374,64 L386,60 L560,60 L588,60 L600,44 L612,78 L624,60 L800,60 L828,60 L840,28 L852,92 L864,60 L1000,60"
      />
    </svg>
  );
}

function Spike() {
  return (
    <svg
      className="spike"
      viewBox="0 0 90 40"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="spike__line"
        d="M0,20 L30,20 L36,20 L40,5 L45,35 L50,13 L55,20 L90,20"
      />
    </svg>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg
        className="divider__wave"
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          className="divider__line"
          d="M0,12 L640,12 L648,7 L654,17 L660,12 L1440,12"
        />
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="band band--hero" aria-labelledby="hero-name">
        <div className="hero__grid" aria-hidden="true" />
        <div className="wrap hero">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            Nezávislý autoservis · Ostrava · od roku 1999
          </p>

          <h1 id="hero-name" className="wordmark">
            <span className="wordmark__main">AUTOŠINDLER</span>
            <span className="wordmark__sub">CARS&nbsp;<em>s.r.o.</em></span>
          </h1>

          <p className="hero__lead">
            Napojíme se na vaše auto a najdeme <strong>příčinu</strong> — ne jen
            příznak.
          </p>
          <p className="hero__body">
            Moderní řídicí jednotky mluví v chybových kódech. My je přečteme,
            ověříme měřením a rovnou řekneme, co s tím. Osobní i dodávková
            vozidla všech značek.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420603257618">
              Zavolat 603 257 618
            </a>
            <a className="btn btn--ghost" href="tel:+420733180228">
              Objednávky: 733 180 228
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>Působíme</dt>
              <dd>od 1999</dd>
            </div>
            <div>
              <dt>Značky</dt>
              <dd>všechny</dd>
            </div>
            <div>
              <dt>Člen</dt>
              <dd>SAČR</dd>
            </div>
          </dl>
        </div>
        <HeroTrace />
      </section>

      <Divider />

      <section className="band band--a" aria-labelledby="sluzby-h">
        <div className="wrap">
          <header className="band__head">
            <span className="tag">
              <Spike />
              <span className="tag__code">P0100</span>
              <span className="tag__label">Co umíme</span>
            </span>
            <h2 id="sluzby-h" className="band__title">
              Od chybového kódu po hotovou opravu.
            </h2>
            <p className="band__intro">
              Komplexní servis pod jednou střechou v Ostravě — od diagnostiky a
              autoelektriky přes geometrii a klimatizaci až po karosárnu a lak.
            </p>
          </header>

          <ul className="services">
            {services.map((s) => (
              <li className="svc" key={s.code}>
                <span className="svc__code">{s.code}</span>
                <h3 className="svc__name">{s.name}</h3>
                <p className="svc__desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      <section className="band band--b" aria-labelledby="proc-h">
        <div className="wrap proc">
          <div className="proc__lead">
            <span className="tag">
              <Spike />
              <span className="tag__code">P0300</span>
              <span className="tag__label">Proč nám věřit</span>
            </span>
            <h2 id="proc-h" className="band__title">
              V Ostravě čteme auta od roku 1999.
            </h2>
            <p className="band__intro">
              Naším cílem je kvalita, férovost a spolehlivost. Každému klientovi
              se věnujeme osobně a hledáme řešení, které dává smysl vám i vozu.
            </p>

            <div className="contact">
              <p className="contact__title">Domluvme termín</p>
              <a className="contact__row" href="tel:+420603257618">
                <span className="contact__role">Miroslav Šindler — majitel</span>
                <span className="contact__num">+420 603 257 618</span>
              </a>
              <a className="contact__row" href="tel:+420733180228">
                <span className="contact__role">Kancelář — objednávky</span>
                <span className="contact__num">+420 733 180 228</span>
              </a>
              <p className="contact__place">Autoservis &amp; pneuservis · Ostrava</p>
            </div>
          </div>

          <ul className="reasons">
            {reasons.map((r) => (
              <li className="reason" key={r.k}>
                <span className="reason__k">{r.k}</span>
                <h3 className="reason__t">{r.t}</h3>
                <p className="reason__d">{r.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />
    </main>
  );
}
