export default function Page() {
  return (
    <main className="topmain">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="hero-scrim" />
        </div>

        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="PJ Bohemia servis — úvod">
            <span className="wm-mono">PJ</span>
            <span className="wm-rest">Bohemia&nbsp;servis</span>
            <span className="wm-sub">topenářství · Plzeň</span>
          </a>
          <a className="topbar-call" href="tel:+420602479528">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="currentColor"><path d="M3.4 1.2 5 1c.4 0 .8.2 1 .6l1.1 2.2c.2.4.1.9-.2 1.2l-.9.9c.6 1.3 1.7 2.4 3 3l.9-.9c.3-.3.8-.4 1.2-.2l2.2 1.1c.4.2.6.6.6 1l-.2 1.6c-.1.7-.7 1.2-1.4 1.2C6.6 12.7 3.3 9.4 3.3 3.6c0-.1 0-.2.1-.3 0-.7.5-1.3 1.2-1.4Z" transform="translate(-1 0)"/></svg>
            602&nbsp;479&nbsp;528
          </a>
        </nav>

        <div className="hero-inner">
          <p className="hero-kicker">
            <span className="flame" aria-hidden="true" />
            Topenářství, voda a plyn — Plzeň a okolí
          </p>
          <h1 className="hero-title">
            Teplo v domě je<br />
            <em>řemeslo</em>, ne náhoda.
          </h1>
          <p className="hero-lede">
            Navrhneme, namontujeme a zprovozníme vytápění vašeho domu — od kotle
            přes tepelné čerpadlo až po poslední radiátor. Pavel Jakubčík a jeho
            parta to v Plzni dělají přes 25 let.
          </p>
          <div className="hero-actions">
            <a className="btn btn-fire" href="tel:+420602479528">Zavolat: 602 479 528</a>
            <a className="btn btn-ghost" href="mailto:pjakubcik@seznam.cz">Napsat e‑mail</a>
          </div>

          {/* signature: manometr — provozní stupnice místo šablonových počítadel */}
          <ul className="gauge-strip" aria-label="Firma v číslech">
            <li>
              <span className="gauge-dial" aria-hidden="true"><i style={{ transform: "rotate(52deg)" }} /></span>
              <strong>25+ let</strong>
              <span>v oboru od r. 1998</span>
            </li>
            <li>
              <span className="gauge-dial" aria-hidden="true"><i style={{ transform: "rotate(20deg)" }} /></span>
              <strong>360+ zdrojů</strong>
              <span>namontovaných kotlů a čerpadel</span>
            </li>
            <li>
              <span className="gauge-dial" aria-hidden="true"><i style={{ transform: "rotate(78deg)" }} /></span>
              <strong>700+ zakázek</strong>
              <span>dokončených a odzkoušených</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SEKCE 1: SLUŽBY / OKRUHY ===== */}
      <section className="okruhy" aria-labelledby="okruhy-h">
        <div className="section-head">
          <p className="eyebrow"><span className="pipe-dot" aria-hidden="true" />Tři okruhy jednoho řemesla</p>
          <h2 id="okruhy-h">Topení, voda, plyn.<br />Všechno pod jednou střechou.</h2>
          <p className="section-lede">
            Nemusíte shánět tři firmy. Rozvody vedeme jako jeden systém — proto u nás
            služby značíme jako okruhy, stejně jako je vedeme ve vašem domě.
          </p>
        </div>

        <div className="okruh-grid">
          <article className="okruh okruh-topeni">
            <div className="okruh-tag">
              <span className="okruh-line" aria-hidden="true" />
              <span className="okruh-label">Okruh&nbsp;A · přívod 65&nbsp;°C</span>
            </div>
            <h3>Topenářské práce</h3>
            <p>
              Pomůžeme vybrat tepelný zdroj, který dává u vašeho domu smysl —
              tepelné čerpadlo, plynový kotel nebo kotel na biomasu. Navrhneme
              rozvody i tělesa, namontujeme, odzkoušíme. Starý kotel odvezeme
              a zlikvidujeme.
            </p>
            <ul>
              <li>Tepelná čerpadla a solární systémy — s certifikací na montáž</li>
              <li>Ústřední topení: nové instalace i rekonstrukce</li>
              <li>Opravy rozvodů a těles, svařování autogenem</li>
            </ul>
          </article>

          <article className="okruh okruh-voda">
            <div className="okruh-tag">
              <span className="okruh-line" aria-hidden="true" />
              <span className="okruh-label">Okruh&nbsp;B · studená / teplá</span>
            </div>
            <h3>Instalatérské práce</h3>
            <p>
              Domovní přípojky a rozvody vody i kanalizace včetně materiálu.
              Projdeme s vámi požadavky, navrhneme praktické a cenově rozumné
              řešení, vybereme armatury i zařizovací předměty. Vše namontujeme
              a tlakově odzkoušíme.
            </p>
            <ul>
              <li>Rozvody vody a kanalizace v domě i bytě</li>
              <li>Domovní přípojky včetně dodávky materiálu</li>
              <li>Výběr armatur a zařizovacích předmětů na míru</li>
            </ul>
          </article>

          <article className="okruh okruh-plyn">
            <div className="okruh-tag">
              <span className="okruh-line" aria-hidden="true" />
              <span className="okruh-label">Okruh&nbsp;C · 2,0&nbsp;kPa</span>
            </div>
            <h3>Plynařské práce</h3>
            <p>
              Kompletní plynofikace rodinného domu od přípojky po spotřebič.
              Montáže a opravy plynovodních rozvodů v plastu, oceli i mědi,
              včetně svářečských prací autogenem a revizní zkoušky těsnosti.
            </p>
            <ul>
              <li>Plynové přípojky a rozvody — plast, ocel, měď</li>
              <li>Montáže plynových kotlů s certifikací</li>
              <li>Opravy a zkoušky těsnosti rozvodů</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <figure className="duvera-media">
            <img
              src="/section-1.webp"
              alt="Topenář při montáži kotelny — měděné rozvody a armatury"
            />
            <figcaption>
              Kotelna rodinného domu, Plzeň‑Skvrňany — kompletní výměna zdroje včetně rozvodů.
            </figcaption>
          </figure>

          <div className="duvera-body">
            <p className="eyebrow eyebrow-light"><span className="pipe-dot" aria-hidden="true" />Proč zrovna my</p>
            <h2 id="duvera-h">Řemeslo, které v Plzni topí od roku 1998</h2>
            <p>
              PJ Bohemia servis vznikla v roce 2015 jako pokračování firmy
              „Instalatérství, topenářství Pavel Jakubčík Plzeň“. Jméno na faktuře
              je pořád stejné jako jméno člověka, který k vám přijede — a to je
              v tomhle oboru ta nejlepší záruka.
            </p>

            <dl className="duvera-fakta">
              <div>
                <dt>Certifikace</dt>
                <dd>Prodej a montáž solárních systémů, tepelných čerpadel, kotlů na plyn i biomasu.</dd>
              </div>
              <div>
                <dt>Rozsah zakázek</dt>
                <dd>Rodinné a bytové domy, komerční i výrobní objekty — od přípojky po kotelnu.</dd>
              </div>
              <div>
                <dt>Kde nás potkáte</dt>
                <dd>Domažlická 830/200, 318 00 Plzeň. Jezdíme po celém Plzeňsku.</dd>
              </div>
            </dl>

            <blockquote className="duvera-citat">
              <p>
                „Doporučení spokojených zákazníků je ta nejlepší reference, kterou
                můžeme získat. Proto děláme svou práci svědomitě a poctivě —
                a proto se k nám lidé vracejí přes dvacet pět let.“
              </p>
              <cite>Pavel Jakubčík, jednatel</cite>
            </blockquote>

            <div className="duvera-kontakty">
              <a href="tel:+420602479528">+420 602 479 528</a>
              <a href="tel:+420601345099">+420 601 345 099</a>
              <a href="mailto:pjakubcik@seznam.cz">pjakubcik@seznam.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
