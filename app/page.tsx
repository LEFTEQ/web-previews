import type { CSSProperties } from "react";

const d = (n: number): CSSProperties => ({ ["--d" as string]: n });

export default function Page() {
  return (
    <main className="page">
      {/* ---------------- HERO: the laid field ---------------- */}
      <section className="hero" aria-labelledby="h1">
        <div className="cell c-mark" style={d(0)}>
          <p className="wm">
            ARCH<span>TILES</span>
          </p>
          <p className="wm-sub">Keramika &middot; Praha &middot; od roku 1998</p>
        </div>

        <div className="cell c-head" style={d(1)}>
          <p className="eyebrow">Showroom obkladů, dlažeb a mozaik</p>
          <h1 id="h1" className="display">
            Udáváme trendy
            <br />
            světa keramiky
          </h1>
          <span className="joint-line" aria-hidden="true" />
        </div>

        <div className="cell c-lede" style={d(2)}>
          <p className="lede">
            Od dokonalé Mutiny po tradiční Atlas Concorde a Casalgrande Padana —
            v pražském showroomu ARCHTILES vybíráme obklady, dlažby a mozaiky, které
            roky nezevšední. Každou zakázku vedeme od prvního vzorku po poslední spáru.
          </p>
        </div>

        <a className="cell c-cta" href="tel:+420777111222" style={d(3)}>
          <span className="cta-eyebrow">Jen na rezervaci</span>
          <span className="cta-main">Rezervovat showroom</span>
          <span className="cta-meta">Ukázková 123, Praha &middot; +420&nbsp;777&nbsp;111&nbsp;222</span>
        </a>

        <div className="cell swatch sw-celadon" style={d(2)}>
          <span className="sw-name">Celadon</span>
          <span className="sw-code">glaze &middot; #94a99b</span>
        </div>
        <div className="cell swatch sw-cobalt" style={d(3)}>
          <span className="sw-name">Cobalt-oxid</span>
          <span className="sw-code">pigment &middot; #234a86</span>
        </div>
        <div className="cell swatch sw-biscuit" style={d(4)}>
          <span className="sw-name">Biscuit</span>
          <span className="sw-code">unglazed &middot; #c8c0b3</span>
        </div>
        <div className="cell c-note" style={d(5)}>
          <p>
            Věnujeme se vám individuálně, proto showroom otevíráme jen na
            potvrzený termín — v klidu a bez fronty.
          </p>
        </div>
      </section>

      {/* ---------------- SEKCE 1: nabídka ---------------- */}
      <section className="svc" aria-labelledby="h2a">
        <div className="cell s-head">
          <p className="eyebrow">Co u nás vyberete</p>
          <h2 id="h2a" className="heading">Keramika pro každý detail</h2>
        </div>
        <div className="cell s-intro">
          <p>
            Nejsme sklad s pár paletami — jsme kurátoři. Zastupujeme desítky
            časem prověřených výrobců a k obkladu vždy doporučíme i spárovku,
            lištu a formát, který sedne přesně k vašemu prostoru.
          </p>
        </div>

        <article className="cell swatch tile t-celadon">
          <span className="tile-tag">glaze &middot; celadon</span>
          <h3 className="tile-name">Obklady a&nbsp;dlažby</h3>
          <p className="tile-desc">
            Do koupelen, kuchyní i&nbsp;na fasády. Velkoformáty, imitace kamene
            a&nbsp;betonu, mrazuvzdorné série na terasy.
          </p>
        </article>

        <article className="cell swatch tile t-cobalt">
          <span className="tile-tag">pigment &middot; cobalt</span>
          <h3 className="tile-name">Mozaiky</h3>
          <p className="tile-desc">
            Skleněné i&nbsp;keramické mozaiky pro sprchové kouty, obklady za
            linku a&nbsp;detaily, které rozhodují.
          </p>
        </article>

        <article className="cell swatch tile t-biscuit">
          <span className="tile-tag">unglazed &middot; biscuit</span>
          <h3 className="tile-name">Terazzo</h3>
          <p className="tile-desc">
            Aktuálně nejžádanější dlažby terazzo — napodobují litou italskou
            podlahu s&nbsp;kamínky v&nbsp;cementu. Naposledy na Vinohradech.
          </p>
        </article>

        <article className="cell swatch tile t-graphite">
          <span className="tile-tag">grout &middot; graphite</span>
          <h3 className="tile-name">Značky</h3>
          <p className="tile-desc">
            Mutina, Atlas Concorde, Casalgrande Padana a&nbsp;další prověření
            výrobci, u&nbsp;kterých ručíme za kvalitu i&nbsp;dostupnost.
          </p>
        </article>
      </section>

      {/* ---------------- SEKCE 2: lidé / důvěra ---------------- */}
      <section className="team" aria-labelledby="h2b">
        <div className="cell t-head">
          <p className="eyebrow">Náš tým v&nbsp;Praze</p>
          <h2 id="h2b" className="heading">Lidé, kteří vám s&nbsp;výběrem pomohou</h2>
        </div>
        <div className="cell t-note">
          <p>
            Showroom otevíráme jen na potvrzenou rezervaci — díky tomu se vám
            věnujeme naplno a&nbsp;v&nbsp;klidu. Napište na
            {" "}<a href="mailto:info@example.cz">info@example.cz</a> nebo
            zavolejte na <a href="tel:+420777111222">+420&nbsp;777&nbsp;111&nbsp;222</a>,
            termín potvrdíme. Návštěvám bez objednání se bohužel věnovat nemůžeme.
          </p>
        </div>

        <article className="cell member m1">
          <h3 className="m-name">Petr Kunt</h3>
          <p className="m-role">Jednatel</p>
          <p className="m-bio">
            Duše ARCHTILES. Dává všemu směr; bez něj by firma nebyla tím, čím je dnes.
          </p>
        </article>
        <article className="cell member m2">
          <h3 className="m-name">Tomáš Bartošík</h3>
          <p className="m-role">Jednatel</p>
          <p className="m-bio">
            Cit pro obchod, který je férový ke všem stranám. Na co Tomáš sáhne, to se daří.
          </p>
        </article>
        <article className="cell member m3">
          <h3 className="m-name">Lucie Pucková</h3>
          <p className="m-role">Architects support</p>
          <p className="m-bio">
            Dokonalost, kterou vyžaduje po sobě i&nbsp;po ostatních. Klient je u&nbsp;ní
            v&nbsp;těch nejlepších rukou.
          </p>
        </article>
        <article className="cell member m4">
          <h3 className="m-name">David Šoustek</h3>
          <p className="m-role">Architects support</p>
          <p className="m-bio">
            Jeden z&nbsp;nejzkušenějších odborníků na trhu. Nekompromisní preciznost —
            a&nbsp;jedinečný smysl pro humor.
          </p>
        </article>
      </section>
    </main>
  );
}
