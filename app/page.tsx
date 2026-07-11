export default function Page() {
  const services = [
    {
      code: "CLIMA",
      name: "Klimatizace",
      desc: "Splitové i multisplitové jednotky do bytu, kanceláře i provozovny. Chladí v létě, topí v přechodných měsících. Ztišený chod, filtrace vzduchu, ovládání z mobilu.",
      spec: "Daikin · Mitsubishi · LG",
    },
    {
      code: "HEAT",
      name: "Tepelná čerpadla",
      desc: "Vzduch–voda i vzduch–vzduch pro rodinné domy na Ostravsku. Nižší účty za topení, dotace Nová zelená úsporám vyřídíme za vás.",
      spec: "topný faktor až 5,1",
    },
    {
      code: "VENT",
      name: "Vzduchotechnika",
      desc: "Řízené větrání s rekuperací pro novostavby i rekonstrukce. Čerstvý vzduch bez otevírání oken, zpětné získávání tepla, tichý provoz.",
      spec: "rekuperace až 92 %",
    },
    {
      code: "COOL",
      name: "Pivní chlazení",
      desc: "Výčepní technologie a chlazení nápojů pro restaurace, hospody a stánky. Naražené pivo za pár stupňů, servis do 24 hodin.",
      spec: "restaurace · stánky",
    },
  ];

  return (
    <main className="kn">
      <header className="kn-top">
        <a className="kn-mark" href="#" aria-label="Klimatizace Novák, úvod">
          <span className="kn-mark-ico" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
          <span className="kn-mark-txt">
            <b>Novák</b>
            <i>klimatizace · Ostrava</i>
          </span>
        </a>
        <a className="kn-tel" href="tel:+420722925421">+420 722 925 421</a>
      </header>

      <section className="kn-hero">
        <div className="kn-hero-media">
          <img src="/hero.webp" alt="Montáž venkovní klimatizační jednotky technikem firmy Klimatizace Novák" />
          <div className="kn-hero-veil" aria-hidden="true"></div>
        </div>
        <div className="kn-hero-body">
          <p className="kn-eyebrow">Prodej · montáž · servis od roku 2011</p>
          <h1 className="kn-h1">
            Ať je venku vedro nebo mráz,<br />
            <span className="kn-h1-accent">doma máte přesně</span><br />
            svých pár stupňů.
          </h1>
          <p className="kn-lead">
            Klimatizace, tepelná čerpadla a vzduchotechnika pro domácnosti
            i firmy na Ostravsku. Navrhneme, namontujeme a staráme se dál —
            se servisem, na který se dovoláte.
          </p>
          <div className="kn-hero-cta">
            <a className="kn-btn kn-btn-primary" href="tel:+420722925421">Zavolat a domluvit termín</a>
            <a className="kn-btn kn-btn-ghost" href="#nabizime">Co montujeme</a>
          </div>
          <dl className="kn-hero-stats">
            <div><dt>Kunčičky</dt><dd>naše dílna v Ostravě</dd></div>
            <div><dt>do 24 h</dt><dd>servis při poruše</dd></div>
            <div><dt>NZÚ</dt><dd>dotaci vyřídíme za vás</dd></div>
          </dl>
        </div>
      </section>

      <section className="kn-services" id="nabizime" aria-labelledby="nabizime-nad">
        <div className="kn-sec-head">
          <p className="kn-eyebrow kn-eyebrow-dark">Co pro vás zchladíme i ohřejeme</p>
          <h2 className="kn-h2" id="nabizime-nad">Čtyři obory, jedna parta techniků</h2>
        </div>
        <ol className="kn-grid">
          {services.map((s) => (
            <li className="kn-card" key={s.code}>
              <span className="kn-card-code" aria-hidden="true">{s.code}</span>
              <h3 className="kn-card-name">{s.name}</h3>
              <p className="kn-card-desc">{s.desc}</p>
              <span className="kn-card-spec">{s.spec}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="kn-trust" aria-labelledby="onas-nad">
        <div className="kn-trust-media">
          <img src="/section-1.webp" alt="Vnitřní nástěnná klimatizační jednotka nainstalovaná v obývacím pokoji" />
        </div>
        <div className="kn-trust-body">
          <p className="kn-eyebrow kn-eyebrow-dark">O nás</p>
          <h2 className="kn-h2" id="onas-nad">Malá firma z Kunčiček, která zvedá telefon</h2>
          <p className="kn-trust-lead">
            Jsme Klimatizace Novák — rodinná firma z Ostravy‑Kunčiček.
            Neděláme montáž „nahodíme a zmizíme“. Přijedeme se podívat,
            navrhneme řešení na míru vašemu domu i rozpočtu a po instalaci
            zůstáváme na příjmu. Máme oprávnění pro práci s chladivy
            a pravidelně chodíme na školení výrobců.
          </p>
          <ul className="kn-facts">
            <li>
              <span className="kn-fact-k">Kde nás najdete</span>
              <span className="kn-fact-v">Frýdecká 633/288, Ostrava‑Kunčičky</span>
            </li>
            <li>
              <span className="kn-fact-k">Kam jezdíme</span>
              <span className="kn-fact-v">Ostrava a okolí do 40 km</span>
            </li>
            <li>
              <span className="kn-fact-k">Značky, kterým věříme</span>
              <span className="kn-fact-v">Daikin, Mitsubishi Electric, LG, Panasonic</span>
            </li>
            <li>
              <span className="kn-fact-k">Certifikace</span>
              <span className="kn-fact-v">osvědčení pro zacházení s chladivy (F‑plyny)</span>
            </li>
          </ul>
          <blockquote className="kn-quote">
            „Přijeli na čas, poradili menší jednotku, než jsme čekali —
            a ušetřili nám tím peníze. Klimu máme druhé léto a slyšet ji není.“
            <cite>— Petr H., rodinný dům, Ostrava‑Jih</cite>
          </blockquote>
          <img className="kn-trust-sub" src="/section-2.webp" alt="Venkovní jednotky tepelného čerpadla u fasády rodinného domu" />
        </div>
      </section>
    </main>
  );
}
