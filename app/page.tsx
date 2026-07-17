const services = [
  {
    code: "FVE",
    title: "Fotovoltaické elektrárny",
    desc: "Návrh a montáž pro domácnosti i firmy — včetně vyřízení dotace od žádosti až po závěrečnou zprávu.",
  },
  {
    code: "SERVIS",
    title: "Servis fotovoltaiky",
    desc: "Diagnostika, opravy a údržba elektráren od všech výrobců — i těch, které jsme nestavěli my.",
  },
  {
    code: "TČ",
    title: "Tepelná čerpadla",
    desc: "Montáž tepelného čerpadla jako hlavního zdroje tepla, s dotací Nová zelená úspornám.",
  },
  {
    code: "EV",
    title: "Dobíjecí stanice",
    desc: "Wallboxy a dobíjecí stanice pro elektromobily u domu i ve firemním areálu.",
  },
  {
    code: "EL",
    title: "Elektroinstalace",
    desc: "Návrhy, montáž, opravy a revize kompletní elektroinstalace na klíč.",
  },
  {
    code: "DC/AC",
    title: "Střídače na výběr",
    desc: "Solax, Growatt, GoodWe nebo Deye — vybereme střídač, který sedí právě vašemu provozu.",
  },
];

const promises = [
  "Řekneme přesně, kdy budeme realizovat — a termín dodržíme.",
  "Co slÍbÍme, to splníme. Bez hvězdiček ve smlouvě.",
  "Na práci nasazujeme jen odborníky z oboru.",
  "Při podpisu jednáme férově, včetně všech uvedených podmínek.",
];

export default function Page() {
  return (
    <main>
      <section className="band band--hero">
        <div className="band__inner">
          <header className="topbar">
            <a className="wordmark" href="#" aria-label="Atech Energo, úvodní stránka">
              <span className="wordmark__a">ATECH</span>
              <span className="wordmark__b">ENERGO<span className="wordmark__node" aria-hidden="true" /></span>
            </a>
            <a className="btn btn--ghost" href="tel:+420703665668">Zavolat 703 665 668</a>
          </header>

          <div className="powerlines" aria-hidden="true">
            <span className="pl" /><span className="pl" /><span className="pl" />
            <span className="pl" /><span className="pl" /><span className="pl" />
            <span className="pl" /><span className="pl" />
          </div>

          <div className="hero__content">
            <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />Elektroinstalace &amp; chytrá energie · Hradec Králové</p>
            <h1 className="hero__title">
              Energie, která<br />
              <span className="amber">drží slovo.</span>
            </h1>
            <p className="hero__lead">
              Fotovoltaika, tepelná čerpadla, dobíjecí stanice a elektroinstalace — návrh,
              montáž i servis od jedné firmy z Hradce Králové. Od první čáry ve schématu po
              poslední spoj pod proudem.
            </p>
            <ul className="metarow">
              <li>Návrh · montáž · servis</li>
              <li>Dotaci vyřídíme za vás</li>
              <li>Ozveme se do 24 hodin</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band band--white" aria-labelledby="svc-h">
        <div className="band__inner">
          <div className="secthead">
            <p className="eyebrow eyebrow--dark"><span className="eyebrow__dot" aria-hidden="true" />Co pro vás uděláme</p>
            <h2 id="svc-h" className="secthead__title">
              <span className="count">06</span> služeb pod jednou střechou
            </h2>
          </div>
          <ul className="services">
            {services.map((s) => (
              <li className="svc" key={s.code}>
                <span className="svc__code">{s.code}</span>
                <div className="svc__body">
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--dark" aria-labelledby="trust-h">
        <div className="band__inner">
          <div className="secthead">
            <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />Proč Atech Energo</p>
            <h2 id="trust-h" className="secthead__title">Naší vizitkou je odvedená práce.</h2>
          </div>

          <div className="trust">
            <ul className="promises">
              {promises.map((p) => (
                <li className="promise" key={p}>{p}</li>
              ))}
            </ul>

            <div className="dotace">
              <article className="card">
                <p className="card__tag">Nová zelená úspornám Light</p>
                <dl className="card__rows">
                  <div><dt>Tepelná čerpadla</dt><dd>70 000–90 000 Kč</dd></div>
                  <div><dt>Fotovoltaické systémy</dt><dd>40 000–140 000 Kč</dd></div>
                </dl>
              </article>
              <article className="card">
                <p className="card__tag">Výzva RES+ č. 1/2025</p>
                <p className="card__text">
                  Fotovoltaické elektrárny do 5 MWp pro vlastní spotřebu. Podpora až
                  30 % z uznatelných nákladů, žádosti do 30. 1. 2026.
                </p>
              </article>
            </div>
          </div>

          <div className="contact">
            <div>
              <span className="contact__label">Kancelář</span>
              <p>Gočárova třída 504/54, Hradec Králové<br />kancelář č. 123 · IČO 17733766</p>
            </div>
            <div>
              <span className="contact__label">Ozvěte se</span>
              <p>
                <a href="tel:+420703665668">+420 703 665 668</a><br />
                <a href="mailto:info@atechenergo.cz">info@atechenergo.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
