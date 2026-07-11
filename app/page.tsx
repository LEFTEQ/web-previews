import React from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Zahradnické úpravy, Studenec">
          <span className="wordmark-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28" role="presentation">
              <path d="M16 30c0-8 0-13 0-13M16 17c-6 0-11-4-11-10 6 0 11 4 11 10ZM16 17c0-5 4-10 10-10 0 5-4 10-10 10Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="wordmark-text">
            <span className="wordmark-name">Zahradnické úpravy</span>
            <span className="wordmark-place">Studenec u Třebíče</span>
          </span>
        </a>
        <a className="topbar-call" href="tel:+420776123456">Zavolat zahradníka</a>
      </header>

      <section className="hero">
        <img
          className="hero-photo"
          src="/hero.webp"
          alt="Sečená zahrada s tvarovanými keři a záhony v okolí Studence"
          width={1600}
          height={1000}
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Sezóna 2024 — přijímáme nové zahrady</p>
          <h1 className="hero-title">
            Vaše zahrada<br />
            <em>ostříhaná, posekaná</em><br />
            a hotová do víkendu.
          </h1>
          <p className="hero-lede">
            Pravidelná i jednorázová údržba zahrad ve Studenci a okolí Třebíče.
            Sečeme, tvarujeme živé ploty, plejeme záhony a odvážíme, co po nás zbyde.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420776123456">Zavolat 776 123 456</a>
            <a className="btn btn-ghost" href="#nabidka">Co pro vás uděláme</a>
          </div>
          <ul className="hero-facts">
            <li><strong>Studenec 181</strong><span>naše sídlo a stroje</span></li>
            <li><strong>do 25 km</strong><span>Studenec, Třebíč, okolí</span></li>
            <li><strong>březen–listopad</strong><span>celá zahradní sezóna</span></li>
          </ul>
        </div>
      </section>

      <section className="work" id="nabidka" aria-labelledby="work-title">
        <div className="section-head">
          <p className="eyebrow">Co pravidelně děláme</p>
          <h2 id="work-title" className="section-title">Údržba, kterou zvládneme za jeden zajezd</h2>
          <p className="section-note">
            Ceny říkáme dopředu, na místě a bez okolků. Menší zahradu stihneme za dopoledne,
            větší pozemek rozvrhneme na sezónu.
          </p>
        </div>

        <ol className="tasks">
          <li className="task">
            <span className="task-month">Duben–říjen</span>
            <h3 className="task-name">Sečení trávníku</h3>
            <p className="task-text">
              Pravidelná seč rotačkou i křovinořezem u zdí a plotů. Trávu shrabeme,
              naložíme a odvezeme — nezůstane ležet v hromadách.
            </p>
          </li>
          <li className="task">
            <span className="task-month">Květen–září</span>
            <h3 className="task-name">Střih živých plotů</h3>
            <p className="task-text">
              Tújové i smíšené ploty srovnáme do roviny, tvarujeme koule a kužely.
              Ořez zpracujeme na štěpku nebo odvezeme.
            </p>
          </li>
          <li className="task">
            <span className="task-month">Celá sezóna</span>
            <h3 className="task-name">Záhony a plevel</h3>
            <p className="task-text">
              Odplevelení, okopání, mulčování kůrou. Trvalky a keře zastřihneme,
              aby záhon vypadal upraveně až do podzimu.
            </p>
          </li>
          <li className="task">
            <span className="task-month">Říjen–listopad</span>
            <h3 className="task-name">Podzimní úklid</h3>
            <p className="task-text">
              Vyhrabání listí, poslední seč, příprava zahrady na zimu.
              Bioodpad odvezeme, cestičky necháme čisté.
            </p>
          </li>
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-media">
          <img
            className="trust-photo"
            src="/section-1.webp"
            alt="Čerstvě posekaný trávník s ostrými okraji u domu"
            width={1200}
            height={900}
          />
          <img
            className="trust-photo trust-photo--small"
            src="/section-2.webp"
            alt="Tvarovaný živý plot a upravené záhony po zásahu"
            width={1200}
            height={900}
          />
        </div>

        <div className="trust-body">
          <p className="eyebrow">Proč lidé volají zrovna nám</p>
          <h2 id="trust-title" className="section-title">Místní firma, která přijede a domluví se</h2>
          <p className="trust-lede">
            Sídlíme ve Studenci na čísle 181. Nejsme řetězec — zahradu si přijdeme prohlédnout,
            řekneme, co dává smysl, a pak to uděláme. Když se něco změní, zavoláte a je hotovo.
          </p>

          <dl className="trust-points">
            <div>
              <dt>Vlastní technika</dt>
              <dd>Sekačky, křovinořezy, plotostřihy i drtič větví. Nic si nepůjčujeme na poslední chvíli.</dd>
            </div>
            <div>
              <dt>Odvoz bioodpadu</dt>
              <dd>Posekanou trávu, listí i ořez odvezeme sami. Nezůstane vám hromada u plotu.</dd>
            </div>
            <div>
              <dt>Pravidelné termíny</dt>
              <dd>Domluvíme si interval seče na celou sezónu, ať na nás nemusíte myslet.</dd>
            </div>
          </dl>

          <blockquote className="quote">
            „Bereme zahradu tak, jak byste ji chtěli mít vy — sečená tráva, rovný plot,
            čisté záhony a po nás uklizeno.“
            <cite>Zahradnické úpravy s.r.o., Studenec</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
