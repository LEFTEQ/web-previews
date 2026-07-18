const catalog = [
  {
    k: "Kremace s obřadem",
    d: "Rozloučení v obřadní síni krematoria, s hudbou, řečníkem i smutečními verši dle vašeho přání. Vše připravíme na jeden pietní čas.",
  },
  {
    k: "Pohřeb do země",
    d: "Uložení do hrobu na kterémkoli brněnském hřbitově. Zajistíme rakev, výkop, obřad u hrobu i následnou péči o hrobové místo.",
  },
  {
    k: "Kremace bez obřadu",
    d: "Důstojné zpopelnění bez smutečního shromáždění, pro rodiny, které si přejí rozloučení v soukromí. Urnu předáme osobně.",
  },
  {
    k: "Rozptyl a vsyp",
    d: "Uložení popela na rozptylové a vsypové loučce, na místě zeleně a klidu. Přítomnost blízkých je vždy vítána.",
  },
  {
    k: "Obřadní síně",
    d: "Velká i malá síň krematoria pod terasovou střechou. Rezervaci termínu obřadu vyřídíme za vás, včetně varhaníka a květinové výzdoby.",
  },
  {
    k: "Kolumbárium",
    d: "Trvalé uložení urny ve schránce kolumbária v areálu krematoria. Nabízíme volná místa i přenechání stávajících schránek.",
  },
];

const facts = [
  { n: "1926", l: "Rok, kdy Wiesnerovo krematorium otevřelo své brány" },
  { n: "Městská a.s.", l: "Akciová společnost města Brna, součást koncernu SMB" },
  { n: "NON‑STOP", l: "Svoz zesnulých po celém Brně, ve dne i v noci" },
];

function Cornice({ animated = false }: { animated?: boolean }) {
  return (
    <svg
      className={animated ? "cornice cornice--draw" : "cornice"}
      viewBox="0 0 1200 44"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="cornice__line"
        pathLength={1}
        vectorEffect="non-scaling-stroke"
        d="M0,34 H480 V26 H520 V18 H560 V10 H640 V18 H680 V26 H720 V34 H1200"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="band band--hero">
        <div className="wrap">
          <div className="masthead">
            <span className="wordmark">
              Pohřební služby
              <b>města Brna</b>
            </span>
            <nav className="masthead__nav" aria-label="Rychlé odkazy">
              <a href="#katalog">Služby</a>
              <a href="#onas">O nás</a>
              <a href="#svoz" className="masthead__urgent">Svoz zesnulých</a>
            </nav>
          </div>
          <Cornice animated />

          <div className="hero">
            <p className="eyebrow">Městská pohřební a hřbitovní služba · Brno</p>
            <h1 className="hero__title">
              Doprovázíme brněnské rodiny při posledním rozloučení
            </h1>
            <p className="hero__lede">
              Pod terasovou střechou Wiesnerova krematoria zařídíme vše k obřadu,
              kremaci i uložení — na jednom místě, klidně a beze spěchu. Řekněte
              nám, co potřebujete, o zbytek se postaráme.
            </p>

            <div className="svoz" id="svoz">
              <span className="svoz__flame" aria-hidden="true" />
              <div className="svoz__body">
                <p className="svoz__label">Svoz zesnulých — NON‑STOP</p>
                <a className="svoz__num" href="tel:+420777111222">777&nbsp;111&nbsp;222</a>
                <p className="svoz__note">
                  Zavolejte kdykoli, ve dne i v noci. Přijedeme kamkoli v Brně.
                </p>
              </div>
              <a className="btn btn--primary" href="tel:+420777111222">Zavolat</a>
            </div>

            <div className="hero__actions">
              <a className="btn btn--ghost" href="#katalog">Online objednávka</a>
              <a className="btn btn--ghost" href="#katalog">Termíny obřadů</a>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--catalog" id="katalog">
        <Cornice />
        <div className="wrap">
          <header className="bandhead">
            <p className="eyebrow eyebrow--dark">Co pro vás zařídíme</p>
            <h2 className="bandhead__title">Obřady, kremace a uložení</h2>
            <p className="bandhead__lede">
              Každou službu vedeme od prvního telefonátu až po předání urny nebo
              péči o hrob. Poradíme s výběrem i s úřady.
            </p>
          </header>

          <ul className="niches">
            {catalog.map((it) => (
              <li className="niche" key={it.k}>
                <h3 className="niche__title">{it.k}</h3>
                <p className="niche__text">{it.d}</p>
              </li>
            ))}
          </ul>

          <p className="catalog-row">
            <span className="catalog-row__label">Katalogy</span>
            Rakve a čalounění · Smuteční vazba · Urny · Smuteční verše ·
            Smuteční hudba
          </p>
        </div>
      </section>

      <section className="band band--about" id="onas">
        <Cornice />
        <div className="wrap">
          <header className="bandhead">
            <p className="eyebrow">Městská společnost od roku 1926</p>
            <h2 className="bandhead__title">Krematorium, které navrhl Arnošt Wiesner</h2>
          </header>

          <div className="about">
            <div className="about__text">
              <p>
                Brněnské krematorium z roku 1926 patří k vrcholům meziválečné
                architektury — jeho stupňovitá, k nebi terasovaná silueta dala
                tvar i našemu znaku. Pod ní pracujeme dodnes.
              </p>
              <p>
                Jsme akciová společnost města Brna a součást koncernu Statutárního
                města Brna. Nejsme obchodní řetězec — jsme městská služba, která
                tu je pro pozůstalé bez ohledu na denní dobu i rozpočet rodiny.
              </p>
              <p>
                Provozujeme obřadní síně, krematorium a kolumbárium, pečujeme o
                brněnské hřbitovy a nabízíme i 3D virtuální prohlídku areálu.
                Vše potřebné vyřídíte s jedním člověkem na jednom místě.
              </p>
            </div>

            <ul className="facts">
              {facts.map((f) => (
                <li className="fact" key={f.n}>
                  <span className="fact__num">{f.n}</span>
                  <span className="fact__label">{f.l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
