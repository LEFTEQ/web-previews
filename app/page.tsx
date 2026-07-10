import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Přijedeme a proměříme",
      d: "Zdarma a nezávazně. Termosnímkem najdeme, kudy dům uniká teplo, a spočítáme tloušťku pěny na míru vaší střechy nebo podlahy.",
    },
    {
      c: "02",
      t: "Zakryjeme, nastříkáme",
      d: "Pečlivě zamaskujeme okna, krokve i podlahu. Německá pěna HONTER se během vteřin rozepne a vyplní každou spáru mezi krokvemi.",
    },
    {
      c: "03",
      t: "Uklidíme a jdeme domů",
      d: "Bezespárá izolační vrstva je hotová a suchá. Většinu střech zvládneme za jediný den, po nás zůstane jen teplé podkroví.",
    },
  ];

  const cisla = [
    { n: "33 120", j: "m²", p: "nastříkané izolace pod krovy Budějovicka i celého kraje" },
    { n: "6 hod", j: "", p: "průměrný čas montáže — běžnou střechu zateplíme za den" },
    { n: "6 let", j: "záruka", p: "na provedenou izolaci, německá pěna HONTER drží desítky let" },
  ];

  return (
    <main className="pena">
      <header className="pena-nav" aria-label="Hlavní">
        <a className="pena-mark" href="#top" aria-label="CZ pěna — domů">
          <span className="pena-mark-cz">CZ</span>
          <span className="pena-mark-word">pěna</span>
        </a>
        <nav className="pena-links">
          <a href="#jak">Jak to probíhá</a>
          <a href="#duvera">Reference</a>
          <a className="pena-tel" href="tel:+420603288181">603 288 181</a>
        </nav>
      </header>

      <section className="pena-hero" id="top">
        <div className="pena-hero-copy">
          <p className="pena-eyebrow">Stříkaná pěnová izolace &middot; České Budějovice</p>
          <h1 className="pena-h1">
            Vejde se tam,
            <br />
            kam <span className="pena-accent">vata nikdy</span>
            <br />
            nedosáhne.
          </h1>
          <p className="pena-lead">
            Kapalná pěna se v podkroví rozepne do každé skuliny mezi krokvemi a
            zatuhne v jednu bezespárou vrstvu. Žádné spáry, žádné tepelné mosty —
            jen střecha, která v zimě drží teplo a v létě chládek.
          </p>
          <div className="pena-cta-row">
            <a className="pena-btn" href="tel:+420603288181">Zavolat 603 288 181</a>
            <a className="pena-btn pena-btn-ghost" href="#jak">Jak izolace probíhá</a>
          </div>
          <dl className="pena-hero-facts">
            <div>
              <dt>Materiál</dt>
              <dd>německá pěna HONTER</dd>
            </div>
            <div>
              <dt>Úspora topení</dt>
              <dd>až 60&nbsp;% ročně</dd>
            </div>
            <div>
              <dt>Hotovo</dt>
              <dd>zpravidla za&nbsp;1&nbsp;den</dd>
            </div>
          </dl>
        </div>
        <figure className="pena-hero-media">
          <img
            src="/hero.webp"
            alt="Detail čerstvě nastříkané žluté PUR pěny vyplňující prostor mezi střešními krokvemi v podkroví"
            width={1200}
            height={1500}
            loading="eager"
          />
          <figcaption>Nástřik mezi krokve — pěna vyplní i místa, kam se deska nevejde.</figcaption>
        </figure>
      </section>

      <section className="pena-section pena-jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="pena-section-head">
          <p className="pena-eyebrow">Od poptávky k teplé střeše</p>
          <h2 id="jak-nadpis" className="pena-h2">Tři kroky, obvykle jeden den na stavbě</h2>
          <p className="pena-section-intro">
            Nemusíte nic bourat ani stěhovat. Přijedeme k vám na Budějovicko
            i do celého Jihočeského kraje, zakryjeme a nastříkáme.
          </p>
        </div>
        <ol className="pena-kroky">
          {kroky.map((k) => (
            <li key={k.c} className="pena-krok">
              <span className="pena-krok-num" aria-hidden="true">{k.c}</span>
              <h3 className="pena-krok-t">{k.t}</h3>
              <p className="pena-krok-d">{k.d}</p>
            </li>
          ))}
        </ol>
        <figure className="pena-band">
          <img
            src="/section-1.webp"
            alt="Technik v ochranném obleku nastřikuje pěnovou izolaci na střešní konstrukci"
            width={1400}
            height={800}
            loading="lazy"
          />
          <figcaption>
            Otevřená struktura buněk nechá střechu dýchat a propouští vodní páry —
            po zatuhnutí je pěna zdravotně nezávadná.
          </figcaption>
        </figure>
      </section>

      <section className="pena-section pena-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="pena-duvera-grid">
          <div className="pena-duvera-copy">
            <p className="pena-eyebrow">Proč nám lidé věří</p>
            <h2 id="duvera-nadpis" className="pena-h2">
              Měříme se v&nbsp;metrech čtverečních, ne v&nbsp;kávách.
            </h2>
            <dl className="pena-cisla">
              {cisla.map((c) => (
                <div key={c.n} className="pena-cislo">
                  <dt>
                    <span className="pena-cislo-n">{c.n}</span>{" "}
                    {c.j && <span className="pena-cislo-j">{c.j}</span>}
                  </dt>
                  <dd>{c.p}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="pena-quote">
              <p>
                „Měl jsem na domě skelnou vatu a místy polystyren, všechno šlo pryč.
                Kluci z&nbsp;CZ pěny to měli hotové za&nbsp;šest hodin a&nbsp;nikde ani
                škvíra. Účet za&nbsp;topení byl letos skoro o&nbsp;třetinu nižší.“
              </p>
              <footer>
                <cite>Jaroslav Novotný</cite>, Pelhřimov
              </footer>
            </blockquote>
          </div>
          <figure className="pena-duvera-media">
            <img
              src="/section-2.webp"
              alt="Hotová souvislá vrstva pěnové izolace pod střechou podkroví"
              width={1000}
              height={1200}
              loading="lazy"
            />
            <figcaption>Hotové podkroví — jedna souvislá vrstva bez spár a tepelných mostů.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
const _unused: CSSProperties = {};
void _unused;
