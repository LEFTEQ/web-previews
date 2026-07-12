import React from 'react'

const opravy = [
  {
    kod: 'DISPLEJ',
    nazev: 'Prasklý displej a sklo',
    popis: 'Rozbité sklo, mrtvý dotyk nebo bílé pruhy přes displej. Vyměníme kompletní panel — u většiny modelů máme díly ihned skladem.',
    cas: 'do 60 minut na počkání',
  },
  {
    kod: 'BATERIE',
    nazev: 'Výměna baterie',
    popis: 'Telefon drží půl dne a vypíná se na 20 %? Nasadíme novou článkovou baterii — přes 400 modelů máme na prodejně skladem.',
    cas: 'do 30 minut',
  },
  {
    kod: 'KONEKTOR',
    nazev: 'Nabíjecí konektor',
    popis: 'Kabel se viklá, telefon nabíjí jen v určité poloze nebo vůbec. Vyčistíme, nebo přepájíme celý konektor.',
    cas: 'do 90 minut',
  },
  {
    kod: 'VODA',
    nazev: 'Zaplavený telefon',
    popis: 'Spadl do vody nebo ho polila káva? Rozebereme, vyčistíme ultrazvukem a proměříme desku. Tohle neděláme na počkání — potřebuje čas.',
    cas: 'diagnostika 1–2 dny',
  },
  {
    kod: 'SOFTWARE',
    nazev: 'Software a data',
    popis: 'Telefon se zablokoval, zamrzá po aktualizaci nebo potřebujete přenést fotky do nového. Vyřešíme software i zálohu.',
    cas: 'dle rozsahu',
  },
  {
    kod: 'FOTOAPARÁT',
    nazev: 'Fotoaparát a reproduktor',
    popis: 'Rozmazané fotky, prasklé sklíčko čočky, tichý hovor nebo pískání při telefonování. Proměříme a vyměníme vadný modul.',
    cas: 'do 60 minut',
  },
]

const znacky = ['iPhone', 'Samsung', 'Xiaomi', 'Huawei', 'Honor', 'Nokia', 'Sony', 'Realme', 'Vivo', 'Lenovo']

export default function Page() {
  return (
    <main className="rn">
      <header className="rn-top">
        <a className="rn-logo" href="#" aria-label="Ronitan — servis mobilů Brno">
          <span className="rn-logo-mark" aria-hidden="true">
            <span className="rn-logo-screw" />
          </span>
          <span className="rn-logo-word">Ronitan</span>
          <span className="rn-logo-sub">servis mobilů · Brno</span>
        </a>
        <a className="rn-call rn-call--top" href="tel:+420775931893">
          775&nbsp;931&nbsp;893
        </a>
      </header>

      <section className="rn-hero">
        <div className="rn-hero-copy">
          <p className="rn-eyebrow">Veselá 199/5 · Brno-střed · otevřeno na prodejně</p>
          <h1 className="rn-hero-title">
            Prasklý displej<br />
            <span className="rn-hero-title-accent">spravíme, než vám</span><br />
            vychladne káva.
          </h1>
          <p className="rn-hero-lede">
            Displej, baterie i konektor u většiny modelů měníme na počkání — díly máme skladem.
            Nemůžete přijet? Přijedeme k vám, telefon vyzvedneme a druhý den vrátíme opravený.
          </p>
          <div className="rn-hero-cta">
            <a className="rn-call" href="tel:+420775931893">Zavolat 775&nbsp;931&nbsp;893</a>
            <a className="rn-ghost" href="#opravy">Co opravujeme</a>
          </div>
          <ul className="rn-hero-stats">
            <li><strong>60 min</strong><span>výměna displeje na počkání</span></li>
            <li><strong>400+</strong><span>modelů baterií skladem</span></li>
            <li><strong>Svoz zdarma</strong><span>po Brně a okolí</span></li>
          </ul>
        </div>
        <figure className="rn-hero-media">
          <img
            src="/hero.webp"
            alt="Technik Ronitanu při opravě rozebraného mobilního telefonu na pracovním stole"
            className="rn-hero-img"
          />
          <figcaption className="rn-hero-tag">Pracovní stůl · Veselá 5</figcaption>
        </figure>
      </section>

      <section className="rn-section" id="opravy">
        <div className="rn-section-head">
          <p className="rn-eyebrow">Ceník podle závady</p>
          <h2 className="rn-h2">Řekněte, co telefon dělá.<br />My víme, co s tím.</h2>
          <p className="rn-section-lede">
            Opravujeme telefony všech běžných značek. Nemusíte znát typ součástky —
            stačí popsat, co se děje, a my rovnou řekneme cenu i čas.
          </p>
        </div>

        <ol className="rn-grid">
          {opravy.map((o) => (
            <li className="rn-card" key={o.kod}>
              <span className="rn-card-kod">{o.kod}</span>
              <h3 className="rn-card-nazev">{o.nazev}</h3>
              <p className="rn-card-popis">{o.popis}</p>
              <p className="rn-card-cas">{o.cas}</p>
            </li>
          ))}
        </ol>

        <div className="rn-znacky">
          <span className="rn-znacky-label">Spravíme:</span>
          <ul>
            {znacky.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rn-trust">
        <div className="rn-trust-media">
          <img
            src="/section-1.webp"
            alt="Detail regálu s náhradními díly a bateriemi na prodejně Ronitan"
            className="rn-trust-img"
          />
          <img
            src="/section-2.webp"
            alt="Opravený a složený mobilní telefon připravený k předání zákazníkovi"
            className="rn-trust-img rn-trust-img--2"
          />
        </div>
        <div className="rn-trust-copy">
          <p className="rn-eyebrow">Proč k nám</p>
          <h2 className="rn-h2">Díly na regálu, ne v objednávce.</h2>
          <p className="rn-section-lede">
            Většinu servisních dílů máme přímo na prodejně na Veselé — proto opravu
            zvládneme na počkání a neposíláme vás čekat týden na součástku z ciziny.
          </p>

          <div className="rn-refs">
            <blockquote className="rn-ref">
              <p>„Děkuji za kvalitní opravu iPhonu. Je vidět, že své práci rozumíte —
              výborná cena i kvalita dílů. Určitě doporučuju.“</p>
              <cite>Jiří Janotka · Brno</cite>
            </blockquote>
            <blockquote className="rn-ref">
              <p>„Mobil si vyzvedli u nás v práci a druhý den dovezli opravený.
              Navíc mi půjčili náhradní telefon. Můžu jen doporučit.“</p>
              <cite>Dana Králová · Brno</cite>
            </blockquote>
          </div>

          <dl className="rn-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Veselá 199/5, 602 00 Brno-střed</dd>
            </div>
            <div>
              <dt>Svoz opravy</dt>
              <dd>Brno, Vyškov, Olomouc, Prostějov, Uherský Brod a okolí</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420775931893">775 931 893</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}
