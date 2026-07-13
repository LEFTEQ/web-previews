export default function Page() {
  const lessons = [
    {
      label: "Jeden na jednoho",
      title: "Individuální výuka",
      text: "Celá lekce patří vám. Procvičíme přesně to, co potřebujete pro práci, cestování nebo běžný rozhovor.",
      detail: "Osobně v Hradci Králové i online",
    },
    {
      label: "Společný rytmus",
      title: "Kurz v malé skupince",
      text: "Bez anonymní učebny. Dost prostoru na mluvení, okamžitou zpětnou vazbu a témata, která skupinu opravdu zajímají.",
      detail: "Praktická konverzace bez zbytečné teorie",
    },
    {
      label: "Angličtina v pohybu",
      title: "Konverzace po telefonu",
      text: "Krátké pravidelné hovory pomáhají odbourat ostych a dostat angličtinu přirozeně do běžného týdne.",
      detail: "Jednoduše, odkudkoliv a bez kamery",
    },
  ];

  return (
    <main className="school-page">
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#zacatek" aria-label="Angličtina IN — úvod">
          <span>angličtina</span>
          <strong>/IN/</strong>
        </a>
        <nav className="site-nav" aria-label="Navigace stránky">
          <a href="#lekce">Jak učím</a>
          <a href="#zuzana">O Zuzaně</a>
        </nav>
        <a className="header-phone" href="tel:+420724452922">Zavolat</a>
      </header>

      <section className="hero" id="zacatek" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Angličtina v Hradci Králové • osobně i online</p>
          <h1 id="hero-title">
            Mluvte.
            <span className="corrected-word">Chybujte.</span>
            Pokračujte.
          </h1>
          <p className="hero-lead">
            Individuální angličtina se Zuzanou Pražákovou. Bez čekání, až na vás přijde řada — celou lekci mluvíte, zkoušíte a dostáváte srozumitelnou zpětnou vazbu.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:anglictinaIN@email.cz?subject=Mám%20zájem%20o%20lekci%20angličtiny">Napsat Zuzaně</a>
            <a className="text-link" href="#lekce">Vybrat způsob výuky <span aria-hidden="true">↓</span></a>
          </div>
          <p className="fresh-note">Informace k výuce aktualizovány v červenci 2026</p>
        </div>

        <div className="hero-visual">
          <div className="image-frame hero-image-frame">
            <img src="/hero.webp" alt="Zuzana Pražáková při individuální lekci angličtiny" />
          </div>
          <div className="lesson-note" aria-label="Výhoda individuální výuky">
            <span className="note-mark">100 %</span>
            <span>pozornosti<br />jen pro vás</span>
          </div>
          <div className="pronunciation-tag" aria-hidden="true">
            <span>mistake</span>
            <b>/mɪˈsteɪk/</b>
            <i>je součást učení</i>
          </div>
        </div>
      </section>

      <section className="lessons-section" id="lekce" aria-labelledby="lessons-title">
        <div className="section-heading">
          <p className="eyebrow">Vyberte si, kde se vám mluví nejlépe</p>
          <h2 id="lessons-title">Angličtina, která se vejde do vašeho života.</h2>
          <p>Od úplných začátků po jistější projev na úrovni B2. Obsah i tempo přizpůsobíme tomu, kam se chcete dostat.</p>
        </div>

        <div className="lessons-layout">
          <div className="section-image-wrap">
            <img src="/section-1.webp" alt="Studijní materiály a poznámky připravené pro lekci angličtiny" />
            <p><strong>Moderní knihovna</strong> knih, e-knih a poslechů podle toho, co vás baví.</p>
          </div>

          <div className="lesson-list">
            {lessons.map((lesson) => (
              <article className="lesson-card" key={lesson.title}>
                <p className="lesson-label">{lesson.label}</p>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
                <span>{lesson.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="zuzana" aria-labelledby="about-title">
        <div className="about-image">
          <img src="/section-2.webp" alt="Lektorka Zuzana Pražáková v příjemném prostředí pro výuku" />
          <div className="experience-stamp" aria-label="Více než 15 let zkušeností s výukou">
            <strong>15+</strong>
            <span>let výuky</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">Zuzana Pražáková • vaše lektorka</p>
          <h2 id="about-title">Z hodiny odejdete s jasnější hlavou, ne s delším seznamem pouček.</h2>
          <p className="about-intro">
            Sama se učím další jazyky, takže dobře znám chvíle, kdy slovíčko nejde ven a gramatika nedává smysl. Všechno rozložím na malé, zvládnutelné kroky a vysvětlím lidsky.
          </p>

          <div className="trust-grid">
            <div>
              <strong>Okamžitá zpětná vazba</strong>
              <p>Chybu opravíme ve chvíli, kdy vznikne — srozumitelně a bez shazování.</p>
            </div>
            <div>
              <strong>Výuka i mimo lavici</strong>
              <p>Konverzace může pokračovat při procházce, vaření nebo objevování Hradce.</p>
            </div>
            <div>
              <strong>Technologie bez překážek</strong>
              <p>Stovky online hodin znamenají hladké spojení a nástroje, které učení skutečně usnadní.</p>
            </div>
          </div>

          <blockquote>
            „Když se student uvolní, zasměje a začne mluvit, využili jsme společný čas správně.“
          </blockquote>
          <p className="quote-credit">— Zuzana Pražáková, Angličtina IN</p>
        </div>
      </section>
    </main>
  );
}
