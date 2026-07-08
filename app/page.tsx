import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoservis Mihula — diagnostika vozidel Ostrava-Hrabová",
  description:
    "Přečteme si, co vám auto chce říct. Počítačová diagnostika, servis a údržba vozů Škoda, VW, Audi a Seat v Ostravě-Hrabové. Náhradní vůz i vyzvednutí zdarma.",
  openGraph: {
    title: "Autoservis Mihula — diagnostika vozidel Ostrava",
    description:
      "Počítačová diagnostika a servis vozů koncernu VW v Ostravě-Hrabové. Objednejte se na termín, který se vám hodí.",
    type: "website",
    locale: "cs_CZ",
  },
};

const diagnostikaKroky = [
  {
    kod: "P0",
    nazev: "Připojíme diagnostiku",
    text: "Zapojíme testr do OBD zásuvky a vyčteme paměť závad ze všech řídicích jednotek — motor, převodovka, ABS, airbagy, klima.",
  },
  {
    kod: "P1",
    nazev: "Přečteme živá data",
    text: "Sledujeme hodnoty senzorů za chodu motoru. Kód závady je začátek, ne konec — hledáme skutečnou příčinu, ne jen symptom.",
  },
  {
    kod: "P2",
    nazev: "Řekneme vám to lidsky",
    text: "Vysvětlíme, co jsme našli, co je nutné opravit hned a co počká. Bez cizích slov a bez položek, kterým nerozumíte.",
  },
];

const sluzby = [
  { nazev: "Počítačová diagnostika", popis: "Vyčtení a smazání chybových kódů, kontrola všech jednotek." },
  { nazev: "Preventivní prohlídka", popis: "Kompletní kontrola vozu před cestou i před STK." },
  { nazev: "Výměna oleje a filtrů", popis: "Podle servisního plánu, s reset servisního intervalu." },
  { nazev: "Brzdy", popis: "Kontrola a oprava — destičky, kotouče, kapalina." },
  { nazev: "Pneuservis", popis: "Přezutí, vyvážení, uskladnění a servis pneumatik." },
  { nazev: "Klimatizace", popis: "Plnění, dezinfekce a hledání netěsností chladiva." },
  { nazev: "Tažná zařízení", popis: "Montáž bez zásahu do karoserie, včetně elektropřípojky." },
  { nazev: "Střešní nosiče a boxy", popis: "Nosiče kol, lyží, boxy i tažná — vše najisto usazené." },
];

const znacky = ["Škoda", "Volkswagen", "Audi", "Seat", "a starší modely"];

export default function Page() {
  return (
    <main className="am-main">
      <header className="am-topbar">
        <a className="am-wordmark" href="#" aria-label="Autoservis Mihula, úvod">
          <span className="am-wordmark__mark" aria-hidden="true">M</span>
          <span className="am-wordmark__text">
            <span className="am-wordmark__name">Mihula</span>
            <span className="am-wordmark__sub">autoservis · diagnostika</span>
          </span>
        </a>
        <a className="am-topbar__phone" href="tel:+420596716716">
          596&nbsp;716&nbsp;716
        </a>
      </header>

      <section className="am-hero">
        <img
          className="am-hero__img"
          src="/hero.webp"
          alt="Technik autoservisu Mihula při počítačové diagnostice vozu"
        />
        <div className="am-hero__scrim" aria-hidden="true" />
        <div className="am-hero__inner">
          <p className="am-eyebrow">Ostrava-Hrabová · Na Rovince 911</p>
          <h1 className="am-hero__title">
            Než něco vyměníme,<br />
            <em>zjistíme, co autu&nbsp;chybí.</em>
          </h1>
          <p className="am-hero__lead">
            Kontrolka svítí a nikdo vám neřekl proč? Připojíme diagnostiku,
            přečteme paměť závad a najdeme skutečnou příčinu — dřív, než
            sáhneme na klíč. Škoda, VW, Audi i Seat.
          </p>
          <div className="am-hero__cta">
            <a className="am-btn am-btn--primary" href="tel:+420596716716">
              Objednat na diagnostiku
            </a>
            <a className="am-btn am-btn--ghost" href="#servis">
              Co všechno umíme
            </a>
          </div>
          <dl className="am-hero__facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:00–16:00</dd>
            </div>
            <div>
              <dt>Náhradní vůz</dt>
              <dd>připraven předem</dd>
            </div>
            <div>
              <dt>Pick-up</dt>
              <dd>vyzvedneme i přivezeme</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="am-diag" id="diagnostika" aria-labelledby="diag-head">
        <div className="am-diag__head">
          <p className="am-eyebrow am-eyebrow--dark">Jak čteme závadu</p>
          <h2 id="diag-head" className="am-section-title">
            Chybový kód je stopa. My hledáme příčinu.
          </h2>
          <p className="am-section-lead">
            Diagnostika není odečtení jednoho čísla z přístroje. Postupujeme
            po krocích, ať platíte za opravu, kterou auto opravdu potřebuje —
            ne za tipování.
          </p>
        </div>
        <ol className="am-steps">
          {diagnostikaKroky.map((k) => (
            <li className="am-step" key={k.kod}>
              <span className="am-step__code" aria-hidden="true">
                {k.kod}
              </span>
              <h3 className="am-step__title">{k.nazev}</h3>
              <p className="am-step__text">{k.text}</p>
            </li>
          ))}
        </ol>
        <figure className="am-diag__figure">
          <img
            src="/section-1.webp"
            alt="Detail motorového prostoru vozu při servisní prohlídce"
          />
        </figure>
      </section>

      <section className="am-services" id="servis" aria-labelledby="serv-head">
        <div className="am-services__head">
          <p className="am-eyebrow am-eyebrow--dark">Servis všech značek</p>
          <h2 id="serv-head" className="am-section-title">
            Od výměny oleje po tažné zařízení
          </h2>
          <ul className="am-brands" aria-label="Servisované značky">
            {znacky.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>
        <ul className="am-services__grid">
          {sluzby.map((s, i) => (
            <li className="am-svc" key={s.nazev}>
              <span className="am-svc__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="am-svc__title">{s.nazev}</h3>
              <p className="am-svc__text">{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="am-promise">
          <figure className="am-promise__figure">
            <img
              src="/section-2.webp"
              alt="Zvednutý vůz na servisním zvedáku v dílně Autoservisu Mihula"
            />
          </figure>
          <div className="am-promise__text">
            <p className="am-eyebrow am-eyebrow--dark">Proč právě my</p>
            <h3 className="am-promise__title">
              Auto potřebujete každý den. Počítáme s&nbsp;tím.
            </h3>
            <p>
              Víme, že bez auta se běžný den zadrhne. Proto pro vás máme
              připravené náhradní vozy a službu pick-up — vůz vyzvedneme na
              místě, které si řeknete, a po opravě ho přivezeme zpátky.
            </p>
            <p>
              Jsme malý ostravský servis, kde vás obsluhuje ten, kdo autu
              rozumí. Řekneme vám dopředu, co oprava obnáší a kolik bude stát —
              žádné položky, kterým byste nerozuměli.
            </p>
            <a className="am-btn am-btn--primary" href="tel:+420739999371">
              Zavolat: 739&nbsp;999&nbsp;371
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
