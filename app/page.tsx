import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Panda Circus — koktejlový bar bez rezervací | Brno",
  description:
    "Skrytý koktejlový bar na Šilingrově náměstí v Brně. Žádné rezervace, jen dveře do jiných dimenzí. Autorské drinky, tři světy, otevřeno do dvou ráno.",
};

const dimenze = [
  {
    kod: "I",
    nazev: "Ob(j)ětí houby",
    barvy: ["#E7F23A", "#2FBF71", "#0B3D2E"],
    popis:
      "Žlutá, zelená a všechny barvy džungle. Čas tu plyne pomalu, možná až příliš. Mechaničtí skřítci, duchovní stromy a hyper šneci — bylinné a zemité drinky, které chutnají jako téměř couvající čas.",
    drink: "Bylinný sour s mátou, chartreuse a lesní houbou",
  },
  {
    kod: "II",
    nazev: "Rudý telefon",
    barvy: ["#C81020", "#111111", "#F4F0E8"],
    popis:
      "Červená, černá a bílá. Jeden nekonečný film, ve kterém vládne bezčasí. Postavy se mění, duše zůstávají. Kouřové, temné a fatalistické — pití pro noc, o které máte pocit, že bude trvat věčně.",
    drink: "Kouřový negroni s mezcalem a hořkou čokoládou",
  },
  {
    kod: "III",
    nazev: "Mijazu 4099",
    barvy: ["#00E5FF", "#FF2D6F", "#1B0A2E"],
    popis:
      "Virtuální realita malého japonského přímořského města, kterou pohltil urychlovač za sedm a půl vteřiny. Neony, rychlost, čas na pokraji zhroucení. Jasné, ostré a nabité — koktejly z Nové Asie.",
    drink: "Yuzu highball se saké, citronovou trávou a neonovou sodou",
  },
];

export default function Page() {
  return (
    <main className="spc">
      <section className="spc-hero" aria-labelledby="spc-hero-nadpis">
        <img
          className="spc-hero__img"
          src="/hero.webp"
          alt="Postava s televizí místo hlavy v šeru koktejlového baru Super Panda Circus"
          width={1600}
          height={2000}
        />
        <div className="spc-hero__veil" aria-hidden="true" />

        <header className="spc-topbar">
          <a className="spc-wordmark" href="#" aria-label="Super Panda Circus, domů">
            <span className="spc-wordmark__super">SUPER</span>
            <span className="spc-wordmark__panda">PANDA</span>
            <span className="spc-wordmark__circus">CIRCUS</span>
          </a>
          <span className="spc-topbar__meta">Brno · Šilingrovo nám.</span>
        </header>

        <div className="spc-hero__inner">
          <p className="spc-eyebrow">Koktejlový bar · žádné rezervace</p>
          <h1 id="spc-hero-nadpis" className="spc-hero__nadpis">
            Pootevřeli jsme <em>dvířka</em> do jiných dimenzí.
          </h1>
          <p className="spc-hero__lead">
            Pořád nevíme, co se přesně stalo. Zdály se nám sny, které měly čtyři
            rozměry. Zatím prozkoumáváme nové světy, co to jen jde — vyždímáme
            z nich to nejlepší a dáme vám ochutnat.
          </p>

          <dl className="spc-hero__facts">
            <div>
              <dt>Vstup</dt>
              <dd>Bez rezervací, jen dorazte</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Út 19–2 · St–So 18–2</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Šilingrovo nám. 257/3, Brno</dd>
            </div>
          </dl>
        </div>

        <p className="spc-hero__ticker" aria-hidden="true">
          Get lost in time · Get lost in time · Get lost in time ·
        </p>
      </section>

      <section className="spc-svety" aria-labelledby="spc-svety-nadpis">
        <div className="spc-svety__intro">
          <p className="spc-eyebrow spc-eyebrow--dark">Tři světy, jedno menu</p>
          <h2 id="spc-svety-nadpis">
            Nemáme drinkový lístek. Máme dimenze.
          </h2>
          <p className="spc-svety__lead">
            Každý svět má svoji paletu, svoji náladu a svoje pití. Řekněte
            barmanovi, kam se dnes chcete ztratit — zbytek je na něm.
          </p>
        </div>

        <ol className="spc-svety__list">
          {dimenze.map((d) => (
            <li
              key={d.kod}
              className="spc-svet"
              style={{
                ["--c1" as string]: d.barvy[0],
                ["--c2" as string]: d.barvy[1],
                ["--c3" as string]: d.barvy[2],
              }}
            >
              <div className="spc-svet__num" aria-hidden="true">
                {d.kod}
              </div>
              <div
                className="spc-svet__swatch"
                aria-hidden="true"
              >
                <span style={{ background: d.barvy[0] }} />
                <span style={{ background: d.barvy[1] }} />
                <span style={{ background: d.barvy[2] }} />
              </div>
              <h3 className="spc-svet__nazev">{d.nazev}</h3>
              <p className="spc-svet__popis">{d.popis}</p>
              <p className="spc-svet__drink">
                <span>Co si dát</span>
                {d.drink}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="spc-otazky" aria-labelledby="spc-otazky-nadpis">
        <div className="spc-otazky__media">
          <img
            src="/section-1.webp"
            alt="Barevný detail z jednoho ze světů baru Super Panda Circus"
            width={900}
            height={1100}
            loading="lazy"
          />
          <img
            src="/section-2.webp"
            alt="Neonová atmosféra baru Super Panda Circus"
            width={900}
            height={1100}
            loading="lazy"
          />
        </div>

        <div className="spc-otazky__text">
          <p className="spc-eyebrow spc-eyebrow--dark">Než dorazíte</p>
          <h2 id="spc-otazky-nadpis">Jak to u nás chodí</h2>

          <dl className="spc-faq">
            <div className="spc-faq__row">
              <dt>Musím si rezervovat stůl?</dt>
              <dd>
                Ne. Rezervace nebereme — přijďte a nechte se vést. Když je plno,
                dáme vědět a stojí za to počkat.
              </dd>
            </div>
            <div className="spc-faq__row">
              <dt>Kde nás najdete?</dt>
              <dd>
                Šilingrovo náměstí 257/3 v centru Brna. Hledejte nenápadné dveře
                — až vás oslní neony, světla nebo barvy džungle, jste tu správně.
              </dd>
            </div>
            <div className="spc-faq__row">
              <dt>Kdy máme otevřeno?</dt>
              <dd>
                Pondělí a úterý od 19:00, středa až sobota od 18:00, vždy do 2:00
                ráno. V neděli odpočíváme.
              </dd>
            </div>
            <div className="spc-faq__row">
              <dt>Kdo za tím stojí?</dt>
              <dd>
                Barmanská parta, která si hraje s chutí i s časem. Ozvat se
                můžete Adamovi — telefon i mail najdete níže.
              </dd>
            </div>
          </dl>

          <ul className="spc-kontakt">
            <li>
              <span>Adresa</span>
              Šilingrovo nám. 257/3, 602 00 Brno-střed
            </li>
            <li>
              <span>Telefon</span>
              <a href="tel:+420734878603">+420 734 878 603</a>
            </li>
            <li>
              <span>E-mail</span>
              <a href="mailto:adam@superpandacircus.cz">
                adam@superpandacircus.cz
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
