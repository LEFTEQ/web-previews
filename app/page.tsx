const sluzby = [
  {
    kod: "SVJ",
    nazev: "Správa pro SVJ a bytová družstva",
    popis:
      "Vedeme účetnictví domu, hlídáme fond oprav, připravujeme podklady na shromáždění a vymáháme dlužné zálohy. Výbor od nás dostává přehledy, kterým rozumí — ne kilo papírů.",
    body: ["Účetnictví a předpisy záloh", "Roční vyúčtování služeb", "Příprava a vedení shromáždění"],
  },
  {
    kod: "BYT",
    nazev: "Správa nájemních bytů a domů",
    popis:
      "Majitelům činžovních domů a bytů v Plzni zajistíme vše od inzerce a výběru nájemníka po předání bytu a kontrolu plateb. Vy dostáváte nájem, my řešíme zbytek.",
    body: ["Výběr a prověření nájemníků", "Nájemní smlouvy a předávací protokoly", "Kontrola plateb a upomínky"],
  },
  {
    kod: "TECH",
    nazev: "Technická správa a havárie",
    popis:
      "Pravidelné revize, plánování oprav a havarijní služba s ověřenými plzeňskými řemeslníky. Když ve tři ráno praskne stoupačka, voláte jedno číslo — naše.",
    body: ["Havarijní dispečink nonstop", "Revize plynu, elektro, výtahů", "Plán oprav a výběr dodavatelů"],
  },
  {
    kod: "EKO",
    nazev: "Ekonomika a právní servis",
    popis:
      "Rozpočty domu, kontrola faktur, vymáhání pohledávek a smlouvy s dodavateli energií. Každou korunu z fondu oprav umíme doložit — na požádání, ne až na urgenci.",
    body: ["Rozpočet a hospodaření domu", "Vymáhání pohledávek", "Smlouvy s dodavateli"],
  },
];

const zasady = [
  {
    titulek: "Odpovídáme do 24 hodin",
    text: "Na e-mail i telefon. Předseda výboru ani majitel bytu nečeká týden na to, aby se dozvěděl, co se děje s jeho domem.",
  },
  {
    titulek: "Vyúčtování bez záhad",
    text: "Každá položka v ročním vyúčtování má svůj doklad. Kdykoli si řeknete, ukážeme faktury, výpisy i smlouvy — online nebo u nás v kanceláři.",
  },
  {
    titulek: "Známe plzeňské domy",
    text: "Od pavlačových domů na Roudné po panelová sídliště na Lochotíně a Borech. Víme, co která zástavba potřebuje a kteří řemeslníci ji znají.",
  },
];

const reference = [
  {
    citace:
      "Po letech chaosu máme poprvé vyúčtování, kterému rozumí i lidé v domě. A když jsme měli havárii vody, do hodiny tu byl instalatér.",
    autor: "Předseda SVJ, Klatovská třída",
    dum: "24 jednotek",
  },
  {
    citace:
      "Spravují mi tři byty na Slovanech. Nájemníky vybírají pečlivě, peníze chodí včas a já s tím nemám žádnou práci. Přesně to jsem hledal.",
    autor: "Majitel bytů, Slovany",
    dum: "3 nájemní byty",
  },
  {
    citace:
      "Převzali dům po správci, který nekomunikoval. Během tří měsíců srovnali účetnictví a dluhy na zálohách klesly o polovinu.",
    autor: "Výbor SVJ, Doubravka",
    dum: "48 jednotek",
  },
];

export default function Page() {
  return (
    <main className="hp">
      {/* ======================= HERO ======================= */}
      <header className="hero" aria-label="Havlík a Partners — správa nemovitostí v Plzni">
        <div className="hero-topbar">
          <div className="wordmark">
            <span className="wordmark-h">H</span>
            <span className="wordmark-amp">&amp;</span>
            <span className="wordmark-p">P</span>
            <span className="wordmark-full">Havlík&nbsp;&amp;&nbsp;Partners</span>
          </div>
          <p className="hero-locality">Správa nemovitostí · Plzeň</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Pro SVJ, družstva a majitele domů</p>
            <h1 className="hero-title">
              <span className="ht-line ht-1">Váš dům.</span>
              <span className="ht-line ht-2">Naše starost.</span>
              <span className="ht-line ht-3">Vaše jistota.</span>
            </h1>
            <p className="hero-lead">
              Spravujeme bytové domy v Plzni a okolí — účetnictví, revize, havárie i shromáždění.
              Vy víte, co se v domě děje. My hlídáme, aby se dělo správně.
            </p>
            <div className="hero-facts" role="list">
              <div className="fact" role="listitem">
                <strong>SVJ i nájemní domy</strong>
                <span>od 6 do 200 jednotek</span>
              </div>
              <div className="fact" role="listitem">
                <strong>Havárie nonstop</strong>
                <span>jedno číslo, kdykoli</span>
              </div>
              <div className="fact" role="listitem">
                <strong>Kancelář v Plzni</strong>
                <span>osobně, ne přes formulář</span>
              </div>
            </div>
          </div>

          {/* Signature: katastrální fasáda — dům jako kniha bytů */}
          <div className="hero-facade" aria-hidden="true">
            <div className="facade">
              <div className="facade-roof" />
              <div className="facade-rows">
                <div className="facade-row">
                  <span className="win" /><span className="win win-lit" /><span className="win" />
                </div>
                <div className="facade-row">
                  <span className="win win-lit" /><span className="win" /><span className="win" />
                </div>
                <div className="facade-row">
                  <span className="win" /><span className="win" /><span className="win win-lit" />
                </div>
                <div className="facade-row">
                  <span className="win win-lit" /><span className="win" /><span className="win win-lit" />
                </div>
                <div className="facade-row facade-parter">
                  <span className="door" />
                  <span className="plate">č.&nbsp;p.&nbsp;1993</span>
                </div>
              </div>
            </div>
            <div className="facade-caption">
              <span>Každé okno = jedna domácnost.</span>
              <span>Za každou ručíme.</span>
            </div>
          </div>
        </div>
      </header>

      {/* ======================= SLUŽBY ======================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro váš dům děláme</h2>
          <p>
            Čtyři oblasti, které dohromady znamenají klidný dům. Můžete si vzít vše,
            nebo jen to, co vám dnes chybí.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <div className="sluzba-stitek">{s.kod}</div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul>
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ======================= DŮVĚRA ======================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head--inverse">
          <h2 id="duvera-h">Proč nám plzeňské domy svěřují klíče</h2>
          <p>
            Správa nemovitostí je práce na roky. Tři zásady, na kterých stojí
            každá naše smlouva o správě.
          </p>
        </div>

        <div className="zasady">
          {zasady.map((z, i) => (
            <div className="zasada" key={z.titulek}>
              <span className="zasada-cislo" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{z.titulek}</h3>
              <p>{z.text}</p>
            </div>
          ))}
        </div>

        <div className="reference" role="list" aria-label="Reference klientů">
          {reference.map((r) => (
            <figure className="refka" key={r.autor} role="listitem">
              <blockquote>
                <p>„{r.citace}“</p>
              </blockquote>
              <figcaption>
                <strong>{r.autor}</strong>
                <span>{r.dum}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
