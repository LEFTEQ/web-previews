import React from "react";

const languages = [
  { code: "EN", name: "angličtina", hi: "Hello" },
  { code: "DE", name: "němčina", hi: "Hallo" },
  { code: "FR", name: "francouzština", hi: "Bonjour" },
  { code: "ES", name: "španělština", hi: "Hola" },
  { code: "IT", name: "italština", hi: "Ciao" },
  { code: "RU", name: "ruština", hi: "Privet" },
];

const nabidka = [
  {
    kdo: "Pro vás",
    titul: "Jazykové kurzy pro veřejnost",
    text: "Chcete se konečně domluvit na dovolené, zlepšit se v práci nebo se učit pro radost? Kurzy pro dospělé i mládež — individuální i skupinové, podle vašeho tempa a potřeb.",
    body: ["Individuálně i ve skupině", "Vlastní tempo a témata", "Prezenčně v Plzni i online"],
  },
  {
    kdo: "Pro firmy",
    titul: "Výuka jazyků pro firmy",
    text: "Rozvíjíme jazykové dovednosti zaměstnanců efektivně a s ohledem na váš obor. Výuku přizpůsobíme časovým možnostem týmu i profesnímu zaměření.",
    body: ["Na míru vašemu oboru", "Rodilí mluvčí", "Business i technická angličtina"],
  },
  {
    kdo: "Pro text",
    titul: "Překlady a tlumočení",
    text: "Odborný překlad nebo tlumočení? Překládáme pečlivě, s důrazem na kontext a terminologii — včetně obchodních, právních nebo technických textů.",
    body: ["Obchodní a právní texty", "Technická dokumentace", "Tlumočení na akcích"],
  },
];

const reference = [
  {
    kratce: "Syn má francouzštinu konečně rád.",
    text: "Perfektní! Syn je moc spokojený, strašně se zlepšil ve francouzštině ve škole a hned se mezi prvními přihlásil na školní výlet do Francie. Moc Vám děkuji.",
    jmeno: "Jaromíra Plicová",
    role: "praktická lékařka, PCare s.r.o.",
  },
  {
    kratce: "Témata jsme vybírali podle toho, co jsem zrovna potřebovala.",
    text: "Kurz angličtiny jsem měla jako pracovní benefit a byla jsem nadšená. Lektor je rodilý mluvčí, takže jsem si zvykla na přirozený jazyk. Probírali jsme pracovní e-maily, telefonování i běžnou konverzaci — přesně to, co jsem potřebovala.",
    jmeno: "Lýdia Cmojerová",
    role: "produktová specialistka, Outdoor Concept a.s.",
  },
  {
    kratce: "Za půl roku jsem se posunul o dvě úrovně.",
    text: "Připravoval jsem se na mezinárodní konferenci v Oslu, kde jsem měl mít prezentaci v angličtině. Výuka byla praktická, zaměřená na technickou a business angličtinu. Konferenci jsem zvládl s jistotou a bez stresu.",
    jmeno: "Michal Votruba",
    role: "specialista, ČEZ",
  },
  {
    kratce: "Lektorku mi vybrali podle úvodního rozhovoru.",
    text: "S Externem jsem absolvovala individuální kurz francouzštiny. Majitelka mi na základě úvodního rozhovoru vybrala lektorku Evu, která mi maximálně vyhovovala po profesní i lidské stránce. Doporučuji!",
    jmeno: "Jitka Chvalová",
    role: "Supply Chain Administrator, Loxonis",
  },
];

const duvody = [
  {
    n: "01",
    titul: "Jsme malí a efektivní",
    text: "Rychle reagujeme, jednáme přímo a bez zbytečných zdržení. S námi víte, na čem jste — a všechno běží hladce.",
  },
  {
    n: "02",
    titul: "Pečujeme o lektory",
    text: "Nasloucháme našim lektorům. Podpora, férové podmínky a lidský přístup jsou pro nás samozřejmostí.",
  },
  {
    n: "03",
    titul: "Všechno se dá zařídit",
    text: "Domluvíme výuku i překlady téměř v jakémkoli jazyce. Přizpůsobíme se a najdeme řešení i tam, kde jiní končí.",
  },
];

export default function Page() {
  return (
    <main className="ex">
      <header className="ex-top">
        <a className="ex-mark" href="#top" aria-label="Extern — jazyková škola">
          <span className="ex-mark-word">Extern</span>
          <span className="ex-mark-dot" aria-hidden="true" />
        </a>
        <nav className="ex-nav" aria-label="Hlavní">
          <a href="#nabidka">Kurzy</a>
          <a href="#nabidka">Překlady</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="ex-tel" href="tel:+420739676807">+420&nbsp;739&nbsp;676&nbsp;807</a>
      </header>

      <section className="ex-hero" id="top">
        <div className="ex-hero-grid">
          <div className="ex-hero-text">
            <p className="ex-eyebrow">Jazyková škola · Plzeň, učíme po celé ČR</p>
            <h1 className="ex-h1">
              <span className="ex-line">Naučíme vás</span>
              <span className="ex-line ex-line-em">mít jazyky rádi.</span>
            </h1>
            <p className="ex-lede">
              Učení jde líp, když vás to baví. Ať už se chcete učit,
              překládat nebo posunout celý tým — najdeme cestu, která
              sedne přesně vám.
            </p>
            <div className="ex-hero-cta">
              <a className="ex-btn ex-btn-primary" href="mailto:info@extern.cz">Napište nám</a>
              <a className="ex-btn ex-btn-ghost" href="#nabidka">Co nabízíme</a>
            </div>
            <ul className="ex-hellos" aria-label="Jazyky, které učíme">
              {languages.map((l) => (
                <li key={l.code}>
                  <span className="ex-hello">{l.hi}</span>
                  <span className="ex-hello-lang">{l.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="ex-hero-media">
            <img
              src="/hero.webp"
              alt="Výuka v jazykové škole Extern v Plzni"
              className="ex-hero-img"
              width={900}
              height={1100}
            />
            <figcaption className="ex-hero-badge">
              <span className="ex-hero-badge-k">Malá jazykovka</span>
              <span className="ex-hero-badge-v">velký přístup ke každému studentovi</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ex-nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="ex-sec-head">
          <p className="ex-eyebrow">Co pro vás uděláme</p>
          <h2 id="nabidka-h" className="ex-h2">
            Tři cesty, jak se s&nbsp;jazykem konečně sblížit
          </h2>
        </div>
        <div className="ex-cards">
          {nabidka.map((c) => (
            <article className="ex-card" key={c.titul}>
              <span className="ex-card-kdo">{c.kdo}</span>
              <h3 className="ex-card-titul">{c.titul}</h3>
              <p className="ex-card-text">{c.text}</p>
              <ul className="ex-card-list">
                {c.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <figure className="ex-band">
          <img
            src="/section-1.webp"
            alt="Lektor a student při individuální výuce jazyka"
            className="ex-band-img"
            width={1400}
            height={620}
          />
          <figcaption className="ex-band-cap">
            Individuální i skupinová výuka — prezenčně v Plzni i online po celé ČR.
          </figcaption>
        </figure>
      </section>

      <section className="ex-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="ex-duvera-grid">
          <div className="ex-duvera-intro">
            <p className="ex-eyebrow">Proč Extern</p>
            <h2 id="duvera-h" className="ex-h2">
              Jazykovka, na kterou se můžete spolehnout
            </h2>
            <figure className="ex-duvera-media">
              <img
                src="/section-2.webp"
                alt="Tým jazykové školy Extern"
                className="ex-duvera-img"
                width={800}
                height={600}
              />
            </figure>
          </div>
          <ol className="ex-reasons">
            {duvody.map((d) => (
              <li className="ex-reason" key={d.n}>
                <span className="ex-reason-n">{d.n}</span>
                <div>
                  <h3 className="ex-reason-titul">{d.titul}</h3>
                  <p className="ex-reason-text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="ex-refs">
          <h3 className="ex-refs-h">Co o nás říkají studenti</h3>
          <div className="ex-refs-grid">
            {reference.map((r) => (
              <blockquote className="ex-ref" key={r.jmeno}>
                <p className="ex-ref-kratce">{r.kratce}</p>
                <p className="ex-ref-text">{r.text}</p>
                <footer className="ex-ref-foot">
                  <span className="ex-ref-jmeno">{r.jmeno}</span>
                  <span className="ex-ref-role">{r.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
