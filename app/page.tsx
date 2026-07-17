import type { CSSProperties } from "react";

const seasonal = [
  { cz: "Slunečnice", la: "Helianthus annuus", season: "červenec–září", price: "od 45 Kč / ks", note: "Otočí se za sluncem i za pohledem u vás doma." },
  { cz: "Hortenzie", la: "Hydrangea macrophylla", season: "červen–září", price: "od 120 Kč / ks", note: "Nadýchané koule, které ve váze vydrží celé týdny." },
  { cz: "Eustoma", la: "Eustoma grandiflorum", season: "červen–říjen", price: "od 70 Kč / ks", note: "Křehká jako růže, ale ve váze vydrží podstatně déle." },
  { cz: "Jiřina", la: "Dahlia pinnata", season: "srpen–říjen", price: "od 60 Kč / ks", note: "Pozdně letní hvězda — každý květ jiná barva." },
  { cz: "Gladiol", la: "Gladiolus", season: "červenec–září", price: "od 55 Kč / ks", note: "Do výšky a do každé oslavy. Rozkvétá postupně." },
  { cz: "Růže", la: "Rosa", season: "celoročně", price: "od 60 Kč / ks", note: "Klasika, kterou u nás vážeme opravdu každý den." },
];

const promises = [
  { k: "Přes 200 prodejen", v: "Kytici od nás koupíte v Ústí nad Labem i po celé republice." },
  { k: "Vázáno floristy", v: "Každou kytici skládá ruka floristy přímo v dílně, ne stroj." },
  { k: "Vždy čerstvé", v: "Květiny bereme z aukce několikrát týdně — nic neleží." },
  { k: "Záruka kvality", v: "Kdyby kytice předčasně zvadla, vážeme novou nebo vrátíme peníze." },
];

const nameDays = [
  { date: "17. 7.", name: "Martina" },
  { date: "18. 7.", name: "Drahomíra", today: true },
  { date: "19. 7.", name: "Čeněk" },
];

const today = { date: "18. 7.", name: "Drahomíra", cz: "Hortenzie", la: "Hydrangea macrophylla" };

function Tie() {
  return (
    <svg className="tie" viewBox="0 0 60 30" aria-hidden="true">
      <path d="M4 4 C 18 16, 24 6, 30 13" fill="none" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M56 4 C 42 16, 36 6, 30 13" fill="none" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M30 13 C 27 19, 33 19, 30 25" fill="none" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="30" cy="13" r="3.1" fill="none" strokeWidth="1.6" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="masthead band">
        <div className="wrap">
          <div className="brandrow">
            <p className="wordmark">Flamengo</p>
            <p className="brandsub">květinářství&nbsp;· Ústí nad Labem</p>
          </div>

          <div className="hero">
            <div className="hero__type">
              <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />Živé květiny, vázané ručně</p>
              <h1 className="hero__title">Každý den má<br />svou <em>květinu.</em></h1>
              <p className="hero__lede">
                Svátek dnes slaví <strong>Drahomíra</strong>. Potěšte ji hortenzií —
                poctivě svázanou v naší dílně a rozvezenou po Ústí nad Labem ještě dnes.
              </p>
              <div className="cta">
                <a className="btn btn--buy" href="#nabidka">Objednat kytici k svátku</a>
                <a className="btn btn--ghost" href="#nabidka">Co teď kvete</a>
              </div>
              <ul className="namedays" aria-label="Jmeniny tento týden">
                {nameDays.map((d) => (
                  <li key={d.date} className={d.today ? "is-today" : undefined}>
                    <span className="nd-date">{d.date}</span>
                    <span className="nd-name">{d.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="tag tag--hero reveal" style={{ animationDelay: "420ms" } as CSSProperties}>
              <Tie />
              <p className="tag__kicker">Květina dne · {today.date}</p>
              <p className="tag__cz tag__cz--xl">{today.cz}</p>
              <p className="tag__la">{today.la}</p>
              <div className="tag__rule" aria-hidden="true" />
              <figcaption className="tag__note">
                Pro jmeniny <strong>{today.name}</strong>. Nadýchané květy, které ve váze
                vydrží déle než samotný svátek.
              </figcaption>
              <p className="tag__price">Kytice od 290 Kč</p>
            </figure>
          </div>
        </div>
      </header>

      <section id="nabidka" className="band band--catalog" aria-labelledby="cat-h">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />Sezónní specimeny</p>
            <h2 id="cat-h" className="sec-title">Co u nás právě teď kvete</h2>
            <p className="sec-lede">
              Každý stonek si prohlédneme dřív, než ho pustíme do kytice. Vyberte si
              květinu — my ji svážeme na počkání a rozvezeme po Ústí nad Labem.
            </p>
          </div>

          <ul className="grid">
            {seasonal.map((f, i) => (
              <li
                key={f.cz}
                className="tag reveal"
                style={{ animationDelay: `${120 + i * 120}ms` } as CSSProperties}
              >
                <Tie />
                <p className="tag__cz">{f.cz}</p>
                <p className="tag__la">{f.la}</p>
                <div className="tag__rule" aria-hidden="true" />
                <dl className="tag__meta">
                  <div>
                    <dt>Sezóna</dt>
                    <dd>{f.season}</dd>
                  </div>
                  <div>
                    <dt>Cena</dt>
                    <dd>{f.price}</dd>
                  </div>
                </dl>
                <p className="tag__note">{f.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--trust" aria-labelledby="trust-h">
        <div className="wrap">
          <div className="trust">
            <div className="trust__intro">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" aria-hidden="true" />O nás</p>
              <h2 id="trust-h" className="sec-title sec-title--light">
                Florista, kterého v Ústí najdete i&nbsp;o&nbsp;víkendu
              </h2>
              <p className="trust__body">
                Flamengo vážeme z čerstvých květin, které bereme přímo z aukce.
                Umíme kytici na počkání, svatební i smuteční vazbu a rozvoz po městě
                i okolí. Poradíme, co komu darovat a jak o květiny doma pečovat.
              </p>
              <p className="trust__addr">
                Prodejna Flamengo · Ukázková 123, Ústí nad Labem ·
                <span> tel — · e-mail —</span>
              </p>
            </div>

            <ul className="promises">
              {promises.map((p) => (
                <li key={p.k} className="promise">
                  <p className="promise__k">{p.k}</p>
                  <p className="promise__v">{p.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
