import type { CSSProperties } from "react";

const chips = [
  { code: "RAL 3020", name: "Signální červená", hex: "#C1121C" },
  { code: "RAL 5017", name: "Dopravní modrá", hex: "#1E3F66" },
  { code: "RAL 9005", name: "Černá mat", hex: "#0E0E10" },
  { code: "RAL 9010", name: "Čistě bílá", hex: "#F2F0EB" },
  { code: "RAL 6018", name: "Žlutozelená", hex: "#57A639" },
  { code: "RAL 1023", name: "Dopravní žlutá", hex: "#EFA724" },
];

const kroky = [
  {
    n: "01",
    t: "Změření odstínu",
    d: "Spektrofotometrem odečteme přesný odstín přímo z vašeho laku — i po letech na slunci. Barvu namícháme na míru, ne od oka.",
  },
  {
    n: "02",
    t: "Příprava a tmelení",
    d: "Broušení, tmelení a plnič. Bez poctivé přípravy se každá vada po nástřiku vrátí. Tady se rozhoduje o výsledku.",
  },
  {
    n: "03",
    t: "Lakování v kabině",
    d: "Nástřik v prachu zbavené lakovací kabině s řízeným prouděním a vytvrzením. Základ, barva, dva laky.",
  },
  {
    n: "04",
    t: "Leštění a předání",
    d: "Odstranění poslední pomerančové kůry, leštění do hloubky a kontrola pod denním i bodovým světlem.",
  },
];

const sluzby = [
  {
    t: "Celolak i díl",
    d: "Od jednoho blatníku po kompletní přelak karoserie. Metalíza, perleť i jednovrstvá barva.",
  },
  {
    t: "Oprava po nehodě",
    d: "Řešení pojistných událostí, srovnání plechu a lokální nástřik s neviditelným přechodem.",
  },
  {
    t: "Prodejna barev",
    d: "Namícháme autolak, sprej i plechovku na míru. Základy, laky, tmely, brusivo — pro dílny i kutily.",
  },
];

export default function Page() {
  return (
    <main className="ac">
      <header className="ac-nav" aria-label="Hlavní">
        <a className="ac-logo" href="#" aria-label="AUTOCOLOR, autolakovna Praha">
          <span className="ac-logo-mark" aria-hidden="true">
            <span className="ac-logo-drop" />
          </span>
          <span className="ac-logo-word">
            AUTO<span className="ac-logo-color">COLOR</span>
          </span>
        </a>
        <a className="ac-tel" href="tel:+420237837336">
          +420 237 837 336
        </a>
      </header>

      <section className="ac-hero">
        <div className="ac-hero-media">
          <img
            src="/hero.webp"
            alt="Karoserie automobilu při nástřiku v lakovací kabině AUTOCOLOR"
            width={1600}
            height={1000}
          />
        </div>
        <div className="ac-hero-text">
          <p className="ac-eyebrow">Autolakovna · Praha 5 – Stodůlky</p>
          <h1 className="ac-h1">
            Trefíme <span className="ac-under">přesně tu barvu</span>, kterou vůz vyjel z fabriky.
          </h1>
          <p className="ac-lead">
            Změříme odstín spektrofotometrem, namícháme ho na gram přesně a nastříkáme
            v čisté kabině. Škrábanec, celolak i oprava po nehodě — bez viditelných přechodů.
          </p>
          <div className="ac-hero-cta">
            <a className="ac-btn" href="tel:+420237837336">
              Zavolat do lakovny
            </a>
            <a className="ac-btn ac-btn-ghost" href="#nabidka">
              Naše služby
            </a>
          </div>
        </div>

        <div className="ac-swatches" aria-label="Ukázka odstínů, které mícháme">
          {chips.map((c) => (
            <div
              className="ac-swatch"
              key={c.code}
              style={{ "--c": c.hex } as CSSProperties}
            >
              <span className="ac-swatch-fill" aria-hidden="true" />
              <span className="ac-swatch-code">{c.code}</span>
              <span className="ac-swatch-name">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ac-section" id="nabidka">
        <div className="ac-sec-head">
          <p className="ac-eyebrow">Co u nás pořídíte</p>
          <h2 className="ac-h2">Lakovna i míchárna pod jednou střechou</h2>
        </div>

        <div className="ac-split">
          <div className="ac-split-media">
            <img
              src="/section-1.webp"
              alt="Broušení a příprava karoserie před lakováním"
              width={1200}
              height={900}
            />
          </div>
          <div className="ac-services">
            {sluzby.map((s, i) => (
              <article className="ac-service" key={s.t}>
                <span className="ac-service-idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ac-section ac-dark">
        <div className="ac-sec-head">
          <p className="ac-eyebrow ac-eyebrow-light">Jak vzniká výsledek</p>
          <h2 className="ac-h2">Čtyři kroky od škrábance k lesku</h2>
        </div>

        <ol className="ac-steps">
          {kroky.map((k) => (
            <li className="ac-step" key={k.n}>
              <span className="ac-step-n">{k.n}</span>
              <h3>{k.t}</h3>
              <p>{k.d}</p>
            </li>
          ))}
        </ol>

        <div className="ac-trust">
          <div className="ac-trust-media">
            <img
              src="/section-2.webp"
              alt="Hotový lak s hlubokým leskem po předání vozu"
              width={1200}
              height={900}
            />
          </div>
          <div className="ac-trust-text">
            <h3>Praha 5 vám doveze vůz, my vrátíme barvu.</h3>
            <p>
              V dílně ve Stodůlkách děláme autolaky poctivě už léta. Nemícháme od oka —
              každý odstín projde spektrofotometrem, takže se lokální oprava ztratí
              v původním laku. Přijeďte se poradit, odstín změříme na počkání.
            </p>
            <dl className="ac-facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Podohradská 1720/21, 155 00 Praha 5 – Stodůlky</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420237837336">+420 237 837 336</a>
                </dd>
              </div>
              <div>
                <dt>Míchárna barev</dt>
                <dd>Autolak, sprej i plechovka na míru — pro dílny i domácí kutily</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
