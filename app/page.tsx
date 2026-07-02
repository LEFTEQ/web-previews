// REHA – Bc. Barbora Knoblochová, soukromá rehabilitační praxe, Plzeň-Bory
// Statický náhled: hero + služby/ceník + důvěra/o nás. Bez footeru (doplní studio).

const problemy = [
  {
    okruh: "Pohybový aparát",
    body: [
      "Bolesti zad, krční páteře a svalových úponů",
      "Potíže z jednostranného zatěžování — práce vsedě, sport, manuální práce",
      "Migrény a bolesti hlavy z přetížené šíje",
      "Poúrazové a pooperační stavy, sportovní zranění",
    ],
  },
  {
    okruh: "Fyzioterapie pro ženy",
    body: [
      "Bolesti zad v těhotenství",
      "Terapie bolestivých poporodních stavů",
      "Vývojová fyzioterapie",
    ],
  },
  {
    okruh: "Držení těla",
    body: [
      "Vadné držení těla u dětí i dospělých",
      "Svalové dysbalance a jejich korekce",
    ],
  },
  {
    okruh: "Očista těla",
    body: [
      "Manuální lymfodrenáž, podpora imunity",
      "Prevence a redukce celulitidy, maderoterapie",
    ],
  },
];

const cenik = [
  { nazev: "Fyzioterapie", cas: "30 min", cena: "550 Kč" },
  { nazev: "Fyzioterapie", cas: "45 min", cena: "750 Kč" },
  { nazev: "Fyzioterapie", cas: "60 min", cena: "890 Kč" },
  { nazev: "Ruční lymfodrenáž", cas: "60 min", cena: "990 Kč", pozn: "vždy včetně uvolnění mízních uzlin" },
  { nazev: "Maderoterapie", cas: "75 min", cena: "1 190 Kč", pozn: "novinka" },
  { nazev: "Tape", cas: "v rámci / bez terapie", cena: "200 / 300 Kč" },
];

const duvera = [
  {
    t: "Od roku 2010",
    d: "Patnáct let souvislé praxe v jedné ordinaci. Klienti se k nám vracejí — mnozí od prvních let.",
  },
  {
    t: "Svaz fyzioterapeutů ČR",
    d: "Jsme členem Svazu fyzioterapeutů České republiky. Pracujeme podle ověřených terapeutických postupů.",
  },
  {
    t: "Soukromí a klid",
    d: "Oddělené šatny, klimatizované prostory a vždy jen jeden klient. Žádná čekárna plná lidí.",
  },
  {
    t: "Bezbariérový přístup",
    d: "Dostanete se k nám na vozíku i s kočárkem. Ordinace je v přízemí, hned vedle CrossCafe na Borech.",
  },
];

export default function Page() {
  return (
    <main className="reha">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="REHA — soukromá rehabilitační praxe">
            REHA<span className="wordmark-dot">·</span>
          </span>
          <span className="hero-loc">Plzeň-Bory · Boettingerova 26</span>
        </div>

        {/* Signature: „páteř" — svislá osa z obratlových segmentů, kolem ní se rovná typografie */}
        <div className="hero-body">
          <div className="spine" aria-hidden="true">
            <span className="vert v1" />
            <span className="vert v2" />
            <span className="vert v3" />
            <span className="vert v4" />
            <span className="vert v5" />
            <span className="vert v6" />
            <span className="vert v7" />
          </div>

          <div className="hero-text">
            <p className="hero-eyebrow">Fyzioterapie · lymfodrenáž · maderoterapie</p>
            <h1 className="hero-title">
              <span className="line l1">Záda, která</span>
              <span className="line l2 accent">zase držíte</span>
              <span className="line l3">rovně.</span>
            </h1>
            <p className="hero-sub">
              Soukromá rehabilitační praxe Bc.&nbsp;Barbory Knoblochové. Od roku 2010
              pomáháme v Plzni namáhaným tělům — individuálně, v klidu a v soukromí.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420731148569">
                Zavolat a objednat se — 731 148 569
              </a>
              <a className="btn btn-ghost" href="#cenik">
                Služby a ceník
              </a>
            </div>
            <p className="hero-note">Po–Pá 7.00–20.00 · před návštěvou se prosím telefonicky objednejte</p>
          </div>
        </div>
      </header>

      {/* ---------- SEKCE 1: PROBLÉMY + CENÍK ---------- */}
      <section className="sekce sekce-sluzby" id="cenik" aria-labelledby="h-sluzby">
        <div className="sekce-inner">
          <p className="eyebrow">S čím za námi lidé chodí</p>
          <h2 id="h-sluzby" className="h2">
            Také vás něco trápí? Tady jste na správném místě.
          </h2>

          <div className="problemy-grid">
            {problemy.map((p) => (
              <article className="problem-karta" key={p.okruh}>
                <h3 className="problem-titul">{p.okruh}</h3>
                <ul className="problem-list">
                  {p.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="cenik-blok">
            <div className="cenik-head">
              <h3 className="h3">Kolik péče stojí</h3>
              <p className="cenik-pozn">
                Platíte za čas terapeuta — délku terapie doporučíme podle vašich potíží
                při objednání. Na přání vystavíme dárkový poukaz.
              </p>
            </div>
            <ul className="cenik-list">
              {cenik.map((c) => (
                <li className="cenik-radek" key={c.nazev + c.cas}>
                  <span className="cenik-nazev">
                    {c.nazev}
                    {c.pozn ? <em className="cenik-em"> — {c.pozn}</em> : null}
                  </span>
                  <span className="cenik-cas">{c.cas}</span>
                  <span className="cenik-cena">{c.cena}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- SEKCE 2: DŮVĚRA / O NÁS ---------- */}
      <section className="sekce sekce-onas" aria-labelledby="h-onas">
        <div className="sekce-inner">
          <p className="eyebrow eyebrow-svetly">Kdo se o vás postará</p>
          <h2 id="h-onas" className="h2 h2-svetly">
            Jedna terapeutka, jedna ordinace, patnáct let práce s tělem.
          </h2>
          <p className="onas-perex">
            V ordinaci vás vždy přivítá Bc.&nbsp;Barbora Knoblochová osobně. Žádné střídání
            terapeutů — vaše tělo i jeho historii zná od první návštěvy. Najdete nás na
            Borech: tramvají č.&nbsp;4 na zastávku Dvořákova, vchod hned vedle CrossCafe.
            Autem zaparkujete přímo před budovou.
          </p>

          <dl className="duvera-grid">
            {duvera.map((d, i) => (
              <div className="duvera-bod" key={d.t}>
                <span className="duvera-znak" aria-hidden="true" />
                <dt className="duvera-t">{d.t}</dt>
                <dd className="duvera-d">{d.d}</dd>
              </div>
            ))}
          </dl>

          <div className="onas-kontakt">
            <p className="onas-kontakt-text">
              Objednání je jen telefonické — vybereme spolu termín i délku terapie.
            </p>
            <a className="btn btn-primary" href="tel:+420731148569">
              Zavolat 731 148 569
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
