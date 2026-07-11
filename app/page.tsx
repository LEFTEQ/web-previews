import type { CSSProperties } from "react";

const ceny = [
  { name: "Mléko polotučné", unit: "1 l, čerstvé", cena: "18", hal: "90", badge: "Denně" },
  { name: "Vejce M", unit: "10 ks, z podestýlky", cena: "46", hal: "90", badge: null },
  { name: "Rohlík", unit: "1 ks, pečeme přes den", cena: "3", hal: "50", badge: "Čerstvé" },
  { name: "Máslo", unit: "250 g, české", cena: "49", hal: "90", badge: null },
  { name: "Banány", unit: "1 kg", cena: "34", hal: "90", badge: null },
  { name: "Plzeň 12°", unit: "0,5 l, vychlazená", cena: "32", hal: "90", badge: "Nonstop" },
  { name: "Minerálka", unit: "1,5 l, perlivá", cena: "19", hal: "90", badge: null },
  { name: "Bageta se šunkou", unit: "1 ks, děláme na místě", cena: "64", hal: "90", badge: "Rychlovka" },
];

const fakta = [
  { n: "01", h: "Otevřeno 24 hodin, 7 dní v týdnu", s: "Ať máte noční směnu nebo vás v neděli ráno zradí lednice — přijďte kdykoli." },
  { n: "02", h: "Bankomat přímo v prodejně", s: "Vyberete hotovost a hned nakoupíte. Platit můžete i kartou a mobilem." },
  { n: "03", h: "Personál, který vás zná", s: "Stálý tým, který poradí, kde co je, a nechá vám i láhev stranou." },
  { n: "04", h: "Na rohu u náměstí Míru", s: "Francouzská × Uruguayská, pár kroků od metra i tramvaje na Vinohradech." },
];

export default function Page() {
  return (
    <>
      <header className="vv-top">
        <div className="vv-wrap vv-top-in">
          <div className="vv-mark">
            Potraviny <b>Vávra</b>
            <span className="vv-tag">Nonstop · Praha 2</span>
          </div>
          <nav className="vv-nav" aria-label="Hlavní">
            <a href="#sortiment">Sortiment</a>
            <a href="#tady">Kde nás najdete</a>
            <a className="vv-nav-lang" href="#">CZ / EN / IT</a>
            <a className="vv-call" href="tel:+420222510000" aria-label="Zavolat do prodejny">
              <span aria-hidden="true">☎</span> Zavolat
            </a>
          </nav>
        </div>
      </header>

      <section className="vv-hero">
        <img className="vv-hero-img" src="/hero.webp" alt="Prodejna Potraviny Vávra na rohu Francouzské a Uruguayské v Praze, večer" />
        <div className="vv-hero-shade" />
        <div className="vv-wrap vv-hero-in">
          <div className="vv-open vv-rise vv-d1">
            <span className="vv-dot" aria-hidden="true" />
            Právě teď otevřeno
          </div>
          <h1 className="vv-h1 vv-rise vv-d2">
            <span className="vv-247">Nonstop</span>
            potraviny na <em>rohu</em> Vinohrad.
          </h1>
          <p className="vv-lead vv-rise vv-d3">
            Uprostřed Prahy, na rohu Francouzské a Uruguayské kousek od náměstí
            Míru. Široký výběr, poctivé ceny, milá obsluha a bankomat — ve dne
            v noci, celý rok.
          </p>
          <div className="vv-hero-cta vv-rise vv-d4">
            <a className="vv-btn vv-btn-red" href="tel:+420222510000">
              <span aria-hidden="true">☎</span> Zavolat do prodejny
            </a>
            <a className="vv-btn vv-btn-ghost" href="#tady">Ukázat cestu</a>
          </div>

          <div className="vv-clock vv-rise vv-d4" aria-label="Otevírací doba">
            <div><div className="vv-hr">Po–Ne</div><div className="vv-lb">Bez výjimky</div></div>
            <div><div className="vv-hr">0–24</div><div className="vv-lb">Nonstop otevřeno</div></div>
            <div><div className="vv-hr">Karta</div><div className="vv-lb">I hotovost z bankomatu</div></div>
            <div><div className="vv-hr">CZ·EN·IT</div><div className="vv-lb">Domluvíme se</div></div>
          </div>
        </div>
      </section>

      <section className="vv-sec" id="sortiment">
        <div className="vv-wrap">
          <div className="vv-eyebrow">Cenovky z regálu</div>
          <div className="vv-price-head">
            <div>
              <h2 className="vv-h2">Základ, co má sedět, sedí.</h2>
              <p className="vv-sub">
                Nejde o výprodej — jsou to ceny, které u nás najdete každý den.
                Pečivo pečeme přes den, bagety děláme na místě, chlazené držíme
                doplněné i ve tři ráno.
              </p>
            </div>
            <div className="vv-price-note">Ceny platné v prodejně, orientačně</div>
          </div>

          <div className="vv-tags">
            {ceny.map((c) => (
              <article className="vv-tag2" key={c.name}>
                {c.badge && <span className="vv-badge">{c.badge}</span>}
                <div className="vv-name">{c.name}</div>
                <div className="vv-unit">{c.unit}</div>
                <div className="vv-cena">
                  {c.cena}<small>,{c.hal} Kč</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vv-about" id="tady">
        <div className="vv-wrap">
          <div className="vv-grid2">
            <div>
              <div className="vv-eyebrow">Proč právě k nám</div>
              <h2>Krám, který zavře, až když zhasne celá Praha.</h2>
              <p>
                Potraviny Vávra tu stojí pro sousedy z Vinohrad i pro každého,
                kdo zrovna něco potřebuje mimo běžnou dobu. Malý obchod
                s pořádkem v regálech a lidmi, kteří vás poznají.
              </p>

              <ul className="vv-facts">
                {fakta.map((f) => (
                  <li key={f.n}>
                    <span className="vv-num">{f.n}</span>
                    <span className="vv-txt">
                      <strong>{f.h}</strong>
                      <span>{f.s}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="vv-here">
                <div className="vv-adr">Francouzská × Uruguayská, Praha 2</div>
                <div className="vv-metro">2 minuty od stanice metra Náměstí Míru (A)</div>
                <a className="vv-here-cta" href="tel:+420222510000">
                  <span aria-hidden="true">☎</span> Zavolat nebo se zeptat na cestu
                </a>
              </div>
            </div>

            <img className="vv-about-img" src="/section-1.webp" alt="Interiér prodejny Potraviny Vávra s doplněnými regály" />
          </div>
        </div>
      </section>
    </>
  );
}
