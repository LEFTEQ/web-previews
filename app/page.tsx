// ZAFI CZ — reklamní agentura & polepy vozidel, Olomouc
// Koncept: „fólie na voze" — celá stránka je řezaná plotrem.
// Signature prvek: diagonální pruh fólie táhnoucí se přes hero jako polep karoserie,
// s řeznou linkou (dashed cut-line) a registračními značkami z tiskové/plotrové praxe.

const sluzby = [
  {
    kod: "CUT",
    nazev: "Polepy vozidel",
    popis:
      "Naše parketa. Stovky polepených aut za sebou — od nápisu na dveře po celopolep dodávky nebo náklaďáku. Fólii nařežeme, aplikujeme a auto vám vrátíme jako pojízdnou reklamu.",
    detail: "osobáky · dodávky · kamiony · změna barvy vozu",
  },
  {
    kod: "MHD",
    nazev: "Tramvaje a autobusy",
    popis:
      "Celopolepy vozů MHD Olomouc děláme roky a děláme je rádi. Tramvaj je největší plakát ve městě — a my víme, jak na zaoblený plech a stovky nýtů dostat grafiku bez bublin.",
    detail: "celopolepy tramvají · autobusy · včetně focení",
  },
  {
    kod: "PRINT",
    nazev: "Výroba reklamy",
    popis:
      "Klasika, kterou máme v ruce: plotrované samolepky, tisk na fólie a backlity, bannery, polepy výloh, roll-upy, A-stojany, fotoobrazy i 3D loga na fasádu.",
    detail: "samolepky · bannery · výlohy · 3D nápisy",
  },
  {
    kod: "GRAF",
    nazev: "Grafika a identita",
    popis:
      "Nebyli bychom správná reklamka bez šikovných grafiků. Logo, logomanuál, vizitky, katalog, web — nebo rovnou celá vizuální identita firmy. Sem s tím.",
    detail: "loga · tiskoviny · weby · corporate identity",
  },
  {
    kod: "MERCH",
    nazev: "Reklamní předměty",
    popis:
      "Aby toho vaše značka měla plné ruce: obrandované hrnky, propisky, firemní textil, diáře, deštníky. Poradíme, co dává smysl, a dodáme to potištěné.",
    detail: "hrnky · textil · propisky · diáře",
  },
];

const tym = [
  {
    jmeno: "Adéla Volf",
    role: "produkce / jednatelka",
    veta: "Ozvěte se mi s čímkoli od vizitky po celou kampaň — provedu vás zakázkou od poptávky po předání.",
    tel: "+420 607 101 638",
    telHref: "+420607101638",
    mail: "volf@zafi.cz",
  },
  {
    jmeno: "Petr Sofka",
    role: "produkce / jednatel",
    veta: "Chcete polepit auto, dodávku nebo tramvaj? Pak volejte mně. Pomůžu i s cedulemi a plachtami.",
    tel: "+420 777 776 463",
    telHref: "+420777776463",
    mail: "sofka@zafi.cz",
  },
  {
    jmeno: "Petr Spáčil",
    role: "grafika / produkce",
    veta: "Logo, brožura, grafika polepu — to jsou věci, které mě vážně baví. Pošlete zadání, vrátím návrh.",
    tel: "+420 777 152 652",
    telHref: "+420777152652",
    mail: "spacil@zafi.cz",
  },
  {
    jmeno: "Marcela Vymazalová",
    role: "reklamní předměty / faktury",
    veta: "Vyberu s vámi reklamní předměty, které lidi neodloží. A jsem to já, od koho přijde faktura.",
    tel: "+420 774 152 654",
    telHref: "+420774152654",
    mail: "vymazalova@zafi.cz",
  },
];

const reference = [
  "Celopolep tramvaje MHD Olomouc",
  "Celopolep autobusu MS 2015",
  "3D nápis pro UP Olomouc",
  "Polep akvária v ZOO Svatý Kopeček",
  "Celopolep vozu Porsche",
  "Celopolep karavanu pro koně",
];

export default function Page() {
  return (
    <main className="zafi">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="ZAFI — reklamní agentura Olomouc">
        <div className="hero-top">
          <span className="wordmark" aria-label="ZAFI">
            Z<span className="wm-cut">A</span>FI
          </span>
          <span className="hero-loc">reklamní agentura · Olomouc</span>
        </div>

        {/* signature: diagonální pruh fólie s řeznou linkou */}
        <div className="foil" aria-hidden="true">
          <div className="foil-band">
            <span className="foil-label">FÓLIE · ŘEZ · APLIKACE — tř. Svornosti 35 — ZAFI CZ spol. s r.o. — FÓLIE · ŘEZ · APLIKACE — tř. Svornosti 35 — ZAFI CZ spol. s r.o. —</span>
          </div>
          <div className="foil-cutline" />
          <span className="regmark regmark-a" />
          <span className="regmark regmark-b" />
        </div>

        <h1 className="hero-title">
          <span className="ht-line ht-1">Polepíme vám auto.</span>
          <span className="ht-line ht-2">Klidně i tramvaj.</span>
        </h1>

        <p className="hero-sub">
          Přes 20 let řežeme fólie, tiskneme bannery a lepíme reklamu na všechno, co
          v Olomouci jezdí i stojí — od výlohy na Horním náměstí po celopolep vozu MHD.
        </p>

        <div className="hero-facts" role="list">
          <span role="listitem">stovky polepených vozidel</span>
          <span role="listitem">celopolepy tramvají a autobusů MHD</span>
          <span role="listitem">vlastní grafické studio</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <h2 id="sluzby-h">Co pro vás vyrobíme</h2>
          <p className="sec-note">
            Neumíme všechno a ani se o to nesnažíme. Tohle ale umíme pořádně:
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="karta">
              <span className="karta-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="karta-detail">{s.detail}</span>
            </li>
          ))}
          <li className="karta karta-ref" aria-label="Vybrané realizace">
            <span className="karta-kod" aria-hidden="true">
              REAL
            </span>
            <h3>Z našich realizací</h3>
            <ul className="ref-list">
              {reference.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </li>
        </ul>
      </section>

      {/* ===== TÝM / DŮVĚRA ===== */}
      <section className="tym" aria-labelledby="tym-h">
        <div className="sec-head">
          <h2 id="tym-h">Voláte přímo lidem, kteří to dělají</h2>
          <p className="sec-note">
            Žádné callcentrum. Jsme čtyři a každý ve firmě dělá to svoje — takže se
            dovoláte rovnou tomu, kdo vaši zakázku vezme do ruky.
          </p>
        </div>

        <ul className="tym-grid">
          {tym.map((t) => (
            <li key={t.mail} className="osoba">
              <span className="osoba-inic" aria-hidden="true">
                {t.jmeno
                  .split(" ")
                  .map((c) => c[0])
                  .join("")}
              </span>
              <div className="osoba-info">
                <h3>{t.jmeno}</h3>
                <span className="osoba-role">{t.role}</span>
                <p>{t.veta}</p>
                <div className="osoba-kontakt">
                  <a href={`tel:${t.telHref}`}>{t.tel}</a>
                  <a href={`mailto:${t.mail}`}>{t.mail}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="tym-adresa">
          Najdete nás na adrese <strong>tř. Svornosti 35, 779 00 Olomouc</strong> —
          zastavte se, ukážeme vám vzorky fólií i hotové práce.
        </p>
      </section>
    </main>
  );
}
