import { AUDIENCES, CONTACT } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow t-rise" style={{ "--i": 0 }}>
            GEMARE AGENCY · Olomouc
          </p>
          <h1 id="hero-title" className="hero-title">
            <span className="line t-rise" style={{ "--i": 1 }}>
              Pořádáme akce
            </span>
            <span className="line t-rise" style={{ "--i": 2 }}>
              pro firmy, obce
            </span>
            <span className="line t-rise" style={{ "--i": 3 }}>
              i <em>obchodní centra.</em>
            </span>
          </h1>
        </div>
        <div className="hero-side t-rise" style={{ "--i": 4 }}>
          <p>
            Firemní akce, teambuildingy, rodinné dny, akce pro obce a obchodní centra i tematické programy.
            K tomu atrakce, pódia, ozvučení a stany. Vyberte, co potřebujete, a pošlete jednu poptávku.
          </p>
          <div className="cta-row">
            <a href="#nabidka" className="btn btn-primary">
              Sestavit poptávku
            </a>
            <a href={CONTACT.mobile.href} className="btn btn-ghost">
              Zavolat {CONTACT.mobile.short}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap" id="pro-koho">
        <h2 className="doors-title t-rise" style={{ "--i": 5 }}>
          Pro koho pořádáme?
        </h2>
        <ul className="doors">
          {AUDIENCES.map((a, i) => (
            <li key={a.id} className="door t-rise" style={{ "--i": 6 + i, "--door": a.color }}>
              <img
                src={a.img}
                alt=""
                className="door-img"
                style={{ objectPosition: a.pos }}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="ai-tag">Ilustrační AI</span>
              <div className="door-body">
                <span className="door-no">{a.no}</span>
                <h3 className="door-title">{a.title}</h3>
                <p className="door-text">{a.text}</p>
                <ul className="door-list">
                  {a.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a href="#nabidka" className="door-link">
                  Vybrat v nabídce <span aria-hidden="true">→</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="hero-strip">
        <span className="wrap">
          Sídlo v Olomouci <span aria-hidden="true">·</span> akce pro firmy, obce a obchodní centra{" "}
          <span aria-hidden="true">·</span> atrakce, pódia, ozvučení, stany
        </span>
      </p>
    </section>
  );
}
