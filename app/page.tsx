import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "§ 01",
      title: "Daňové poradenství",
      desc: "Kompletní správa daní pod jménem zapsaného daňového poradce — od DPH přes daň z příjmů až po zastupování na finančním úřadě. Za termíny a odklady ručíme my.",
    },
    {
      code: "§ 02",
      title: "Účetnictví",
      desc: "Vedeme účetnictví i daňovou evidenci tak, aby čísla nebyla jen povinnost, ale zdroj, ze kterého se rozhodujete. Uzávěrky odevzdáme včas a v pořádku.",
    },
    {
      code: "§ 03",
      title: "Ekonomické poradenství",
      desc: "Propočítáme investici do rozšíření provozu dřív, než do ní vložíte korunu. Rozhodujte se o budoucnosti firmy s čísly na stole, ne odhadem.",
    },
    {
      code: "§ 04",
      title: "Rozjezd firmy",
      desc: "Zakládáte s.r.o. nebo začínáte podnikat? Postavíme daně a účetnictví od začátku správně, abyste se mohli soustředit jen na svůj obor.",
    },
    {
      code: "§ 05",
      title: "Horká linka",
      desc: "Když čas hraje roli, dovoláte se odborníka hned. Rychlá konzultace u termínů, kontrol a nečekaných situací.",
    },
  ];

  const references = [
    {
      quote:
        "Přepočítali nám investice do modernizace výroby a upravili nastavení firemních procesů. Ocenil jsem zkušenost v oblasti manažerského a investičního rozhodování — nešlo o obecné rady, ale o konkrétní čísla.",
      author: "Roman N.",
      role: "jednatel, ekologická likvidace odpadů",
    },
    {
      quote:
        "Naše developerská firma využívá Danfis na účetnictví i daňové poradenství u projektů. Nejvíc oceňujeme jistotu kolem DPH — díky pravidelné konzultaci dopředu plánujeme daňové dopady, ne že je řešíme až zpětně.",
      author: "Jan L.",
      role: "developerská společnost",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Danfis HK, daňový poradce Hradec Králové">
          <span className="wordmark__mark">Danfis</span>
          <span className="wordmark__sub">HK · daňový poradce</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="nav__tel" href="tel:+420774548208">+420 774 548 208</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__ledger" aria-hidden="true">
          <span>2004</span>
          <span>Hradec Králové</span>
          <span>daňový poradce</span>
        </div>
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Kancelář daňového poradce · Hradec Králové</p>
            <h1 className="hero__title">
              Za vaše daně<br />
              <em>ručíme</em> podpisem.
            </h1>
            <p className="hero__lede">
              Danfis HK vede daně a účetnictví firmám z Královéhradeckého kraje. Termíny hlídáme my,
              odklady zařídíme my, na kontrole vás zastoupíme my. Vy řešíte svůj obor.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420774548208">Zavolat poradci</a>
              <a className="btn btn--ghost" href="#sluzby">Co pro vás uděláme</a>
            </div>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Pracovní stůl daňového poradce Danfis HK v Hradci Králové s daňovými přiznáními a výpočty"
              width={720}
              height={880}
              loading="eager"
            />
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">Rozsah práce</p>
          <h2>Pět agend, jeden odpovědný poradce</h2>
          <p className="sec-head__note">
            Označení § není ozdoba — každý paragraf je samostatná služba, kterou pro vás vedeme
            celoročně, ne jen v březnu.
          </p>
        </div>
        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc" key={s.code}>
              <span className="svc__code">{s.code}</span>
              <div className="svc__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="svc-media">
          <img
            src="/section-1.webp"
            alt="Detail účetní uzávěrky a daňových dokladů zpracovaných kanceláří Danfis HK"
            width={1200}
            height={640}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="trust" id="duvera">
        <div className="trust__grid">
          <div className="trust__intro">
            <p className="eyebrow">Proč Danfis</p>
            <h2>Klienti u nás zůstávají léta. Tady je proč.</h2>
            <p>
              Nejsme sezónní zpracovatel přiznání. Jsme kancelář, se kterou probíráte investice,
              DPH i budoucnost firmy dřív, než se stanou problémem. Pracujeme v Hradci Králové,
              osobně a s ručením daňového poradce.
            </p>
            <dl className="trust__facts">
              <div>
                <dt>Působíme z</dt>
                <dd>Hradce Králové</dd>
              </div>
              <div>
                <dt>Ručení</dt>
                <dd>zapsaný daňový poradce</dd>
              </div>
              <div>
                <dt>Konzultace</dt>
                <dd>i horká linka u termínů</dd>
              </div>
            </dl>
            <figure className="trust__media">
              <img
                src="/section-2.webp"
                alt="Kancelář Danfis HK v Hradci Králové při konzultaci s klientem"
                width={960}
                height={640}
                loading="lazy"
              />
            </figure>
          </div>
          <div className="trust__refs">
            {references.map((r) => (
              <blockquote className="ref" key={r.author}>
                <p className="ref__quote">„{r.quote}“</p>
                <footer className="ref__by">
                  <span className="ref__name">{r.author}</span>
                  <span className="ref__role">{r.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

const _unused: CSSProperties = {};
