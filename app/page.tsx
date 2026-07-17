import type { ReactNode } from "react";

type Room = {
  tag: string;
  name: string;
  desc: string;
};

const rooms: Room[] = [
  {
    tag: "č. 08",
    name: "Pokoj Standard",
    desc: "Klidný pokoj s novou předokenní elektrickou roletou, která odhluční i zatemní. Ideální na jednu dvě noci v centru.",
  },
  {
    tag: "č. 21",
    name: "Pokoj Superior",
    desc: "Prostornější pokoj v rustikálním duchu domu z roku 1910, s velkou koupelnou a vanou pro dva.",
  },
  {
    tag: "apt. 03",
    name: "Apartmá",
    desc: "Obývací část s kuchyňským koutem — varná deska, lednice, mikrovlnka i nádobí. Pro rodiny i delší pobyt.",
  },
  {
    tag: "apt. 14",
    name: "Rezidenční pobyt",
    desc: "Dlouhodobé bydlení za individuální ceny. Velká koupelna s více umyvadly, plně vybavená kuchyň.",
  },
];

const facts: { value: string; label: string }[] = [
  { value: "1910", label: "rok postavení domu" },
  { value: "50", label: "pokojů a apartmá" },
  { value: "4★", label: "certifikovaný hotel" },
  { value: "Stodolní", label: "přímo na ulici v centru" },
];

function Plaque({ line, children }: { line: string; children: ReactNode }) {
  return (
    <div className="b-plaque">
      <span className="b-plaque__eyebrow">{line}</span>
      <h2 className="b-plaque__title">{children}</h2>
    </div>
  );
}

export default function Page() {
  return (
    <main className="b-main">
      <section className="b-hero" aria-labelledby="b-wordmark">
        <div className="b-hero__tile" aria-hidden="true" />
        <div className="b-hero__inner">
          <div className="b-streetplate">
            <span className="b-streetplate__k">Stodolní</span>
            <span className="b-streetplate__n">8</span>
            <span className="b-streetplate__c">Ostrava · Moravská Ostrava</span>
          </div>

          <h1 id="b-wordmark" className="b-wordmark">Brioni</h1>
          <p className="b-hero__sub">Butikový hotel · est. 1910</p>

          <span className="b-rule" aria-hidden="true" />

          <p className="b-hero__lede">
            Padesát pokojů a apartmá v secesním domě z roku 1910 — s domácí
            atmosférou, přímo na proslulé Stodolní ulici v srdci Ostravy.
          </p>

          <div className="b-hero__actions">
            <a className="b-btn" href="tel:+420777111222">Rezervovat pobyt</a>
            <a className="b-btn b-btn--ghost" href="#pokoje">Prohlédnout pokoje</a>
          </div>
        </div>
      </section>

      <section id="pokoje" className="b-section" aria-labelledby="b-rooms-h">
        <Plaque line="Ubytování">
          <span id="b-rooms-h">Pokoje a apartmá</span>
        </Plaque>

        <p className="b-section__intro">
          Každý pokoj má svoje číslo na mosazné cedulce u dveří — od klidného
          standardu po rezidenční apartmá s vlastní kuchyní. Většina pokojů dnes
          disponuje venkovními odhlučňujícími a zatemňujícími roletami.
        </p>

        <ul className="b-rooms">
          {rooms.map((room) => (
            <li key={room.tag} className="b-room">
              <span className="b-tag" aria-hidden="true">{room.tag}</span>
              <div className="b-room__body">
                <h3 className="b-room__name">{room.name}</h3>
                <p className="b-room__desc">{room.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="b-package">
          <p className="b-package__kicker">Speciální nabídka</p>
          <h3 className="b-package__title">Pobyt Colours of Ostrava 2025</h3>
          <p className="b-package__desc">
            Minimálně tři noci v různých typech pokojů a apartmá, snídaně formou
            bufetu v hotelové restauraci Schindler. Cena dohodou.
          </p>
          <p className="b-package__note">
            Balíček rezervujeme jen telefonicky nebo e-mailem na recepci —
            ne přes formulář.
          </p>
        </div>
      </section>

      <section className="b-section b-section--about" aria-labelledby="b-about-h">
        <Plaque line="O hotelu">
          <span id="b-about-h">Dům z roku 1910</span>
        </Plaque>

        <div className="b-about">
          <div className="b-about__text">
            <p>
              Brioni je certifikovaný čtyřhvězdičkový butikový hotel s domácí
              atmosférou. Stojíme v secesním domě z roku 1910 na rohu Stodolní —
              tam, kde má Ostrava svoje modré smaltované cedule a mosazné
              kování na dveřích.
            </p>
            <p>
              Snídani i večeři nabízíme v hotelové restauraci Schindler. Pro
              firmy zajišťujeme konference a společenské akce na míru. K tomu
              rezidenční pobyty pro ty, kdo v Ostravě zůstávají déle.
            </p>
          </div>

          <dl className="b-facts">
            {facts.map((f) => (
              <div key={f.label} className="b-fact">
                <dt className="b-fact__value">{f.value}</dt>
                <dd className="b-fact__label">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="b-contact">
          <p className="b-contact__row"><span>Recepce</span> 777 111 222</p>
          <p className="b-contact__row"><span>E-mail</span> info@example.cz</p>
          <p className="b-contact__row"><span>Adresa</span> Ukázková 123, Ostrava</p>
        </div>
      </section>
    </main>
  );
}
