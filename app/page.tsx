import { AiImage } from "./_ui";

const sluzby = [
  {
    kod: "01",
    nazev: "VÝSTAVBA",
    titulek: "Rodinné domy na klíč",
    perex:
      "Stavíme od katalogového projektu až po dům řešený přesně na míru. Nízkoenergetický standard bereme jako výchozí bod, ne jako příplatek. Pevná cena a pevný termín jsou součástí smlouvy.",
    body: [
      "Hrubá stavba i kompletní interiér na klíč",
      "Obvodový plášť s U ≤ 0,15 W/(m²·K)",
      "Jeden stavbyvedoucí od základů po kolaudaci",
    ],
  },
  {
    kod: "02",
    nazev: "REVITALIZACE",
    titulek: "Zateplení a obnova panelových domů",
    perex:
      "Certifikované ucelené systémy ETICS od prověřených dodavatelů. Technologické postupy držíme do posledního detailu — kotvení, výztužnou vrstvu i finální omítku kontroluje stavbyvedoucí a technický dozor.",
    body: [
      "Zateplení fasád a plochých střech",
      "Výměna oken, oprava lodžií a balkonů",
      "Fotodokumentace každé etapy pro SVJ",
    ],
  },
  {
    kod: "03",
    nazev: "FINANCOVÁNÍ",
    titulek: "Peníze na stavbu vyřešíme s vámi",
    perex:
      "Od roku 1991 víme, jak se stavební projekt financuje. Ve spolupráci s bankami a s dotačními programy najdeme cestu, která vám sedne na rozpočet i na harmonogram.",
    body: [
      "Podklady pro úvěr SVJ i pro hypotéku",
      "Rozpočet po etapách, ne jedna velká částka",
      "Dotační žádosti Nová zelená úsporám",
    ],
  },
];

const vrstvy = [
  { c: "01", n: "Podklad", d: "Panel nebo zdivo — očištěné, přeměřené, zpevněné penetrací." },
  { c: "02", n: "Lepicí hmota", d: "Nanesená po obvodu a do terčů, s kontrolou přilnavosti." },
  { c: "03", n: "Izolant", d: "EPS nebo minerální vlna 160–200 mm, kotvená hmoždinkami." },
  { c: "04", n: "Výztužná vrstva", d: "Stěrka se sklotextilní síťovinou, přesahy 10 cm." },
  { c: "05", n: "Omítka", d: "Silikonová probarvená omítka — finální pohledová vrstva." },
];

const reference = [
  {
    src: "/section-1.webp",
    alt: "Zateplený panelový dům po revitalizaci v Plzni",
    misto: "Plzeň — Bolevec",
    popis: "Panelový dům, 48 bytů",
    detail: "Zateplení fasády minerální vlnou 180 mm, nové lodžie, výměna oken. Hotovo za 19 týdnů.",
    stav: "Před: nezateplený panel z roku 1978",
  },
  {
    src: "/section-2.webp",
    alt: "Novostavba nízkoenergetického rodinného domu na Plzeňsku",
    misto: "Plzeň — Litice",
    popis: "Rodinný dům na klíč,142m²",
    detail: "Nízkoenergetický dům s rekuperací, dokončený interiér, pevná cena podle smlouvy.",
    stav: "Před: rovná parcela, jen přípojky",
  },
];

export default function Page() {
  return (
    <main className="st-page">
      <header className="st-topbar">
        <a className="st-wordmark" href="#uvod" aria-label="STAKOM, spol. s r.o. — úvod">
          <span className="st-wordmark__name">STAKOM</span>
          <span className="st-wordmark__rule" aria-hidden="true" />
          <span className="st-wordmark__meta">Plzeň · od 1991</span>
        </a>
        <a className="st-topbar__tel" href="tel:+420777111222">
          Zavolat 777 111 222
        </a>
      </header>

      <section className="st-hero" id="uvod">
        <div className="st-hero__inner">
          <div className="st-hero__text">
            <p className="st-eyebrow">Stavební firma · Ukázková 123, Plzeň</p>
            <div className="st-skladba st-skladba--hero" aria-hidden="true">
              <span className="st-skladba__l st-skladba__l--1" />
              <span className="st-skladba__l st-skladba__l--2" />
              <span className="st-skladba__l st-skladba__l--3" />
              <span className="st-skladba__l st-skladba__l--4" />
            </div>
            <h1 className="st-hero__h1">
              Jsme specialisté na výstavbu
              <br />
              a revitalizaci domů
            </h1>
            <p className="st-hero__lead">
              Zateplujeme panelové a bytové domy v Plzni a okolí a stavíme nízkoenergetické rodinné
              domy na klíč. Držíme technologický postup od podkladu po omítku — a ručíme za cenu i
              termín.
            </p>
            <div className="st-hero__actions">
              <a className="st-btn st-btn--primary" href="tel:+420777111222">
                Zavolat777 111 222
              </a>
              <a className="st-btn st-btn--ghost" href="mailto:info@example.cz">
                Napsat na info@example.cz
              </a>
            </div>
            <dl className="st-facts">
              <div className="st-facts__item">
                <dt>Na trhu</dt>
                <dd>od roku 1991</dd>
              </div>
              <div className="st-facts__item">
                <dt>Systémy</dt>
                <dd>certifikované ETICS</dd>
              </div>
              <div className="st-facts__item">
                <dt>Působíme</dt>
                <dd>Plzeň a Plzeňský kraj</dd>
              </div>
            </dl>
          </div>

          <figure className="st-hero__figure">
            <AiImage
              className="st-hero__img"
              src="/hero.webp"
              alt="Lešení na fasádě bytového domu při zateplování v Plzni"
            />
            <figcaption className="st-hero__cap">
              Revitalizace bytového domu, Plzeň — kotvení izolantu a výztužná vrstva
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="st-band-edge" aria-hidden="true" />

      <section className="st-band st-band--blueprint" id="sluzby">
        <div className="st-wrap">
          <p className="st-eyebrow st-eyebrow--light">Co pro vás děláme</p>
          <h2 className="st-h2">Tři věci, které umíme do detailu</h2>
          <div className="st-cards">
            {sluzby.map((s) => (
              <article className="st-card" key={s.kod}>
                <p className="st-card__code">
                  <span className="st-card__num">{s.kod}</span> {s.nazev}
                </p>
                <h3 className="st-card__title">{s.titulek}</h3>
                <p className="st-card__perex">{s.perex}</p>
                <ul className="st-list">
                  {s.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="st-band-edge" aria-hidden="true" />

      <section className="st-band st-band--paper" id="reference">
        <div className="st-wrap">
          <p className="st-eyebrow">Skladba a reference</p>
          <h2 className="st-h2">Pod omítkou je pět vrstev. Žádnou nevynecháme.</h2>
          <p className="st-intro">
            Zateplení vydrží třicet let, nebo se za tři roky rozpraská — rozdíl je v postupu, který
            nikdo nevidí. Proto každou etapu fotíme a předáváme SVJ i majitelům domů jako součást
            dokumentace.
          </p>

          <ol className="st-vrstvy">
            {vrstvy.map((v) => (
              <li className="st-vrstva" key={v.c}>
                <span className="st-vrstva__c">{v.c}</span>
                <span className="st-vrstva__n">{v.n}</span>
                <span className="st-vrstva__d">{v.d}</span>
              </li>
            ))}
          </ol>

          <h3 className="st-sub">Vybrané stavby v Plzni</h3>
          <div className="st-refs">
            {reference.map((r) => (
              <article className="st-ref" key={r.src}>
                <div className="st-ref__media">
                  <AiImage className="st-ref__img" src={r.src} alt={r.alt} />
                  <p className="st-ref__wipe">{r.stav}</p>
                </div>
                <div className="st-ref__body">
                  <p className="st-ref__misto">{r.misto}</p>
                  <h4 className="st-ref__nazev">{r.popis}</h4>
                  <p className="st-ref__detail">{r.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="st-note">
            <p className="st-note__t">Firma STAKOM, spol. s r.o. staví od roku 1991.</p>
            <p className="st-note__d">
              Ukázková 123, Plzeň · telefon 777 111 222 · info@example.cz — ozveme se do druhého
              pracovního dne a přijedeme se na dům podívat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
