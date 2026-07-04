import type { CSSProperties } from "react";

export const metadata = {
  title: "Global-Dent — zubní ordinace v centru Liberce",
  description:
    "Zubní ordinace MUDr. Veroniky Palečkové ve Valdštejnské ulici v Liberci. Preventivní prohlídky, ošetření kazu, protetika i akutní bolest — klidně a bez spěchu.",
  openGraph: {
    title: "Global-Dent — zubní ordinace v centru Liberce",
    description:
      "Preventivní péče, ošetření i protetika ve Valdštejnské ulici. Smlouvy s pojišťovnami 111, 201, 205, 207 a 211.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const hours: { day: string; time: string; note?: string }[] = [
  { day: "Pondělí", time: "12:00 — 17:00" },
  { day: "Úterý", time: "08:00 — 12:00" },
  { day: "Středa", time: "08:00 — 12:00" },
  { day: "Čtvrtek", time: "08:00 — 12:00" },
  { day: "Pátek", time: "08:00 — 11:00" },
];

const care: { title: string; body: string }[] = [
  {
    title: "Preventivní prohlídka",
    body: "Dvakrát ročně zkontrolujeme zuby i dásně, odhalíme začínající kaz dřív, než začne bolet, a poradíme s domácí péčí.",
  },
  {
    title: "Ošetření kazu",
    body: "Bílé výplně, které drží a nejsou na zubu vidět. Vrtáme šetrně a s ohledem na to, kolik zubu se dá zachovat.",
  },
  {
    title: "Protetika",
    body: "Korunky, můstky a náhrady připravené na míru ve spolupráci se zubní laboratoří tak, aby seděly a vydržely.",
  },
  {
    title: "Akutní bolest",
    body: "Když to nepočká, po telefonické domluvě se na vás pokusíme podívat co nejdřív a bolest utišit.",
  },
];

export default function Page() {
  return (
    <main className="gd">
      <header className="gd-top">
        <a className="gd-mark" href="#uvod" aria-label="Global-Dent, úvod">
          <span className="gd-mark__g">G</span>
          <span className="gd-mark__word">
            Global<span className="gd-mark__dot">·</span>Dent
          </span>
        </a>
        <a className="gd-call" href="tel:+420603202394">
          Zavolat 603 202 394
        </a>
      </header>

      <section className="gd-hero" id="uvod">
        <div className="gd-hero__text">
          <p className="gd-eyebrow">Zubní ordinace · Liberec, Valdštejnská 45</p>
          <h1 className="gd-hero__title">
            Křeslo, do kterého se<br />
            <em>chcete</em> vrátit.
          </h1>
          <p className="gd-hero__lede">
            MUDr. Veronika Palečková pečuje o chrup Liberečanů v klidné ordinaci
            kousek od centra. Bez spěchu, s vysvětlením každého kroku — a s
            ohledem na to, kolik zubu se dá zachránit.
          </p>
          <div className="gd-hero__actions">
            <a className="gd-btn" href="tel:+420603202394">
              Zavolat do ordinace
            </a>
            <a className="gd-btn gd-btn--ghost" href="#pece">
              Co ošetřujeme
            </a>
          </div>
        </div>
        <figure className="gd-hero__media">
          <img
            src="/hero.webp"
            alt="Zubní křeslo a osvětlení v ordinaci Global-Dent v Liberci"
            className="gd-hero__img"
            width={960}
            height={1200}
          />
          <figcaption className="gd-hero__chip">Valdštejnská 401/45 · Liberec 2</figcaption>
        </figure>
      </section>

      <section className="gd-care" id="pece" aria-labelledby="pece-nadpis">
        <div className="gd-care__head">
          <h2 className="gd-h2" id="pece-nadpis">
            Co u nás ošetříme
          </h2>
          <p className="gd-care__intro">
            Ordinace se smlouvou s pojišťovnami{" "}
            <span className="gd-nowrap">111, 201, 205, 207 a 211</span>. Většina
            výkonů je tak z pojištění — na cenu doplatku se vždy zeptejte předem,
            rádi vám ji řekneme.
          </p>
        </div>
        <ol className="gd-care__list">
          {care.map((item, i) => (
            <li className="gd-care__item" key={item.title}>
              <span className="gd-care__no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="gd-care__title">{item.title}</h3>
                <p className="gd-care__body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="gd-care__media">
          <img
            src="/section-1.webp"
            alt="Detail zubního ošetření v ordinaci Global-Dent"
            className="gd-fig"
            width={1200}
            height={800}
          />
        </figure>
      </section>

      <section className="gd-visit" id="navsteva" aria-labelledby="navsteva-nadpis">
        <figure className="gd-visit__media">
          <img
            src="/section-2.webp"
            alt="Recepce a čekárna ordinace Global-Dent v Liberci"
            className="gd-fig"
            width={1200}
            height={800}
          />
        </figure>
        <div className="gd-visit__panel">
          <h2 className="gd-h2 gd-h2--light" id="navsteva-nadpis">
            Kdy a kde nás najdete
          </h2>
          <table className="gd-hours">
            <caption className="gd-hours__cap">Ordinační hodiny</caption>
            <tbody>
              {hours.map((h) => (
                <tr key={h.day}>
                  <th scope="row">{h.day}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <dl className="gd-facts">
            <div className="gd-facts__row">
              <dt>Akutní případy</dt>
              <dd>Pouze po telefonické domluvě.</dd>
            </div>
            <div className="gd-facts__row">
              <dt>Telefon zvedáme</dt>
              <dd>Ve všední dny mezi 8:00 a 11:00.</dd>
            </div>
            <div className="gd-facts__row">
              <dt>Kde nás najdete</dt>
              <dd>Valdštejnská 401/45, Liberec 2, 460 01</dd>
            </div>
            <div className="gd-facts__row">
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:globaldentsro@gmail.com">globaldentsro@gmail.com</a>
              </dd>
            </div>
          </dl>
          <a className="gd-btn gd-btn--on-dark" href="tel:+420603202394">
            Zavolat 603 202 394
          </a>
        </div>
      </section>
    </main>
  );
}
