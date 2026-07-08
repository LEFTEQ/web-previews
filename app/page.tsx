import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JUDr. Vladimír Krčma — advokátní kancelář, Hradec Králové",
  description:
    "Advokátní kancelář v Hradci Králové od roku 1992. Obchodní, občanské, pracovní, trestní i rodinné právo. Každý případ řešíme individuálně.",
  openGraph: {
    title: "JUDr. Vladimír Krčma — advokátní kancelář",
    description:
      "Právní servis v plném rozsahu — od konzultace po zastupování u soudu. Střelecká 437, Hradec Králové.",
    type: "website",
    locale: "cs_CZ",
  },
};

const obory = [
  {
    zn: "§ 420",
    nazev: "Obchodní právo",
    popis:
      "Zakládání a převody společností, smlouvy, spory z obchodních vztahů, vymáhání pohledávek.",
  },
  {
    zn: "§ 1011",
    nazev: "Občanské právo",
    popis:
      "Nemovitosti, závazky, náhrada škody, dědictví a sepis smluv na míru vaší situaci.",
  },
  {
    zn: "§ 34",
    nazev: "Pracovní právo",
    popis:
      "Ukončení pracovního poměru, nároky ze mzdy, spory zaměstnanců i zaměstnavatelů.",
  },
  {
    zn: "§ 12",
    nazev: "Trestní právo",
    popis:
      "Obhajoba v přípravném řízení i před soudem, zastoupení poškozených, opravné prostředky.",
  },
  {
    zn: "§ 655",
    nazev: "Rodinné právo",
    popis:
      "Rozvody, péče o děti, výživné a majetkové vypořádání s ohledem na klid v rodině.",
  },
  {
    zn: "§ 65",
    nazev: "Správní právo",
    popis:
      "Zastupování před úřady, správní žaloby a jednání se státní správou i samosprávou.",
  },
  {
    zn: "§ 99",
    nazev: "Soudní spory a rozhodčí řízení",
    popis:
      "Vedení sporu od žaloby po rozsudek, zastupování v rozhodčím i vykonávacím řízení.",
  },
];

const zpusob = [
  {
    krok: "01",
    nadpis: "Každý případ řešíme individuálně",
    text: "Žádné šablony. Nejdřív si vyslechneme celý příběh a teprve pak navrhneme postup.",
  },
  {
    krok: "02",
    nadpis: "Problémy řešíme komplexně",
    text: "Spolupracujeme s daňovými poradci, notáři, znalci, exekutory i tlumočníky — vše pod jednou střechou.",
  },
  {
    krok: "03",
    nadpis: "Pracovní doba je flexibilní",
    text: "Termín schůzky přizpůsobíme vám. V naléhavých věcech se ozveme co nejdříve.",
  },
];

export default function Page() {
  return (
    <main className="ak">
      <header className="ak-top">
        <a className="ak-brand" href="#" aria-label="JUDr. Vladimír Krčma, advokátní kancelář">
          <span className="ak-brand-mark" aria-hidden="true">VK</span>
          <span className="ak-brand-name">
            <span className="ak-brand-title">Krčma</span>
            <span className="ak-brand-sub">advokátní kancelář</span>
          </span>
        </a>
        <nav className="ak-nav" aria-label="Hlavní">
          <a href="#sluzby">Právní služby</a>
          <a href="#o-nas">O kanceláři</a>
        </nav>
        <a className="ak-call" href="tel:+420495533212">
          <span aria-hidden="true">☎</span> 495 533 212
        </a>
      </header>

      <section className="ak-hero" aria-labelledby="hero-title">
        <div className="ak-hero-media">
          <img
            src="/hero.webp"
            alt="Advokátní kancelář JUDr. Vladimíra Krčmy v Hradci Králové"
            className="ak-hero-img"
          />
        </div>
        <div className="ak-hero-body">
          <p className="ak-eyebrow">Střelecká 437 · Hradec Králové · od roku 1992</p>
          <h1 id="hero-title" className="ak-hero-title">
            Právní zastoupení,<br />
            za&nbsp;kterým stojí<br />
            <em>jméno</em>.
          </h1>
          <p className="ak-hero-lede">
            JUDr. Vladimír Krčma poskytuje právní servis v plném rozsahu — od
            první konzultace po zastupování před soudem. Věcně, srozumitelně a
            s ohledem na to, co je pro vás skutečně v sázce.
          </p>
          <div className="ak-hero-actions">
            <a className="ak-btn ak-btn-primary" href="tel:+420495533212">
              Objednat konzultaci
            </a>
            <a className="ak-btn ak-btn-ghost" href="#sluzby">
              Oblasti práva
            </a>
          </div>
          <dl className="ak-facts">
            <div>
              <dt>Praxe</dt>
              <dd>32 let</dd>
            </div>
            <div>
              <dt>Oblastí práva</dt>
              <dd>7</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Hradec Králové</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ak-services" id="sluzby" aria-labelledby="sluzby-title">
        <div className="ak-section-head">
          <p className="ak-eyebrow">Rejstřík oborů</p>
          <h2 id="sluzby-title">V čem vás zastoupíme</h2>
          <p className="ak-section-lede">
            Sedm oblastí, ve kterých vedeme klienty jednotlivce i firmy. Nevíte
            si rady, kam vaše věc patří? Zavolejte — zařadíme ji za vás.
          </p>
        </div>
        <ul className="ak-obory">
          {obory.map((o) => (
            <li key={o.nazev} className="ak-obor">
              <span className="ak-obor-zn" aria-hidden="true">{o.zn}</span>
              <h3 className="ak-obor-nazev">{o.nazev}</h3>
              <p className="ak-obor-popis">{o.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ak-about" id="o-nas" aria-labelledby="o-nas-title">
        <div className="ak-about-media">
          <img
            src="/section-1.webp"
            alt="Interiér advokátní kanceláře — pracovna JUDr. Vladimíra Krčmy"
            className="ak-about-img"
          />
        </div>
        <div className="ak-about-body">
          <p className="ak-eyebrow">O kanceláři</p>
          <h2 id="o-nas-title">Na trhu právních služeb od roku 1992</h2>
          <p>
            Působíme v Hradci Králové více než tři desetiletí. Poskytujeme
            právní servis v plném rozsahu — od počátečních konzultací po
            kompletní právní zastupování v souladu s konkrétními potřebami
            klienta.
          </p>
          <p>
            Samozřejmostí je spolupráce s daňovými poradci, auditory, znalci,
            notáři, exekutory, tlumočníky i insolvenčními správci. Je-li to
            potřeba, zajistíme součinnost se zahraničními advokáty.
          </p>

          <ol className="ak-zpusob">
            {zpusob.map((z) => (
              <li key={z.krok} className="ak-zpusob-item">
                <span className="ak-zpusob-krok" aria-hidden="true">{z.krok}</span>
                <div>
                  <h3>{z.nadpis}</h3>
                  <p>{z.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="ak-note">
            <img
              src="/section-2.webp"
              alt="Detail z advokátní kanceláře"
              className="ak-note-img"
            />
            <figcaption>
              Spotřebitelské spory mezi advokátem a klientem řeší mimosoudně
              Česká advokátní komora —{" "}
              <a href="https://www.cak.cz" rel="noopener noreferrer">
                www.cak.cz
              </a>
              .
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
