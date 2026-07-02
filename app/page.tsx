export default function Page() {
  return (
    <main className="hn-page">
      {/* ===================== HERO ===================== */}
      <header className="hn-hero">
        <div className="hn-hero-inner">
          <div className="hn-topbar">
            <div className="hn-wordmark" aria-label="Hoch a synové 1899">
              <span className="hn-wordmark-main">HOCH</span>
              <span className="hn-wordmark-amp">&amp;</span>
              <span className="hn-wordmark-main">SYNOVÉ</span>
              <span className="hn-wordmark-year">1899</span>
            </div>
            <a className="hn-topbar-tel" href="tel:+420386351314">
              386 351 314
            </a>
          </div>

          <div className="hn-hero-stage">
            <p className="hn-hero-eyebrow">
              Světelná a neonová reklama · České Budějovice
            </p>
            <h1 className="hn-hero-title">
              <span className="hn-neon-line hn-neon-1">Vaše firma</span>
              <span className="hn-neon-line hn-neon-2">bude vidět.</span>
              <span className="hn-neon-line hn-neon-3 hn-neon-glow">
                I&nbsp;po&nbsp;setmění.
              </span>
            </h1>
            <p className="hn-hero-lead">
              Neony, světelné nápisy a smaltované tabule vyrábíme na Vltavském
              nábřeží od roku 1899. Čtyři generace, jedna dílna, celý jih Čech
              prosvícený naší prací.
            </p>
            <div className="hn-hero-actions">
              <a className="hn-btn hn-btn-neon" href="tel:+420386351314">
                Zavolat do dílny
              </a>
              <a className="hn-btn hn-btn-ghost" href="mailto:romana@hoch.cz">
                Napsat poptávku
              </a>
            </div>
          </div>

          <div className="hn-hero-strip" aria-hidden="true">
            <span>VÝROBA</span>
            <span className="hn-strip-dot">●</span>
            <span>MONTÁŽ</span>
            <span className="hn-strip-dot">●</span>
            <span>SERVIS</span>
            <span className="hn-strip-dot">●</span>
            <span>OD ROKU 1899</span>
          </div>
        </div>
      </header>

      {/* ===================== ŘEMESLA ===================== */}
      <section className="hn-crafts" aria-labelledby="hn-crafts-title">
        <div className="hn-section-inner">
          <p className="hn-eyebrow">Co v dílně vyrábíme</p>
          <h2 className="hn-section-title" id="hn-crafts-title">
            Tři řemesla pod jednou střechou
          </h2>

          <div className="hn-craft-grid">
            <article className="hn-craft hn-craft-neon">
              <div className="hn-craft-sign" aria-hidden="true">
                <span className="hn-sign-tube">NEON</span>
              </div>
              <h3>Světelná a neonová reklama</h3>
              <p>
                Ohýbané skleněné trubice i moderní LED nápisy. Navrhneme,
                vyrobíme a namontujeme světelný nápis, který uvidí každý, kdo
                večer projde kolem vaší provozovny.
              </p>
              <p className="hn-craft-contact">
                František Vyhnal ·{" "}
                <a href="tel:+420602175675">602 175 675</a>
              </p>
            </article>

            <article className="hn-craft hn-craft-smalt">
              <div className="hn-craft-sign hn-craft-sign-smalt" aria-hidden="true">
                <span className="hn-sign-enamel">SMALT</span>
              </div>
              <h3>Smaltované tabule a cedule</h3>
              <p>
                Klasika, která vydrží dekády venku bez vyblednutí. Domovní
                čísla, firemní štíty i orientační tabule — vypálené ve smaltu
                jako za první republiky.
              </p>
              <p className="hn-craft-contact">
                Romana Grohmanová ·{" "}
                <a href="tel:+420724042977">724 042 977</a>
              </p>
            </article>

            <article className="hn-craft hn-craft-tisk">
              <div className="hn-craft-sign hn-craft-sign-tisk" aria-hidden="true">
                <span className="hn-sign-print">TISK</span>
              </div>
              <h3>Velkoplošný tisk</h3>
              <p>
                Bannery, plachty, polepy výloh a aut. Tiskneme ve velkém
                formátu přímo v Budějovicích — bez čekání na dopravu odjinud a
                s kontrolou barev na místě.
              </p>
              <p className="hn-craft-contact">
                František Hanzal ·{" "}
                <a href="tel:+420602557745">602 557 745</a>
              </p>
            </article>
          </div>

          <div className="hn-service-note">
            <p>
              <strong>Nesvítí vám reklama?</strong> Servisujeme světelné i
              nesvětelné reklamy po celém Jihočeském kraji — i ty, které jsme
              nevyráběli my.
            </p>
            <a className="hn-btn hn-btn-small" href="tel:+420725732766">
              Servis: Václav Kotyza, 725 732 766
            </a>
          </div>
        </div>
      </section>

      {/* ===================== DŮVĚRA / HISTORIE ===================== */}
      <section className="hn-trust" aria-labelledby="hn-trust-title">
        <div className="hn-section-inner">
          <p className="hn-eyebrow hn-eyebrow-light">Proč u nás</p>
          <h2 className="hn-section-title hn-title-light" id="hn-trust-title">
            Řemeslo předáváme z otce na syna od roku 1899
          </h2>

          <div className="hn-timeline" role="list">
            <div className="hn-timeline-item" role="listitem">
              <span className="hn-timeline-year">1899</span>
              <p>
                Zakladatel firmy otevírá dílnu na výrobu firemních štítů
                v Českých Budějovicích. Jméno Hoch se objevuje na cedulích po
                celém městě.
              </p>
            </div>
            <div className="hn-timeline-item" role="listitem">
              <span className="hn-timeline-year">1930</span>
              <p>
                Do nabídky přibývá tehdejší novinka — neonové trubice. Večerní
                Budějovice začínají svítit i naší prací.
              </p>
            </div>
            <div className="hn-timeline-item" role="listitem">
              <span className="hn-timeline-year">1992</span>
              <p>
                Rodina obnovuje živnost pod jménem Hoch a synové. Dílna se
                vrací na Vltavské nábřeží, kde ji najdete dodnes.
              </p>
            </div>
            <div className="hn-timeline-item" role="listitem">
              <span className="hn-timeline-year">Dnes</span>
              <p>
                Vedle klasického neonu a smaltu děláme LED techniku a
                velkoplošný tisk. Zavoláte, přijedeme, zaměříme — a vyrobíme.
              </p>
            </div>
          </div>

          <div className="hn-trust-facts">
            <div className="hn-fact">
              <span className="hn-fact-value">125+</span>
              <span className="hn-fact-label">let řemesla v jedné rodině</span>
            </div>
            <div className="hn-fact">
              <span className="hn-fact-value">3</span>
              <span className="hn-fact-label">
                dílny na jedné adrese: neon, smalt, tisk
              </span>
            </div>
            <div className="hn-fact">
              <span className="hn-fact-value">ČB</span>
              <span className="hn-fact-label">
                Vltavské nábřeží 3, České Budějovice
              </span>
            </div>
          </div>

          <p className="hn-trust-quote">
            „Neon, který jsme pověsili v devadesátých letech, svítí dodnes.
            Když se něco pokazí, přijedeme — to je celá naše reklama.“
          </p>
        </div>
      </section>
    </main>
  );
}
