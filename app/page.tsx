import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Kompletní rekonstrukce na klíč",
      body:
        "Od bourání staré koupelny přes rozvody vody a odpady až po poslední spáru. Vy řeknete termín, my hlídáme řemeslníky, materiál i úklid. Předáme hotovou místnost, do které stačí přinést ručníky.",
      detail: "Bourání · Rozvody · Obklady · Sanita",
    },
    {
      code: "02",
      title: "Obklady a dlažba",
      body:
        "Velkoformát, mozaika, dekory na míru. Řežeme na gér, dbáme na rovinu spár a napojení v rozích. Právě tady se pozná, jestli koupelnu dělal řemeslník, nebo někdo, kdo spěchal.",
      detail: "Velkoformát · Mozaika · Bezespáré přechody",
    },
    {
      code: "03",
      title: "Sprchový kout a hydroizolace",
      body:
        "Bezbariérové vpusti, spádování do sifonu, poctivá stěrková izolace pod obklad. Sprcha, která po pěti letech nezatéká sousedům pod strop.",
      detail: "Spádování · Stěrková izolace · Lineární žlaby",
    },
    {
      code: "04",
      title: "Instalace a sanita",
      body:
        "Závěsná WC, podomítkové nádržky, umyvadla, baterie a topné žebříky. Voda, odpad i elektrika schované ve zdi, ovládání po ruce.",
      detail: "Podomítkové systémy · Baterie · Topné žebříky",
    },
  ];

  const steps = [
    {
      n: "Zaměření v Brně",
      t: "Přijedu k vám domů",
      d: "Změřím místnost, projdeme rozvody a vaše představy. Do pár dní máte cenovou nabídku položku po položce — žádná čísla z klobouku.",
    },
    {
      n: "Jeden termín",
      t: "Vím, kdy skončím",
      d: "Dostanete harmonogram s datem předání. Držím ho — a když se objeví skryté potrubí za zdí, hned vám zavolám, ne až u vyúčtování.",
    },
    {
      n: "Předání a záruka",
      t: "Uklizeno, funguje",
      d: "Po sobě uklidím, vyzkoušíme baterie a odtoky spolu. Na práci dávám záruku a telefon zvedám i potom.",
    },
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Rostislav Vašina — rekonstrukce koupelen">
          <span className="wordmark__name">Vašina</span>
          <span className="wordmark__trade">koupelny · Brno</span>
        </a>
        <a className="top__call" href="tel:+420605112233">
          <span className="top__calldot" aria-hidden="true" />
          Zavolat
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grout" aria-hidden="true">
          {Array.from({ length: 96 }).map((_, i) => (
            <span
              key={i}
              className="tile"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Rekonstrukce koupelen na klíč · Brno a okolí</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">Stará koupelna</span>
            <span className="hero__line hero__line--accent">ráno.</span>
            <span className="hero__line">Nová</span>
            <span className="hero__line hero__line--accent">za tři týdny.</span>
          </h1>
          <p className="hero__lead">
            Jsem Rostislav Vašina a v Brně předělávám koupelny od základu — od bourání a
            rozvodů po poslední obklad na gér. Jeden termín, jeden člověk, který za to ručí.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420605112233">Zavolat a domluvit zaměření</a>
            <a className="btn btn--ghost" href="mailto:vasina@koupelnybrno.cz">Napsat e-mail</a>
          </div>
        </div>

        <dl className="hero__facts">
          <div className="fact">
            <dt>Zaměření</dt>
            <dd>zdarma u vás doma</dd>
          </div>
          <div className="fact">
            <dt>Termín</dt>
            <dd>datum předání předem</dd>
          </div>
          <div className="fact">
            <dt>Kde</dt>
            <dd>Brno-město i venkov</dd>
          </div>
        </dl>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Co u vás udělám</p>
          <h2 id="services-title" className="section-head__title">
            Celá koupelna, nebo jen ta část, co zlobí.
          </h2>
          <p className="section-head__note">
            Beru zakázku od demolice po úklid, ale klidně přijdu i vyměnit sprchový kout.
            Řeknete co, já poradím jak.
          </p>
        </div>

        <ol className="cards">
          {services.map((s) => (
            <li key={s.code} className="card">
              <span className="card__code">{s.code}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Jak to spolu proběhne</p>
          <h2 id="trust-title" className="section-head__title">
            Bez překvapení na konci. To slibuju.
          </h2>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <article key={step.n} className="step">
              <span className="step__mark" aria-hidden="true">{`0${i + 1}`}</span>
              <p className="step__phase">{step.n}</p>
              <h3 className="step__title">{step.t}</h3>
              <p className="step__body">{step.d}</p>
            </article>
          ))}
        </div>

        <blockquote className="quote">
          <p>
            „Panelák v Bystrci, koupelna tři a půl metru. Přišel, zaměřil, řekl datum — a v ten
            den bylo hotovo. Spáry rovné jak podle pravítka.“
          </p>
          <cite>— Jana H., Brno-Bystrc</cite>
        </blockquote>
      </section>
    </main>
  );
}
