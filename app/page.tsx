const machines = [
  {
    name: "Minirýpadla",
    use: "Přípojky, základy a práce v omezeném prostoru",
    weight: "od 1,8 t",
  },
  {
    name: "Pásová rýpadla",
    use: "Výkopy, skrývky a přesuny zeminy",
    weight: "do těžkého terénu",
  },
  {
    name: "Nakladače",
    use: "Nakládka suti, zeminy i sypkých materiálů",
    weight: "kolové i smykové",
  },
  {
    name: "Válce a dampry",
    use: "Zhutnění podloží a doprava materiálu po stavbě",
    weight: "pro malé i velké zakázky",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/hero.webp"
          alt="Stavební stroj z půjčovny MARENT při práci v terénu"
          width="1800"
          height="1200"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#nahore" aria-label="MARENT — úvodní stránka">
            <span>MA</span><i aria-hidden="true" /><span>RENT</span>
          </a>
          <nav aria-label="Hlavní navigace">
            <a href="#stroje">Stroje</a>
            <a href="#jistota">Jak pronájem funguje</a>
            <a className="nav-phone" href="tel:+420774880111">774 880 111</a>
          </nav>
        </header>

        <div className="hero__content" id="nahore">
          <p className="eyebrow">Půjčovna stavebních strojů · Plzeň</p>
          <h1 id="hero-title">
            Na stavbu.<br />
            <span>Bez čekání.</span>
          </h1>
          <p className="hero__lead">
            Rýpadla, nakladače, válce i dampry připravené na práci. Pomůžeme vám vybrat správný stroj a po dobu pronájmu zajistíme technický servis.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="tel:+420774880111">Zavolat pro dostupnost</a>
            <a className="button button--quiet" href="#stroje">Vybrat typ stroje</a>
          </div>
        </div>

        <div className="machine-strip" aria-label="Hlavní výhody půjčovny">
          <p><strong>Plzeň</strong><span>výdejní místo</span></p>
          <p><strong>Servis</strong><span>po celou dobu nájmu</span></p>
          <p><strong>Pro stavbu</strong><span>od výkopu po hutnění</span></p>
        </div>
      </section>

      <section className="fleet section" id="stroje" aria-labelledby="fleet-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow--dark">Technika podle práce</p>
          <h2 id="fleet-title">Co potřebujete dostat ze země — a co po ní převézt?</h2>
          <p>Popište nám terén, rozsah zakázky a termín. Doporučíme stroj, který nebude zbytečně malý ani draze předimenzovaný.</p>
        </div>

        <div className="fleet-layout">
          <div className="fleet-visual">
            <img
              src="/section-1.webp"
              alt="Rýpadlo MARENT připravené k pronájmu"
              width="1200"
              height="900"
              loading="lazy"
            />
            <div className="bucket-mark" aria-hidden="true">PLZEŇ / STROJE</div>
          </div>

          <div className="machine-list">
            {machines.map((machine) => (
              <article className="machine" key={machine.name}>
                <div>
                  <h3>{machine.name}</h3>
                  <p>{machine.use}</p>
                </div>
                <span>{machine.weight}</span>
              </article>
            ))}
            <p className="more-machines">Dále půjčujeme dozery, drtiče, třídiče, příkopové válce a užitková vozidla na pobočce Plzeň.</p>
          </div>
        </div>
      </section>

      <section className="service section" id="jistota" aria-labelledby="service-title">
        <div className="service__image-wrap">
          <img
            src="/section-2.webp"
            alt="Detail stavebního stroje kontrolovaného před pronájmem"
            width="1200"
            height="1000"
            loading="lazy"
          />
          <p className="service-tag">Stroj má pracovat.<br />Ne stát.</p>
        </div>

        <div className="service__content">
          <p className="eyebrow eyebrow--dark">Jistota během zakázky</p>
          <h2 id="service-title">Pronájmem naše práce nekončí.</h2>
          <p className="service__intro">Techniku připravíme, vysvětlíme obsluhu a zůstáváme na telefonu. Když se na stavbě něco změní, řešíte to s lidmi, kteří stroje znají.</p>

          <dl className="service-points">
            <div>
              <dt>Před převzetím</dt>
              <dd>Společně ověříme nasazení, příslušenství a podmínky v terénu.</dd>
            </div>
            <div>
              <dt>Během pronájmu</dt>
              <dd>Poskytujeme plný technický servis, abyste se mohli soustředit na zakázku.</dd>
            </div>
            <div>
              <dt>Jedno přímé spojení</dt>
              <dd><a href="tel:+420774880111">+420 774 880 111</a><br /><a href="mailto:info@marent.cz">info@marent.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
