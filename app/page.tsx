export default function Page() {
  return (
    <main className="pt">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark">
              PROGRES<em>TECH</em>
              <span className="wordmark-sub">pracovní pomůcky · Ostrava</span>
            </span>
            <a className="hero-tel" href="tel:+420731616746">731 616 746</a>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-tick" aria-hidden="true"></span>
                Ortopedické pomůcky a pracovní vybavení
              </p>
              <h1>
                Tělo v práci drží celou směnu.
                <br />
                <strong>My držíme jeho.</strong>
              </h1>
              <p className="hero-lead">
                Ortopedické stélky, zdravotní obuv a pracovní oděvy, které padnou
                na první vyzkoušení. Prodejna v Ostravě-Hrabůvce, kde vám nohu
                skutečně změříme — ne jen prodáme krabici.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#sluzby">Co pro vás uděláme</a>
                <a className="btn btn-ghost" href="#duvera">Proč Progrestech</a>
              </div>
              <ul className="hero-facts" aria-label="Základní informace">
                <li><strong>Po–Pá</strong> 8:00–17:00</li>
                <li><strong>Krakovská 1095/33</strong> Ostrava-Hrabůvka</li>
                <li><strong>Od r. 2007</strong> na trhu</li>
              </ul>
            </div>

            <figure className="hero-figure">
              <img
                src="/hero.webp"
                alt="Ortopedická stélka a zdravotní pracovní obuv na prodejně Progrestech v Ostravě"
              />
              <figcaption className="hero-badge">
                <span className="badge-num">3 bodová</span>
                <span className="badge-txt">opora klenby v každé stélce, kterou doporučíme</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="arch-strip" aria-hidden="true">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,60 L0,52 C150,52 220,10 400,10 C560,10 640,44 800,44 C960,44 1060,20 1200,20 L1200,60 Z" />
          </svg>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <p className="eyebrow">
            <span className="eyebrow-tick" aria-hidden="true"></span>
            Nabídka
          </p>
          <h2 id="sluzby-h">Od paty po ramena — všechno, co vás v práci nese</h2>

          <div className="sluzby-grid">
            <article className="karta">
              <div className="karta-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <path d="M14 42c-3 0-5-2.5-5-6 0-5 3-8 6-13 2.5-4.2 3-9 3-13 0-3 2.5-6 7-6s9 3.5 9 10c0 6-3 10-6 15s-3 8-6 11c-1.8 1.7-4.5 2-8 2z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/>
                  <path d="M13 33c4-2 8-2 12 0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Ortopedické stélky na míru</h3>
              <p>
                Stélky SUPREMA, gelové i stříhací — vybereme podle klenby,
                váhy a toho, kolik hodin denně stojíte. Přijďte s botami,
                ve kterých pracujete, přizpůsobíme je přímo na prodejně.
              </p>
              <p className="karta-cena">od 168 Kč</p>
            </article>

            <article className="karta">
              <div className="karta-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <path d="M8 34V16c0-2 1.5-4 4-4h6l3 4h10c2.5 0 4 2 4 4v14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/>
                  <path d="M6 34h36v4c0 2-1.5 3-4 3H10c-2.5 0-4-1-4-3v-4z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Zdravotní a pracovní obuv</h3>
              <p>
                Certifikovaná obuv pro zdravotnictví, gastro i výrobu.
                Velikost ověříme podle skutečné délky chodidla, ne podle
                čísla na krabici — proto se k nám boty skoro nevrací.
              </p>
              <p className="karta-cena">vyzkoušíte na prodejně</p>
            </article>

            <article className="karta">
              <div className="karta-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <path d="M17 8l7 4 7-4 8 6-4 7-3-2v21H16V19l-3 2-4-7 8-6z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/>
                  <path d="M20 30h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Pracovní oděvy, šití a výšivky</h3>
              <p>
                Rondony pro kuchaře, stretchové kalhoty a blůzy CXS,
                zakázkové šití podle vašich měr. Logo firmy vyšijeme nebo
                potiskneme — technologii doporučíme podle materiálu.
              </p>
              <p className="karta-cena">kalkulace do 2 dnů</p>
            </article>
          </div>

          <div className="sluzby-pruh">
            <img
              src="/section-1.webp"
              alt="Výběr ortopedických stélek a měření chodidla na prodejně Progrestech"
            />
            <div className="pruh-text">
              <h3>Náhradní plnění pro firmy</h3>
              <p>
                Odebíráte pracovní oděvy a pomůcky pro celý provoz? Poskytujeme
                náhradní plnění — splníte zákonný podíl zaměstnávání OZP nákupem
                vybavení, které stejně potřebujete. Doklady připravíme my.
              </p>
              <a className="link-arrow" href="tel:+420731616746">Zavolat a domluvit odběr →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <div className="duvera-grid">
            <figure className="duvera-figure">
              <img
                src="/section-2.webp"
                alt="Prodejna Progrestech v Ostravě-Hrabůvce s pracovními oděvy a obuví"
              />
            </figure>
            <div className="duvera-copy">
              <p className="eyebrow">
                <span className="eyebrow-tick" aria-hidden="true"></span>
                Prodejna Ostrava-Hrabůvka
              </p>
              <h2 id="duvera-h">Kamenná prodejna, kde si všechno vyzkoušíte</h2>
              <p>
                Krakovská 1095/33, každý všední den 8:00–17:00. Přijďte,
                projdeme s vámi velikosti, stélky vložíme rovnou do vašich bot
                a oděvy upravíme, aby seděly. Firmám vozíme vzorky přímo do provozu.
              </p>
              <ul className="duvera-body" aria-label="Proč k nám zákazníci chodí">
                <li>
                  <strong>Změříme, nedohadujeme.</strong> Velikost obuvi i oděvů
                  určíme podle tabulek a skutečných měr, ne odhadem.
                </li>
                <li>
                  <strong>Známe směnný provoz.</strong> Vybavujeme kuchyně, sklady
                  i ordinace po celém Ostravsku — víme, co vydrží dvanáctku.
                </li>
                <li>
                  <strong>Jedno jednání, jeden člověk.</strong> Od poptávky po
                  výšivku loga s vámi řeší zakázku stále stejný kontakt.
                </li>
              </ul>
            </div>
          </div>

          <div className="reference" aria-label="Reference zákazníků">
            <blockquote>
              <p>
                „Profesionálně ušité kuchařské rondony od firmy Progrestech
                nejlépe reprezentují naši firmu při cateringových akcích.“
              </p>
              <footer>— Jan Klimoszek, majitel cateringové firmy</footer>
            </blockquote>
            <blockquote>
              <p>
                „Kvalitní pracovní oděvy, rychlost a osobní jednání jsou důvody
                naší dlouholeté spolupráce s firmou Progrestech.“
              </p>
              <footer>— Jana Drastíchová, dlouholetá zákaznice</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
