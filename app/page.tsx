import type { CSSProperties } from "react";

const sluzby = [
  {
    faze: "L1",
    nazev: "Silnoproud",
    popis:
      "Rozvody, rozvaděče, osvětlení a zásuvkové okruhy pro rodinné domy i výrobní haly. Navrhneme trasy tak, aby zbytečně nepřetěžovaly jistič a odečet na elektroměru dával smysl.",
    body: [
      "Kompletní rozvody a rozvaděče",
      "Osvětlení a regulace jasu",
      "Revize a odstranění závad",
    ],
  },
  {
    faze: "L2",
    nazev: "Chytrá instalace",
    popis:
      "Žaluzie, topení, ventilace i zavlažování se řídí z jednoho místa. Sběrnice propojí technologie do celku, který ráno vytápí a v poledne stíní bez toho, abyste sáhli na vypínač.",
    body: [
      "Řízení topení a ventilace",
      "Motorické žaluzie a rolety",
      "Scénáře a vizualizace domu",
    ],
  },
  {
    faze: "L3",
    nazev: "Slaboproud",
    popis:
      "Zabezpečení proti vloupání, kamery, datové sítě a domácí telefony. Chráníme lidi i majetek a taháme kroucenou dvojlinku tam, kde chcete rychlý a stabilní internet.",
    body: [
      "Alarmy a čidla pohybu",
      "Kamerové systémy a přístup",
      "Datové a strukturované sítě",
    ],
  },
];

const reference = [
  {
    typ: "Rodinný dům",
    misto: "České Budějovice",
    text:
      "Kompletní elektroinstalace novostavby včetně chytrého řízení topení a žaluzií. Předáno s revizí a plánem rozvaděče.",
  },
  {
    typ: "Výrobní hala",
    misto: "Jihočeský kraj",
    text:
      "Silnoproudé rozvody strojů a průmyslové osvětlení. Návrh počítal s rezervou pro budoucí linku.",
  },
  {
    typ: "Byt v centru",
    misto: "Budějovice 6",
    text:
      "Rekonstrukce hliníkových rozvodů za měď, nový rozvaděč a kamera u vchodu. Bez sekání do nosné zdi.",
  },
];

export default function Page() {
  return (
    <main className="dv">
      <header className="dv-nav">
        <a className="dv-mark" href="#" aria-label="DATAVOLT, elektroinstalace České Budějovice">
          <span className="dv-mark__data">DATA</span>
          <span className="dv-mark__bolt" aria-hidden="true">⚡</span>
          <span className="dv-mark__volt">VOLT</span>
        </a>
        <span className="dv-nav__meta">Elektroinstalace · České Budějovice</span>
      </header>

      <section className="dv-hero">
        <div className="dv-hero__grid">
          <div className="dv-hero__copy">
            <p className="dv-eyebrow">
              <span className="dv-eyebrow__dot" aria-hidden="true" />
              Silnoproud i slaboproud pod jednou revizí
            </p>
            <h1 className="dv-hero__title">
              Zapojíme dům tak,
              <br />
              ať <span className="dv-under">drží</span> a
              <br />
              <span className="dv-hero__accent">neskáče jičtě&#8288;.</span>
            </h1>
            <p className="dv-hero__lede">
              Elektromontáže od rozvaděče po poslední zásuvku. Nové domy, rekonstrukce
              i chytré řízení topení a žaluzií — vždy s revizní zprávou v ruce.
            </p>
            <div className="dv-hero__actions">
              <a className="dv-btn" href="tel:+420728500153">Zavolat 728 500 153</a>
              <a className="dv-btn dv-btn--ghost" href="mailto:info@data-volt.cz">
                Napsat na info@data-volt.cz
              </a>
            </div>
            <dl className="dv-spec">
              <div>
                <dt>Kde</dt>
                <dd>Kaplířova 715/1, Č. Budějovice</dd>
              </div>
              <div>
                <dt>Napětí</dt>
                <dd>230 / 400 V</dd>
              </div>
              <div>
                <dt>Výstup</dt>
                <dd>Revize a dílenské schéma</dd>
              </div>
            </dl>
          </div>
          <figure className="dv-hero__figure">
            <img
              src="/hero.webp"
              alt="Elektrikář DATAVOLT zapojuje rozvaděč"
              className="dv-hero__img"
              loading="eager"
            />
            <figcaption className="dv-hero__cap">Rozvaděč před revizí · fáze L1–L3</figcaption>
          </figure>
        </div>
      </section>

      <section className="dv-sec" id="sluzby">
        <div className="dv-sec__head">
          <p className="dv-eyebrow">Co v domě zapojíme</p>
          <h2 className="dv-sec__title">Tři fáze, jedna parta</h2>
          <p className="dv-sec__intro">
            Silnoproud, chytré řízení a slaboproud pojmenováváme jako fáze L1–L3 —
            stejně jako v rozvaděči. Vezmeme si na starost všechny tři, nebo jen tu,
            kterou potřebujete.
          </p>
        </div>
        <ol className="dv-fazy">
          {sluzby.map((s) => (
            <li className="dv-faze" key={s.faze} style={{ ["--phase" as any]: `'${s.faze}'` } as CSSProperties}>
              <span className="dv-faze__tag" aria-hidden="true">{s.faze}</span>
              <h3 className="dv-faze__name">{s.nazev}</h3>
              <p className="dv-faze__desc">{s.popis}</p>
              <ul className="dv-faze__list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="dv-sec dv-sec--trust" id="reference">
        <div className="dv-trust__grid">
          <div className="dv-trust__intro">
            <p className="dv-eyebrow">Klienti, co nám věří</p>
            <h2 className="dv-sec__title">Poctivě zapojeno,
              <br />řádně zrevidováno</h2>
            <p className="dv-sec__intro">
              Jsme mladá elektromontážní firma z Českých Budějovic. Děláme pro
              soukromé majitele i velké firmy po celém Jihu. Každou zakázku
              předáváme s revizní zprávou — abyste měli černé na bílém, že je to bezpečné.
            </p>
            <a className="dv-btn" href="tel:+420728500153">Domluvit prohlídku zdarma</a>
          </div>
          <div className="dv-trust__media">
            <img
              src="/section-1.webp"
              alt="Detail zapojení rozvaděče DATAVOLT"
              className="dv-trust__img"
              loading="lazy"
            />
            <img
              src="/section-2.webp"
              alt="Realizace elektroinstalace v objektu"
              className="dv-trust__img dv-trust__img--wide"
              loading="lazy"
            />
          </div>
        </div>
        <ul className="dv-refs">
          {reference.map((r) => (
            <li className="dv-ref" key={r.typ}>
              <span className="dv-ref__typ">{r.typ}</span>
              <span className="dv-ref__misto">{r.misto}</span>
              <p className="dv-ref__text">{r.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
