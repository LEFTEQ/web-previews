const sluzby = [
  {
    tag: "Čistíme",
    nazev: "Koberce a podlahy",
    popis:
      "Hloubková extrakce až k podkladu koberce. Vytáhneme roztočový prach, skvrny od kávy i to, co běžný vysavač nikdy neuvidí. Koberec schne do 3 hodin.",
    body: ["Kusové i celoplošné koberce", "Zátěžové koberce v kancelářích", "Schodiště a chodby"],
  },
  {
    tag: "Čistíme",
    nazev: "Sedačky a čalounění",
    popis:
      "Tepování sedaček, křesel, matrací a čalouněných čel postelí. Materiál nejdřív otestujeme, pak čistíme — látka drží barvu i tvar.",
    body: ["Sedací soupravy a rozkládací pohovky", "Matrace včetně dezinfekce", "Kancelářské židle a autosedačky"],
  },
  {
    tag: "Uklízíme",
    nazev: "Domácnosti a firmy",
    popis:
      "Generální, pravidelný i jednorázový úklid. Přebíráme byty po nájemnících, myjeme okna, dezinfikujeme koupelny. Přijedeme s vlastní technikou.",
    body: ["Generální úklid po rekonstrukci", "Úklid po nájemnících", "Celkové mytí oken"],
  },
  {
    tag: "Půjčujeme",
    nazev: "Stroje na víkend",
    popis:
      "Chcete si vyčistit sami? Půjčíme vám profesionální techniku a ukážeme, jak s ní pracovat. Dovezeme a zase odvezeme.",
    body: ["Tepovač na sedačky a koberce", "Jednokotoučový mycí stroj", "Parní čistič na podlahy i okna"],
  },
];

const recenze = [
  {
    text: "Rychlá domluva bez problémů. Sedačka vypadá jako nová. Opravdu pečlivá práce a maximální spokojenost.",
    autor: "Zdeňka Holubová",
    zdroj: "Google recenze",
  },
  {
    text: "Sedačku, kterou jsem už obrečela, že ji musím vyhodit, vyčistili a je jako nová. Celý byt po nájemnících umyli do lesku. Luxusní práce.",
    autor: "Vali Vali",
    zdroj: "Google recenze",
  },
  {
    text: "Vyčištění koberce a sedaček do detailu. Jde vidět, že je práce baví a naplňuje.",
    autor: "Apurivix",
    zdroj: "Google recenze",
  },
  {
    text: "Velmi ochotný přístup, rychlé jednání, skvělé ceny i v porovnání s jinými podniky v Ostravě.",
    autor: "Mgr. Denisa Hefnerová",
    zdroj: "Google recenze",
  },
];

const zaruky = [
  { cislo: "3 h", text: "koberec je suchý a můžete po něm chodit" },
  { cislo: "0 Kč", text: "za dopravu po Ostravě a okolí" },
  { cislo: "5,0 ★", text: "hodnocení na Google od skutečných zákazníků" },
  { cislo: "1 mil.", text: "pojištění odpovědnosti — váš majetek je krytý" },
];

export default function Page() {
  return (
    <main className="dh">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Detail House — čištění koberců Ostrava">
        <header className="hero-top">
          <div className="wordmark">
            <span className="wordmark-detail">Detail</span>
            <span className="wordmark-house">House</span>
          </div>
          <div className="hero-top-info">
            <span className="hero-top-mesto">Ostrava</span>
            <a className="hero-top-tel" href="tel:+420608469149">608 469 149</a>
          </div>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Čištění koberců, sedaček a úklid · po–ne 8–19</p>
          <h1 className="hero-titulek">
            <span className="hero-radek hero-radek-spina" data-radek="1">Váš koberec</span>
            <span className="hero-radek hero-radek-prechod" data-radek="2">si pamatuje víc,</span>
            <span className="hero-radek hero-radek-cisto" data-radek="3">než by měl.</span>
          </h1>

          {/* Signature: pruh čištění — stopa tepovače, která dělí špínu od čistoty */}
          <div className="pruh" aria-hidden="true">
            <div className="pruh-spina"></div>
            <div className="pruh-hubice">
              <span className="pruh-hubice-telo"></span>
            </div>
            <div className="pruh-cisto"></div>
          </div>

          <p className="hero-perex">
            Jedna jízda naším tepovačem a je vidět rozdíl. Hloubkově čistíme koberce,
            sedačky a matrace po celé Ostravě — schnutí do 3 hodin, doprava zdarma,
            žádné skryté poplatky.
          </p>

          <div className="hero-akce">
            <a className="tlacitko tlacitko-hlavni" href="tel:+420608469149">
              Zavolat: 608 469 149
            </a>
            <a className="tlacitko tlacitko-vedlejsi" href="mailto:detailhouse@email.cz">
              Poslat poptávku e-mailem
            </a>
          </div>
        </div>

        <div className="hero-pata" aria-hidden="true">
          <span>Partyzánské náměstí 1736/4, Ostrava</span>
          <span>Detail House s.r.o.</span>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <h2 id="sluzby-nadpis" className="sekce-titulek">
            Co pro vás <em>vydrhneme</em>
          </h2>
          <p className="sekce-perex">
            Přijedeme s nejvýkonnějšími stroji na trhu, materiál otestujeme a čistíme
            do hloubky vlákna. Kvalitu upřednostňujeme před kvantitou — proto bereme
            jen tolik zakázek, kolik zvládneme udělat pořádně.
          </p>
        </div>

        <div className="sluzby-mrizka">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <p className="karta-tag">{s.tag}</p>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
              <ul className="karta-seznam">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-hlava sekce-hlava-tmava">
          <h2 id="duvera-nadpis" className="sekce-titulek">
            Ostrava nás zná <em>po vláknech</em>
          </h2>
          <p className="sekce-perex">
            13 hodnocení na Google, průměr 5,0. Tady je pár z nich — slovo od slova,
            jak je zákazníci napsali.
          </p>
        </div>

        <ul className="zaruky" aria-label="Naše záruky">
          {zaruky.map((z) => (
            <li className="zaruka" key={z.cislo}>
              <span className="zaruka-cislo">{z.cislo}</span>
              <span className="zaruka-text">{z.text}</span>
            </li>
          ))}
        </ul>

        <div className="recenze-mrizka">
          {recenze.map((r) => (
            <blockquote className="recenze" key={r.autor}>
              <p className="recenze-text">„{r.text}“</p>
              <footer className="recenze-pata">
                <cite className="recenze-autor">{r.autor}</cite>
                <span className="recenze-zdroj">{r.zdroj}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
