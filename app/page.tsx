import React from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      titulek: "Vyměříme a naceníme",
      text: "Přijedeme k vám do bytu v Ostravě, změříme koupelnu a do tří dnů máte pevnou cenu i rozpis prací. Bez zálohy dopředu, bez skrytých položek."
    },
    {
      cislo: "02",
      titulek: "Vybourání a nové rozvody",
      text: "Staré obklady a vanu odvezeme, podlahu srovnáme, nataháme nové vodo i elektro tam, kde je opravdu chcete — vedle umyvadla, ne kde to zbylo po předchozím majiteli."
    },
    {
      cislo: "03",
      titulek: "Izolace a obklady",
      text: "Sprchový kout i podlahu natřeme hydroizolační stěrkou, ať vám voda nikdy neprosákne k sousedům. Pak přijde dlažba, obklad a spárování na cit."
    },
    {
      cislo: "04",
      titulek: "Osadíme a uklidíme",
      text: "Vana, baterie, záchod, topný žebřík — vše zapojíme a vyzkoušíme. Suť odvezeme, koupelnu předáme vytřenou a připravenou k první sprše."
    }
  ];

  const reference = [
    {
      misto: "Panelák, Ostrava-Poruba",
      text: "Jádrové bytové jádro pryč, na jeho místě zděná koupelna s velkoformátovou dlažbou a sprchou v úrovni podlahy.",
      dny: "9 dní"
    },
    {
      misto: "Rodinný dům, Ostrava-Krásné Pole",
      text: "Dvě koupelny a samostatné WC v jedné etapě, včetně podlahového topení a osazení volně stojící vany.",
      dny: "14 dní"
    },
    {
      misto: "Cihlový byt, Ostrava-Vítkovice",
      text: "Přesunutí příček kvůli pračce a sušičce nad sebou, nové rozvody a obklad až do stropu.",
      dny: "11 dní"
    }
  ];

  return (
    <main className="ap">
      <header className="ap-nav">
        <a className="ap-mark" href="#" aria-label="Sanace a stavby Apollo, domů">
          <span className="ap-mark-a">APOLLO</span>
          <span className="ap-mark-sub">sanace &amp; koupelny · Ostrava</span>
        </a>
        <a className="ap-tel" href="tel:+420774882314">+420 774 882 314</a>
      </header>

      <section className="ap-hero">
        <div className="ap-hero-media">
          <img
            src="/hero.webp"
            alt="Nově zrekonstruovaná koupelna s obkladem a sprchovým koutem od firmy Apollo v Ostravě"
            className="ap-hero-img"
          />
        </div>
        <div className="ap-hero-body">
          <p className="ap-eyebrow">Rekonstrukce koupelen · Ostrava a okolí</p>
          <h1 className="ap-h1">
            Vaše koupelna<br />
            <span className="ap-h1-accent">od bourání</span><br />
            po první sprchu.
          </h1>
          <p className="ap-lede">
            Odvezeme staré jádro, srovnáme rozvody, zaizolujeme a obložíme —
            a předáme vám hotovou koupelnu s uklizeným bytem. Jedna parta,
            jeden termín, jedna odpovědnost.
          </p>
          <div className="ap-hero-cta">
            <a className="ap-btn" href="tel:+420774882314">Zavolat a domluvit prohlídku</a>
            <a className="ap-btn-ghost" href="#sluzby">Jak to probíhá</a>
          </div>
          <dl className="ap-facts">
            <div>
              <dt>Termín</dt>
              <dd>drží se, nebo voláme první</dd>
            </div>
            <div>
              <dt>Záruka na dílo</dt>
              <dd>5 let</dd>
            </div>
            <div>
              <dt>Partner pojišťoven</dt>
              <dd>Allianz, GČP</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ap-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ap-section-head">
          <p className="ap-eyebrow">Postup prací</p>
          <h2 className="ap-h2" id="sluzby-nadpis">Čtyři kroky, ne měsíc dohadů</h2>
          <p className="ap-section-lede">
            Koupelnu děláme na etapy, které dopředu znáte. Víte, kdy se bourá,
            kdy nezteče voda a kdy se zase osprchujete.
          </p>
        </div>
        <ol className="ap-kroky">
          {kroky.map((k) => (
            <li className="ap-krok" key={k.cislo}>
              <span className="ap-krok-num" aria-hidden="true">{k.cislo}</span>
              <h3 className="ap-krok-tit">{k.titulek}</h3>
              <p className="ap-krok-text">{k.text}</p>
            </li>
          ))}
        </ol>
        <div className="ap-sluzby-media">
          <img
            src="/section-1.webp"
            alt="Detail pokládky velkoformátové dlažby při rekonstrukci koupelny"
            className="ap-media-img"
          />
          <p className="ap-media-pop">
            Kromě koupelen umíme i to, co k Ostravě patří: vysušení a ozónování
            po vytopení, sanaci po požáru a čištění dlažby. Když se z havárie
            stane rekonstrukce, řešíte to s jedním člověkem.
          </p>
        </div>
      </section>

      <section className="ap-duvera" id="reference" aria-labelledby="duvera-nadpis">
        <div className="ap-duvera-grid">
          <div className="ap-duvera-media">
            <img
              src="/section-2.webp"
              alt="Hotová koupelna po rekonstrukci připravená k předání zákazníkovi"
              className="ap-media-img"
            />
          </div>
          <div className="ap-duvera-body">
            <p className="ap-eyebrow">Odvedená práce · Ostravsko</p>
            <h2 className="ap-h2" id="duvera-nadpis">Koupelny, které už slouží</h2>
            <p className="ap-section-lede">
              Děláme panelákové byty i rodinné domy po celé Ostravě.
              U každé zakázky je člověk, kterému zavoláte — a ten to dotáhne.
            </p>
            <ul className="ap-ref-list">
              {reference.map((r) => (
                <li className="ap-ref" key={r.misto}>
                  <div className="ap-ref-top">
                    <span className="ap-ref-misto">{r.misto}</span>
                    <span className="ap-ref-dny">{r.dny}</span>
                  </div>
                  <p className="ap-ref-text">{r.text}</p>
                </li>
              ))}
            </ul>
            <div className="ap-lidi">
              <p className="ap-lidi-tit">Kdo to u vás povede</p>
              <p className="ap-lidi-text">
                <strong>Tomáš Pastrňák</strong> — vedoucí techniky, na telefonu
                po celou dobu stavby. <a href="tel:+420774882314">+420 774 882 314</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
