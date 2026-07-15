import type { CSSProperties } from "react";

const desserts = [
  {
    n: "01",
    name: "Pivní Větrník",
    text: "Nejčeskější dezert propojený s černým pivem — jemné spojení karamelu, sladu a vanilkového krému pod typickou karamelovou polevou.",
  },
  {
    n: "02",
    name: "Punčák",
    text: "Piškot s mandlovou moukou a rybízovou marmeládou, znovu a znovu polévaný naším punčem. Bez barviv — namáčejte do sytosti.",
  },
  {
    n: "03",
    name: "Kokoska",
    text: "Kokosový marcipán plněný rybízovou marmeládou, pod ním čokoládový krém a úgelný piškot. Kokos, marmeláda a čokoláda jako zlaté pravidlo.",
  },
  {
    n: "04",
    name: "Věneček",
    text: "Menší sourozenec větrníku, naplněný dvěma vanilkovými krémy až po okraj a zdobený typickou bílou polevou. Lehký a nadýchaný.",
  },
  {
    n: "05",
    name: "Indiánek",
    text: "Extra jemný piškot, uprostřed trocha vanilkového krému a odkaz na úplně původní indiánky, které vypadaly docela jinak než dnes.",
  },
  {
    n: "06",
    name: "Sacher",
    text: "S čokoládou z vyhlášené české čokoládovny Ajala a domácí meruňkovou marmeládou. Nejlépe při pokojové teplotě.",
  },
];

export default function Page() {
  return (
    <main className="vp">
      <header className="vp-top">
        <a className="vp-mark" href="#top" aria-label="Votre plaisir — cukrárna, Praha">
          <span className="vp-mark-1">Votre</span>
          <span className="vp-mark-2">plaisir</span>
        </a>
        <div className="vp-top-meta">
          <span className="vp-open">Otevřeno denně&nbsp;10–18</span>
          <a className="vp-tel" href="tel:+420733509106">+420&nbsp;733&nbsp;509&nbsp;106</a>
        </div>
      </header>

      <section className="vp-hero" id="top">
        <div className="vp-hero-text">
          <p className="vp-eyebrow vp-r vp-d1">Cukrárna · Klimentská, Praha&nbsp;1</p>
          <h1 className="vp-h1">
            <span className="vp-r vp-d2">Sladké klasiky</span>
            <span className="vp-r vp-d3">ve <em>francouzském</em></span>
            <span className="vp-r vp-d4">kabátě.</span>
          </h1>
          <p className="vp-lead vp-r vp-d5">
            Ručně připravené dezerty, kvasové sladké pečivo a dorty na objednávku
            v srdci Prahy. Sezónu u nás určuje příroda a čerstvost není prázdný pojem.
          </p>
          <div className="vp-cta vp-r vp-d6">
            <a className="vp-btn vp-btn-solid" href="#dezerty">Prohlédnout dezerty</a>
            <a className="vp-btn vp-btn-ghost" href="tel:+420733509106">Zavolat cukrárně</a>
          </div>
        </div>
        <figure className="vp-vitrina vp-r vp-d3">
          <img
            src="/hero.webp"
            alt="Dezert Votre plaisir zdobený čerstvými jahodami"
            width={900}
            height={1120}
            loading="eager"
          />
          <figcaption>Dnešní výloha</figcaption>
        </figure>
      </section>

      <section className="vp-menu" id="dezerty" aria-labelledby="menu-h">
        <div className="vp-menu-head">
          <p className="vp-eyebrow">Naše klasiky · 01–06</p>
          <h2 className="vp-h2" id="menu-h">
            Tradiční české dezerty, přešité na míru
          </h2>
          <p className="vp-menu-sub">
            Kolekce, kterou znáte z dětství — jen poctivěji. Žádná barviva navíc,
            jen opravdové chuti a francouzská preciznost v každém kousku.
          </p>
        </div>

        <ol className="vp-list">
          {desserts.map((d) => (
            <li className="vp-item" key={d.n}>
              <span className="vp-num">{d.n}</span>
              <div className="vp-item-body">
                <h3 className="vp-item-name">{d.name}</h3>
                <p className="vp-item-text">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="vp-vitrina vp-vitrina-wide">
          <img
            src="/section-1.webp"
            alt="Výběr dezertů cukrárny Votre plaisir"
            width={1200}
            height={760}
            loading="lazy"
          />
          <figcaption>Denně čerstvé, podle sezóny</figcaption>
        </figure>
      </section>

      <section className="vp-soiree" aria-labelledby="about-h">
        <div className="vp-soiree-grid">
          <div className="vp-soiree-text">
            <p className="vp-eyebrow vp-eyebrow-light">O nás · od roku&nbsp;2010</p>
            <h2 className="vp-h2 vp-h2-light" id="about-h">
              Čtrnáct let poctivé práce v Klimentské
            </h2>
            <p className="vp-soiree-lead">
              Michal s Gabrielou pro vás pod značkou Votre plaisir ručně připravují
              dezerty, kvasové pečivo, narozeňninové i svatební dorty na objednávku,
              slané snídaně, fermentované limonády, naturální víno, Prosecco
              i Champagne. A tím vším vám denně dělají radost.
            </p>
            <ul className="vp-facts">
              <li><strong>Ruční výroba</strong> každé ráno, bez zbytečných barviv</li>
              <li><strong>Čokoláda Ajala</strong> a domácí marmelády z českého ovoce</li>
              <li><strong>Klimentská ulice</strong>, pár kroků od Náměstí Republiky</li>
            </ul>
          </div>

          <figure className="vp-vitrina vp-vitrina-dark">
            <img
              src="/section-2.webp"
              alt="Interiér a atmosféra cukrárny Votre plaisir"
              width={900}
              height={1080}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="vp-cards">
          <article className="vp-card">
            <p className="vp-card-kick">Každý pátek 16–18</p>
            <h3 className="vp-card-h">Páteční Soirée</h3>
            <p className="vp-card-text">
              Sklenka vína, Aperolu, Pastisu či Prosecca a něco malého slaného
              i sladkého k tomu. Přijďte kdykoliv bez rezervace — s rezervací
              je to ale vždy lepší.
            </p>
            <a className="vp-btn vp-btn-solid" href="tel:+420733509106">Rezervovat stůl</a>
          </article>

          <article className="vp-card">
            <p className="vp-card-kick">Dort na objednávku</p>
            <h3 className="vp-card-h vp-card-h-fr">Le Mystère du Plaisir</h3>
            <p className="vp-card-text">
              Tajemný narozeňninový dort, který je pokaždé jiný. Příležitost,
              vaše oblíbené ingredience i sezóna určí, jak bude vypadat a chutnat
              zrovna ten váš. Objednávejte minimálně 48 hodin předem.
            </p>
            <a className="vp-btn vp-btn-ghost-light" href="tel:+420733509106">Objednat dort</a>
          </article>
        </div>
      </section>
    </main>
  );
}
