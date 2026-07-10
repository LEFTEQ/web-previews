import type { CSSProperties } from "react";

export default function Page() {
  const listings = [
    {
      no: "01",
      kat: "Byt 3+kk",
      misto: "Liberec — Rochlice",
      detail: "78 m² · po rekonstrukci · lodžie · 5. patro s výtahem",
      cena: "4 690 000 Kč",
      stav: "Nabízíme k prodeji",
    },
    {
      no: "02",
      kat: "Rodinný dům",
      misto: "Liberec — Ruprechtice",
      detail: "5+1, pozemek 640 m² · zahrada · garáž · klidná ulice",
      cena: "9 250 000 Kč",
      stav: "Nabízíme k prodeji",
    },
    {
      no: "03",
      kat: "Byt 2+1",
      misto: "Liberec — centrum",
      detail: "56 m² · původní stav · vysoké stropy · pár kroků od radnice",
      cena: "3 190 000 Kč",
      stav: "Rezervováno",
    },
  ];

  const sluzby = [
    {
      klic: "R",
      nadpis: "Reality",
      text: "Prodej i pronájem bytů, domů a pozemků v Liberci a okolí Jizerských hor. Nacením, nafotíme, prověříme kupujícího a dovedeme obchod až ke vkladu na katastru.",
    },
    {
      klic: "O",
      nadpis: "Ocenění",
      text: "Odhad tržní ceny nemovitosti pro prodej, dědické řízení i banku. Vycházíme z reálných prodejů v dané liberecké lokalitě, ne z čísel z internetu.",
    },
    {
      klic: "Ú",
      nadpis: "Úvěry",
      text: "Hypotéku porovnáme napříč bankami a vyřídíme za vás. Sladíme financování s termínem prodeje tak, aby na sebe peníze a předání klíčů navazovaly.",
    },
    {
      klic: "P",
      nadpis: "Pojištění",
      text: "Pojistíme dům, byt i domácnost — a odpovědnost, na kterou se často zapomíná. Jedno místo pro celý přesun do nového bydlení.",
    },
  ];

  return (
    <main className="ip">
      <header className="ip-top">
        <a className="ip-mark" href="#top" aria-label="IP REAL FIN, domů">
          <span className="ip-mark-ip">IP</span>
          <span className="ip-mark-rest">REAL&nbsp;FIN</span>
          <span className="ip-mark-loc">Liberec</span>
        </a>
        <nav className="ip-nav" aria-label="Hlavní">
          <a href="#nabidka">Reality</a>
          <a href="#sluzby">Služby</a>
          <a href="#kancelar">O kanceláři</a>
        </nav>
      </header>

      <section className="ip-hero" id="top">
        <div className="ip-hero-media">
          <img
            src="/hero.webp"
            alt="Bytový dům v Liberci s výhledem na Ještěd"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="ip-hero-panel">
          <p className="ip-eyebrow">Realitní kancelář · Liberec od roku 2004</p>
          <h1 className="ip-h1">
            Klíče předáme<br />
            <em>osobně.</em> Papíry
            <br />
            vezmeme na sebe.
          </h1>
          <p className="ip-lede">
            Reality, ocenění, hypotéka i pojištění na jednom místě. V Liberci
            bydlíme, ne dojíždíme — kupce i cenu známe z ulice, ne z tabulky.
          </p>
          <div className="ip-hero-cta">
            <a className="ip-btn" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="ip-btn ip-btn-ghost" href="tel:+420480000000">
              Zavolat makléři
            </a>
          </div>
          <p className="ip-hours">
            Otevřeno po–pá 9:00–16:00, jindy po domluvě
          </p>
        </div>
      </section>

      <section className="ip-listings" id="nabidka" aria-labelledby="nab-h">
        <div className="ip-sec-head">
          <h2 id="nab-h" className="ip-h2">
            Právě z&nbsp;vitríny
          </h2>
          <p className="ip-sec-sub">
            Vybrané nemovitosti z Liberce a okolí. Kompletní seznam projdeme
            osobně — často máme i to, co ještě nevisí online.
          </p>
        </div>

        <ul className="ip-cards">
          {listings.map((l) => (
            <li key={l.no} className="ip-card">
              <div className="ip-card-tag">
                <span className="ip-card-no">{l.no}</span>
                <span
                  className={
                    l.stav === "Rezervováno"
                      ? "ip-badge ip-badge-res"
                      : "ip-badge"
                  }
                >
                  {l.stav}
                </span>
              </div>
              <h3 className="ip-card-kat">{l.kat}</h3>
              <p className="ip-card-misto">{l.misto}</p>
              <p className="ip-card-detail">{l.detail}</p>
              <p className="ip-card-cena">{l.cena}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ip-sluzby" id="sluzby" aria-labelledby="sl-h">
        <div className="ip-sluzby-media">
          <img
            src="/section-1.webp"
            alt="Makléř IP REAL FIN při prohlídce bytu s klienty"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="ip-sluzby-body">
          <h2 id="sl-h" className="ip-h2 ip-h2-light">
            Čtyři písmena,
            <br />
            jeden obchod
          </h2>
          <p className="ip-sec-sub ip-sec-sub-light">
            Reality, Ocenění, Úvěry, Pojištění — R&nbsp;O&nbsp;Ú&nbsp;P. Celý
            přesun do nového bydlení zvládnete s jedním člověkem, který ho zná
            od začátku do konce.
          </p>
          <dl className="ip-sluzby-list">
            {sluzby.map((s) => (
              <div key={s.klic} className="ip-sluzba">
                <dt>
                  <span className="ip-sluzba-klic" aria-hidden="true">
                    {s.klic}
                  </span>
                  {s.nadpis}
                </dt>
                <dd>{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ip-kancelar" id="kancelar" aria-labelledby="kan-h">
        <div className="ip-kancelar-body">
          <p className="ip-eyebrow">O kanceláři</p>
          <h2 id="kan-h" className="ip-h2">
            Malá kancelář,
            <br />
            která zvedá telefon
          </h2>
          <p className="ip-sec-sub">
            IP REAL FIN děláme v Liberci od roku 2004. Nejsme franšíza s
            call centrem — nemovitost od nafocení po předání klíčů vede jeden
            makléř, kterého vždycky zastihnete. Katastr, banky i cenové mapy
            Liberecka máme v malíku, protože je tu prostě děláme každý den.
          </p>

          <ul className="ip-fakta">
            <li>
              <span className="ip-fakta-cislo">20&nbsp;let</span>
              <span className="ip-fakta-popis">na trhu v Liberci a okolí</span>
            </li>
            <li>
              <span className="ip-fakta-cislo">4&nbsp;služby</span>
              <span className="ip-fakta-popis">
                reality, ocenění, úvěry, pojištění
              </span>
            </li>
            <li>
              <span className="ip-fakta-cislo">1&nbsp;makléř</span>
              <span className="ip-fakta-popis">
                na celý obchod, od začátku do konce
              </span>
            </li>
          </ul>

          <blockquote className="ip-ref">
            „Prodej bytu po rodičích jsem odkládala roky, protože jsem se bála
            papírů. Tady mi všechno vysvětlili lidsky a jednání s bankou i
            katastrem vzali za mě. Zvládli jsme to za šest týdnů.“
            <cite>— Jana H., Liberec–Vratislavice</cite>
          </blockquote>
        </div>

        <div className="ip-kancelar-media">
          <img
            src="/section-2.webp"
            alt="Kancelář IP REAL FIN v Liberci"
            loading="lazy"
            decoding="async"
          />
          <div
            className="ip-kancelar-caption"
            style={{ "--i": 0 } as CSSProperties}
          >
            <strong>Kde nás najdete</strong>
            <span>Liberec · po–pá 9:00–16:00, jindy po domluvě</span>
          </div>
        </div>
      </section>
    </main>
  );
}
