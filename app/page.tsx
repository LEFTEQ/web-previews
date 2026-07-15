import { AiImage } from "./_ui";

const gowns = [
  {
    title: "Svatební šaty",
    meta: "Gabbiano · Ida Torez · Sunset",
    body: "Romantické, jednoduché, boho i odvážně střižené. Vyzkoušíte si desítky modelů a odvezete si ten, ve kterém se poznáte.",
    img: "Ivory lace wedding gown on a mannequin in a dark couture atelier, single soft spotlight from above, deep shadows",
    alt: "Krajkové svatební šaty v tlumeně nasvíceném ateliéru",
  },
  {
    title: "Společenské šaty",
    meta: "Ples · maturita · host",
    body: "Na ples, k maturitě i na svatbu hosta. Barvy od pudrové a mátové po půlnoční modř a vínovou.",
    img: "Flowing evening gown in deep wine and blush satin displayed on a dress form in a dim boutique, spotlight pool",
    alt: "Společenské šaty ve vínovém a pudrovém odstínu",
  },
  {
    title: "Pánské obleky",
    meta: "Ženich · svědci",
    body: "Kompletní pro ženicha i svědky — obleky, košile, motýlky, pásky i boty ke každému střihu.",
    img: "Tailored dark men's suit on a wooden dress form in a moody fitting room, brass hardware, low key light",
    alt: "Tmavý pánský oblek na krejčovské figuríně",
  },
  {
    title: "Šaty do tanečních",
    meta: "Dívky · chlapci",
    body: "Pro celé taneční — od první lekce po závěrečnou. Šaty pro dívky, obleky a doplňky pro chlapce.",
    img: "Delicate pale blue ballroom dance dress under a warm spotlight against a dark velvet background",
    alt: "Šaty do tanečních pod teplým světlem",
  },
];

const extras = [
  "Závoje, boty a bižuterie",
  "Snubní prsteny",
  "Půjčovna dekorací",
  "Družičky a děti",
];

const reasons = [
  ["Individuální přístup", "Věnujeme se jen vám — bez spěchu a přesně podle toho, co vy sama chcete."],
  ["Úpravy na míru v salonu", "Zkrácení, zúžení i drobné změny doladíme přímo u nás, ne někde na půl cesty."],
  ["Kompletní svatební servis", "Od prvního zkoušení po váš velký den — koordinace svatby i vše kolem."],
  ["Vše na jednom místě", "Šaty, oblek, doplňky i prsteny. Jedna schůzka, jedna adresa v centru Brna."],
  ["Krásné prostředí", "Salon, kde je zkoušení zážitkem — a parkování máte hned poblíž."],
  ["Zkušenost od roku 2008", "Za koordinátorkou i týmem jsou stovky svateb a odzkoušených šatů."],
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="veil-load" aria-hidden="true" />
        <div className="hero-inner">
          <p className="wordmark">
            <span className="wm-name">CAXA</span>
            <span className="wm-pin" aria-hidden="true" />
            <span className="wm-city">Brno</span>
          </p>
          <p className="eyebrow"><span className="pin" aria-hidden="true" />Svatební a společenské šaty · Brno · od roku 2015</p>
          <h1 className="hero-title">
            Vaše <em>ano</em><br />si zaslouží šaty<br />na míru okamžiku.
          </h1>
          <p className="hero-lede">
            Od prvního zkoušení až po váš velký den. Svatební i společenské
            šaty, pánské obleky a kompletní svatební servis — všechno pod
            jednou střechou v centru Brna.
          </p>
          <div className="hero-cta">
            <a className="btn btn-brass" href="tel:+420777818899">Zavolat 777&nbsp;818&nbsp;899</a>
            <a className="btn btn-ghost" href="#nabidka">Rezervovat zkoušku</a>
          </div>
        </div>
      </header>

      <section className="section offering" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow"><span className="pin" aria-hidden="true" />Co u nás najdete</p>
          <h2 className="section-title" id="nabidka-h">Každé šaty ve vlastním světle</h2>
          <p className="section-lede">
            Nemusíte objíždět tři města. Nevěsta, ženich i celá tančírna se
            obléknou u nás.
          </p>
        </div>

        <div className="gown-grid">
          {gowns.map((g) => (
            <article className="gown reveal" key={g.title}>
              <div className="gown-frame scrim">
                <AiImage
                  src={g.img}
                  alt={g.alt}
                  className="gown-photo"
                />
              </div>
              <div className="gown-body">
                <p className="gown-meta"><span className="pin" aria-hidden="true" />{g.meta}</p>
                <h3 className="gown-title">{g.title}</h3>
                <p className="gown-text">{g.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="extras">
          <p className="extras-label">A k tomu ještě</p>
          <ul className="extras-list">
            {extras.map((e) => (
              <li key={e}><span className="pin" aria-hidden="true" />{e}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about" id="o-nas" aria-labelledby="about-h">
        <div className="about-grid">
          <div className="about-text">
            <p className="eyebrow"><span className="pin" aria-hidden="true" />Někdo, kdo tomu rozumí</p>
            <h2 className="section-title" id="about-h">Veronika a tým, který svatby miluje</h2>
            <p className="about-p">
              Jmenuji se Veronika Polehlová a svatbám se věnuji od roku 2008
              jako koordinátorka. V roce 2014 jsem v Brně založila agenturu,
              obklopila se lidmi se stejnou vášní — a když do Brna přišlo
              Svatební centrum CAXA, spojili jsme koordinaci s módou.
            </p>
            <p className="about-p">
              Dnes v salonu CAXA Brno najdete nejen exkluzivní výběr svatebních
              a společenských šatů, ale i kompletní servis až po váš velký den.
            </p>
            <blockquote className="pull">
              „Osobní přístup, empatie a zkušenost — právě to dělá každou
              svatbu opravdu jedinečnou.“
              <cite>Veronika Polehlová, CAXA Brno</cite>
            </blockquote>
          </div>

          <div className="about-media scrim reveal">
            <AiImage
              src="Elegant dim bridal salon interior at night, rows of gowns, brass fixtures, deep wine velvet drapes, single spotlight"
              alt="Interiér svatebního salonu CAXA Brno v tlumeném večerním světle"
              className="about-photo"
            />
          </div>
        </div>

        <div className="reasons">
          <p className="eyebrow center"><span className="pin" aria-hidden="true" />Proč CAXA Brno</p>
          <ul className="reasons-list">
            {reasons.map(([t, d]) => (
              <li className="reason reveal" key={t}>
                <span className="pin" aria-hidden="true" />
                <h3 className="reason-title">{t}</h3>
                <p className="reason-text">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
