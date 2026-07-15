import { AiImage } from "./_ui";

const services = [
  { code: "230/400 V", name: "Domovní a průmyslové elektroinstalace", note: "Rodinné domy, byty i výrobní haly — od jističe po poslední zásuvku." },
  { code: "CYKY", name: "Kabelové rozvody", note: "Silové i ovládací trasy, žlaby, lišty, uložení do země." },
  { code: "IP65", name: "Venkovní a areálové osvětlení", note: "Parkoviště, fasády, přístupové cesty a průmyslové areály." },
  { code: "Cat6 / PoE", name: "Datové a strukturované rozvody", note: "Racky, patch panely, Wi-Fi a napájení kamer po jednom kabelu." },
  { code: "EZS", name: "Elektronické zabezpečovací systémy", note: "Čidla, ústředny a napojení na pult centrální ochrany." },
  { code: "2-drát", name: "Domácí telefony a videotelefony", note: "Vstupy do bytových domů i rodinných domů, čipové přístupy." },
  { code: "EPS", name: "Požární signalizace", note: "Hlásiče, ústředny a napojení dle projektu požární ochrany." },
  { code: "100 V", name: "Komunikační a ozvučovací systémy", note: "Evakuační rozhlas a ozvučení provozů a veřejných prostor." },
  { code: "LPS / SPD", name: "Ochrana před bleskem a přepětím", note: "Hromosvody, uzemnění a přepěťové ochrany rozvaděčů." },
  { code: "FVE", name: "Fotovoltaické elektrárny", note: "Panely, střídače a zapojení do stávající instalace." },
];

const terminals = [
  "20 let v oboru",
  "Silnoproud + slaboproud",
  "Revize a dokumentace",
  "Pardubicko a okolí",
];

export default function Page() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top">
          <span className="wm-name">ELREG</span>
          <span className="wm-pe" aria-hidden="true" />
          <span className="wm-sub">Pardubice · elektroinstalace</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="nav-link is-active" href="#top">Domů</a>
          <a className="nav-link" href="#sluzby">Naše služby</a>
          <a className="nav-link" href="#realizace">Realizace</a>
          <a className="nav-link" href="#sluzby">FVE</a>
          <a className="nav-link" href="#realizace">Kontakt</a>
        </nav>
      </header>

      <section className="section hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-copper">PE · ochranný vodič — vše propojené a uzemněné</p>
            <h1 className="hero-title">Elektroinstalace,<br />na které se dá stavět.</h1>
            <p className="hero-lead">
              Silnoproud, slaboproud i související stavební práce v Pardubicích.
              Přes 20 let v oboru a stovky dokončených zakázek — od rodinných
              domů po průmyslové haly.
            </p>

            <div className="powerbar" aria-hidden="true">
              <span className="pe-rule" />
              <ul className="terms">
                {terminals.map((t) => (
                  <li className="term-item" key={t}>
                    <i className="term" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hero-media">
            <AiImage
              src="/hero.webp"
              alt="Detail zapojeného elektrického rozvaděče od firmy ELREG Pardubice"
              className="media-fill"
            />
          </div>
        </div>
      </section>

      <section className="section services" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">Naše služby</p>
          <span className="sec-rule" />
        </div>
        <div className="services-grid">
          <div className="services-intro">
            <h2 className="sec-title">Silnoproud i slaboproud pod jednou střechou</h2>
            <p className="prose">
              Komplexní elektromontáže a stavební práce. Co nepokryjeme sami,
              řešíme přes prověřené subdodavatele — vy jednáte s jedním partnerem
              a máte jednu odpovědnost za celou instalaci.
            </p>
          </div>
          <ul className="svc-list">
            {services.map((s) => (
              <li className="svc" key={s.name}>
                <i className="term" aria-hidden="true" />
                <div className="svc-body">
                  <span className="svc-code">{s.code}</span>
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-note">{s.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about" id="realizace">
        <div className="sec-head">
          <p className="eyebrow">Kdo jsme</p>
          <span className="sec-rule" />
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <h2 className="sec-title">20 let v Pardubicích. A pořád zvedáme telefon.</h2>
            <p className="prose">
              ELREG Pardubice je spolehlivý partner pro silnoproudou i
              slaboproudou elektroinstalaci a související stavební práce. Za víc
              než dvacet let jsme zvládli nespočet menších i velkých zakázek —
              a naučili se, že se to pozná právě na detailech.
            </p>
            <p className="prose">
              U náročnějších akcí a u řemesel, která sami neděláme, spolupracujeme
              se stálými partnery formou subdodávek. Vy tak dostanete jeden tým,
              jeden termín a jednu záruku.
            </p>

            <dl className="spec">
              <div className="spec-row">
                <dt>Sídlo</dt>
                <dd>Arnošta z Pardubic 2771<br />530 02 Pardubice</dd>
              </div>
              <div className="spec-row">
                <dt>Provoz</dt>
                <dd>Po–Pá 7:00–15:30</dd>
              </div>
              <div className="spec-row">
                <dt>Telefon</dt>
                <dd><a href="tel:+420731155305">+420 731 155 305</a></dd>
              </div>
              <div className="spec-row">
                <dt>E-mail</dt>
                <dd><a href="mailto:elreg@elreg.cz">elreg@elreg.cz</a></dd>
              </div>
            </dl>
          </div>

          <div className="about-media">
            <div className="about-shot">
              <AiImage
                src="/section-1.webp"
                alt="Elektrikář ELREG při montáži rozvodů na stavbě v Pardubicích"
                className="media-fill"
              />
            </div>
            <div className="about-shot">
              <AiImage
                src="/section-2.webp"
                alt="Dokončený rozvaděč a kabelové trasy realizované firmou ELREG"
                className="media-fill"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
