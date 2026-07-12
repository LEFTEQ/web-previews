import type { ReactNode } from "react";

export default function Page(): ReactNode {
  const sluzby = [
    {
      cislo: "01",
      nadpis: "Otevření zaklapnutého bytu",
      cena: "od 600 Kč + doprava",
      text: "Zabouchly se vám dveře? Přijedeme po Brně, otevřeme byt bez zbytečného poškození zámku a v drtivé většině případů necháme původní vložku funkční."
    },
    {
      cislo: "02",
      nadpis: "Výroba a kopírování klíčů",
      cena: "na počkání",
      text: "Klíče do patentních, dozických i trezorových vložek. Ztracený klíč? Přeskládáme vložku tak, aby už jím nešlo odemknout."
    },
    {
      cislo: "03",
      nadpis: "Bezpečnostní zámky a kování",
      cena: "montáž u vás",
      text: "Přídavné zámky, bezpečnostní kování, řetízky a mříže. Používáme jen certifikované komponenty od FAB a dalších renomovaných výrobců."
    },
    {
      cislo: "04",
      nadpis: "Systémy generálních klíčů",
      cena: "návrh i realizace",
      text: "Jeden klíč pro správce, skupinové a hlavní klíče pro nájemníky. Navrhneme rozvržení oprávnění pro celý dům i firmu."
    },
    {
      cislo: "05",
      nadpis: "Opravy zámkových vložek",
      cena: "i přeskládání",
      text: "Opravíme cylindrickou vložku, přeskládáme ji ke klíči, nebo navrhneme nové řešení. Otevřeme i trezor."
    },
    {
      cislo: "06",
      nadpis: "Autoklíče a autozámky",
      cena: "nouzově i plánovaně",
      text: "Nouzové otevírání automobilů, výroba autoklíčů a opravy autozámků — když se klíč zavře uvnitř nebo se ulomí v zapalování."
    }
  ];

  return (
    <main className="sez">
      <a className="sez-skip" href="#sluzby">Přeskočit na služby</a>

      <header className="sez-top">
        <div className="sez-wordmark" aria-label="ABT Sezam, zámečnictví Brno">
          <span className="sez-wm-bit">ABT</span>
          <span className="sez-wm-key" aria-hidden="true">
            <span className="sez-wm-key-dot" />
            <span className="sez-wm-key-teeth" />
          </span>
          <span className="sez-wm-name">SEZAM</span>
        </div>
        <a className="sez-call" href="tel:+420604548753">
          <span className="sez-call-label">Nonstop otevírání</span>
          <span className="sez-call-num">604 548 753</span>
        </a>
      </header>

      <section className="sez-hero" aria-labelledby="sez-hero-h">
        <div className="sez-hero-media">
          <img
            src="/hero.webp"
            alt="Detail zámkové cylindrické vložky s klíčem v ruce brněnského zámečníka"
            className="sez-hero-img"
          />
          <div className="sez-hero-scrim" aria-hidden="true" />
        </div>

        <div className="sez-hero-inner">
          <p className="sez-eyebrow">Zámečnictví · Merhautova 177, Brno · od roku 2003</p>
          <h1 id="sez-hero-h" className="sez-hero-h">
            Když se dveře<br />
            <span className="sez-hero-em">zaklapnou</span>,<br />
            zavolejte Sezam.
          </h1>
          <p className="sez-hero-lead">
            Zabouchnutý byt otevřeme od 600 Kč, klíč vyrobíme na počkání a bezpečnostní
            zámek namontujeme tak, aby vydržel. Autorizovaný partner FAB pro Brno.
          </p>
          <div className="sez-hero-cta">
            <a className="sez-btn" href="tel:+420604548753">Zavolat zámečníka</a>
            <a className="sez-btn sez-btn-ghost" href="#sluzby">Co všechno umíme</a>
          </div>
        </div>

        <dl className="sez-hero-facts">
          <div>
            <dt>Otevření bytu</dt>
            <dd>od 600 Kč</dd>
          </div>
          <div>
            <dt>Klíče</dt>
            <dd>na počkání</dd>
          </div>
          <div>
            <dt>Partner značky</dt>
            <dd>FAB</dd>
          </div>
        </dl>
      </section>

      <section id="sluzby" className="sez-sluzby" aria-labelledby="sez-sluzby-h">
        <div className="sez-sec-head">
          <p className="sez-sec-kicker">Zámečnické služby</p>
          <h2 id="sez-sluzby-h" className="sez-sec-h">
            Šest situací, se kterými za námi lidé chodí
          </h2>
          <p className="sez-sec-sub">
            Od zabouchnutých dveří po celý systém generálních klíčů pro činžák.
            Vše v provozovně na Merhautově, nebo po domluvě u vás doma.
          </p>
        </div>

        <ol className="sez-grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="sez-card">
              <span className="sez-card-num" aria-hidden="true">{s.cislo}</span>
              <h3 className="sez-card-h">{s.nadpis}</h3>
              <p className="sez-card-price">{s.cena}</p>
              <p className="sez-card-text">{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="sez-figure">
          <img
            src="/section-1.webp"
            alt="Pracovní stůl zámečníka s frézou na klíče a řadou polotovarů klíčů"
            className="sez-figure-img"
          />
          <figcaption className="sez-figure-cap">
            Dílna na Merhautově — klíč vám ofrézujeme na počkání, dokud čekáte u pultu.
          </figcaption>
        </figure>
      </section>

      <section id="o-nas" className="sez-trust" aria-labelledby="sez-trust-h">
        <div className="sez-trust-media">
          <img
            src="/section-2.webp"
            alt="Brněnský zámečník montuje bezpečnostní kování na vstupní dveře"
            className="sez-trust-img"
          />
        </div>

        <div className="sez-trust-body">
          <p className="sez-sec-kicker">O nás &amp; důvěra</p>
          <h2 id="sez-trust-h" className="sez-sec-h">
            Certifikovaný partner FAB s pevnou adresou v Brně
          </h2>
          <p className="sez-trust-text">
            ABT Sezam s.r.o. dělá kompletní zámečnické služby na Merhautově ulici v Brně.
            Používáme výhradně certifikované komponenty od renomovaných výrobců — jako
            autorizovaný partner FAB dodáváme celý sortiment cylindrických vložek,
            zámkového kování i dveřních zavíračů. Žádné náhražky, které se za rok vylámou.
          </p>

          <ul className="sez-trust-points">
            <li>
              <span className="sez-point-key" aria-hidden="true" />
              <div>
                <strong>Kamenná provozovna</strong>
                Merhautova 177, Brno 613 00 — přijďte s klíčem nebo se zámkem v ruce.
              </div>
            </li>
            <li>
              <span className="sez-point-key" aria-hidden="true" />
              <div>
                <strong>Otevřeno Po–Pá 8:00–17:00</strong>
                Nouzové otevírání bytů a aut po telefonu i mimo tuto dobu.
              </div>
            </li>
            <li>
              <span className="sez-point-key" aria-hidden="true" />
              <div>
                <strong>Platba v hotovosti</strong>
                Z technických důvodů zatím nepřijímáme karty — počítejte s hotovostí.
              </div>
            </li>
          </ul>

          <div className="sez-contact">
            <a className="sez-contact-item" href="tel:+420545571763">
              <span>Provozovna</span>
              545 571 763
            </a>
            <a className="sez-contact-item" href="tel:+420776690676">
              <span>Mobil</span>
              776 690 676
            </a>
            <a className="sez-contact-item" href="mailto:sezam.brno@volny.cz">
              <span>E-mail</span>
              sezam.brno@volny.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
