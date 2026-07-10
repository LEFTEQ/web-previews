import type { CSSProperties } from "react";

const produkty = [
  {
    kod: "OK",
    nazev: "Okna na míru",
    profily: "Elegant · Arcade · Prestige · Eforte",
    popis:
      "Několik stovek typů a tisíce variant. Trojsklo, teplý meziskelní rámeček i barevné fólie do dřevodekoru — vyrobíme přesně na váš otvor.",
  },
  {
    kod: "DV",
    nazev: "Vchodové a terasové dveře",
    profily: "Eforte · Prestige · zdvižně a odsuvně posuvné",
    popis:
      "Bezpečnostní kování, nízké prahy pro bezbariérový vstup a velké prosklené plochy do zahrady, které pustí dovnitř světlo.",
  },
  {
    kod: "ZZ",
    nazev: "Zimní zahrady a vrata",
    profily: "Zimní zahrady · garážová vrata · příslušenství",
    popis:
      "Přístavby, kde se dá bydlet celý rok, sekční garážová vrata a doplňky — žaluzie, sítě proti hmyzu i parapety.",
  },
];

const kroky = [
  {
    c: "01",
    nadpis: "Zaměření a kalkulace zdarma",
    text: "Přijedeme k vám domů, změříme každý otvor a spočítáme cenu na míru. Bez znalosti vašich rozměrů se okna poctivě nacenit nedají.",
  },
  {
    c: "02",
    nadpis: "Výroba ve vlastní dílně",
    text: "Okna vyrábíme sami, ne přeprodáváme. Díky tomu držíme termíny i kvalitu profilu, kování a zasklení pod kontrolou.",
  },
  {
    c: "03",
    nadpis: "Montáž, zednické začištění, úklid",
    text: "Kmenoví montéři demontují stará okna, osadí nová, začistí ostění a odvezou odpad k ekologické likvidaci. Necháme za sebou uklizeno.",
  },
  {
    c: "04",
    nadpis: "Záruční i pozáruční servis",
    text: "Seřídíme kování, vyměníme těsnění, sklo nebo samozavírač. Roky po montáži se máte na koho obrátit.",
  },
];

export default function Page() {
  return (
    <main className="jv">
      <header className="jv-top">
        <a className="jv-brand" href="#" aria-label="J&amp;V OKNA — úvod">
          <span className="jv-brand-mark" aria-hidden="true">
            <span className="jv-pane" />
            <span className="jv-pane" />
          </span>
          <span className="jv-brand-word">
            J<span className="jv-amp">&amp;</span>V <em>OKNA</em>
          </span>
        </a>
        <nav className="jv-nav" aria-label="Hlavní">
          <a href="#produkty">Produkty</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="jv-tel" href="tel:+420605216613">605&nbsp;216&nbsp;613</a>
      </header>

      <section className="jv-hero">
        <div className="jv-hero-copy">
          <p className="jv-eyebrow">Sokolov · výrobce plastových oken od roku 1992</p>
          <h1 className="jv-h1">
            Okna, kterými se díváte<br />
            <span className="jv-h1-accent">každé ráno ven.</span>
          </h1>
          <p className="jv-lead">
            Vyrábíme plastová a hliníková okna na míru přímo v našem regionu.
            Zaměříme, vyrobíme, osadíme a začistíme — od prvního měření po
            poslední úklid to máte u jedné firmy.
          </p>
          <div className="jv-hero-cta">
            <a className="jv-btn" href="tel:+420605216613">Zavolat a domluvit zaměření</a>
            <a className="jv-btn jv-btn-ghost" href="#produkty">Prohlédnout produkty</a>
          </div>
          <dl className="jv-facts">
            <div>
              <dt>Na trhu od</dt>
              <dd>1992</dd>
            </div>
            <div>
              <dt>Zaměření &amp; kalkulace</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Vlastní</dt>
              <dd>výroba i montáž</dd>
            </div>
          </dl>
        </div>
        <figure className="jv-hero-media">
          <img
            src="/hero.webp"
            alt="Nová plastová okna J&V OKNA osazená v domě"
            width={1200}
            height={1500}
          />
          <figcaption>Zakázka na míru — profil, kování i zasklení podle vás.</figcaption>
        </figure>
      </section>

      <section id="produkty" className="jv-section">
        <div className="jv-section-head">
          <p className="jv-eyebrow">Co pro vás vyrobíme</p>
          <h2 className="jv-h2">Od jednoho okna po celou zimní zahradu</h2>
          <p className="jv-section-sub">
            Vyrábíme stovky typů a tisíce variant. Níže jsou tři světy, ve
            kterých se pohybujeme — vždycky na míru vašemu domu.
          </p>
        </div>

        <div className="jv-grid">
          <figure className="jv-grid-media">
            <img
              src="/section-1.webp"
              alt="Detail plastového okna s kováním a zasklením"
              width={900}
              height={700}
            />
          </figure>
          <ul className="jv-cards">
            {produkty.map((p) => (
              <li key={p.kod} className="jv-card">
                <span className="jv-card-kod" aria-hidden="true">
                  {p.kod}
                </span>
                <div className="jv-card-body">
                  <h3>{p.nazev}</h3>
                  <p className="jv-card-profily">{p.profily}</p>
                  <p>{p.popis}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="jv-cena-note">
          <strong>Cena?</strong> Okna děláme na míru, takže ji férově řekneme až
          po zaměření — ovlivní ji rozměry, profil, počet oken i náročnost
          montáže. Máme i výhodné financování na splátky.
        </p>
      </section>

      <section id="onas" className="jv-trust">
        <div className="jv-trust-media">
          <img
            src="/section-2.webp"
            alt="Montáž oken od J&V OKNA v Sokolově"
            width={900}
            height={1000}
          />
        </div>
        <div className="jv-trust-copy">
          <p className="jv-eyebrow">Kdo vám okna vyrobí</p>
          <h2 className="jv-h2">Rodinná firma, kterou v Sokolově znají</h2>
          <p className="jv-lead">
            Začínali jsme v roce 1992 jako Monty servis Miloslava Jandy. Léta
            zkušeností jsme převedli do společnosti J&amp;V OKNA s.r.o. — dnes
            vyrábíme vlastní plastová okna a dveře a zvládáme i hliník.
          </p>
          <p className="jv-trust-text">
            Montáž i zednické práce dělají naši kmenoví zaměstnanci, ne
            najatá parta na jeden den. Díky tomu ručíme za to, co po nás
            zůstane — a jsme tu i roky po montáži, když je potřeba seřídit
            kování nebo vyměnit těsnění.
          </p>

          <div id="postup" className="jv-steps">
            {kroky.map((k) => (
              <div key={k.c} className="jv-step">
                <span className="jv-step-c" aria-hidden="true">
                  {k.c}
                </span>
                <div>
                  <h3>{k.nadpis}</h3>
                  <p>{k.text}</p>
                </div>
              </div>
            ))}
          </div>

          <address className="jv-kontakt">
            <span className="jv-kontakt-label">Obchodní kancelář</span>
            Rooseveltova 2019, 356&nbsp;01 Sokolov
            <span className="jv-kontakt-sep" aria-hidden="true" />
            <a href="tel:+420352622573">352&nbsp;622&nbsp;573</a>
            <a href="mailto:info@jav-okna.cz">info@jav-okna.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
