const courses = [
  {
    label: "Pro pravidelný pokrok",
    title: "Skupinové kurzy",
    text: "Angličtina, němčina a další jazyky v malé skupině, kde se dostanete ke slovu při každé lekci.",
    detail: "Výuka v Hradci Králové",
  },
  {
    label: "Pro vlastní tempo",
    title: "Individuální výuka",
    text: "Lekce postavené kolem vašeho cíle — pracovní schůzky, cestování, maturita nebo jistější konverzace.",
    detail: "Prezenčně i online",
  },
  {
    label: "Pro celý tým",
    title: "Firemní výuka",
    text: "Praktický jazyk pro zaměstnance podle oboru, reálných situací a úrovně jednotlivých skupin.",
    detail: "Program na míru firmě",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#zacatek" aria-label="Lingva — úvod">
            <span className="wordmark-main">lingva</span>
            <span className="wordmark-note">jazyková škola · Hradec Králové</span>
          </a>

          <div className="nav-links">
            <a href="#kurzy">Kurzy</a>
            <a href="#skola">O škole</a>
            <a className="nav-action" href="mailto:info@lingva.cz?subject=Zájem%20o%20jazykový%20kurz">
              Zapsat se
            </a>
          </div>
        </nav>

        <div className="hero-grid" id="zacatek">
          <div className="hero-copy">
            <p className="eyebrow">Jazyková škola Mgr. Miloše Nouzovského</p>
            <h1 id="hero-title">
              Neučíme vás jen slovíčka.
              <span>Učíme vás promluvit.</span>
            </h1>
            <p className="hero-intro">
              Kurzy v Hradci Králové, ve kterých jazyk skutečně používáte. Ve skupině, individuálně,
              online i přímo ve vaší firmě.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#kurzy">Vybrat si kurz</a>
              <a className="text-link" href="tel:+420775600780">Zavolat +420 775 600 780</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="language-stack" aria-hidden="true">
              <span>Hello</span>
              <span>Hallo</span>
              <span>Ciao</span>
              <strong>Ahoj!</strong>
            </div>
            <div className="hero-photo-frame">
              <img
                src="/hero.webp"
                alt="Studenti jazykové školy Lingva při společné konverzaci"
                width="960"
                height="1120"
              />
              <div className="photo-caption">
                <span>Nejdůležitější pomůcka</span>
                <strong>vlastní hlas</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courses" id="kurzy" aria-labelledby="courses-title">
        <div className="section-heading">
          <p className="eyebrow">Jak chcete studovat?</p>
          <h2 id="courses-title">Najděte výuku, která se vejde do vašeho života.</h2>
          <p>
            Začnete na své skutečné úrovni a budete pracovat na situacích, ve kterých jazyk potřebujete.
          </p>
        </div>

        <div className="courses-layout">
          <div className="course-image">
            <img
              src="/section-1.webp"
              alt="Lektorka vede praktickou jazykovou lekci v malé skupině"
              width="900"
              height="1080"
              loading="lazy"
            />
            <p><strong>Malé skupiny.</strong> Více prostoru mluvit, ptát se a zkoušet.</p>
          </div>

          <div className="course-list">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <p className="course-label">{course.label}</p>
                <h3>{course.title}</h3>
                <p>{course.text}</p>
                <div className="course-meta">
                  <span>{course.detail}</span>
                  <a href={`mailto:info@lingva.cz?subject=${encodeURIComponent(`Zájem: ${course.title}`)}`}>
                    Zeptat se na termín <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="skola" aria-labelledby="trust-title">
        <div className="trust-image">
          <img
            src="/section-2.webp"
            alt="Studentka pracuje s výukovými materiály jazykové školy Lingva"
            width="1200"
            height="900"
            loading="lazy"
          />
          <div className="location-stamp" aria-label="Malé náměstí, Hradec Králové">
            <span>50°12′ N</span>
            <strong>Malé náměstí</strong>
            <span>Hradec Králové</span>
          </div>
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Cíl je váš. Příprava je naše.</p>
          <h2 id="trust-title">Od prvního rozhovoru až ke zkoušce.</h2>
          <p className="trust-lead">
            Lingva propojuje osobní vedení s konkrétním výsledkem. Než začnete, pomůžeme vám určit
            úroveň. Potom víte, co trénujete a proč.
          </p>

          <div className="proof-grid">
            <article>
              <span className="proof-mark" aria-hidden="true">Aa</span>
              <h3>Přesný začátek</h3>
              <p>Oxford online placement test a rozřazovací testy ukážou, kam patříte.</p>
            </article>
            <article>
              <span className="proof-mark" aria-hidden="true">B2</span>
              <h3>Uznávané zkoušky</h3>
              <p>Příprava na YLE, B1 Preliminary, B2 First, C1 Advanced, BEC i ICAO.</p>
            </article>
            <article>
              <span className="proof-mark" aria-hidden="true">↔</span>
              <h3>Jazyk v praxi</h3>
              <p>Konverzace s rodilými mluvčími, překlady a tlumočení pro reálné situace.</p>
            </article>
          </div>

          <address className="school-address">
            <span>Najdete nás v centru města</span>
            <strong>Malé náměstí 14/30, 500 03 Hradec Králové</strong>
          </address>
        </div>
      </section>
    </main>
  );
}
