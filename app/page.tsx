import type { CSSProperties } from "react";

export default function Page() {
  const styly: { cislo: string; nazev: string; stupen: string; popis: string }[] = [
    {
      cislo: "11°",
      nazev: "Samson Světlý Ležák",
      stupen: "4,7 % alk.",
      popis:
        "Sladová plnost s jemnou hořkostí žateckého chmele. Vaříme ho spodním kvašením a necháváme dozrát v ležáckých tancích, jak se to v Budějovicích dělá od nepaměti.",
    },
    {
      cislo: "12°",
      nazev: "Samson Premium",
      stupen: "5,0 % alk.",
      popis:
        "Náš vlajkový ležák. Zlatá barva, hustá pěna, čistá chuť čtyř surovin — voda z hlubinných vrtů, moravský slad, žatecký chmel a pivovarské kvasnice. Nic navíc.",
    },
    {
      cislo: "10°",
      nazev: "Samson Výčepní",
      stupen: "4,1 % alk.",
      popis:
        "Lehčí, řízné a osvěžující. Pivo pro dlouhé letní večery na zahrádce, které se pije samo a zůstává poctivé.",
    },
  ];

  return (
    <main className="pw">
      <header className="pw-nav" aria-label="Hlavní">
        <a className="pw-brand" href="#" aria-label="Pivovar Samson">
          <span className="pw-brand-est">Est. 1795</span>
          <span className="pw-brand-name">SAMSON</span>
          <span className="pw-brand-sub">Budějovický pivovar</span>
        </a>
        <nav className="pw-links">
          <a href="#piva">Naše piva</a>
          <a href="#pribeh">Náš příběh</a>
        </nav>
      </header>

      <section className="pw-hero">
        <img
          className="pw-hero-img"
          src="/hero.webp"
          alt="Vychlazená sklenice budějovického ležáku Samson s hustou pěnou"
        />
        <div className="pw-hero-veil" aria-hidden="true" />
        <div className="pw-hero-inner">
          <p className="pw-eyebrow">České Budějovice · vaříme od roku 1795</p>
          <h1 className="pw-h1">
            Ležák, který<br />
            zraje v klidu.
          </h1>
          <p className="pw-lede">
            Poctivé spodně kvašené pivo ze srdce jižních Čech. Čtyři suroviny,
            měkká budějovická voda a čas, který nepospícháme.
          </p>
          <div className="pw-hero-cta">
            <a className="pw-btn" href="#piva">
              Prohlédnout naše piva
            </a>
            <span className="pw-hero-note">Pivo si užijte s rozumem — 18+</span>
          </div>
        </div>
        <div className="pw-hero-strip" aria-hidden="true">
          <span>ŽATECKÝ CHMEL</span>
          <span>·</span>
          <span>MORAVSKÝ SLAD</span>
          <span>·</span>
          <span>MĚKKÁ VODA</span>
          <span>·</span>
          <span>SPODNÍ KVAŠENÍ</span>
          <span>·</span>
          <span>ŽATECKÝ CHMEL</span>
          <span>·</span>
          <span>MORAVSKÝ SLAD</span>
          <span>·</span>
          <span>MĚKKÁ VODA</span>
          <span>·</span>
          <span>SPODNÍ KVAŠENÍ</span>
          <span>·</span>
        </div>
      </section>

      <section className="pw-sec pw-piva" id="piva">
        <div className="pw-sec-head">
          <p className="pw-eyebrow pw-eyebrow-dark">Co načepujeme</p>
          <h2 className="pw-h2">Tři piva z jednoho ležáckého sklepa</h2>
          <p className="pw-sec-lede">
            Stupňovitost říká, kolik cukrů má mladina před kvašením — a taky jak
            plné pivo bude. Vyberte si podle chuti.
          </p>
        </div>
        <ul className="pw-list">
          {styly.map((p) => (
            <li className="pw-card" key={p.nazev}>
              <div className="pw-card-grade">
                <span className="pw-card-num">{p.cislo}</span>
                <span className="pw-card-alk">{p.stupen}</span>
              </div>
              <div className="pw-card-body">
                <h3 className="pw-card-name">{p.nazev}</h3>
                <p className="pw-card-desc">{p.popis}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="pw-sec pw-pribeh" id="pribeh">
        <div className="pw-pribeh-grid">
          <div className="pw-pribeh-media">
            <img
              src="/section-1.webp"
              alt="Měděné varné pánve v budějovické varně pivovaru Samson"
              loading="lazy"
            />
          </div>
          <div className="pw-pribeh-text">
            <p className="pw-eyebrow pw-eyebrow-dark">Náš příběh</p>
            <h2 className="pw-h2">
              Přes dvě století<br />u jedné řeky
            </h2>
            <p>
              Vaříme tam, kde se pivo vaří — v Českých Budějovicích, městě, které
              dalo světu pojem „budějovický ležák“. Sládci u nás předávají řemeslo
              z generace na generaci a nad každou várkou stojí člověk, ne jen
              tlačítko.
            </p>
            <p>
              Držíme se toho, co funguje: měkká voda z vlastních vrtů, moravský
              slad, žatecký chmel a čas na dozrání v ležáckých tancích. Žádné
              zkratky, žádné náhražky.
            </p>
            <dl className="pw-stats">
              <div>
                <dt>1795</dt>
                <dd>rok, kdy to celé začalo</dd>
              </div>
              <div>
                <dt>4</dt>
                <dd>suroviny, nic víc</dd>
              </div>
              <div>
                <dt>21 dní</dt>
                <dd>ležení ležáku ve sklepě</dd>
              </div>
            </dl>
          </div>
        </div>
        <figure className="pw-quote">
          <img
            src="/section-2.webp"
            alt="Sládek kontroluje kvalitu piva ve sklepě pivovaru"
            loading="lazy"
          />
          <figcaption>
            <blockquote>
              „Dobré pivo se nedá uspěchat. Když ho necháte odležet, poděkuje se
              vám čistou chutí a hustou pěnou.“
            </blockquote>
            <p className="pw-quote-by">— sládek pivovaru Samson, České Budějovice</p>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

// keep CSSProperties import referenced without affecting output
export const dynamic = "force-static";
const _noop: CSSProperties = {};
void _noop;
