// AM Fitness Pardubice — statický náhled
// Koncept: „Železo a pára" — posilovna + sauna pod jednou střechou (suterén pod Poseidonem).
// Signature prvek: typografická „činka" — extrémně těžký kondenzovaný titulek AM sevřený
// mezi kotouči (kruhy z palety), plus vertikální „osa činky" jako strukturní linka celé stránky.

const cenik = [
  { co: "Jednorázový vstup do posilovny", cena: "od 90 Kč" },
  { co: "Permanentka do posilovny", cena: "od 850 Kč" },
  { co: "Jednorázový vstup do sauny", cena: "od 80 Kč" },
  { co: "Permanentka do sauny", cena: "od 1 400 Kč" },
];

const oteviraci = [
  { den: "Pondělí–Pátek", fitness: "8:30–13:00 · 15:00–21:00", sauna: "16:00–21:00" },
  { den: "Sobota", fitness: "8:30–13:00 · 15:00–21:00", sauna: "16:00–21:00" },
  { den: "Neděle a svátky", fitness: "15:00–21:00", sauna: "16:00–21:00" },
];

export default function Page() {
  return (
    <main className="am">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="AM Fitness Pardubice">
            <span className="wordmark-am">AM</span>
            <span className="wordmark-rest">Fitness &amp; sauna · Pardubice</span>
          </div>

          <div className="hero-barbell" aria-hidden="true">
            <span className="plate plate-l"></span>
            <span className="bar"></span>
            <span className="plate plate-r"></span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Železo</span>
            <span className="line line-amp" aria-hidden="true">&amp;</span>
            <span className="line line-2">pára</span>
          </h1>

          <p className="hero-sub">
            Posilovna a finská sauna v suterénu pod restaurací Na&nbsp;Poseidonu,
            nábřeží Závodu míru. 300&nbsp;m² činek, kardia, boxovacích pytlů —
            a&nbsp;ochlazovací bazének na konec tréninku.
          </p>

          <div className="hero-facts" role="list">
            <div className="fact" role="listitem">
              <span className="fact-num">300 m²</span>
              <span className="fact-label">prostoru na cvičení i relax</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">od 90 Kč</span>
              <span className="fact-label">jednorázový vstup do posilovny</span>
            </div>
            <div className="fact" role="listitem">
              <span className="fact-num">14 míst</span>
              <span className="fact-label">odpočívárna u sauny</span>
            </div>
          </div>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420777158670">
              Zavolat trenérovi — 777 158 670
            </a>
            <a className="btn btn-ghost" href="#cenik">Ceník a otevírací doba</a>
          </div>

          <p className="hero-note">
            Bereme karty MultiSport · platby na místě pouze v hotovosti
          </p>
        </div>
      </header>

      {/* ================= SEKCE 1: CO TU NAJDETE ================= */}
      <section className="sec sec-nabidka" aria-labelledby="nabidka-h">
        <div className="sec-inner">
          <p className="eyebrow">Suterén pod Poseidonem</p>
          <h2 id="nabidka-h" className="sec-title">Co vás dole čeká</h2>

          <div className="grid-nabidka">
            <article className="karta karta-zelezo">
              <h3>Posilovna</h3>
              <p>
                Kvalitně vybavená posilovna pro muže i ženy — od začátečníků po
                závodníky. Volné činky, stroje, kardiozóna s aerobními přístroji
                a boxovací pytle, když potřebujete vypustit den.
              </p>
            </article>

            <article className="karta karta-para">
              <h3>Sauna s bazénkem</h3>
              <p>
                Finská sauna s ochlazovacím bazénkem a odpočívárnou pro 14 osob.
                Otevřená každý den od 16 do 21 hodin — po tréninku, nebo jen tak
                na prohřátí.
              </p>
            </article>

            <article className="karta">
              <h3>Osobní trenér</h3>
              <p>
                Ing. Miroslav Černý dohlíží přímo na place — poradí s technikou,
                sestaví tréninkový i stravovací plán. Tréninky pod dohledem
                trenérky domluvíte na 773 969 256.
              </p>
            </article>

            <article className="karta">
              <h3>Bar a výživa</h3>
              <p>
                Občerstvení u baru včetně sportovní výživy — vedeme Extrifit,
                Nutrend, Nutramino a Prom-in. Na krabičky Diet Fresh Menu máte
                s kódem DIET48 slevu 20 %.
              </p>
            </article>
          </div>

          <div className="akce">
            <h3 className="akce-title">Akce, které se vyplatí znát</h3>
            <ul className="akce-list">
              <li>
                <strong>Akce Parťák</strong> — přiveďte kamaráda a průkaz máte
                za polovinu.
              </li>
              <li>
                <strong>Studenti levněji</strong> — zvýhodněné ceny na vstupy
                i permanentky.
              </li>
              <li>
                <strong>MultiSport</strong> — karta platí do posilovny i do sauny.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SEKCE 2: CENÍK + OTEVÍRACÍ DOBA ================= */}
      <section className="sec sec-cenik" id="cenik" aria-labelledby="cenik-h">
        <div className="sec-inner">
          <p className="eyebrow eyebrow-light">Bez skrytých položek</p>
          <h2 id="cenik-h" className="sec-title sec-title-light">
            Ceník a kdy máme otevřeno
          </h2>

          <div className="cenik-grid">
            <div className="cenik-blok">
              <h3 className="blok-title">Vstupné</h3>
              <dl className="cenik-list">
                {cenik.map((r) => (
                  <div className="cenik-radek" key={r.co}>
                    <dt>{r.co}</dt>
                    <dd>{r.cena}</dd>
                  </div>
                ))}
              </dl>
              <p className="cenik-pozn">
                Platby přijímáme pouze v hotovosti. Karta MultiSport platí
                na fitness i saunu.
              </p>
            </div>

            <div className="cenik-blok">
              <h3 className="blok-title">Otevírací doba</h3>
              <ul className="doba-list">
                {oteviraci.map((r) => (
                  <li className="doba-radek" key={r.den}>
                    <span className="doba-den">{r.den}</span>
                    <span className="doba-cas">
                      <span className="doba-fit">Fitness {r.fitness}</span>
                      <span className="doba-sauna">Sauna {r.sauna}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="cenik-pozn">
                Léto 1.&nbsp;7. – 31.&nbsp;8. 2026: otevřeno denně do 20:00.
              </p>
            </div>
          </div>

          <div className="kde">
            <div className="kde-text">
              <h3 className="blok-title">Kde nás najdete</h3>
              <p>
                nábřeží Závodu míru 1898, 530&nbsp;02 Pardubice —
                v&nbsp;suterénu pod restaurací Na&nbsp;Poseidonu, kousek od Labe.
              </p>
            </div>
            <a className="btn btn-light" href="tel:+420777158670">
              Zavolat: 777 158 670
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
