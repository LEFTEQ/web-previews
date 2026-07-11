import type { CSSProperties } from "react";

const pecivo = [
  {
    cislo: "04:30",
    nazev: "Pane di Altamura",
    popis: "Kvasový bochník z tvrdozrnné pšenice semola. Tmavá kůrka, žlutá střída, drží čerstvost tři dny.",
    detail: "tvrdozrnná semola · kvásek · mořská sůl",
  },
  {
    cislo: "05:15",
    nazev: "Cornetto",
    popis: "Italská verze croissantu — sladší, měkčí, poctivě máslová. Peče se do zlatova každé ráno.",
    detail: "listové těsto · máslo · citronová kůra",
  },
  {
    cislo: "06:00",
    nazev: "Focaccia Genovese",
    popis: "Nízká, křupavá, s olivovým olejem a hrubozrnnou solí. Prohlubně po prstech pekaře jsou tu schválně.",
    detail: "extra panenský olej · rozmarýn · sůl",
  },
  {
    cislo: "06:45",
    nazev: "Ciabatta",
    popis: "Vysoká hydratace, otevřená střída plná velkých ok. Ideální na parmskou šunku nebo namočení do oleje.",
    detail: "biga · dlouhé zrání · pšeničná mouka",
  },
]

const dorty = [
  { nazev: "Tiramisù dort", popis: "Mascarpone, savoiardi napité espresem, kakao.", cena: "úsek za 89 Kč" },
  { nazev: "Sfogliatella", popis: "Chřupavé mušličky z listového těsta plněné ricottou.", cena: "49 Kč / ks" },
  { nazev: "Crostata", popis: "Křehký koláč s meruňkovou marmeládou z jižní Itálie.", cena: "úsek za 65 Kč" },
]

export default function Page() {
  return (
    <main className="ti">
      <header className="ti-top">
        <a className="ti-mark" href="#" aria-label="the italians — pekařství Praha">
          <span className="ti-mark-forno">forno</span>
          <span className="ti-mark-name">the&nbsp;italians</span>
        </a>
        <nav className="ti-nav" aria-label="Hlavní">
          <a href="#pekarna">Pekárna</a>
          <a href="#dorty">Dorty</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="ti-tel" href="tel:+420245004515">Zavolat do pekárny</a>
      </header>

      <section className="ti-hero">
        <div className="ti-hero-copy">
          <p className="ti-eyebrow">Řemeslná italská pekárna · Praha</p>
          <h1 className="ti-h1">
            Chléb se tu peče,<br />
            <em>když ještě spíte</em>
          </h1>
          <p className="ti-lede">
            Každé ráno vytahujeme z pece Pane di Altamura, cornetti a focacciu
            podle receptů z jihu Itálie. Žádné mražené polotovary — jen mouka,
            voda, kvásek a čas.
          </p>
          <div className="ti-hero-cta">
            <a className="ti-btn" href="tel:+420245004515">Zavolat do pekárny</a>
            <a className="ti-btn ti-btn-ghost" href="#pekarna">Co dnes pečeme</a>
          </div>
          <p className="ti-hero-note">Otevřeno denně od 7:00 · osobní odběr i rozvoz po Praze do 24 hodin</p>
        </div>
        <figure className="ti-hero-fig">
          <img src="/hero.webp" alt="Čerstvě upečený italský chléb s tmavou křupavou kůrkou" loading="eager" />
          <figcaption>Bochník z ranní pece · foto z naší pekárny</figcaption>
        </figure>
      </section>

      <section className="ti-section ti-pekarna" id="pekarna">
        <div className="ti-shead">
          <p className="ti-eyebrow ti-eyebrow-dark">Rozpis pece</p>
          <h2 className="ti-h2">Čas u nás neměří hodiny, ale co je zrovna teplé</h2>
          <p className="ti-sub">
            Nepečeme všechno najednou. Sledujeme rozpis — u každého pečiva
            čas, kdy míří na pult. Přijďte za vůní.
          </p>
        </div>
        <ol className="ti-list">
          {pecivo.map((p) => (
            <li className="ti-item" key={p.nazev}>
              <span className="ti-time" aria-hidden="true">{p.cislo}</span>
              <div className="ti-item-body">
                <h3 className="ti-item-name">{p.nazev}</h3>
                <p className="ti-item-desc">{p.popis}</p>
                <p className="ti-item-detail">{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ti-section ti-onas" id="onas">
        <div className="ti-onas-grid">
          <figure className="ti-onas-fig">
            <img src="/section-1.webp" alt="Pekař připravuje těsto na dřevěném pracovním stole" loading="lazy" />
          </figure>
          <div className="ti-onas-copy">
            <p className="ti-eyebrow ti-eyebrow-dark">La mia famiglia</p>
            <h2 className="ti-h2">Přinášíme Itálii do vašich všedních rán</h2>
            <p className="ti-sub">
              Vedle pekárny máme obchod s pečlivě vybranými produkty od malých
              italských výrobců — sýry, salámy, olivové oleje i vína. Ale srdcem
              zůstává pec: řemeslné pečivo a sladkosti připravujeme každý den
              čerstvě v naší kuchyni v Praze.
            </p>
            <ul className="ti-fakta">
              <li><strong>Denně čerstvé</strong><span>Peče se ráno, prodává týž den</span></li>
              <li><strong>Rozvoz po Praze</strong><span>Doručení do 24 hodin, nad 3000 Kč zdarma</span></li>
              <li><strong>Bez polotovarů</strong><span>Poctivý kvásek a dlouhé zrání</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ti-section ti-dorty" id="dorty">
        <div className="ti-dorty-inner">
          <figure className="ti-dorty-fig">
            <img src="/section-2.webp" alt="Vitrína italských dezertů a dortů" loading="lazy" />
          </figure>
          <div className="ti-dorty-copy">
            <p className="ti-eyebrow ti-eyebrow-dark">Dolci · vitrína</p>
            <h2 className="ti-h2">Sladké, jak je dělají v Neapoli</h2>
            <ul className="ti-dorty-list">
              {dorty.map((d) => (
                <li key={d.nazev}>
                  <div className="ti-dorty-head">
                    <span className="ti-dorty-name">{d.nazev}</span>
                    <span className="ti-dorty-cena">{d.cena}</span>
                  </div>
                  <p className="ti-dorty-desc">{d.popis}</p>
                </li>
              ))}
            </ul>
            <p className="ti-hero-note">Celý dort na objednávku — zavolejte den předem.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

void (0 as unknown as CSSProperties)
