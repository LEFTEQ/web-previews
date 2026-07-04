export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na nejcharakterističtějším: přesný čas doručení */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="IN TIME KURÝR, Praha">
            <span className="wordmark__in">IN</span>
            <span className="wordmark__tick" aria-hidden="true">·</span>
            <span className="wordmark__time">TIME</span>
            <span className="wordmark__unit">kurýr · Praha</span>
          </a>
          <ul className="nav__links">
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#o-nas">O nás</a></li>
            <li><a className="nav__cta" href="tel:+420220808284">220&nbsp;808&nbsp;284</a></li>
          </ul>
        </nav>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrus">Praha 9 · Klečákova · od roku 1990</p>
            <h1 className="hero__title">
              Zásilku po Praze<br/>
              vezmeme <em>hned</em>,
              <br/>doručíme <em>načas</em>.
            </h1>
            <p className="hero__lede">
              Kurýr vyjede během pár minut od hovoru. Dokumenty, vzorky,
              náhradní díl na servis — donese to člověk, ne dopravníkový pás.
              Čas je naše svědomí.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420220808284">Zavolat kurýra</a>
              <a className="btn btn--ghost" href="#sluzby">Co vozíme</a>
            </div>
          </div>

          {/* Signature: hodinový ciferník jako doručovací dispečink */}
          <aside className="clock" aria-label="Průběh doručení v čase">
            <div className="clock__ring" aria-hidden="true">
              <span className="clock__tick clock__tick--12"></span>
              <span className="clock__tick clock__tick--3"></span>
              <span className="clock__tick clock__tick--6"></span>
              <span className="clock__tick clock__tick--9"></span>
              <span className="clock__hand"></span>
            </div>
            <ol className="clock__log">
              <li><b>0 min</b><span>zavoláte, kurýr dostane adresu</span></li>
              <li><b>~10 min</b><span>vyzvednutí u vás</span></li>
              <li><b>napřímo</b><span>bez překladišť a čekání</span></li>
              <li><b>na místě</b><span>potvrzení převzetí zpět k vám</span></li>
            </ol>
          </aside>
        </div>

        <img className="hero__img" src="/hero.webp" alt="Kurýr IN TIME KURÝR se zásilkou v pražských ulicích" />
      </header>

      {/* SLUŽBY */}
      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrus">Co reálně vozíme</p>
          <h2 id="sluzby-h">Čtyři typy jízd, jedno pravidlo — dovézt to včas</h2>
        </div>

        <div className="cards">
          <article className="card">
            <span className="card__eta">do hodiny</span>
            <h3>Expresní kurýr po Praze</h3>
            <p>Přímá jízda z místa na místo. Smlouva k podpisu, klíče,
            náhradní díl — vyzvedneme a předáme napřímo, bez zastávek.</p>
          </article>
          <article className="card">
            <span className="card__eta">denně</span>
            <h3>Vnitrostátní rozvoz</h3>
            <p>Zásilky po celé ČR i pravidelné trasy. Sledujeme každou
            zakázku jménem, ne jen číslem.</p>
          </article>
          <article className="card">
            <span className="card__eta">mezinárodně</span>
            <h3>Letecká nákladní přeprava</h3>
            <p>Spěchá to za hranice? Zajistíme leteckou přepravu
            i mezinárodní zasílatelství — s vlastním zastoupením na Slovensku.</p>
          </article>
          <article className="card">
            <span className="card__eta">na míru</span>
            <h3>Stálé firemní trasy</h3>
            <p>Pravidelné svozy mezi pobočkami, do laboratoří či na úřady.
            Nastavíme rozpis a jezdíme podle něj.</p>
          </article>
        </div>

        <p className="sluzby__note">
          Ceník i palivový příplatek řešíme rovnou po telefonu — řekneme
          cenu předem, ne až na faktuře. <a href="tel:+420220808284">220&nbsp;808&nbsp;284</a>
        </p>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section id="o-nas" className="onas" aria-labelledby="onas-h">
        <div className="onas__media">
          <img src="/section-1.webp" alt="Zásilka připravená k vyzvednutí kurýrem" />
          <img className="onas__media2" src="/section-2.webp" alt="Kurýr předává zásilku adresátovi" />
        </div>
        <div className="onas__copy">
          <p className="eyebrus">Co byste o nás měli vědět</p>
          <h2 id="onas-h">První ryze česká kurýrní firma. Jezdíme od roku 1990.</h2>
          <p>
            Začínali jsme jako vůbec první soukromá česká kurýrní a spediční
            firma — vnitrostátní rozvoz, letecká přeprava i celní deklarace.
            V roce 2002 jsme rozšířili servis na Slovensko dceřinou firmou
            PROFI KURIER. Dnes se plně soustředíme na to, co umíme nejlíp:
            dostat zásilku včas tam, kam patří.
          </p>
          <dl className="facts">
            <div><dt>1990</dt><dd>rok, kdy jsme začali vozit</dd></div>
            <div><dt>Praha 9</dt><dd>Klečákova 4 — odsud dispečink řídí trasy</dd></div>
            <div><dt>ČR + SK</dt><dd>vlastní zastoupení na Slovensku</dd></div>
          </dl>
          <address className="contact">
            IN TIME KURÝR, spol. s r.o. · Klečákova 4, 190 00 Praha 9<br/>
            <a href="tel:+420220808284">220 808 284</a> ·{" "}
            <a href="mailto:agent@intimekuryr.cz">agent@intimekuryr.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
