import { AiImage } from "./_ui";

const checks = [
  {
    n: "01",
    tick: "VIN",
    title: "VIN a původ vozu",
    body: "Ověříme identifikační číslo a počet majitelů. Žádné překvapení z ciziny až po přepsání vozu na vás.",
  },
  {
    n: "02",
    tick: "CEBIA REPORT",
    title: "CEBIA report",
    body: "Prověření stavu tachometru a záznamů o voze napříč evropskými databázemi. Černé na bílém.",
  },
  {
    n: "03",
    tick: "SERVISNÍ HISTORIE",
    title: "Servisní historie",
    body: "Dohledáme doklady o údržbě a intervalech. Víte přesně, co se s autem dělo před vámi.",
  },
  {
    n: "04",
    tick: "ZKUŠEBNÍ JÍZDA",
    title: "Zkušební jízda",
    body: "Chování motoru, převodovky a podvozku za reálného provozu — ne na stojáka v hale.",
  },
  {
    n: "05",
    tick: "ZVEDÁK",
    title: "Prohlídka na zvedáku",
    body: "Podvozek, spodek karoserie a brzdy pod světlem dílny. Kontrolujeme, ne odhadujeme.",
  },
];

const dividerTicks = [
  "VIN",
  "CEBIA REPORT",
  "SERVISNÍ HISTORIE",
  "ZKUŠEBNÍ JÍZDA",
  "ZVEDÁK",
];

const trust = [
  {
    k: "Servis všech značek",
    v: "Záruční i pozáruční opravy moderním diagnostickým vybavením.",
  },
  {
    k: "Cena předem",
    v: "Částku řekneme dopředu podle časových norem výrobce. Žádné položky navíc na faktuře.",
  },
  {
    k: "Pojistné události na klíč",
    v: "Vyřídíme škodu s pojišťovnou od hlášení po opravu za vás.",
  },
];

function Divider({ live }: { live?: boolean }) {
  return (
    <div className="pas" role="separator" aria-hidden="true">
      <div className="pas-labels">
        {dividerTicks.map((t) => (
          <span className="pas-label" key={t}>
            <i className="pas-dot" />
            {t}
          </span>
        ))}
      </div>
      <div className={live ? "pas-scale pas-scale--live" : "pas-scale"}>
        {live && <span className="pas-needle" />}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="site-head">
        <div className="wrap head-inner">
          <a className="brand" href="#top" aria-label="Autocentrum Ostrava, domů">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">
              <b>AUTOCENTRUM</b>
              <span>OSTRAVA</span>
            </span>
          </a>
          <nav className="head-nav" aria-label="Hlavní">
            <a href="#postup">Diagnostika</a>
            <a href="#postup">Dovoz z EU</a>
            <a href="#o-nas">Servis</a>
          </nav>
          <a className="btn btn--sm" href="tel:+420777111222">
            Zavolat 777&nbsp;111&nbsp;222
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-led" /> Diagnostika vozidel · Ostrava-Kunčičky
              </p>
              <h1 className="hero-title">
                Auto, které vám předáme,<br />
                prošlo <em>přístroji</em> — ne jen leštičkou.
              </h1>
              <p className="hero-sub">
                Dovážíme prověřené vozy z celé EU. Na každém uděláme diagnostiku,
                zkušební jízdu, prohlídku na zvedáku a prověříme původ přes CEBIA —
                dřív, než vám předáme klíče.
              </p>
              <div className="hero-cta">
                <a className="btn" href="tel:+420777111222">
                  Objednat diagnostiku
                </a>
                <a className="btn btn--ghost" href="#postup">
                  Jak prověřujeme vozy
                </a>
              </div>
              <ul className="readouts" aria-label="Přístroje, se kterými pracujeme">
                <li>OBD II</li>
                <li>VIN dekodér</li>
                <li>CEBIA report</li>
              </ul>
            </div>

            <div className="hero-media">
              <div className="hero-spot">
                <AiImage
                  src="/hero.webp"
                  alt="Dovezený vůz na zvedáku při vstupní diagnostice v dílně"
                  className="hero-img"
                />
              </div>
            </div>
          </div>

          <div className="wrap">
            <Divider live />
          </div>
        </section>

        <section className="section" id="postup">
          <div className="wrap">
            <header className="sec-head">
              <p className="eyebrow">
                <span className="eyebrow-led" /> Postup · vstupní kontrola dovozu
              </p>
              <h2 className="sec-title">Pět kontrol, než klíče přejdou k vám</h2>
              <p className="sec-lead">
                U nás auto neschováme za hezké fotky. Každý dovezený vůz projde
                měřením a zápisem v tomto pořadí — výsledek dostanete na papíru,
                než cokoli podepíšete.
              </p>
            </header>

            <div className="proc-layout">
              <ol className="steps">
                {checks.map((c) => (
                  <li className="step" key={c.n}>
                    <span className="step-num">{c.n}</span>
                    <div className="step-body">
                      <span className="step-tick">{c.tick}</span>
                      <h3 className="step-title">{c.title}</h3>
                      <p className="step-text">{c.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <figure className="proc-media">
                <div className="panel">
                  <AiImage
                    src="/section-1.webp"
                    alt="Technik připojuje diagnostiku k řídicí jednotce vozu"
                    className="panel-img"
                  />
                </div>
                <figcaption>
                  Každý krok zapíšeme do protokolu vozu — víte, co jsme našli.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <Divider />

        <section className="section" id="o-nas">
          <div className="wrap trust-grid">
            <figure className="panel panel--tall">
              <AiImage
                src="/section-2.webp"
                alt="Servisní hala Autocentra Ostrava s připravenými vozy"
                className="panel-img"
              />
            </figure>

            <div className="trust-copy">
              <p className="eyebrow">
                <span className="eyebrow-led" /> O nás · 14 let na Vratimovské
              </p>
              <h2 className="sec-title">Měříme, neodhadujeme</h2>
              <p className="sec-lead">
                Autocentrum Ostrava je dovoz a servis aut z Kunčiček. Čtrnáct let
                přivážíme vozy z celé EU — od rodinných kombí po sportovní speciály —
                a servisujeme všechny značky. Chceme být přímou konkurencí
                autorizovaným servisům, jen bez jejich ceníku.
              </p>
              <ul className="trust-list">
                {trust.map((t) => (
                  <li key={t.k}>
                    <span className="trust-key">{t.k}</span>
                    <span className="trust-val">{t.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
