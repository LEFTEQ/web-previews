export default function Page() {
  const sluzby = [
    {
      kod: "PR",
      nazev: "Pračky a sušičky",
      popis:
        "Neždíme, teče, hází chybu E20? Vyměníme ložiska, čerpadlo, topné těleso i elektroniku. Většinu závad opravíme na místě u vás doma.",
      priznaky: "nevypouští vodu · rachotí při ždímání · nehřeje",
    },
    {
      kod: "MY",
      nazev: "Myčky nádobí",
      popis:
        "Špatně mytá skla, voda na dně, přerušený program. Vyčistíme čerpadlo, vyměníme aquastop nebo topení a myčka jede dál.",
      priznaky: "nedomývá · stojí v ní voda · píská a bliká",
    },
    {
      kod: "CH",
      nazev: "Chladničky a mrazáky",
      popis:
        "Nechladí, namrzá, hučí kompresor. Diagnostikujeme chladicí okruh, termostat i elektroniku No-Frost. Rychle — potraviny nepočkají.",
      priznaky: "nemrazí · namrzá zadní stěna · běží nonstop",
    },
    {
      kod: "SP",
      nazev: "Sporáky a trouby",
      popis:
        "Nepeče rovnoměrně, nejede plotýnka, nefunguje zapalování. Vyměníme topná tělesa, spínače i termostaty u elektrických a kombinovaných sporáků.",
      priznaky: "nehřeje trouba · vypadává jistič · spálený spínač",
    },
  ];

  const kroky = [
    {
      krok: "Zavoláte nebo napíšete",
      detail:
        "Řeknete nám značku, typ a co spotřebič dělá. Rovnou odhadneme, jestli se oprava vyplatí — na rovinu, ještě do telefonu.",
    },
    {
      krok: "Přijedeme k vám",
      detail:
        "Ostrava a okolí do 20 km, obvykle do 48 hodin. Termín domluvíme na konkrétní hodinu, ne „někdy dopoledne“.",
    },
    {
      krok: "Diagnostika a cena předem",
      detail:
        "Najdeme závadu a řekneme cenu opravy dřív, než sáhneme na šroubovák. Když opravu odmítnete, platíte jen výjezd a diagnostiku.",
    },
    {
      krok: "Oprava a záruka",
      detail:
        "Používáme originální nebo prověřené náhradní díly. Na práci i díly dáváme záruku 12 měsíců — písemně, na dokladu.",
    },
  ];

  return (
    <main className="maro">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark" aria-label="Servis MARO">
            SERVIS<b>MARO</b>
          </span>
          <span className="hero-loc">Ostrava · výjezdy do 20 km</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Opravy domácích spotřebičů u vás doma</p>
          <h1 className="hero-title">
            <span className="line line-1">Pračka stávkuje?</span>
            <span className="line line-2">
              Spravíme ji <em>na&nbsp;místě</em>.
            </span>
          </h1>
          <p className="hero-sub">
            Pračky, myčky, lednice a sporáky všech běžných značek. Přijedeme po
            celé Ostravě, závadu najdeme a cenu řekneme dřív, než začneme
            opravovat.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420605000000">
              Zavolat servis
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co opravujeme
            </a>
          </div>
        </div>

        {/* Signature: štítek spotřebiče (rating plate) */}
        <aside className="plate" aria-label="Servisní štítek — základní informace">
          <div className="plate-head">
            <span>SERVISNÍ ŠTÍTEK</span>
            <span className="plate-sn">TYP: MARO-OV / 12M</span>
          </div>
          <dl className="plate-grid">
            <div>
              <dt>Výjezd</dt>
              <dd>do 48 h</dd>
            </div>
            <div>
              <dt>Záruka</dt>
              <dd>12 měsíců</dd>
            </div>
            <div>
              <dt>Cena</dt>
              <dd>předem</dd>
            </div>
            <div>
              <dt>Oblast</dt>
              <dd>Ostrava +20 km</dd>
            </div>
          </dl>
          <div className="plate-foot">
            <span className="plate-check" aria-hidden="true">
              ✓
            </span>
            <span>Kontrola provedena · funkční</span>
          </div>
        </aside>

        <div className="hero-hazard" aria-hidden="true" />
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co opravujeme</h2>
          <p className="section-lead">
            Bílá technika je náš denní chleba. Když nevíte, jestli spotřebič
            bereme, zavolejte — poradíme i po telefonu.
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
              <p className="karta-priznaky">
                <span className="priznaky-label">Typické závady:</span>{" "}
                {s.priznaky}
              </p>
            </li>
          ))}
        </ul>

        <p className="sluzby-note">
          Opravujeme běžné značky — Whirlpool, Bosch, Electrolux, AEG, Gorenje,
          Beko, Samsung, LG a další. Náhradní díly máme skladem nebo je vozíme
          do dvou pracovních dnů.
        </p>
      </section>

      {/* ===== JAK OPRAVA PROBÍHÁ ===== */}
      <section className="postup" aria-labelledby="postup-h">
        <div className="section-head section-head--inverted">
          <h2 id="postup-h">Jak oprava probíhá</h2>
          <p className="section-lead">
            Žádná překvapení na faktuře. Čtyři kroky, cenu znáte předem a na
            všechno dostanete doklad.
          </p>
        </div>

        <ol className="postup-list">
          {kroky.map((k, i) => (
            <li key={k.krok} className="postup-item">
              <span className="postup-cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{k.krok}</h3>
                <p>{k.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="postup-duvera">
          <blockquote>
            <p>
              „Pračka přestala ždímat v neděli, v úterý ráno tu byl technik a do
              hodiny bylo hotovo. Cenu řekl předem a seděla na korunu.“
            </p>
            <footer>— paní Kupková, Ostrava-Poruba</footer>
          </blockquote>
          <blockquote>
            <p>
              „U staré myčky mi rovnou do telefonu řekli, že se oprava
              nevyplatí. Ušetřili mi výjezd i peníze. To se cení.“
            </p>
            <footer>— pan Havlas, Ostrava-Zábřeh</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
