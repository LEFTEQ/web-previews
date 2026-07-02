import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rámování Sýpka — Rámování obrazů v Brně, Merhautova 32",
  description:
    "Rámařská dílna v Brně. Rámy na míru pro obrazy, grafiky, fotografie i vyšívky. Paspartování, muzejní sklo, poradenství. Merhautova 32, Brno.",
  openGraph: {
    title: "Rámování Sýpka — rámařská dílna v Brně",
    description:
      "Rám na míru do týdne. Pasparty, antireflexní i muzejní sklo, opravy starých rámů. Merhautova 32, Brno.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    znak: "lišta",
    nazev: "Rám na míru",
    text: "Přes 400 vzorků lišt přímo v dílně — dřevo, dýha, kov, zlacený i patinovaný profil. Lištu přiložíme k vašemu obrazu a vyberete naživo, ne z katalogu.",
    detail: "od 350 Kč / bm",
  },
  {
    znak: "pasparta",
    nazev: "Paspartování",
    text: "Pasparta dá grafice, fotografii nebo diplomu vzduch. Řežeme šikmý řez v desítkách odstínů, včetně dvojitých a hlubokých paspart pro trojrozměrné předměty.",
    detail: "od 180 Kč",
  },
  {
    znak: "sklo",
    nazev: "Sklo a ochrana",
    text: "Běžné, antireflexní i muzejní sklo s UV filtrem. Poradíme, kdy se ochrana vyplatí — u akvarelu nad postelí i u rodinné fotografie na chodbě.",
    detail: "dle formátu",
  },
  {
    znak: "restaurování",
    nazev: "Opravy starých rámů",
    text: "Uvolněné rohy, oprýskané zlacení, prasklé sklo po stěhování. Starý rám často stojí za záchranu — posoudíme zdarma, než se rozhodnete.",
    detail: "posouzení zdarma",
  },
  {
    znak: "vyšívka",
    nazev: "Vyšívky, dresy, medaile",
    text: "Napínáme a rámujeme i to, co není papír: gobelíny, křtící košilky, podepsané dresy, sbírky medailí. Hluboký rám udrží tvar bez lepidla.",
    detail: "individuálně",
  },
  {
    znak: "závěs",
    nazev: "Zavěšení a poradenství",
    text: "Dodáme závěsný systém, poradíme výšku a rozmístění. Těžké zrcadlo nebo velký formát vám v Brně pomůžeme i pověsit.",
    detail: "po domluvě",
  },
];

const kroky = [
  {
    cislo: "1",
    nazev: "Přineste dílo",
    text: "Obraz, grafiku nebo vyšívku vezměte s sebou na Merhautovu 32. Bez objednání — přiložíme lišty a pasparty rovnou k dílu.",
  },
  {
    cislo: "2",
    nazev: "Vybereme spolu",
    text: "Řekneme vám na rovinu, co dílu sluší a co je zbytečně drahé. Cenu spočítáme na místě, než cokoli objednáte.",
  },
  {
    cislo: "3",
    nazev: "Do týdne hotovo",
    text: "Běžnou zakázku rámujeme do 7 dnů, na počkání domluvíme expresně. Zavoláme, jakmile je rám připravený.",
  },
];

export default function Page() {
  return (
    <main className="rs">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-frame" aria-hidden="true">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />
        </div>

        <div className="hero-inner">
          <div className="hero-top">
            <p className="wordmark">
              Rámování <strong>Sýpka</strong>
            </p>
            <p className="hero-adresa">
              Merhautova 32, Brno&nbsp;·&nbsp;
              <a href="tel:+420774135588">774 135 588</a>
            </p>
          </div>

          <h1 className="hero-titulek">
            <span className="radek radek-1">Obraz</span>
            <span className="radek radek-2">si zaslouží</span>
            <span className="radek radek-3">rám<span className="tecka">.</span></span>
          </h1>

          <div className="hero-spodek">
            <p className="hero-podtitulek">
              Rámařská dílna na Merhautově ulici v Brně. Rámy na míru,
              pasparty a muzejní sklo — pro olej po babičce i plakát
              z včerejšího koncertu. Běžnou zakázku máte do týdne.
            </p>
            <div className="hero-akce">
              <a className="tlacitko" href="tel:+420774135588">
                Zavolat do dílny
              </a>
              <a className="tlacitko tlacitko-tiche" href="mailto:info@ramovanisypka.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>

        <div className="hero-listy" aria-hidden="true">
          <span className="lista lista-1" />
          <span className="lista lista-2" />
          <span className="lista lista-3" />
          <span className="lista lista-4" />
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Co v dílně děláme</p>
          <h2 id="sluzby-nadpis">
            Od lišty po háček na zdi
          </h2>
          <p className="sekce-uvod">
            Každá zakázka projde jedněma rukama — od výběru profilu po
            zalepení zad. Ceny říkáme dopředu a naceníme na místě.
          </p>
        </div>

        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.nazev} className="sluzba">
              <p className="sluzba-znak">{s.znak}</p>
              <h3>{s.nazev}</h3>
              <p className="sluzba-text">{s.text}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== JAK TO PROBÍHÁ / DŮVĚRA ===== */}
      <section className="prubeh" aria-labelledby="prubeh-nadpis">
        <div className="prubeh-inner">
          <div className="sekce-hlava sekce-hlava-svetla">
            <p className="eyebrow">Jak to probíhá</p>
            <h2 id="prubeh-nadpis">Tři návštěvy? Stačí jedna.</h2>
            <p className="sekce-uvod">
              Většinu vyřešíme, když se stavíte osobně. Dílnu najdete pět
              minut od zastávky Dětská nemocnice, parkování před domem.
            </p>
          </div>

          <ol className="kroky">
            {kroky.map((k) => (
              <li key={k.cislo} className="krok">
                <span className="krok-cislo" aria-hidden="true">
                  {k.cislo}
                </span>
                <h3>{k.nazev}</h3>
                <p>{k.text}</p>
              </li>
            ))}
          </ol>

          <div className="duvera">
            <blockquote className="citace">
              <p>
                „Nesla jsem sem mapu Brna z roku 1890 s hrůzou, že mi ji
                někdo zničí. Vrátila se v rámu s muzejním sklem a vypadá
                líp než v aukčním katalogu.“
              </p>
              <footer className="citace-autor">— zákaznice z Černých Polí</footer>
            </blockquote>
            <dl className="fakta">
              <div className="fakt">
                <dt>Vzorků lišt v dílně</dt>
                <dd>400+</dd>
              </div>
              <div className="fakt">
                <dt>Běžná zakázka hotová</dt>
                <dd>do 7 dnů</dd>
              </div>
              <div className="fakt">
                <dt>Rámujeme v Brně</dt>
                <dd>od r. 2005</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
