export const metadata = {
  title: "KLS ELEKTRO s.r.o. — Elektroinstalace České Budějovice",
  description:
    "Kompletní elektroinstalace pro bytové domy, průmyslové haly a obchodní objekty. Trafostanice, přípojky, venkovní osvětlení a nonstop servis. KLS ELEKTRO, České Budějovice.",
  openGraph: {
    title: "KLS ELEKTRO — Elektroinstalace České Budějovice",
    description:
      "Silnoproud, trafostanice, přípojky i servis 24/7. Přes 20 let realizací po celém Jihočeském kraji.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "NN",
    nazev: "Elektroinstalace budov",
    popis:
      "Kompletní rozvody silnoproudu v bytových domech, kancelářích a obchodech — od projektu přes rozvaděče až po revizní zprávu. Bytový dům předáme s revizí pro každou jednotku zvlášť.",
  },
  {
    kod: "VN",
    nazev: "Trafostanice a přípojky",
    popis:
      "Stavíme a osazujeme trafostanice, řešíme přípojky VN i NN včetně jednání s distributorem E.GD. Průmyslovou halu připojíme na síť do dohodnutého termínu.",
  },
  {
    kod: "VO",
    nazev: "Venkovní osvětlení",
    popis:
      "Osvětlení areálů, parkovišť a komunikací — stožáry, kabeláž v zemi, úsporná LED svítidla s regulací. Areál firmy EGE v Budějovicích svítí naší prací od roku 2015.",
  },
  {
    kod: "24",
    nazev: "Servis a hot-line",
    popis:
      "Výpadek proudu ve výrobě nepočká na ráno. Držíme servisní pohotovost s pevnou reakční dobou — zavoláte a víte, kdy technik dorazí.",
  },
];

const reference = [
  {
    rok: "2015–2016",
    stavba: "Bytový dům, Karlovy Vary",
    rozsah: "Elektroinstalace všech bytových jednotek, společné prostory, měření",
  },
  {
    rok: "2015",
    stavba: "Výrobní hala EGE, České Budějovice",
    rozsah: "Trafostanice, přípojky, kompletní elektroinstalace, venkovní osvětlení areálu",
  },
  {
    rok: "průběžně",
    stavba: "Obchodní domy a řetězce",
    rozsah: "Rozvody prodejních ploch, nouzové osvětlení, pravidelné revize",
  },
  {
    rok: "průběžně",
    stavba: "Objekty státní správy",
    rozsah: "Rekonstrukce rozvodů za provozu, rozvaděče, zabezpečení dodávek",
  },
];

export default function Page() {
  return (
    <main className="kls">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-scrim" />
        </div>

        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-kls">KLS</span>
            <span className="wordmark-bolt" aria-hidden="true">
              <svg viewBox="0 0 24 40" width="18" height="30" role="presentation" focusable="false">
                <path d="M15 0 2 23h8L7 40l15-25h-9L15 0Z" fill="currentColor" />
              </svg>
            </span>
            <span className="wordmark-elektro">ELEKTRO</span>
          </div>
          <a className="hero-phone" href="tel:+420387000000">
            <span className="hero-phone-label">Servisní hot-line</span>
            <span className="hero-phone-num">387 000 000</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="live-dot" aria-hidden="true" /> Elektromontáže · České Budějovice · od roku 1994
          </p>
          <h1 className="hero-title">
            Přivedeme proud <em>od trafostanice</em>
            <br />
            až k poslední zásuvce.
          </h1>
          <p className="hero-lead">
            Bytové domy, průmyslové haly, obchodní centra. Silnoproud, přípojky,
            venkovní osvětlení — a servis, který zvedá telefon i o půlnoci.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420387000000">
              Zavolat servis
            </a>
            <a className="btn btn-ghost" href="mailto:poptavka@klselektro.cz">
              Poslat poptávku e-mailem
            </a>
          </div>
        </div>

        {/* signature: schematic strip */}
        <div className="schematic" aria-hidden="true">
          <svg viewBox="0 0 1200 56" preserveAspectRatio="none" role="presentation" focusable="false">
            <path
              className="schematic-wire"
              d="M0 28 H240 l14 -14 h32 l14 14 H520 m0 0 h40 m8 0 h40 M608 28 H840 l12 12 h28 l12 -12 H1200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle className="schematic-node" cx="240" cy="28" r="4" fill="currentColor" />
            <circle className="schematic-node" cx="608" cy="28" r="4" fill="currentColor" />
            <circle className="schematic-node" cx="840" cy="28" r="4" fill="currentColor" />
          </svg>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Rozsah činnosti</p>
          <h2 id="sluzby-h" className="section-title">
            Od vysokého napětí po vypínač v předsíni
          </h2>
          <p className="section-lead">
            Zkratky u služeb nejsou dekorace — je to řeč rozvaděče. NN je nízké
            napětí, VN vysoké, VO veřejné osvětlení. Přesně tak značíme okruhy
            i na stavbě.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <div className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </div>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
            </article>
          ))}
        </div>

        <figure className="sluzby-figure">
          <img
            src="/section-1.webp"
            alt="Elektrikář KLS ELEKTRO zapojuje rozvaděč nízkého napětí"
            className="figure-img"
          />
          <figcaption className="figure-caption">
            Každý rozvaděč předáváme popsaný a s revizní zprávou — za deset let
            v něm najde cestu i cizí technik.
          </figcaption>
        </figure>
      </section>

      {/* ===== REFERENCE ===== */}
      <section className="refs" aria-labelledby="refs-h">
        <div className="section-head">
          <p className="section-eyebrow section-eyebrow--light">Reference</p>
          <h2 id="refs-h" className="section-title section-title--light">
            Stavby, které svítí naší prací
          </h2>
          <p className="section-lead section-lead--light">
            V roce 2004 jsme přesáhli obrat 100 milionů korun. Důležitější číslo
            je ale jiné: většina zákazníků se k nám vrací s další stavbou.
          </p>
        </div>

        <div className="refs-layout">
          <ul className="refs-list">
            {reference.map((r) => (
              <li className="ref" key={r.stavba}>
                <span className="ref-rok">{r.rok}</span>
                <div className="ref-text">
                  <h3 className="ref-stavba">{r.stavba}</h3>
                  <p className="ref-rozsah">{r.rozsah}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="refs-side">
            <img
              src="/section-2.webp"
              alt="Průmyslová hala v Českých Budějovicích s venkovním osvětlením od KLS ELEKTRO"
              className="figure-img refs-img"
            />
            <div className="refs-fakta">
              <div className="fakt">
                <span className="fakt-cislo">30+</span>
                <span className="fakt-popis">let na jihočeských stavbách</span>
              </div>
              <div className="fakt">
                <span className="fakt-cislo">24/7</span>
                <span className="fakt-popis">servisní pohotovost s hot-line</span>
              </div>
              <div className="fakt">
                <span className="fakt-cislo">ČB</span>
                <span className="fakt-popis">sídlo v Českých Budějovicích, dojezd po celém kraji</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
