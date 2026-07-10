import type { CSSProperties } from "react";

export default function Page() {
  const pozemni = [
    { c: "Výstavba", t: "Domy a byty", d: "Nové rodinné domy i bytové jednotky od základů po střechu." },
    { c: "Rekonstrukce", t: "Domy a byty", d: "Přestavby a modernizace stávajících objektů na míru." },
    { c: "Renovace", t: "Zateplení objektů", d: "Fasády a zateplení, které sníží účty za vytápění." },
    { c: "Řemeslo", t: "Klempířské práce", d: "Okapy, oplechování a klempířské detaily střech." },
    { c: "Řemeslo", t: "Zámečnické práce", d: "Zábradlí, mříže a kovové konstrukce na zakázku." },
    { c: "Bourání", t: "Demoliční práce", d: "Bezpečné demolice s odvozem a likvidací suti." }
  ];

  const dopravni = [
    { t: "Zpevněné cesty a komunikace", d: "Výstavba příjezdových cest, chodníků a zpevněných ploch se zvláštním využitím." },
    { t: "Rekonstrukce komunikací", d: "Obnova povrchů, podkladních vrstev a odvodnění stávajících cest." }
  ];

  const site = [
    { t: "Vodovody", d: "Přivést tekoucí vodu je základ každé obytné stavby. Není to ale nic jednoduchého — proto to necháme na odbornících." },
    { t: "Kanalizace", d: "Odvést splašky pryč z objektu je nezbytnost. Kanalizaci, která vydrží desetiletí, umíme udělat správně." },
    { t: "Drobná řemesla", d: "To, čemu se lidově říká „hodinový manžel“. Malé práce, které často vídáme odbyté — u nás je uděláme pořádně." }
  ];

  const reference = [
    { t: "Výkop sond — vodovod", d: "Před pokládkou provizorního potrubí jsme zajistili výkop kontrolních sond." },
    { t: "Přeložení zámkové dlažby", d: "Odstranili jsme původní dlažbu a položili novou včetně betonových žlabů." },
    { t: "Opěrné zdi", d: "Demolice původních stěn kolem příjezdové cesty a stavba nových opěrných zdí." },
    { t: "Mnichovská omítka na RD", d: "Na dům ve Vaňově jsme nanesli mnichovskou omítku, položili plovoucí podlahu a udělali drobné opravy." }
  ];

  return (
    <main className="pg">
      <header className="top">
        <a className="brand" href="#" aria-label="Sárközi s.r.o. — stavební firma, Praha">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-txt">
            <span className="brand-name">SÁRKÖZI</span>
            <span className="brand-sub">stavební firma · Praha</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#pozemni">Pozemní stavby</a>
          <a href="#dopravni">Dopravní stavby</a>
          <a href="#sluzby">Ostatní služby</a>
          <a href="#reference">Reference</a>
        </nav>
      </header>

      <section className="hero">
        <img className="hero-img" src="/hero.webp" alt="Realizace stavební firmy Sárközi — rozestavěná stavba v Praze" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-body">
          <p className="hero-eyebrow">Praha · pozemní a dopravní stavby</p>
          <h1 className="hero-title">
            Postavíme to<br />
            <span className="hl">od výkopu</span> po klíč.
          </h1>
          <p className="hero-lede">
            Domy, komunikace, vodovody i kanalizace. Naše slovo platí — realizace probíhá hladce a podmínky
            pro investora jsou férové. Zkuste to s námi.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#kontakt">Poptat stavbu</a>
            <a className="btn ghost" href="#reference">Prohlédnout realizace</a>
          </div>
        </div>
        <dl className="hero-facts">
          <div><dt>Výkop → klíč</dt><dd>vše pod jednou firmou</dd></div>
          <div><dt>Investorské podmínky</dt><dd>férové a jasné</dd></div>
          <div><dt>Sídlo</dt><dd>Korunní 108, Praha</dd></div>
        </dl>
      </section>

      <section className="sec" id="pozemni">
        <div className="sec-head">
          <p className="kicker">01 — Pozemní stavby</p>
          <h2>Od základové desky<br />po hotový dům</h2>
          <p className="sec-lede">
            Nová výstavba, rekonstrukce i řemeslné detaily. Držíme celý řetězec prací, takže se nemusíte
            starat o koordinaci party firem.
          </p>
        </div>
        <ul className="grid">
          {pozemni.map((it) => (
            <li className="card" key={it.t}>
              <span className="card-cat">{it.c}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec band" id="dopravni">
        <div className="band-media">
          <img src="/section-1.webp" alt="Pokládka zámkové dlažby a betonových žlabů na příjezdové komunikaci" />
        </div>
        <div className="band-body">
          <p className="kicker light">02 — Dopravní stavby</p>
          <h2>Cesty, chodníky<br />a zpevněné plochy</h2>
          <p className="sec-lede">
            Specializujeme se i na dopravní komunikace a plochy se zvláštním využitím — od podkladu přes
            odvodnění po finální povrch.
          </p>
          <ul className="band-list">
            {dopravni.map((it) => (
              <li key={it.t}>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" id="sluzby">
        <div className="sec-head">
          <p className="kicker">03 — Ostatní služby</p>
          <h2>Voda, kanalizace<br />a drobná řemesla</h2>
        </div>
        <ul className="grid three">
          {site.map((it) => (
            <li className="card plain" key={it.t}>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec refs" id="reference">
        <div className="refs-media">
          <img src="/section-2.webp" alt="Dokončená realizace stavební firmy Sárközi" />
        </div>
        <div className="refs-body">
          <p className="kicker light">04 — Naše reference</p>
          <h2>Co jsme<br />postavili</h2>
          <ol className="reflist">
            {reference.map((it, i) => (
              <li key={it.t}>
                <span className="refn">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{it.t}</h3>
                  <p>{it.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
