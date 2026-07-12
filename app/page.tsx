import React from "react";

export default function Page() {
  const stages = [
    {
      no: "01",
      title: "Vyklidíme a bouráme",
      body: "Starou koupelnu i bytové jádro rozebereme do zdi. Suť odvezeme, prach udržíme pod kontrolou — sousedy si nerozhádáte.",
    },
    {
      no: "02",
      title: "Rozvody vody a odpady",
      body: "Nové plastové rozvody, odpady ve spádu, příprava pro baterie a záchod. Vše otestujeme na tlak, než přijde obklad.",
    },
    {
      no: "03",
      title: "Hydroizolace a obklady",
      body: "Sprchový kout a stěny natřeme tekutou hydroizolací s koutovými pásky. Až pak jde nahoru obklad — rovný, se stejnou spárou.",
    },
    {
      no: "04",
      title: "Zařizujeme a předáváme",
      body: "Vana, umyvadlo, baterie, topení a svítidla na místě. Uklidíme a předáme hotovou koupelnu, kterou stačí napustit vodou.",
    },
  ];

  const proof = [
    { k: "1996", v: "Stavíme a rekonstruujeme na Chodovsku od roku 1996 — nejdřív jako živnostníci, dnes jako Zintex spol. s r.o." },
    { k: "Německo", v: "Zkušenost z německých staveb. Odtud ta pečlivost dotažená do každého detailu a spáry." },
    { k: "Na klíč", v: "Bourání, voda, elektrika, obklady, zařízení — jeden tým, jedna odpovědnost. Nekoordinujete pět řemeslníků." },
  ];

  return (
    <main className="zx">
      <header className="zx-top">
        <a className="zx-mark" href="#top" aria-label="Zintex, domů">
          <span className="zx-mark-z">ZIN</span><span className="zx-mark-t">TEX</span>
          <span className="zx-mark-sub">koupelny · Chodov</span>
        </a>
        <a className="zx-phone" href="tel:+420777023641">777 023 641</a>
      </header>

      <section className="zx-hero" id="top">
        <div className="zx-hero-media">
          <img src="/hero.webp" alt="Nově zrekonstruovaná koupelna s velkoformátovým obkladem a sprchovým koutem" />
        </div>
        <div className="zx-hero-copy">
          <p className="zx-eyebrow">Rekonstrukce koupelen · nám. 9. května, Chodov u Karlových Var</p>
          <h1 className="zx-h1">
            Ze starého bytového&nbsp;jádra
            <em> hotová koupelna</em>
            <br/>za jednu domluvenou lhůtu.
          </h1>
          <p className="zx-lead">
            Přijedeme, změříme, řekneme cenu i termín — a pak už jen bouráme, vedeme vodu, obkládáme
            a zařizujeme. Jeden tým od první suti po napuštěnou vanu.
          </p>
          <div className="zx-hero-actions">
            <a className="zx-btn" href="tel:+420777023641">Zavolat Jaroslavu Zigalovi</a>
            <a className="zx-btn-ghost" href="#postup">Jak rekonstrukce probíhá</a>
          </div>
        </div>
      </section>

      <section className="zx-stages" id="postup" aria-labelledby="postup-h">
        <div className="zx-sec-head">
          <p className="zx-eyebrow">Postup na klíč</p>
          <h2 className="zx-h2" id="postup-h">Čtyři fáze, žádné čekání mezi řemeslníky</h2>
          <p className="zx-sec-lead">
            Koupelnu měníme v jednom sledu — mokré procesy plánujeme tak, aby vám doma
            neschla jedna vrstva zbytečně dlouho. Nejčastěji hotovo za dva až tři týdny.
          </p>
        </div>
        <ol className="zx-stage-list">
          {stages.map((s) => (
            <li className="zx-stage" key={s.no}>
              <span className="zx-stage-no">{s.no}</span>
              <div>
                <h3 className="zx-stage-title">{s.title}</h3>
                <p className="zx-stage-body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="zx-figure">
          <img src="/section-1.webp" alt="Detail obkladu a spárování v rekonstruované koupelně od Zintexu" />
          <figcaption>Spára po spáře — přípravě každé akce věnujeme čas, který se pak vrátí v hladkém průběhu stavby.</figcaption>
        </figure>
      </section>

      <section className="zx-trust" aria-labelledby="trust-h">
        <div className="zx-trust-media">
          <img src="/section-2.webp" alt="Rekonstruovaný interiér koupelny s obklady a zařizovacími předměty" />
        </div>
        <div className="zx-trust-copy">
          <p className="zx-eyebrow">O firmě Zintex</p>
          <h2 className="zx-h2" id="trust-h">Rodinná firma z Chodova. Řemeslo, ne subdodávka.</h2>
          <p className="zx-sec-lead">
            Kromě koupelen zvládneme celý byt, kancelář, půdní vestavbu i drobné objekty.
            Ale koupelna je disciplína, kde se pozná, jestli řemeslník myslel dopředu —
            a tu děláme nejradši.
          </p>
          <dl className="zx-proof">
            {proof.map((p) => (
              <div className="zx-proof-row" key={p.k}>
                <dt>{p.k}</dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </dl>
          <p className="zx-contact-line">
            Provozovna Tovární 223, Chodov · <a href="mailto:jzigal@seznam.cz">jzigal@seznam.cz</a> · Jaroslav a Pavel Zigalovi
          </p>
        </div>
      </section>
    </main>
  );
}
