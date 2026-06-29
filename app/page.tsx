import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Braun Servis Pardubice — opravy a náhradní díly Braun, DeLonghi, Kenwood",
  description:
    "Autorizovaný i pozáruční servis spotřebičů Braun v Pardubicích. Opravy Braun, DeLonghi a Kenwood, prodej náhradních dílů a kamenný obchod na Jana Palacha 1405. Školení technici, dlouholetá zkušenost.",
  openGraph: {
    title: "Braun Servis Pardubice — opravy spotřebičů od školených techniků",
    description:
      "Záruční i pozáruční servis Braun, DeLonghi a Kenwood. Náhradní díly a kamenný obchod v Pardubicích, Jana Palacha 1405.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Prodej výrobků Braun",
    znacky: "BRAUN",
    popis:
      "Holicí strojky, epilátory, kuchyňské a péče o tělo — naskladněné v kamenném obchodě na Jana Palacha. Poradíme s výběrem a předáme osobně.",
  },
  {
    kod: "02",
    nazev: "Záruční servis",
    znacky: "BRAUN",
    popis:
      "Spotřebič Braun přestal sloužit v záruce? Opravu vyřídíme jako autorizované servisní a sběrné místo, bez doplatků za uznanou reklamaci.",
  },
  {
    kod: "03",
    nazev: "Pozáruční servis",
    znacky: "BRAUN · DELONGHI · KENWOOD",
    popis:
      "Diagnostika a oprava i po vypršení záruky. Kávovary DeLonghi, roboty Kenwood i drobné spotřebiče Braun rozebereme, vyčistíme a zprovozníme.",
  },
  {
    kod: "04",
    nazev: "Náhradní díly",
    znacky: "BRAUN · DELONGHI · KENWOOD",
    popis:
      "Originální díly k výrobkům Braun, DeLonghi a Kenwood — síťka a planžeta do strojku, těsnění do kávovaru, hnětací háky. Sženeme i to, co jinde nemají.",
  },
];

export default function Page() {
  return (
    <main className="bs">
      <header className="bs-top">
        <span className="bs-mark" aria-label="Braun Servis">
          <span className="bs-mark-a">BRAUN</span>
          <span className="bs-mark-dot" aria-hidden="true" />
          <span className="bs-mark-b">SERVIS</span>
        </span>
        <span className="bs-top-meta">Pardubice · od roku 1995</span>
      </header>

      <section className="bs-hero" aria-labelledby="bs-h1">
        <div className="bs-hero-grid" aria-hidden="true">
          <span className="bs-cross bs-cross-1" />
          <span className="bs-cross bs-cross-2" />
          <span className="bs-cross bs-cross-3" />
          <span className="bs-screw" data-n="A" />
          <span className="bs-screw bs-screw-2" data-n="B" />
        </div>

        <p className="bs-eyebrow">Servisní a sběrné místo · Jana Palacha 1405</p>
        <h1 id="bs-h1" className="bs-h1">
          <span className="bs-line bs-line-1">Rozebrat,</span>
          <span className="bs-line bs-line-2">najít závadu,</span>
          <span className="bs-line bs-line-3">
            <em>spravit.</em>
          </span>
        </h1>
        <p className="bs-lede">
          Opravujeme spotřebiče, které se vyplatí opravit. Strojky Braun,
          kávovary DeLonghi a kuchyňské roboty Kenwood — u nás projdou rukama
          techniků, kteří je znají do posledního těsnění.
        </p>

        <dl className="bs-spec">
          <div>
            <dt>Značky</dt>
            <dd>Braun · DeLonghi · Kenwood</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Autorizované sběrné místo</dd>
          </div>
          <div>
            <dt>Kde</dt>
            <dd>Pardubice, Jana Palacha 1405</dd>
          </div>
        </dl>
      </section>

      <section className="bs-sec bs-sec-services" aria-labelledby="bs-s1">
        <div className="bs-sec-head">
          <p className="bs-kicker">Co u nás vyřídíte</p>
          <h2 id="bs-s1">Čtyři důvody, proč zajít</h2>
        </div>

        <div className="bs-sec-body">
          <ol className="bs-list">
            {sluzby.map((s) => (
              <li key={s.kod} className="bs-item">
                <span className="bs-item-kod">{s.kod}</span>
                <div className="bs-item-main">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                  <span className="bs-tag">{s.znacky}</span>
                </div>
              </li>
            ))}
          </ol>

          <figure className="bs-figure">
            <img
              src="/section-1.webp"
              alt="Rozebraný spotřebič na servisním pracovním stole v dílně Braun Servis"
              loading="lazy"
            />
            <figcaption>
              Každá oprava začíná diagnostikou — než objednáme díl, víme přesně,
              co je špatně.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bs-sec bs-sec-about" aria-labelledby="bs-s2">
        <div className="bs-about-grid">
          <figure className="bs-figure bs-figure-about">
            <img
              src="/section-2.webp"
              alt="Kamenný obchod a servisní pult Braun Servis v Pardubicích"
              loading="lazy"
            />
          </figure>

          <div className="bs-about-text">
            <p className="bs-kicker">Komu svěříte spotřebič</p>
            <h2 id="bs-s2">
              Školení technici, kteří u Braunu zůstali věrní řemeslu.
            </h2>
            <p>
              Kvalitu drží odbornost a dlouholetá zkušenost týmu školených
              servisních pracovníků. Nepředáváme práci dál — opravujeme přímo v
              dílně v Pardubicích a za výsledek si stojíme.
            </p>

            <dl className="bs-info">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>
                  Jana Palacha 1405
                  <br />
                  Pardubice
                </dd>
              </div>
              <div>
                <dt>Otevírací doba</dt>
                <dd>
                  Po–Čt 9–12 a 13–17
                  <br />
                  Pá 9–12
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420466303355">466 303 355</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:braun.rene@seznam.cz">braun.rene@seznam.cz</a>
                </dd>
              </div>
            </dl>

            <p className="bs-note">
              Dovolená 22.–28. 6. 2026. V pondělí 29. 6. 2026 znovu otevřeno.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
