import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sklazam Sklenářství — sklo na míru, Praha 4",
  description:
    "Zasklení, zrcadla, sprchové kouty, skleněná zábradlí i akvária na míru. Přes 30 let řemesla v Praze 4. Pojízdná dílna přijede za vámi.",
  openGraph: {
    title: "Sklazam Sklenářství — sklo na míru, Praha 4",
    description:
      "Zasklení, zrcadla, sprchové kouty, skleněná zábradlí i akvária na míru. Přes 30 let řemesla v Praze 4.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    tl: "Zasklívání",
    pop: "Okna, dveře, balkóny, výlohy. Prasklou tabuli vyměníme čistě a rychle, ať máte zase teplo a klid.",
    detail: "okna · dveře · balkóny · výlohy",
  },
  {
    tl: "Zrcadla a zrcadlové stěny",
    pop: "Řezaná na milimetr, s broušenou nebo fazetovanou hranou. Nalepíme, zavěsíme, srovnáme do roviny.",
    detail: "broušení · leštění · fazeta",
  },
  {
    tl: "Sprchové kouty a zástěny",
    pop: "Kalené sklo přesně do vaší koupelny, i do šikmin a atypických koutů. Bez rámů, které drží špínu.",
    detail: "kalené sklo · na míru · atyp",
  },
  {
    tl: "Skleněná schodiště a zábradlí",
    pop: "Nosné pochozí sklo a průhledná zábradlí, která projdou revizí. Statiku i kotvení řešíme za vás.",
    detail: "pochozí · bezpečnostní · nosné",
  },
  {
    tl: "Obklady linek lakovaným sklem",
    pop: "Barevné sklo za kuchyňskou linku i na celou stěnu. Snadno se čistí, nemá spáry, drží roky.",
    detail: "kuchyně · interiér · barva na míru",
  },
  {
    tl: "Akvária a terária na míru",
    pop: "Slepené celoskleněné nádrže podle vašich rozměrů. Rámování obrazů zvládneme také.",
    detail: "lepené · na rozměr · rámování",
  },
];

const duvody = [
  {
    k: "30+",
    l: "let u řezačky",
    t: "Přes třicet let v oboru. Poznáme, které sklo do čeho patří, a řekneme vám to na rovinu.",
  },
  {
    k: "0 Kč",
    l: "za konzultaci",
    t: "Přijedeme, zaměříme a spočítáme cenu. Nezávazně a zdarma — platíte, až když kývnete.",
  },
  {
    k: "→",
    l: "pojízdná dílna",
    t: "Řezačka, brusky i tmely vozíme s sebou. Menší práce hotové na místě, bez odvozu k nám.",
  },
];

export default function Page() {
  return (
    <main className="sz">
      <header className="sz-top">
        <a className="sz-mark" href="#" aria-label="Sklazam Sklenářství, domů">
          <span className="sz-mark-cut">Skla</span>
          <span className="sz-mark-rest">zam</span>
          <span className="sz-mark-sub">sklenářství · Praha 4</span>
        </a>
        <a className="sz-call" href="tel:+420777707563">
          <span className="sz-call-lbl">Zavolat sklenáři</span>
          <span className="sz-call-num">777 707 563</span>
        </a>
      </header>

      <section className="sz-hero" aria-labelledby="sz-h1">
        <div className="sz-hero-media">
          <img
            src="/hero.webp"
            alt="Sklenář řeže velkou tabuli skla v dílně sklenářství Sklazam"
            className="sz-hero-img"
            width={1600}
            height={1100}
          />
          <span className="sz-scoreline" aria-hidden="true" />
        </div>
        <div className="sz-hero-text">
          <p className="sz-eyebrow">U Propusti 1009 · Praha 4 — Braník</p>
          <h1 id="sz-h1">
            Rýha, klepnutí,
            <br />
            <em>čistý řez.</em>
          </h1>
          <p className="sz-lede">
            Prasklá okenní tabule, zrcadlo na míru nebo celé skleněné
            zábradlí — přivezeme řezačku za vámi a odejdeme, až sklo sedí
            na milimetr.
          </p>
          <div className="sz-hero-cta">
            <a className="sz-btn sz-btn-primary" href="tel:+420777707563">
              Zavolat 777 707 563
            </a>
            <a className="sz-btn sz-btn-ghost" href="mailto:poptavka@sklazam.cz?subject=Nez%C3%A1vazn%C3%A1%20popt%C3%A1vka%20sklen%C3%A1%C5%99sk%C3%BDch%20prac%C3%AD">
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="sz-services" aria-labelledby="sz-s">
        <div className="sz-sec-head">
          <h2 id="sz-s">Co u nás řežeme</h2>
          <p>
            Od jedné prasklé tabulky po celoskleněnou stěnu. Vyberte, co
            řešíte — ozveme se s cenou.
          </p>
        </div>
        <ul className="sz-grid">
          {sluzby.map((s, i) => (
            <li className="sz-card" key={s.tl}>
              <span className="sz-card-no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.tl}</h3>
              <p>{s.pop}</p>
              <span className="sz-card-tag">{s.detail}</span>
            </li>
          ))}
        </ul>
        <figure className="sz-services-fig">
          <img
            src="/section-1.webp"
            alt="Zblízka broušená hrana skleněné tabule připravené k zasklení"
            width={1400}
            height={900}
          />
          <figcaption>
            Každou hranu brousíme a leštíme — sklo, o které se nepořežete.
          </figcaption>
        </figure>
      </section>

      <section className="sz-trust" aria-labelledby="sz-t">
        <div className="sz-trust-media">
          <img
            src="/section-2.webp"
            alt="Hotové skleněné zábradlí a zasklená stěna instalované v interiéru"
            width={1200}
            height={1400}
          />
        </div>
        <div className="sz-trust-body">
          <h2 id="sz-t">
            Tým, který si poradí
            <br />
            se vším skleněným
          </h2>
          <p className="sz-trust-lede">
            Jsme parta zkušených sklenářů z Prahy 4. Pracujeme rychle,
            čistě a za ceny, které vám řekneme dopředu. Materiál bereme
            jen od prověřených dodavatelů — a co vám dnes zasklíme,
            drží.
          </p>
          <dl className="sz-facts">
            {duvody.map((d) => (
              <div className="sz-fact" key={d.l}>
                <dt>
                  <span className="sz-fact-k">{d.k}</span>
                  <span className="sz-fact-l">{d.l}</span>
                </dt>
                <dd>{d.t}</dd>
              </div>
            ))}
          </dl>
          <div className="sz-proj">
            <p className="sz-proj-lbl">Z naší dílny</p>
            <ul>
              <li>
                <strong>OC Bílá labuť</strong> — sklenářské práce při
                rekonstrukci legendárního obchodního domu.
              </li>
              <li>
                <strong>Celoskleněný konferenční stolek</strong> —
                slepený kus na míru, bez jediného šroubu.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
