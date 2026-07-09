import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IZOMAT stavebniny — betonování v Olomouci",
  description:
    "Transportbeton, čerpání a betonáž základů, desek a stropů v Olomouci a okolí. Míchací centrum, doprava a skládání materiálu, odborné poradenství.",
};

const mixes = [
  {
    grade: "C 12/15",
    name: "Podkladní beton",
    use: "Podklady pod základy, vyrovnávací vrstvy, výplně",
    slump: "S2",
  },
  {
    grade: "C 16/20",
    name: "Základy a patky",
    use: "Základové pasy rodinných domů, patky plotů",
    slump: "S3",
  },
  {
    grade: "C 20/25",
    name: "Desky a podlahy",
    use: "Podkladní desky, garáže, průmyslové podlahy",
    slump: "S3",
  },
  {
    grade: "C 25/30",
    name: "Stropy a věnce",
    use: "Monolitické stropy, ztužující věnce, schodiště",
    slump: "S4",
  },
];

const steps = [
  {
    n: "01",
    title: "Poptávka a návrh receptury",
    text: "Řeknete nám, co betonujete a kdy. Doporučíme pevnostní třídu, konzistenci a množství — ať neobjednáváte zbytečně.",
  },
  {
    n: "02",
    title: "Namícháme v našem centru",
    text: "Čerstvý beton mícháme na míru v olomouckém míchacím centru, s doloženou recepturou a certifikátem.",
  },
  {
    n: "03",
    title: "Dovezeme a načerpáme",
    text: "Autodomíchávač přiveze beton přímo na stavbu. Kam ruční kolečko nedosáhne, pošleme čerpadlo.",
  },
];

export default function Page() {
  return (
    <main className="iz">
      <header className="iz-top">
        <a className="iz-brand" href="#" aria-label="IZOMAT stavebniny, úvod">
          <span className="iz-brand-mark" aria-hidden="true">
            <span className="iz-brand-slash" />
          </span>
          <span className="iz-brand-word">
            IZOMAT<span className="iz-brand-sub">stavebniny · beton</span>
          </span>
        </a>
        <div className="iz-top-right">
          <span className="iz-hours">Po–Pá 7–17 · So 7–11</span>
          <a className="iz-phone" href="tel:+420272690388">
            272 690 388
          </a>
        </div>
      </header>

      <section className="iz-hero" aria-labelledby="iz-hero-title">
        <div className="iz-hero-media">
          <img
            src="/hero.webp"
            alt="Autodomíchávač IZOMAT ukládá čerstvý beton do bednění základů na olomoucké stavbě"
            className="iz-hero-img"
            width={1600}
            height={1100}
          />
          <div className="iz-hero-scrim" aria-hidden="true" />
        </div>

        <div className="iz-hero-body">
          <p className="iz-eyebrow">Míchací centrum Olomouc · od základů po strop</p>
          <h1 id="iz-hero-title" className="iz-hero-title">
            Čerstvý beton,
            <br />
            <span className="iz-hero-accent">dokud drží ruka.</span>
          </h1>
          <p className="iz-hero-lede">
            Namícháme přesnou recepturu, přivezeme autodomíchávačem a načerpáme
            tam, kam se s kolečkem nedostanete. Bez čekání, bez tuhnutí cestou.
          </p>
          <div className="iz-hero-actions">
            <a className="iz-btn" href="tel:+420272690388">
              Zavolat a objednat beton
            </a>
            <a className="iz-btn iz-btn-ghost" href="#smesi">
              Vybrat pevnostní třídu
            </a>
          </div>

          <dl className="iz-hero-facts">
            <div>
              <dt>Konzistence</dt>
              <dd>S2 – S4</dd>
            </div>
            <div>
              <dt>Doprava</dt>
              <dd>Olomouc a okolí</dd>
            </div>
            <div>
              <dt>Čerpání</dt>
              <dd>Do výšky i dálky</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="iz-mixes" id="smesi" aria-labelledby="iz-mixes-title">
        <div className="iz-sec-head">
          <p className="iz-eyebrow iz-eyebrow-dark">Ceník podle třídy — ne podle dohadů</p>
          <h2 id="iz-mixes-title" className="iz-h2">
            Vyberte třídu betonu
            <br />
            podle toho, co lijete
          </h2>
          <p className="iz-sec-lede">
            Pevnostní třída říká, jakou zátěž beton unese. Čím vyšší číslo, tím
            odolnější. Nevíte, co potřebujete? Řekněte nám záměr — poradíme
            zdarma.
          </p>
        </div>

        <ul className="iz-mix-grid" role="list">
          {mixes.map((m) => (
            <li className="iz-mix" key={m.grade}>
              <span className="iz-mix-grade">{m.grade}</span>
              <h3 className="iz-mix-name">{m.name}</h3>
              <p className="iz-mix-use">{m.use}</p>
              <span className="iz-mix-slump">Konzistence {m.slump}</span>
            </li>
          ))}
        </ul>

        <div className="iz-mix-note">
          <img
            src="/section-1.webp"
            alt="Detail hlazeného povrchu čerstvě uložené betonové desky"
            className="iz-mix-img"
            width={900}
            height={640}
          />
          <div className="iz-mix-note-body">
            <h3 className="iz-h3">Přidáme, co stavba potřebuje</h3>
            <p>
              Vodotěsný beton do sklepů, plastifikátor do horka, provzdušnění
              proti mrazu, ocelová drátkovaná výztuž do podlah. Recepturu
              upravíme podle konstrukce i počasí v den betonáže.
            </p>
            <a className="iz-btn iz-btn-dark" href="tel:+420272690388">
              Zavolat o cenu
            </a>
          </div>
        </div>
      </section>

      <section className="iz-trust" aria-labelledby="iz-trust-title">
        <div className="iz-trust-media">
          <img
            src="/section-2.webp"
            alt="Betonářská parta IZOMAT při ukládání a hutnění betonu na stavbě v Olomouci"
            className="iz-trust-img"
            width={1000}
            height={720}
          />
        </div>
        <div className="iz-trust-body">
          <p className="iz-eyebrow">Jak to u nás probíhá</p>
          <h2 id="iz-trust-title" className="iz-h2 iz-h2-light">
            Od telefonu k hotové desce
          </h2>
          <ol className="iz-steps" role="list">
            {steps.map((s) => (
              <li className="iz-step" key={s.n}>
                <span className="iz-step-n" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="iz-step-title">{s.title}</h3>
                  <p className="iz-step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="iz-trust-quote">
            „Objednali jsme v pátek odpoledne, v sobotu ráno stál domíchávač u
            bednění. Deska pod garáž byla za dopoledne hotová.“
          </p>
          <p className="iz-trust-cite">— zákazník, Olomouc-Slavonín</p>
        </div>
      </section>
    </main>
  );
}
