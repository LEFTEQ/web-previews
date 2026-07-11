import React from "react";

const rooms = [
  {
    n: "1",
    label: "jednolůžkový",
    title: "Pro jednoho",
    body:
      "Klidný pokoj na jednu noc i na týden. Vlastní sociální zařízení, televize se satelitem a Wi-Fi zdarma.",
  },
  {
    n: "2",
    label: "dvoulůžkový",
    title: "Ve dvou",
    body:
      "Nejžádanější volba pro páry i kolegy na služebce. Dvě samostatná lůžka nebo manželská postel — řekněte nám dopředu.",
  },
  {
    n: "3",
    label: "třílůžkový",
    title: "Ve třech",
    body:
      "Prostor navíc pro rodinu nebo partu. Stejné vybavení jako v hotelu, jen za rozumnou cenu v centru Plzně.",
  },
  {
    n: "4",
    label: "čtyřlůžkový",
    title: "Celá rodina",
    body:
      "Čtyři lůžka v jednom pokoji. Ideální na výlet za plzeňským pivovarem i na delší pobyt bez placení za dva pokoje.",
  },
];

const included = [
  {
    t: "Parkování zdarma",
    d: "Vlastní uzavřené parkoviště přímo u penzionu. Přijeďte autem a nechte ho v klidu za branou.",
  },
  {
    t: "Kuchyňka nonstop",
    d: "Trvale přístupná jídelna: káva, čaj, cukr, mlíčka, varná konvice, mikrovlnka i lednička — vše zdarma, kdykoli si vzpomenete.",
  },
  {
    t: "Snídaně vedle",
    d: "Pro náročnější zajistíme snídani formou švédských stolů ve vedlejším hotelu, jen 80 metrů pěšky.",
  },
  {
    t: "Recepce s pípou",
    d: "Restaurace v přízemí slouží jako recepce a čepuje nápoje i pochutiny k pivu. V Plzni to jinak nejde.",
  },
];

export default function Page() {
  return (
    <main className="em">
      <header className="em-top">
        <a className="em-mark" href="#" aria-label="Penzion Emma, Plzeň">
          <span className="em-mark-name">Emma</span>
          <span className="em-mark-sub">penzion · Plzeň</span>
        </a>
        <a className="em-tel" href="tel:+420602870001">+420 602 870 001</a>
      </header>

      <section className="em-hero">
        <div className="em-hero-img">
          <img
            src="/hero.webp"
            alt="Pokoj v Penzionu Emma v centru Plzně, ustlaná postel u okna"
          />
        </div>
        <div className="em-hero-copy">
          <p className="em-eyebrow">Ubytování v centru Plzně</p>
          <h1 className="em-h1">
            Klíč od pokoje,<br />
            <span className="em-h1-accent">ne od bludiště.</span>
          </h1>
          <p className="em-lead">
            Penzion Emma stojí pár minut od náměstí Republiky. Turista i člověk
            na pracovní cestě tu najde čistý pokoj, vlastní parkoviště za branou
            a kuchyňku otevřenou v kteroukoli hodinu.
          </p>
          <div className="em-hero-cta">
            <a className="em-btn" href="tel:+420602870001">Zavolat a rezervovat</a>
            <span className="em-hero-note">Řekneme vám volný termín na počkání.</span>
          </div>
        </div>
      </section>

      <section className="em-rooms" aria-labelledby="rooms-h">
        <div className="em-sec-head">
          <h2 id="rooms-h" className="em-h2">Vyberte si podle počtu lůžek</h2>
          <p className="em-sec-note">
            Jedno, dvě, tři nebo čtyři lůžka. Každý pokoj má televizi se
            satelitem, vlastní sociální zařízení a připojení k internetu —
            standard jako v hotelu, cena penzionu.
          </p>
        </div>
        <ul className="em-room-grid">
          {rooms.map((r) => (
            <li className="em-room" key={r.n}>
              <span className="em-room-key" aria-hidden="true">
                {r.n}
              </span>
              <div className="em-room-text">
                <p className="em-room-label">{r.label} pokoj</p>
                <h3 className="em-room-title">{r.title}</h3>
                <p className="em-room-body">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="em-stay" aria-labelledby="stay-h">
        <div className="em-stay-media">
          <img
            src="/section-1.webp"
            alt="Společná jídelna Penzionu Emma s kávovarem a posezením"
          />
        </div>
        <div className="em-stay-body">
          <p className="em-eyebrow">Co k pobytu patří</p>
          <h2 id="stay-h" className="em-h2">V ceně, ne za příplatek</h2>
          <ul className="em-incl">
            {included.map((i) => (
              <li className="em-incl-item" key={i.t}>
                <h3 className="em-incl-title">{i.t}</h3>
                <p className="em-incl-body">{i.d}</p>
              </li>
            ))}
          </ul>
          <div className="em-stay-photo">
            <img
              src="/section-2.webp"
              alt="Uzavřené parkoviště a vstup do Penzionu Emma"
            />
            <p className="em-stay-cap">
              Vlastní uzavřené parkoviště hned u vchodu — pár kroků a jste v
              centru.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
