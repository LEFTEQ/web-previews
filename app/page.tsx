import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na tlaku v soustavě: flame + manometr */}
      <header className="hero">
        <div className="hero__bar">
          <span className="wordmark">
            <span className="wordmark__c">C</span>inert
            <span className="wordmark__sub">plynoservis&nbsp;·&nbsp;Pardubice</span>
          </span>
          <a className="hero__phone" href="tel:+420739832247">
            <span className="hero__phoneLabel">Volejte</span>
            +420&nbsp;739&nbsp;832&nbsp;247
          </a>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Servis a montáž plynových kotlů · od&nbsp;2013</p>
            <h1 className="hero__title">
              Aby kotel<br />
              <span className="hero__title--em">hřál dřív</span><br />
              než přituhne.
            </h1>
            <p className="hero__lead">
              Stanislav Cinert &amp; Martin Tichý — dva technici na plynové kotle
              v Pardubicích a okolí. Junkers, Ariston, Vaillant, Protherm,
              Viadrus. Přijedeme, změříme, seřídíme a topení pustíme zpátky do provozu.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420739832247">Objednat servis</a>
              <a className="btn btn--ghost" href="mailto:servis@kotlepardubice.cz">Napsat e-mail</a>
            </div>

            {/* Manometr — signature prvek: kotel pod tlakem */}
            <div className="gauge" role="img" aria-label="Tlak v topné soustavě v provozním pásmu, 1,5 baru">
              <div className="gauge__dial">
                <span className="gauge__needle" />
                <span className="gauge__tick gauge__tick--0" />
                <span className="gauge__tick gauge__tick--1" />
                <span className="gauge__tick gauge__tick--2" />
                <span className="gauge__tick gauge__tick--3" />
              </div>
              <div className="gauge__read">
                <strong>1,5 bar</strong>
                <span>provozní tlak · seřízeno</span>
              </div>
            </div>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Technik při servisu plynového kotle — připojení a kontrola"
              className="hero__img"
              width={720}
              height={900}
              loading="eager"
            />
            <figcaption className="hero__cap">Živanice&nbsp;168 · dojezd Pardubice a okolí</figcaption>
          </figure>
        </div>
      </header>

      {/* SLUŽBY — reálná posloupnost zásahu, číslovaná protože to je postup */}
      <section className="svc" aria-labelledby="svc-h">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Co u vás uděláme</p>
          <h2 id="svc-h" className="section__title">Od prohlídky po klidnou zimu</h2>
        </div>

        <ol className="svc__list">
          <li className="svc__item">
            <span className="svc__num">01</span>
            <h3 className="svc__name">Montáž plynového kotle</h3>
            <p className="svc__desc">
              Připravíme místo — přívod plynu, odvod spalin i prostor na budoucí
              servis. Starý kotel odpojíme, nový usadíme, napojíme a napustíme.
              Zapálíme až po zkoušce těsnosti.
            </p>
          </li>
          <li className="svc__item">
            <span className="svc__num">02</span>
            <h3 className="svc__name">Servis a opravy</h3>
            <p className="svc__desc">
              Kontrola a čištění spalovací komory i výměníku, seřízení spalování,
              nastavení tlaku a teploty, výměna dílů. Odstraníme závadu a kotel
              vrátíme do provozu.
            </p>
          </li>
          <li className="svc__item">
            <span className="svc__num">03</span>
            <h3 className="svc__name">Poradenství k topení</h3>
            <p className="svc__desc">
              Poradíme, jaký zdroj tepla se vyplatí podle velikosti a typu domu —
              plyn, elektřina i tepelné čerpadlo. Bez zbytečného přeplácení.
            </p>
          </li>
        </ol>

        <figure className="svc__media">
          <img
            src="/section-1.webp"
            alt="Detail plynového kotle po vyčištění spalovací komory"
            className="svc__img"
            width={1200}
            height={640}
            loading="lazy"
          />
          <figcaption>Záruční i pozáruční servis: Junkers, Ariston, Intergas, Dakon, Protherm, Destila, Viadrus, Vaillant.</figcaption>
        </figure>
      </section>

      {/* DŮVĚRA — kdo přijede, jaké značky, kde působíme */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Technik plynoservisu Cinert v pracovním oděvu u zákazníka"
              className="trust__img"
              width={620}
              height={760}
              loading="lazy"
            />
          </figure>

          <div className="trust__copy">
            <p className="eyebrow eyebrow--dark">Kdo k vám přijede</p>
            <h2 id="trust-h" className="section__title">Dva technici, deset let na kotlích</h2>
            <p className="trust__lead">
              Nejsme dispečink s podřízenými brigádníky. K vám přijede
              přímo Stanislav Cinert nebo Martin Tichý — a ten, kdo kotel seřídil,
              vám ho i vysvětlí a příště zvedne telefon.
            </p>

            <dl className="facts">
              <div className="facts__row">
                <dt>Zkušenost</dt>
                <dd>přes 10&nbsp;let na servisu a montáži plynových kotlů</dd>
              </div>
              <div className="facts__row">
                <dt>Kde jezdíme</dt>
                <dd>Pardubice, Živanice a okolí</dd>
              </div>
              <div className="facts__row">
                <dt>Značky</dt>
                <dd>Junkers · Ariston · Intergas · Vaillant · Protherm · Dakon · Viadrus · Destila</dd>
              </div>
              <div className="facts__row">
                <dt>Rezervace</dt>
                <dd>revize online, opravy telefonicky — objednaný čas je orientační</dd>
              </div>
            </dl>

            <div className="contact">
              <a className="contact__line" href="tel:+420739832247">
                <span>Telefon</span>+420 739 832 247
              </a>
              <a className="contact__line" href="mailto:servis@kotlepardubice.cz">
                <span>E-mail</span>servis@kotlepardubice.cz
              </a>
              <p className="contact__line contact__line--static">
                <span>Adresa</span>Živanice 168, 533 42 Živanice
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
