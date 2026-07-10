import type { CSSProperties } from "react";

const nights = [
  {
    day: "ÚT",
    title: "Karaoke Takeover",
    time: "21:00 – 00:00",
    text: "Dva mikrofony, žádnej stres. Vezmi kamarády, vyber si song a ukaž, co v tobě je. Na baru se zpívá, atmosféra graduje a noc jede podle tebe.",
  },
  {
    day: "PÁ",
    title: "Neon 2000s Mash-Up",
    time: "od 20:00",
    text: "Beyoncé, Rihanna, Usher, Destiny’s Child a hity, co patřily k večerům ještě dávno před obrazovkami. Přijď si připomenout dobu, kdy se žilo přítomností.",
  },
  {
    day: "SO",
    title: "Cosmic Saturday",
    time: "od 20:00",
    text: "Sobota má jiný tempo. Signature koktejl v ruce, R&B ve vzduchu — pro ty, co ještě nespí a už neřeší.",
  },
  {
    day: "NE",
    title: "Industry Night",
    time: "od 20:00",
    text: "F&B komunita má večer levněji, vibe zdarma. Neděle je nový pátek pro ty, co makali, když ostatní pařili.",
  },
];

const deals = [
  {
    label: "NE–ČT · 19:00–20:00",
    title: "Hoď si kostkou",
    text: "Padne ti správné číslo a máš 50 % na celý účet. Nevyjde to? Zkus štěstí zítra.",
  },
  {
    label: "Každý čtvrtek",
    title: "Studentské čtvrtky",
    text: "Student s ISICem má 30 % slevu na vybrané drinky. Stačí kartu ukázat u baru.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Lavish Lounge — domů">
          <span className="wordmark-lav">Lavish</span>
          <span className="wordmark-lounge">Lounge</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#program">Program</a>
          <a href="#akce">Akce</a>
          <a href="#bar">Bar</a>
          <a className="topnav-cta" href="tel:+420730616616">Rezervovat</a>
        </nav>
      </header>

      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Interiér koktejlového a karaoke baru Lavish Lounge v záři neonů"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Koktejlový &amp; karaoke bar · Praha, Vinohrady</p>
          <h1 className="hero-title">
            <span className="neon">Noc ožívá</span>
            <span className="neon neon-2">v záři neonů.</span>
          </h1>
          <p className="hero-lead">
            Stylové koktejly, hudba, co tě dostane do nálady, a atmosféra, která
            tě nenechá sedět v koutě. Bar, kde se potkává energie, smích a chuť
            užít si večer naplno.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420730616616">Rezervovat stůl</a>
            <a className="btn btn-ghost" href="#program">Co se dneska děje</a>
          </div>
          <dl className="hero-hours">
            <div>
              <dt>St–Čt &amp; Ne</dt>
              <dd>20:00 – 03:00</dd>
            </div>
            <div>
              <dt>Pá &amp; So</dt>
              <dd>20:00 – 05:00</dd>
            </div>
            <div>
              <dt>Po &amp; Út</dt>
              <dd>Zavřeno</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="program" id="program" aria-labelledby="program-h">
        <div className="section-head">
          <p className="eyebrow">Týden pod neonem</p>
          <h2 id="program-h">Každý večer jinou frekvenci</h2>
          <p className="section-sub">
            Otevřeno od středy do neděle. Vyber si noc podle nálady — mikrofon,
            taneček nebo klidnější R&amp;B u baru.
          </p>
        </div>
        <ol className="nights">
          {nights.map((n) => (
            <li className="night" key={n.title}>
              <span className="night-day" aria-hidden="true">{n.day}</span>
              <div className="night-body">
                <div className="night-topline">
                  <h3>{n.title}</h3>
                  <span className="night-time">{n.time}</span>
                </div>
                <p>{n.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="akce" id="akce" aria-labelledby="akce-h">
        <div className="akce-grid">
          <div className="akce-copy">
            <p className="eyebrow eyebrow-dark">Speciální nabídky</p>
            <h2 id="akce-h">Levnější večer se dá pořídit — chce to jen štěstí nebo ISIC</h2>
            <div className="deals">
              {deals.map((d) => (
                <article className="deal" key={d.title}>
                  <p className="deal-label">{d.label}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </article>
              ))}
            </div>
            <a className="btn btn-primary" href="tel:+420730616616">Rezervovat stůl</a>
          </div>
          <figure className="akce-figure">
            <img
              src="/section-1.webp"
              alt="Barman připravuje signature koktejl v Lavish Lounge"
            />
          </figure>
        </div>
      </section>

      <section className="bar" id="bar" aria-labelledby="bar-h">
        <figure className="bar-figure">
          <img
            src="/section-2.webp"
            alt="Barevný interiér Lavish Lounge s designovými prvky a fotokoutkem"
          />
        </figure>
        <div className="bar-copy">
          <p className="eyebrow">O baru</p>
          <h2 id="bar-h">Veselý a hravý, a přitom pořád elegantní</h2>
          <p className="bar-text">
            Lavish Lounge je koktejlový bar v samém srdci Prahy — na Vinohradech.
            V prostorech baru jsme si pohráli s barvami i světlem a vytvořili
            unikátní prostředí plné zajímavých designových prvků. Těšit se můžeš
            na skvělé drinky i na fotokoutek.
          </p>
          <ul className="bar-facts">
            <li>
              <span className="fact-key">Kde nás najdeš</span>
              <span className="fact-val">Anglická 42/7, Praha 2 — Vinohrady</span>
            </li>
            <li>
              <span className="fact-key">Rezervace (19:00–02:00)</span>
              <span className="fact-val">
                <a href="tel:+420730616616">+420 730 616 616</a>
              </span>
            </li>
            <li>
              <span className="fact-key">Večírky &amp; velké akce</span>
              <span className="fact-val">
                <a href="tel:+420777719905">+420 777 719 905</a>
              </span>
            </li>
            <li>
              <span className="fact-key">Napiš nám</span>
              <span className="fact-val">
                <a href="mailto:info@lavish-lounge.cz">info@lavish-lounge.cz</a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
