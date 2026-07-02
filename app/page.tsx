export default function Page() {
  return (
    <main className="rd">
      {/* ================= HERO ================= */}
      <header className="rd-hero">
        <div className="rd-hero__inner">
          <div className="rd-hero__text">
            <span className="rd-wordmark" aria-label="Re-Dent">
              re<span className="rd-wordmark__dash">–</span>dent
            </span>

            <p className="rd-eyebrow">Dentální hygiena · České Budějovice</p>

            <h1 className="rd-hero__title">
              Čisté zuby jsou <em>řemeslo</em>.<br />
              My ho děláme každou středu až pátek.
            </h1>

            <p className="rd-hero__lead">
              Profesionální dentální hygiena v&nbsp;8.&nbsp;patře na Matici školské.
              Jedna hodina, jedna hygienistka, žádný spěch. Odejdete s&nbsp;hladkými
              zuby a&nbsp;plánem, jak si je takové udržet.
            </p>

            <div className="rd-hero__actions">
              <a
                className="rd-btn rd-btn--solid"
                href="https://polakovadh.xdent.cz/wizard/clinic-selection"
              >
                Objednat se online
              </a>
              <a className="rd-btn rd-btn--line" href="tel:+420605095666">
                Zavolat 605&nbsp;095&nbsp;666
              </a>
            </div>

            <p className="rd-hero__note">
              Přijímáme nové pacienty na dentální hygienu. Zubní ordinace je
              dočasně mimo provoz.
            </p>
          </div>

          <figure className="rd-hero__media">
            <img
              src="/hero.webp"
              alt="Ošetření dentální hygieny v ordinaci Re-Dent v Českých Budějovicích"
            />
            <figcaption className="rd-hero__badge">
              <strong>St–Pá</strong>
              <span>po telefonické domluvě</span>
            </figcaption>
          </figure>
        </div>

        {/* signature: zubní diagram jako navigační linka */}
        <div className="rd-toothline" aria-hidden="true">
          <span className="rd-toothline__num">18</span>
          <span className="rd-toothline__num">17</span>
          <span className="rd-toothline__num">16</span>
          <span className="rd-toothline__num">15</span>
          <span className="rd-toothline__num">14</span>
          <span className="rd-toothline__num">13</span>
          <span className="rd-toothline__num">12</span>
          <span className="rd-toothline__num">11</span>
          <span className="rd-toothline__num rd-toothline__num--accent">21</span>
          <span className="rd-toothline__num">22</span>
          <span className="rd-toothline__num">23</span>
          <span className="rd-toothline__num">24</span>
          <span className="rd-toothline__num">25</span>
          <span className="rd-toothline__num">26</span>
          <span className="rd-toothline__num">27</span>
          <span className="rd-toothline__num">28</span>
        </div>
      </header>

      {/* ================= SEKCE 1: PRŮBĚH NÁVŠTĚVY ================= */}
      <section className="rd-section rd-section--visit" aria-labelledby="visit-title">
        <div className="rd-section__head">
          <p className="rd-eyebrow">Co vás čeká</p>
          <h2 id="visit-title" className="rd-section__title">
            Hodina, po které si jazykem přejedete zuby&nbsp;— a&nbsp;usmějete se
          </h2>
        </div>

        <div className="rd-visit">
          <figure className="rd-visit__media">
            <img
              src="/section-1.webp"
              alt="Nástroje dentální hygieny — ultrazvukový scaler a leštící kalíšky"
            />
          </figure>

          <ol className="rd-steps">
            <li className="rd-step">
              <span className="rd-step__marker">1. návštěva</span>
              <h3>Vstupní vyšetření a&nbsp;hloubkové čištění</h3>
              <p>
                Projdeme stav dásní a&nbsp;zubů, ultrazvukem odstraníme zubní kámen
                a&nbsp;airflow pigmentace od kávy, čaje či cigaret. Nakonec zuby
                vyleštíme a&nbsp;ošetříme fluoridem.
              </p>
            </li>
            <li className="rd-step">
              <span className="rd-step__marker">u zrcadla</span>
              <h3>Instruktáž na míru vašim rukám</h3>
              <p>
                Ukážeme vám na vlastních zubech, kde vám kartáček uniká,
                a&nbsp;vybereme velikost mezizubních kartáčků, která vám opravdu
                sedí. Žádné obecné poučky.
              </p>
            </li>
            <li className="rd-step">
              <span className="rd-step__marker">za 6 měsíců</span>
              <h3>Recall — kratší, levnější, klidnější</h3>
              <p>
                Když chodíte pravidelně, kámen se nestihne usadit. Kontrolní
                hygiena je pak rychlejší a&nbsp;dásně přestanou krvácet nadobro.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ================= SEKCE 2: DŮVĚRA / ORDINACE ================= */}
      <section className="rd-section rd-section--trust" aria-labelledby="trust-title">
        <div className="rd-trust">
          <div className="rd-trust__text">
            <p className="rd-eyebrow rd-eyebrow--light">Ordinace v 8. patře</p>
            <h2 id="trust-title" className="rd-section__title rd-section__title--light">
              Matice školské 1786/117, výtahem nahoru, výhled na Budějovice
            </h2>
            <p className="rd-trust__lead">
              Malá ordinace, kde vás zná hygienistka jménem. Nepracujeme na čas
              podle pojišťovny — každý termín má vyhrazenou celou hodinu, abychom
              nic neodbyli.
            </p>

            <dl className="rd-facts">
              <div className="rd-fact">
                <dt>Ordinační dny</dt>
                <dd>středa, čtvrtek, pátek</dd>
              </div>
              <div className="rd-fact">
                <dt>Objednání</dt>
                <dd>telefonicky nebo online, bez čekací listiny</dd>
              </div>
              <div className="rd-fact">
                <dt>Kde nás najdete</dt>
                <dd>Matice školské 1786/117, 8.&nbsp;patro, 370&nbsp;01 České Budějovice</dd>
              </div>
              <div className="rd-fact">
                <dt>Kontakt</dt>
                <dd>
                  <a href="tel:+420605095666">605&nbsp;095&nbsp;666</a> ·{" "}
                  <a href="mailto:info@re-dent.cz">info@re-dent.cz</a>
                </dd>
              </div>
            </dl>

            <blockquote className="rd-quote">
              <p>
                „Poprvé v&nbsp;životě mi někdo ukázal, jak správně čistit mezizubí.
                Dásně mi přestaly krvácet do měsíce.“
              </p>
              <cite>— pacientka na pravidelném recallu, České Budějovice</cite>
            </blockquote>
          </div>

          <figure className="rd-trust__media">
            <img
              src="/section-2.webp"
              alt="Ordinace dentální hygieny Re-Dent — křeslo a denní světlo z osmého patra"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
