import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      n: "01",
      titul: "Okna bytů a domů",
      text:
        "Rámy, křídla, parapety i mezisklo u dvojskel. Špinavou vodu nikde nenecháme — po nás zůstane jen výhled, ne kapky na parapetu.",
    },
    {
      n: "02",
      titul: "Výlohy a prosklené fasády",
      text:
        "Pravidelné mytí výloh a vstupních portálů, aby vaše provozovna svítila každé ráno. Termíny brzo ráno i po zavírací době.",
    },
    {
      n: "03",
      titul: "Vysoká a špatně dostupná okna",
      text:
        "Teleskopické tyče až k horním patrům a světlíkům. Bez lešení, bez nepořádku, bez toho, abyste otevírali okno do výšky.",
    },
  ];

  const kroky = [
    { k: "Řekněte nám kolik oken", t: "Zavoláte nebo napíšete, kolik oken a odkud. Podle toho víme, co si vzít s sebou." },
    { k: "Cena do druhého dne", t: "Do 24 hodin pošleme konkrétní cenu za mytí oken. Nezávazně a bez šuplíkových příplatků." },
    { k: "Přijedeme a umyjeme", t: "V domluvený čas, s vlastní vodou i technikou. Vy se nemusíte o nic starat." },
    { k: "Zkontrolujeme proti světlu", t: "Okna projdeme spolu proti světlu. Šmouhu neuvidíte — jinak ji domyjeme na místě." },
  ];

  const recenze = [
    {
      jmeno: "Maja Ošťádalová",
      kdy: "před 2 měsíci",
      text:
        "Chci poděkovat za výborně provedenou práci a rychlé, profesionální jednání. Jiná volba než pět hvězdiček nepřipadá v úvahu.",
    },
    {
      jmeno: "Jiří Mucha",
      kdy: "před 2 měsíci",
      text:
        "Firma, na kterou je stoprocentní spolehnutí a které se nebojíte svěřit klíče. Komunikace na špičkové úrovni, kvalita perfektní.",
    },
    {
      jmeno: "Monika Šmudlová",
      kdy: "před 5 měsíci",
      text:
        "Využíváme je půl roku a jsme velice spokojeni. Úklid je vždy precizní, případný požadavek navíc bez námitek splněn.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="ÚKLIDXXL — mytí oken Olomouc">
          <span className="brand-mark" aria-hidden="true">
            <span className="pane" />
            <span className="pane" />
            <span className="squeegee" />
          </span>
          <span className="brand-word">
            ÚKLID<b>XXL</b>
          </span>
        </a>
        <div className="topbar-meta">
          <span className="open-dot" aria-hidden="true" />
          <span>Po–Ne 7:30–20:00</span>
          <a className="tel" href="tel:+420733303049">733&nbsp;303&nbsp;049</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Mytí oken · Olomouc a okolí</p>
          <h1 className="hero-title">
            <span className="line reveal" style={{ "--d": "0ms" } as CSSProperties}>
              Okno,
            </span>
            <span className="line reveal em" style={{ "--d": "90ms" } as CSSProperties}>
              co zmizí.
            </span>
          </h1>
          <p className="hero-lead reveal" style={{ "--d": "200ms" } as CSSProperties}>
            Umyjeme okna tak, že si všimnete jen výhledu. Domácnosti,
            výlohy i vysoká okna v Olomouci, Šternberku, Prostějově a okolí —
            s vlastní vodou, tyčemi a jednou kontrolou navíc, proti světlu.
          </p>
          <div className="hero-cta reveal" style={{ "--d": "300ms" } as CSSProperties}>
            <a className="btn btn-primary" href="tel:+420733303049">
              Zavolat 733 303 049
            </a>
            <a className="btn btn-ghost" href="mailto:uklid@uklidxxl.cz?subject=Poptávka%20mytí%20oken">
              Poptat mytí oken
            </a>
          </div>
        </div>
        <figure className="hero-figure reveal" style={{ "--d": "140ms" } as CSSProperties}>
          <img
            src="/hero.webp"
            alt="Čisté okno s výhledem po umytí od ÚKLIDXXL"
            width={1200}
            height={1400}
            loading="eager"
            decoding="async"
          />
          <figcaption className="streak" aria-hidden="true">
            <span>čistá strana</span>
            <span>špinavá strana</span>
          </figcaption>
        </figure>
      </section>

      <section className="services" aria-labelledby="services-h">
        <div className="section-head">
          <p className="eyebrow">Co mytím oken myslíme</p>
          <h2 id="services-h">Tři druhy oken, jeden výsledek — bez šmouh.</h2>
        </div>
        <div className="cards">
          {sluzby.map((s) => (
            <article className="card" key={s.n}>
              <span className="card-num" aria-hidden="true">
                {s.n}
              </span>
              <h3>{s.titul}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="steps">
          <p className="eyebrow">Od telefonu k čistému oknu</p>
          <ol>
            {kroky.map((k, i) => (
              <li key={i}>
                <span className="step-i" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h4>{k.k}</h4>
                  <p>{k.t}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-media">
          <img
            src="/section-1.webp"
            alt="Mytí okna stěrkou zblízka"
            width={900}
            height={700}
            loading="lazy"
            decoding="async"
          />
          <img
            className="trust-media-2"
            src="/section-2.webp"
            alt="Výhled z čistě umytého okna"
            width={900}
            height={700}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="trust-copy">
          <p className="eyebrow">Proč zrovna nás</p>
          <h2 id="trust-h">Malý tým z Dubčan u Olomouce, kterému se dá svěřit klíč.</h2>
          <p className="trust-lead">
            Jezdíme po Hané už roky — od Mohelnice přes Šternberk a Prostějov
            až po Přerov. Přijedeme s vlastní odsolenou vodou a stěrkami,
            uklidíme po sobě a okno vám ukážeme proti světlu, než zaplatíte.
          </p>
          <dl className="facts">
            <div>
              <dt>Cenová nabídka</dt>
              <dd>do 24 hodin</dd>
            </div>
            <div>
              <dt>Hodnocení na Google</dt>
              <dd>★★★★★</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Olomouc a okolí</dd>
            </div>
          </dl>
          <div className="reviews">
            {recenze.map((r) => (
              <figure className="review" key={r.jmeno}>
                <blockquote>„{r.text}“</blockquote>
                <figcaption>
                  <strong>{r.jmeno}</strong>
                  <span>{r.kdy}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
