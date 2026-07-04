import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martina Hauerová — soudní překlady z italštiny | Brno",
  description:
    "Soudní překladatelka italštiny v Brně od roku 1996. Ověřené překlady akceptované Velvyslanectvím Itálie v Praze. Rodné listy, diplomy, smlouvy, plné moci.",
  openGraph: {
    title: "Martina Hauerová — soudní překlady z italštiny",
    description:
      "Ověřené překlady z italštiny se soudní doložkou. Brno, Cihlářská 14. Registrace u Velvyslanectví Itálie v Praze.",
    type: "website",
    locale: "cs_CZ",
  },
};

const documents = [
  {
    it: "Atto di nascita",
    cs: "Rodný list",
    note: "pro matriku, sňatek nebo trvalý pobyt",
  },
  {
    it: "Diploma di laurea",
    cs: "Vysokoškolský diplom",
    note: "pro uznání studia a nostrifikaci",
  },
  {
    it: "Contratto di lavoro",
    cs: "Pracovní smlouva",
    note: "pro zaměstnavatele i úřad práce",
  },
  {
    it: "Procura",
    cs: "Plná moc",
    note: "pro jednání u italských notářů a úřadů",
  },
  {
    it: "Certificato penale",
    cs: "Výpis z rejstříku trestů",
    note: "pro pracovní povolení a víza",
  },
  {
    it: "Sentenza",
    cs: "Rozsudek soudu",
    note: "pro rozvod, dědictví nebo exekuci",
  },
];

const steps = [
  {
    k: "Pošlete dokument",
    v: "Sken nebo fotku e‑mailem, nebo mi originál přinesete na Cihlářskou 14. Řeknu vám přesnou cenu a termín, než začnu překládat.",
  },
  {
    k: "Přeložím a ověřím",
    v: "Překlad svážu s ověřenou kopií originálu a opatřím kulatým razítkem soudního tlumočníka a doložkou. Tím vzniká úřední listina.",
  },
  {
    k: "Vyzvednete nebo pošlu",
    v: "Hotový svazek si vyzvednete v Brně, nebo vám ho pošlu doporučeně. Doklady mnou přeložené Velvyslanectví Itálie akceptuje.",
  },
];

export default function Page() {
  return (
    <main className="mh">
      <header className="mh-nav">
        <a className="mh-mark" href="#" aria-label="Martina Hauerová, soudní překladatelka italštiny">
          <span className="mh-mark-name">Hauerová</span>
          <span className="mh-mark-sub">traduttrice giurata · IT → CS</span>
        </a>
        <nav className="mh-nav-links" aria-label="Hlavní">
          <a href="#dokumenty">Co překládám</a>
          <a href="#duvera">O mně</a>
          <a className="mh-nav-tel" href="tel:+420723389825">723 389 825</a>
        </nav>
      </header>

      <section className="mh-hero">
        <div className="mh-hero-copy">
          <p className="mh-eyebrow">Soudní překlady z italštiny · Brno · od roku 1996</p>
          <h1 className="mh-hero-title">
            <span className="mh-hero-line mh-hero-it">Traduzione</span>
            <span className="mh-hero-line mh-hero-giurata">giurata.</span>
            <span className="mh-hero-line mh-hero-cs">Překlad s razítkem, který úřad přijme.</span>
          </h1>
          <p className="mh-lede">
            Jsem soudní překladatelka a tlumočnice italštiny. Rodný list, diplom nebo
            smlouvu přeložím a svážu s razítkem a doložkou tak, že z toho vznikne
            platná úřední listina — v Česku i v Itálii.
          </p>
          <div className="mh-hero-actions">
            <a className="mh-btn" href="mailto:M.Hauerova@seznam.cz?subject=Poptávka%20soudního%20překladu%20z%20italštiny">
              Poslat dokument k ocenění
            </a>
            <a className="mh-btn mh-btn-ghost" href="tel:+420723389825">
              Zavolat: 723 389 825
            </a>
          </div>
          <p className="mh-hero-stamp">
            Registrovaná u Velvyslanectví Itálie v Praze — proto moje překlady
            velvyslanectví akceptuje.
          </p>
        </div>
        <figure className="mh-hero-fig">
          <img
            src="/hero.webp"
            alt="Ověřený překlad z italštiny svázaný s originálem a opatřený kulatým razítkem soudního tlumočníka"
            className="mh-hero-img"
          />
          <figcaption className="mh-hero-cap">Kulaté razítko a doložka — bez nich to není soudní překlad.</figcaption>
        </figure>
      </section>

      <section className="mh-section" id="dokumenty" aria-labelledby="dok-h">
        <div className="mh-section-head">
          <p className="mh-eyebrow">Che cosa traduco</p>
          <h2 id="dok-h" className="mh-h2">Nejčastěji ke mně nosíte tyhle papíry</h2>
          <p className="mh-section-sub">
            Každý z nich má v italštině svůj přesný název a svoji úřední logiku. Vím,
            jak má výsledek vypadat, aby ho matrika, univerzita nebo italský notář
            přijali napoprvé.
          </p>
        </div>
        <ul className="mh-docs">
          {documents.map((d) => (
            <li className="mh-doc" key={d.it}>
              <span className="mh-doc-it">{d.it}</span>
              <span className="mh-doc-cs">{d.cs}</span>
              <span className="mh-doc-note">{d.note}</span>
            </li>
          ))}
        </ul>
        <div className="mh-also">
          <img
            src="/section-1.webp"
            alt="Rozpracovaný soudní překlad italského dokumentu s poznámkami a razítkem"
            className="mh-also-img"
          />
          <div className="mh-also-copy">
            <h3 className="mh-h3">A ještě tlumočím</h3>
            <p>
              Když jde o svatbu na italském konzulátě, jednání u notáře nebo koupi
              nemovitosti v Itálii, přijdu s vámi a tlumočím na místě. Předem si
              projdeme, o čem se bude mluvit, ať vás nic nepřekvapí.
            </p>
            <p className="mh-also-line">
              Nevíte, jestli váš dokument potřebuje ještě apostilu? Napište mi ho
              nafotit — poradím, než něco zaplatíte zbytečně.
            </p>
          </div>
        </div>
      </section>

      <section className="mh-section mh-trust" id="duvera" aria-labelledby="tru-h">
        <div className="mh-trust-grid">
          <div className="mh-trust-copy">
            <p className="mh-eyebrow">Chi sono</p>
            <h2 id="tru-h" className="mh-h2">Martina Hauerová — od roku 1996 stejné razítko</h2>
            <p>
              Soudní překlady a tlumočení z italštiny dělám bezmála třicet let. Za tu
              dobu prošly mým stolem stovky rodných listů, diplomů i smluv — a naučila
              jsem se, na čem konkrétní úřad trvá a kde se návrhy typicky vracejí.
            </p>
            <p>
              Pracuji sama, takže mluvíte přímo s tím, kdo váš dokument překládá.
              Cenu i termín řeknu dopředu a držím se jich.
            </p>
            <dl className="mh-facts">
              <div>
                <dt>Jak dlouho</dt>
                <dd>soudní překladatelka od roku 1996</dd>
              </div>
              <div>
                <dt>Uznání</dt>
                <dd>registrace u Velvyslanectví Itálie v Praze</dd>
              </div>
              <div>
                <dt>Kde</dt>
                <dd>Cihlářská 14, Brno</dd>
              </div>
            </dl>
          </div>
          <figure className="mh-trust-fig">
            <img
              src="/section-2.webp"
              alt="Pracovní stůl soudní překladatelky italštiny v Brně s dokumenty a razítkem"
              className="mh-trust-img"
            />
          </figure>
        </div>

        <ol className="mh-steps" aria-label="Jak to u mě probíhá">
          {steps.map((s, i) => (
            <li className="mh-step" key={s.k}>
              <span className="mh-step-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mh-step-k">{s.k}</h3>
              <p className="mh-step-v">{s.v}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
