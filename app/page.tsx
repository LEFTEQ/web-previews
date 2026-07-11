import type { ReactNode } from "react";

export default function Page() {
  return (
    <main className="fu">
      <a className="fu-skip" href="#sluzby">Přeskočit na služby</a>

      {/* ---------- HERO ---------- */}
      <header className="fu-hero">
        <nav className="fu-nav" aria-label="Hlavní">
          <span className="fu-mark" aria-label="Fajn úklid Praha">
            <span className="fu-mark-a">FAJN</span>
            <span className="fu-mark-b">ÚKLID</span>
            <span className="fu-mark-c">Praha</span>
          </span>
          <a className="fu-nav-call" href="tel:+420608045256">
            <span className="fu-nav-dot" aria-hidden="true" />
            +420 608 045 256
          </a>
        </nav>

        <div className="fu-hero-grid">
          <div className="fu-hero-copy">
            <p className="fu-eyebrow">Úklidová firma pro pražské kanceláře a domy</p>
            <h1 className="fu-h1">
              Ráno přijdete<br />
              do <span className="fu-hl">čistého</span>.
            </h1>
            <p className="fu-lede">
              Staráme se o kanceláře, bytové domy a prostory po rekonstrukci
              v Praze. Stabilní tým, jasný harmonogram, žádné výmluvy — vy se
              soustředíte na práci, my na to, aby bylo uklizeno.
            </p>
            <div className="fu-hero-cta">
              <a className="fu-btn fu-btn-primary" href="tel:+420608045256">Zavolat a domluvit prohlídku</a>
              <a className="fu-btn fu-btn-ghost" href="#sluzby">Co uklízíme</a>
            </div>
            <ul className="fu-hero-facts">
              <li><strong>24/7</strong> dostupní pro klienty</li>
              <li><strong>5 mil. Kč</strong> pojištění za škodu</li>
              <li><strong>Praha</strong> a okolí</li>
            </ul>
          </div>

          <figure className="fu-hero-media">
            <img
              src="/hero.webp"
              alt="Uklizená a rozzářená kancelář v Praze po ranním úklidu"
              className="fu-hero-img"
              width={900}
              height={1100}
            />
            <figcaption className="fu-hero-cap">
              <span className="fu-cap-time">06:40</span>
              Než dorazí první z vašich lidí.
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ---------- SLUŽBY ---------- */}
      <section id="sluzby" className="fu-sec fu-services" aria-labelledby="sluzby-h">
        <div className="fu-sec-head">
          <p className="fu-eyebrow fu-eyebrow-dark">Nabídka</p>
          <h2 id="sluzby-h" className="fu-h2">Nejčastěji uklízíme tohle</h2>
          <p className="fu-sec-sub">
            Jednorázově i pravidelně. Řekněte nám, o jaký prostor jde, a
            navrhneme rozsah, četnost i cenu na míru.
          </p>
        </div>

        <ol className="fu-cards">
          <ServiceCard
            n="01"
            title="Kanceláře a firemní prostory"
            body="Reprezentativní prostředí každé ráno — koše, kuchyňky, sociálky, podlahy i doplnění hygienického programu."
            tag="Pravidelně"
          />
          <ServiceCard
            n="02"
            title="Bytové domy a SVJ"
            body="Společné prostory, schodiště, sklepy a vstupy. Stabilní člověk, kterého vaši obyvatelé znají jménem."
            tag="Pravidelně"
          />
          <ServiceCard
            n="03"
            title="Úklid po stavbě a rekonstrukci"
            body="Prach z každé spáry, okna, lepidla i zbytky po řemeslnících. Předáme prostor připravený k nastěhování."
            tag="Jednorázově"
          />
        </ol>

        <figure className="fu-band">
          <img
            src="/section-1.webp"
            alt="Pracovník firmy Fajn úklid při mytí velkých oken kanceláře"
            className="fu-band-img"
            width={1200}
            height={640}
          />
          <figcaption className="fu-band-cap">
            <span className="fu-band-eyebrow">Startujeme pořádně</span>
            <p>
              Spolupráci vždy začínáme důkladným úklidem <strong>na naše
              náklady</strong>. Přivezeme vybavení, nastavíme harmonogram a
              vše připravíme tak, aby pravidelný provoz běžel hladce od
              prvního dne. Vy jen řeknete, kdy začít.
            </p>
          </figcaption>
        </figure>
      </section>

      {/* ---------- DŮVĚRA / O NÁS ---------- */}
      <section id="o-nas" className="fu-sec fu-trust" aria-labelledby="trust-h">
        <div className="fu-trust-grid">
          <div className="fu-trust-copy">
            <p className="fu-eyebrow fu-eyebrow-dark">Proč právě my</p>
            <h2 id="trust-h" className="fu-h2">Úklid, na který se dá spolehnout</h2>
            <p className="fu-sec-sub">
              Jsme prověřená úklidová firma z Prahy. Nejde nám o jednorázovou
              zakázku, ale o vztah, kde se nemusíte ptát, jestli bylo
              uklizeno.
            </p>

            <dl className="fu-stats">
              <div className="fu-stat">
                <dt className="fu-stat-num">15+</dt>
                <dd className="fu-stat-lbl">firmám se staráme o to, aby se lidé v práci cítili lépe a byli produktivnější.</dd>
              </div>
              <div className="fu-stat">
                <dt className="fu-stat-num">94 %</dt>
                <dd className="fu-stat-lbl">kancelářských klientů s námi zůstává déle než dva roky — stabilní personál a jasná komunikace.</dd>
              </div>
            </dl>

            <ul className="fu-promises">
              <li><span aria-hidden="true">✓</span> Ověřený personál z vlastní databáze, prakticky ihned.</li>
              <li><span aria-hidden="true">✓</span> Pojištění za škodu do výše 5 milionů korun.</li>
              <li><span aria-hidden="true">✓</span> Dostupní 24/7, požadavky řešíme v nejkratší době.</li>
            </ul>
          </div>

          <div className="fu-trust-side">
            <figure className="fu-quote">
              <blockquote>
                „Angažovanost a komunikace nám dává jistotu, že jsme si
                partnera vybrali správně.“
              </blockquote>
              <figcaption>K. Daniel — spolumajitel kavárny v Holešovicích</figcaption>
            </figure>

            <figure className="fu-trust-media">
              <img
                src="/section-2.webp"
                alt="Detail čisté a naleštěné podlahy v chodbě bytového domu"
                className="fu-trust-img"
                width={800}
                height={560}
              />
              <figcaption>Chodba bytového domu po pravidelném úklidu.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  n,
  title,
  body,
  tag,
}: {
  n: string;
  title: string;
  body: string;
  tag: string;
}): ReactNode {
  return (
    <li className="fu-card">
      <span className="fu-card-n">{n}</span>
      <span className="fu-card-tag">{tag}</span>
      <h3 className="fu-card-title">{title}</h3>
      <p className="fu-card-body">{body}</p>
    </li>
  );
}
