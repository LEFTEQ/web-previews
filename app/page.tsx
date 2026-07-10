import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farma Ovčárna — bio chléb, oleje a zelenina ze Skalné",
  description:
    "Ekologická farma a krámek ve Skalné. Kváskový chléb z vlastní mouky, za studena lisovaný lněný a dýňový olej, sezónní zelenina a med. Zastavte se u nás na Českou 481.",
  openGraph: {
    title: "Farma Ovčárna — bio chléb, oleje a zelenina ze Skalné",
    description:
      "Kváskový chléb z vlastní mouky, za studena lisovaný lněný a dýňový olej, sezónní zelenina a med. Krámek na hlavní ulici ve Skalné.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Farma Ovčárna ve Skalné" }],
  },
};

const rada = [
  {
    cislo: "01",
    faze: "Pole",
    titul: "Pěstujeme",
    text: "Obiloviny, ovoce a zeleninu podle ekologických norem — společnou prací a tradičními postupy, které dávají zrnu čas dozrát.",
    odkaz: "Navštivte naši farmu",
  },
  {
    cislo: "02",
    faze: "Pec",
    titul: "Pečeme",
    text: "Kváskový i kynutý chléb, pečivo a sladkosti z vlastní mouky a olejů. Čerstvé bochníky najdete každý den v krámku ve Skalné.",
    odkaz: "Navštivte náš krámek",
  },
  {
    cislo: "03",
    faze: "Lis",
    titul: "Vyrábíme",
    text: "Lněný a dýňový olej lisovaný za studena, pesto z dýňových semínek a další speciality — i online v našem e-shopu Tribal Trading.",
    odkaz: "Náš e-shop Tribal Trading",
  },
];

const sortiment = [
  "Kváskový a kynutý chléb",
  "Pečivo a sladkosti z vlastní mouky",
  "Lněný olej lisovaný za studena",
  "Dýňový olej a pesto z dýňových semínek",
  "Čerstvá zelenina a ovoce z eko farem",
  "Med, sýry a volně ložená semena",
];

export default function Page() {
  return (
    <main className="of-main">
      <header className="of-top">
        <a className="of-wordmark" href="#" aria-label="Farma Ovčárna, domů">
          <span className="of-wordmark__lead">Farma</span>
          <span className="of-wordmark__name">Ovčárna</span>
        </a>
        <a className="of-tel" href="tel:+420775420101">
          <span className="of-tel__label">Zavolejte, ať víme, kdy přijdete</span>
          <span className="of-tel__num">+420&nbsp;775&nbsp;420&nbsp;101</span>
        </a>
      </header>

      <section className="of-hero" aria-labelledby="hero-nadpis">
        <div className="of-hero__media">
          <img
            src="/hero.webp"
            alt="Bochníky kváskového chleba z pece Farmy Ovčárna"
            width={1600}
            height={1200}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="of-hero__panel">
          <p className="of-eyebrow">Ekofarma &amp; krámek · Skalná</p>
          <h1 id="hero-nadpis" className="of-hero__title">
            Od pole přes pec<br />
            až na váš stůl.
          </h1>
          <p className="of-hero__lead">
            Pečeme z mouky, kterou si sami vypěstujeme, a lisujeme oleje za studena.
            Vše čerstvé najdete v krámku na hlavní ulici ve Skalné.
          </p>
          <div className="of-hero__actions">
            <a className="of-btn of-btn--primary" href="#krámek">Otevírací doba krámku</a>
            <a className="of-btn of-btn--ghost" href="tel:+420775420101">Zavolat na farmu</a>
          </div>
          <dl className="of-hours">
            <div>
              <dt>Neděle–čtvrtek</dt>
              <dd>9:00–19:00</dd>
            </div>
            <div>
              <dt>Pátek</dt>
              <dd>8:00–15:30</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="of-rada" aria-labelledby="rada-nadpis">
        <div className="of-section-head">
          <p className="of-eyebrow">Naše řemeslo ve třech krocích</p>
          <h2 id="rada-nadpis">Zrno urazí u nás krátkou cestu</h2>
        </div>
        <ol className="of-rada__list">
          {rada.map((k) => (
            <li key={k.cislo} className="of-krok">
              <div className="of-krok__mark" aria-hidden="true">
                <span className="of-krok__num">{k.cislo}</span>
                <span className="of-krok__faze">{k.faze}</span>
              </div>
              <h3 className="of-krok__titul">{k.titul}</h3>
              <p className="of-krok__text">{k.text}</p>
              <span className="of-krok__odkaz">{k.odkaz}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="krámek" className="of-kramek" aria-labelledby="kramek-nadpis">
        <div className="of-kramek__media">
          <img
            src="/section-1.webp"
            alt="Krámek Farmy Ovčárna na hlavní ulici ve Skalné"
            width={1200}
            height={1400}
            loading="lazy"
            decoding="async"
          />
          <img
            className="of-kramek__media2"
            src="/section-2.webp"
            alt="Čerstvé pečivo a produkty z farmy"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="of-kramek__body">
          <p className="of-eyebrow">Náš krámek ve Skalné</p>
          <h2 id="kramek-nadpis">Zastavte se na skleničku, občerstvení a přátelský pokec</h2>
          <p className="of-kramek__lead">
            Na hlavní ulici najdete kompletní sortiment našeho chleba a pečiva,
            čerstvou zeleninu a ovoce z ekologických farem, oleje, med, sýry i
            volně ložená semena. Dost parkovacích míst a posezení uvnitř i venku.
          </p>
          <ul className="of-sortiment">
            {sortiment.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="of-adresa">
            <div>
              <p className="of-adresa__label">Kde nás najdete</p>
              <address className="of-adresa__val">
                Farma Ovčárna z.s.<br />
                Česká 481, 351 34 Skalná
              </address>
            </div>
            <div>
              <p className="of-adresa__label">Spojení</p>
              <p className="of-adresa__val">
                <a href="tel:+420775420101">+420 775 420 101</a><br />
                <a href="mailto:info@ovcarna.eu">info@ovcarna.eu</a>
              </p>
            </div>
          </div>
          <p className="of-note">
            Aktuální otevírací doba platí od 1.&nbsp;7. Rádi vás na farmě uvítáme —
            zavolejte prosím dopředu, ať víme, kdy vás čekat.
          </p>
        </div>
      </section>
    </main>
  );
}
