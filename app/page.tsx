import type { CSSProperties } from "react";

type Specimen = {
  code: string;
  name: string;
  desc: string;
  price: string;
};

const specimens: Specimen[] = [
  {
    code: "11",
    name: "Vstupní vyšetření a plán péče",
    desc: "Zmapujeme dásně, zubní kámen i skrytý plak a obarvíme ho, aby byl vidět. Odejdete s plánem, kde přesně vás čeká zvýšená pozornost.",
    price: "1 200 Kč",
  },
  {
    code: "24",
    name: "Kompletní dentální hygiena",
    desc: "Ultrazvuk sundá kámen nad dásní i pod ní, ručními nástroji doleštíme místa, kam přístroj nedosáhne. Na závěr vyhlazení pastou.",
    price: "1 000 Kč",
  },
  {
    code: "36",
    name: "Air-flow pískování",
    desc: "Jemný prášek s vodou pod tlakem smyje pigment od kávy, čaje i cigaret. Zuby o odstín světlejší, bez bělicí chemie.",
    price: "600 Kč",
  },
  {
    code: "43",
    name: "Fluoridace citlivých krčků",
    desc: "Fluoridový lak utěsní obnažené krčky a zpevní sklovinu. Studená voda ani zmrzlina už zub nezaskočí.",
    price: "250 Kč",
  },
  {
    code: "21",
    name: "Domácí bělení na míru",
    desc: "Otiskneme vám individuální nosiče a namícháme gel podle citlivosti zubů. Bělíte doma, tempem, které vám vyhovuje.",
    price: "od 3 500 Kč",
  },
  {
    code: "46",
    name: "Nácvik čištění pro děti",
    desc: "Ukážeme dětem i rodičům, jak na kartáček a mezizubní kartáčky. Bez strašení, s obarvením plaku, aby bylo vidět, co se povedlo.",
    price: "500 Kč",
  },
];

const team = [
  {
    name: "MDDr. Jiří Květoň",
    role: "Zubní lékař",
    note: "Vede ordinaci na Senovážném náměstí a stará se o návaznost hygieny na další ošetření.",
  },
  {
    name: "MDDr. Tereza Škodová",
    role: "Zubní lékařka",
    note: "Věnuje se citlivým dásním a preventivní péči, se kterou má chrup vydržet zdravý celý život.",
  },
  {
    name: "MUDr. Anna Gregorová",
    role: "Zubní lékařka",
    note: "Bere si čas na děti i pacienty, kteří ke stomatologovi chodí neradi. Nikam nespěchá.",
  },
];

const upperArch = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
const lowerArch = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];
const used = new Set([11, 21, 24, 36, 43, 46]);

function Arch({ teeth }: { teeth: number[] }) {
  return (
    <div className="chart-row">
      {teeth.map((t) => (
        <span key={t} className={used.has(t) ? "tooth tooth--used" : "tooth"}>
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div className="page" id="top">
      <svg
        className="floss"
        viewBox="0 0 400 2400"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="floss-path"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          d="M200 -20 C200 180 60 260 60 460 C60 660 340 760 340 960 C340 1160 60 1260 60 1460 C60 1660 340 1760 340 1960 C340 2140 200 2240 200 2420"
        />
      </svg>

      <header className="site-head">
        <a className="brand" href="#top">
          <span className="brand-mark">
            ČSZ<span className="brand-dot" aria-hidden="true" />
          </span>
          <span className="brand-sub">dentální hygiena · Č. Budějovice</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#katalog">Katalog</a>
          <a href="#tym">Tým</a>
          <a href="#kontakt">Kontakt</a>
          <a className="nav-cta" href="tel:+420731497935">
            Objednat
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Dentální hygiena · České Budějovice</p>
              <h1 className="hero-title" id="hero-title">
                Čistý chrup,
                <br />
                <em>klidná hlava.</em>
              </h1>
              <p className="hero-lede">
                Ošetření zub po zubu — pomalu, ručně, bez spěchu. V ordinaci na
                Senovážném náměstí si na vás vyhradíme celou hodinu a odejdete
                s pocitem, že máte v puse uklizeno.
              </p>
              <div className="hero-actions">
                <a className="btn btn--solid" href="tel:+420731497935">
                  Objednat se — 731 497 935
                </a>
                <a className="btn btn--ghost" href="#katalog">
                  Prohlédnout katalog
                </a>
              </div>
            </div>

            <aside className="chart" aria-label="Zubní kříž podle značení FDI">
              <p className="chart-title">Značení FDI</p>
              <div className="chart-arches">
                <Arch teeth={upperArch} />
                <div className="chart-mid" aria-hidden="true" />
                <Arch teeth={lowerArch} />
              </div>
              <p className="chart-note">
                Každý zub má v mezinárodním kříži svůj dvojmístný kód. Podle něj
                jsou v katalogu níže očíslovaná i naše ošetření.
              </p>
            </aside>
          </div>
        </section>

        <section className="section" id="katalog" aria-labelledby="katalog-title">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Ceník / Katalog ošetření</p>
              <h2 className="sec-title" id="katalog-title">
                Šest vzorků péče o vaše zuby
              </h2>
              <p className="sec-lede">
                Ceny platí za jedno ošetření. Vždy vám dopředu řekneme, co
                přesně vás čeká i kolik to bude stát — žádná překvapení na židli.
              </p>
            </div>

            <ol className="catalog">
              {specimens.map((s) => (
                <li className="spec" key={s.code}>
                  <div className="spec-top">
                    <span className="spec-code">{s.code}</span>
                    <span className="spec-tag">vzorek</span>
                  </div>
                  <h3 className="spec-name">{s.name}</h3>
                  <p className="spec-desc">{s.desc}</p>
                  <p className="spec-price">{s.price}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section band" id="tym" aria-labelledby="tym-title">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">Náš tým</p>
              <h2 className="sec-title" id="tym-title">
                Kdo se o vás postará
              </h2>
              <p className="sec-lede">
                Malá praxe, kde vás známe jménem. Hygiena i navazující stomatologie
                pod jednou střechou, takže se nálezy nikde neztratí.
              </p>
            </div>

            <div className="team">
              {team.map((m, i) => (
                <article className="member" key={m.name}>
                  <span className="member-idx">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="member-name">{m.name}</h3>
                  <p className="member-role">{m.role}</p>
                  <p className="member-note">{m.note}</p>
                </article>
              ))}
            </div>

            <div className="contact" id="kontakt">
              <div className="contact-col">
                <p className="contact-label">Kde nás najdete</p>
                <p className="contact-strong">Senovážné nám. 2</p>
                <p className="contact-line">370 05 České Budějovice</p>
                <p className="contact-line">Objednání telefonicky nebo e-mailem</p>
              </div>
              <div className="contact-col">
                <p className="contact-label">Spojení</p>
                <p className="contact-strong">
                  <a href="tel:+420731497935">+420 731 497 935</a>
                </p>
                <p className="contact-line">
                  <a href="mailto:ordinace-csz@seznam.cz">ordinace-csz@seznam.cz</a>
                </p>
                <p className="contact-line">ČSZ s.r.o., IČ 067 10 379</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
