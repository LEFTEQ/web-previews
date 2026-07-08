import type { CSSProperties } from "react";

export default function Page() {
  const portfolio = [
    {
      no: "01",
      title: "Správa vlastních nemovitostí",
      body: "Staráme se o domy, které nám patří — od kotelny po střechu. Revize, úklid, drobné opravy i velké plánování životního cyklu budovy. Jeden správce, jedno číslo, žádné výmluvy mezi řemesly.",
    },
    {
      no: "02",
      title: "Pronájem bytů a komerčních prostor",
      body: "Dlouhodobě i krátkodobě. Byty pro lidi, kanceláře a obchody pro firmy — vše v našich domech v Plzni a okolí. Nájemní smlouva srozumitelně, předání bytu s protokolem, kontakt na správce v telefonu.",
    },
    {
      no: "03",
      title: "Nákup a prodej nemovitostí",
      body: "Kupujeme domy, které mají budoucnost — často ty, které jiní odepsali. Rekonstruujeme je a vracíme do života. Prodáváme jen to, co bychom si sami koupili.",
    },
    {
      no: "04",
      title: "Rekonstrukce a nová výstavba",
      body: "Od výměny rozvodů po nový dům na zelené louce. Staví se podle nás, ne podle nejlevnější nabídky — protože ten dům si pak necháme a spravujeme dál.",
    },
    {
      no: "05",
      title: "Právní, notářský a daňový servis",
      body: "Převody, smlouvy, katastr, daně z nemovitostí. Papíry, kterých se lidé bojí, u nás řeší lidé, kteří je dělají každý týden.",
    },
    {
      no: "06",
      title: "Poradenství k nemovitostem",
      body: "Máte byt a nevíte, jestli pronajmout, prodat, nebo rekonstruovat? Sedneme si nad čísla a řekneme rovnou, co dává v Plzni smysl.",
    },
  ];

  return (
    <main className="wm">
      <header className="wm-top">
        <a className="wm-mark" href="#top" aria-label="WALDEMOOR — domů">
          <span className="wm-mark__w">W</span>
          <span className="wm-mark__rest">ALDEMOOR</span>
          <span className="wm-mark__sr">s.r.o.</span>
        </a>
        <nav className="wm-nav" aria-label="Hlavní">
          <a href="#agenda">Co spravujeme</a>
          <a href="#dum">O nás</a>
          <a className="wm-nav__cta" href="#dum">Zavolat správci</a>
        </nav>
      </header>

      <section className="wm-hero" id="top">
        <div className="wm-hero__frame">
          <img
            className="wm-hero__img"
            src="/hero.webp"
            alt="Činžovní dům ve správě WALDEMOOR v Plzni"
            width={1600}
            height={1100}
            decoding="async"
          />
          <span className="wm-hero__plate">PLZEŇ · SPRÁVA NEMOVITOSTÍ</span>
        </div>

        <div className="wm-hero__text">
          <p className="wm-eyebrow">Domy, které vlastníme — a proto o ně skutečně pečujeme</p>
          <h1 className="wm-hero__h">
            Klíče od<br />
            <span className="wm-hero__accent">plzeňských</span><br />
            domů<span className="wm-hero__dot">.</span>
          </h1>
          <p className="wm-lead">
            WALDEMOOR kupuje, rekonstruuje, pronajímá a spravuje činžovní domy
            a komerční prostory v Plzni. Nejsme zprostředkovatel — jsme majitel,
            který zvedá telefon.
          </p>
          <div className="wm-hero__actions">
            <a className="wm-btn" href="#dum">Zavolat správci</a>
            <a className="wm-btn wm-btn--ghost" href="#agenda">Prohlédnout nabídku</a>
          </div>
        </div>
      </section>

      <section className="wm-agenda" id="agenda">
        <div className="wm-agenda__head">
          <p className="wm-eyebrow">Agenda domu</p>
          <h2 className="wm-h2">Šest věcí, které vám vezmeme z hlavy</h2>
          <p className="wm-agenda__note">
            Od nákupu přes cihlu po nájemní smlouvu. Vše pod jednou střechou —
            doslova, protože ty domy jsou naše.
          </p>
        </div>

        <ol className="wm-list">
          {portfolio.map((s) => (
            <li className="wm-row" key={s.no}>
              <span className="wm-row__no" aria-hidden="true">{s.no}</span>
              <div className="wm-row__body">
                <h3 className="wm-row__title">{s.title}</h3>
                <p className="wm-row__text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="wm-agenda__fig">
          <img
            src="/section-1.webp"
            alt="Rekonstruovaný interiér bytového domu ve správě WALDEMOOR"
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <section className="wm-dum" id="dum">
        <figure className="wm-dum__fig">
          <img
            src="/section-2.webp"
            alt="Fasáda činžovního domu spravovaného společností WALDEMOOR v Plzni"
            width={1400}
            height={1600}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="wm-dum__text">
          <p className="wm-eyebrow">O nás</p>
          <h2 className="wm-h2">Majitel, ne makléř</h2>
          <p className="wm-dum__p">
            Většina správcovských firem spravuje cizí majetek — a když něco
            praskne, řeší, kdo to zaplatí. My spravujeme domy, které jsou naše.
            To mění všechno: opravu neodkládáme, protože náklad je stejně náš,
            a nájemníka si vážíme, protože v našem domě má bydlet dlouho.
          </p>

          <dl className="wm-facts">
            <div className="wm-fact">
              <dt>Kde působíme</dt>
              <dd>Plzeň a blízké okolí</dd>
            </div>
            <div className="wm-fact">
              <dt>Co vlastníme</dt>
              <dd>Činžovní domy, byty i komerční prostory</dd>
            </div>
            <div className="wm-fact">
              <dt>Jak to řešíme</dt>
              <dd>Nákup · rekonstrukce · pronájem · správa</dd>
            </div>
            <div className="wm-fact">
              <dt>Papírování</dt>
              <dd>Právní, notářský i daňový servis u nás</dd>
            </div>
          </dl>

          <p className="wm-dum__sig">
            Hledáte byt v Plzni, prostor pro firmu, nebo řešíte, co s vlastní
            nemovitostí? Ozvěte se — mluvit budete rovnou se správcem domu.
          </p>
        </div>
      </section>
    </main>
  );
}
