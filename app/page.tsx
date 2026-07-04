import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CARFIX 66 — diagnostika a autoservis Brno-Líšeň",
  description:
    "Kompletní diagnostika a opravy vozidel v Brně-Líšni. Přečteme chybové kódy, najdeme příčinu a řekneme cenu předem. Osobní, užitkové i nákladní vozy, pneuservis, STK.",
};

const codes = [
  { code: "P0300", meaning: "vynechávání zapalování" },
  { code: "P0420", meaning: "účinnost katalyzátoru" },
  { code: "P0171", meaning: "chudá směs" },
  { code: "U0100", meaning: "ztráta komunikace s řídicí jednotkou" },
];

const sluzby = [
  {
    n: "01",
    t: "Diagnostika a čtení chyb",
    d: "Připojíme se na sběrnici vozu, přečteme paměť závad a změříme živá data. Nehádáme — ukážeme vám, co konkrétně jednotka hlásí a co to znamená.",
  },
  {
    n: "02",
    t: "Servisní prohlídky a opravy",
    d: "Servisní prohlídky podle intervalů, mechanické opravy i klempířské práce. Osobní, užitkové i nákladní vozy pod jednou střechou.",
  },
  {
    n: "03",
    t: "Příprava na STK + vyřízení",
    d: "Vůz projedeme jako na technické, závady vyřešíme dopředu a STK za vás vyřídíme. Přijedete jednou, odjedete s platnou známkou.",
  },
  {
    n: "04",
    t: "Pneuservis a uskladnění",
    d: "Přezutí pro osobní i nákladní vozy, zemědělské a stavební stroje. Pneumatiky vám uskladníme a na sezónu držíme přednostní termíny.",
  },
  {
    n: "05",
    t: "Klimatizace a autoskla",
    d: "Plnění, servis a čištění klimatizace, výměna čelních i bočních skel. Interiér umyjeme ručně, aby vůz odjel jako nový.",
  },
  {
    n: "06",
    t: "Pojistné události",
    d: "Nabouraný vůz? Vyřídíme pojistnou událost, opravíme a po dobu opravy vám půjčíme náhradní vozidlo.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="wm" href="#" aria-label="CARFIX 66, úvod">
          <span className="wm-car">CARFIX</span>
          <span className="wm-66">66</span>
        </a>
        <a className="nav-tel" href="tel:+420728982146">
          <span className="nav-tel-dot" aria-hidden="true" />
          +420 728 982 146
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-img-wrap">
          <img
            className="hero-img"
            src="/hero.webp"
            alt="Technik CARFIX 66 s diagnostickým přístrojem u zdvižného vozu"
          />
          <div className="hero-scan" aria-hidden="true" />
        </div>

        <div className="hero-panel">
          <p className="eyebrow">Diagnostika vozidel · Brno-Líšeň</p>
          <h1 id="hero-h" className="hero-h">
            Nejdřív <em>zjistíme</em>,
            <br /> co autu je.
            <br /> Pak teprve opravujeme.
          </h1>
          <p className="hero-lead">
            Rozsvítila se kontrolka a nikdo vám neřekl proč? Připojíme vůz na
            diagnostiku, přečteme chybové kódy a ukážeme vám příčinu černé na
            bílém — s cenou opravy předem, ne až na faktuře.
          </p>
          <div className="hero-cta">
            <a className="btn btn-p" href="tel:+420728982146">
              Objednat vůz na diagnostiku
            </a>
            <a className="btn btn-s" href="#sluzby">
              Co všechno zvládneme
            </a>
          </div>

          <div className="terminal" aria-label="Ukázka čtení chybových kódů">
            <div className="terminal-bar">
              <span className="terminal-led" aria-hidden="true" />
              OBD-II · čtení paměti závad
            </div>
            <ul className="terminal-list">
              {codes.map((c) => (
                <li key={c.code} className="terminal-row">
                  <span className="t-code">{c.code}</span>
                  <span className="t-mean">{c.meaning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Servis pod jednou střechou</p>
          <h2 id="sluzby-h" className="sec-h">
            Šest věcí, kvůli kterým sem lidi z Líšně jezdí
          </h2>
          <p className="sec-sub">
            Osobní, užitkové i nákladní vozy — a k tomu zemědělské a stavební
            stroje. Vyřídíte všechno na jednom místě u lidí, kteří vám vysvětlí,
            co dělají a proč.
          </p>
        </div>

        <div className="grid">
          {sluzby.map((s) => (
            <article className="card" key={s.n}>
              <span className="card-n" aria-hidden="true">
                {s.n}
              </span>
              <h3 className="card-t">{s.t}</h3>
              <p className="card-d">{s.d}</p>
            </article>
          ))}
        </div>

        <img
          className="sec-photo"
          src="/section-1.webp"
          alt="Vozidlo na zvedáku v dílně CARFIX 66 během servisní prohlídky"
        />
      </section>

      <section className="onas" id="onas" aria-labelledby="onas-h">
        <div className="onas-grid">
          <img
            className="onas-photo"
            src="/section-2.webp"
            alt="Detail práce technika CARFIX 66 na motoru vozu"
          />
          <div className="onas-text">
            <p className="eyebrow">Kde nás najdete</p>
            <h2 id="onas-h" className="sec-h">
              Dílna na Jedovnické, kde poznáte, na čem jste
            </h2>
            <p className="onas-lead">
              CARFIX 66 je autoservis a pneuservis v Brně-Líšni. Ať přivezete
              rodinné auto s podivným zvukem, dodávku před sezónou nebo nákladní
              vůz na přezutí, dostanete jasné slovo: co je špatně, kolik to bude
              stát a kdy si vůz vyzvednete.
            </p>

            <dl className="facts">
              <div className="fact">
                <dt>Adresa</dt>
                <dd>Jedovnická 3131/2c, 628 00 Brno-Líšeň</dd>
              </div>
              <div className="fact">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420728982146">+420 728 982 146</a>
                </dd>
              </div>
              <div className="fact">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@carfix66.cz">info@carfix66.cz</a>
                </dd>
              </div>
              <div className="fact">
                <dt>Kdo vás obslouží</dt>
                <dd>CARFIX 66 s.r.o., IČO 23176750</dd>
              </div>
            </dl>

            <ul className="pills" aria-label="Na co se u nás spolehnete">
              <li>Cena předem, ne až na faktuře</li>
              <li>Náhradní vozidlo po dobu opravy</li>
              <li>Přednostní termíny na přezouvání</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
