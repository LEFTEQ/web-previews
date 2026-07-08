import React from "react";

const sluzby = [
  {
    obor: "Civilní právo",
    nadpis: "Spory, smlouvy, náhrada škody",
    text: "Sepíšu a připomínkuji smlouvy, zastoupím vás u soudu i při jednání s protistranou. Řeším spory ze sousedských vztahů, vad díla i nezaplacených faktur — od výzvy až po výkon rozhodnutí.",
  },
  {
    obor: "Rodinné právo",
    nadpis: "Rozvod, péče o děti, výživné",
    text: "Provedu vás rozvodem i úpravou poměrů k dětem s klidem a bez zbytečné eskalace. Nastavím výživné, které obstojí, a hledám dohodu dřív než soudní síň.",
  },
  {
    obor: "Nemovitosti",
    nadpis: "Převody, katastr, vydržení",
    text: "Kupní a darovací smlouvy, advokátní úschova kupní ceny, návrhy na vklad do katastru. Řeším i složitější případy vydržení vlastnického práva a věcná břemena.",
  },
  {
    obor: "Trestní právo",
    nadpis: "Obhajoba a zastoupení poškozených",
    text: "Obhajoba v trestním řízení od prvního výslechu, včetně účasti u úkonů policie. Zastoupím i poškozené při uplatnění nároku na náhradu újmy.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Mgr. Jakub Hrubý, advokát — úvod">
          <span className="wordmark-name">Hrubý</span>
          <span className="wordmark-sub">advokát · Pardubice</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#omne">O mně</a>
          <a className="nav-call" href="tel:+420777135665">777 135 665</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-figure">
          <img
            src="/hero.webp"
            alt="Mgr. Jakub Hrubý, advokát z Pardubic"
            className="hero-img"
          />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Advokátní kancelář · Na Hrádku 1940, Pardubice</p>
          <h1 id="hero-title">
            Ve věci<span className="amp">, </span>ve které<br />
            teď<span className="emph"> stojíte</span>,<br />
            budu stát vedle vás.
          </h1>
          <p className="lede">
            Právo bývá napsané tak, aby mu rozuměl málokdo. Mým úkolem je
            přeložit ho do jazyka vašeho případu — a dotáhnout ho do konce.
            Rozvod, spor o pozemek, smlouva, obhajoba. Řeknu vám rovnou, jak
            na tom jste.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420777135665">
              Zavolat 777 135 665
            </a>
            <a className="btn btn-ghost" href="mailto:hruby@vialegal.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="sec-head">
          <p className="eyebrow">§ Čím se zabývám</p>
          <h2 id="sluzby-title">Čtyři oblasti, ve kterých znám cestu ven</h2>
          <p className="sec-lede">
            Nejsem kancelář na všechno. Soustředím se na věci, které v Pardubicích
            a okolí lidé a firmy řeší nejčastěji — a kde se vyplatí mít po ruce
            někoho, kdo tenhle typ případu už vedl.
          </p>
        </div>
        <ol className="sluzby-list">
          {sluzby.map((s, i) => (
            <li className="sluzba" key={s.obor}>
              <span className="sluzba-mark" aria-hidden="true">
                § {String(i + 1).padStart(2, "0")}
              </span>
              <div className="sluzba-text">
                <p className="sluzba-obor">{s.obor}</p>
                <h3>{s.nadpis}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="omne" id="omne" aria-labelledby="omne-title">
        <div className="omne-figure">
          <img
            src="/section-1.webp"
            alt="Advokátní kancelář Mgr. Jakuba Hrubého"
            className="omne-img"
          />
        </div>
        <div className="omne-body">
          <p className="eyebrow">§ O mně</p>
          <h2 id="omne-title">Jeden advokát, který vede váš spis od začátku do konce</h2>
          <p>
            Jmenuji se Jakub Hrubý a od roku 2013 vedu vlastní advokátní kancelář
            v centru Pardubic, kousek od Zámku, na adrese Na Hrádku 1940. K vašemu
            případu se nedostane koncipient, o kterém jste nikdy neslyšeli — mluvíte
            přímo se mnou.
          </p>
          <p>
            Než něco podepíšete nebo podáte, dostanete ode mě střízlivý odhad:
            co má smysl, co vás bude stát čas i peníze a kde je reálná šance uspět.
            Raději vám včas řeknu, že se soud nevyplatí, než abych vás jím vodil.
          </p>
          <dl className="fakta">
            <div>
              <dt>Od roku</dt>
              <dd>2013</dd>
            </div>
            <div>
              <dt>Kancelář</dt>
              <dd>Pardubice, Na Hrádku 1940</dd>
            </div>
            <div>
              <dt>Zapsán u</dt>
              <dd>České advokátní komory</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="jak" aria-labelledby="jak-title">
        <div className="jak-body">
          <p className="eyebrow">§ Jak to probíhá</p>
          <h2 id="jak-title">Od prvního telefonu ke klidu ve věci</h2>
          <ol className="kroky">
            <li>
              <span className="krok-c" aria-hidden="true">01</span>
              <div>
                <h3>Zavoláte nebo napíšete</h3>
                <p>Krátce mi popíšete, o co jde. Domluvíme si schůzku a řeknu vám, jaké podklady mám nachystat.</p>
              </div>
            </li>
            <li>
              <span className="krok-c" aria-hidden="true">02</span>
              <div>
                <h3>Probereme případ</h3>
                <p>Projdeme dokumenty, řeknu vám možnosti, rizika i odhad ceny. Bez právničtiny a bez příkras.</p>
              </div>
            </li>
            <li>
              <span className="krok-c" aria-hidden="true">03</span>
              <div>
                <h3>Jednám za vás</h3>
                <p>Sepíšu podání, jednám s protistranou i úřady, zastoupím vás u soudu. Průběžně vás držím v obraze.</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="jak-figure">
          <img
            src="/section-2.webp"
            alt="Konzultace klienta v advokátní kanceláři"
            className="jak-img"
          />
        </div>
      </section>
    </main>
  );
}
