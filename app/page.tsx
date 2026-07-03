const duvody = [
  {
    znak: "§",
    titul: "Podvojné účetnictví bez výhrad",
    text: "Každý dům vedeme jako samostatnou účetní jednotku. Vyúčtování služeb dostanete přehledně a včas — a když něčemu nerozumíte, vysvětlíme vám ho osobně na Porubské.",
  },
  {
    znak: "Kč",
    titul: "Předpisy a platby pod kontrolou",
    text: "Hlídáme předpisy záloh, evidujeme platby vlastníků a dlužníky řešíme dřív, než se z nich stane problém celého domu.",
  },
  {
    znak: "🗲",
    titul: "Havárie neřešíte sami",
    text: "Prasklá stoupačka nebo výpadek výtahu? Máme prověřené řemeslníky z Ostravy a okolí, kteří k vám dojedou — nemusíte nikoho složitě shánět.",
  },
  {
    znak: "✓",
    titul: "Revize hlídáme za vás",
    text: "Plyn, elektro, hromosvody, komíny, hasicí přístroje. Termíny povinných revizí sledujeme my a vy máte doklad, že dům je v pořádku.",
  },
  {
    znak: "⌂",
    titul: "Schůze i zápisy vyřídíme",
    text: "Připravíme podklady na shromáždění vlastníků, pomůžeme s hlasováním i zápisem do rejstříku. Výbor domu má v nás oporu, ne dalšího úředníka.",
  },
  {
    znak: "@",
    titul: "eDomovník — dům v mobilu",
    text: "Vyúčtování, dokumenty domu i stav vašeho konta najdete online. Nemusíte kvůli každému papíru chodit na pobočku.",
  },
];

const hodiny = [
  { den: "Pondělí", kdo: "Úřední hodiny", cas: "7:30–11:30 · 12:30–17:00", plny: true },
  { den: "Pondělí", kdo: "Pokladna", cas: "7:30–11:30 · 12:30–16:30", plny: true },
  { den: "Úterý, středa", kdo: "Podatelna", cas: "8:00–11:30", plny: false },
  { den: "Čtvrtek", kdo: "Podatelna", cas: "8:00–11:30 · 12:30–13:00", plny: false },
  { den: "Pátek", kdo: "—", cas: "Zavřeno", plny: false },
];

export default function Page() {
  return (
    <main className="sbd">
      {/* ================= HERO ================= */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <span className="wordmark">
            <span className="wordmark-blok" aria-hidden="true">
              <i /><i /><i /><i /><i /><i />
            </span>
            SBD&nbsp;Poruba
          </span>
          <a className="hero-tel" href="tel:+420730150115">
            730 150 115
          </a>
        </nav>

        <div className="hero-grid" aria-hidden="true">
          {/* panelákový rastr — okna porubských domů */}
          <div className="panel p1" />
          <div className="panel p2" />
          <div className="panel p3" />
          <div className="panel p4" />
        </div>

        <div className="hero-obsah">
          <p className="hero-eyebrow">Správa domů a bytů · Ostrava-Poruba</p>
          <h1 className="hero-titul">
            Váš dům.
            <br />
            <em>Naše starost.</em>
          </h1>
          <p className="hero-perex">
            Spravujeme stovky bytových domů v Ostravě — od účetnictví a revizí po
            noční havárie. Vy bydlíte, papíry a řemeslníky řešíme my.
          </p>
          <div className="hero-akce">
            <a className="btn btn-plny" href="tel:+420730150115">
              Zavolat správci
            </a>
            <a className="btn btn-linka" href="#duvody">
              Co pro dům děláme
            </a>
          </div>
          <p className="hero-fakt">
            Jeden z největších správců bytů v Ostravě · Porubská 1015/17
          </p>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="duvody" id="duvody" aria-labelledby="duvody-titul">
        <div className="sekce-hlava">
          <h2 id="duvody-titul">
            Šest věcí, které za&nbsp;vás <em>vezmeme na&nbsp;sebe</em>
          </h2>
          <p>
            Správa domu nejsou jen složenky. Tohle všechno je v ceně, ať jste
            družstvo, SVJ, nebo vlastník bytu.
          </p>
        </div>

        <ul className="duvody-mrizka">
          {duvody.map((d) => (
            <li className="karta" key={d.titul}>
              <span className="karta-znak" aria-hidden="true">
                {d.znak}
              </span>
              <h3>{d.titul}</h3>
              <p>{d.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA / KDE NÁS NAJDETE ================= */}
      <section className="duvera" aria-labelledby="duvera-titul">
        <div className="duvera-sloupec">
          <h2 id="duvera-titul">
            Sídlíme tam, kde <em>spravujeme</em>
          </h2>
          <p className="duvera-perex">
            Nejsme anonymní firma z druhého konce republiky. Kancelář máme přímo
            v Porubě, na Porubské 1015/17 — pár minut pěšky od domů, o které se
            staráme. Když je potřeba, přijdeme se na dům podívat osobně.
          </p>

          <dl className="duvera-kontakty">
            <div>
              <dt>Zájemci o správu</dt>
              <dd>
                <a href="tel:+420730150115">730 150 115</a>
              </dd>
            </div>
            <div>
              <dt>Podatelna</dt>
              <dd>
                <a href="tel:+420596944055">596 944 055</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:podatelna@sbdporuba.cz">podatelna@sbdporuba.cz</a>
              </dd>
            </div>
            <div>
              <dt>Adresa</dt>
              <dd>Porubská 1015/17, 708 00 Ostrava-Poruba</dd>
            </div>
          </dl>
        </div>

        <div className="duvera-hodiny">
          <h3>Kdy máme otevřeno</h3>
          <ul>
            {hodiny.map((h, i) => (
              <li key={i} className={h.plny ? "radek radek-plny" : "radek"}>
                <span className="radek-den">{h.den}</span>
                <span className="radek-kdo">{h.kdo}</span>
                <span className="radek-cas">{h.cas}</span>
              </li>
            ))}
          </ul>
          <p className="hodiny-pozn">
            Pondělí je náš hlavní den pro veřejnost — pokladna i úřední hodiny
            až do odpoledne. Ostatní dny slouží podatelna dopoledne.
          </p>
        </div>
      </section>
    </main>
  );
}
