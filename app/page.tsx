import type { CSSProperties } from "react";

export default function Page() {
  const materialy: { cislo: string; nazev: string; popis: string; detail: string }[] = [
    {
      cislo: "01",
      nazev: "Rokajl",
      popis: "Preciosa, TOHO i Matubo — sklo, které drží tvar a barvu roky.",
      detail: "velikosti 6/0 až 15/0",
    },
    {
      cislo: "02",
      nazev: "Minerály",
      popis: "Howlit, lávový kámen, růženín, onyx — broušené i matné korálky.",
      detail: "pravé kameny, otvor 1 mm",
    },
    {
      cislo: "03",
      nazev: "Komponenty",
      popis: "Chirurgická ocel, kaplíky, ketlovací nýty, karabinky a řetízky.",
      detail: "nerez 201, nekazí se",
    },
    {
      cislo: "04",
      nazev: "Nářadí a nitě",
      popis: "Kleště, jehly, silon i voskovaná šňůrka na navlékání.",
      detail: "vše na jednom místě",
    },
  ];

  const duvody: { titulek: string; text: string }[] = [
    {
      titulek: "Skladem v Ostravě",
      text: "Většinu zboží posíláme týž den. Osobní odběr na prodejně bez čekání na dodavatele.",
    },
    {
      titulek: "Kusový prodej",
      text: "Nemusíte brát balení po sto kusech. Kaplík, korálek i přívěsek koupíte i jednotlivě.",
    },
    {
      titulek: "Dílna a workshopy",
      text: "Pořádáme kurzy navlékání a ketlování. Naučíme vás techniku, se kterou hned začnete tvořit.",
    },
  ];

  return (
    <main className="kk">
      <header className="kk-top">
        <a className="kk-logo" href="#" aria-label="Korálky Katlas — úvodní strana">
          <span className="kk-logo-mark" aria-hidden="true">
            <span className="kk-bead" />
            <span className="kk-bead" />
            <span className="kk-bead" />
          </span>
          <span className="kk-logo-word">
            Korálky <em>Katlas</em>
          </span>
        </a>
        <nav className="kk-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#duvery">O nás</a>
          <a className="kk-nav-cta" href="tel:+420722941618">Zavolat</a>
        </nav>
      </header>

      <section className="kk-hero" aria-labelledby="kk-hero-nadpis">
        <div className="kk-hero-text">
          <p className="kk-eyebrow">Galanterie a korálky · Ostrava</p>
          <h1 id="kk-hero-nadpis">
            Z jednoho korálku<br />
            <span className="kk-hl">celý šperk.</span>
          </h1>
          <p className="kk-lead">
            Rokajl, minerály, nerezové komponenty i nářadí — všechno, co potřebujete
            k vlastní tvorbě, na jednom místě. Prodáváme i po kusech.
          </p>
          <div className="kk-hero-actions">
            <a className="kk-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="kk-btn kk-btn-ghost" href="tel:+420722941618">
              +420 722 941 618
            </a>
          </div>
          <p className="kk-hero-note">
            <strong>−20 %</strong> na vybrané nerezové komponenty tento týden
          </p>
        </div>
        <figure className="kk-hero-media">
          <img
            src="/hero.webp"
            alt="Rozsypané skleněné a minerální korálky v teplých odstínech připravené k navlékání"
            width={880}
            height={880}
            loading="eager"
          />
        </figure>
      </section>

      <section id="sortiment" className="kk-sekce" aria-labelledby="kk-sort-nadpis">
        <div className="kk-sekce-head">
          <p className="kk-eyebrow">Co u nás najdete</p>
          <h2 id="kk-sort-nadpis">Čtyři police, ze kterých vznikají šperky</h2>
        </div>
        <ol className="kk-mat">
          {materialy.map((m) => (
            <li key={m.cislo} className="kk-mat-item">
              <span className="kk-mat-cislo" aria-hidden="true">
                {m.cislo}
              </span>
              <h3>{m.nazev}</h3>
              <p>{m.popis}</p>
              <span className="kk-mat-detail">{m.detail}</span>
            </li>
          ))}
        </ol>
        <figure className="kk-sekce-media">
          <img
            src="/section-1.webp"
            alt="Detail broušených minerálních korálků a nerezových komponent seřazených podle barev"
            width={1200}
            height={720}
            loading="lazy"
          />
        </figure>
      </section>

      <section id="duvery" className="kk-duvera" aria-labelledby="kk-duvera-nadpis">
        <figure className="kk-duvera-media">
          <img
            src="/section-2.webp"
            alt="Ruce navlékající korálky na dílenském stole v prodejně Korálky Katlas"
            width={1000}
            height={1200}
            loading="lazy"
          />
        </figure>
        <div className="kk-duvera-text">
          <p className="kk-eyebrow">Proč právě my</p>
          <h2 id="kk-duvera-nadpis">
            Kamenná prodejna, ne jen krabice s korálky
          </h2>
          <ul className="kk-duvera-list">
            {duvody.map((d) => (
              <li key={d.titulek}>
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ul>
          <p className="kk-duvera-kontakt">
            Napište nám na{" "}
            <a href="mailto:info@katlasbeads.com">info@katlasbeads.com</a> nebo přijďte
            vybírat osobně do Ostravy.
          </p>
        </div>
      </section>
    </main>
  );
}
