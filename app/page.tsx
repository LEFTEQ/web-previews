const treninky = [
  { den: "Pondělí", cas: "15:30 – 16:30" },
  { den: "Úterý", cas: "17:00 – 18:00" },
  { den: "Středa", cas: "15:00 – 18:00" },
  { den: "Čtvrtek", cas: "15:00 – 18:00" },
];

const arealPolozky = [
  {
    kod: "KURT",
    nazev: "Tenisové kurty",
    popis:
      "Antukové kurty pod širým nebem i krytá tenisová hala pro celoroční hru. Rezervace po telefonu, hrajete i v zimě a za deště.",
    detail: "venkovní + krytá hala",
  },
  {
    kod: "DRÁHA",
    nazev: "In-line dráha",
    popis:
      "Okruh pro bruslaře a tréninky mládeže. Během tréninků prosíme o dodržování pravidel dráhy — pro přechod využijte most.",
    detail: "tréninky září–listopad",
  },
  {
    kod: "VOLEJ",
    nazev: "Volejbalové kurty",
    popis:
      "Venkovní kurty pro oddíly i veřejnost. Ideální pro firemní turnaj nebo letní ligu s partou z práce.",
    detail: "oddíly i veřejnost",
  },
  {
    kod: "GOLF",
    nazev: "Minigolf",
    popis:
      "Osmnáct drah v zeleni areálu. Odpoledne s dětmi, rande nebo rozstřel po tenise — hole a míčky půjčíme na místě.",
    detail: "18 drah",
  },
  {
    kod: "STŮL",
    nazev: "Restaurace a pivnice",
    popis:
      "Restaurace Slavia (horní) a Pivnice Slavia (dolní) s celodenním provozem. Oběd po tréninku i večer po zápase.",
    detail: "734 650 390 · 602 465 550",
  },
  {
    kod: "PÉČE",
    nazev: "Kosmetické služby",
    popis:
      "Komplexní kosmetická péče přímo v areálu. Regenerace po sportu bez cesty přes město.",
    detail: "objednání předem",
  },
];

export default function Page() {
  return (
    <main className="web">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-lajny" aria-hidden="true">
          <span className="lajna lajna-1" />
          <span className="lajna lajna-2" />
          <span className="lajna lajna-3" />
          <span className="lajna lajna-svisla" />
          <span className="lajna-kruh" />
        </div>

        <div className="hero-obsah">
          <p className="wordmark">
            <span className="wordmark-tj">TJ</span> SLAVIA{" "}
            <span className="wordmark-vs">VŠ</span> PLZEŇ
          </p>

          <h1 className="hero-titulek">
            <span className="hero-radek hero-radek-1">Areál,</span>
            <span className="hero-radek hero-radek-2">
              kde se na&nbsp;Borech
            </span>
            <span className="hero-radek hero-radek-3">
              sportuje <em>od&nbsp;rána</em>
            </span>
            <span className="hero-radek hero-radek-4">do&nbsp;večera.</span>
          </h1>

          <p className="hero-perex">
            Tenis venku i pod střechou, volejbal, in-line dráha, minigolf,
            penzion se 17 pokoji a dvě restaurace. Jeden sportovní areál
            v&nbsp;zeleni plzeňských Borů.
          </p>

          <div className="hero-akce">
            <a className="tlacitko tlacitko-plne" href="tel:734650390">
              Zavolat a rezervovat kurt
            </a>
            <a className="tlacitko tlacitko-linka" href="#treninky">
              Časy in-line tréninků
            </a>
          </div>
        </div>

        <div className="hero-pas" aria-hidden="true">
          <span>TENIS</span>
          <span className="pas-tecka">●</span>
          <span>VOLEJBAL</span>
          <span className="pas-tecka">●</span>
          <span>IN-LINE</span>
          <span className="pas-tecka">●</span>
          <span>MINIGOLF</span>
          <span className="pas-tecka">●</span>
          <span>PENZION</span>
          <span className="pas-tecka">●</span>
          <span>RESTAURACE</span>
        </div>
      </header>

      {/* ===== SEKCE 1: TRÉNINKY + AREÁL ===== */}
      <section className="sekce sekce-areal" id="treninky" aria-labelledby="areal-nadpis">
        <div className="sirka">
          <div className="sekce-hlava">
            <p className="eyebrow">Co v areálu najdete</p>
            <h2 id="areal-nadpis" className="sekce-titulek">
              Šest důvodů, proč k&nbsp;nám lidé chodí každý týden
            </h2>
          </div>

          <div className="rozvrh" role="group" aria-label="Rozvrh in-line tréninků">
            <div className="rozvrh-hlava">
              <h3 className="rozvrh-titulek">In-line tréninky</h3>
              <p className="rozvrh-obdobi">září – listopad 2025</p>
            </div>
            <ul className="rozvrh-seznam">
              {treninky.map((t) => (
                <li key={t.den} className="rozvrh-radek">
                  <span className="rozvrh-den">{t.den}</span>
                  <span className="rozvrh-linka" aria-hidden="true" />
                  <span className="rozvrh-cas">{t.cas}</span>
                </li>
              ))}
            </ul>
            <p className="rozvrh-poznamka">
              Během tréninků dodržujte prosím pravidla dráhy a&nbsp;pro její
              přechod používejte most. Děkujeme.
            </p>
          </div>

          <ul className="mrizka">
            {arealPolozky.map((p) => (
              <li key={p.kod} className="karta">
                <p className="karta-kod" aria-hidden="true">
                  {p.kod}
                </p>
                <h3 className="karta-nazev">{p.nazev}</h3>
                <p className="karta-popis">{p.popis}</p>
                <p className="karta-detail">{p.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2: PENZION + DŮVĚRA ===== */}
      <section className="sekce sekce-penzion" aria-labelledby="penzion-nadpis">
        <div className="sirka penzion-rozlozeni">
          <div className="penzion-text">
            <p className="eyebrow eyebrow-svetly">Penzion Slavia · Bory</p>
            <h2 id="penzion-nadpis" className="sekce-titulek sekce-titulek-svetly">
              Vyspěte se tam, kde ráno vyjdete rovnou na&nbsp;kurt
            </h2>
            <p className="penzion-perex">
              Penzion Slavia stojí přímo ve sportovním areálu v&nbsp;klidné
              zeleni plzeňských Borů. Otevřeno máme celý rok — pro sportovní
              soustředění, služební cesty i&nbsp;rodinné návštěvy Plzně.
            </p>

            <ul className="penzion-fakta">
              <li>
                <strong className="fakt-cislo">17</strong>
                <span className="fakt-popis">
                  pokojů, jedno- až čtyřlůžkových
                </span>
              </li>
              <li>
                <strong className="fakt-cislo">365</strong>
                <span className="fakt-popis">dní v roce otevřeno</span>
              </li>
              <li>
                <strong className="fakt-cislo">2</strong>
                <span className="fakt-popis">
                  restaurace s celodenním provozem
                </span>
              </li>
            </ul>

            <p className="penzion-vybava">
              Každý pokoj má vlastní WC, sprchový kout a&nbsp;televizi. Snídani,
              oběd i&nbsp;večeři vyřešíte v&nbsp;Restauraci Slavia o&nbsp;pár
              kroků vedle.
            </p>

            <div className="penzion-akce">
              <a className="tlacitko tlacitko-svetle" href="tel:734650390">
                Zavolat na recepci: 734 650 390
              </a>
            </div>
          </div>

          <aside className="penzion-recenze">
            <blockquote className="recenze">
              <p>
                „Byli jsme tu s&nbsp;tenisovým oddílem na soustředění. Ráno na
                kurty pěšky, večer do pivnice — všechno na jednom místě, nikam
                se nejezdí.“
              </p>
              <footer className="recenze-autor">
                — trenér mládeže, soustředění 2024
              </footer>
            </blockquote>
            <blockquote className="recenze">
              <p>
                „Klidné ubytování kousek od centra Plzně a&nbsp;s&nbsp;parkováním
                bez starostí. Děti mezitím vyzkoušely minigolf.“
              </p>
              <footer className="recenze-autor">— rodina z Prahy</footer>
            </blockquote>
            <div className="kontakt-blok">
              <p className="kontakt-radek">
                <span className="kontakt-label">Restaurace Slavia (horní)</span>
                <a href="tel:734650390">734 650 390</a>
              </p>
              <p className="kontakt-radek">
                <span className="kontakt-label">Pivnice Slavia (dolní)</span>
                <a href="tel:602465550">602 465 550</a>
              </p>
              <p className="kontakt-radek">
                <span className="kontakt-label">Kde nás najdete</span>
                <span>Sportovní areál TJ Slavia VŠ, Plzeň-Bory</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
