import type { CSSProperties } from 'react';

export const metadata = {
  title: 'Deratizace Fast — DDD služby v Praze do dvou hodin',
  description:
    'Deratizace, dezinsekce a dezinfekce v Praze a Středních Čechách. Reagujeme do dvou hodin, jezdíme diskrétně v neoznačených vozech. Volejte 727 952 731.',
  openGraph: {
    title: 'Deratizace Fast — DDD služby v Praze do dvou hodin',
    description:
      'Deratizace, dezinsekce a dezinfekce v Praze a Středních Čechách. Reagujeme do dvou hodin, jezdíme diskrétně.',
    images: ['/hero.webp'],
    locale: 'cs_CZ',
    type: 'website',
  },
};

type Sluzba = {
  code: string;
  nazev: string;
  popis: string;
  cile: string[];
};

const sluzby: Sluzba[] = [
  {
    code: 'D1',
    nazev: 'Deratizace',
    popis:
      'Likvidace potkanů, myší a dalších hlodavců ve sklepích, skladech, provozech i domácnostech. Kombinujeme mechanické pasti s certifikovanými rodenticidy a hnízda dohledáme u zdroje.',
    cile: ['Potkani', 'Myši', 'Krysy', 'Křečci'],
  },
  {
    code: 'D2',
    nazev: 'Dezinsekce',
    popis:
      'Hubení hmyzu, který žije s vámi ve zdech a spárách. Štěnice v matracích, švábi za linkou, mravenci v kuchyni i vosí hnízda pod střechou — cílený zásah tam, kde to nevidíte.',
    cile: ['Štěnice', 'Švábi', 'Mravenci', 'Blechy', 'Vosy a sršně'],
  },
  {
    code: 'D3',
    nazev: 'Dezinfekce',
    popis:
      'Ničení mikroorganismů tam, kde je čistota povinnost — v provozovnách s potravinami, ordinacích i domácnostech po zamoření. Chemicky i fyzikálně (UV, teplo), s protokolem o provedení.',
    cile: ['Provozovny', 'Ordinace', 'Domácnosti', 'Sklady'],
  },
];

type Polozka = { skudce: string; detail: string; cena: string };

const cenik: Polozka[] = [
  { skudce: 'Štěnice', detail: 'matrace, postele, spáry', cena: '990' },
  { skudce: 'Mravenci', detail: 'kuchyně, tahy podél zdí', cena: '700' },
  { skudce: 'Švábi, blechy', detail: 'kuchyně, sklepy, koberce', cena: '700' },
  { skudce: 'Potkani, myši', detail: 'sklepy, sklady, dvory', cena: '600' },
  { skudce: 'Vosy, sršně', detail: 'hnízda pod střechou, na zahradě', cena: '1500' },
];

export default function Page() {
  return (
    <main className="df">
      <header className="df-nav">
        <a className="df-logo" href="#top" aria-label="Deratizace Fast — domů">
          <span className="df-logo-mark" aria-hidden="true">
            <span className="df-blip" />
          </span>
          <span className="df-logo-word">
            Deratizace<span className="df-logo-fast">Fast</span>
          </span>
        </a>
        <nav className="df-navlinks" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#cenik">Ceník</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="df-call" href="tel:+420727952731">
          <span className="df-call-label">Volat teď</span>
          <span className="df-call-num">727 952 731</span>
        </a>
      </header>

      <section className="df-hero" id="top">
        <div className="df-hero-media">
          <img
            src="/hero.webp"
            alt="Technik firmy Deratizace Fast při zásahu v neoznačeném voze"
            className="df-hero-img"
          />
          <div className="df-hero-scrim" aria-hidden="true" />
        </div>

        <div className="df-hero-inner">
          <p className="df-eyebrow">Praha 8 · Deratizace · Dezinsekce · Dezinfekce</p>
          <h1 className="df-hero-title">
            Škůdce vidíme<br />
            <span className="df-hl">dřív než vy.</span>
          </h1>
          <p className="df-hero-lead">
            Preventivní i účelové DDD zásahy v Praze a Středních Čechách.
            Objednáte a my jsme u vás — a hlavně diskrétně, v neoznačeném voze,
            aby sousedé nic nepoznali.
          </p>

          <div className="df-hero-cta">
            <a className="df-btn df-btn-solid" href="tel:+420727952731">
              Zavolat 727 952 731
            </a>
            <a className="df-btn df-btn-ghost" href="#sluzby">
              Co hubíme
            </a>
          </div>

          <dl className="df-hero-stats">
            <div>
              <dt>Reakce v Praze</dt>
              <dd><span className="df-num">2</span> hod</dd>
            </div>
            <div>
              <dt>Dojezd</dt>
              <dd>celá ČR</dd>
            </div>
            <div>
              <dt>Víkendy a svátky</dt>
              <dd>jezdíme</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="df-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="df-sec-head">
          <p className="df-kicker">Tři písmena, jedna zakázka</p>
          <h2 id="sluzby-h">DDD — deratizace, dezinsekce, dezinfekce</h2>
          <p className="df-sec-note">
            DDD ukládá zákon o ochraně veřejného zdraví č. 258/2000 Sb. Provozovnám
            i domácnostem. My ho za vás vyřešíme od dohledání hnízda po protokol.
          </p>
        </div>

        <ol className="df-cards">
          {sluzby.map((s) => (
            <li className="df-card" key={s.code}>
              <span className="df-card-code" aria-hidden="true">
                {s.code}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul className="df-tags">
                {s.cile.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="df-figure">
          <img
            src="/section-1.webp"
            alt="Kontrola a ošetření prostoru při deratizaci"
            className="df-figure-img"
          />
          <figcaption>
            Postřiky zahrad, vyklízecí práce i preventivní kontroly — přijedeme
            i o víkendu a svátku.
          </figcaption>
        </figure>
      </section>

      <section className="df-cenik" id="cenik" aria-labelledby="cenik-h">
        <div className="df-cenik-grid">
          <div className="df-cenik-head">
            <p className="df-kicker df-kicker-dark">Orientační ceník</p>
            <h2 id="cenik-h">Kolik to stojí</h2>
            <p className="df-sec-note">
              Ceny vycházejí ze stupně zamoření a velikosti prostoru — proto jsou
              orientační. Finální cenu vám řekneme na místě, dřív než začneme.
            </p>
            <figure className="df-figure df-figure-two">
              <img
                src="/section-2.webp"
                alt="Ošetření domácnosti proti hmyzu a hlodavcům"
                className="df-figure-img"
              />
            </figure>
          </div>

          <ul className="df-price">
            {cenik.map((p) => (
              <li key={p.skudce}>
                <div className="df-price-name">
                  <span className="df-price-skudce">{p.skudce}</span>
                  <span className="df-price-detail">{p.detail}</span>
                </div>
                <div className="df-price-cena">
                  <span className="df-price-od">od</span>
                  <span className="df-price-cislo">{p.cena}</span>
                  <span className="df-price-mena">Kč</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="df-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="df-duvera-inner">
          <p className="df-kicker">Proč zrovna Fast</p>
          <h2 id="duvera-h">Diskrétní řemeslo, žádné divadlo</h2>
          <p className="df-duvera-lead">
            Jsme z Prahy 8, Děčínská 552/1. Deláme DDD dennodenně — od panelákových
            sklepů po restaurační kuchyně. Přijedeme neoznačeným vozem, uděláme, co
            je potřeba, a odjedeme. Nikdo nemusí vědět, že u vás byl deratizér.
          </p>

          <ul className="df-usp">
            <li>
              <span className="df-usp-num">01</span>
              <div>
                <h3>Do dvou hodin v Praze</h3>
                <p>Když volají štěnice nebo potkani, čas hraje proti vám. V Praze a okolí jsme rychle.</p>
              </div>
            </li>
            <li>
              <span className="df-usp-num">02</span>
              <div>
                <h3>Neoznačené vozy</h3>
                <p>Žádné polepy, žádná pozornost. Zásah proběhne diskrétně a bez zvědavých pohledů.</p>
              </div>
            </li>
            <li>
              <span className="df-usp-num">03</span>
              <div>
                <h3>Podle zákona</h3>
                <p>Postupujeme dle 258/2000 Sb. a vyhlášky 137/2004 Sb. Na zásah dostanete doklad.</p>
              </div>
            </li>
          </ul>

          <div className="df-kontakt">
            <div>
              <p className="df-kontakt-label">Kde nás najdete</p>
              <p className="df-kontakt-val">Děčínská 552/1<br />Praha 8, 180 00</p>
            </div>
            <div>
              <p className="df-kontakt-label">Napište</p>
              <p className="df-kontakt-val">
                <a href="mailto:info@deratizacefast.cz">info@deratizacefast.cz</a>
              </p>
            </div>
            <div>
              <p className="df-kontakt-label">Zavolejte</p>
              <p className="df-kontakt-val">
                <a href="tel:+420727952731">(+420) 727 952 731</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
