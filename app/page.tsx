import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Reklama a média",
      lead: "Full service od nápadu po tisk",
      body: "Vezmeme si na starost všechno — grafiku, texty, výběr médií i produkci. Vy schválíte koncept, my dodáme hotový billboard, polep auta i kampaň na sítích. Vy se o nic nestaráte.",
      tags: ["Vizuální identita", "Tisk a polepy", "Kampaně"],
    },
    {
      no: "02",
      title: "Firemní akce a eventy",
      lead: "Koncept šitý na míru",
      body: "Teambuilding, večírek pro zaměstnance, konference nebo raut pro klienty. Vymyslíme scénář, zařídíme místo, techniku i catering a stojíme u toho až do poslední minuty. Detail za detailem.",
      tags: ["Firemní večírky", "Konference", "Produkce na klíč"],
    },
    {
      no: "03",
      title: "Akce pro veřejnost",
      lead: "Vlastní produkce v Pardubicích",
      body: "Máme za sebou vlastní akce pro děti i dospělé po celém Pardubickém kraji. Umíme naplnit náměstí i halu — od dětského dne po venkovní festival. Přijďte se za námi podívat.",
      tags: ["Dětské dny", "Festivaly", "Náměstí"],
    },
  ];

  const proof = [
    { k: "25", label: "let na scéně", sub: "od prvního plakátu po dnešek" },
    { k: "Pce", label: "základna", sub: "Pardubice a celý kraj" },
    { k: "1:1", label: "přístup", sub: "ke každému klientovi zvlášť" },
  ];

  return (
    <main className="cm">
      <header className="cm-top">
        <a className="cm-mark" href="#uvod" aria-label="Czech Marketing — úvod">
          <span className="cm-mark-czech">Czech</span>
          <span className="cm-mark-mark">Marketing</span>
        </a>
        <nav className="cm-nav" aria-label="Hlavní navigace">
          <a href="#co-delame">Co děláme</a>
          <a href="#o-nas">O nás</a>
          <a className="cm-nav-cta" href="#poptavka">Nezávazná poptávka</a>
        </nav>
      </header>

      <section className="cm-hero" id="uvod">
        <div className="cm-hero-media">
          <img
            src="/hero.webp"
            alt="Realizace reklamní a eventové agentury Czech Marketing v Pardubicích"
            className="cm-hero-img"
          />
          <div className="cm-hero-scrim" aria-hidden="true" />
        </div>

        <div className="cm-hero-inner">
          <p className="cm-eyebrow">Reklamní &amp; eventová agentura · Pardubice</p>
          <h1 className="cm-hero-h">
            <span className="cm-hero-line">Reklama</span>
            <span className="cm-hero-line cm-hero-line--accent">ve vašem</span>
            <span className="cm-hero-line">tempu.</span>
          </h1>
          <p className="cm-hero-sub">
            Čtvrtstoletí děláme reklamu a akce po celých Pardubicích. Vy řeknete
            záměr, my ho dotáhneme od prvního skicáku po poslední šroub na
            pódiu — bez toho, abyste museli řešit dodavatele.
          </p>
          <div className="cm-hero-actions">
            <a className="cm-btn" href="#poptavka">Chci nezávaznou kalkulaci</a>
            <a className="cm-btn cm-btn--ghost" href="#co-delame">Co všechno umíme</a>
          </div>
        </div>

        <div className="cm-hero-ticker" aria-hidden="true">
          <span>Grafika</span><span>·</span>
          <span>Tisk</span><span>·</span>
          <span>Eventy</span><span>·</span>
          <span>Corporate identity</span><span>·</span>
          <span>Produkce</span><span>·</span>
          <span>Kampaně</span>
        </div>
      </section>

      <section className="cm-sec cm-services" id="co-delame" aria-labelledby="co-delame-h">
        <div className="cm-sec-head">
          <p className="cm-eyebrow cm-eyebrow--dark">Co nás baví</p>
          <h2 className="cm-sec-h" id="co-delame-h">
            Tři obory, jedna parta lidí
          </h2>
          <p className="cm-sec-lead">
            Nejsme obří síť poboček. Jsme tým, který vezme zakázku od začátku do
            konce — a proto vždycky víte, s kým mluvíte.
          </p>
        </div>

        <div className="cm-cards">
          {services.map((s) => (
            <article className="cm-card" key={s.no}>
              <div className="cm-card-no" aria-hidden="true">{s.no}</div>
              <h3 className="cm-card-h">{s.title}</h3>
              <p className="cm-card-lead">{s.lead}</p>
              <p className="cm-card-body">{s.body}</p>
              <ul className="cm-card-tags">
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="cm-strip">
          <img
            src="/section-1.webp"
            alt="Ukázka reklamní produkce agentury Czech Marketing"
            className="cm-strip-img"
          />
          <div className="cm-strip-body">
            <h3 className="cm-strip-h">Full service znamená, že to nese jeden tým</h3>
            <p>
              Nápad, návrh, výroba i den D. Nemusíte hledat grafika, tiskárnu a
              produkci zvlášť — všechno se sbíhá u nás v Pardubicích a vy máte
              jeden telefon, který zvedne odpovědný člověk.
            </p>
          </div>
        </div>
      </section>

      <section className="cm-sec cm-about" id="o-nas" aria-labelledby="o-nas-h">
        <div className="cm-about-grid">
          <div className="cm-about-media">
            <img
              src="/section-2.webp"
              alt="Tým agentury Czech Marketing při přípravě akce"
              className="cm-about-img"
            />
          </div>
          <div className="cm-about-text">
            <p className="cm-eyebrow cm-eyebrow--dark">O nás</p>
            <h2 className="cm-sec-h" id="o-nas-h">
              Reklama je naše vášeň už 25 let
            </h2>
            <p className="cm-about-p">
              Za tu dobu jsme si vyzkoušeli skoro všechno — od plakátů na
              autobusové zastávky po večírky pro pár set lidí. Co zůstává:
              lidské jednání, rychlost a to, že každý klient dostane vlastní
              řešení, ne šablonu z fabriky.
            </p>

            <ul className="cm-values">
              <li>
                <span className="cm-value-k">Rychlost &amp; kvalita</span>
                <span className="cm-value-v">Termín držíme, kvalitu nepustíme.</span>
              </li>
              <li>
                <span className="cm-value-k">Individuální přístup</span>
                <span className="cm-value-v">Ke každé značce jdeme zvlášť.</span>
              </li>
              <li>
                <span className="cm-value-k">Kreativa, co funguje</span>
                <span className="cm-value-v">Originální, ale efektivní.</span>
              </li>
            </ul>
          </div>
        </div>

        <dl className="cm-proof">
          {proof.map((p) => (
            <div className="cm-proof-item" key={p.label}>
              <dt className="cm-proof-k">{p.k}</dt>
              <dd className="cm-proof-l">
                <strong>{p.label}</strong>
                <span>{p.sub}</span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="cm-about-foot" id="poptavka">
          Potřebujete corporate identity, akci pro zaměstnance nebo originální
          vánoční dárky? Napište nám — nezávazná kalkulace a koncept na míru
          jsou u nás zdarma.
        </p>
      </section>
    </main>
  );
}

// typová jistota pro případné inline styly
export const dynamic = "force-static";
const _unused: CSSProperties = {};
void _unused;
