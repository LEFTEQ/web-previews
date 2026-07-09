import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      nazev: "Konzultace a 3D model střechy",
      text: "Změříme spotřebu, orientaci a sklon střechy a vytvoříme 3D model, na kterém uvidíte, jak bude instalace vypadat ještě před montáží. Spočítáme úspory i návratnost.",
    },
    {
      cislo: "02",
      nazev: "Dotace a připojení do sítě",
      text: "Vyřídíme žádost o dotaci i připojení k distribuční síti za vás. Papírování necháte na nás, dostanete jen k podpisu hotové dokumenty.",
    },
    {
      cislo: "03",
      nazev: "Montáž na klíč za pevnou cenu",
      text: "Kompletní instalaci provedou certifikovaní technici. Cena z kalkulace platí — žádné dodělávky, žádné skryté poplatky, žádná příprava na vaší straně.",
    },
    {
      cislo: "04",
      nazev: "Požární bezpečnost pod dohledem",
      text: "Systém instalujeme podle aktuálních i připravovaných požárních norem. Na jejich dodržení dohlíží náš certifikovaný odborník na požární bezpečnost.",
    },
    {
      cislo: "05",
      nazev: "Servis a chytré řízení",
      text: "Po instalaci reagujeme okamžitě. Chytré řízení spotřeby a bateriové úložiště zajistí, že vyrobenou energii spotřebujete co nejvíc sami.",
    },
  ];

  const realizace = [
    {
      misto: "Kralupy nad Vltavou",
      typ: "Rodinný dům",
      vykon: "8 kWp",
      baterie: "Dyness Tower 10,66 kWh",
      stridac: "GOODWE 10K-ET",
    },
    {
      misto: "Doksy",
      typ: "Rodinný dům",
      vykon: "9,9 kWp",
      baterie: "Dyness Tower 10,66 kWh",
      stridac: "GOODWE 10K-ET",
      panely: "22× Aiko Black Hole",
    },
    {
      misto: "Amispol, Ústí nad Labem",
      typ: "Firma",
      vykon: "19,44 kWp",
      baterie: "Solax T58 17,4 kWh",
      stridac: "Solax X3-Hybrid-10.0",
      panely: "36× Ulica 540 W",
    },
    {
      misto: "Obec Líšťany",
      typ: "Obec",
      vykon: "40,5 kWp",
      baterie: "Solax T58 40,6 kWh",
      stridac: "2× Solax X3-ULT-20K",
      panely: "81× Trina",
    },
  ];

  return (
    <main className="pg">
      <header className="pg-top">
        <a className="pg-mark" href="#" aria-label="Profi green energy — úvod">
          <span className="pg-mark__sun" aria-hidden="true" />
          <span className="pg-mark__txt">
            profi<strong>green</strong>energy
          </span>
        </a>
        <a className="pg-tel" href="tel:+420602218249">
          +420 602 218 249
        </a>
      </header>

      <section className="pg-hero" aria-labelledby="hero-nadpis">
        <div className="pg-hero__panel">
          <img
            className="pg-hero__img"
            src="/hero.webp"
            alt="Fotovoltaické panely na střeše rodinného domu instalované firmou Profi green energy"
            width={1600}
            height={1100}
          />
          <div className="pg-hero__grid" aria-hidden="true" />
        </div>

        <div className="pg-hero__copy">
          <p className="pg-eyebrow">Fotovoltaika na klíč · Kralupy nad Vltavou</p>
          <h1 id="hero-nadpis" className="pg-hero__nadpis">
            Slunce nad střechou,
            <br />
            <span className="pg-hl">jistota</span> uvnitř.
          </h1>
          <p className="pg-hero__lead">
            Fotovoltaika s baterií a chytrým řízením od{" "}
            <strong>234&nbsp;900&nbsp;Kč</strong>. Montáž provedou certifikovaní
            technici, na požární bezpečnost dohlíží náš odborník a cena z
            kalkulace platí až do konce.
          </p>
          <div className="pg-hero__akce">
            <a className="pg-btn" href="tel:+420602218249">
              Zavolat a poradit se
            </a>
            <a className="pg-btn pg-btn--ghost" href="mailto:obchod@pgen.cz">
              Napsat na obchod@pgen.cz
            </a>
          </div>

          <dl className="pg-hero__meta">
            <div>
              <dt>Od</dt>
              <dd>234 900 Kč</dd>
            </div>
            <div>
              <dt>Dotace i připojení</dt>
              <dd>vyřídíme za vás</dd>
            </div>
            <div>
              <dt>Cena z kalkulace</dt>
              <dd>pevná, bez příplatků</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pg-proces" aria-labelledby="proces-nadpis">
        <div className="pg-proces__head">
          <p className="pg-eyebrow">Jak to u nás probíhá</p>
          <h2 id="proces-nadpis">Od první schůzky k vlastní elektrárně v pěti krocích</h2>
          <p className="pg-proces__perex">
            Nemusíte rozumět měničům ani dotačním formulářům. Vy řeknete, co
            potřebujete, my se postaráme o zbytek — od výpočtu úspor po servis
            po letech provozu.
          </p>
        </div>

        <ol className="pg-kroky">
          {kroky.map((k) => (
            <li className="pg-krok" key={k.cislo}>
              <span className="pg-krok__cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="pg-krok__telo">
                <h3>{k.nazev}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pg-obory">
          <span>Instalujeme pro</span>
          <em>rodinné domy</em>
          <em>firmy</em>
          <em>obce</em>
        </div>
      </section>

      <section className="pg-ref" aria-labelledby="ref-nadpis">
        <div className="pg-ref__intro">
          <img
            className="pg-ref__foto"
            src="/section-1.webp"
            alt="Instalace fotovoltaické elektrárny technikem Profi green energy"
            width={1200}
            height={900}
          />
          <div className="pg-ref__slovo">
            <p className="pg-eyebrow">Naše realizace</p>
            <h2 id="ref-nadpis">
              Domy, firmy i obce, které už vyrábějí vlastní proud
            </h2>
            <p>
              Každá instalace má konkrétní panely, baterii i střídač — vybíráme
              komponenty od prověřených výrobců s dlouhou životností. Níže jsou
              čtyři z desítek dokončených projektů po celém kraji.
            </p>
            <img
              className="pg-ref__foto2"
              src="/section-2.webp"
              alt="Dokončená fotovoltaická instalace s bateriovým úložištěm"
              width={1200}
              height={900}
            />
          </div>
        </div>

        <ul className="pg-cards">
          {realizace.map((r) => (
            <li className="pg-card" key={r.misto}>
              <div className="pg-card__hd">
                <span className="pg-card__typ">{r.typ}</span>
                <h3>{r.misto}</h3>
              </div>
              <div className="pg-card__vykon">
                <span>{r.vykon}</span>
                <small>instalovaný výkon</small>
              </div>
              <dl className="pg-card__spec">
                {r.panely ? (
                  <div>
                    <dt>Panely</dt>
                    <dd>{r.panely}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Baterie</dt>
                  <dd>{r.baterie}</dd>
                </div>
                <div>
                  <dt>Střídač</dt>
                  <dd>{r.stridac}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <p className="pg-ref__adresa">
          Najdete nás na adrese Na Šachtě 192, 278 01 Kralupy nad Vltavou.
          Napište na{" "}
          <a href="mailto:obchod@pgen.cz">obchod@pgen.cz</a> nebo zavolejte{" "}
          <a href="tel:+420602218249">+420 602 218 249</a>.
        </p>
      </section>
    </main>
  );
}
