export default function Page() {
  const sluzby = [
    {
      nazev: "Koberce v bytě i kanceláři",
      popis:
        "Hloubkové extrakční čištění přímo u vás. Vytáhneme z vláken prach, roztoče i staré skvrny — koberec zůstává položený, my přijedeme s technikou.",
      detail: "od 25 Kč / m²",
      cas: "schnutí 4–6 hodin",
    },
    {
      nazev: "Sedačky a čalounění",
      popis:
        "Sedací soupravy, křesla, židle i matrace. Šetrná chemie bez agresivních vůní, bezpečná pro děti i zvířata.",
      detail: "od 350 Kč / sedadlo",
      cas: "schnutí do večera",
    },
    {
      nazev: "Kusové a perské koberce",
      popis:
        "Ručně vázané a citlivé kusy si odvezeme k nám, vyčistíme, usušíme naležato a přivezeme zpět. Vlna, hedvábí i viskóza.",
      detail: "cena po prohlídce",
      cas: "odvoz a dovoz zdarma po Ostravě",
    },
    {
      nazev: "Firmy a společné prostory",
      popis:
        "Zátěžové koberce v kancelářích, hotelech a na chodbách bytových domů. Čistíme večer nebo o víkendu, ráno se normálně pracuje.",
      detail: "individuální nabídka",
      cas: "pravidelný servis i jednorázově",
    },
  ];

  const kroky = [
    {
      krok: "Prohlídka a test vlákna",
      text: "Než začneme, zjistíme materiál a vyzkoušíme čištění na skrytém místě. Žádné překvapení, žádné poškozené vlákno.",
    },
    {
      krok: "Hloubková extrakce",
      text: "Profesionální extraktor vhání čisticí roztok hluboko do vlasu a hned ho i s nečistotami vysává zpět. To běžný vysavač neumí.",
    },
    {
      krok: "Kontrola proti světlu",
      text: "Hotový koberec projdeme společně. Když skvrna nešla ven celá, řekneme vám to na rovinu — a proč.",
    },
  ];

  return (
    <main className="uk">
      {/* ================= HERO ================= */}
      <header className="uk-hero">
        <div className="uk-hero-inner">
          <div className="uk-topbar">
            <span className="uk-wordmark">
              UKON<span className="uk-wordmark-thin">GROUP</span>
            </span>
            <span className="uk-topbar-note">čištění koberců · Ostrava</span>
          </div>

          <h1 className="uk-h1">
            <span className="uk-h1-line uk-h1-dirty" aria-hidden="true">
              Zašlapaný
            </span>
            <span className="uk-h1-line">
              koberec zpátky <em>do&nbsp;barvy.</em>
            </span>
          </h1>

          <p className="uk-lead">
            Hloubkové extrakční čištění koberců, sedaček a matrací u&nbsp;vás
            doma. Ostrava a&nbsp;okolí do&nbsp;30&nbsp;km, termín obvykle
            do&nbsp;tří dnů.
          </p>

          <div className="uk-hero-cta">
            <a className="uk-btn" href="tel:+420777000000">
              Zavolat a domluvit termín
            </a>
            <a className="uk-btn uk-btn-ghost" href="#sluzby">
              Ceník služeb
            </a>
          </div>

          {/* Signature: pruh koberce, kterým projela čisticí lišta */}
          <div className="uk-swath" aria-hidden="true">
            <div className="uk-swath-pile uk-swath-before">
              <span /><span /><span /><span /><span /><span /><span /><span />
              <span /><span /><span /><span /><span /><span /><span /><span />
            </div>
            <div className="uk-swath-nozzle">
              <span className="uk-swath-label">jeden průjezd extraktoru</span>
            </div>
            <div className="uk-swath-pile uk-swath-after">
              <span /><span /><span /><span /><span /><span /><span /><span />
              <span /><span /><span /><span /><span /><span /><span /><span />
            </div>
          </div>

          <ul className="uk-hero-facts">
            <li>schnutí 4–6&nbsp;hodin</li>
            <li>chemie šetrná k&nbsp;dětem a&nbsp;zvířatům</li>
            <li>vlastní technika, žádná půjčovna</li>
          </ul>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="uk-section" id="sluzby">
        <div className="uk-section-head">
          <h2 className="uk-h2">Co vám vyčistíme</h2>
          <p className="uk-section-sub">
            Ceny jsou konečné — v&nbsp;Ostravě neúčtujeme dopravu ani žádné
            „příplatky za znečištění“.
          </p>
        </div>

        <div className="uk-grid">
          {sluzby.map((s) => (
            <article className="uk-card" key={s.nazev}>
              <h3 className="uk-card-title">{s.nazev}</h3>
              <p className="uk-card-text">{s.popis}</p>
              <div className="uk-card-meta">
                <span className="uk-price">{s.detail}</span>
                <span className="uk-time">{s.cas}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= JAK PRACUJEME + DŮVĚRA ================= */}
      <section className="uk-section uk-section-dark" id="postup">
        <div className="uk-section-head">
          <h2 className="uk-h2">Jak čištění probíhá</h2>
          <p className="uk-section-sub uk-section-sub-dark">
            Tři kroky, které děláme u&nbsp;každé zakázky. Vždy ve stejném
            pořadí — proto výsledek umíme slíbit dopředu.
          </p>
        </div>

        <ol className="uk-steps">
          {kroky.map((k, i) => (
            <li className="uk-step" key={k.krok}>
              <span className="uk-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="uk-step-title">{k.krok}</h3>
              <p className="uk-step-text">{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="uk-trust">
          <blockquote className="uk-quote">
            <p>
              „Světlý koberec v&nbsp;obýváku po&nbsp;osmi letech a&nbsp;dvou
              dětech — myslela jsem, že půjde vyhodit. Po čištění vypadá jako
              nový a&nbsp;do&nbsp;večera byl suchý.“
            </p>
            <cite>— paní Kavalová, Ostrava-Poruba</cite>
          </blockquote>
          <blockquote className="uk-quote">
            <p>
              „Kanceláře čistí večer, ráno přijdeme a&nbsp;nikdo nepozná, že
              tu někdo byl — jen ten koberec je najednou o&nbsp;dva odstíny
              světlejší.“
            </p>
            <cite>— správce budovy, Moravská Ostrava</cite>
          </blockquote>
          <div className="uk-trust-facts">
            <p>
              <strong>Jsme z Ostravy.</strong> Jezdíme po celém městě
              a&nbsp;okolí — Poruba, Zábřeh, Hrabůvka, Slezská, ale
              i&nbsp;Havířov, Frýdek-Místek nebo Bohumín.
            </p>
            <p>
              <strong>Termín do tří dnů.</strong> Zavoláte, řekneme cenu
              po&nbsp;telefonu a&nbsp;domluvíme hodinu, která vám sedí —
              čistíme i&nbsp;večer a&nbsp;o&nbsp;víkendu.
            </p>
            <p>
              <strong>Ručíme za výsledek.</strong> Když s&nbsp;čištěním
              nebudete spokojeni, přijedeme a&nbsp;projedeme koberec znovu
              zdarma.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
