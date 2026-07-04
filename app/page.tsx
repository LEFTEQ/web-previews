import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drink Servis Ostrava — odvezeme vás domů vaším autem",
  description:
    "Vypili jste? Zavolejte. Náš řidič si sedne za volant vašeho auta a bezpečně vás i vůz odveze domů. Ostrava a okolí, každý večer od 18 hodin. Od roku 2003.",
  openGraph: {
    title: "Drink Servis Ostrava — odvezeme vás domů vaším autem",
    description:
      "Náš řidič dorazí do 30 minut, sedne si za volant vašeho auta a odveze vás bezpečně domů. Diskrétně, každý večer od 18 hodin.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const PHONE = "+420 737 789 561";
const PHONE_HREF = "tel:+420737789561";

const hours = [
  { day: "neděle – čtvrtek", time: "18:00 – 01:00" },
  { day: "pátek – sobota", time: "18:00 – 02:00" },
];

const steps = [
  {
    k: "01",
    title: "Zavoláte 30 minut předem",
    body: "Řeknete nám adresu a typ auta, ať vás rychle najdeme. Volejte klidně ještě na parketu, než dopijete.",
  },
  {
    k: "02",
    title: "Přijedeme neoznačeným vozem",
    body: "Žádná reklama na dveřích, žádné nápisy. Až budeme na místě, zavoláme a řekneme, jakým autem jsme přijeli.",
  },
  {
    k: "03",
    title: "Řidič si sedne za váš volant",
    body: "Jeden z nás řídí vaše auto, druhý jede za námi doprovodným vozem. Vy jedete domů na svém sedadle.",
  },
  {
    k: "04",
    title: "Doma je auto na svém místě",
    body: "Zaparkujeme, kam řeknete. Ráno nikam nemusíte — auto stojí u vás. Platíte jen ujeté kilometry, minimum 350 Kč.",
  },
];

const reasons = [
  "Řidiči s námi jezdí dlouhé roky — vaše auto svěřujeme jen prověřeným.",
  "Automat i manuál, malé auto i velký kombík — každý vůz zvládneme.",
  "Slíbený čas příjezdu držíme s odchylkou do pěti minut.",
  "Pojištění pro případ dopravní nehody máme sjednané.",
  "Domluvíme se i anglicky.",
  "Jezdíme každý večer v roce — kromě Štědrého dne a Silvestra.",
];

export default function Page() {
  return (
    <main className="ds">
      <a className="ds-skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="ds-top">
        <div className="ds-wordmark" aria-label="Drink Servis Ostrava">
          <span className="ds-wordmark__line" aria-hidden="true" />
          <span className="ds-wordmark__name">
            Drink<span className="ds-wordmark__amp">·</span>Servis
          </span>
          <span className="ds-wordmark__place">Ostrava</span>
        </div>
        <a className="ds-top__call" href={PHONE_HREF}>
          <span className="ds-top__calllabel">Zavolat řidiče</span>
          <span className="ds-top__callnum">{PHONE}</span>
        </a>
      </header>

      <section className="ds-hero" id="obsah">
        <div className="ds-hero__media">
          <img
            src="/hero.webp"
            alt="Ruce řidiče na volantu cizího auta za noční jízdy ostravskými ulicemi"
            className="ds-hero__img"
            width={1600}
            height={1200}
          />
          <div className="ds-hero__scrim" aria-hidden="true" />
        </div>

        <div className="ds-hero__panel">
          <p className="ds-eyebrow">Ostrava a okolí · od roku 2003</p>
          <h1 className="ds-hero__title">
            Vypili jste?
            <span className="ds-hero__title2">Za volant sedneme my.</span>
          </h1>
          <p className="ds-hero__lead">
            Nenecháváme vaše auto stát u hospody. Náš řidič si sedne za jeho
            volant a odveze vás — i vůz — bezpečně domů. Ráno nikam nejezdíte.
          </p>

          <div className="ds-hero__actions">
            <a className="ds-btn" href={PHONE_HREF}>
              Zavolat řidiče
              <span className="ds-btn__num">{PHONE}</span>
            </a>
            <p className="ds-hero__hint">
              Jezdíme dnes večer od 18 hodin. Volejte 30 minut předem.
            </p>
          </div>

          <dl className="ds-hero__meter">
            {hours.map((h) => (
              <div className="ds-hero__meterrow" key={h.day}>
                <dt>{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ds-how" aria-labelledby="how-title">
        <div className="ds-section__head">
          <p className="ds-eyebrow ds-eyebrow--dark">Jak to funguje</p>
          <h2 id="how-title" className="ds-section__title">
            Čtyři kroky od poslední skleničky domů
          </h2>
          <p className="ds-section__intro">
            Žádné taxi, žádné čekání na ráno. Přijedeme za vámi a odvezeme vás
            vaším vlastním autem — přesně tam, kam potřebujete.
          </p>
        </div>

        <ol className="ds-steps">
          {steps.map((s) => (
            <li className="ds-step" key={s.k}>
              <span className="ds-step__num">{s.k}</span>
              <div className="ds-step__text">
                <h3 className="ds-step__title">{s.title}</h3>
                <p className="ds-step__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="ds-how__figure">
          <img
            src="/section-1.webp"
            alt="Doprovodné vozidlo Drink Servisu jedoucí v noci za odváženým autem klienta"
            className="ds-how__img"
            width={1600}
            height={1000}
          />
          <figcaption className="ds-how__cap">
            Doprovodný vůz jede stále za vámi. Vy řídit nemusíte.
          </figcaption>
        </figure>
      </section>

      <section className="ds-trust" aria-labelledby="trust-title">
        <figure className="ds-trust__figure">
          <img
            src="/section-2.webp"
            alt="Řidič Drink Servisu předává klíče u nočního parkoviště v Ostravě"
            className="ds-trust__img"
            width={1200}
            height={1400}
          />
        </figure>

        <div className="ds-trust__body">
          <p className="ds-eyebrow ds-eyebrow--dark">Proč zrovna my</p>
          <h2 id="trust-title" className="ds-section__title">
            Rodinná firma, která jezdí Ostravou už přes dvacet let
          </h2>
          <p className="ds-trust__lead">
            Vznikli jsme v roce 2003 jako malá rodinná firma. Odvážíme lidi ze
            svateb, oslav, firemních večírků i běžných pátků — jejich vlastním
            autem. Naše vozy nejsou nijak polepené: jde nám o maximální
            diskrétnost.
          </p>

          <ul className="ds-reasons">
            {reasons.map((r) => (
              <li className="ds-reasons__item" key={r}>
                {r}
              </li>
            ))}
          </ul>

          <div className="ds-trust__note">
            <p className="ds-trust__notehead">Nejezdíme jen tři noci v roce</p>
            <p>
              z 24. na 25. 12. · z 31. 12. na 1. 1. · z 1. na 2. 1. Zbytek roku
              nás zastihnete každý večer od 18 hodin.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
