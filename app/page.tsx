import { AiImage } from "./_ui";
import { CalScale, StatusSwap, CtaReveal } from "./motion";

const services = [
  {
    tag: "Prevence",
    title: "Preventivní prohlídky",
    body: "Pravidelná kontrola dvakrát ročně. Odhalíme kaz i počínající problém dřív, než začne bolet.",
  },
  {
    tag: "Hygiena",
    title: "Dentální hygiena",
    body: "Odstranění zubního kamene a pigmentací, nácvik čištění a doporučení pomůcek přesně pro vaše zuby.",
  },
  {
    tag: "Estetika",
    title: "Bílé výplně",
    body: "Kompozitní výplně v barvě skloviny. Bez amalgámu, s ohledem na to, aby zub vypadal jako vlastní.",
  },
  {
    tag: "Endodoncie",
    title: "Ošetření kořenových kanálků",
    body: "Šetrné ošetření zánětu pod mikroskopem. Cílem je zub zachránit, ne ho hned trhat.",
  },
  {
    tag: "Protetika",
    title: "Korunky a můstky",
    body: "Náhrada poškozeného nebo chybějícího zubu. Otisk, zkouška, nasazení — vše naplánované dopředu.",
  },
  {
    tag: "Akutní",
    title: "Bolest zubu",
    body: "Když to nepočká, ozvěte se ráno. Akutní stavy řešíme přednostně během ordinačních hodin.",
  },
];

const hours = [
  { day: "Po", time: "7.30 – 15.00" },
  { day: "Út", time: "7.30 – 15.00" },
  { day: "St", time: "7.30 – 15.00" },
  { day: "Čt", time: "7.30 – 15.00" },
  { day: "Pá", time: "7.30 – 12.00" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <div className="wrap top-inner">
          <a className="brand" href="#top" aria-label="MY Dentica — úvod">
            <span className="mark" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-my">MY</span> Dentica
            </span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#osetreni">Ošetření</a>
            <a href="#ordinace">Ordinační doba</a>
          </nav>
          <a className="btn btn-coral top-cta" href="tel:+420777111222">
            Objednat · 777 111 222
          </a>
        </div>
        <CalScale className="cal-scale top-scale" />
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Zubní ordinace · Olomouc, centrum</p>
            <h1 className="hero-title">
              Zubní péče měřená<br />na desetiny milimetru.
            </h1>
            <p className="hero-lead">
              Praktický zubní lékař v centru Olomouce. Preventivní prohlídky,
              hygiena i akutní bolest — s časem na vysvětlení a bez zbytečného
              čekání.
            </p>

            <div className="status" role="status">
              <span className="status-dot" aria-hidden="true" />
              <StatusSwap />
            </div>

            <CtaReveal>
              <div className="hero-actions">
                <a className="btn btn-coral btn-lg" href="tel:+420777111222">
                  Zavolat a objednat se
                </a>
                <span className="phone-note">
                  Objednání na telefonu <strong>777 111 222</strong>
                </span>
              </div>
            </CtaReveal>
          </div>

          <div className="hero-media">
            <AiImage
              src="/hero.webp"
              alt="Ordinace MY Dentica — zubní křeslo a nástroje připravené k ošetření"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <section className="block block-light" id="osetreni">
        <div className="wrap">
          <div className="block-head">
            <p className="eyebrow eyebrow-dark">Co u nás ošetříme</p>
            <h2 className="block-title">
              Od prohlídky po korunku — na jednom místě.
            </h2>
          </div>
          <ul className="grid-services">
            {services.map((s) => (
              <li className="svc" key={s.title}>
                <div className="cal-scale svc-scale" aria-hidden="true" />
                <span className="svc-tag">{s.tag}</span>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-body">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block block-dark" id="ordinace">
        <div className="wrap trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">O ordinaci · přijímáme nové pacienty</p>
            <h2 className="block-title">
              Malá ordinace, kde vás sestra i doktor znají jménem.
            </h2>
            <p className="trust-lead">
              Pracujeme klidně a vysvětlíme každý krok dopředu. Používáme moderní
              vybavení a šetrné postupy — ať je návštěva u zubaře co nejméně
              nepříjemná. Momentálně bereme nové pacienty z Olomouce i okolí.
            </p>

            <div className="hours-block">
              <p className="hours-label">Ordinační doba</p>
              <ul className="hours">
                {hours.map((h) => (
                  <li className="hours-row" key={h.day}>
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-rule" aria-hidden="true" />
                    <span className="hours-time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="contact">
              <div className="contact-row">
                <dt>Telefon</dt>
                <dd>+420 777 111 222</dd>
              </div>
              <div className="contact-row">
                <dt>E-mail</dt>
                <dd>—</dd>
              </div>
              <div className="contact-row">
                <dt>Adresa</dt>
                <dd>—</dd>
              </div>
            </dl>
          </div>

          <div className="trust-media">
            <AiImage
              src="/section-2.webp"
              alt="Recepce a čekárna ordinace MY Dentica v Olomouci"
              className="trust-img"
            />
            <div className="trust-note">
              <AiImage
                src="/section-1.webp"
                alt="Detail ošetření u zubaře v ordinaci MY Dentica"
                className="trust-img-2"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
