import type { CSSProperties } from "react";

type Treat = { name: string; note: string };

const vitrina: Treat[] = [
  { name: "Větrníky a indiánky", note: "česká klasika, jak ji znáte" },
  { name: "Panna cotta", note: "hedvábná, s čerstvým ovocem" },
  { name: "Ovocné Šarloty", note: "piškot, smetana, ovoce podle sezóny" },
  { name: "Tartaletky", note: "křehké košíčky plné krému" },
  { name: "Výběrová káva", note: "ke každému zákusku" },
  { name: "Domácí zmrzlina", note: "točíme jen tady v Hradci" },
];

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Vitrína Cukrárny Libuše plná čerstvých zákusků a dortů"
        />
        <div className="hero__scrim" aria-hidden="true" />

        <div className="hero__inner">
          <p className="eyebrow" style={delay(0.05)}>
            Cukrárna v Hradci Králové&nbsp;·&nbsp;pečeme od roku 1994
          </p>

          <div className="wordmark" style={delay(0.15)}>
            <span className="wordmark__kicker">Cukrárna</span>
            <span className="wordmark__name">Libuše</span>
          </div>

          <h1 className="hero__title" style={delay(0.28)}>
            Tradiční chutě v&nbsp;<em>moderním</em> pojetí.
          </h1>

          <p className="hero__lede" style={delay(0.4)}>
            Ochutnejte českou klasiku i&nbsp;nejnovější nápady cukrářů z&nbsp;celého
            světa. Větrníky a&nbsp;indiánky, nebo panna cotta, ovocné Šarloty
            a&nbsp;tartaletky — z&nbsp;jedné vitríny si vybere každý.
          </p>

          <div className="cta-row" style={delay(0.52)}>
            <a className="btn btn--solid" href="tel:+420495221316">
              Zavolat 495&nbsp;221&nbsp;316
            </a>
            <a className="btn btn--line" href="#vitrina">
              Co je ve vitríně
            </a>
          </div>
        </div>
      </header>

      <section className="block block--light" id="vitrina" aria-labelledby="vitrina-nadpis">
        <div className="block__grid">
          <div className="block__media">
            <img
              src="/section-1.webp"
              alt="Zákusky Cukrárny Libuše připravené z čerstvých surovin"
              className="block__img"
            />
          </div>

          <div className="block__body">
            <p className="eyebrow eyebrow--ink">Přírodní suroviny · poctivá práce</p>
            <h2 className="block__title" id="vitrina-nadpis">
              Všechno pečeme <em>od základu</em>, každý den čerstvé.
            </h2>
            <p className="block__text">
              Zakládáme si na každém soustu. Kromě zákusků a&nbsp;dortů si u&nbsp;nás
              dáte skvělou kávu — a&nbsp;v&nbsp;Hradci navíc naši domácí zmrzlinu.
            </p>

            <ul className="menu" aria-label="Nabídka z vitríny">
              {vitrina.map((t) => (
                <li className="menu__row" key={t.name}>
                  <span className="menu__name">{t.name}</span>
                  <span className="menu__leader" aria-hidden="true" />
                  <span className="menu__note">{t.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block block--dark" aria-labelledby="dorty-nadpis">
        <div className="block__grid block__grid--rev">
          <div className="block__media">
            <img
              src="/section-2.webp"
              alt="Dort na míru upečený v Cukrárně Libuše pro oslavu"
              className="block__img"
            />
          </div>

          <div className="block__body">
            <p className="eyebrow eyebrow--cream">Dorty na míru</p>
            <h2 className="block__title" id="dorty-nadpis">
              Blýskněte se <em>na každé oslavě</em>.
            </h2>
            <p className="block__text">
              Narozeninový, nebo svatební dort? Po domluvě vytvoříme přesně takové
              dobroty, jaké si budete přát. Inspirujte se ve vitríně, nebo přijďte
              s&nbsp;vlastním nápadem — domluvíme se na chuti, velikosti i&nbsp;podobě.
            </p>

            <dl className="contact">
              <div className="contact__item">
                <dt>Zavolejte a domluvte se</dt>
                <dd>
                  <a href="tel:+420495221316">495&nbsp;221&nbsp;316</a>
                </dd>
              </div>
              <div className="contact__item">
                <dt>Napište, co si přejete</dt>
                <dd>
                  <a href="mailto:cukrarna@libuse.cz">cukrarna@libuse.cz</a>
                </dd>
              </div>
              <div className="contact__item">
                <dt>Zastavte se</dt>
                <dd>v centru Hradce Králové · otevřeno denně 9–18</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
