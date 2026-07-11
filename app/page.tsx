import React from "react";

export default function Page() {
  const trades = [
    {
      no: "01",
      name: "Bourání a příprava",
      desc: "Vyklidíme, odstraníme staré příčky, zaměříme rozvody. Prach držíme za fólií a podlahu chráníme — sousedům se nic nestane.",
    },
    {
      no: "02",
      name: "Voda, topení, elektro",
      desc: "Nové rozvody vody a odpadů, rozvaděč a zásuvky podle dnešní normy. Instalatér, topenář i elektrikář jsou náš vlastní tým.",
    },
    {
      no: "03",
      name: "Zdění a omítky",
      desc: "Nové dispozice, sádrokartony, jádrové i štukové omítky. Rovné stěny, na kterých pak dlažba a malba drží roky.",
    },
    {
      no: "04",
      name: "Obklady a podlahy",
      desc: "Koupelna, kuchyně, chodba. Dlažba na milimetr, spáry v jedné linii, plovoučky i vinyl bez spár, kde vadí voda.",
    },
    {
      no: "05",
      name: "Finiš a úklid",
      desc: "Malby, dveře, kování, silikony. Byt předáváme uklizený a nastěhovatelný — ne se zbytky lepidla na oknech.",
    },
  ];

  const proof = [
    { k: "14 dní", v: "průměr na rekonstrukci koupelny na klíč" },
    { k: "1 parta", v: "stejní lidé od bourání po úklid — žádné střídání firem" },
    { k: "Slezská Ostrava", v: "sídlíme tu, jezdíme po celém kraji" },
  ];

  return (
    <main className="rk">
      <header className="rk-nav" aria-label="Hlavní">
        <a className="rk-logo" href="#" aria-label="Reko quality, domů">
          <span className="rk-logo-mark" aria-hidden="true">RQ</span>
          <span className="rk-logo-word">
            Reko <b>quality</b>
          </span>
        </a>
        <nav className="rk-navlinks">
          <a href="#prace">Co děláme</a>
          <a href="#duvera">O nás</a>
          <a className="rk-navcta" href="#poptavka">Chci cenu</a>
        </nav>
      </header>

      <section className="rk-hero">
        <div className="rk-hero-media">
          <img
            src="/hero.webp"
            alt="Zrekonstruovaný byt od Reko quality — nová koupelna a obytný prostor"
            className="rk-hero-img"
          />
          <div className="rk-hero-tape" aria-hidden="true">
            <span>REKONSTRUKCE BYTŮ</span>
            <span>OSTRAVA</span>
            <span>NA KLÍČ</span>
            <span>REKONSTRUKCE BYTŮ</span>
            <span>OSTRAVA</span>
            <span>NA KLÍČ</span>
          </div>
        </div>

        <div className="rk-hero-copy">
          <p className="rk-eyebrow">Reko quality s.r.o. — Slezská Ostrava</p>
          <h1 className="rk-h1">
            Starý byt <span className="rk-hl">předěláme</span>
            <br />
            na místo, kde chcete bydlet.
          </h1>
          <p className="rk-lead">
            Kompletní rekonstrukce bytů a bytových jader v Ostravě a okolí.
            Voda, elektro, zdění, obklady i finální úklid — jedna parta, jeden
            termín, jedna zodpovědnost.
          </p>
          <div className="rk-hero-actions">
            <a className="rk-btn" href="#poptavka">
              Chci nezávaznou cenu
            </a>
            <a className="rk-btn-ghost" href="#prace">
              Jak to probíhá
            </a>
          </div>
        </div>
      </section>

      <section id="prace" className="rk-section rk-work">
        <div className="rk-sec-head">
          <p className="rk-eyebrow">Postup — pět fází</p>
          <h2 className="rk-h2">
            Od vyklizeného bytu po předání klíčů.
          </h2>
          <p className="rk-sec-note">
            U rekonstrukce bytu záleží na pořadí. Děláme ho v jedné logické
            posloupnosti, abyste nemuseli shánět pět firem a hlídat, kdo na koho
            čeká.
          </p>
        </div>

        <ol className="rk-steps">
          {trades.map((t) => (
            <li key={t.no} className="rk-step">
              <span className="rk-step-no" aria-hidden="true">
                {t.no}
              </span>
              <div className="rk-step-body">
                <h3 className="rk-step-name">{t.name}</h3>
                <p className="rk-step-desc">{t.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="rk-figure">
          <img
            src="/section-1.webp"
            alt="Detail nové koupelny s obklady a dlažbou po rekonstrukci"
            className="rk-figure-img"
          />
          <figcaption className="rk-figure-cap">
            Koupelnová jádra řešíme nejčastěji — panelák i cihla.
          </figcaption>
        </figure>
      </section>

      <section id="duvera" className="rk-section rk-trust">
        <div className="rk-trust-grid">
          <div className="rk-trust-copy">
            <p className="rk-eyebrow">Kdo to postaví</p>
            <h2 className="rk-h2">
              Řemeslníci ze Slezské Ostravy, ne subdodavatelé z inzerátu.
            </h2>
            <p className="rk-trust-text">
              Reko quality je parta lidí, kteří spolu dělají. Instalatér,
              zedník i elektrikář jsou u nás doma — proto víme, kdy který krok
              přijde a kdy vám můžeme dát reálný termín. Byt vám nepředáme se
              slovy „zbytek doděláte sami“.
            </p>
            <ul className="rk-facts">
              {proof.map((p) => (
                <li key={p.k} className="rk-fact">
                  <span className="rk-fact-k">{p.k}</span>
                  <span className="rk-fact-v">{p.v}</span>
                </li>
              ))}
            </ul>
            <address className="rk-address">
              Reko quality s.r.o. · Zámostní 1155/27, 710 00 Slezská Ostrava ·
              IČO 09679324
            </address>
          </div>

          <figure className="rk-trust-fig">
            <img
              src="/section-2.webp"
              alt="Obytný prostor bytu po kompletní rekonstrukci od Reko quality"
              className="rk-trust-img"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
