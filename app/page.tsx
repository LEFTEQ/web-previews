export const metadata = {
  title: "CAPL & SOUČEK — advokátní kancelář, České Budějovice",
  description:
    "Advokátní kancelář CAPL & SOUČEK s.r.o. na Husově třídě v Českých Budějovicích. Smlouvy, spory, nemovitosti, obhajoba. Mgr. Martin Capl a Mgr. Ing. Jan Souček.",
  openGraph: {
    title: "CAPL & SOUČEK — advokátní kancelář",
    description:
      "Dva advokáti, jedna kancelář na Husově třídě. Právní pomoc pro lidi a firmy z jižních Čech.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    par: "§",
    nazev: "Smlouvy a závazky",
    popis:
      "Kupní, nájemní a pracovní smlouvy, obchodní podmínky. Připravíme je tak, aby vás chránily — nebo zkontrolujeme ty, které vám někdo předložil k podpisu.",
    pro: "Než podepíšete",
  },
  {
    par: "§",
    nazev: "Nemovitosti",
    popis:
      "Převody domů, bytů a pozemků včetně advokátní úschovy kupní ceny a návrhu na vklad do katastru. Bezpečně od rezervace po zápis vlastnictví.",
    pro: "Koupě i prodej",
  },
  {
    par: "§",
    nazev: "Soudní spory a vymáhání",
    popis:
      "Zastoupíme vás před soudy všech stupňů. Neplatí vám dlužník, sousedský spor, reklamace, náhrada škody — nejdřív zkusíme dohodu, pak žalobu.",
    pro: "Když dohoda nestačí",
  },
  {
    par: "§",
    nazev: "Obhajoba v trestních věcech",
    popis:
      "Obhajoba od prvního výslechu po hlavní líčení. Čím dřív zavoláte, tím víc toho jde ovlivnit — u výslechu už máte mít advokáta vedle sebe.",
    pro: "Volejte hned",
  },
  {
    par: "§",
    nazev: "Rodinné právo",
    popis:
      "Rozvod, péče o děti, výživné, vypořádání společného jmění. Citlivé věci řešíme věcně a diskrétně, s důrazem na dohodu tam, kde je možná.",
    pro: "Diskrétně",
  },
  {
    par: "§",
    nazev: "Právo pro podnikatele",
    popis:
      "Založení s.r.o., valné hromady, vztahy mezi společníky, vymáhání faktur. Známe provoz malých a středních firem z jižních Čech.",
    pro: "Pro firmy",
  },
];

const advokati = [
  {
    jmeno: "Mgr. Martin Capl",
    cak: "ev. č. ČAK 09064",
    role: "advokát a společník",
    popis:
      "Vede spornou agendu kanceláře — zastupování před soudy, vymáhání pohledávek a obhajobu. Klienti na něm oceňují, že mluví na rovinu: řekne vám i to, když se soudit nevyplatí.",
  },
  {
    jmeno: "Mgr. Ing. Jan Souček",
    cak: "ev. č. ČAK 11886",
    role: "advokát a společník",
    popis:
      "Díky ekonomickému vzdělání se věnuje smluvní a firemní agendě — transakcím s nemovitostmi, obchodním smlouvám a právu obchodních korporací. Čísla ve smlouvě mu dávají smysl stejně jako paragrafy.",
  },
];

const zasady = [
  {
    nazev: "Mluvíme česky, ne právnicky",
    popis:
      "Vysvětlíme vám situaci tak, abyste jí rozuměli a mohli se rozhodnout. Paragrafy si necháme do podání.",
  },
  {
    nazev: "Odměnu znáte předem",
    popis:
      "Před převzetím věci se dohodneme na způsobu odměny — hodinově, úkonově, nebo pevnou částkou. Bez překvapení na faktuře.",
  },
  {
    nazev: "Advokátní mlčenlivost",
    popis:
      "Vše, co nám svěříte, podléhá zákonné mlčenlivosti. Platí to od první konzultace, i když se nakonec nestanete klientem.",
  },
];

export default function Page() {
  return (
    <main className="ak">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div className="wordmark" aria-label="Capl a Souček, advokátní kancelář">
              <span className="wordmark-names">
                CAPL<span className="wordmark-amp">&amp;</span>SOUČEK
              </span>
              <span className="wordmark-sub">advokátní kancelář s.r.o.</span>
            </div>
            <p className="hero-loc">
              Husova tř. 1847/5 · České Budějovice
            </p>
          </div>

          <div className="hero-main">
            <div className="hero-par" aria-hidden="true">
              §
            </div>
            <h1 className="hero-title">
              <span className="hero-line hero-line-1">Dva advokáti.</span>
              <span className="hero-line hero-line-2">Jedna kancelář</span>
              <span className="hero-line hero-line-3">
                na Husově třídě.
              </span>
            </h1>
            <p className="hero-lead">
              Smlouvy, nemovitosti, soudní spory i obhajoba. Pro lidi a firmy
              z Českých Budějovic a jižních Čech řešíme právo srozumitelně —
              a s odměnou dohodnutou předem.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420383839449">
                Zavolat 383 839 449
              </a>
              <a className="btn btn-ghost" href="mailto:office@akcs.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          <dl className="hero-facts">
            <div className="fact">
              <dt>Zapsáno u ČAK</dt>
              <dd>ev. č. 09064 &amp; 11886</dd>
            </div>
            <div className="fact">
              <dt>Právní forma</dt>
              <dd>s.r.o., IČO 06660827</dd>
            </div>
            <div className="fact">
              <dt>Kde nás najdete</dt>
              <dd>2 minuty pěšky od Justičního areálu</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">S čím za námi lidé chodí</p>
            <h2 id="sluzby-h">
              Šest oblastí, ve kterých vám pomůžeme
            </h2>
            <p className="section-lead">
              Nejsme kancelář na všechno. Děláme to, co umíme — a když vaše
              věc patří jinam, řekneme vám to hned na první schůzce.
            </p>
          </div>

          <ul className="sluzby-grid">
            {sluzby.map((s) => (
              <li key={s.nazev} className="sluzba">
                <div className="sluzba-head">
                  <span className="sluzba-par" aria-hidden="true">
                    {s.par}
                  </span>
                  <span className="sluzba-tag">{s.pro}</span>
                </div>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ KANCELÁŘ / DŮVĚRA ============ */}
      <section className="kancelar" aria-labelledby="kancelar-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow eyebrow-light">Kdo za jménem stojí</p>
            <h2 id="kancelar-h">Capl &amp; Souček — jména, ne značka</h2>
            <p className="section-lead section-lead-light">
              Kancelář nese naše jména, protože za práci ručíme osobně. Váš
              případ nevede „tým", ale konkrétní advokát, kterému voláte
              přímo.
            </p>
          </div>

          <div className="advokati">
            {advokati.map((a) => (
              <article key={a.jmeno} className="advokat">
                <div className="advokat-iniciala" aria-hidden="true">
                  {a.jmeno.includes("Capl") ? "C" : "S"}
                </div>
                <h3>{a.jmeno}</h3>
                <p className="advokat-role">
                  {a.role} · {a.cak}
                </p>
                <p className="advokat-popis">{a.popis}</p>
              </article>
            ))}
          </div>

          <ul className="zasady">
            {zasady.map((z) => (
              <li key={z.nazev} className="zasada">
                <h3>{z.nazev}</h3>
                <p>{z.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
