import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Značka a identita",
      lead: "Logo, barvy, styl. Aby vás lidé poznali dřív, než dočtou jméno.",
      body: "Postavíme vám vizuální identitu, kterou nespletete s nikým jiným — od loga přes barevnou paletu a typografii až po manuál, podle kterého to zvládne kdokoli po nás.",
    },
    {
      no: "02",
      title: "Tisk a velkoformát",
      lead: "Vizitky, letáky, bannery, polepy aut i výloh.",
      body: "Připravíme data do tisku správně napoprvé a pohlídáme výrobu. Od stovky letáků po banner přes celý štít domu v Pardubicích — bez čekání a bez dotisků kvůli překlepu.",
    },
    {
      no: "03",
      title: "Web, který funguje na mobilu",
      lead: "Rychlý, zabezpečený, čitelný na telefonu.",
      body: "Weby stavíme mobile-first, s HTTPS a bez zbytečné veteše. Načte se do vteřiny, najdou vás na Googlu a zákazník vám zavolá dřív, než by stačil zavřít stránku.",
    },
    {
      no: "04",
      title: "Kampaně a správa sítí",
      lead: "Facebook, Instagram, Google. Placené i organické.",
      body: "Vymyslíme sdělení, nastavíme cílení a hlídáme čísla. Reklama, kterou lidé v okolí opravdu uvidí — a která se vám vrátí, ne jen prokliká.",
    },
  ];

  return (
    <main className="rs">
      <a className="rs-skip" href="#nabidka">Přeskočit na nabídku</a>

      <header className="rs-top">
        <span className="rs-mark">
          <span className="rs-mark-r">Rapid</span>
          <span className="rs-amp">&amp;</span>
          <span className="rs-mark-s">Smart</span>
        </span>
        <span className="rs-place">reklamní agentura · Pardubice</span>
      </header>

      <section className="rs-hero" aria-labelledby="rs-hero-title">
        <div className="rs-hero-copy">
          <p className="rs-eyebrow">od nápadu k hotové zakázce</p>
          <h1 id="rs-hero-title" className="rs-h1">
            Uděláme, aby si vás<br /> <em>všimli</em> —<br /> a zapamatovali.
          </h1>
          <p className="rs-hero-lead">
            Reklamní agentura z Pernerovy ulice v Pardubicích. Značky, tisk,
            weby i kampaně pod jednou střechou — rychle a s hlavou.
          </p>
          <div className="rs-hero-cta">
            <a className="rs-btn" href="#nabidka">Prohlédnout nabídku</a>
            <a className="rs-link" href="mailto:office@rapidsmart.cz">office@rapidsmart.cz</a>
          </div>
        </div>
        <figure className="rs-hero-fig">
          <img src="/hero.webp" alt="Kreativní zákaznický koutek reklamní agentury Rapid & Smart s ukázkami práce" />
        </figure>
      </section>

      <div className="rs-ticker" aria-hidden="true">
        <div className="rs-ticker-row">
          {Array.from({ length: 2 }).map((_, r) => (
            <span key={r} className="rs-ticker-set">
              {["LOGO", "LETÁK", "BANNER", "WEB", "POLEP AUTA", "VIZITKA", "KAMPAŇ", "VÝLOHA", "SOCIÁLNÍ SÍTĚ"].map((w) => (
                <span key={w} className="rs-ticker-item">{w}<span className="rs-dot">·</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="nabidka" className="rs-services" aria-labelledby="rs-services-title">
        <div className="rs-sec-head">
          <p className="rs-eyebrow">co u nás objednáte</p>
          <h2 id="rs-services-title" className="rs-h2">
            Čtyři věci, které řešíme<br /> od začátku do konce.
          </h2>
        </div>
        <ol className="rs-grid">
          {services.map((s) => (
            <li key={s.no} className="rs-card">
              <span className="rs-card-no" aria-hidden="true">{s.no}</span>
              <h3 className="rs-card-title">{s.title}</h3>
              <p className="rs-card-lead">{s.lead}</p>
              <p className="rs-card-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rs-about" aria-labelledby="rs-about-title">
        <figure className="rs-about-fig">
          <img src="/section-1.webp" alt="Ukázka práce agentury Rapid & Smart — grafika a tiskoviny" />
        </figure>
        <div className="rs-about-copy">
          <p className="rs-eyebrow">proč právě my</p>
          <h2 id="rs-about-title" className="rs-h2">
            Jsme z Pardubic. Sejdeme se osobně, ne přes formulář.
          </h2>
          <p className="rs-about-text">
            Najdete nás na Pernerově 168 kousek od nádraží. Zakázku probereme
            u stolu, ukážeme rozpracované návrhy a poradíme, co dává smysl —
            a co jsou vyhozené peníze. Malá agentura znamená, že mluvíte přímo
            s tím, kdo vaši práci dělá.
          </p>
          <dl className="rs-facts">
            <div className="rs-fact">
              <dt>Kde nás najdete</dt>
              <dd>Pernerova 168, 530 02 Pardubice</dd>
            </div>
            <div className="rs-fact">
              <dt>Napište nám</dt>
              <dd><a href="mailto:office@rapidsmart.cz">office@rapidsmart.cz</a></dd>
            </div>
            <div className="rs-fact">
              <dt>Kdo jsme</dt>
              <dd>Rapid &amp; Smart s.r.o., IČO 28821785</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rs-proof" aria-labelledby="rs-proof-title">
        <div className="rs-proof-head">
          <p className="rs-eyebrow">jak to u nás chodí</p>
          <h2 id="rs-proof-title" className="rs-h2">Rychle a chytře. Odtud to jméno.</h2>
        </div>
        <div className="rs-proof-grid">
          <figure className="rs-proof-fig">
            <img src="/section-2.webp" alt="Realizace reklamy a velkoformátového tisku od Rapid & Smart" />
          </figure>
          <ul className="rs-steps">
            <li>
              <span className="rs-step-tag">Rapid</span>
              <p>Ozvete se, do druhého dne máte první návrh ceny i termínu. Žádné týdny ticha.</p>
            </li>
            <li>
              <span className="rs-step-tag">Smart</span>
              <p>Neděláme okrasu pro okrasu. Každý banner, leták i web má jeden úkol — přivést vám zákazníka.</p>
            </li>
            <li>
              <span className="rs-step-tag">Hotovo</span>
              <p>Předáme data i výrobu, s webem pohlídáme HTTPS a mobil. Vy se staráte o svůj obchod.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
