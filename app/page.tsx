export default function Page() {
  return (
    <main className="vn">
      {/* ===== HERO ===== */}
      <header className="vn-hero">
        <div className="vn-hero-inner">
          <div className="vn-topbar">
            <span className="vn-wordmark" aria-label="Penzion Vion">
              VION<span className="vn-wordmark-dot">·</span>
              <span className="vn-wordmark-sub">penzion &amp; restaurace</span>
            </span>
            <span className="vn-topbar-loc">Plzeň — Křimice</span>
          </div>

          <div className="vn-hero-grid">
            <div className="vn-hero-copy">
              <p className="vn-eyebrow vn-rise" style={{ animationDelay: "0.05s" }}>
                Rodinný penzion od roku 1994
              </p>
              <h1 className="vn-h1">
                <span className="vn-rise" style={{ animationDelay: "0.15s" }}>Na cestách</span>
                <span className="vn-rise vn-h1-em" style={{ animationDelay: "0.28s" }}>jako doma.</span>
              </h1>
              <p className="vn-lede vn-rise" style={{ animationDelay: "0.42s" }}>
                22 útulných pokojů a stylová restaurace s poctivou kuchyní
                v klidné části Plzně. Deset minut od centra, pět minut od dálnice D5.
              </p>
              <div className="vn-hero-actions vn-rise" style={{ animationDelay: "0.55s" }}>
                <a className="vn-btn" href="tel:+420377822582">Zavolat 377 822 582</a>
                <a className="vn-btn vn-btn-ghost" href="mailto:penzion@vion.cz">
                  Napsat na penzion@vion.cz
                </a>
              </div>
            </div>

            {/* Signature: klíčenka pokoje — mosazný štítek, jak visí na recepci */}
            <div className="vn-keyboard vn-rise" style={{ animationDelay: "0.35s" }} aria-hidden="true">
              <div className="vn-keyboard-rail" />
              <div className="vn-keytags">
                {["01", "07", "12", "22"].map((n, i) => (
                  <div className="vn-keytag" key={n} style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                    <span className="vn-keytag-hole" />
                    <span className="vn-keytag-num">{n}</span>
                  </div>
                ))}
              </div>
              <p className="vn-keyboard-note">22 pokojů · klíč dostanete na recepci do 22:00</p>
            </div>
          </div>

          <div className="vn-hero-strip" role="list" aria-label="Rychlá fakta">
            <span role="listitem"><strong>22</strong> pokojů — ubytujeme i celou firmu</span>
            <span role="listitem"><strong>2–3</strong> lůžkové pokoje s vlastní koupelnou</span>
            <span role="listitem"><strong>Metalfest</strong> — na červen 2026 rezervujte včas</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: Ubytování & restaurace ===== */}
      <section className="vn-section" aria-labelledby="sluzby">
        <div className="vn-container">
          <p className="vn-eyebrow">Co u nás najdete</p>
          <h2 className="vn-h2" id="sluzby">Postel, večeře a klid na dobrou noc</h2>

          <div className="vn-cards">
            <article className="vn-card">
              <div className="vn-card-tag"><span className="vn-card-tag-hole" />pokoj</div>
              <h3 className="vn-h3">Ubytování</h3>
              <p>
                Dvou- a třílůžkové pokoje zařízené tak, abyste se cítili jako u sebe doma —
                vlastní koupelna, Wi-Fi, parkování přímo u penzionu. Kapacita 22 pokojů
                stačí i pro středně velkou firmu nebo svatební hosty najednou.
              </p>
              <ul className="vn-list">
                <li>Snídaně v restauraci hned pod pokojem</li>
                <li>Parkování v uzavřeném dvoře zdarma</li>
                <li>Dlouhodobé pobyty pro firmy a montéry</li>
              </ul>
            </article>

            <article className="vn-card">
              <div className="vn-card-tag"><span className="vn-card-tag-hole" />kuchyně</div>
              <h3 className="vn-h3">Restaurace</h3>
              <p>
                Vyhlášená kuchyně s poctivými porcemi — česká klasika, denní menu
                a plzeňské pivo. Stylová restaurace se salónkem hostí svatby, rauty,
                firemní večírky i oslavy sportovních vítězství.
              </p>
              <ul className="vn-list">
                <li>Denní menu ve všední dny od 11:00</li>
                <li>Salónek pro uzavřenou společnost do 40 osob</li>
                <li>Svatby a rauty připravíme na klíč</li>
              </ul>
            </article>

            <article className="vn-card">
              <div className="vn-card-tag"><span className="vn-card-tag-hole" />akce</div>
              <h3 className="vn-h3">Firemní akce a oslavy</h3>
              <p>
                Nová přístavba a zázemí penzionu zvládne školení, teambuilding
                i rodinnou oslavu. Ubytování, jídlo a prostor domluvíte na jednom místě
                — s lidmi, které znáte jménem.
              </p>
              <ul className="vn-list">
                <li>Ubytování + rautové menu v jednom balíčku</li>
                <li>Projektor a klidný salónek na jednání</li>
                <li>Termíny na rok 2026 rezervujeme už teď</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: Důvěra / proč Vion ===== */}
      <section className="vn-section vn-section-dark" aria-labelledby="duvera">
        <div className="vn-container">
          <div className="vn-trust-grid">
            <div className="vn-trust-copy">
              <p className="vn-eyebrow vn-eyebrow-light">Proč se k nám hosté vracejí</p>
              <h2 className="vn-h2" id="duvera">
                Řadu let sem jezdí hosté,<br />kteří vědí, proč.
              </h2>
              <p className="vn-trust-lede">
                Vion je rodinný podnik v Plzni-Křimicích. Žádná recepce s cedulkou
                „hned jsem zpět" — u nás vás přivítá někdo, kdo tu doopravdy je.
                Vyhledávají nás štamgasti, firmy na montážích i známé osobnosti,
                a hlavně lidé, kteří chtějí dobře spát a dobře jíst.
              </p>

              <div className="vn-quotes">
                <blockquote className="vn-quote">
                  <p>
                    „Jezdíme sem s partou na Metalfest už poněkolikáté. Ráno pořádná
                    snídaně, večer plzeňské — a paní domácí si nás pamatuje jménem."
                  </p>
                  <cite>— Martin, host z Brna</cite>
                </blockquote>
                <blockquote className="vn-quote">
                  <p>
                    „Ubytovali jsme tu 18 lidí z firmy na tři týdny. Vše domluvené
                    jedním telefonátem, večeře na stole, parkování ve dvoře."
                  </p>
                  <cite>— Petra, koordinátorka montáží</cite>
                </blockquote>
              </div>
            </div>

            <aside className="vn-board" aria-label="Aktuality a praktické informace">
              <h3 className="vn-board-title">Z nástěnky u recepce</h3>
              <div className="vn-board-item">
                <span className="vn-board-date">červen 2026</span>
                <p><strong>Metalfest 5.–7. 6. 2026</strong> — pokoje na festivalový
                víkend mizí rychle. Ozvěte se co nejdřív.</p>
              </div>
              <div className="vn-board-item">
                <span className="vn-board-date">celoročně</span>
                <p><strong>Dostupnost pokojů</strong> ověříte na čísle
                {" "}<a href="tel:+420377822582">377 822 582</a> nebo e-mailem
                {" "}<a href="mailto:penzion@vion.cz">penzion@vion.cz</a>.</p>
              </div>
              <div className="vn-board-item">
                <span className="vn-board-date">kde nás najdete</span>
                <p><strong>Plzeň — Křimice</strong>, klidná čtvrť na západním okraji
                města. Do centra 10 minut autem, sjezd z D5 za rohem.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
