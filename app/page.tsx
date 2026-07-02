const domy = [
  {
    jmeno: "Los Angeles",
    dispozice: "5+kk",
    zastavena: "160 m²",
    uzitna: "126,8 m²",
    cena: "4 541 313 Kč",
    popis: "Bungalov pro rodinu, která chce všechno v jednom podlaží — ložnice na klidné straně, obývák s kuchyní přes celý jih.",
  },
  {
    jmeno: "Sevilla",
    dispozice: "4+kk",
    zastavena: "134 m²",
    uzitna: "111,2 m²",
    cena: "4 043 740 Kč",
    popis: "Nejčastější volba našich zákazníků. Praktická dispozice, technická místnost u vstupu, krytá terasa.",
  },
  {
    jmeno: "Prague",
    dispozice: "4+kk",
    zastavena: "123 m²",
    uzitna: "98,5 m²",
    cena: "3 956 360 Kč",
    popis: "Kompaktní dům na menší pozemek. Nic mu nechybí — jen zbytečné metry, které byste vytápěli.",
  },
];

const vrstvy = [
  {
    cislo: "1",
    nazev: "Projekt a povolení",
    text: "Zaměříme pozemek, vyřídíme stavební povolení a přípojky. Vy podepisujete, my běháme po úřadech.",
  },
  {
    cislo: "2",
    nazev: "Konstrukce se zárukou 30 let",
    text: "Certifikované KVH hranoly, difuzně otevřená skladba stěny. Na nosnou konstrukci dáváme písemnou záruku 30 let.",
  },
  {
    cislo: "3",
    nazev: "Blower-door test",
    text: "Každý dům před předáním protlačíme zkouškou vzduchotěsnosti. Protokol dostanete do ruky — žádné sliby, čísla.",
  },
  {
    cislo: "4",
    nazev: "Rekuperace NILAN",
    text: "Řízené větrání s rekuperací tepla ušetří tisíce korun ročně. Proto provoz domu vychází od 1 200 Kč měsíčně.",
  },
  {
    cislo: "5",
    nazev: "Klíče a pojištění",
    text: "Předáme hotový dům včetně pojištění. Nastěhujete se, my zůstáváme na telefonu 770 330 330.",
  },
];

export default function Page() {
  return (
    <main className="qh">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Dřevostavba od Quality House při západu slunce na Olomoucku"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="hero-top">
          <span className="wordmark">
            Q<span className="wordmark-thin">HOUSE</span>
            <span className="wordmark-sub">dřevostavby · Olomouc</span>
          </span>
          <a className="hero-tel" href="tel:+420770330330">
            770 330 330
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Stavíme ze dřeva od roku 2008</p>
          <h1 className="hero-title">
            Dům, který voní
            <br />
            <em>smrkem,</em> ne&nbsp;betonem.
          </h1>
          <p className="hero-lead">
            77 rodin už bydlí v dřevostavbě od Quality House. Postavíme na klíč i&nbsp;tu vaši —
            s&nbsp;projektem, povolením, blower-door testem a&nbsp;zárukou 30&nbsp;let na konstrukci.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#nabidka">
              Prohlédnout domy
            </a>
            <a className="btn btn-ghost" href="#stavba">
              Jak stavíme
            </a>
          </div>
        </div>

        {/* letokruhy — signature prvek */}
        <div className="hero-rings" aria-hidden="true">
          <svg viewBox="0 0 400 400" role="presentation">
            <circle cx="200" cy="200" r="48" />
            <circle cx="200" cy="200" r="86" />
            <circle cx="200" cy="200" r="121" />
            <circle cx="200" cy="200" r="158" />
            <circle cx="200" cy="200" r="196" />
          </svg>
        </div>

        <ul className="hero-facts" aria-label="Klíčová fakta">
          <li>
            <strong>77</strong>
            <span>předaných domů</span>
          </li>
          <li>
            <strong>30 let</strong>
            <span>záruka na konstrukci</span>
          </li>
          <li>
            <strong>od 1 200 Kč</strong>
            <span>provoz domu měsíčně</span>
          </li>
        </ul>
      </header>

      {/* ===== SEKCE 1 — VRSTVY STAVBY ===== */}
      <section className="stavba" id="stavba">
        <div className="stavba-head">
          <p className="eyebrow">Dřevostavba na klíč</p>
          <h2>
            Pět vrstev, ze kterých
            <br />
            skládáme váš dům
          </h2>
          <p className="stavba-intro">
            Stěna dřevostavby je vrstvený sendvič — a&nbsp;stejně vrstvíme i&nbsp;celou zakázku.
            Od prvního výkresu po předání klíčů jednáte s&nbsp;jednou firmou z&nbsp;Olomouce.
          </p>
        </div>

        <div className="stavba-grid">
          <ol className="vrstvy">
            {vrstvy.map((v) => (
              <li className="vrstva" key={v.cislo}>
                <span className="vrstva-cislo" aria-hidden="true">
                  {v.cislo}
                </span>
                <div className="vrstva-text">
                  <h3>{v.nazev}</h3>
                  <p>{v.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="stavba-figure">
            <img
              src="/section-1.webp"
              alt="Montáž dřevěné konstrukce domu — tesaři Quality House při práci"
            />
            <figcaption>
              Konstrukce z certifikovaných KVH hranolů. Každý spoj kontrolujeme dřív, než ho zakryje
              další vrstva.
            </figcaption>
          </figure>
        </div>

        <p className="stavba-note">
          Máte vlastní návrh od architekta? Stačí poslat půdorys na{" "}
          <a href="mailto:tym@qhouse.cz">tym@qhouse.cz</a> — individuální projekty stavíme běžně,
          typový dům není podmínkou.
        </p>
      </section>

      {/* ===== SEKCE 2 — NABÍDKA DOMŮ ===== */}
      <section className="nabidka" id="nabidka">
        <div className="nabidka-head">
          <p className="eyebrow eyebrow-dark">Typové domy</p>
          <h2>Vybíráme z nabídky dřevostaveb</h2>
          <p className="nabidka-intro">
            60 bungalovů, 11 moderních a 6 klasických domů v katalogu. Každý typ vám dispozičně
            i&nbsp;velikostně upravíme — ceny jsou konečné, s&nbsp;DPH.
          </p>
        </div>

        <figure className="nabidka-figure">
          <img
            src="/section-2.webp"
            alt="Hotová dřevostavba se zahradou předaná rodině na Olomoucku"
          />
          <figcaption>
            Předaný dům u Uničova. V Troubelicích nabízíme dva zasíťované pozemky připravené
            k&nbsp;výstavbě.
          </figcaption>
        </figure>

        <div className="domy">
          {domy.map((d) => (
            <article className="dum" key={d.jmeno}>
              <h3 className="dum-jmeno">{d.jmeno}</h3>
              <p className="dum-popis">{d.popis}</p>
              <dl className="dum-data">
                <div>
                  <dt>Dispozice</dt>
                  <dd>{d.dispozice}</dd>
                </div>
                <div>
                  <dt>Zastavěná plocha</dt>
                  <dd>{d.zastavena}</dd>
                </div>
                <div>
                  <dt>Užitná plocha</dt>
                  <dd>{d.uzitna}</dd>
                </div>
              </dl>
              <p className="dum-cena">
                <span>konečná cena s DPH</span>
                <strong>{d.cena}</strong>
              </p>
            </article>
          ))}
        </div>

        <blockquote className="citace">
          <p>
            „Ke každému zákazníkovi přistupujeme individuálně. Naplánujeme stavbu od žádosti
            o&nbsp;úvěr až po předání klíčů — a&nbsp;postaráme se, aby to byla příjemná etapa vašeho
            života.“
          </p>
          <cite>Milan Bernát, Quality House s.r.o., Olomouc</cite>
        </blockquote>
      </section>
    </main>
  );
}
