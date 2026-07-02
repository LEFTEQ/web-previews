export const metadata = {
  title: "iServis Praha — Zdeněk Tuček · Opravy Apple na počkání, Klimentská 7",
  description:
    "Servis iPhone, iPad a MacBook v centru Prahy. Většinu oprav uděláme na počkání — díly máme skladem v Klimentské 7, nebo přijedeme k vám domů či do firmy.",
  openGraph: {
    title: "iServis Praha — opravy Apple na počkání",
    description:
      "Displej, baterie, konektor. Většinu oprav vyřídíme na počkání v Klimentské 7, Praha 1 — nebo přijedeme k vám.",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230E1B2C'/%3E%3Crect x='9' y='5' width='14' height='22' rx='3' fill='none' stroke='%234FD1C5' stroke-width='2'/%3E%3Ccircle cx='16' cy='23' r='1.6' fill='%23F5A524'/%3E%3C/svg%3E",
  },
};

const opravy = [
  {
    kod: "DSP",
    nazev: "Výměna displeje",
    zarizeni: "iPhone · iPad",
    popis:
      "Prasklé sklo nebo nefunkční dotyk. Displeje na běžné modely držíme skladem, takže odcházíte s opraveným telefonem tentýž den.",
    cas: "na počkání · 30–60 min",
  },
  {
    kod: "BAT",
    nazev: "Výměna baterie",
    zarizeni: "iPhone · MacBook",
    popis:
      "Telefon nevydrží den? Změříme kapacitu zdarma a baterii vyměníme, zatímco si dáte kávu za rohem na Náměstí Republiky.",
    cas: "na počkání · 20–40 min",
  },
  {
    kod: "KON",
    nazev: "Konektory a nabíjení",
    zarizeni: "iPhone · iPad · MacBook",
    popis:
      "Nenabíjí, nabíjí jen v určité poloze, nedrží kabel. Vyčistíme nebo vyměníme nabíjecí konektor a zkontrolujeme kabeláž.",
    cas: "na počkání · do 60 min",
  },
  {
    kod: "DGN",
    nazev: "Diagnostika zdarma",
    zarizeni: "vše od Apple",
    popis:
      "Nevíte, co zařízení je? Projdeme ho, řekneme přesnou cenu předem — a vy se rozhodnete. Za podívání nic neplatíte.",
    cas: "zdarma · do 30 min",
  },
  {
    kod: "VYK",
    nazev: "Výkup a prodej telefonů",
    zarizeni: "nové · repasované · použité",
    popis:
      "Starý telefon vykoupíme za hotové nebo protiúčtem. Prodáváme prověřené repasované iPhony se zárukou 12 měsíců.",
    cas: "ocenění na místě",
  },
  {
    kod: "FIR",
    nazev: "Servis pro firmy",
    zarizeni: "flotily telefonů a MacBooků",
    popis:
      "Spravujete víc zařízení? Domluvíme svoz, priority a pevné termíny, aby vaši lidé nebyli bez telefonu ani den.",
    cas: "smluvní termíny",
  },
];

const kroky = [
  {
    krok: "1",
    titul: "Zavoláte nebo přijdete",
    text: "Klimentská 7, dvě minuty od metra Náměstí Republiky. Bez objednání — stačí přijít s telefonem v ruce.",
  },
  {
    krok: "2",
    titul: "Řekneme cenu předem",
    text: "Zařízení otevřeme, najdeme závadu a řekneme přesnou cenu. Nic se neopravuje, dokud neřeknete ano.",
  },
  {
    krok: "3",
    titul: "Počkáte si — a hotovo",
    text: "Většinu oprav zvládneme do hodiny. Data zůstávají v telefonu, na práci dáváme záruku 6 měsíců.",
  },
];

export default function Page() {
  return (
    <main className="servis">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="iServis Praha — Zdeněk Tuček">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" role="presentation">
                <rect x="6" y="2" width="12" height="20" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="18.4" r="1.2" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              iServis<span className="brand-city">Praha</span>
            </span>
            <span className="brand-owner">Zdeněk Tuček</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">Servis Apple · Klimentská 7, Praha 1</p>
              <h1 className="hero-title">
                <span className="ht-line ht-1">Rozbitý iPhone?</span>
                <span className="ht-line ht-2">
                  Opravíme ho <em>na&nbsp;počkání.</em>
                </span>
              </h1>
              <p className="hero-sub">
                Displeje, baterie i konektory pro iPhone, iPad a MacBook držíme
                skladem. Přijdete, dáte si kávu — a odcházíte s opraveným
                zařízením. Nebo přijedeme k vám domů či do práce.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="tel:+420777123456">
                  Zavolat 777 123 456
                </a>
                <a className="btn btn-ghost" href="mailto:servis@iservispraha.cz">
                  Napsat e-mail
                </a>
              </div>
              <p className="hero-note">
                Po–Pá 9–18 · diagnostika zdarma · cena vždy předem
              </p>
            </div>

            {/* Signature: otevřený telefon jako servisní schéma */}
            <div className="hero-board" aria-hidden="true">
              <svg className="board-svg" viewBox="0 0 340 460" role="presentation">
                {/* tělo telefonu */}
                <rect className="bd bd-body" x="70" y="30" width="200" height="400" rx="28" />
                {/* vnitřní deska */}
                <rect className="bd bd-inner" x="92" y="52" width="156" height="356" rx="14" />
                {/* baterie */}
                <rect className="bd bd-part bd-batt" x="110" y="200" width="120" height="150" rx="10" />
                <text className="bd-label" x="170" y="280" textAnchor="middle">BAT</text>
                {/* kamera modul */}
                <rect className="bd bd-part bd-cam" x="110" y="70" width="54" height="54" rx="12" />
                <circle className="bd bd-lens" cx="137" cy="97" r="12" />
                {/* logic board */}
                <rect className="bd bd-part bd-logic" x="178" y="70" width="52" height="110" rx="8" />
                <line className="bd bd-trace" x1="188" y1="90" x2="220" y2="90" />
                <line className="bd bd-trace" x1="188" y1="106" x2="220" y2="106" />
                <line className="bd bd-trace" x1="188" y1="122" x2="220" y2="122" />
                <line className="bd bd-trace" x1="188" y1="138" x2="220" y2="138" />
                {/* konektor */}
                <rect className="bd bd-part bd-port" x="140" y="372" width="60" height="18" rx="6" />
                {/* šroubky */}
                <circle className="bd bd-screw" cx="104" cy="64" r="4" />
                <circle className="bd bd-screw" cx="236" cy="64" r="4" />
                <circle className="bd bd-screw" cx="104" cy="396" r="4" />
                <circle className="bd bd-screw" cx="236" cy="396" r="4" />
                {/* kótovací linky — servisní schéma */}
                <g className="bd-callout co-1">
                  <line x1="230" y1="275" x2="312" y2="275" />
                  <circle cx="312" cy="275" r="3.5" />
                  <text x="316" y="268" textAnchor="end">baterie · 30 min</text>
                </g>
                <g className="bd-callout co-2">
                  <line x1="110" y1="97" x2="28" y2="97" />
                  <circle cx="28" cy="97" r="3.5" />
                  <text x="24" y="90">kamera · skladem</text>
                </g>
                <g className="bd-callout co-3">
                  <line x1="140" y1="381" x2="28" y2="381" />
                  <circle cx="28" cy="381" r="3.5" />
                  <text x="24" y="374">konektor · 45 min</text>
                </g>
              </svg>
              <div className="board-tag">servisní schéma · Klimentská 7</div>
            </div>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <span>iPhone</span><i>·</i><span>iPad</span><i>·</i><span>MacBook</span><i>·</i>
          <span>záruční i pozáruční servis</span><i>·</i><span>výkup za hotové</span><i>·</i>
          <span>ekologická likvidace</span>
        </div>
      </header>

      {/* ===== SEKCE 1: OPRAVY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-inner">
          <div className="sec-head">
            <p className="sec-eyebrow">Co opravíme</p>
            <h2 id="sluzby-h">
              Nejčastější opravy máme <span className="hl">skladem a v ruce</span>
            </h2>
            <p className="sec-lead">
              Kódy jako na servisním protokolu — přesně tak vám opravu zapíšeme,
              když k nám přijdete. U každé řekneme cenu předem.
            </p>
          </div>
          <ul className="oprava-grid">
            {opravy.map((o) => (
              <li className="oprava" key={o.kod}>
                <div className="oprava-top">
                  <span className="oprava-kod">{o.kod}</span>
                  <span className="oprava-cas">{o.cas}</span>
                </div>
                <h3>{o.nazev}</h3>
                <p className="oprava-zarizeni">{o.zarizeni}</p>
                <p className="oprava-popis">{o.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2: JAK TO PROBÍHÁ + DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sec-inner">
          <div className="duvera-grid">
            <div className="duvera-copy">
              <p className="sec-eyebrow sec-eyebrow-light">Jak to u nás probíhá</p>
              <h2 id="duvera-h">
                Od roku 2013 opravujeme Apple v&nbsp;centru Prahy
              </h2>
              <p className="duvera-lead">
                Malý servis, kde s vaším telefonem mluví přímo ten, kdo ho
                opravuje. Žádná přepážka, žádné „pošleme to do centrály“ —
                Zdeněk Tuček a jeho dílna v Klimentské 7, kousek od Náměstí
                Republiky.
              </p>
              <ol className="kroky">
                {kroky.map((k) => (
                  <li key={k.krok}>
                    <span className="krok-c" aria-hidden="true">{k.krok}</span>
                    <div>
                      <h3>{k.titul}</h3>
                      <p>{k.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="duvera-fakta" aria-label="Proč nám lidé věří">
              <div className="fakt">
                <strong>Data zůstávají u vás</strong>
                <p>Telefon neresetujeme a nikam neposíláme. Opravujeme přímo na pobočce, před vašima očima.</p>
              </div>
              <div className="fakt">
                <strong>Záruka 6 měsíců na opravu</strong>
                <p>Na vyměněné díly i práci. Když se cokoli ozve, přijdete a vyřešíme to přednostně.</p>
              </div>
              <div className="fakt">
                <strong>Dojezd po Praze</strong>
                <p>Nemůžete přijít? Přijedeme k vám domů nebo do kanceláře a opravíme na místě — na počkání.</p>
              </div>
              <div className="fakt fakt-adresa">
                <strong>Klimentská 7, Praha 1</strong>
                <p>
                  Po–Pá 9–18 ·{" "}
                  <a href="tel:+420777123456">777 123 456</a> ·{" "}
                  <a href="mailto:servis@iservispraha.cz">servis@iservispraha.cz</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
