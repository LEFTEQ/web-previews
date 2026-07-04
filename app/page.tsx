import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROKO — Robert Korec | Garážová vrata a pohony bran, Praha",
  description:
    "Montáž a servis garážových vrat Richards-Wilcox s německými pohony LiftMaster. Sekční i výklopná vrata, pohony křídlových a posuvných bran. Praha 10 – Hostivař.",
  openGraph: {
    title: "ROKO — Garážová vrata a pohony bran, Praha",
    description:
      "Kvalitní garážová vrata Richards-Wilcox, pohony LiftMaster, montáž a servis. Praha 10 – Hostivař.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const produkty = [
  {
    kod: "S",
    nazev: "Sekční vrata",
    znacka: "Richards-Wilcox · Kružík",
    popis:
      "Vrata jedou nahoru pod strop a nezaberou místo před garáží ani za ní. Zateplené panely, tichý chod, na míru vaší stavbě.",
    detail: "Sekční i výklopná provedení",
  },
  {
    kod: "P",
    nazev: "Pohony vrat",
    znacka: "LiftMaster · Německo",
    popis:
      "Vrata otevřete z auta jedním tlačítkem. Osvětlení, plynulý rozjezd a doběh, ochrana proti sevření. Klidně i na starší vrata.",
    detail: "Instalace i na stávající vrata",
  },
  {
    kod: "B",
    nazev: "Pohony bran",
    znacka: "Křídlové i posuvné",
    popis:
      "Vjezdová brána, která se sama otevře před příjezdem domů. Pro křídlové i posuvné brány, včetně příslušenství a dálkových ovladačů.",
    detail: "Křídlové · posuvné · příslušenství",
  },
];

const duvody = [
  {
    cislo: "01",
    titulek: "Značky, za kterými si stojím",
    text:
      "Vrata Richards-Wilcox a pohony LiftMaster. Ne nejlevnější díly z bazaru — komponenty, ke kterým seženu náhradní díly i za deset let.",
  },
  {
    cislo: "02",
    titulek: "Montáž i servis od jednoho člověka",
    text:
      "Přijedu, zaměřím, namontuji a když je potřeba, vrátím se na servis. Nepředávám vás mezi třemi telefonními čísly.",
  },
  {
    cislo: "03",
    titulek: "Opravím i cizí vrata a pohony",
    text:
      "Nemáte vrata ode mě? Nevadí. Servisuji i další značky vrat a pohonů — přijedu se podívat, proč nejezdí.",
  },
];

export default function Page() {
  return (
    <main className="roko">
      <header className="roko-topbar">
        <a className="roko-mark" href="#" aria-label="ROKO — Robert Korec, garážová vrata">
          <span className="roko-mark__word">ROKO</span>
          <span className="roko-mark__sub">Robert Korec · garážová vrata</span>
        </a>
        <a className="roko-topbar__tel" href="tel:+420602755502">
          <span className="roko-topbar__tellabel">Zavolat</span>
          602&nbsp;755&nbsp;502
        </a>
      </header>

      <section className="roko-hero" aria-labelledby="hero-h">
        <div className="roko-hero__panels" aria-hidden="true">
          <span className="roko-hero__slat roko-hero__slat--1" />
          <span className="roko-hero__slat roko-hero__slat--2" />
          <span className="roko-hero__slat roko-hero__slat--3" />
          <span className="roko-hero__slat roko-hero__slat--4" />
        </div>
        <div className="roko-hero__media">
          <img
            src="/hero.webp"
            alt="Sekční garážová vrata namontovaná na rodinném domě v Praze"
            className="roko-hero__img"
            width={1200}
            height={800}
          />
        </div>
        <div className="roko-hero__copy">
          <p className="roko-eyebrow">Praha 10 — Hostivař · od roku 1997</p>
          <h1 id="hero-h" className="roko-hero__title">
            Vrata, která<br />
            <em>jedou tiše</em><br />
            a jezdí roky.
          </h1>
          <p className="roko-hero__lede">
            Montuji a servisuji garážová vrata Richards-Wilcox s německými pohony
            LiftMaster. Přijedu k vám do Prahy, zaměřím a poradím, co dává smysl —
            bez řečí o zázracích.
          </p>
          <div className="roko-hero__actions">
            <a className="roko-btn roko-btn--solid" href="tel:+420602755502">
              Zavolat 602&nbsp;755&nbsp;502
            </a>
            <a className="roko-btn roko-btn--ghost" href="#produkty">
              Co montuji
            </a>
          </div>
        </div>
      </section>

      <section className="roko-section" id="produkty" aria-labelledby="prod-h">
        <div className="roko-section__head">
          <p className="roko-eyebrow">Nabídka</p>
          <h2 id="prod-h" className="roko-h2">
            Vrata, pohony vrat, pohony bran
          </h2>
          <p className="roko-section__intro">
            Tři věci, které umím opravdu dobře. Vyberte, co potřebujete —
            zbytek probereme u vás na místě.
          </p>
        </div>

        <ol className="roko-cards">
          {produkty.map((p) => (
            <li className="roko-card" key={p.kod}>
              <span className="roko-card__badge" aria-hidden="true">
                {p.kod}
              </span>
              <div className="roko-card__body">
                <h3 className="roko-card__title">{p.nazev}</h3>
                <p className="roko-card__brand">{p.znacka}</p>
                <p className="roko-card__text">{p.popis}</p>
                <p className="roko-card__detail">{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="roko-strip">
          <img
            src="/section-1.webp"
            alt="Detail pohonu garážových vrat LiftMaster upevněného pod stropem garáže"
            className="roko-strip__img"
            width={1200}
            height={600}
          />
          <p className="roko-strip__cap">
            Německý pohon LiftMaster — plynulý rozjezd, tichý doběh, ochrana
            proti sevření.
          </p>
        </div>
      </section>

      <section className="roko-trust" id="o-me" aria-labelledby="trust-h">
        <div className="roko-trust__grid">
          <div className="roko-trust__intro">
            <p className="roko-eyebrow roko-eyebrow--light">Proč já</p>
            <h2 id="trust-h" className="roko-h2 roko-h2--light">
              Jeden řemeslník, celá vrata.
            </h2>
            <p className="roko-trust__lede">
              Jmenuji se Robert Korec a garážovým vratům se věnuji z dílny
              v Hostivaři. K zakázce přijedu já, ne parta brigádníků — proto
              vím, co jsem kde namontoval, a poznám to i po letech.
            </p>
            <img
              src="/section-2.webp"
              alt="Robert Korec při montáži garážových vrat"
              className="roko-trust__img"
              width={800}
              height={600}
            />
          </div>

          <ul className="roko-reasons">
            {duvody.map((d) => (
              <li className="roko-reason" key={d.cislo}>
                <span className="roko-reason__num" aria-hidden="true">
                  {d.cislo}
                </span>
                <div>
                  <h3 className="roko-reason__title">{d.titulek}</h3>
                  <p className="roko-reason__text">{d.text}</p>
                </div>
              </li>
            ))}

            <li className="roko-facts">
              <div className="roko-fact">
                <span className="roko-fact__k">Kde</span>
                <span className="roko-fact__v">
                  Trhanovské nám. 1016/13, Praha 10 – Hostivař
                </span>
              </div>
              <div className="roko-fact">
                <span className="roko-fact__k">Telefon</span>
                <a className="roko-fact__v roko-fact__link" href="tel:+420602755502">
                  602 755 502
                </a>
              </div>
              <div className="roko-fact">
                <span className="roko-fact__k">E-mail</span>
                <a
                  className="roko-fact__v roko-fact__link"
                  href="mailto:robertkorec@seznam.cz"
                >
                  robertkorec@seznam.cz
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
