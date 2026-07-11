import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S.B.S. SECURITY — bezpečnostní agentura Brno | ostraha 24/7 a facility management",
  description:
    "Ryze česká bezpečnostní a facility agentura z Brna. Střežíme 129 objektů po celé ČR, provozujeme vlastní pult centrální ochrany a nabízíme náhradní plnění. Ochráníme vás i váš majetek 24/7.",
};

const signaly = [
  {
    hod: "00:00",
    stav: "klid",
    objekt: "Sklad Modřice",
    text: "Areál uzamčen, obchůzka dle plánu. Vše v pořádku.",
  },
  {
    hod: "02:14",
    stav: "poplach",
    objekt: "Palác Padowetz",
    text: "Signál z detektoru pohybu — výjezd zásahové jednotky do 12 minut.",
  },
  {
    hod: "02:31",
    stav: "prověřeno",
    objekt: "Palác Padowetz",
    text: "Planý poplach, dveře zajištěny. Objekt předán zpět do střežení.",
  },
  {
    hod: "04:45",
    stav: "klid",
    objekt: "Recepce Brno-střed",
    text: "Noční služba předává směnu. Kamerový záznam bez událostí.",
  },
];

const sluzby = [
  {
    kod: "OST",
    nazev: "Fyzická ostraha objektů",
    popis:
      "Recepční i strážní služba, obchůzková činnost, kontrola vjezdů. Lidé, které poznáte jménem a kteří znají váš objekt.",
  },
  {
    kod: "PCO",
    nazev: "Připojení na pult centrální ochrany",
    popis:
      "Vlastní PCO monitoruje vaše poplachové signály 24/7. Vyhodnotíme, ověříme a vyšleme zásah — bez čekání na cizí dispečink.",
  },
  {
    kod: "AUD",
    nazev: "Bezpečnostní audit objektu",
    popis:
      "Projdeme objekt s vámi, najdeme slabá místa a navrhneme řešení na míru. Bez zbytečné techniky, kterou nepotřebujete.",
  },
  {
    kod: "FM",
    nazev: "Facility management",
    popis:
      "Úklidový servis, recepce, celková údržba i školení personálu. Jedna firma pro celý provoz vašeho objektu.",
  },
  {
    kod: "NP",
    nazev: "Náhradní plnění",
    popis:
      "Odebíráním našich služeb splníte povinný podíl zaměstnávání OZP a ušetříte na odvodech. Vše doložíme.",
  },
];

const cisla = [
  { c: "129", p: "střežených objektů po celé ČR" },
  { c: "19", p: "měst s naší pobočkou" },
  { c: "365", p: "dní v roce ve službě" },
  { c: "2003", p: "rok založení, obor od roku 1994" },
];

export default function Page() {
  return (
    <main className="sbs">
      <header className="sbs-top">
        <a className="sbs-logo" href="#" aria-label="S.B.S. Security, domů">
          <span className="sbs-logo-mark" aria-hidden="true">
            <span>S</span>
            <span>B</span>
            <span>S</span>
          </span>
          <span className="sbs-logo-txt">
            <span className="sbs-logo-name">S.B.S. Security</span>
            <span className="sbs-logo-sub">bezpečnostní agentura · Brno</span>
          </span>
        </a>
        <nav className="sbs-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#profil">O nás</a>
          <a className="sbs-nav-cta" href="tel:+420736198073">
            Zavolat dispečink
          </a>
        </nav>
      </header>

      <section className="sbs-hero" aria-labelledby="hero-nadpis">
        <div className="sbs-hero-img">
          <img
            src="/hero.webp"
            alt="Strážní služba S.B.S. Security při noční kontrole střeženého objektu"
            loading="eager"
          />
        </div>

        <div className="sbs-hero-body">
          <p className="sbs-eyebrow">Dispečink ve službě · nepřetržitě od roku 2003</p>
          <h1 id="hero-nadpis">
            Někdo hlídá,<br />
            <em>i když vy spíte.</em>
          </h1>
          <p className="sbs-lead">
            Jsme ryze česká bezpečnostní a facility agentura z Brna. Vlastní pult
            centrální ochrany, lidé, které poznáte jménem, a výjezd, který
            skutečně vyjede. Ochráníme vás i váš majetek 24/7.
          </p>
          <div className="sbs-hero-akce">
            <a className="sbs-btn" href="tel:+420736198073">
              Zavolat dispečink
            </a>
            <a className="sbs-btn-ghost" href="#sluzby">
              Co střežíme
            </a>
          </div>
        </div>

        <aside className="sbs-pco" aria-label="Ukázka záznamu z pultu centrální ochrany">
          <div className="sbs-pco-head">
            <span className="sbs-pco-dot" aria-hidden="true" />
            <span>Pult centrální ochrany — živý provoz</span>
          </div>
          <ol className="sbs-pco-log">
            {signaly.map((s) => (
              <li key={s.hod} data-stav={s.stav}>
                <span className="sbs-pco-hod">{s.hod}</span>
                <span className="sbs-pco-stav">{s.stav}</span>
                <span className="sbs-pco-objekt">{s.objekt}</span>
                <span className="sbs-pco-text">{s.text}</span>
              </li>
            ))}
          </ol>
          <p className="sbs-pco-pozn">
            Reprezentativní záznam. Skutečné události zůstávají u nás — diskrétnost je
            součástí služby.
          </p>
        </aside>
      </section>

      <section className="sbs-sec" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sbs-sec-head">
          <p className="sbs-eyebrow">Co pro vás zajistíme</p>
          <h2 id="sluzby-nadpis">Celá péče o objekt pod jednou agenturou</h2>
          <p className="sbs-sec-intro">
            Od strážného na recepci přes napojení na náš pult až po úklid a
            údržbu. Vyberte si jednu službu, nebo nám svěřte celý provoz.
          </p>
        </div>

        <div className="sbs-sec-grid">
          <div className="sbs-sec-media">
            <img
              src="/section-1.webp"
              alt="Dispečer S.B.S. Security u monitorů pultu centrální ochrany"
              loading="lazy"
            />
          </div>

          <ol className="sbs-sluzby">
            {sluzby.map((s) => (
              <li key={s.kod}>
                <span className="sbs-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div>
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sbs-sec sbs-sec-alt" id="profil" aria-labelledby="profil-nadpis">
        <div className="sbs-profil">
          <div className="sbs-profil-media">
            <img
              src="/section-2.webp"
              alt="Tým S.B.S. Security před střeženým objektem v Brně"
              loading="lazy"
            />
          </div>

          <div className="sbs-profil-txt">
            <p className="sbs-eyebrow">Kdo za dispečinkem stojí</p>
            <h2 id="profil-nadpis">
              Jdeme na to moravsky — pořádně a poctivě
            </h2>
            <p>
              S.B.S. Security funguje od dubna 2003, ale naši zakladatelé v
              oboru působí už od roku 1994, tehdy hlavně na poli osobní ochrany.
              Za tu dobu víme jedno: bezpečnost nedělá technika, ale lidé, kteří
              se o ni umí postarat.
            </p>
            <p>
              Právní konformita, striktní etika a diskrétnost jsou u nás
              samozřejmost. Chráníme zájmy klientů i jejich majetek — ve dne v
              noci, sedm dní v týdnu, 365 dní v roce.
            </p>

            <ul className="sbs-cisla">
              {cisla.map((x) => (
                <li key={x.p}>
                  <span className="sbs-cisla-c">{x.c}</span>
                  <span className="sbs-cisla-p">{x.p}</span>
                </li>
              ))}
            </ul>

            <div className="sbs-kontakt">
              <div>
                <span className="sbs-kontakt-l">Sídlo</span>
                Palác Padowetz, Masarykova 413/34, 602 00 Brno-město
              </div>
              <div>
                <span className="sbs-kontakt-l">Obchodní oddělení</span>
                <a href="tel:+420703477641">703 477 641</a>
              </div>
              <div>
                <span className="sbs-kontakt-l">E-mail</span>
                <a href="mailto:info.morava@sbs-security.eu">
                  info.morava@sbs-security.eu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
