const sluzby = [
  {
    remeslo: "Pokrývačství",
    heslo: "Krytina, která drží desítky let",
    popis:
      "Pálené i betonové tašky, systémy Bramac, Cembrit šablony, fólie a modifikované pásy. Poradíme s výběrem krytiny podle tvaru a sklonu vaší střechy — a rovnou spočítáme rozpočet.",
    body: ["Nové střechy i kompletní rekonstrukce", "Zateplení nadkrokevní a podkrokevní", "Zaměření a rozpočet zdarma"],
  },
  {
    remeslo: "Klempířství",
    heslo: "Plech ohnutý přesně na milimetr",
    popis:
      "Okapy, svody, oplechování komínů a úžlabí. A navíc to, co jinde neseženete: zakázková galanterní výroba klempířských doplňků — chrliče, svody a designové prvky na míru.",
    body: ["Oplechování všech detailů střechy", "Zakázkové chrliče a ozdobné svody", "Výroba pro stavební i designové obory"],
  },
  {
    remeslo: "Tesařství",
    heslo: "Krov je páteř každé střechy",
    popis:
      "Vyrobíme a smontujeme nový krov nebo opravíme ten stávající. Stavíme také altány, pergoly, zahradní domky a portály vchodů — od zaměření po poslední hřebík.",
    body: ["Krovy nové i opravy stávajících", "Altány, pergoly, zahradní domky", "Technologický postup navrhneme zdarma"],
  },
];

const kontakty = [
  { jmeno: "Jaroslav Černý st.", tel: "606 316 526", role: "zakázky a rozpočty" },
  { jmeno: "Jan Černý", tel: "603 276 410", role: "klempířské práce" },
  { jmeno: "Jaroslav Černý ml.", tel: "606 334 441", role: "realizace na střeše" },
];

export default function Page() {
  return (
    <main className="cerny">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Střechy Černý Olomouc">
        <div className="hero-tiles" aria-hidden="true">
          <svg viewBox="0 0 1200 240" preserveAspectRatio="xMidYMax slice" focusable="false">
            {/* tři řady bobrovek – vzor pálené krytiny */}
            {Array.from({ length: 3 }).map((_, row) =>
              Array.from({ length: 16 }).map((_, i) => {
                const offset = row % 2 === 0 ? 0 : 40;
                const x = i * 80 - 40 + offset;
                const y = 30 + row * 70;
                return (
                  <path
                    key={`${row}-${i}`}
                    d={`M ${x} ${y} h 76 v 90 a 38 38 0 0 1 -76 0 z`}
                    className={`tile tile-r${row}`}
                  />
                );
              })
            )}
          </svg>
        </div>

        <header className="hero-top">
          <div className="wordmark">
            <span className="wm-roof" aria-hidden="true">
              <svg viewBox="0 0 40 22" focusable="false">
                <path d="M2 20 L20 3 L38 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
              </svg>
            </span>
            <span className="wm-text">
              STŘECHY <strong>ČERNÝ</strong>
            </span>
          </div>
          <p className="hero-loc">Olomouc · Šternberská 30</p>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Rodinná firma — tři pokrývači, jedno příjmení</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Krov.</span>
            <span className="ht-line ht-2">Plech.</span>
            <span className="ht-line ht-3">Taška.</span>
          </h1>
          <p className="hero-sub">
            Tesařství, klempířství a pokrývačství pod jednou střechou. Otec a dva synové Černí
            stavíme a opravujeme střechy v Olomouci a okolí — od zaměření a rozpočtu až po
            poslední hřebenáč.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420606316526">
              Zavolat: 606 316 526
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co všechno umíme
            </a>
          </div>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Tři řemesla, jedna střecha</p>
          <h2 id="sluzby-h">Střecha se staví odspodu: krov, plech, krytina</h2>
          <p className="sec-lead">
            Většina firem umí jedno z těch tří. My pokryjeme celou střechu vlastníma rukama —
            nemusíte shánět tři party a hlídat, kdo na koho čeká.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.remeslo}>
              <div className="karta-hrana" aria-hidden="true" />
              <h3 className="karta-remeslo">{s.remeslo}</h3>
              <p className="karta-heslo">{s.heslo}</p>
              <p className="karta-popis">{s.popis}</p>
              <ul className="karta-body">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / RODINA ===== */}
      <section className="rodina" aria-labelledby="rodina-h">
        <div className="rodina-inner">
          <div className="rodina-text">
            <p className="sec-eyebrow sec-eyebrow-light">Kdo vám na střechu poleze</p>
            <h2 id="rodina-h">Na střeše se potkáte s Černým. Vždycky.</h2>
            <p>
              Žádní najatí brigádníci, žádná anonymní parta. Zakázku si vezme otec nebo jeden ze
              synů, přijede na zaměření, navrhne materiál i technologický postup — a stejné ruce
              pak střechu i dokončí.
            </p>
            <p>
              Dlouholetá praxe v oboru znamená, že jsme v Olomouci a okolí pokryli stovky střech:
              sedlové, valbové, mansardové i ploché. Zaměření a rozpočet děláme zdarma, abyste
              přesně věděli, do čeho jdete.
            </p>
            <ul className="rodina-sliby">
              <li>
                <strong>Zaměření a rozpočet zdarma</strong> — přijedeme, změříme, spočítáme.
              </li>
              <li>
                <strong>Poradenství k materiálům</strong> — taška, plech i fólie podle vaší střechy
                a rozpočtu.
              </li>
              <li>
                <strong>Jedna odpovědná osoba</strong> — od první schůzky po předání hotové střechy.
              </li>
            </ul>
          </div>

          <div className="rodina-kontakty">
            <h3 className="kontakty-h">Tři Černí, tři telefony</h3>
            {kontakty.map((k) => (
              <a className="kontakt" key={k.tel} href={`tel:+420${k.tel.replace(/\s/g, "")}`}>
                <span className="kontakt-jmeno">{k.jmeno}</span>
                <span className="kontakt-role">{k.role}</span>
                <span className="kontakt-tel">{k.tel}</span>
              </a>
            ))}
            <p className="kontakt-mail">
              Nebo napište na{" "}
              <a href="mailto:olomouc-strechy@olomouc-strechy.cz">olomouc-strechy@olomouc-strechy.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
