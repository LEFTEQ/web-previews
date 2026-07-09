import type { CSSProperties } from "react";

export const metadata = {
  title: "Autoservis G3 — servis a opravy aut, Liberec",
  description:
    "Autoservis v Liberci na Švermově. Servis a opravy všech značek, servisní prohlídky, pneuservis a originální náhradní díly. Přes 20 let v provozu.",
  openGraph: {
    title: "Autoservis G3 — servis a opravy aut, Liberec",
    description:
      "Servis a opravy všech značek, servisní prohlídky, pneuservis a originální díly. Švermova 404/82, Liberec.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

type Service = {
  num: string;
  title: string;
  desc: string;
  bay: string;
};

const services: Service[] = [
  {
    num: "01",
    title: "Servis a opravy",
    desc: "Osobní i dodávkové vozy všech známých značek. Od výměny oleje po opravu motoru a podvozku.",
    bay: "Stání 1 · zvedák",
  },
  {
    num: "02",
    title: "Servisní prohlídky",
    desc: "Pravidelné prohlídky podle výrobce — ať vám auto vydrží a nezaskočí vás nic po cestě.",
    bay: "Stání 2 · diagnostika",
  },
  {
    num: "03",
    title: "Pneuservis",
    desc: "Přezutí, vyvážení i oprava drobných vad na pneumatikách. Přijeďte, než přituhne.",
    bay: "Stání 3 · vyvažovačka",
  },
  {
    num: "04",
    title: "Náhradní díly",
    desc: "Objednáme originální i kvalitní alternativní díly. Namontujeme rovnou u nás v dílně.",
    bay: "Sklad · na objednávku",
  },
];

const promises: string[] = [
  "Servis osobních i dodávkových vozů všech známých značek",
  "Přes 20 let za klíčem — s různými typy aut od základu",
  "Poctivá práce, kterou je na autě vidět i po letech",
  "Jen originální a kvalitní náhradní díly, nic z šuplíku",
  "Klienti, co se vrací — a doporučí nás dál",
];

const phones = [
  { label: "Mobil", num: "+420 603 208 580", href: "tel:+420603208580" },
  { label: "Kancelář", num: "+420 480 002 405", href: "tel:+420480002405" },
  { label: "Dílna", num: "+420 480 002 403", href: "tel:+420480002403" },
];

export default function Page() {
  return (
    <main className="g3">
      <header className="g3-top">
        <a className="g3-mark" href="#top" aria-label="Autoservis G3, Liberec">
          <span className="g3-mark-g">G</span>
          <span className="g3-mark-3">3</span>
          <span className="g3-mark-word">Autoservis · Liberec</span>
        </a>
        <div className="g3-hours">
          <span className="g3-dot" aria-hidden="true" />
          Po–Pá 8:00–17:00
        </div>
      </header>

      <section className="g3-hero" id="top">
        <div className="g3-hero-media">
          <img
            src="/hero.webp"
            alt="Automobil na zvedáku v dílně Autoservisu G3 v Liberci"
            className="g3-hero-img"
          />
          <div className="g3-hero-scrim" aria-hidden="true" />
        </div>

        <div className="g3-hero-inner">
          <p className="g3-eyebrow">Švermova 404/82 · Liberec · od roku ’04</p>
          <h1 className="g3-title">
            <span className="g3-title-l1">Vaše auto,</span>
            <span className="g3-title-l2">v&nbsp;nejlepších rukou</span>
          </h1>
          <p className="g3-lede">
            Opravy a servis aut děláme přes dvacet let. Ne rychle a ledabyle —
            poctivě, aby práce vydržela a stálo za ní pár rukou z Liberce.
          </p>
          <div className="g3-hero-cta">
            <a className="g3-btn" href="tel:+420603208580">
              Objednat do servisu
            </a>
            <a className="g3-btn g3-btn-ghost" href="#sluzby">
              Co u nás zvládneme
            </a>
          </div>
        </div>

        <dl className="g3-gauge" aria-label="Otevírací doba dílny">
          <div>
            <dt>Otevřeno</dt>
            <dd>8:00 — 17:00</dd>
          </div>
          <div>
            <dt>Polední pauza</dt>
            <dd>12:30 — 14:30</dd>
          </div>
          <div>
            <dt>Jinak</dt>
            <dd>dle domluvy</dd>
          </div>
        </dl>
      </section>

      <section className="g3-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="g3-sec-head">
          <p className="g3-eyebrow">Zakázkový list</p>
          <h2 id="sluzby-h" className="g3-h2">Čtyři stání, jedna dílna</h2>
          <p className="g3-sec-lede">
            Od drobné opravy přes přezutí po komplexní servis. Řekněte, co auto
            dělá — a my rozhodneme, kam patří.
          </p>
        </div>

        <ol className="g3-cards">
          {services.map((s) => (
            <li className="g3-card" key={s.num}>
              <span className="g3-card-num" aria-hidden="true">
                {s.num}
              </span>
              <div className="g3-card-body">
                <h3 className="g3-card-title">{s.title}</h3>
                <p className="g3-card-desc">{s.desc}</p>
                <span className="g3-card-bay">{s.bay}</span>
              </div>
            </li>
          ))}
        </ol>

        <figure className="g3-strip">
          <img
            src="/section-1.webp"
            alt="Mechanik při práci na voze v dílně Autoservisu G3"
            className="g3-strip-img"
          />
          <figcaption className="g3-strip-cap">
            Vše pod jednou střechou na Švermově — diagnostika, zvedák i vyvažovačka.
          </figcaption>
        </figure>
      </section>

      <section className="g3-trust" id="o-nas" aria-labelledby="trust-h">
        <div className="g3-trust-grid">
          <div className="g3-trust-copy">
            <p className="g3-eyebrow">Proč k nám</p>
            <h2 id="trust-h" className="g3-h2">
              Dvacet let<br />pod kapotou
            </h2>
            <p className="g3-sec-lede">
              Naším cílem je spolehlivý servis za férovou cenu. V dobře vybavené
              dílně obstaráme širokou škálu oprav — a nezůstane u odhadu z oka.
            </p>
            <ul className="g3-checks">
              {promises.map((p, i) => (
                <li className="g3-check" key={i}>
                  <span className="g3-check-mark" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="g3-trust-side">
            <figure className="g3-trust-photo">
              <img
                src="/section-2.webp"
                alt="Interiér dílny Autoservisu G3 v Liberci s připraveným nářadím"
                className="g3-trust-img"
              />
            </figure>

            <div className="g3-contact" aria-label="Kontakt na dílnu">
              <p className="g3-contact-title">Zavolejte na správné číslo</p>
              <ul className="g3-phones">
                {phones.map((p) => (
                  <li key={p.label}>
                    <a href={p.href}>
                      <span className="g3-phone-label">{p.label}</span>
                      <span className="g3-phone-num">{p.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="g3-contact-foot">
                Švermova 404/82, Liberec ·{" "}
                <a href="mailto:info@autoservisg3.cz">info@autoservisg3.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
