import type { CSSProperties } from "react";

const orders = [
  {
    code: "WO-01 · DIAGNOSTIKA",
    time: "do 60 min",
    title: "Načtení a čtení chyb",
    desc: "Napojíme se na řídicí jednotku a řekneme vám rovnou, co hlásí — bez odhadování a bez „zkusíme to vyměnit“.",
    items: ["Diagnostika motoru a emisí", "Kontrolka motoru / EPC / ESP", "Protokol s vysvětlením srozumitelně"],
  },
  {
    code: "WO-02 · SERVIS",
    time: "na počkání",
    title: "Údržba a opravy",
    desc: "Pravidelný servis, brzdy, rozvody, tlumiče i klimatizace. Ceny řekneme dopředu a bez práce navíc nic neděláme.",
    items: ["Výměna oleje a filtrů", "Brzdy, rozvody, spojka", "Servis klimatizace a plnění"],
  },
  {
    code: "WO-03 · PŘÍPRAVA STK",
    time: "1 pracovní den",
    title: "Příprava na STK",
    desc: "Projedeme vozidlo bod po bodu jako na technické. Když něco neprojde u nás, spravíme to dřív, než na stanici.",
    items: ["Kontrola podle bodů STK", "Seřízení světel a geometrie", "Objednáme termín na stanici"],
  },
];

const facts = [
  { n: "12", u: "+", l: "let v provozu v Brně" },
  { n: "48", u: "h", l: "průměrné vyřízení opravy" },
  { n: "9", u: "z 10", l: "zákazníků se vrací" },
  { n: "1", u: ":1", l: "cena řečená předem" },
];

export default function Page() {
  return (
    <main>
      <header className="cm-top">
        <div className="cm-top-inner">
          <span className="cm-mark">
            CAR<span className="plus">·</span>MEDIC
            <span className="tag">AUTOSERVIS BRNO</span>
          </span>
          <span className="cm-top-meta">
            <span>Příkop 838/6, <strong>Zábrdovice, Brno</strong></span>
            <span>Po–Pá <strong>7:30–17:00</strong></span>
          </span>
        </div>
      </header>

      <section className="cm-hero" aria-label="Úvod">
        <div className="cm-hero-grid">
          <div className="cm-hero-left">
            <span className="cm-hero-eyebrow reveal">Diagnostika · Servis · Příprava na STK</span>
            <h1 className="reveal d1">
              Auto vám
              <br />
              <span className="em">uzdravíme</span>,
              <br />
              ne odhadneme.
            </h1>
            <p className="cm-hero-lead reveal d2">
              V CARMEDIC nejdřív načteme, co vozidlo doopravdy hlásí, a teprve pak sáhneme po nářadí. Cenu řekneme dopředu — žádné práce navíc bez vašeho slova.
            </p>
            <div className="cm-hero-actions reveal d3">
              <a className="cm-btn" href="mailto:info@carmedic.cz?subject=Objednání%20do%20servisu">Objednat do servisu</a>
              <a className="cm-btn cm-btn-ghost" href="#sluzby">Co umíme opravit</a>
            </div>
          </div>
          <div className="cm-hero-right">
            <img src="/hero.webp" alt="Mechanik CARMEDIC při diagnostice vozidla v servisu v Brně" />
          </div>
        </div>
        <div className="cm-ticker" aria-hidden="true">
          <div className="cm-ticker-inner">
            <span className="cm-ticker-item"><span className="dot" />STAV DÍLNY: <strong>otevřeno</strong></span>
            <span className="cm-ticker-item">DIAGNOSTIKA: <strong>volný termín zítra</strong></span>
            <span className="cm-ticker-item">IČO <strong>05894204</strong></span>
          </div>
        </div>
      </section>

      <section id="sluzby" aria-labelledby="sluzby-h">
        <div className="cm-wrap">
          <div className="cm-shead">
            <span className="kick"><span className="num">01</span> Zakázkový list</span>
            <h2 id="sluzby-h">Tři věci, kvůli kterým k nám lidé jezdí</h2>
            <p>
              Každou zakázku vedeme jako protokol: co jsme naměřili, co to znamená a kolik to stojí. Vy podepisujete až rozpočet, který dává smysl.
            </p>
          </div>
          <div className="cm-orders">
            {orders.map((o, i) => (
              <article className={`cm-order reveal d${i + 1}`} key={o.code}>
                <div className="cm-order-top">
                  <span className="cm-order-code">{o.code}</span>
                  <span className="cm-order-time">{o.time}</span>
                </div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <ul>
                  {o.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cm-trust" aria-labelledby="onas-h">
        <div className="cm-wrap">
          <div className="cm-shead">
            <span className="kick"><span className="num">02</span> Kdo vám do auta sahá</span>
            <h2 id="onas-h">Malá dílna na Příkopě, kde poznáte mechanika jménem</h2>
            <p>
              CARMEDIC vede PhDr. Ing. Martin Hrdý. Nejsme řetězec — auto vám opravuje ten, kdo vám ho i předává a vysvětlí, co se dělo pod kapotou.
            </p>
          </div>
          <div className="cm-trust-grid">
            <div className="cm-trust-media">
              <img src="/section-1.webp" alt="Zvednuté vozidlo na zvedáku v dílně CARMEDIC v Brně" />
              <span className="plate">Brno · Zábrdovice</span>
            </div>
            <div>
              <div className="cm-facts">
                {facts.map((f) => (
                  <div className="cm-fact" key={f.l}>
                    <div className="n">
                      {f.n}
                      <span className="u">{f.u}</span>
                    </div>
                    <div className="l">{f.l}</div>
                  </div>
                ))}
              </div>
              <blockquote className="cm-quote">
                <p>„Řekli mi rovnou, co je špatně a co počká. Nic navíc mi nenamontovali — a to je dnes vzácnost.“</p>
                <cite>— Jana K., zákaznice servisu, Brno-sever</cite>
              </blockquote>
              <div className="cm-hero-actions" style={{ marginTop: 26 } as CSSProperties}>
                <a className="cm-btn" href="mailto:info@carmedic.cz?subject=Dotaz%20na%20opravu">Napsat na info@carmedic.cz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
