export default function Page() {
  const sluzby = [
    {
      tag: "GEO",
      nazev: "Geometrie náprav",
      popis:
        "Kompletní seřízení přední i zadní nápravy na měřicí stolici. Sbíhavost, odklony, záklon rejdového čepu — auto přestane táhnout ke straně a gumy se ojíždějí rovnoměrně.",
      pro: "osobní · užitková · nákladní",
    },
    {
      tag: "STK",
      nazev: "STK a emise",
      popis:
        "Připravíme vůz na technickou a rovnou ji za vás vyřídíme. Měříme emise benzinových i dieselových motorů — na kontrolu odjíždíte s vozem, který projde.",
      pro: "benzin · diesel",
    },
    {
      tag: "OIL",
      nazev: "Výměna oleje a náplní",
      popis:
        "Motorové oleje OMW podle specifikace výrobce. Vyměníme i chladicí kapalinu a náplň klimatizace — vše zapíšeme do servisní knížky.",
      pro: "oleje OMW · chlazení · klima",
    },
    {
      tag: "FIX",
      nazev: "Opravy motorů a převodovek",
      popis:
        "Od pravidelné servisní prohlídky po generální opravu motoru nebo převodovky. U nákladních vozů opravíme to, kvůli čemu vás jinde pošlou dál.",
      pro: "servis · GO motorů · GO převodovek",
    },
  ];

  const duvody = [
    {
      cislo: "20+",
      titulek: "let pod kapotou",
      text: "Servis vedeme od roku 2003. Mechanici, kteří vám auto opraví dnes, u nás točili klíčem i před patnácti lety.",
    },
    {
      cislo: "3,5–40 t",
      titulek: "od osobáku po tahač",
      text: "Jedna z mála dílen v Olomouci, kde na stejném dvoře opraví váš osobní vůz, dodávku firmy i nákladní soupravu.",
    },
    {
      cislo: "1 dvůr",
      titulek: "vše na jednom místě",
      text: "Geometrie, emise, STK, oleje i generálky děláme u nás v areálu Moravel. Nikam vás neposíláme, nic nepřeprodáváme.",
    },
  ];

  return (
    <main className="kb">
      {/* ===== HERO ===== */}
      <header className="kb-hero">
        <div className="kb-hero-top">
          <div className="kb-wordmark" aria-label="Autoservis KB">
            <span className="kb-wordmark-box">KB</span>
            <span className="kb-wordmark-text">
              AUTOSERVIS
              <em>Olomouc — Holice</em>
            </span>
          </div>
          <a className="kb-hero-tel" href="tel:+420603462903">
            603 462 903
          </a>
        </div>

        <div className="kb-hero-body">
          <p className="kb-hero-eyebrow">
            Opravy osobních, užitkových a nákladních vozidel
          </p>
          <h1 className="kb-hero-title">
            <span className="kb-line kb-line-1">SEŘÍDÍME.</span>
            <span className="kb-line kb-line-2">VYMĚNÍME.</span>
            <span className="kb-line kb-line-3">
              OPRAVÍME<span className="kb-dot">.</span>
            </span>
          </h1>
          <p className="kb-hero-sub">
            Dílna v areálu Moravel, Sladkovského 42, Olomouc-Holice. Přes 20 let
            opravujeme všechno od osobáku po čtyřicetitunovou soupravu — a na
            konci vždy víte, co jsme dělali a proč.
          </p>
          <div className="kb-hero-cta">
            <a className="kb-btn kb-btn-primary" href="tel:+420603462903">
              Zavolat do dílny
            </a>
            <a className="kb-btn kb-btn-ghost" href="#sluzby">
              Co opravujeme
            </a>
          </div>
        </div>

        {/* signature: pás geometrie nápravy — stupnice sbíhavosti */}
        <div className="kb-gauge" aria-hidden="true">
          <div className="kb-gauge-track">
            {Array.from({ length: 41 }).map((_, i) => (
              <span
                key={i}
                className={
                  i === 20
                    ? "kb-tick kb-tick-zero"
                    : i % 5 === 0
                      ? "kb-tick kb-tick-major"
                      : "kb-tick"
                }
              />
            ))}
            <span className="kb-gauge-needle" />
          </div>
          <div className="kb-gauge-labels">
            <span>−2°00′</span>
            <span className="kb-gauge-zero">SBÍHAVOST 0°00′ — SEŘÍZENO</span>
            <span>+2°00′</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="kb-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="kb-section-head">
          <h2 id="sluzby-h">Čtyři věci, které tu děláme pořádně</h2>
          <p>
            Žádný nekonečný ceník. Tohle je práce, kterou máme v ruce každý den
            — u osobních, užitkových i nákladních vozů.
          </p>
        </div>

        <div className="kb-sluzby-grid">
          {sluzby.map((s) => (
            <article className="kb-karta" key={s.tag}>
              <div className="kb-karta-head">
                <span className="kb-karta-tag">{s.tag}</span>
                <h3>{s.nazev}</h3>
              </div>
              <p className="kb-karta-popis">{s.popis}</p>
              <p className="kb-karta-pro">{s.pro}</p>
            </article>
          ))}
        </div>

        <p className="kb-sluzby-note">
          Nevíte, kam vaše závada patří? Zavolejte na{" "}
          <a href="tel:+420603462903">603 462 903</a> — po telefonu rovnou
          řekneme, jestli to je práce pro nás a kdy můžete přijet.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="kb-duvera" aria-labelledby="duvera-h">
        <div className="kb-duvera-inner">
          <div className="kb-section-head kb-section-head-inverse">
            <h2 id="duvera-h">Dvacet let na stejné adrese</h2>
            <p>
              Areál Moravel v Olomouci-Holicích. Kdo sem jednou přijel s
              dodávkou, vrací se i s rodinným autem — a naopak.
            </p>
          </div>

          <div className="kb-duvody">
            {duvody.map((d) => (
              <div className="kb-duvod" key={d.titulek}>
                <span className="kb-duvod-cislo">{d.cislo}</span>
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>

          <div className="kb-kudy">
            <div className="kb-kudy-mapa" aria-hidden="true">
              <span className="kb-kudy-cesta" />
              <span className="kb-kudy-bod kb-kudy-bod-start">
                sjezd Olomouc-Holice
              </span>
              <span className="kb-kudy-bod kb-kudy-bod-cil">
                brána Moravel → dílna KB
              </span>
            </div>
            <div className="kb-kudy-text">
              <h3>Kudy k nám</h3>
              <p>
                Sladkovského 696/42, Olomouc-Holice — vjezd branou areálu
                Moravel a.s. Projedete i s návěsem, před dílnou se pohodlně
                otočíte. Otevřeno ve všední dny, termín si domluvíte telefonem
                na <a href="tel:+420603462903">603 462 903</a> nebo e-mailem na{" "}
                <a href="mailto:autoservis.kb@quick.cz">
                  autoservis.kb@quick.cz
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
