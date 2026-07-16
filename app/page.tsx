import { HeroPulse, PulseDivider } from "./motion";

const SLUZBY = [
  {
    title: "Prevence, očkování a pasy",
    body: "Očkování, odčervení, čipování, vystavení cestovního pasu i prodej krmiv a léků — vyřídíte na jednom místě.",
  },
  {
    title: "Akutní stavy, RTG a USG",
    body: "Náhlé obtíže řešíme se zázemím rentgenu a ultrazvuku, abychom rychle věděli, co se děje.",
  },
  {
    title: "Kardiologie a echokardiografie",
    body: "Kompletní vyšetření srdce včetně echokardiografie — obor, kterým se klinika profiluje.",
    feature: true,
  },
  {
    title: "Zubní ošetření",
    body: "Dentální hygiena, multiextrakce zubů i zubní rentgen zvládneme během jednoho sezení.",
  },
  {
    title: "Kožní problémy",
    body: "Diagnostika a léčba svědění, alergií a dalších kožních potíží psů i koček.",
  },
  {
    title: "Onkologie",
    body: "Diagnostika a léčba nádorových onemocnění s citlivým, srozumitelným přístupem.",
  },
  {
    title: "Chirurgie a hospitalizace",
    body: "Chirurgické zákroky, kastrace a denní hospitalizace pod stálým dohledem lékaře.",
  },
];

const TYM = [
  "MVDr. Radek Zusko",
  "MVDr. Michala Jirouchová",
  "MVDr. Zdeněk Schaefer",
  "MVDr. Michaela Oravská",
  "MVDr. Zuzana Barancová",
];

export default function Page() {
  return (
    <main className="page" id="top">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="OK-VET — veterinární klinika">
          <span>OK</span>
          <svg className="wm-tick" viewBox="0 0 34 24" aria-hidden="true">
            <path d="M0 12 H8 L12 12 L16 4 L20 20 L24 8 L27 12 H34" />
          </svg>
          <span>VET</span>
        </a>
        <a className="cta cta--sm" href="#objednani">
          <svg className="cta-pulse" viewBox="0 0 40 16" aria-hidden="true">
            <path d="M0 8 H12 L15 8 L18 2 L21 14 L24 8 H40" />
          </svg>
          Objednat se
        </a>
      </header>

      <section className="band band--ink hero" aria-labelledby="hero-title">
        <div className="wrap">
          <p className="eyebrow reveal" data-d="1">
            Veterinární klinika · Praha 6 – Řepy
          </p>
          <h1 className="hero-title reveal" data-d="2" id="hero-title">
            Slyšíme každý tep
            <br />
            vašeho zvířete.
          </h1>
          <p className="lead reveal" data-d="3">
            Malá klinika v Řepích, kde má srdce vašeho psa i kočky svého
            specialistu. Ošetříme akutní stavy, uděláme kompletní kardiologii
            včetně echokardiografie a postaráme se o prevenci — s parkováním před
            klinikou a bezbariérovým přístupem.
          </p>

          <div className="actions reveal" data-d="4">
            <a className="cta" href="#objednani">
              <svg className="cta-pulse" viewBox="0 0 40 16" aria-hidden="true">
                <path d="M0 8 H12 L15 8 L18 2 L21 14 L24 8 H40" />
              </svg>
              Objednat se
            </a>
            <a className="ghost" href="tel:+420731550976">
              Zavolat 731 550 976
            </a>
          </div>

          <dl className="hero-meta reveal" data-d="5">
            <div>
              <dt>Adresa</dt>
              <dd>Žalanského 31/34, Praha&nbsp;6 – Řepy</dd>
            </div>
            <div>
              <dt>Dnes otevřeno</dt>
              <dd>Po–Pá 8:00–11:30 · 14:00–19:00</dd>
            </div>
          </dl>
        </div>

        <HeroPulse />
      </section>

      <PulseDivider tone="onMist" />

      <section className="band band--mist sluzby" aria-labelledby="sluzby-title">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow--ink">Co pro mazlíčka uděláme</p>
            <h2 className="section-title" id="sluzby-title">
              Služby kliniky
            </h2>
          </header>

          <ul className="cards">
            {SLUZBY.map((s) => (
              <li
                key={s.title}
                className={s.feature ? "card card--feature" : "card"}
              >
                {s.feature && <span className="card-tag">Naše specializace</span>}
                <h3 className="card-title">{s.title}</h3>
                <p className="card-body">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PulseDivider tone="onScrub" />

      <section
        className="band band--scrub kdy"
        id="objednani"
        aria-labelledby="kdy-title"
      >
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow--mist">Praktické informace</p>
            <h2 className="section-title" id="kdy-title">
              Kdy a jak k nám
            </h2>
          </header>

          <div className="grid-two">
            <div className="panel">
              <h3 className="panel-title">Ordinační hodiny</h3>
              <table className="hours">
                <tbody>
                  <tr>
                    <th scope="row">Po–Pá</th>
                    <td>8:00–11:30 · 14:00–19:00</td>
                  </tr>
                  <tr>
                    <th scope="row">Sobota</th>
                    <td>9:00–12:00 <span className="muted">(s příplatkem)</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Neděle</th>
                    <td>16:00–19:00 <span className="muted">(s příplatkem)</span></td>
                  </tr>
                </tbody>
              </table>
              <p className="note">Posledního pacienta bereme 15 minut před koncem.</p>
            </div>

            <div className="panel">
              <h3 className="panel-title">Objednání a příplatky</h3>
              <p className="panel-body">
                Na běžná ošetření se objednávejte přes rezervační systém.
                Chirurgické zákroky domlouvejte telefonicky nebo osobně.
              </p>
              <ul className="fees">
                <li>
                  <span>Víkend a svátky</span>
                  <span className="fee">+500 Kč</span>
                </li>
                <li>
                  <span>Mimo ordinační dobu / méně než 15 min před koncem</span>
                  <span className="fee">+1000 Kč</span>
                </li>
                <li>
                  <span>Kontroly po pozvání</span>
                  <span className="fee fee--ok">bez příplatku</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="trust">
            <div className="chips">
              <span className="chip">Parkování před klinikou</span>
              <span className="chip">Bezbariérový přístup</span>
              <span className="chip">Online poradna 24/7 zdarma pro klienty</span>
            </div>

            <div className="team">
              <h3 className="panel-title">Náš tým</h3>
              <ul className="team-list">
                {TYM.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
