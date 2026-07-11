import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      lane: "1",
      title: "Digitální tisk",
      desc: "Malonáklady na vlastních strojích. Od jednoho letáku po sto katalogů — hotovo, než dopijete kávu.",
      tag: "start",
    },
    {
      lane: "2",
      title: "Velkoformát",
      desc: "Plakáty, plachty, samolepky, roll-upy. Signmaking a polepy výloh, které jsou vidět přes celou ulici.",
      tag: "tempo",
    },
    {
      lane: "3",
      title: "Grafika a sazba",
      desc: "Logo, vizitky, sazba brožur. Dáme tomu tvar, co drží pohromadě — a připravíme čistá data pro tisk.",
      tag: "finiš",
    },
    {
      lane: "4",
      title: "Dokončení",
      desc: "Vazby, laminace, gravírování, razítka a ofset. Všechno pod jednou střechou, žádné přebíhání po Praze.",
      tag: "cíl",
    },
  ];

  const priceRows = [
    { fmt: "A4", bw: "1 Kč", color: "od 5 Kč" },
    { fmt: "A3", bw: "2 Kč", color: "od 10 Kč" },
    { fmt: "A2", bw: "18 Kč", color: "od 55 Kč" },
  ];

  return (
    <main className="sp">
      <header className="sp-top">
        <a className="sp-mark" href="#" aria-label="Sprinter Studio — domů">
          <span className="sp-mark-word">Sprinter</span>
          <span className="sp-mark-sub">STUDIO · TISK V RYCHLOSTI SPRINTU</span>
        </a>
        <a className="sp-call" href="tel:+420777224664">
          <span className="sp-call-num">777 224 664</span>
          <span className="sp-call-label">Zavolat do studia</span>
        </a>
      </header>

      <section className="sp-hero" aria-labelledby="hero-h">
        <div className="sp-hero-copy">
          <p className="sp-eyebrow">Copycentrum &amp; tiskárna · Praha</p>
          <h1 id="hero-h" className="sp-hero-h">
            Odstartujeme,<br />
            <span className="sp-hero-accent">než stačíte</span><br />
            říct „hotovo“.
          </h1>
          <p className="sp-hero-lead">
            Tiskneme hbitě, na vlastních strojích a v prostoru, kam se můžete přijít
            podívat. Rychlé vyřízení, férová cena a práce bez chyb — na Praze 1 až 4
            to k nám máte kousek.
          </p>
          <div className="sp-hero-actions">
            <a className="sp-btn" href="tel:+420777224664">Zavolat a zadat zakázku</a>
            <a className="sp-link" href="#cenik">Podívat se na ceník →</a>
          </div>
          <ul className="sp-stats">
            <li><b>1 den</b><span>běžný spěch stihneme</span></li>
            <li><b>P1–P4</b><span>máte to k nám blízko</span></li>
            <li><b>vlastní</b><span>stroje, žádné čekání</span></li>
          </ul>
        </div>
        <div className="sp-hero-media">
          <img
            src="/hero.webp"
            alt="Tiskařský provoz Sprinter Studia — stroje připravené k rozjezdu zakázky"
            className="sp-hero-img"
          />
          <span className="sp-hero-badge" aria-hidden="true">START</span>
        </div>
      </section>

      <section className="sp-lanes" aria-labelledby="lanes-h">
        <div className="sp-lanes-head">
          <p className="sp-eyebrow sp-eyebrow--dark">Co u nás projde tratí</p>
          <h2 id="lanes-h" className="sp-h2">Čtyři dráhy, jedna cílová páska</h2>
          <p className="sp-sub">
            Od nápadu po hotový výtisk zvládneme celou trať pod jednou střechou —
            nemusíte přebíhat mezi grafikem, tiskárnou a knihařem.
          </p>
        </div>
        <ol className="sp-track">
          {services.map((s) => (
            <li className="sp-lane" key={s.lane}>
              <div className="sp-lane-num">
                <span className="sp-lane-digit">{s.lane}</span>
                <span className="sp-lane-tag">{s.tag}</span>
              </div>
              <div className="sp-lane-body">
                <h3 className="sp-lane-title">{s.title}</h3>
                <p className="sp-lane-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sp-about" aria-labelledby="about-h">
        <div className="sp-about-media">
          <img
            src="/section-1.webp"
            alt="Zblízka detail tisku ve Sprinter Studiu"
            className="sp-about-img"
          />
        </div>
        <div className="sp-about-copy">
          <p className="sp-eyebrow sp-eyebrow--dark">To je jasný… Sprinter Studio</p>
          <h2 id="about-h" className="sp-h2">
            Tisk v rychlosti sprintu — a v pěkném prostředí
          </h2>
          <p className="sp-sub">
            Praha ukrývá desítky tiskáren. My sázíme na tři věci, které od dobré
            tiskárny čekáte: rychlé vyřízení, příznivou cenu a spolehlivou práci bez
            reklamací. A když k tomu zvládneme i vazbu, razítka, grafiku nebo výrobu
            reklamy — jenom dobře.
          </p>
          <div className="sp-skills">
            <div>
              <h4 className="sp-skills-h">Co umíme</h4>
              <ul className="sp-skills-list">
                <li>Kopírování a skenování</li>
                <li>Laminace</li>
                <li>Kvalitní vazby projektů</li>
                <li>Výroba razítek</li>
                <li>Gravírování</li>
              </ul>
            </div>
            <div>
              <h4 className="sp-skills-h">Co umíme ještě líp</h4>
              <ul className="sp-skills-list">
                <li>Malonákladový digitální tisk</li>
                <li>Velkoformátový tisk</li>
                <li>Grafické práce a sazba</li>
                <li>Signmaking</li>
                <li>Ofsetový tisk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cenik" className="sp-price" aria-labelledby="price-h">
        <div className="sp-price-copy">
          <p className="sp-eyebrow">Základní ceník copycentra</p>
          <h2 className="sp-h2 sp-h2--light" id="price-h">
            Ceny, které nemusíte luštit
          </h2>
          <p className="sp-sub sp-sub--light">
            Nejběžnější formáty za ceny za stránku. Na větší náklady, speciální papíry
            a dokončení vám rádi spočítáme kalkulaci — stačí zavolat.
          </p>
          <a className="sp-btn sp-btn--ghost" href="tel:+420777224664">
            Chci kalkulaci na míru
          </a>
          <img
            src="/section-2.webp"
            alt="Vzorník výtisků a formátů ze Sprinter Studia"
            className="sp-price-img"
          />
        </div>
        <table className="sp-table">
          <caption className="sp-table-cap">Cena za stránku, tisk na počkání</caption>
          <thead>
            <tr>
              <th scope="col">Formát</th>
              <th scope="col">Černobíle</th>
              <th scope="col">Barevně</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((r) => (
              <tr key={r.fmt}>
                <th scope="row" className="sp-fmt">{r.fmt}</th>
                <td>{r.bw}</td>
                <td>{r.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
void ({} as CSSProperties);
