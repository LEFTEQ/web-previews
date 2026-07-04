import './globals.css';

type Vuz = {
  znacka: string;
  model: string;
  detail: string;
  motor: string;
  palivo: string;
  rok: string;
  km: string;
  karoserie: string;
  cena: string;
  poznamka: string;
  dph: string;
};

const vozy: Vuz[] = [
  {
    znacka: 'Peugeot',
    model: '2008',
    detail: '1.2 PureTech GT-Line AT/8 LED',
    motor: '1 199 ccm · 96 kW (131 k)',
    palivo: 'Benzín',
    rok: '2021',
    km: '128 800 km',
    karoserie: 'SUV',
    cena: '329 000',
    poznamka: 'Rozvody dělané v 61 000 km. Vozidlo skladem, se zárukou.',
    dph: 'bez odpočtu DPH',
  },
  {
    znacka: 'Mercedes-Benz',
    model: 'Vito 111',
    detail: '2.2 CDI · klima · tažné',
    motor: '2 148 ccm · 85 kW (116 k)',
    palivo: 'Nafta',
    rok: '2010',
    km: '343 391 km',
    karoserie: 'Dodávka',
    cena: '149 000',
    poznamka: 'Nový kardan. Připravené na práci i na dovolenou.',
    dph: 'bez odpočtu DPH',
  },
  {
    znacka: 'Škoda',
    model: 'Octavia III',
    detail: '2.0 TDI Style · DSG · tažné',
    motor: '1 968 ccm · 110 kW (150 k)',
    palivo: 'Nafta',
    rok: '2019',
    km: '164 220 km',
    karoserie: 'Kombi',
    cena: '299 000',
    poznamka: 'Servisní kniha, jeden majitel, koupeno v ČR.',
    dph: 'možnost odpočtu DPH',
  },
];

const jistoty = [
  {
    cislo: '01',
    nadpis: 'Přepneme výhybku za vás',
    text: 'Vybrané auto projede naší kontrolní jámou dřív, než ho uvidíte v inzerátu. Co najdeme, to opravíme nebo napíšeme rovnou do popisu. Žádné překvapení pod kapotou.',
  },
  {
    cislo: '02',
    nadpis: 'Původ i stav na papíře',
    text: 'Ke každému vozu doložíme historii, počet majitelů a stav tachometru. Auta koupená v ČR poznáte na první pohled — píšeme to přímo do nabídky.',
  },
  {
    cislo: '03',
    nadpis: 'Odjedete se zárukou',
    text: 'Ke každému vozu dostanete záruku a možnost financování. Protiúčet vašeho stávajícího auta vyřídíme na místě, na počkání.',
  },
];

export default function Page() {
  return (
    <main className="vyh">
      <header className="vyh-topbar">
        <a className="vyh-wordmark" href="#" aria-label="AUTO-VYHYBKA, autobazar Praha">
          <span className="vyh-wordmark-auto">AUTO</span>
          <span className="vyh-wordmark-switch" aria-hidden="true">——&#8203;</span>
          <span className="vyh-wordmark-vyhybka">VYHYBKA</span>
        </a>
        <nav className="vyh-nav" aria-label="Hlavní">
          <a href="#nabidka">Vozy skladem</a>
          <a href="#jistoty">Jak to děláme</a>
          <a className="vyh-nav-tel" href="tel:+420720000206">720 000 206</a>
        </nav>
      </header>

      <section className="vyh-hero" aria-labelledby="vyh-hero-nadpis">
        <div className="vyh-hero-media">
          <img
            src="/hero.webp"
            alt="Řada ojetých vozů připravených k prodeji na ploše pražského autobazaru AUTO-VYHYBKA"
            className="vyh-hero-img"
          />
        </div>
        <div className="vyh-hero-panel">
          <p className="vyh-eyebrow">Autobazar · Praha</p>
          <h1 id="vyh-hero-nadpis" className="vyh-hero-nadpis">
            Nasměrujeme vás<br />ke správnému autu.
          </h1>
          <p className="vyh-hero-lead">
            Každý vůz na naší ploše projede kontrolou, než ho pustíme do inzerátu.
            Řekneme vám o něm i to, co byste sami nezjistili — a pak vás necháme rozhodnout.
          </p>
          <div className="vyh-hero-akce">
            <a className="vyh-btn vyh-btn-primar" href="#nabidka">Prohlédnout vozy skladem</a>
            <a className="vyh-btn vyh-btn-sekundar" href="tel:+420720000206">Zavolat na bazar</a>
          </div>
          <dl className="vyh-hero-fakta">
            <div>
              <dt>Výkup</dt>
              <dd>na počkání, i na protiúčet</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Praha, dostupné MHD i autem</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="nabidka" className="vyh-nabidka" aria-labelledby="vyh-nabidka-nadpis">
        <div className="vyh-sekce-hlavicka">
          <p className="vyh-eyebrow">Vozy skladem</p>
          <h2 id="vyh-nabidka-nadpis">Aktuálně stojí na ploše</h2>
          <p className="vyh-sekce-lead">
            Všechna auta si můžete přijet prohlédnout osobně. Vyzkoušíte, nastartujete,
            projedete. Výběr obměňujeme každý týden.
          </p>
        </div>

        <ul className="vyh-vozy">
          {vozy.map((v) => (
            <li key={v.znacka + v.model} className="vyh-vuz">
              <div className="vyh-vuz-hlava">
                <span className="vyh-vuz-znacka">{v.znacka}</span>
                <span className="vyh-vuz-model">{v.model}</span>
              </div>
              <p className="vyh-vuz-detail">{v.detail}</p>
              <ul className="vyh-vuz-parametry">
                <li><span>Motor</span>{v.motor}</li>
                <li><span>Palivo</span>{v.palivo}</li>
                <li><span>Rok</span>{v.rok}</li>
                <li><span>Najeto</span>{v.km}</li>
                <li><span>Karoserie</span>{v.karoserie}</li>
              </ul>
              <p className="vyh-vuz-poznamka">{v.poznamka}</p>
              <div className="vyh-vuz-pata">
                <div className="vyh-vuz-cena">
                  <strong>{v.cena}</strong>
                  <span>Kč · {v.dph}</span>
                </div>
                <a className="vyh-vuz-odkaz" href="tel:+420720000206">
                  Domluvit prohlídku
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="vyh-nabidka-vic">
          Hledáte konkrétní značku? Máme na ploše i skladem přes 40 značek —
          od Škody a VW po Mercedes, BMW nebo Teslu. Zavolejte a řekneme, co máme.
        </p>
      </section>

      <section id="jistoty" className="vyh-jistoty" aria-labelledby="vyh-jistoty-nadpis">
        <div className="vyh-jistoty-grid">
          <div className="vyh-jistoty-text">
            <p className="vyh-eyebrow">Jak to u nás chodí</p>
            <h2 id="vyh-jistoty-nadpis">Než přehodíme výhybku k prodeji</h2>
            <p className="vyh-sekce-lead">
              Jméno máme z železnice — výhybka rozhoduje, kterou cestou vlak pojede.
              U nás rozhodne pořádná příprava, kterou žádné auto neobjede.
            </p>
            <ol className="vyh-kroky">
              {jistoty.map((k) => (
                <li key={k.cislo} className="vyh-krok">
                  <span className="vyh-krok-cislo" aria-hidden="true">{k.cislo}</span>
                  <div>
                    <h3>{k.nadpis}</h3>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figure className="vyh-jistoty-media">
            <img
              src="/section-1.webp"
              alt="Technik při kontrole ojetého vozu v servisní jámě autobazaru AUTO-VYHYBKA"
            />
          </figure>
        </div>
      </section>

      <section className="vyh-vykup" aria-labelledby="vyh-vykup-nadpis">
        <figure className="vyh-vykup-media">
          <img
            src="/section-2.webp"
            alt="Předání klíčů od vykoupeného vozu v pražském autobazaru AUTO-VYHYBKA"
          />
        </figure>
        <div className="vyh-vykup-text">
          <p className="vyh-eyebrow">Vykupujeme</p>
          <h2 id="vyh-vykup-nadpis">Vaše auto proměníme v hotovost ještě dnes</h2>
          <p>
            Přijeďte s ojetým vozem a odjeďte s penězi, nebo si vyberte auto na protiúčet.
            Ocenění uděláme na místě, papíry přepíšeme za vás. Fungujeme v Praze —
            zavolejte, ať víme, že přijíždíte.
          </p>
          <div className="vyh-vykup-kontakt">
            <a className="vyh-btn vyh-btn-primar" href="tel:+420720000206">Zavolat: 720 000 206</a>
            <a className="vyh-btn vyh-btn-sekundar" href="mailto:info@auto-vyhybka.cz">Napsat na e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}
