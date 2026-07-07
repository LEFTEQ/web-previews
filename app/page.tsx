export default function Page() {
  const services = [
    {
      num: "01",
      title: "Odtah po nehodě",
      desc: "Nabouráno, nepojízdné, olej na silnici? Přijedu, zajistím vozidlo a odvezu ho do servisu nebo kam potřebujete. Ve dne v noci, po Plzni i dál."
    },
    {
      num: "02",
      title: "Porucha a nastartování",
      desc: "Vybitá baterka, nechytá to, došla nafta na D5? Zkusím to nahodit na místě. Když to nepůjde, naložím a odvezu — nezůstanete stát u krajnice."
    },
    {
      num: "03",
      title: "Převoz vozidla",
      desc: "Koupili jste auto v jiném městě, stěhujete veterána nebo motorku? Naložím na plato a přivezu bez škrábance. Přeprava do 3,5 t."
    }
  ];

  return (
    <main className="kd">
      <header className="kd-top">
        <a className="kd-mark" href="#" aria-label="Karel Duras — odtahová služba Plzeň">
          <span className="kd-mark-name">DURAS</span>
          <span className="kd-mark-sub">odtahová služba · Plzeň</span>
        </a>
        <a className="kd-call kd-call--top" href="tel:+420720123456">
          <span className="kd-call-dot" aria-hidden="true"></span>
          720&nbsp;123&nbsp;456
        </a>
      </header>

      <section className="kd-hero">
        <div className="kd-hero-media">
          <img src="/hero.webp" alt="Odtahové vozidlo Karla Durase s naloženým autem na plošině v Plzni" />
          <div className="kd-hero-tape" aria-hidden="true">
            <span>NONSTOP&nbsp;·&nbsp;PLZEŇ&nbsp;A&nbsp;OKOLÍ&nbsp;·&nbsp;D5&nbsp;·&nbsp;</span>
            <span>NONSTOP&nbsp;·&nbsp;PLZEŇ&nbsp;A&nbsp;OKOLÍ&nbsp;·&nbsp;D5&nbsp;·&nbsp;</span>
          </div>
        </div>

        <div className="kd-hero-text">
          <p className="kd-eyebrow">Zůstali jste stát? Volejte, ne mailujte.</p>
          <h1 className="kd-title">
            Přijedu<br />
            a odvezu<br />
            <span className="kd-title-em">vaše auto.</span>
          </h1>
          <p className="kd-lead">
            Karel Duras — odtahová služba pro Plzeň, Plzeňský kraj a dálnici&nbsp;D5.
            Zvednu telefon i ve tři ráno, řeknu vám čas dojezdu a naložím
            i vůz, který nejde nastartovat.
          </p>
          <div className="kd-hero-actions">
            <a className="kd-btn" href="tel:+420720123456">Zavolat: 720 123 456</a>
            <a className="kd-btn kd-btn--ghost" href="sms:+420720123456">Napsat SMS s polohou</a>
          </div>
        </div>
      </section>

      <section className="kd-section kd-services" aria-labelledby="sluzby">
        <div className="kd-section-head">
          <p className="kd-eyebrow">Co pro vás udělám</p>
          <h2 id="sluzby" className="kd-h2">Tři situace, jednou zvednu telefon.</h2>
        </div>

        <ol className="kd-list">
          {services.map((s) => (
            <li className="kd-card" key={s.num}>
              <span className="kd-card-num" aria-hidden="true">{s.num}</span>
              <div className="kd-card-body">
                <h3 className="kd-card-title">{s.title}</h3>
                <p className="kd-card-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="kd-figure">
          <img src="/section-1.webp" alt="Naložené auto na odtahové plošině připravené k převozu" />
          <figcaption>Plato do 3,5 t — auto veze bezpečně, ne za tažné lano.</figcaption>
        </figure>
      </section>

      <section className="kd-section kd-about" aria-labelledby="onas">
        <figure className="kd-figure kd-figure--wide">
          <img src="/section-2.webp" alt="Karel Duras u svého odtahového vozidla" />
        </figure>

        <div className="kd-about-text">
          <p className="kd-eyebrow">Kdo přijede</p>
          <h2 id="onas" className="kd-h2">Nejsem dispečink. Jsem chlap, co za vámi přijede.</h2>
          <p className="kd-about-lead">
            Odtahy dělám v Plzni přes patnáct let. Znám město, objížďky
            i každý sjezd z&nbsp;D5. Když voláte, mluvíte rovnou se mnou —
            řeknu vám, za jak dlouho jsem u&nbsp;vás a kolik to bude stát,
            ještě než sednu do auta.
          </p>

          <dl className="kd-facts">
            <div className="kd-fact">
              <dt>Dojezd v Plzni</dt>
              <dd>obvykle do 30&nbsp;minut</dd>
            </div>
            <div className="kd-fact">
              <dt>Kdy volat</dt>
              <dd>nonstop, i o víkendu</dd>
            </div>
            <div className="kd-fact">
              <dt>Kam odvezu</dt>
              <dd>servis, domů, kamkoli</dd>
            </div>
            <div className="kd-fact">
              <dt>Cena předem</dt>
              <dd>řeknu do telefonu</dd>
            </div>
          </dl>

          <blockquote className="kd-quote">
            „Zůstali jsme s nastartovaným, ale nepojízdným autem u Bory
            v deset večer. Pan Duras dorazil za dvacet minut, naložil to
            v klidu a odvezl do servisu. Jednal narovinu.“
            <cite>— Petra H., Plzeň-Jižní Předměstí</cite>
          </blockquote>

          <a className="kd-btn" href="tel:+420720123456">Zavolat Karlovi: 720 123 456</a>
        </div>
      </section>
    </main>
  );
}
