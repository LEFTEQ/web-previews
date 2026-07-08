import type { CSSProperties } from 'react'

export const metadata = {
  title: 'Kominík Růžička Brno — čištění, revize a stavba komínů',
  description:
    'Jakub Růžička — kominictví v Brně. Vymetání a čištění komínů, revizní zprávy s kamerou, vložkování a stavba nových komínů. Od roku 2014, Černá Pole.',
}

type Service = {
  cislo: string
  nazev: string
  popis: string
}

const sluzby: Service[] = [
  {
    cislo: 'A',
    nazev: 'Čištění a vymetání',
    popis:
      'Vyberu vám saze i dehet, zkontroluju tah a nechám komín tak, jak má topit. Bez kouře v obýváku a bez rizika, že se vznítí.',
  },
  {
    cislo: 'B',
    nazev: 'Revize s kamerou',
    popis:
      'Klasická revize i prohlídka komínovou kamerou — vidím i do míst, kam se okem nedostanete. Na konci máte v ruce platnou revizní zprávu.',
  },
  {
    cislo: 'C',
    nazev: 'Vložkování komínů',
    popis:
      'Ekonomický způsob, jak starý komín vrátit do provozu. Nerezová vložka utěsní průduch a prodlouží komínu život o dlouhé roky.',
  },
  {
    cislo: 'D',
    nazev: 'Drobné opravy a úpravy',
    popis:
      'Vyzdění, oplechování, rozšíření, kosmetické opravy koruny komínu. Práce všeho druhu, které komín potřebuje, aby vydržel.',
  },
  {
    cislo: 'E',
    nazev: 'Stavba nového komínu',
    popis:
      'Stavíte dům a chcete krb nebo kamna? Navrhnu a postavím komín na míru — od výpočtu tahu po hotovou korunu nad střechou.',
  },
]

const postup = [
  {
    krok: '01',
    nazev: 'Zavoláte, domluvíme se',
    popis:
      'Řeknete mi, co potřebujete, kde to je a kdy se vám to hodí. Obratem se ozvu zpět a doladíme podrobnosti.',
  },
  {
    krok: '02',
    nazev: 'Přijedu a změřím',
    popis:
      'U čištění se pustím rovnou do práce. U stavby nebo vložkování si komín nejdřív proměřím a připravím podklady.',
  },
  {
    krok: '03',
    nazev: 'Odvedu práci',
    popis:
      'Termín, cena i rozsah platí, jak jsme se domluvili. Můžete být u toho, nebo si v klidu vyrazit — postarám se o vše.',
  },
]

export default function Page() {
  return (
    <main className="kr">
      <header className="kr-topbar">
        <a className="kr-brand" href="#uvod" aria-label="Kominík Růžička, Brno">
          <span className="kr-brand-mark" aria-hidden="true">
            <span className="kr-brick" />
            <span className="kr-brick" />
            <span className="kr-brick" />
          </span>
          <span className="kr-brand-text">
            <span className="kr-brand-name">Růžička</span>
            <span className="kr-brand-sub">kominictví · Brno</span>
          </span>
        </a>
        <a className="kr-phone" href="tel:+420607570970">
          <span className="kr-phone-label">Volejte kominíka</span>
          <span className="kr-phone-number">607&nbsp;570&nbsp;970</span>
        </a>
      </header>

      <section className="kr-hero" id="uvod">
        <div className="kr-hero-media">
          <img
            src="/hero.webp"
            alt="Kominík Jakub Růžička na střeše u komínu při čištění"
            className="kr-hero-img"
          />
          <span className="kr-hero-shade" aria-hidden="true" />
        </div>

        <div className="kr-hero-inner">
          <p className="kr-eyebrow">Kominictví Jakub Růžička · od roku 2014</p>
          <h1 className="kr-hero-title">
            Aby vám komín <span className="kr-hl">táhl</span>,
            <br />
            ne aby topil dýmem.
          </h1>
          <p className="kr-hero-lead">
            Vylezu na střechu, vyberu saze i dehet, prohlédnu průduch kamerou a
            napíšu vám revizní zprávu, která platí. Vymetám, vložkuju i stavím
            komíny po celém Brně a okolí.
          </p>
          <div className="kr-hero-actions">
            <a className="kr-btn kr-btn--primary" href="tel:+420607570970">
              Zavolat kominíka
            </a>
            <a className="kr-btn kr-btn--ghost" href="#sluzby">
              Co pro vás udělám
            </a>
          </div>

          <dl className="kr-facts">
            <div className="kr-fact">
              <dt>Vymetám od roku</dt>
              <dd>2014</dd>
            </div>
            <div className="kr-fact">
              <dt>Působím</dt>
              <dd>Brno a&nbsp;okolí</dd>
            </div>
            <div className="kr-fact">
              <dt>Revize</dt>
              <dd>s&nbsp;kamerou</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kr-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="kr-section-head">
          <p className="kr-eyebrow kr-eyebrow--dark">Co umím</p>
          <h2 className="kr-h2" id="sluzby-nadpis">
            Pět věcí, kvůli kterým<br />mě lidi volají.
          </h2>
          <p className="kr-section-note">
            Od jednoho vymetení po celý komín na klíč. Řeknete, co potřebujete —
            zbytek je moje starost.
          </p>
        </div>

        <ol className="kr-service-list">
          {sluzby.map((s) => (
            <li className="kr-service" key={s.cislo}>
              <span className="kr-service-tag" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="kr-service-body">
                <h3 className="kr-service-name">{s.nazev}</h3>
                <p className="kr-service-desc">{s.popis}</p>
              </div>
            </li>
          ))}
          <li className="kr-service kr-service--img">
            <img
              src="/section-1.webp"
              alt="Detail komínu a kominického náčiní při práci"
              className="kr-service-photo"
            />
          </li>
        </ol>
      </section>

      <section className="kr-about" id="o-mne" aria-labelledby="o-mne-nadpis">
        <div className="kr-about-grid">
          <div className="kr-about-media">
            <img
              src="/section-2.webp"
              alt="Vyčištěný komín po zásahu kominíka Růžičky"
              className="kr-about-photo"
            />
            <blockquote className="kr-motto">
              <p>
                „Postavím, vyčistím, zkontroluju a ověřím každý komín ve
                městě.“
              </p>
              <cite>Jakub Růžička, kominík</cite>
            </blockquote>
          </div>

          <div className="kr-about-text">
            <p className="kr-eyebrow kr-eyebrow--dark">O mně</p>
            <h2 className="kr-h2" id="o-mne-nadpis">
              Kominíci prý nosí štěstí.
              <br />
              Já hlavně nosím čistý komín.
            </h2>
            <p className="kr-about-para">
              Řemeslu se věnuju od roku 2014. Za tu dobu jsem vymetl,
              zkontroloval, vyvložkoval i postavil pěknou řádku komínů po Brně a
              okolí. Na revize používám komínovou kameru — spolehlivě se s ní
              dostanu i tam, kam okem nevidíte.
            </p>
            <p className="kr-about-para">
              Dělám to poctivě a držím slovo. Proto se ke mně zákazníci
              opakovaně vracejí a doporučují mě dál.
            </p>

            <div className="kr-steps" role="list" aria-label="Jak spolupráce probíhá">
              {postup.map((p) => (
                <div className="kr-step" role="listitem" key={p.krok}>
                  <span className="kr-step-num" aria-hidden="true">
                    {p.krok}
                  </span>
                  <div>
                    <h3 className="kr-step-name">{p.nazev}</h3>
                    <p className="kr-step-desc">{p.popis}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="kr-contact-card">
              <p className="kr-contact-line">
                <span className="kr-contact-key">Kde mě najdete</span>
                Antonína Slavíka 1312/5, Brno-Černá Pole
              </p>
              <p className="kr-contact-line">
                <span className="kr-contact-key">Napište mi</span>
                <a href="mailto:kominikruzicka@seznam.cz">
                  kominikruzicka@seznam.cz
                </a>
              </p>
              <a className="kr-btn kr-btn--primary" href="tel:+420607570970">
                Zavolat 607&nbsp;570&nbsp;970
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
