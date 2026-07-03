import type { CSSProperties } from "react";

export const metadata = {
  title: "PLOT-TEAM s.r.o. — Ploty, brány a zakázková kovovýroba, Prachatice",
  description:
    "PLOT-TEAM Prachatice: výroba a montáž oplocení na klíč. Kované a hliníkové ploty, pletivo, gabiony, posuvné i křídlové brány s pohonem. Zaměření, výroba, montáž — vše z jedné dílny.",
};

type Line = { code: string; name: string; note: string };

const fenceLines: Line[] = [
  {
    code: "01",
    name: "Kované a kovové ploty",
    note: "Zakázková kovovýroba z vlastní dílny — každý dílec svaříme a povrchově ošetříme u nás.",
  },
  {
    code: "02",
    name: "Pletivo a svařované panely",
    note: "Rychlé oplocení pozemku, provozovny nebo staveniště. Pozinkované i poplastované.",
  },
  {
    code: "03",
    name: "Gabiony a kámen",
    note: "Gabionové koše a zděné ploty z betonových tvarovek i přírodního kamene.",
  },
  {
    code: "04",
    name: "Dřevěné ploty",
    note: "Vlastní truhlářská výroba — laťkové i palisádové ploty na míru zahradě.",
  },
];

type Gate = { name: string; detail: string };

const gates: Gate[] = [
  { name: "Posuvné brány", detail: "Samonosné, bez kolejnice v zemi. S pohonem a dálkovým ovládáním." },
  { name: "Křídlové brány", detail: "Jedno- i dvoukřídlé, se skrytým nebo ramenovým pohonem." },
  { name: "Skládané brány", detail: "Tam, kde chybí místo pro odsun — brána se složí ke sloupku." },
  { name: "Automatizace a závory", detail: "Pohony, fotobuňky, klíčenky. Zprovozníme i vjezdové závory." },
];

type Step = { n: string; title: string; body: string };

const steps: Step[] = [
  {
    n: "1",
    title: "Přijedeme a zaměříme",
    body: "Podíváme se na terén, sklon i podloží. Poradíme, co se k pozemku hodí.",
  },
  {
    n: "2",
    title: "Spočítáme cenu",
    body: "Pošlete projekt nebo rozměry — zpracujeme konkrétní cenovou nabídku.",
  },
  {
    n: "3",
    title: "Vyrobíme a smontujeme",
    body: "Ploty a brány vyrobíme u nás v Prachaticích a osadíme na klíč.",
  },
];

export default function Page() {
  return (
    <main className="pt">
      <header className="pt-top">
        <a className="pt-brand" href="#uvod" aria-label="PLOT-TEAM, domů">
          <span className="pt-brand-mark" aria-hidden="true">
            <span className="pt-post" />
            <span className="pt-post" />
            <span className="pt-post" />
          </span>
          <span className="pt-brand-word">
            PLOT<span className="pt-brand-team">TEAM</span>
          </span>
        </a>
        <a className="pt-phone" href="tel:+420722031710">
          <span className="pt-phone-label">Zavolejte</span>
          722&nbsp;031&nbsp;710
        </a>
      </header>

      <section className="pt-hero" id="uvod">
        <div className="pt-hero-media">
          <img
            src="/hero.webp"
            alt="Realizace oplocení od PLOT-TEAM — kovový plot s bránou kolem pozemku"
            className="pt-hero-img"
            width={1600}
            height={1100}
          />
        </div>

        <div className="pt-hero-copy">
          <p className="pt-eyebrow">Prachatice · Průmyslová II · od zaměření po montáž</p>
          <h1 className="pt-h1">
            Postavíme vám <em>hranici</em>
            <br />
            pozemku, která vydrží.
          </h1>
          <p className="pt-lede">
            Ploty, brány a zakázková kovovýroba z jedné dílny. Kované i hliníkové
            ploty, pletivo, gabiony, dřevo — a posuvné brány s pohonem, co
            zajedou samy.
          </p>
          <div className="pt-hero-actions">
            <a className="pt-btn pt-btn-primary" href="tel:+420722031710">
              Zavolat 722&nbsp;031&nbsp;710
            </a>
            <a className="pt-btn pt-btn-ghost" href="#ploty">
              Prohlédnout ploty
            </a>
          </div>

          <dl className="pt-hero-facts">
            <div>
              <dt>Výroba</dt>
              <dd>vlastní kovovýroba i truhlárna</dd>
            </div>
            <div>
              <dt>Rozsah</dt>
              <dd>od zahrady po průmyslový areál</dd>
            </div>
            <div>
              <dt>Servis</dt>
              <dd>pohony bran a záruční péče</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pt-lines" id="ploty" aria-labelledby="ploty-h">
        <div className="pt-sec-head">
          <p className="pt-eyebrow">Čtyři linie plotu</p>
          <h2 className="pt-h2" id="ploty-h">
            Vyberte materiál, zbytek je na nás
          </h2>
          <p className="pt-sec-lede">
            Každou linii vyrábíme sami, takže rozměry i detaily sedí přesně na
            váš pozemek. Nekombinujeme cizí polotovary — svaříme, opálíme i
            natřeme u nás v Prachaticích.
          </p>
        </div>

        <ol className="pt-line-list">
          {fenceLines.map((l) => (
            <li className="pt-line" key={l.code}>
              <span className="pt-line-code" aria-hidden="true">
                {l.code}
              </span>
              <div className="pt-line-body">
                <h3 className="pt-line-name">{l.name}</h3>
                <p className="pt-line-note">{l.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pt-gates">
          <div className="pt-gates-head">
            <h3 className="pt-h3">A brána, kudy budete jezdit</h3>
            <p className="pt-sec-lede">
              Dodáme, vyrobíme a zprovozníme — včetně pohonu a dálkového
              ovládání.
            </p>
          </div>
          <ul className="pt-gate-grid">
            {gates.map((g) => (
              <li className="pt-gate" key={g.name}>
                <h4 className="pt-gate-name">{g.name}</h4>
                <p className="pt-gate-detail">{g.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-about" aria-labelledby="about-h">
        <div className="pt-about-media">
          <img
            src="/section-1.webp"
            alt="Zakázková kovovýroba v dílně PLOT-TEAM — příprava dílců oplocení"
            className="pt-about-img"
            width={1200}
            height={1400}
          />
        </div>

        <div className="pt-about-copy">
          <p className="pt-eyebrow">Služba na klíč</p>
          <h2 className="pt-h2" id="about-h">
            Jedna parta od návrhu po předání
          </h2>
          <p className="pt-about-text">
            PLOT-TEAM se od začátku specializuje na výrobu a montáž oplocení.
            Máme vlastní kovovýrobu i truhlárnu, takže se o celý plot postaráme
            sami — od prvního zaměření přes výrobu až po dokončení a předání.
            Nemusíte shánět nikoho dalšího.
          </p>

          <ol className="pt-steps">
            {steps.map((s) => (
              <li className="pt-step" key={s.n}>
                <span className="pt-step-n" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="pt-step-title">{s.title}</h3>
                  <p className="pt-step-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pt-trust">
            <p className="pt-trust-line">
              Naše oplocení najdete kolem rodinných domů i velkých průmyslových
              areálů, sportovišť a pastvin.
            </p>
            <a className="pt-btn pt-btn-primary" href="tel:+420722031710">
              Domluvit zaměření
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
