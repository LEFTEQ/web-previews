import React from 'react';

export default function Page() {
  return (
    <>
      <header className="hero">
        <div className="hero-logo">
          <span className="logo-mark">⚙</span>
          <h1 className="logo-text">BAKRIDE</h1>
          <span className="logo-subtitle">cykloservis liberec</span>
        </div>
        <div className="hero-content">
          <p className="hero-lead">Opravíme každé kolo.<br/>Od dětského po závodní.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">17</span>
              <span className="stat-label">let zkušeností</span>
            </div>
            <div className="stat">
              <span className="stat-value">24h</span>
              <span className="stat-label">běžná oprava</span>
            </div>
            <div className="stat">
              <span className="stat-value">602 255 255</span>
              <span className="stat-label">zavolejte nám</span>
            </div>
          </div>
        </div>
        <div className="chain-decoration" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </header>

      <section className="services">
        <div className="container">
          <h2 className="section-title">Co opravujeme</h2>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">⚒</span>
              <h3>Základní servis</h3>
              <p>Seřízení brzd a řazení, kontrola dotažení, promazání řetězu, nahuštění kol. Hotovo do druhého dne.</p>
              <span className="service-price">od 390 Kč</span>
            </div>
            <div className="service-card">
              <span className="service-icon">⚙</span>
              <h3>Velký servis</h3>
              <p>Kompletní rozebrání, vyčištění, výměna opotřebených dílů, seřízení celého kola. Kolo jako nové.</p>
              <span className="service-price">od 990 Kč</span>
            </div>
            <div className="service-card">
              <span className="service-icon">⚡</span>
              <h3>Expresní opravy</h3>
              <p>Defekt, prasklá duše, upadlý řetěz? Drobné opravy na počkání, abyste mohli hned pokračovat v jízdě.</p>
              <span className="service-price">od 150 Kč</span>
            </div>
            <div className="service-card featured">
              <span className="service-icon">🚲</span>
              <h3>Bazar kol</h3>
              <p>Prověřená použitá kola po servisu. Dětská od 3 900 Kč, horská od 7 900 Kč, silniční od 19 900 Kč.</p>
              <span className="service-price">záruka 6 měsíců</span>
            </div>
          </div>
          <div className="services-footer">
            <p>Parkování přímo před provozovnou • Součástky skladem • Možnost zapůjčení náhradního kola</p>
          </div>
        </div>
      </section>

      <section className="workshop">
        <div className="container">
          <h2 className="section-title">Proč k nám</h2>
          <div className="workshop-content">
            <div className="workshop-text">
              <div className="workshop-item">
                <span className="workshop-number">01</span>
                <div>
                  <h3>Opravdu rozumíme kolům</h3>
                  <p>Mechanici s certifikací Shimano a Bosch. Servisujeme všechny značky — Giant, Trek, Author, Specialized i ty méně známé. Poradíme s elektrokoly.</p>
                </div>
              </div>
              <div className="workshop-item">
                <span className="workshop-number">02</span>
                <div>
                  <h3>Férové ceny, žádné překvapení</h3>
                  <p>Před každou opravou řekneme přesnou cenu. Když najdeme něco navíc, zavoláme. Účtujeme jen skutečnou práci, žádné skryté poplatky.</p>
                </div>
              </div>
              <div className="workshop-item">
                <span className="workshop-number">03</span>
                <div>
                  <h3>Rychle a spolehlivě</h3>
                  <p>Běžný servis do 24 hodin. Na větší opravy zapůjčíme náhradní kolo zdarma. Najdete nás v Liberci na adrese Husova 37, kousek od centra.</p>
                </div>
              </div>
            </div>
            <div className="workshop-badge">
              <div className="badge-inner">
                <span className="badge-year">2007</span>
                <span className="badge-text">servisujeme</span>
                <span className="badge-location">v Liberci</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}