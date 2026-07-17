import { AiImage } from "./_ui";

const venues = [
  {
    venue: "Palác Žofín",
    cultures: "CZ × IN",
    note: "Neobarokní sál na ostrově uprostřed řeky.",
    prompt:
      "Neo-baroque grand ballroom of Zofin Palace in Prague at dusk, warm brass chandeliers, tall arched windows, candlelight reflecting on the Vltava river outside, elegant wedding setting, cinematic warm gold light",
    alt: "Slavnostně nasvícený neobarokní sál paláce Žofín na vltavském ostrově",
  },
  {
    venue: "Villa Richter",
    cultures: "CZ × US",
    note: "Vinice a terasy pod Pražským hradem.",
    prompt:
      "Terraced vineyard restaurant Villa Richter below Prague Castle at golden sunset, rows of vines, city rooftops beyond, intimate outdoor wedding table with candles, warm evening light",
    alt: "Vinice a terasa vily Richter pod Pražským hradem při západu slunce",
  },
  {
    venue: "Grébovka",
    cultures: "CZ × FR",
    note: "Novorenesanční vila a vinice na Vinohradech.",
    prompt:
      "Neo-Renaissance Grebovka villa and its garden vineyard in Prague Vinohrady, ornate facade, romantic garden pavilion, wedding ceremony arch with flowers, warm afternoon light",
    alt: "Novorenesanční vila Grébovka a zahradní vinice na Vinohradech",
  },
  {
    venue: "Zámek Dobříš",
    cultures: "CZ × GB",
    note: "Rokokový zámek a francouzská zahrada.",
    prompt:
      "Rococo Dobris chateau near Prague with formal French garden, symmetrical parterres, fountains, pink and gold facade, elegant wedding avenue, soft warm daylight",
    alt: "Rokokový zámek Dobříš s francouzskou zahradou",
  },
  {
    venue: "Plavba po Vltavě",
    cultures: "CZ × IT",
    note: "Západ slunce na řece — náš podpisový okamžik.",
    prompt:
      "Private romantic boat cruise on the Vltava river in Prague at sunset, Charles Bridge and Prague Castle silhouette, brass railing, candlelit dinner table on deck, glowing orange horizon over the water",
    alt: "Soukromá romantická plavba po Vltavě při západu slunce s panoramatem Prahy",
  },
];

const services = [
  {
    title: "Kompletní produkce svatby",
    body: "Jednodenní i víkendová. Logistika, harmonogram, dodavatelé a produkce na místě — od prvního e-mailu po poslední přípitek.",
  },
  {
    title: "Mezinárodní svatby",
    body: "Propojíme dvě kultury tak, aby si obě zachovaly svou jedinečnost. Tlumočení tradic, obřad na míru, hosté z celého světa.",
  },
  {
    title: "Concierge & welcome dárky",
    body: "Personalizované dárky pro hosty, ubytování, doprava, výlety po Praze. Postaráme se o každý detail, na který nemyslíte.",
  },
  {
    title: "Výběr místa a dodavatelů",
    body: "Oslovíme přední pražské dodavatele a najdeme místo, které sedne vaší vizi — od paláce po vinici pod Hradem.",
  },
  {
    title: "Design a atmosféra",
    body: "Sofistikovaný design, který zapůsobí na emoce hostů. Žádné univerzální balíčky — vše vzniká pro vás.",
  },
  {
    title: "Plavba po Vltavě",
    body: "Naše podpisová romantická plavba při západu slunce. Ukažte mezinárodním hostům Prahu z hladiny řeky.",
  },
];

const steps = [
  {
    n: "01",
    title: "Seznámíme se",
    body: "Video call nebo schůzka. Zjistíme, co je pro vás nejdůležitější, jak se chcete cítit vy i vaši hosté a co skutečně potřebujete.",
  },
  {
    n: "02",
    title: "Nabídka na míru",
    body: "Na základě úvodního rozhovoru sestavíme nabídku přesně vašim přáním. Žádné univerzální balíčky — jen to, co dává smysl vám.",
  },
  {
    n: "03",
    title: "Zábava začíná",
    body: "Doladíme detaily, potvrdíme rozsah práce. Jakmile podepíšeme smlouvu, začínáme plánovat váš den.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Eventista — domů">
          Eventista
          <span className="wordmark__rule" aria-hidden="true" />
        </a>
        <span className="masthead__tag">Svatební agentura · Praha</span>
      </header>

      <section className="band hero" id="top">
        <p className="hero__eyebrow">Mezinárodní svatby v srdci Prahy</p>
        <h1 className="hero__title">
          <span className="hero__line">Život není perfektní.</span>
          <span className="hero__line hero__line--accent">Vaše svatba může být.</span>
        </h1>

        <div className="horizon" aria-hidden="true">
          <span className="horizon__glow" />
          <span className="horizon__line" />
        </div>

        <p className="hero__lead">
          Spojujeme dvě kultury a odevzdáme vám den, na který vy i vaši hosté
          nezapomenete. All-inclusive produkce, concierge servis a autentický
          zážitek z Prahy — pro klienty, kteří čekají víc než vyžehlené ubrusy.
        </p>
      </section>

      <section className="band services" aria-labelledby="services-h">
        <div className="section-head">
          <p className="eyebrow">Naše služby</p>
          <h2 className="section-title" id="services-h">
            Dokonalé okamžiky vyžadují dokonalé plánování
          </h2>
        </div>

        <ol className="service-list">
          {services.map((s) => (
            <li className="service" key={s.title}>
              <span className="service__mark" aria-hidden="true" />
              <h3 className="service__title">{s.title}</h3>
              <p className="service__body">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="process">
          <p className="eyebrow">Poznejte se s námi</p>
          <div className="process__grid">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band gallery" aria-labelledby="gallery-h">
        <div className="section-head">
          <p className="eyebrow">Galerie · svatební místa</p>
          <h2 className="section-title" id="gallery-h">
            Každá svatba je kurátorský kus
          </h2>
          <p className="section-lead">
            Vybraná pražská místa zavěšená na jedné mosazné linii — vltavské
            hladině při západu slunce. Každé z nich spojuje dvě kultury.
          </p>
        </div>

        <div className="rail">
          <span className="rail__horizon" aria-hidden="true" />
          <ul className="rail__track">
            {venues.map((v) => (
              <li className="plate" key={v.venue}>
                <span className="plate__hang" aria-hidden="true" />
                <div className="plate__frame">
                  <AiImage
                    className="plate__img"
                    src={v.prompt}
                    alt={v.alt}
                  />
                  <span className="plate__glow" aria-hidden="true" />
                </div>
                <figcaption className="plate__cap">
                  <span className="plate__venue">{v.venue}</span>
                  <span className="plate__cultures">{v.cultures}</span>
                </figcaption>
                <p className="plate__note">{v.note}</p>
              </li>
            ))}
          </ul>
          <p className="rail__hint">Táhněte do strany a projděte místa →</p>
        </div>

        <div className="maker">
          <div className="maker__portrait">
            <AiImage
              className="maker__img"
              src="Elegant portrait of a Czech woman wedding planner in her forties, warm candlelight, dark green background, confident calm expression, tasteful evening attire, editorial photography, soft brass rim light"
              alt="Kateřina, majitelka a kreativní ředitelka agentury Eventista"
            />
          </div>
          <div className="maker__text">
            <p className="eyebrow">Jsem Kateřina</p>
            <p className="maker__role">majitelka &amp; kreativní ředitelka</p>
            <p className="maker__body">
              Moje maminka a babička byly ztělesněním pohostinnosti — každá
              příležitost se u nás slavila u velkého stolu plného jídla. Právě
              tam jsem poznala, jak moc na rodinných oslavách záleží.
            </p>
            <p className="maker__body">
              Už 12 let se ve svém oboru zlepšuji. Naplňuje mě spolupráce s
              klienty z celého světa, kteří oceňují jedinečný design, concierge
              servis a chtějí si vychutnat autentickou Prahu.
            </p>
            <dl className="stats">
              <div className="stat">
                <dt>let zkušeností</dt>
                <dd>12</dd>
              </div>
              <div className="stat">
                <dt>svateb &amp; eventů</dt>
                <dd>150+</dd>
              </div>
              <div className="stat">
                <dt>zemí hostů</dt>
                <dd>40+</dd>
              </div>
            </dl>

            <blockquote className="quote">
              <p>
                „Katka je srdcař a opravdu se stará, aby byli klienti spokojení s
                každým detailem. Díky jejímu přístupu a neotřelým nápadům byla
                naše svatba opravdu jedinečná — všichni hosté byli nadšení, jak
                krásné byly všechny detaily.“
              </p>
              <cite>Nevěsta Jana</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
