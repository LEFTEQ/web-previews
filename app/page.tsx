import { AiImage } from "./_ui";

const sluzby = [
  {
    t: "Pronájem fasádního lešení",
    d: "Rámové lešení k zapůjčení na den, na týden i na celou stavbu. Přivezeme, postavíme, po práci zase odvezeme — vy platíte jen za dobu, kdy na něm stojíte.",
  },
  {
    t: "Výkup a prodej dílců",
    d: "Vykupujeme použité rámy, podlážky i spojky a prodáváme nové sady. Rovná domluva, platba na místě, žádné vytáčky.",
  },
  {
    t: "Montáž a demontáž",
    d: "Staví to parta, která lešení skládá každý den. Předání s protokolem a revizí — nastupujete na hotové a zajištěné.",
  },
  {
    t: "Zateplení fasád",
    d: "Zateplíme dům od soklu po římsu. Jedna parta na lešení i na fasádě, takže se nikde nečeká na cizí techniku.",
  },
  {
    t: "Nátěry fasád",
    d: "Obnova a nátěry fasád rovnou z vlastního lešení. Byt, panelák i rodinný dům — čistě a bez šrámů na omítce.",
  },
  {
    t: "Dotace Zelená úsporám",
    d: "Provedeme vás papíry k dotaci Zelená úsporám a navážeme na ni prací na fasádě. Poradíme, na co máte nárok.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Půjčovna lešení Ostrava">
          <span className="wordmark__coupler" aria-hidden="true" />
          <span className="wordmark__line">LEŠENÍ</span>
          <span className="wordmark__sub">OSTRAVA · pŮjČovna</span>
        </a>
        <a className="topbar__cta" href="tel:777111222">Zavolat 777 111 222</a>
      </header>

      <section className="hero">
        <div className="lattice" aria-hidden="true">
          <span className="lattice__standards" />
          <span className="lattice__ledgers" />
          <span className="lattice__brace" />
          <span className="lattice__couplers" />
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Petřkovice · sklad v Ostravě · výjezd do okolí</p>
            <h1 className="hero__title">
              Lešení, které stojí pevně.<br />
              <span className="hero__title--y">Spočítané do posledního dílu.</span>
            </h1>
            <p className="lead">
              Půjčujeme, prodáváme i stavíme fasádní lešení po celé Ostravě.
              Přivezeme přesně tolik dílců, kolik dům potřebuje — ani rám navíc,
              ani chybějící podlážka v pátek odpoledne.
            </p>
            <div className="hero__meta">
              <span>Pronájem i prodej</span>
              <span>Montáž s revizí</span>
              <span>Fasády &amp; zateplení</span>
            </div>
          </div>

          <figure className="hero__figure">
            <AiImage
              className="hero__img"
              src="/hero.webp"
              alt="Postavené fasádní lešení na domě v Ostravě"
            />
          </figure>
        </div>
      </section>

      <section className="sec sec--services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec__head">
          <span className="tag" aria-hidden="true">01</span>
          <div>
            <p className="eyebrow eyebrow--dark">Co u nás pořídíte</p>
            <h2 className="sec__title" id="sluzby-h">Od holých rámů po hotovou fasádu</h2>
          </div>
        </div>

        <ul className="services">
          {sluzby.map((s, i) => (
            <li className="card" key={s.t}>
              <span className="card__no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="card__t">{s.t}</h3>
              <p className="card__d">{s.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec sec--trust" id="o-nas" aria-labelledby="trust-h">
        <div className="sec__head">
          <span className="tag" aria-hidden="true">02</span>
          <div>
            <p className="eyebrow eyebrow--dark">Kdo vám ho postaví</p>
            <h2 className="sec__title" id="trust-h">
              Ostravská parta, která lešení nejen půjčuje, ale i staví
            </h2>
          </div>
        </div>

        <div className="trust__grid">
          <figure className="trust__figure">
            <AiImage
              className="trust__img"
              src="/section-2.webp"
              alt="Lešenáři při montáži rámového lešení"
            />
          </figure>

          <div className="trust__text">
            <p>
              Sídlíme v Petřkovicích a lešení skládáme na ostravských domech den
              co den — od činžáků v centru po rodinné domy v Porubě. Víme, jak
              se kotví do zdiva panelů a jak se stojí na svahu za garážemi, kde
              rovina nikde není.
            </p>
            <p>
              Každá sestava jde ven s revizí a předávacím protokolem. Řemeslníci
              tak nastupují na lešení, které drží a je zajištěné podle normy —
              ne na něco, co „nějak stojí“.
            </p>
            <ul className="facts">
              <li><span>Sklad</span>Ostrava — dílce naskladněné a připravené</li>
              <li><span>Revize</span>Předání s protokolem a certifikátem</li>
              <li><span>Dosah</span>Ostrava a okolí, montáž i pouhý pronájem</li>
            </ul>
          </div>

          <aside className="contact" aria-label="Kontakt na půjčovnu">
            <span className="contact__coupler contact__coupler--tl" aria-hidden="true" />
            <span className="contact__coupler contact__coupler--tr" aria-hidden="true" />
            <span className="contact__coupler contact__coupler--bl" aria-hidden="true" />
            <span className="contact__coupler contact__coupler--br" aria-hidden="true" />
            <p className="contact__kicker">Domluvte lešení</p>
            <dl className="contact__list">
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:777111222">777 111 222</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@example.cz">info@example.cz</a></dd>
              </div>
              <div>
                <dt>Adresa</dt>
                <dd>Ukázková 123, Ostrava</dd>
              </div>
            </dl>
            <a className="contact__btn" href="tel:777111222">Zavolat a domluvit termín</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
