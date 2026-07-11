const effects = [
  { name: 'Panenka', desc: 'Otevřený, kulatý pohled — řasy prodloužené hlavně ve středu oka' },
  { name: 'Kočičí efekt', desc: 'Zdvižené vnější koutky, protáhlý mandlový tvar' },
  { name: 'Přirozený efekt', desc: 'Zahuštění vlastních řas beze změny tvaru oka' },
  { name: 'Mokrý efekt', desc: 'Lesklý, hustý dojem jako po nanesení řasenky' },
  { name: 'Efekt paprsků', desc: 'Střídání délek pro dramatický, rozevlátý pohled' },
];

const masaze = [
  { name: 'Klasická', desc: 'Obnova svalové tkáně a lepší prokrvení.' },
  { name: 'Relaxační', desc: 'Proti stresu, únavě a svalovému napětí.' },
  { name: 'Lávové kameny', desc: 'Hladké ohřáté kameny pro hloubkové uvolnění.' },
  { name: 'Baňková', desc: 'Podtlakové baňky uvolní napětí a rozproudí krev.' },
  { name: 'Breussová', desc: 'Jemné pohyby a oleje pro uvolnění páteře.' },
  { name: 'Sportovní', desc: 'Regenerace, výkon a prevence zranění.' },
  { name: 'Anticelulitidní', desc: 'Hloubkové působení na problémové partie.' },
  { name: 'Lifting obličeje', desc: 'Tonizuje svaly, zpevňuje pleť, zjemňuje vrásky.' },
];

export default function Page() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <span>NextGen <b>Beauty</b></span>
          <small>kosmetický salon · Praha</small>
        </div>
        <ul className="nav-links">
          <li><a href="#rasy">Řasy</a></li>
          <li><a href="#masaze">Masáže</a></li>
          <li><a href="#onas">O nás</a></li>
          <li><a className="nav-cta" href="tel:+420773061222">Rezervovat</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div className="reveal">
            <span className="hero-eyebrow">Prodlužování řas · objemy 1–10D</span>
            <h1>Otevřete oči.<br/>Zbytek už <em>vidíme</em> my.</h1>
            <p className="lead">
              Ruční prodlužování řas, které vydrží týdny a sedne přesně vašemu tvaru oka.
              Odstranění máte pokaždé v ceně. V salonu na Opletalově 27, pár kroků od Hlavního nádraží.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420773061222">Rezervovat termín</a>
              <a className="btn btn-ghost" href="#rasy">Prohlédnout efekty</a>
            </div>
          </div>

          <figure className="hero-figure reveal d2">
            <svg className="lash-arc" viewBox="0 0 300 120" aria-hidden="true">
              <line x1="30" y1="110" x2="20" y2="55"/>
              <line x1="66" y1="104" x2="52" y2="38"/>
              <line x1="104" y1="98" x2="90" y2="24"/>
              <line x1="150" y1="96" x2="150" y2="16"/>
              <line x1="196" y1="98" x2="210" y2="24"/>
              <line x1="234" y1="104" x2="248" y2="38"/>
              <line x1="270" y1="110" x2="280" y2="55"/>
            </svg>
            <img src="/hero.webp" alt="Detail očí klientky s profesionálně prodlouženými řasami v salonu NextGen Beauty" />
            <figcaption className="hero-tag">990 Kč<span>Akce Seznamka — první návštěva u nové stylistky</span></figcaption>
          </figure>
        </div>
      </header>

      <section className="sec" id="rasy">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">01 — Řasy</span>
            <h2>Pět efektů, <em>jeden</em> tvar vašeho oka</h2>
            <p>Podle tvaru oka a toho, jak výrazný pohled chcete, vybereme efekt společně. Každá aplikace je ruční — řasu po řase.</p>
          </div>

          <div className="lash-band">
            <img src="/section-1.webp" alt="Ukázka prodloužených řas z galerie efektů salonu NextGen Beauty" />
            <ul className="effects">
              {effects.map((e, i) => (
                <li className="effect" key={e.name}>
                  <span className="e-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="e-name">{e.name}</span>
                  <span className="e-desc">{e.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec" id="masaze">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">02 — Masáže</span>
            <h2>Nová masérka. <em>Patnáct</em> let v rukou</h2>
            <p>Do studia přišla masérka s více než 15 lety praxe a přinesla nové druhy masáží pro hlubokou relaxaci i regeneraci. Vyberte si podle toho, co dnes tělo potřebuje.</p>
          </div>
          <div className="service-grid">
            {masaze.map((m) => (
              <article className="service" key={m.name}>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="onas">
        <div className="wrap about">
          <img src="/section-2.webp" alt="Interiér kosmetického salonu NextGen Beauty v Praze" />
          <div className="about-body">
            <span className="sec-num">03 — O nás</span>
            <h2>Salon, který vede <em>dvojice</em></h2>
            <p className="founders">Marie &amp; Vladislav</p>
            <p>
              NextGen Beauty založili Marie a Vladislav — odborníci na krásu s víc než pěti lety praxe.
              Specializujeme se na laserovou a elektroepilaci, masáže a prodlužování řas a nabízíme komplexní péči na jednom místě.
            </p>
            <div className="stats">
              <div className="stat"><b>5+</b><span>let zkušeností</span></div>
              <div className="stat"><b>10 000+</b><span>spokojených klientek</span></div>
            </div>
            <div className="place">
              Opletalová 958/27, 110 00 Praha<br/>
              <a href="tel:+420773061222">+420 773 061 222</a><br/>
              <a href="mailto:nextgenbeauti@gmail.com">nextgenbeauti@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
