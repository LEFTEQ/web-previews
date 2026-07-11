import React from "react";

export default function Page() {
  const menu = [
    {
      cas: "07:00",
      title: "Ranní espresso",
      note: "Rychlé, husté, do sebe u baru. Než začne den.",
      price: "52",
    },
    {
      cas: "10:30",
      title: "Filtr & buchta",
      note: "Přeliv z jednoho původu, k tomu tvarohová od pekaře z Pouchova.",
      price: "98",
    },
    {
      cas: "13:00",
      title: "Polední flat white",
      note: "Když je půl hodiny pauza a chcete ji strávit dobře.",
      price: "72",
    },
    {
      cas: "16:30",
      title: "Odpolední dýchánek",
      note: "Cappuccino, domácí koláč a čas na jednu delší větu.",
      price: "115",
    },
    {
      cas: "18:00",
      title: "Poslední káva",
      note: "Bezkofeinová dekáva před zavíračkou. Bez výčitek.",
      price: "58",
    },
  ];

  return (
    <main className="cc">
      <header className="cc-nav" aria-label="Hlavní">
        <a className="cc-mark" href="#" aria-label="Café Čas, domovská stránka">
          <span className="cc-mark-cafe">CAFÉ</span>
          <span className="cc-mark-cas">ČAS</span>
        </a>
        <nav className="cc-nav-links">
          <a href="#nabidka">Nabídka</a>
          <a href="#o-nas">O nás</a>
          <a className="cc-nav-cta" href="tel:+420495512300">Zavolat</a>
        </nav>
      </header>

      <section className="cc-hero" aria-labelledby="hero-h">
        <div className="cc-hero-copy">
          <p className="cc-eyebrow">Kavárna · Hradec Králové · od 2016</p>
          <h1 id="hero-h">
            Máme na vás<br />
            <span className="cc-hero-em">čas.</span>
          </h1>
          <p className="cc-lede">
            Malá kavárna kousek od Velkého náměstí, kde se nepočítají minuty.
            Přeliv, poctivé espresso a koláč od sousedů — a vy tu můžete zůstat,
            jak dlouho potřebujete.
          </p>
          <div className="cc-hero-actions">
            <a className="cc-btn" href="tel:+420495512300">Zavolat a zamluvit stůl</a>
            <a className="cc-btn cc-btn-ghost" href="#nabidka">Co dnes naléváme</a>
          </div>
          <dl className="cc-hours">
            <div>
              <dt>Po–Pá</dt>
              <dd>7:00 — 19:00</dd>
            </div>
            <div>
              <dt>So–Ne</dt>
              <dd>9:00 — 18:00</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Tomkova 12, Hradec Králové</dd>
            </div>
          </dl>
        </div>
        <figure className="cc-hero-img">
          <img
            src="/hero.webp"
            alt="Interiér kavárny Café Čas — dřevěný pult s pákovým kávovarem a měkkým denním světlem"
            width={1200}
            height={1500}
          />
          <figcaption>Náš pult v Tomkově ulici — nejlépe okolo desáté ráno.</figcaption>
        </figure>
      </section>

      <section className="cc-menu" id="nabidka" aria-labelledby="menu-h">
        <div className="cc-menu-head">
          <p className="cc-eyebrow">Nabídka podle denní doby</p>
          <h2 id="menu-h">Den u nás, hodinu po hodině</h2>
          <p className="cc-menu-intro">
            Nemáme lístek na tři strany. Máme kávu, kterou umíme, a pečivo,
            které vozíme čerstvé každé ráno. Tady je, kdy si co dát.
          </p>
        </div>

        <ol className="cc-timeline">
          {menu.map((m) => (
            <li className="cc-item" key={m.cas}>
              <span className="cc-item-time" aria-hidden="true">
                {m.cas}
              </span>
              <div className="cc-item-body">
                <h3>{m.title}</h3>
                <p>{m.note}</p>
              </div>
              <span className="cc-item-price">
                {m.price}
                <span className="cc-item-czk">Kč</span>
              </span>
            </li>
          ))}
        </ol>

        <figure className="cc-menu-img">
          <img
            src="/section-1.webp"
            alt="Šálek filtrované kávy a čerstvě upečený koláč na dřevěném stole"
            width={1200}
            height={800}
          />
        </figure>
      </section>

      <section className="cc-about" id="o-nas" aria-labelledby="about-h">
        <figure className="cc-about-img">
          <img
            src="/section-2.webp"
            alt="Baristka připravuje kávu za pultem Café Čas"
            width={1200}
            height={1400}
          />
        </figure>
        <div className="cc-about-copy">
          <p className="cc-eyebrow">O nás</p>
          <h2 id="about-h">
            Osm let stejné adresy, stejná ruka na páce
          </h2>
          <p>
            Café Čas otevřela v roce 2016 Klára s bráchou Tomášem v místě
            bývalého papírnictví. Zůstaly nám po něm vysoké police a jméno ulice
            — a nápad, že kavárna nemusí nikam spěchat.
          </p>
          <p>
            Pražíme s malou pražírnou z Kuklen, mléko bereme od farmy u
            Nechanic a moučníky peče Věra ob dva domy dál. Znáte to tu, i my
            známe vás — a většinou i vaši objednávku.
          </p>
          <ul className="cc-facts">
            <li>
              <strong>Jedna káva na tři přelivy</strong>
              <span>Každý týden jiný původ z výběrové pražírny.</span>
            </li>
            <li>
              <strong>Wi-Fi a zásuvky</strong>
              <span>Klidně přijďte pracovat. Stůl u okna je oblíbený.</span>
            </li>
            <li>
              <strong>Pejsci vítáni</strong>
              <span>Miska s vodou je za dveřmi vždycky plná.</span>
            </li>
          </ul>
          <blockquote className="cc-quote">
            „Chodím sem každé úterý s notesem a nikdy mě nevyhánějí. To se dnes
            nevidí.“
            <cite>— Petra H., stálá hostka</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
