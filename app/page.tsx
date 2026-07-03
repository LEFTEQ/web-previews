// Řezníček & Co. — advokátní kancelář, České Budějovice
// Náhledový design: hero + 2 obsahové sekce. Bez footeru (dodá studio).

const sluzby = [
  {
    par: "§ 1",
    nazev: "Obchodní právo a korporace",
    popis:
      "Zakládání společností, valné hromady, převody podílů i smlouvy s obchodními partnery. Právní zázemí pro jihočeské firmy od živnostníka po holding.",
  },
  {
    par: "§ 2",
    nazev: "Nemovitosti a realitní právo",
    popis:
      "Kupní smlouvy, advokátní úschova kupní ceny, návrhy na vklad do katastru. Prodáváte byt v Budějovicích nebo chalupu na Šumavě? Ohlídáme celý převod.",
  },
  {
    par: "§ 3",
    nazev: "Rodinné a dědické právo",
    popis:
      "Rozvody, péče o děti, vypořádání majetku i dědická řízení. Citlivé věci řešíme věcně a diskrétně — bez zbytečného protahování.",
  },
  {
    par: "§ 4",
    nazev: "Sporná agenda a arbitráž",
    popis:
      "Zastupujeme před soudy i rozhodčími orgány. JUDr. Řezníček působí jako místopředseda Mezinárodního rozhodčího soudu v Praze (PRIAC).",
  },
  {
    par: "§ 5",
    nazev: "Smlouvy a závazkové právo",
    popis:
      "Sepíšeme a zrevidujeme smlouvy tak, aby vás chránily dřív, než spor vůbec vznikne. Srozumitelně, bez klauzulí, kterým nerozumíte.",
  },
  {
    par: "§ 6",
    nazev: "GDPR, compliance a zdravotnické právo",
    popis:
      "Ochrana osobních údajů, interní směrnice a specializovaná agenda pro lékaře, ordinace a zdravotnická zařízení v regionu.",
  },
];

const postup = [
  {
    krok: "Vyslechneme",
    text: "Nasloucháme vašemu příběhu bez předsudků. První konzultace slouží k tomu, abychom pochopili, co skutečně potřebujete — ne k účtování hodin.",
  },
  {
    krok: "Zmapujeme",
    text: "Analyzujeme každý detail a mapujeme právní terén s chirurgickou přesností. Řekneme vám otevřeně, jaké máte šance a co bude stát čas i peníze.",
  },
  {
    krok: "Dotáhneme",
    text: "Připravíme argumentaci, důkazy i taktiku — a věc dotáhneme do konce. Naším cílem není jen vyhrát, ale dopřát klientovi spravedlnost.",
  },
];

export default function Page() {
  return (
    <main className="rz">
      {/* ============ HERO ============ */}
      <header className="rz-hero">
        <div className="rz-hero-top">
          <div className="rz-wordmark" aria-label="Řezníček a spol., advokátní kancelář">
            <span className="rz-wordmark-name">Řezníček</span>
            <span className="rz-wordmark-amp">&amp;Co.</span>
            <span className="rz-wordmark-sub">advokátní kancelář · České Budějovice</span>
          </div>
          <a className="rz-hero-tel" href="tel:+420386323247">
            +420 386 323 247
          </a>
        </div>

        <div className="rz-hero-body">
          <p className="rz-hero-eyebrow">Krajinská 281/44 — sto metrů od náměstí Přemysla Otakara II.</p>
          <h1 className="rz-hero-title">
            <span className="rz-line rz-line-1">Právo je psané</span>
            <span className="rz-line rz-line-2">
              <em>slovo.</em>
            </span>
            <span className="rz-line rz-line-3">My ho umíme číst</span>
            <span className="rz-line rz-line-4">
              ve váš <em>prospěch.</em>
            </span>
          </h1>
          <p className="rz-hero-lead">
            Komplexní právní podpora pro jednotlivce, firmy i zahraniční klienty. Chráníme vaše
            zájmy věcně, srozumitelně a do konce — v pozadí vašeho úspěchu.
          </p>
          <div className="rz-hero-actions">
            <a className="rz-btn rz-btn-solid" href="tel:+420386323247">
              Domluvit konzultaci
            </a>
            <a className="rz-btn rz-btn-ghost" href="#sluzby">
              Čím se zabýváme
            </a>
          </div>
        </div>

        {/* Signature: obří paragraf jako vodoznak úřední listiny */}
        <div className="rz-hero-par" aria-hidden="true">
          §
        </div>

        <div className="rz-hero-margin" aria-hidden="true">
          <span>spis č. 281/44</span>
          <span>ČB · od r. 2004</span>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="rz-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="rz-section-head">
          <p className="rz-eyebrow">Co pro vás vyřešíme</p>
          <h2 id="sluzby-h" className="rz-h2">
            Šest oblastí, ve kterých se pohybujeme <em>denně.</em>
          </h2>
          <p className="rz-section-lead">
            Paragrafy nejsou nadpisy zákona — jsou to kapitoly vašeho případu. Vyberte tu svou.
          </p>
        </div>

        <ul className="rz-grid" role="list">
          {sluzby.map((s) => (
            <li className="rz-card" key={s.par}>
              <span className="rz-card-par" aria-hidden="true">
                {s.par}
              </span>
              <h3 className="rz-card-title">{s.nazev}</h3>
              <p className="rz-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ JAK PRACUJEME / DŮVĚRA ============ */}
      <section className="rz-postup" aria-labelledby="postup-h">
        <div className="rz-postup-inner">
          <div className="rz-postup-head">
            <p className="rz-eyebrow rz-eyebrow-light">Jak vedeme váš případ</p>
            <h2 id="postup-h" className="rz-h2 rz-h2-light">
              Tři sloky každého <em>spisu.</em>
            </h2>
          </div>

          <ol className="rz-kroky" role="list">
            {postup.map((p, i) => (
              <li className="rz-krok" key={p.krok}>
                <span className="rz-krok-num" aria-hidden="true">
                  odst. {i + 1}
                </span>
                <h3 className="rz-krok-title">{p.krok}</h3>
                <p className="rz-krok-text">{p.text}</p>
              </li>
            ))}
          </ol>

          <figure className="rz-cit">
            <blockquote>
              <p>
                „Potřebovali jsme rychle vyřešit převod firmy mezi společníky. Místo právničiny
                jsme dostali jasný plán a za tři týdny bylo hotovo. Od té doby k nim nosíme
                všechny smlouvy.“
              </p>
            </blockquote>
            <figcaption>— jednatel strojírenské firmy, Českobudějovicko</figcaption>
          </figure>

          <div className="rz-fakta" role="list">
            <div className="rz-fakt" role="listitem">
              <span className="rz-fakt-cislo">20 let</span>
              <span className="rz-fakt-label">praxe v jihočeském regionu</span>
            </div>
            <div className="rz-fakt" role="listitem">
              <span className="rz-fakt-cislo">PRIAC</span>
              <span className="rz-fakt-label">místopředsednictví v Mezinárodním rozhodčím soudu v Praze</span>
            </div>
            <div className="rz-fakt" role="listitem">
              <span className="rz-fakt-cislo">CZ / EN / DE</span>
              <span className="rz-fakt-label">zastupujeme i zahraniční klienty</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
