export default function Page() {
  const obce = [
    "Stěžery", "Hřibsko", "Libčany", "Nechanice", "Dohalice", "Kunčice",
    "Mokrovousy", "Sadová", "Těchlovice", "Lodín", "Radíkovice",
    "Dolní Přím", "Mžany", "Boharyně", "Hněvčeves", "Sovětice",
  ];

  return (
    <main className="kz">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* štětka na komín – vlastní znak */}
              <svg viewBox="0 0 40 40" width="34" height="34" role="img" aria-hidden="true">
                <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="20" y1="3" x2="20" y2="9" />
                  <line x1="20" y1="31" x2="20" y2="37" />
                  <line x1="3" y1="20" x2="9" y2="20" />
                  <line x1="31" y1="20" x2="37" y2="20" />
                  <line x1="8" y1="8" x2="12.2" y2="12.2" />
                  <line x1="27.8" y1="27.8" x2="32" y2="32" />
                  <line x1="32" y1="8" x2="27.8" y2="12.2" />
                  <line x1="12.2" y1="27.8" x2="8" y2="32" />
                </g>
                <circle cx="20" cy="20" r="3.5" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              KOMINICTVÍ<em>ZASADIL</em>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Čistý komín.</span>
            <span className="line line-2">Klidná zima.</span>
          </h1>

          <p className="hero-lead">
            Kontroly, čištění a vložkování komínů v&nbsp;Hradci Králové a&nbsp;na Nechanicku.
            Přijedeme, vyčistíme, vystavíme zprávu o&nbsp;kontrole — vše při jedné návštěvě.
          </p>

          <div className="hero-actions">
            <a className="btn btn-ember" href="tel:+420777688792">Zavolat: 777 688 792</a>
            <a className="btn btn-ghost" href="#sluzby">Co všechno děláme</a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Kontrola spalinové cesty</dt>
              <dd>1× ročně ze zákona</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Hradec Králové + Nechanicko</dd>
            </div>
            <div>
              <dt>Sídlíme</dt>
              <dd>Hřibsko 47, Stěžery</dd>
            </div>
          </dl>
        </div>

        {/* Signature: komínový průduch — svislá šachta se štětkou, spouštěná na laně */}
        <div className="flue" aria-hidden="true">
          <div className="flue-shaft">
            <span className="brick b1" />
            <span className="brick b2" />
            <span className="brick b3" />
            <span className="brick b4" />
            <span className="brick b5" />
            <span className="brick b6" />
            <div className="flue-rope" />
            <div className="flue-brush">
              <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
                <g stroke="#1B1F26" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="32" y1="4" x2="32" y2="16" />
                  <line x1="32" y1="48" x2="32" y2="60" />
                  <line x1="4" y1="32" x2="16" y2="32" />
                  <line x1="48" y1="32" x2="60" y2="32" />
                  <line x1="12" y1="12" x2="20.5" y2="20.5" />
                  <line x1="43.5" y1="43.5" x2="52" y2="52" />
                  <line x1="52" y1="12" x2="43.5" y2="20.5" />
                  <line x1="20.5" y1="43.5" x2="12" y2="52" />
                  <line x1="32" y1="8" x2="38" y2="14" opacity="0.5" />
                  <line x1="32" y1="56" x2="26" y2="50" opacity="0.5" />
                </g>
                <circle cx="32" cy="32" r="14" fill="none" stroke="#1B1F26" strokeWidth="2.5" />
                <circle cx="32" cy="32" r="6" fill="#E8622C" />
              </svg>
            </div>
          </div>
          <div className="flue-cap" />
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Od kontroly po nový komín</p>
          <h2 id="sluzby-h">Řemeslo od střechy až ke&nbsp;kamnům</h2>
          <p className="section-lead">
            Většina zákazníků nás volá kvůli povinné roční kontrole. Ale komín umíme
            i navrhnout, postavit a dole na něj napojit krb nebo kachlová kamna.
          </p>
        </div>

        <div className="sluzby-grid">
          <article className="karta karta-hlavni">
            <h3>Kontrola a čištění komínu</h3>
            <p>
              Vyčistíme průduch, zkontrolujeme spalinovou cestu a na místě vystavíme
              zprávu o&nbsp;kontrole pro pojišťovnu. U&nbsp;kotlů na pevná paliva je kontrola
              povinná jednou ročně — ohlídáme termín za vás.
            </p>
            <p className="karta-pozn">Nejčastější zakázka · hotovo do hodiny</p>
          </article>

          <article className="karta">
            <h3>Vložkování komínů</h3>
            <p>
              Starý zděný komín dostane nerezovou vložku a je bezpečný i pro nový kotel
              nebo krbová kamna. Bez bourání, obvykle za jeden den.
            </p>
          </article>

          <article className="karta">
            <h3>Návrh a stavba komínů</h3>
            <p>
              Stavíme zděné systémové komíny i nerezové tříplášťové. Navrhneme průměr
              a tah přesně pro váš spotřebič, komínové systémy i prodáváme.
            </p>
          </article>

          <article className="karta">
            <h3>Krby a kamna na míru</h3>
            <p>
              Zděné, pískovcové i kachlové krby, krbové vložky teplovzdušné
              i s&nbsp;výměníkem, kuchyňská kamna. Postavíme přesně podle vašeho pokoje —
              a rovnou napojíme na komín, který známe.
            </p>
            <p className="karta-pozn">Kamnářství pod jednou střechou</p>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA / REGION ===================== */}
      <section className="region" aria-labelledby="region-h">
        <div className="region-text">
          <p className="eyebrow eyebrow-light">Kominík od vedle</p>
          <h2 id="region-h">Na Nechanicku nás znáte ze&nbsp;střech</h2>
          <p>
            Roman Zasadil, kominík a kamnář ze&nbsp;Stěžer. Ke komínům v&nbsp;okolních vesnicích
            jezdíme roky — známe místní domy, staré zděné průduchy i nové kotelny.
            Když se něco najde, řekneme rovnou, co to znamená a kolik bude oprava stát.
          </p>
          <ul className="region-body">
            <li>
              <strong>Termín, který platí.</strong> Domluvíme se telefonicky na konkrétní
              den a hodinu — nebudete čekat doma celé dopoledne.
            </li>
            <li>
              <strong>Zpráva o kontrole na místě.</strong> Doklad pro pojišťovnu dostanete
              hned, ne poštou za týden.
            </li>
            <li>
              <strong>Jedno řemeslo, celá cesta spalin.</strong> Od topeniště po komínovou
              hlavu — nemusíte shánět dva řemeslníky.
            </li>
          </ul>
          <p className="region-kontakt">
            <a className="btn btn-ember" href="tel:+420777688792">Domluvit termín: 777 688 792</a>
            <a className="mail" href="mailto:info@3-k.cz">info@3-k.cz</a>
          </p>
        </div>

        <div className="region-mapa">
          <h3>Kam pravidelně jezdíme</h3>
          <ul className="obce">
            <li className="obec obec-hlavni">Hradec Králové</li>
            {obce.map((o) => (
              <li className="obec" key={o}>{o}</li>
            ))}
            <li className="obec obec-pozn">…a další obce po domluvě</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
