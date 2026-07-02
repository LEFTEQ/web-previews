export const metadata = {
  title: "Pharmacentrum NIKOS — zubní ordinace Hradec Králové",
  description:
    "Zubní ordinace Pharmacentrum NIKOS v Hradci Králové. Preventivní prohlídky, dentální hygiena, bílé výplně i protetika. Objednání po telefonu, ošetření bez zbytečného čekání.",
  openGraph: {
    title: "Pharmacentrum NIKOS — zubní ordinace Hradec Králové",
    description:
      "Preventivní prohlídky, dentální hygiena, bílé výplně i protetika v Hradci Králové.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    nazev: "Preventivní prohlídka",
    popis:
      "Dvakrát ročně, hradí ji pojišťovna. Zkontrolujeme zuby, dásně i stávající výplně a rovnou domluvíme, co je potřeba — nic vás nepřekvapí až v křesle.",
    detail: "2× ročně · na pojišťovnu",
  },
  {
    nazev: "Dentální hygiena",
    popis:
      "Odstranění zubního kamene a pigmentací ultrazvukem a air-flow. Naučíme vás čistit mezizubní prostory tak, aby další návštěva byla jen kontrola.",
    detail: "cca 60 minut",
  },
  {
    nazev: "Bílé výplně",
    popis:
      "Fotokompozitní výplně v odstínu vašeho zubu. Ošetřujeme v lokální anestezii a s kofferdamem — v klidu, suše a přesně.",
    detail: "anestezie v ceně",
  },
  {
    nazev: "Korunky a můstky",
    popis:
      "Když výplň nestačí. Otisk, zkouška, nasazení — spolupracujeme s laboratoří tady v Hradci, takže na protetiku nečekáte týdny.",
    detail: "laboratoř v HK",
  },
  {
    nazev: "Ošetření bolesti",
    popis:
      "Bolí to teď? Zavolejte ráno, akutní pacienty bereme tentýž den. Nejdřív vás zbavíme bolesti, plán léčby řešíme potom.",
    detail: "akutně tentýž den",
  },
  {
    nazev: "Rentgenová diagnostika",
    popis:
      "Intraorální RTG přímo v ordinaci. Snímek vidíte na obrazovce hned a lékař vám na něm ukáže, o čem mluví.",
    detail: "snímek na místě",
  },
];

const zasady = [
  {
    cislo: "1",
    titulek: "Nejdřív vysvětlíme, pak vrtáme",
    text: "Každý zákrok vám ukážeme na snímku a řekneme cenu předem. Souhlas dáváte vy, ne my.",
  },
  {
    cislo: "2",
    titulek: "Objednaný čas platí",
    text: "Objednáváme tak, abyste v čekárně neseděli. Když se ordinace zpozdí, dáme vám vědět telefonem.",
  },
  {
    cislo: "3",
    titulek: "Prevence před opravou",
    text: "Levnější a příjemnější je zubní kaz nemít. Proto klademe důraz na hygienu a pravidelné kontroly.",
  },
];

export default function Page() {
  return (
    <main className="nk">
      {/* ===== HERO ===== */}
      <header className="nk-hero">
        <div className="nk-hero-top">
          <span className="nk-wordmark" aria-label="Pharmacentrum NIKOS">
            <span className="nk-wordmark-pharma">pharmacentrum</span>
            <span className="nk-wordmark-nikos">NIKOS</span>
          </span>
          <span className="nk-hero-loc">zubní ordinace · Hradec Králové</span>
        </div>

        <div className="nk-hero-body">
          <h1 className="nk-hero-title">
            <span className="nk-line nk-line-1">Zuby v pořádku.</span>
            <span className="nk-line nk-line-2">
              Klid <em>v&nbsp;křesle.</em>
            </span>
          </h1>

          {/* Signature: záznam chrupu — zubní kříž jako grafický prvek */}
          <div className="nk-chart" aria-hidden="true">
            <div className="nk-chart-row">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={`h-${i}`}
                  className={`nk-tooth ${i === 4 ? "nk-tooth-mark" : ""} ${
                    i === 11 ? "nk-tooth-fill" : ""
                  }`}
                  style={{ animationDelay: `${0.05 * i}s` }}
                />
              ))}
            </div>
            <div className="nk-chart-axis">
              <span>18 – 11</span>
              <span className="nk-chart-label">záznam chrupu · zdravý stav</span>
              <span>21 – 28</span>
            </div>
            <div className="nk-chart-row">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={`d-${i}`}
                  className={`nk-tooth nk-tooth-low ${
                    i === 7 ? "nk-tooth-fill" : ""
                  }`}
                  style={{ animationDelay: `${0.05 * i + 0.4}s` }}
                />
              ))}
            </div>
          </div>

          <p className="nk-hero-sub">
            Rodinná zubní ordinace v&nbsp;Hradci Králové. Prevence, hygiena a
            ošetření bez bolesti — vysvětlíme, ukážeme na snímku a&nbsp;teprve
            pak se pustíme do&nbsp;práce.
          </p>

          <div className="nk-hero-actions">
            <a className="nk-btn nk-btn-primary" href="#sluzby">
              Co ošetřujeme
            </a>
            <a className="nk-btn nk-btn-ghost" href="#ordinace">
              Jak to u nás chodí
            </a>
          </div>
        </div>

        <div className="nk-hero-strip" aria-hidden="true">
          <span>prevence</span>
          <span className="nk-dot" />
          <span>hygiena</span>
          <span className="nk-dot" />
          <span>výplně</span>
          <span className="nk-dot" />
          <span>protetika</span>
          <span className="nk-dot" />
          <span>akutní ošetření</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="nk-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="nk-section-head">
          <p className="nk-eyebrow">Ošetření</p>
          <h2 id="sluzby-h" className="nk-h2">
            Od kontroly po korunku.
            <br />
            Všechno pod jednou střechou.
          </h2>
          <p className="nk-section-lead">
            Nemusíte přemýšlet, kam s&nbsp;čím jít. Diagnostiku, hygienu
            i&nbsp;ošetření zvládneme v&nbsp;jedné ordinaci — a&nbsp;když je
            potřeba specialista, doporučíme konkrétního kolegu v&nbsp;Hradci.
          </p>
        </div>

        <ul className="nk-services">
          {sluzby.map((s) => (
            <li key={s.nazev} className="nk-service">
              <div className="nk-service-top">
                <h3 className="nk-service-name">{s.nazev}</h3>
                <span className="nk-service-tag">{s.detail}</span>
              </div>
              <p className="nk-service-desc">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== ORDINACE / DŮVĚRA ===== */}
      <section
        className="nk-section nk-section-alt"
        id="ordinace"
        aria-labelledby="ordinace-h"
      >
        <div className="nk-about">
          <div className="nk-about-text">
            <p className="nk-eyebrow nk-eyebrow-light">Ordinace</p>
            <h2 id="ordinace-h" className="nk-h2 nk-h2-light">
              Malá ordinace, kde vás lékař zná jménem.
            </h2>
            <p className="nk-about-lead">
              Pharmacentrum NIKOS je rodinná praxe v&nbsp;centru Hradce
              Králové. Nejsme klinika s&nbsp;deseti křesly — jste u&nbsp;nás
              pacient, ne pořadové číslo. Staráme se o&nbsp;celé rodiny, od
              první prohlídky s&nbsp;dětmi po&nbsp;protetiku pro prarodiče.
            </p>

            <dl className="nk-facts">
              <div className="nk-fact">
                <dt>Kde nás najdete</dt>
                <dd>Centrum Hradce Králové, pár minut od terminálu MHD</dd>
              </div>
              <div className="nk-fact">
                <dt>Objednání</dt>
                <dd>Telefonicky v&nbsp;ordinačních hodinách, bez formulářů</dd>
              </div>
              <div className="nk-fact">
                <dt>Akutní bolest</dt>
                <dd>Zavolejte ráno — bereme tentýž den</dd>
              </div>
              <div className="nk-fact">
                <dt>Pojišťovny</dt>
                <dd>Standardní výkony vykazujeme na&nbsp;pojišťovnu</dd>
              </div>
            </dl>
          </div>

          <ol className="nk-principles">
            {zasady.map((z) => (
              <li key={z.cislo} className="nk-principle">
                <span className="nk-principle-no" aria-hidden="true">
                  {z.cislo}
                </span>
                <div>
                  <h3 className="nk-principle-title">{z.titulek}</h3>
                  <p className="nk-principle-text">{z.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
