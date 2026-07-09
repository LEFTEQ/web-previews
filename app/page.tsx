import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Výměna čelního skla — zdarma přes pojišťovnu",
      body: "Vaše prasklé sklo vyměníme za originál od Pilkington, Saint‑Gobain, AGC nebo PGW. Papírování s pojišťovnou vyřídíme za vás — vy jen podepíšete.",
      tag: "Nejčastější zákrok",
    },
    {
      no: "02",
      title: "Oprava odštěpku za 45 minut",
      body: "Malý kamínek nemusí znamenat nové sklo. Prasklinu do velikosti dvoukoruny vyplníme pryskyřicí speciální metodou — počkáte si u kávy.",
      tag: "Do velikosti 2 Kč",
    },
    {
      no: "03",
      title: "Nonstop pohotovost na vykradená auta",
      body: "Rozbité boční nebo zadní sklo uprostřed noci? Přijedeme, zabezpečíme vůz a sklo vyměníme — 24 hodin denně, 7 dní v týdnu.",
      tag: "24/7 v Praze",
    },
    {
      no: "04",
      title: "Náhradní vůz po dobu opravy",
      body: "Bez auta ani na chvíli. Po dobu, kdy se staráme o vaše sklo, vám zdarma půjčíme jeden z našich náhradních vozů.",
      tag: "Zdarma",
    },
  ];

  const stock = ["Pilkington", "Saint‑Gobain", "AGC", "PGW"];

  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="Autosklo Střípek, domovská stránka">
          <span className="wm-crack" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
              <path d="M20 2 L18 16 L4 14 M18 16 L28 22 L38 18 M18 16 L16 30 L8 38 M18 16 L26 34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </span>
          <span className="wm-text">Autosklo <b>Střípek</b></span>
        </a>
        <a className="nav-call" href="tel:+420774573375">
          <span className="nav-call-label">Nonstop</span>
          <span className="nav-call-num">774 573 375</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Technik Autoskla Střípek při výměně čelního skla vozu"
            className="hero-img"
            width={1600}
            height={1000}
          />
          <span className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Autosklo · Praha 4 · Antala Staška</p>
          <h1 className="hero-title">
            Prasklina<br />
            <span className="hero-title-accent">se dá zastavit.</span>
          </h1>
          <p className="hero-lead">
            Kamínek z dálnice, škrábanec od zloděje, hvězdička uprostřed výhledu.
            Vyměníme sklo za originál, opravíme odštěpek do 45 minut a s pojišťovnou
            se domluvíme za vás — často vás to nestojí ani korunu.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420774573375">Zavolat na pohotovost</a>
            <a className="btn btn-ghost" href="#sluzby">Co pro vás uděláme</a>
          </div>
          <dl className="hero-facts">
            <div><dt>45 min</dt><dd>oprava odštěpku</dd></div>
            <div><dt>24/7</dt><dd>výjezd po Praze</dd></div>
            <div><dt>5 000+</dt><dd>skel skladem</dd></div>
          </dl>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">Co řešíme nejčastěji</p>
          <h2 className="sec-title">Od hvězdičky ve skle po rozbité okno v noci</h2>
        </div>
        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc" key={s.no}>
              <span className="svc-no" aria-hidden="true">{s.no}</span>
              <div className="svc-body">
                <div className="svc-toprow">
                  <h3 className="svc-title">{s.title}</h3>
                  <span className="svc-tag">{s.tag}</span>
                </div>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <img
          src="/section-1.webp"
          alt="Detail nového čelního skla připraveného k montáži"
          className="svc-photo"
          width={1400}
          height={800}
        />
      </section>

      <section className="trust">
        <div className="trust-photo-wrap">
          <img
            src="/section-2.webp"
            alt="Vozidlo v servisu Autoskla Střípek na Praze 4"
            className="trust-photo"
            width={1200}
            height={1400}
          />
        </div>
        <div className="trust-text">
          <p className="eyebrow">Proč lidé z Prahy 4 volají nám</p>
          <h2 className="sec-title">Sklo od výrobce, co ho namontoval do vašeho auta z výroby</h2>
          <p className="trust-lead">
            Nedáváme do aut náhražky. Skladem držíme přes 5 000 kusů skel od stejných
            značek, které dodávají do továren Škoda i Volkswagen — a pro SUV, dodávky
            i sportovní vozy. Sklo tak sedne napoprvé a senzory dešťového stěrače,
            kamera i vyhřívání fungují přesně jako dřív.
          </p>

          <ul className="brand-row" aria-label="Výrobci skel, se kterými pracujeme">
            {stock.map((b) => (
              <li key={b} className="brand-chip">{b}</li>
            ))}
          </ul>

          <ul className="trust-points">
            <li>
              <b>Papírování vyřídíme za vás.</b> Spolupracujeme se všemi pojišťovnami
              v ČR — nahlášení i schválení řešíme my.
            </li>
            <li>
              <b>Přijedeme, kam potřebujete.</b> Nonstop výjezd po Praze, když nejde
              autem hnout nebo je pozdě večer.
            </li>
            <li>
              <b>Nezůstanete bez auta.</b> Po dobu opravy dostanete náhradní vůz zdarma.
            </li>
          </ul>

          <address className="trust-contact">
            <span>Autosklo Střípek s.r.o.</span>
            <span>Antala Staška 1073/71, 140 00 Praha 4</span>
            <a href="tel:+420774573375">+420 774 573 375</a>
            <a href="mailto:info@autosklostripek.cz">info@autosklostripek.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
