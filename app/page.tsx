import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lomnické pivo — řemeslný pivovar, 555 let tradice | Liberecký kraj",
  description:
    "Poctivé řemeslné pivo z Lomnice nad Popelkou. Navazujeme na pět století vaření piva pod Kozákovem — ležáky, speciály, pivovarská zahrádka a ubytování. Vaříme ze srdce.",
  openGraph: {
    title: "Lomnické pivo — řemeslný pivovar, 555 let tradice",
    description:
      "Poctivé řemeslné pivo z Lomnice nad Popelkou. Ležáky, speciály, zahrádka a apartmány pod Kozákovem.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const piva = [
  {
    n: "10°",
    nazev: "Výčepní světlé",
    typ: "Světlý ležák, spodně kvašený",
    popis:
      "Denní pivo do zahrádky. Jemná hořkost žateckého chmele, sladová plnost a suchý dopito, po kterém si řeknete o druhé.",
    ibu: "22 IBU",
  },
  {
    n: "12°",
    nazev: "Ležák světlý",
    typ: "Ležák, ležení 6 týdnů",
    popis:
      "Vlajková loď pivovaru. Zlatá barva, medová sladovost a čistá hořkost, kterou dává čas ve sklepě — nikam nespěcháme.",
    ibu: "34 IBU",
  },
  {
    n: "13°",
    nazev: "Polotmavý speciál",
    typ: "Vídeňský sladový speciál",
    popis:
      "Karamelová barva a tóny sušeného ovoce a chleba. Pivo na dlouhý večer, kdy se venku už stmívá nad Popelkou.",
    ibu: "28 IBU",
  },
  {
    n: "16°",
    nazev: "Tmavý sváteční",
    typ: "Silný tmavý speciál",
    popis:
      "Kávová hořkost, praženy slad a čokoláda. Várka na zimu a na svátky — vaří se jen párkrát do roka.",
    ibu: "40 IBU",
  },
];

const kroky = [
  {
    t: "Slad a voda",
    d: "Vaříme z měkké vody podhůří Kozákova a českého sladu. Nic jiného do várky nepatří.",
  },
  {
    t: "Rmutování a chmelovar",
    d: "Klasickým dvourmutem vytáhneme ze sladu maximum. Chmel dávkujeme na tři várky — hořkost, chuť i aroma.",
  },
  {
    t: "Ležení ve sklepě",
    d: "Pivo zraje v ležáckém tanku několik týdnů při nízké teplotě. Nefiltrujeme na sílu — chuť necháme dozrát.",
  },
  {
    t: "Čep na zahrádce",
    d: "Točíme přímo tady, pár kroků od varny. Od výčepu k prvnímu doušku to pivo nemá daleko.",
  },
];

export default function Page() {
  return (
    <main className="pv">
      <a className="pv-skip" href="#nabidka">
        Přeskočit na nabídku piv
      </a>

      <header className="pv-top">
        <div className="pv-wordmark" aria-label="Lomnické pivo">
          <span className="pv-wordmark-main">Lomnické</span>
          <span className="pv-wordmark-sub">pivo · řemeslný pivovar</span>
        </div>
        <nav className="pv-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka piv</a>
          <a href="#pivovar">O pivovaru</a>
          <a href="#zahradka">Zahrádka</a>
        </nav>
      </header>

      <section className="pv-hero" aria-labelledby="hero-nadpis">
        <div className="pv-hero-copy">
          <p className="pv-eyebrus">Lomnice nad Popelkou · Liberecký kraj</p>
          <h1 id="hero-nadpis" className="pv-hero-title">
            Pět století
            <span className="pv-hero-em">poctivého ležáku</span>
            pod Kozákovem
          </h1>
          <p className="pv-hero-lead">
            Navázali jsme na přerušenou tradici vaření piva v Lomnici a dali do
            toho všechno. Vaříme řemeslně, z českého sladu a měkké podhorské
            vody — a točíme přímo u varny.
          </p>
          <div className="pv-hero-cta">
            <a className="pv-btn" href="#nabidka">
              Prohlédnout piva
            </a>
            <a className="pv-btn pv-btn-ghost" href="#zahradka">
              Otevírací doba zahrádky
            </a>
          </div>
          <dl className="pv-stat-row">
            <div className="pv-stat">
              <dt>Vaříme od</dt>
              <dd>1466</dd>
            </div>
            <div className="pv-stat">
              <dt>Stálých piv</dt>
              <dd>4</dd>
            </div>
            <div className="pv-stat">
              <dt>Ležení až</dt>
              <dd>6&nbsp;týdnů</dd>
            </div>
          </dl>
        </div>
        <figure className="pv-hero-fig">
          <img
            src="/hero.webp"
            alt="Vychlazená sklenice zlatého lomnického ležáku s bohatou pěnou"
            width={880}
            height={1040}
            className="pv-hero-img"
          />
          <figcaption className="pv-hero-cap">
            <span className="pv-hero-cap-n">12°</span>
            Ležák světlý — točíme denně
          </figcaption>
        </figure>
      </section>

      <section id="nabidka" className="pv-nabidka" aria-labelledby="nabidka-nadpis">
        <div className="pv-sec-head">
          <p className="pv-eyebrus pv-eyebrus-dark">Stálá nabídka · čepujeme i stáčíme do PET</p>
          <h2 id="nabidka-nadpis">Čtyři piva, každé na svůj čas</h2>
        </div>
        <ul className="pv-piva">
          {piva.map((p) => (
            <li key={p.nazev} className="pv-pivo">
              <div className="pv-pivo-stupne" aria-hidden="true">
                {p.n}
              </div>
              <div className="pv-pivo-body">
                <h3 className="pv-pivo-nazev">{p.nazev}</h3>
                <p className="pv-pivo-typ">{p.typ}</p>
                <p className="pv-pivo-popis">{p.popis}</p>
                <span className="pv-pivo-ibu">{p.ibu}</span>
              </div>
            </li>
          ))}
        </ul>
        <figure className="pv-nabidka-fig">
          <img
            src="/section-1.webp"
            alt="Řada vychlazených sklenic lomnického piva připravených na výčepu"
            width={1200}
            height={640}
            className="pv-wide-img"
          />
        </figure>
      </section>

      <section id="pivovar" className="pv-pivovar" aria-labelledby="pivovar-nadpis">
        <div className="pv-pivovar-grid">
          <figure className="pv-pivovar-fig">
            <img
              src="/section-2.webp"
              alt="Interiér lomnického pivovaru s měděnou varnou"
              width={900}
              height={1080}
              className="pv-wide-img"
            />
          </figure>
          <div className="pv-pivovar-copy">
            <p className="pv-eyebrus pv-eyebrus-dark">O pivovaru</p>
            <h2 id="pivovar-nadpis">
              Tradice je od toho, aby se předávala dál
            </h2>
            <p className="pv-pivovar-lead">
              Více než pět století vaření piva v Lomnici nás donutilo k zamyšlení.
              Rozhodli jsme se navázat na přerušenou nit a vařit poctivě,
              řemeslným způsobem a ze srdce. Držte nám palce — a dej Bůh štěstí.
            </p>
            <ol className="pv-kroky">
              {kroky.map((k, i) => (
                <li key={k.t} className="pv-krok">
                  <span className="pv-krok-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="pv-krok-t">{k.t}</h3>
                    <p className="pv-krok-d">{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="pv-zakladatele">
              <span>Zakladatelé</span>
              Viktor Mastník · Jan Pazderský · Miroslav Vaníček · Antonín Sahula
            </p>
          </div>
        </div>

        <div id="zahradka" className="pv-zahradka">
          <div className="pv-zahradka-in">
            <h3 className="pv-zahradka-t">Pivovarská zahrádka a obchod</h3>
            <p className="pv-zahradka-d">
              Přijďte na čerstvé pivo přímo k pramenu. Stáčíme do sudů i PET
              lahví, poradíme s výběrem a v sezóně sedíte pár kroků od varny.
              Nabízíme i ubytování v apartmánech pro ty, kdo to chtějí protáhnout.
            </p>
            <dl className="pv-kontakt">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Lomnice nad Popelkou, Liberecký kraj</dd>
              </div>
              <div>
                <dt>Zavolejte</dt>
                <dd>
                  <a href="tel:+420777610054">+420 777 610 054</a>
                </dd>
              </div>
              <div>
                <dt>Napište</dt>
                <dd>
                  <a href="mailto:ahoj@lomnickepivo.cz">ahoj@lomnickepivo.cz</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
