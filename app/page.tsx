// Mgr. Hana Wernerová, advokát — Brno
// Koncept: „Paragraf jako člověk, ne jako hrozba.“
// Signature prvek: monumentální § v heru, vysázený jako typografická socha,
// doplněný svislou „spisovou linkou“, která prochází celou stránkou
// (odkaz na hřbet soudního spisu a řazení písemností).

const sluzby = [
  {
    oblast: "Rodinné právo",
    spis: "C — civilní",
    popis:
      "Rozvod, péče o děti, výživné, vypořádání společného jmění. Situace, kde jde o víc než o paragrafy — o vztahy, které budou pokračovat i po rozsudku.",
    priklady: ["rozvod manželství", "úprava péče o dítě", "výživné"],
  },
  {
    oblast: "Občanské právo",
    spis: "C — civilní",
    popis:
      "Smlouvy, nemovitosti, dluhy a jejich vymáhání, dědictví. Pomohu vám smlouvu připravit i zkontrolovat dřív, než ji podepíšete.",
    priklady: ["kupní a darovací smlouvy", "vymáhání pohledávek", "dědické řízení"],
  },
  {
    oblast: "Trestní právo",
    spis: "T — trestní",
    popis:
      "Obhajoba ve všech fázích trestního řízení i zastupování poškozených. Vím z justiční praxe, jak řízení probíhá zevnitř — a co v něm rozhoduje.",
    priklady: ["obhajoba obviněného", "zastoupení poškozeného", "přestupková řízení"],
  },
  {
    oblast: "Správní právo",
    spis: "A — správní",
    popis:
      "Jednání s úřady, přestupkové komise, správní žaloby. Úřední jazyk přeložím do srozumitelné řeči a povedu věc za vás.",
    priklady: ["řízení před úřady", "správní žaloby", "stavební řízení"],
  },
];

const zasady = [
  {
    nazev: "Nejdřív vysvětlím, pak jednám",
    text: "Než cokoli podám k soudu, rozumíte tomu, co se bude dít, jak dlouho to potrvá a co vás to bude stát. Žádné kroky bez vašeho vědomí.",
  },
  {
    nazev: "Zkušenost z justice",
    text: "Před advokacií jsem pracovala v justici. Znám soudní síň z obou stran — vím, jak soudy uvažují a jak podání připravit, aby obstálo.",
  },
  {
    nazev: "Právník i pedagog",
    text: "Kromě právního vzdělání mám i vzdělání pedagogické a přednáším právo. Umím složité věci říct tak, aby jim rozuměl každý — bez latinských frází.",
  },
  {
    nazev: "Cena dohodnutá předem",
    text: "Odměnu si domluvíme na první schůzce podle rozsahu věci — hodinově, nebo pevnou částkou za celý úkon. Bez skrytých položek.",
  },
];

export default function Page() {
  return (
    <main className="ak">
      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="Advokátní kancelář Wernerová, Brno">
            <span className="wordmark-sign">AK</span>
            <span className="wordmark-name">
              Wernerová<span className="wordmark-city">· Brno</span>
            </span>
          </div>

          <div className="hero-grid">
            <div className="hero-mark" aria-hidden="true">
              <span className="hero-par">§</span>
              <span className="hero-par-shadow">§</span>
            </div>

            <div className="hero-copy">
              <p className="hero-eyebrow">Advokátní kancelář · Baarovo nábřeží, Brno</p>
              <h1 className="hero-title">
                Soud nemusí být to<br />
                nejhorší období<br />
                <em>vašeho života.</em>
              </h1>
              <p className="hero-lead">
                Jsem Hana Wernerová, advokátka s praxí v justici. Provedu vás soudním,
                přestupkovým i správním řízením — srozumitelně, citlivě a tak, abyste
                v žádné chvíli nebyli sami.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="tel:+420777255707">
                  Zavolat 777 255 707
                </a>
                <a className="btn btn-line" href="mailto:ak.wernerova@seznam.cz">
                  Napsat e‑mail
                </a>
              </div>
              <p className="hero-note">
                První konzultace do 48 hodin od objednání · osobně v Brně nebo telefonicky
              </p>
            </div>
          </div>
        </div>
        <div className="hero-rule" aria-hidden="true">
          <span>zapsána v seznamu advokátů České advokátní komory</span>
        </div>
      </header>

      {/* ── SLUŽBY ───────────────────────────────────────── */}
      <section className="sekce sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-inner">
          <div className="sekce-head">
            <p className="sekce-eyebrow">S čím za mnou lidé chodí</p>
            <h2 id="sluzby-h" className="sekce-title">
              Čtyři oblasti práva,<br />jedna kancelář.
            </h2>
            <p className="sekce-lead">
              Každý spis u soudu nese značku podle druhu řízení. Podle stejné logiky
              řadím i svou praxi — abyste hned věděli, kam vaše věc patří.
            </p>
          </div>

          <div className="spisy">
            {sluzby.map((s) => (
              <article className="spis" key={s.oblast}>
                <p className="spis-znacka">{s.spis}</p>
                <h3 className="spis-nazev">{s.oblast}</h3>
                <p className="spis-popis">{s.popis}</p>
                <ul className="spis-priklady">
                  {s.priklady.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── O MNĚ / DŮVĚRA ───────────────────────────────── */}
      <section className="sekce duvera" aria-labelledby="duvera-h">
        <div className="sekce-inner">
          <div className="duvera-grid">
            <div className="duvera-intro">
              <p className="sekce-eyebrow sekce-eyebrow--light">Proč zrovna já</p>
              <h2 id="duvera-h" className="sekce-title sekce-title--light">
                Vím, jaké to je stát před soudem. Proto u toho stojím s vámi.
              </h2>
              <blockquote className="duvera-citat">
                <p>
                  „Jednání se soudem nebo úřadem přináší lidem stres a obavy. Mou prací
                  je nejen věc právně vyřešit, ale ulehčit klientům celé napjaté
                  životní období.“
                </p>
                <footer>— Mgr. Hana Wernerová, advokátka</footer>
              </blockquote>
              <dl className="duvera-fakta">
                <div>
                  <dt>Sídlo kanceláře</dt>
                  <dd>Baarovo nábřeží 534/18, Brno‑Husovice</dd>
                </div>
                <div>
                  <dt>Zázemí</dt>
                  <dd>praxe v justici, vzdělání právní i pedagogické</dd>
                </div>
                <div>
                  <dt>Vedle praxe</dt>
                  <dd>přednášková činnost v oblasti práva</dd>
                </div>
              </dl>
            </div>

            <ol className="zasady">
              {zasady.map((z, i) => (
                <li className="zasada" key={z.nazev}>
                  <span className="zasada-par" aria-hidden="true">
                    § {i + 1}
                  </span>
                  <h3 className="zasada-nazev">{z.nazev}</h3>
                  <p className="zasada-text">{z.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
