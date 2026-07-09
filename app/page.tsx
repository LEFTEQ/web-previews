import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pavel Kalocsai — klempířství Ostrava | okapy, oplechování, měď a titanzinek",
  description:
    "Klempířské práce v Ostravě a okolí. Okapy, oplechování, komíny a atiky z pozinku, hliníku, mědi i titanzinku. Ohýbáme prvky na míru vaší střeše. Záruka 6 let.",
  openGraph: {
    title: "Pavel Kalocsai — klempířství Ostrava",
    description:
      "Okapy, oplechování a klempířské prvky na míru — pozink, hliník, měď, titanzinek. Ostrava-Hrabová.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

export default function Page() {
  return (
    <main className="kp">
      <header className="kp-top">
        <a className="kp-wm" href="#" aria-label="Pavel Kalocsai, klempířství">
          <span className="kp-wm-mark" aria-hidden="true">
            <span className="kp-fold" />
            <span className="kp-fold" />
            <span className="kp-fold" />
          </span>
          <span className="kp-wm-text">
            <span className="kp-wm-name">Kalocsai</span>
            <span className="kp-wm-sub">klempířství · Ostrava</span>
          </span>
        </a>
        <a className="kp-tel" href="tel:+420731731229">
          +420 731 731 229
        </a>
      </header>

      <section className="kp-hero" aria-labelledby="hero-h">
        <div className="kp-hero-media">
          <img
            src="/hero.webp"
            alt="Detail nově osazeného plechového oplechování a okapu na střeše"
            className="kp-hero-img"
          />
        </div>
        <div className="kp-hero-copy">
          <p className="kp-eyebrow">Ostrava-Hrabová · od návrhu po poslední šroub</p>
          <h1 id="hero-h">
            Plech se neohne sám.
            <span className="kp-hero-accent">Ohneme ho podle vaší střechy.</span>
          </h1>
          <p className="kp-lede">
            Okapy, oplechování atik, komínů a parapetů — každý prvek na dílně ohnu
            přesně na míru, ne z katalogu. Pracuji s pozinkem, hliníkem, mědí i
            titanzinkem. Voda pak teče tam, kam má, a ne po fasádě.
          </p>
          <div className="kp-cta-row">
            <a className="kp-btn kp-btn-primary" href="tel:+420731731229">
              Zavolat Pavlovi
            </a>
            <a className="kp-btn kp-btn-ghost" href="#cinnosti">
              Co dělám
            </a>
          </div>
        </div>

        <dl className="kp-strip" aria-label="Základní údaje">
          <div className="kp-strip-item">
            <dt>Materiály</dt>
            <dd>pozink · hliník · měď · titanzinek</dd>
          </div>
          <div className="kp-strip-item">
            <dt>Záruka</dt>
            <dd>6 let na práci i materiál</dd>
          </div>
          <div className="kp-strip-item">
            <dt>Působím</dt>
            <dd>Ostrava a okolí</dd>
          </div>
        </dl>
      </section>

      <section className="kp-work" id="cinnosti" aria-labelledby="work-h">
        <div className="kp-sec-head">
          <h2 id="work-h">Klempířina, pokrývačina, tesařina</h2>
          <p>
            Střecha drží dohromady třemi řemesly. Zvládnu je všechna, takže se
            nemusíte domlouvat se třemi partami — mluvíte jen se mnou.
          </p>
        </div>

        <ol className="kp-services">
          <li className="kp-svc">
            <span className="kp-svc-no">01</span>
            <h3>Klempířské prvky na míru</h3>
            <p>
              Okapy, svody, oplechování atik, komínů, parapetů a záhybů. Prvky
              ohýbám na dílně z plechu, který k vaší střeše sedí — pozink,
              hliník, měď i titanzinek.
            </p>
          </li>
          <li className="kp-svc">
            <span className="kp-svc-no">02</span>
            <h3>Pokrývačské práce</h3>
            <p>
              Pokládám všechny běžné krytiny — betonové i pálené tašky, plechové
              krytiny i šindele. Poradím, co se hodí ke sklonu a rozpočtu vaší
              střechy.
            </p>
          </li>
          <li className="kp-svc">
            <span className="kp-svc-no">03</span>
            <h3>Tesařské práce</h3>
            <p>
              Krovy, příhradové vazníky, altány i garážová stání. Nová konstrukce
              nebo výměna toho, co už dosloužilo.
            </p>
          </li>
          <li className="kp-svc">
            <span className="kp-svc-no">04</span>
            <h3>Střechy na klíč a opravy</h3>
            <p>
              Šikmé, ploché i panelové domy. Od nezávazné cenové nabídky přes
              montáž oken Velux až po drobné opravy, když jen někde zatéká.
            </p>
          </li>
        </ol>

        <figure className="kp-figure">
          <img
            src="/section-1.webp"
            alt="Klempířské prvky připravené k montáži na střeše"
            className="kp-figure-img"
          />
          <figcaption>
            Než plech dorazí na střechu, projde ohýbačkou. Rozměry beru z reálné
            stavby, ne z tabulky.
          </figcaption>
        </figure>
      </section>

      <section className="kp-about" id="o-nas" aria-labelledby="about-h">
        <div className="kp-about-media">
          <img
            src="/section-2.webp"
            alt="Hotová střecha s novým oplechováním a okapovým systémem"
            className="kp-about-img"
          />
        </div>
        <div className="kp-about-copy">
          <p className="kp-eyebrow">O mně</p>
          <h2 id="about-h">Pavel Kalocsai — na střechách přes 30 let</h2>
          <p className="kp-about-lede">
            Dělám střechy tak dlouho, že poznám, kde bude za pět let problém,
            ještě než začnu. Proto radši jednou spočítám a jednou udělám — a
            cenu, kterou vám řeknu předem, dodržím do koruny.
          </p>

          <ul className="kp-promises">
            <li>
              <strong>Fixní cena.</strong> Kalkulaci dostanete před začátkem
              prací a nenavýší se.
            </li>
            <li>
              <strong>Termín, který platí.</strong> Dokončím v předem sjednaném
              termínu.
            </li>
            <li>
              <strong>Záruka 6 let.</strong> Na provedenou práci i na materiál.
              Když se něco objeví, přijedu to spravit.
            </li>
          </ul>

          <div className="kp-contact-card">
            <p className="kp-contact-line">
              <span>Telefon</span>
              <a href="tel:+420731731229">+420 731 731 229</a>
            </p>
            <p className="kp-contact-line">
              <span>E-mail</span>
              <a href="mailto:pavelkalocsai@seznam.cz">pavelkalocsai@seznam.cz</a>
            </p>
            <p className="kp-contact-line">
              <span>Dílna</span>
              <span>Bělská 979/29c, 720 00 Ostrava-Hrabová</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
