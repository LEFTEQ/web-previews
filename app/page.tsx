import type { CSSProperties } from "react";

export default function Page() {
  const primeur = [
    {
      an: "25",
      ap: "Bordeaux",
      nazev: "En Primeur 2025",
      text: "Předprodej vín z posledního ročníku ještě v sudech — objednáte teď, do sklepa dorazí za dva roky. Do sklepa i na investici.",
      kontakt: "Diana Sixtová · diana@merlot.cz",
    },
    {
      an: "15",
      ap: "Bordeaux",
      nazev: "Ročník 2015 po deseti letech",
      text: "Uspořádali jsme velkou degustaci po deseti letech zrání. Vyzrálá, hedvábná, elegantní vína — a k nim mimořádná nabídka.",
      kontakt: "Ochutnat na Roudné",
    },
    {
      an: "76",
      ap: "Champagne",
      nazev: "Louis Roederer, 250 let",
      text: "Legendární šampaňský dům z Remeše slaví jubileum od roku 1776. Jeden z posledních velkých rodinných domů — a stálice našeho regálu.",
      kontakt: "K dostání skladem",
    },
  ];

  const pobocky = [
    {
      mesto: "Plzeň",
      nazev: "Vinotéka Na Roudné",
      adresa: "Na Roudné 110, 301 00 Plzeň",
      doba: "PO–PÁ 9:00–16:00",
      tel: "377 533 789",
      hlavni: true,
    },
    {
      mesto: "Plzeň",
      nazev: "Zastávka — vinný bar & vinotéka",
      adresa: "Smetanovy sady 8, 301 00 Plzeň",
      doba: "PO–SO 15:00–22:00",
      tel: "377 330 313",
      hlavni: false,
    },
    {
      mesto: "Karlovy Vary",
      nazev: "Le Bouchon",
      adresa: "Mariánskolázeňská 27, 360 01 Karlovy Vary",
      doba: "dle otevírací doby pobočky",
      tel: "774 252 253",
      hlavni: false,
    },
  ];

  return (
    <main className="vt">
      <header className="vt-top">
        <a className="vt-brand" href="#" aria-label="Merlot d'Or, vinotéka Plzeň">
          <span className="vt-brand-name">Merlot<span className="vt-brand-or">&nbsp;d&#8217;Or</span></span>
          <span className="vt-brand-sub">vinotéka · Plzeň, od roku 1993</span>
        </a>
        <nav className="vt-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#vinoteky">Vinotéky</a>
          <a className="vt-nav-cta" href="#vinoteky">E-shop</a>
        </nav>
      </header>

      <section className="vt-hero" aria-labelledby="hero-h">
        <img
          className="vt-hero-img"
          src="/hero.webp"
          alt="Regály s francouzskými víny ve vinotéce Merlot d'Or"
          width={1600}
          height={1000}
          loading="eager"
          decoding="async"
        />
        <div className="vt-hero-body">
          <p className="vt-hero-eyebrow">Francouzská vína · Bordeaux · Champagne · Bourgogne</p>
          <h1 id="hero-h" className="vt-hero-h">
            Sklep plný <em>ročníků</em>,<br />ne polic plných etiket.
          </h1>
          <p className="vt-hero-lede">
            Vybíráme přímo u vinařů ve Francii — od domácích sklepů po château
            s michelinskou pověstí. Poradíme s lahví k večeři i s vínem, které
            necháte ležet deset let. V Plzni na Roudné i v baru Zastávka.
          </p>
          <div className="vt-hero-actions">
            <a className="vt-btn" href="#vinoteky">Přijít ochutnat</a>
            <a className="vt-btn vt-btn-ghost" href="#nabidka">Aktuální nabídka</a>
          </div>
        </div>
      </section>

      <section id="nabidka" className="vt-sec vt-nabidka" aria-labelledby="nab-h">
        <div className="vt-sec-head">
          <p className="vt-kicker">Co teď stojí za ochutnání</p>
          <h2 id="nab-h">Tři ročníky, o kterých právě mluvíme</h2>
          <p className="vt-sec-intro">
            Číslo u každé položky je poslední dvojčíslí ročníku — tak, jak ho
            čtete na etiketě. U nás za ním nestojí sklad, ale konkrétní vinař
            a náš vlastní ochutnaný názor.
          </p>
        </div>

        <ol className="vt-cards">
          {primeur.map((v) => (
            <li key={v.nazev} className="vt-card">
              <div className="vt-vintage" aria-hidden="true">
                <span className="vt-vintage-tick">&#8217;</span>{v.an}
              </div>
              <p className="vt-appel">{v.ap}</p>
              <h3 className="vt-card-h">{v.nazev}</h3>
              <p className="vt-card-t">{v.text}</p>
              <p className="vt-card-k">{v.kontakt}</p>
            </li>
          ))}
        </ol>

        <div className="vt-zajezd">
          <img
            className="vt-zajezd-img"
            src="/section-1.webp"
            alt="Francouzská vinařská krajina s vinicemi"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
          <div className="vt-zajezd-body">
            <p className="vt-kicker">Zájezdy za vínem</p>
            <h3 className="vt-zajezd-h">Nejen prodáváme — vozíme vás ke zdroji</h3>
            <p>
              Vyberte si oblast a termín, o zbytek se postaráme: návštěvy vinařů,
              vybrané restaurace i ubytování přímo na château.
            </p>
            <ul className="vt-oblasti">
              {["Alsasko","Bordeaux","Bourgogne","Champagne & Paříž","Provence & Rhône","Údolí Loiry"].map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="vinoteky" className="vt-sec vt-oduse" aria-labelledby="od-h">
        <div className="vt-oduse-grid">
          <div className="vt-oduse-text">
            <p className="vt-kicker">O nás &amp; kde nás najdete</p>
            <h2 id="od-h">Přes třicet let vybíráme francouzská vína</h2>
            <p>
              Merlot d&#8217;Or není e-shop, který doplnil kamennou prodejnu.
              Začínali jsme jako obchodníci, kteří jezdí do Francie osobně —
              en primeur v Bordeaux, degustace před nákupem, vína, za která se
              nestydíme postavit. Ta samá vína dostanete v Plzni přes pult.
            </p>
            <p className="vt-oduse-note">
              Prodej vína osobám mladším 18 let je zakázán.
            </p>
          </div>
          <img
            className="vt-oduse-img"
            src="/section-2.webp"
            alt="Detail lahví vína a degustačních sklenic"
            width={1000}
            height={1200}
            loading="lazy"
            decoding="async"
          />
        </div>

        <ul className="vt-pobocky">
          {pobocky.map((p) => (
            <li key={p.nazev} className={p.hlavni ? "vt-pob vt-pob-hlavni" : "vt-pob"}>
              <p className="vt-pob-mesto">{p.mesto}</p>
              <h3 className="vt-pob-h">{p.nazev}</h3>
              <p className="vt-pob-adr">{p.adresa}</p>
              <p className="vt-pob-doba">{p.doba}</p>
              <a className="vt-pob-tel" href={"tel:+420" + p.tel.replace(/\s/g, "")}>
                Zavolat {p.tel}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
