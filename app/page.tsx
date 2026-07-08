import type { CSSProperties } from "react";

export default function Page() {
  const kroky = [
    {
      c: "01",
      t: "Zaměření a 3D návrh",
      d: "Přijedeme do Plzně i okolí, změříme koupelnu na milimetr a připravíme 3D návrh — uvidíte obklady, sprchový kout i umyvadlo dřív, než sundáme první kachličku.",
    },
    {
      c: "02",
      t: "Bourání a instalace",
      d: "Vybouráme staré jádro, uděláme nové rozvody vody a odpadů, elektriku a topení. Vše řešíme sami — nekoordinujete pět různých řemeslníků.",
    },
    {
      c: "03",
      t: "Obklady a zařízení",
      d: "Přesně srovnané spáry, sokl, sprcha bez prahu, zabudované baterie. Koupelnu předáme uklizenou a připravenou k používání.",
    },
  ];

  const dukazy = [
    { n: "15 let", p: "koupelen ve Vochově a v Plzni" },
    { n: "na klíč", p: "od bourání po poslední silikon" },
    { n: "1 parta", p: "instalatér, obkladač i elektrikář" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="AV Rekonstrukce, domů">
          <span className="wordmark__av">AV</span>
          <span className="wordmark__rest">Rekonstrukce</span>
          <span className="wordmark__loc">Plzeň · koupelny</span>
        </a>
        <a className="topbar__tel" href="tel:+420777089201">777&nbsp;089&nbsp;201</a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Rekonstrukce koupelen · Vochov u Plzně</p>
            <h1 id="hero-nadpis" className="hero__nadpis">
              Staré bytové jádro
              <span className="hero__zdur">ven.</span>
              <br />
              Nová koupelna
              <span className="hero__zdur hero__zdur--2">za tři týdny.</span>
            </h1>
            <p className="hero__perex">
              Přijedeme, vybouráme, uděláme rozvody, obklady i zařízení — a předáme
              hotovou koupelnu, kterou jste viděli v návrhu. Jedna parta, jedna
              zodpovědnost, žádné hádky mezi řemeslníky.
            </p>
            <div className="hero__akce">
              <a className="btn btn--primar" href="tel:+420777089201">
                Zavolat 777&nbsp;089&nbsp;201
              </a>
              <a className="btn btn--sekundar" href="#sluzby">
                Jak to probíhá
              </a>
            </div>
          </div>

          <figure className="hero__foto">
            <img
              src="/hero.webp"
              alt="Nově zrekonstruovaná koupelna s obklady a sprchovým koutem od AV Rekonstrukce"
              className="hero__img"
              width={900}
              height={1100}
            />
            <figcaption className="hero__stitek">
              <span className="hero__stitek-t">Koupelna na klíč</span>
              <span className="hero__stitek-d">obklady · sprcha · instalace · elektro</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow eyebrow--tmava">Postup od zaměření po klíče</p>
          <h2 id="sluzby-nadpis" className="sekce-nadpis">
            Tři fáze jedné rekonstrukce
          </h2>
          <p className="sekce-perex">
            Děláme kompletní i částečné rekonstrukce koupelen, bytových jader a WC.
            Každý krok si předem odsouhlasíte v návrhu — víte, co se bude dít a kdy.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k) => (
            <li className="krok" key={k.c}>
              <span className="krok__cislo" aria-hidden="true">
                {k.c}
              </span>
              <h3 className="krok__nadpis">{k.t}</h3>
              <p className="krok__text">{k.d}</p>
            </li>
          ))}
        </ol>

        <p className="sluzby__navic">
          K tomu zvládneme i zbytek bytu: kuchyňské linky a nábytek na míru,
          podlahy, malování a výpomoc při stavebním řízení či konzultaci se statikem.
        </p>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__grid">
          <figure className="onas__foto">
            <img
              src="/section-2.webp"
              alt="Detail realizace interiéru a obkladů od AV Rekonstrukce v Plzeňském kraji"
              className="onas__img"
              width={900}
              height={700}
            />
          </figure>

          <div className="onas__text">
            <p className="eyebrow eyebrow--tmava">Kdo vám koupelnu udělá</p>
            <h2 id="onas-nadpis" className="sekce-nadpis">
              Rodinná parta z&nbsp;Vochova, ne&nbsp;anonymní firma
            </h2>
            <p className="onas__perex">
              AV Rekonstrukce vede Andrea Vlčková. Koupelny a bytová jádra v Plzni
              a okolí děláme na klíč už patnáct let — od 3D návrhu přes bourání,
              vodu, elektriku a topení až po poslední spáru a silikon.
            </p>

            <ul className="dukazy">
              {dukazy.map((d) => (
                <li className="dukaz" key={d.n}>
                  <span className="dukaz__n">{d.n}</span>
                  <span className="dukaz__p">{d.p}</span>
                </li>
              ))}
            </ul>

            <blockquote className="citace">
              „Přišli s návrhem, dodrželi termín i cenu a po sobě uklidili.
              Koupelnu jsme užívali den po předání.“
              <cite className="citace__kdo">— zákaznice z&nbsp;Plzně-Skvrňan</cite>
            </blockquote>

            <div className="onas__kontakt">
              <a className="btn btn--primar" href="tel:+420777089201">
                Domluvit zaměření
              </a>
              <a className="onas__mail" href="mailto:info@avinterier.cz">
                info@avinterier.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused: CSSProperties = {};
