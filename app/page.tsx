import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="vv">
      {/* ——— HERO ——— */}
      <header className="vv-top">
        <a className="vv-mark" href="#" aria-label="VOD VOKA — lash &amp; brow bar, Brno">
          <span className="vv-mark-line">vod</span>
          <span className="vv-mark-line vv-mark-eye">voka<span className="vv-lash" aria-hidden="true" /></span>
        </a>
        <nav className="vv-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#salon">Salon</a>
          <a className="vv-nav-cta" href="#nabidka">Objednat termín</a>
        </nav>
      </header>

      <section className="vv-hero" aria-labelledby="hero-title">
        <div className="vv-hero-copy">
          <p className="vv-eyebrow">Řasy &amp; obočí · Brno-střed</p>
          <h1 id="hero-title">
            Ráno se vzbudíš<br />
            <span className="vv-hl">už namalovaná.</span>
          </h1>
          <p className="vv-lede">
            Lash &amp; brow bar kousek od náměstí Svobody. Řasa po řase, chloupek po
            chloupku — bez řasenky, bez tužky, bez ranního spěchu před zrcadlem.
          </p>
          <div className="vv-hero-actions">
            <a className="vv-btn" href="#nabidka">Vybrat ošetření</a>
            <a className="vv-btn vv-btn-ghost" href="#salon">Jak to u nás chodí</a>
          </div>
          <dl className="vv-facts">
            <div><dt>Prodloužení řas</dt><dd>od 90 min</dd></div>
            <div><dt>Výdrž stylingu obočí</dt><dd>až 6 týdnů</dd></div>
            <div><dt>Kde nás najdeš</dt><dd>Brno, Veselá</dd></div>
          </dl>
        </div>
        <figure className="vv-hero-fig">
          <img
            src="/hero.webp"
            alt="Detail práce v salonu VOD VOKA — aplikace prodloužení řas při zblízka nasvíceném obočí"
            width={880}
            height={1100}
            loading="eager"
          />
          <figcaption>Objemová metoda 3D — ruční aplikace</figcaption>
        </figure>
      </section>

      {/* ——— NABÍDKA ——— */}
      <section id="nabidka" className="vv-menu" aria-labelledby="menu-title">
        <div className="vv-sec-head">
          <p className="vv-eyebrow">Ceník &amp; ošetření</p>
          <h2 id="menu-title">Co u nás dostaneš</h2>
          <p className="vv-sec-note">
            Ceny jsou konečné, včetně odličení a úpravy. Termín potvrdíme do druhého dne.
          </p>
        </div>

        <ul className="vv-cards">
          {services.map((s) => (
            <li key={s.name} className="vv-card">
              <div className="vv-card-head">
                <h3>{s.name}</h3>
                <span className="vv-price">{s.price}</span>
              </div>
              <p className="vv-card-desc">{s.desc}</p>
              <p className="vv-card-meta">
                <span>{s.time}</span>
                <span>{s.hold}</span>
              </p>
            </li>
          ))}
        </ul>

        <figure className="vv-band">
          <img
            src="/section-1.webp"
            alt="Připravené štětečky, pinzety a paletka řas na pracovním stolku salonu"
            width={1200}
            height={720}
            loading="lazy"
          />
          <figcaption>Sterilní nástroje, hypoalergenní lepidlo, jednorázový materiál na každou klientku.</figcaption>
        </figure>
      </section>

      {/* ——— SALON / DŮVĚRA ——— */}
      <section id="salon" className="vv-about" aria-labelledby="about-title">
        <figure className="vv-about-fig">
          <img
            src="/section-2.webp"
            alt="Klidný interiér salonu VOD VOKA s lehátkem a měkkým denním světlem"
            width={880}
            height={1000}
            loading="lazy"
          />
        </figure>
        <div className="vv-about-copy">
          <p className="vv-eyebrow">Salon v centru Brna</p>
          <h2 id="about-title">Sedneš si, zavřeš oči,<br />o zbytek se postaráme</h2>
          <p>
            Jsme malý dvoukřeslový bar — žádná fronta, žádný spěch. Než začneme,
            probereme tvar tvého oka i to, co od řas čekáš v práci, na svatbě
            nebo jen tak na každý den. Pak už jen ležíš.
          </p>
          <ol className="vv-steps">
            <li>
              <span className="vv-step-n">01</span>
              <div>
                <h3>Konzultace tvaru</h3>
                <p>Vybereme délku, prohnutí i objem podle tvého oka — ne podle šablony.</p>
              </div>
            </li>
            <li>
              <span className="vv-step-n">02</span>
              <div>
                <h3>Aplikace řasa po řase</h3>
                <p>Ruční práce v klidu, na měkkém lehátku. Většina klientek u toho usne.</p>
              </div>
            </li>
            <li>
              <span className="vv-step-n">03</span>
              <div>
                <h3>Péče a doplnění</h3>
                <p>Doma stačí kartáček a voda. Na doplnění se stavíš po 3–4 týdnech.</p>
              </div>
            </li>
          </ol>
          <blockquote className="vv-quote">
            „Poprvé v životě jdu ráno z domu bez řasenky a připadám si víc svá.“
            <cite>— Klára, chodí k nám od otevření</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

type Service = {
  name: string;
  price: string;
  desc: string;
  time: string;
  hold: string;
};

const services: Service[] = [
  {
    name: "Klasické řasy 1:1",
    price: "1 190 Kč",
    desc: "Jedna řasa na jednu vlastní — přirozené zahuštění, jako lepší verze tebe.",
    time: "90 min",
    hold: "doplnění po 3–4 týdnech",
  },
  {
    name: "Objemové 3D–5D",
    price: "1 490 Kč",
    desc: "Ruční vějířky pro plný, ale měkký objem. Fotky vydrží i realitu.",
    time: "120 min",
    hold: "doplnění po 3 týdnech",
  },
  {
    name: "Lash lifting + barva",
    price: "890 Kč",
    desc: "Zvednutí a natočení vlastních řas bez prodlužování. Zero údržba.",
    time: "60 min",
    hold: "výdrž 6–8 týdnů",
  },
  {
    name: "Styling obočí + barva",
    price: "590 Kč",
    desc: "Namapujeme tvar, upravíme, zabarvíme. Obočí, které drží celý obličej.",
    time: "45 min",
    hold: "výdrž 4–6 týdnů",
  },
  {
    name: "Brow lamination",
    price: "790 Kč",
    desc: "Nepoddajné chloupky srovnáme nahoru — hustší, upravený look bez gelu.",
    time: "60 min",
    hold: "výdrž 5–6 týdnů",
  },
  {
    name: "Odstranění řas",
    price: "290 Kč",
    desc: "Šetrné sundání starých řas — bez tahání, bez podráždění oka.",
    time: "30 min",
    hold: "kdykoli potřebuješ",
  },
];
