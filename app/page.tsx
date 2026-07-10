import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MŠ U Letiště — soukromá mateřská škola v Liberci",
  description:
    "Soukromá mateřská škola U Letiště v Liberci. Malý věkově smíšený kolektiv, metodika Začít spolu, spolupráce s dětskou Mensou. Místo, kde jsou děti rády.",
  openGraph: {
    title: "MŠ U Letiště — soukromá mateřská škola v Liberci",
    description:
      "Malý věkově smíšený kolektiv, metodika Začít spolu, velká zahrada. Obchodní 606, Liberec.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const denPlan = [
  {
    cas: "6:30",
    nazev: "Ranní scházení",
    popis:
      "Děti přicházejí, vítá je paní učitelka. Volná hra v centrech aktivit — kostky, ateliér, knihovnička.",
  },
  {
    cas: "9:00",
    nazev: "Ranní kruh a program",
    popis:
      "Sedneme si do kruhu, přivítáme se jménem a domluvíme se, co nás dnes čeká. Pracujeme podle metodiky Začít spolu.",
  },
  {
    cas: "9:45",
    nazev: "Svačina a pobyt venku",
    popis:
      "Za každého počasí ven — na velkou zahradu nebo za dobrodružstvím do okolí Obchodní ulice.",
  },
  {
    cas: "12:00",
    nazev: "Oběd a odpočinek",
    popis:
      "Vlastní jídelníček, klidné čtení pohádky a spánek podle potřeb každého dítěte.",
  },
  {
    cas: "14:30",
    nazev: "Kroužky a vyzvedávání",
    popis:
      "Sport, tvoření, logika s dětskou Mensou. Rodiče si děti vyzvedávají v klidu, bez spěchu.",
  },
];

const duvery = [
  {
    stitek: "Kolektiv",
    hodnota: "malý a věkově smíšený",
    veta: "Menší skupinky znamenají víc pozornosti pro každé dítě a prokazatelně nižší nemocnost.",
  },
  {
    stitek: "Inspekce",
    hodnota: "nadstandardní hodnocení",
    veta: "Českou školní inspekcí hodnoceno jako nadstandardní předškolní zařízení.",
  },
  {
    stitek: "Akreditace",
    hodnota: "MŠMT ČR",
    veta: "Zapsáni v Rejstříku škol a školských zařízení — soukromá školka s plnou akreditací.",
  },
  {
    stitek: "Spolupráce",
    hodnota: "dětská Mensa",
    veta: "Rozvíjíme talent a nadání ve spolupráci s dětskou Mensou ČR.",
  },
];

export default function Page() {
  return (
    <main className="ms">
      <header className="ms-top">
        <a className="ms-brand" href="#" aria-label="MŠ U Letiště, Liberec — domů">
          <span className="ms-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="40" height="40" role="presentation">
              <path
                d="M6 40 L24 8 L42 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="7" r="3.6" fill="currentColor" />
              <path
                d="M12 40 L36 40"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="ms-brand-text">
            <span className="ms-brand-name">U&nbsp;Letiště</span>
            <span className="ms-brand-sub">mateřská škola · Liberec</span>
          </span>
        </a>
        <nav className="ms-nav" aria-label="Hlavní">
          <a href="#den">Náš den</a>
          <a href="#duvera">Proč k nám</a>
          <a className="ms-nav-cta" href="tel:+420723472986">Zavolat školce</a>
        </nav>
      </header>

      <section className="ms-hero" aria-labelledby="hero-nadpis">
        <div className="ms-hero-copy">
          <p className="ms-eyebrow">Soukromá školka · Obchodní 606, Liberec</p>
          <h1 id="hero-nadpis">
            Místo, kde jsou
            <span className="ms-hl"> děti rády.</span>
          </h1>
          <p className="ms-lead">
            „Všechno, co opravdu potřebuju znát, jsem se naučil v mateřské
            školce.“ U nás to bereme vážně — malý věkově smíšený kolektiv,
            metodika Začít spolu a velká zahrada hned za dveřmi.
          </p>
          <div className="ms-hero-actions">
            <a className="ms-btn ms-btn-primary" href="tel:+420723472986">
              Zavolat školce
            </a>
            <a className="ms-btn ms-btn-ghost" href="#den">
              Prohlédnout náš den
            </a>
          </div>
        </div>
        <figure className="ms-hero-media">
          <img
            src="/hero.webp"
            alt="Děti a paní učitelka v mateřské škole U Letiště v Liberci"
            width={880}
            height={720}
            decoding="async"
            fetchPriority="high"
          />
          <figcaption>
            <strong>739</strong> dní dětství, které se nevrátí — trávíme je
            venku, ve hře a v klidu.
          </figcaption>
        </figure>
      </section>

      <section className="ms-day" id="den" aria-labelledby="den-nadpis">
        <div className="ms-section-head">
          <p className="ms-eyebrow ms-eyebrow-dark">Jak u nás vypadá den</p>
          <h2 id="den-nadpis">Od rána do vyzvednutí</h2>
          <p className="ms-section-lead">
            Rytmus dne, na který se děti můžou spolehnout. Pevný řád dává pocit
            bezpečí — a uvnitř něj je spousta místa pro objevování.
          </p>
        </div>

        <div className="ms-day-grid">
          <ol className="ms-timeline">
            {denPlan.map((krok) => (
              <li className="ms-tl-item" key={krok.cas}>
                <span className="ms-tl-time">{krok.cas}</span>
                <div className="ms-tl-body">
                  <h3>{krok.nazev}</h3>
                  <p>{krok.popis}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="ms-day-media">
            <img
              src="/section-1.webp"
              alt="Interiér mateřské školy U Letiště — herna s interaktivní tabulí"
              width={640}
              height={760}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              Moderní budova, útulné vybavení, interaktivní tabule a velká
              zahrada.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ms-trust" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="ms-trust-inner">
          <figure className="ms-trust-media">
            <img
              src="/section-2.webp"
              alt="Děti při aktivitě na zahradě mateřské školy U Letiště v Liberci"
              width={620}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="ms-trust-copy">
            <p className="ms-eyebrow">Proč rodiče vybírají nás</p>
            <h2 id="duvera-nadpis">
              Ne všechny soukromé školky patří do jednoho pytle.
            </h2>
            <p className="ms-section-lead">
              Zaměřujeme se na rozvoj rozumových schopností, talentu a nadání —
              a k dětem přistupujeme individuálně. Tady je, čím to podložíme.
            </p>
            <dl className="ms-facts">
              {duvery.map((f) => (
                <div className="ms-fact" key={f.stitek}>
                  <dt>{f.stitek}</dt>
                  <dd>
                    <strong>{f.hodnota}</strong>
                    <span>{f.veta}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <a className="ms-btn ms-btn-primary" href="tel:+420739518963">
              Domluvit prohlídku s ředitelkou
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
