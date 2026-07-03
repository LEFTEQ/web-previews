import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      k: "01",
      title: "Montáž nové klimatizace",
      body:
        "Vybereme jednotku podle velikosti místnosti, orientace oken a toho, jak byt používáte. Navrhneme trasu potrubí, prorazíme prostup, natlakujeme okruh dusíkem a spustíme do provozu. Odejdeme s uklizeným bytem.",
    },
    {
      k: "02",
      title: "Servis a čištění",
      body:
        "Vydezinfikujeme výparník, vyměníme filtry, zkontrolujeme tlak chladiva a odvod kondenzátu. Klimatizace přestane zapáchat a začne zase chladit tak, jak má. Doporučujeme jednou ročně, ideálně na jaře.",
    },
    {
      k: "03",
      title: "Doplnění chladiva a hledání netěsností",
      body:
        "Když jednotka chladí slabě, obvykle uniká chladivo. Najdeme místo úniku, opravíme spoj, doplníme R32 nebo R410A a znovu natlakujeme okruh. Vystavíme protokol o kontrole těsnosti.",
    },
    {
      k: "04",
      title: "Tepelné čerpadlo vzduch–vzduch",
      body:
        "Ta samá jednotka, která v létě chladí, vám v zimě levně přitopí. Poradíme, kdy se to vyplatí, a zapojíme tak, abyste topili za zlomek ceny přímotopu.",
    },
  ];

  return (
    <main className="jj">
      <header className="jj-nav">
        <a className="jj-mark" href="#" aria-label="Jakub Jedlička — klimatizace Liberec">
          <span className="jj-mark-jj">JJ</span>
          <span className="jj-mark-txt">
            Jakub Jedlička
            <span className="jj-mark-sub">klimatizace · Liberec</span>
          </span>
        </a>
        <a className="jj-tel" href="tel:+420720000000">Zavolat</a>
      </header>

      <section className="jj-hero">
        <div className="jj-hero-copy">
          <p className="jj-eyebrow">Klimatizace &amp; tepelná čerpadla · Liberecko</p>
          <h1 className="jj-h1">
            Než přijdou<br />
            <span className="jj-temp">30&nbsp;°C</span>,<br />
            máte doma <em>21</em>.
          </h1>
          <p className="jj-lead">
            Jsem Jakub Jedlička. Montuji a servisuji klimatizace v Liberci a okolí.
            Přijedu, změřím, poradím rovnou na místě a řeknu vám cenu předem — bez
            zbytečných řečí a bez toho, aby vám v obýváku zůstal nepořádek.
          </p>
          <div className="jj-hero-cta">
            <a className="jj-btn" href="tel:+420720000000">Zavolat a domluvit zaměření</a>
            <a className="jj-btn jj-btn-ghost" href="#sluzby">Co dělám</a>
          </div>
          <ul className="jj-facts">
            <li><b>Do 2 dnů</b> u vás na zaměření</li>
            <li><b>Certifikace</b> na práci s chladivy</li>
            <li><b>Záruka</b> na montáž i chod</li>
          </ul>
        </div>
        <div className="jj-hero-media">
          <img
            src="/hero.webp"
            alt="Nástěnná klimatizační jednotka namontovaná v obytné místnosti"
            className="jj-hero-img"
          />
          <div className="jj-dial" aria-hidden="true">
            <span className="jj-dial-num">21</span>
            <span className="jj-dial-unit">°C</span>
            <span className="jj-dial-label">nastaveno</span>
          </div>
        </div>
      </section>

      <section id="sluzby" className="jj-sec">
        <div className="jj-sec-head">
          <p className="jj-eyebrow">Co pro vás udělám</p>
          <h2 className="jj-h2">Od nové jednotky po vyčištění té staré.</h2>
          <p className="jj-sec-lead">
            Dělám celou cestu sám — od návrhu po pravidelný servis. Nemontuji ve
            velkém, mám čas se každé zakázce věnovat. Split, multisplit i tepelné
            čerpadlo do bytu, kanceláře nebo provozovny.
          </p>
        </div>

        <div className="jj-grid">
          <img
            src="/section-1.webp"
            alt="Technik při montáži venkovní klimatizační jednotky"
            className="jj-grid-img"
          />
          <ol className="jj-list">
            {services.map((s) => (
              <li className="jj-item" key={s.k}>
                <span className="jj-item-k">{s.k}</span>
                <div>
                  <h3 className="jj-item-t">{s.title}</h3>
                  <p className="jj-item-b">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="jj-sec jj-sec-dark">
        <div className="jj-about">
          <div className="jj-about-copy">
            <p className="jj-eyebrow jj-eyebrow-light">Proč zrovna já</p>
            <h2 className="jj-h2">Jeden člověk, který si za tím stojí.</h2>
            <p className="jj-about-lead">
              Nejsem řetězec ani call centrum. Když mi zavoláte, mluvíte přímo
              s člověkem, který vám tu klimatizaci namontuje. Znám Liberec,
              paneláky na Rochlicích i staré vily pod Ještědem — a vím, kam se dá
              jednotka pověsit tak, aby nerušila a dobře chladila.
            </p>
            <blockquote className="jj-quote">
              „Přišel přesně na čas, všechno vysvětlil dopředu a cena seděla na
              korunu. Po montáži jsem po něm nemusela ani zametat.“
              <cite>— paní Nováková, Liberec-Ruprechtice</cite>
            </blockquote>
            <dl className="jj-nums">
              <div>
                <dt>Namontovaných jednotek</dt>
                <dd>600+</dd>
              </div>
              <div>
                <dt>Roků v oboru</dt>
                <dd>12</dd>
              </div>
              <div>
                <dt>Dojezd zdarma</dt>
                <dd>Liberec &amp; okolí</dd>
              </div>
            </dl>
          </div>
          <img
            src="/section-2.webp"
            alt="Detail nainstalované klimatizace a ovladače na stěně"
            className="jj-about-img"
          />
        </div>
      </section>
    </main>
  );
}
