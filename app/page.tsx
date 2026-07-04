import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J&S Klimatizace — vždy správná teplota | Praha",
  description:
    "Montáž, servis a pronájem klimatizací v Praze. Rodinná firma s pohotovostním servisem, poradenstvím při výběru jednotky a férovou cenou včetně montáže.",
  openGraph: {
    title: "J&S Klimatizace — vždy správná teplota",
    description:
      "Klimatizace, chlazení, vzduchotechnika a topení. Praha. Zavolejte 07:00–17:00.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Instalace klimatizace v pražském bytě" }],
  },
};

const rooms = [
  { c: "18", label: "ložnice v noci", note: "tiše, ať se spí" },
  { c: "22", label: "obývák", note: "komfort přes den" },
  { c: "24", label: "kancelář v létě", note: "bez přehřátí techniky" },
  { c: "26", label: "serverovna", note: "stálé chlazení" },
];

const sluzby = [
  {
    id: "01",
    title: "Klimatizace a chlazení",
    body:
      "Vybereme, namontujeme a pak se o jednotku staráme. Nástěnné, kazetové i multisplity — podle prostoru a toho, kolik místností má jedna venkovní jednotka utáhnout. Poradíme, ať nepřeplácíte výkon, který nevyužijete.",
    cta: "Nezávazně poptat montáž",
  },
  {
    id: "02",
    title: "Voda, topení, plyn (UT/ZTI)",
    body:
      "Kompletní rozvody v rodinných domech i halách. Výměna dosloužilých plynových kotlů za úsporné, montáž tepelných čerpadel a rekonstrukce kotelen. Starý kotel vydrží tak dvacet let — nový umí méně platit za totéž teplo.",
    cta: "Domluvit výměnu kotle",
  },
  {
    id: "03",
    title: "Vzduchotechnika (VZT)",
    body:
      "Rekuperace, digestoře a čisticí systémy pro byty, kanceláře i výrobu. Instalujeme nové rozvody a modernizujeme ty stávající, aby dýchaly úsporněji. Čerstvý vzduch bez otevřeného okna a bez zimy.",
    cta: "Zeptat se na rekuperaci",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#top" className="wordmark" aria-label="J&S Klimatizace, domů">
          <span className="wordmark__amp">J&amp;S</span>
          <span className="wordmark__word">KLIMATIZACE</span>
        </a>
        <a className="topbar__phone" href="tel:+420773840055">
          <span className="topbar__hours">Po–Pá 07:00–17:00</span>
          <span className="topbar__num">+420&nbsp;773&nbsp;840&nbsp;055</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Technik J&S Klimatizace instaluje nástěnnou klimatizační jednotku v pražském bytě"
            className="hero__img"
            width={1600}
            height={1000}
          />
        </div>

        <div className="hero__panel">
          <p className="eyebrow">Praha · montáž &amp; servis · rodinná firma</p>
          <h1 className="hero__title">
            Vždy <em>správná</em> teplota.
            <span className="hero__titleSub">V každé místnosti, po celý rok.</span>
          </h1>
          <p className="hero__lead">
            Nastavíme vám doma i v práci klima, na které se dá spolehnout —
            od výběru jednotky přes montáž až po pohotovostní servis,
            když je nejhůř.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420773840055">Zavolat 773&nbsp;840&nbsp;055</a>
            <a className="btn btn--ghost" href="mailto:info@jasklimatizace.cz">Napsat e-mail</a>
          </div>
        </div>

        <div className="thermostat" aria-label="Doporučené teploty podle místnosti">
          <p className="thermostat__label">Naše doporučené teploty</p>
          <ul className="thermostat__grid">
            {rooms.map((r) => (
              <li key={r.label} className="thermo">
                <span className="thermo__val">
                  {r.c}<span className="thermo__deg">°C</span>
                </span>
                <span className="thermo__room">{r.label}</span>
                <span className="thermo__note">{r.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co u nás pořídíte pod jednou střechou</p>
          <h2 id="sluzby-h" className="section-title">Tři řemesla, jeden tým</h2>
        </div>

        <div className="services__lead">
          <img
            src="/section-1.webp"
            alt="Venkovní klimatizační jednotky na fasádě pražského domu"
            className="services__img"
            width={1200}
            height={900}
          />
          <p className="services__note">
            Instalace, oprava, rekonstrukce i akutní zásah — bereme celý projekt
            za svůj, ať se soustředíte na to, kvůli čemu do místnosti chodíte.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li key={s.id} className="card">
              <span className="card__num">{s.id}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
              <a className="card__link" href="tel:+420773840055">
                {s.cta} <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" id="o-nas" aria-labelledby="about-h">
        <div className="about__grid">
          <div className="about__text">
            <p className="eyebrow">O rodinné firmě</p>
            <h2 id="about-h" className="section-title">
              Férově, bez skrytých poplatků
            </h2>
            <p className="about__p">
              Začínali jsme u topení a klimatizace, dnes zvládneme celou
              techniku budovy. Jako rodinná firma známe své zákazníky jménem —
              a díky tomu navrhujeme řešení na míru, ne z ceníku.
            </p>
            <p className="about__p">
              Co slíbíme, to platí. Cenu řekneme dopředu, kompromisy na úkor
              kvality u nás nehledejte.
            </p>

            <dl className="pledges">
              <div className="pledge">
                <dt className="pledge__k">Pohotovostní servis</dt>
                <dd className="pledge__v">Když klima stávkuje, přijedeme řešit, ne přeobjednávat.</dd>
              </div>
              <div className="pledge">
                <dt className="pledge__k">Cena i s montáží</dt>
                <dd className="pledge__v">Řeknete parametry, my pošleme jednu jasnou částku.</dd>
              </div>
              <div className="pledge">
                <dt className="pledge__k">Pronájem mobilní klimatizace</dt>
                <dd className="pledge__v">Krátkodobě horko na akci či v kanceláři? Půjčíme.</dd>
              </div>
            </dl>
          </div>

          <figure className="about__figure">
            <img
              src="/section-2.webp"
              alt="Technik J&S Klimatizace při servisu vnitřní jednotky"
              className="about__img"
              width={1000}
              height={1200}
            />
            <figcaption className="about__cap">
              Praha a okolí · Po–Pá 07:00–17:00 · info@jasklimatizace.cz
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
