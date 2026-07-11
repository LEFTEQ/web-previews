import type { ReactNode } from "react";

const dilna = [
  {
    kod: "PL",
    nazev: "Ploty, brány a branky",
    popis:
      "Kompletní oplocení na míru vašeho pozemku. Rám svaříme, povrch pozinkujeme a dovezeme připravené k montáži — bez obvolávání řemeslníků a čekání na termín.",
    detail: "Sloupky · křídlové i posuvné brány · branky s klikou",
  },
  {
    kod: "ST",
    nazev: "Stavební prvky z oceli",
    popis:
      "Ocelové poklopy, kotevní patky, rohožky a další drobnou stavební výrobu držíme skladem. Standardní rozměry odesíláme hned, atypy zaměříme a vyrobíme.",
    detail: "Poklopy 600×600 · patky · pozinkované rohožky",
  },
  {
    kod: "GR",
    nazev: "Ohniště, rošty a grily",
    popis:
      "Přenosná ohniště o průměru 70 cm, polohovací grilovací rošty a zahradní grily s příslušenstvím. Vše z poctivého plechu, který přežije i pár zim venku.",
    detail: "Ohniště Ø 70 cm · rošty Ø 50 cm · příslušenství",
  },
  {
    kod: "ZA",
    nazev: "Kovové prvky do zahrady",
    popis:
      "Krmítka pro sýkorky, květináče i vysoké záhony. Věci, které na zahradě vydrží a nezrezaví hned první sezónu.",
    detail: "Krmítka · květináče · vyvýšené záhony",
  },
];

const duvody: { cislo: string; titulek: string; text: string }[] = [
  {
    cislo: "01",
    titulek: "Vyrábíme ve vlastní dílně",
    text: "Žádný přeprodej. Každý svár, ohyb i nátěr vzniká u nás v Liberci — víme přesně, co si od nás odvezete.",
  },
  {
    cislo: "02",
    titulek: "Skladem, ne \u201edo tří týdnů\u201c",
    text: "Standardní výrobky máme na skladě a odesíláme obratem. U zakázky vám řekneme pevný termín — a držíme ho.",
  },
  {
    cislo: "03",
    titulek: "Atyp? Ozvěte se",
    text: "Nesedí rozměr nebo potřebujete úpravu? Zaměříme, poradíme a vyrobíme přesně na váš pozemek.",
  },
];

const reference: { text: string; datum: string }[] = [
  { text: "Výborné řemeslné zpracování, přesně podle domluvy.", datum: "17. 6." },
  { text: "Reaguje velmi rychle. Spolehlivá komunikace, jen doporučuji.", datum: "9. 6." },
  { text: "Snadný výběr na přehledném e-shopu, kvalitní kus.", datum: "20. 5." },
  { text: "Rychle zabaleno, odesláno a doručeno. Značka ideál.", datum: "3. 6." },
];

export default function Page(): ReactNode {
  return (
    <main className="pl">
      <header className="pl-top">
        <a className="pl-mark" href="#top" aria-label="Zámečnictví Pluhař, úvod">
          <span className="pl-mark-glyph" aria-hidden="true">P</span>
          <span className="pl-mark-name">
            <span className="pl-mark-line1">ZÁMEČNICTVÍ</span>
            <span className="pl-mark-line2">Pluhař</span>
          </span>
        </a>
        <div className="pl-top-meta">
          <span className="pl-since">Liberec · od r. 1996</span>
          <a className="pl-tel" href="tel:+420483316641">483 316 641</a>
        </div>
      </header>

      <section className="pl-hero" id="top">
        <div className="pl-hero-media">
          <img
            src="/hero.webp"
            alt="Rozžhavená ocel a jiskry v dílně zámečnictví Pluhař"
            className="pl-hero-img"
            loading="eager"
            decoding="async"
          />
          <span className="pl-hero-shade" aria-hidden="true" />
        </div>
        <div className="pl-hero-body">
          <p className="pl-eyebrow">Zakázková kovovýroba a zámečnictví · Liberec</p>
          <h1 className="pl-h1">
            Ocel, co<br />
            <span className="pl-h1-accent">přežije</span> vaši<br />
            zahradu.
          </h1>
          <p className="pl-lede">
            Brány, ploty, ohniště i stavební prvky svaříme ve vlastní dílně a pošleme
            připravené k montáži. Bez shánění řemeslníka a bez čekání na termín.
          </p>
          <div className="pl-hero-cta">
            <a className="pl-btn" href="#nabidka">Co vyrábíme</a>
            <a className="pl-btn pl-btn-ghost" href="tel:+420483316641">
              Zavolat do dílny
            </a>
          </div>
        </div>
        <ul className="pl-hero-facts" aria-label="Fakta o dílně">
          <li><strong>1996</strong><span>rok, kdy jsme začali</span></li>
          <li><strong>Skladem</strong><span>standardní výrobky</span></li>
          <li><strong>Vlastní dílna</strong><span>svařujeme v Liberci</span></li>
        </ul>
      </section>

      <section className="pl-section" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="pl-section-head">
          <p className="pl-eyebrow pl-eyebrow-dark">Z naší dílny</p>
          <h2 className="pl-h2" id="nabidka-nadpis">
            Čtyři věci, které umíme z plechu i profilu
          </h2>
          <p className="pl-section-lede">
            Od ploty přes stavební ocel po zahradní drobnosti. Standard odesíláme hned,
            atypy zaměříme a uděláme přesně na míru.
          </p>
        </div>
        <ol className="pl-grid">
          {dilna.map((s) => (
            <li className="pl-card" key={s.kod}>
              <span className="pl-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="pl-card-nazev">{s.nazev}</h3>
              <p className="pl-card-popis">{s.popis}</p>
              <p className="pl-card-detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pl-trust" aria-labelledby="trust-nadpis">
        <div className="pl-trust-media">
          <img
            src="/section-1.webp"
            alt="Detail svařovaného ocelového plotu a brány"
            className="pl-trust-img"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pl-trust-body">
          <p className="pl-eyebrow pl-eyebrow-dark">Proč zrovna my</p>
          <h2 className="pl-h2" id="trust-nadpis">Řemeslo od roku 1996</h2>
          <p className="pl-section-lede">
            Poctivé provedení, pevná cena a dodržený termín. Tři věci, které od
            zámečníka čekáte — a u nás je dostanete.
          </p>
          <ol className="pl-duvody">
            {duvody.map((d) => (
              <li className="pl-duvod" key={d.cislo}>
                <span className="pl-duvod-cislo" aria-hidden="true">{d.cislo}</span>
                <div>
                  <h3 className="pl-duvod-titulek">{d.titulek}</h3>
                  <p className="pl-duvod-text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pl-refs">
            <img
              src="/section-2.webp"
              alt="Hotové kovové výrobky připravené k odeslání zákazníkům"
              className="pl-refs-img"
              loading="lazy"
              decoding="async"
            />
            <div className="pl-refs-body">
              <p className="pl-refs-score">
                <strong>100&nbsp;%</strong> spokojených
                <br />ověřených zákazníků
              </p>
              <ul className="pl-refs-list">
                {reference.map((r, i) => (
                  <li key={i}>
                    <span className="pl-refs-quote">{r.text}</span>
                    <span className="pl-refs-date">Ověřený zákazník · {r.datum}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
