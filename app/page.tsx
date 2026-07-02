import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Nails Ostrava — nehtové studio | modeláž, gel lak, manikúra",
  description:
    "Nehtové studio Diamond Nails v Ostravě: nová modeláž gelem i akrygelem, gel lak, P-shine manikúra a zdobení. Objednejte se telefonicky, termíny i o víkendu.",
  openGraph: {
    title: "Diamond Nails Ostrava — nehtové studio",
    description:
      "Modeláž nehtů, gel lak, manikúra a zdobení v centru Ostravy. Precizní práce, sterilní nástroje, termíny do týdne.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    nazev: "Nová modeláž — gel / akrygel",
    popis:
      "Prodloužení na šablonu nebo tip, vytvarování do mandle, oválu či square. Držíme přirozený tvar, který vydrží 3–4 týdny bez odchlípnutí.",
    cas: "120 min",
    cena: "od 750 Kč",
  },
  {
    nazev: "Doplnění modeláže",
    popis:
      "Zbroušení, doplnění odrostu, korekce tvaru a nový lak. Přijďte ideálně po 3 týdnech — nehet zůstane pevný a nikde nepraskne.",
    cas: "90 min",
    cena: "od 550 Kč",
  },
  {
    nazev: "Gel lak na přírodní nehty",
    popis:
      "Šetrná úprava nehtového lůžka, zpevnění bází a barva podle vzorníku — přes 120 odstínů. Vydrží 2–3 týdny bez oprýskání.",
    cas: "60 min",
    cena: "od 450 Kč",
  },
  {
    nazev: "Manikúra P-shine",
    popis:
      "Japonská manikúra pro přirozený lesk bez laku. Vyživí nehtovou ploténku — vhodná i pro pány a pro nehty po sundané modeláži.",
    cas: "45 min",
    cena: "od 390 Kč",
  },
  {
    nazev: "Zdobení a nail art",
    popis:
      "Francie, babyboomer, chrom, kamínky Swarovski i ruční malba. Přineste inspiraci z Instagramu, doladíme ji na váš tvar nehtu.",
    cas: "dle rozsahu",
    cena: "od 10 Kč / nehet",
  },
  {
    nazev: "Odstranění modeláže",
    popis:
      "Bezpečné sbroušení a rozpuštění bez páčení, aby přírodní nehet zůstal celý. Doporučíme následnou péči nebo P-shine.",
    cas: "30 min",
    cena: "od 200 Kč",
  },
];

const zasady = [
  {
    titulek: "Sterilní nástroje na každou klientku",
    text: "Frézky, pilníky i kleštičky projdou po každé návštěvě UV sterilizátorem. Jednorázové pilníky si můžete odnést domů.",
  },
  {
    titulek: "Certifikované materiály",
    text: "Pracujeme s gely a bázemi bez HEMA a Di-HEMA — šetrné i pro citlivé nehtové lůžko a alergiky.",
  },
  {
    titulek: "Termín do týdne, i v sobotu",
    text: "Objednáváme telefonicky nebo SMS. Když napíšete dopoledne, většinou najdeme termín ještě tentýž týden.",
  },
];

const reference = [
  {
    jmeno: "Kateřina M., Ostrava-Poruba",
    text: "Chodím sem dva roky na doplnění každé tři týdny. Ani jednou mi nehet nepraskl a mandle drží tvar do poslední chvíle.",
  },
  {
    jmeno: "Lucie T., Moravská Ostrava",
    text: "Přinesla jsem fotku babyboomeru z Instagramu a výsledek byl přesně takový. Navíc mi poradily tvar, který líp sedí k mým rukám.",
  },
  {
    jmeno: "Simona H., Slezská Ostrava",
    text: "Po špatné zkušenosti jinde jsem se bála o svoje nehty. Tady mi modeláž šetrně sundaly a P-shine je dal za dva měsíce do pořádku.",
  },
];

export default function Page() {
  return (
    <main className="dn">
      {/* ===== HERO ===== */}
      <section className="dn-hero" aria-labelledby="dn-hero-h">
        <header className="dn-topbar">
          <span className="dn-wordmark">
            Diamond<i className="dn-facet" aria-hidden="true" />Nails
          </span>
          <a className="dn-topbar-tel" href="tel:+420777123456">
            777 123 456
          </a>
        </header>

        <div className="dn-hero-grid">
          <div className="dn-hero-copy">
            <p className="dn-eyebrow">Nehtové studio · Ostrava, Stodolní čtvrť</p>
            <h1 id="dn-hero-h">
              <span className="dn-line dn-line-1">Deset nehtů.</span>
              <span className="dn-line dn-line-2">Deset malých</span>
              <span className="dn-line dn-line-3 dn-shine">briliantů.</span>
            </h1>
            <p className="dn-hero-sub">
              Modeláž, gel lak a manikúra, u kterých záleží na každém milimetru.
              Termín najdeme do týdne — i v sobotu.
            </p>
            <div className="dn-hero-cta">
              <a className="dn-btn dn-btn-solid" href="tel:+420777123456">
                Zavolat a objednat se
              </a>
              <a className="dn-btn dn-btn-ghost" href="#sluzby">
                Prohlédnout ceník
              </a>
            </div>
          </div>

          {/* Signature: faseta briliantu složená z ploch — jako výbrus kamene i tvar nehtu */}
          <div className="dn-gem" aria-hidden="true">
            <svg viewBox="0 0 320 380" className="dn-gem-svg" role="presentation" focusable="false">
              <polygon className="dn-f dn-f1" points="160,10 60,90 260,90" />
              <polygon className="dn-f dn-f2" points="60,90 20,150 160,150" />
              <polygon className="dn-f dn-f3" points="260,90 300,150 160,150" />
              <polygon className="dn-f dn-f4" points="60,90 160,150 260,90 160,10" opacity="0" />
              <polygon className="dn-f dn-f5" points="20,150 160,370 160,150" />
              <polygon className="dn-f dn-f6" points="300,150 160,150 160,370" />
              <polygon className="dn-f dn-f7" points="60,90 20,150 160,150 160,10" opacity="0" />
              <polygon className="dn-f dn-f8" points="160,10 60,90 160,150" />
              <polygon className="dn-f dn-f9" points="160,10 260,90 160,150" />
            </svg>
          </div>
        </div>

        <ul className="dn-hero-strip" aria-label="Rychlá fakta o studiu">
          <li><strong>3–4 týdny</strong> výdrž modeláže</li>
          <li><strong>120+</strong> odstínů gel laku</li>
          <li><strong>So</strong> otevřeno i v sobotu</li>
        </ul>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="dn-sluzby" id="sluzby" aria-labelledby="dn-sluzby-h">
        <div className="dn-section-head">
          <h2 id="dn-sluzby-h">Co pro vaše ruce uděláme</h2>
          <p>
            Ceny jsou konečné — v ceně je vždy úprava kůžičky, olejíček a poradenství
            k domácí péči. Objednáváme na přesný čas, nečekáte.
          </p>
        </div>

        <ul className="dn-cenik">
          {sluzby.map((s) => (
            <li className="dn-polozka" key={s.nazev}>
              <div className="dn-polozka-text">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
              <div className="dn-polozka-meta">
                <span className="dn-cas">{s.cas}</span>
                <span className="dn-cena">{s.cena}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="dn-duvera" aria-labelledby="dn-duvera-h">
        <div className="dn-section-head dn-section-head-light">
          <h2 id="dn-duvera-h">Proč se k nám klientky vracejí</h2>
          <p>
            Studio najdete pár kroků od Stodolní, dvě minuty od tramvajové zastávky
            Elektra. Pracujeme ve dvou — na svůj termín se vždy dostanete.
          </p>
        </div>

        <div className="dn-zasady">
          {zasady.map((z, i) => (
            <article className="dn-zasada" key={z.titulek}>
              <i className="dn-zasada-gem" aria-hidden="true" />
              <h3>{z.titulek}</h3>
              <p>{z.text}</p>
            </article>
          ))}
        </div>

        <div className="dn-reference">
          {reference.map((r) => (
            <figure className="dn-ref" key={r.jmeno}>
              <blockquote>
                <p>„{r.text}“</p>
              </blockquote>
              <figcaption>{r.jmeno}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
