import React from "react";

type Service = {
  code: string;
  num: string;
  name: string;
  dia: string;
  method: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    code: "KAN·01",
    num: "01",
    name: "Vysokotlaké čištění",
    dia: "Ø 40–300 mm",
    method: "WOMA · 150 bar",
    desc: "Tryska projede přípojkou i ležatou kanalizací a odplaví tuk, usazeniny i písek. Nejčastější zásah — obnoví plný průtok bez bourání.",
  },
  {
    code: "KAN·02",
    num: "02",
    name: "Kamerová inspekce",
    dia: "Ø 50–600 mm",
    method: "CCTV · záznam",
    desc: "Barevná kamera projede potrubí a ukáže, kde je prasklina, propad nebo kořen. Záznam a protokol dostanete pro pojišťovnu i pro sebe.",
  },
  {
    code: "KAN·03",
    num: "03",
    name: "Frézování a kořeny",
    dia: "Ø 70–400 mm",
    method: "řezná hlavice",
    desc: "Prorostlé kořeny, zabetonovaná redukce nebo vodní kámen? Rotační fréza je odřízne a potrubí vrátí do původního profilu.",
  },
  {
    code: "KAN·04",
    num: "04",
    name: "Nouzové zprůchodnění",
    dia: "Ø 40–200 mm",
    method: "spirála · tryska",
    desc: "Voda ve sprše stoupá a WC neodtéká? Vyjíždíme nonstop po celé Praze a nejběžnější ucpání uvolníme obvykle do jedné hodiny.",
  },
  {
    code: "KAN·05",
    num: "05",
    name: "Odčerpání a vývoz",
    dia: "do 3 m³",
    method: "sací vůz",
    desc: "Zaplavený sklep, jímka nebo lapák tuku. Odsajeme, odvezeme a předáme doklad o ekologické likvidaci odpadní vody.",
  },
  {
    code: "KAN·06",
    num: "06",
    name: "Trasování potrubí",
    dia: "libovolné Ø",
    method: "sonda · detektor",
    desc: "Nevíte, kudy vede přípojka nebo kde je revizní šachta? Zaměříme trasu i hloubku a označíme ji přímo na místě, než se začne kopat.",
  },
];

function Roundel({
  size,
  label,
  monogram,
}: {
  size: "hero" | "mark";
  label?: string;
  monogram?: string;
}) {
  return (
    <div className={size === "hero" ? "roundel roundel--hero" : "roundel roundel--mark"} aria-hidden="true">
      <span className="roundel__ring" />
      <span className="roundel__bolts" />
      <span className="roundel__inner">
        <span className="roundel__mono">{monogram ?? "RP"}</span>
        {label ? <span className="roundel__stamp">{label}</span> : null}
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="rp">
      <div className="flow" aria-hidden="true">
        <span className="flow__track" />
        <span className="flow__fill" />
      </div>

      {/* ---------------- HERO ---------------- */}
      <header className="hero">
        <div className="hero__grid">
          <div className="hero__mark">
            <Roundel size="hero" label="Aktualizováno 2025" />
          </div>

          <div className="hero__body">
            <p className="eyebrow">RP&nbsp;Profi&nbsp;servis · Praha · kanalizace&nbsp;nonstop</p>

            <h1 className="hero__title">
              <span>Čištění</span>
              <span className="hero__accent">kanalizace</span>
              <span>v Praze</span>
            </h1>

            <p className="hero__lead">
              Ucpaný odpad, zapáchající šachta nebo kořeny v přípojce? Přijedeme
              s tlakovou vodou i kamerou a potrubí zprůchodníme — po celé Praze,
              ve dne v noci.
            </p>

            <div className="hero__cta">
              <a className="btn" href="tel:">
                Zavolejte — jsme na příjmu
              </a>
              <span className="hero__note">Výjezd nonstop · orientační cena předem</span>
            </div>

            <ul className="hero__specs">
              <li><span>Rozsah</span>Ø 40–600&nbsp;mm</li>
              <li><span>Tlak</span>150&nbsp;bar</li>
              <li><span>Dojezd</span>do 60&nbsp;min*</li>
            </ul>
          </div>
        </div>
      </header>

      {/* ---------------- KATALOG SLUŽEB ---------------- */}
      <section className="catalog" aria-labelledby="catalog-title">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Katalog zásahů · list KAN</p>
          <h2 id="catalog-title" className="section__title">Co u vás vyřešíme</h2>
          <p className="section__intro">
            Každý zásah má svůj kód, rozsah potrubí a metodu — jako v revizním
            protokolu. Nevíte, co potřebujete? Popište problém a poradíme telefonicky.
          </p>
        </div>

        <ol className="catalog__grid">
          {SERVICES.map((s) => (
            <li className="svc" key={s.code}>
              <div className="svc__mark">
                <Roundel size="mark" monogram={s.num} />
                <span className="svc__code">{s.code}</span>
              </div>
              <h3 className="svc__name">{s.name}</h3>
              <dl className="svc__spec">
                <div>
                  <dt>Potrubí</dt>
                  <dd>{s.dia}</dd>
                </div>
                <div>
                  <dt>Metoda</dt>
                  <dd>{s.method}</dd>
                </div>
              </dl>
              <p className="svc__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- DŮVĚRA ---------------- */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__lead">
            <p className="eyebrow">Protokol důvěry · Praha</p>
            <h2 id="trust-title" className="section__title section__title--light">
              30 let v pražských sklepích a šachtách
            </h2>
            <p className="trust__text">
              Nejsme dispečink, který vám přepošle číslo na někoho jiného. Jezdíme
              vlastní technikou, cenu řekneme předem a nefakturujeme zbytečné
              příplatky. Když se dá ucpání uvolnit spirálou, nenutíme vám výkop.
            </p>

            <dl className="stats">
              <div>
                <dt>Roky v provozu</dt>
                <dd>30<span>+</span></dd>
              </div>
              <div>
                <dt>Výjezd</dt>
                <dd>24<span>/7</span></dd>
              </div>
              <div>
                <dt>Cena předem</dt>
                <dd>ano</dd>
              </div>
            </dl>
          </div>

          <div className="trust__refs">
            <figure className="ref">
              <blockquote>
                „S firmou spolupracuji dlouhé roky a vždycky jsem byl spokojený.
                Přijedou, řeknou cenu a udělají to pořádně.“
              </blockquote>
              <figcaption>
                <span className="ref__name">Pavel Jarý</span>
                <span className="ref__meta">správce bytového domu · Praha 4</span>
              </figcaption>
            </figure>
            <figure className="ref">
              <blockquote>
                „Rychlá a poctivá práce. Ucpaný odpad v kuchyni vyřešili během
                dopoledne a ušetřili mi čas i nervy.“
              </blockquote>
              <figcaption>
                <span className="ref__name">Pavel Sedmík</span>
                <span className="ref__meta">majitel bytu · Praha 8</span>
              </figcaption>
            </figure>

            <p className="trust__contact">
              Praha a okolí · dispečink nonstop · tel — · e-mail —
            </p>
          </div>
        </div>
        <p className="trust__foot">*Dojezd do 60&nbsp;minut platí pro běžné zásahy v Praze podle aktuální dopravní situace.</p>
      </section>
    </main>
  );
}
