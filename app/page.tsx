import type { ReactNode } from "react";

const services: { title: string; tag: string; body: string }[] = [
  {
    title: "Čištění kanalizace a potrubí",
    tag: "DN 100–1200",
    body: "Kanalizace, vodovody i technologické produktovody zbavíme nánosů, tuků a kořenů. Zprůchodníme, co je ucpané, a odvezeme, co vytáhneme.",
  },
  {
    title: "Bezvýkopové opravy potrubí",
    tag: "BEZ VÝKOPU",
    body: "Prasklé nebo rozpadlé potrubí opravíme rukávcem či krátkou vložkou — bez rozkopané ulice, bez uzavírek, bez týdnů čekání.",
  },
  {
    title: "Vysokotlaké tryskání",
    tag: "1000–2500 bar",
    body: "Vodním paprskem odstraníme inkrusty, beton i staré nátěry z ploch, kde ruční čištění nezabere. Jen voda, žádná chemie.",
  },
  {
    title: "Kamerové prohlídky sítí",
    tag: "ZÁZNAM + PROTOKOL",
    body: "Kamerovým vozíkem projedeme potrubí a natočíme přesně, kde je závada a v jaké vzdálenosti. Dostanete záznam i protokol na papíře.",
  },
  {
    title: "Sanace betonu a injektáže",
    tag: "INJEKTÁŽE",
    body: "Utěsníme šachty, jímky a betonové konstrukce, zastavíme průsaky a vrátíme objektům vodotěsnost.",
  },
  {
    title: "Vodohospodářské stavby",
    tag: "STAVBA NA SÍTÍCH",
    body: "Postavíme a zrekonstruujeme stoky, přípojky a objekty na sítích — od výkopu po předání s dokumentací.",
  },
];

const clients: { label: string; note: string }[] = [
  { label: "Města a obce", note: "Údržba a čištění stok v Ostravě a Moravskoslezském kraji." },
  { label: "Správci a bytová družstva", note: "Ucpané svody a ležaté kanalizace v domech i areálech." },
  { label: "Průmyslové provozy", note: "Technologické potrubí, jímky a odlučovače pod tlakem." },
];

export default function Page(): ReactNode {
  return (
    <main className="co-main">
      <a className="co-skip" href="#sluzby">
        Přeskočit na služby
      </a>

      <header className="co-header">
        <a className="co-wordmark" href="#top" aria-label="ČIPOS Ostrava, úvod">
          <span className="co-wordmark-main">
            ČIP<span className="co-bore" aria-hidden="true">O</span>S
          </span>
          <span className="co-wordmark-sub">Ostrava&nbsp;·&nbsp;a.s.</span>
        </a>
        <nav className="co-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a href="#reference">Reference</a>
        </nav>
      </header>

      <section className="co-hero" id="top">
        <div className="co-hero-text">
          <p className="co-eyebrow">
            <span className="co-eyebrow-dot" aria-hidden="true" /> Čištění kanalizací · Ostrava a okolí
          </p>
          <h1 className="co-h1">
            V potrubí i na stavbě<br />
            <span className="co-h1-accent">jako doma.</span>
          </h1>
          <p className="co-lede">
            Čistíme kanalizace, opravujeme prasklé potrubí bez výkopu a kamerou
            natočíme, co se pod zemí opravdu děje. Ostravská firma, výjezd i o víkendu.
          </p>
          <div className="co-actions">
            <a className="co-btn co-btn-primary" href="#sluzby">
              Co pro vás uděláme
            </a>
            <a className="co-btn co-btn-ghost" href="#o-nas">
              Proč zrovna ČIPOS
            </a>
          </div>
          <ul className="co-hero-facts">
            <li>
              <span className="co-fact-k">Non-stop</span>
              <span className="co-fact-v">výjezd na havárie</span>
            </li>
            <li>
              <span className="co-fact-k">MSK</span>
              <span className="co-fact-v">Ostrava a celý kraj</span>
            </li>
            <li>
              <span className="co-fact-k">Záznam</span>
              <span className="co-fact-v">z každé prohlídky</span>
            </li>
          </ul>
        </div>

        <figure className="co-cam" aria-label="Pohled kamerového vozíku do kanalizačního potrubí">
          <img
            className="co-cam-img"
            src="/hero.webp"
            alt="Záběr z kamerové prohlídky uvnitř kanalizačního potrubí"
            width={1280}
            height={960}
            loading="eager"
            decoding="async"
          />
          <span className="co-scan" aria-hidden="true" />
          <span className="co-vignette" aria-hidden="true" />
          <span className="co-reticle" aria-hidden="true">
            <span className="co-reticle-h" />
            <span className="co-reticle-v" />
            <span className="co-reticle-o" />
          </span>
          <span className="co-bracket co-bracket-tl" aria-hidden="true" />
          <span className="co-bracket co-bracket-tr" aria-hidden="true" />
          <span className="co-bracket co-bracket-bl" aria-hidden="true" />
          <span className="co-bracket co-bracket-br" aria-hidden="true" />
          <span className="co-hud co-hud-tl" aria-hidden="true">
            <span className="co-rec" /> REC · KAMERA 01
          </span>
          <span className="co-hud co-hud-tr" aria-hidden="true">DN 300 · BETON</span>
          <span className="co-hud co-hud-bl" aria-hidden="true">STOKA — OSTRAVA</span>
          <span className="co-hud co-hud-br" aria-hidden="true">14,7&nbsp;m</span>
          <figcaption className="co-cam-cap">
            Živý náhled kamerového vozíku — přesně tohle uvidíte i vy v protokolu.
          </figcaption>
        </figure>
      </section>

      <section className="co-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="co-sec-head">
          <p className="co-eyebrow co-eyebrow-dark">Co umíme pod zemí</p>
          <h2 className="co-h2" id="sluzby-nadpis">
            Šest zásahů, jedna parta a vlastní technika.
          </h2>
          <p className="co-sec-lede">
            Nepůjčujeme si vozy ani lidi. Kamerový vozík, tlakové čištění i frézy
            jezdí z jednoho dvora — proto přijedeme rychle a dokončíme na místě.
          </p>
        </div>

        <ul className="co-grid">
          {services.map((s) => (
            <li className="co-card" key={s.title}>
              <span className="co-card-tag">{s.tag}</span>
              <h3 className="co-card-title">{s.title}</h3>
              <p className="co-card-body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="co-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <figure className="co-cam co-cam-alt" aria-label="Vysokotlaké tryskání a čištění potrubí v terénu">
          <img
            className="co-cam-img"
            src="/section-1.webp"
            alt="Technik ČIPOS při vysokotlakém čištění kanalizačního potrubí"
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
          />
          <span className="co-vignette" aria-hidden="true" />
          <span className="co-bracket co-bracket-tl" aria-hidden="true" />
          <span className="co-bracket co-bracket-br" aria-hidden="true" />
          <span className="co-hud co-hud-tl" aria-hidden="true">TRYSKÁNÍ · TERÉN</span>
          <span className="co-hud co-hud-br" aria-hidden="true">OSTRAVA</span>
        </figure>

        <div className="co-about-text">
          <p className="co-eyebrow co-eyebrow-dark">Proč ČIPOS</p>
          <h2 className="co-h2" id="o-nas-nadpis">
            Ostravská firma, která se nebojí sáhnout do kanálu.
          </h2>
          <p className="co-about-p">
            Kanalizace, vodovody a betonové konstrukce máme nakoukané z obou stran —
            umíme je vyčistit i postavit. Když nás zavoláte na ucpanou stoku,
            neposíláme papír, ale vůz s kamerou a čerpadlem. Co najdeme, ukážeme
            na záznamu a rovnou řekneme, jestli stačí propláchnout, nebo opravit.
          </p>
          <p className="co-about-p">
            Pracujeme bez výkopů tam, kde to jde, abyste neměli rozkopaný dvůr ani
            ulici. A protože sídlíme v Ostravě, na havárii v kraji jsme za pár desítek minut.
          </p>
          <p className="co-about-note">
            Mimo kanál fandíme domácím: podporujeme volnočasové centrum pro rodiče
            s dětmi <strong>Zdravíčko Ostrava – Krmelín</strong> s cvičením a saunou pro celé okolí.
          </p>
        </div>
      </section>

      <section className="co-refs" id="reference" aria-labelledby="reference-nadpis">
        <div className="co-refs-head">
          <p className="co-eyebrow co-eyebrow-dark">Pro koho jezdíme</p>
          <h2 className="co-h2" id="reference-nadpis">Kdo si nás volá znovu.</h2>
        </div>
        <div className="co-refs-wrap">
          <ul className="co-refs-list">
            {clients.map((c, i) => (
              <li className="co-ref" key={c.label}>
                <span className="co-ref-idx">{String(i + 1).padStart(2, "0")}</span>
                <div className="co-ref-body">
                  <h3 className="co-ref-label">{c.label}</h3>
                  <p className="co-ref-note">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="co-refs-fig">
            <img
              className="co-refs-img"
              src="/section-2.webp"
              alt="Vozový park a technika ČIPOS Ostrava pro čištění a opravy potrubí"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="co-refs-cap">
              Vlastní technika ČIPOS — kamera, tlak i fréza z jednoho dvora v Ostravě.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
