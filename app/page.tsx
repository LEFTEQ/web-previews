import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eKuryr — kurýr po Praze i na Slovensko | doručíme dnes",
  description:
    "Pražská kurýrní služba nonstop. Osobní kurýr po Praze, expres i o víkendu, zásilky na Slovensko do 24 hodin. Objednáte online, e-mailem nebo telefonem na 241 080 251.",
  openGraph: {
    title: "eKuryr — doručíme dnes, po Praze i na Slovensko",
    description:
      "Osobní kurýr nonstop. Foto kurýra předem, potvrzení o doručení, job numbers pro firmy. Praha · ČR · SK · Evropa.",
    type: "website",
    locale: "cs_CZ",
  },
};

const reach = ["Praha", "ČR", "SK", "Evropa", "Svět"];

const sluzby = [
  {
    kod: "OS",
    nazev: "Osobní kurýr po Praze",
    popis:
      "Jeden kurýr, jedna zásilka, přímá cesta. Vyzvedneme u vás a jedeme rovnou k příjemci — bez překladišť a čekání na svoz. Expres i v mimopracovní době, o víkendech a svátcích.",
    detail: "Ceník osobního kurýra",
  },
  {
    kod: "SK",
    nazev: "Zásilky na Slovensko",
    popis:
      "Do většiny míst na Slovensku doručujeme zpravidla do 24 hodin. Řešíme i pravidelné firemní jízdy. Detaily a cenu na míru řekneme na hotline.",
    detail: "Ceník zásilek na Slovensko",
  },
  {
    kod: "SR24",
    nazev: "SR24 — mezinárodní přeprava",
    popis:
      "Dodávková přeprava po Evropě s doručením do druhého dne. Od 1. 7. 2026 upravujeme podmínky kvůli povinným tachografům dle nařízení EU — aktuální ceník rádi pošleme.",
    detail: "Zeptat se na SR24",
  },
];

const objednani = [
  { krok: "1", zpusob: "Telefonem", hodnota: "241 080 251", pozn: "zákaznický servis, nonstop" },
  { krok: "2", zpusob: "Hotline", hodnota: "604 232 972", pozn: "když spěcháte" },
  { krok: "3", zpusob: "E-mailem", hodnota: "info@ekuryr.cz", pozn: "pošlete adresy, ozveme se" },
  { krok: "4", zpusob: "Online", hodnota: "www.ekuryr.cz", pozn: "objednávka přes internet" },
];

const zdarma = [
  {
    stitek: "Bezpečnost",
    text: "Foto kurýra, který zásilku poveze, vám přijde na e-mail — víte, kdo zvoní.",
  },
  {
    stitek: "Korektnost",
    text: "Potvrzení o doručení na e-mail, jakmile je zásilka v cíli.",
  },
  {
    stitek: "Informovanost",
    text: "Potvrzení o přijetí objednávky hned po zadání — nic nevisí ve vzduchu.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="eKuryr, domovská stránka">
          <span className="wordmark__e">e</span>Kuryr
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <nav className="nav__links" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#jistota">Jak to jistíme</a>
          <a href="#objednat">Objednat</a>
        </nav>
        <a className="nav__call" href="tel:+420241080251">
          <span className="nav__nonstop">Nonstop</span>
          241 080 251
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__copy">
          <p className="eyebrow">Kurýrní služba · Praha</p>
          <h1 id="hero-h">
            Vyzvedneme <em>teď</em>,
            <br /> doručíme <em>dnes</em>.
          </h1>
          <p className="hero__lead">
            Jeden kurýr veze jednu zásilku přímo k příjemci — po Praze v řádu hodin,
            na Slovensko zpravidla do 24 hodin. Bez svozových skladů a čekání na kolo.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420241080251">
              Zavolat kurýra
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
          <ul className="reach" aria-label="Kam doručujeme">
            {reach.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <figure className="hero__media">
          <img
            src="/hero.webp"
            alt="Kurýr eKuryr s brašnou přebírá zásilku v pražské ulici"
            width={880}
            height={1040}
            loading="eager"
          />
          <figcaption className="hero__tag">
            <span className="hero__tag-num">04:12</span>
            <span className="hero__tag-lbl">průměr od objednávky k vyzvednutí</span>
          </figcaption>
        </figure>
      </section>

      <section className="sekce sekce--sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce__head">
          <p className="eyebrow">Co pro vás jezdíme</p>
          <h2 id="sluzby-h">Tři trasy, jedna zásilka na vaše jméno</h2>
        </div>

        <div className="karty">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <span className="karta__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <a className="karta__link" href="#objednat">
                {s.detail}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>

        <figure className="sekce__foto">
          <img
            src="/section-1.webp"
            alt="Kurýr na motorce projíždí pražskou dopravou se zásilkou"
            width={1200}
            height={620}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="sekce sekce--jistota" id="jistota" aria-labelledby="jistota-h">
        <div className="jistota__grid">
          <div className="jistota__text">
            <p className="eyebrow">Proč nám firmy věří</p>
            <h2 id="jistota-h">O každé zásilce víte tři věci — a všechny zdarma</h2>
            <p className="jistota__lead">
              Doručování je hlavně o důvěře. Proto o zásilce dostáváte zprávy sami
              od sebe, ne až když se ptáte. Pro firmy k tomu přidáme job numbers
              na vaše nákladová střediska a detailní výpis k fakturaci.
            </p>

            <dl className="jistota__list">
              {zdarma.map((z) => (
                <div className="jistota__item" key={z.stitek}>
                  <dt>{z.stitek}</dt>
                  <dd>{z.text}</dd>
                </div>
              ))}
            </dl>

            <p className="jistota__fair">
              <strong>Fér partnerství:</strong> dobrá cena, flexibilita a kvalita —
              i online audit trasy, když potřebujete mít vše doložené.
            </p>
          </div>

          <figure className="jistota__foto">
            <img
              src="/section-2.webp"
              alt="Zákazník přebírá doručenou zásilku od kurýra eKuryr"
              width={720}
              height={860}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="objednat" id="objednat">
          <h3>Jak si kurýra objednáte</h3>
          <ol className="objednat__list">
            {objednani.map((o) => (
              <li key={o.krok}>
                <span className="objednat__krok" aria-hidden="true">
                  {o.krok}
                </span>
                <div>
                  <p className="objednat__zpusob">{o.zpusob}</p>
                  <p className="objednat__hodnota">{o.hodnota}</p>
                  <p className="objednat__pozn">{o.pozn}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
