import type { CSSProperties } from "react";

export default function Page() {
  const jizdy = [
    {
      code: "B",
      title: "Osobák, skupina B",
      lead: "Nejčastější kurz. Od první jízdy na cvičáku po samostatné popojíždění Libercem.",
      body: "Teorii dáte online z domova, jízdy plánujeme podle vás — i po práci nebo o víkendu. Každou jízdu vidíte zpětně z palubní kamery.",
    },
    {
      code: "A",
      title: "Motorky A / A2 / A1 / AM",
      lead: "Od skútru po velký objem. Podle věku a řidičáku, který už máte.",
      body: "Nácvik pomalých manévrů, brzdění a čtení provozu tak, aby vás na silnici nic nepřekvapilo. Motorku i přilbu domluvíme.",
    },
    {
      code: "+",
      title: "Kondiční jízdy",
      lead: "Řidičák máte, ale za volant se dlouho netroufáte.",
      body: "Vezmeme to od parkování a rozjezdů do kopce až po nájezd na Rychlostní silnici I/35. Tempem, které zvládnete.",
    },
  ];

  const vyhody = [
    { k: "Kamera i GPS", v: "Každou jízdu si po výcviku projedete znovu — vidíte přesně, kde ubrat a co pochválit." },
    { k: "Jízda navíc zdarma", v: "Nad rámec povinného počtu jízd jednu přidáme. A jednu i pro jednoho z rodičů." },
    { k: "Teorie z gauče", v: "Přednášky online, testy nanečisto kdykoliv. Do učebny jen, když chcete probrat detaily." },
    { k: "Jeden učitel", v: "Od první jízdy po zkoušku jezdíte pořád se stejným instruktorem, který vás zná." },
  ];

  return (
    <main className="ae">
      <header className="ae-top">
        <a className="ae-brand" href="#" aria-label="Autoškola EMKO, úvod">
          <span className="ae-brand-mark" aria-hidden="true">
            <span className="ae-brand-l">L</span>
          </span>
          <span className="ae-brand-text">
            <span className="ae-brand-name">EMKO</span>
            <span className="ae-brand-sub">autoškola · Liberec</span>
          </span>
        </a>
        <a className="ae-call" href="tel:+420608444716">
          <span className="ae-call-label">Zavolat</span>
          <span className="ae-call-num">608 444 716</span>
        </a>
      </header>

      <section className="ae-hero" aria-labelledby="ae-hero-title">
        <div className="ae-hero-media">
          <img
            src="/hero.webp"
            alt="Výcvikové auto autoškoly EMKO v ulicích Liberce"
            className="ae-hero-img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="ae-hero-copy">
          <p className="ae-eyebrow">Řidičák v Liberci od roku 2011</p>
          <h1 id="ae-hero-title" className="ae-hero-title">
            Ještě dnes na
            <span className="ae-hero-plate">
              <span className="ae-plate-eu" aria-hidden="true">LB</span>
              <span className="ae-plate-txt">volantu</span>
            </span>
          </h1>
          <p className="ae-hero-lead">
            Autoškola EMKO učí Liberecko jezdit v klidu a s přehledem — auto,
            motorku i návrat za volant po pauze. Termíny podle vás, každou jízdu
            si projedete z kamery.
          </p>
          <div className="ae-hero-cta">
            <a className="ae-btn ae-btn-primary" href="tel:+420608444716">
              Zavolat a domluvit termín
            </a>
            <a className="ae-btn ae-btn-ghost" href="#kurzy">
              Prohlédnout kurzy
            </a>
          </div>
          <dl className="ae-hero-facts">
            <div>
              <dt>Skupiny</dt>
              <dd>B · A · A2 · A1 · AM</dd>
            </div>
            <div>
              <dt>Kde jezdíme</dt>
              <dd>Liberec a okolí</dd>
            </div>
            <div>
              <dt>Teorie</dt>
              <dd>online z domova</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ae-kurzy" id="kurzy" aria-labelledby="ae-kurzy-title">
        <div className="ae-sec-head">
          <p className="ae-eyebrow ae-eyebrow-dark">Co u nás uděláte</p>
          <h2 id="ae-kurzy-title" className="ae-sec-title">
            Tři cesty za řidičákem
          </h2>
          <p className="ae-sec-lead">
            Ať začínáte od nuly, nebo se jen vracíte za volant, vede vás pořád
            stejný instruktor. Vyberte si, co potřebujete.
          </p>
        </div>

        <div className="ae-figure">
          <img
            src="/section-1.webp"
            alt="Instruktor autoškoly EMKO vysvětluje žákovi řízení ve voze"
            className="ae-figure-img"
            width={1400}
            height={900}
          />
        </div>

        <ul className="ae-cards">
          {jizdy.map((j) => (
            <li key={j.code} className="ae-card">
              <span className="ae-card-plate" aria-hidden="true">
                {j.code}
              </span>
              <h3 className="ae-card-title">{j.title}</h3>
              <p className="ae-card-lead">{j.lead}</p>
              <p className="ae-card-body">{j.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ae-duvera" aria-labelledby="ae-duvera-title">
        <div className="ae-duvera-grid">
          <div className="ae-duvera-media">
            <img
              src="/section-2.webp"
              alt="Palubní kamera a záznam z výcvikové jízdy autoškoly EMKO"
              className="ae-duvera-img"
              width={1200}
              height={1400}
            />
          </div>
          <div className="ae-duvera-copy">
            <p className="ae-eyebrow ae-eyebrow-dark">Proč zrovna EMKO</p>
            <h2 id="ae-duvera-title" className="ae-sec-title">
              Čekejte vždy o&nbsp;něco víc
            </h2>
            <p className="ae-sec-lead">
              Nejsme fabrika na řidičáky. U nás jde o to, abyste po zkoušce
              opravdu uměli jezdit — v provozu, za deště, v centru Liberce.
            </p>
            <ul className="ae-perks">
              {vyhody.map((p) => (
                <li key={p.k} className="ae-perk">
                  <span className="ae-perk-key">{p.k}</span>
                  <span className="ae-perk-val">{p.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

void ({} as CSSProperties);
