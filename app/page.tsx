const kurzy = [
  {
    kod: "PK-VP",
    nazev: "Výživový poradce",
    typ: "Profesní kvalifikace",
    forma: "Prezenčně v Brně / distančně",
    popis:
      "Kompletní příprava na profesní zkoušku podle Národní soustavy kvalifikací. Fyziologie výživy, skladba jídelníčku, praxe s reálnými klienty. Zkoušku skládáte přímo u nás — jsme autorizovaná osoba jmenovaná Ministerstvem zdravotnictví.",
    vystup: "Osvědčení o profesní kvalifikaci",
  },
  {
    kod: "PK-AV",
    nazev: "Asistent výživy",
    typ: "Zdravotnická kvalifikace",
    forma: "Prezenčně v Brně",
    popis:
      "Kvalifikace pro práci ve zdravotnictví a sociálních službách. Garantujeme ji jako národní garant v Systému ověřování kvalifikací — učíte se u těch, kdo standard oboru sami spoluvytvářejí.",
    vystup: "Kvalifikace pro zdravotnictví",
  },
  {
    kod: "PK-LK",
    nazev: "Lektor dalšího vzdělávání",
    typ: "Profesní kvalifikace",
    forma: "Prezenčně / distančně",
    popis:
      "Naučíte se stavět kurz, vést skupinu a zkoušet. Autorizace pro tuto zkoušku nám byla udělena Ministerstvem školství — od přípravy po zkoušku vše na jednom místě.",
    vystup: "Osvědčení o profesní kvalifikaci",
  },
  {
    kod: "PK-KC",
    nazev: "Kouč a lifestyle kouč",
    typ: "Profesní zkouška",
    forma: "Distančně, vlastním tempem",
    popis:
      "Vedení klienta ke změně návyků — technika rozhovoru, práce s motivací, dlouhodobá spolupráce. Ideální nástavba pro poradce, kterým klienti „odpadávají“ po třetí konzultaci.",
    vystup: "Profesní zkouška Kouč",
  },
  {
    kod: "LA-DG",
    nazev: "Laboratorní akademie",
    typ: "Specializace",
    forma: "Prezenčně v Brně",
    popis:
      "Darkfield nutriční diagnostika a kvalita potravin pod mikroskopem. Vede MVDr. Marta Burdychová, 30 let vedoucí akreditované zkušební laboratoře pro zdravotní nezávadnost potravin.",
    vystup: "Certifikát absolventa",
  },
  {
    kod: "ON-KV",
    nazev: "Kurzy pro veřejnost",
    typ: "On-line",
    forma: "Odkudkoli, kdykoli",
    popis:
      "Keto a low carb diety, odkyselení a detoxy, výživářská praxe. Kratší on-line kurzy pro každého, kdo chce rozumět tomu, co jí — bez ambice skládat zkoušku.",
    vystup: "Potvrzení o absolvování",
  },
];

const autorizace = [
  {
    organ: "Ministerstvo zdravotnictví ČR",
    role: "Autorizovaná osoba pro profesní zkoušku Výživový poradce",
  },
  {
    organ: "Ministerstvo školství, mládeže a tělovýchovy",
    role: "Autorizovaná osoba pro zkoušku Lektor dalšího vzdělávání",
  },
  {
    organ: "Systém ověřování kvalifikací (SR)",
    role: "Národní garant kvalifikace Asistent výživy",
  },
  {
    organ: "Český institut pro akreditaci",
    role: "Odborné posuzování zkušebních a kalibračních laboratoří",
  },
];

const tym = [
  {
    jmeno: "Ing. Radka Burdychová, Ph.D., MBA",
    role: "Ředitelka a odborná garantka",
    text: "Zastřešuje všechny kurzy a osobně vede přípravu ke zkouškám. Autorizovaná zkoušející pro kvalifikace Výživový poradce a Lektor dalšího vzdělávání.",
  },
  {
    jmeno: "MVDr. Marta Burdychová",
    role: "Lektorka — kvalita potravin",
    text: "Přes 30 let vedla akreditovanou zkušební laboratoř pro kontrolu zdravotní nezávadnosti potravin. V kurzech učí, jak číst složení potravin očima laboratoře.",
  },
  {
    jmeno: "Bc. Tereza Vilčková",
    role: "Výživová poradkyně a lektorka",
    text: "Fyzioterapeutka z LF Masarykovy univerzity. Specializuje se na jídelníčky pro sportovce, děti, těhotné a kojící ženy — a na to, jak vést kontrolní konzultace.",
  },
  {
    jmeno: "MUDr. Magdaléna Růžičková",
    role: "Odborná konzultantka",
    text: "Praktická lékařka pro děti a dorost. Dohlíží na medicínskou stránku výuky v oblasti detoxikace a dětské výživy.",
  },
];

export default function Page() {
  return (
    <main className="na">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-brand">
            <span className="wordmark">
              Nutri<em>Academy</em>
            </span>
            <span className="hero-loc">Akademie výživy · Brno</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Z výživy</span>
            <span className="hero-line hero-line-2">
              uděláme vaši <span className="hl">profesi.</span>
            </span>
          </h1>

          <p className="hero-sub">
            Akreditované kurzy a profesní zkoušky pro výživové poradce,
            asistenty výživy, lektory a kouče. Zkoušíte přímo u nás — jsme
            autorizovaná osoba jmenovaná Ministerstvem zdravotnictví.
          </p>

          {/* signature: nutriční štítek jako grafický objekt */}
          <aside className="label-card" aria-label="Shrnutí akademie ve formě nutričního štítku">
            <p className="label-head">Nutriční hodnoty studia</p>
            <p className="label-portion">v jedné akademii · Brno</p>
            <div className="label-rule label-rule-thick" aria-hidden="true" />
            <dl className="label-rows">
              <div className="label-row">
                <dt>Profesní kvalifikace</dt>
                <dd>4</dd>
              </div>
              <div className="label-row label-row-sub">
                <dt>z toho zkoušíme přímo u nás</dt>
                <dd>3</dd>
              </div>
              <div className="label-row">
                <dt>Ministerské autorizace</dt>
                <dd>2</dd>
              </div>
              <div className="label-row">
                <dt>Let praxe v laboratoři potravin</dt>
                <dd>30+</dd>
              </div>
              <div className="label-row">
                <dt>Šablonové jídelníčky</dt>
                <dd>0&nbsp;%</dd>
              </div>
            </dl>
            <div className="label-rule" aria-hidden="true" />
            <p className="label-note">
              Úřední hodiny Po–Pá 9–12 · tel. 775 785 219
            </p>
          </aside>

          <div className="hero-cta">
            <a className="btn btn-solid" href="#kurzy">
              Vybrat kurz
            </a>
            <a className="btn btn-line" href="tel:+420775785219">
              Zavolat 775 785 219
            </a>
          </div>
        </div>
        <div className="hero-band" aria-hidden="true">
          <span>bílkoviny · sacharidy · tuky · vláknina · mikroživiny · praxe · zkouška · </span>
          <span>bílkoviny · sacharidy · tuky · vláknina · mikroživiny · praxe · zkouška · </span>
        </div>
      </header>

      {/* ============ KURZY ============ */}
      <section className="kurzy" id="kurzy" aria-labelledby="kurzy-h">
        <div className="sec-head">
          <p className="eyebrow">Kurzy a zkoušky</p>
          <h2 id="kurzy-h">
            Od prvního semináře<br />po razítko na osvědčení
          </h2>
          <p className="sec-lead">
            Každý kurz vedeme k jasnému výstupu — kvalifikaci, se kterou můžete
            legálně podnikat nebo pracovat ve zdravotnictví. Kód kurzu říká,
            o jaký typ výstupu jde.
          </p>
        </div>

        <div className="kurzy-grid">
          {kurzy.map((k) => (
            <article className="kurz" key={k.kod}>
              <div className="kurz-top">
                <span className="kurz-kod">{k.kod}</span>
                <span className="kurz-typ">{k.typ}</span>
              </div>
              <h3>{k.nazev}</h3>
              <p className="kurz-forma">{k.forma}</p>
              <p className="kurz-popis">{k.popis}</p>
              <p className="kurz-vystup">
                <span aria-hidden="true">→</span> {k.vystup}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-left">
            <p className="eyebrow eyebrow-light">Proč u nás</p>
            <h2 id="duvera-h">
              Zkoušku neskládáte „někde“.<br />Skládáte ji u lidí, kteří obor garantují.
            </h2>
            <p className="sec-lead sec-lead-light">
              NutriAcademy vede Ing. Radka Burdychová, Ph.D., MBA — autorizovaná
              zkoušející jmenovaná dvěma ministerstvy. To znamená jediné: učíte
              se přesně to, co se u zkoušky opravdu hodnotí.
            </p>

            <ul className="aut-list">
              {autorizace.map((a) => (
                <li key={a.organ}>
                  <span className="aut-organ">{a.organ}</span>
                  <span className="aut-role">{a.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="duvera-right">
            <p className="tym-head">Kdo vás bude učit</p>
            <ul className="tym-list">
              {tym.map((t) => (
                <li className="tym-item" key={t.jmeno}>
                  <p className="tym-jmeno">{t.jmeno}</p>
                  <p className="tym-role">{t.role}</p>
                  <p className="tym-text">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
