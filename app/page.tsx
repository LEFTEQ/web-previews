export const metadata = {
  title: "Autodoprava Hlavatý Liberec — kontejnery, fekální vozy, zemní práce",
  description:
    "Autodoprava Hlavatý, Liberec. Od roku 1992: přistavení kontejnerů, odvoz odpadu, vývoz jímek a septiků, čištění potrubí, zemní práce Bobcat a JCB, hydraulická ruka, plošina. Dispečink 602 411 126.",
  openGraph: {
    title: "Autodoprava Hlavatý Liberec",
    description:
      "Kontejnery, fekální vozy, zemní práce Bobcat a JCB. V Liberci od roku 1992. Dispečink 602 411 126.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "KTN",
    nazev: "Kontejnery na odpad",
    popis:
      "Přistavíme kontejner, odvezeme ho a odpad zlikvidujeme. Suť, směsný odpad, bioodpad — v Liberci obvykle do druhého dne.",
    stroj: "Kontejnerové vozy",
  },
  {
    kod: "FEK",
    nazev: "Jímky, žumpy a septiky",
    popis:
      "Vyvezeme jímku, žumpu i septik, fekálie zlikvidujeme podle předpisů. Jezdíme po Liberci i mimo něj.",
    stroj: "Fekální souprava",
  },
  {
    kod: "TLK",
    nazev: "Čištění a inspekce potrubí",
    popis:
      "Ucpanou kanalizaci pročistíme tlakovou soupravou. Do nepřístupných částí potrubí se podíváme kamerovým inspekčním systémem.",
    stroj: "Tlaková souprava + kamera",
  },
  {
    kod: "ZEM",
    nazev: "Zemní práce",
    popis:
      "Výkopy, terénní úpravy, přípravy staveb. Stroje JCB 4CX Super, Bobcat 205, 773, A300 a minibagr — projedou i tam, kde je těsno.",
    stroj: "JCB + Bobcat",
  },
  {
    kod: "NST",
    nazev: "Nástavce Bobcat",
    popis:
      "Bourací kladivo, vrták na ploty, drtič pařezů, štěpkovač větví, sněhová fréza, zametací zařízení. Jeden stroj, desítky prací.",
    stroj: "Nástavce a zařízení",
  },
  {
    kod: "MAT",
    nazev: "Dovoz materiálu",
    popis:
      "Dovezeme štěrk, písek, plavený kamínek, beton nebo jiný náklad přímo na vaši stavbu či zahradu.",
    stroj: "Sklápěč, hydraulická ruka",
  },
  {
    kod: "PLO",
    nazev: "Plošina a hydraulická ruka",
    popis:
      "Pracovní plošina pro práce ve výškách a auto s hydraulickou rukou pro těžká břemena — na objednávku i s obsluhou.",
    stroj: "Plošina, HR",
  },
  {
    kod: "VYK",
    nazev: "Vyklízení a sekání trávy",
    popis:
      "Vyklidíme dům, sklep, půdu, halu i komerční prostory a odpad rovnou odvezeme. Posekáme trávu na větších plochách.",
    stroj: "Kontejner + technika",
  },
];

export default function Page() {
  return (
    <main className="ah">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Autodoprava Hlavatý">
            <span className="wordmark-badge" aria-hidden="true">AH</span>
            <span className="wordmark-text">
              Autodoprava<br />Hlavatý
            </span>
          </div>
          <a className="hero-dispecink" href="tel:+420602411126">
            <span className="hero-dispecink-label">Dispečink</span>
            <span className="hero-dispecink-num">602 411 126</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-year">1992</span> — v Liberci jezdíme přes třicet let
          </p>
          <h1 className="hero-title">
            Odvezeme,<br />
            <span className="hero-title-accent">vyvezeme,</span><br />
            vykopeme.
          </h1>
          <p className="hero-sub">
            Kontejnery na odpad, vývoz jímek a septiků, zemní práce Bobcat a JCB.
            Zavolejte dispečink a domluvíme termín — obvykle do druhého dne.
          </p>
          <div className="hero-cta-row">
            <a className="btn-primary" href="tel:+420602411126">Zavolat dispečink</a>
            <a className="btn-ghost" href="#sluzby">Co všechno umíme</a>
          </div>
        </div>

        {/* Signature: výstražné šrafování dopravní/stavební techniky */}
        <div className="hero-hazard" aria-hidden="true">
          <div className="hazard-stripes"></div>
          <div className="hazard-plate">
            <span>LIBEREC</span>
            <span className="hazard-dot">•</span>
            <span>ČESKÁ 231</span>
            <span className="hazard-dot">•</span>
            <span>PO–PÁ 7:00–15:30</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Služby a technika</p>
          <h2 id="sluzby-h" className="section-title">
            Jeden telefon, celý vozový park
          </h2>
          <p className="section-lead">
            Osm okruhů práce, na které máme vlastní stroje i lidi. Kód u každé
            služby nadiktujte dispečinku — hned víme, co poslat.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="karta">
              <div className="karta-head">
                <span className="karta-kod">{s.kod}</span>
                <span className="karta-stroj">{s.stroj}</span>
              </div>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <p className="sluzby-cenik">
          Kompletní ceník služeb platí od 12.&nbsp;1.&nbsp;2026 — pošleme vám ho
          e‑mailem na <a href="mailto:kancelar@odpady-hlavaty.cz">kancelar@odpady-hlavaty.cz</a>.
        </p>
      </section>

      {/* ===== DŮVĚRA / O FIRMĚ ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <p className="section-eyebrow section-eyebrow-light">O firmě</p>
            <h2 id="duvera-h" className="section-title section-title-light">
              Rodinná firma z České ulice
            </h2>
            <p className="duvera-p">
              Autodopravu a technické služby děláme v Liberci od roku 1992.
              Za tu dobu jsme si vybudovali vlastní technické zázemí — od
              kontejnerových a fekálních vozů přes tlakovou soupravu s kamerou
              až po pásové i kolové Bobcaty s desítkami nástavců.
            </p>
            <p className="duvera-p">
              Jezdíme hlavně po Liberci a okolí, jímky a septiky vyvážíme i
              dál. Zvedneme telefon, řekneme rovnou cenu a přijedeme, kdy
              jsme slíbili.
            </p>
          </div>

          <dl className="duvera-fakta">
            <div className="fakt">
              <dt>V oboru od roku</dt>
              <dd>1992</dd>
            </div>
            <div className="fakt">
              <dt>Strojů a nástavců v parku</dt>
              <dd>20+</dd>
            </div>
            <div className="fakt">
              <dt>Dispečink ve všední dny</dt>
              <dd>7:00–15:30</dd>
            </div>
            <div className="fakt">
              <dt>Působnost</dt>
              <dd>Liberec a okolí</dd>
            </div>
          </dl>
        </div>

        <ul className="duvera-kontakty">
          <li>
            <span className="kontakt-role">Dispečink</span>
            <a href="tel:+420602411126">602 411 126</a>
            <a className="kontakt-mail" href="mailto:kancelar@odpady-hlavaty.cz">kancelar@odpady-hlavaty.cz</a>
          </li>
          <li>
            <span className="kontakt-role">Fakturace</span>
            <a href="tel:+420606020803">606 020 803</a>
            <a className="kontakt-mail" href="mailto:ucetni@odpady-hlavaty.cz">ucetni@odpady-hlavaty.cz</a>
          </li>
          <li>
            <span className="kontakt-role">Majitel</span>
            <a href="tel:+420602404843">602 404 843</a>
            <a className="kontakt-mail" href="mailto:doprava@odpady-hlavaty.cz">doprava@odpady-hlavaty.cz</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
