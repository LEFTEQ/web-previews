const sluzby = [
  {
    id: "vlozkovani",
    nazev: "Vložkování komínů",
    popis:
      "Do stávajícího komína vsadíme nerezovou nebo plastovou vložku podle typu vašeho spotřebiče. Starý zděný komín tak bezpečně slouží i modernímu kotli nebo krbovým kamnům.",
    detail: "Nerez 0,5–1 mm / plast pro kondenzační kotle",
  },
  {
    id: "frezovani",
    nazev: "Frézování průduchu",
    popis:
      "Úzký průduch rozšíříme frézou přímo v komínovém tělese — bez bourání a bez lešení. Získáte průměr potřebný pro novou vložku i tam, kde to dřív nešlo.",
    detail: "Rozšíření až o 1/3 průměru",
  },
  {
    id: "systemy",
    nazev: "Nové komínové systémy",
    popis:
      "Stavíte nebo rekonstruujete? Navrhneme a smontujeme třívrstvý nerezový nebo keramický komín na míru vašemu kotli, kamnům či krbu — od základu po komínovou hlavu.",
    detail: "Nerez, keramika, plast — dle spotřebiče",
  },
  {
    id: "revize",
    nazev: "Revize a kontroly",
    popis:
      "Provedeme revizi před kolaudací i pravidelnou roční kontrolu spalinové cesty. Bez platné zprávy vám pojišťovna při požáru nemusí vyplatit ani korunu.",
    detail: "Zpráva o kontrole na místě, do 24 h e-mailem",
  },
  {
    id: "ventilatory",
    nazev: "Spalinové ventilátory",
    popis:
      "Komín špatně táhne a kouř se vrací do místnosti? Na komínovou hlavu osadíme ventilátor s úsporným motorem, který zajistí spolehlivý tah za každého počasí.",
    detail: "Montáž včetně regulace tahu",
  },
];

const duvody = [
  {
    cislo: "4 325",
    text: "komínů, které jsme postavili nebo vyvložkovali po celé ČR",
  },
  {
    cislo: "3 820",
    text: "zákazníků — od rodinných domů po průmyslové provozy",
  },
  {
    cislo: "5",
    text: "poboček v České republice, centrála v Praze 8-Libni",
  },
];

export default function Page() {
  return (
    <main className="ek">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="EKO KOMÍNY s.r.o.">
            <span className="wordmark-eko">EKO</span>
            <span className="wordmark-kominy">KOMÍNY</span>
            <span className="wordmark-sro">s.r.o.</span>
          </div>
          <a className="hero-tel" href="tel:+420841566469">
            <span className="hero-tel-label">Infolinka</span>
            <span className="hero-tel-num">841 566 469</span>
          </a>
        </div>

        <div className="hero-body">
          {/* Signature: průřez komínem — soustředné vrstvy vložky */}
          <div className="prurez" aria-hidden="true">
            <svg viewBox="0 0 480 480" className="prurez-svg" role="presentation">
              <rect x="40" y="40" width="400" height="400" className="pr-zdivo" />
              <rect x="40" y="40" width="400" height="400" className="pr-spara" />
              <circle cx="240" cy="240" r="172" className="pr-mezera" />
              <circle cx="240" cy="240" r="138" className="pr-vlozka" />
              <circle cx="240" cy="240" r="104" className="pr-pruduch" />
              <circle cx="240" cy="240" r="104" className="pr-tah" />
              <line x1="240" y1="40" x2="240" y2="136" className="pr-kota" />
              <line x1="344" y1="240" x2="440" y2="240" className="pr-kota" />
            </svg>
            <div className="prurez-popisky">
              <span className="pr-pop pr-pop-1">zdivo</span>
              <span className="pr-pop pr-pop-2">nerezová vložka</span>
              <span className="pr-pop pr-pop-3">průduch ⌀ 200</span>
            </div>
          </div>

          <div className="hero-text">
            <p className="hero-eyebrow">Komíny · vložkování · frézování — Praha a celá ČR</p>
            <h1 className="hero-h1">
              Starý komín,
              <br />
              <em>nová vložka.</em>
              <br />
              Bez bourání.
            </h1>
            <p className="hero-perex">
              Jsme český výrobce komínových systémů. Vyvložkujeme váš komín nerezem
              nebo plastem, úzký průduch vyfrézujeme — a spaliny odvedeme bezpečně,
              jak ukládá norma.
            </p>
            <div className="hero-akce">
              <a className="btn btn-plna" href="tel:+420841566469">
                Zavolat 841 566 469
              </a>
              <a className="btn btn-obrys" href="mailto:praha@eko-kominy.cz">
                Napsat e-mail
              </a>
            </div>
            <p className="hero-adresa">
              V Holešovičkách 1445/8, Praha 8-Libeň · praha@eko-kominy.cz
            </p>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h" className="sekce-h2">
            Co pro váš komín uděláme
          </h2>
          <p className="sekce-perex">
            Od revize po kompletní stavbu. Každé zakázce předchází prohlídka na
            místě a předběžná kalkulace zdarma.
          </p>
        </div>

        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.id} className="sluzba">
              <span className="sluzba-znacka" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" role="presentation">
                  <circle cx="12" cy="12" r="10" className="zn-vnejsi" />
                  <circle cx="12" cy="12" r="5" className="zn-vnitrni" />
                </svg>
              </span>
              <h3 className="sluzba-nazev">{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </li>
          ))}
          <li className="sluzba sluzba-vyzva">
            <h3 className="sluzba-nazev">Nevíte, co váš komín potřebuje?</h3>
            <p className="sluzba-popis">
              Popište nám spotřebič a stáří komína — poradíme, jestli stačí
              vložka, nebo je potřeba frézovat. Poradenství je zdarma.
            </p>
            <a className="btn btn-plna btn-mensi" href="tel:+420841566469">
              Zavolat a poradit se
            </a>
          </li>
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-vnitrek">
          <div className="duvera-text">
            <h2 id="duvera-h" className="sekce-h2 sekce-h2-svetla">
              Komín je pojistka vašeho domu
            </h2>
            <p className="duvera-perex">
              Zanedbaná spalinová cesta je nejčastější příčinou požárů rodinných
              domů — a bez platné revizní zprávy pojišťovna krátí nebo zamítá
              plnění. Naši revizní technici mají osvědčení a každou zprávu
              dostanete do 24 hodin e-mailem.
            </p>
            <p className="duvera-perex">
              Vyrábíme v Česku, montujeme vlastními techniky a na dodané systémy
              držíme záruční i pozáruční servis. Realizujeme i nestandardní
              zakázky — průmyslové komíny, atypické průměry, památkové objekty.
            </p>
            <blockquote className="duvera-citace">
              <p>
                „Frézovali a vložkovali komín v domě z roku 1928 v Libni. Za dva
                dny hotovo, bez jediné bourané cihly, revizní zpráva na místě.“
              </p>
              <cite>— majitel rodinného domu, Praha 8</cite>
            </blockquote>
          </div>

          <dl className="duvera-cisla">
            {duvody.map((d) => (
              <div key={d.cislo} className="cislo-blok">
                <dt className="cislo-hodnota">{d.cislo}</dt>
                <dd className="cislo-popis">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
