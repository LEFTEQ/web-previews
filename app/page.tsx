import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Necháte kontakt",
      d: "Zavoláte nebo napíšete. Domluvíme se, kdy váš alternátor či startér přivezete — nebo se stavíte rovnou.",
    },
    {
      c: "02",
      t: "Rozebereme a naceníme",
      d: "Díl rozebereme, najdeme závadu a spočítáme přesnou cenu opravy. Žádné odhady dopředu.",
    },
    {
      c: "03",
      t: "Zavoláme cenu",
      d: "Ozveme se s přesnou částkou. Teprve pak se sami rozhodnete, jestli do opravy jdeme.",
    },
    {
      c: "04",
      t: "Opravíme, většinou týž den",
      d: "Většina dílů je skladem, dodavatel jezdí třikrát denně. Běžnou zakázku stíháme ve stejný den.",
    },
  ];

  const cisla = [
    { n: "25+", l: "let u alternátorů a startérů" },
    { n: "20 000+", l: "hotových zakázek" },
    { n: "130+", l: "alternátorů skladem k výměně" },
    { n: "200", l: "stálých zákazníků" },
  ];

  const otevirak = [
    { d: "Pondělí", h: "7:00 – 15:00" },
    { d: "Úterý", h: "7:00 – 15:00" },
    { d: "Středa", h: "7:00 – 13:30" },
    { d: "Čtvrtek", h: "7:00 – 13:30" },
    { d: "Pátek", h: "7:00 – 12:00" },
  ];

  return (
    <main className="ae">
      <header className="ae-top">
        <a className="ae-brand" href="#" aria-label="Auto elektro opravy Luža, domů">
          <span className="ae-spark" aria-hidden="true">
            <span className="ae-bolt" />
          </span>
          <span className="ae-brand-txt">
            <span className="ae-brand-1">AUTO ELEKTRO OPRAVY</span>
            <span className="ae-brand-2">Luža <em>s.r.o.</em></span>
          </span>
        </a>
        <nav className="ae-nav" aria-label="Hlavní">
          <a href="#sluzby">Co opravujeme</a>
          <a href="#kontakt">Kdo jsme</a>
          <a className="ae-tel" href="tel:+420603541445">603&nbsp;541&nbsp;445</a>
        </nav>
      </header>

      <section className="ae-hero" aria-labelledby="ae-h1">
        <div className="ae-hero-grid">
          <div className="ae-hero-copy">
            <p className="ae-eyebrow">Ostravsko · Sviadnov u Frýdku-Místku</p>
            <h1 id="ae-h1">
              <span className="ae-h-line">Startér mlčí,</span>
              <span className="ae-h-line ae-h-em">alternátor nedobíjí?</span>
            </h1>
            <p className="ae-lead">
              Rozebereme, vyčistíme, opískujeme, nastříkáme a otestujeme. Přes
              25 let opravujeme <strong>alternátory a startéry</strong> osobních
              i nákladních aut — a běžnou závadu zvládneme většinou týž den.
            </p>
            <div className="ae-hero-cta">
              <a className="ae-btn ae-btn-primary" href="tel:+420603541445">
                Zavolat 603&nbsp;541&nbsp;445
              </a>
              <a className="ae-btn ae-btn-ghost" href="#sluzby">
                Jak to u nás funguje
              </a>
            </div>
            <p className="ae-hero-note">
              Díl na výměnu často máme připravený skladem — pak jde výměna i mimo
              otevírací dobu, po telefonu i o víkendu.
            </p>
          </div>

          <figure className="ae-hero-fig">
            <img
              src="/hero.webp"
              alt="Rozebraný alternátor na pracovním stole autoelektrikáře během opravy"
              width={880}
              height={1040}
              loading="eager"
            />
            <figcaption className="ae-hero-tag">
              <span className="ae-tag-k">Na dílně</span>
              <span className="ae-tag-v">rozebráno → očištěno → otestováno</span>
            </figcaption>
          </figure>
        </div>

        <dl className="ae-stats">
          {cisla.map((c) => (
            <div className="ae-stat" key={c.l}>
              <dt>{c.n}</dt>
              <dd>{c.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="ae-sec" id="sluzby" aria-labelledby="ae-s1">
        <div className="ae-sec-head">
          <p className="ae-eyebrow">Co u nás děláme</p>
          <h2 id="ae-s1">Přivezete kus, odvezete si opravený</h2>
          <p className="ae-sec-lead">
            Zaměřujeme se na jednu věc a děláme ji pořádně: opravy alternátorů a
            startérů téměř všech značek. Postup je jednoduchý a nic za vás
            nerozhodneme dřív, než znáte cenu.
          </p>
        </div>

        <ol className="ae-steps">
          {kroky.map((k) => (
            <li className="ae-step" key={k.c}>
              <span className="ae-step-c" aria-hidden="true">
                {k.c}
              </span>
              <h3>{k.t}</h3>
              <p>{k.d}</p>
            </li>
          ))}
        </ol>

        <figure className="ae-shot">
          <img
            src="/section-1.webp"
            alt="Startér motorového vozidla očištěný a připravený k testování po opravě"
            width={1280}
            height={720}
            loading="lazy"
          />
          <figcaption>
            Po mytí ve speciálním stole přijde na řadu očištění od koroze,
            pískování a nový nástřik — díl pak vypadá k nepoznání.
          </figcaption>
        </figure>
      </section>

      <section className="ae-sec ae-sec-dark" id="kontakt" aria-labelledby="ae-s2">
        <div className="ae-about-grid">
          <div className="ae-about-copy">
            <p className="ae-eyebrow ae-eyebrow-inv">Kdo jsme</p>
            <h2 id="ae-s2">Rodinná dílna, kde autoelektrika není vedlejšák</h2>
            <p>
              Jsme <strong>Auto elektro opravy Luža s.r.o.</strong> ze Sviadnova
              kousek za Ostravou. Alternátory a startéry opravujeme přes 25 let —
              osobní i nákladní, skoro každá značka. Většinu náhradních dílů máme
              skladem a dodavatel k nám jezdí třikrát denně, proto opravy
              stíháme obvykle ve stejný den.
            </p>
            <p>
              Přes 130 běžných typů alternátorů a startérů máme opravených a
              připravených na výměnu ihned, bez čekání. V takovém případě
              zvládneme výměnu i mimo otevírací dobu, po telefonické dohodě klidně
              o víkendu.
            </p>

            <div className="ae-contact">
              <div className="ae-contact-item">
                <span className="ae-ci-k">Kde nás najdete</span>
                <span className="ae-ci-v">
                  Nádraží 390, Sviadnov 739&nbsp;25
                </span>
              </div>
              <div className="ae-contact-item">
                <span className="ae-ci-k">Telefon</span>
                <a className="ae-ci-v ae-ci-link" href="tel:+420603541445">
                  +420&nbsp;603&nbsp;541&nbsp;445
                </a>
              </div>
            </div>

            <table className="ae-hours">
              <caption>Otevírací doba</caption>
              <tbody>
                {otevirak.map((o) => (
                  <tr key={o.d}>
                    <th scope="row">{o.d}</th>
                    <td>{o.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="ae-hours-note">
              Mimo otevírací dobu jsme k zastižení na telefonu.
            </p>
          </div>

          <figure className="ae-about-fig">
            <img
              src="/section-2.webp"
              alt="Dílna autoelektriky Luža s opravenými alternátory připravenými k výměně"
              width={880}
              height={1040}
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
