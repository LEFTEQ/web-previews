const projekty = [
  {
    faze: "Fáze A",
    nazev: "Záměr a dotační audit",
    popis:
      "Projdeme váš investiční záměr a řekneme vám na rovinu, které dotační tituly připadají v úvahu — evropské fondy, národní programy i krajské výzvy pro Moravskoslezský kraj. Bez závazku a bez slibů, které neumíme splnit.",
    vystup: "Výstup: písemné doporučení, do 10 dnů",
  },
  {
    faze: "Fáze B",
    nazev: "Zpracování žádosti",
    popis:
      "Připravíme kompletní projektovou žádost včetně studie proveditelnosti, rozpočtu a povinných příloh. Víme, na co hodnotitelé slyší — od roku 2002 jsme zpracovali přes 250 projektů, většinu z nich právě na Ostravsku.",
    vystup: "Výstup: podaná žádost, hlídané termíny výzvy",
  },
  {
    faze: "Fáze C",
    nazev: "Výběrová řízení",
    popis:
      "Dotace vyžadují zadávání zakázek podle zákona. Výběrové řízení za vás připravíme i zadministrujeme tak, aby obstálo při kontrole poskytovatele dotace — chyba v této fázi znamená krácení nebo vracení peněz.",
    vystup: "Výstup: řízení dle zákona o veřejných zakázkách",
  },
  {
    faze: "Fáze D",
    nazev: "Realizace a udržitelnost",
    popis:
      "Po schválení projekt neopouštíme. Hlídáme monitorovací zprávy, žádosti o platbu, změnová řízení i podmínky udržitelnosti — až do chvíle, kdy máte dotaci nejen přiznanou, ale skutečně proplacenou.",
    vystup: "Výstup: proplacená dotace bez sankcí",
  },
];

const lide = [
  {
    jmeno: "Ing. Štěpán Rainisch",
    role: "Zakladatel a majitel",
    text: "Od roku 2002 zpracoval nebo se podílel na více než 250 projektech z předvstupních, strukturálních fondů a národních dotačních titulů. Registrovaný poradce v Národním registru poradců, absolvent kurzu Projektový manažer a odborného kurzu VŠB-TU Ostrava pro odhadce a soudní znalce v oboru oceňování podniků.",
  },
  {
    jmeno: "Lenka Kičmerová",
    role: "Projektová manažerka",
    text: "Ve firmě pracuje od roku 2003. Spolupracovala na téměř dvou desítkách projektů, z nichž více než polovina byla schválena a úspěšně realizována. Absolventka akreditovaných kurzů Předkladatel projektů a Projektový manažer Moravskoslezského kraje.",
  },
];

const fakta = [
  { cislo: "2002", text: "rok založení firmy v Ostravě" },
  { cislo: "250+", text: "zpracovaných dotačních projektů" },
  { cislo: "NRP", text: "registrace v Národním registru poradců" },
  { cislo: "MSK", text: "Databáze euromanažerů Moravskoslezského kraje" },
];

export default function Page() {
  return (
    <main className="tr-page">
      {/* ===== HERO ===== */}
      <header className="tr-hero">
        <div className="tr-hero-top">
          <span className="tr-wordmark">
            TRAINER<span className="tr-wordmark-sro">&nbsp;s.r.o.</span>
          </span>
          <span className="tr-hero-loc">Ostrava · Moravskoslezský kraj</span>
        </div>

        <div className="tr-hero-body">
          <p className="tr-hero-eyebrow">Dotační poradenství pro Ostravsko — od roku 2002</p>
          <h1 className="tr-hero-title">
            <span className="tr-line tr-line-1">Váš záměr.</span>
            <span className="tr-line tr-line-2">Naše žádost.</span>
            <span className="tr-line tr-line-3">
              <em>Schválená&nbsp;dotace.</em>
            </span>
          </h1>
          <p className="tr-hero-lead">
            Připravíme váš projekt na evropské i národní dotace — od prvního posouzení
            záměru přes žádost a výběrové řízení až po proplacení. Přes 250 projektů
            zpracovaných v regionu, kde podnikáte i vy.
          </p>
        </div>

        {/* signature: dotační trať — projekt jako běžecká dráha se čtyřmi úseky */}
        <div className="tr-track" aria-hidden="true">
          <div className="tr-track-seg tr-seg-1"><span>Záměr</span></div>
          <div className="tr-track-seg tr-seg-2"><span>Žádost</span></div>
          <div className="tr-track-seg tr-seg-3"><span>Zakázka</span></div>
          <div className="tr-track-seg tr-seg-4"><span>Proplacení</span></div>
          <div className="tr-track-finish"><span>✓</span></div>
        </div>
        <p className="tr-track-caption">
          Dotační projekt je trať se čtyřmi úseky. Proběhneme ji s vámi celou.
        </p>
      </header>

      {/* ===== SEKCE 1: SLUŽBY / FÁZE ===== */}
      <section className="tr-sluzby" aria-labelledby="sluzby-h">
        <div className="tr-section-head">
          <h2 id="sluzby-h">Čtyři úseky trati</h2>
          <p>
            Každý dotační projekt prochází stejnými fázemi. Můžete si u nás objednat
            jednu, nebo nám svěřit celou trať — většina klientů z Ostravska volí to druhé.
          </p>
        </div>

        <ol className="tr-faze-list">
          {projekty.map((p) => (
            <li key={p.faze} className="tr-faze">
              <span className="tr-faze-badge">{p.faze}</span>
              <div className="tr-faze-obsah">
                <h3>{p.nazev}</h3>
                <p>{p.popis}</p>
                <p className="tr-faze-vystup">{p.vystup}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / LIDÉ ===== */}
      <section className="tr-duvera" aria-labelledby="duvera-h">
        <div className="tr-section-head tr-section-head-inv">
          <h2 id="duvera-h">Kdo trať zná zpaměti</h2>
          <p>
            Nejsme anonymní agentura s call centrem. Jsme dva lidé z Ostravy a síť
            specialistů, které přizveme podle zaměření vašeho projektu.
          </p>
        </div>

        <div className="tr-lide">
          {lide.map((l) => (
            <article key={l.jmeno} className="tr-osoba">
              <h3>{l.jmeno}</h3>
              <p className="tr-osoba-role">{l.role}</p>
              <p className="tr-osoba-text">{l.text}</p>
            </article>
          ))}
        </div>

        <dl className="tr-fakta">
          {fakta.map((f) => (
            <div key={f.cislo} className="tr-fakt">
              <dt>{f.cislo}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>

        <p className="tr-duvera-pozn">
          „Success is a question of training.“ — motto, se kterým firma v roce 2002
          vznikla, platí dodnes: dotace nezískává nejlepší nápad, ale nejlépe
          připravený projekt.
        </p>
      </section>
    </main>
  );
}
