import type { CSSProperties } from "react";

type Chip = { name: string; note: string; tag: string };

const services: Chip[] = [
  { tag: "01", name: "Scan&Go", note: "Naskenujte zbo\u017e\u00ed rovnou v mobilu a proj\u010fte bez fronty." },
  { tag: "02", name: "Samoobslu\u017en\u00e1 pokladna", note: "Zaplat\u00edte sami \u2014 kartou i v hotovosti." },
  { tag: "03", name: "dm box", note: "Vyzvedn\u011bte objedn\u00e1vku i mimo otev\u00edrac\u00ed dobu." },
  { tag: "04", name: "Expresn\u00ed vyzvednut\u00ed", note: "P\u0159ipraveno do 60 minut od objedn\u00e1vky." },
  { tag: "05", name: "Bezbari\u00e9rov\u00fd p\u0159\u00edstup", note: "Pohodln\u011b dovnit\u0159 s ko\u010d\u00e1rkem i voz\u00edkem." },
  { tag: "06", name: "Balic\u00ed pult", note: "Zabal\u00edme d\u00e1rek p\u0159\u00edmo na prodejn\u011b." },
  { tag: "07", name: "Wi-Fi zdarma", note: "P\u0159ipojen\u00ed po cel\u00e9 prodejn\u011b." },
  { tag: "08", name: "Hrac\u00ed koutek", note: "Ne\u017e nakoup\u00edte, d\u011bti si pohraj\u00ed." },
];

const sortiment: Chip[] = [
  { tag: "K", name: "Dekorativn\u00ed kosmetika", note: "Roz\u0161\u00ed\u0159en\u00fd sortiment: Gabriella Salvete, NYX, Rimmel, miss sporty." },
  { tag: "V", name: "Zdrav\u00e1 v\u00fd\u017eiva", note: "Roz\u0161\u00ed\u0159en\u00fd sortiment Alpro a bio potravin." },
  { tag: "Z", name: "P\u00e9\u010de o zdrav\u00ed", note: "Vitam\u00edny, dopl\u0148ky stravy a l\u00e9k\u00e1rensk\u00e1 drogerie." },
  { tag: "\u2605", name: "active beauty body", note: "Sb\u00edrejte je s ka\u017ed\u00fdm n\u00e1kupem a prom\u011b\u0148te za odm\u011bny." },
];

const payment = ["Hotovost", "Platba kartou", "active beauty body", "D\u00e1rkov\u00e9 poukazy"];

const busy: { t: string; w: number; peak?: boolean }[] = [
  { t: "8:00", w: 30 },
  { t: "11:00", w: 62 },
  { t: "14:00", w: 74 },
  { t: "17:00", w: 96, peak: true },
  { t: "20:00", w: 42 },
];

export default function Page() {
  return (
    <main className="page">
      {/* HERO ---------------------------------------------------------- */}
      <header className="band band--hero">
        <div className="wrap">
          <div className="wordmark" aria-label="dm l\u00e9k\u00e1rna a drogerie, Hradec Kr\u00e1lov\u00e9">
            <span className="wordmark__mark">dm<i>.</i></span>
            <span className="wordmark__sub">l\u00e9k\u00e1rna &amp; drogerie \u00b7 Hradec Kr\u00e1lov\u00e9</span>
          </div>

          <p className="hero__eyebrow">Va\u0161e prodejna v centru</p>
          <h1 className="hero__title">
            V\u0161echno pro kr\u00e1su, zdrav\u00ed<br />a p\u00e9\u010di \u2014 hned za rohem.
          </h1>
          <p className="hero__lede">
            Otev\u00edrac\u00ed doba, slu\u017eby a nejklidn\u011bj\u0161\u00ed \u010das k n\u00e1kupu na jedn\u00e9 rychl\u00e9 str\u00e1nce. \u017d\u00e1dn\u00e9 \u010dek\u00e1n\u00ed, ne\u017e se na\u010dte mapa.
          </p>

          <div className="flagship chip chip--flag">
            <span className="chip__tag">Prodejna</span>
            <span className="chip__name flagship__addr">Uk\u00e1zkov\u00e1 123</span>
            <span className="chip__note">Hradec Kr\u00e1lov\u00e9 \u00b7 p\u0159\u00edzem\u00ed obchodn\u00edho centra</span>
            <span className="status" role="status">
              <span className="status__dot" aria-hidden="true" />
              <span className="status__word">Otev\u0159eno</span>
              <span className="status__till">dnes do 21:00</span>
            </span>
            <span className="barcode" aria-hidden="true" />
          </div>

          <div className="hero__chiprow">
            <a className="minichip minichip--phone" href="tel:+420777111222">
              <span className="minichip__tag">Zavolat</span>
              <span className="minichip__val">777 111 222</span>
            </a>
            <div className="minichip">
              <span className="minichip__tag">Otev\u0159eno</span>
              <span className="minichip__val">Po\u2013Ne \u00b7 08\u201321</span>
            </div>
          </div>
        </div>
      </header>

      {/* SLU\u017dBY ---------------------------------------------------------- */}
      <section className="band band--pale" aria-labelledby="h-sluzby">
        <div className="wrap">
          <p className="eyebrow">Vybaven\u00ed &amp; slu\u017eby</p>
          <h2 id="h-sluzby" className="h2">Co si tu vy\u0159\u00edd\u00edte</h2>
          <p className="section__lede">
            Ka\u017ed\u00e1 slu\u017eba na sv\u00e9m reg\u00e1lov\u00e9m \u0161t\u00edtku \u2014 p\u0159esn\u011b jako na prodejn\u011b.
          </p>

          <div className="grid">
            {services.map((s) => (
              <div className="chip" key={s.name}>
                <span className="chip__tag">Slu\u017eba {s.tag}</span>
                <span className="chip__name">{s.name}</span>
                <span className="chip__note">{s.note}</span>
              </div>
            ))}
          </div>

          <div className="hoursrow">
            <div className="chip chip--hours">
              <span className="chip__tag">Otev\u00edrac\u00ed doba</span>
              <span className="chip__name">Pond\u011bl\u00ed\u2013Ned\u011ble</span>
              <span className="chip__hours">08:00 \u2013 21:00</span>
              <span className="chip__note">Otev\u0159eno ka\u017ed\u00fd den, i o v\u00edkendu a sv\u00e1tc\u00edch.</span>
            </div>
            <div className="chip chip--pay">
              <span className="chip__tag">Jak zaplat\u00edte</span>
              <ul className="paylist">
                {payment.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPONOVAN\u00c9 \u010cASY + D\u016cV\u011aRA ------------------------------------- */}
      <section className="band" aria-labelledby="h-casy">
        <div className="wrap">
          <p className="eyebrow">Exponovan\u00e9 \u010dasy</p>
          <h2 id="h-casy" className="h2">Kdy je u n\u00e1s klid</h2>
          <p className="section__lede">
            Typick\u00fd v\u0161edn\u00ed den. \u010c\u00edm del\u0161\u00ed prou\u017eek, t\u00edm v\u00edc lid\u00ed. Nejklidn\u011bji b\u00fdv\u00e1 hned r\u00e1no.
          </p>

          <div className="graph" role="img" aria-label="Vyt\u00ed\u017een\u00ed prodejny b\u011bhem dne: r\u00e1no v 8 hodin klid, vrchol kolem 17. hodiny, ve\u010der op\u011bt klid.">
            {busy.map((b) => (
              <div className="bar" key={b.t}>
                <span className="bar__time">{b.t}</span>
                <span className="bar__track">
                  <span
                    className={"bar__fill" + (b.peak ? " bar__fill--peak" : "")}
                    style={{ "--w": b.w + "%" } as CSSProperties}
                  />
                </span>
                {b.peak ? <span className="bar__flag">\u0161pi\u010dka</span> : null}
              </div>
            ))}
          </div>
          <p className="graph__hint">Tip: chcete nakoupit v klidu? Sta\u010dte si to na r\u00e1no kolem osm\u00e9.</p>

          <div className="divider" aria-hidden="true" />

          <p className="eyebrow eyebrow--gold">Co u n\u00e1s najdete</p>
          <h2 className="h2">Pro\u010d se sem vyplat\u00ed zaj\u00edt</h2>
          <div className="grid grid--trust">
            {sortiment.map((s) => (
              <div className="chip chip--trust" key={s.name}>
                <span className="chip__tag">{s.tag}</span>
                <span className="chip__name">{s.name}</span>
                <span className="chip__note">{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
