import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servis počítačů Liberec — opravy PC a notebooků do 48 hodin",
  description:
    "Opravy počítačů a notebooků v Liberci. Diagnostika zdarma do 24 hodin, výměna disku za SSD, čištění od prachu, záchrana dat. Většina oprav hotová do 48 hodin.",
  openGraph: {
    title: "Servis počítačů Liberec",
    description:
      "Diagnostika zdarma do 24 hodin. Většina oprav hotová do 48 hodin. Liberec, bez objednání.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "SSD",
    nazev: "Výměna disku za SSD",
    popis:
      "Pomalý start, věčné přesýpací hodiny? Starý plotnový disk vyměníme za SSD a přeneseme všechna vaše data. Počítač startuje do 15 sekund.",
    cena: "od 890 Kč + disk",
    doba: "do 24 h",
  },
  {
    kod: "CHL",
    nazev: "Čištění a nová pasta",
    popis:
      "Notebook hučí a pálí do klína? Rozebereme ho, vyčistíme chlazení od prachu a vyměníme teplovodivou pastu. Teploty klesnou i o 20 °C.",
    cena: "od 690 Kč",
    doba: "do 24 h",
  },
  {
    kod: "DSP",
    nazev: "Výměna displeje",
    popis:
      "Prasklý nebo problikávající displej notebooku vyměníme za nový originální panel. Před opravou řekneme přesnou cenu dílu.",
    cena: "od 990 Kč + panel",
    doba: "2–4 dny",
  },
  {
    kod: "DAT",
    nazev: "Záchrana dat",
    popis:
      "Disk nejde přečíst, fotky z dovolené jsou pryč? Data zkusíme obnovit u nás na dílně. Platíte jen v případě, že data skutečně dostaneme zpět.",
    cena: "od 1 490 Kč",
    doba: "3–7 dní",
  },
  {
    kod: "SYS",
    nazev: "Reinstalace a odvirování",
    popis:
      "Windows čisté od reklam a virů, aktualizované ovladače, přenesená data i oblíbené programy. Odejdete s počítačem jako nový.",
    cena: "od 790 Kč",
    doba: "do 48 h",
  },
  {
    kod: "UPG",
    nazev: "Rozšíření paměti a upgrade",
    popis:
      "Poradíme, jestli se upgrade vyplatí, nebo je čas na nový stroj. Paměť, disk i grafiku osadíme a otestujeme na zátěžových testech.",
    cena: "od 490 Kč + díly",
    doba: "na počkání",
  },
];

const kroky = [
  {
    krok: "Přinesete",
    detail:
      "Stavte se na dílně na Moskevské, bez objednání. Nebo napište, co počítač dělá — poradíme rovnou po telefonu.",
  },
  {
    krok: "Diagnostikujeme",
    detail:
      "Do 24 hodin víte, co přesně se stalo a kolik bude oprava stát. Diagnostika je zdarma — i když se pro opravu nerozhodnete.",
  },
  {
    krok: "Odsouhlasíte cenu",
    detail:
      "Nic neopravujeme bez vašeho souhlasu. Cena, kterou odsouhlasíte, je konečná — žádné položky navíc při vyzvednutí.",
  },
  {
    krok: "Vyzvednete",
    detail:
      "Většinu oprav máme hotovou do 48 hodin. Na práci dáváme 6 měsíců záruky, na nové díly 24 měsíců.",
  },
];

export default function Page() {
  return (
    <main className="sp">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="Servis počítačů Liberec">
            <span className="wordmark-block">SP</span>
            <span className="wordmark-text">
              servis počítačů<em>Liberec</em>
            </span>
          </span>
          <a className="hero-tel" href="tel:+420485100200">
            485 100 200
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow" aria-hidden="true">
            POST — Power-On Self-Test · dílna Moskevská 12, Liberec
          </p>
          <h1 className="hero-title">
            <span className="line line-1">Počítač&nbsp;nejede?</span>
            <span className="line line-2">
              Do <strong>24&nbsp;h</strong> víte proč.
            </span>
            <span className="line line-3">
              Do <strong>48&nbsp;h</strong> zase jede.
            </span>
          </h1>
          <p className="hero-sub">
            Opravujeme počítače a notebooky přímo v&nbsp;Liberci, na vlastní
            dílně. Diagnostiku uděláme zdarma a&nbsp;cenu řekneme dřív, než se
            čehokoli dotkneme.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420485100200">
              Zavolat na dílnu
            </a>
            <a className="btn btn-ghost" href="mailto:servis@sepoli.cz">
              Popsat závadu e-mailem
            </a>
          </div>
        </div>

        {/* Signature: diagnostický boot log */}
        <div className="bootlog" aria-hidden="true">
          <span className="bl-line">&gt; test paměti ......... OK</span>
          <span className="bl-line">&gt; test disku .......... OK</span>
          <span className="bl-line">&gt; test chlazení ....... OK</span>
          <span className="bl-line bl-ok">&gt; oprava dokončena — připraveno k vyzvednutí_</span>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u nás opravíte</h2>
          <p>
            Ceny jsou orientační za práci — přesnou částku znáte vždy před
            opravou. Diagnostika je zdarma i&nbsp;v&nbsp;případě, že opravu
            nechcete.
          </p>
        </div>
        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.kod}>
              <div className="karta-head">
                <span className="karta-kod">{s.kod}</span>
                <span className="karta-doba">{s.doba}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="karta-cena">{s.cena}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= JAK TO PROBÍHÁ / DŮVĚRA ================= */}
      <section className="prubeh" aria-labelledby="prubeh-h">
        <div className="section-head section-head-inv">
          <h2 id="prubeh-h">Jak oprava probíhá</h2>
          <p>
            Čtyři kroky, žádná překvapení. Opravujeme sami, na dílně na
            Moskevské — počítač nikam neposíláme.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="krok-text">
                <h3>{k.krok}</h3>
                <p>{k.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="zaruky" role="list">
          <div className="zaruka" role="listitem">
            <span className="zaruka-cislo">6 měs.</span>
            <span className="zaruka-popis">záruka na každou opravu</span>
          </div>
          <div className="zaruka" role="listitem">
            <span className="zaruka-cislo">0 Kč</span>
            <span className="zaruka-popis">za diagnostiku, vždy</span>
          </div>
          <div className="zaruka" role="listitem">
            <span className="zaruka-cislo">48 h</span>
            <span className="zaruka-popis">na většinu oprav</span>
          </div>
          <div className="zaruka" role="listitem">
            <span className="zaruka-cislo">Liberec</span>
            <span className="zaruka-popis">vlastní dílna, Moskevská 12</span>
          </div>
        </div>

        <figure className="reference">
          <blockquote>
            „Notebook, který se vypínal po deseti minutách, mi vrátili druhý
            den vyčištěný a&nbsp;tichý. Cenu řekli předem a&nbsp;na korunu
            seděla.“
          </blockquote>
          <figcaption>— paní Hrubá, Liberec-Ruprechtice</figcaption>
        </figure>
      </section>
    </main>
  );
}
