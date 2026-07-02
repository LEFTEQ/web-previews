const sluzby = [
  {
    nazev: "Svatby",
    clona: "f/1.4",
    popis:
      "Celý den od příprav po první tanec. Fotím nenápadně, mezi hosty — momenty, které si nezapózujete. Termíny na sezónu se plní rychle, ozvěte se včas.",
    detail: "celodenní reportáž · 400+ fotografií",
  },
  {
    nazev: "Děti a miminka",
    clona: "f/2.0",
    popis:
      "V ateliéru je dětský koutek, přebalovací pult a teplo. Novorozence fotím do 14 dnů, kdy nejlíp spí. Rodiče si mezitím dají kávu na sedačce.",
    detail: "ateliér i u vás doma · 60–90 minut",
  },
  {
    nazev: "Portrét a móda",
    clona: "f/2.8",
    popis:
      "Zrcadlová stěna, stropní pojezdový systém světel a tři místnosti ateliéru. Profilovka na LinkedIn nebo celá fotoproměna s vizážistkou — obojí umím.",
    detail: "business portrét · fotoproměna · lookbook",
  },
  {
    nazev: "Retuš a příprava",
    clona: "f/8",
    popis:
      "Každou vybranou fotku ručně retušuji — pleť, barvy, světlo. Před focením vám pošlu, co si vzít na sebe a jak se připravit, ať nic neřešíte na místě.",
    detail: "ruční retuš · konzultace zdarma",
  },
];

const atelier = [
  { co: "Tři místnosti s recepcí", proc: "převlékárna, líčení a samotné focení zvlášť" },
  { co: "Stropní pojezdový systém", proc: "světla bez kabelů na zemi — bezpečné i pro děti" },
  { co: "Zrcadlová stěna", proc: "vidíte se během focení a upravíte pózu sami" },
  { co: "Dětský koutek a přebalovací pult", proc: "sourozenci se zabaví, miminko má klid" },
  { co: "Zázemí se sedačkou a Wi-Fi", proc: "doprovod si počká v pohodlí, ne na chodbě" },
];

const reference = [
  {
    text:
      "Syn nevydrží chvíli v klidu a Lucie ho měla za deset minut na své straně. Fotky máme na zdi v obýváku a babička brečela.",
    kdo: "Markéta H., focení dětí",
  },
  {
    text:
      "Ze svatby máme přes čtyři sta fotek a ani na jedné nevypadáme strojeně. Lucii jsme půlku dne vůbec nevnímali — a přesně to jsme chtěli.",
    kdo: "Tereza a Jakub, svatba v Beskydech",
  },
  {
    text:
      "Potřeboval jsem portrét na web firmy a bál se, že budu vypadat škrobeně. Nevypadám. Hotovo za hodinu včetně výběru.",
    kdo: "Petr S., business portrét",
  },
];

export default function Page() {
  return (
    <main className="lk">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Úvod">
        <header className="hero-top">
          <span className="wordmark">
            Lucie<em>Kundrová</em>
          </span>
          <a className="hero-tel" href="tel:+420775707807">
            +420 775 707 807
          </a>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Fotografka · ateliér Slezská Ostrava</p>
          <h1 className="hero-title">
            <span className="line line-1">Světlo</span>
            <span className="line line-2">
              <span className="aperture" aria-hidden="true">
                <span className="blade b1" />
                <span className="blade b2" />
                <span className="blade b3" />
                <span className="blade b4" />
                <span className="blade b5" />
                <span className="blade b6" />
              </span>
              a stín,
            </span>
            <span className="line line-3">to je můj svět.</span>
          </h1>
          <p className="hero-sub">
            Svatby, děti, portréty. Fotím tak, abyste na fotkách byli vy —
            ne strnulá póza. Vlastní ateliér se třemi místnostmi najdete
            Na Bunčáku 1018/1 ve Slezské Ostravě.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420775707807">
              Zavolat Lucii
            </a>
            <a className="btn btn-line" href="mailto:studio@viafoto.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>ISO 100</span>
          <span>1/125 s</span>
          <span>f/1.4</span>
          <span>50 mm</span>
          <span>Ostrava</span>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co fotím</p>
          <h2 id="sluzby-h">
            Čtyři clony, čtyři důvody přijít
          </h2>
          <p className="section-lead">
            Každý žánr chce jiné světlo a jinou hloubku ostrosti — proto u
            každé služby uvádím clonu, se kterou nejčastěji pracuji.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <span className="karta-clona">{s.clona}</span>
              <h3>{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== ATELIÉR + REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="atelier">
            <p className="eyebrow eyebrow-light">Ateliér Na Bunčáku</p>
            <h2 id="duvera-h">
              Ateliér stavěný pro lidi,
ne pro techniku
            </h2>
            <p className="atelier-lead">
              Tři místnosti ve Slezské Ostravě, deset minut od centra.
              Všechno v něm má důvod:
            </p>
            <ul className="atelier-list">
              {atelier.map((a) => (
                <li key={a.co}>
                  <strong>{a.co}</strong>
                  <span>{a.proc}</span>
                </li>
              ))}
            </ul>
            <p className="atelier-adresa">
              Na Bunčáku 1018/1, Slezská Ostrava —{" "}
              <a href="mailto:studio@viafoto.cz">domluvte si prohlídku</a>,
              ateliér vám ráda ukážu předem.
            </p>
          </div>

          <div className="refs">
            <p className="eyebrow eyebrow-light">Řekli po focení</p>
            {reference.map((r) => (
              <blockquote className="ref" key={r.kdo}>
                <p>„{r.text}“</p>
                <footer>{r.kdo}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
