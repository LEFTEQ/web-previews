import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      klic: "Přezutí",
      nadpis: "Přezutí a montáž",
      popis:
        "Přezujeme na nejmodernějších strojích, kola vyvážíme a dotáhneme momentovým klíčem. Zakoupené pneu z katalogu obujeme rovnou na místě.",
      spec: "osobní · SUV · 4×4 · dodávky",
    },
    {
      klic: "Katalog",
      nadpis: "Pneu a disky z katalogu",
      popis:
        "Přes 15 000 pneumatik z 33 značek — ekonomické, střední i prémiová třída. Ocelové i lité disky, matice a pojistné šrouby.",
      spec: "letní · zimní · celoroční",
    },
    {
      klic: "Mytí",
      nadpis: "Ruční mytí a čištění",
      popis:
        "Kompletní čištění vozu mokrou i suchou cestou, tepování sedaček, odstranění skvrn a péče o interiér. Bez kartáčové linky, ručně.",
      spec: "interiér · exteriér · tepování",
    },
  ];

  const kroky = [
    {
      c: "01",
      t: "Vyberete v katalogu",
      d: "Otevřete on-line katalog, vyfiltrujete rozměr podle velkého techničáku a porovnáte značky i ceny.",
    },
    {
      c: "02",
      t: "Rezervujete termín",
      d: "Ke koupi rovnou zvolíte den a čas přezutí. Žádné čekání ve frontě, přijedete na svůj slot.",
    },
    {
      c: "03",
      t: "Přezujeme a umyjeme",
      d: "Kola přezujeme, vyvážíme a dotáhneme. Chcete-li, vůz na počkání ručně umyjeme uvnitř i venku.",
    },
  ];

  return (
    <main className="pn">
      <header className="pn-top">
        <a className="pn-mark" href="#" aria-label="Pneuservis Ostrava — úvod">
          <span className="pn-mark-o" aria-hidden="true">
            <span className="pn-mark-o-in" />
          </span>
          <span className="pn-mark-txt">
            <b>PNEUSERVIS</b>
            <i>Ostrava&nbsp;s.r.o.</i>
          </span>
        </a>
        <a className="pn-tel" href="tel:+420736173173">
          <span className="pn-tel-lab">Volejte</span>
          <span className="pn-tel-num">736&nbsp;173&nbsp;173</span>
        </a>
      </header>

      <section className="pn-hero" aria-labelledby="hero-h">
        <div className="pn-hero-media">
          <img
            src="/hero.webp"
            alt="Pneuservis a myčka aut v Ostravě — přezouvání kol na moderním stroji"
            className="pn-hero-img"
            width={1600}
            height={1100}
          />
        </div>

        <div className="pn-hero-copy">
          <p className="pn-eyebrow">
            <span className="pn-dot" aria-hidden="true" /> Na Valech 5509/11 · vjezd z Martinovské
          </p>
          <h1 id="hero-h" className="pn-h1">
            Přezujeme,
            <br />
            <span className="pn-h1-hi">vyvážíme</span> a vůz
            <br />
            umyjeme <span className="pn-h1-hand">ručně.</span>
          </h1>
          <p className="pn-lede">
            Pneuservis i myčka aut v Ostravě-Martinově pod jednou střechou. Pneu
            vyberete v katalogu, termín přezutí si zabookujete dopředu a odjedete
            na čistém, přezutém autě.
          </p>
          <div className="pn-cta-row">
            <a className="pn-btn pn-btn-solid" href="tel:+420736173173">
              Zavolat a domluvit termín
            </a>
            <a className="pn-btn pn-btn-ghost" href="#sluzby">
              Co u nás zvládneme
            </a>
          </div>

          <dl className="pn-facts">
            <div>
              <dt>Katalog</dt>
              <dd>15 000+ pneu</dd>
            </div>
            <div>
              <dt>Značek</dt>
              <dd>33</dd>
            </div>
            <div>
              <dt>Mytí</dt>
              <dd>ručně, ne linka</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pn-sec pn-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="pn-sec-head">
          <p className="pn-eyebrow">Tři věci · jedna zastávka</p>
          <h2 id="sluzby-h" className="pn-h2">
            Kola i lak vyřešíte na jednom místě
          </h2>
        </div>

        <div className="pn-service-media">
          <img
            src="/section-1.webp"
            alt="Ruční mytí a čištění interiéru vozu v myčce Pneuservisu Ostrava"
            width={1400}
            height={900}
          />
        </div>

        <ul className="pn-cards">
          {sluzby.map((s, i) => (
            <li className="pn-card" key={s.klic} style={{ "--i": i } as CSSProperties}>
              <span className="pn-card-tag">{s.klic}</span>
              <h3 className="pn-card-h">{s.nadpis}</h3>
              <p className="pn-card-p">{s.popis}</p>
              <p className="pn-card-spec">{s.spec}</p>
            </li>
          ))}
        </ul>

        <p className="pn-note">
          Nevíte rozměr? Najdete ho na boku pneu i ve velkém techničáku — a když
          si nebudete jistí, zavoláme si to spolu telefonem.
        </p>
      </section>

      <section className="pn-sec pn-about" id="o-nas" aria-labelledby="about-h">
        <div className="pn-about-grid">
          <div className="pn-about-copy">
            <p className="pn-eyebrow">Kdo za tím stojí</p>
            <h2 id="about-h" className="pn-h2">
              Řemeslo, ne montovna
            </h2>
            <p className="pn-about-lede">
              Pneuservis Ostrava s.r.o. dělá komplexní pneuservis už řadu let.
              Dodáváme pneu, ocelové i lité ráfky, pojistné šrouby a matice —
              koncovým i firemním zákazníkům, autosalonům a dalším servisům.
            </p>
            <p className="pn-about-p">
              Pracujeme na nejmodernějších strojích a technici chodí pravidelně
              na školení. K tomu přidáváme ruční mytí a čištění osobních,
              užitkových i terénních aut — mokrou i suchou cestou.
            </p>

            <ol className="pn-steps">
              {kroky.map((k) => (
                <li key={k.c} className="pn-step">
                  <span className="pn-step-c" aria-hidden="true">
                    {k.c}
                  </span>
                  <span className="pn-step-body">
                    <b>{k.t}</b>
                    <span>{k.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="pn-about-side">
            <img
              src="/section-2.webp"
              alt="Skladové pneumatiky a disky připravené k montáži v Pneuservisu Ostrava"
              className="pn-about-img"
              width={1200}
              height={1400}
            />
            <div className="pn-contact-card">
              <p className="pn-cc-lab">Kde nás najdete</p>
              <p className="pn-cc-addr">
                Na Valech 5509/11, Ostrava
                <br />
                <span>vjezd z ulice Martinovská</span>
              </p>
              <a className="pn-cc-tel" href="tel:+420736173173">
                736&nbsp;173&nbsp;173
              </a>
              <a className="pn-cc-mail" href="mailto:daniel.spirek@seznam.cz">
                daniel.spirek@seznam.cz
              </a>
            </div>
          </aside>
        </div>

        <p className="pn-legal-note">
          Zimní pneu jsou povinné od 1.&nbsp;listopadu do 31.&nbsp;března tam, kde
          leží sníh, led nebo námraza — dezén nejméně 4&nbsp;mm. Termín přezutí
          si u nás pohlídáte dopředu, ať vás zima nezastihne na letních.
        </p>
      </section>
    </main>
  );
}
