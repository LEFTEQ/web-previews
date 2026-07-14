import React from "react";

export default function Page() {
  const services = [
    {
      tag: "Rp.",
      title: "Výdej na recept a e-recept",
      body:
        "Přijďte s papírovým receptem nebo jen s číslem e-receptu z SMS či e-mailu. Vydáme na počkání a vysvětlíme, jak a kdy lék užívat.",
    },
    {
      tag: "Mag.",
      title: "Magistraliter příprava",
      body:
        "Masti, roztoky, kapsle i čípky mícháme individuálně podle předpisu lékaře — navážené na desetinu gramu v naší laboratoři.",
    },
    {
      tag: "OTC",
      title: "Volný prodej",
      body:
        "Léky bez receptu, vitaminy, zdravotnické prostředky i kojenecká výživa. Poradíme, co se k sobě hodí a co ne.",
    },
    {
      tag: "Cesta",
      title: "Cestovní lékárnička",
      body:
        "Chystáte se na dovolenou nebo do zahraničí? Sestavíme lékárničku na míru — repelenty, léky proti průjmu i vaše chronická medikace.",
    },
  ];

  const hours = [
    { d: "Pondělí – pátek", h: "7:00 – 17:00" },
    { d: "Sobota", h: "8:00 – 12:00" },
    { d: "Neděle a svátky", h: "zavřeno" },
  ];

  return (
    <main className="pg">
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap hero-top">
          <a className="wordmark" href="#" aria-label="Ústavní lékárna, Nemocnice České Budějovice">
            <span className="wm-rp">Rp.</span>
            <span className="wm-txt">
              <span className="wm-name">Ústavní lékárna</span>
              <span className="wm-sub">Nemocnice České Budějovice</span>
            </span>
          </a>
          <p className="hero-loc">České Budějovice · B. Němcové 585/54</p>
        </div>

        <div className="wrap hero-grid">
          <div className="label-card">
            <p className="eyebrow r1">Výdejní štítek · vydává ústavní lékárna</p>

            <div className="rp-row r2">
              <span className="rp-mark">Rp.</span>
              <h1 id="hero-h">Léky na recept i e-recept vydáme na počkání.</h1>
            </div>

            <p className="sig r3">
              <span className="sig-tag">Sig.</span>
              Přineste papírový recept nebo číslo e-receptu. Poradíme s dávkováním a připravíme i léky míchané přímo pro vás.
            </p>

            <div className="cta-row r4">
              <a className="btn btn-amber" href="tel:+420387871111">
                Zavolat 387 87 11 11
              </a>
              <a className="btn btn-ghost" href="mailto:lekarna@nemcb.cz">
                Napsat lékárně
              </a>
            </div>

            <dl className="mini r5">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá 7:00–17:00</dd>
              </div>
              <div>
                <dt>Kde</dt>
                <dd>Areál nemocnice, pavilon C</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-fig r6">
            <img
              src="/hero.webp"
              alt="Výdejní pult ústavní lékárny Nemocnice České Budějovice"
              loading="eager"
            />
            <figcaption>Výdejní pult ústavní lékárny</figcaption>
          </figure>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="services" aria-labelledby="svc-h">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow-ink">Sortiment</p>
            <h2 id="svc-h">Co u nás pořídíte</h2>
            <p className="lead">
              Od receptu přes individuálně míchané léky až po volný prodej — všechno na jednom místě v areálu nemocnice, se skladem přímo za pultem.
            </p>
          </header>

          <figure className="band">
            <img
              src="/section-1.webp"
              alt="Regály s léky a přípravna v ústavní lékárně"
              loading="lazy"
            />
          </figure>

          <ul className="svc-grid">
            {services.map((s) => (
              <li className="svc" key={s.title}>
                <span className="svc-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KDE A KDY / DŮVĚRA */}
      <section className="visit" aria-labelledby="visit-h">
        <div className="wrap visit-grid">
          <div className="visit-info">
            <p className="eyebrow eyebrow-paper">Kde a kdy</p>
            <h2 id="visit-h">Najdete nás v areálu nemocnice</h2>
            <p className="lead lead-paper">
              Lékárnu vede tým atestovaných farmaceutů Nemocnice České Budějovice. Vydáváme pro pacienty i veřejnost — stačí projít hlavním vjezdem k pavilonu&nbsp;C.
            </p>

            <table className="hours">
              <caption>Otevírací doba pro výdej</caption>
              <tbody>
                {hours.map((r) => (
                  <tr key={r.d}>
                    <th scope="row">{r.d}</th>
                    <td>{r.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="contact">
              <a className="crow" href="tel:+420387871111">
                <span className="crow-k">Telefon</span>
                <span className="crow-v">387 87 11 11</span>
                <span className="crow-do">Zavolat →</span>
              </a>
              <a className="crow" href="mailto:lekarna@nemcb.cz">
                <span className="crow-k">E-mail</span>
                <span className="crow-v">lekarna@nemcb.cz</span>
                <span className="crow-do">Napsat →</span>
              </a>
              <p className="addr">
                <span className="crow-k">Adresa</span>
                B. Němcové 585/54, 370 01 České Budějovice
              </p>
            </div>

            <ul className="chips">
              <li>Zabezpečené spojení (HTTPS)</li>
              <li>Údaje aktuální k roku 2026</li>
            </ul>
          </div>

          <figure className="visit-fig">
            <img
              src="/section-2.webp"
              alt="Farmaceut připravuje lék na míru v ústavní lékárně"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
