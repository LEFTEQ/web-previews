import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "prof. JUDr. Jaromír Tauchen, Ph.D., LL.M. — soudní překladatel němčiny, Brno",
  description:
    "Soudní překlady z němčiny a do němčiny s ověřovací doložkou. Právní texty, smlouvy, rozsudky a listiny pro úřady i soudy. Brno, osobní jednání i online.",
};

const sluzby = [
  {
    idx: "§ 1",
    nazev: "Ověřené (soudní) překlady",
    text: "Překlad opatřený doložkou a otiskem kulatého razítka soudního tlumočníka. Pro matriky, notáře, soudy, katastr i cizineckou policii. Svázáno šňůrou, přijímáno úřady bez výhrad.",
    priklady: ["rodné a oddací listy", "výpisy z rejstříku trestů", "rozsudky a usnesení", "diplomy a vysvědčení"],
  },
  {
    idx: "§ 2",
    nazev: "Právní a odborné překlady",
    text: "Smlouvy, obchodní podmínky, podání a odborné texty, kde záleží na přesném významu každého ustanovení. Terminologie sedí v obou jazycích i v obou právních řádech.",
    priklady: ["kupní a nájemní smlouvy", "společenské smlouvy", "GDPR a compliance", "znalecké posudky"],
  },
  {
    idx: "§ 3",
    nazev: "Tlumočení u jednání",
    text: "Doprovod k notáři, na úřad nebo k soudu, kde je přítomnost tlumočníka podmínkou. Klidně, srozumitelně a s vědomím, co která věta právně znamená.",
    priklady: ["podpisy u notáře", "svatby s cizincem", "jednání na úřadech", "soudní stání"],
  },
];

const zaruky = [
  {
    stitek: "Jmenování",
    hodnota: "soudní překladatel němčiny",
    popis: "Jmenován podle zákona o soudních tlumočnících a soudních překladatelích, zapsán v seznamu vedeném Ministerstvem spravedlnosti.",
  },
  {
    stitek: "Odbornost",
    hodnota: "prof. JUDr., Ph.D., LL.M.",
    popis: "Právník s akademickou praxí v dějinách práva a německé právní terminologii. Rozumím tomu, co překládám, ne jen jak to zní.",
  },
  {
    stitek: "Jazyk",
    hodnota: "čeština ⇄ němčina",
    popis: "Oba směry, včetně rakouské a švýcarské němčiny. Termíny, které v jednom právním řádu neexistují, vysvětlím poznámkou překladatele.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="mark" href="#top" aria-label="prof. JUDr. Jaromír Tauchen — úvod">
          <span className="mark-razitko" aria-hidden="true">§</span>
          <span className="mark-txt">
            <span className="mark-name">Tauchen</span>
            <span className="mark-sub">soudní překlady · němčina</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Sekce">
          <a href="#sluzby">Co překládám</a>
          <a href="#zaruky">Proč já</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Brno · čeština ⇄ němčina
            </p>
            <h1 className="hero-h1">
              Překlad, který <em>úřad</em> přijme
              <span className="hero-h1-b">na první podání.</span>
            </h1>
            <p className="hero-lead">
              Ověřené překlady právních listin z němčiny a do němčiny. S kulatým
              razítkem soudního překladatele, se svázanou doložkou a s jistotou, že
              každé ustanovení znamená v obou jazycích totéž.
            </p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#sluzby">Co potřebuji přeložit</a>
              <a className="btn btn-line" href="#zaruky">Kdo to překládá</a>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Razítko</dt>
                <dd>kulaté, se státním znakem</dd>
              </div>
              <div>
                <dt>Doložka</dt>
                <dd>svázaná šňůrou s originálem</dd>
              </div>
              <div>
                <dt>Přijímají</dt>
                <dd>soudy · notáři · matriky</dd>
              </div>
            </dl>
          </div>
          <figure className="hero-fig">
            <img
              src="/hero.webp"
              alt="Soudní překladatel u psacího stolu s razítkem a svázanou listinou s ověřovací doložkou"
              className="hero-img"
              width={880}
              height={1040}
            />
            <figcaption className="hero-stamp" aria-hidden="true">
              <span className="hero-stamp-ring">
                <span className="hero-stamp-inner">OVĚŘENO · TLUMOČNÍK · BRNO</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sec sec-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="sec-kicker">Nabídka</p>
          <h2 className="sec-h" id="sluzby-h">Tři věci, kvůli kterým za mnou lidé chodí</h2>
          <p className="sec-intro">
            Od jednoho rodného listu po celý spis. Vždycky vám dopředu řeknu,
            v jaké formě to úřad potřebuje a do kdy to bude hotové.
          </p>
        </div>

        <ol className="sluzby">
          {sluzby.map((s) => (
            <li className="karta" key={s.idx}>
              <span className="karta-idx" aria-hidden="true">{s.idx}</span>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-text">{s.text}</p>
              <ul className="karta-pripad">
                {s.priklady.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="sec-fig">
          <img
            src="/section-1.webp"
            alt="Detail ověřovací doložky se šňůrou a otiskem kulatého razítka na přeloženém dokumentu"
            className="sec-img"
            width={1200}
            height={720}
          />
          <figcaption>
            Takhle vypadá hotový ověřený překlad — originál a překlad svázané k sobě,
            doložka, razítko. Nic z toho úřad nesmí chybět.
          </figcaption>
        </figure>
      </section>

      <section className="sec sec-zaruky" id="zaruky" aria-labelledby="zaruky-h">
        <div className="zaruky-grid">
          <div className="zaruky-copy">
            <p className="sec-kicker">O mně</p>
            <h2 className="sec-h" id="zaruky-h">
              Právník, který překládá právo — ne slovník, který hádá
            </h2>
            <p className="sec-intro">
              Německá právní terminologie je moje profese i akademická specializace.
              Když v překladu narazíte na pojem, který v českém právu nemá přesný
              protějšek, nedostanete kostrbatý opis — dostanete přesný ekvivalent
              a poznámku, proč zrovna ten.
            </p>
            <ul className="zaruky-list">
              {zaruky.map((z) => (
                <li key={z.stitek}>
                  <span className="zaruky-stitek">{z.stitek}</span>
                  <span className="zaruky-hodnota">{z.hodnota}</span>
                  <span className="zaruky-popis">{z.popis}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="zaruky-fig">
            <img
              src="/section-2.webp"
              alt="Portrét soudního překladatele a tlumočníka v pracovně mezi právními knihami"
              className="sec-img"
              width={760}
              height={900}
            />
            <blockquote className="zaruky-quote">
              <p>„Termín stíhal, matrika překlad přijala bez jediné poznámky. Přesně to jsem potřeboval.“</p>
              <cite>— klient, doklady pro sňatek v Rakousku</cite>
            </blockquote>
          </figure>
        </div>
      </section>
    </main>
  );
}
