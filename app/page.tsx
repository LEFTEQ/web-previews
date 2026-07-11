import React from "react";

export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <a className="mark" href="#" aria-label="TEDOM energie, domovská stránka">
            TEDOM<span className="flame">.</span>
            <span className="sub">energie · plyn</span>
          </a>
          <a className="topcall" href="tel:+420735000215">
            <span className="dot" aria-hidden="true" />
            <span className="txt">Infolinka</span>
            735 000 215
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img src="/hero.webp" alt="Modrý plamen plynového hořáku v detailu" />
        </div>
        <div className="wrap">
          <p className="hero-eyebrow reveal d1">Dodavatel plynu · České Budějovice</p>
          <h1 className="reveal d2">
            Plyn, který <span className="lit">hoří klidně</span> a účet vás nepřekvapí.
          </h1>
          <p className="lede reveal d3">
            V Českých Budějovicích i po celém kraji dodáváme zemní plyn domácnostem,
            firmám a obcím. Vyberte si fixaci na zimu, nebo chytrou kombinaci spotu
            a fixu s produktem T‑Combi Sezona. Přepis od stávajícího dodavatele
            vyřídíme za vás.
          </p>
          <div className="hero-actions reveal d4">
            <a className="btn btn-primary" href="tel:+420735000215">Nechte si zavolat</a>
            <a className="btn btn-ghost" href="#nabidka">Prohlédnout tarify plynu</a>
          </div>
        </div>

        <div className="gauge">
          <div className="wrap">
            <div className="gauge-cell">
              <div className="gauge-num">8–16 h</div>
              <div className="gauge-lbl">Infolinka po–pá, mluvíte s poradcem, ne s robotem</div>
            </div>
            <div className="gauge-cell">
              <div className="gauge-num">tisíce</div>
              <div className="gauge-lbl">domácností, firem a obcí, které nám svěřily energie</div>
            </div>
            <div className="gauge-cell">
              <div className="gauge-num">0 Kč</div>
              <div className="gauge-lbl">za převod — výpověď u starého dodavatele píšeme my</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="nabidka">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">Tarify zemního plynu</p>
            <h2>Vyberte si podle toho, co od zimy čekáte.</h2>
            <p>
              Ať už chcete jistotu pevné ceny, nebo raději jedete podle trhu,
              plyn od nás nastavíme na míru vaší spotřebě — v panelu, v rodinném
              domě i v provozovně.
            </p>
          </div>

          <div className="svc-grid">
            <article className="svc">
              <span className="svc-tag">Fix · klid na celou sezonu</span>
              <h3>Jistota na zimu</h3>
              <p>
                Zafixovaná cena plynu přes topnou sezonu. Účet víte dopředu
                a výkyvy trhu vás v lednu nezaskočí.
              </p>
              <a className="svc-link" href="tel:+420735000215">Chci fixaci</a>
            </article>

            <article className="svc">
              <span className="svc-tag">Spot + fix · chytrá kombinace</span>
              <h3>T‑Combi Sezona</h3>
              <p>
                Přes léto využijete výhodný spot, na zimu vás kryje fix.
                Kombinujete obojí a platíte jen tam, kde to dává smysl.
              </p>
              <a className="svc-link" href="tel:+420735000215">Spočítat úsporu</a>
            </article>

            <article className="svc">
              <span className="svc-tag">Spot · cena podle trhu</span>
              <h3>T‑Spot se stropem</h3>
              <p>
                Platíte aktuální spotovou cenu, ale se stropem, který vás ochrání,
                když ceny plynu vystřelí nahoru.
              </p>
              <a className="svc-link" href="tel:+420735000215">Zjistit podmínky</a>
            </article>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-n">01 — kontakt</div>
              <h4>Necháte nám telefon a PSČ</h4>
              <p>Zavolá vám náš energetický poradce z regionu, žádné call centrum přes půl republiky.</p>
            </div>
            <div className="step">
              <div className="step-n">02 — návrh</div>
              <h4>Doladíme tarif i detaily</h4>
              <p>Výpověď u stávajícího dodavatele plynu i celý přepis vyřídíme za vás.</p>
            </div>
            <div className="step">
              <div className="step-n">03 — hotovo</div>
              <h4>Smlouvu podepíšete, jak chcete</h4>
              <p>Osobně v Budějovicích, nebo pohodlně online z domova. A topíte dál.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust" id="reference">
        <div className="wrap">
          <div className="trust-media">
            <img src="/section-1.webp" alt="Energetický poradce TEDOM energie při konzultaci se zákazníkem" />
            <div className="badge">
              <b>735 000 215</b>
              <span>Váš poradce, na kterého se dovoláte</span>
            </div>
          </div>
          <div>
            <p className="kicker">Proč zrovna my</p>
            <h2>Jeden poradce, který zvedá telefon.</h2>
            <p>
              U nás nejste číslo v pořadí. Ke každému odběrnému místu dostanete
              konkrétního člověka, který zná vaši situaci a je k zastižení, když
              potřebujete poradit.
            </p>

            <div className="quotes">
              <blockquote className="quote">
                <p>„Svému zástupci se mohu ozvat s jakýmkoliv problémem a dotazem. Stará se o energetiku mé domácnosti i pracovního projektu.“</p>
                <cite>Ing. Roman Pančocha <span>· majitel Zámečku Starý Jičín</span></cite>
              </blockquote>
              <blockquote className="quote">
                <p>„Řešil jsem přechod od dodavatele poslední instance a zařídili vše za mě. Cením profesionalitu a rychlost vyřízení.“</p>
                <cite>David Kubát <span>· KIRK wash s.r.o.</span></cite>
              </blockquote>
              <blockquote className="quote">
                <p>„Nemusím nikde nic zjišťovat. Můj poradce je mi k dispozici vždy, když potřebuji, a šetří tak můj čas.“</p>
                <cite>Jan Michalský <span>· Štramberk</span></cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
