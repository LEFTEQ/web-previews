import type { CSSProperties } from "react";

const offers = [
  {
    season: "Jaro",
    title: "Sazenice a přísady",
    text: "Rajčata, papriky, letničky i bylinky, které pěstují sami žáci ve školních sklenících na Jablonecké.",
    price: "Prodej v období jarního osazování",
  },
  {
    season: "Léto",
    title: "Balkonové a hrnkové rostliny",
    text: "Muškáty, surfinie a truhlíky namíchané do plného květu — připravené rovnou domů na okno či balkon.",
    price: "Kusový prodej dle nabídky",
  },
  {
    season: "Podzim",
    title: "Vazby, věnce a zeleň",
    text: "Sezónní vazba a dušičková zeleň z vlastní produkce, kterou žáci aranžují v rámci odborného výcviku.",
    price: "Zakázky i pro veřejnost",
  },
];

const pillars = [
  {
    h: "Rukama",
    p: "Pracujeme v perfektně vybavených dílnách a sklenících. Děláme zakázky pro veřejnost a o naše výrobky je zájem — žáci tak najdou uplatnění přímo v oboru.",
  },
  {
    h: "Srdcem",
    p: "Šanci má u nás každý. Učíme v malých kolektivech, spolupracujeme se školním psychologem a stavíme na důvěře a bezpečném prostředí.",
  },
  {
    h: "Rozumem",
    p: "Teorie navazuje na praxi. Žákům se věnují speciální pedagogové a asistentky a připravujeme je na samostatný život v dospělosti.",
  },
];

export default function Page() {
  return (
    <main>
      <header>
        <nav className="nav">
          <div className="mark">
            <span>Zahradnictví <span className="grow">Jablonecká</span></span>
            <small>SOŠ Liberec</small>
          </div>
          <div className="nav-links">
            <a href="#zahradnictvi">Školní zahradnictví</a>
            <a href="#skola">O škole</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <span className="badge"><b></b>Zabezpečeno HTTPS</span>
        </nav>
      </header>

      <section className="hero wrap" aria-labelledby="h1">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow reveal d1">Střední odborná škola · Liberec · obor zahradnictví</p>
            <h1 id="h1" className="reveal d2">
              Rostliny, které<br />vypěstovali<br /><em>naši žáci.</em>
            </h1>
            <p className="hero-lead reveal d3">
              Ve školním zahradnictví na Jablonecké se učí řemeslo rukama —
              od výsevu přes přesazování až po prodej. Přijďte si vybrat sazenice,
              balkonové květiny nebo sezónní vazbu z vlastní produkce.
            </p>
            <div className="hero-cta reveal d4">
              <a className="btn btn-solid" href="#zahradnictvi">Co právě prodáváme</a>
              <a className="btn btn-ghost" href="#skola">Proč studovat u nás</a>
            </div>
          </div>
          <figure className="hero-media reveal d3" style={{ margin: 0 }}>
            <img src="/hero.webp" alt="Žáci školního zahradnictví SOŠ Liberec při práci mezi vypěstovanými rostlinami" />
            <figcaption className="hero-tag">Vypěstováno na Jablonecké</figcaption>
          </figure>
        </div>

        <div className="creed" aria-label="Jak učíme">
          <div><b>Rukama</b><span>Praxe v dílnách a sklenících, zakázky pro veřejnost.</span></div>
          <div><b>Srdcem</b><span>Bezpečné prostředí a malé třídní kolektivy.</span></div>
          <div><b>Rozumem</b><span>Moderní učebny, teorie propojená s praxí.</span></div>
        </div>
      </section>

      <section className="section wrap" id="zahradnictvi" aria-labelledby="h2a">
        <div className="section-head">
          <p className="k-eyebrow">Školní zahradnictví · prodej pro veřejnost</p>
          <h2 id="h2a">Co u nás vyroste za jednu školní sezónu</h2>
          <p>
            Nabídka se mění podle toho, co je zrovna na řadě v zahradnickém roce.
            Vše zasadili, přesadili a připravili žáci pod vedením učitelů odborného výcviku.
          </p>
        </div>

        <div className="offers">
          {offers.map((o) => (
            <article className="offer" key={o.title}>
              <span className="season">{o.season}</span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              <div className="price">{o.price}</div>
            </article>
          ))}
        </div>

        <div className="shop-note">
          <span className="dot" aria-hidden="true" />
          <p style={{ margin: 0 }}>
            <b>Otevírací sezóna:</b> prodejní dny probíhají během školního roku.
            Přes hlavní prázdniny (konec června až začátek září) je zahradnictví zavřené —
            těšíme se na vás opět v září. Děkujeme za vaši přízeň.
          </p>
        </div>
      </section>

      <section className="section wrap" id="skola" aria-labelledby="h2b">
        <div className="about-grid">
          <figure className="about-media" style={{ margin: 0 }}>
            <img src="/section-1.webp" alt="Odborný výcvik v zahradnictví SOŠ Liberec" />
            <figcaption>Odborný výcvik probíhá přímo v provozu školního zahradnictví.</figcaption>
            <img src="/section-2.webp" alt="Výpěstky a vazba připravené žáky školy" style={{ marginTop: 16, aspectRatio: "3 / 2" } as CSSProperties} />
          </figure>

          <div>
            <p className="k-eyebrow">O škole · § 16 odst. 9 školského zákona</p>
            <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3rem)", lineHeight: 1.02, letterSpacing: "-.015em", margin: "0 0 14px", color: "var(--soil)" }}>
              Škola, kde má šanci každý
            </h2>
            <p className="about-lead">
              „Každá ze tří částí — rukama, srdcem, rozumem — má smysl tehdy,
              když se propojí dohromady. To u nás umíme.“
            </p>
            <p style={{ color: "#57493a", margin: "0 0 6px" }}>
              Poskytujeme speciálně pedagogickou péči ve středním odborném vzdělávání
              a nabízíme tradiční řemeslné obory vhodné i pro žáky s kombinovaným znevýhodněním.
              Zahradnictví je jedním z nich — s vlastním provozem, který slouží praxi i veřejnosti.
            </p>

            <div className="pillars">
              {pillars.map((p) => (
                <div className="pillar" key={p.h}>
                  <h4>{p.h}</h4>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-strip" id="kontakt">
          <div>
            <span>Kde nás najdete</span>
            <p>Jablonecká 999/51, 460 06 Liberec 6</p>
          </div>
          <div>
            <span>Zavolejte nám</span>
            <a href="tel:+420484842138">484 842 138</a>
          </div>
          <div>
            <span>Napište nám</span>
            <a href="mailto:info@sosliberec.cz">info@sosliberec.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
