import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rehabilitační a regenerační centrum — fyzioterapie Ostrava-Vítkovice",
  description:
    "Nestátní zdravotnické zařízení ve Vítkovicích. Odborné vstupní vyšetření u lékařky, elektroléčba na přístroji ZIMMER PhySys, vodoléčba, měkké a mobilizační techniky. Péče hrazená pojišťovnou i za přímou platbu.",
  openGraph: {
    title: "Rehabilitační a regenerační centrum — fyzioterapie Ostrava",
    description:
      "Rehabilitace ve Vítkovicích s osobním přístupem, lékařským dohledem a moderními přístroji. Objednejte se na 731 888 361.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const hodiny = [
  { den: "Pondělí", cas: "07:00 – 15:00" },
  { den: "Úterý", cas: "07:00 – 15:00" },
  { den: "Středa", cas: "07:00 – 15:00" },
  { den: "Čtvrtek", cas: "07:00 – 15:00" },
  { den: "Pátek", cas: "07:00 – 12:30" },
];

const sluzby = [
  {
    nazev: "Elektroléčba",
    pristroj: "ZIMMER PhySys · VAS-07",
    popis:
      "Kombinovaná elektroterapie a ultrazvuk na multifunkčním přístroji ZIMMER PhySys. Pro bolestivé stavy a hojení tkání pak distanční elektroterapie VAS-07.",
  },
  {
    nazev: "Vodoléčba",
    pristroj: "Teplá voda · hydroterapie",
    popis:
      "Masáž založená na terapeutickém použití teplé vody. Uvolní napjaté svaly, rozproudí krevní oběh a zmírní bolest.",
  },
  {
    nazev: "Měkké a mobilizační techniky",
    pristroj: "Manuální terapie",
    popis:
      "Práce s měkkými tkáněmi — kůží, podkožím, svaly a fasciemi — které se při pohybu vůči sobě posouvají. Vrací jim volnost a pohyblivost.",
  },
  {
    nazev: "SM systém",
    pristroj: "Cvičení + anatomická masáž",
    popis:
      "Soubor cvičení v kombinaci s manuální terapií a masáží. Urychluje léčbu poruch páteře a učí správnému držení těla.",
  },
  {
    nazev: "Pneuven Bevuk",
    pristroj: "Přístrojová lymfodrenáž",
    popis:
      "Léčí poruchy lymfatického systému, podporuje regeneraci, detoxikaci organismu a zlepšení fyzické kondice.",
  },
  {
    nazev: "Léčebné masáže",
    pristroj: "Klasická · vazivová · reflexní",
    popis:
      "Profesionální masáže léčebné, klasické, vazivové i reflexní — cíleně na místo potíží podle diagnózy.",
  },
];

const pojistovny = [
  { kod: "111", nazev: "Všeobecná zdravotní pojišťovna" },
  { kod: "205", nazev: "Česká průmyslová zdravotní pojišťovna" },
  { kod: "207", nazev: "Oborová zdravotní pojišťovna" },
  { kod: "211", nazev: "ZP Ministerstva vnitra ČR" },
  { kod: "213", nazev: "Revírní bratrská pokladna" },
];

export default function Page() {
  return (
    <main className="rrc">
      <header className="rrc-top">
        <a className="rrc-wordmark" href="#" aria-label="Rehabilitační a regenerační centrum, domů">
          <span className="rrc-wordmark__mark" aria-hidden="true">RRC</span>
          <span className="rrc-wordmark__sub">Rehabilitace&nbsp;Vítkovice</span>
        </a>
        <a className="rrc-phone" href="tel:+420731888361">
          <span className="rrc-phone__label">Objednávky</span>
          <span className="rrc-phone__num">731&nbsp;888&nbsp;361</span>
        </a>
      </header>

      <section className="rrc-hero" aria-labelledby="hero-title">
        <div className="rrc-hero__media">
          <img
            src="/hero.webp"
            alt="Fyzioterapeutka pracuje s pacientem v ordinaci rehabilitačního centra ve Vítkovicích"
            className="rrc-hero__img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="rrc-hero__panel">
          <p className="rrc-eyebrow">Nestátní zdravotnické zařízení · Ostrava-Vítkovice</p>
          <h1 id="hero-title" className="rrc-hero__title">
            Rehabilitace,
            <br />
            která začíná
            <br />
            <em>vyšetřením,</em>
            <br />
            ne ceníkem.
          </h1>
          <p className="rrc-hero__lead">
            U nás vás nejdřív vyšetří lékařka a teprve pak sestavíme léčbu na míru. Fyzioterapie
            a rehabilitační medicína s osobním přístupem a přístroji, které opravdu léčí.
          </p>
          <div className="rrc-hero__cta">
            <a className="rrc-btn rrc-btn--primary" href="tel:+420731888361">
              Objednat na 731&nbsp;888&nbsp;361
            </a>
            <a className="rrc-btn rrc-btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>
      </section>

      <section className="rrc-services" id="sluzby" aria-labelledby="services-title">
        <div className="rrc-sec-head">
          <p className="rrc-eyebrow rrc-eyebrow--accent">Co u nás projdete</p>
          <h2 id="services-title" className="rrc-sec-title">Procedury podle diagnózy</h2>
          <p className="rrc-sec-note">
            Poskytujeme péči hrazenou zdravotními pojišťovnami i za přímou platbu. Kombinaci
            procedur vybíráme podle vašeho stavu — ne podle standardního balíčku.
          </p>
        </div>

        <ul className="rrc-svc-grid">
          {sluzby.map((s) => (
            <li className="rrc-svc" key={s.nazev}>
              <p className="rrc-svc__pristroj">{s.pristroj}</p>
              <h3 className="rrc-svc__nazev">{s.nazev}</h3>
              <p className="rrc-svc__popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="rrc-pojistovny">
          <img
            src="/section-1.webp"
            alt="Rehabilitační přístroj a vybavení v ordinaci centra"
            className="rrc-pojistovny__img"
            width={900}
            height={700}
          />
          <div className="rrc-pojistovny__body">
            <p className="rrc-eyebrow">Hrazená péče</p>
            <h3 className="rrc-pojistovny__title">Máte poukaz „FT“ nebo „K“? Ošetření hradí pojišťovna.</h3>
            <p className="rrc-pojistovny__note">
              Smluvní partner těchto zdravotních pojišťoven:
            </p>
            <ul className="rrc-pj-list">
              {pojistovny.map((p) => (
                <li className="rrc-pj" key={p.kod}>
                  <span className="rrc-pj__kod">{p.kod}</span>
                  <span className="rrc-pj__nazev">{p.nazev}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rrc-about" id="o-nas" aria-labelledby="about-title">
        <div className="rrc-about__media">
          <img
            src="/section-2.webp"
            alt="Interiér rehabilitačního a regeneračního centra ve Vítkovicích"
            className="rrc-about__img"
            width={1000}
            height={800}
          />
        </div>
        <div className="rrc-about__body">
          <p className="rrc-eyebrow rrc-eyebrow--accent">Proč se léčit u nás</p>
          <h2 id="about-title" className="rrc-sec-title">
            Domácí atmosféra, odborný dohled
          </h2>
          <p className="rrc-about__text">
            Na rozdíl od mnoha komerčních rehabilitací u nás projdete odborným vstupním vyšetřením
            a pravidelnými konzultacemi u zkušené lékařky. Klademe důraz na kvalitní péči a maximální
            léčebný účinek — s osobním přístupem, vstřícným personálem a pohodovou atmosférou.
          </p>

          <dl className="rrc-facts">
            <div className="rrc-fact">
              <dt>Vstupní vyšetření</dt>
              <dd>vždy u lékařky, ne bez diagnózy</dd>
            </div>
            <div className="rrc-fact">
              <dt>Lékařka</dt>
              <dd>MUDr. Kamila Slezáková · čtvrtek 11:00–14:30, po objednání</dd>
            </div>
            <div className="rrc-fact">
              <dt>Kde nás najdete</dt>
              <dd>Prokopa Velikého 40, Ostrava-Vítkovice, 703 00</dd>
            </div>
          </dl>

          <div className="rrc-hours" aria-label="Provozní doba rehabilitace">
            <p className="rrc-hours__cap">Provozní doba rehabilitace</p>
            <ul className="rrc-hours__list">
              {hodiny.map((h) => (
                <li className="rrc-hours__row" key={h.den}>
                  <span className="rrc-hours__den">{h.den}</span>
                  <span className="rrc-hours__dot" aria-hidden="true" />
                  <span className="rrc-hours__cas">{h.cas}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
