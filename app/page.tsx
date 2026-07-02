// Vytisknuti.cz — grafické studio & fotodárky, Ústí nad Labem
// Návrh: „registrační značky" (CMYK soutisk) jako signature prvek.
// Server komponenta, žádné externí knihovny.

const produkty = [
  {
    kod: "C",
    nazev: "Hrnky s potiskem",
    popis:
      "Vlastní fotka, jméno nebo motiv. Sublimační tisk, který přežije myčku i každodenní kafe v kanceláři.",
    detail: "od 1 kusu · keramika 330 ml",
  },
  {
    kod: "M",
    nazev: "Trička a textil",
    popis:
      "Trička, mikiny a polokošile s fotkou, logem nebo textem. Hotové motivy pro rybáře, pejskaře i oslavence.",
    popisky: true,
    detail: "potisk DTF · velikosti XS–5XL",
  },
  {
    kod: "Y",
    nazev: "Fotokalendáře",
    popis:
      "Nástěnné, stolní i kuchyňské kalendáře z vašich fotek. Rok rodinných vzpomínek na jednom místě.",
    detail: "formáty A4 a A3 · kroužková vazba",
  },
  {
    kod: "K",
    nazev: "Fotoobrazy a dekorace",
    popis:
      "Fotoobrazy na plátně, magnetky a odznaky. A pro firmy vizitky, letáky i kompletní firemní tisk.",
    detail: "plátno na rámu · tisk do formátu A1",
  },
];

const recenze = [
  {
    text: "Takovou rychlost jsem opravdu nečekala. Hrnek dorazil za dva dny a fotka je ostrá jak má být.",
    autor: "Jiřina S.",
    zdroj: "Google",
    hvezdy: 5,
  },
  {
    text: "Služeb Vytisknuti.cz využívám pravidelně už přes 5 let a vždy jsem byl spokojen s kvalitou, rychlostí i komunikací.",
    autor: "Tomáš Ch.",
    zdroj: "Mapy.com",
    hvezdy: 5,
  },
  {
    text: "Již podeváté — roční kalendáře, obraz na plátně i další věci. Tahle firma nemá chybu, vřele doporučuji.",
    autor: "Jaroslav H.",
    zdroj: "Mapy.com",
    hvezdy: 5,
  },
  {
    text: "Seriózní jednání a úprava vizitek na jedničku. Ochota, nic není problém, je to firma snů.",
    autor: "Michal K.",
    zdroj: "Google",
    hvezdy: 5,
  },
];

const fakta = [
  { cislo: "4,9 / 5", popis: "průměrné hodnocení z více než 500 recenzí na Google a Mapy.com" },
  { cislo: "od 1 ks", popis: "vyrábíme jednotlivé dárky i větší zakázky pro firmy, školy a týmy" },
  { cislo: "25 000+", popis: "výdejních míst po celé ČR, nebo doručení přímo na vaši adresu" },
  { cislo: "Ústí n. L.", popis: "česká výroba v našem studiu — tiskneme, balíme a odesíláme sami" },
];

function Hvezdy({ pocet }: { pocet: number }) {
  return (
    <span className="stars" aria-label={`${pocet} z 5 hvězdiček`}>
      {"★".repeat(pocet)}
    </span>
  );
}

export default function Page() {
  return (
    <main className="vt">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Vytisknuti.cz">
            <span className="wm-mark" aria-hidden="true">
              <i className="wm-c" />
              <i className="wm-m" />
              <i className="wm-y" />
              <i className="wm-k" />
            </span>
            <span className="wm-text">
              vytisknuti<em>.cz</em>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420725548378">
            +420 725 548 378
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span aria-hidden="true" className="reg-mark" />
            Grafické studio a tiskárna fotodárků · Ústí nad Labem
          </p>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Vaše fotka.</span>
            <span className="ht-line ht-2">
              Náš <span className="ht-cmyk" data-text="tisk.">tisk.</span>
            </span>
            <span className="ht-line ht-3">Dárek, který má duši.</span>
          </h1>

          <p className="hero-perex">
            Hrnky, trička, kalendáře a fotoobrazy z vašich fotografií tiskneme
            u nás v Ústí nad Labem — od jednoho kusu, obvykle do pár dnů.
            Grafiku upravíme, vytiskneme, zabalíme a pošleme kamkoli po ČR.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#nabidka">
              Vybrat dárek
            </a>
            <a className="btn btn-ghost" href="tel:+420725548378">
              Zavolat do studia
            </a>
          </div>
        </div>

        {/* Signature: barevný soutisk CMYK jako spodní hrana hero */}
        <div className="cmyk-bar" aria-hidden="true">
          <span className="cb cb-c">CYAN</span>
          <span className="cb cb-m">MAGENTA</span>
          <span className="cb cb-y">YELLOW</span>
          <span className="cb cb-k">KEY</span>
        </div>
      </header>

      {/* ============ SEKCE 1: NABÍDKA ============ */}
      <section className="sekce nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sekce-head">
          <p className="sekce-eyebrow">Co vytiskneme</p>
          <h2 id="nabidka-h" className="sekce-title">
            Čtyři barvy, čtyři cesty k dárku
          </h2>
          <p className="sekce-perex">
            Každý tisk u nás skládáme ze čtyř barev — cyan, magenta, žlutá a
            černá. Stejně přehledně máme rozdělenou i nabídku.
          </p>
        </div>

        <div className="karty">
          {produkty.map((p) => (
            <article className={`karta karta-${p.kod.toLowerCase()}`} key={p.kod}>
              <div className="karta-kod" aria-hidden="true">
                {p.kod}
              </div>
              <h3 className="karta-nazev">{p.nazev}</h3>
              <p className="karta-popis">{p.popis}</p>
              <p className="karta-detail">{p.detail}</p>
            </article>
          ))}
        </div>

        <p className="nabidka-pozn">
          Nevíte, co vybrat? Pošlete nám fotku na{" "}
          <a href="mailto:info@vytisknuti.cz">info@vytisknuti.cz</a> a poradíme,
          na čem bude vypadat nejlíp.
        </p>
      </section>

      {/* ============ SEKCE 2: DŮVĚRA ============ */}
      <section className="sekce duvera" aria-labelledby="duvera-h">
        <div className="sekce-head">
          <p className="sekce-eyebrow sekce-eyebrow-svetly">Proč Vytisknuti.cz</p>
          <h2 id="duvera-h" className="sekce-title sekce-title-svetly">
            Tiskneme v Ústí, doručujeme po celé ČR
          </h2>
        </div>

        <dl className="fakta">
          {fakta.map((f) => (
            <div className="fakt" key={f.cislo}>
              <dt className="fakt-cislo">{f.cislo}</dt>
              <dd className="fakt-popis">{f.popis}</dd>
            </div>
          ))}
        </dl>

        <div className="recenze" role="list">
          {recenze.map((r) => (
            <figure className="recenze-karta" role="listitem" key={r.autor}>
              <Hvezdy pocet={r.hvezdy} />
              <blockquote className="recenze-text">„{r.text}"</blockquote>
              <figcaption className="recenze-autor">
                {r.autor} <span className="recenze-zdroj">· {r.zdroj}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
