import React from "react";

export default function Page() {
  const services = [
    {
      code: "WEBASTO",
      name: "Nezávislé topení",
      desc: "Montáž a servis Webasto a Planar. Sednete do vyhřátého auta i v mrazu — nastartujete telefonem nebo časovačem, sklo je odmrzlé, motor šetříte.",
      spec: "Webasto · Planar · dálkové ovládání",
    },
    {
      code: "CAM",
      name: "Parkovací kamery a senzory",
      desc: "Couvací kamera s vodicími čarami, přední i zadní senzory. Napojíme na originální displej vozu, ať parkujete na centimetr přesně.",
      spec: "couvací kamera · PDC · 360°",
    },
    {
      code: "TOW",
      name: "Tažné zařízení",
      desc: "Pevné i odnímatelné tažné s originální kabeláží a elektronikou. Přívěs i nosič kol utáhnete bezpečně, s korektní funkcí světel a asistentů.",
      spec: "pevné · odnímatelné · 7/13 pin",
    },
    {
      code: "MEDIA",
      name: "Multimédia a rádia",
      desc: "Nové autorádio, reproduktory, zesilovače. Zvuk vyladíme na míru interiéru — hudba, hovory i navigace tak, jak čekáte.",
      spec: "rádia · repro · DSP",
    },
    {
      code: "CARPLAY",
      name: "CarPlay a Android Auto",
      desc: "Aktivace a nastavení bezdrátového CarPlay i Android Auto. Telefon se spojí s vozem sám — mapy, zprávy i playlist rovnou na displeji.",
      spec: "aktivace · bezdrát · kabelem",
    },
    {
      code: "CHIP",
      name: "Chiptuning a úpravy jednotek",
      desc: "Úprava řídicí jednotky pro víc výkonu i nižší spotřebu. Měříme, ladíme a zapíšeme jen to, co motor bez problémů unese.",
      spec: "výkon · spotřeba · deaktivace chyb",
    },
  ];

  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#" aria-label="AutoelektroHoráček, autoelektrika Pardubice">
          <span className="wm-bolt" aria-hidden="true">⌁</span>
          <span className="wm-name">Autoelektro<b>Horáček</b></span>
          <span className="wm-loc">Pardubice</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#dilna">Dílna</a>
          <a className="topcta" href="tel:+420737071412">737 071 412</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img src="/hero.webp" alt="Detail práce v autoelektrikářské dílně — zapojování kabeláže ve vozidle" />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Autoelektrika · Pardubice a okolí</p>
          <h1 className="hero-title">
            Ne každý drát<br />
            vede tam,<br />
            <span className="hl">kam si myslíte.</span>
          </h1>
          <p className="hero-lead">
            Nezávislé topení, kamery, tažné, CarPlay i chiptuning.
            Rozvody vašeho vozu čteme jako mapu — a zapojíme je čistě,
            aby držely roky, ne do první zimy.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420737071412">Zavolat do dílny</a>
            <a className="btn btn-ghost" href="#sluzby">Co umíme</a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Autorizace</dt>
              <dd>Webasto</dd>
            </div>
            <div>
              <dt>Náhradní vůz</dt>
              <dd>po domluvě</dd>
            </div>
            <div>
              <dt>Diagnostika</dt>
              <dd>na počkání</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow eyebrow-dark">Svorkovnice</p>
          <h2 className="sec-title">Šest okruhů, na které se zapojíme</h2>
          <p className="sec-note">
            Každá zakázka začíná měřením a končí funkčním testem. Žádné
            provizorní skrutky do palubovky — jen originální konektory a
            kabeláž vedená tak, jak by ji vedl výrobce.
          </p>
        </div>

        <ul className="grid">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card-code">{s.code}</span>
              <h3 className="card-title">{s.name}</h3>
              <p className="card-desc">{s.desc}</p>
              <p className="card-spec">{s.spec}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" id="dilna">
        <div className="trust-media">
          <img src="/section-1.webp" alt="Montážní dílna AutoelektroHoráček — vozidlo připravené k instalaci elektroniky" />
        </div>

        <div className="trust-body">
          <p className="eyebrow eyebrow-dark">Montážní dílna</p>
          <h2 className="sec-title">Auto vám vrátíme uklizené a otestované</h2>
          <p className="trust-lead">
            V Pardubicích děláme autoelektriku tak, aby po nás nezůstaly
            odhalené dráty ani hlášky na palubovce. Vůz dostanete zpět
            vyzkoušený — od dálkového startu topení po couvací kameru.
          </p>

          <ol className="steps">
            <li>
              <span className="step-n">01</span>
              <div>
                <h3>Zavoláte, popíšete vůz</h3>
                <p>Značka, rok a co potřebujete. Řekneme cenu i termín rovnou do telefonu.</p>
              </div>
            </li>
            <li>
              <span className="step-n">02</span>
              <div>
                <h3>Přivezete, půjčíme náhradní</h3>
                <p>U delších montáží nezůstanete bez auta — po domluvě máme náhradní vůz.</p>
              </div>
            </li>
            <li>
              <span className="step-n">03</span>
              <div>
                <h3>Vyzvednete otestované</h3>
                <p>Vše projedeme s vámi na místě — funkce, ovládání i záruka na práci.</p>
              </div>
            </li>
          </ol>

          <figure className="quote">
            <img src="/section-2.webp" alt="Instalované nezávislé topení Webasto a kabeláž ve voze" />
            <figcaption>
              „Sedneme do vyhřátého auta, kamera couvá sama a telefon
              naskočí do rádia. Přesně to, co jsme chtěli — a čistě
              udělané.“ <span>— zákazník, Pardubice</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
