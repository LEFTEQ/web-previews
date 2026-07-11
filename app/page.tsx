import type { CSSProperties } from "react";

const products = [
  {
    id: "01",
    name: "Fotoobraz na plátně",
    detail: "Vaše fotka natažená na dřevěném rámu, mat povrch bez odlesků.",
    formats: "20×30 · 30×40 · 60×90",
    from: "od 130 Kč",
  },
  {
    id: "02",
    name: "Foto ve dřevě",
    detail: "Přímý tisk do borovicové desky — vidíte i cítíte kresbu letokruhů.",
    formats: "na míru",
    from: "od 390 Kč",
  },
  {
    id: "03",
    name: "Fotokoláž a mozaika",
    detail: "Stovky snímků složené do jednoho obrazu. Sestavíme podle vás.",
    formats: "30×40 a větší",
    from: "od 490 Kč",
  },
  {
    id: "04",
    name: "Sklo a gravírování",
    detail: "Portrét vypálený laserem do skla. Prosvícený drží roky.",
    formats: "stolní i závěsné",
    from: "od 590 Kč",
  },
];

const steps = [
  {
    n: "1",
    title: "Pošlete fotku",
    body: "Nahrajete snímek z telefonu i staré papírové foto. Grafik ji projde, zkontroluje ostrost a barvy — každou, ručně.",
  },
  {
    n: "2",
    title: "Tiskneme a rámujeme",
    body: "Velkoformátový tisk, napnutí na rám nebo desku, zabalení do několika vrstev. Vše v dílně v Úsilném u Budějovic.",
  },
  {
    n: "3",
    title: "Zítra na zdi",
    body: "Hotové fotoobrazy míří druhý den k vám domů. Přijedete si i osobně na prodejnu.",
  },
];

const reviews = [
  {
    text: "Obrázek předčil má očekávání. Bleskové jednání i dodání. Určitě objednám znovu.",
    author: "Marta H.",
    date: "3. 5. 2026",
  },
  {
    text: "Špičkově zabaleno, nemoh sem to ani rozbalit — asi pět vrstev. Rychlá výroba i dodání.",
    author: "David S.",
    date: "11. 6. 2026",
  },
  {
    text: "Fotka ve dřevě je moc hezká. Záleží jim na kvalitě i na spokojenosti zákazníka.",
    author: "Alena L.",
    date: "7. 5. 2026",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Digitální Studio — fotoobrazy">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__crop" />
          </span>
          <span className="wordmark__text">
            Digitální<span className="wordmark__thin">Studio</span>
          </span>
        </a>
        <a className="nav__tel" href="tel:+420773445889">
          <span className="nav__telLabel">Zavolejte grafikovi</span>
          <span className="nav__telNum">+420 773 445 889</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            src="/hero.webp"
            alt="Fotoobraz napnutý na dřevěném rámu, tištěný v dílně Digitální Studio"
            className="hero__img"
            width={1200}
            height={900}
          />
          <span className="hero__crops" aria-hidden="true">
            <b className="c tl" /><b className="c tr" /><b className="c bl" /><b className="c br" />
          </span>
        </div>
        <div className="hero__copy">
          <p className="eyebrow">Tiskárna fotoobrazů · České Budějovice</p>
          <h1 className="hero__title">
            Fotka z&nbsp;telefonu.
            <span className="hero__accent">Do&nbsp;rána na&nbsp;zdi.</span>
          </h1>
          <p className="hero__lead">
            Napínáme vaše vzpomínky na&nbsp;plátno, vypalujeme je do&nbsp;dřeva
            i&nbsp;do&nbsp;skla. Každý snímek projde rukama grafika — ne&nbsp;automatem.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420773445889">Objednat fotoobraz</a>
            <a className="btn btn--ghost" href="#produkty">Co tiskneme</a>
          </div>
          <dl className="hero__stats">
            <div><dt>druhý den</dt><dd>u&nbsp;vás doma</dd></div>
            <div><dt>5,0</dt><dd>hodnocení zákazníků</dd></div>
            <div><dt>ručně</dt><dd>kontrolovaný tisk</dd></div>
          </dl>
        </div>
      </section>

      <section className="sec" id="produkty">
        <div className="sec__head">
          <p className="eyebrow">Nabídka</p>
          <h2 className="sec__title">Z&nbsp;čeho vybíráte</h2>
          <p className="sec__intro">
            Formáty od&nbsp;malého rámečku po&nbsp;velkoformátové obrazy do&nbsp;galerií.
            Nevíte, co&nbsp;se&nbsp;k&nbsp;fotce hodí? Poradíme.
          </p>
        </div>
        <ul className="cards">
          {products.map((p) => (
            <li className="card" key={p.id}>
              <span className="card__id">{p.id}</span>
              <h3 className="card__name">{p.name}</h3>
              <p className="card__detail">{p.detail}</p>
              <div className="card__foot">
                <span className="card__formats">{p.formats}</span>
                <span className="card__price">{p.from}</span>
              </div>
            </li>
          ))}
        </ul>
        <figure className="showcase">
          <img
            src="/section-1.webp"
            alt="Velkoformátové fotoobrazy zdobící interiér"
            width={1200}
            height={800}
          />
          <figcaption>
            Naše obrazy visí ve&nbsp;stovkách domácností i&nbsp;na&nbsp;výstavách — spolupracujeme
            s&nbsp;galeriemi a&nbsp;umělci po&nbsp;celém kraji.
          </figcaption>
        </figure>
      </section>

      <section className="sec sec--dark" id="jak">
        <div className="sec__head">
          <p className="eyebrow eyebrow--light">Jak to chodí</p>
          <h2 className="sec__title">Od&nbsp;fotky ke&nbsp;zdi ve&nbsp;třech krocích</h2>
        </div>
        <div className="flow">
          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.n}>
                <span className="step__n" aria-hidden="true">{s.n}</span>
                <div>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <img
            className="flow__img"
            src="/section-2.webp"
            alt="Tisk fotografie na plátno v dílně Digitální Studio"
            width={900}
            height={1100}
          />
        </div>

        <div className="reviews">
          <p className="reviews__head">Ověřeno zákazníky · hodnocení 5,0</p>
          <ul className="reviews__list">
            {reviews.map((r, i) => (
              <li className="review" key={i}>
                <p className="review__text">„{r.text}“</p>
                <p className="review__meta">
                  <span>{r.author}</span>
                  <span>{r.date}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="reviews__addr">
            Dílna a&nbsp;prodejna: Úsilné 2, 370&nbsp;10 České Budějovice — přijeďte si obraz
            vyzvednout osobně.
          </p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
export type _CSS = CSSProperties;
