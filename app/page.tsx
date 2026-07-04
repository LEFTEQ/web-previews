import type { CSSProperties } from "react";

export default function Page() {
  const checks = [
    {
      no: "01",
      label: "Počet majitelů & VIN",
      text: "Ověříme historii vozu od prvního majitele a proti VIN databázi. Žádné překvapení po převzetí.",
    },
    {
      no: "02",
      label: "Skutečný nájezd",
      text: "Kontrolujeme reálný počet najetých kilometrů — servisní záznamy sedí s tím, co ukazuje tachometr.",
    },
    {
      no: "03",
      label: "Tloušťka laku",
      text: "Měřidlem projedeme celou karoserii. Přelakované díly a skryté opravy poznáme na místě.",
    },
    {
      no: "04",
      label: "Mechanický stav",
      text: "Opotřebení, servisní historie, technický stav — vůz jde na zdvihák, ne jen na fotky z inzerátu.",
    },
  ];

  const services = [
    {
      title: "Vyhledání vozu",
      text: "Řekněte značku, model a rozpočet. Vůz najdeme u prověřených dodavatelů z ukončených operativních leasingů.",
    },
    {
      title: "Dovoz na klíč",
      text: "Vybraný vůz dovezeme do Brna v nejkratší možné době. O celnici i papíry se postaráme za vás.",
    },
    {
      title: "STK a emise",
      text: "Dovozová i pravidelná STK, měření emisí a evidenční kontrola — vše zařídíme před předáním.",
    },
    {
      title: "Financování",
      text: "Úvěr i leasing zajistíme přes S Autoleasing. Splátky nastavíme podle vás, ne naopak.",
    },
    {
      title: "Pojištění a SPZ",
      text: "Povinné i havarijní přes Českou podnikatelskou pojišťovnu, přihlášení na značky vyřídíme.",
    },
    {
      title: "Servis Ford & půjčovna",
      text: "Opravy vozů Ford, půjčovna dodávek i obytných vozidel — když jednou přijedete, vrátíte se.",
    },
  ];

  const categories = ["Osobní", "Užitková", "Motocykly"];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="DEVIL Cars, domů">
          <span className="wordmark__d">DEVIL</span>
          <span className="wordmark__c">CARS</span>
          <span className="wordmark__loc">Brno</span>
        </a>
        <nav className="nav__links">
          <a href="#dovoz">Dovoz</a>
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="nav__cta" href="tel:+420737906075">Zavolat</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Dovezený osobní vůz připravený k předání v autobazaru DEVIL Cars v Brně"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>
        <div className="hero__body">
          <p className="hero__eyebrow">Autobazar &amp; dovoz vozidel · Brno-Bohunice</p>
          <h1 className="hero__title">
            Vůz, který si<br />
            <em>přejeli po<br />centimetrech</em>
          </h1>
          <p className="hero__lead">
            Od prvního majitele, z ukončených operativních leasingů, nehavarovaný,
            s kompletní servisní historií a garantovaným nájezdem. Než ho převezmete,
            projde všemi kontrolami — tloušťku laku měříme po celé karoserii.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#poptavka">Napište, co hledáte</a>
            <a className="btn btn--ghost" href="tel:+420737906075">+420 737 906 075</a>
          </div>
          <ul className="hero__stamps">
            <li>Spolehlivost</li>
            <li>Flexibilita</li>
            <li>Seriózní jednání</li>
          </ul>
        </div>
      </section>

      <section className="dovoz" id="dovoz" aria-labelledby="dovoz-h">
        <div className="dovoz__head">
          <p className="eyebrow">Co dovážíme</p>
          <h2 id="dovoz-h" className="h2">Osobní, užitková i motorky</h2>
        </div>
        <ul className="cats">
          {categories.map((c, i) => (
            <li className="cat" key={c}>
              <span className="cat__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="cat__name">{c}</span>
            </li>
          ))}
        </ul>

        <div className="check">
          <div className="check__intro">
            <p className="eyebrow">Prověření před předáním</p>
            <h3 className="h3">Čtyři měření, než dostanete klíče</h3>
            <p className="check__note">
              Auto z bazaru se pozná podle toho, co o něm víte. My víme všechno —
              a řekneme vám to dřív, než podepíšete.
            </p>
            <img
              src="/section-1.webp"
              alt="Kontrola technického stavu dovezeného vozu — měření a prohlídka karoserie"
              className="check__img"
            />
          </div>
          <ol className="check__list">
            {checks.map((item) => (
              <li className="row" key={item.no}>
                <span className="row__no">{item.no}</span>
                <div className="row__text">
                  <span className="row__label">{item.label}</span>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sluzby__head">
          <p className="eyebrow eyebrow--light">Kompletní služby</p>
          <h2 id="sluzby-h" className="h2 h2--light">
            Po dovozu už jen sednete a jedete
          </h2>
          <p className="sluzby__lead">
            Všechny úkony kolem nového vozu vyřídíme za vás. Nemusíte na úřad,
            na pojišťovnu ani na STK.
          </p>
        </div>
        <div className="grid">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="duvera__media">
          <img
            src="/section-2.webp"
            alt="Prostory autobazaru DEVIL Cars v areálu Brněnské Drutěvy v Brně"
            className="duvera__img"
          />
        </div>
        <div className="duvera__body" id="poptavka">
          <p className="eyebrow">O nás &amp; kontakt</p>
          <h2 id="duvera-h" className="h2">Dva lidé, jedno jméno na papírech</h2>
          <p className="duvera__lead">
            Vozidla vyhledáváme u prověřených dodavatelů, dovoz řešíme osobně a za
            každé auto ručíme jménem. Kancelář najdete v areálu Brněnské Drutěvy
            v Bohunicích — přijeďte se podívat, ať víte, s kým jednáte.
          </p>

          <div className="people">
            <div className="person">
              <p className="person__name">Dalibor Novotný</p>
              <a className="person__line" href="tel:+420737906075">+420 737 906 075</a>
              <a className="person__line" href="mailto:dalibor@devilcars.cz">dalibor@devilcars.cz</a>
            </div>
            <div className="person">
              <p className="person__name">Igor Štefka</p>
              <a className="person__line" href="tel:+420605954954">+420 605 954 954</a>
              <a className="person__line" href="mailto:info@devilcars.cz">info@devilcars.cz</a>
            </div>
          </div>

          <address className="office">
            <span className="office__label">Kancelář</span>
            Areál Brněnské Drutěvy · Bohunická 493/81 · 619&nbsp;00 Brno
          </address>
        </div>
      </section>
    </main>
  );
}

// typing helper (kept to satisfy CSSProperties import removal warning avoidance)
const _unused: CSSProperties = {};
void _unused;
