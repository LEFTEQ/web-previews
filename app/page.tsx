import { CyclingWord } from "./motion";

const SERVICES = [
  {
    title: "Překlady",
    body: "Odborné, soudně ověřené i expresní překlady ve více než 40 jazycích. Právo, technika, medicína i marketingové texty — vždy s péčí o terminologii.",
  },
  {
    title: "Tlumočení",
    body: "Konsekutivní i simultánní tlumočení na obchodní jednání, konference a k notáři. Tlumočníka doladíme přesně na obor vašeho jednání.",
  },
  {
    title: "Jazyková škola",
    body: "Kurzy na míru pro firmy i jednotlivce — od angličtiny a němčiny po ruštinu — přímo v Ústí nad Labem nebo online.",
  },
];

const OFFERS = [
  {
    label: "Do 30 minut",
    title: "Cenová nabídka na míru",
    body: "Pošlete zadání a nezávaznou nabídku máte na stole do půl hodiny. Bez čekání, bez oťukávání.",
  },
  {
    label: "Zdarma",
    title: "Zkušební překlad",
    body: "První zkušební překlad uděláme zdarma. Kvalitu si ověříte dřív, než se pro nás rozhodnete.",
  },
];

const STATS = [
  { n: "40+", l: "jazyků v nabídce" },
  { n: "15", l: "let na trhu" },
  { n: "30", l: "minut na nabídku" },
];

function Caron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path d="M8 30 L50 78 L92 30" fill="none" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Czech Express — překladatelská agentura">
          <Caron className="wordmark-caron" />
          <span className="wordmark-text">
            Czech<span className="wordmark-x">Express</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="band hero" aria-labelledby="hero-heading">
        <Caron className="hero-ghost" />
        <div className="inner hero-inner">
          <p className="eyebrow">Překladatelská agentura · Ústí nad Labem</p>
          <h1 id="hero-heading" className="hero-heading">
            Řekněte to
            <CyclingWord />
            ve více než 40 jazycích.
          </h1>
          <p className="hero-sub">
            Expresní překlady a tlumočení, které stíhají váš termín. Kvalitně,
            rychle a za jednu z nejvýhodnějších cen na trhu — s poctivým
            individuálním přístupem.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#kontakt">Nezávazná poptávka</a>
            <a className="btn btn-ghost" href="#sluzby">Nabídka do 30 minut</a>
          </div>
        </div>
      </section>

      <div className="marks" aria-hidden="true">
        <span>{"ˇ ´ ¨ ˜ ¸ ˆ °  ".repeat(24)}</span>
      </div>

      {/* SLUŽBY */}
      <section id="sluzby" className="band band-paper" aria-labelledby="sluzby-heading">
        <div className="inner">
          <div className="section-head reveal">
            <h2 id="sluzby-heading">Co pro vás přeložíme</h2>
            <p className="section-lead">
              Tři linky služeb, jeden termín — ten váš. Spěchá zadání? Právě
              proto jsme „Express“.
            </p>
          </div>

          <ul className="services">
            {SERVICES.map((s) => (
              <li key={s.title} className="service reveal">
                <Caron className="service-bullet" />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>

          <div className="offers">
            {OFFERS.map((o) => (
              <div key={o.title} className="offer reveal">
                <span className="offer-label">{o.label}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marks marks-dark" aria-hidden="true">
        <span>{"ˇ ´ ¨ ˜ ¸ ˆ °  ".repeat(24)}</span>
      </div>

      {/* DŮVĚRA */}
      <section id="duvera" className="band band-slate" aria-labelledby="duvera-heading">
        <div className="inner">
          <div className="section-head reveal">
            <p className="eyebrow eyebrow-light">Proč Czech Express</p>
            <h2 id="duvera-heading" className="heading-light">
              Jedna z nejlépe hodnocených agentur v ČR
            </h2>
          </div>

          <div className="stats reveal">
            {STATS.map((s) => (
              <div key={s.l} className="stat">
                <span className="stat-n">{s.n}</span>
                <span className="stat-l">{s.l}</span>
              </div>
            ))}
          </div>

          <figure className="quote reveal">
            <Caron className="quote-caron" />
            <blockquote>
              Naše texty jsou terminologicky velmi náročné, ale Czech Express
              jejich zpracování zvládá na jedničku.
            </blockquote>
            <figcaption>
              <strong>Antonín Tym</strong>, project manager
              <span>Geotermální elektrárna Litoměřice</span>
            </figcaption>
          </figure>

          <div id="kontakt" className="contact reveal">
            <h3>Napište si o lepší nabídku</h3>
            <p className="contact-lead">
              Nejste spokojeni s nabídkou svého dodavatele? Vyžádejte si tu naši —
              a zkušební překlad k tomu zdarma.
            </p>
            <dl className="contact-list">
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420777111222">+420 777 111 222</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@example.cz">info@example.cz</a></dd>
              </div>
              <div>
                <dt>Kancelář</dt>
                <dd>Ukázková 123, Ústí nad Labem</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá&nbsp;08:00–18:00</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
