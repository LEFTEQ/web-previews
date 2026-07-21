import { AiImage } from "./_ui";

function Raven({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 75"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6,46 C16,42 22,40 27,35 C29,28 36,23 46,24 C58,25 70,27 82,23 C89,21 95,17 99,11 C97,21 90,29 81,33 C85,40 85,49 78,55 C72,60 63,61 56,57 L58,69 L53,71 L54,57 C48,56 43,51 42,45 C31,47 16,47 8,45 Z" />
    </svg>
  );
}

const edice = [
  {
    tema: "Duchovní hledání",
    titul: "Psychologie probouzení",
    podtitul: "Buddhismus, psychoterapie a cesta osobní transformace",
    autor: "John Welwood",
    cloth: "violet",
  },
  {
    tema: "Duchovní hledání",
    titul: "Slzy věcí",
    podtitul: "Prorocká moudrost pro naši rozjitřenou dobu",
    autor: "Richard Rohr",
    cloth: "ink",
  },
  {
    tema: "Duchovní hledání",
    titul: "Cesta poustevníka",
    podtitul: "K oranžovému rouchu jógového a hinduistického mnicha",
    autor: "Svámí Gyaneshwarpuri",
    cloth: "burgundy",
  },
  {
    tema: "Příroda a ekologie",
    titul: "Adaptogeny",
    podtitul: "Léčivé rostliny a medicinální houby",
    autor: "Nikola Mrázová · Ondřej Petr",
    cloth: "green",
  },
  {
    tema: "Příroda a ekologie",
    titul: "Encyklopedie ekologického zemědělství",
    podtitul: "Šest autorů, jedna půda, celý ročník",
    autor: "Jan Trávníček a kol.",
    cloth: "ink",
  },
  {
    tema: "Mysl a zdraví",
    titul: "Za hranice komfortu",
    podtitul: "Přijměte nepohodlí a najděte své šťastné, zdravé já",
    autor: "Michael Easter",
    cloth: "burgundy",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Lukáš a syn — rodinné nakladatelství">
          <Raven className="wordmark-raven" />
          <span className="wordmark-name">Lukáš <span className="amp">&amp;</span> syn</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#edice">Edice</a>
          <a href="#pripravujeme">Připravujeme</a>
          <a href="#knihoblog">Knihoblog</a>
          <a href="#o-nas">O nás</a>
        </nav>
      </header>

      <section className="hero band" aria-labelledby="hero-title">
        <div className="hero-type">
          <p className="hero-eyebrow">Rodinné nakladatelství z Brna · od roku 1996</p>
          <h1 className="hero-title" id="hero-title">
            <span className="line"><span>Knihy, které</span></span>
            <span className="line">
              <span>
                <span className="sweep">probouzejí</span> touhu
              </span>
            </span>
            <span className="line last">
              <span>
                poznávat.
                <Raven className="hero-raven raven-drop" />
              </span>
            </span>
          </h1>
          <p className="hero-lede">
            Vybíráme tituly o duchovním hledání, přírodě a lidské mysli — knihy,
            u kterých se zastavíte a přemýšlíte dál. Tři generace, jeden redakční
            stůl a doprava zdarma od 800 Kč.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#edice">Prohlédnout novinky</a>
            <a className="btn btn-ghost" href="#o-nas">O nakladatelství</a>
          </div>
        </div>
        <div className="hero-plate">
          <AiImage
            className="hero-img"
            src="/hero.webp"
            alt="Otevřená kniha a havran, motiv nakladatelství Lukáš a syn"
          />
        </div>
      </section>

      <section className="edice band" id="edice" aria-labelledby="edice-title">
        <div className="edice-intro">
          <p className="eyebrow"><Raven className="eyebrow-raven" /> Právě vychází · jaro 2026</p>
          <h2 className="section-title" id="edice-title">
            Osm novinek, seřazených podle toho, kam vás zavedou
          </h2>
          <p className="section-lede">
            Nevydáváme knihy podle žebříčků. Každý titul projde stejnou otázkou:
            otevře čtenáři něco, co dosud neviděl? Proto naše edice drží tři
            linie — vnitřní hledání, živou přírodu a poctivou vědu o člověku.
          </p>
        </div>

        <ul className="books" aria-label="Nové tituly">
          {edice.map((b) => (
            <li className="book-item" key={b.titul}>
              <article className={`book book--${b.cloth}`}>
                <span className="book-spine" aria-hidden="true" />
                <span className="book-tema">{b.tema}</span>
                <span className="book-titul">{b.titul}</span>
                <span className="book-podtitul">{b.podtitul}</span>
                <span className="book-autor">{b.autor}</span>
              </article>
            </li>
          ))}
        </ul>

        <div className="edice-plate">
          <AiImage
            className="edice-img"
            src="/section-1.webp"
            alt="Police s knihami v knihkupectví Lukáš a syn"
          />
          <p className="plate-caption">
            V kamenném obchodě v Brně si každou novinku můžete prolistovat dřív,
            než ji koupíte.
          </p>
        </div>
      </section>

      <section className="about band" id="o-nas" aria-labelledby="about-title">
        <div className="about-media">
          <AiImage
            className="about-img"
            src="/section-2.webp"
            alt="Rodinné nakladatelství Lukáš a syn — redakční stůl"
          />
        </div>
        <div className="about-body">
          <p className="eyebrow eyebrow--light"><Raven className="eyebrow-raven" /> O nás</p>
          <h2 className="section-title" id="about-title">
            Tři generace u jednoho stolu, od roku 1996
          </h2>
          <blockquote className="pullquote">
            „Poznání není sbírání odpovědí, ale <span className="sweep sweep--static">rozhovor</span> se&nbsp;světem.“
          </blockquote>
          <p className="about-text">
            Začínali jsme jako otec a syn s jedním regálem přeložených knih.
            Dnes vydáváme titulů přes dvě stě — a pořád platí stejné pravidlo:
            čteme každou knihu od první do poslední strany, než dostane naši
            značku s dvěma havrany. Jeden je myšlenka, druhý paměť; spolu hlídají,
            aby vám z police neodešla kniha, na kterou byste vzpomínali jen mlhavě.
          </p>
          <dl className="facts">
            <div className="fact">
              <dt>Od roku</dt>
              <dd>1996</dd>
            </div>
            <div className="fact">
              <dt>Sídlo</dt>
              <dd>Brno</dd>
            </div>
            <div className="fact">
              <dt>Titulů v edici</dt>
              <dd>200+</dd>
            </div>
            <div className="fact">
              <dt>Doprava zdarma</dt>
              <dd>od 800 Kč</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
