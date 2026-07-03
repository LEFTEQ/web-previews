export default function Page() {
  const sluzby = [
    {
      nazev: "Kanceláře a firmy",
      popis:
        "Přijdeme večer nebo o víkendu, ať vás při práci nerušíme. Ráno máte čisté stoly, koberce i kuchyňku — a nikdo si nevšimne, že jsme tam byli.",
      rezim: "Pravidelně i jednorázově",
    },
    {
      nazev: "Domy a byty",
      popis:
        "Uklízíme tak, jak bychom chtěly mít uklizeno u sebe doma. Pravidelný úklid domácnosti nebo důkladný generální úklid — vždy stejný tým, který znáte.",
      rezim: "Malé týmy 2–3 žen",
    },
    {
      nazev: "Školy a školky",
      popis:
        "Hygienické a bezpečné prostředí bez narušení výuky. Denní, večerní nebo víkendový úklid podle rozvrhu vaší školy.",
      rezim: "Mimo výuku",
    },
    {
      nazev: "Potravinové provozy",
      popis:
        "Kuchyně, linky a sklady čistíme podle norem HACCP. Čistota na úrovni výroby, doložitelná při každé kontrole.",
      rezim: "Dle HACCP",
    },
    {
      nazev: "Úklid po rekonstrukci",
      popis:
        "Stavební prach, střepy, fleky od barvy — vše zmizí před předáním prostoru. Rychlé a důkladné dokončovací čištění.",
      rezim: "Do 48 hodin",
    },
    {
      nazev: "Strojové čištění podlah",
      popis:
        "Když mop nestačí, nastupuje technika. Garáže, haly a chodby čistíme profesionálními stroji s přesným výsledkem.",
      rezim: "Velké plochy",
    },
  ];

  const zasady = [
    {
      titulek: "Ověřený tým",
      text: "Každou kolegyni Renata osobně vybírá a zaučuje. Do vašeho bytu nebo kanceláře pustíme jen lidi, které bychom pustily i k sobě domů.",
    },
    {
      titulek: "Profesionální vybavení",
      text: "Extrakční čističe koberců, podlahové stroje, mikrovlákno. Používáme stejnou techniku jako největší úklidové firmy — jen s větší péčí.",
    },
    {
      titulek: "Ekologické prostředky",
      text: "Čisticí prostředky šetrné k vám, dětem, zvířatům i planetě. Žádná agresivní chemie tam, kde žijete a pracujete.",
    },
  ];

  return (
    <main className="neo">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="wordmark" aria-label="N.E.O. Uklidovka Praha">
            <span className="wordmark-neo">N.E.O.</span>
            <span className="wordmark-rest">Uklidovka&nbsp;Praha</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Vaše kancelář</span>
            <span className="hero-line hero-line-2">
              se čistí <em>ráno.</em>
            </span>
            <span className="hero-line hero-line-3 hero-wiped">
              My tam byly už&nbsp;včera.
            </span>
          </h1>

          <p className="hero-sub">
            Profesionální úklid bytů, kanceláří, škol a provozoven po celé
            Praze. Od roku 2016 — jeden vysavač, dvě ruce a žádné výmluvy.
            Dnes tým prověřených žen, kterým Praha důvěřuje.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:info@neouklidovkapraha.cz">
              Získat nabídku do pár hodin
            </a>
            <span className="hero-note">Nezávazně. Rychle. Lidsky.</span>
          </div>

          <ul className="hero-facts" aria-label="Klíčová fakta">
            <li>
              <strong>Od 2016</strong>
              <span>uklízíme Prahu</span>
            </li>
            <li>
              <strong>2–3 ženy</strong>
              <span>v každém týmu, každá má svou roli</span>
            </li>
            <li>
              <strong>Celá Praha</strong>
              <span>byty, firmy, školy i provozy</span>
            </li>
          </ul>
        </div>

        {/* Signature: pruh setřený mopem přes „zaprášenou" plochu */}
        <div className="hero-swipe" aria-hidden="true">
          <div className="swipe-dust"></div>
          <div className="swipe-clean"></div>
          <div className="swipe-shine"></div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-titulek">
        <div className="sekce-hlava">
          <p className="eyebrow">Co uklízíme</p>
          <h2 id="sluzby-titulek">
            Každý prostor má jiné potřeby.
            <br />
            My je umíme splnit.
          </h2>
        </div>

        <div className="sluzby-mrizka">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.nazev}>
              <p className="sluzba-rezim">{s.rezim}</p>
              <h3>{s.nazev}</h3>
              <p className="sluzba-popis">{s.popis}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-pozn">
          Nevíte, co přesně potřebujete? Napište nám, co vás trápí — navrhneme
          řešení a odpovíme během pár hodin.
        </p>
      </section>

      {/* ===== O NÁS / DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-titulek">
        <div className="duvera-grid">
          <div className="duvera-pribeh">
            <p className="eyebrow eyebrow-svetly">Jak pracujeme</p>
            <h2 id="duvera-titulek">
              Začalo to s jedním vysavačem
            </h2>
            <p>
              „Jmenuji se Renata Onodyova a uklízím od roku 2016. Začala jsem
              sama — jeden vysavač, dvě ruce a žádné výmluvy. Dnes vedu tým
              spolehlivých žen, kterým klienti v Praze důvěřují.“
            </p>
            <blockquote className="duvera-citat">
              <p>
                „Slušnost a zodpovědnost nejsou bonus.
                U&nbsp;nás jsou samozřejmost.“
              </p>
              <footer>
                <strong>Renata Onodyova</strong>
                <span>zakladatelka N.E.O. Uklidovka Praha</span>
              </footer>
            </blockquote>
          </div>

          <div className="duvera-zasady">
            {zasady.map((z) => (
              <article className="zasada" key={z.titulek}>
                <h3>{z.titulek}</h3>
                <p>{z.text}</p>
              </article>
            ))}

            <figure className="recenze">
              <blockquote>
                <p>
                  „Vše proběhlo dle dohody, dobrá komunikace. Konečná cena
                  odpovídala odhadu, který paní dala po telefonu. Celkově jsme
                  spokojení a firmu doporučujeme.“
                </p>
              </blockquote>
              <figcaption>— Michal S., zákazník z Prahy</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
