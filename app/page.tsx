import React from "react";

export default function Page() {
  const hodiny = [
    { den: "Pondělí", cas: "08:00 – 19:00", dnes: false },
    { den: "Úterý", cas: "08:00 – 19:00", dnes: false },
    { den: "Středa", cas: "08:00 – 19:00", dnes: false },
    { den: "Čtvrtek", cas: "08:00 – 19:00", dnes: false },
    { den: "Pátek", cas: "08:00 – 19:00", dnes: false },
    { den: "Sobota", cas: "09:00 – 17:00", dnes: false },
    { den: "Neděle", cas: "Zavřeno", dnes: false, zavreno: true },
  ];

  const patra = [
    {
      cislo: "01",
      nazev: "Přízemí u výlohy",
      popis:
        "Novinky, bestsellery a české tituly hned u vchodu. Z oken vidíte přímo na hodiny na České — a všechny, co se tam scházejí.",
    },
    {
      cislo: "02",
      nazev: "Cizojazyčné oddělení",
      popis:
        "Největší výběr cizojazyčných titulů v Brně a širokém okolí. Anglicky, německy, francouzsky — i Vergilius v originále.",
    },
    {
      cislo: "03",
      nazev: "Hry a deskovky",
      popis:
        "Celé patro společenských her a hlavolamů. Do všech pater vás bezbariérově doveze výtah.",
    },
    {
      cislo: "04",
      nazev: "Čtenářský koutek",
      popis:
        "V nejvyšším patře posezení, kde prožijete první chvíle s právě koupenou knížkou nebo rozbalíte novou deskovku.",
    },
  ];

  return (
    <main className="kd">
      <header className="kd-nav" aria-label="Hlavní">
        <a className="kd-brand" href="#" aria-label="Knihy Dobrovský, Brno – Joštova">
          <span className="kd-brand-mark" aria-hidden="true">
            <span className="kd-brand-d">D</span>
          </span>
          <span className="kd-brand-txt">
            <span className="kd-brand-1">Knihy Dobrovský</span>
            <span className="kd-brand-2">Brno · Joštova</span>
          </span>
        </a>
        <a className="kd-nav-cta" href="#kudy">Kudy k nám</a>
      </header>

      <section className="kd-hero" aria-labelledby="hero-nadpis">
        <div className="kd-hero-img">
          <img
            src="/hero.webp"
            alt="Knihkupectví Knihy Dobrovský na rohu Joštovy ulice v Brně, u křižovatky Česká"
            loading="eager"
          />
          <span className="kd-hero-tag" aria-hidden="true">„Na Čáře“ · roh Joštovy</span>
        </div>

        <div className="kd-hero-body">
          <p className="kd-eyebrow">Největší knihkupectví na Moravě</p>
          <h1 id="hero-nadpis">
            Sejdeme se <em>u hodin</em>.<br />
            Zbytek dne strávíme<br /> mezi <span className="kd-hl">regály knih</span>.
          </h1>
          <p className="kd-lede">
            Joštova 6, přímo na vyhlášené brněnské křižovatce, kde to od rána do večera
            žije. Vchod máte pár kroků od zastávek šalin a trolejbusů. Čtyři patra plná
            knížek, cizojazyčných titulů a společenských her — a nahoře křeslo, kde svou
            novou knížku otevřete jako první.
          </p>
          <div className="kd-hero-facts">
            <div>
              <span className="kd-fact-k">Zastávka</span>
              <span className="kd-fact-v">Česká</span>
            </div>
            <div>
              <span className="kd-fact-k">Bezbariérově</span>
              <span className="kd-fact-v">Výtah do všech pater</span>
            </div>
            <div>
              <span className="kd-fact-k">Dnes</span>
              <span className="kd-fact-v">Otevřeno do 19:00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="kd-patra" aria-labelledby="patra-nadpis">
        <div className="kd-sec-head">
          <p className="kd-eyebrow kd-eyebrow--dark">Prohlídka po patrech</p>
          <h2 id="patra-nadpis">Čtyři patra, jeden výtah a spousta míst, kde se zapovídáte.</h2>
        </div>

        <div className="kd-patra-grid">
          <img
            className="kd-patra-img"
            src="/section-1.webp"
            alt="Interiér knihkupectví Knihy Dobrovský s regály plnými knih"
            loading="lazy"
          />
          <ol className="kd-patra-list">
            {patra.map((p) => (
              <li key={p.cislo} className="kd-patro">
                <span className="kd-patro-cislo" aria-hidden="true">{p.cislo}</span>
                <div>
                  <h3>{p.nazev}</h3>
                  <p>{p.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="kd-navsteva" id="kudy" aria-labelledby="navsteva-nadpis">
        <div className="kd-navsteva-text">
          <p className="kd-eyebrow">Kdy a kudy k nám</p>
          <h2 id="navsteva-nadpis">Sečtělí knihkupci vás nenechají ve štychu.</h2>
          <p className="kd-lede kd-lede--light">
            Ať hledáte studijní materiály, knižní inspiraci nebo dárek pro někoho blízkého —
            stavte se. Pravidelně u nás probíhají čtení, autogramiády a knižní akce.
          </p>

          <div className="kd-info-grid">
            <div className="kd-info-card">
              <h3>Adresa</h3>
              <p>Joštova 6<br />602 00 Brno</p>
            </div>
            <div className="kd-info-card">
              <h3>Tramvají</h3>
              <p>Zastávka Česká<br />linky 12, 9, 6, 5, 4, 3, 1</p>
            </div>
            <div className="kd-info-card">
              <h3>Trolejbusem</h3>
              <p>Zastávka Česká<br />linky 32, 36</p>
            </div>
            <div className="kd-info-card">
              <h3>Zavolejte</h3>
              <p><a href="tel:+420542220320">542 220 320</a><br />poradime@knihydobrovsky.cz</p>
            </div>
          </div>
        </div>

        <aside className="kd-hodiny" aria-label="Otevírací doba">
          <img
            className="kd-hodiny-img"
            src="/section-2.webp"
            alt="Čtenářský koutek s posezením v knihkupectví Knihy Dobrovský"
            loading="lazy"
          />
          <div className="kd-hodiny-box">
            <h3>Otevírací doba</h3>
            <table>
              <tbody>
                {hodiny.map((h) => (
                  <tr key={h.den} className={h.zavreno ? "kd-zavreno" : ""}>
                    <th scope="row">{h.den}</th>
                    <td>{h.cas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </aside>
      </section>
    </main>
  );
}
