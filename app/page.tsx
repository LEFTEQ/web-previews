import type { CSSProperties } from "react";

export default function Page() {
  const znacky = [
    "Samsung",
    "LG",
    "Panasonic",
    "Sony",
    "Philips",
    "Thomson",
    "Sencor",
    "Gogen",
  ];

  const opravy = [
    {
      cislo: "01",
      nazev: "Diagnostika závady",
      cena: "200–600 Kč",
      popis:
        "Zjistíme, co přesně televizoru je — od 200 do 600 Kč podle typu vady a přístroje. Cena diagnostiky se odečítá z opravy.",
    },
    {
      cislo: "02",
      nazev: "Oprava panelu a podsvícení",
      cena: "dle nacenění",
      popis:
        "OLED, LED, LCD i staré plazmy. Vadné podsvícení, prasklé napájení, mrtvý obraz i zvuk bez obrazu. Naceníme dopředu, pak teprve opravujeme.",
    },
    {
      cislo: "03",
      nazev: "Svoz a odvoz u vás",
      cena: "Ostrava a okolí",
      popis:
        "Velkou obrazovku nemusíte nikam tahat. Přijedeme, naložíme, opravíme a přivezeme zpět. Drobné opravy zvládneme rovnou u vás v bytě.",
    },
    {
      cislo: "04",
      nazev: "Instalace a naladění",
      cena: "po dohodě",
      popis:
        "Nová televize? Pověsíme na stěnu, zapojíme, naladíme programy a ukážeme ovládání. Poradíme i s montáží držáku.",
    },
  ];

  const oblasti = [
    {
      technik: "Petr Charvát",
      tel: "605 935 265",
      obce: [
        "Ostrava",
        "Krásné Pole",
        "Vřesina",
        "Hlučín",
        "Kravaře",
        "Dolní Benešov",
        "Hrabyně",
        "Hať",
        "Pustá Polom",
        "Kyjovice",
        "Bílovec",
        "Stará Ves n. O.",
      ],
    },
    {
      technik: "Jiří Charvát",
      tel: "739 823 410",
      obce: [
        "Ostrava",
        "Havířov",
        "Karviná",
        "Orlová",
        "Šenov",
        "Frýdek-Místek",
        "Krmelín",
        "Brušperk",
        "Paskov",
        "Mošnov",
        "Frenštát p. R.",
        "Třinec",
      ],
    },
  ];

  return (
    <main className="eo">
      <header className="eo-top">
        <a className="eo-mark" href="#" aria-label="Elektro Opravy Charvát, Ostrava">
          <span className="eo-mark__scan" aria-hidden="true" />
          <span className="eo-mark__name">
            CHARVÁT<span className="eo-mark__thin">servis</span>
          </span>
        </a>
        <a className="eo-callchip" href="tel:+420605935265">
          <span className="eo-callchip__dot" aria-hidden="true" />
          Zavolat 605 935 265
        </a>
      </header>

      <section className="eo-hero">
        <div className="eo-hero__frame">
          <img
            src="/hero.webp"
            alt="Rozebraná televizní obrazovka na servisním pracovišti v Ostravě"
            className="eo-hero__img"
          />
          <div className="eo-hero__grid" aria-hidden="true" />
          <span className="eo-hero__badge">Ostrava · od roku 1998</span>
        </div>

        <div className="eo-hero__text">
          <p className="eo-eyebrow">Servis televizorů · OLED · LED · LCD · plazma</p>
          <h1 className="eo-hero__title">
            Vaše televize <em>ožije</em>.<br />
            My víme, kudy do ní.
          </h1>
          <p className="eo-hero__lead">
            Bratři Charvátovi opravují televizory po celé Ostravě a Moravskoslezském
            kraji. Přijedeme, naceníme dopředu a spravíme — často ještě týž den.
            Voláte i o svátcích, {""}
            <strong>od 8 do 22 hodin</strong>.
          </p>
          <div className="eo-hero__cta">
            <a className="eo-btn eo-btn--primary" href="tel:+420605935265">
              Zavolat Petrovi
            </a>
            <a className="eo-btn eo-btn--ghost" href="tel:+420739823410">
              Zavolat Jiřímu
            </a>
          </div>
          <p className="eo-hero__note">Sběrna: Mírová 166/23, Ostrava-Vítkovice — za nemocnicí</p>
        </div>
      </section>

      <div className="eo-ticker" aria-hidden="true">
        <div className="eo-ticker__track">
          {[...znacky, ...znacky].map((z, i) => (
            <span key={i} className="eo-ticker__item">
              {z}
            </span>
          ))}
        </div>
      </div>

      <section className="eo-sec" aria-labelledby="sluzby-nadpis">
        <div className="eo-sec__head">
          <p className="eo-eyebrow">Jak to u nás chodí</p>
          <h2 id="sluzby-nadpis" className="eo-sec__title">
            Od diagnostiky po naladění
          </h2>
          <p className="eo-sec__sub">
            Žádné odhady po telefonu naslepo. Nejdřív zjistíme závadu, pak řekneme
            cenu — a teprve když kývnete, sáhneme dovnitř.
          </p>
        </div>

        <div className="eo-media">
          <img
            src="/section-1.webp"
            alt="Technik měří základní desku televizoru multimetrem"
            className="eo-media__img"
          />
        </div>

        <ol className="eo-steps">
          {opravy.map((o) => (
            <li key={o.cislo} className="eo-step">
              <span className="eo-step__num">{o.cislo}</span>
              <div className="eo-step__body">
                <div className="eo-step__row">
                  <h3 className="eo-step__name">{o.nazev}</h3>
                  <span className="eo-step__price">{o.cena}</span>
                </div>
                <p className="eo-step__desc">{o.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="eo-sec eo-sec--trust" aria-labelledby="onas-nadpis">
        <div className="eo-sec__head">
          <p className="eo-eyebrow">Kdo přijede</p>
          <h2 id="onas-nadpis" className="eo-sec__title">
            Dva bratři, jeden ponk a spousta nářadí
          </h2>
          <p className="eo-sec__sub">
            Petr a Jiří Charvátovi. Každý má svoji polovinu kraje — najděte svoje
            město a volejte přímo tomu, kdo k vám dojede.
          </p>
        </div>

        <div className="eo-trust">
          <div className="eo-media eo-media--tall">
            <img
              src="/section-2.webp"
              alt="Servisní vůz a nářadí připravené na výjezd v Ostravě"
              className="eo-media__img"
            />
          </div>

          <div className="eo-cards">
            {oblasti.map((o) => (
              <article key={o.technik} className="eo-card">
                <header className="eo-card__head">
                  <h3 className="eo-card__name">{o.technik}</h3>
                  <a
                    className="eo-card__tel"
                    href={"tel:+420" + o.tel.replace(/\s/g, "")}
                  >
                    {o.tel}
                  </a>
                </header>
                <p className="eo-card__label">Vyjíždí do:</p>
                <ul className="eo-card__obce">
                  {o.obce.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <p className="eo-trust__note">
          Vaše město v seznamu není? Nevadí — zavolejte, domluvíme se. Jezdíme
          i mimo pracovní dobu a o svátcích, {""}
          <strong>nonstop od 8 do 22 hod</strong>.
        </p>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// typová vata pro případné inline styly (nevyužito, ale drží import čistý)
const _s: CSSProperties = {};
void _s;
