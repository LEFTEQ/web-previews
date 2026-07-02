export const metadata = {
  title: "Jiří Čoupek — Klimatizace Brno | Montáž, servis, čištění",
  description:
    "Montáž a servis klimatizací v Brně a okolí. Jiří Čoupek, Brno-Komín — klimatizace do bytů, domů i aut, doplnění chladiva, dezinfekce, opravy. Po–Pá 7:30–17:30.",
  openGraph: {
    title: "Jiří Čoupek — Klimatizace Brno",
    description:
      "Montáž a servis klimatizací v Brně. Byty, domy i auta. Doplnění chladiva, dezinfekce, opravy. Brno-Komín, Po–Pá 7:30–17:30.",
    type: "website",
    locale: "cs_CZ",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230B2431'/%3E%3Cpath d='M6 11h20M6 16h14M6 21h20' stroke='%236FD6E8' stroke-width='2.6' stroke-linecap='round'/%3E%3C/svg%3E",
  },
};

const sluzby = [
  {
    kod: "R-32",
    nazev: "Montáž klimatizace do bytu a domu",
    popis:
      "Nástěnné i multisplit jednotky. Přijedu, změřím místnost, doporučím výkon a do týdne máte doma chlad i teplo — většina montáží je hotová za jeden den včetně úklidu.",
    detail: "Byty, rodinné domy, kanceláře v Brně a do 30 km",
  },
  {
    kod: "6 g/rok",
    nazev: "Servis a povinná kontrola těsnosti",
    popis:
      "Klimatizace ztrácí chladivo i výkon postupně — a účet za elektřinu roste. Zkontroluju těsnost okruhu, tlak chladiva a vyčistím výměník. Na kontrolu vás sám upozorním, hlídat termíny nemusíte.",
    detail: "Roční prohlídka, doplnění chladiva, revizní protokol",
  },
  {
    kod: "−40 °C",
    nazev: "Klimatizace v autě",
    popis:
      "Fouká slabě nebo je cítit zatuchlinou? Doplním chladivo, najdu netěsnost a ozónem zlikviduju bakterie ve výparníku. Na počkání, obvykle do hodiny.",
    detail: "Osobní i dodávková vozidla, chladiva R134a i R1234yf",
  },
  {
    kod: "24 h",
    nazev: "Oprava, když přestane chladit",
    popis:
      "V létě se u poruch snažím být do druhého dne. Diagnostiku řeknu na místě i s cenou opravy — žádné překvapení na faktuře.",
    popisB: "",
    detail: "Diagnostika, výměna dílů, dezinfekce jednotky",
  },
];

const duvody = [
  {
    t: "Jedno jméno, jedny ruce",
    p: "Kdo vám klimatizaci namontuje, ten ji i servisuje. Nevoláte na dispečink — voláte přímo mně a já vím, co máte doma na zdi.",
  },
  {
    t: "Komín, ne call centrum",
    p: "Dílnu mám na Absolonově 884/95 v Brně-Komíně. Po Brně jsem u vás obvykle do půl hodiny, po okolí do hodiny.",
  },
  {
    t: "Cena předem, ne po montáži",
    p: "Po zaměření dostanete jednu částku — jednotka, montáž, materiál, uvedení do provozu. Ta částka na konci platí.",
  },
];

export default function Page() {
  return (
    <main className="kl">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="Jiří Čoupek — klimatizace Brno">
        <div className="hero-topbar">
          <span className="wordmark">
            ČOUPEK<span className="wordmark-sub">/ klimatizace Brno</span>
          </span>
          <a className="hero-tel" href="tel:+420608963709">
            608 963 709
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Montáž · servis · chladivo — Brno-Komín</p>
          <h1 className="hero-title">
            <span className="line l1">Venku</span>
            <span className="line l2">
              <span className="temp hot">34&nbsp;°C.</span>
            </span>
            <span className="line l3">U&nbsp;vás doma</span>
            <span className="line l4">
              <span className="temp cold">23&nbsp;°C.</span>
            </span>
          </h1>
          <p className="hero-lead">
            Klimatizaci vám vyberu, namontuju a&nbsp;budu servisovat já osobně —
            Jiří Čoupek, Brno. Do bytu, domu i&nbsp;do auta. Montáž obvykle do
            týdne, servis do druhého dne.
          </p>
          <div className="hero-akce">
            <a className="btn btn-plna" href="tel:+420608963709">
              Zavolat: 608 963 709
            </a>
            <a className="btn btn-linka" href="mailto:jiri.coupek@seznam.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero-hodiny">
            Po–Pá 7:30–17:30 · mimo pracovní dobu po telefonické domluvě
          </p>
        </div>

        {/* signature: lamely výdechu klimatizace */}
        <div className="lamely" aria-hidden="true">
          <span className="lam" />
          <span className="lam" />
          <span className="lam" />
          <span className="lam" />
          <span className="lam" />
          <span className="lam" />
          <span className="lam" />
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h">Co pro vás udělám</h2>
          <p className="sekce-pozn">
            Čtyři věci, které řeším každý den. Nic víc neslibuju — tyhle umím
            pořádně.
          </p>
        </div>

        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.nazev} className="karta">
              <span className="karta-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-vnitrek">
          <div className="duvera-text">
            <h2 id="duvera-h">
              Řemeslník z&nbsp;Komína,
              <br />
              ne firma s&nbsp;dispečinkem
            </h2>
            <p className="duvera-uvod">
              Klimatizacím se věnuju přes dvacet let — začínal jsem u&nbsp;těch
              v&nbsp;autech, dnes chladím byty a&nbsp;domy po celém Brně. Zákazníci
              se ke mně vracejí, protože zvedám telefon a&nbsp;držím slovo.
            </p>

            <ul className="duvody">
              {duvody.map((d) => (
                <li key={d.t}>
                  <h3>{d.t}</h3>
                  <p>{d.p}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="stitek" aria-label="Provozní údaje">
            <p className="stitek-nadpis">Provozní štítek</p>
            <dl>
              <div>
                <dt>Provozovna</dt>
                <dd>
                  Absolonova 884/95
                  <br />
                  624 00 Brno-Komín
                </dd>
              </div>
              <div>
                <dt>Mobil</dt>
                <dd>
                  <a href="tel:+420608963709">+420 608 963 709</a>
                </dd>
              </div>
              <div>
                <dt>Pevná linka</dt>
                <dd>
                  <a href="tel:+420541223415">+420 541 223 415</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:jiri.coupek@seznam.cz">jiri.coupek@seznam.cz</a>
                </dd>
              </div>
              <div>
                <dt>Provozní doba</dt>
                <dd>Po–Pá 7:30–17:30</dd>
              </div>
              <div>
                <dt>IČO</dt>
                <dd>66588006</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
