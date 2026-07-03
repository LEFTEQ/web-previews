export default function Page() {
  const dnes = new Date();
  const rok = dnes.getFullYear();

  const okna = [
    {
      typ: "Plastová okna",
      profil: "Profily Rehau / MM Profile",
      popis:
        "Nejčastější volba pro byty i rodinné domy v Pardubicích a okolí. Pěti- a šestikomorové profily, trojsklo standardně, zaměření a montáž do 3–4 týdnů od objednávky.",
      parametry: ["Uw od 0,74 W/m²K", "trojsklo v ceně", "záruka 5 let"],
    },
    {
      typ: "Hliníková okna",
      profil: "Pro velké prosklené plochy",
      popis:
        "Štíhlé rámy, velké formáty, dlouhá životnost. Vhodná pro novostavby, HS portály a vstupy do provozoven. Poradíme, kde se hliník vyplatí a kde stačí plast.",
      parametry: ["formáty přes 2,5 m", "posuvné HS portály", "libovolný odstín RAL"],
    },
    {
      typ: "Dřevěná okna",
      profil: "Eurookna z lepených hranolů",
      popis:
        "Pro starší domy, kde chcete zachovat charakter fasády. Smrk, meranti nebo dub, povrchová úprava dle vzorníku. Dodáváme i špaletová řešení.",
      parametry: ["profily IV68–IV92", "repliky původních členění", "lazury i krycí barvy"],
    },
    {
      typ: "Vše kolem oken",
      profil: "Kompletní dodávka na klíč",
      popis:
        "Vnitřní i venkovní parapety, žaluzie, rolety a sítě proti hmyzu, interiérové dveře Porta Doors, garážová vrata. Po výměně zednické začištění špalet — odejdeme, až je hotovo.",
      parametry: ["parapety a stínění", "dveře Porta Doors", "zednické začištění"],
    },
  ];

  const kroky = [
    {
      krok: "Zaměření",
      text: "Přijedu k vám, přeměřím každý otvor a poradím s členěním i otevíráním křídel. Zdarma a nezávazně, obvykle do týdne od zavolání.",
    },
    {
      krok: "Nabídka",
      text: "Do tří dnů dostanete konkrétní cenu za okna, montáž, parapety i likvidaci starých rámů. Jedna částka, žádné položky navíc na faktuře.",
    },
    {
      krok: "Montáž",
      text: "Běžný byt vyměníme za jeden den. Stará okna odvezeme, špalety zednicky začistíme, seřídíme kování a předáme záruční list.",
    },
  ];

  const reference = [
    {
      misto: "Bytový dům, Pardubice–Polabiny",
      text: "Výměna 46 oken a 12 balkonových sestav za plný provoz domu. Každý byt hotový během jednoho dne včetně úklidu.",
      rozsah: "46 oken · 12 sestav",
    },
    {
      misto: "Rodinný dům, Sezemice",
      text: "Plastová okna v dekoru zlatý dub, venkovní žaluzie a nové vchodové dveře. Majitelé topí o třetinu méně než s původními zdvojenými okny.",
      rozsah: "14 oken · žaluzie · dveře",
    },
    {
      misto: "Prvorepubliková vila, Pardubice–Zelené Předměstí",
      text: "Dřevěná eurookna jako repliky původních členěných křídel. Památkově citlivé řešení, které z ulice nepoznáte od originálu.",
      rozsah: "11 eurooken na míru",
    },
  ];

  return (
    <main className="ho">
      {/* ============ HERO ============ */}
      <header className="ho-hero">
        <div className="ho-hero__inner">
          <div className="ho-brand" aria-label="Michal Holků — okna Pardubice">
            <span className="ho-brand__mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="ho-brand__name">
              HOLKŮ<em>okna · Pardubice</em>
            </span>
          </div>

          <div className="ho-hero__grid">
            <div className="ho-hero__copy">
              <p className="ho-hero__eyebrow">Dodávka a montáž oken od roku 2003</p>
              <h1 className="ho-hero__title">
                Nová okna.
                <br />
                <span>Starý průvan</span>
                <br />
                odvezeme s sebou.
              </h1>
              <p className="ho-hero__lead">
                Jsem Michal Holků. Zaměřím, dodám a namontuji plastová, hliníková
                i dřevěná okna po celých Pardubicích. Běžný byt zvládneme za jeden
                den — včetně začištění a odvozu starých rámů.
              </p>
              <div className="ho-hero__actions">
                <a className="ho-btn ho-btn--solid" href="tel:+420731730846">
                  Zavolat 731 730 846
                </a>
                <a className="ho-btn ho-btn--line" href="mailto:info@plastova-okna-pardubice.cz">
                  Poptat zaměření zdarma
                </a>
              </div>
              <p className="ho-hero__note">
                Mrštíků 93, Pardubice · zaměření do týdne · montáž do 4 týdnů
              </p>
            </div>

            {/* Signature: typografické okno — kříž rámu jako layoutová mřížka */}
            <div className="ho-window" role="img" aria-label="Schéma okenního rámu se čtyřmi tabulkami: Uw 0,74, trojsklo, montáž za 1 den, záruka 5 let">
              <div className="ho-window__frame">
                <div className="ho-window__pane ho-window__pane--sky">
                  <strong>0,74</strong>
                  <span>Uw ve W/m²K — teplo zůstává uvnitř</span>
                </div>
                <div className="ho-window__pane">
                  <strong>3×</strong>
                  <span>trojsklo standardně, ne za příplatek</span>
                </div>
                <div className="ho-window__pane">
                  <strong>1 den</strong>
                  <span>výměna oken v běžném bytě</span>
                </div>
                <div className="ho-window__pane ho-window__pane--sky2">
                  <strong>5 let</strong>
                  <span>záruka na okna i montáž</span>
                </div>
                <span className="ho-window__mullion-v" aria-hidden="true" />
                <span className="ho-window__mullion-h" aria-hidden="true" />
                <span className="ho-window__handle" aria-hidden="true" />
              </div>
              <div className="ho-window__sill" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>

      {/* ============ SEKCE 1: OKNA A SLUŽBY ============ */}
      <section className="ho-section" aria-labelledby="nabidka">
        <div className="ho-section__inner">
          <div className="ho-section__head">
            <h2 id="nabidka">Co vám namontuji</h2>
            <p>
              Nejsem překupník s katalogem. Okna sám zaměřím, sám dodám a s partou
              montérů sám osadím. Profily Rehau a MM Profile, dveře Porta Doors —
              stejné značky montujeme přes dvacet let.
            </p>
          </div>

          <div className="ho-cards">
            {okna.map((o) => (
              <article className="ho-card" key={o.typ}>
                <p className="ho-card__profil">{o.profil}</p>
                <h3 className="ho-card__typ">{o.typ}</h3>
                <p className="ho-card__popis">{o.popis}</p>
                <ul className="ho-card__params">
                  {o.parametry.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="ho-steps" aria-label="Jak výměna oken probíhá">
            <h3 className="ho-steps__title">Jak to u mě probíhá</h3>
            <ol className="ho-steps__list">
              {kroky.map((k, i) => (
                <li className="ho-step" key={k.krok}>
                  <span className="ho-step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h4>{k.krok}</h4>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ SEKCE 2: DŮVĚRA / REFERENCE ============ */}
      <section className="ho-section ho-section--dark" aria-labelledby="reference">
        <div className="ho-section__inner">
          <div className="ho-section__head">
            <h2 id="reference">Okna, která už v Pardubicích slouží</h2>
            <p>
              Za {rok - 2003} let práce poznáte moje okna v Polabinách, na Dukle,
              v Sezemicích i v Holicích. Rád vám dám kontakt na majitele — zeptejte
              se jich sami, jak montáž proběhla.
            </p>
          </div>

          <div className="ho-refs">
            {reference.map((r) => (
              <article className="ho-ref" key={r.misto}>
                <p className="ho-ref__rozsah">{r.rozsah}</p>
                <h3 className="ho-ref__misto">{r.misto}</h3>
                <p className="ho-ref__text">{r.text}</p>
              </article>
            ))}
          </div>

          <div className="ho-trust">
            <div className="ho-trust__item">
              <strong>Osobně ručím</strong>
              <p>
                Voláte přímo mně, ne na callcentrum. Na zaměření i k reklamaci
                přijedu já — Michal Holků, Mrštíků 93, Pardubice.
              </p>
            </div>
            <div className="ho-trust__item">
              <strong>Certifikované profily</strong>
              <p>
                Rehau Quality, MM Profile, Porta Doors. Ke každé zakázce dostanete
                prohlášení o vlastnostech a záruční list.
              </p>
            </div>
            <div className="ho-trust__item">
              <strong>Jedna cena, žádné hvězdičky</strong>
              <p>
                V nabídce je zaměření, okna, montáž, parapety, začištění i odvoz
                starých rámů. Co podepíšete, to platíte.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
