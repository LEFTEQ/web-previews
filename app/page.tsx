import React from "react";

const services = [
  {
    code: "CJ-01",
    title: "Čištění kanalizace a potrubí",
    tag: "Tlaková voda",
    desc:
      "Neodtéká vám domovní odpad nebo je zanesený hlavní řád? Rozpouštíme tukové ucpávky, kořeny i nánosy tlakovou vodou — od kuchyňského odpadu po velkoprofilovou kanalizaci.",
  },
  {
    code: "CJ-02",
    title: "Kamerový monitoring a trasování",
    tag: "Certifikovaní operátoři",
    desc:
      "Nevíte, kudy vám vede kanalizace? Kamerovým systémem najdeme praskliny, spády i skryté trasy a přesně je zaměříme — s protokolem, který obstojí u kolaudace.",
  },
  {
    code: "CJ-03",
    title: "Revize domovních ČOV",
    tag: "§ 15a vodního zákona",
    desc:
      "Provozovatelům domovních čistíren zajistíme povinnou revizi na ohlášku dle § 15a vodního zákona, včetně posouzení funkce a písemné zprávy pro úřad.",
  },
  {
    code: "CJ-04",
    title: "Rozbory a vzorkování vod",
    tag: "Pitná / odpadní",
    desc:
      "Odebíráme a necháváme rozebrat vzorky pitné i odpadní vody, sedimentů a kalů. Vhodné pro studny, kolaudace i pravidelnou kontrolu vlastního zdroje.",
  },
  {
    code: "CJ-05",
    title: "Přeprava a likvidace tekutých odpadů",
    tag: "Vlastní vozový park",
    desc:
      "Odvezeme a zlikvidujeme obsah jímek, septiků a lapolů. Vlastní technika a fekální vozy znamenají termín, který skutečně dodržíme.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt="Technik EKOLSERVISU při tlakovém čištění kanalizačního potrubí"
          />
        </div>

        <div className="wrap">
          <div className="topbar">
            <div className="brand">
              <b>EKOLSERVIS</b>
              <span>Nová Paka</span>
            </div>
            <a className="nonstop" href="tel:+420603578368">
              <span className="dot" aria-hidden="true" />
              Havárie NONSTOP
            </a>
          </div>

          <div className="hero-inner">
            <p className="eyebrow reveal d1">Kanalizace &amp; odpady · od roku 2010</p>
            <h1 className="hero-title reveal d2">
              Každý ucpaný<br />
              <span className="flow">řád</span> zase pustí<br />
              vodu dál.
            </h1>
            <p className="hero-lede reveal d3">
              Vyčistíme kanalizaci, prohlédneme ji kamerou a zajistíme revizi
              vaší domovní ČOV. Na Novopacku a v okolí — a když teče, kde nemá,
              přijedeme i o víkendu.
            </p>
            <div className="hero-actions reveal d4">
              <a className="btn btn-primary" href="tel:+420603578368">
                Zavolat dispečink
                <span className="call-num">603&nbsp;578&nbsp;368</span>
              </a>
              <a className="btn btn-ghost" href="#sluzby">Co umíme</a>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="gauge reveal d4">
            <div>
              <div className="g-val mono">24/7</div>
              <div className="g-lab">Havarijní služba</div>
            </div>
            <div>
              <div className="g-val mono">DN 1200</div>
              <div className="g-lab">Velkoprofilová kanalizace</div>
            </div>
            <div>
              <div className="g-val mono">§ 15a</div>
              <div className="g-lab">Revize ČOV na ohlášku</div>
            </div>
            <div>
              <div className="g-val mono">509 01</div>
              <div className="g-lab">Nová Paka &amp; okolí</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-eyebrow">Katalog služeb</p>
              <h2 className="sec-title">Komplexní servis vodovodů a kanalizací</h2>
            </div>
            <p className="sec-note">
              Od jednoho ucpaného odpadu po pravidelný dozor nad obecní sítí.
              Vše s vlastní technikou a lidmi, kteří to dělají přes deset let.
            </p>
          </div>

          <div className="svc-list">
            {services.map((s) => (
              <article className="svc" key={s.code}>
                <div className="svc-code mono">{s.code}</div>
                <div className="svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="svc-tag">{s.tag}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="o-nas">
        <div className="wrap">
          <div className="about-grid">
            <figure className="about-figure">
              <img
                src="/section-1.webp"
                alt="Technika a vozový park firmy EKOLSERVIS pro čištění kanalizace"
              />
              <figcaption>Vlastní vozový park · Nová Paka</figcaption>
            </figure>
            <div>
              <p className="sec-eyebrow" style={{ color: "var(--amber)" }}>
                Kdo za tím stojí
              </p>
              <h2>
                Navazujeme na řemeslo, které tu <span className="flow">teče</span>{" "}
                už přes generaci.
              </h2>
              <p>
                EKOLSERVIS vznikl spojením vodohospodářských odborníků, kteří
                budovali své know-how více než deset let. Navazujeme na tradici
                služeb firem Jánský a EKOSERVIS Nová Paka — čištění, monitoring,
                opravy kanalizací a likvidace tekutých odpadů.
              </p>
              <p>
                Rozšířili jsme nabídku o odborný dozor při provozování vodovodů
                a kanalizací, vzorkování vod i revize domovních ČOV. Cíl je
                jednoduchý: profesionálně odvedená práce za rozumnou cenu.
              </p>

              <div className="lineage">
                <b>Jánský</b>
                <span className="arw">→</span>
                <b>EKOSERVIS Nová Paka</b>
                <span className="arw">→</span>
                <b>EKOLSERVIS&nbsp;s.r.o.</b>
              </div>

              <div className="trust-grid">
                <div>
                  <div className="t-num mono">10+</div>
                  <div className="t-lab">let ve vodohospodářství</div>
                </div>
                <div>
                  <div className="t-num mono">100 %</div>
                  <div className="t-lab">protokoly ke kolaudaci i úřadu</div>
                </div>
              </div>

              <p className="addr">
                Svobody 1921, 509 01 Nová Paka ·{" "}
                <a href="tel:+420603578368">603&nbsp;578&nbsp;368</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
