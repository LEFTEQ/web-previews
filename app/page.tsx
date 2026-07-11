import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      key: "technicka",
      label: "Technická správa",
      desc: "Revize, opravy, řemeslníci prověření na libereckých domech. Postaráme se o výtah, střechu i kotelnu dřív, než se ozve celý dům.",
    },
    {
      key: "ucetni",
      label: "Účetní správa",
      desc: "Vyúčtování služeb, rozúčtování tepla i vody, roční závěrka. Každou položku dohledáte v systému iPartner do vteřiny.",
    },
    {
      key: "pravni",
      label: "Právní servis",
      desc: "Prohlášení vlastníka, stanovy SVJ, smlouvy o převodu i o výstavbě. Papíry, které jinde platíte navíc, u nás patří ke správě.",
    },
    {
      key: "predseda",
      label: "Výkon funkce předsedy SVJ",
      desc: "Od roku 2014 přebíráme i funkci předsedy nebo člena statutárního orgánu. Odpovědnost neseme my, vy máte klid.",
    },
  ];

  const documents = [
    { code: "§ 1166", title: "Prohlášení vlastníka", note: "vymezení jednotek a společných částí" },
    { code: "§ 2079", title: "Smlouva o převodu", note: "privatizace bytu do osobního vlastnictví" },
    { code: "§ 2586", title: "Smlouva o výstavbě", note: "nová jednotka nástavbou či přístavbou" },
  ];

  return (
    <main className="pm">
      <header className="pm-top">
        <a className="pm-mark" href="#uvod" aria-label="PAMY — správa nemovitostí Liberec">
          <span className="pm-mark__pa">pa</span>
          <span className="pm-mark__my">my</span>
          <span className="pm-mark__dot" aria-hidden="true" />
        </a>
        <nav className="pm-nav" aria-label="Hlavní">
          <a href="#sluzby">Správa</a>
          <a href="#duvera">O nás</a>
          <a className="pm-nav__cta" href="#kontakt">Vstoupit do iPartner</a>
        </nav>
      </header>

      <section className="pm-hero" id="uvod">
        <div className="pm-hero__frame">
          <img
            className="pm-hero__img"
            src="/hero.webp"
            alt="Bytové domy ve správě PAMY v.o.s. v Liberci"
            width={1600}
            height={1000}
          />
          <span className="pm-hero__plate" aria-hidden="true">Rumjancevova 696/3 · 460 01 Liberec</span>
        </div>

        <div className="pm-hero__text">
          <p className="pm-eyebrow">Správa nemovitostí · Liberec · od roku 1995</p>
          <h1 className="pm-hero__h1">
            Váš dům<br />
            <span className="pm-hero__accent">v pořádku.</span><br />
            Papírově i&nbsp;technicky.
          </h1>
          <p className="pm-hero__lead">
            Spravujeme společenství vlastníků a nájemní domy tak, aby výbor neřešil
            revize o půlnoci a vlastníci věděli, kam jde každá koruna z fondu oprav.
          </p>
          <div className="pm-hero__actions">
            <a className="pm-btn" href="#kontakt">Nezávazná konzultace zdarma</a>
            <a className="pm-btn pm-btn--ghost" href="#sluzby">Co spadá do správy</a>
          </div>
          <dl className="pm-stats">
            <div>
              <dt>na trhu</dt>
              <dd>od&nbsp;1995</dd>
            </div>
            <div>
              <dt>servis</dt>
              <dd>technický · účetní · právní</dd>
            </div>
            <div>
              <dt>data online</dt>
              <dd>iPartner 24/7</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pm-sec pm-sluzby" id="sluzby">
        <div className="pm-sec__head">
          <p className="pm-eyebrow pm-eyebrow--dark">Čtyři pilíře správy</p>
          <h2 className="pm-sec__h2">Jedna smlouva, celý dům z krku</h2>
          <p className="pm-sec__sub">
            Technika, účetnictví i právo pod jednou střechou — proto se výbor nemusí
            domlouvat s pěti dodavateli a pak je smiřovat mezi sebou.
          </p>
        </div>

        <ol className="pm-cards">
          {services.map((s, i) => (
            <li className="pm-card" key={s.key}>
              <span className="pm-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="pm-card__title">{s.label}</h3>
              <p className="pm-card__desc">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="pm-docs">
          <img
            className="pm-docs__img"
            src="/section-1.webp"
            alt="Dokumenty ke správě SVJ — prohlášení vlastníka a smlouvy"
            width={1200}
            height={800}
          />
          <div className="pm-docs__body">
            <p className="pm-eyebrow pm-eyebrow--dark">Dokumenty, které vyřídíme za vás</p>
            <h3 className="pm-docs__h3">Od privatizace k funkčnímu SVJ</h3>
            <ul className="pm-doclist">
              {documents.map((d) => (
                <li key={d.title}>
                  <span className="pm-doclist__code">{d.code}</span>
                  <span className="pm-doclist__title">{d.title}</span>
                  <span className="pm-doclist__note">{d.note}</span>
                </li>
              ))}
            </ul>
            <p className="pm-docs__foot">
              Odkazujeme na skutečné paragrafy nového občanského zákoníku — ne obecné fráze.
              Přesně víme, který dokument váš dům zrovna potřebuje.
            </p>
          </div>
        </div>
      </section>

      <section className="pm-sec pm-duvera" id="duvera">
        <div className="pm-duvera__grid">
          <div className="pm-duvera__img-wrap">
            <img
              className="pm-duvera__img"
              src="/section-2.webp"
              alt="Tým PAMY v.o.s. při osobním jednání s vlastníky v Liberci"
              width={1200}
              height={900}
            />
          </div>
          <div className="pm-duvera__body">
            <p className="pm-eyebrow pm-eyebrow--dark">Proč zrovna my</p>
            <h2 className="pm-sec__h2">Liberecká firma, kterou zvednete telefonem</h2>
            <p className="pm-duvera__lead">
              Jsme veřejná obchodní společnost — za dům ručí jménem konkrétní společníci,
              ne anonymní call centrum. Když zavoláte, mluvíte s tím, kdo rozhoduje.
            </p>
            <ul className="pm-promise">
              <li>
                <strong>Osobní přístup společníků</strong>
                <span>Vaši nemovitost zná jménem konkrétní člověk firmy, ne pořadové číslo tiketu.</span>
              </li>
              <li>
                <strong>Garantované ceny a rozsah</strong>
                <span>Co je ve smlouvě, to platí — bez „nečekaných“ příplatků na konci roku.</span>
              </li>
              <li>
                <strong>Konzultace i pro cizí SVJ</strong>
                <span>Poradíme zdarma, i když u nás vaše společenství zatím není klientem.</span>
              </li>
            </ul>
            <div className="pm-contact" id="kontakt">
              <span className="pm-contact__label">Kancelář v centru Liberce</span>
              <a className="pm-contact__tel" href="tel:+420606528439">+420&nbsp;606&nbsp;528&nbsp;439</a>
              <a className="pm-contact__mail" href="mailto:pamy@pamy.cz">pamy@pamy.cz</a>
              <span className="pm-contact__addr">Rumjancevova 696/3, 460 01 Liberec</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
