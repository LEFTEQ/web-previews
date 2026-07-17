import type { CSSProperties } from "react";

type Service = { title: string; desc: string };
type Check = string;

const services: Service[] = [
  {
    title: "Kanceláře a administrativa",
    desc: "Denní i noční úklid pracovišť, sociálních zázemí a společných prostor.",
  },
  {
    title: "Bytové domy",
    desc: "Schodiště, výtahy a společné prostory pro SVJ i bytová družstva.",
  },
  {
    title: "Domácnosti",
    desc: "Pravidelný i jednorázový úklid bytů a rodinných domů.",
  },
  {
    title: "Venkovní plochy",
    desc: "Údržba chodníků, parkovišť a zeleně kolem objektu.",
  },
  {
    title: "Hygienický servis",
    desc: "Nosiče, náplně a sanitární doplňky doplníme a průběžně hlídáme.",
  },
  {
    title: "Úklid na míru",
    desc: "Po rekonstrukci, jednorázově nebo podle vlastního rozpisu.",
  },
];

const checks: Check[] = [
  "Kniha úklidu, kontrolní list a docházka u každé zakázky",
  "Pojištění u Allianz proti škodám do 5 mil. Kč",
  "Čistý výpis z rejstříku trestů u všech pracovnic",
  "Zaškolení na technologii, bezpečnost a požární ochranu",
  "Prostředky schválené hlavním hygienikem / MZ ČR",
  "Smlouva o dílo s měsíční zkušební lhůtou",
  "Vedoucí nonstop k dispozici, když je potřeba řešit hned",
];

export default function Page() {
  return (
    <main className="cp">
      {/* HERO — clarity above the waterline */}
      <section className="cp-hero">
        <div className="cp-hero-top">
          <div className="cp-wrap">
            <div className="cp-nav">
              <span className="cp-mark" aria-label="Clean Pro">
                Clean<span className="cp-drop" aria-hidden="true" />Pro
              </span>
              <span className="cp-nav-meta">Liberec · úklid od 1999</span>
            </div>

            <p className="cp-eyebrow">Úklidové služby · Liberec</p>
            <h1 className="cp-h1">
              <span className="cp-line">
                <span className="cp-line-in">Hotovo se pozná</span>
              </span>
              <span className="cp-line">
                <span className="cp-line-in cp-line-accent">podle klidné hladiny.</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="cp-hladina cp-hladina-hero" aria-hidden="true">
          <span className="cp-ripple" />
        </div>

        <div className="cp-hero-below">
          <div className="cp-wrap cp-hero-below-grid">
            <p className="cp-hero-sub">
              Uklidíme kanceláře, bytové domy i domácnosti — v čase a frekvenci,
              kterou si zvolíte. Nepřetržitě, včetně svátků a víkendů.
            </p>
            <dl className="cp-facts">
              <div className="cp-fact">
                <dt>Dostupnost</dt>
                <dd>Nonstop, o svátcích i víkendech</dd>
              </div>
              <div className="cp-fact">
                <dt>Pojištění</dt>
                <dd>Allianz, do 5 mil. Kč</dd>
              </div>
              <div className="cp-fact">
                <dt>Zkušenost</dt>
                <dd>Liberec, od roku 1999</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="cp-section">
        <div className="cp-hladina" aria-hidden="true">
          <span className="cp-ripple" />
        </div>
        <div className="cp-wrap cp-split">
          <div className="cp-split-lead">
            <p className="cp-count">6 oblastí úklidu</p>
            <h2 className="cp-h2">Co u vás uklidíme</h2>
            <p className="cp-lead-p">
              Rozsah sestavíme přesně podle objektu. Frekvenci i čas volíte vy —
              přizpůsobíme se provozu, ne naopak.
            </p>
          </div>
          <ul className="cp-services">
            {services.map((s, i) => (
              <li className="cp-service" key={s.title} style={{ "--i": i } as CSSProperties}>
                <span className="cp-service-drop" aria-hidden="true" />
                <h3 className="cp-service-title">{s.title}</h3>
                <p className="cp-service-desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRUST — the control sheet, surfaced */}
      <section className="cp-section">
        <div className="cp-hladina" aria-hidden="true">
          <span className="cp-ripple" />
        </div>
        <div className="cp-wrap cp-split cp-split-trust">
          <div className="cp-split-lead">
            <p className="cp-count">7 bodů kontroly</p>
            <h2 className="cp-h2">Proč nám věříte</h2>
            <p className="cp-lead-p">
              Na trhu jsme od roku 1999. Každá zakázka má svůj papír — knihu
              úklidu, kontrolní list a docházku. Prošlé, podepsané, dohledatelné.
              To je pro nás „čisto“.
            </p>
          </div>

          <div className="cp-sheet">
            <div className="cp-sheet-head">
              <span className="cp-sheet-title">Kontrolní list</span>
              <span className="cp-sheet-sub">Clean Pro cz s.r.o. · provozovna Liberec</span>
            </div>
            <ul className="cp-checks">
              {checks.map((c) => (
                <li className="cp-check" key={c}>
                  <span className="cp-check-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        d="M4 12.5l5 5L20 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="cp-check-label">{c}</span>
                </li>
              ))}
            </ul>
            <p className="cp-sheet-foot">
              Vše nezávadnými prostředky. Návrh smlouvy vždy konzultujeme a
              upravíme podle vašich potřeb.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
