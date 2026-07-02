export const metadata = {
  title: "Dana Michlová — Rámování obrazů, Vršovice",
  description:
    "Rámování obrazů v Praze 10 – Vršovicích. 500 druhů dřevěných lišt, 33 profilů Nielsen, pasparty na míru, antireflexní skla s UV filtrem. Donská 17, u Krymské.",
  openGraph: {
    title: "Dana Michlová — Rámování obrazů, Vršovice",
    description:
      "500 druhů dřevěných lišt, pasparty na míru, napínání olejů, skla s UV filtrem. Rámařská dílna na Donské 17, Praha 10 – Vršovice.",
    locale: "cs_CZ",
    type: "website",
  },
};

const listy = [
  {
    n: "500",
    unit: "druhů",
    title: "Dřevěné lišty",
    body: "Přírodní, mořené, barvené i zlacené. Oválné a kruhové rámy do průměru 50 cm, rovné lišty do délky 3 metrů. Lišty od výrobců z Česka, Itálie, Španělska a Německa.",
  },
  {
    n: "33",
    unit: "profilů",
    title: "Kovové lišty Nielsen",
    body: "Celá barevná škála hliníkových profilů Nielsen — subtilní řešení pro grafiky, fotografie a moderní interiéry.",
  },
  {
    n: "135",
    unit: "barev",
    title: "Pasparty",
    body: "100 barev kartonu (pH neutrální, do 80 × 120 cm) a 35 barev plátna (do 70 × 100 cm). Výřezy pravoúhlé, kruhové i oválné. Na přání paspartu potáhneme i vaší látkou, třeba sametem.",
  },
  {
    n: "UV",
    unit: "filtr",
    title: "Skla",
    body: "Čirá i antireflexní skla s UV filtrem, která chrání barvy vašeho obrazu před vyblednutím na slunci.",
  },
];

const dilna = [
  {
    label: "Napínání",
    body: "Oleje a akryly napneme na blind rámy — plátno rovnoměrně vypnuté, připravené k rámování nebo k pověšení tak, jak je.",
  },
  {
    label: "Lepení",
    body: "Plakáty, mapy a tisky nalepíme na odlehčené desky. Nezvlní se a drží roky.",
  },
  {
    label: "Klipy na míru",
    body: "Bezrámové klipy vyrobíme přesně na rozměr vašeho díla, včetně možnosti vložit paspartu.",
  },
];

export default function Page() {
  return (
    <main className="ram">
      {/* ————— HERO ————— */}
      <header className="hero" aria-label="Rámování obrazů Dana Michlová">
        <div className="hero-frame">
          <div className="hero-frame-inner">
            <p className="wordmark">
              Dana Michlová<span className="wordmark-dot" aria-hidden="true">·</span>
              <span className="wordmark-sub">rámařství Vršovice</span>
            </p>

            <h1 className="hero-title">
              <span className="ht-line ht-1">Obraz</span>
              <span className="ht-line ht-2">si zaslouží</span>
              <span className="ht-line ht-3">svůj rám.</span>
            </h1>

            <p className="hero-lead">
              Rámařská dílna na Donské 17, dvě zastávky od náměstí Míru. Přineste
              olej, grafiku, fotku z cest nebo dětskou kresbu — vybereme lištu,
              paspartu a sklo přímo k vašemu dílu, ne z katalogu „univerzálních“ řešení.
            </p>

            <div className="hero-facts" role="list">
              <span role="listitem">500 dřevěných lišt</span>
              <span role="listitem">33 profilů Nielsen</span>
              <span role="listitem">pasparty na míru</span>
              <span role="listitem">skla s UV filtrem</span>
            </div>

            <p className="hero-hours">
              Otevřeno po–st 10–18, čt 10–19 · tram 4, 22, 23 — Krymská
            </p>
          </div>

          {/* rohové profily lišty — signature prvek */}
          <span className="corner c-tl" aria-hidden="true" />
          <span className="corner c-tr" aria-hidden="true" />
          <span className="corner c-bl" aria-hidden="true" />
          <span className="corner c-br" aria-hidden="true" />
        </div>
      </header>

      {/* ————— SEKCE: NABÍDKA ————— */}
      <section className="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Z čeho vybíráte</p>
          <h2 id="nabidka-h">Lišta, pasparta, sklo — tři vrstvy jednoho rámu</h2>
        </div>

        <div className="nabidka-grid">
          {listy.map((item) => (
            <article className="karta" key={item.title}>
              <p className="karta-cislo">
                {item.n} <small>{item.unit}</small>
              </p>
              <h3>{item.title}</h3>
              <p className="karta-text">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ————— SEKCE: DÍLNA + CESTA ————— */}
      <section className="dilna" aria-labelledby="dilna-h">
        <div className="dilna-wrap">
          <div className="dilna-prace">
            <div className="section-head section-head--light">
              <p className="eyebrow">Co se děje v dílně</p>
              <h2 id="dilna-h">Rámujeme rukama, ne strojem na míry</h2>
            </div>

            <ul className="prace-list">
              {dilna.map((p) => (
                <li key={p.label}>
                  <h3>{p.label}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="dilna-cesta" aria-label="Kde nás najdete">
            <h3 className="cesta-title">Trefíte k nám</h3>
            <p className="cesta-adresa">
              Donská 17<br />
              Praha 10 – Vršovice, 101 00
            </p>
            <dl className="cesta-dl">
              <div>
                <dt>Tramvají</dt>
                <dd>4, 22 nebo 23 na zastávku Krymská — druhá zastávka z náměstí Míru směrem do Vršovic.</dd>
              </div>
              <div>
                <dt>Autem</dt>
                <dd>Z „Míráku“ po Francouzské dolů, vpravo na náměstíčko s hodinami — místní mu říkají „U Pilotů“ nebo „V Mexiku“.</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>po–st 10.00–18.00<br />čt 10.00–19.00</dd>
              </div>
              <div>
                <dt>Domluvte se předem</dt>
                <dd>
                  <a className="cesta-tel" href="tel:+420605784867">+420 605 784 867</a>
                  <br />
                  <a className="cesta-mail" href="mailto:michlovadana@seznam.cz">michlovadana@seznam.cz</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
