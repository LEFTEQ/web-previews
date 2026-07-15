import type { ReactNode } from "react";

const departments: { code: string; title: string; text: string }[] = [
  {
    code: "BEL",
    title: "Beletrie na dvou patrech",
    text: "Světová i česká, detektivky, fantasy i young adult. Dvě patra znamenají i tituly, které na jiných plzeňských pobočkách těžko seženete.",
  },
  {
    code: "DĚT",
    title: "Pro děti a do školy",
    text: "Leporela, první čtení a dobrodružné příběhy — a k tomu školní potřeby, které doma vždycky zrovna chybí.",
  },
  {
    code: "KANC",
    title: "Kancelářské potřeby",
    text: "Zápisníky, psací potřeby a drobnosti na stůl. Po cestě z práce máte všechno po ruce.",
  },
  {
    code: "HRY",
    title: "Logické a společenské hry",
    text: "Hlavolamy i deskovky pro celou rodinu — ověřená klasika i novinky.",
  },
  {
    code: "DAR",
    title: "Dárky a poukazy",
    text: "Knižní dárek u pultu zabalíme. A když si výběrem nejste jistí, poslouží dárkový poukaz.",
  },
];

const hours: { day: string; time: string; closed?: boolean }[] = [
  { day: "Pondělí", time: "9:00 – 18:00" },
  { day: "Úterý", time: "9:00 – 18:00" },
  { day: "Středa", time: "9:00 – 18:00" },
  { day: "Čtvrtek", time: "9:00 – 18:00" },
  { day: "Pátek", time: "9:00 – 18:00" },
  { day: "Sobota", time: "9:00 – 12:00" },
  { day: "Neděle", time: "Zavřeno", closed: true },
];

const transit: { label: string; head: string; text: string }[] = [
  {
    label: "AUTEM",
    head: "Parkujete na náměstí",
    text: "Zaparkujete přímo na náměstí Republiky, pár kroků od dveří prodejny.",
  },
  {
    label: "AUTOBUSEM",
    head: "Zastávka nám. Republiky",
    text: "Vystoupíte a jste skoro uvnitř — linky 20, 33 a 40.",
  },
  {
    label: "TRAMVAJÍ",
    head: "Zastávka nám. Republiky",
    text: "Přímo před knihkupectvím staví tramvaje 1 a 2.",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="kd">
      <header className="kd-nav">
        <a className="kd-wm" href="#top" aria-label="Knihy Dobrovský – Plzeň, náměstí Republiky">
          <span className="kd-wm-kicker">Knihkupectví</span>
          <span className="kd-wm-name">Dobrovský</span>
        </a>
        <span className="kd-nav-loc">Plzeň · náměstí&nbsp;Republiky</span>
      </header>

      <section className="kd-hero" id="top">
        <img
          className="kd-hero-img"
          src="/hero.webp"
          alt="Interiér knihkupectví Dobrovský na náměstí Republiky v Plzni s regály plnými knih"
        />
        <div className="kd-hero-scrim" aria-hidden="true" />
        <div className="kd-hero-inner">
          <p className="kd-eyebrow kd-hero-eyebrow">Plzeň · v samém jádru města · dvě patra</p>
          <h1 className="kd-hero-title">
            Dvě patra knih<br />pár kroků od&nbsp;tramvaje.
          </h1>
          <p className="kd-hero-lead">
            <span className="kd-dropcap">V</span>ystoupíte na zastávce náměstí Republiky a jste skoro
            uvnitř. Naše plzeňská prodejna v samém srdci města má dvě patra nabitá knihami — i těmi
            skvosty, které jinde těžko seženete. Ochotný personál poradí, zabalí dárek a rád si
            o knihách popovídá.
          </p>
          <div className="kd-hero-actions">
            <a className="kd-btn kd-btn-solid" href="#kudy">Kudy k nám</a>
            <a className="kd-btn kd-btn-ghost" href="#doba">Otevírací doba</a>
          </div>

          <div className="kd-card" aria-label="Adresa a otevírací doba">
            <p className="kd-card-line">náměstí Republiky 131/17 · 301 00 Plzeň</p>
            <p className="kd-card-line kd-card-strong">Po–Pá 9–18 · So 9–12 · Ne zavřeno</p>
          </div>
        </div>
      </section>

      <section className="kd-shelf" aria-labelledby="shelf-title">
        <div className="kd-shelf-head">
          <p className="kd-eyebrow">Regál za regálem</p>
          <h2 className="kd-h2" id="shelf-title">Nejen knihy. Ale hlavně knihy.</h2>
          <p className="kd-shelf-intro">
            Přijdete pro čtení na víkend a odcházíte i s dárkem, hrou a sešitem do školy. Co u nás
            na obou patrech najdete:
          </p>
        </div>

        <div className="kd-shelf-grid">
          <ul className="kd-dept-list">
            {departments.map((d) => (
              <li className="kd-dept" key={d.code}>
                <span className="kd-dept-code" aria-hidden="true">{d.code}</span>
                <div className="kd-dept-body">
                  <h3 className="kd-dept-title">{d.title}</h3>
                  <p className="kd-dept-text">{d.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure className="kd-shelf-figure">
            <img
              src="/section-1.webp"
              alt="Police s knihami a dárkovým sortimentem v prodejně Dobrovský"
              className="kd-figure-img"
            />
            <figcaption className="kd-figcap">Horní patro — beletrie a dárky</figcaption>
          </figure>
        </div>
      </section>

      <section className="kd-about" id="kudy" aria-labelledby="about-title">
        <div className="kd-about-grid">
          <figure className="kd-about-figure">
            <img
              src="/section-2.webp"
              alt="Prodejna Dobrovský na náměstí Republiky v Plzni z pohledu zákazníka"
              className="kd-figure-img"
            />
          </figure>

          <div className="kd-about-text">
            <p className="kd-eyebrow">Proč sem Plzeňáci chodí</p>
            <h2 className="kd-h2" id="about-title">Pobočka, kterou zná celá&nbsp;Plzeň.</h2>
            <p className="kd-about-p">
              Prodejna na náměstí je každému Plzeňákovi dobře známá. S trochou nadsázky — když
              vystoupíte ze zastávky, ocitnete se rovnou mezi regály. Dvě patra, ochotný personál
              a tituly, které jinde nejsou. Stavte se pro dárek, čtení pro sebe, nebo si jen tak
              popovídat o knihách.
            </p>

            <h3 className="kd-mini-title">Jak se k nám dostanete</h3>
            <ul className="kd-transit">
              {transit.map((t) => (
                <li className="kd-transit-item" key={t.label}>
                  <span className="kd-transit-label">{t.label}</span>
                  <span className="kd-transit-head">{t.head}</span>
                  <span className="kd-transit-text">{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="kd-hours" id="doba">
          <h3 className="kd-mini-title kd-hours-title">Otevírací doba</h3>
          <dl className="kd-hours-list">
            {hours.map((h) => (
              <div className={h.closed ? "kd-hours-row kd-hours-closed" : "kd-hours-row"} key={h.day}>
                <dt>{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="kd-hours-note">
            Zavolejte 542 220 320 nebo napište na poradime@knihydobrovsky.cz — rádi poradíme.
          </p>
        </div>
      </section>
    </main>
  );
}
