import { AiImage } from "./_ui";

const sluzby = [
  {
    odd: "ODD. BARVY",
    nadpis: "Barvy, laky, lazury, tmely a lepidla",
    text: "Od základních nátěrů po designové odstíny. Namícháme odstín na počkání a poradíme, čím natřít dřevo, plech i zeď.",
  },
  {
    odd: "ODD. SPOJOVAT",
    nadpis: "Spojovací materiál a nářadí",
    text: "Hřebíky, vruty, šrouby, hmoždinky a ruční nářadí. Spojíte s námi jakýkoli materiál — a když nevíte který, ukážete a my najdeme.",
  },
  {
    odd: "ODD. RADA",
    nadpis: "Upřímná rada a přístup jako dřív",
    text: "Ve velkém obchoďáku najdete hodně. Péči a odbornou radu, s níž odejdete s tím správným kusem, ale u nás.",
  },
];

const hodiny = [
  ["Pondělí–Čtvrtek", "8:00–17:00"],
  ["Pátek", "8:00–16:30"],
  ["Sobota", "8:00–11:30"],
  ["Neděle", "zavřeno"],
];

function Plate({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`h-plate ${className}`}>
      <span className="h-screw h-screw--tl" aria-hidden="true" />
      <span className="h-screw h-screw--tr" aria-hidden="true" />
      <span className="h-screw h-screw--bl" aria-hidden="true" />
      <span className="h-screw h-screw--br" aria-hidden="true" />
      <div className="h-plate-in">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="h-main">
      <div className="h-topbar">
        <div className="h-wordmark">
          <span className="h-wordmark-a">HELS</span>
          <span className="h-wordmark-b">MAT</span>
        </div>
        <p className="h-topmeta">ŽELEZÁŘSTVÍ&nbsp;·&nbsp;PRAHA&nbsp;·&nbsp;OD&nbsp;1994</p>
      </div>

      <section className="h-hero" aria-labelledby="h-hero-title">
        <div className="h-hero-text">
          <p className="h-eyebrow">BARVY&nbsp;·&nbsp;LAKY&nbsp;·&nbsp;SPOJOVACÍ&nbsp;MATERIÁL</p>
          <h1 id="h-hero-title" className="h-h1">
            Udeříme hřebíček<br />na hlavičku.
          </h1>
          <div className="h-brush" aria-hidden="true" />
          <p className="h-lede">
            Železářství na rohu, kde vám rádi poradí. Přijdete s otázkou nebo
            starým kusem v kapse — odejdete s tím správným šroubkem, barvou i
            postupem. Jako dřív.
          </p>
          <a className="h-cta" href="tel:777111222">
            Zavolat 777&nbsp;111&nbsp;222
          </a>
        </div>
        <div className="h-hero-media">
          <Plate className="h-plate--media">
            <AiImage src="/hero.webp" alt="Pult železářství Hels Mat s regály plnými barev, nářadí a spojovacího materiálu" className="h-media-img" />
          </Plate>
        </div>
      </section>

      <section className="h-section h-split" aria-labelledby="h-sluzby-title">
        <div className="h-split-label">
          <p className="h-kicker">NABÍDKA</p>
          <h2 id="h-sluzby-title" className="h-h2">Co u nás pořídíte</h2>
          <p className="h-label-note">
            Tři regály, jedna zásada: raději půl hodiny poradit než prodat, co se
            nehodí.
          </p>
          <Plate className="h-plate--photo">
            <AiImage src="/section-1.webp" alt="Police s plechovkami barev, laků a lazur v železářství" className="h-media-img" />
          </Plate>
        </div>
        <div className="h-fold" aria-hidden="true" />
        <div className="h-split-body">
          {sluzby.map((s) => (
            <Plate key={s.odd}>
              <p className="h-odd">{s.odd}</p>
              <h3 className="h-h3">{s.nadpis}</h3>
              <p className="h-body">{s.text}</p>
            </Plate>
          ))}
        </div>
      </section>

      <section className="h-section h-split" aria-labelledby="h-onas-title">
        <div className="h-split-label">
          <p className="h-kicker">O NÁS</p>
          <h2 id="h-onas-title" className="h-h2">Přes 30 let na stejném místě</h2>
          <p className="h-label-note">
            Dům s obchodem od roku 1902 — a od roku 1994 v něm najdete nás.
          </p>
          <Plate className="h-plate--photo">
            <AiImage src="/section-2.webp" alt="Vchod do železářství Hels Mat se smaltovou cedulí" className="h-media-img" />
          </Plate>
        </div>
        <div className="h-fold" aria-hidden="true" />
        <div className="h-split-body">
          <Plate>
            <p className="h-odd">TRADICE · OD 1902</p>
            <h3 className="h-h3">Navazujeme na víc než sto let obchodu</h3>
            <p className="h-body">
              V domě, kde nás najdete, byl v roce 1902 koloniál, později obchod s
              lahůdkami. Od roku 1994 je tu železářství Hels Mat. Držíme se toho,
              co tomuhle místu odjakživa fungovalo — pečlivé péče o zákazníka a
              rady, na kterou se dá spolehnout.
            </p>
          </Plate>

          <div className="h-plate-row">
            <Plate>
              <p className="h-odd">OTEVÍRACÍ DOBA</p>
              <dl className="h-hours">
                {hodiny.map(([den, cas]) => (
                  <div className="h-hours-row" key={den}>
                    <dt>{den}</dt>
                    <dd>{cas}</dd>
                  </div>
                ))}
              </dl>
            </Plate>
            <Plate>
              <p className="h-odd">PŘIJĎTE NA NÁVŠTĚVU</p>
              <address className="h-contact">
                <span className="h-contact-addr">Ukázková 123, Praha</span>
                <a href="tel:777111222">tel:&nbsp;777&nbsp;111&nbsp;222</a>
                <a href="mailto:info@example.cz">info@example.cz</a>
              </address>
            </Plate>
          </div>
        </div>
      </section>
    </main>
  );
}
