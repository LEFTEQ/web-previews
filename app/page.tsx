// Klimaland s.r.o. — klimatizace, tepelná čerpadla, rekuperace · Praha
// Koncept: „Vzduch, který má teplotu." Signature prvek = teplotní stupnice/gradient
// od chladné modré k teplé oranžové — přesně to, co klimatizace a tepelné čerpadlo
// dělají: posouvají vzduch po stupnici. Typografie postavená na velkých číslech
// stupňů (°C) — nejcharakterističtější artefakt řemesla.

export const metadata = {
  title: "Klimaland Praha — klimatizace, tepelná čerpadla, rekuperace",
  description:
    "Montáž a servis klimatizací, tepelných čerpadel a rekuperace v Praze a okolí. Klimaland s.r.o. — návrh na míru, čistá montáž do dvou dnů, pravidelný servis. Volejte +420 720 020 101.",
};

const sluzby = [
  {
    rozsah: "21 °C v létě",
    nazev: "Klimatizace do bytu i domu",
    popis:
      "Navrhneme jednotku podle velikosti a orientace místností, ne podle katalogu. Vnitřní jednotku umístíme tak, aby nefoukala na postel ani na pracovní stůl. Montáž v bytě zvládneme obvykle za jeden den — bez bourání, s úklidem po sobě.",
    detaily: ["Split i multisplit systémy", "Vyřídíme souhlas SVJ a vlastníka", "Topení klimatizací v přechodném období"],
  },
  {
    rozsah: "55 °C topné vody",
    nazev: "Tepelná čerpadla",
    popis:
      "Tepelné čerpadlo vzduch–voda vytopí dům i při −15 °C venku a ušetří proti plynu i elektrokotli. Spočítáme návratnost na vaše reálné spotřeby a pomůžeme s žádostí o dotaci Nová zelená úsporám.",
    detaily: ["Výpočet tepelných ztrát domu", "Vyřízení dotace za vás", "Napojení na stávající radiátory i podlahovku"],
  },
  {
    rozsah: "Čerstvý vzduch 24/7",
    nazev: "Rekuperace",
    popis:
      "Řízené větrání s rekuperací vymění vzduch v celém domě, aniž byste otevřeli okno — a teplo zůstane uvnitř. Ideální k novostavbě i po zateplení, kdy dům přestal „dýchat“ sám.",
    detaily: ["Centrální i lokální jednotky", "Filtrace pylů — úleva pro alergiky", "Návrh rozvodů už v hrubé stavbě"],
  },
  {
    rozsah: "1× ročně",
    nazev: "Servis a čištění",
    popis:
      "Klimatizace bez servisu ztrácí výkon a může zanášet vzduch plísněmi. Vyčistíme výměník, filtry i vanu kondenzátu, zkontrolujeme chladivo a těsnost. Servisujeme i jednotky, které jsme nemontovali.",
    detaily: ["Dezinfekce výměníku", "Kontrola chladiva a tlaků", "Oprava do 48 hodin u smluvních zákazníků"],
  },
];

const realizace = [
  { misto: "Praha 8 — Karlín", co: "Klimatizace 3+kk, multisplit", pozn: "Montáž za jeden den, souhlas SVJ vyřízen za nás." },
  { misto: "Praha — rodinný dům", co: "Tepelné čerpadlo vzduch–voda 12 kW", pozn: "Náhrada plynového kotle, dotace 100 000 Kč." },
  { misto: "Dolany", co: "Klimatizace rodinného domu", pozn: "Tři vnitřní jednotky, venkovní skrytá za domem." },
  { misto: "Smržice", co: "Klimatizace RD + topení jednotkou", pozn: "Chlazení v létě, přitápění na jaře a na podzim." },
];

const faq = [
  {
    q: "Kolik stojí klimatizace do bytu?",
    a: "Jednotka s montáží pro jednu místnost vychází zpravidla od 35 000 Kč. Přesnou cenu řekneme po krátké prohlídce nebo z půdorysu a fotek — návrh a nacenění děláme zdarma.",
  },
  {
    q: "Potřebuji souhlas SVJ nebo vlastníka?",
    a: "U venkovní jednotky na fasádě ano. Připravíme za vás technický nákres a podklady, se kterými souhlas na schůzi SVJ obvykle projde bez problémů.",
  },
  {
    q: "Můžu klimatizací i topit?",
    a: "Ano. Moderní jednotky topí účinně do zhruba −15 °C venku a na jaře a na podzim jsou levnější než plynový kotel. Mnoho zákazníků je pořizuje hlavně kvůli topení.",
  },
  {
    q: "Jak dlouho trvá montáž?",
    a: "Byt obvykle jeden den, rodinný dům s více jednotkami dva dny. Vrtáme s odsáváním prachu, nábytek zakryjeme a po sobě uklidíme.",
  },
];

export default function Page() {
  return (
    <main className="kl">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="Klimaland">
            KLIMA<em>LAND</em>
          </span>
          <span className="hero-loc">Praha · Za Poříčskou bránou 10</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Klimatizace · tepelná čerpadla · rekuperace</p>
          <h1 className="hero-title">
            <span className="t-cold">Venku 34&nbsp;°C.</span>
            <span className="t-warm">U&nbsp;vás doma 21&nbsp;°C.</span>
          </h1>
          <p className="hero-sub">
            Namontujeme klimatizaci do bytu za jeden den — bez bourání, s úklidem po
            sobě a se souhlasem SVJ, který vyřídíme za vás. V Praze a okolí.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420720020101">Zavolat +420 720 020 101</a>
            <a className="btn btn-ghost" href="mailto:praha@klimaland.cz">Napsat na praha@klimaland.cz</a>
          </div>
        </div>

        {/* Signature: teplotní stupnice — chladíme i topíme, celý rozsah řemesla */}
        <div className="scale" role="img" aria-label="Teplotní rozsah našich zařízení: od −15 °C, kdy tepelné čerpadlo stále topí, přes 21 °C ideální pokojové teploty, po 55 °C topné vody">
          <div className="scale-bar" aria-hidden="true"></div>
          <div className="scale-marks" aria-hidden="true">
            <span className="mark" style={{ left: "0%" }}>
              <b>−15&nbsp;°C</b>
              <i>čerpadlo stále topí</i>
            </span>
            <span className="mark mark-mid" style={{ left: "50%" }}>
              <b>21&nbsp;°C</b>
              <i>ideál u vás doma</i>
            </span>
            <span className="mark mark-end" style={{ left: "100%" }}>
              <b>55&nbsp;°C</b>
              <i>topná voda z čerpadla</i>
            </span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <h2 id="sluzby-h">Co u vás doma zařídíme</h2>
          <p>
            Od návrhu přes montáž po pravidelný servis. Vždy vlastní technici
            Klimalandu — práci nepředáváme dál.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <p className="karta-rozsah">{s.rozsah}</p>
              <h3>{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
              <ul className="karta-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA: realizace + FAQ ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sec-head sec-head-inv">
          <h2 id="duvera-h">Poslední montáže a co se nás ptáte</h2>
          <p>
            Přes 500 namontovaných jednotek. Pobočky v Praze a Olomouci, servis do
            48 hodin u smluvních zákazníků.
          </p>
        </div>

        <div className="duvera-grid">
          <div className="realizace">
            <h3 className="blok-titul">Nejnovější realizace</h3>
            <ol className="real-list">
              {realizace.map((r) => (
                <li key={r.misto + r.co}>
                  <span className="real-misto">{r.misto}</span>
                  <span className="real-co">{r.co}</span>
                  <span className="real-pozn">{r.pozn}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="faq">
            <h3 className="blok-titul">Časté dotazy zákazníků</h3>
            {faq.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
