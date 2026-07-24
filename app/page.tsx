import { AiImage } from "./_ui";

type Pip = "red" | "sky" | "green" | "apricot" | "ink";

function Pips({ count, color }: { count: number; color: Pip }) {
  return (
    <span className="dm-pipgrid" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`dm-pip dm-pip--${color}`} />
      ))}
    </span>
  );
}

function Row({ count, color, total = 5 }: { count: number; color: Pip; total?: number }) {
  return (
    <span className="dm-tile-pips" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`dm-pip ${i < count ? `dm-pip--${color}` : "dm-pip--ghost"}`}
        />
      ))}
    </span>
  );
}

const kveten = [
  {
    day: 4,
    color: "red" as Pip,
    title: "Den hasičů",
    text: "Přijede skutečná cisterna, děti si zkusí hadici a prohlédnou výbavu zblízka.",
    tag: "Na zahradě školky",
  },
  {
    day: 7,
    color: "sky" as Pip,
    title: "Výlet do německé školky",
    text: "Dopolední návštěva u kamarádů za hranicí. Odjezd v 8:15, návrat na oběd.",
    tag: "Jen MŠ · svačina s sebou",
  },
  {
    day: 12,
    color: "green" as Pip,
    title: "Malí kuchaříčci",
    text: "Vaříme ve třídě — tenhle měsíc pomazánky a domácí pečivo. Zástěrku máme.",
    tag: "Obě třídy",
  },
  {
    day: 20,
    color: "apricot" as Pip,
    title: "Den včel",
    text: "Včelař z Vratislavic přinese prosklený úl a děti ochutnají med ze stáčení.",
    tag: "Projektový den",
  },
  {
    day: 29,
    color: "sky" as Pip,
    title: "Kamarádi z německé školky",
    text: "Návštěva u nás — společné dopoledne na zahradě, hry bez překladu.",
    tag: "Jazyk sousedů od začátku",
  },
  {
    day: 21,
    color: "red" as Pip,
    title: "Zápis do dětské skupiny Domíci",
    text: "Den otevřených dveří 15:00–17:00. Přijďte se podívat, jak u nás vypadá běžný den.",
    tag: "21. 5. · pro nové zájemce",
  },
];

export default function Page() {
  return (
    <main>
      <section className="dm-band dm-band--hero">
        <div className="dm-wrap">
          <div className="dm-top">
            <a className="dm-logo" href="#uvod">
              DOM<i>·</i>
              <span className="dm-logo-pip" aria-hidden="true" />
              <i>·</i>NO
              <span className="lv-sr-only" style={{ position: "absolute", left: "-9999px" }}>
                Domino
              </span>
            </a>
            <p className="dm-top-note">Mateřská škola · Liberec</p>
          </div>

          <div className="dm-hero-grid" id="uvod">
            <div className="dm-hero-text">
              <p className="dm-eyebrow">Soukromá školka a dětská skupina</p>
              <h1 className="dm-h1">
                Den ve školce <em>zapadá</em>
                <span className="dm-h1-2">jeden do druhého.</span>
              </h1>
              <p className="dm-lede">
                Dvě malé třídy, kuchařky, které znají jméno každého dítěte, a program,
                který má hlavu a patu od rána do odpoledne. V Liberci učíme děti
                němčinu hrou už od tří let — s kamarády ze školky za hranicí se
                navštěvujeme celý rok.
              </p>
            </div>

            <div className="dm-hero-photo">
              <AiImage
                src="/hero.webp"
                alt="Děti si na koberci ve třídě staví řadu z dřevěných domin"
              />
            </div>
          </div>

          <nav className="dm-fall" aria-label="Hlavní rozcestník">
            <a className="dm-tile" href="#program">
              <Row count={1} color="red" />
              <span>
                <span className="dm-tile-label">O nás</span>
                <span className="dm-tile-sub">Kdo děti učí a jak vypadá běžný den</span>
              </span>
            </a>
            <a className="dm-tile" href="#program">
              <Row count={2} color="apricot" />
              <span>
                <span className="dm-tile-label">Ke stažení</span>
                <span className="dm-tile-sub">Přihláška, školní řád, seznam příznaků</span>
              </span>
            </a>
            <a className="dm-tile" href="#program">
              <Row count={3} color="green" />
              <span>
                <span className="dm-tile-label">Jídelníček</span>
                <span className="dm-tile-sub">Na celý týden dopředu, vaříme z čerstvého</span>
              </span>
            </a>
            <a className="dm-tile" href="#skolka">
              <Row count={4} color="sky" />
              <span>
                <span className="dm-tile-label">Zápis 2026/27</span>
                <span className="dm-tile-sub">Kapacita MŠ je plná · Domíci berou nové</span>
              </span>
            </a>
            <div className="dm-tile dm-tile--info dm-tile--wide">
              <Row count={5} color="apricot" />
              <span>
                <span className="dm-hours">6:30 – 16:30</span>
                <span className="dm-tile-sub">Provozní doba po celý školní rok</span>
              </span>
            </div>
          </nav>
        </div>
      </section>

      <section className="dm-band" id="program">
        <div className="dm-wrap">
          <div className="dm-head">
            <h2 className="dm-h2">Květen ve školce</h2>
            <p className="dm-head-note">
              Puntíky na každé kartičce ukazují datum — pět puntíků, pátý den v měsíci.
              Program vyvěšujeme i v šatně u dveří.
            </p>
          </div>

          <div className="dm-chain">
            {kveten.map((a) => (
              <article className="dm-card" key={a.title}>
                <div className="dm-card-top">
                  <span className="dm-date">{a.day}. 5.</span>
                  <Pips count={a.day > 12 ? 6 : a.day} color={a.color} />
                </div>
                <div className="dm-card-body">
                  <h3 className="dm-card-title">{a.title}</h3>
                  <p className="dm-card-text">{a.text}</p>
                </div>
                <p className="dm-tag">{a.tag}</p>
              </article>
            ))}
          </div>

          <p className="dm-note">
            Pro školní rok 2026/2027 zápis do mateřské školy nevypisujeme — kapacita je
            plná. Kdyby se místo uvolnilo, napíšeme to sem jako první.
          </p>
        </div>
      </section>

      <section className="dm-band dm-band--trust" id="skolka">
        <div className="dm-wrap">
          <div className="dm-head">
            <h2 className="dm-h2">Malá školka, kde se všichni znají jménem</h2>
            <p className="dm-head-note">
              Fungujeme v Liberci od roku 2008. Dvě organizace pod jednou střechou:
              mateřská škola a dětská skupina Domíci.
            </p>
          </div>

          <div className="dm-trust">
            <div className="dm-photo-stack">
              <div className="dm-photo dm-photo--tall">
                <AiImage
                  src="/section-1.webp"
                  alt="Paní učitelka čte skupince dětí u nízkého stolku ve třídě"
                />
              </div>
              <div className="dm-photo">
                <AiImage
                  src="/section-2.webp"
                  alt="Zahrada školky s pískovištěm a dřevěnou prolézačkou"
                />
              </div>
            </div>

            <div>
              <dl className="dm-facts">
                <div className="dm-fact">
                  <dt>Provozní doba</dt>
                  <dd>
                    <strong>6:30 – 16:30</strong>
                    Po celý školní rok, bez poledního uzavření.
                  </dd>
                </div>
                <div className="dm-fact">
                  <dt>Ve třídě</dt>
                  <dd>
                    <strong>Dvě učitelky</strong>
                    Ráno i odpoledne, na malý počet dětí.
                  </dd>
                </div>
                <div className="dm-fact">
                  <dt>Němčina</dt>
                  <dd>
                    <strong>Od tří let</strong>
                    Projekt „Jazyk sousedů od začátku“ — hrou, ne drilem.
                  </dd>
                </div>
                <div className="dm-fact">
                  <dt>Stravné 2025</dt>
                  <dd>
                    <strong>96,50 Kč</strong>
                    Celodenní; polodenní 76,50 Kč. Vaříme na místě.
                  </dd>
                </div>
              </dl>

              <blockquote className="dm-quote">
                <span className="dm-quote-pips" aria-hidden="true">
                  <span className="dm-pip dm-pip--red" />
                  <span className="dm-pip dm-pip--sky" />
                  <span className="dm-pip dm-pip--green" />
                  <span className="dm-pip dm-pip--apricot" />
                </span>
                <p>
                  „Syn chodil do Domina tři roky. Nejvíc si cením toho, že jsme vždycky
                  věděli dopředu, co se bude dít — program na měsíc visel v šatně a
                  sedělo to do puntíku. A ten výlet za kamarády do Německa si pamatuje
                  dodnes.“
                </p>
                <footer>Petra H., maminka, Liberec – Vratislavice</footer>
              </blockquote>

              <a className="dm-btn" href="tel:—">
                <span className="dm-pip" aria-hidden="true" />
                Zavolat do školky
              </a>

              <div className="dm-contact">
                <span>
                  <b>Telefon</b> —
                </span>
                <span>
                  <b>E-mail</b> —
                </span>
                <span>
                  <b>Adresa</b> Ukázková 123, Liberec
                </span>
              </div>

              <p className="dm-price">
                <span>Přihlášku i školní řád najdete v sekci Ke stažení.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
