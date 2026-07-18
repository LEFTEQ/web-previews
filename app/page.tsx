import { HeroHeadline } from "./motion";

const visit = [
  {
    n: "01",
    t: "Vstupní vyšetření",
    d: "Periodontální sondou změříme hloubku dásňových kapes u každého zubu a zhodnotíme, kde dásně krvácejí.",
  },
  {
    n: "02",
    t: "Odstranění kamene",
    d: "Ultrazvukem a ručními nástroji sejmeme zubní kámen a plak nad dásní i pod jejím okrajem.",
  },
  {
    n: "03",
    t: "Air-flow pískování",
    d: "Jemným proudem prášku a vody odstraníme pigmentace od kávy, čaje a cigaret.",
  },
  {
    n: "04",
    t: "Leštění a fluoridace",
    d: "Vyhladíme povrch zubů, aby se plak hůř usazoval, a posílíme sklovinu fluoridovým gelem.",
  },
  {
    n: "05",
    t: "Nácvik doma",
    d: "Ukážeme vám techniku čištění, správný mezizubní kartáček i pastu — na vašich vlastních zubech.",
  },
];

const cenik = [
  { s: "Vstupní dentální hygiena", m: "60 min", c: "1 200 Kč" },
  { s: "Opakovaná dentální hygiena", m: "45 min", c: "900 Kč" },
  { s: "Air-flow pískování", m: "20 min", c: "400 Kč" },
  { s: "Dentální hygiena dětí do 15 let", m: "30 min", c: "600 Kč" },
  { s: "Bělení zubů", m: "90 min", c: "od 3 500 Kč" },
];

const hodiny = [
  { d: "Pondělí", h: "7:00 – 15:00" },
  { d: "Úterý", h: "7:00 – 15:00" },
  { d: "Středa", h: "7:00 – 15:00" },
  { d: "Čtvrtek", h: "10:00 – 17:00" },
  { d: "Pátek", h: "7:00 – 15:00" },
  { d: "Sobota", h: "zavřeno", off: true },
  { d: "Neděle", h: "zavřeno", off: true },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#top" aria-label="GUM care — dentální hygiena Olomouc">
          <span className="brand-gum">GUM</span><span className="brand-care">care</span>
          <span className="brand-scale" aria-hidden="true" />
        </a>
        <nav className="top-nav" aria-label="Rychlá navigace">
          <a href="#osetreni">Ošetření</a>
          <a href="#ordinace">Ordinace</a>
          <a className="btn btn--sm" href="tel:777111222">Objednat se</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="wrap">
          <div className="probe probe--draw" aria-hidden="true" />
          <p className="eyebrow">Dentální hygiena · Olomouc, centrum</p>

          <div className="hero-grid">
            <div className="hero-main">
              <h1 className="hero-h1">
                <HeroHeadline />
              </h1>
              <div className="gum-arc" aria-hidden="true">
                <svg viewBox="0 0 640 120" preserveAspectRatio="none">
                  <path d="M0,16 C170,150 470,150 640,16" fill="none" stroke="#d98782" strokeWidth="14" strokeLinecap="round" />
                </svg>
              </div>
              <p className="hero-lede">
                Samostatná ordinace dentální hygieny. Odstraníme zubní kámen a plak,
                změříme hloubku dásňových kapes a naučíme vás, jak si udržet zdravé dásně
                doma. Bez čekání, na přesný čas.
              </p>
              <div className="hero-cta">
                <a className="btn" href="tel:777111222">Objednat se</a>
                <a className="btn btn--ghost" href="#osetreni">Ceník ošetření</a>
              </div>
            </div>

            <aside className="hero-side" aria-label="Rychlé informace">
              <div className="card">
                <p className="card-k">Nejbližší volný termín</p>
                <p className="card-v">tento týden ve čtvrtek</p>
              </div>
              <div className="card">
                <p className="card-k">Bez registrace u nás</p>
                <p className="card-v">přijdete jen na hygienu, zubaře mít nemusíte</p>
              </div>
              <div className="card">
                <p className="card-k">Ošetřuje</p>
                <p className="card-v">registrovaná dentální hygienistka</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec" id="osetreni">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num" aria-hidden="true">01</span>
            <div>
              <h2 className="sec-title">Jak vypadá ošetření</h2>
              <p className="sec-sub">
                Pět kroků jedné návštěvy — v tomhle pořadí, pokaždé. Vstupní hygiena trvá
                zhruba hodinu.
              </p>
            </div>
          </div>

          <ol className="steps">
            {visit.map((v) => (
              <li className="step" key={v.n}>
                <span className="step-n" aria-hidden="true">{v.n}</span>
                <h3 className="step-t">{v.t}</h3>
                <p className="step-d">{v.d}</p>
              </li>
            ))}
          </ol>

          <div className="cenik">
            <h3 className="cenik-title">Ceník</h3>
            <dl className="cenik-list">
              {cenik.map((c) => (
                <div className="cenik-row" key={c.s}>
                  <dt className="cenik-s">
                    {c.s} <span className="cenik-m">{c.m}</span>
                  </dt>
                  <dd className="cenik-c">{c.c}</dd>
                </div>
              ))}
            </dl>
            <p className="cenik-note">
              Ceny platí pro samoplátce. Dětskou hygienu i bělení domlouváme předem
              telefonicky.
            </p>
          </div>
        </div>
      </section>

      <section className="sec sec--mint" id="ordinace">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num" aria-hidden="true">02</span>
            <div>
              <h2 className="sec-title">Ordinace v Olomouci</h2>
              <p className="sec-sub">
                Klidná ordinace kousek od centra. Objednáváme na přesný čas, takže
                v čekárně nesedíte.
              </p>
            </div>
          </div>

          <div className="ord-grid">
            <div className="ord-hours">
              <h3 className="block-title">Ordinační hodiny</h3>
              <table className="hours">
                <tbody>
                  {hodiny.map((row) => (
                    <tr key={row.d} className={row.off ? "is-off" : undefined}>
                      <th scope="row">{row.d}</th>
                      <td>{row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ord-contact">
              <h3 className="block-title">Kde nás najdete</h3>
              <p className="contact-line"><span className="contact-k">Adresa</span> Olomouc</p>
              <p className="contact-line"><span className="contact-k">Telefon</span> <a href="tel:777111222">777 111 222</a></p>
              <p className="contact-line"><span className="contact-k">E-mail</span> —</p>
              <p className="contact-note">
                Termín i přeobjednání vyřídíme telefonicky v ordinačních hodinách.
              </p>
            </div>
          </div>

          <div className="refs">
            <h3 className="block-title">Co říkají pacienti</h3>
            <div className="refs-grid">
              <blockquote className="ref">
                <p>„Poprvé mi někdo v klidu vysvětlil, proč mi krvácely dásně. Po třech
                  návštěvách je klid.“</p>
                <cite>— Petra K., Olomouc</cite>
              </blockquote>
              <blockquote className="ref">
                <p>„Chodím sem na hygienu i bez toho, abych tu měl zubaře. Rychlé, šetrné,
                  bez kázání.“</p>
                <cite>— Martin V., Olomouc</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <a className="sticky-cta" href="tel:777111222">Zavolat 777&nbsp;111&nbsp;222</a>
    </main>
  );
}
