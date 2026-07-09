import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psychologické centrum Praha — psychoterapie na Vinohradech",
  description:
    "Klinická psychologie a psychoterapie pro dospělé, dospívající i děti. Individuální, párová i skupinová terapie na Vinohradech, u metra Jiřího z Poděbrad. Smluvní pojišťovny VZP, VoZP, ČPZP, OZP, ZPMV.",
  openGraph: {
    title: "Psychologické centrum Praha — psychoterapie na Vinohradech",
    description:
      "Klinická psychologie a psychoterapie pro dospělé, dospívající i děti. U metra Jiřího z Poděbrad, Praha 3.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Individuální psychoterapie",
    popis:
      "Pravidelná setkání jeden na jednoho, kde máte prostor mluvit o tom, co Vás skutečně tíží — ve svém tempu a beze spěchu.",
    cas: "50 min",
  },
  {
    kod: "02",
    nazev: "Párová psychoterapie",
    popis:
      "Společný čas pro dva, kdy hledáme, kde se rozhovor zasekává, a učíme se spolu mluvit tak, aby druhý slyšel.",
    cas: "90 min",
  },
  {
    kod: "03",
    nazev: "Skupinová psychoterapie",
    popis:
      "Práce ve skupině lidí, kteří řeší podobné věci. Zjistíte, že v tom nejste sami — a to samo o sobě léčí.",
    cas: "90 min",
  },
  {
    kod: "04",
    nazev: "Krizová intervence",
    popis:
      "Když se stane něco, co Vás vyvede z rovnováhy. Rychlá první pomoc pro chvíle, kdy je toho na Vás moc.",
    cas: "dle potřeby",
  },
  {
    kod: "05",
    nazev: "Psychologické poradenství",
    popis:
      "Orientace v náročné situaci — vztahové, pracovní i osobní. Společně se podíváme na možnosti a další krok.",
    cas: "50 min",
  },
  {
    kod: "06",
    nazev: "Psychologická diagnostika",
    popis:
      "Podrobné vyšetření, které pojmenuje, o co jde. Jasný výstup, se kterým lze dál pracovat u nás i jinde.",
    cas: "dle rozsahu",
  },
];

const tym = [
  {
    jmeno: "PhDr. Barbora Palatová",
    role: "Klinická psycholožka, Gestalt psychoterapeutka",
    body: [
      "Atestace z klinické psychologie",
      "Gestalt psychoterapie (Dialog GPTI)",
      "Terapie traumatu a partnerských vztahů",
      "Praxe: klinika ESET, FN Motol, PL Opařany",
    ],
  },
  {
    jmeno: "PhDr. Helena Talandová",
    role: "Psycholožka v předatestační přípravě",
    body: [
      "Strategická a systemická psychoterapie",
      "Kooperační a komunikační přístup, hypnoterapie",
      "Praxe: klinika ESET, VFN Ke Karlovu",
      "Denní stacionář pro adolescenty",
    ],
  },
  {
    jmeno: "Mgr. Lucie Řádková",
    role: "Psycholožka v předatestační přípravě",
    body: [
      "Existenciální analýza a logoterapie",
      "Výcvik v krizové intervenci",
      "Psychoterapeutická práce s traumatem",
      "Praxe: PN Horní Beřkovice, denní stacionář",
    ],
  },
  {
    jmeno: "Mgr. Dana Čechová",
    role: "Psycholožka v předatestační přípravě",
    body: [
      "Výcvik v analytické psychologii",
      "Katatymně imaginativní psychoterapie",
      "Praxe: PN Horní Beřkovice, klinika ESET",
    ],
  },
];

const pojistovny = [
  "VZP (111)",
  "VoZP (201)",
  "ČPZP (205)",
  "OZP (207)",
  "ZPMV (211)",
];

export default function Page() {
  return (
    <main className="pcp">
      <header className="pcp-nav">
        <a className="pcp-mark" href="#" aria-label="Psychologické centrum Praha, domů">
          <span className="pcp-mark__pc">PC</span>
          <span className="pcp-mark__praha">Praha</span>
          <span className="pcp-mark__full">Psychologické centrum</span>
        </a>
        <nav className="pcp-nav__links" aria-label="Hlavní navigace">
          <a href="#pece">Péče</a>
          <a href="#tym">Tým</a>
          <a href="#kontakt">Kontakt</a>
          <a className="pcp-nav__cta" href="tel:+420603318529">Objednat se</a>
        </nav>
      </header>

      <section className="pcp-hero" id="uvod">
        <div className="pcp-hero__text">
          <p className="pcp-hero__eyebrow">Klinická psychologie · Vinohrady, Praha 3</p>
          <h1 className="pcp-hero__title">
            Místo, kde se<br />
            <span className="pcp-hero__accent">dá mluvit</span><br />
            nahlas.
          </h1>
          <p className="pcp-hero__lead">
            Psychoterapie pro dospělé, dospívající i děti. Sedneme si spolu
            v klidné ordinaci u&nbsp;Jiřího z&nbsp;Poděbrad a začneme tam, kde
            zrovna jste — bez posuzování, ve Vašem tempu.
          </p>
          <div className="pcp-hero__actions">
            <a className="pcp-btn" href="tel:+420603318529">Zavolat a objednat se</a>
            <a className="pcp-btn pcp-btn--ghost" href="#pece">Jak péče probíhá</a>
          </div>
          <p className="pcp-hero__note">
            Při zdravotní indikaci hrazeno z pojištění — {pojistovny.join(", ")}.
          </p>
        </div>
        <figure className="pcp-hero__figure">
          <img
            src="/hero.webp"
            alt="Klidná terapeutická místnost Psychologického centra Praha na Vinohradech"
            className="pcp-hero__img"
            width={1200}
            height={1500}
          />
          <figcaption className="pcp-hero__caption">
            Ordinace · Lucemburská 3, 2.&nbsp;patro
          </figcaption>
        </figure>
      </section>

      <section className="pcp-pece" id="pece">
        <div className="pcp-section-head">
          <p className="pcp-section-head__eyebrow">Co u nás najdete</p>
          <h2 className="pcp-section-head__title">Šest cest, jak s tím začít</h2>
          <p className="pcp-section-head__lead">
            Nemusíte vědět dopředu, co potřebujete. Ozvěte se a společně
            najdeme formu péče, která Vám sedne.
          </p>
        </div>

        <ol className="pcp-cards">
          {sluzby.map((s) => (
            <li className="pcp-card" key={s.kod}>
              <span className="pcp-card__kod">{s.kod}</span>
              <h3 className="pcp-card__nazev">{s.nazev}</h3>
              <p className="pcp-card__popis">{s.popis}</p>
              <span className="pcp-card__cas">{s.cas}</span>
            </li>
          ))}
        </ol>

        <div className="pcp-cenik">
          <div className="pcp-cenik__intro">
            <img
              src="/section-1.webp"
              alt="Detail z prostředí psychologické ordinace"
              className="pcp-cenik__img"
              width={900}
              height={700}
            />
          </div>
          <div className="pcp-cenik__list">
            <h3 className="pcp-cenik__title">Ceník samoplátce</h3>
            <p className="pcp-cenik__note">
              Pokud Vaše pojišťovna není naším smluvním partnerem nebo
              péče není hrazena ze zdravotní indikace.
            </p>
            <dl className="pcp-price">
              <div className="pcp-price__row">
                <dt>
                  Individuální konzultace <span>50 min</span>
                </dt>
                <dd>2 000 Kč</dd>
              </div>
              <div className="pcp-price__row">
                <dt>
                  Párová konzultace <span>90 min</span>
                </dt>
                <dd>3 000 Kč</dd>
              </div>
              <div className="pcp-price__row">
                <dt>
                  Skupinová psychoterapie <span>90 min</span>
                </dt>
                <dd>800 Kč / os.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="pcp-tym" id="tym">
        <div className="pcp-tym__grid">
          <div className="pcp-tym__intro">
            <p className="pcp-section-head__eyebrow">Kdo Vás přijme</p>
            <h2 className="pcp-tym__title">Čtyři psycholožky, jeden zavřený dveří pokoj</h2>
            <p className="pcp-tym__lead">
              Jsme držiteli akreditace Ministerstva zdravotnictví ČR pro
              specializační vzdělávání v&nbsp;oboru klinická psychologie.
              U&nbsp;nás sedíte s&nbsp;člověkem, který ví, co dělá.
            </p>
            <img
              src="/section-2.webp"
              alt="Tým Psychologického centra Praha v ordinaci na Vinohradech"
              className="pcp-tym__img"
              width={1000}
              height={750}
            />
          </div>

          <ul className="pcp-people">
            {tym.map((p) => (
              <li className="pcp-person" key={p.jmeno}>
                <h3 className="pcp-person__jmeno">{p.jmeno}</h3>
                <p className="pcp-person__role">{p.role}</p>
                <ul className="pcp-person__body">
                  {p.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="pcp-kontakt" id="kontakt">
          <div className="pcp-kontakt__col">
            <h3 className="pcp-kontakt__h">Objednání</h3>
            <a className="pcp-kontakt__big" href="tel:+420603318529">
              +420 603 318 529
            </a>
            <a className="pcp-kontakt__mail" href="mailto:psychologickecentrumpraha@email.cz">
              psychologickecentrumpraha@email.cz
            </a>
          </div>
          <div className="pcp-kontakt__col">
            <h3 className="pcp-kontakt__h">Kde nás najdete</h3>
            <p>
              Lucemburská 1578/3, 2.&nbsp;patro<br />
              130 00 Praha 3 — Vinohrady
            </p>
            <p className="pcp-kontakt__doprava">
              Metro A — Jiřího z&nbsp;Poděbrad (250&nbsp;m)<br />
              Tram 11, 13 — Jiřího z&nbsp;Poděbrad<br />
              Parkování v&nbsp;okolí (40&nbsp;Kč/hod)
            </p>
          </div>
          <div className="pcp-kontakt__col">
            <h3 className="pcp-kontakt__h">Ordinační hodiny</h3>
            <dl className="pcp-hodiny">
              <div><dt>Pondělí</dt><dd>7:00 — 16:00</dd></div>
              <div><dt>Úterý</dt><dd>8:00 — 17:00</dd></div>
              <div><dt>Středa</dt><dd>7:00 — 16:00</dd></div>
              <div><dt>Čtvrtek</dt><dd>8:00 — 17:00</dd></div>
              <div><dt>Pátek</dt><dd>7:00 — 12:00</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
