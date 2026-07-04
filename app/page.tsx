import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Expresní kurýr po Praze",
      lead: "Vyzvedneme a doručíme napříč městem — dokumenty, vzorky, náhradní díly.",
      detail:
        "Objednáte předem v pracovní době a vaši zásilku zajistíme kdykoli 24/7. Bez příplatků za průjezd zón, bez příplatků za nadváhu.",
    },
    {
      code: "02",
      title: "Do celé ČR i letecky do světa",
      lead: "Zásilku dopravíme do 240 zemí, do běžných destinací s doručením do druhého dne.",
      detail:
        "Zabalíme a ochráníme zboží, vyjmeme dodací listy a faktury. O každé komplikaci se dozvíte ihned — ne až po termínu.",
    },
    {
      code: "03",
      title: "Rozvoz čerstvých květin",
      lead: "Kytice prvotřídní kvality domů nebo jako nečekaný dárek blízkým.",
      detail:
        "Doručíme podle vašeho přání a požadavků — svázané tak, aby dorazily svěží.",
    },
  ];

  const proofs = [
    {
      label: "V červeném, s logem",
      text: "Racka poznáte na první pohled — upravený kurýr v jednotném červeném oděvu. Váš dodavatel i odběratel vidí spolehlivost.",
    },
    {
      label: "Průhledné ceny",
      text: "Žádné skryté platby, žádné příplatky za zóny ani nadváhu. Cenu znáte předem, fakturu dostanete elektronicky jednou měsíčně.",
    },
    {
      label: "Online dohled",
      text: "Registrovaní klienti objednávají přímo na webu a sledují zakázku online — od vyzvednutí až po doručení.",
    },
    {
      label: "Jezdíme na LPG",
      text: "Ekologický provoz vozidel. Rychlé doručení po Praze, které tolik nezatíží ovzduší města.",
    },
  ];

  return (
    <main className="rk">
      <header className="rk-top">
        <a className="rk-mark" href="#" aria-label="Racek Kurýr, domů">
          <span className="rk-mark__bird" aria-hidden="true">
            <svg viewBox="0 0 48 24" width="48" height="24" role="img" aria-hidden="true">
              <path
                d="M2 18 C12 4 20 4 24 12 C28 4 36 4 46 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="rk-mark__word">
            Racek<span className="rk-mark__sub">Kurýr</span>
          </span>
        </a>
        <a className="rk-callbtn" href="tel:+420775255665">
          Zavolat kurýra
        </a>
      </header>

      <section className="rk-hero" aria-labelledby="rk-hero-title">
        <div className="rk-hero__grid">
          <div className="rk-hero__copy">
            <p className="rk-eyebrow">Kurýrní služba · Praha</p>
            <h1 id="rk-hero-title" className="rk-hero__title">
              Zásilka letí přes město,
              <br />
              <span className="rk-hero__accent">než stihnete zaparkovat.</span>
            </h1>
            <p className="rk-hero__lead">
              Objednáte předem v pracovní době a vaši zásilku zařídíme kdykoli
              24/7. Po Praze, po celé ČR i letecky do 240 zemí světa.
            </p>
            <div className="rk-hero__actions">
              <a className="rk-btn rk-btn--solid" href="tel:+420775255665">
                Zavolat: 775 255 665
              </a>
              <a
                className="rk-btn rk-btn--ghost"
                href="mailto:objednavky@racek-kuryr.cz"
              >
                Poslat objednávku
              </a>
            </div>
            <dl className="rk-hero__facts">
              <div>
                <dt>Vyzvednutí</dt>
                <dd>24/7 po dohodě</dd>
              </div>
              <div>
                <dt>Do světa</dt>
                <dd>240 zemí letecky</dd>
              </div>
              <div>
                <dt>Ceny</dt>
                <dd>bez skrytých plateb</dd>
              </div>
            </dl>
          </div>
          <figure className="rk-hero__media">
            <img
              src="/hero.webp"
              alt="Kurýr Racek v červeném firemním oděvu s balíkem připravený k doručení v Praze"
              className="rk-hero__img"
            />
            <figcaption className="rk-hero__badge">
              Poznáte nás v červeném
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="rk-services" aria-labelledby="rk-services-title">
        <div className="rk-section__head">
          <p className="rk-eyebrow">Co vezeme</p>
          <h2 id="rk-services-title">Tři trasy, jeden Racek</h2>
        </div>
        <ol className="rk-services__list">
          {services.map((s) => (
            <li key={s.code} className="rk-service">
              <span className="rk-service__code" aria-hidden="true">
                {s.code}
              </span>
              <div className="rk-service__body">
                <h3 className="rk-service__title">{s.title}</h3>
                <p className="rk-service__lead">{s.lead}</p>
                <p className="rk-service__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="rk-services__media">
          <img
            src="/section-1.webp"
            alt="Balík připravený k expresnímu doručení kurýrem Racek"
            className="rk-figimg"
          />
        </figure>
      </section>

      <section className="rk-trust" aria-labelledby="rk-trust-title">
        <div className="rk-trust__inner">
          <figure className="rk-trust__media">
            <img
              src="/section-2.webp"
              alt="Vozidlo kurýrní služby Racek na ulici v Praze"
              className="rk-figimg"
            />
          </figure>
          <div className="rk-trust__copy">
            <p className="rk-eyebrow">Proč Racek</p>
            <h2 id="rk-trust-title">
              Ryze česká firma, která veze i za vás mluví
            </h2>
            <p className="rk-trust__lead">
              Naši kurýři pomáhají realizovat každou zakázku s maximální
              pečlivostí, diskrétností a spolehlivostí. Zabalíme, ochráníme,
              doručíme — a hlásíme, kdyby cokoli hrozilo.
            </p>
            <ul className="rk-trust__grid">
              {proofs.map((p) => (
                <li key={p.label} className="rk-proof">
                  <h3 className="rk-proof__label">{p.label}</h3>
                  <p className="rk-proof__text">{p.text}</p>
                </li>
              ))}
            </ul>
            <p className="rk-trust__note">
              Konkrétní nabídku vám rádi spočítají naši operátoři na{" "}
              <a href="tel:+420775255665">775 255 665</a> a{" "}
              <a href="tel:+420226531988">226 531 988</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

export const metadata = {
  title: "Racek Kurýr Praha — expresní doručení zásilek i květin",
  description:
    "Kurýrní služba v Praze. Vyzvedneme a doručíme 24/7 po dohodě, po celé ČR i letecky do 240 zemí. Průhledné ceny, online objednávky, rozvoz květin.",
} satisfies Record<string, unknown>;

// typový import ponechán kvůli budoucí konfiguraci stylů
export type _Style = CSSProperties;
