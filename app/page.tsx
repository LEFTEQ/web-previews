import { AiImage } from "./_ui";

const sections = [
  {
    num: "01",
    name: "Neurologie",
    lead: "Bolest hlavy, brnění rukou, závratě, stavy po mozkové příhodě.",
    body: "Neurologická ambulance se stará o pacienty s onemocněním centrálního i periferního nervového systému — bolesti páteře a pohybového aparátu, poruchy spánku, závrativé stavy, polyneuropatie, epilepsie. Vyšetření vede lékař s atestací v neurologii a navazuje přímo na fyzioterapii pod jednou střechou.",
    items: [
      "Diagnostika bolestí zad a krční páteře",
      "Péče po cévní mozkové příhodě",
      "Poruchy spánku a závratě",
      "Polyneuropatie, epilepsie",
    ],
  },
  {
    num: "02",
    name: "Rehabilitace",
    lead: "Individuální fyzioterapie, ne cvičení podle papírku.",
    body: "Rehabilitační ambulance pokrývá prevenci i léčbu bolestivých, chronických, degenerativních, poúrazových a pooperačních potíží hybného systému — hlavně páteře a nosných kloubů. Fyzioterapeuti s vysokoškolským vzděláním pracují rukama i přístroji a plán vzniká po vstupním kineziologickém rozboru.",
    items: [
      "Kineziologický rozbor a plán terapie",
      "Měkké a mobilizační techniky",
      "Fyzikální terapie a elektroléčba",
      "Doléčení po operaci kolena či kyčle",
    ],
  },
  {
    num: "03",
    name: "Infuzní stacionář",
    lead: "Infuzní léčba vsedě, s dohledem sestry, obvykle do hodiny.",
    body: "Stacionář slouží pacientům, u kterých léky v tabletách nestačí — zejména při úporných bolestech zad a kloubů. Součástí je i ambulance lymfologie zaměřená na otoky a lymfedém, přístrojovou i manuální lymfodrenáž.",
    items: [
      "Infuzní analgetická série",
      "Ambulance lymfologie",
      "Manuální i přístrojová lymfodrenáž",
      "Kontrola sestrou po celou dobu",
    ],
  },
  {
    num: "04",
    name: "Masáže",
    lead: "Placené masáže bez doporučení lékaře — objednáte se sami.",
    body: "Nabídku masáží jsme rozšířili. Termín si domluvíte telefonicky i bez žádanky, masáž vede vyškolený terapeut ve stejných ordinacích jako rehabilitace.",
    items: [
      "Masáž zad — 30 nebo 60 min",
      "Masáž horních či dolních končetin — 30 min",
      "Reflexní terapie plosek nohou / ruky — 30 min",
      "Baňkování — 30 nebo 60 min",
      "Lávové kameny — 25 nebo 50 min",
      "Havajská masáž — 30 nebo 60 min",
      "Masáž obličeje — 30 min",
    ],
  },
];

const pojistovny = ["VZP ČR", "ČPZP", "RBP", "OZP", "ZPMV", "VoZP"];

export default function Page() {
  return (
    <main className="nr">
      <header className="nr-top">
        <a className="nr-mark" href="#uvod" aria-label="NEREST — úvod">
          <span className="nr-mark-word">NEREST</span>
          <span className="nr-mark-sub">zdravotnické zařízení · Ostrava</span>
        </a>
        <a className="nr-call" href="tel:—">
          Zavolat —
        </a>
      </header>

      <section className="nr-hero" id="uvod">
        <div className="nr-hero-text">
          <p className="nr-eyebrow">Rehabilitační a fyzikální medicína · neurologie · fyzioterapie</p>
          <h1 className="nr-h1">
            Záda držíme<br />
            <em>obratel po obratli.</em>
          </h1>
          <p className="nr-lede">
            Neurolog, rehabilitační lékař i fyzioterapeut na jednom místě v Ostravě. Vyšetření,
            terapie a infuze navazují na sebe — nemusíte objíždět tři budovy a třikrát vyprávět
            stejný příběh. Od roku2000.
          </p>
          <div className="nr-hero-cta">
            <a className="nr-btn" href="tel:—">Objednat se telefonicky</a>
            <a className="nr-link" href="mailto:—">Napsat e-mail</a>
          </div>
          <dl className="nr-facts">
            <div>
              <dt>Kde</dt>
              <dd>Ukázková123, Ostrava</dd>
            </div>
            <div>
              <dt>Hrazeno</dt>
              <dd>Ze zdravotního pojištění</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd>Telefonicky, po–pá</dd>
            </div>
          </dl>
        </div>
        <figure className="nr-hero-fig">
          <AiImage
            className="nr-hero-img"
            src="/hero.webp"
            alt="Fyzioterapeutka pracuje s pacientem na rehabilitačním lehátku v ordinaci NEREST"
          />
          <figcaption>Rehabilitační sál, mobilizace hrudní páteře</figcaption>
        </figure>
      </section>

      <div className="nr-spine-wrap">
        <div className="nr-spine" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className={`nr-vert nr-vert-${i % 4}`} />
          ))}
        </div>

        <section className="nr-sections" id="pece" aria-label="Naše péče">
          <h2 className="nr-h2">
            Čtyři pracoviště, <span>jedna karta pacienta</span>
          </h2>
          {sections.map((s) => (
            <article className="nr-block" key={s.num}>
              <div className="nr-block-tag">
                <span className="nr-seg" aria-hidden="true" />
                <span className="nr-num">{s.num}</span>
                <h3 className="nr-block-name">{s.name}</h3>
              </div>
              <div className="nr-block-body">
                <p className="nr-block-lead">{s.lead}</p>
                <p className="nr-block-text">{s.body}</p>
                <ul className="nr-list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="nr-trust" id="o-nas" aria-label="O zařízení">
          <div className="nr-trust-grid">
            <div className="nr-trust-text">
              <p className="nr-eyebrow">O zařízení</p>
              <h2 className="nr-h2">
                Od roku 2000 <span>léčíme pohyb, ne diagnózu na papíře</span>
              </h2>
              <p className="nr-block-text">
                Zabýváme se diagnostikou, prevencí a léčbou funkčních poruch a bolestivých stavů
                pohybového aparátu. Tým tvoří lékaři s atestací v oboru rehabilitační a fyzikální
                medicína a neurologie a fyzioterapeuti s vysokoškolským a dalším prohlubujícím
                vzděláním. Díky kombinaci odborností je péče centralizovaná na jedno místo — lékař i
                terapeut vidí stejný nález.
              </p>
              <p className="nr-block-text">
                Lékařská péče je hrazena ze zdravotního pojištění. Masáže a nadstandardní výkony si
                hradíte sami a nepotřebujete k nim žádanku.
              </p>
              <ul className="nr-insurers" aria-label="Smluvní zdravotní pojišťovny">
                {pojistovny.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <figure className="nr-trust-fig">
              <AiImage
                className="nr-trust-img"
                src="/section-1.webp"
                alt="Ordinace neurologie v zařízení NEREST s vyšetřovacím lehátkem"
              />
              <figcaption>Ordinace neurologie</figcaption>
            </figure>
          </div>

          <div className="nr-quotes">
            <figure className="nr-quote">
              <blockquote>
                „Po operaci kyčle jsem chodila o berlích a bála se schodů. Po deseti terapiích jsem
                došla sama do třetího patra.“
              </blockquote>
              <figcaption>Jarmila K., 68 let · po totální endoprotéze</figcaption>
            </figure>
            <figure className="nr-quote">
              <blockquote>
                „Sedavá práce, bolest mezi lopatkami každé odpoledne. Dostal jsem rozbor, tři
                cviky a vysvětlení proč. Funguje to líp než léky.“
              </blockquote>
              <figcaption>Radek P., 41 let · chronické bolesti hrudní páteře</figcaption>
            </figure>
            <figure className="nr-quote nr-quote-img">
              <AiImage
                className="nr-quote-photo"
                src="/section-2.webp"
                alt="Infuzní stacionář zařízení NEREST — křeslo pro pacienta a infuzní stojan"
              />
              <figcaption>Infuzní stacionář — křeslo, ne lůžko</figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
