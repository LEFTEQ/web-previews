export default function Page() {
  const services = [
    {
      code: "L1",
      title: "Kompletní elektroinstalace",
      lead: "Novostavba, rekonstrukce, přístavba",
      body: "Rozvedu vám celý byt i dům od rozvaděče po poslední zásuvku. Kabeláž pod omítku, dimenzování okruhů podle spotřebičů, jističe a proudové chrániče přesně na míru. Vše podle platné normy ČSN 33 2000.",
    },
    {
      code: "L2",
      title: "Rozvaděče a jištění",
      lead: "Montáž, rozšíření, revize zapojení",
      body: "Sestavím a zapojím domovní rozvaděč přehledně a s popisem každého okruhu. Doplním přepěťové ochrany a proudové chrániče tam, kde chybí — ať vás nevyhodí půlka bytu kvůli jedné vadné žehličce.",
    },
    {
      code: "L3",
      title: "Zásuvky, vypínače, světla",
      lead: "Drobné práce i celé místnosti",
      body: "Přidání zásuvky za kuchyňskou linku, výměna vypínačů, zapojení lustru nebo LED podhledů. Přijedu, změřím, odsekám jen to nutné a po sobě uklidím.",
    },
    {
      code: "L4",
      title: "Hledání a odstranění závad",
      lead: "Když to jiskří, zkratuje nebo nesvítí",
      body: "Změřím obvod, najdu místo poruchy a řeknu vám rovnou, co s tím. Žádné bourání celé zdi naslepo — nejdřív diagnostika, potom oprava.",
    },
  ];

  const trust = [
    { k: "Vyučený elektrikář", v: "s vyhláškou 50/1978 Sb." },
    { k: "Působím", v: "Hradec Králové a okolí do 30 km" },
    { k: "Revizní zprávu", v: "vystavím po dokončení" },
  ];

  return (
    <main className="jk">
      <header className="jk-top">
        <a className="jk-mark" href="#" aria-label="Jiří Kappl — elektroinstalace">
          <span className="jk-mark-live" aria-hidden="true">
            <span className="jk-l"></span>
            <span className="jk-n"></span>
          </span>
          <span className="jk-mark-name">
            <b>Jiří Kappl</b>
            <em>elektroinstalace · Hradec Králové</em>
          </span>
        </a>
        <a className="jk-call" href="tel:+420234694430">Zavolat</a>
      </header>

      <section className="jk-hero" aria-labelledby="hero-h">
        <div className="jk-hero-img">
          <img
            src="/hero.webp"
            alt="Zapojený domovní rozvaděč s jističi a proudovými chrániči"
            loading="eager"
          />
          <span className="jk-live" aria-hidden="true">230 V</span>
        </div>
        <div className="jk-hero-txt">
          <p className="jk-eyebrow">Fáze · Nula · Ochranný vodič</p>
          <h1 id="hero-h">
            Zapojím to<br />
            <span className="jk-glow">tak, aby to</span><br />
            drželo.
          </h1>
          <p className="jk-hero-lead">
            Elektrikář z Hradce Králové na kompletní instalace,
            rozvaděče i „přijeďte se na to podívat". Práce podle
            normy, revizní zpráva na konec, po sobě uklizeno.
          </p>
          <div className="jk-hero-cta">
            <a className="jk-btn" href="tel:+420234694430">Zavolat +420 234 694 430</a>
            <span className="jk-hours">Po–Pá 7–17 · pohotovost po domluvě</span>
          </div>
        </div>
      </section>

      <section className="jk-services" aria-labelledby="srv-h">
        <div className="jk-sec-head">
          <p className="jk-eyebrow">Co spolu vyřešíme</p>
          <h2 id="srv-h">Od jedné zásuvky<br />po celý dům pod proudem</h2>
        </div>
        <ol className="jk-list">
          {services.map((s) => (
            <li key={s.code} className="jk-item">
              <span className="jk-item-code" aria-hidden="true">{s.code}</span>
              <div className="jk-item-body">
                <h3>{s.title}</h3>
                <p className="jk-item-lead">{s.lead}</p>
                <p className="jk-item-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="jk-fig">
          <img
            src="/section-1.webp"
            alt="Elektrikář při montáži zásuvkového okruhu"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="jk-trust" aria-labelledby="trust-h">
        <figure className="jk-trust-fig">
          <img
            src="/section-2.webp"
            alt="Detail práce s kabeláží a měřicím přístrojem"
            loading="lazy"
          />
        </figure>
        <div className="jk-trust-txt">
          <p className="jk-eyebrow">Kdo vám to bude dělat</p>
          <h2 id="trust-h">Jeden elektrikář,<br />který si za tím stojí</h2>
          <p className="jk-trust-lead">
            Nejsem řetězec ani dispečink. Přijede k vám ten samý
            člověk, se kterým se domluvíte — a ten to i dodělá.
            Řeknu rovnou, co je potřeba, kolik to bude stát a kdy
            to bude hotové.
          </p>
          <dl className="jk-facts">
            {trust.map((t) => (
              <div key={t.k} className="jk-fact">
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
          <blockquote className="jk-quote">
            „Přišel na čas, zásuvky přidal za půl dne a všechno
            popsal v rozvaděči. Konečně vím, který jistič co vypíná."
            <cite>— paní Havlová, Nový Hradec Králové</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
