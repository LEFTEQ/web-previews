import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "OS",
      title: "Osobní přístup ke klientům",
      body: "Zakládáme si na individuálním přístupu. Překládáme veškeré texty, které vaše firma potřebuje, a často jsme u vás od samotného založení společnosti. Za ta léta jsme se stali součástí vašeho týmu — známe terminologii oboru i detaily produktů.",
    },
    {
      code: "1:1",
      title: "Váš stálý překladatel",
      body: "Texty jednoho klienta překládá téměř vždy jeden stálý překladatel, který se důkladně seznámí s danou problematikou. Díky tomu a díky CAT nástrojům držíme vysokou přesnost, stylovou jednotu i terminologickou kontinuitu.",
    },
    {
      code: "A–Z",
      title: "Od korespondence po ověřené dokumenty",
      body: "Přeložíme jakýkoli dokument — firemní korespondenci, HR i právní texty, návody, produktové listy, procesní postupy, certifikace i ověřené překlady. Drtivou většinu textů překládají rodilí mluvčí.",
    },
    {
      code: "TECH",
      title: "Doma v technických oborech",
      body: "Mezi klienty máme zinkovny, strojírenské firmy, dřevozpracující průmysl, stavebnictví i polygrafii. Obory náročné na odbornou terminologii, kterou naši překladatelé dokonale ovládají. Zvládáme i překlady softwaru.",
    },
    {
      code: "AUTO",
      title: "Znalost automobilového průmyslu",
      body: "Provázíme klienty procesem navazování spolupráce s velkými automobilkami. Známe schvalování dodavatele ve VW, Audi, Porsche i Bentley. Ať jdete na jednání ve vývoji, nebo na schvalování prvního vzorku — víme, co vás čeká.",
    },
    {
      code: "???",
      title: "Poradíme si i s netradičním oborem",
      body: "Víte, čemu se v hantýrce železničářů říká „jet na trpaslíka“? My ano. Roky spolupracujeme s firmou budující železniční tratě, další klienti transportují gumárenské saze nebo provozují líheň kachňat. Poradíme si i s terminologií méně obvyklých oborů.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="brand" href="#top" aria-label="Hradilová — překlady a tlumočení, úvod">
          <span className="brand-mark" aria-hidden="true">H<span className="brand-slash">/</span></span>
          <span className="brand-name">Hradilová<span className="brand-sub">překlady &amp; tlumočení</span></span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Co umíme</a>
          <a href="#o-nas">O nás</a>
          <a className="nav-call" href="tel:+420602864600">+420 602 864 600</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img src="/hero.webp" alt="Pracovní stůl překladatelky Hradilová v Hradci Králové s odbornými slovníky a dokumenty" />
          <span className="hero-media-tag">Hradec Králové · od roku 1993</span>
        </div>
        <div className="hero-text">
          <p className="eyebrow"><span>CS</span><span className="eyebrow-arrow" aria-hidden="true">→</span><span>DE · EN · +</span></p>
          <h1>
            Překlad, který
            <em> mluví řečí</em>
            vašeho oboru.
          </h1>
          <p className="lede">
            Podnikáte v technickém oboru náročném na terminologii? Chystáte se schvalovat dodávku u automobilky? Nebo potřebujete text, který respektuje kulturu cílové země? Jsme malá překladatelská firma z Hradce Králové, která se do vašeho řemesla ponoří tak, jako byste ji zaměstnávali napřímo.
          </p>
          <div className="hero-cta">
            <a className="btn" href="tel:+420602864600">Zavolat +420 602 864 600</a>
            <a className="btn-ghost" href="#sluzby">Co pro vás přeložíme</a>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Šest věcí, které od nás dostanete</p>
          <h2 id="sluzby-h">Ne agentura, co text propustí sítem. Jeden překladatel, který zná vaši firmu.</h2>
        </div>
        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card-code" aria-hidden="true">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" id="o-nas" aria-labelledby="o-nas-h">
        <div className="about-media">
          <img src="/section-1.webp" alt="Monika Hradilová při práci na odborném překladu" />
        </div>
        <div className="about-text">
          <p className="eyebrow">Monika Hradilová · zakladatelka</p>
          <h2 id="o-nas-h">Své zákazníky dokonale známe.</h2>
          <blockquote className="pull">
            „Jen díky důkladné znalosti oboru zákazníků, jejich firemní filozofie i portfolia produktů jim můžeme zajistit skutečně kvalitní překlad či tlumočení.“
          </blockquote>
          <p>
            Firmu jsem založila v roce 1993 a postupně kolem sebe shromáždila stálý tým zkušených spolupracovníků — většina z nich jsou rodilí mluvčí. Osobní přístup ke klientům je pro mě od začátku to hlavní. Právě ochota a schopnost rychle porozumět zákazníkům tvoří jádro našeho úspěchu.
          </p>
          <ul className="stats">
            <li><span className="stat-num">1993</span><span className="stat-label">první zakázka</span></li>
            <li><span className="stat-num">¾</span><span className="stat-label">klientů se k nám vrací roky</span></li>
            <li><span className="stat-num">CAT</span><span className="stat-label">jednotná terminologie</span></li>
          </ul>
          <img className="about-media-2" src="/section-2.webp" alt="Odborné slovníky a podklady používané při technických překladech" />
        </div>
      </section>
    </main>
  );
}
