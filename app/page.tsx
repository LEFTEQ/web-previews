import type { CSSProperties } from "react";

export default function Page() {
  const jobs = [
    {
      no: "01",
      title: "Seřízení řazení a brzd",
      desc: "Přehazovačka cvaká přesně, kotoučovky drží. Základ, který na kole poznáte hned za rohem.",
      time: "od 45 min",
      price: "od 250 Kč",
    },
    {
      no: "02",
      title: "Výměna řetězu a kazety",
      desc: "Změříme opotřebení pásmovým měřidlem. Vyměníme, než vám sežere převodník. KMC, Shimano skladem.",
      time: "od 30 min",
      price: "od 300 Kč",
    },
    {
      no: "03",
      title: "Servis tlumičů a vidlic FOX",
      desc: "Autorizovaný servis FOX. Výměna oleje, těsnění, servis vzduchové komory i tlumiče na zadní stavbě.",
      time: "2–5 dní",
      price: "od 890 Kč",
    },
    {
      no: "04",
      title: "Vycentrování a zapletení kol",
      desc: "Osmičku srovnáme, prasklý drát dopleteme, nové kolo zapleteme na míru — Novatec náboje na skladě.",
      time: "od 40 min",
      price: "od 200 Kč",
    },
    {
      no: "05",
      title: "Diagnostika a servis elektrokol",
      desc: "Načteme chybové kódy pohonu, zkontrolujeme baterii a konektory. Aby vás motor netáhnul jen do kopce.",
      time: "od 60 min",
      price: "od 450 Kč",
    },
    {
      no: "06",
      title: "Kompletní prohlídka před sezónou",
      desc: "Projedeme kolo šroub po šroubu, promažeme, seřídíme, nahustíme. Vyjedete připravení na jaro.",
      time: "od 90 min",
      price: "od 690 Kč",
    },
  ];

  return (
    <main className="cs">
      <header className="cs-top">
        <a className="cs-brand" href="#" aria-label="CYKLOŠVEC — cykloservis České Budějovice">
          <span className="cs-brand-mark" aria-hidden="true">
            <span className="cs-cog">⚙</span>
          </span>
          <span className="cs-brand-text">
            <span className="cs-brand-name">CYKLOŠVEC</span>
            <span className="cs-brand-sub">cykloservis · České Budějovice</span>
          </span>
        </a>
        <a className="cs-call" href="tel:+420387123456">
          <span className="cs-call-label">Objednat na servis</span>
          <span className="cs-call-num">387 123 456</span>
        </a>
      </header>

      <section className="cs-hero">
        <div className="cs-hero-media">
          <img
            src="/hero.webp"
            alt="Mechanik CYKLOŠVEC ve stojanu seřizuje přehazovačku horského kola"
            className="cs-hero-img"
          />
        </div>
        <div className="cs-hero-body">
          <p className="cs-eyebrow">Servis, který kolo vrátí do formy</p>
          <h1 className="cs-hero-h1">
            Přivezte kolo <span className="cs-ink">rozladěné</span>.
            <br />
            Odjedete na <span className="cs-ink">seřízeném</span>.
          </h1>
          <p className="cs-lead">
            Ve dílně v Českých Budějovicích děláme cykloservis od roku 1994 — od cvakající
            přehazovačky po servis tlumičů FOX. Autorizovaný servis, díly skladem, řešíme i zapletení kol na míru.
          </p>
          <div className="cs-hero-actions">
            <a className="cs-btn cs-btn-solid" href="tel:+420387123456">Objednat kolo na servis</a>
            <a className="cs-btn cs-btn-ghost" href="#cenik">Prohlédnout ceník</a>
          </div>
          <dl className="cs-facts">
            <div className="cs-fact">
              <dt>Autorizovaný servis</dt>
              <dd>FOX · Shimano</dd>
            </div>
            <div className="cs-fact">
              <dt>Kolo zpět</dt>
              <dd>často do 48 hodin</dd>
            </div>
            <div className="cs-fact">
              <dt>Dílna</dt>
              <dd>České Budějovice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cs-services" id="cenik" aria-labelledby="cs-services-h">
        <div className="cs-sec-head">
          <p className="cs-eyebrow">Co ve dílně nejčastěji řešíme</p>
          <h2 id="cs-services-h" className="cs-sec-h">Ceník servisu, bez překvapení na účtu</h2>
          <p className="cs-sec-note">
            Ceny jsou za práci. Materiál a díly připočítáme podle skladových cen —
            řekneme dopředu, ať víte, do čeho jdete.
          </p>
        </div>

        <ol className="cs-jobs">
          {jobs.map((j) => (
            <li className="cs-job" key={j.no}>
              <span className="cs-job-no" aria-hidden="true">{j.no}</span>
              <div className="cs-job-body">
                <h3 className="cs-job-title">{j.title}</h3>
                <p className="cs-job-desc">{j.desc}</p>
                <div className="cs-job-meta">
                  <span className="cs-job-time">{j.time}</span>
                  <span className="cs-job-price">{j.price}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="cs-services-foot">
          <img
            src="/section-1.webp"
            alt="Detail dílenského stojanu, klíčů a rozebrané přehazovačky v servisu CYKLOŠVEC"
            className="cs-services-img"
          />
          <div className="cs-services-foot-text">
            <h3 className="cs-mini-h">Nevíte, co kolu je?</h3>
            <p>
              Přivezte ho. Zdarma projedeme, co je špatně, a řekneme cenu ještě
              před tím, než sáhneme po klíči. Do opravy jdeme až s vaším kývnutím.
            </p>
            <a className="cs-btn cs-btn-ghost" href="tel:+420387123456">Domluvit prohlídku zdarma</a>
          </div>
        </div>
      </section>

      <section className="cs-about" aria-labelledby="cs-about-h">
        <div className="cs-about-media">
          <img
            src="/section-2.webp"
            alt="Prodejna a dílna CYKLOŠVEC v Českých Budějovicích s vystavenými koly"
            className="cs-about-img"
          />
        </div>
        <div className="cs-about-body">
          <p className="cs-eyebrow">Proč nám kolo svěřit</p>
          <h2 id="cs-about-h" className="cs-sec-h">
            Dílna, kde poznají vaše kolo dřív, než dojedete ke dveřím
          </h2>
          <p className="cs-lead cs-about-lead">
            Nejsme obří e-shop, kde zmizíte v pořadovém čísle. Jsme parta mechaniků
            z jižních Čech, co jezdí na kole stejně jako vy — přes týden ladíme v dílně,
            o víkendu testujeme na trailech kolem Budějovic.
          </p>

          <ul className="cs-proof">
            <li>
              <span className="cs-proof-k">30 let</span>
              <span className="cs-proof-v">v jedné dílně, přes zimu i sezónu</span>
            </li>
            <li>
              <span className="cs-proof-k">FOX</span>
              <span className="cs-proof-v">autorizovaný servis tlumičů a vidlic</span>
            </li>
            <li>
              <span className="cs-proof-k">Díly skladem</span>
              <span className="cs-proof-v">Shimano, KMC, Kenda, Novatec</span>
            </li>
          </ul>

          <figure className="cs-quote">
            <blockquote>
              „Vzali mi kolo v pátek s rozsypaným zadním nábojem, v neděli ráno jsem
              jel na závod. Vysvětlili, co dělali a proč. Jinam už nejezdím.“
            </blockquote>
            <figcaption>— Martin H., silničkář z Hluboké nad Vltavou</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
