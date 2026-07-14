import type { CSSProperties } from "react";

type Tone = "open" | "limited" | "full";

const care: { name: string; status: string; tone: Tone }[] = [
  { name: "Psychosomatická péče", status: "Dostupná podle druhu problému", tone: "open" },
  { name: "Rodinná a párová péče", status: "Dostupná", tone: "open" },
  { name: "Fyzioterapie", status: "Volno zpravidla do měsíce", tone: "open" },
  { name: "Homeopatická konzultace", status: "Dostupná", tone: "open" },
  { name: "Shiatsu masáž", status: "Dostupná", tone: "open" },
  { name: "Zdravotní skupinové cvičení", status: "Běží, další zájemce evidujeme", tone: "limited" },
  { name: "Sexuologická péče", status: "Omezeně dostupná", tone: "limited" },
  { name: "Akupunktura", status: "Pohybový aparát a doplněk homeopatie", tone: "limited" },
  { name: "Psychiatrická péče", status: "Kapacita naplněná", tone: "full" },
  { name: "Klinická psychologická péče", status: "Kapacita naplněná", tone: "full" },
  { name: "Skupinová terapie", status: "Kapacita naplněná", tone: "full" }
];

const toneLabel: Record<Tone, string> = {
  open: "Přijímáme",
  limited: "Omezeně",
  full: "Plno"
};

const facts = [
  { k: "Ordinujeme od", v: "roku 1989" },
  { k: "Status", v: "Akreditované pracoviště" },
  { k: "Pojišťovny", v: "Smluvní partner všech" },
  { k: "Objednání", v: "Po osobním kontaktu" }
];

const thread =
  "M0,20 C100,2 200,38 300,20 S500,2 600,20 S800,38 900,20 S1100,2 1200,20";

function delay(n: number): CSSProperties {
  return { animationDelay: `${n}ms` } as CSSProperties;
}

export default function Page() {
  return (
    <main className="skt">
      <header className="skt-top">
        <a className="skt-brand" href="#uvod">
          <span className="skt-mark">SKT</span>
          <span className="skt-brand-full">
            Středisko komplexní terapie
            <br />
            psychosomatických poruch · Liberec
          </span>
        </a>
        <a className="skt-phone" href="tel:+420485151398">
          <span className="skt-phone-label">Objednání</span>
          485&nbsp;151&nbsp;398
        </a>
      </header>

      <section className="skt-hero" id="uvod" aria-labelledby="hero-nadpis">
        <div className="skt-hero-text">
          <p className="skt-eyebrow skt-reveal" style={delay(60)}>
            Nestátní zdravotnické pracoviště · Liberec · od 1989
          </p>
          <h1 className="skt-h1" id="hero-nadpis">
            <span className="skt-reveal" style={delay(140)}>Tělo a </span>
            <span className="skt-word skt-reveal" style={delay(220)}>
              mysl
              <svg
                className="skt-underthread"
                viewBox="0 0 220 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="skt-underthread-path"
                  d="M4,14 C40,2 70,22 110,12 S180,2 216,14"
                />
              </svg>
            </span>
            <span className="skt-reveal" style={delay(300)}>
              <br />
              léčíme společně.
            </span>
          </h1>
          <p className="skt-lede skt-reveal" style={delay(420)}>
            Ambulantní léčba psychosomatických poruch, kde spolu u jednoho
            člověka pracují lékaři, kliničtí psychologové a fyzioterapeuti.
            Hledáme souvislost mezi tím, co nese tělo, a tím, co unese mysl.
          </p>
          <div className="skt-hero-meta skt-reveal" style={delay(520)}>
            <a className="skt-btn" href="tel:+420485151398">Zavolat a objednat se</a>
            <span className="skt-hero-note">
              Pacienty objednáváme po osobním kontaktu na domluvený čas —
              nejsme krizové centrum.
            </span>
          </div>
        </div>

        <figure className="skt-hero-media skt-reveal" style={delay(360)}>
          <img
            src="/hero.webp"
            alt="Ordinace Střediska komplexní terapie psychosomatických poruch v Liberci"
            className="skt-hero-img"
            width={880}
            height={1000}
          />
        </figure>
      </section>

      <ul className="skt-trust skt-reveal" style={delay(600)} aria-label="Základní údaje o pracovišti">
        {facts.map((f) => (
          <li key={f.k} className="skt-trust-item">
            <span className="skt-trust-k">{f.k}</span>
            <span className="skt-trust-v">{f.v}</span>
          </li>
        ))}
      </ul>

      <div className="skt-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path className="skt-thread-path" d={thread} />
        </svg>
      </div>

      <section className="skt-sec" id="pece" aria-labelledby="pece-nadpis">
        <div className="skt-sec-head">
          <p className="skt-kicker">Co u nás najdete</p>
          <h2 className="skt-h2" id="pece-nadpis">
            Jedno pracoviště, více pohledů na jeden příznak
          </h2>
          <p className="skt-sec-lede">
            Uvádíme upřímně, kam právě teď bereme nové klienty. Přechodná
            nedostupnost platí jen pro nové pacienty — o ty, kteří už jsou
            v léčbě, se staráme dál. Nové přijímáme podle toho, jak se uvolní
            kapacita.
          </p>
        </div>

        <div className="skt-sec-grid">
          <ul className="skt-care" aria-label="Nabídka péče a aktuální dostupnost">
            {care.map((c) => (
              <li key={c.name} className="skt-care-row">
                <span className="skt-care-name">{c.name}</span>
                <span className="skt-care-status">{c.status}</span>
                <span className={`skt-tag skt-tag-${c.tone}`}>
                  <span className="skt-dot" aria-hidden="true" />
                  {toneLabel[c.tone]}
                </span>
              </li>
            ))}
          </ul>

          <figure className="skt-sec-media">
            <img
              src="/section-1.webp"
              alt="Terapeutická práce ve Středisku komplexní terapie v Liberci"
              width={720}
              height={860}
            />
            <figcaption className="skt-sec-cap">
              Léčíme člověka, ne jen jeho příznak.
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="skt-divider" aria-hidden="true">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path className="skt-thread-path" d={thread} />
        </svg>
      </div>

      <section className="skt-sec skt-about" id="kdo-jsme" aria-labelledby="about-nadpis">
        <div className="skt-about-grid">
          <figure className="skt-sec-media skt-about-media">
            <img
              src="/section-2.webp"
              alt="Sídlo Střediska komplexní terapie v Liberci, Jáchymovská ulice"
              width={720}
              height={860}
            />
          </figure>

          <div className="skt-about-text">
            <p className="skt-kicker">Kdo jsme</p>
            <h2 className="skt-h2" id="about-nadpis">
              Psychosomatické medicíně se v Liberci věnujeme od roku 1989
            </h2>
            <p className="skt-sec-lede">
              Jsme akreditované pracoviště pro výuku psychosomatické medicíny
              a smluvní partner všech zdravotních pojišťoven. V naší budově
              sídlí instituty, které obor u nás spoluvytvářejí:
            </p>
            <ul className="skt-institutes">
              <li>
                <strong>LIRTAPS</strong> — Institut rodinné terapie a
                psychosomatické medicíny, o.p.s.
              </li>
              <li>
                <strong>LIPPP</strong> — Liberecký institut pro psychoterapii
                a psychosomatiku, o.p.s.
              </li>
              <li>
                <strong>IRDPP</strong> — Institut rozvoje dovedností
                v pomáhajících profesích, s.r.o.
              </li>
            </ul>

            <div className="skt-info">
              <div className="skt-info-block">
                <h3 className="skt-info-h">Kde nás najdete</h3>
                <p>
                  Jáchymovská 385/25
                  <br />
                  Liberec 10 — Františkov
                </p>
              </div>
              <div className="skt-info-block">
                <h3 className="skt-info-h">Ordinační doba</h3>
                <p>
                  Po–čt&nbsp;&nbsp;8:00–12:00 · 13:00–17:00
                  <br />
                  Pátek&nbsp;&nbsp;&nbsp;8:00–12:00 · 13:00–15:00
                </p>
              </div>
              <div className="skt-info-block">
                <h3 className="skt-info-h">Recepce</h3>
                <p>
                  Po–čt&nbsp;&nbsp;7:45–12:00 · 13:00–15:00
                  <br />
                  Pátek&nbsp;&nbsp;&nbsp;7:45–12:00
                </p>
              </div>
              <div className="skt-info-block">
                <h3 className="skt-info-h">Spojení</h3>
                <p>
                  <a href="tel:+420485151398">485 151 398</a>,{" "}
                  <a href="tel:+420485152793">485 152 793</a>
                  <br />
                  SMS <a href="sms:+420731722000">731 722 000</a>
                  <br />
                  <a href="mailto:finkousova@sktlib.cz">finkousova@sktlib.cz</a>
                </p>
              </div>
            </div>

            <aside className="skt-notice" aria-label="Důležité upozornění">
              <span className="skt-notice-tag">Potřebujete pomoc hned?</span>
              <p>
                Nejsme krizové centrum. V naléhavé situaci volejte Linku důvěry
                <a href="tel:+420485177177"> 485&nbsp;177&nbsp;177</a>, seniorskou
                <a href="tel:+420800200007"> 800&nbsp;200&nbsp;007</a> nebo
                dětskou <a href="tel:+420800155555">800&nbsp;155&nbsp;555</a>.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
