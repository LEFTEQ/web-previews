import type { CSSProperties } from "react";

const sluzby = [
  {
    id: "01",
    nazev: "Sklenářská pohotovost",
    popis:
      "Rozbité okno v noci nebo o víkendu? Přijedeme po Praze a okolí, zaměříme, provizorně zabezpečíme otvor a co nejdřív osadíme nové sklo.",
    detail: "Nonstop · Praha a okolí",
  },
  {
    id: "02",
    nazev: "Dvojskla a trojskla",
    popis:
      "Výměna zamlžených nebo prasklých izolačních skel v oknech. Doměříme přesně na váš rám a osadíme tak, aby netáhlo a šetřilo teplo.",
    detail: "Úspora tepla",
  },
  {
    id: "03",
    nazev: "Zasklívání výloh",
    popis:
      "Rychlá výměna výloh a vstupních prosklení pro obchody a provozovny — ať prodáváte dál bez zbytečné pauzy.",
    detail: "Pro provozovny",
  },
  {
    id: "04",
    nazev: "Sprchové kouty na míru",
    popis:
      "Kalené sklo přesně do vaší koupelny, bez rámů i s kováním. Zaměříme, vyrobíme a namontujeme.",
    detail: "Kalené sklo",
  },
  {
    id: "05",
    nazev: "Zrcadla a skleněné stěny",
    popis:
      "Zrcadla na míru, zrcadlové stěny, skleněná zábradlí i barevná a lakovaná skla do interiéru.",
    detail: "Na zakázku",
  },
  {
    id: "06",
    nazev: "Akvária a terária",
    popis:
      "Lepená akvária a terária přesně podle vašich rozměrů. Precizně slepené spoje, které vydrží.",
    detail: "Lepené na míru",
  },
];

const reference = [
  {
    jmeno: "Bonzo",
    text:
      "Nechal jsem si u této firmy vyrobit terária a jsem velmi spokojený. Cena i rychlost příkladná. Velmi precizní práce. Mohu jen doporučit.",
    zakazka: "Terária na zakázku",
  },
  {
    jmeno: "Marie Novotná",
    text:
      "Když jsem potřebovala opravit poškozené sklo ve svém domě, byla jsem v rozpacích. Naštěstí jsem narazila na tuto firmu — získali mě profesionální prací i vynikajícím lidským přístupem.",
    zakazka: "Oprava skla v domě",
  },
  {
    jmeno: "Tereza Vilímová",
    text:
      "Nechávala jsem si dělat na zakázku skleněný stolek a zrcadla. Jsem více než spokojená. Rodinná firma s velmi osobním a milým přístupem. Určitě se obrátím znovu.",
    zakazka: "Skleněný stolek a zrcadla",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Rodinné sklenářství Drábek">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="pane pane--a" />
            <span className="pane pane--b" />
          </span>
          <span className="wordmark__text">
            <span className="wordmark__name">Drábek</span>
            <span className="wordmark__sub">sklenářství · Klánovice</span>
          </span>
        </a>
        <a className="topbar__call" href="tel:+420607205305">
          <span className="topbar__callLabel">Pohotovost</span>
          <span className="topbar__callNum">607&nbsp;205&nbsp;305</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Sklenář Drábek při práci se sklem — řezání tabule skla na míru"
            className="hero__img"
          />
          <div className="hero__glass" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">Rodinné sklenářství · od roku 1994</p>
          <h1 id="hero-title" className="hero__title">
            Prasklé sklo?<br />
            <span className="hero__cut">Zaměříme, uřízneme, osadíme.</span>
          </h1>
          <p className="hero__lead">
            Tři desetiletí řežeme sklo přesně na míru — okna, výlohy, sprchové
            kouty, zrcadla i akvária. Když se rozbije, přijedeme i o víkendu.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420607205305">
              Zavolat sklenáři
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>30 let</dt>
              <dd>řemesla v rodině</dd>
            </div>
            <div>
              <dt>Nonstop</dt>
              <dd>sklenářská pohotovost</dd>
            </div>
            <div>
              <dt>Klánovice</dt>
              <dd>a celá Praha</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="sect-head">
          <p className="sect-head__eyebrow">Co pro vás uřízneme</p>
          <h2 id="sluzby-title" className="sect-head__title">
            Sklo na každý kout domu i provozovny
          </h2>
          <p className="sect-head__lead">
            Od havarijní výměny okna po zrcadlovou stěnu na míru. Vše zaměříme u
            vás a přivezeme hotové.
          </p>
        </div>

        <div className="sluzby__split">
          <ol className="cutlist">
            {sluzby.map((s) => (
              <li className="cut" key={s.id}>
                <span className="cut__num">{s.id}</span>
                <div className="cut__body">
                  <h3 className="cut__name">{s.nazev}</h3>
                  <p className="cut__desc">{s.popis}</p>
                </div>
                <span className="cut__tag">{s.detail}</span>
              </li>
            ))}
          </ol>

          <figure className="sluzby__figure">
            <img
              src="/section-1.webp"
              alt="Detail řezání a broušení tabulového skla v dílně Drábek"
              className="sluzby__img"
            />
            <figcaption>
              Každou tabuli řežeme a brousíme přesně na milimetr přímo v naší
              dílně v Klánovicích.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="onas" aria-labelledby="onas-title">
        <div className="onas__grid">
          <div className="onas__intro">
            <p className="sect-head__eyebrow">Rodinná firma z Klánovic</p>
            <h2 id="onas-title" className="sect-head__title">
              Zvednu telefon já — sklenář, ne dispečink
            </h2>
            <p className="onas__text">
              Jsme malé rodinné sklenářství na adrese Ke Znaku&nbsp;43
              v Praze-Klánovicích. Sklu se věnujeme přes třicet let a poznáte to
              na detailech — čistě zabroušené hrany, přesné míry, žádné
              zbytečné řeči. Přijedeme, poradíme na místě a řekneme cenu předem.
            </p>
            <img
              src="/section-2.webp"
              alt="Hotová skleněná realizace od sklenářství Drábek — zrcadlo a skleněná plocha v interiéru"
              className="onas__img"
            />
          </div>

          <div className="onas__reviews">
            <p className="onas__reviewsLabel">Co říkáte vy</p>
            <ul className="reviews">
              {reference.map((r) => (
                <li className="review" key={r.jmeno}>
                  <p className="review__text">„{r.text}“</p>
                  <p className="review__meta">
                    <span className="review__name">{r.jmeno}</span>
                    <span className="review__job">{r.zakazka}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
