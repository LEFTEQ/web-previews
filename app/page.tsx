import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      nazev: "Vstupní vyšetření a nafocení",
      cas: "cca 60 min",
      popis:
        "Projdeme spolu stav dásní i zubů, změříme hloubku dásňových chobotů a založíme vám kartu. Uvidíte přesně, kde se plak drží nejvíc — a proč.",
    },
    {
      cislo: "02",
      nazev: "Odstranění zubního kamene a plaku",
      cas: "cca 45 min",
      popis:
        "Ultrazvukem i ručními nástroji sundáme tvrdý kámen nad i pod dásní. Šetrně, s ohledem na citlivá místa — bez zbytečné bolesti.",
    },
    {
      cislo: "03",
      nazev: "Air-flow a leštění",
      cas: "cca 30 min",
      popis:
        "Pískováním jemným práškem sundáme pigmentace od kávy, čaje i cigaret. Zuby po něm zůstanou hladké, takže se na ně plak hůř chytá.",
    },
    {
      cislo: "04",
      nazev: "Nácvik čištění na míru",
      cas: "cca 15 min",
      popis:
        "Ukážeme vám techniku pro vaše zuby — kartáček, mezizubní kartáčky i nit. Domů odejdete s plánem, který doma opravdu zvládnete.",
    },
  ];

  const proc = [
    {
      k: "Střekov, přízemí kliniky LMT",
      v: "Prostřední vchod, bezbariérově. Zaparkujete přímo před domem, nemusíte hledat po centru.",
    },
    {
      k: "Ošetří vás vždy stejná hygienistka",
      v: "Znáte svůj chrup, my známe váš. Kontinuita, ne pokaždé někdo jiný.",
    },
    {
      k: "Termín do dvou týdnů",
      v: "Neobjednáváme na půl roku dopředu. Zavolejte a domluvíme se na nejbližší volný čas.",
    },
  ];

  return (
    <main className="ed">
      <header className="ed-top">
        <a className="ed-mark" href="#" aria-label="Enta Dent — dentální hygiena Ústí nad Labem">
          <span className="ed-mark-a">enta</span>
          <span className="ed-mark-b">dent</span>
          <span className="ed-mark-dot" aria-hidden="true" />
        </a>
        <a className="ed-tel" href="tel:+420775773005">
          <span className="ed-tel-lbl">Objednání</span>
          <span className="ed-tel-num">+420 775 773 005</span>
        </a>
      </header>

      <section className="ed-hero" aria-labelledby="ed-hero-h">
        <div className="ed-hero-text">
          <p className="ed-eyebrow">Dentální hygiena · Ústí nad Labem — Střekov</p>
          <h1 id="ed-hero-h">
            Hladké zuby
            <br />
            poznáte <em>jazykem</em>.
          </h1>
          <p className="ed-lede">
            Profesionální dentální hygiena, po které přejedete jazykem po zubech a
            nenarazíte na jediné drsné místo. Odstraníme kámen, pigmentace od kávy
            i čaje a naučíme vás udržet to doma.
          </p>
          <div className="ed-hero-cta">
            <a className="ed-btn" href="tel:+420775773005">
              Objednat hygienu
            </a>
            <a className="ed-btn-ghost" href="#postup">
              Jak to probíhá
            </a>
          </div>
          <dl className="ed-facts">
            <div>
              <dt>Zbrusu hladký povrch</dt>
              <dd>po air-flow</dd>
            </div>
            <div>
              <dt>Termín do 14 dnů</dt>
              <dd>bez čekání</dd>
            </div>
          </dl>
        </div>
        <figure className="ed-hero-img">
          <img
            src="/hero.webp"
            width={1200}
            height={1400}
            alt="Dentální hygienistka ošetřuje pacienta v ordinaci Enta Dent"
          />
        </figure>
      </section>

      <section className="ed-steps" id="postup" aria-labelledby="ed-steps-h">
        <div className="ed-sec-head">
          <p className="ed-eyebrow">Návštěva krok za krokem</p>
          <h2 id="ed-steps-h">Jedna hodina a půl, čtyři fáze</h2>
          <p className="ed-sec-sub">
            Nic vás nepřekvapí. Tady je přesně to, co se u nás při hygieně děje —
            od prvního sednutí do křesla po plán, se kterým odejdete domů.
          </p>
        </div>
        <ol className="ed-step-list">
          {kroky.map((k) => (
            <li className="ed-step" key={k.cislo}>
              <span className="ed-step-num" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="ed-step-body">
                <div className="ed-step-top">
                  <h3>{k.nazev}</h3>
                  <span className="ed-step-time">{k.cas}</span>
                </div>
                <p>{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="ed-steps-img">
          <img
            src="/section-1.webp"
            width={1200}
            height={800}
            alt="Detail nástrojů a ultrazvukového odstranění zubního kamene"
          />
          <figcaption>
            Ultrazvuk, ruční nástroje a air-flow — na každou vrstvu ten správný.
          </figcaption>
        </figure>
      </section>

      <section className="ed-trust" aria-labelledby="ed-trust-h">
        <figure className="ed-trust-img">
          <img
            src="/section-2.webp"
            width={1000}
            height={1000}
            alt="Ordinace dentální hygieny Enta Dent na Střekově"
          />
        </figure>
        <div className="ed-trust-text">
          <p className="ed-eyebrow">Proč k nám</p>
          <h2 id="ed-trust-h">
            Hygiena, kterou nebudete odkládat
          </h2>
          <p className="ed-sec-sub">
            Jsme součástí kliniky Enta Dent v Ústí nad Labem. Dentální hygiena u nás
            není odbytá desetiminutovka mezi vrtáním — je to samostatná péče se
            svým časem a klidem.
          </p>
          <ul className="ed-reasons">
            {proc.map((p) => (
              <li key={p.k}>
                <strong>{p.k}</strong>
                <span>{p.v}</span>
              </li>
            ))}
          </ul>
          <address className="ed-addr">
            Tomáše ze Štítného 1172/2, Ústí nad Labem — Střekov ·{" "}
            <a href="tel:+420775773005">775 773 005</a> ·{" "}
            <a href="mailto:info@entadent.cz">info@entadent.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
