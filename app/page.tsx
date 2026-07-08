import type { CSSProperties } from "react";

export default function Page() {
  const stanice = [
    {
      num: "01",
      title: "Výkup vozidel",
      lead: "Vykoupíme osobák, dodávku i motorku. Cenu řekneme na rovinu ještě dnes.",
      body: "Přijedete, my prohlédneme vůz, řekneme částku a peníze máte na účtu bez čekání. Bereme i vozy po havárii nebo s najetými kilometry.",
    },
    {
      num: "02",
      title: "Prodej ojetých vozů",
      lead: "Tuzemské i zahraniční ojetiny — každá s prohlídkou a zkušební jízdou.",
      body: "Než vůz nabídneme, projede naší dílnou. Ke každému autu si sednete za volant a projedete se dřív, než se rozhodnete.",
    },
    {
      num: "03",
      title: "Financování a protiúčet",
      lead: "Rozložíme platbu, vezmeme vaše auto na protiúčet, sjednáme pojistku.",
      body: "Domluvíme splátky, které vám sedí. Staré auto uznáme jako část ceny a pojištění srovnáme u pojišťoven na trhu.",
    },
    {
      num: "04",
      title: "Servis kolem prodeje",
      lead: "Komisní prodej, půjčovna vozíků, odtah i ekologická likvidace.",
      body: "Prodáme vaše auto za vás v komisi, půjčíme přívěsný vozík, přijedeme s odtahem a vyřídíme ekologickou likvidaci s protokolem.",
    },
  ];

  const duvery = [
    { k: "7–22", v: "voláte nám každý den, i o víkendu" },
    { k: "Záruka", v: "nově i na ojeté vozy proti poruchám" },
    { k: "Ostrava", v: "vozy máte na dosah, ne přes půl republiky" },
  ];

  return (
    <main className="al">
      <a className="al-skip" href="#nabidka">Přeskočit na nabídku</a>

      <header className="al-top">
        <div className="al-wrap al-top__row">
          <div className="al-brand" aria-label="Auto Licar, autobazar Ostrava">
            <span className="al-brand__mark" aria-hidden="true">AL</span>
            <span className="al-brand__name">
              Auto<span className="al-brand__accent">Licar</span>
              <span className="al-brand__sub">autobazar · Ostrava</span>
            </span>
          </div>
          <a className="al-call" href="tel:+420776776776">
            <span className="al-call__label">Volejte 7–22 h</span>
            <span className="al-call__num">776 776 776</span>
          </a>
        </div>
      </header>

      <section className="al-hero" aria-labelledby="al-hero-h">
        <div className="al-wrap al-hero__grid">
          <div className="al-hero__text">
            <p className="al-eyebrow">Ojetá auta, na která je záruka</p>
            <h1 id="al-hero-h" className="al-hero__h">
              Auto z Ostravy,
              <br />
              které nezklame
              <br />
              <span className="al-hero__hl">na první jízdě.</span>
            </h1>
            <p className="al-hero__lead">
              Vykupujeme, prodáváme i financujeme ojeté vozy. Ke každému autu
              patří prohlídka, zkušební jízda a nově i záruka proti
              nepředvídaným poruchám.
            </p>
            <div className="al-hero__cta">
              <a className="al-btn" href="#nabidka">Co pro vás uděláme</a>
              <a className="al-btn al-btn--ghost" href="tel:+420776776776">Zavolat do bazaru</a>
            </div>
            <dl className="al-plate" aria-label="Proč k nám">
              {duvery.map((d) => (
                <div className="al-plate__cell" key={d.k}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="al-hero__media">
            <img
              src="/hero.webp"
              alt="Ojeté vozy připravené k prodeji na ploše autobazaru Auto Licar v Ostravě"
              className="al-hero__img"
              width={1200}
              height={1400}
            />
            <figcaption className="al-hero__tag">
              <span>Provozní doba</span>
              <strong>Po–Pá 9:00–17:00</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="nabidka" className="al-svc" aria-labelledby="al-svc-h">
        <div className="al-wrap">
          <div className="al-head">
            <p className="al-eyebrow">Naše služby</p>
            <h2 id="al-svc-h" className="al-head__h">Od výkupu po klíče v ruce</h2>
            <p className="al-head__lead">
              Čtyři kroky, které řešíme pod jednou střechou v Ostravě. Nemusíte
              nikam jinam.
            </p>
          </div>

          <ol className="al-svc__list">
            {stanice.map((s) => (
              <li className="al-svc__item" key={s.num}>
                <span className="al-svc__num" aria-hidden="true">{s.num}</span>
                <div className="al-svc__body">
                  <h3 className="al-svc__title">{s.title}</h3>
                  <p className="al-svc__lead">{s.lead}</p>
                  <p className="al-svc__text">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="al-svc__strip">
            <img
              src="/section-1.webp"
              alt="Detail nabídky ojetých vozů autobazaru Auto Licar"
              className="al-svc__stripimg"
              width={1600}
              height={700}
            />
          </figure>
        </div>
      </section>

      <section id="o-nas" className="al-about" aria-labelledby="al-about-h">
        <div className="al-wrap al-about__grid">
          <figure className="al-about__media">
            <img
              src="/section-2.webp"
              alt="Prodejní plocha a zázemí autobazaru Auto Licar v Ostravě"
              className="al-about__img"
              width={1000}
              height={1200}
            />
          </figure>
          <div className="al-about__text">
            <p className="al-eyebrow">Kdo jsme</p>
            <h2 id="al-about-h" className="al-head__h">
              Autobazar, který ojede každé auto před vámi
            </h2>
            <p className="al-about__p">
              Na trhu jezdíme řadu let a specializujeme se na ojeté tuzemské i
              zahraniční vozy. Neprodáváme, co neznáme — každý vůz projede
              prohlídkou, a než ho koupíte, sami si ho projedete.
            </p>
            <ul className="al-about__list">
              <li>Prohlídka i zkušební jízda ke každému vozu — samozřejmost, ne nadstandard</li>
              <li>Záruka na ojeté vozy proti mechanickým a elektrickým poruchám</li>
              <li>Protiúčet, financování a pojištění vyřídíme na místě</li>
              <li>Odtahová služba a ekologická likvidace s řádným protokolem</li>
            </ul>
            <div className="al-about__ping">
              <p className="al-about__pingtxt">
                Ptáte se na konkrétní auto nebo na záruku?
              </p>
              <a className="al-btn" href="tel:+420776776776">Zavolat 776 776 776</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
