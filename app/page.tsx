import type { ReactNode } from "react";

type Bar = { h: number; v: number; peak?: boolean; now?: boolean };

const rytmus: Bar[] = [
  { h: 8, v: 68, peak: true },
  { h: 9, v: 42 },
  { h: 10, v: 52 },
  { h: 11, v: 74, peak: true },
  { h: 12, v: 48 },
  { h: 13, v: 58 },
  { h: 14, v: 92, peak: true, now: true },
  { h: 15, v: 54 },
  { h: 16, v: 64 },
  { h: 17, v: 80, peak: true },
  { h: 18, v: 50 },
  { h: 19, v: 36 },
  { h: 20, v: 24 },
];

function barClass(b: Bar): string {
  const c = ["bar"];
  if (b.now) c.push("bar--now");
  else if (b.peak) c.push("bar--peak");
  return c.join(" ");
}

function Divider(): ReactNode {
  return (
    <div className="divider" aria-hidden="true">
      <div className="divider__bars">
        {rytmus.map((b) => (
          <span
            key={b.h}
            className={
              "divider__bar" +
              (b.now ? " divider__bar--now" : b.peak ? " divider__bar--peak" : "")
            }
            style={{ height: `${Math.max(22, b.v)}%` }}
          />
        ))}
      </div>
    </div>
  );
}

const dny: { d: string; today?: boolean }[] = [
  { d: "Pondělí" },
  { d: "Úterý" },
  { d: "Středa" },
  { d: "Čtvrtek" },
  { d: "Pátek", today: true },
  { d: "Sobota" },
  { d: "Neděle" },
];

const vybaveni: string[] = [
  "Samoobslužná pokladna",
  "Přebalovací pult",
  "Hrací koutek pro děti",
  "Bezbariérový vstup",
  "Wi-Fi zdarma",
  "Balicí pult",
];

const sluzby: string[] = [
  "Plnicí stanice drogerie",
  "Expresní vyzvednutí do 60 minut",
  "Scan & Go",
  "Foto DIY",
  "dm box",
  "Rozšířený sortiment dekorativní kosmetiky",
];

const platba: string[] = ["Hotovost", "Platba kartou", "active beauty body", "Dárkové poukázky"];

const okoli: { misto: string; km: string; do: string }[] = [
  { misto: "Olomouc – Šantovka", km: "2,7 km", do: "21 hod." },
  { misto: "Olomouc – Hodolany", km: "2,9 km", do: "20 hod." },
  { misto: "Olomouc – Pavlovičky", km: "4,9 km", do: "20 hod." },
  { misto: "Velký Týnec", km: "6,0 km", do: "21 hod." },
  { misto: "Prostějov", km: "12,6 km", do: "20 hod." },
];

export default function Page(): ReactNode {
  return (
    <main className="page">
      <section className="hero">
        <div className="wrap">
          <div className="hero__top">
            <div className="brand">
              <span className="brand__mark">dm</span>
              <span className="brand__sub">drogerie markt · prodejna Olomouc</span>
            </div>
            <span className="status">
              <span className="status__dot" aria-hidden="true" />
              Otevřeno · zavíráme ve 20:00
            </span>
          </div>

          <h1 className="hero__title">
            Dnes jsme tu pro Vás
            <br />
            do <span className="hero__accent">20 hod.</span>
          </h1>

          <figure className="chart">
            <div
              className="rytmus"
              role="img"
              aria-label="Rytmus dne: nejrušnější hodiny jsou kolem 8., 11., 14. a 17. hodiny, právě teď je nejvíc lidí ve 14 hodin."
            >
              {rytmus.map((b, i) => (
                <div className="rytmus__col" key={b.h}>
                  <span
                    className={barClass(b)}
                    style={{ height: `${b.v}%`, animationDelay: `${i * 22}ms` }}
                  />
                </div>
              ))}
            </div>
            <div className="ticks" aria-hidden="true">
              {rytmus.map((b) => (
                <span className="tick" key={b.h}>
                  {b.peak ? b.h : ""}
                </span>
              ))}
            </div>
            <figcaption className="chart__cap">
              Rytmus dne — <strong>exponované časy 8 · 11 · 14 · 17</strong>. Sytější sloupec = víc
              lidí; korálový je právě teď.
            </figcaption>
          </figure>

          <div className="hero__info">
            <address className="addr">
              <span className="addr__line">Ukázková 123</span>
              <span className="addr__line">779 00 Olomouc</span>
            </address>
            <div className="cta">
              <a className="btn btn--sun" href="https://mapy.cz">
                Navigovat na prodejnu
              </a>
              <a className="btn btn--ghost" href="tel:+420777111222">
                Volat 777 111 222
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="section" aria-labelledby="s1">
        <div className="wrap">
          <header className="shead">
            <span className="shead__num">01</span>
            <h2 className="shead__title" id="s1">
              Kdy máme otevřeno a co u nás pořídíte
            </h2>
          </header>

          <div className="grid grid--3">
            <div className="panel">
              <h3 className="panel__label">Otevírací doba</h3>
              <ul className="hours">
                {dny.map((x) => (
                  <li className={"hours__row" + (x.today ? " hours__row--today" : "")} key={x.d}>
                    <span className="hours__day">
                      {x.d}
                      {x.today ? <span className="hours__tag">dnes</span> : null}
                    </span>
                    <span className="hours__time">08:00–20:00</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <h3 className="panel__label">Vybavení prodejny</h3>
              <ul className="marks">
                {vybaveni.map((s) => (
                  <li className="marks__item" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <h3 className="panel__label">Služby navíc</h3>
              <ul className="marks">
                {sluzby.map((s) => (
                  <li className="marks__item" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
              <h3 className="panel__label panel__label--tight">Platíte jak chcete</h3>
              <ul className="chips">
                {platba.map((s) => (
                  <li className="chip" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="section section--alt" aria-labelledby="s2">
        <div className="wrap">
          <header className="shead">
            <span className="shead__num">02</span>
            <h2 className="shead__title" id="s2">
              Máte to jinam blíž? Prodejny dm v okolí
            </h2>
          </header>

          <ul className="near">
            {okoli.map((o) => (
              <li className="near__row" key={o.misto}>
                <span className="near__place">{o.misto}</span>
                <span className="near__km">{o.km}</span>
                <span className="near__do">dnes do {o.do}</span>
              </li>
            ))}
          </ul>

          <p className="note">
            Časy i vzdálenosti jsou orientační pro prodejnu Olomouc, Ukázková 123. Aktuální otevírací
            dobu vždy najdete u konkrétní prodejny.
          </p>
        </div>
      </section>
    </main>
  );
}
