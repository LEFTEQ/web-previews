import type { CSSProperties } from "react";

type Beer = {
  code: string;
  style: string;
  name: string;
  desc: string;
  deg: string;
  alc: string;
  ibu: string;
  ebc: string;
  ferment: string;
  available: boolean;
};

const beers: Beer[] = [
  {
    code: "01",
    style: "Světlé výčepní",
    name: "Hraďák",
    desc: "Světlé výčepní se sníženou plností, jemnou a vyváženou hořkostí a sladovým tělem. Klasika k posezení s přáteli i k lehčímu jídlu.",
    deg: "10°",
    alc: "3,9 %",
    ibu: "30",
    ebc: "10",
    ferment: "Spodní",
    available: true,
  },
  {
    code: "02",
    style: "Světlý ležák",
    name: "Šedá vlčice",
    desc: "Světlý ležák s vyrovnanou plností a zlatavou barvou. Výrazná hořkost a vysoký říz — náš nejhořčejší ležák.",
    deg: "11°",
    alc: "4,5 %",
    ibu: "38",
    ebc: "12",
    ferment: "Spodní",
    available: false,
  },
  {
    code: "03",
    style: "Polotmavý ležák",
    name: "Štamgast",
    desc: "Spodně kvašené se střední plností a sladovým tělem. Pražený ječmen dává po dopití vyváženou hořkost snoubící se s výraznějším alkoholem.",
    deg: "11°",
    alc: "4,3 %",
    ibu: "30",
    ebc: "20",
    ferment: "Spodní",
    available: true,
  },
  {
    code: "04",
    style: "Světlý ležák",
    name: "Kohoutí",
    desc: "Vlajková loď pivovaru. Vyšší plnost, střední hořkost a nezaměnitelná vůně ryze českých chmelů. Tradiční česká pivní kultura v jednom sklu.",
    deg: "12°",
    alc: "4,7 %",
    ibu: "35",
    ebc: "12",
    ferment: "Spodní",
    available: true,
  },
  {
    code: "05",
    style: "Pšeničné",
    name: "Zlatka",
    desc: "Pšeničné pivo s vůní čerstvého chleba a banánů a dozvukem citrusů. Silný zákal, nízká hořkost, vysoký říz — skvěle se pije.",
    deg: "11°",
    alc: "4,4 %",
    ibu: "26",
    ebc: "6",
    ferment: "Svrchní",
    available: true,
  },
  {
    code: "06",
    style: "American Pale Ale",
    name: "Nelson",
    desc: "Svrchně kvašené světlé pivo se svěžím sladovým aroma. Chmelová vůně s citrusovými tóny a dlouhá hořkost pro milovníky výrazných chutí.",
    deg: "12°",
    alc: "5,1 %",
    ibu: "38",
    ebc: "12",
    ferment: "Svrchní",
    available: true,
  },
  {
    code: "07",
    style: "Session IPA",
    name: "Mezulánka",
    desc: "Svrchně kvašené, zlatavé, svěží a středně plné. Citrusové chmele dodávají svěží aroma i chuť. Vysoká pitelnost pro každodenní radost.",
    deg: "11°",
    alc: "4,5 %",
    ibu: "41",
    ebc: "10",
    ferment: "Svrchní",
    available: true,
  },
];

const facts = [
  { num: "8", label: "druhů piva na čepu" },
  { num: "100 %", label: "nefiltrované & nepasterizované" },
  { num: "2013", label: "rok, kdy to celé začalo" },
  { num: "350 hl", label: "roční výstav" },
  { num: "4,5 hl", label: "velikost varny" },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#hero" aria-label="Rodinný pivovar Bukovar — domů">
          <span className="wm-top">RODINNÝ PIVOVAR</span>
          <span className="wm-main">
            BUKO<span className="wm-o">V</span>AR
          </span>
        </a>
        <nav className="nav-links" aria-label="Sekce webu">
          <a href="#piva">Piva</a>
          <a href="#kdojsme">Kdo jsme</a>
          <a href="#vycep">Výčep</a>
        </nav>
        <a className="btn-keg" href="tel:+420777894852">Objednat sud</a>
      </header>

      <section className="hero" id="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Nefiltrované pivo z pivovaru Bukovar čepované přímo z tanku"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Rodinný pivovar · Dolní Bukovsko · jižní Čechy</p>
          <h1 className="hero-title">
            <span className="line line-a">Poctivé pivo</span>
            <span className="line line-b">kolem komína</span>
          </h1>
          <p className="hero-lede">
            Vaříme z místní bukovské vody. Nefiltrované, nepasterizované,
            čepované přímo z tanku — tak, jak má pivo chutnat.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#piva">Naše piva</a>
            <a className="btn-ghost" href="#vycep">Navštívit výčep</a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Sjeďte níž</span>
          <span className="hero-arrow">↓</span>
        </div>
      </section>

      <section className="kdo" id="kdojsme">
        <div className="kdo-grid">
          <div className="kdo-copy">
            <p className="eyebrow">Kdo jsme</p>
            <h2 className="h2">Pivovar, který vaří pro svoje okolí</h2>
            <p>
              Jsme malý rodinný pivovar z městyse Dolní Bukovsko na jihu Čech.
              Jsme zdejší rodáci — a právě proto vaříme pivo tady. Navazujeme na
              tradici, která se v nedaleké obci Bzí drží už od 18. století.
            </p>
            <p>
              Prvotní ideou bylo vařit pro sebe, naši komunitu a partu lidí
              v okolí — „kolem komína“. S pivovarem tak vznikla i hospoda, kde se
              štamgasty udržujeme přátelské, komunitní prostředí.
            </p>
            <p>
              O vaření se stará pětice kamarádů-sládků, pro které je to koníček.
              Vaříme v malých objemech, a tak nešetříme na surovinách — slad
              i chmel bereme čerstvý. Pivo nefiltrujeme a nepasterizujeme, takže
              je čerstvější než z velkých pivovarů.
            </p>
          </div>
          <figure className="kdo-figure">
            <img
              src="/section-1.webp"
              alt="Sládci pivovaru Bukovar u varny a tanků"
            />
            <figcaption>Pětice kamarádů-sládků · varna 4,5 hl</figcaption>
          </figure>
        </div>

        <dl className="facts" aria-label="Pivovar v číslech">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <dt className="fact-num">{f.num}</dt>
              <dd className="fact-label">{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="piva" id="piva">
        <div className="piva-head">
          <p className="eyebrow">Co vaříme</p>
          <h2 className="h2 h2-light">Naše piva</h2>
          <p className="piva-note">
            Čísla čteme jako na tácku: stupňovitost, alkohol, hořkost v IBU,
            barva v EBC a způsob kvašení. Zelený puntík znamená, že teče právě teď.
          </p>
        </div>

        <ul className="beer-list">
          {beers.map((b) => (
            <li className={`beer${b.available ? "" : " is-out"}`} key={b.code}>
              <div className="beer-code" aria-hidden="true">{b.code}</div>
              <div className="beer-main">
                <p className="beer-style">{b.style}</p>
                <h3 className="beer-name">{b.name}</h3>
                <p className="beer-desc">{b.desc}</p>
              </div>
              <div className="beer-side">
                <span
                  className={`beer-tap${b.available ? " on" : ""}`}
                >
                  {b.available ? "Na čepu" : "Dočasně došlo"}
                </span>
                <div className="beer-degree" style={{ "--ebc": b.ebc } as CSSProperties}>
                  <span className="deg-num">{b.deg}</span>
                </div>
              </div>
              <dl className="beer-specs">
                <div><dt>Alkohol</dt><dd>{b.alc}</dd></div>
                <div><dt>Hořkost</dt><dd>{b.ibu} IBU</dd></div>
                <div><dt>Barva</dt><dd>{b.ebc} EBC</dd></div>
                <div><dt>Kvašení</dt><dd>{b.ferment}</dd></div>
              </dl>
            </li>
          ))}
        </ul>

        <div className="vycep" id="vycep">
          <img
            className="vycep-img"
            src="/section-2.webp"
            alt="Výčep pivovaru Bukovar, kde se pivo čepuje přímo z tanku"
          />
          <div className="vycep-copy">
            <p className="eyebrow">Výčep &amp; samoobsluha</p>
            <h2 className="h2 h2-light">Nejlíp chutná u nás v hospodě</h2>
            <p>
              Většinu z ročního výstavu vypijí hosté přímo u nás — a to je
              záměr. Stavte se na jedno, přineste si demižon nebo si objednejte
              sud na oslavu. Rádi poradíme, které pivo se k čemu hodí.
            </p>
            <p className="vycep-contact">
              <a href="tel:+420777894852">777 894 852</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:pivovar@bukovar.cz">pivovar@bukovar.cz</a>
              <span aria-hidden="true">·</span>
              <span>Dolní Bukovsko</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
