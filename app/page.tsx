import React from "react";

export default function Page() {
  const kroky = [
    {
      c: "01",
      nazev: "Test schopností — zdarma",
      text:
        "Vyplníte krátký osobnostní test u nás na Optátově. Do půl hodiny víte, kde jste silní a kde vás něco brzdí. Bez závazku, bez naléhání.",
    },
    {
      c: "02",
      nazev: "Kniha nebo brožura",
      text:
        "Podle výsledku vám doporučíme konkrétní titul. Chcete studovat sami tempem, které vám sedí? Odnesete si knihu domů nebo objednáte v e-shopu.",
    },
    {
      c: "03",
      nazev: "Kurz na míru",
      text:
        "Když chcete jít dál, sedneme si nad tématem — vztahy, komunikace, práce, výchova dětí. Kurz stavíme podle toho, co řešíte právě teď.",
    },
    {
      c: "04",
      nazev: "Přednáška",
      text:
        "Nejste si jistí, jestli je to vaše cesta? Přijďte na přednášku k jednomu tématu. Nezávazně si poslechnete, jak metoda funguje v praxi.",
    },
  ];

  const police = [
    {
      obor: "Osobní rozvoj",
      text:
        "Knihy o tom, jak zvládat vzestupy a pády, poznat vlastní hodnotu a držet se jí i tehdy, když vás okolí tlačí jinam.",
    },
    {
      obor: "Vztahy a rodina",
      text:
        "Tituly a kurzy o budování přátelství, partnerství a klidnější výchově dětí — praktické postupy, ne teorie.",
    },
    {
      obor: "Komunikace",
      text:
        "Co dělá rozhovor jasným a proč se lidé míjejí. Základní stavební kámen, na kterém stojí většina našich titulů.",
    },
    {
      obor: "Práce a podnikání",
      text:
        "Vzorce pro život a principy prosperity — jak vést jednoduché statistiky a podle nich rozhodovat o vlastní práci.",
    },
  ];

  const citace = [
    {
      titul: "Jak překonat vzestupy a pády v životě",
      text:
        "Teď vím, kdo je zdroj potíží a kdo antisociální osobnost — a hlavně, jak takové lidi zvládat a pomoct přátelům, když vidím, že je někdo utlačuje. Kurz, který otevře oči.",
      podpis: "A. R.",
    },
    {
      titul: "Osobní hodnoty a integrita",
      text:
        "Jako dítě jsem byla terčem posměchu za to, že jsem se chovala slušně. Nechávala jsem se ovlivňovat, i když jsem nesouhlasila. Teď znám svou hodnotu a řídím se tím, co si myslím, že je správné.",
      podpis: "P. P.",
    },
    {
      titul: "Scientologické principy prosperity",
      text:
        "Mám přesné nástroje, jak ovlivnit svůj plat i životní úroveň. Co mi přišlo složité, zvládám sama. Cítím se lehčí a chytřejší.",
      podpis: "M. P.",
    },
  ];

  return (
    <main className="dc">
      <header className="dc-top">
        <a className="dc-mark" href="#" aria-label="Dianetické centrum Brno — úvod">
          <span className="dc-mark-l">DC</span>
          <span className="dc-mark-w">
            Dianetické centrum
            <em>Brno · knihkupectví</em>
          </span>
        </a>
        <nav className="dc-nav" aria-label="Hlavní">
          <a href="#regal">Regál</a>
          <a href="#cesta">Jak začít</a>
          <a href="#hlasy">Ohlasy</a>
          <a className="dc-nav-cta" href="#cesta">Test zdarma</a>
        </nav>
      </header>

      <section className="dc-hero" aria-labelledby="dc-h1">
        <div className="dc-hero-copy">
          <p className="dc-eyebrow">Knihkupectví osobního rozvoje · Optátova 2, Brno</p>
          <h1 id="dc-h1">
            Řešení na to,
            <br />
            co vás <span className="dc-underline">tíží</span>,
            <br />
            je na téhle polici.
          </h1>
          <p className="dc-lede">
            Knihy, brožury a CD podle metod L. R. Hubbarda — vztahy, komunikace,
            práce, výchova. Nezačínáte nákupem: začínáte testem schopností, který
            je u nás zdarma.
          </p>
          <div className="dc-hero-actions">
            <a className="dc-btn" href="#cesta">
              Udělat test schopností
            </a>
            <a className="dc-btn-ghost" href="#regal">
              Prohlédnout regál
            </a>
          </div>
          <p className="dc-hero-meta">
            <span>tel +420 733 728 024</span>
            <span>email@dianetika-brno.cz</span>
          </p>
        </div>
        <figure className="dc-hero-img">
          <img
            src="/hero.webp"
            alt="Interiér knihkupectví Dianetického centra v Brně s regály knih o osobním rozvoji"
          />
          <figcaption>Optátova 175/2, Brno-Komín — otevřeno pro čtenáře i zvědavé</figcaption>
        </figure>
      </section>

      <section className="dc-shelf" id="regal" aria-labelledby="dc-regal-h">
        <div className="dc-sec-head">
          <span className="dc-sec-num">A</span>
          <h2 id="dc-regal-h">Náš regál podle toho, co řešíte</h2>
          <p>
            Neřadíme knihy podle abecedy autora — řadíme je podle životní oblasti.
            Přijďte s otázkou, odejdete s konkrétním titulem.
          </p>
        </div>
        <ul className="dc-shelf-grid">
          {police.map((p, i) => (
            <li className="dc-book" key={p.obor}>
              <span className="dc-book-sig">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.obor}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <div className="dc-shelf-note">
          <img
            src="/section-2.webp"
            alt="Vybrané tituly a materiály z knihkupectví Dianetického centra Brno"
          />
          <div>
            <p className="dc-eyebrow">Formáty</p>
            <h3>Knihy · brožurky · CD a DVD</h3>
            <p>
              Studujete raději očima, nebo posloucháte cestou do práce? Většinu
              témat máme ve víc formátech. Co nemáme skladem, doobjednáme —
              ozveme se, jakmile dorazí.
            </p>
            <a className="dc-link" href="#cesta">
              Nechte si poradit titul →
            </a>
          </div>
        </div>
      </section>

      <section className="dc-path" id="cesta" aria-labelledby="dc-cesta-h">
        <div className="dc-sec-head dc-sec-head--dark">
          <span className="dc-sec-num">B</span>
          <h2 id="dc-cesta-h">Čtyři kroky, žádný nátlak</h2>
          <p>
            Kterou cestu si vyberete, je čistě na vás. Můžete skončit u jedné
            knihy — nebo pokračovat dál. Vždycky víte, co bude následovat.
          </p>
        </div>
        <ol className="dc-steps">
          {kroky.map((k) => (
            <li key={k.c}>
              <span className="dc-step-num">{k.c}</span>
              <div>
                <h3>{k.nazev}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="dc-voices" id="hlasy">
          <p className="dc-eyebrow dc-eyebrow--light">Ohlasy čtenářů kurzů</p>
          <div className="dc-voice-grid">
            {citace.map((c) => (
              <blockquote key={c.podpis} className="dc-voice">
                <p className="dc-voice-title">{c.titul}</p>
                <p className="dc-voice-text">{c.text}</p>
                <cite>— {c.podpis}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
