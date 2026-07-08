import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zafido — péče o stromy v Praze | arboristika, kácení, ošetření korun",
  description:
    "Certifikovaní arboristé v Praze. Bezpečné kácení, řez a ošetření korun stromů, stromolezectví a posouzení stability. Postaráme se o strom, který za vaším domem stojí desítky let.",
};

const sluzby = [
  {
    kod: "A",
    nazev: "Řez a ošetření koruny",
    popis:
      "Zdravotní, bezpečnostní i redukční řez stromolezeckou technikou. Odlehčíme přetížené větve, sesadíme suché dřevo a necháme koruně tvar, který drží.",
    detail: "stromolezecky · bez plošiny · úklid dřeva",
  },
  {
    kod: "B",
    nazev: "Kácení ve stísněném prostoru",
    popis:
      "Postupné spouštění po částech tam, kam se jeřáb nedostane — mezi ploty, nad střechami, u drátů. Kus po kusu, s lanem a brzdou, ne na jeden pád.",
    detail: "postupné spouštění · řízený pád · nad zástavbou",
  },
  {
    kod: "C",
    nazev: "Vazby a odlehčení",
    popis:
      "Dynamické korunové vazby do tlakových vidlic. Podržíme prasklé kmeny pohromadě a starému stromu prodloužíme život o roky, ne o jednu sezonu.",
    detail: "dynamické vazby · sanace dutin · konzultace",
  },
  {
    kod: "D",
    nazev: "Posouzení stability",
    popis:
      "Vizuální kontrola (VTA) i tahová zkouška. Řekneme rovnou, jestli strom vydrží, nebo jestli je čas na kácení — a proč. Podklad pro úřad i pro klid.",
    detail: "VTA · tahová zkouška · písemný posudek",
  },
];

const reference = [
  {
    misto: "Dub letní · Stromovka",
    text:
      "Prasklá tlaková vidlice nad cestou. Založili jsme dvě dynamické vazby a odlehčili korunu — strom stojí a chodník je bezpečný.",
  },
  {
    misto: "Borovice · zahrada Vinohrady",
    text:
      "Kácení dva metry od okna a nad skleníkem. Spouštěli jsme po metrových špalcích, na trávníku nezůstala ani rýha.",
  },
  {
    misto: "Lípa · alej Troja",
    text:
      "Zdravotní řez šesti vzrostlých lip. Odstranili jsme suché dřevo, korunám vrátili průsvit a majitel dostal plán na dalších pět let.",
  },
];

export default function Page() {
  return (
    <main className="zf">
      <header className="zf-top">
        <a className="zf-mark" href="#" aria-label="Zafido — péče o stromy">
          <span className="zf-mark__z">Zafido</span>
          <span className="zf-mark__tag">péče o stromy · Praha</span>
        </a>
        <a className="zf-phone" href="tel:+420723629675">
          <span className="zf-phone__label">Zavolat</span>
          <span className="zf-phone__num">+420 723 629 675</span>
        </a>
      </header>

      <section className="zf-hero">
        <div className="zf-hero__media">
          <img
            src="/hero.webp"
            alt="Arborista ve stromolezeckém postroji vysoko v koruně vzrostlého stromu"
            className="zf-hero__img"
          />
          <div className="zf-hero__grain" aria-hidden="true" />
        </div>

        <div className="zf-hero__panel">
          <p className="zf-hero__eyebrow">Od kmene po špičku · na laně, ne na plošině</p>
          <h1 className="zf-hero__title">
            Do koruny
            <br />
            <span className="zf-hero__title--out">vylezeme</span>
          </h1>
          <p className="zf-hero__lead">
            Jsme pražští arboristé. Ošetříme vzrostlý strom shora — řezem,
            vazbou i bezpečným kácením v místech, kam se technika nedostane.
            Odkud vede lano, tam se dostaneme.
          </p>
          <div className="zf-hero__cta">
            <a className="zf-btn" href="tel:+420723629675">
              Domluvit prohlídku stromu
            </a>
            <a className="zf-btn zf-btn--ghost" href="#sluzby">
              Co pro strom uděláme
            </a>
          </div>
          <dl className="zf-hero__facts">
            <div>
              <dt>výška, kam vylezeme</dt>
              <dd>30&nbsp;m<span>+</span></dd>
            </div>
            <div>
              <dt>pojištění odpovědnosti</dt>
              <dd>10&nbsp;mil.<span> Kč</span></dd>
            </div>
            <div>
              <dt>zásah bez poškození</dt>
              <dd>i&nbsp;2&nbsp;m<span> od okna</span></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="zf-services" id="sluzby" aria-labelledby="sluzby-nad">
        <div className="zf-services__head">
          <p className="zf-kicker">Čtyři věci, které se stromem umíme</p>
          <h2 id="sluzby-nad" className="zf-h2">
            Ne řezníci se stromem.
            <br />
            Arboristé, co ho chtějí udržet.
          </h2>
          <p className="zf-services__note">
            Přijedeme, obejdeme strom, řekneme rovnou, co dává smysl. Někdy stačí
            odlehčit jednu větev, jindy je poctivější strom skácet. Nebudeme vám
            prodávat zásah, který nepotřebuje.
          </p>
        </div>

        <ol className="zf-grid">
          {sluzby.map((s) => (
            <li className="zf-card" key={s.kod}>
              <span className="zf-card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="zf-card__nazev">{s.nazev}</h3>
              <p className="zf-card__popis">{s.popis}</p>
              <p className="zf-card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="zf-trust" aria-labelledby="trust-nad">
        <div className="zf-trust__media">
          <img
            src="/section-2.webp"
            alt="Detail práce arboristy — řez větve motorovou pilou v koruně stromu"
            className="zf-trust__img"
          />
        </div>

        <div className="zf-trust__body">
          <p className="zf-kicker zf-kicker--light">Proč zrovna my</p>
          <h2 id="trust-nad" className="zf-h2 zf-h2--light">
            Strom u vašeho domu<br />roste dýl, než tu bydlíte.
          </h2>
          <p className="zf-trust__lead">
            Vzrostlá lípa nebo dub jsou práce na desítky let. Špatný řez je vidět
            další čtvrtstoletí. Proto řešíme každý zásah tak, aby strom zůstal
            zdravý a bezpečný — a aby po nás zahrada vypadala jako předtím, jen
            uklizeně.
          </p>

          <ul className="zf-refs">
            {reference.map((r) => (
              <li className="zf-refs__item" key={r.misto}>
                <p className="zf-refs__misto">{r.misto}</p>
                <p className="zf-refs__text">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="zf-trust__meta">
            <p>
              Certifikovaní arboristé · ČSOP arboristika · práce ve výškách dle
              norem
            </p>
            <p>
              Působíme v Praze a okolí · Po–Pá 7:30–15:30 ·{" "}
              <a href="mailto:info@zafido.cz">info@zafido.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
