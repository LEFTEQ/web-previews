export default function Page() {
  const kroky = [
    {
      cislo: "01",
      nazev: "Vstupní vyšetření",
      popis:
        "Projdeme s vámi každý zub, změříme hloubku dásňových kapes a barevně vám ukážeme, kde se plak drží nejvíc. Uvidíte to na vlastní oči — ne jen v kartě.",
    },
    {
      cislo: "02",
      nazev: "Odstranění zubního kamene",
      popis:
        "Ultrazvukem a ručními nástroji sundáme kámen nad i pod okrajem dásně. Šetrně, s ohledem na citlivé krčky a bez zbytečné bolesti.",
    },
    {
      cislo: "03",
      nazev: "Air-flow a leštění",
      popis:
        "Pískováním jemným práškem sundáme pigmentace od kávy, čaje a cigaret. Zuby pak vyleštíme do hladka, aby se na ně plak hůř chytal.",
    },
    {
      cislo: "04",
      nazev: "Nácvik a plán domů",
      popis:
        "Ukážeme vám techniku čištění přesně na vašich zubech — kartáček, mezizubní kartáčky i nitě. Odejdete s pomůckami vybranými pro vaše mezery.",
    },
  ];

  const duvery = [
    {
      hodnota: "7:00",
      popis: "Otevíráme brzy ráno, ještě před prací. Po–Pá 7:00–15:30.",
    },
    {
      hodnota: "2×",
      popis: "Doporučená hygiena dvakrát ročně stačí, aby dásně zůstaly klidné.",
    },
    {
      hodnota: "60 min",
      popis: "Tolik času vám věnujeme. Nespěcháme a nepřecházíme do dalšího křesla.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="NoKa Dental Klinik, České Budějovice">
          <span className="brand-no">No</span><span className="brand-ka">Ka</span>
          <span className="brand-sub">dental hygiena · České Budějovice</span>
        </a>
        <a className="topbar-tel" href="tel:+420386353311">+420&nbsp;386&nbsp;353&nbsp;311</a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Dentální hygienistka NoKa Dental Klinik při ošetření pacienta"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Dentální hygiena · Lidická tř. 97a</p>
          <h1 className="hero-title">
            Čistý zub<br />
            <span className="hero-em">poznáte jazykem.</span>
          </h1>
          <p className="hero-lead">
            V NoKa Dental Klinik v Českých Budějovicích sundáme kámen, plak i
            pigmentace od kávy a naučíme vás, jak si čistotu udržet doma. Bez
            spěchu, s výsledkem, který ucítíte hned po ošetření.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420386353311">
              Objednat se na hygienu
            </a>
            <a className="btn btn-ghost" href="mailto:ordinace@nokadental.cz">
              Napsat ordinaci
            </a>
          </div>
        </div>
      </section>

      <section className="services" aria-labelledby="services-h">
        <div className="section-head">
          <p className="eyebrow">Jak návštěva probíhá</p>
          <h2 id="services-h" className="section-title">
            Čtyři kroky k hladkým zubům
          </h2>
          <p className="section-note">
            Jedno sezení trvá kolem hodiny. Projdeme jím společně — od prvního
            změření kapes až po pomůcky, které si odnesete domů.
          </p>
        </div>

        <ol className="steps">
          {kroky.map((k) => (
            <li className="step" key={k.cislo}>
              <span className="step-num">{k.cislo}</span>
              <div className="step-text">
                <h3 className="step-name">{k.nazev}</h3>
                <p className="step-desc">{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="services-figure">
          <img
            src="/section-1.webp"
            alt="Ordinace dentální hygieny NoKa Dental Klinik"
            width={1400}
            height={900}
          />
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <figure className="trust-figure">
          <img
            src="/section-2.webp"
            alt="Tým NoKa Dental Klinik v Českých Budějovicích"
            width={1400}
            height={900}
          />
        </figure>
        <div className="trust-body">
          <p className="eyebrow">Proč k nám</p>
          <h2 id="trust-h" className="section-title">
            Klinika, kde se hygiena bere vážně
          </h2>
          <p className="section-note">
            Dentální hygiena u nás není doplněk k vrtačce — je to samostatné
            ošetření s vlastním časem a péčí. Pracujeme jen s ověřenými
            materiály a každému pacientovi vysvětlíme, co a proč děláme.
          </p>

          <dl className="stats">
            {duvery.map((d) => (
              <div className="stat" key={d.hodnota}>
                <dt className="stat-value">{d.hodnota}</dt>
                <dd className="stat-desc">{d.popis}</dd>
              </div>
            ))}
          </dl>

          <div className="trust-contact">
            <p>
              <span className="tc-label">Kde nás najdete</span>
              Lidická tř. 1968/97a, České Budějovice
            </p>
            <p>
              <span className="tc-label">Objednání</span>
              <a href="tel:+420386353311">+420 386 353 311</a> ·{" "}
              <a href="mailto:ordinace@nokadental.cz">ordinace@nokadental.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
