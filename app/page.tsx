export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Angličtina jinak</div>
          <h1 className="hero-title">
            <span className="hero-title-main">Level Up</span>
            <span className="hero-title-sub">Your English</span>
          </h1>
          <p className="hero-desc">Učení angličtiny skrz hry, příběhy a kreativitu. Pro studenty od 5. třídy a dospělé v Hradci Králové.</p>
          <div className="hero-levels">
            <div className="level-pill">D&amp;D</div>
            <div className="level-pill">Storytelling</div>
            <div className="level-pill">Divadlo</div>
            <div className="level-pill">Příprava na zkoušky</div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/hero.webp" alt="Studenti Next Level English při kreativní výuce angličtiny" className="hero-img" />
        </div>
      </section>

      <section className="courses">
        <div className="section-container">
          <h2 className="section-heading">Vyber si svou cestu</h2>
          <p className="section-intro">Každý kurz rozvíjí angličtinu skrz konkrétní kreativní metodu. Malé skupiny, individuální zpětná vazba, progres každé pololetí.</p>
          
          <div className="course-grid">
            <article className="course-card">
              <div className="course-header">
                <div className="course-icon">🎲</div>
                <div className="course-meta">
                  <span className="course-level">Level 1–∞</span>
                </div>
              </div>
              <h3 className="course-title">D&amp;D / Roleplay</h3>
              <p className="course-desc">Dungeons &amp; Dragons a vlastní hry na hrdiny. Rozvíjíš kritické myšlení, týmovou práci a angličtinu v gamifikovaném prostředí. Skupina „Dare