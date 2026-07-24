import { AiImage } from "./_ui";

function Print({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M100 92c-38 0-52 30-49 78 3 40 8 78 27 102 15 19 29 19 44 0 19-24 24-62 27-102 3-48-11-78-49-78z" />
      <ellipse cx="68" cy="68" rx="17" ry="21" />
      <ellipse cx="96" cy="52" rx="15" ry="19" />
      <ellipse cx="120" cy="55" rx="13" ry="17" />
      <ellipse cx="140" cy="68" rx="11" ry="14" />
      <ellipse cx="156" cy="86" rx="9" ry="12" />
    </svg>
  );
}

function Trail({ tone }: { tone?: "dark" }) {
  return (
    <div className={tone === "dark" ? "trail trail--dark" : "trail"} aria-hidden="true">
      <Print className="trail__print" />
      <Print className="trail__print" />
      <Print className="trail__print" />
    </div>
  );
}

const cats = [
  { name: "Barefoot tenisky", note: "na každý den", key: "c1" },
  { name: "Sandály na léto", note: "k vodě i do lesa", key: "c2" },
  { name: "Celoroční boty", note: "do deště i mrazu", key: "c3" },
  { name: "Outdoorové oblečení", note: "softshell a vrstvy", key: "c4" },
];

const products = [
  { name: "Tenisky Merrell Trail Glove 7 A/C — Barefoot", now: "1 140 Kč", was: "1 699 Kč" },
  { name: "Vivobarefoot Ultra Bloom — Preschool / Kids", now: "1 130 Kč", was: "1 690 Kč" },
  { name: "Sandály Jonap B9 SLIM — Barefoot", now: "770 Kč", was: "1 150 Kč" },
  { name: "Sportovní boty Reima Tepastelu — Barefoot", now: "1 310 Kč", was: "1 950 Kč" },
  { name: "Sandály Be Lenka Flexi — Barefoot", now: "1 530 Kč", was: "2 290 Kč" },
  { name: "Sandály Reima Valoa — Barefoot", now: "1 190 Kč", was: "1 750 Kč" },
];

const trustPoints = [
  "Barefoot poradíme podle věku i tvaru nohy — ne podle nálepky na krabici.",
  "Půjčovna a rezervační systém: můžete zkusit dřív, než koupíte.",
  "Vlastní výroba a ověřené materiály — víme, co dítě obouvá.",
  "Osobní odběr v Liberci: Ukázková 123, hned pod Ještědem.",
];

export default function Page() {
  return (
    <main className="page">
      <header className="band band--hero">
        <nav className="topbar">
          <a className="wordmark" href="#nabidka" aria-label="outdoorkids.cz, úvod">
            <span className="wordmark__mark">
              <Print />
            </span>
            <span className="wordmark__text">
              outdoor<span className="wordmark__kids">kids</span>
            </span>
          </a>
          <a className="topbar__cta" href="#nabidka">
            Prohlédnout boty
          </a>
        </nav>

        <div className="hero">
          <div className="hero__text">
            <p className="eyebrow">
              <Print /> Barefoot pro děti · Liberec
            </p>
            <h1 className="hero__title">
              Nechte dětské prsty <em>roztáhnout</em> do šířky.
            </h1>
            <p className="hero__lead">
              V Liberci pod Ještědem vybíráme barefoot boty a outdoorové oblečení
              pro děti — od prvních bot do školky po celoroční tenisky na výpravy
              do Jizerských hor. Široká špička nechá prsty pracovat, tenká
              podrážka učí nohu cítit terén.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#nabidka">
                Prohlédnout barefoot boty
              </a>
              <a className="btn btn--ghost" href="#o-nas">
                Proč barefoot
              </a>
            </div>
            <ul className="hero__facts">
              <li>Skladem, hned k odeslání</li>
              <li>Merrell · Vivobarefoot · Reima · Be Lenka</li>
              <li>Osobní odběr v Liberci</li>
            </ul>
          </div>

          <div className="hero__media">
            <AiImage
              className="hero__img"
              src="/hero.webp"
              alt="Dětské barefoot boty připravené na výpravu do Jizerských hor"
            />
            <span className="hero__print" aria-hidden="true">
              <Print />
            </span>
          </div>
        </div>
      </header>

      <section className="band band--offer" id="nabidka">
        <div className="band__inner">
          <Trail />
          <p className="badge">
            <Print /> Co u nás najdete
          </p>
          <h2 className="section-title">Od prvních krůčků po celoroční výpravy</h2>
          <p className="section-lead">
            Každou botu vybíráme podle jednoho pravidla: dost místa pro prsty a
            tenká ohebná podrážka. Tady je výběr toho, co teď máme skladem.
          </p>

          <ul className="cats">
            {cats.map((c) => (
              <li className="cat" key={c.key}>
                <span className={`cat__print cat__print--${c.key}`} aria-hidden="true" />
                <span className="cat__name">{c.name}</span>
                <span className="cat__note">{c.note}</span>
              </li>
            ))}
          </ul>

          <div className="offer">
            <AiImage
              className="offer__img"
              src="/section-1.webp"
              alt="Dětská noha v barefoot botě na lesní stezce"
            />
            <ul className="products">
              {products.map((p) => (
                <li className="product" key={p.name}>
                  <a className="product__link" href="#nabidka">
                    <span className="product__name">{p.name}</span>
                    <span className="product__prices">
                      <span className="product__now">{p.now}</span>
                      <span className="product__was">{p.was}</span>
                    </span>
                    <span className="product__tag">Skladem</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band band--trust" id="o-nas">
        <div className="band__inner">
          <Trail tone="dark" />
          <div className="trust">
            <div className="trust__text">
              <p className="badge badge--light">
                <Print /> Proč barefoot z Liberce
              </p>
              <h2 className="section-title">
                Bota, která nechá nohu růst tak, jak má
              </h2>
              <p className="section-lead">
                Nejsme sklad s regály plnými značek. Jsme malý liberecký obchod,
                kde barefoot boty nosíme sami — proto poradíme, kdy dítěti stačí
                lehká teniska a kdy potřebuje celoroční membránu na výlet do hor.
              </p>
              <ul className="trust__list">
                {trustPoints.map((t) => (
                  <li key={t}>
                    <Print className="trust__mark" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AiImage
              className="trust__img"
              src="/section-2.webp"
              alt="Děti na výpravě v Jizerských horách v barefoot botách"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
