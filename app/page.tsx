import type { CSSProperties } from "react";

export default function Page() {
  const denniMenu = [
    {
      den: "Úterý",
      polevka: { nazev: "Žampionový krém s bylinkovým olejem", alerg: "bezlepkové · 7, 9", cena: "55" },
      hlavni: [
        { nazev: "Grilovaná kuřecí roláda plněná sušenými rajčaty, bramborová kaše, zelené fazolky na másle", alerg: "bezlepkové · 7", cena: "179" },
        { nazev: "Italské krémové hříbkové risotto s kapkou lanýžového oleje, hoblinky Gran Moravie", alerg: "bezlepkové · 7", cena: "169" },
      ],
    },
    {
      den: "Středa",
      polevka: { nazev: "Dýňový krém s nokem zakysané smetany", alerg: "bezlepkové · 7, 9", cena: "59" },
      hlavni: [
        { nazev: "Grilovaná vepřová panenka, lišková smetanová omáčka, šťouchané brambory s máslem a pažitkou", alerg: "bezlepkové · 7, 9", cena: "185" },
        { nazev: "Grilovaný marinovaný hermelín, mix listových salátů, olivy, bazalkové pesto, pita chléb", alerg: "1, 7, 9", cena: "169" },
      ],
    },
    {
      den: "Čtvrtek",
      polevka: { nazev: "Drůbeží vývar s kořenovou zeleninou, celestýnské nudle", alerg: "1, 3, 7, 9", cena: "59" },
      hlavni: [
        { nazev: "Grilované krůtí prso marinované v jogurtu a kari, černá čočka beluga, omáčka z pečené mrkve", alerg: "bezlepkové · 7", cena: "175" },
        { nazev: "Čerstvé tagliatelle s kousky kuřecího masa a restovanou slaninou, smetanová omáčka, Gran Moravia", alerg: "1, 3, 7", cena: "175" },
      ],
    },
    {
      den: "Pátek",
      polevka: { nazev: "Francouzská cibulačka se sýrovými krutony", alerg: "1, 3, 7, 9, 12", cena: "59" },
      hlavni: [
        { nazev: "Mleté biftečky se sýrem, vařené brambory s pažitkou a máslem, malý okurkový salát", alerg: "bezlepkové · 3, 7, 9", cena: "179" },
        { nazev: "Pečená BBQ kuřecí křidélka, dušená jasmínová rýže, masová šťáva z výpeku", alerg: "bezlepkové · 7, 9, 12", cena: "169" },
      ],
    },
  ];

  const kavy = [
    {
      nazev: "Red Door",
      slozeni: "100% arabika",
      popis: "Jemné tóny citrusů, mléčné čokolády a opečených mandlí. Světlé pražení, které vytáhne svěží ovocnou vůni.",
      prazeni: "Světlé pražení",
    },
    {
      nazev: "Poesie",
      slozeni: "arabika & robusta",
      popis: "Plná chuť čokolády, oříšků a koření. Velmi tmavé pražení pro intenzivní, hutné aroma do rána i po obědě.",
      prazeni: "Tmavé pražení",
    },
  ];

  return (
    <main className="wrap">
      <header className="topbar">
        <a className="mark" href="#" aria-label="Kavárna a bistro Chodský — domů">
          <span className="mark-line1">Chodský</span>
          <span className="mark-line2">kavárna &amp; bistro · Plzeň</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#menu">Polední menu</a>
          <a href="#kava">Naše káva</a>
          <a href="#omne">O nás</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-copy">
          <p className="eyebrow">Chodské náměstí, Plzeň · otevřeno každý den</p>
          <h1 id="hero-nadpis">
            Dva šálky,<br />
            <span className="accentline">jedna adresa.</span>
          </h1>
          <p className="lede">
            Ráno voňavá káva a čerstvý bagel do práce, v poledne bezlepkové risotto
            i grilovaná panenka, odpoledne domácí štrúdl ke sklence vína. Pořád na
            stejném rohu Chodského náměstí.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#menu">Dnešní polední menu</a>
            <a className="btn btn-ghost" href="tel:+420732919769">732&nbsp;919&nbsp;769</a>
          </div>
        </div>
        <figure className="hero-fig">
          <img src="/hero.webp" alt="Šálek kávy a čerstvé jídlo z bistra Chodský" width={900} height={1100} />
          <figcaption>Chodský · Chodské nám., Plzeň</figcaption>
        </figure>
      </section>

      <section className="kava" id="kava" aria-labelledby="kava-nadpis">
        <div className="kava-head">
          <p className="eyebrow eyebrow--dark">Julius Meinl · na espresso i s mlékem</p>
          <h2 id="kava-nadpis">Dvě prémiové kávy. Vyberte si náladu.</h2>
        </div>
        <div className="kava-grid">
          {kavy.map((k) => (
            <article className="kava-card" key={k.nazev}>
              <p className="kava-tag">{k.prazeni}</p>
              <h3>{k.nazev}</h3>
              <p className="kava-slozeni">{k.slozeni}</p>
              <p className="kava-popis">{k.popis}</p>
            </article>
          ))}
          <figure className="kava-fig">
            <img src="/section-1.webp" alt="Snídaně a domácí dezerty připravené v bistru Chodský" width={800} height={600} />
          </figure>
        </div>
        <ul className="denpasy" aria-label="Co u nás najdete v průběhu dne">
          <li><span>Ráno</span> snídaně, wafle, anglická omeleta, bagely s sebou</li>
          <li><span>Poledne</span> polévka a dvě hlavní jídla, hodně bezlepkových</li>
          <li><span>Odpoledne</span> domácí štrúdl, dorty a sklenka vína</li>
        </ul>
      </section>

      <section className="menu" id="menu" aria-labelledby="menu-nadpis">
        <div className="menu-head">
          <p className="eyebrow">Polední menu · po–pá · 11:00–14:00</p>
          <h2 id="menu-nadpis">Tenhle týden vaříme takhle</h2>
          <p className="menu-note">
            Menu měníme každý den. Polévka i dvě hlavní jídla, značně z toho bezlepkové.
            Rezervace i jídlo s sebou na <a href="tel:+420732919769">732&nbsp;919&nbsp;769</a>.
          </p>
        </div>

        <div className="menu-list">
          {denniMenu.map((d) => (
            <article className="denblok" key={d.den}>
              <h3 className="denblok-den">{d.den}</h3>
              <div className="radek radek--polevka">
                <div className="radek-text">
                  <p className="radek-nazev">{d.polevka.nazev}</p>
                  <p className="radek-alerg">{d.polevka.alerg}</p>
                </div>
                <p className="radek-cena">{d.polevka.cena}&nbsp;Kč</p>
              </div>
              {d.hlavni.map((h) => (
                <div className="radek" key={h.nazev}>
                  <div className="radek-text">
                    <p className="radek-nazev">{h.nazev}</p>
                    <p className="radek-alerg">{h.alerg}</p>
                  </div>
                  <p className="radek-cena">{h.cena}&nbsp;Kč</p>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="omne" id="omne" aria-labelledby="omne-nadpis">
        <figure className="omne-fig">
          <img src="/section-2.webp" alt="Interiér a atmosféra kavárny a bistra Chodský na Chodském náměstí" width={800} height={640} />
        </figure>
        <div className="omne-copy">
          <p className="eyebrow eyebrow--dark">O nás</p>
          <h2 id="omne-nadpis">Roh, kde se sejdou ranní ptáčata i večerní posezení.</h2>
          <p>
            Jsme malé bistro na Chodském náměstí v Plzni. Připravujeme výbornou kávu,
            domácí dezerty a pestrou snídani; přes týden k tomu vaříme čerstvý obědový
            lístek. Každý den pečeme bagely, které se hodí jako svačina do práce i do školy.
          </p>
          <p>
            Přijďte si vychutnat klidné ráno s voňavým šálkem, nebo strávit odpoledne
            u sklenky vína a křupavého panini. Vždycky vás přivítáme s úsměvem.
          </p>
          <dl className="fakta">
            <div><dt>Kde</dt><dd>Chodské náměstí, Plzeň</dd></div>
            <div><dt>Telefon</dt><dd><a href="tel:+420732919769">732 919 769</a></dd></div>
            <div><dt>Kdy</dt><dd>Snídaně &amp; brunch každý den, obědy po–pá</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}
