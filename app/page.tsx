import React from 'react';

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="hero-visual">
          <div className="insulation-cross-section">
            <div className="layer layer-cold">
              <span className="temp-indicator">-15°C</span>
            </div>
            <div className="layer layer-insulation">
              <div className="fiber-texture"></div>
              <div className="fiber-texture"></div>
              <div className="fiber-texture"></div>
            </div>
            <div className="layer layer-warm">
              <span className="temp-indicator">+22°C</span>
            </div>
          </div>
          <div className="hero-content">
            <h1 className="wordmark">CZ<span className="accent">IZOLACE</span></h1>
            <p className="hero-tagline">Průmyslové a stavební izolace v Ostravě od roku 2001</p>
            <a href="tel:602552864" className="hero-cta">Zavolat: 602 552 864</a>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="section-title">Co izolujeme</h2>
          <div className="service-grid">
            <div className="service-card industrial">
              <div className="service-icon">
                <div className="pipe-diagram">
                  <div className="pipe"></div>
                  <div className="insulation-wrap"></div>
                </div>
              </div>
              <h3>Průmyslové objekty</h3>
              <ul className="service-list">
                <li>Potrubní trasy a armatury</li>
                <li>Kotelny a výměníkové stanice</li>
                <li>Nádrže a zásobníky</li>
                <li>Vzduchotechniku a komíny</li>
                <li>Chladírenská zařízení</li>
              </ul>
              <div className="service-note">Snížení tepelných ztrát až o 85%</div>
            </div>
            <div className="service-card residential">
              <div className="service-icon">
                <div className="building-diagram">
                  <div className="wall"></div>
                  <div className="insulation-fill"></div>
                </div>
              </div>
              <h3>Stavební konstrukce</h3>
              <ul className="service-list">
                <li>Zateplení fasád</li>
                <li>Izolace střech a půd</li>
                <li>Podlahové systémy</li>
                <li>Tepelné mosty</li>
                <li>Protipožární izolace</li>
              </ul>
              <div className="service-note">Úspora nákladů na vytápění 30-50%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <h2 className="section-title">Proč CZ IZOLACE</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-number">23</div>
              <div className="trust-label">let zkušeností v oboru</div>
              <div className="trust-detail">Od roku 2001 izolujeme průmyslové i bytové objekty po celém Moravskoslezském kraji.</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">Ostrava</div>
              <div className="trust-label">lokální působnost</div>
              <div className="trust-detail">Rychlý dojezd po celé Ostravě a okolí. Známe zdejší průmyslové areály i panelové domy.</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">24h</div>
              <div className="trust-label">reakce na poptávku</div>
              <div className="trust-detail">Ozveme se do jednoho pracovního dne s nacenění a termínem realizace.</div>
            </div>
          </div>
          <div className="hiring-notice">
            <div className="hiring-badge">Nabíráme</div>
            <p>Hledáme izolatéry a klempíře se specializací na průmyslové izolace. Stabilní zázemí firmy, jisté platové podmínky.</p>
            <a href="tel:602552864">Volejte 602 552 864</a>
          </div>
        </div>
      </section>
    </>
  );
}