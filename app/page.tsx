const ordinacniHodiny = [
  { den: "Pondělí", cas: "9:00 – 12:00 · 14:00 – 18:00" },
  { den: "Úterý", cas: "9:00 – 12:00 · 14:00 – 18:00" },
  { den: "Středa", cas: "9:00 – 12:00 · 14:00 – 18:00" },
  { den: "Čtvrtek", cas: "9:00 – 12:00 · 14:00 – 18:00" },
  { den: "Pátek", cas: "9:00 – 12:00 · 14:00 – 16:00" },
  { den: "So + Ne", cas: "zavřeno" },
];

const sluzby = [
  {
    nazev: "Vyšetření krve na počkání",
    popis:
      "Biochemie i imunochemie (kortizol, T4) přímo v ordinaci. Výsledky máte během návštěvy, ne za tři dny — o léčbě se rozhodneme hned.",
    stitek: "výsledky do 20 minut",
  },
  {
    nazev: "Očkování a čipování",
    popis:
      "Vzteklina, kombinované vakcíny, povinné čipování psů včetně zápisu do centrálního registru. Formulář vyplníme s vámi na místě.",
    stitek: "vč. registrace CEP",
  },
  {
    nazev: "Ochrana proti parazitům",
    popis:
      "Injekční Bravecto chrání psa proti klíšťatům a blechám celý rok jednou aplikací. Poradíme i s odčervením koček a štěňat.",
    stitek: "Bravecto na 1 rok",
  },
  {
    nazev: "Kastrace a chirurgie",
    popis:
      "Kastrace koček, kocourů i fen v plné narkóze s předoperačním vyšetřením. Před zákrokem vám přesně řekneme, jak zvíře připravit.",
    stitek: "vč. přípravy na narkózu",
  },
  {
    nazev: "Péče o zuby",
    popis:
      "Odstranění zubního kamene, kontrola dásní, extrakce. Zápach z tlamy není normální — často jde o bolest, kterou zvíře skrývá.",
    stitek: "prevence i zákroky",
  },
  {
    nazev: "Krmiva na objednávku",
    popis:
      "Veterinární diety a krmiva objednáme přímo do ordinace. Vyzvednete si je při návštěvě nebo po telefonické domluvě.",
    stitek: "objednávka telefonicky",
  },
];

const radce = [
  {
    otazka: "Má zvíře klíště?",
    odpoved:
      "Vytáhněte ho pinzetou tahem kolmo od kůže, místo dezinfikujte. Pokud se objeví zarudnutí nebo malátnost, zavolejte nám.",
  },
  {
    otazka: "Zvíře zvrací nebo má průjem?",
    odpoved:
      "12 hodin nekrmit, vodu podávat po malých dávkách. Když potíže trvají déle než den nebo je v stolici krev, přijďte hned.",
  },
  {
    otazka: "Jdeme na narkózu?",
    odpoved:
      "Zvíře musí být 8–12 hodin nalačno, voda se odebírá ráno. Vše ostatní vám vysvětlíme při objednání zákroku.",
  },
  {
    otazka: "Jdeme na očkování?",
    odpoved:
      "Vezměte očkovací průkaz a psa na vodítku, kočku v přepravce. Zvíře by mělo být odčervené a zdravé.",
  },
];

export default function Page() {
  return (
    <main className="vet">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Veterinární ordinace MVDr. Richard Saviola">
        <div className="hero-inner">
          <header className="hero-top">
            <span className="wordmark">
              <span className="wordmark-cross" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" role="img" aria-hidden="true">
                  <path
                    d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="wordmark-text">
                Saviola<em>vet</em>
              </span>
            </span>
            <a className="hero-tel" href="tel:+420596618375">
              596 618 375
            </a>
          </header>

          <div className="hero-main">
            <p className="hero-eyebrow">Veterinární ordinace · Ostrava, 28. října 122</p>
            <h1 className="hero-title">
              <span className="hero-line hero-line-1">Krev vyšetříme,</span>
              <span className="hero-line hero-line-2">než dopijete</span>
              <span className="hero-line hero-line-3">
                kafe<span className="hero-dot">.</span>
              </span>
            </h1>
            <p className="hero-sub">
              Biochemické i imunochemické vyšetření krve na počkání — přímo v centru
              Ostravy. MVDr. Richard Saviola se o vaše psy a kočky stará přes dvacet let.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="tel:+420596618375">
                Zavolat do ordinace
              </a>
              <a className="btn-ghost" href="#sluzby">
                Co u nás vyřešíte
              </a>
            </div>
          </div>

          {/* Signature: EKG křivka jako předěl hero sekce */}
          <div className="ekg-wrap" aria-hidden="true">
            <svg
              className="ekg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              role="img"
              aria-hidden="true"
            >
              <path
                className="ekg-path"
                d="M0,60 L180,60 L210,60 L225,38 L240,82 L255,60 L340,60 L360,52 L380,60 L520,60 L545,60 L558,10 L572,110 L586,60 L700,60 L730,54 L755,60 L900,60 L920,60 L933,32 L947,86 L960,60 L1080,60 L1200,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <dl className="hero-facts">
            <div className="fact">
              <dt>Výsledky krve</dt>
              <dd>na počkání</dd>
            </div>
            <div className="fact">
              <dt>Bravecto injekčně</dt>
              <dd>ochrana na 1 rok</dd>
            </div>
            <div className="fact">
              <dt>Platba</dt>
              <dd>kartou i hotově</dd>
            </div>
            <div className="fact">
              <dt>Kde nás najdete</dt>
              <dd>28. října 122, Ostrava 1</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <header className="section-head">
            <p className="section-eyebrow">Ordinace</p>
            <h2 id="sluzby-h" className="section-title">
              Co u nás vyřešíte při jedné návštěvě
            </h2>
            <p className="section-lead">
              Malá ordinace, kde vás zná doktor jménem — a laboratoř, kterou jinde
              najdete jen na klinikách.
            </p>
          </header>

          <div className="sluzby-grid">
            {sluzby.map((s) => (
              <article className="karta" key={s.nazev}>
                <p className="karta-stitek">{s.stitek}</p>
                <h3 className="karta-nazev">{s.nazev}</h3>
                <p className="karta-popis">{s.popis}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA / RÁDCE / HODINY ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner duvera-grid">
          <div className="duvera-text">
            <p className="section-eyebrow section-eyebrow-light">O ordinaci</p>
            <h2 id="duvera-h" className="section-title section-title-light">
              Ordinace, kde zvíře není položka v systému
            </h2>
            <p className="duvera-p">
              MVDr. Richard Saviola ordinuje na ulici 28. října v centru Ostravy.
              Žádná recepce s číselníkem — objednáte se telefonem, přijdete a doktor
              si vaše zvíře pamatuje z minula.
            </p>
            <p className="duvera-p">
              Ordinace je vybavená vlastním biochemickým a imunochemickým
              analyzátorem, takže hladinu kortizolu nebo T4 zjistíme během návštěvy.
              Povinné čipování a zápis do centrálního registru vyřídíme na místě,
              formulář vyplníme společně.
            </p>

            <h3 className="radce-h">Co dělat, když…</h3>
            <dl className="radce">
              {radce.map((r) => (
                <div className="radce-item" key={r.otazka}>
                  <dt>{r.otazka}</dt>
                  <dd>{r.odpoved}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hodiny" aria-labelledby="hodiny-h">
            <h3 id="hodiny-h" className="hodiny-title">
              Ordinační hodiny
            </h3>
            <table className="hodiny-tab">
              <tbody>
                {ordinacniHodiny.map((h) => (
                  <tr key={h.den}>
                    <th scope="row">{h.den}</th>
                    <td>{h.cas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="hodiny-note">
              Akutní případy vezmeme i mimo objednané časy — zavolejte předem, ať na
              vás počkáme.
            </p>
            <a className="btn-primary btn-block" href="tel:+420596618375">
              Zavolat: 596 618 375
            </a>
            <p className="hodiny-mail">
              <a href="mailto:myveterina@seznam.cz">myveterina@seznam.cz</a>
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
