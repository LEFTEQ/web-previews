import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kotle Pardubice — servis a montáž plynových kotlů",
  description:
    "Záruční i pozáruční servis plynových kotlů v Pardubicích a okolí. JUNKERS, ARISTON, INTERGAS, DAKON, PROTHERM, VAILLANT. Přes 10 let zkušeností.",
};

const znacky = [
  "JUNKERS",
  "ARISTON",
  "INTERGAS",
  "DAKON",
  "PROTHERM",
  "DESTILA",
  "VIADRUS",
  "VAILLANT",
];

const sluzby = [
  {
    kod: "01",
    nazev: "Servis a údržba",
    popis:
      "Kontrola, čištění spalovacích komor a výměníků, seřízení spalování a tlaku. Záruční i pozáruční opravy, odstranění poruch a výměna opotřebených dílů.",
    body: [
      "Roční prohlídka a čištění",
      "Odstranění závad a poruch",
      "Seřízení výkonu a tlaku",
    ],
  },
  {
    kod: "02",
    nazev: "Montáž nových kotlů",
    popis:
      "Připravíme prostor, přívod plynu i odvod spalin a nainstalujeme nový kotel podle vašeho domu. Starý spotřebič bezpečně odpojíme a odvezeme.",
    body: [
      "Příprava přívodu plynu i spalin",
      "Instalace a uvedení do provozu",
      "Odvoz starého kotle",
    ],
  },
  {
    kod: "03",
    nazev: "Poradenství k topení",
    popis:
      "Poradíme, jaký zdroj tepla se vyplatí právě u vás — podle velikosti, typu a umístění domu. Bez marketingových řečí, jen co dává smysl.",
    body: [
      "Výběr vhodného kotle",
      "Porovnání zdrojů tepla",
      "Návrh úspornějšího provozu",
    ],
  },
];

export default function Page() {
  return (
    <main className="kp">
      <header className="kp-top">
        <a className="kp-mark" href="#" aria-label="Kotle Pardubice — domů">
          <span className="kp-mark__flame" aria-hidden="true">
            <span></span>
          </span>
          <span className="kp-mark__text">
            <b>Kotle</b>
            <i>Pardubice</i>
          </span>
        </a>
        <a className="kp-tel" href="tel:+420739832247">
          <span className="kp-tel__label">Nefunguje topení?</span>
          <span className="kp-tel__num">+420 739 832 247</span>
        </a>
      </header>

      <section className="kp-hero">
        <div className="kp-hero__media">
          <img
            src="/hero.webp"
            alt="Technik při servisu plynového kotle v kotelně"
            className="kp-hero__img"
          />
          <div className="kp-hero__gauge" aria-hidden="true">
            <span className="kp-hero__gauge-dot"></span>
            <span className="kp-hero__gauge-text">v provozu</span>
          </div>
        </div>

        <div className="kp-hero__body">
          <p className="kp-eyebrow">Plynoservis · Pardubice a okolí</p>
          <h1 className="kp-hero__title">
            Kotel máte znovu teplý.
            <span>Ještě dnes, ne příští týden.</span>
          </h1>
          <p className="kp-hero__lead">
            Stanislav Cinert a Martin Tichý — dvojice, která plynovým kotlům
            rozumí přes deset let. Přijedeme, najdeme závadu a spravíme ji na
            místě. Bez zbytečných řečí a překvapení na faktuře.
          </p>
          <div className="kp-hero__actions">
            <a className="kp-btn" href="tel:+420739832247">Zavolat servis</a>
            <a className="kp-btn kp-btn--ghost" href="mailto:servis@kotlepardubice.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="kp-hero__facts">
            <div>
              <dt>Zkušenost</dt>
              <dd>10+ let</dd>
            </div>
            <div>
              <dt>Dojezd</dt>
              <dd>Pardubice a okolí</dd>
            </div>
            <div>
              <dt>Zázemí</dt>
              <dd>Živanice 168</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kp-brands" aria-label="Značky kotlů, které opravujeme">
        <p className="kp-brands__label">Opravujeme a servisujeme</p>
        <ul className="kp-brands__list">
          {znacky.map((z) => (
            <li key={z}>{z}</li>
          ))}
        </ul>
      </section>

      <section className="kp-services" id="sluzby">
        <div className="kp-section-head">
          <p className="kp-eyebrow">Co u nás objednáte</p>
          <h2 className="kp-h2">Tři věci, které umíme naplno</h2>
          <p className="kp-section-head__note">
            Revizi spotřebiče, který zároveň opravujeme, si můžete sjednat online.
            Konkrétní opravu domluvíme telefonicky — a berte prosím na vědomí, že
            domluvený čas je orientační.
          </p>
        </div>

        <div className="kp-cards">
          {sluzby.map((s) => (
            <article className="kp-card" key={s.kod}>
              <span className="kp-card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="kp-card__title">{s.nazev}</h3>
              <p className="kp-card__text">{s.popis}</p>
              <ul className="kp-card__list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="kp-figure">
          <img
            src="/section-1.webp"
            alt="Detail rozebraného plynového kotle připraveného k údržbě"
            className="kp-figure__img"
          />
          <figcaption>
            Naše práce v obrazech — kotel při čištění výměníku a kontrole
            spalování.
          </figcaption>
        </figure>
      </section>

      <section className="kp-about" id="o-nas">
        <figure className="kp-about__media">
          <img
            src="/section-2.webp"
            alt="Technik firmy Kotle Pardubice při práci na topné soustavě"
            className="kp-about__img"
          />
        </figure>
        <div className="kp-about__body">
          <p className="kp-eyebrow">Kdo k vám přijede</p>
          <h2 className="kp-h2">Dva lidé, jedno telefonní číslo</h2>
          <p className="kp-about__lead">
            Jsme specializovaná firma na servis a montáž plynových kotlů
            v Pardubicích. Zakázku vezme jeden z nás — a ten samý ji dotáhne do
            konce. Žádné kolečko dispečerů a call center.
          </p>
          <ul className="kp-people">
            <li>
              <span className="kp-people__name">Stanislav Cinert</span>
              <span className="kp-people__role">servis kotlů, montáže</span>
            </li>
            <li>
              <span className="kp-people__name">Martin Tichý</span>
              <span className="kp-people__role">servis kotlů, poradenství</span>
            </li>
          </ul>
          <div className="kp-contact">
            <div>
              <span className="kp-contact__k">Telefon</span>
              <a href="tel:+420739832247">+420 739 832 247</a>
            </div>
            <div>
              <span className="kp-contact__k">E-mail</span>
              <a href="mailto:servis@kotlepardubice.cz">servis@kotlepardubice.cz</a>
            </div>
            <div>
              <span className="kp-contact__k">Kde nás najdete</span>
              <span>Živanice 168, 533 42 Živanice</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
