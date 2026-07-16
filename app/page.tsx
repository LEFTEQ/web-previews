import { AiImage } from "./_ui";

const services = [
  {
    num: "01",
    code: "L1",
    title: "Silnoproud a slaboproud",
    desc:
      "Rozvody nízkého i vysokého napětí. Zásuvky, vypínače a osvětlení zapojíme na míru a bezpečně — od hrubé stavby po finální montáž.",
  },
  {
    num: "02",
    code: "DATA",
    title: "Datové rozvody",
    desc:
      "Strukturovaná kabeláž a internetové sítě pro domácnosti i kanceláře. Stabilní připojení bez výpadků, připravené na budoucnost.",
  },
  {
    num: "03",
    code: "RTG",
    title: "Rozvaděče a rozvodné skříně",
    desc:
      "Zapojení, rekonstrukce a údržba domovních i průmyslových rozvaděčů. Přehledné zapojení, na které se dá spolehnout.",
  },
  {
    num: "04",
    code: "FIX",
    title: "Opravy elektrozávad",
    desc:
      "Rychlá diagnostika a oprava poruch. Řešíme zkraty, nefunkční okruhy i výpadky proudu — přijedeme a opravíme.",
  },
  {
    num: "05",
    code: "CONN",
    title: "Zapojování elektřiny",
    desc:
      "Připojení nových spotřebičů, kontrola stávajících rozvodů a servis celé sítě. Aby všechno fungovalo tak, jak má.",
  },
];

const contacts = [
  {
    role: "jednatel",
    name: "Ondřej Jelínek",
    tel: "+420 603 173 518",
    telHref: "tel:+420603173518",
    email: "ondrejjelinek86@seznam.cz",
  },
  {
    role: "kontaktní osoba",
    name: "Václav Linek",
    tel: "+420 603 119 714",
    telHref: "tel:+420603119714",
    email: "linek.66@seznam.cz",
  },
];

export default function Page() {
  return (
    <main className="page">
      {/* ——— HERO ——— */}
      <header className="hero">
        <div className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Elektrikář EL CONTE.CZ při zapojování rozvaděče v Ústí nad Labem"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Elektroinstalace · Ústí nad Labem
          </p>
          <p className="mark">
            EL&nbsp;CONTE<span className="mark__cz">.cz</span>
          </p>
          <h1 className="hero__title">
            Bezpečná elektroinstalace podle ČSN — od zásuvky až po rozvaděč.
          </h1>
          <p className="hero__lead">
            Kompletní silnoproud, slaboproud i datové sítě pro rodinné domy,
            byty a firmy v Ústeckém kraji. Rychlé jednání, spolehlivý servis.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420603173518">
              Zavolat 603 173 518
            </a>
            <a className="btn btn--ghost" href="mailto:ondrejjelinek86@seznam.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero__note">
            Nezávazná cenová nabídka · Střekovské nábřeží 1119/19, Střekov
          </p>
        </div>
      </header>

      {/* ——— SLUŽBY: rozvrh okruhů ——— */}
      <section className="section services" aria-labelledby="services-h">
        <div className="wrap">
          <div className="services__head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Rozvrh okruhů
              </p>
              <h2 id="services-h" className="section-title">
                Co pro vás zapojíme
              </h2>
              <p className="section-sub">
                Každá služba je popsaná jako svorka na rozvaděči — s vlastním
                kódem okruhu a žlutozeleným pruhem ochranného vodiče. Přehledně,
                tak jak elektroinstalace vypadá ve skutečnosti.
              </p>
            </div>
            <div className="services__media">
              <AiImage
                src="/section-1.webp"
                alt="Detail zapojení vodičů ve svorkovnici rozvaděče"
                className="framed__img"
              />
            </div>
          </div>

          <ol className="schedule">
            {services.map((s) => (
              <li className="circuit" key={s.code}>
                <span className="circuit__node" aria-hidden="true" />
                <div className="circuit__tag">
                  <span className="circuit__code">{s.code}</span>
                  <span className="circuit__pe" aria-hidden="true" />
                </div>
                <div className="circuit__body">
                  <h3 className="circuit__title">
                    <span className="circuit__num">{s.num}</span>
                    {s.title}
                  </h3>
                  <p className="circuit__desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— DŮVĚRA / O NÁS ——— */}
      <section className="section about" aria-labelledby="about-h">
        <div className="wrap about__grid">
          <div className="about__media">
            <AiImage
              src="/section-2.webp"
              alt="Elektrikáři EL CONTE.CZ při práci v Ústí nad Labem"
              className="framed__img"
            />
          </div>
          <div className="about__content">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Střekov, Ústí nad Labem
            </p>
            <h2 id="about-h" className="section-title">
              Řemeslo, které stojí za svým jménem
            </h2>
            <p className="about__lead">
              Působíme v Ústí nad Labem a okolí s důrazem na bezpečnost a
              kvalitu. Zakládáme si na rychlém jednání a spolehlivém servisu pro
              každého zákazníka — od drobné opravy až po kompletní elektrickou
              síť na míru.
            </p>

            <ul className="trust">
              <li className="trust__item">
                <span className="trust__tab" aria-hidden="true" />
                Práce podle aktuálních norem ČSN
              </li>
              <li className="trust__item">
                <span className="trust__tab" aria-hidden="true" />
                Bezpečnost a kvalita zapojení na prvním místě
              </li>
              <li className="trust__item">
                <span className="trust__tab" aria-hidden="true" />
                Rodinné domy, byty, firmy i komerční budovy
              </li>
            </ul>

            <ul className="contacts">
              {contacts.map((c) => (
                <li className="contact" key={c.email}>
                  <p className="contact__role">{c.role}</p>
                  <p className="contact__name">{c.name}</p>
                  <a className="contact__line" href={c.telHref}>
                    {c.tel}
                  </a>
                  <a className="contact__line" href={`mailto:${c.email}`}>
                    {c.email}
                  </a>
                </li>
              ))}
              <li className="contact contact--addr">
                <p className="contact__role">dílna a sídlo</p>
                <p className="contact__name">EL&nbsp;CONTE.cz s.r.o.</p>
                <p className="contact__addr">
                  Střekovské nábřeží 1119/19
                  <br />
                  Střekov, 400 03 Ústí nad Labem
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
