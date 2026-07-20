import type { CSSProperties } from "react";

/* ---------- Signature emblem: crescent moon cradling a curled cat,
   drawn as one continuous fine-line stroke ---------- */
const EMBLEM_D =
  "M110 28 A92 92 0 1 0 110 212 A100 100 0 0 1 110 28 Z " +
  "M148 120 C156 104 146 90 128 92 L122 79 L116 92 L108 80 L103 94 " +
  "C87 100 84 124 100 134 C116 143 142 140 148 122";

function Emblem({
  className,
  draw = false,
  title,
}: {
  className?: string;
  draw?: boolean;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path
        className={draw ? "mc-emblem-path mc-emblem-draw" : "mc-emblem-path"}
        d={EMBLEM_D}
        pathLength={100}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Divider() {
  return (
    <div className="mc-divider" role="separator">
      <span className="mc-divider-line" />
      <Emblem className="mc-divider-mark" />
      <span className="mc-divider-line" />
    </div>
  );
}

const SERVICES = [
  {
    tag: "nejžádanější",
    name: "Pudrové obočí",
    desc:
      "Jemný pudrový nádech, který obočí zahustí a dá mu tvar. Žádná ostrá linka — vypadá jako lehce zvýrazněné vlastní obočí. Vydrží 1–3 roky.",
    price: "od 3 900 Kč",
    rot: "-2.4deg",
  },
  {
    tag: "oči",
    name: "Oční linky",
    desc:
      "Od decentní linky mezi řasy po výraznější tah. Oči působí bdělejší i úplně bez make-upu — ideální, když nosíš brýle nebo čočky.",
    price: "od 3 500 Kč",
    rot: "1.8deg",
  },
  {
    tag: "rty",
    name: "Permanentní rty",
    desc:
      "Dorovnáme barvu a kontury do přirozeného, zdravého odstínu. Rty vypadají plnější a svěží hned po ránu.",
    price: "od 4 500 Kč",
    rot: "-1.2deg",
  },
  {
    tag: "údržba",
    name: "Korekce & rozjasnění",
    desc:
      "Oživíme vybledlý starší make-up nebo doladíme tvar po zhojení. Pro klientky s prací od nás i odjinud.",
    price: "od 1 900 Kč",
    rot: "2.6deg",
  },
  {
    tag: "piercing",
    name: "Piercing",
    desc:
      "Sterilně, šperky z titanu, klidně i první náušničky. Poradíme s hojením a výběrem šperku.",
    price: "od 800 Kč",
    rot: "-1.9deg",
  },
  {
    tag: "dárek",
    name: "Dárkový poukaz",
    desc:
      "Poukaz na libovolnou službu v hodnotě podle vás. Vystavíme na počkání i v elektronické podobě.",
    price: "částka dle výběru",
    rot: "1.4deg",
  },
];

const TRUST = [
  {
    k: "Jehly na jedno použití",
    v: "Každou klientku otevíráme novou sterilní jehlu a hrot. Pracoviště desinfikujeme mezi klientkami.",
  },
  {
    k: "Tvar kreslíme předem",
    v: "Než se dotkneme kůže, obočí nebo linku si spolu nakreslíme a schválíme. Nic neděláme ve spěchu.",
  },
  {
    k: "Certifikace i kurzy",
    v: "Máme certifikaci pro permanentní make-up a vedeme rekvalifikační kurzy a workshopy pro budoucí kolegyně.",
  },
];

export default function Page() {
  return (
    <main className="mc">
      {/* ---------------- HERO ---------------- */}
      <header className="mc-hero">
        <div className="mc-hero-inner">
          <div className="mc-hero-art">
            <Emblem
              className="mc-hero-emblem"
              draw
              title="Znak studia Moon Cat: srpek měsíce s stočenou kočkou, kreslený jednou linkou"
            />
          </div>

          <div className="mc-hero-copy">
            <p className="mc-eyebrow">Permanentní make-up · České Budějovice</p>

            <p className="mc-wordmark" aria-label="Moon Cat">
              <span>Moon</span>
              <span>Cat</span>
            </p>
            <p className="mc-wordmark-sub">studio permanentního make-upu</p>

            <h1 className="mc-h1">
              Make-up, který ráno
              <br />
              <em>nemusíš</em> dělat.
            </h1>

            <p className="mc-lede">
              Pudrové obočí, jemné oční linky a přirozené rty — ručně, sterilně
              a s citem pro to, jak vypadáš doopravdy. Probudíš se a jsi hotová.
            </p>

            <div className="mc-cta-row">
              <a className="mc-btn mc-btn-primary" href="#objednat">
                Objednat konzultaci
              </a>
              <a className="mc-btn mc-btn-ghost" href="#prace">
                Prohlédnout práce
              </a>
            </div>
          </div>
        </div>
      </header>

      <Divider />

      {/* ---------------- SLUŽBY (flash-sheet) ---------------- */}
      <section className="mc-section" id="prace" aria-labelledby="sluzby-nadpis">
        <div className="mc-section-head">
          <p className="mc-eyebrow">Co u nás zvládneme</p>
          <h2 className="mc-h2" id="sluzby-nadpis">
            Nabídka
          </h2>
          <p className="mc-section-note">
            Jako listy z flash sheetu — každou práci si můžeš vzít zvlášť.
            Ceny jsou orientační, přesnou domluvíme na konzultaci.
          </p>
        </div>

        <ul className="mc-flashwall">
          {SERVICES.map((s, i) => (
            <li
              key={s.name}
              className="mc-cutout"
              style={{ "--rot": s.rot, "--i": i } as CSSProperties}
            >
              <span className="mc-tape mc-tape-a" aria-hidden="true" />
              <span className="mc-tape mc-tape-b" aria-hidden="true" />
              <Emblem className="mc-cutout-pin" />
              <p className="mc-cutout-tag">{s.tag}</p>
              <h3 className="mc-h3">{s.name}</h3>
              <p className="mc-cutout-desc">{s.desc}</p>
              <p className="mc-cutout-price">{s.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <Divider />

      {/* ---------------- DŮVĚRA / O NÁS ---------------- */}
      <section
        className="mc-section"
        id="objednat"
        aria-labelledby="duvera-nadpis"
      >
        <div className="mc-trust">
          <div className="mc-trust-copy">
            <p className="mc-eyebrow">Proč právě k nám</p>
            <h2 className="mc-h2" id="duvera-nadpis">
              Sterilně, certifikovaně,
              <br />
              bez spěchu.
            </h2>
            <p className="mc-lede">
              Náš tým dělá permanentní make-up jako řemeslo, ne jako běžící pás.
              Sejdeme se, probereme tvůj typ pleti i představu, nakreslíme tvar
              a teprve pak se pustíme do práce.
            </p>

            <dl className="mc-facts">
              {TRUST.map((t) => (
                <div className="mc-fact" key={t.k}>
                  <dt>{t.k}</dt>
                  <dd>{t.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="mc-card" aria-label="Kontakt a otevírací doba">
            <Emblem className="mc-card-mark" />
            <p className="mc-card-kicker">Přijď se objednat</p>
            <p className="mc-card-addr">
              Ukázková 123
              <br />
              České Budějovice
            </p>
            <dl className="mc-card-lines">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá 10:00–18:00</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420777111222">777 111 222</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@example.cz">info@example.cz</a>
                </dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a
                    href="https://instagram.com/moon.cat.tattoo"
                    rel="noreferrer"
                  >
                    @moon.cat.tattoo
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
