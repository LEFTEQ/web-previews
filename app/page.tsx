import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GONO Bauelemente — plastová okna Salamander | Halže-Tachov",
  description:
    "Dodáváme a montujeme plastová okna z profilu Salamander, vchodové dveře, parapety, rolety, žaluzie a garážová vrata. Rodinná firma z Tachovska od roku 1993.",
  openGraph: {
    title: "GONO Bauelemente — plastová okna Salamander",
    description:
      "Okna, dveře, parapety a vrata na míru. Zaměření, výroba i montáž na Tachovsku od roku 1993.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Plastové okno GONO Bauelemente" }],
  },
};

const profil = [
  { m: "70", l: "mm stavební hloubka profilu" },
  { m: "5", l: "komor v rámu i křídle" },
  { m: "2×", l: "těsnění po celém obvodu" },
];

const sortiment = [
  {
    k: "Okna",
    t: "Plastová okna Salamander",
    d: "Bílá i v dekorech dřeva. Zaměříme přesně na váš otvor, vyrobíme a osadíme — včetně začištění a nové parapetní hrany.",
  },
  {
    k: "Dveře",
    t: "Vchodové dveře",
    d: "Design ladíme přesně k oknům, takže dům drží jednu linku. Bezpečnostní kování a zateplená výplň jsou samozřejmostí.",
  },
  {
    k: "Parapety",
    t: "Vnitřní i venkovní",
    d: "Venku hliník, který drží déšť i mráz. Uvnitř na výběr teplá dřevotříska nebo praktický, snadno udržovatelný plast.",
  },
  {
    k: "Stínění",
    t: "Rolety a žaluzie",
    d: "Venkovní rolety proti letnímu žáru, vnitřní žaluzie pro clonu i soukromí. Ovládání ruční, nebo na dálku motorem.",
  },
  {
    k: "Vrata",
    t: "Garážová a průmyslová",
    d: "Sekční vrata navržená tak, aby vydržela každodenní provoz i drsnější podmínky. K nim spolehlivé pohony a dálkové ovládání.",
  },
];

export default function Page() {
  return (
    <main className="g-page">
      <header className="g-top">
        <a className="g-mark" href="#" aria-label="GONO Bauelemente, úvod">
          <span className="g-mark-name">GONO</span>
          <span className="g-mark-sub">Bauelemente</span>
        </a>
        <a className="g-tel" href="tel:+420374724129">374&nbsp;724&nbsp;129</a>
      </header>

      <section className="g-hero">
        <div className="g-hero-copy">
          <p className="g-eyebrow">Plastová okna &middot; Halže-Tachov &middot; od roku 1993</p>
          <h1 className="g-h1">
            Okno, které<br />
            <span className="g-h1-accent">sedne na milimetr.</span>
          </h1>
          <p className="g-lede">
            Vyrábíme a montujeme okna z profilu Salamander — od zaměření
            u vás doma až po začištěnou špaletu. Žádní prostředníci, řemeslo
            z jedné dílny na Tachovsku.
          </p>
          <div className="g-cta-row">
            <a className="g-btn" href="tel:+420374724129">Zavolat 374&nbsp;724&nbsp;129</a>
            <a className="g-btn g-btn-ghost" href="#sortiment">Prohlédnout nabídku</a>
          </div>
        </div>
        <figure className="g-hero-fig">
          <img
            className="g-hero-img"
            src="/hero.webp"
            alt="Detail plastového okna Salamander od firmy GONO Bauelemente"
            width={900}
            height={1100}
          />
          <figcaption className="g-hero-spec">
            <dl className="g-spec">
              {profil.map((p) => (
                <div className="g-spec-item" key={p.l}>
                  <dt className="g-spec-m">{p.m}</dt>
                  <dd className="g-spec-l">{p.l}</dd>
                </div>
              ))}
            </dl>
          </figcaption>
        </figure>
      </section>

      <section className="g-sect" id="sortiment" aria-labelledby="sortiment-h">
        <div className="g-sect-head">
          <p className="g-eyebrow">Co u nás pořídíte</p>
          <h2 className="g-h2" id="sortiment-h">
            Celý dům z jedné dílny
          </h2>
          <p className="g-sect-intro">
            Okna, dveře i stínění spolu ladí, protože je řešíme dohromady.
            Přijedeme, zaměříme a poradíme, co dává v konkrétním otvoru smysl.
          </p>
        </div>

        <ul className="g-list">
          {sortiment.map((s) => (
            <li className="g-card" key={s.t}>
              <span className="g-card-kicker">{s.k}</span>
              <h3 className="g-card-t">{s.t}</h3>
              <p className="g-card-d">{s.d}</p>
            </li>
          ))}
          <li className="g-card g-card-img">
            <img
              src="/section-1.webp"
              alt="Montáž plastových oken a dveří na stavbě"
              width={600}
              height={400}
              className="g-card-photo"
            />
          </li>
        </ul>
      </section>

      <section className="g-sect g-about" aria-labelledby="about-h">
        <figure className="g-about-fig">
          <img
            src="/section-2.webp"
            alt="Řemeslník firmy GONO Bauelemente při zaměření okna"
            width={700}
            height={560}
            className="g-about-img"
          />
        </figure>
        <div className="g-about-copy">
          <p className="g-eyebrow">Kdo za tím stojí</p>
          <h2 className="g-h2" id="about-h">
            Od roku 1993, pořád stejná ruka
          </h2>
          <p className="g-about-p">
            Začínal Petr Gono jako živnostník. V roce 2002 z toho vznikla
            firma GONO Bauelemente s.r.o. — ale přístup zůstal řemeslný:
            k oknu přijedeme, změříme ho sami a sami ho i osadíme.
          </p>
          <dl className="g-facts">
            <div className="g-fact">
              <dt>Na trhu</dt>
              <dd>od roku 1993</dd>
            </div>
            <div className="g-fact">
              <dt>Profil oken</dt>
              <dd>Salamander</dd>
            </div>
            <div className="g-fact">
              <dt>Kde nás najdete</dt>
              <dd>Svobodka 21, Halže-Tachov</dd>
            </div>
            <div className="g-fact">
              <dt>Zavolejte</dt>
              <dd>
                <a className="g-fact-link" href="tel:+420374724129">
                  374&nbsp;724&nbsp;129
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
