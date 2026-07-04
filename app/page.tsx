import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Fortelný — klimatizace a tepelná čerpadla, Praha",
  description:
    "Prodej, servis a montáž klimatizací a tepelných čerpadel v Praze. Daikin, Toshiba, Mitsubishi, LG a další. Autorizovaný servis, revize těsnosti, čištění před sezónou.",
  openGraph: {
    title: "Daniel Fortelný — klimatizace a tepelná čerpadla",
    description:
      "Servis, montáž a revize klimatizací a tepelných čerpadel v Praze. Přes 20 let praxe, platná oprávnění MŽP.",
    type: "website",
    locale: "cs_CZ",
  },
};

const znacky = [
  "Daikin",
  "Toshiba",
  "Mitsubishi",
  "Haier",
  "LG",
  "Samsung",
];

const sluzby = [
  {
    kod: "+21°C",
    nazev: "Montáž a prodej",
    text:
      "Vybereme jednotku podle velikosti místnosti a orientace oken, navrhneme vedení a nainstalujeme klimatizaci nebo tepelné čerpadlo tak, aby topilo i chladilo tiše a úsporně.",
  },
  {
    kod: "−5°C",
    nazev: "Servis a opravy",
    text:
      "Opravíme klimatizace, tepelná čerpadla i mobilní jednotky značek Daikin, Toshiba, Mitsubishi, LG, Haier i Samsung. Přijedeme po Praze i do okolí.",
  },
  {
    kod: "H₂O",
    nazev: "Čištění před sezónou",
    text:
      "Dezinfekce a čištění výparníku a filtrů před létem. Odstraníme pach, plísně i pyl, aby jednotka zase foukala čistý vzduch a méně brala.",
  },
  {
    kod: "✓",
    nazev: "Revize těsnosti",
    text:
      "Zákonné kontroly těsnosti chladicích okruhů podle certifikátu MŽP. Vystavíme protokol a upozorníme na únik chladiva dřív, než napáchá škodu.",
  },
];

const opravneni = [
  "Certifikát MŽP — oprávnění pro kontroly těsnosti chladicích zařízení",
  "Osvědčení pro instalaci tepelných čerpadel v rámci kotlíkové dotace EU",
  "Osvědčení pro instalaci tepelných čerpadel Toshiba Estia",
  "Oprávnění pro montáže a opravy elektrických zařízení",
];

export default function Page() {
  return (
    <main className="df">
      <header className="df-top">
        <div className="df-wordmark" aria-label="Daniel Fortelný">
          <span className="df-wm-1">FORTELNÝ</span>
          <span className="df-wm-2">klimatizace&nbsp;·&nbsp;Praha</span>
        </div>
        <a className="df-call" href="tel:+420777834900">
          +420&nbsp;777&nbsp;834&nbsp;900
        </a>
      </header>

      <section className="df-hero" aria-labelledby="df-hero-nadpis">
        <div className="df-hero-grid" aria-hidden="true">
          <div className="df-flow">
            <span className="df-arrow">↓</span>
            <span className="df-arrow">↓</span>
            <span className="df-arrow">↓</span>
          </div>
        </div>

        <p className="df-eyebrow">Prodej · servis · montáž od roku 1995</p>
        <h1 id="df-hero-nadpis" className="df-h1">
          <span className="df-word df-cool">CHLADÍ</span>
          <span className="df-word df-amp">i</span>
          <span className="df-word df-warm">TOPÍ</span>
        </h1>
        <p className="df-lede">
          Klimatizace a tepelná čerpadla pro pražské byty, kanceláře i provozovny.
          Jeden řemeslník, který jednotku navrhne, namontuje a pak se o ni roky
          stará — bez prostředníků.
        </p>

        <div className="df-hero-akce">
          <a className="df-btn df-btn-primary" href="tel:+420777834900">
            Zavolat a domluvit prohlídku
          </a>
          <a className="df-btn df-btn-ghost" href="mailto:info@klimatizace-fortelny.cz">
            Napsat na e-mail
          </a>
        </div>

        <ul className="df-znacky" aria-label="Servisované značky">
          {znacky.map((z) => (
            <li key={z}>{z}</li>
          ))}
        </ul>
      </section>

      <section className="df-sekce" aria-labelledby="df-sluzby-nadpis">
        <div className="df-sekce-hlava">
          <p className="df-eyebrow">Co pro vás udělám</p>
          <h2 id="df-sluzby-nadpis" className="df-h2">
            Od návrhu po revizi na jedné adrese
          </h2>
        </div>

        <div className="df-sluzby">
          {sluzby.map((s) => (
            <article className="df-karta" key={s.nazev}>
              <span className="df-karta-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="df-karta-nazev">{s.nazev}</h3>
              <p className="df-karta-text">{s.text}</p>
            </article>
          ))}
        </div>

        <figure className="df-obraz">
          <img
            src="/section-1.webp"
            alt="Nástěnná klimatizační jednotka nainstalovaná v interiéru"
            loading="lazy"
          />
          <figcaption>
            Instalace nástěnné jednotky — čisté vedení, žádné zbytečné lišty přes
            půl stěny.
          </figcaption>
        </figure>
      </section>

      <section className="df-duvera" aria-labelledby="df-duvera-nadpis">
        <div className="df-duvera-obraz">
          <img
            src="/section-2.webp"
            alt="Venkovní jednotka tepelného čerpadla u fasády rodinného domu"
            loading="lazy"
          />
        </div>

        <div className="df-duvera-text">
          <p className="df-eyebrow">Proč mě lidé volají znovu</p>
          <h2 id="df-duvera-nadpis" className="df-h2">
            Papíry, které u chladiva musí sedět
          </h2>
          <p className="df-duvera-lede">
            Práce s chladivem není hobby projekt. Všechno dělám na platná
            oprávnění, revize zapisuji do protokolu a k tepelným čerpadlům umím
            připravit podklady pro kotlíkovou dotaci.
          </p>

          <ul className="df-opravneni">
            {opravneni.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>

          <dl className="df-kontakt">
            <div>
              <dt>Dílna a adresa</dt>
              <dd>Kurzova 2376/19, 155 00 Praha 5</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420777834900">+420 777 834 900</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:info@klimatizace-fortelny.cz">
                  info@klimatizace-fortelny.cz
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
