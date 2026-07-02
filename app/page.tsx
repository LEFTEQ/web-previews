const sluzby = [
  {
    razitko: "ROZNOS",
    nazev: "Doručování reklamních tiskovin",
    popis:
      "Letáky, katalogy a neadresné zásilky doneseme do schránek v Hradci Králové a okolí. Roznos plánujeme podle vlastních map sektorů — víte přesně, které ulice a kdy dostaly váš leták.",
    detail: "Vlastní čísla sektorů (ČS) místo PSČ — mapy máme, na rozdíl od pošty.",
  },
  {
    razitko: "TISK",
    nazev: "Výroba tiskovin, dopisů a obálek",
    popis:
      "Tisk letáků, katalogů a novin, potisk i výroba obálek. Od grafického podkladu po hotový stoh připravený k roznosu — všechno pod jednou střechou, bez přeposílání mezi dodavateli.",
    detail: "Dokončovací práce: falcování, snášení, šití, balení do fólie.",
  },
  {
    razitko: "KOMPLET",
    nazev: "Balení a kompletace tiskovin",
    popis:
      "Vkládání příloh, kompletace vícedílných zásilek, adresné i neadresné balení. Připravíme zásilku tak, aby z tiskárny šla rovnou do schránek — bez čekání a bez chyb v počtech.",
    detail: "Kusová přesnost: počítáme na kusy, ne na kila.",
  },
];

const milniky = [
  {
    rok: "1910",
    text: "Firmu zakládá vandrovník Ferenc Skočdopole, pozdější Ferdinand Lamka. Rodinná legenda začíná doručováním dobrých zpráv po polabské nížině.",
  },
  {
    rok: "1921",
    text: "První komerční letáky — zázračná voda na vlasy se sloganem „Číňana s pleší jste neviděli, protože…“ Reklamní počta je na světě.",
  },
  {
    rok: "1989",
    text: "Rodinnou tradici obnovuje Ladislav Lamka, přezdívaný Ferda. Reklamní poštu provozuje v Hradci Králové dodnes.",
  },
  {
    rok: "2023",
    text: "Firma se mění na Ferda spol. s r.o. Vedení přebírá dlouholetý spolupracovník ing. Marek Jedlička — řemeslo i humor zůstávají.",
  },
];

export default function Page() {
  return (
    <main className="pocta">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Ferda — Česká reklamní počta">
            <span className="wordmark-ferda">FERDA</span>
            <span className="wordmark-sub">Česká reklamní počta · Hradec Králové · od r. 1910</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Do každé</span>
            <span className="hero-line hero-line-2">schránky.</span>
            <span className="hero-line hero-line-3">
              <s className="hero-skrt">Pošta</s>
              <span className="hero-pocta">Počta.</span>
            </span>
          </h1>

          <p className="hero-perex">
            Tiskneme, kompletujeme a roznášíme letáky po Hradci Králové a okolí.
            Slovo „pošta“ nám v roce 1999 zakázal zákon — řemeslo nám nezakázal nikdo.
          </p>

          <div className="hero-znamka" aria-hidden="true">
            <div className="znamka">
              <span className="znamka-hodnota">ČS</span>
              <span className="znamka-text">číslo sektoru</span>
              <span className="znamka-rok">1910</span>
            </div>
            <div className="razitko-kruh">
              <span>DORUČENO · HRADEC KRÁLOVÉ ·</span>
            </div>
          </div>
        </div>
        <div className="hero-perforace" aria-hidden="true" />
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-inner">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="sekce-title">
            Od tiskárny až po vaši schránku
          </h2>
          <p className="sekce-perex">
            Jedna zakázka, jedna odpovědnost. Leták u nás vznikne, zabalí se a doručí
            — nemusíte hlídat tři dodavatele.
          </p>

          <div className="sluzby-grid">
            {sluzby.map((s) => (
              <article key={s.razitko} className="karta">
                <span className="karta-razitko">{s.razitko}</span>
                <h3 className="karta-nazev">{s.nazev}</h3>
                <p className="karta-popis">{s.popis}</p>
                <p className="karta-detail">{s.detail}</p>
              </article>
            ))}
          </div>

          <div className="sektor-pas" role="note">
            <span className="sektor-pas-label">ČS proti PSČ</span>
            <p>
              Česká pošta má směrovací čísla, ale mapy k nim nemá. My máme vlastní
              čísla sektorů — a k nim mapy ulic, podle kterých roznos opravdu řídíme.
              Po roznosu dostanete přehled sektorů, kam váš leták došel.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HISTORIE / DŮVĚRA ===== */}
      <section className="historie" aria-labelledby="historie-h">
        <div className="sekce-inner">
          <p className="eyebrow eyebrow-svetly">Nejstarší reklamní počta v Čechách</p>
          <h2 id="historie-h" className="sekce-title sekce-title-svetly">
            Sto let ve schránkách
          </h2>
          <p className="sekce-perex sekce-perex-svetly">
            Firma s rodokmenem od roku 1910 — a s humorem, který přežil císaře,
            znárodnění i poštovní zákon.
          </p>

          <ol className="milniky">
            {milniky.map((m) => (
              <li key={m.rok} className="milnik">
                <span className="milnik-rok">{m.rok}</span>
                <p className="milnik-text">{m.text}</p>
              </li>
            ))}
          </ol>

          <blockquote className="citace">
            <p>
              „Slovo <em>počta</em> se nedbale snažím protlačit do Pravidel českého
              jazyka. Moji nedbalost podporuje vědomí, že mu stejně všichni dávno
              rozumíte.“
            </p>
            <cite>— Ladislav Lamka, „Ferda“</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
