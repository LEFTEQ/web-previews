import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dentlaser — zubní ordinace MUDr. Michaely Mallátové | České Budějovice",
  description:
    "Šetrné laserové ošetření zubů v Českých Budějovicích. Specializace na parodontologii, záchovnou a estetickou stomatologii. Laser Waterlase MD místo vrtačky tam, kde to jde.",
  openGraph: {
    title: "Dentlaser — laserová zubní ordinace, České Budějovice",
    description:
      "Ošetření zubů laserem Waterlase MD. Parodontologie, prevence, estetika. Matice školské 17, České Budějovice.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const vykony = [
  {
    kod: "Zub",
    nazev: "Záchovná a estetická stomatologie",
    text: "Bílé fotokompozitní výplně na míru barvě zubu, dostavby korunek a citlivé ošetření kazů. Zachráníme, co jde zachránit.",
  },
  {
    kod: "Kořen",
    nazev: "Endodoncie — ošetření kanálků",
    text: "Strojové a laserové čištění zubních kanálků přístrojem Reciproc a Raypex 5. Přesně a bez zbytečné bolesti.",
  },
  {
    kod: "Dáseň",
    nazev: "Parodontologie",
    text: "Naše hlavní specializace. Ošetření měkkých i tvrdých tkání laserem tam, kde běžný zákrok znamená řezání a stehy.",
  },
  {
    kod: "Náhrada",
    nazev: "Protetika a korunky",
    text: "Celokeramické a metalokeramické korunky, které v ústech nikdo nepozná. Provizorní řešení hned, hotové v klidu.",
  },
  {
    kod: "Děti",
    nazev: "Pedostomatologie",
    text: "Pečeť fisur a ošetření dětského chrupu tak, aby si dítě k zubaři vytvořilo vztah, ne strach.",
  },
  {
    kod: "Bělení",
    nazev: "Bělení a estetika úsměvu",
    text: "Šetrné bělení zubů v ordinaci. Úsměv je svátek obličeje — pomůžeme mu k němu.",
  },
];

const tym = [
  { jmeno: "MUDr. Michaela Mallátová", role: "zubní lékařka, vede ordinaci" },
  { jmeno: "MDDr. Vendula Hellerová", role: "zubní lékařka" },
  { jmeno: "MDDr. Markéta Kohoutová", role: "zubní lékařka" },
  { jmeno: "Dagmar Důrová", role: "zdravotní sestra" },
  { jmeno: "Petra Djurová", role: "zdravotní sestra" },
  { jmeno: "Václava Konvičková", role: "zdravotní sestra" },
];

const pojistovny = [
  "111 — Všeobecná zdravotní pojišťovna",
  "201 — Vojenská zdravotní pojišťovna",
  "205 — Česká průmyslová zdravotní pojišťovna",
  "207 — Oborová zdravotní pojišťovna",
  "211 — Zdravotní pojišťovna ministerstva vnitra",
];

export default function Page() {
  return (
    <main className="dl">
      <header className="dl-nav" aria-label="Hlavní navigace">
        <a className="dl-mark" href="#top" aria-label="Dentlaser, úvod">
          <span className="dl-mark-dent">Dent</span>
          <span className="dl-mark-laser">laser</span>
        </a>
        <nav className="dl-links">
          <a href="#vykony">Výkony</a>
          <a href="#laser">Laser</a>
          <a href="#ordinace">Ordinace</a>
        </nav>
        <a className="dl-cta-nav" href="tel:+420387730533">Objednat: 387 730 533</a>
      </header>

      <section className="dl-hero" id="top">
        <div className="dl-hero-copy">
          <p className="dl-eyebrow">Zubní ordinace · České Budějovice</p>
          <h1 className="dl-h1">
            Světlo
            <span className="dl-beam">místo vrtačky</span>
            tam, kde to jde.
          </h1>
          <p className="dl-lede">
            V ordinaci MUDr. Michaely Mallátové ošetřujeme zuby laserem
            Waterlase MD — třetí generací stomatologického laseru. U řady
            zákroků to znamená méně bolesti, méně stehů a rychlejší hojení.
            Specializujeme se na parodontologii, prevenci a estetiku úsměvu.
          </p>
          <div className="dl-hero-actions">
            <a className="dl-btn" href="tel:+420387730533">Zavolat a objednat se</a>
            <a className="dl-btn-ghost" href="#laser">Jak funguje laser</a>
          </div>
          <dl className="dl-facts">
            <div>
              <dt>Kde</dt>
              <dd>Matice školské 17, České&nbsp;Budějovice</dd>
            </div>
            <div>
              <dt>Pojišťovny</dt>
              <dd>111 · 201 · 205 · 207 · 211</dd>
            </div>
          </dl>
        </div>
        <figure className="dl-hero-media">
          <img
            src="/hero.webp"
            alt="Ošetření v laserové zubní ordinaci Dentlaser v Českých Budějovicích"
            width={900}
            height={1100}
          />
          <figcaption>Laser Waterlase MD v naší ordinaci</figcaption>
        </figure>
      </section>

      <section className="dl-section" id="vykony" aria-labelledby="vykony-h">
        <div className="dl-sec-head">
          <p className="dl-eyebrow">Co u nás vyřešíte</p>
          <h2 className="dl-h2" id="vykony-h">
            Komplexní péče o&nbsp;chrup — s&nbsp;citlivým, individuálním přístupem
          </h2>
        </div>
        <ul className="dl-grid">
          {vykony.map((v) => (
            <li className="dl-card" key={v.nazev}>
              <span className="dl-card-kod">{v.kod}</span>
              <h3>{v.nazev}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
        <p className="dl-note">
          Preventivní prohlídky, RTG a OPG snímky, anestezie i extrakce jsou
          hrazeny ze zdravotního pojištění. Detailní ceník vám ráda ukáže sestra
          přímo v ordinaci.
        </p>
      </section>

      <section className="dl-laser" id="laser" aria-labelledby="laser-h">
        <figure className="dl-laser-media">
          <img
            src="/section-1.webp"
            alt="Detail práce s laserem Waterlase MD při šetrném ošetření zubu"
            width={900}
            height={700}
          />
        </figure>
        <div className="dl-laser-copy">
          <p className="dl-eyebrow dl-eyebrow--light">Naše specializace</p>
          <h2 className="dl-h2 dl-h2--light" id="laser-h">
            Waterlase MD — laser třetí generace, který pracuje vodou a světlem
          </h2>
          <p>
            Klasická vrtačka tká teplo, tlak a zvuk, kterého se pacienti bojí
            nejvíc. Laser Waterlase spojuje světelnou energii s proudem vody —
            u mnoha zákroků proto stačí méně anestezie a hojení je rychlejší.
            K jemné práci na dásních a slizničních defektech navíc používáme
            diodový laser iLase Epic&nbsp;10.
          </p>
          <ul className="dl-laser-list">
            <li>Šetrnější ošetření kazů i dásní</li>
            <li>Méně bolesti, u řady výkonů bez stehů</li>
            <li>Přesné laserové čištění zubních kanálků</li>
            <li>Rychlejší hojení sliznice</li>
          </ul>
          <blockquote className="dl-quote">
            „Naše ordinace se specializuje na parodontologii a k&nbsp;práci
            využíváme nejmodernější stomatologické přístroje — především
            víceúčelový laser Waterlase MD.“
          </blockquote>
        </div>
      </section>

      <section className="dl-section dl-ordinace" id="ordinace" aria-labelledby="ord-h">
        <div className="dl-sec-head">
          <p className="dl-eyebrow">Lidé a místo</p>
          <h2 className="dl-h2" id="ord-h">
            Ordinace, kam se pacienti vracejí — a nové rádi přijmeme
          </h2>
        </div>

        <div className="dl-ord-body">
          <figure className="dl-ord-media">
            <img
              src="/section-2.webp"
              alt="Moderně vybavená zubní ordinace Dentlaser v Českých Budějovicích"
              width={800}
              height={600}
            />
            <figcaption>
              Ordinace je vybavena dezinfekční jednotkou Novaerus, která
              plazmovou technologií snižuje riziko vzduchem přenášených infekcí.
            </figcaption>
          </figure>

          <div className="dl-ord-cols">
            <div>
              <h3 className="dl-sub">Náš tým</h3>
              <ul className="dl-team">
                {tym.map((t) => (
                  <li key={t.jmeno}>
                    <strong>{t.jmeno}</strong>
                    <span>{t.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="dl-sub">Ordinační hodiny</h3>
              <table className="dl-hours">
                <caption className="dl-caption">MUDr. Michaela Mallátová</caption>
                <tbody>
                  <tr><th scope="row">Pondělí</th><td>8:00–16:00</td></tr>
                  <tr><th scope="row">Úterý</th><td>8:00–15:00</td></tr>
                  <tr><th scope="row">Středa</th><td>11:00–15:00</td></tr>
                  <tr><th scope="row">Čtvrtek</th><td>8:00–14:00 · operační den</td></tr>
                  <tr><th scope="row">Pátek</th><td>8:00–13:00</td></tr>
                </tbody>
              </table>

              <h3 className="dl-sub">Pojišťovny</h3>
              <ul className="dl-poj">
                {pojistovny.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
