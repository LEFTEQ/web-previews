export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Zaměření a rozpočet",
      d: "Přijedeme k vám do bytu, koupelnu si osobně proměříme a do pár dnů dostanete rozpočet na položky — bez skrytých příplatků. Poptávku zpracujeme zdarma.",
    },
    {
      c: "02",
      t: "Bourání a rozvody",
      d: "Vybouráme staré jádro nebo obklady, přeženeme vodu a elektřinu tam, kam je potřeba, a připravíme prostor pro novou dispozici. Suť odvezeme my.",
    },
    {
      c: "03",
      t: "Obklady, dlažba, montáž",
      d: "Položíme obklady a dlažbu, osadíme vaničku, vanu i sanitu, zapojíme baterie a osvětlení. Práci předáme uklizenou a hotovou.",
    },
  ];

  const sluzby = [
    {
      n: "Rekonstrukce koupelny",
      p: "Ze staré koupelny uděláme místo, kam se budete těšit. Od nových obkladů přes sprchový kout bez vaničky až po podlahové topení a dvojité umyvadlo.",
    },
    {
      n: "Rekonstrukce bytového jádra",
      p: "Vyměníme umakartové jádro za zděné nebo sádrokartonové. Získáte pevnou koupelnu i WC, moderní rozvody a mnohem víc místa než dřív.",
    },
    {
      n: "Celková rekonstrukce bytu",
      p: "Zvládneme celý byt najednou — třeba z 1+1 uděláme 2+1. Jeden tým, jeden termín, jedna zodpovědnost od bourání po úklid.",
    },
    {
      n: "Kuchyně na míru",
      p: "Navrhneme a osadíme kuchyň přesně do vašeho prostoru, včetně ostrůvku, spotřebičů a napojení na vodu i elektřinu.",
    },
  ];

  const reference = [
    {
      q: "S průběhem rekonstrukce i výsledkem jsem velmi spokojený. Termíny i cena byly dodrženy a ani dva roky po realizaci se neobjevily žádné závady.",
      a: "Klient · NejŘemeslníci",
    },
    {
      q: "Všichni řemeslníci byli solidní, precizní a vždy dodrželi slovo. Paní Erbesová je vynikající organizátorka. Díky za vše, vřele doporučuji.",
      a: "p. Fráňová",
    },
    {
      q: "Výborná a spolehlivá parta, velmi dobrá komunikace. Realizace úspěšná, dohodnutý termín i rozpočet splněny.",
      a: "Klient · NejŘemeslníci",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="REMI ART ERBES — rekonstrukce koupelen Brno">
          <span className="brand-mark" aria-hidden="true">
            <span className="tile tile-a" />
            <span className="tile tile-b" />
            <span className="tile tile-c" />
            <span className="tile tile-d" />
          </span>
          <span className="brand-words">
            <span className="brand-name">ERBES</span>
            <span className="brand-sub">koupelny · Brno</span>
          </span>
        </a>
        <a className="topcall" href="tel:+420777141340">777 141 340</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Rekonstrukce koupelen a bytových jader · Brno-Maloměřice</p>
          <h1 className="hero-title">
            Vybouráme staré jádro.
            <span className="hl">Odejdeme až po úklidu.</span>
          </h1>
          <p className="hero-lead">
            Přes dvacet let obkládáme brněnské koupelny — od úzkého panelákového
            jádra po celý byt. Jeden tým, jasný rozpočet, dodržený termín.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777141340">Zavolat 777 141 340</a>
            <a className="btn btn-ghost" href="#sluzby">Co pro vás uděláme</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>na trhu</dt>
              <dd>20+ let</dd>
            </div>
            <div>
              <dt>dokončených zakázek</dt>
              <dd>1160+</dd>
            </div>
            <div>
              <dt>spokojených klientů</dt>
              <dd>99 %</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Hotová koupelna po rekonstrukci s obklady a sprchovým koutem od firmy Erbes"
            width={1200}
            height={1400}
            loading="eager"
          />
          <figcaption>Realizace koupelny · Brno</figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">Od jednoho umyvadla po celý byt</h2>
        </div>
        <div className="sluzby-grid">
          {sluzby.map((s, i) => (
            <article className="sluzba" key={s.n}>
              <span className="sluzba-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.n}</h3>
              <p>{s.p}</p>
            </article>
          ))}
        </div>

        <div className="prubeh">
          <div className="prubeh-media">
            <img
              src="/section-1.webp"
              alt="Průběh rekonstrukce koupelny — obkládání a montáž"
              width={1000}
              height={800}
              loading="lazy"
            />
          </div>
          <div className="prubeh-steps">
            <p className="eyebrow">Jak to u nás probíhá</p>
            <h3 className="prubeh-h">Tři kroky, žádné překvapení</h3>
            <ol className="steps">
              {kroky.map((k) => (
                <li key={k.c}>
                  <span className="step-c" aria-hidden="true">{k.c}</span>
                  <div>
                    <h4>{k.t}</h4>
                    <p>{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="onas" aria-labelledby="onas-h">
        <div className="onas-media">
          <img
            src="/section-2.webp"
            alt="Detail dokončené koupelny po rekonstrukci — dlažba a sanita"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="onas-body">
          <p className="eyebrow">Proč Erbes</p>
          <h2 id="onas-h">Řemeslo, které je vidět i za dva roky</h2>
          <p className="onas-lead">
            Jsme rodinná firma z Brna-Maloměřic. Poptávku zpracujeme zdarma,
            práci vedeme od začátku do konce a na NejŘemeslníci máme jen kladné reference.
          </p>
          <ul className="perky">
            <li>Pracujeme na trhu přes 20 let</li>
            <li>Pro řadu klientů obkládáme opakovaně</li>
            <li>Kompletní servis — bourání, rozvody, obklady, úklid</li>
            <li>Rozpočet i termín dostanete předem a dodržíme je</li>
          </ul>
          <div className="quotes">
            {reference.map((r) => (
              <blockquote className="quote" key={r.a}>
                <p>„{r.q}“</p>
                <cite>{r.a}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
