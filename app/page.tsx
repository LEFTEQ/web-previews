import { AiImage } from "./_ui";
import { OccasionSwap } from "./motion";

const RIDGE =
  "M0,100 L0,58 C150,62 240,34 360,38 C470,42 520,68 640,60 C760,52 820,20 960,26 C1090,31 1180,56 1300,50 C1378,46 1418,52 1440,52 L1440,100 Z";

function Ridge({ fill }: { fill: string }) {
  return (
    <svg
      className="ridge"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={RIDGE} fill={fill} />
    </svg>
  );
}

function MarkRidge() {
  return (
    <svg className="mark-ridge" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
      <path d={RIDGE} fill="currentColor" />
    </svg>
  );
}

const services = [
  {
    label: "Ubytování",
    title: "Bezbariérové pokoje",
    text: "Dostanete se všude — pokoje, restaurace i sál jsou bez schodů a prahů. Tři kilometry od centra Ostravy, s klidným parkováním přímo u hotelu.",
  },
  {
    label: "Restaurace",
    title: "Kuchyně od sedmi ráno",
    text: "Polední menu každý všední den od 7:00 do 15:00. O víkendu vaříme na objednávku — jen pro vaši akci a vaše hosty.",
  },
  {
    label: "Sál",
    title: "Celý sál jen pro vás",
    text: "Svatby, promoce, firemní večírky i smuteční hostiny. Pronajmeme vám sál i kuchyni, klidně mimo běžnou provozní dobu.",
  },
  {
    label: "Jednání",
    title: "Konferenční místnost",
    text: "Zasedačka pro školení a porady, s občerstvením z naší kuchyně a technikou, kterou skutečně zapojíte.",
  },
];

const occasions = [
  "svatby",
  "promoce",
  "firemní večírky",
  "narozeniny",
  "smuteční hostiny",
];

export default function Page() {
  return (
    <main className="page">
      {/* HERO — coal band */}
      <section className="band band--coal">
        <div className="wrap hero">
          <div className="hero-copy reveal">
            <div className="mark" aria-label="Green Hotel">
              <MarkRidge />
              <span className="mark-name">Green Hotel</span>
              <span className="mark-loc">Ostrava — Petřkovice</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-fixed">Místo pro vaše</span>
              <OccasionSwap />
            </h1>

            <p className="hero-lede">
              Bezbariérový hotel, restaurace a sál pod Landekem — kousek od
              dálnice a tři kilometry od centra. Pronajmeme vám celý sál i
              kuchyni, ať slavíte cokoli.
            </p>

            <div className="cta-row">
              <a className="btn btn--brass" href="mailto:info@example.cz?subject=Rezervace%20-%20Green%20Hotel">
                Rezervovat pobyt
              </a>
              <a className="btn btn--ghost" href="tel:+420777111222">
                Zavolat +420 777 111 222
              </a>
            </div>
          </div>

          <div className="hero-media reveal">
            <AiImage
              src="/hero.webp"
              alt="Sál Green Hotelu prostřený na hostinu"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* SLUŽBY — limestone band */}
      <section className="band band--limestone">
        <Ridge fill="#ece9df" />
        <div className="wrap">
          <header className="sec-head reveal">
            <span className="eyebrow">
              <MarkRidge /> Co u nás najdete
            </span>
            <h2 className="sec-title">Hotel, kuchyně a sál pod jednou střechou</h2>
          </header>

          <div className="services">
            {services.map((s) => (
              <article className="svc reveal" key={s.label}>
                <span className="svc-label">{s.label}</span>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA — pine band */}
      <section className="band band--pine">
        <Ridge fill="#2c4632" />
        <div className="wrap about">
          <div className="about-copy reveal">
            <span className="eyebrow eyebrow--light">
              <MarkRidge /> Kde nás najdete
            </span>
            <h2 className="sec-title sec-title--light">Pod Landekem, hned u dálnice</h2>
            <p className="about-text">
              Green Hotel stojí v Ostravě-Petřkovicích, asi tři kilometry od
              centra a kousek od sjezdu z dálnice. Jsme bezbariéroví odshora
              dolů — dostanete se všude, ať přijedete přespat, na oběd, nebo
              oslavit.
            </p>

            <div className="hours">
              <div className="hours-row">
                <span className="hours-day">Po — Pá</span>
                <span className="hours-time">7:00 — 15:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">So — Ne</span>
                <span className="hours-time">jen soukromé akce</span>
              </div>
              <p className="hours-note">
                Ve všední dny rádi prodloužíme provoz pro vaši akci.
              </p>
            </div>

            <div className="occasions">
              <span className="occasions-label">Slavili u nás:</span>
              <ul className="chips">
                {occasions.map((o) => (
                  <li className="chip" key={o}>
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <p className="contact-line">
              Napište na <a href="mailto:info@example.cz">info@example.cz</a> nebo
              volejte <a href="tel:+420777111222">+420 777 111 222</a>.
              <br />
              Ukázková 123, Ostrava
            </p>
          </div>

          <div className="about-media reveal">
            <AiImage
              src="/section-2.webp"
              alt="Interiér restaurace Green Hotelu"
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* Trvale připnutá rezervační lišta pro mobil */}
      <div className="bookbar" role="region" aria-label="Rezervace">
        <MarkRidge />
        <a className="bookbar-btn bookbar-btn--primary" href="mailto:info@example.cz?subject=Rezervace%20-%20Green%20Hotel">
          Rezervovat
        </a>
        <a className="bookbar-btn" href="tel:+420777111222">
          Zavolat +420 777 111 222
        </a>
      </div>
    </main>
  );
}
