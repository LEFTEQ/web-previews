const nabidka = [
  {
    kod: "D",
    nazev: "Dřevěné plovoucí podlahy",
    popis:
      "Kährs a Magnum — třívrstvá prkna z dubu, jasanu i ořechu. Teplé na dotek, hotové za den, bez lepení.",
    znacky: "Kährs · Magnum",
  },
  {
    kod: "M",
    nazev: "Masivní dřevěné podlahy",
    popis:
      "Podlaha na generace. Masiv lepíme celoplošně, brousíme na místě a olejujeme nebo lakujeme podle provozu.",
    znacky: "dub · jasan · ořech",
  },
  {
    kod: "P",
    nazev: "Parkety a renovace",
    popis:
      "Staré vlysy nevyhazujte. Přebrousíme, doplníme chybějící kusy, přetmelíme a povrch uzavřeme — parkety vydrží další desítky let.",
    znacky: "broušení · tmelení · olej / lak",
  },
  {
    kod: "V",
    nazev: "Vinylové podlahy",
    popis:
      "Expona, Gerflor a Fatra Thermofix — plovoucí i lepené. Tiché, voděodolné, ideální do kuchyní, chodeb a bytů k pronájmu.",
    znacky: "Expona · Gerflor · Fatra",
  },
  {
    kod: "L",
    nazev: "Laminátové a PVC podlahy",
    popis:
      "Witex a Parador v dekorech dřeva, Fatra Lino a Gerflor v rolích. Rozumná cena, rychlá pokládka, snadná údržba.",
    znacky: "Witex · Parador · Fatra Lino",
  },
  {
    kod: "K",
    nazev: "Koberce",
    popis:
      "Zátěžové i bytové koberce včetně přesného zaměření, řezu a pokládky s podložkou.",
    znacky: "zaměření · řez · pokládka",
  },
];

const kroky = [
  {
    cislo: "1",
    titul: "Sáhnete si na vzorky",
    text: "Ve vzorkovně na Českomoravské 12 položíme dekory vedle sebe na zem — v denním světle, ne v katalogu. Srovnáte strukturu, barvu i zvuk kroku.",
  },
  {
    cislo: "2",
    titul: "Zaměříme a spočítáme",
    text: "Přijedeme k vám, změříme místnosti, zkontrolujeme podklad a rovinnost. Kalkulaci zpracujeme zdarma a položku po položce.",
  },
  {
    cislo: "3",
    titul: "Položíme a předáme",
    text: "Pokládku dělají naši parketáři, ne subdodavatel z inzerátu. Uklidíme po sobě a vysvětlíme, jak o podlahu pečovat.",
  },
];

export default function Page() {
  return (
    <main className="ps">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark">
            Parket<em>Systém</em>
          </span>
          <a className="hero-tel" href="tel:+420602237615">
            +420 602 237 615
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Vzorkovna podlah · Praha 9, Českomoravská 12</p>
          <h1 className="hero-title">
            <span className="line line-1">Na podlahu</span>
            <span className="line line-2">si musíte</span>
            <span className="line line-3">
              <em>sáhnout.</em>
            </span>
          </h1>
          <p className="hero-sub">
            Dřevo, vinyl, parkety i renovace. Dvacet let pokládáme podlahy po Praze
            — a každou z nich vám nejdřív položíme na zem ve vzorkovně, abyste ji
            měli pod rukou i pod nohama dřív, než se rozhodnete.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602237615">
              Rezervovat návštěvu vzorkovny
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Co pokládáme
            </a>
          </div>
        </div>

        {/* Signature: rybinový (herringbone) vzor z parket */}
        <div className="herring" aria-hidden="true">
          <div className="herring-row r1">
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
          </div>
          <div className="herring-row r2">
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
            <span className="plank b" />
            <span className="plank a" />
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="sekce sekce-nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Sortiment vzorkovny</p>
          <h2 id="nabidka-h">
            Šest druhů podlah.\u00A0Jedna adresa.
          </h2>
          <p className="sekce-perex">
            Nejsme e-shop se stovkami dekorů, které nikdo neviděl. Vedeme značky,
            se kterými máme odpokládané roky práce — a všechny máme ve vzorkovně
            položené na zemi.
          </p>
        </div>

        <ul className="karty" role="list">
          {nabidka.map((p) => (
            <li className="karta" key={p.kod}>
              <span className="karta-kod" aria-hidden="true">
                {p.kod}
              </span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
              <p className="karta-znacky">{p.znacky}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE 2: JAK TO U NÁS CHODÍ + DŮVĚRA ===== */}
      <section className="sekce sekce-postup" aria-labelledby="postup-h">
        <div className="sekce-hlava">
          <p className="eyebrow eyebrow-svetla">Od vzorku k hotové podlaze</p>
          <h2 id="postup-h">Tři kroky, žádné překvapení na faktuře</h2>
        </div>

        <ol className="kroky" role="list">
          {kroky.map((k) => (
            <li className="krok" key={k.cislo}>
              <span className="krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <h3>{k.titul}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <blockquote className="citace">
            <p>
              „Pan Robert nám v bytě na Proseku zrenovoval sedmdesát let staré
              dubové vlysy. Sousedé nevěřili, že je to původní podlaha.“
            </p>
            <cite>— rodina Novotných, Praha 9</cite>
          </blockquote>
          <dl className="fakta">
            <div className="fakt">
              <dt>Kalkulace</dt>
              <dd>zdarma, položkově</dd>
            </div>
            <div className="fakt">
              <dt>Vzorkovna</dt>
              <dd>Českomoravská 12, Praha 9</dd>
            </div>
            <div className="fakt">
              <dt>Pokládka</dt>
              <dd>vlastní parketáři</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
