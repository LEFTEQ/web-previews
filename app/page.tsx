import { AiImage } from "./_ui";

type Service = {
  n: string;
  code: string;
  name: string;
  desc: string;
  tag: string;
};

const services: Service[] = [
  {
    n: "01",
    code: "PRD·01",
    name: "Prodej",
    desc: "Nové a spolehlivé spotřebiče osvědčených značek za bezkonkurenční cenu. Vybíráme podle vlastní praxe — stroje s dlouhou životností, ne podle katalogu.",
    tag: "testováno v praxi",
  },
  {
    n: "02",
    code: "INS·02",
    name: "Instalace na klíč",
    desc: "Kompletní dodávka včetně dovozu a odborné montáže na míru vašemu prostoru. Starý spotřebič odvezeme a postaráme se o jeho ekologickou likvidaci.",
    tag: "dovoz i odvoz",
  },
  {
    n: "03",
    code: "SRV·03",
    name: "Servis",
    desc: "Záruční i pozáruční servis přímo u vás doma. Složitější opravy vyřešíme v dílně a spotřebič vrátíme zapojený, odzkoušený a připravený k provozu.",
    tag: "u vás i v dílně",
  },
  {
    n: "04",
    code: "RYA·04",
    name: "Rychlá odezva",
    desc: "Váš požadavek řešíme co nejdřív — o víkendu, někdy i ve svátek. Stačí popsat závadu, ať víme, s čím k vám vyrážíme.",
    tag: "i o víkendu",
  },
];

const team = [
  { name: "Mgr. Kamil Šlezinger", role: "Majitel · obchod, instalace i servis" },
  { name: "Karel Kočí", role: "Servis, poradenství a náhradní díly" },
  { name: "Václav Šlezinger", role: "Doprava a logistika" },
];

function Ladder({ live }: { live?: boolean }) {
  return (
    <div className={"ladder" + (live ? " ladder--live" : "")} aria-hidden="true">
      <span className="rung r-green" />
      <span className="rung r-green2" />
      <span className="rung r-amber" />
      <span className="rung r-amber2" />
      <span className="rung r-brick" />
      <span className="rung r-brick2" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="wrap hero__grid">
          <div className="hero__lead">
            <p className="wordmark">
              ŠLEZINGER<span className="wordmark__sub">domácí spotřebiče · Brno</span>
            </p>
            <p className="eyebrow">
              <span className="rung-mark" aria-hidden="true" /> Prodej · instalace · servis
            </p>
            <h1 className="hero__title">
              Testujeme,
              <br />co funguje.
              <br />
              <span className="hero__title-accent">A co ne.</span>
            </h1>
            <p className="hero__text">
              Malá brněnská firma, která domácí spotřebiče prodává, dováží,
              zapojuje i opravuje — celé to máte pod jednou střechou. Baví nás
              zjišťovat, co vydrží a co ne. Díky tomu máme náskok. A vy jistotu.
            </p>
            <div className="hero__meta">
              <a className="btn" href="tel:+420602501929">Zavolat 602&nbsp;501&nbsp;929</a>
              <span className="hero__note">Tvarožná 322 · odezva i o víkendu</span>
            </div>
          </div>

          <div className="plate plate--hero plate--live">
            <div className="plate__bar">
              <span className="plate__label">STAV PROVOZU</span>
              <span className="plate__code">DIAG·00</span>
            </div>
            <div className="plate__inner plate__inner--hero">
              <Ladder live />
              <div className="diag">
                <div className="diag__led">
                  <span className="led led--live" aria-hidden="true" />
                  <span className="diag__status">OK</span>
                </div>
                <p className="diag__reading">Odzkoušeno &amp; v provozu</p>
                <dl className="diag__spec">
                  <div><dt>Značky</dt><dd>osvědčené, dlouhá životnost</dd></div>
                  <div><dt>Záruka</dt><dd>záruční i pozáruční servis</dd></div>
                  <div><dt>Kontrola</dt><dd>pravidelná údržba u vás</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section section--panel" aria-labelledby="nabidka">
        <div className="wrap">
          <p className="eyebrow eyebrow--light">
            <span className="rung-mark" aria-hidden="true" /> Štítky spolehlivosti
          </p>
          <h2 id="nabidka" className="section__title">Čtyři kroky, jeden dodavatel</h2>
          <p className="section__intro">
            Od výběru stroje po pravidelnou kontrolu. Každou službu čtěte jako
            spec-štítek: kód, žebříček spolehlivosti a zelený vrchní stupeň —
            naše „odzkoušeno&nbsp;OK“.
          </p>

          <div className="plates">
            {services.map((s, i) => (
              <article
                key={s.code}
                className={"plate" + (i === 0 ? " plate--live" : "")}
              >
                <div className="plate__bar">
                  <span className="plate__label">{s.name}</span>
                  <span className="plate__code">{s.code}</span>
                </div>
                <div className="plate__inner">
                  <Ladder live={i === 0} />
                  <div className="plate__body">
                    <span className="plate__n">{s.n}</span>
                    <p className="plate__desc">{s.desc}</p>
                    <span className="plate__tag">{s.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="onas">
        <div className="wrap trust">
          <div className="trust__lead">
            <p className="eyebrow">
              <span className="rung-mark" aria-hidden="true" /> Kdo to dělá
            </p>
            <h2 id="onas" className="section__title">
              Dlouhá léta děláme to, co umíme
            </h2>
            <p className="section__intro">
              Baví nás domácí elektrospotřebiče — a hlavně hledat, co funguje
              a co ne. Držíme se osvědčených značek, testujeme spolehlivost
              i kvalitu a k zákazníkům jezdíme sami. Nejsme na to sami: díky
              týmu zvládneme víc požadavků najednou.
            </p>

            <ul className="team">
              {team.map((m) => (
                <li key={m.name} className="team__item">
                  <span className="team__dot" aria-hidden="true" />
                  <span className="team__name">{m.name}</span>
                  <span className="team__role">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="quote">
            <div className="quote__bar">
              <span className="plate__label">Recenze zákazníka</span>
              <span className="plate__code">REF·01</span>
            </div>
            <blockquote className="quote__text">
              „Klobouk dolů. Ve čtvrtek jsme volali kvůli nové pračce. V pátek
              v 17:15 jsme přijeli do Tvarožné, vybrali mašinu, pan Šlezinger
              ji ihned naložil, přivezl k nám domů, zapojil a starou odvezl.
              Rychlost a ochota, jaká se dnes nevidí.“
            </blockquote>
            <figcaption className="quote__by">
              <span className="led led--static" aria-hidden="true" />
              Michal Oujezdský · spokojený zákazník
            </figcaption>
            <dl className="trust__contact">
              <div><dt>Telefon</dt><dd><a href="tel:+420602501929">+420 602 501 929</a></dd></div>
              <div><dt>E-mail</dt><dd><a href="mailto:info@slezinger.cz">info@slezinger.cz</a></dd></div>
              <div><dt>Kde nás najdete</dt><dd>Tvarožná 322, 664 05</dd></div>
            </dl>
          </figure>
        </div>
      </section>
    </main>
  );
}
