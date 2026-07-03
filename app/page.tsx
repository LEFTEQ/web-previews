const jazyky = [
  { kod: "CS", nazev: "čeština" },
  { kod: "EN", nazev: "angličtina" },
  { kod: "DE", nazev: "němčina" },
  { kod: "RU", nazev: "ruština" },
];

const sluzby = [
  {
    stitek: "Překlad",
    nazev: "Odborné a firemní překlady",
    popis:
      "Smlouvy, manuály, výroční zprávy, webové stránky. Překládá vždy člověk, který zná váš obor — právník právničinu, technik techniku.",
    detail: "Běžný termín 2–3 pracovní dny, expres do 24 hodin.",
  },
  {
    stitek: "S razítkem",
    nazev: "Soudní (úřední) překlady",
    popis:
      "Rodné a oddací listy, diplomy, výpisy z rejstříků, plné moci. Překlad s kulatým razítkem soudního tlumočníka, který uznají úřady v ČR i v zahraničí.",
    detail: "Listinu svážeme s překladem, originál vám vrátíme.",
  },
  {
    stitek: "Naživo",
    nazev: "Tlumočení",
    popis:
      "Obchodní jednání, svatby, jednání na úřadech i u notáře. Konsekutivní i soudní tlumočení v Hradci Králové a okolí — přijedeme za vámi.",
    detail: "Termín tlumočníka rezervujte ideálně týden předem.",
  },
  {
    stitek: "Kontrola",
    nazev: "Korektury rodilým mluvčím",
    popis:
      "Text, který už máte přeložený, projde rodilý mluvčí. Opraví styl, terminologii i drobnosti, které stroj nevidí.",
    detail: "Vhodné pro texty, které jdou ven — weby, katalogy, nabídky.",
  },
];

const kroky = [
  {
    cislo: "1",
    nazev: "Pošlete text",
    popis:
      "E-mailem na info@nvfagency.cz nebo přes online poptávku. Stačí sken či fotka dokumentu.",
  },
  {
    cislo: "2",
    nazev: "Do 2 hodin víte cenu",
    popis:
      "V pracovní době PO–PÁ 8:00–18:00 vám odpovíme s pevnou cenou a termínem. Žádné odhady, žádná překvapení na faktuře.",
  },
  {
    cislo: "3",
    nazev: "Překládá ověřený překladatel",
    popis:
      "Text dostane překladatel se zkušeností ve vašem oboru. U soudních překladů tlumočník jmenovaný krajským soudem.",
  },
  {
    cislo: "4",
    nazev: "Hotovo v termínu",
    popis:
      "Překlad pošleme e-mailem, soudní překlad si vyzvednete osobně v Hradci Králové nebo ho pošleme doporučeně poštou.",
  },
];

export default function Page() {
  return (
    <main className="nvf">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="NVF Agency — překladatelské služby">
            <span className="wordmark-nvf">NVF</span>
            <span className="wordmark-rule" aria-hidden="true" />
            <span className="wordmark-sub">agency · překlady</span>
          </div>
          <p className="hero-loc">Hradec Králové</p>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">
              <span className="w-src">Smlouva</span>
            </span>
            <span className="hero-line hero-line-2" aria-hidden="true">
              <span className="hero-arrow">⇄</span>
            </span>
            <span className="hero-line hero-line-3">
              <span className="w-dst">Vertrag<span className="dst-caret" /></span>
            </span>
          </h1>

          <div className="hero-side">
            <p className="hero-claim">
              Překlady a tlumočení, na které se dá spolehnout u soudu, na úřadě
              i na obchodním jednání.
            </p>
            <p className="hero-claim-sub">
              Cenu a termín vám řekneme do 2 hodin. Soudní překlady s kulatým
              razítkem vyzvednete osobně v Hradci Králové.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="mailto:info@nvfagency.cz">
                Poptat překlad
              </a>
              <a className="btn btn-ghost" href="tel:+420773970779">
                +420 773 970 779
              </a>
            </div>
          </div>
        </div>

        <ul className="hero-langs" aria-label="Jazyky, které překládáme">
          {jazyky.map((j, i) => (
            <li key={j.kod} style={{ animationDelay: `${0.9 + i * 0.12}s` }}>
              <span className="lang-kod">{j.kod}</span>
              <span className="lang-nazev">{j.nazev}</span>
            </li>
          ))}
          <li className="lang-plus" style={{ animationDelay: "1.4s" }}>
            <span className="lang-kod">+</span>
            <span className="lang-nazev">další jazyky na poptávku</span>
          </li>
        </ul>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Co pro vás přeložíme</p>
          <h2 id="sluzby-h">
            Od rodného listu po&nbsp;výroční zprávu
          </h2>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article key={s.nazev} className="karta">
              <p className="karta-stitek">{s.stitek}</p>
              <h3>{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <aside className="razitko-pas">
          <div className="razitko" aria-hidden="true">
            <span>ÚŘEDNĚ&nbsp;OVĚŘENO</span>
          </div>
          <p>
            <strong>Soudní překlad poznáte podle kulatého razítka.</strong>{" "}
            Vyhotoví ho tlumočník jmenovaný krajským soudem a listinu neoddělitelně
            sváže s překladem. Přesně takový dokument od nás dostanete — a úřad ho
            přijme napoprvé.
          </p>
        </aside>
      </section>

      {/* ===== JAK PRACUJEME ===== */}
      <section className="postup" aria-labelledby="postup-h">
        <div className="sekce-hlava sekce-hlava-inv">
          <p className="eyebrow">Jak to u nás probíhá</p>
          <h2 id="postup-h">Čtyři kroky mezi poptávkou a&nbsp;razítkem</h2>
        </div>

        <ol className="postup-list">
          {kroky.map((k) => (
            <li key={k.cislo} className="krok">
              <span className="krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <div>
                <h3>{k.nazev}</h3>
                <p>{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="postup-duvera">
          <blockquote>
            <p>
              „Soudní překlad diplomu jsem potřebovala do tří dnů kvůli nostrifikaci.
              Ve středu jsem psala, v pátek ráno jsem si dokument s razítkem
              vyzvedla. Bez stresu.“
            </p>
            <cite>— klientka z Hradce Králové, překlad CS → DE</cite>
          </blockquote>
          <dl className="duvera-fakta">
            <div>
              <dt>Pracovní doba</dt>
              <dd>PO–PÁ 8:00–18:00</dd>
            </div>
            <div>
              <dt>Odpověď na poptávku</dt>
              <dd>do 2 hodin</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Hradec Králové a celá ČR (online)</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
