import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LEMISPED CB — plynaři a topenáři, České Budějovice",
  description:
    "Montáž a servis plynových kotlů, tepelných čerpadel a topení na jihu Čech. Revize kotlů a spalinových cest, kotlíkové dotace. Autorizovaný servis od roku 1996.",
  openGraph: {
    title: "LEMISPED CB — plynaři a topenáři, České Budějovice",
    description:
      "Plyn, topení a tepelná čerpadla se všemi certifikáty. Montáž, revize a servis kotlů na Českobudějovicku od roku 1996.",
    type: "website",
  },
};

const services = [
  {
    code: "01 · PLYN",
    title: "Plynové kotle na klíč",
    text: "Dodávka a montáž plynových i elektrokotlů Vaillant, Buderus a Dakon — od návrhu přes připojení až po první zátop a předání revize.",
  },
  {
    code: "02 · ČERPADLA",
    title: "Tepelná čerpadla",
    text: "Vzduch–voda i země–voda pro rodinné domy. Spočítáme topný faktor pro váš dům, ne z katalogu.",
  },
  {
    code: "03 · TUHÁ PALIVA",
    title: "Automatické kotle",
    text: "Kotle na pelety a tuhá paliva Benekov, Rojek a Ponast s automatickým podáváním — čisté spalování bez neustálého přikládání.",
  },
  {
    code: "04 · REVIZE",
    title: "Revize a servis",
    text: "Povinné revize kotlů a spalinových cest, záruční i pozáruční servis. Autorizace pro Benekov, Rojek i Enbra — opravíme, co jsme zapojili.",
  },
  {
    code: "05 · SOLÁR",
    title: "Solární ohřev vody",
    text: "Termické panely na ohřev vody a přitápění. Ušetří vám plyn hlavně od jara do podzimu.",
  },
  {
    code: "06 · DOTACE",
    title: "Kotlíkové dotace",
    text: "Vyřídíme žádost o dotaci včetně právního servisu. Vy topíte, papíry necháte na nás.",
  },
];

const brands = [
  "VAILLANT",
  "BUDERUS",
  "DAKON",
  "BENEKOV",
  "ROJEK",
  "ENBRA",
  "PONAST",
  "VIADRUS",
  "EDILKAMIN",
  "AGRO LHENICE",
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="mark">
            <span className="flame" aria-hidden="true" />
            <span>
              <span className="name">
                <b>LEMISPED</b> <span>CB</span>
              </span>
              <br />
              <span className="co">plynaři · topenáři · od 1996</span>
            </span>
          </div>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#certifikace">Certifikace</a>
            <a href="#reference">O nás</a>
          </nav>
          <a className="call-btn" href="tel:+420602403286">
            Zavolat 602 403 286
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Plynový kotel v kotelně rodinného domu s napojenými rozvody a měřením tlaku"
          />
        </div>
        <div className="hero-inner">
          <span className="eyebrow rise d1">České Budějovice a okolí · E.ON partner</span>
          <h1 className="rise d2">
            Když má hořák hořet <em>modře</em>, ne <span className="pilot">oranžově</span>.
          </h1>
          <p className="hero-lead rise d3">
            <strong>LEMISPED CB</strong> zapojuje a servisuje plynové kotle,
            tepelná čerpadla a topení na jihu Čech už od roku 1996 — se všemi
            certifikáty, revizemi a razítkem, které úřady i pojišťovna uznají.
          </p>
          <div className="hero-cta rise d4">
            <a className="btn-primary" href="tel:+420602403286">
              Zavolat topenáři
            </a>
            <a className="btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
        </div>
        <div className="gauge-row">
          <div className="gauge rise d1">
            <div className="num">1996</div>
            <div className="lab">rok založení</div>
          </div>
          <div className="gauge rise d2">
            <div className="num">10</div>
            <div className="lab">autorizovaných značek</div>
          </div>
          <div className="gauge rise d3">
            <div className="num">
              48<span>h</span>
            </div>
            <div className="lab">běžná doba servisu</div>
          </div>
          <div className="gauge rise d4">
            <div className="num">100%</div>
            <div className="lab">s revizí a razítkem</div>
          </div>
        </div>
      </section>

      <section className="section" id="sluzby">
        <div className="wrap">
          <div className="section-head">
            <span className="ix">/ SLUŽBY</span>
            <h2>Od prvního zátopu po povinnou revizi</h2>
            <p>
              Topení řešíme celé pod jednou střechou — dodávku, montáž i papíry.
              Nemusíte shánět tři různé firmy.
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc" key={s.code}>
                <span className="flame-line" aria-hidden="true" />
                <div className="code">{s.code}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust" id="reference">
        <div className="wrap">
          <div className="trust-grid">
            <div className="trust-media">
              <img
                src="/section-1.webp"
                alt="Technik LEMISPED CB při montáži topné soustavy"
              />
              <span className="tag">Montážní partner E.ON</span>
            </div>
            <div>
              <span className="ix" id="certifikace" style={{ fontFamily: "'Roboto Mono',monospace", color: "var(--pilot)", letterSpacing: ".1em", fontSize: "14px" }}>
                / O NÁS
              </span>
              <h2>Kvalitu podepisujeme certifikáty, ne slovem.</h2>
              <p className="lead">
                Od založení v roce 1996 klademe důraz na kvalitu — proto jsme
                držiteli <b>všech potřebných licencí a certifikátů</b> pro
                instalace, revize i záruční a pozáruční servis. Když kotel
                zapojíme, dostanete k němu razítko, které projde u úřadu i
                pojišťovny.
              </p>
              <div className="brand-strip">
                <div className="cap">Autorizovaný servis a montáž</div>
                <div className="brands">
                  {brands.map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </div>
              </div>
              <div className="partner">
                <b>E.ON</b>
                <span>oficiální montážní partner na jihu Čech</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
