import type { CSSProperties } from "react";

export default function Page() {
  const chatky = [
    { c: "34", l: "chatek v areálu" },
    { c: "180", l: "lůžek v chatkách" },
    { c: "60", l: "míst pro karavany" },
    { c: "80", l: "elektrických přípojek" },
  ];

  const zazemi = [
    {
      n: "01",
      t: "Chatky a stany",
      d: "Dřevěné chatky s lůžky pro celou rodinu i travnaté plochy pro vlastní stan. Sprchy a sociální zázemí ve vytápěné budově dostupné po celý rok.",
    },
    {
      n: "02",
      t: "Karavany a obytná auta",
      d: "Šedesát parkovacích míst se zpevněným podložím a osmdesát elektrických přípojek. Přijeďte s karavanem klidně i v zimě — provoz běží celoročně.",
    },
    {
      n: "03",
      t: "Restaurace a odpočinek",
      d: "Vlastní restaurace, free WiFi, dvě sportoviště, dětské hřiště a vodní nádrž přímo v areálu. Vaření řešit nemusíte, večeře je pár kroků od chatky.",
    },
  ];

  const okoli = [
    { t: "Ještěd", d: "vysílač a rozhledna nad městem, 15 min autem" },
    { t: "iQLANDIA", d: "science centrum pro děti i dospělé" },
    { t: "ZOO a Botanická zahrada", d: "nejstarší zoo v Česku" },
    { t: "Aquapark Liberec", d: "celoroční koupání za každého počasí" },
    { t: "Jizerské hory, Bedřichov", d: "turistika v létě, běžky v zimě" },
    { t: "Zámek Sychrov", d: "výlet za historií kousek od kempu" },
  ];

  return (
    <main className="kmp">
      <header className="kmp-nav">
        <a className="kmp-mark" href="#uvod" aria-label="Autokemp Liberec — úvod">
          <span className="kmp-mark-peg" aria-hidden="true" />
          <span className="kmp-mark-text">
            Autokemp<em>Liberec</em>
          </span>
        </a>
        <nav className="kmp-links" aria-label="Hlavní navigace">
          <a href="#zazemi">Zázemí</a>
          <a href="#okoli">Okolí</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="kmp-tel" href="tel:+420608300150">
          +420 608 300 150
        </a>
      </header>

      <section className="kmp-hero" id="uvod">
        <img
          className="kmp-hero-img"
          src="/hero.webp"
          alt="Autokemp Liberec — chatky a plochy pro karavany v zeleni pod Ještědem"
        />
        <div className="kmp-hero-scrim" aria-hidden="true" />
        <div className="kmp-hero-inner">
          <p className="kmp-eyebrow">Staré Pavlovice · Liberec · 50.7836 N, 15.0436 E</p>
          <h1 className="kmp-h1">
            Zaparkujte<br />
            <span className="kmp-h1-accent">pod&nbsp;Ještědem.</span>
          </h1>
          <p className="kmp-lede">
            Rekreační areál s chatkami, plochami pro stany a stáním pro karavany —
            s vlastní restaurací a otevřeno celý rok. Deset minut od centra Liberce,
            hory a zoo na dosah.
          </p>
          <div className="kmp-cta-row">
            <a className="kmp-btn" href="tel:+420608300150">
              Zavolat a rezervovat chatku
            </a>
            <a className="kmp-btn kmp-btn-ghost" href="#zazemi">
              Co v kempu najdete
            </a>
          </div>
          <dl className="kmp-stats" aria-label="Kapacita kempu">
            {chatky.map((s) => (
              <div className="kmp-stat" key={s.l}>
                <dt>{s.c}</dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="kmp-sec" id="zazemi">
        <div className="kmp-sec-head">
          <p className="kmp-eyebrow kmp-eyebrow-dark">Celoroční provoz</p>
          <h2 className="kmp-h2">Ať přijedete jakkoliv, máme kam vás uložit</h2>
        </div>
        <ol className="kmp-cards">
          {zazemi.map((z) => (
            <li className="kmp-card" key={z.n}>
              <span className="kmp-card-n" aria-hidden="true">
                {z.n}
              </span>
              <h3>{z.t}</h3>
              <p>{z.d}</p>
            </li>
          ))}
        </ol>
        <div className="kmp-tags" aria-label="Vybavení areálu">
          {[
            "vytápěná budova",
            "1 restaurace",
            "2 sportoviště",
            "dětské hřiště",
            "vodní nádrž",
            "free WiFi v restauraci",
          ].map((t) => (
            <span className="kmp-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="kmp-okoli" id="okoli">
        <div className="kmp-okoli-media">
          <img
            className="kmp-okoli-img"
            src="/section-2.webp"
            alt="Areál Autokempu Liberec obklopený lesy Jizerských hor"
          />
        </div>
        <div className="kmp-okoli-body">
          <p className="kmp-eyebrow kmp-eyebrow-dark">Základna pro výlety</p>
          <h2 className="kmp-h2">Vy spíte tady, kraj máte za rohem</h2>
          <p className="kmp-okoli-lede">
            Bus 12 zastavuje kousek od brány, autem jste v centru za pár minut.
            Odsud vyrazíte na hory, do zoo i za památkami — a večer se vrátíte
            k restauraci v kempu.
          </p>
          <ul className="kmp-okoli-list">
            {okoli.map((o) => (
              <li key={o.t}>
                <span className="kmp-okoli-dot" aria-hidden="true" />
                <div>
                  <strong>{o.t}</strong>
                  <span>{o.d}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="kmp-info" id="kontakt">
            <div className="kmp-info-block">
              <span className="kmp-info-lbl">Recepce</span>
              <p>
                Po–Ne · květen–září 8–22 h
                <br />
                říjen–duben 8–20 h
              </p>
            </div>
            <div className="kmp-info-block">
              <span className="kmp-info-lbl">Rezervace chatek</span>
              <p>
                <a href="tel:+420608300150">+420 608 300 150</a>
                <br />
                <a href="mailto:info@autokempliberec.cz">
                  info@autokempliberec.cz
                </a>
              </p>
            </div>
            <div className="kmp-info-block">
              <span className="kmp-info-lbl">Kde nás najdete</span>
              <p>
                Letná 873/32c
                <br />
                460 01 Liberec XII — Staré Pavlovice
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
