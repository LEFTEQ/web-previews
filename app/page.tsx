export default function Page() {
  return (
    <main className="sdk">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-scrim" />
        </div>

        <div className="hero-inner">
          <div className="brandline">
            <span className="wordmark">
              METRO<span className="wordmark-thin">STAV</span>
              <span className="wordmark-sub">stavebniny</span>
            </span>
            <span className="brand-loc">Praha · sádrokartonářské práce</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Rovná stěna.</span>
            <span className="hero-line hero-line-2">Rovný strop.</span>
            <span className="hero-line hero-line-3">Žádný mokrý proces.</span>
          </h1>

          <p className="hero-lead">
            Montáž sádrokartonu po celé Praze — příčky, podhledy, půdní vestavby
            a akustické izolace. Přijedeme, zaměříme, do týdne znáte cenu na korunu.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420602000000">
              Zavolat: 602 000 000
            </a>
            <a className="btn btn-ghost" href="mailto:poptavka@metrostav-stavebniny.cz">
              Poslat poptávku e-mailem
            </a>
          </div>

          {/* Signature: rastr desky — kotvení po 250 mm jako na skutečné SDK desce */}
          <div className="stud-ruler" aria-hidden="true">
            <span className="stud-tick" /><span className="stud-tick" /><span className="stud-tick" />
            <span className="stud-tick" /><span className="stud-tick" /><span className="stud-tick" />
            <span className="stud-label">rozteč profilů 625 mm — kotvíme po 250 mm, jak předepisuje norma</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: CO STAVÍME ===== */}
      <section className="work" aria-labelledby="work-h">
        <div className="section-head">
          <p className="eyebrow">Co u vás postavíme</p>
          <h2 id="work-h">Od jedné příčky po celou půdní vestavbu</h2>
          <p className="section-lead">
            Každá zakázka začíná skladbou konstrukce — tloušťka desky, typ profilu,
            izolace. Tady je to, co děláme nejčastěji, i s tím, co od nás dostanete.
          </p>
        </div>

        <div className="work-grid">
          <article className="card">
            <p className="card-spec">CW 75 + 2× 12,5 mm</p>
            <h3>Příčky a dělení bytů</h3>
            <p>
              Nový pokoj z obýváku nebo pracovna v ložnici. Dvojité oplatění
              a minerální vata — přes stěnu neuslyšíte televizi.
            </p>
          </article>

          <article className="card">
            <p className="card-spec">CD 60/27 · závěsy</p>
            <h3>Podhledy a snížené stropy</h3>
            <p>
              Schováme rozvody, bodovky i rekuperaci. V paneláku i ve starém
              činžáku — strop bude rovný, i když původní není.
            </p>
          </article>

          <article className="card">
            <p className="card-spec">protipožární DF desky</p>
            <h3>Půdní vestavby</h3>
            <p>
              Z půdy pokoj s oknem ve střeše. Šikminy, náklekové stěny, parotěsná
              fólie — včetně skladby, která projde kolaudačním řízením.
            </p>
          </article>

          <article className="card">
            <p className="card-spec">akustické desky + vata</p>
            <h3>Odhlučnění stěn a stropů</h3>
            <p>
              Sousedé, ulice, dětský pokoj. Předstěna na akustických třmenech
              ubere hluku a vezme jen 7 cm z místnosti.
            </p>
          </article>
        </div>

        <figure className="work-photo">
          <img
            src="/section-1.webp"
            alt="Sádrokartonář montuje desku na kovový rošt příčky"
            className="photo"
          />
          <figcaption>
            Každou spáru tmelíme ve třech vrstvách a brousíme do kvality Q2 —
            po vymalování nepoznáte, kde deska končí.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEKCE 2: PROČ NÁM PRAŽANÉ VĚŘÍ ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-text">
            <p className="eyebrow eyebrow-light">Jak pracujeme</p>
            <h2 id="trust-h">Malá parta, která vám nezmizí v polovině</h2>
            <p>
              Jsme pražská firma — na stavbu dojedeme z Vysočan do hodiny.
              Zaměření a nabídku dělá stejný člověk, který pak drží vrtačku.
              Žádný dispečink, žádné přeprodávání zakázky dál.
            </p>

            <ul className="trust-list">
              <li>
                <strong>Cena předem, písemně.</strong> Položkový rozpočet do
                5 pracovních dnů od zaměření. Co je v nabídce, platí.
              </li>
              <li>
                <strong>Uklizeno každý den.</strong> Sádrokarton je suchá stavba —
                večer po nás zametete jednou, ne týden.
              </li>
              <li>
                <strong>Materiál vezeme s sebou.</strong> Jsme zároveň stavebniny,
                desky a profily máme vlastní — nečekáte na dodávku třetí strany.
              </li>
              <li>
                <strong>Záruka 5 let na konstrukci.</strong> Prasklina ve spáře?
                Přijedeme a opravu uděláme zdarma.
              </li>
            </ul>

            <blockquote className="quote">
              <p>
                „Příčka v bytově 3+1 na Žižkově za dva dny včetně tmelení.
                Večer uklizeno tak, že manželka nepoznala, že se u nás stavělo.“
              </p>
              <cite>— pan Kolář, Praha 3, rozdělení dětského pokoje</cite>
            </blockquote>
          </div>

          <figure className="trust-photo">
            <img
              src="/section-2.webp"
              alt="Dokončené podkroví se sádrokartonovými šikminami připravené k malování"
              className="photo"
            />
            <figcaption>
              Půdní vestavba v Karlíně — tři týdny od prvního profilu po přípravu k malování.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
