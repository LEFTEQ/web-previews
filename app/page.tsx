export default function Page() {
  return (
    <main className="zh">
      {/* ===== HERO ===== */}
      <header className="zh-hero">
        <div className="zh-hero__media">
          <img
            src="/hero.webp"
            alt="Zahradnictví SCONTO v Ústí nad Labem — skleník plný sazenic a květin"
            className="zh-hero__img"
          />
          <div className="zh-hero__scrim" aria-hidden="true" />
        </div>

        <div className="zh-hero__inner">
          <div className="zh-brand">
            <span className="zh-brand__mark" aria-hidden="true">
              {/* originální wordmark – lísteček */}
              <svg viewBox="0 0 32 32" width="30" height="30" role="img" aria-hidden="true">
                <path
                  d="M26 6C14 6 7 13 6 25c11 1 19-5 20-19z"
                  fill="#4A7A3A"
                />
                <path
                  d="M8 24C12 16 18 11 24 8"
                  fill="none"
                  stroke="#EAF3E2"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="zh-brand__word">
              SCONTO<em>&nbsp;zahradnictví</em>
            </span>
          </div>

          <p className="zh-hero__eyebrow">Ústí nad Labem · Skleníky otevřené celý rok</p>

          <h1 className="zh-hero__title">
            Sazenice, které <span className="zh-hero__accent">u nás vyrostly</span>.
            <br />
            Ne&nbsp;přeložené z&nbsp;kamionu.
          </h1>

          <p className="zh-hero__lead">
            Pěstujeme ve vlastních sklenících nad Labem — zelenina, trvalky, balkónovky
            i&nbsp;ovocné stromky zvyklé na severočeské počasí. Poradíme vám přímo mezi záhony,
            ne od pultu.
          </p>

          <div className="zh-hero__cta">
            <a href="#nabidka" className="zh-btn zh-btn--primary">
              Co teď sázíme
            </a>
            <a href="#zahradnici" className="zh-btn zh-btn--ghost">
              Poznejte naše zahradníky
            </a>
          </div>

          {/* signature: sezónní páska — kalendář zahradníka */}
          <div className="zh-season" role="list" aria-label="Zahradnický rok — co právě řešíme">
            <div className="zh-season__item" role="listitem">
              <span className="zh-season__month">BŘE–KVĚ</span>
              <span className="zh-season__what">předpěstovaná zelenina</span>
            </div>
            <div className="zh-season__item zh-season__item--now" role="listitem">
              <span className="zh-season__month">KVĚ–SRP</span>
              <span className="zh-season__what">balkónovky &amp; trvalky</span>
            </div>
            <div className="zh-season__item" role="listitem">
              <span className="zh-season__month">ZÁŘ–LIS</span>
              <span className="zh-season__what">ovocné stromky, cibuloviny</span>
            </div>
            <div className="zh-season__item" role="listitem">
              <span className="zh-season__month">PRO–ÚNO</span>
              <span className="zh-season__what">plány záhonů, řez ovocných</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="zh-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="zh-section__head">
          <p className="zh-eyebrow">Ze skleníku rovnou k vám</p>
          <h2 id="nabidka-h" className="zh-h2">
            Co si od nás odvezete
          </h2>
          <p className="zh-section__intro">
            Všechno, co prodáváme, jsme sami vypěstovali nebo osobně vybrali u&nbsp;pěstitelů,
            kterým věříme. Když něco zrovna nemáme, řekneme vám kdy — a&nbsp;necháme vám to stranou.
          </p>
        </div>

        <div className="zh-grid">
          <article className="zh-card">
            <h3 className="zh-card__title">Zelenina do záhonu</h3>
            <p className="zh-card__text">
              Rajčata, papriky, okurky i&nbsp;saláty předpěstované ve skleníku. Otužilé sazenice,
              které přežijí i&nbsp;chladnější noci v&nbsp;údolí Labe.
            </p>
            <p className="zh-card__note">Sazenice od 25&nbsp;Kč · vlastní odrůdy rajčat</p>
          </article>

          <article className="zh-card">
            <h3 className="zh-card__title">Balkóny a truhlíky</h3>
            <p className="zh-card__text">
              Muškáty, surfinie, begonie. Truhlík vám osázíme na počkání — přineste svůj,
              nebo si vyberte u&nbsp;nás. Substrát a hnojení domyslíme za vás.
            </p>
            <p className="zh-card__note">Osázení truhlíku na počkání zdarma k&nbsp;nákupu</p>
          </article>

          <article className="zh-card">
            <h3 className="zh-card__title">Trvalky a růže</h3>
            <p className="zh-card__text">
              Trvalkové záhony, které kvetou od jara do mrazu. Poradíme kombinace pro slunce
              i&nbsp;stín — třeba pro svahy, kterých je v&nbsp;Ústí požehnaně.
            </p>
            <p className="zh-card__note">Návrh záhonu nakreslíme rukou přímo na místě</p>
          </article>

          <article className="zh-card">
            <h3 className="zh-card__title">Ovocné stromky a keře</h3>
            <p className="zh-card__text">
              Jabloně, hrušně, rybíz i&nbsp;maliník — odrůdy prověřené v&nbsp;severních Čechách.
              Na podzim vám stromek pomůžeme i&nbsp;zasadit.
            </p>
            <p className="zh-card__note">Výsadba stromku u&nbsp;vás od 350&nbsp;Kč</p>
          </article>

          <article className="zh-card">
            <h3 className="zh-card__title">Substráty, hnojiva, nářadí</h3>
            <p className="zh-card__text">
              Míchané substráty pytlované u&nbsp;nás, organická hnojiva a nářadí, které sami
              používáme. Žádný regál plný věcí, za které bychom se styděli.
            </p>
            <p className="zh-card__note">Substrát naložíme do auta, těžké pytle odvezeme</p>
          </article>

          <article className="zh-card zh-card--service">
            <h3 className="zh-card__title">Poradna mezi záhony</h3>
            <p className="zh-card__text">
              Přineste fotku, list nebo rovnou nemocnou kytku. Podíváme se, poznáme, poradíme.
              Bez objednání, každý den kdy máme otevřeno.
            </p>
            <p className="zh-card__note">Zdarma — jsme zahradníci, ne prodavači</p>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="zh-section zh-section--about" id="zahradnici" aria-labelledby="about-h">
        <div className="zh-about">
          <figure className="zh-about__media">
            <img
              src="/section-2.webp"
              alt="Zahradníci při práci ve skleníku zahradnictví SCONTO"
              className="zh-about__img"
            />
            <figcaption className="zh-about__caption">
              Skleníky na kraji Ústí nad Labem — přijeďte se podívat, jak sazenice rostou.
            </figcaption>
          </figure>

          <div className="zh-about__body">
            <p className="zh-eyebrow">Kdo se o vaše rostliny stará</p>
            <h2 id="about-h" className="zh-h2">
              Zahradnictví, kde vám sazenici podá ten, kdo ji zasel
            </h2>
            <p className="zh-about__text">
              Jsme malé rodinné zahradnictví na kraji Ústí nad Labem. Každé jaro vysejeme
              desítky tisíc semínek a&nbsp;do prodeje pustíme jen rostliny, které bychom sami
              zasadili doma. Znáte to — sazenice ze supermarketu za týden zvadne. Ta naše ne,
              protože je zvyklá na zdejší vzduch, vodu i&nbsp;počasí.
            </p>

            <ul className="zh-proof" aria-label="Proč nakupovat u nás">
              <li className="zh-proof__item">
                <strong>Vlastní pěstování.</strong> Zelenina a balkónovky rostou u&nbsp;nás od
                semínka — víme přesně, čím byly hnojené a&nbsp;kdy klíčily.
              </li>
              <li className="zh-proof__item">
                <strong>Znalost místa.</strong> Svahy, stín, těžší půda kolem Labe — doporučíme
                to, co tady opravdu poroste, ne co je zrovna v&nbsp;letáku.
              </li>
              <li className="zh-proof__item">
                <strong>Poradíme i po nákupu.</strong> Zavolejte nebo přijďte, když se rostlině
                nedaří. Neřekneme „to je záruka na kytky, ta není“.
              </li>
            </ul>

            <blockquote className="zh-quote">
              <p>
                „Rajčata od nich mi plodí do října, i&nbsp;když bydlím ve svahu nad Střekovem,
                kde fouká. Poradili odrůdu, kterou bych sama nikdy nevybrala.“
              </p>
              <cite>— paní Hana, Ústí nad Labem – Střekov</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
