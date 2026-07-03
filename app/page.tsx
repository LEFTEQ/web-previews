const sluzby = [
  {
    id: "krov",
    nazev: "Krovy a tesařské konstrukce",
    popis:
      "Vyrobíme a smontujeme krov na míru — klasický vázaný i z příhradových vazníků. Řežeme podle výkresu ve vlastní dílně na Zolově ulici, na stavbu vezeme hotové prvky.",
    material: "Smrk KVH · BSH lepené profily · impregnace tlakově",
  },
  {
    id: "strechy",
    nazev: "Nové střechy a rekonstrukce",
    popis:
      "Šikmé i ploché, z jakéhokoli materiálu: pálená a betonová taška, plech, hliníkové šablony, bitumenové a PVC pásy, Eternit. Starou krytinu sundáme, zlikvidujeme a položíme novou včetně klempířiny.",
    material: "Bramac · Tondach · Ruukki · Prefa · Satjam · Velux",
  },
  {
    id: "pergoly",
    nazev: "Pergoly, carporty, zahradní domy",
    popis:
      "Přijedeme, zaměříme, nakreslíme a postavíme. Přiznané tesařské spoje, hoblované dřevo, kotvení do patek — konstrukce, která vydrží desítky let bez údržby navíc.",
    material: "Hoblovaný smrk · modřín · lazura dle vzorníku",
  },
  {
    id: "stavby",
    nazev: "Stavby na klíč pod jednou smlouvou",
    popis:
      "Od roku 2010 stavíme rodinné domy, půdní vestavby, nástavby i garáže. Zateplujeme fasády. Všechna řemesla koordinujeme my — vy podepisujete jednu smlouvu a máte jednu záruku.",
    material: "Jedna smlouva · jedna záruka · jeden termín",
  },
];

const kontakty = [
  {
    role: "Střechy — opravy i nové",
    jmeno: "Aleš Peřina",
    tel: "722 936 886",
    telHref: "+420722936886",
    email: "perina@roofman.cz",
  },
  {
    role: "Stavby, vestavby, fasády",
    jmeno: "Michal Šabatka",
    tel: "776 806 706",
    telHref: "+420776806706",
    email: "sabatka@roofman.cz",
  },
  {
    role: "Jednatel společnosti",
    jmeno: "Ing. Jiří Chmelík",
    tel: "777 151 402",
    telHref: "+420777151402",
    email: "chmelik@roofman.cz",
  },
];

export default function Page() {
  return (
    <main className="rf">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark" aria-label="Roofman">
              ROOF<span className="wordmark-peak" aria-hidden="true">/\</span>MAN
            </span>
            <span className="hero-loc">Olomouc–Slavonín · Zolova 3</span>
          </div>

          <div className="hero-main">
            <p className="hero-eyebrow">Tesařství, střechy a stavby na klíč</p>
            <h1 className="hero-title">
              <span className="line line-1">Krov je</span>
              <span className="line line-2">páteř</span>
              <span className="line line-3">domu.</span>
            </h1>
            <p className="hero-sub">
              Řežeme, sbíjíme a stavíme krovy v Olomouci od roku 2007. Střechu
              vám opravíme nebo postavíme celou — šikmou, plochou, z tašky
              i z plechu. A od roku 2010 postavíme rovnou celý dům.
            </p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="tel:+420722936886">
                Zavolat: 722 936 886
              </a>
              <a className="btn btn-ghost" href="mailto:perina@roofman.cz">
                Napsat poptávku
              </a>
            </div>
          </div>

          {/* Signature: kresba krovu — vaznice, krokve, kleštiny */}
          <div className="truss" aria-hidden="true">
            <svg
              viewBox="0 0 1200 340"
              preserveAspectRatio="xMidYMax meet"
              className="truss-svg"
            >
              {/* pozednice */}
              <line className="t t-1" x1="40" y1="320" x2="1160" y2="320" />
              {/* krokve */}
              <line className="t t-2" x1="60" y1="320" x2="600" y2="30" />
              <line className="t t-2" x1="1140" y1="320" x2="600" y2="30" />
              {/* kleštiny */}
              <line className="t t-3" x1="290" y1="196" x2="910" y2="196" />
              {/* sloupek */}
              <line className="t t-3" x1="600" y1="30" x2="600" y2="320" />
              {/* pásky */}
              <line className="t t-4" x1="600" y1="250" x2="440" y2="320" />
              <line className="t t-4" x1="600" y1="250" x2="760" y2="320" />
              {/* vzpěry */}
              <line className="t t-4" x1="290" y1="196" x2="400" y2="320" />
              <line className="t t-4" x1="910" y1="196" x2="800" y2="320" />
              {/* tesařské spoje — kolíky */}
              <circle className="peg p-1" cx="600" cy="30" r="7" />
              <circle className="peg p-2" cx="290" cy="196" r="6" />
              <circle className="peg p-2" cx="910" cy="196" r="6" />
              <circle className="peg p-3" cx="600" cy="250" r="6" />
              <circle className="peg p-3" cx="60" cy="320" r="6" />
              <circle className="peg p-3" cx="1140" cy="320" r="6" />
            </svg>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="sluzby-h">Co pro vás postavíme</h2>
            <p className="sec-lead">
              Tesařina je základ, ale na stavbě umíme všechno od hřebene po
              základovou desku. Vždy pod jednou smlouvou a jednou zárukou.
            </p>
          </div>

          <div className="sluzby-grid">
            {sluzby.map((s) => (
              <article key={s.id} className="karta">
                <div className="karta-znak" aria-hidden="true">
                  <svg viewBox="0 0 40 24">
                    <path d="M2 22 L20 3 L38 22" fill="none" />
                  </svg>
                </div>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="karta-material">{s.material}</p>
              </article>
            ))}
          </div>

          <div className="materialy">
            <p className="materialy-label">Krytiny, se kterými pracujeme denně</p>
            <ul className="materialy-list">
              {[
                "Bramac",
                "Tondach",
                "Ruukki",
                "PamaTherm",
                "Budmat",
                "Satjam",
                "Prefa",
                "Eternit",
                "bitumenový šindel",
                "PVC a asfaltové pásy",
              ].map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="materialy-pozn">
              Jsme servisní partner pro střešní okna a světlovody Velux, Roto
              a Fakro — dodáme, namontujeme, vyměníme.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA / KONTAKTY ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="wrap">
          <div className="duvera-grid">
            <div className="duvera-text">
              <h2 id="duvera-h">Kdo vám zvedne telefon</h2>
              <p>
                Nejsme call centrum. Když zavoláte, mluvíte rovnou s člověkem,
                který na vaši střechu nebo stavbu pak opravdu přijede. Dílnu,
                prodejnu a sklad máme na Zolově 3 v Olomouci–Slavoníně —
                stavte se kterýkoli všední den 7.30–16.30.
              </p>
              <dl className="fakta">
                <div>
                  <dt>Od roku</dt>
                  <dd>2007</dd>
                </div>
                <div>
                  <dt>Řemesla pod jednou smlouvou</dt>
                  <dd>tesaři · pokrývači · klempíři · zedníci</dd>
                </div>
                <div>
                  <dt>IČO</dt>
                  <dd>27788482</dd>
                </div>
              </dl>
            </div>

            <ul className="lide">
              {kontakty.map((k) => (
                <li key={k.jmeno} className="clovek">
                  <p className="clovek-role">{k.role}</p>
                  <p className="clovek-jmeno">{k.jmeno}</p>
                  <p className="clovek-spojeni">
                    <a href={`tel:${k.telHref}`}>{k.tel}</a>
                    <a href={`mailto:${k.email}`}>{k.email}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
