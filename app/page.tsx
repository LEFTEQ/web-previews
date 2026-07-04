import type { CSSProperties } from "react";

export default function Page() {
  const materialy = [
    {
      n: "01",
      nazev: "Dub",
      popis:
        "Naše specialita od roku 1996. Tvrdé, hutné dřevo s výraznou kresbou letokruhů — na schody, které desítky let nevržou, i na kuchyň, co přežije generaci.",
    },
    {
      n: "02",
      nazev: "Masiv",
      popis:
        "Stavebně truhlářské polotovary i hotový nábytek z plného dřeva. Žádná dýha přes dřevotřísku — to, co vidíte, je dřevo skrz naskrz.",
    },
    {
      n: "03",
      nazev: "Velkoplošné materiály",
      popis:
        "Tam, kde se to hodí, sáhneme po kvalitních deskových materiálech — vestavěné skříně, kancelářský nábytek, korpusy. Kombinujeme podle toho, co dílu prospěje.",
    },
  ];

  const vyrobky = [
    "Kuchyně na míru",
    "Schodiště z dubu",
    "Vestavěný nábytek",
    "Terasy a altány",
    "Dřevěné ploty",
    "Fasády a podhledy",
    "Kancelářský nábytek",
    "Zahradní domky",
  ];

  return (
    <main className="dh">
      <header className="dh-top">
        <a className="dh-mark" href="#" aria-label="Dřevo Hobby, zakázkové truhlářství Ostrava">
          <span className="dh-mark-drevo">DŘEVO</span>
          <span className="dh-mark-hobby">HOBBY</span>
          <span className="dh-mark-sub">truhlářství · Ostrava</span>
        </a>
        <a className="dh-tel" href="tel:+420777718873">
          <span className="dh-tel-label">Zavolejte do dílny</span>
          <span className="dh-tel-num">+420 777 718 873</span>
        </a>
      </header>

      <section className="dh-hero" aria-labelledby="hero-h">
        <div className="dh-hero-media">
          <img
            src="/hero.webp"
            alt="Detail zpracovaného dubového dřeva z dílny Dřevo Hobby"
            width={1600}
            height={1100}
            className="dh-hero-img"
          />
        </div>

        <div className="dh-hero-body">
          <p className="dh-eyebrow">Zakázkové truhlářství · od roku 1996</p>
          <h1 id="hero-h" className="dh-hero-h">
            Ze dřeva, které
            <span className="dh-grain">roste pomalu</span>
            a vydrží dlouho.
          </h1>
          <p className="dh-hero-p">
            Kuchyně, schody a nábytek z masivu — se specializací na dub.
            Vyrábíme v dílně u Ostravy, montujeme u vás doma a vozíme materiál
            až na místo. Řemeslo, ne výroba na sklad.
          </p>
          <div className="dh-hero-cta">
            <a className="dh-btn" href="tel:+420777718873">
              Zavolat do dílny
            </a>
            <a className="dh-btn dh-btn-ghost" href="#nabidka">
              Co umíme vyrobit
            </a>
          </div>

          <dl className="dh-facts">
            <div>
              <dt>V řemesle od</dt>
              <dd>1996</dd>
            </div>
            <div>
              <dt>Sídlo dílny</dt>
              <dd>Petřvald u Ostravy</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7–15</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="dh-sekce" id="nabidka" aria-labelledby="nab-h">
        <div className="dh-sekce-head">
          <p className="dh-eyebrow">Materiál rozhoduje</p>
          <h2 id="nab-h" className="dh-h2">
            Začínáme u prkna, ne u katalogu
          </h2>
          <p className="dh-lede">
            Každou zakázku řešíme podle toho, kde bude stát a co má vydržet.
            Podle toho volíme dřevo — a podle dřeva postup.
          </p>
        </div>

        <ol className="dh-mat-list">
          {materialy.map((m) => (
            <li key={m.n} className="dh-mat">
              <span className="dh-mat-n" aria-hidden="true">
                {m.n}
              </span>
              <h3 className="dh-mat-h">{m.nazev}</h3>
              <p className="dh-mat-p">{m.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="dh-fig">
          <img
            src="/section-1.webp"
            alt="Ukázka zakázkové výroby z masivního dubu — nábytek a interiérové prvky"
            width={1400}
            height={900}
            className="dh-fig-img"
          />
          <figcaption className="dh-fig-cap">
            Z jednoho kmene bývá kuchyň, schodiště i pár párů dveří — vždycky se
            snažíme, aby kresba dřeva na sebe navazovala.
          </figcaption>
        </figure>

        <div className="dh-vyrobky">
          <h3 className="dh-vyrobky-h">Co u nás nejčastěji objednáte</h3>
          <ul className="dh-chipy">
            {vyrobky.map((v) => (
              <li key={v} className="dh-chip">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dh-sekce dh-sekce-alt" id="o-nas" aria-labelledby="onas-h">
        <figure className="dh-portret">
          <img
            src="/section-2.webp"
            alt="Dílna Dřevo Hobby při práci na zakázce z masivního dřeva"
            width={1200}
            height={1400}
            className="dh-portret-img"
          />
        </figure>

        <div className="dh-onas-body">
          <p className="dh-eyebrow">Kdo za tím stojí</p>
          <h2 id="onas-h" className="dh-h2">
            Malá dílna, velké stavby
          </h2>
          <p className="dh-onas-p">
            Dřevo Hobby vzniklo v roce 1996. Sídlíme v Petřvaldě u Ostravy a
            děláme dřevovýrobu a truhlářství se specializací na dub. Vyrábíme
            nábytek, kuchyně, schodiště i interiérové prvky z masivu — venku
            pak ploty, terasy, fasády a drobné dřevostavby.
          </p>
          <p className="dh-onas-p">
            Jako subdodavatelé jsme pracovali pro velké stavební firmy po celé
            republice, ale stejnou péči věnujeme i jedné kuchyni pro rodinu.
            Sestavíme, smontujeme a dovezeme — cenu za dopravu řešíme podle
            ujetých kilometrů, ať víte, za co platíte.
          </p>

          <blockquote className="dh-podpis">
            <p>
              „Poznáte to na spojích. Když je práce poctivá, nemusíte to
              schovávat.“
            </p>
            <footer>
              <span className="dh-podpis-jm">Jaromír Dronski</span>
              <span className="dh-podpis-fce">majitel dílny</span>
            </footer>
          </blockquote>

          <ul className="dh-kontakt">
            <li>
              <span className="dh-kontakt-l">Dílna</span>
              <span className="dh-kontakt-v">U Tesly 1853, 735 41 Petřvald</span>
            </li>
            <li>
              <span className="dh-kontakt-l">Telefon</span>
              <a className="dh-kontakt-v dh-link" href="tel:+420777718873">
                +420 777 718 873
              </a>
            </li>
            <li>
              <span className="dh-kontakt-l">E-mail</span>
              <a className="dh-kontakt-v dh-link" href="mailto:info@drevo-hobby.cz">
                info@drevo-hobby.cz
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
