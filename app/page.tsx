import { AiImage } from "./_ui";
import { PaverStrip, SlabCast, Reveal, Joint } from "./motion";

const systems = [
  { name: "LITE", note: "tenkostěnná" },
  { name: "VERTO", note: "vertikální" },
  { name: "BARK", note: "struktura kůry" },
  { name: "MODERN", note: "velkoformát" },
  { name: "DUO STONE", note: "dvě frakce" },
  { name: "H\u2011E\u2011X", note: "šestihran" },
  { name: "RUSTIKAL", note: "kámen" },
];

const sortiment = [
  { t: "Dlažby", d: "Zámková i velkoformátová dlažba pro vjezdy, terasy a chodníky — nosnost i pro auto." },
  { t: "Zdicí prvky", d: "Ploty a zídky ze systému ALFA BLOCK i tvarovek, které drží roky bez omítky." },
  { t: "Schody", d: "Blokové i montované schodišťové stupně, naříznuté na váš rozměr." },
  { t: "Obrubníky", d: "Zahradní i silniční obruby pro čisté, rovné ukončení plochy." },
  { t: "Žlaby", d: "Odvodňovací žlaby, které udrží vodu tam, kam patří — od vjezdu k terase." },
  { t: "Palisády a stěny", d: "Terénní schody, opěrné a zahradní stěny do svahu." },
  { t: "Bazénové lemy", d: "Oblouk nebo hrana — systémové zakončení pro každý tvar bazénu." },
  { t: "Mobiliář", d: "Betonové lavičky a prvky, které dělají firmě i městu vizitku." },
];

const duvera = [
  { k: "Projekt zdarma", d: "Připravíme vám 2D návrh exteriéru — uvidíte plochu dřív, než koupíte první paletu." },
  { k: "Konfigurátory", d: "Schody, ploty, bazény i dlažby si naskládáte sami a rovnou zjistíte orientační cenu." },
  { k: "Pro projektanty", d: "Pracovní postupy ve dwg, 3D modely a technická podpora k systémovým řešením." },
  { k: "Katalog 2026", d: "Kompletní přehled betonových prvků od soukromé zahrady po veřejný prostor." },
];

export default function Page() {
  return (
    <main>
      <header className="head">
        <div className="wrap head-in">
          <a className="mark" href="#top" aria-label="PRESBETON Nova, úvod">
            <span className="mark-block" aria-hidden="true" />
            <span className="mark-word">PRESBETON<span className="mark-sub">nova</span></span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#sortiment">Sortiment</a>
            <a href="#systemy">Systémy</a>
            <a href="#proc">Proč my</a>
            <a className="nav-cta" href="#proc">Projekt zdarma</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-lead">
            <p className="eyebrow">Stavebniny · dlažba · obklady — Olomouc</p>
            <SlabCast />
            <p className="hero-p">
              Betonová dlažba, zdicí prvky a schody z Olomouce. Přijďte si
              sáhnout na vzorky, nebo si nechte zdarma připravit 2D návrh
              vaší plochy — materiál i rady k pokládce dodáme z jednoho místa.
            </p>
            <div className="cta-row">
              <a className="btn btn-red" href="#proc">Chci projekt zdarma</a>
              <a className="btn btn-ghost" href="#sortiment">Prohlédnout sortiment</a>
            </div>
            <p className="hero-note">Vzorkovna a výdej: Ukázková 123, Olomouc</p>
          </div>
          <div className="hero-media">
            <div className="bevel-frame">
              <AiImage src="/hero.webp" alt="Položená betonová dlažba PRESBETON Nova na ploše před rodinným domem v Olomouci" className="media-img" />
            </div>
          </div>
        </div>

        <div className="wrap">
          <p className="strip-label">Modulová spára — systémová řešení dlažby</p>
          <PaverStrip items={systems} />
        </div>
      </section>

      <Joint />

      <section className="section" id="sortiment">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Sortiment</p>
              <h2 className="sec-title">Všechno pro plochu i plot — z jednoho betonu</h2>
              <p className="sec-intro">
                Devět skupin prvků, které do sebe zapadají jako dlažba na loži.
                Od zámkovky pod auto po lavičku na náměstí — a ke všemu vzorek,
                který si můžete odnést domů.
              </p>
            </div>
          </Reveal>

          <div className="cat-grid">
            {sortiment.map((c) => (
              <article className="cat" key={c.t}>
                <h3 className="cat-t">{c.t}</h3>
                <p className="cat-d">{c.d}</p>
              </article>
            ))}
            <div className="cat cat-media">
              <div className="bevel-frame">
                <AiImage src="/section-1.webp" alt="Detail povrchu betonové dlažby PRESBETON Nova s jemným kamenivem" className="media-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Joint />

      <section className="section section-dark" id="proc">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow eyebrow-light">Proč my</p>
              <h2 className="sec-title sec-title-light">Od návrhu po poslední spáru stojíme u vás</h2>
              <p className="sec-intro sec-intro-light">
                Nejsme jen sklad palet. Nakreslíme plochu, spočítáme materiál,
                poradíme s podkladem i spárováním a pro projektanty připravíme
                podklady do projektu.
              </p>
            </div>
          </Reveal>

          <div className="proc-grid">
            <div className="proc-media">
              <div className="bevel-frame">
                <AiImage src="/section-2.webp" alt="Realizace betonového plotu a dlážděné plochy od PRESBETON Nova" className="media-img" />
              </div>
            </div>
            <ul className="proc-list">
              {duvera.map((d) => (
                <li className="proc-item" key={d.k}>
                  <span className="proc-k">{d.k}</span>
                  <span className="proc-d">{d.d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact">
            <p className="contact-lead">Zastavte se ve vzorkovně</p>
            <dl className="contact-dl">
              <div><dt>Adresa</dt><dd>Ukázková 123, Olomouc</dd></div>
              <div><dt>Telefon</dt><dd>—</dd></div>
              <div><dt>E-mail</dt><dd>—</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
