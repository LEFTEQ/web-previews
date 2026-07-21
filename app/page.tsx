import { AiImage } from "./_ui";

const strata = [
  { num: "01", label: "Podklad / zdivo", kind: "base" },
  { num: "02", label: "Lepicí a stěrková hmota", kind: "coat" },
  { num: "03", label: "Grafitový EPS", kind: "eps" },
  { num: "04", label: "Výztužná síťovina + stěrka", kind: "mesh" },
  { num: "05", label: "Penetrace + minerální omítka", kind: "render" },
];

const sortiment = [
  {
    tag: "ETICS",
    title: "Kontaktní fasády",
    desc: "Certifikované zateplovací systémy: lepicí a stěrkové hmoty, penetrace i omítky, sladěné do jednoho funkčního celku.",
  },
  {
    tag: "EPS / MW",
    title: "Tepelné izolace",
    desc: "Grafitový i bílý fasádní EPS a minerální vata MW. Skladem, k odběru ihned, bez čekání na dodací termíny.",
  },
  {
    tag: "Profily",
    title: "Doplňky na fasádu",
    desc: "Zakládací a rohové lišty, dilatace, parapetní profily, kotvy a hmoždinky pro promyšlené fasádní detaily.",
  },
  {
    tag: "Nářadí",
    title: "Fasádní nářadí",
    desc: "Hladítka, mísidla, brusná i řezná nářadí — vše od přípravy podkladu až po finální omítku.",
  },
  {
    tag: "ZOFITHERM",
    title: "ZOFITHERM produkty",
    desc: "Naše značka: hliníková ukončovací lišta LNF a injektované kotvení Spiral Anksys pro náročné podklady.",
  },
  {
    tag: "Akce",
    title: "Slevy a akce",
    desc: "Sezonní ceny pro firmy i živnostníky. Pošlete poptávku a spočítáme kompletní dodávku materiálu na míru.",
  },
];

const duvera = [
  "Fasádám opravdu rozumíme — poradíme správné řešení pro konkrétní stavbu.",
  "Zboží skladem odesíláme ihned, běžně doručíme za 24–48 hodin.",
  "B2B ceny a podmínky pro stavební firmy i živnostníky.",
  "Odborné poradenství zdarma — pomůžeme s výběrem i skladbou systému.",
  "Vlastní značka ZOFITHERM: hliníková lišta LNF a kotvení Spiral Anksys.",
  "Fasádní centrum přímo v Olomouci — dojedete, poradíme, naložíme.",
];

const blog = [
  {
    meta: "Blog · dostupnost",
    title: "EPS izolace jsou opět dobře dostupné",
    excerpt:
      "Kratší dodací termíny se vracejí do normálu a umožňují bezproblémové plánování zateplení i stavebních realizací.",
  },
  {
    meta: "Blog · ZOFITHERM LNF",
    title: "Jak správně ukončit nopovou fólii u zateplené fasády",
    excerpt:
      "Hliníková lišta ZOFITHERM LNF drží tvar i na slunci — trvale pevné a estetické ukončení místo měkčeného plastu, který se deformuje.",
  },
  {
    meta: "Blog · Olomouc",
    title: "Delší otevírací doba prodejny v Olomouci",
    excerpt:
      "Od června do října má naše fasádní centrum otevřeno každý pracovní den od 7:00 do 16:00.",
  },
];

function Trim() {
  return (
    <div className="trim" aria-hidden="true">
      <i className="trim__notch" />
      <i className="trim__line" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="wall">
      <div className="topbar">
        <div className="topbar__inner">
          <a className="wordmark" href="#top">
            <span className="mark" aria-hidden="true">
              <i className="mark__eps" />
              <i className="mark__mesh" />
              <i className="mark__render" />
            </span>
            <span className="wordmark__name">
              ZOFI<span className="wordmark__sub">fasády</span>
            </span>
          </a>
          <div className="topbar__contact">
            <span className="topbar__place">Fasádní centrum Olomouc</span>
            <a href="tel:+420777111222">+420 777 111 222</a>
            <span className="topbar__hours">Po–Pá 7:00–15:30</span>
          </div>
        </div>
      </div>

      <section className="band band--hero" id="top">
        <Trim />
        <div className="band__inner">
          <div className="hero">
            <div className="hero__text">
              <p className="eyebrow">Vrstva 03 · grafitový EPS — jádro fasády</p>
              <h1 className="hero__title">
                FASÁDY<br />NÁS BAVÍ!
              </h1>
              <p className="hero__lead">
                Kompletní zateplovací systémy ETICS z jednoho místa — od
                grafitového EPS přes výztužné síťoviny až po finální minerální
                omítku. Skladem, s poradenstvím a vlastní značkou ZOFITHERM.
              </p>
              <div className="actions">
                <a className="btn btn--primary" href="#sortiment">
                  Prohlédnout sortiment
                </a>
                <a className="btn btn--ghost" href="#blog">
                  Přečíst rady na blogu
                </a>
              </div>
            </div>
            <div className="hero__media">
              <AiImage
                className="hero__img"
                src="/hero.webp"
                alt="Zateplená fasáda s grafitovým EPS a probíhající aplikací výztužné stěrky"
              />
            </div>
          </div>

          <div className="strata" role="img" aria-label="Skladba kontaktní zateplené fasády ETICS: podklad, lepidlo, grafitový EPS, výztužná síťovina, minerální omítka">
            <p className="strata__head">Skladba fasády — čtěte odshora dolů</p>
            <ul className="strata__list">
              {strata.map((s) => (
                <li key={s.num} className={`strata__item strata__item--${s.kind}`}>
                  <span className="strata__num">{s.num}</span>
                  <span className="strata__bar">
                    <span className="strata__label">{s.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band band--mesh" id="sortiment">
        <Trim />
        <span className="mesh-grid" aria-hidden="true" />
        <div className="band__inner">
          <header className="section-head">
            <p className="eyebrow eyebrow--dark">Vrstva 04 · výztužná síťovina</p>
            <h2 className="section-head__title">Co u nás pořídíte</h2>
            <p className="section-head__note">
              Pět skladových kategorií, které drží fasádu pohromadě — od izolace
              po nářadí, které ji nanese.
            </p>
          </header>

          <ul className="grid">
            {sortiment.map((c) => (
              <li key={c.title} className="card">
                <span className="card__tag">{c.tag}</span>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__desc">{c.desc}</p>
              </li>
            ))}
          </ul>

          <div className="section-media">
            <AiImage
              className="section-media__img"
              src="/section-1.webp"
              alt="Fasádní materiál skladem — desky izolace, lišty a nářadí připravené k odběru"
            />
          </div>
        </div>
      </section>

      <section className="band band--render" id="duvera">
        <Trim />
        <div className="band__inner">
          <header className="section-head">
            <p className="eyebrow eyebrow--dark">Vrstva 05 · minerální omítka</p>
            <h2 className="section-head__title">Proč nakupovat u Zofi</h2>
            <p className="section-head__note">
              Finální vrstva, kterou je vidět. U nás stojí na skladu, znalosti
              řemesla a lidech v Olomouci, kteří fasády dělají.
            </p>
          </header>

          <div className="trust">
            <ul className="trust__list">
              {duvera.map((t) => (
                <li key={t} className="trust__item">
                  {t}
                </li>
              ))}
            </ul>
            <div className="trust__media">
              <AiImage
                className="trust__img"
                src="/section-2.webp"
                alt="Dokončená fasáda s minerální omítkou a hliníkovou ukončovací lištou ZOFITHERM LNF"
              />
            </div>
          </div>

          <div className="blog" id="blog">
            <h3 className="blog__head">Užitečné rady z fasádního blogu</h3>
            <ul className="blog__list">
              {blog.map((p) => (
                <li key={p.title} className="post">
                  <p className="post__meta">{p.meta}</p>
                  <h4 className="post__title">{p.title}</h4>
                  <p className="post__excerpt">{p.excerpt}</p>
                  <a className="post__link" href="#blog">
                    Číst článek <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
