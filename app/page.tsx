import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elán car — autoelektrika a náhradní díly, Praha",
  description:
    "Přímý dovozce autoelektriky. Alternátory, startéry, autobaterie i drobné díly skladem v Praze. Velkoobchod i maloobchod.",
};

const schema = [
  {
    marker: "A",
    title: "Alternátory a jejich díly",
    body: "Nová dynama i díly na renovaci — rotory, statory, regulátory napětí, řemenice a diodové bloky.",
  },
  {
    marker: "S",
    title: "Startéry a jejich díly",
    body: "Kompletní startéry, pastorky, spínací cívky, uhlíky a držáky uhlíků pro osobní i nákladní vozy.",
  },
  {
    marker: "B",
    title: "Autobaterie a startovací zdroje",
    body: "Baterie, LiFePO4 startovací boxy, nabíječky a testery. Vše, co udrží auto naskočené.",
  },
  {
    marker: "E",
    title: "Elektroinstalace a pojistky",
    body: "CYA kabely, pojistky, vodotěsná relé, spojovací materiál i hotové instalační sady.",
  },
  {
    marker: "Ž",
    title: "Autožárovky a LED",
    body: "H1, H3, H4, H7, H11, HB3, HB4, W5W, P21W, D1S, D2S — běžné typy pro osobní i užitková auta.",
  },
];

const reasons = [
  {
    n: "01",
    head: "Vozíme napřímo od výrobců",
    text: "Jsme přímý importér. Bez zbytečných mezičlánků držíme kvalitu nahoře a cenu dole.",
  },
  {
    n: "02",
    head: "„Skladem“ znamená v Praze",
    text: "Když u dílu svítí skladem, je opravdu na regálu u nás — ne u dodavatele o dva týdny dál.",
  },
  {
    n: "03",
    head: "Velkoobchod i jeden kus",
    text: "Zásobujeme servisy i lidi, co si opravují auto sami. Poradíme s výběrem podle vozu.",
  },
];

export default function Page() {
  return (
    <main className="ec">
      <header className="ec-top">
        <a className="ec-brand" href="#" aria-label="Elán car — úvod">
          <span className="ec-brand-mark">E</span>
          <span className="ec-brand-word">
            elán<em>car</em>
          </span>
        </a>
        <nav className="ec-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#proc">Proč my</a>
          <a className="ec-tel" href="tel:+420225341010">
            225 341 010
          </a>
        </nav>
      </header>

      <section className="ec-hero" aria-labelledby="hero-h">
        <div className="ec-hero-img">
          <img
            src="/hero.webp"
            alt="Alternátor a startér — autoelektrika Elán car"
            width={1200}
            height={900}
          />
        </div>
        <div className="ec-hero-copy">
          <p className="ec-eyebrow">Autoelektrika · Praha · přímý dovoz</p>
          <h1 id="hero-h">
            Když auto <span>nenaskočí</span>, začíná to tady.
          </h1>
          <p className="ec-lede">
            Alternátory, startéry a všechno kolem nich. Vozíme napřímo od
            výrobců a držíme skladem v Praze — pro servisy i pro vás, co
            šroubujete doma.
          </p>
          <div className="ec-hero-cta">
            <a className="ec-btn" href="#sortiment">
              Projít sortiment
            </a>
            <a className="ec-btn ec-btn-ghost" href="tel:+420225341010">
              Zavolat prodejnu
            </a>
          </div>
          <dl className="ec-hero-specs">
            <div>
              <dt>Skladem</dt>
              <dd>v Praze, ne u dodavatele</dd>
            </div>
            <div>
              <dt>Napětí</dt>
              <dd>12V / 24V systémy</dd>
            </div>
            <div>
              <dt>Prodej</dt>
              <dd>velkoobchod i 1 ks</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ec-sortiment" id="sortiment" aria-labelledby="sort-h">
        <div className="ec-sec-head">
          <p className="ec-eyebrow">Co u nás najdete</p>
          <h2 id="sort-h">Elektrika vozu, díl po dílu</h2>
          <p className="ec-sec-note">
            Od dynama po pojistku. Vše, co drží palubní síť naživu — pro osobní,
            nákladní i zemědělskou techniku.
          </p>
        </div>

        <ul className="ec-grid">
          {schema.map((item) => (
            <li className="ec-card" key={item.title}>
              <span className="ec-card-mark" aria-hidden="true">
                {item.marker}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
          <li className="ec-card ec-card-img">
            <img
              src="/section-1.webp"
              alt="Startéry a alternátory připravené k odběru na skladě v Praze"
              width={600}
              height={480}
            />
            <p className="ec-card-cap">
              Sklad Praha — díly na regálu, ne na cestě.
            </p>
          </li>
        </ul>
      </section>

      <section className="ec-proc" id="proc" aria-labelledby="proc-h">
        <div className="ec-proc-media">
          <img
            src="/section-2.webp"
            alt="Autobaterie, žárovky a elektroinstalační materiál z nabídky Elán car"
            width={720}
            height={560}
          />
        </div>
        <div className="ec-proc-body">
          <p className="ec-eyebrow">O nás</p>
          <h2 id="proc-h">Dodavatel, který má díl, když ho potřebujete</h2>
          <p className="ec-proc-intro">
            Elán car je velkoobchod i maloobchod s autodíly se specializací na
            autoelektriku. Roky vozíme startéry, alternátory a baterie přímo od
            výrobců — a víme, že v servisu se nečeká.
          </p>
          <ol className="ec-reasons">
            {reasons.map((r) => (
              <li key={r.n}>
                <span className="ec-reasons-n" aria-hidden="true">
                  {r.n}
                </span>
                <div>
                  <h3>{r.head}</h3>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="ec-proc-contact">
            Praha · <a href="tel:+420225341010">225 341 010</a> ·{" "}
            <a href="mailto:prodej@elancar.cz">prodej@elancar.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
