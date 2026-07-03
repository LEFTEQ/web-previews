export default function Page() {
  const serioveProdukty = [
    { nazev: "Ortézy a bandáže kolene, kotníku, zápěstí", pozn: "sériové i sportovní řady" },
    { nazev: "Kýlní pásy a kýlní prádlo Pavis", pozn: "podpora léčby tříselné kýly" },
    { nazev: "Bederní a lumbosakrální pásy", pozn: "s tvarovatelným panelem" },
    { nazev: "Sportovní ortézy REVENGE", pozn: "pro běh, míčové sporty i posilovnu" },
  ];

  const zakazkoveProdukty = [
    { nazev: "Protézy končetin na míru", pozn: "od sádrového odlitku po finální úpravu" },
    { nazev: "Ortézy na zakázku a peroneální dlahy", pozn: "termoplast tvarovaný přesně na vaši končetinu" },
    { nazev: "Ortopedické vložky a individuální obuv", pozn: "podle otisku a vyšetření chůze" },
    { nazev: "Kyčelní ortézy a dynamické klouby", pozn: "včetně servisu a seřízení" },
  ];

  const kroky = [
    {
      cislo: "1",
      titul: "Přijdete s poukazem, nebo bez něj",
      text: "Sériové pomůcky vydáváme na poukaz od lékaře i bez něj. U zakázkové výroby vás objednáme k protetikovi — obvykle do několika dnů, ne týdnů.",
    },
    {
      cislo: "2",
      titul: "Změříme, vyzkoušíte, upravíme",
      text: "Ortézu nebo vložky si vyzkoušíte přímo na místě. Zakázkové pomůcky tvarujeme podle odlitku či otisku a při zkoušce doladíme každý detail.",
    },
    {
      cislo: "3",
      titul: "Odcházíte s pomůckou, která sedí",
      text: "Vysvětlíme nasazování i údržbu. Když pomůcka časem přestane sedět, přijďte — seřídíme ji nebo upravíme. Jsme tu i po výdeji.",
    },
  ];

  return (
    <main className="gi">
      {/* ========== HERO ========== */}
      <header className="gi-hero">
        <div className="gi-topbar">
          <span className="gi-wordmark" aria-label="Greif-Inex">
            GREIF<span className="gi-wordmark-dash" aria-hidden="true"></span>INEX
          </span>
          <a className="gi-topbar-tel" href="tel:+420585233164">
            585 233 164
          </a>
        </div>

        <div className="gi-hero-inner">
          <p className="gi-hero-eyebrow">
            Protetika a výdejna zdravotnických potřeb · Akademická 843/8, Olomouc
          </p>
          <h1 className="gi-hero-title">
            <span className="gi-hero-line gi-hero-line-1">Pomůcka,</span>
            <span className="gi-hero-line gi-hero-line-2">
              která <em>drží</em>
            </span>
            <span className="gi-hero-line gi-hero-line-3">tam, kde má.</span>
          </h1>
          <p className="gi-hero-sub">
            Ortézy, protézy a ortopedické vložky — sériové od ověřených evropských
            výrobců i vyrobené na míru přímo u nás v Olomouci. Změříme, vyzkoušíme,
            upravíme, dokud nesedí.
          </p>
          <div className="gi-hero-cta">
            <a className="gi-btn gi-btn-solid" href="tel:+420585233164">
              Zavolat protetiku
            </a>
            <a className="gi-btn gi-btn-line" href="mailto:greifinex@greifinex.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: „popruh" ortézy — pás se stehy, který podpírá hero zespodu */}
        <div className="gi-strap" aria-hidden="true">
          <div className="gi-strap-band">
            <span className="gi-strap-stitch"></span>
            <span className="gi-strap-text">
              ORTÉZY · PROTÉZY · VLOŽKY · KÝLNÍ PÁSY · INDIVIDUÁLNÍ OBUV · ORTÉZY ·
              PROTÉZY · VLOŽKY · KÝLNÍ PÁSY · INDIVIDUÁLNÍ OBUV ·
            </span>
            <span className="gi-strap-stitch gi-strap-stitch-bottom"></span>
          </div>
          <div className="gi-strap-buckle"></div>
        </div>
      </header>

      {/* ========== SEKCE 1: NABÍDKA ========== */}
      <section className="gi-section gi-nabidka" aria-labelledby="nabidka-h">
        <div className="gi-section-head">
          <p className="gi-eyebrow">Co u nás pořídíte</p>
          <h2 id="nabidka-h" className="gi-h2">
            Ze skladu, nebo přesně na vaše tělo
          </h2>
          <p className="gi-lede">
            Přes 158 sériových pomůcek od výrobců z EU máme skladem k okamžitému
            výdeji. Co sériově nesedí, vyrobí naše protetická dílna na míru.
          </p>
        </div>

        <div className="gi-cols">
          <article className="gi-col-card">
            <p className="gi-col-tag gi-col-tag-serie">Skladem — odnesete si hned</p>
            <h3 className="gi-h3">Sériové pomůcky</h3>
            <ul className="gi-list">
              {serioveProdukty.map((p) => (
                <li key={p.nazev}>
                  <strong>{p.nazev}</strong>
                  <span>{p.pozn}</span>
                </li>
              ))}
            </ul>
            <p className="gi-col-note">
              Většinu pomůcek vydáváme na poukaz od lékaře — doplatek řešíme na
              místě, se zdravotními pojišťovnami máme smlouvy.
            </p>
          </article>

          <article className="gi-col-card gi-col-card-mira">
            <p className="gi-col-tag gi-col-tag-mira">Z naší dílny — vyrobené pro vás</p>
            <h3 className="gi-h3">Zakázková výroba</h3>
            <ul className="gi-list">
              {zakazkoveProdukty.map((p) => (
                <li key={p.nazev}>
                  <strong>{p.nazev}</strong>
                  <span>{p.pozn}</span>
                </li>
              ))}
            </ul>
            <p className="gi-col-note">
              Pracujeme s termoplasty, karbonem a komponenty, které zároveň sami
              distribuujeme protetikům po celé ČR — víme přesně, co do čeho patří.
            </p>
          </article>
        </div>
      </section>

      {/* ========== SEKCE 2: JAK TO PROBÍHÁ + DŮVĚRA ========== */}
      <section className="gi-section gi-postup" aria-labelledby="postup-h">
        <div className="gi-section-head">
          <p className="gi-eyebrow gi-eyebrow-light">Jak probíhá návštěva</p>
          <h2 id="postup-h" className="gi-h2 gi-h2-light">
            Tři kroky mezi dveřmi a úlevou
          </h2>
        </div>

        <ol className="gi-kroky">
          {kroky.map((k) => (
            <li key={k.cislo} className="gi-krok">
              <span className="gi-krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <h3 className="gi-krok-titul">{k.titul}</h3>
              <p className="gi-krok-text">{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="gi-duvera">
          <blockquote className="gi-citace">
            <p>
              „Vložky do bot mi dělají už třetí rok. Pokaždé znovu změří, pokaždé
              upraví. Kolena po směně konečně nebolí.“
            </p>
            <footer>— pan Novotný, řidič MHD, Olomouc</footer>
          </blockquote>
          <dl className="gi-fakta">
            <div className="gi-fakt">
              <dt>Kde nás najdete</dt>
              <dd>Akademická 843/8, Olomouc — u fakultní nemocnice, 5 minut od tramvaje</dd>
            </div>
            <div className="gi-fakt">
              <dt>Komu dodáváme</dt>
              <dd>Pacientům, ortopedům a protetickým dílnám v celé ČR — komponenty i hotové pomůcky</dd>
            </div>
            <div className="gi-fakt">
              <dt>Odkud bereme</dt>
              <dd>Renomovaní výrobci z EU — mj. italský Pavis, jehož kýlní prádlo a sportovní ortézy zastupujeme</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
