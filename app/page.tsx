import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      name: "Kosmetika pleti",
      desc: "Hloubkové čištění, ošetření podle typu pleti a poradenství, které si odnesete domů. Pracujeme s kvalitní pleťovou kosmetikou, kterou u nás můžete i koupit.",
      hair: "60–90 min",
    },
    {
      no: "02",
      name: "Modeláž nehtů a manikúra",
      desc: "Gelová i akrylová modeláž, klasická i japonská manikúra a kompletní péče o ruce. Tvar a barvu ladíme přesně podle vás.",
      hair: "45–120 min",
    },
    {
      no: "03",
      name: "Masáže a baňkování",
      desc: "Klasická i relaxační masáž zad a šíje, baňkování pro uvolnění napjatých svalů. Ideální doplněk k péči o pleť.",
      hair: "30–60 min",
    },
    {
      no: "04",
      name: "Dárkové poukazy",
      desc: "Poukaz na konkrétní ošetření nebo na částku dle přání. Připravíme ho na počkání, i na poslední chvíli před svátky.",
      hair: "na počkání",
    },
  ];

  const reasons = [
    {
      k: "Tým se pravidelně školí",
      v: "Kosmetičky i nehtové designérky chodí na kurzy — techniky i přípravky držíme aktuální, ne z roku 2008.",
    },
    {
      k: "Přípravky, kterým rozumíme",
      v: "Prodáváme vlasovou, pleťovou i tělovou kosmetiku, se kterou sami pracujeme. Poradíme, co má smysl pro vaši pleť.",
    },
    {
      k: "Jedno místo, celá péče",
      v: "Pleť, nehty, ruce i záda zvládneme v jednom salonu v Hradci Králové. Termíny přijímáme i dopoledne.",
    },
  ];

  return (
    <main className="m-main">
      <header className="m-top">
        <a className="m-wordmark" href="#" aria-label="Salon M, kosmetika Hradec Králové">
          <span className="m-mark" aria-hidden="true">M</span>
          <span className="m-word">
            Salon <em>M</em>
            <small>kosmetika · Hradec Králové</small>
          </span>
        </a>
        <a className="m-call" href="tel:+420495000000">
          <span aria-hidden="true">☎</span> Objednat se
        </a>
      </header>

      <section className="m-hero" aria-labelledby="hero-title">
        <div className="m-hero-copy">
          <p className="m-eyebrow">Kosmetický salon · Hradec Králové</p>
          <h1 id="hero-title">
            Hodina jen<br />
            <span className="m-hero-em">pro vaši pleť.</span>
          </h1>
          <p className="m-lede">
            Kosmetika, modeláž nehtů, masáže a baňkování na jednom místě. Postará
            se o vás tým, který se pravidelně školí — a přípravky, se kterými
            pracujeme, si můžete odnést i domů.
          </p>
          <div className="m-hero-cta">
            <a className="m-btn" href="tel:+420495000000">Zavolat a objednat se</a>
            <a className="m-btn m-btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
          <dl className="m-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>i dopolední termíny</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>centrum Hradce Králové</dd>
            </div>
            <div>
              <dt>Poukazy</dt>
              <dd>na počkání</dd>
            </div>
          </dl>
        </div>
        <figure className="m-hero-fig">
          <img
            src="/hero.webp"
            alt="Kosmetické ošetření pleti v Salonu M v Hradci Králové"
            className="m-hero-img"
          />
          <figcaption>Ošetření pleti na míru</figcaption>
        </figure>
      </section>

      <section className="m-services" id="sluzby" aria-labelledby="services-title">
        <div className="m-sec-head">
          <p className="m-eyebrow">Co u nás najdete</p>
          <h2 id="services-title">Nabídka salonu</h2>
        </div>
        <div className="m-serv-layout">
          <ol className="m-serv-list">
            {services.map((s) => (
              <li className="m-serv-row" key={s.no}>
                <span className="m-serv-no" aria-hidden="true">{s.no}</span>
                <div className="m-serv-body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
                <span className="m-serv-time">{s.hair}</span>
              </li>
            ))}
          </ol>
          <figure className="m-serv-fig">
            <img
              src="/section-1.webp"
              alt="Detail modeláže nehtů a péče o ruce v Salonu M"
              className="m-serv-img"
            />
          </figure>
        </div>
      </section>

      <section className="m-trust" id="o-nas" aria-labelledby="trust-title">
        <figure className="m-trust-fig">
          <img
            src="/section-2.webp"
            alt="Prostředí Salonu M — relaxační masáž a péče o tělo"
            className="m-trust-img"
          />
        </figure>
        <div className="m-trust-copy">
          <p className="m-eyebrow">Proč Salon M</p>
          <h2 id="trust-title">Salon, kterému se dá věřit</h2>
          <ul className="m-reasons">
            {reasons.map((r) => (
              <li key={r.k}>
                <strong>{r.k}</strong>
                <span>{r.v}</span>
              </li>
            ))}
          </ul>
          <p className="m-note">
            Na dopolední termíny přijímáme nové klientky i klienty — na
            kosmetiku, baňkování, modeláž nehtů, manikúru i celkovou péči o ruce.
          </p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
void ({} as CSSProperties);
