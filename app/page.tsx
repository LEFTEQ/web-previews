export default function Page() {
  return (
    <main className="gw">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="LADY W styl, galanterie Olomouc">
            <span className="brand-mark" aria-hidden="true">
              {/* knoflík se čtyřmi dírkami — wordmark symbol */}
              <svg viewBox="0 0 40 40" width="34" height="34" role="img" aria-hidden="true">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="16" cy="16" r="1.8" fill="currentColor" />
                <circle cx="24" cy="16" r="1.8" fill="currentColor" />
                <circle cx="16" cy="24" r="1.8" fill="currentColor" />
                <circle cx="24" cy="24" r="1.8" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              LADY&nbsp;W <em>styl</em>
            </span>
            <span className="brand-tag">galanterie · Olomouc</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Nitě, knoflíky,</span>
            <span className="hero-line hero-line-2">zipy, prýmky —</span>
            <span className="hero-line hero-line-3">
              všechno, co&nbsp;drží <span className="stitched">šití pohromadě</span>.
            </span>
          </h1>

          <p className="hero-sub">
            Kamenná galanterie v&nbsp;Olomouci. Poradíme s&nbsp;výběrem nitě ke&nbsp;konkrétní
            látce, zkrátíme zip na&nbsp;míru a&nbsp;najdeme knoflík, který vám chybí do&nbsp;páru.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#sortiment">Co u&nbsp;nás najdete</a>
            <a className="btn btn-ghost" href="#obchod">Kde nás najdete</a>
          </div>
        </div>

        {/* signature: běžící steh napříč hero sekcí */}
        <div className="hero-stitch" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              className="stitch-path"
              d="M -10 70 C 150 20, 300 110, 460 60 S 760 20, 920 75 S 1130 40, 1220 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="18 14"
            />
          </svg>
        </div>
      </header>

      {/* ================= SORTIMENT ================= */}
      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="section-head">
          <span className="eyebrow">Sortiment</span>
          <h2 id="sortiment-h">Regály plné drobností, které jinde nevedou</h2>
          <p className="section-lead">
            Šijete, pletete, opravujete nebo tvoříte? Vedeme metráž drobného zboží,
            které e-shopy prodávají jen po&nbsp;balících — u&nbsp;nás koupíte přesně tolik,
            kolik potřebujete.
          </p>
        </div>

        <ul className="grid">
          <li className="card">
            <span className="card-swatch swatch-nit" aria-hidden="true"></span>
            <h3>Nitě a&nbsp;příze</h3>
            <p>
              Polyesterové i&nbsp;bavlněné nitě ve&nbsp;stovkách odstínů. Přineste kousek
              látky a&nbsp;odstín vám vybereme přímo u&nbsp;pultu, na&nbsp;denním světle.
            </p>
          </li>
          <li className="card">
            <span className="card-swatch swatch-zip" aria-hidden="true"></span>
            <h3>Zipy na&nbsp;míru</h3>
            <p>
              Spirálové, kostěné i&nbsp;kovové zipy. Zkrátíme na&nbsp;počkání na&nbsp;přesnou
              délku — do&nbsp;bundy, kalhot i&nbsp;povlečení.
            </p>
          </li>
          <li className="card">
            <span className="card-swatch swatch-knoflik" aria-hidden="true"></span>
            <h3>Knoflíky a&nbsp;zapínání</h3>
            <p>
              Od&nbsp;perleťových košilových po&nbsp;kovové džínové. Chybí vám jeden
              do&nbsp;řady? Vezměte vzor s&nbsp;sebou, zkusíme najít shodu.
            </p>
          </li>
          <li className="card">
            <span className="card-swatch swatch-prymek" aria-hidden="true"></span>
            <h3>Stuhy, prýmky, krajky</h3>
            <p>
              Saténové stuhy, paspulky, hotové lemovky a&nbsp;paličkované krajky.
              Stříháme po&nbsp;deseti centimetrech.
            </p>
          </li>
          <li className="card">
            <span className="card-swatch swatch-guma" aria-hidden="true"></span>
            <h3>Gumy a&nbsp;vycpávky</h3>
            <p>
              Prádlové gumy všech šířek, ramenní vycpávky, kostice a&nbsp;výztuhy.
              Základ každé opravy i&nbsp;nového střihu.
            </p>
          </li>
          <li className="card">
            <span className="card-swatch swatch-jehla" aria-hidden="true"></span>
            <h3>Jehly a&nbsp;nářadí</h3>
            <p>
              Ruční i&nbsp;strojové jehly, páráčky, křídy, metry a&nbsp;nůžky, které opravdu
              stříhají. Poradíme, jaká jehla patří k&nbsp;jaké látce.
            </p>
          </li>
        </ul>
      </section>

      {/* ================= OBCHOD / DŮVĚRA ================= */}
      <section className="obchod" id="obchod" aria-labelledby="obchod-h">
        <div className="obchod-inner">
          <div className="obchod-text">
            <span className="eyebrow eyebrow-light">Kamenný obchod</span>
            <h2 id="obchod-h">Pult, u&nbsp;kterého se ptát není ostuda</h2>
            <p>
              Galanterie je řemeslo drobných rad: jaká nit unese džínovinu, jak dlouhý
              zip do&nbsp;sukně, kolik gumy do&nbsp;pasu. Za&nbsp;pultem u&nbsp;nás stojí lidé,
              kteří sami šijí — a&nbsp;rádi se s&nbsp;vámi o&nbsp;zkušenost podělí.
            </p>
            <p>
              Najdete nás v&nbsp;centru Olomouce, pár kroků od&nbsp;tramvaje. Přijďte
              s&nbsp;rozešitou věcí v&nbsp;tašce — vybírat drobné zboží naživo je rychlejší
              než listovat e-shopem.
            </p>

            <ul className="promises">
              <li>
                <strong>Odstín k&nbsp;látce</strong>
                Nit vybíráme přímo k&nbsp;vašemu materiálu, ne&nbsp;podle katalogového čísla.
              </li>
              <li>
                <strong>Zip zkrátíme na&nbsp;počkání</strong>
                Přineste starý zip jako vzor, odejdete s&nbsp;přesnou délkou.
              </li>
              <li>
                <strong>Prodáváme po&nbsp;kusech</strong>
                Jeden knoflík, půl metru gumy, deset centimetrů krajky — bez&nbsp;minimálního odběru.
              </li>
            </ul>
          </div>

          <blockquote className="quote">
            <p>
              „Sháněla jsem knoflík k&nbsp;padesát let starému kabátu po&nbsp;babičce.
              Paní za&nbsp;pultem vytáhla krabici, půl hodiny jsme hledaly — a&nbsp;našly.
              To&nbsp;vám žádný e-shop neudělá.“
            </p>
            <footer className="quote-by">— zákaznice z&nbsp;Olomouce, oprava kabátu</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
