import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PVJ GROUP — výsadba a údržba zeleně v Praze",
  description:
    "Zakládáme trávníky, sázíme stromy a keře, řežeme živé ploty a kácíme z vysokozdvižné plošiny. Zimní pohotovost a úklid sněhu pro firmy, domácnosti i SVJ v Praze a okolí. Přes 8 000 dokončených zakázek.",
  openGraph: {
    title: "PVJ GROUP — výsadba a údržba zeleně v Praze",
    description:
      "Výsadba a údržba zeleně, rizikové kácení z plošiny a zimní úklid sněhu v Praze. Moderní technika, zkušený tým, přes 8 000 zakázek.",
    type: "website",
    locale: "cs_CZ",
  },
};

const services = [
  {
    id: "01",
    season: "Jaro / léto",
    title: "Výsadba zeleně",
    body: "Zakládáme nové trávníky, sázíme stromy i keře, tvoříme záhony a revitalizujeme zeleň okolo bytových a rodinných domů. Od návrhu po zálivku prvních týdnů.",
    items: ["Založení a obnova trávníku", "Výsadba stromů a keřů", "Zakládání záhonů", "Revitalizace okolí domu"],
  },
  {
    id: "02",
    season: "Celoročně",
    title: "Údržba zeleně",
    body: "Řežeme živé ploty, prořezáváme a kácíme stromy z vysokozdvižné plošiny, čistíme zarostlé pozemky, sekáme trávu a odvážíme listí i bioodpad do kompostárny.",
    items: ["Řez a tvarování živého plotu", "Prořez a rizikové kácení z plošiny", "Čištění zarostlých pozemků", "Sekání trávy a úklid listí"],
  },
  {
    id: "03",
    season: "Zima",
    title: "Úklid sněhu",
    body: "Držíme sněhovou pohotovost pro areály, parkoviště, komunikace a chodníky. Aplikujeme posypové materiály a starosti s mrazem přebíráme za vás.",
    items: ["Sněhová pohotovost 24/7", "Úklid komunikací a parkovišť", "Chodníky a vstupy do domů", "Posyp a prevence náledí"],
  },
];

const work = [
  {
    date: "30. 6. 2025",
    place: "Praha — Kobylisy",
    text: "Vyčistili jsme zarostlý pozemek — vysokou trávu, náletové dřeviny, břečťan i ostružiny jsme vysekali a odvezli do kompostárny.",
  },
  {
    date: "6. 2. 2024",
    place: "Jižní Město",
    text: "Pro SVJ jsme z vysokozdvižné plošiny pokáceli borovice rostoucí příliš blízko fasády. Naváže náhradní výsadba stromů.",
  },
  {
    date: "5. 6. 2023",
    place: "Praha — Chodov",
    text: "Dokončili jsme revitalizaci zeleně pro společenství vlastníků bytového domu na sídlišti.",
  },
  {
    date: "7. 5. 2022",
    place: "Jižní Město",
    text: "Vysadili jsme nové sakury Prunus serrulata Amanogawa — další etapa výsadby pro bytová družstva.",
  },
];

export default function Page() {
  return (
    <main className="pvj">
      <header className="pvj-top">
        <a className="pvj-mark" href="#" aria-label="PVJ GROUP — domů">
          <span className="pvj-mark__leaf" aria-hidden="true" />
          <span className="pvj-mark__word">PVJ<em>GROUP</em></span>
        </a>
        <nav className="pvj-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="pvj-nav__call" href="tel:+420724006275">+420 724 006 275</a>
        </nav>
      </header>

      <section className="pvj-hero" aria-labelledby="hero-h">
        <div className="pvj-hero__grid" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ ["--i" as string]: i }} />
          ))}
        </div>
        <p className="pvj-hero__eyebrow">Výsadba a údržba zeleně · Praha a okolí</p>
        <h1 id="hero-h" className="pvj-hero__title">
          <span className="line line--1">Děláme</span>
          <span className="line line--2">Prahu</span>
          <span className="line line--3">
            <span className="pvj-hero__accent">krásnější.</span>
          </span>
        </h1>
        <p className="pvj-hero__lede">
          Od jarní výsadby po zimní pohotovost. Zakládáme zeleň, řežeme a kácíme z plošiny
          a hlídáme sníh — pro firmy, domácnosti i SVJ. Know-how vybroušené více než
          <strong> osmi tisíci</strong> dokončenými zakázkami.
        </p>
        <div className="pvj-hero__meta">
          <a className="pvj-btn" href="tel:+420724006275">Zavolat do infolinky</a>
          <ul className="pvj-hero__stats">
            <li><b>8 000+</b><span>zakázek</span></li>
            <li><b>3</b><span>sezóny služeb</span></li>
            <li><b>Praha 4</b><span>Zelený pruh</span></li>
          </ul>
        </div>
      </section>

      <section id="sluzby" className="pvj-services" aria-labelledby="sluzby-h">
        <div className="pvj-services__head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p>Tři služby, které kopírují běh roku — od prvního pupenu po první sníh.</p>
        </div>
        <ol className="pvj-cards">
          {services.map((s) => (
            <li key={s.id} className="pvj-card">
              <div className="pvj-card__top">
                <span className="pvj-card__num">{s.id}</span>
                <span className="pvj-card__season">{s.season}</span>
              </div>
              <h3>{s.title}</h3>
              <p className="pvj-card__body">{s.body}</p>
              <ul className="pvj-card__items">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="reference" className="pvj-trust" aria-labelledby="reference-h">
        <div className="pvj-trust__intro">
          <p className="pvj-trust__eyebrow">O nás</p>
          <h2 id="reference-h">Moderní technický park a lidé, kteří s ním umí</h2>
          <p className="pvj-trust__lead">
            Sídlíme v Zeleném pruhu na Praze 4 a pracujeme po celém městě i v okolí.
            K rizikovému kácení máme vlastní vysokozdvižnou hydraulickou plošinu, k výsadbě
            zkušený tým a k zimě sněhovou pohotovost. Jsme pojištění a bioodpad vozíme
            do kompostárny.
          </p>
          <a className="pvj-btn pvj-btn--ghost" href="mailto:info@pvj-group.cz">Napsat na info@pvj-group.cz</a>
        </div>
        <div className="pvj-trust__media">
          <img src="/section-1.webp" alt="Rizikové kácení stromu z vysokozdvižné plošiny v pražském sídlišti" loading="lazy" />
          <img src="/section-2.webp" alt="Čerstvě revitalizovaný trávník a nová výsadba u bytového domu v Praze" loading="lazy" />
        </div>
        <ol className="pvj-log" aria-label="Vybrané dokončené zakázky">
          {work.map((w) => (
            <li key={w.date} className="pvj-log__row">
              <span className="pvj-log__date">{w.date}</span>
              <span className="pvj-log__place">{w.place}</span>
              <span className="pvj-log__text">{w.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
