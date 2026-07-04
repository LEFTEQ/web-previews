import type { CSSProperties } from "react";

export const metadata = {
  title: "B + H — bezpečnostní a recepční služby v Praze | fyzická ostraha od 1996",
  description:
    "B + H, spol. s r.o. zajišťuje fyzickou ostrahu, recepční služby a ochranu majetku v Praze nepřetržitě 24 hodin denně. Přes 29 let na trhu, náhradní plnění, certifikovaní strážní.",
  openGraph: {
    title: "B + H — bezpečnostní služba pro váš klid v Praze",
    description:
      "Fyzická ostraha, recepce a ochrana majetku 24/7. Certifikovaní strážní, náhradní plnění, přes 29 let zkušeností. Hotline +420 728 903 597.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Noční ostraha objektu B + H v Praze" }],
  },
};

type Service = {
  code: string;
  name: string;
  desc: string;
};

const services: Service[] = [
  {
    code: "F",
    name: "Fyzická ostraha",
    desc: "Nepřetržitá ostraha objektů, majetku a osob 24 hodin denně. Obchůzky s čipovacím zařízením, kontrola vjezdů, klidná noc pro vaše nájemníky i sklady.",
  },
  {
    code: "R",
    name: "Recepční služby",
    desc: "Reprezentativní recepce pro bytové domy, kanceláře i nemocnice. Vítání návštěv, monitoring objektu a informovanost — tvář, které klienti důvěřují.",
  },
  {
    code: "K",
    name: "Ochrana majetku",
    desc: "Kamerové a zabezpečovací systémy na míru. Vždy hledáme ekonomicky výhodné řešení, které dává smysl pro konkrétní objekt a rozpočet.",
  },
];

type PostItem = {
  hh: string;
  label: string;
  note: string;
};

const logbook: PostItem[] = [
  { hh: "22:00", label: "Nástup na směnu", note: "Předání služby, kontrola klíčů a kamerového systému" },
  { hh: "00:15", label: "První obchůzka", note: "Načtení kontrolních bodů čipovacím zařízením" },
  { hh: "03:40", label: "Kontrola vjezdů", note: "Uzavřený areál, žádný neoprávněný pohyb" },
  { hh: "06:00", label: "Otevření recepce", note: "Příprava na příchod nájemníků a návštěv" },
];

type Ref = {
  place: string;
  loc: string;
  quote: string;
  who: string;
};

const references: Ref[] = [
  {
    place: "Bytový dům",
    loc: "Praha 5",
    quote:
      "Bezstarostné zajištění recepce a noční ostrahy. Komunikace s vedením je na dobré úrovni a oceňujeme rychlou reakci na naše podněty.",
    who: "Předseda představenstva bytového domu",
  },
  {
    place: "Městská nemocnice",
    loc: "Praha",
    quote:
      "Komplexní bezpečnostní a recepční služby využíváme už 20 let. Ostraha zajišťuje klidný chod recepce, monitoring objektu i informovanost návštěv.",
    who: "Ředitelka Městské nemocnice Praha",
  },
  {
    place: "Skladový areál",
    loc: "Praha-východ",
    quote:
      "Od začátku spolupráce jsme nezaznamenali žádné odcizení ani poškození majetku. Pravidelné obchůzky s čipovacím zařízením. Mohu doporučit.",
    who: "Majitel skladového areálu",
  },
];

const stats = [
  { n: "70+", l: "realizovaných zakázek" },
  { n: "29", l: "let na trhu (od 1996)" },
  { n: "130+", l: "školených zaměstnanců" },
  { n: "20 mil.", l: "limit pojistného plnění" },
];

export default function Page() {
  return (
    <main className="bh">
      <header className="bh-top">
        <a className="bh-wordmark" href="#top" aria-label="B + H bezpečnostní služba">
          <span className="bh-mark">B<span className="bh-plus">+</span>H</span>
          <span className="bh-mark-sub">bezpečnostní služba · Praha</span>
        </a>
        <a className="bh-hotline" href="tel:+420728903597">
          <span className="bh-hotline-dot" aria-hidden="true" />
          <span className="bh-hotline-txt">
            <span className="bh-hotline-lbl">Hotline 24/7</span>
            <span className="bh-hotline-num">+420 728 903 597</span>
          </span>
        </a>
      </header>

      <section className="bh-hero" id="top">
        <div className="bh-hero-media">
          <img
            src="/hero.webp"
            alt="Střežený objekt v Praze v noci, ostraha B + H"
            width={1600}
            height={1000}
            className="bh-hero-img"
          />
          <div className="bh-hero-scrim" aria-hidden="true" />
        </div>

        <div className="bh-hero-inner">
          <p className="bh-eyebrow">Ve službě od roku 1996 · nepřetržitě 24/7</p>
          <h1 className="bh-h1">
            Někdo hlídá,
            <br />
            <span className="bh-h1-em">zatímco vy spíte.</span>
          </h1>
          <p className="bh-lede">
            Fyzická ostraha, recepce a ochrana majetku pro bytové domy,
            kanceláře, nemocnice i sklady po celé Praze. Ráno se dozvíte jen
            to, že se nic nestalo — a to je přesně naše práce.
          </p>
          <div className="bh-hero-cta">
            <a className="bh-btn bh-btn-primary" href="tel:+420728903597">
              Zavolat na hotline
            </a>
            <a className="bh-btn bh-btn-ghost" href="#sluzby">
              Co zajišťujeme
            </a>
          </div>
          <ul className="bh-hero-badges" aria-label="Certifikace">
            <li>ČSN EN ISO 9001:2016</li>
            <li>ČSN EN ISO 45001:2018</li>
            <li>chráněný trh práce</li>
          </ul>
        </div>
      </section>

      <section className="bh-sluzby" id="sluzby">
        <div className="bh-sec-head">
          <p className="bh-eyebrow bh-eyebrow-dark">Čím se zabýváme</p>
          <h2 className="bh-h2">Tři služby, jeden klid navíc</h2>
          <p className="bh-sec-lede">
            Ochranu majetku a komplexní bezpečnostní služby poskytujeme v Praze
            už přes 29 let. Vyberte, co potřebujete — nebo vám navrhneme
            kombinaci na míru vašemu objektu.
          </p>
        </div>

        <div className="bh-cards">
          {services.map((s) => (
            <article className="bh-card" key={s.code}>
              <span className="bh-card-code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="bh-card-name">{s.name}</h3>
              <p className="bh-card-desc">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="bh-np">
          <div className="bh-np-txt">
            <p className="bh-eyebrow bh-eyebrow-dark">Náhradní plnění</p>
            <h3 className="bh-np-h">
              Zaměstnáváte přes 25 lidí? Ušetříme vám odvod do státního
              rozpočtu.
            </h3>
            <p className="bh-np-p">
              Naši strážní i recepční pracují na chráněných pracovních místech.
              Odběrem našich služeb splníte povinnost zaměstnávat osoby se
              zdravotním postižením — praktické řešení pro firmy i státní
              organizace.
            </p>
          </div>
          <a className="bh-btn bh-btn-primary bh-np-btn" href="tel:+420728903597">
            Ptát se na náhradní plnění
          </a>
        </div>
      </section>

      <section className="bh-onas">
        <div className="bh-onas-grid">
          <div className="bh-onas-media">
            <img
              src="/section-1.webp"
              alt="Školený pracovník ostrahy B + H při obchůzce"
              width={1200}
              height={1400}
              className="bh-onas-img"
            />
            <p className="bh-onas-cap">
              Každý strážný je držitelem certifikátu Strážný 68-008-E.
            </p>
          </div>

          <div className="bh-onas-body">
            <p className="bh-eyebrow bh-eyebrow-dark">Jak vypadá jedna noc ve službě</p>
            <h2 className="bh-h2">Kniha služby, ne prázdné sliby</h2>
            <p className="bh-sec-lede">
              Naši lidé jsou pravidelně školeni v BOZP, požární ochraně, práci
              s PC, vyprošťování osob z výtahů i zvládání krizových situací.
              Takhle vypadá běžná noční směna na vašem objektu:
            </p>

            <ol className="bh-log" aria-label="Průběh noční směny">
              {logbook.map((it) => (
                <li className="bh-log-item" key={it.hh}>
                  <span className="bh-log-hh">{it.hh}</span>
                  <span className="bh-log-txt">
                    <span className="bh-log-label">{it.label}</span>
                    <span className="bh-log-note">{it.note}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <dl className="bh-stats">
          {stats.map((s) => (
            <div className="bh-stat" key={s.l}>
              <dt className="bh-stat-n">{s.n}</dt>
              <dd className="bh-stat-l">{s.l}</dd>
            </div>
          ))}
        </dl>

        <div className="bh-refs">
          <p className="bh-eyebrow bh-eyebrow-dark bh-refs-eyebrow">
            Co o nás říkají klienti
          </p>
          <div className="bh-refs-grid">
            {references.map((r) => (
              <figure className="bh-ref" key={r.place + r.loc}>
                <figcaption className="bh-ref-place">
                  <span>{r.place}</span>
                  <span className="bh-ref-loc">{r.loc}</span>
                </figcaption>
                <blockquote className="bh-ref-quote">{r.quote}</blockquote>
                <p className="bh-ref-who">{r.who}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// keep the CSSProperties import used to satisfy strict configs
const _t: CSSProperties = {};
void _t;
