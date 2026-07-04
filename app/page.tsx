export default function Page() {
  const products = [
    {
      no: "01",
      name: "Kuchyně na míru",
      desc: "Od dřezu po úchytku promyslíme každý centimetr. Dvířka, pracovní desky, chytré úložné systémy — postavené přesně na váš prostor v Olomouci a okolí.",
    },
    {
      no: "02",
      name: "Vestavěné skříně",
      desc: "Skříně, které zapadnou i do šikmé stěny pod střechou. Vnitřní členění navrhneme podle toho, co skutečně skladujete.",
    },
    {
      no: "03",
      name: "Ložnice a dětské pokoje",
      desc: "Postele, noční stolky, patrové pokoje, které rostou s dětmi. Materiály bezpečné na dotek i na spaní.",
    },
    {
      no: "04",
      name: "Obývací stěny a nábytek na míru",
      desc: "Obývací sestavy, koupelnový a kancelářský nábytek. Řešení tam, kde sériový kus nikdy nesedne.",
    },
  ];

  const steps = [
    {
      k: "Zaměření",
      v: "Přijedeme, změříme, poslechneme si, jak prostor používáte.",
    },
    {
      k: "3D návrh",
      v: "Uvidíte hotový nábytek dřív, než začne vznikat. Návrh je samozřejmost.",
    },
    {
      k: "Výroba",
      v: "Vyrábíme s důsledným dodržením technologických postupů. Přesně, ne narychlo.",
    },
    {
      k: "Montáž",
      v: "Přivezeme a sestavíme u vás doma. Odejdeme, až je vše na svém místě.",
    },
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="mark" href="#" aria-label="Bronislava Vránová, nábytek na míru">
          <span className="mark-1">Vránová</span>
          <span className="mark-2">nábytek na míru</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Co vyrábíme</a>
          <a href="#dilna">O dílně</a>
          <a className="nav-tel" href="tel:+420777079120">777 079 120</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Nábytek na míru z dílny Bronislavy Vránové v Olomouci"
            className="hero-img"
          />
        </div>
        <div className="hero-text">
          <p className="eyebrow">Truhlářská dílna · Olomouc</p>
          <h1 className="hero-h1">
            Nábytek řezaný
            <br />
            <em>na váš</em> milimetr.
          </h1>
          <p className="hero-lead">
            Rodinná dílna Bronislavy Vránové dělá kuchyně, skříně a ložnice na
            míru — tam, kde sériový kus o dva centimetry nesedne. Precizně,
            za dostupnou cenu.
          </p>
          <div className="hero-cta">
            <a className="btn" href="tel:+420777079120">Zavolat do dílny</a>
            <a className="btn btn-ghost" href="#nabidka">Co vyrábíme</a>
          </div>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sec-head">
          <p className="eyebrow">Na míru, ne ze skladu</p>
          <h2 id="nabidka-h" className="sec-h">Co pro vás postavíme</h2>
        </div>
        <ul className="grain-list">
          {products.map((p) => (
            <li className="grain-item" key={p.no}>
              <span className="grain-no" aria-hidden="true">{p.no}</span>
              <div className="grain-body">
                <h3 className="grain-name">{p.name}</h3>
                <p className="grain-desc">{p.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <figure className="nabidka-fig">
          <img
            src="/section-1.webp"
            alt="Detail nábytku vyrobeného na míru"
            className="fig-img"
          />
          <figcaption>Široký sortiment materiálů, jeden standard zpracování.</figcaption>
        </figure>
      </section>

      <section className="dilna" id="dilna" aria-labelledby="dilna-h">
        <figure className="dilna-fig">
          <img
            src="/section-2.webp"
            alt="Práce v truhlářské dílně Vránová"
            className="fig-img"
          />
        </figure>
        <div className="dilna-text">
          <p className="eyebrow">O dílně</p>
          <h2 id="dilna-h" className="sec-h">
            Rodinná firma, která se za svou práci nestydí podepsat.
          </h2>
          <p className="dilna-p">
            Kvalitní nábytek na míru za dostupné ceny — to zvládáme díky
            preciznímu zpracování a důslednému dodržování technologických
            postupů. Sledujeme trendy a pružně na ně reagujeme, ale řemeslo
            zůstává stejné jako od začátku.
          </p>
          <p className="dilna-p">
            Individuální přístup a naše zkušenosti jsou základ pro spokojeného
            zákazníka. Chceme uspokojit každého, kdo hledá řešení na míru za
            rozumnou cenu.
          </p>

          <ol className="steps">
            {steps.map((s, i) => (
              <li className="step" key={s.k}>
                <span className="step-no" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3 className="step-k">{s.k}</h3>
                  <p className="step-v">{s.v}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="contact-strip">
            <a href="tel:+420777079120">+420 777 079 120</a>
            <a href="mailto:info@truhlarstvi-vranovi.cz">info@truhlarstvi-vranovi.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
