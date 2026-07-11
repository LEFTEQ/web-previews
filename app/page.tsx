import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A MOBIL — servis mobilů, tabletů a notebooků v Plzni",
  description:
    "Prasklý displej, vybitá baterie nebo voda v telefonu? V Plzni naproti synagoze opravíme mobil, tablet i notebook. Diagnostika zdarma před opravou, cenu řekneme předem, opravu sledujete online.",
  openGraph: {
    title: "A MOBIL — servis mobilů v Plzni",
    description:
      "Opravy displejů, baterií, nabíjení i záchrana dat. Diagnostika před opravou, jasná cena předem, servis na počkání. Plzeň, naproti synagoze.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Servisní stůl A MOBIL v Plzni" }],
  },
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23121317'/><rect x='11' y='6' width='10' height='20' rx='2.4' fill='none' stroke='%23ff5a1f' stroke-width='2'/><circle cx='16' cy='22.5' r='1.4' fill='%23ff5a1f'/></svg>",
  },
};

const kategorie = [
  { kod: "01", nazev: "Displeje", popis: "Praskliny, mrtvé pixely, nereagující dotyk. Měníme LCD i OLED včetně skla a rámečku.", cas: "od 45 min" },
  { kod: "02", nazev: "Baterie", popis: "Telefon vydrží půl dne? Vyměníme unavenou baterii v mobilu, tabletu i notebooku.", cas: "na počkání" },
  { kod: "03", nazev: "Nabíjení", popis: "Konektor se viklá nebo nenabíjí. Vyčistíme, přepájíme nebo vyměníme celý port.", cas: "od 30 min" },
  { kod: "04", nazev: "Voda v telefonu", popis: "Chemické vyčištění desky po zásahu kapalinou. Čím dřív přinesete, tím větší šance.", cas: "do 48 h" },
  { kod: "05", nazev: "Záchrana dat", popis: "Fotky a kontakty z poškozeného zařízení. Bez vašeho souhlasu nic nekopírujeme.", cas: "dle stavu" },
  { kod: "06", nazev: "Odblokování", popis: "Zapomenutý účet, FRP zámek, blokace po resetu. Ověříme přístup a pomůžeme.", cas: "dle případu" },
];

const kroky = [
  { c: "1", t: "Přinesete zařízení", d: "Osobně na pobočku v Plzni, nebo pošlete přes Zásilkovnu. Založíme opravu na místě." },
  { c: "2", t: "Uděláme diagnostiku", d: "Zjistíme, co je opravdu rozbité, a co ne. Diagnostika je bez závazku." },
  { c: "3", t: "Řekneme cenu předem", d: "Napíšeme jasný návrh — originální, nebo neoriginální díl. Vy schválíte jedním klikem." },
  { c: "4", t: "Opravíme a otestujeme", d: "Vyměníme díl, otestujeme funkčnost a stav opravy sledujete online." },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#" aria-label="A MOBIL — servis v Plzni">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-slot" />
          </span>
          <span className="brand-word">
            <strong>A&nbsp;MOBIL</strong>
            <em>servis · Plzeň</em>
          </span>
        </a>
        <a className="call" href="tel:+420723122199">
          <span className="call-dot" aria-hidden="true" />
          723&nbsp;122&nbsp;199
        </a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img src="/hero.webp" alt="Servisní stůl A MOBIL v Plzni s rozebraným telefonem a nářadím" />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Naproti synagoze · Plzeň</p>
          <h1>
            Prasklý displej<span className="crack" aria-hidden="true">›‹</span>
            <br />opravíme, než dojde káva.
          </h1>
          <p className="lede">
            Mobily, tablety i notebooky většiny značek. Nejdřív diagnostika, pak jasná cena —
            teprve potom šroubovák. A vy sledujete opravu online.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420723122199">Zavolat servisu</a>
            <a className="btn btn-ghost" href="mailto:servis@amobil.cz">Napsat, co se stalo</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Diagnostika</dt><dd>bez závazku</dd></div>
            <div><dt>Cenu řekneme</dt><dd>předem</dd></div>
            <div><dt>Běžná oprava</dt><dd>na počkání</dd></div>
          </dl>
        </div>
      </section>

      <section className="services" aria-labelledby="services-h">
        <div className="sec-head">
          <p className="eyebrow">Co nejčastěji spravujeme</p>
          <h2 id="services-h">Šest poruch, které přinášíte nejvíc</h2>
          <p className="sec-note">
            U každé opravy se předem domluvíme na originálním, nebo neoriginálním dílu.
            Cenu stanovíme až po diagnostice — nikdy dřív.
          </p>
        </div>
        <ul className="grid">
          {kategorie.map((k) => (
            <li className="card" key={k.kod}>
              <span className="card-kod">{k.kod}</span>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
              <span className="card-cas">{k.cas}</span>
            </li>
          ))}
        </ul>
        <p className="grid-more">
          Spravujeme i PC, chytré hodinky, sluchátka a další drobnou elektroniku.
          Nevíte, jestli to jde opravit? <a href="tel:+420723122199">Zavolejte</a> a poradíme.
        </p>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-media">
          <img src="/section-1.webp" alt="Technik A MOBIL při diagnostice zařízení" />
        </div>
        <div className="trust-body">
          <p className="eyebrow">Jak u nás oprava probíhá</p>
          <h2 id="trust-h">Žádný chaos. Čtyři kroky a víte, na čem jste.</h2>
          <ol className="steps">
            {kroky.map((s) => (
              <li key={s.c}>
                <span className="step-c">{s.c}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="trust-strip">
            <img src="/section-2.webp" alt="Pobočka A MOBIL v Plzni naproti synagoze" />
            <div className="trust-strip-text">
              <h3>Najdete nás v centru Plzně</h3>
              <p>
                Pobočka i servis naproti synagoze. Data bez vašeho souhlasu nekopírujeme
                a drobnou elektroniku od vás vezmeme k ekologické likvidaci.
              </p>
              <a className="btn btn-primary" href="tel:+420723122199">Domluvit opravu · 723&nbsp;122&nbsp;199</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
