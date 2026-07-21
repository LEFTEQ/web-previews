import { AiImage } from "./_ui";
import { SharpenHeadline, BevelStroke } from "./motion";

const PHONE_LABEL = "777 111 222";
const PHONE_HREF = "tel:+420777111222";

const cenik = [
  { name: "Kuchyňský nůž do 20 cm", note: "loupáky, univerzály", price: "60 Kč" },
  { name: "Šéfkuchařský nůž / santoku", note: "tvrdší oceli, delší čepel", price: "90 Kč" },
  { name: "Řeznický a filetovací nůž", note: "pružné i masivní čepele", price: "110 Kč" },
  { name: "Nůžky — kuchyňské, krejčovské", note: "rozebrat, nabrousit, seřídit", price: "70 Kč" },
  { name: "Zahradní nůžky a nůžky na živý plot", note: "i dvouruční", price: "120 Kč" },
  { name: "Sekera, máčeta, štípací nůž", note: "hrubší úhel podle použití", price: "150 Kč" },
  { name: "Hoblíkové a dlátové ostří", note: "plná rovina na kameni", price: "80 Kč" },
];

const reference = [
  {
    text: "Přinesl jsem sadu, kterou jsem už chtěl vyhodit. Vrátila se ostřejší než nová — rajče krájím bez tlačení.",
    who: "Jana P.",
    where: "Střekov",
  },
  {
    text: "Zahradní nůžky stříhají zase jedním tahem. Do týdne hotovo, cena přesně jak řekl.",
    who: "Petr M.",
    where: "Klíše",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="mark" href="#hero" aria-label="Kádner — ostření nožů, Ústí nad Labem">
          <span className="mark__name">
            KÁDNER<span className="mark__tick">°17</span>
          </span>
          <span className="mark__sub">Ostření nožů · Ústí n. L.</span>
        </a>
        <a className="topbar__phone" href={PHONE_HREF}>
          <span className="topbar__phoneLabel">Zavolat do dílny</span>
          <span className="topbar__phoneNum">{PHONE_LABEL}</span>
        </a>
      </header>

      <section className="hero" id="hero">
        <div className="hero__grid wrap">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__tick">°17</span>
              Broušeno v úhlu sedmnáct stupňů
            </p>
            <SharpenHeadline className="hero__title">
              Tupý nůž je jen
              <span className="hero__titleAccent"> dočasný stav.</span>
            </SharpenHeadline>
            <p className="hero__lead">
              Ruční ostření kuchyňských i řemeslných nožů v Ústí nad
              Labem. Každé ostří dotáhnu na japonských vodních kamenech do
              jediného čistého bevelu — a ukážu vám ho proti světlu, než nůž
              převezmete.
            </p>
            <div className="hero__actions">
              <a className="btn btn--edge" href={PHONE_HREF}>
                Zavolat {PHONE_LABEL}
              </a>
              <a className="btn btn--ghost" href="#cenik">
                Ceník ostření
              </a>
            </div>
          </div>

          <div className="hero__media">
            <AiImage
              className="hero__img"
              src="/hero.webp"
              alt="Ostření čepele nože na vodním kameni v dílně"
            />
          </div>
        </div>
        <BevelStroke className="hero__edge" />
      </section>

      <div className="seam" aria-hidden="true">
        <span className="seam__rule" />
      </div>

      <section className="section services" id="cenik">
        <div className="wrap">
          <div className="secHead">
            <p className="eyebrow eyebrow--dark">
              <span className="eyebrow__tick">°17</span>
              Co nabrousím
            </p>
            <h2 className="secHead__title">Ceník ostření</h2>
            <p className="secHead__note">
              Ceny za jeden kus. Čapele s výlomkem nebo říznutí do železa
              spravuji také — příplatek za obnovu ostří řeknu předem, nikdy po.
            </p>
          </div>

          <div className="services__body">
            <ul className="spec">
              {cenik.map((item) => (
                <li className="spec__row" key={item.name}>
                  <span className="spec__name">
                    {item.name}
                    <span className="spec__note">{item.note}</span>
                  </span>
                  <span className="spec__lead" aria-hidden="true" />
                  <span className="spec__price">{item.price}</span>
                </li>
              ))}
            </ul>

            <figure className="services__figure">
              <AiImage
                className="services__img"
                src="/section-1.webp"
                alt="Detail nabroušené čepele kuchyňského nože"
              />
              <figcaption className="services__cap">
                <span className="eyebrow__tick">°17</span>
                Stejný úhel po celé délce čepele — od paty až ke špičce.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section about" id="dilna">
        <div className="wrap about__grid">
          <figure className="about__figure">
            <AiImage
              className="about__img"
              src="/section-2.webp"
              alt="Vladimír Kádner při práci u brusného kamene"
            />
          </figure>

          <div className="about__text">
            <p className="eyebrow">
              <span className="eyebrow__tick">°17</span>
              O dílně
            </p>
            <h2 className="about__title">
              Přes patnáct let u kamene v Ústí nad Labem.
            </h2>
            <p className="about__body">
              Jsem Vladimír Kádner. Nebrousím na automatu — každé ostří
              vedu rukou přes hrubší i jemný kamen a dolejištím na kůži,
              až čepel bere papír tahem dolů. Kuchyňské sady, řeznické
              náčiní, zahradní nůžky i hoblíková železa — co má ostří, to
              nabrousím.
            </p>

            <ul className="facts">
              <li className="facts__item">
                <span className="facts__k">Kde mě najdete</span>
                <span className="facts__v">Ukázková 123, Ústí nad Labem</span>
              </li>
              <li className="facts__item">
                <span className="facts__k">Prodejna</span>
                <span className="facts__v">po–pá 9:00–17:00</span>
              </li>
              <li className="facts__item">
                <span className="facts__k">Kdy dočkáte</span>
                <span className="facts__v">většina zakázek do týdne</span>
              </li>
              <li className="facts__item">
                <span className="facts__k">Napšete</span>
                <span className="facts__v">info@example.cz</span>
              </li>
            </ul>

            <div className="reviews">
              {reference.map((r) => (
                <blockquote className="review" key={r.who}>
                  <p className="review__text">„{r.text}“</p>
                  <footer className="review__by">
                    <span className="review__tick">°17</span>
                    {r.who} · {r.where}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
