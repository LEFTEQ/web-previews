import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KOMP – revize elektro Brno | protokoly, které projdou u pojišťovny",
  description:
    "Revize elektroinstalace, spotřebičů, hromosvodů a rozvaděčů NN v Brně a okolí. Výchozí i pravidelné revize podle ČSN 33 1500 a 33 2000-6. Protokol do 5 dnů.",
  openGraph: {
    title: "KOMP – revize elektro Brno",
    description:
      "Výchozí i pravidelné revize elektro v Brně. Změříme, najdeme závady a vystavíme protokol, který obstojí u pojišťovny i revizního technika.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const kontroly = [
  {
    kod: "A",
    stav: "vyhovuje",
    nazev: "Výchozí revize",
    popis:
      "Nová instalace, přístavba nebo rekonstrukce. Ověříme, že rozvod je bezpečně provedený, než ho poprvé pustíte pod napětí.",
    detail: "ČSN 33 2000-6",
  },
  {
    kod: "B",
    stav: "lhůta",
    nazev: "Pravidelná revize",
    popis:
      "Byty, kanceláře, dílny i bytové domy. Hlídáme lhůty za vás a ozveme se, než revize propadne — ne až po havárii.",
    detail: "ČSN 33 1500",
  },
  {
    kod: "C",
    stav: "protokol",
    nazev: "Revize spotřebičů",
    popis:
      "Nářadí, prodlužovačky, PC, kávovary. Označíme každý kus štítkem s datem a vystavíme protokol pro BOZP i kontrolu.",
    detail: "ČSN 33 1600 ed. 2",
  },
  {
    kod: "D",
    stav: "vyhovuje",
    nazev: "Revize hromosvodů",
    popis:
      "Změříme zemní odpor, zkontrolujeme svody a jímací soustavu. U starších objektů posoudíme, zda vyhoví aktuální normě.",
    detail: "ČSN EN 62305",
  },
  {
    kod: "E",
    stav: "lhůta",
    nazev: "Rozvaděče NN",
    popis:
      "Termovizí najdeme přehřáté spoje dřív, než začnou hořet. Revize rozvaděčů nízkého napětí do 1000 V včetně dokumentace.",
    detail: "do 1000 V",
  },
  {
    kod: "F",
    stav: "protokol",
    nazev: "Podklad pro pojišťovnu",
    popis:
      "Potřebujete revizi kvůli pojistné události nebo kolaudaci? Vystavíme protokol ve formě, kterou úřad i pojišťovna uznají.",
    detail: "kolaudace",
  },
];

const postup = [
  {
    c: "01",
    t: "Zavoláte, řekneme termín",
    d: "Popíšete, co potřebujete zrevidovat. Domluvíme se na termínu obvykle do týdne, u havárií i dřív.",
  },
  {
    c: "02",
    t: "Přijedeme a změříme",
    d: "Přístroji ověříme izolační stavy, impedanci smyčky, proudové chrániče i zemní odpory. Nic neodhadujeme.",
  },
  {
    c: "03",
    t: "Dostanete protokol",
    d: "Do pěti pracovních dnů máte v ruce revizní zprávu s jasným závěrem: vyhovuje / nevyhovuje a proč.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="KOMP, spol. s r.o. – revize elektro Brno">
          <span className="wordmark__k">KOMP</span>
          <span className="wordmark__meta">revize&nbsp;elektro · Brno</span>
        </a>
        <a className="topbar__cta" href="tel:+420541000000">
          <span className="topbar__dot" aria-hidden="true" />
          Zavolat technikovi
        </a>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__num">§</span> Revizní technik elektro · Brno &amp; okolí
            </p>
            <h1 className="hero__title">
              Buď to <span className="stamp stamp--ok">vyhovuje</span>,
              <br />
              nebo vám přesně řekneme,
              <br />
              <span className="hero__title-em">co spravit.</span>
            </h1>
            <p className="hero__lead">
              Revize elektroinstalace, spotřebičů, hromosvodů a rozvaděčů do 1000&nbsp;V.
              Změříme, najdeme skryté závady a vystavíme protokol, který obstojí u pojišťovny
              i při kolaudaci — ne razítko naslepo.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420541000000">Objednat revizi</a>
              <a className="btn btn--ghost" href="#sluzby">Co revidujeme</a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Protokol do</dt>
                <dd>5 dní</dd>
              </div>
              <div>
                <dt>Napětí do</dt>
                <dd>1000 V</dd>
              </div>
              <div>
                <dt>Působíme od</dt>
                <dd>Soběšic</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Revizní technik KOMP měří elektroinstalaci v rozvaděči nízkého napětí"
              className="hero__img"
              width={720}
              height={900}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-line">měření izolačního stavu</span>
              <span className="hero__tag-val">&gt; 0,5 MΩ · vyhovuje</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__num">01</span> Revizní list</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Šest položek, které u nás projdou kontrolou
          </h2>
          <p className="section-sub">
            Každý bod je samostatný typ revize s vlastní normou. Vyberte, co máte doma,
            v dílně nebo v bytovém domě — a my přijedeme s přístroji, ne s odhadem.
          </p>
        </div>

        <ul className="cards">
          {kontroly.map((k) => (
            <li className="card" key={k.kod}>
              <div className="card__top">
                <span className="card__kod">{k.kod}</span>
                <span className={`chip chip--${k.stav}`}>
                  {k.stav === "vyhovuje"
                    ? "vyhovuje"
                    : k.stav === "lhůta"
                    ? "hlídáme lhůtu"
                    : "protokol"}
                </span>
              </div>
              <h3 className="card__title">{k.nazev}</h3>
              <p className="card__text">{k.popis}</p>
              <p className="card__norm">{k.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <figure className="duvera__media">
            <img
              src="/section-1.webp"
              alt="Rozvaděč nízkého napětí připravený k revizi firmou KOMP v Brně"
              width={640}
              height={720}
            />
          </figure>

          <div className="duvera__body">
            <p className="eyebrow"><span className="eyebrow__num">02</span> O firmě KOMP</p>
            <h2 id="duvera-nadpis" className="section-title">
              Elektrikáři z brněnských Soběšic, kteří po sobě umějí napsat protokol
            </h2>
            <p className="duvera__lead">
              KOMP, spol. s r.o. dělá silnoproudé i slaboproudé elektroinstalace do 1000&nbsp;V
              v Brně a okolí už řadu let. Revize u nás nedělá subdodavatel — píše je stejný
              člověk, který rozvaděč viděl zblízka. Proto rozumíme tomu, co měříme.
            </p>

            <ol className="steps">
              {postup.map((p) => (
                <li className="step" key={p.c}>
                  <span className="step__num">{p.c}</span>
                  <div>
                    <h3 className="step__title">{p.t}</h3>
                    <p className="step__text">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="duvera__note">
              <img
                src="/section-2.webp"
                alt="Detail elektroinstalačních prací týmu KOMP"
                className="duvera__thumb"
                width={220}
                height={160}
              />
              <blockquote className="quote">
                <p>
                  „Spolupracujeme mimo jiné s brněnským developerem Endeka&nbsp;s.r.o. na revizích
                  elektro v nových bytových projektech — od výchozí revize po předání bytu.“
                </p>
                <cite>— tým KOMP, Brno-Soběšice</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
