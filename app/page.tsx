import type { CSSProperties } from "react";

export default function Page() {
  const tap: { n: string; name: string; note: string }[] = [
    { n: "01", name: "Frizzante", note: "perlivé, k vodě a ledu" },
    { n: "02", name: "Primitivo", note: "nově na čepu" },
    { n: "03", name: "Ryzlink rýnský", note: "suché, vychlazené" },
    { n: "04", name: "Rulandské šedé", note: "polosuché" },
    { n: "05", name: "Modrý Portugal", note: "lehké červené" },
    { n: "06", name: "Nealko jahoda", note: "stáčené, bez alkoholu" },
  ];

  const offer: { title: string; body: string; img: string; alt: string; tag: string }[] = [
    {
      tag: "Na čepu",
      title: "Až 38 vín rovnou z čepu",
      body: "Přineste si vlastní láhev nebo demižon a natočíme vám přesně tolik, kolik potřebujete. Vybraná vína chladíme, takže odcházíte s ideální teplotou. K tomu stáčené nealko drinky s příchutí lesní jahody nebo manga — pro řidiče i vyznavače čisté hlavy.",
      img: "/section-1.webp",
      alt: "Řada výčepních kohoutů s čepovaným vínem v olomoucké vinotéce",
    },
    {
      tag: "Z regálu",
      title: "Lahvová vína a k nim pochutiny",
      body: "Pestrý výběr lahvových vín z Moravy i ze světa, seřazený tak, abyste si vybrali podle chuti, ne podle etikety. K tomu holandské sýry a italské uzeniny — ať máte doma rovnou i co k tomu otevřít.",
      img: "/section-2.webp",
      alt: "Regál s lahvovými víny a talíř sýrů a uzenin",
    },
  ];

  return (
    <main className="nv">
      <header className="nv-top">
        <a className="nv-brand" href="#uvod" aria-label="Naše Vinotéka Olomouc, úvod">
          <span className="nv-brand-mark" aria-hidden="true">NV</span>
          <span className="nv-brand-word">
            Naše Vinotéka
            <span className="nv-brand-sub">Olomouc · Holice</span>
          </span>
        </a>
        <span className="nv-guarantee">Víno se zárukou</span>
      </header>

      <section className="nv-hero" id="uvod">
        <p className="nv-eyebrow">Vinotéka · Sladkovského 656/38, Olomouc</p>
        <h1 className="nv-title">
          <span className="nv-title-line">Natočíme</span>
          <span className="nv-title-line nv-title-em">přesně</span>
          <span className="nv-title-line">tolik vína,</span>
          <span className="nv-title-line nv-title-em">kolik chcete.</span>
        </h1>
        <p className="nv-lede">
          Přineste si láhev, my ji naplníme z čepu — a dáme vám na to záruku kvality.
          Vybraná vína chladíme, takže odcházíte připravení k prvnímu doušku.
        </p>

        <div className="nv-fill" role="img" aria-label="Grafické znázornění plnící se láhve — 38 čepovaných vín">
          <div className="nv-fill-glass">
            <span className="nv-fill-level" />
          </div>
          <div className="nv-fill-num">
            <span className="nv-fill-count">38</span>
            <span className="nv-fill-label">čepovaných vín — vybraná chladíme</span>
          </div>
        </div>

        <dl className="nv-facts">
          <div className="nv-fact">
            <dt>Poboček na Moravě</dt>
            <dd>16</dd>
          </div>
          <div className="nv-fact">
            <dt>Otevřeno</dt>
            <dd>po–pá 8–16</dd>
          </div>
          <div className="nv-fact">
            <dt>Zavolejte nám</dt>
            <dd><a href="tel:+420730159099">730 159 099</a></dd>
          </div>
        </dl>
      </section>

      <section className="nv-tap" aria-labelledby="tap-h">
        <div className="nv-sec-head">
          <p className="nv-eyebrow">Dnes na čepu</p>
          <h2 id="tap-h" className="nv-h2">Co vám natočíme</h2>
        </div>
        <ul className="nv-taplist">
          {tap.map((t) => (
            <li key={t.n} className="nv-taprow">
              <span className="nv-tapn">{t.n}</span>
              <span className="nv-tapname">{t.name}</span>
              <span className="nv-tapnote">{t.note}</span>
            </li>
          ))}
        </ul>
        <p className="nv-tapfoot">Nabídka se mění podle sezóny — v létě přibývá frizzante a nealko drinky ready to drink.</p>
      </section>

      {offer.map((o, i) => (
        <section className={"nv-offer" + (i % 2 ? " nv-offer-rev" : "")} key={o.title} aria-labelledby={"offer-" + i}>
          <div className="nv-offer-media">
            <img src={o.img} alt={o.alt} loading="lazy" decoding="async" />
          </div>
          <div className="nv-offer-text">
            <p className="nv-eyebrow">{o.tag}</p>
            <h2 className="nv-h2" id={"offer-" + i}>{o.title}</h2>
            <p className="nv-body">{o.body}</p>
          </div>
        </section>
      ))}

      <section className="nv-trust" aria-labelledby="trust-h">
        <div className="nv-sec-head">
          <p className="nv-eyebrow">Proč u nás</p>
          <h2 id="trust-h" className="nv-h2">Víno se zárukou znamená klid</h2>
        </div>
        <div className="nv-trustgrid">
          <article className="nv-card">
            <h3>Záruka kvality</h3>
            <p>Na víno zakoupené u nás dáváme záruku. Když něco není v pořádku, vyřešíme to — bez řečí.</p>
          </article>
          <article className="nv-card">
            <h3>Sommeliérské minimum</h3>
            <p>Poradíme, co k čemu a proč. Bez naučených frází — řekneme, co doopravdy chutná.</p>
          </article>
          <article className="nv-card">
            <h3>Věrnostní program</h3>
            <p>Za každých 25 Kč nákupu jeden bod. Body měníte za slevu na celý nákup ve všech pobočkách.</p>
          </article>
          <article className="nv-card nv-card-wide">
            <h3>Najdete nás v Holici</h3>
            <p>Sladkovského 656/38, 779 00 Olomouc 9 – Holice. Kancelář po–pá 8:00–16:00.</p>
            <p className="nv-cardcall"><a href="tel:+420730159099">Zavolat 730 159 099</a></p>
          </article>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
const _unused: CSSProperties = {};
void _unused;
