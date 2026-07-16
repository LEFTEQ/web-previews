const machines = [
  {
    channel: "Velkoformátový tisk",
    name: "Epson SureColor SC-S9100",
    desc: "Eco-solventní velkoformát na polepy, bannery a POS. V akci MEGA TRADE-IN vezmeme vaši starou SC-S na protiúčet.",
    price: "Akce + protiúčet",
    tag: "C",
  },
  {
    channel: "Digitální tisk · DTF",
    name: "Epson SureColor SC-G6000",
    desc: "DTF tiskárna pro přímý tisk na fólii a přenos na textil. Skladem za akční cenu.",
    price: "220 000 Kč bez DPH",
    tag: "M",
  },
  {
    channel: "UV tisk",
    name: "Epson SureColor SC-V4000 A1+",
    desc: "Nová UV tiskárna formátu A1+ na desky, sklo i deskové materiály. Novinka v nabídce.",
    price: "Cena na dotaz",
    tag: "Y",
  },
  {
    channel: "Digitální tisk · DTF",
    name: "Epson SureColor SC-G9000",
    desc: "Produkční DTF stroj pro vyšší nároky a objemy — pro provozy, které tisknou každý den.",
    price: "Cena na dotaz",
    tag: "K",
  },
  {
    channel: "Dokončení · DTF",
    name: "Adkins Inline Compact 900 / 600",
    desc: "Inline finišery pro sušení a fixaci DTF prášku hned za tiskem. Dvě šířky pásu podle provozu.",
    price: "Cena na dotaz",
    tag: "C",
  },
  {
    channel: "Spotřební materiál",
    name: "Fólie, inkousty a média",
    desc: "Originální inkousty Epson, DTF fólie i prášek. Např. 1D lesk, šedé lepidlo, 100 mic, 1600 × 50 m.",
    price: "3 937 Kč bez DPH",
    tag: "M",
  },
];

const services = [
  {
    title: "Servis a outsourcing tisku",
    desc: "Postaráme se o provoz vašich strojů — od instalace přes seřízení po pravidelný servis a náhradní díly.",
  },
  {
    title: "Vzdálená podpora TeamViewer QS",
    desc: "Rychlé věci vyřešíme na dálku, bez čekání na výjezd technika.",
  },
  {
    title: "Financování na splátky",
    desc: "Nový stroj pořídíte na splátky nebo leasing. Poradíme s nastavením podle vašeho provozu.",
  },
  {
    title: "EPSON recycling programme",
    desc: "Použité inkousty a náplně odevzdáte k ekologické recyklaci přímo přes program Epson.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar__row">
          <a className="brand" href="#top" aria-label="AWC Morava — tisková technika">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__name">
              AWC<span className="brand__sub">Morava</span>
            </span>
          </a>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#stroje">Stroje</a>
            <a href="#sluzby">Služby</a>
            <a className="topnav__hours" href="#sluzby">Po–Čt 9–16 · Pá 9–15</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__halftone" aria-hidden="true" />
        <span className="hero__carriage" aria-hidden="true" />
        <div className="wrap hero__inner">
          <p className="eyebrow">Autorizovaný dodavatel Epson · Ostrava od roku 2003</p>
          <h1 className="hero__title">
            <span className="reg" data-text="Tiskneme">Tiskneme</span>
            <span className="reg" data-text="velký formát.">velký formát.</span>
          </h1>
          <p className="hero__lead">
            Prodej, instalace a servis velkoformátových, DTF, UV a laserových
            tiskáren Epson. Pro tiskaře, reklamní studia a výrobce na Ostravsku —
            čerstvě z tiskového lože.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#stroje">Prohlédnout stroje</a>
            <a className="btn btn--ghost" href="#sluzby">Co zajišťujeme</a>
          </div>
          <ul className="hero__facts">
            <li><span>20+ let</span> na trhu tiskové techniky</li>
            <li><span>Ostrava</span> Mariánské Hory, servis přímo u vás</li>
            <li><span>Epson</span> velký formát · DTF · UV · laser</li>
          </ul>
        </div>
      </section>

      <section className="section" id="stroje">
        <div className="wrap">
          <div className="sechead">
            <p className="eyebrow eyebrow--m">Nabídka strojů</p>
            <h2 className="sechead__title">Stroje skladem i na objednávku</h2>
            <p className="sechead__lead">
              Každý stroj vidíte jako nátisk vytažený z tiskového lože — s pasovacími
              značkami a CMYK proužkem. Aktuální akce i ceny na dotaz.
            </p>
          </div>

          <div className="proofs">
            {machines.map((m) => (
              <article className="proof" key={m.name}>
                <span className="pcorner pcorner--tl" aria-hidden="true" />
                <span className="pcorner pcorner--tr" aria-hidden="true" />
                <span className="pcorner pcorner--bl" aria-hidden="true" />
                <span className="pcorner pcorner--br" aria-hidden="true" />
                <span className="proof__bars" aria-hidden="true" />
                <span className="proof__tag" aria-hidden="true">{m.tag}</span>
                <div className="proof__body">
                  <p className="proof__channel">{m.channel}</p>
                  <h3 className="proof__name">{m.name}</h3>
                  <p className="proof__desc">{m.desc}</p>
                  <p className="proof__price">{m.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="sluzby">
        <div className="wrap about">
          <div className="about__intro">
            <p className="eyebrow eyebrow--m">O nás</p>
            <h2 className="sechead__title">Partner tiskařů už od roku 2003</h2>
            <p className="about__lead">
              Dodáváme a servisujeme profesionální tiskovou techniku přes dvacet let.
              Sídlíme v Ostravě – Mariánských Horách a jsme u toho, když se stroj musí
              rozjet, doladit nebo rychle opravit.
            </p>
            <ul className="services">
              {services.map((s) => (
                <li className="service" key={s.title}>
                  <h3 className="service__title">{s.title}</h3>
                  <p className="service__desc">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="proof proof--info">
            <span className="pcorner pcorner--tl" aria-hidden="true" />
            <span className="pcorner pcorner--tr" aria-hidden="true" />
            <span className="pcorner pcorner--bl" aria-hidden="true" />
            <span className="pcorner pcorner--br" aria-hidden="true" />
            <span className="proof__bars" aria-hidden="true" />
            <div className="proof__body">
              <p className="proof__channel">Kde nás najdete</p>
              <p className="info__line info__line--big">
                Čelakovského 2055/4<br />709 00 Ostrava – Mariánské Hory
              </p>
              <dl className="info">
                <div>
                  <dt>Otevřeno</dt>
                  <dd>Po–Čt 9:00–16:00<br />Pá 9:00–15:00</dd>
                </div>
                <div>
                  <dt>IČO</dt>
                  <dd>09006362</dd>
                </div>
                <div>
                  <dt>DIČ</dt>
                  <dd>CZ09006362</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
