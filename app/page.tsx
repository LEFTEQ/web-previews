import type { ReactNode } from "react";

type Step = { n: string; title: string; body: string };
type Card = { title: string; body: string };

const STEPS: Step[] = [
  {
    n: "01",
    title: "Vstupní vyšetření",
    body: "Prohlédneme dásně i zuby, změříme stav a společně určíme, na co se u vás zaměřit.",
  },
  {
    n: "02",
    title: "Odstranění kamene",
    body: "Ultrazvukem i ručně šetrně sundáme zubní kámen nad dásní i pod ní.",
  },
  {
    n: "03",
    title: "Air-flow pískování",
    body: "Jemný proud odstraní pigmentace od kávy, čaje i cigaret. Vrátíme zubům přirozený odstín.",
  },
  {
    n: "04",
    title: "Leštění a fluoridace",
    body: "Zuby doleštíme do hladka a posílíme sklovinu fluoridovým gelem.",
  },
  {
    n: "05",
    title: "Domácí péče",
    body: "Ukážeme vám techniku čištění, mezizubní kartáčky i pastu, která vám doma sedne.",
  },
];

const CARDS: Card[] = [
  {
    title: "Bez spěchu",
    body: "Na hygienu si vyhradíme dost času. Nic neuspěcháme a všechno vám v klidu vysvětlíme.",
  },
  {
    title: "Šetrně",
    body: "Moderní ultrazvuk a air-flow místo drhnutí. Ošetření zvládnou i citlivé zuby a dásně.",
  },
  {
    title: "Sedne vám termín",
    body: "Otevřeno Po–Pá od 7 do 21 hodin. Zavoláte, domluvíme se na čase, který vám vyhovuje.",
  },
];

function Arch(): ReactNode {
  return (
    <svg
      className="arch-svg"
      viewBox="0 0 600 340"
      role="img"
      aria-label="Obrys zubního oblouku"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id="enamelGloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7f8b90" />
          <stop offset="0.62" stopColor="#7f8b90" />
          <stop offset="1" stopColor="#cf8476" />
        </linearGradient>
      </defs>
      <path
        className="arch-path"
        pathLength={1}
        d="M78 24 C78 236 198 316 300 316 C402 316 522 236 522 24"
        fill="none"
        stroke="url(#enamelGloss)"
        strokeWidth={7}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="wordmark">
        <div className="inner hero-inner">
          <p className="eyebrow">Dentální hygiena · Olomouc</p>

          <div className="wordmark-arch">
            <Arch />
            <h1 id="wordmark" className="wordmark">
              <span>Centrum</span>
              <span>zubní medicíny</span>
            </h1>
          </div>

          <p className="statement">
            Zuby jako po vyleštění a dásně, které vám poděkují.
          </p>
          <p className="lead">
            Profesionální dentální hygiena v Olomouci. Odstraníme zubní kámen
            i povlak a ukážeme vám, jak si zdravý úsměv udržet doma — bez spěchu,
            v klidu a šetrně.
          </p>

          <div className="hero-meta">
            <a className="cta-ghost" href="tel:+420777111222">
              Objednat termín
            </a>
            <p className="hours-inline">
              <span>Po–Pá</span> 7:00–21:00
            </p>
          </div>
        </div>
      </section>

      <section className="band band--ink band--arch" aria-labelledby="visit-h">
        <div className="inner reveal">
          <header className="band-head">
            <p className="eyebrow eyebrow--light">Návštěva krok za krokem</p>
            <h2 id="visit-h" className="band-title">
              Jak probíhá vaše hygiena
            </h2>
            <p className="band-sub">
              Pět kroků jedné návštěvy. Většinu zvládneme za 45 až 60 minut —
              od prvního pohledu do úst po ošetřené a vyleštěné zuby.
            </p>
          </header>

          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.n} className="step">
                <span className="step-n">{s.n}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--pearl band--arch" aria-labelledby="trust-h">
        <div className="inner reveal">
          <header className="band-head">
            <p className="eyebrow">Proč právě k nám</p>
            <h2 id="trust-h" className="band-title band-title--dark">
              Klidná péče, na kterou se v Olomouci spoléhají
            </h2>
          </header>

          <div className="cards">
            {CARDS.map((c) => (
              <article key={c.title} className="card">
                <h3 className="card-title">{c.title}</h3>
                <p className="card-body">{c.body}</p>
              </article>
            ))}
          </div>

          <dl className="contact">
            <div className="contact-row">
              <dt>Kde nás najdete</dt>
              <dd>Ukázková 123, Olomouc</dd>
            </div>
            <div className="contact-row">
              <dt>Objednání</dt>
              <dd>
                <a href="tel:+420777111222">+420 777 111 222</a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:info@example.cz">info@example.cz</a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:00–21:00</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
