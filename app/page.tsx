export default function Page() {
  const steps = [
    {
      n: "01",
      title: "Zvednem telefon osobně",
      body: "Žádný operátor, žádné čekání ve frontě. Zavoláte a rovnou mluvíte s člověkem, který stavbu povede.",
    },
    {
      n: "02",
      title: "Přijedeme a změříme",
      body: "Podíváme se na místo, probereme, co potřebujete, a vytvoříme konkrétní cenovou nabídku. Bez skrytých položek.",
    },
    {
      n: "03",
      title: "Postavíme podle dohody",
      body: "Realizujeme, jak jsme se domluvili. Když se cestou něco změní, přizpůsobíme se — a řekneme vám to dopředu.",
    },
    {
      n: "04",
      title: "Vyfakturujeme s DPH",
      body: "Faktura a DPH jsou u nás samozřejmost, ne bonus. Za každou práci neseme zodpovědnost.",
    },
  ];

  const jobs = [
    {
      k: "Novostavby",
      desc: "Dům na zelené louce od základů po střechu. Vedeme stavbu tak, abyste se do ní mohli nastěhovat bez dodělávek.",
    },
    {
      k: "Rekonstrukce",
      desc: "Citlivé opravy historických objektů i kompletní přestavby bytů. Umíme pracovat tam, kde se nedá bourat naslepo.",
    },
    {
      k: "Omítky a fasády",
      desc: "Opadaná omítka, prasklá fasáda, vlhká zeď. Zdánlivá maličkost, kterou zvládneme rychle a čistě.",
    },
  ];

  return (
    <main className="gs">
      <header className="gs-nav">
        <a className="gs-mark" href="#top" aria-label="Golovchak-Stav, domů">
          <span className="gs-mark__g">Golovchak</span>
          <span className="gs-mark__dash">—</span>
          <span className="gs-mark__s">Stav</span>
        </a>
        <a className="gs-nav__tel" href="tel:+420774710654">774 710 654</a>
      </header>

      <section className="gs-hero" id="top">
        <img
          className="gs-hero__img"
          src="/hero.webp"
          alt="Rozestavěná zděná stavba od firmy Golovchak-Stav"
          width={1600}
          height={1000}
        />
        <div className="gs-hero__scrim" aria-hidden="true" />
        <div className="gs-hero__inner">
          <p className="gs-eyebrow">Stavební firma · Praha-Vinohrady</p>
          <h1 className="gs-hero__title">
            Postavíme, co<br />
            si vzpomenete.<br />
            <span className="gs-hero__accent">Od omítky po dům.</span>
          </h1>
          <p className="gs-hero__lede">
            Novostavba na zelené louce, citlivá rekonstrukce historického
            objektu, nebo jen opadaná omítka. Žádná zakázka pro nás není příliš
            malá — ke každé přistupujeme individuálně.
          </p>
          <div className="gs-hero__cta">
            <a className="gs-btn" href="tel:+420774710654">Zavolat 774 710 654</a>
            <span className="gs-hero__note">Telefon zvedáme osobně</span>
          </div>
        </div>
      </section>

      <section className="gs-work" aria-labelledby="work-h">
        <div className="gs-work__head">
          <p className="gs-eyebrow gs-eyebrow--dark">Co stavíme</p>
          <h2 id="work-h" className="gs-h2">
            Tři obory, jedna parta,<br />zodpovědnost za každý spoj.
          </h2>
        </div>
        <div className="gs-work__grid">
          <figure className="gs-work__figure">
            <img
              src="/section-1.webp"
              alt="Realizace stavby a zdiva firmou Golovchak-Stav"
              width={1200}
              height={900}
              className="gs-work__photo"
            />
          </figure>
          <ul className="gs-jobs">
            {jobs.map((j, i) => (
              <li className="gs-job" key={j.k}>
                <span className="gs-job__idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="gs-job__k">{j.k}</h3>
                  <p className="gs-job__d">{j.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gs-how" aria-labelledby="how-h">
        <div className="gs-how__inner">
          <div className="gs-how__head">
            <p className="gs-eyebrow gs-eyebrow--light">Jak to u nás probíhá</p>
            <h2 id="how-h" className="gs-h2 gs-h2--light">
              Čtyři kroky<br />bez překvapení.
            </h2>
            <p className="gs-how__lede">
              Roky zkušeností a desítky spokojených zákazníků. Víme, že stavba je
              stres — proto je u nás každý krok jasný dopředu.
            </p>
            <img
              src="/section-2.webp"
              alt="Dokončená realizace firmy Golovchak-Stav"
              width={1200}
              height={900}
              className="gs-how__photo"
            />
          </div>
          <ol className="gs-steps">
            {steps.map((s) => (
              <li className="gs-step" key={s.n}>
                <span className="gs-step__n">{s.n}</span>
                <div className="gs-step__body">
                  <h3 className="gs-step__t">{s.title}</h3>
                  <p className="gs-step__p">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="gs-place">
            <p className="gs-place__l">Sídlo</p>
            <p className="gs-place__v">
              Varšavská 715/36, 120 00 Praha 2 — Vinohrady · IČ 19469004
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
