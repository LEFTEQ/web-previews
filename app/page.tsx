import type { CSSProperties } from "react";

export default function Page() {
  const workshop = [
    {
      no: "01",
      title: "Prohlídka a diagnostika",
      lead: "Zvednem kolo na stojan, projedeme řetěz, brzdy, ložiska a řekneme rovnou, co je fér spravit a co počká.",
      price: "od 200 Kč",
    },
    {
      no: "02",
      title: "Seřízení řazení a brzd",
      lead: "Přesné doladění přehazovačky, přesmykače i kotoučovek — ať řadí čistě a brzdy nekvičí.",
      price: "od 350 Kč",
    },
    {
      no: "03",
      title: "Centrování výpletu",
      lead: "Vyrovnáme osmičku, dotáhneme paprsky na napětí. Kolo, které se netočí do strany.",
      price: "od 250 Kč",
    },
    {
      no: "04",
      title: "Servis vidlice a tlumiče",
      lead: "Výměna oleje, těsnění a nastavení podle vaší váhy a stylu ježdění. Odpružení zpět jako nové.",
      price: "od 900 Kč",
    },
    {
      no: "05",
      title: "Kompletní přestavba",
      lead: "Rozebrání, vyčištění, výměna opotřebených dílů a nová sestava. Pro kolo, které vám má vydržet další sezony.",
      price: "cena dle rozsahu",
    },
  ];

  const gears = ["32", "1993", "Olomouc"];

  return (
    <main className="oto">
      <header className="oto-nav">
        <a className="oto-mark" href="#top" aria-label="OTOSPORT 1993 — cykloservis Olomouc">
          <span className="oto-mark__o">OTO</span>
          <span className="oto-mark__sport">SPORT</span>
          <span className="oto-mark__year">·1993</span>
        </a>
        <nav className="oto-nav__links" aria-label="Hlavní navigace">
          <a href="#servis">Servis</a>
          <a href="#dilna">Dílna</a>
          <a className="oto-nav__call" href="tel:+420606288215">Zavolat 606 288 215</a>
        </nav>
      </header>

      <section className="oto-hero" id="top">
        <div className="oto-hero__frame">
          <img
            className="oto-hero__img"
            src="/hero.webp"
            alt="Kolo upnuté v montážním stojanu v dílně cykloservisu OTOSPORT v Olomouci"
          />
        </div>
        <div className="oto-hero__panel">
          <p className="oto-eyebrow">Cykloservis · Olomouc · na stojanu od roku 1993</p>
          <h1 className="oto-hero__title">
            Kolo, co<br />
            <span className="oto-hero__accent">řadí čistě</span><br />
            a brzdí, když má.
          </h1>
          <p className="oto-hero__lead">
            Přineste kolo, my ho upneme do stojanu a hned vám řekneme,
            co potřebuje. Bez zbytečných výměn, bez řečí okolo. Silniční,
            horská, treková i elektrokola.
          </p>
          <div className="oto-hero__cta">
            <a className="oto-btn" href="tel:+420606288215">Objednat servis</a>
            <a className="oto-btn oto-btn--ghost" href="#servis">Ceník úkonů</a>
          </div>
          <dl className="oto-torque">
            <div>
              <dt>Objednávky</dt>
              <dd>+420 606 288 215</dd>
            </div>
            <div>
              <dt>Prodejna</dt>
              <dd>Olomouc</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="oto-servis" id="servis">
        <div className="oto-servis__head">
          <p className="oto-eyebrow">Co v dílně řešíme</p>
          <h2 className="oto-h2">Záruční i pozáruční servis kol</h2>
          <p className="oto-servis__intro">
            Každý úkon vám nejdřív ukážeme na kole a řekneme cenu předem.
            Drobnosti stihneme na počkání, větší práce domluvíme na termín.
          </p>
        </div>

        <ol className="oto-cass" aria-label="Přehled servisních úkonů">
          {workshop.map((w) => (
            <li className="oto-cog" key={w.no}>
              <span className="oto-cog__no" aria-hidden="true">{w.no}</span>
              <div className="oto-cog__body">
                <h3 className="oto-cog__title">{w.title}</h3>
                <p className="oto-cog__lead">{w.lead}</p>
              </div>
              <span className="oto-cog__price">{w.price}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="oto-about" id="dilna">
        <div className="oto-about__media">
          <img
            className="oto-about__img"
            src="/section-1.webp"
            alt="Detail rukou mechanika při seřizování přehazovačky"
          />
          <img
            className="oto-about__img oto-about__img--2"
            src="/section-2.webp"
            alt="Vyrovnaný výplet kola a nářadí na pracovním stole v cykloservisu"
          />
        </div>
        <div className="oto-about__text">
          <p className="oto-eyebrow">Kdo vám kolo spraví</p>
          <h2 className="oto-h2">Přes třicet sezon u jednoho stojanu</h2>
          <p className="oto-about__lead">
            OTOSPORT jsme otevřeli v Olomouci roku 1993 — a od té doby
            děláme v podstatě jednu věc: aby lidem jezdila kola. Prodáváme
            silniční, horská, treková i městská kola a elektrokola na motorech
            Bosch a TQ. Ale srdcem firmy je dílna.
          </p>
          <ul className="oto-facts">
            {gears.map((g, i) => (
              <li className="oto-fact" key={g}>
                <span className="oto-fact__num">{g}</span>
                <span className="oto-fact__label">
                  {i === 0 && "sezon v Olomouci"}
                  {i === 1 && "pod jedním jménem"}
                  {i === 2 && "naše dílna a prodejna"}
                </span>
              </li>
            ))}
          </ul>
          <p className="oto-about__note">
            Nevíte si rady se seřízením nebo výběrem dílu? Zavolejte nebo
            napište — poradíme podle toho, jak a kde jezdíte.
          </p>
          <div className="oto-about__contact">
            <a className="oto-btn" href="tel:+420606288215">Zavolat do dílny</a>
            <a className="oto-btn oto-btn--ghost" href="mailto:obchod@otosport.cz">Napsat e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}
