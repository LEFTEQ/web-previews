// Nábytek Peška s.r.o. — Plzeň
// Koncept: „Půdorys pokoje" — hero jako typografický plán místnosti,
// kde se nábytek teprve rozmisťuje. Signature prvek: kótovací linky
// (rozměrové čáry z truhlářského/nábytkářského světa) protkávají celý web.

const realizace = [
  {
    tag: "Kuchyň na míru",
    misto: "Rodinný dům, Plzeň-Bolevec",
    popis:
      "Kuchyňská linka do L s dubovou pracovní deskou, spotřebiče vestavěné, horní skříňky až ke stropu — žádný prostor na prach.",
    rozmer: "3,6 × 2,4 m",
  },
  {
    tag: "Vestavěná skříň",
    misto: "Byt 3+1, Slovany",
    popis:
      "Skříň přes celou stěnu ložnice s posuvnými dveřmi. Uvnitř rozvržení přesně podle toho, co majitelé skutečně věší a skládají.",
    rozmer: "4,1 × 2,6 m",
  },
  {
    tag: "Obývací stěna",
    misto: "Novostavba, Křimice",
    popis:
      "Nízká sestava s otevřenými nikami a skrytou kabeláží k televizi. Dýha ořech, doplněná matným lakem v barvě stěny.",
    rozmer: "3,2 × 1,8 m",
  },
]

const sluzby = [
  {
    krok: "Zaměření",
    text: "Přijedeme k vám, změříme prostor na milimetry a probereme, co od nábytku čekáte. V Plzni a okolí zdarma.",
  },
  {
    krok: "Návrh",
    text: "Nakreslíme návrh s přesnými rozměry a cenou. Vidíte předem, jak bude nábytek v místnosti sedět — žádná překvapení.",
  },
  {
    krok: "Výroba",
    text: "Vyrábíme z lamina, dýhy i masivu. Kování Blum a Hettich, hrany ABS — věci, které vydrží každodenní otvírání.",
  },
  {
    krok: "Montáž",
    text: "Nábytek přivezeme, smontujeme, usadíme a odvezeme obaly. Odcházíme, až když všechno dovírá, jak má.",
  },
]

export default function Page() {
  return (
    <main className="pk">
      {/* ============ HERO — půdorys ============ */}
      <header className="pk-hero">
        <div className="pk-hero-top">
          <div className="pk-wordmark" aria-label="Nábytek Peška">
            <span className="pk-wordmark-main">PEŠKA</span>
            <span className="pk-wordmark-sub">nábytek · Plzeň</span>
          </div>
          <nav className="pk-nav" aria-label="Hlavní navigace">
            <a href="#realizace">Realizace</a>
            <a href="#jak">Jak pracujeme</a>
          </nav>
        </div>

        <div className="pk-hero-body">
          <p className="pk-kicker pk-rise pk-d1">Nábytek na míru vašemu bytu, ne katalogu</p>

          <h1 className="pk-h1">
            <span className="pk-rise pk-d2">Změříme.</span>
            <span className="pk-rise pk-d3">Navrhneme.</span>
            <span className="pk-rise pk-d4 pk-h1-accent">Sedne přesně.</span>
          </h1>

          <p className="pk-lead pk-rise pk-d5">
            Kuchyně, vestavěné skříně a nábytek na míru pro Plzeň a okolí.
            Od zaměření u vás doma po poslední seřízený pant — všechno pod
            jednou střechou.
          </p>

          <div className="pk-hero-cta pk-rise pk-d6">
            <a className="pk-btn" href="#jak">Chci nezávaznou nabídku</a>
            <span className="pk-cta-note">Zaměření v Plzni zdarma</span>
          </div>
        </div>

        {/* Signature: kótovací linka pod hero — jazyk nábytkářského výkresu */}
        <div className="pk-dim pk-rise pk-d7" aria-hidden="true">
          <span className="pk-dim-tick" />
          <span className="pk-dim-line" />
          <span className="pk-dim-label">na milimetr přesně od r. 1992</span>
          <span className="pk-dim-line" />
          <span className="pk-dim-tick" />
        </div>

        {/* Půdorysná mřížka na pozadí */}
        <div className="pk-blueprint" aria-hidden="true">
          <span className="pk-bp-box pk-bp-a"><i>skříň 240</i></span>
          <span className="pk-bp-box pk-bp-b"><i>linka 360</i></span>
          <span className="pk-bp-box pk-bp-c"><i>stůl 160</i></span>
        </div>
      </header>

      {/* ============ SEKCE 1 — Realizace ============ */}
      <section className="pk-sec" id="realizace" aria-labelledby="realizace-h">
        <div className="pk-sec-head">
          <h2 id="realizace-h">Co jsme naposledy vyrobili</h2>
          <p className="pk-sec-sub">
            Každý kus začíná metrem a tužkou u zákazníka doma. Tady je pár
            posledních zakázek z Plzně a okolí.
          </p>
        </div>

        <div className="pk-cards">
          {realizace.map((r) => (
            <article className="pk-card" key={r.tag}>
              <div className="pk-card-dim" aria-hidden="true">
                <span className="pk-dim-tick" />
                <span className="pk-dim-line" />
                <span className="pk-card-rozmer">{r.rozmer}</span>
                <span className="pk-dim-line" />
                <span className="pk-dim-tick" />
              </div>
              <h3>{r.tag}</h3>
              <p className="pk-card-misto">{r.misto}</p>
              <p className="pk-card-text">{r.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ SEKCE 2 — Jak pracujeme ============ */}
      <section className="pk-sec pk-sec-dark" id="jak" aria-labelledby="jak-h">
        <div className="pk-sec-head">
          <h2 id="jak-h">Od zaměření k montáži ve čtyřech krocích</h2>
          <p className="pk-sec-sub">
            Postup je vždycky stejný — proto víte dopředu, co se bude dít,
            kolik to bude stát a kdy budete mít hotovo.
          </p>
        </div>

        <ol className="pk-steps">
          {sluzby.map((s, i) => (
            <li className="pk-step" key={s.krok}>
              <span className="pk-step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pk-step-body">
                <h3>{s.krok}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pk-trust">
          <div className="pk-trust-item">
            <strong>30+ let</strong>
            <span>vyrábíme nábytek pro plzeňské domácnosti</span>
          </div>
          <div className="pk-trust-item">
            <strong>Vlastní dílna</strong>
            <span>výroba i montáž bez subdodavatelů</span>
          </div>
          <div className="pk-trust-item">
            <strong>Záruka usazení</strong>
            <span>po půl roce zdarma seřídíme dvířka a panty</span>
          </div>
        </div>
      </section>
    </main>
  )
}
