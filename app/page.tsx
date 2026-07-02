export default function Page() {
  return (
    <main className="ord">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Brilant Optik">
            <span className="wm-brilant">BRILANT</span>
            <span className="wm-optik">optik</span>
          </div>
          <a className="hero-phone" href="tel:+420466753235">
            <span className="phone-label">Objednání</span>
            <span className="phone-num">466 753 235</span>
          </a>
        </div>

        <div className="hero-body">
          {/* Signature: optotypová pyramida — zmenšující se řádky jako na Snellenově tabuli */}
          <div className="optotype" aria-hidden="true">
            <span className="ot-row ot-1">OČNÍ</span>
            <span className="ot-row ot-2">ORDINACE</span>
            <span className="ot-row ot-3">PARDUBICE</span>
            <span className="ot-row ot-4">MASARYKOVO NÁMĚSTÍ 2667</span>
            <span className="ot-row ot-5">MUDR. ZBYNĚK POPELKA · BRILANT OPTIK S.R.O.</span>
          </div>

          <h1 className="visually-hidden">
            Oční ordinace MUDr. Zbyňka Popelky v Pardubicích — Brilant Optik s.r.o.
          </h1>

          <div className="hero-lede">
            <p className="lede-text">
              Přečtete poslední řádek? Pokud ne, jste tu správně. Vyšetříme váš
              zrak na moderních přístrojích a najdeme příčinu — od dioptrií po
              zelený zákal.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-solid" href="tel:+420466753235">Zavolat do ordinace</a>
              <a className="btn btn-line" href="#sluzby">Co vyšetřujeme</a>
            </div>
          </div>
        </div>

        <div className="hero-strip" role="list" aria-label="Základní informace">
          <span role="listitem">Smluvní lékař zdravotních pojišťoven</span>
          <span role="listitem">Masarykovo náměstí 2667, Zelené Předměstí</span>
          <span role="listitem">Objednání telefonicky v ordinačních hodinách</span>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Vyšetření a diagnostika</p>
          <h2 id="sluzby-h">Šest přístrojů, jeden cíl: vědět přesně, co vaše oči potřebují</h2>
          <p className="section-lede">
            Krátkozrakost, dalekozrakost a astigmatismus, šedý i zelený zákal,
            onemocnění sítnice. Každé vyšetření začíná rozhovorem a končí
            srozumitelným vysvětlením, co dál.
          </p>
        </div>

        <div className="sluzby-grid">
          <article className="karta">
            <span className="karta-znak" aria-hidden="true">OCT</span>
            <h3>Vyšetření OCT</h3>
            <p>
              Snímek sítnice ve vrstvách, bezkontaktně a během pár minut.
              Odhalí změny na sítnici dřív, než je poznáte sami.
            </p>
          </article>
          <article className="karta">
            <span className="karta-znak" aria-hidden="true">PER</span>
            <h3>Vyšetření perimetrem</h3>
            <p>
              Změříme vaše zorné pole. Klíčové vyšetření při podezření na
              zelený zákal a při jeho dlouhodobém sledování.
            </p>
          </article>
          <article className="karta">
            <span className="karta-znak" aria-hidden="true">FUN</span>
            <h3>Fundus kamera</h3>
            <p>
              Fotografie očního pozadí. Máme tak srovnání v čase a vidíme,
              jestli se nález mění, nebo je stabilní.
            </p>
          </article>
          <article className="karta">
            <span className="karta-znak" aria-hidden="true">REF</span>
            <h3>Refraktometr</h3>
            <p>
              Přesné změření dioptrií jako podklad pro předpis brýlí — u
              krátkozrakosti, dalekozrakosti i astigmatismu.
            </p>
          </article>
          <article className="karta">
            <span className="karta-znak" aria-hidden="true">TON</span>
            <h3>Tonometr</h3>
            <p>
              Bezkontaktní měření nitroočního tlaku. Rychlá kontrola, která
              pomáhá včas zachytit zelený zákal.
            </p>
          </article>
          <article className="karta karta-plna">
            <span className="karta-znak" aria-hidden="true">Σ</span>
            <h3>Celkové oční vyšetření</h3>
            <p>
              Kompletní prohlídka od zrakové ostrosti po oční pozadí. Vhodná
              jako preventivní kontrola i při prvních potížích se zrakem.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== ORDINACE / DŮVĚRA ===================== */}
      <section className="ordinace" aria-labelledby="ordinace-h">
        <div className="ordinace-inner">
          <div className="ordinace-text">
            <p className="eyebrow eyebrow-light">Ordinace MUDr. Zbyňka Popelky</p>
            <h2 id="ordinace-h">Oční lékař, ke kterému Pardubice chodí roky</h2>
            <p>
              V ordinaci na Masarykově náměstí poskytujeme profesionální oční
              péči — diagnostiku a léčbu očních vad, šedého a zeleného zákalu
              i onemocnění sítnice. Na vyšetření si vyhradíme čas: výsledky
              vám vysvětlíme tak, abyste odcházeli s jasnou odpovědí, ne s
              latinskou zkratkou.
            </p>
            <p>
              Ordinace je součástí Brilant Optik s.r.o., takže předpis brýlí
              a jejich zhotovení vyřídíte na jedné adrese.
            </p>
          </div>

          <dl className="ordinace-fakta">
            <div className="fakt">
              <dt>Adresa</dt>
              <dd>
                Masarykovo náměstí 2667<br />
                530 02 Pardubice — Zelené Předměstí
              </dd>
            </div>
            <div className="fakt">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420466753235">+420 466 753 235</a>
              </dd>
            </div>
            <div className="fakt">
              <dt>Objednání</dt>
              <dd>Telefonicky v ordinačních hodinách. Akutní potíže hlaste hned při zavolání.</dd>
            </div>
            <div className="fakt">
              <dt>Aktuality</dt>
              <dd>Dovolenou a zástup vždy najdete aktuálně zde na webu — už žádné zavřené dveře bez varování.</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
