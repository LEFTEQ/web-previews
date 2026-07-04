import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAX IZOL — izolatérství Liberec | ploché střechy, hydroizolace",
  description:
    "Izolatérství MAX IZOL Liberec. Ploché střechy, hydroizolace, fólie i asfaltové pásy. Uděláme střechu, která drží vodu venku — s dlouhou zárukou. Ladislav Pažout, 777 118 079.",
};

const detaily = [
  {
    kod: "HI",
    nazev: "Hydroizolace plochých střech",
    popis:
      "Fóliové systémy (mPVC, TPO) i modifikované asfaltové pásy. Navrhneme skladbu podle sklonu, provozu a podkladu — ne podle toho, co máme zrovna na skladě.",
    detail: "od návrhu skladby po detail atiky",
  },
  {
    kod: "RE",
    nazev: "Rekonstrukce a zatékání",
    popis:
      "Najdeme, kudy voda opravdu teče — bývá to jinde, než kde kape. Lokální oprava, nebo nová vrstva přes stávající skladbu bez zbytečné demolice.",
    detail: "diagnostika záteku, oprava detailů",
  },
  {
    kod: "ZA",
    nazev: "Klempířské prvky a detaily",
    popis:
      "Oplechování, vpusti, prostupy, světlíky. Střecha stojí a padá na detailech — proto je děláme poctivě a napojujeme na izolaci, ne vedle ní.",
    detail: "atiky, vpusti, prostupy",
  },
];

export default function Page() {
  return (
    <main className="mx">
      <header className="mx-top">
        <a className="mx-wordmark" href="#" aria-label="MAX IZOL, izolatérství Liberec">
          <span className="mx-wm-max">MAX</span>
          <span className="mx-wm-izol">IZOL</span>
          <span className="mx-wm-seam" aria-hidden="true" />
        </a>
        <p className="mx-loc">Izolatérství &middot; Liberec</p>
      </header>

      <section className="mx-hero" aria-labelledby="hero-h">
        <div className="mx-hero-media">
          <img
            src="/hero.webp"
            alt="Plochá střecha s nataženou hydroizolační fólií a svařeným spojem"
            className="mx-hero-img"
          />
          <span className="mx-hero-seam" aria-hidden="true" />
        </div>
        <div className="mx-hero-copy">
          <p className="mx-eyebrow">Kde končí fólie, začíná zatékání</p>
          <h1 id="hero-h" className="mx-h1">
            Střecha, která<br />
            <em>drží vodu venku.</em>
          </h1>
          <p className="mx-lead">
            Ploché střechy, hydroizolace a jejich detaily po celém Liberecku.
            Svar po svaru, spoj po spoji — protože voda si najde každou chybu, kterou
            uděláme. My jich děláme minimum.
          </p>
          <div className="mx-cta-row">
            <a className="mx-btn" href="tel:+420777118079">
              Zavolat: 777&nbsp;118&nbsp;079
            </a>
            <a className="mx-btn-ghost" href="mailto:strechy@maxizol.cz">
              Napsat na střechu
            </a>
          </div>
        </div>
      </section>

      <section className="mx-services" aria-labelledby="sluzby-h">
        <div className="mx-sec-head">
          <p className="mx-eyebrow">Co umíme utěsnit</p>
          <h2 id="sluzby-h" className="mx-h2">Tři vrstvy naší práce</h2>
        </div>
        <ol className="mx-list">
          {detaily.map((s) => (
            <li className="mx-item" key={s.kod}>
              <span className="mx-item-kod" aria-hidden="true">{s.kod}</span>
              <div className="mx-item-body">
                <h3 className="mx-item-h">{s.nazev}</h3>
                <p className="mx-item-p">{s.popis}</p>
                <p className="mx-item-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="mx-fig">
          <img
            src="/section-1.webp"
            alt="Izolatér svařuje spoj hydroizolační fólie na ploché střeše"
            className="mx-fig-img"
          />
          <figcaption className="mx-fig-cap">
            Svařený spoj se dá zkontrolovat jehlou i vzduchem. Neděláme nic, co
            bychom nepustili vodou.
          </figcaption>
        </figure>
      </section>

      <section className="mx-about" aria-labelledby="onas-h">
        <div className="mx-about-grid">
          <div className="mx-about-copy">
            <p className="mx-eyebrow">Kdo za tím stojí</p>
            <h2 id="onas-h" className="mx-h2">
              Na střeše nejste<br />zákazník, jste soused.
            </h2>
            <p className="mx-about-p">
              MAX IZOL vede <strong>Ladislav Pažout</strong>. Střechy v Liberci
              a okolí děláme dost dlouho na to, abychom je poznávali podle spár
              a věděli, kde se dřív zatékalo. Přijedeme, vylezeme nahoru,
              podíváme se — a řekneme na rovinu, jestli stačí oprava, nebo je
              čas na novou skladbu.
            </p>
            <ul className="mx-facts">
              <li className="mx-fact">
                <span className="mx-fact-k">Sídlo</span>
                <span className="mx-fact-v">U Náspu 546/1, Liberec 1 — Staré Město, 460&nbsp;01</span>
              </li>
              <li className="mx-fact">
                <span className="mx-fact-k">Telefon</span>
                <span className="mx-fact-v">
                  <a href="tel:+420777118079">777&nbsp;118&nbsp;079</a>{" "}
                  <span className="mx-fact-sep">/</span>{" "}
                  <a href="tel:+420608825657">608&nbsp;825&nbsp;657</a>
                </span>
              </li>
              <li className="mx-fact">
                <span className="mx-fact-k">E-mail</span>
                <span className="mx-fact-v">
                  <a href="mailto:strechy@maxizol.cz">strechy@maxizol.cz</a>
                </span>
              </li>
              <li className="mx-fact">
                <span className="mx-fact-k">IČO</span>
                <span className="mx-fact-v">44565216 &middot; DIČ CZ44565216</span>
              </li>
            </ul>
          </div>
          <figure className="mx-about-fig">
            <img
              src="/section-2.webp"
              alt="Dokončená plochá střecha s čistě provedenými detaily u atiky"
              className="mx-about-img"
            />
            <figcaption className="mx-about-cap">
              Hotová střecha na Liberecku — atika, vpust i prostupy napojené
              do jedné roviny.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
