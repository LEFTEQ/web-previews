import type { CSSProperties } from "react";

export default function Page() {
  const directory: { num: string; name: string; note: string }[] = [
    { num: "220", name: "Obchody", note: "móda, obuv, doplňky" },
    { num: "24", name: "Restaurace", note: "kavárny, bistra, gastro" },
    { num: "1", name: "Kino", note: "multikino pod jednou střechou" },
  ];

  const kategorie: { title: string; items: string[]; hint: string }[] = [
    {
      title: "Nitě & příze",
      hint: "na patku i na návrat knoflíku",
      items: ["Bavlněné nitě na míru odstínu", "Vlny a příze na pletení", "Vyšívací bavlnky", "Cívky do šicího stroje"],
    },
    {
      title: "Knoflíky & spony",
      hint: "od perleti po dřevo",
      items: ["Perleťové a rohové knoflíky", "Patenty, druky a nýty", "Přezky a spony na kabelky", "Zipy dělitelné i skryté"],
    },
    {
      title: "Stuhy & lemovky",
      hint: "metry, které drží tvar",
      items: ["Saténové a rypsové stuhy", "Krajky a paspulky", "Gumy, tkanice a šňůry", "Lemovací pásky"],
    },
  ];

  return (
    <main className="gal">
      {/* HERO */}
      <header className="hero">
        <div className="hero__bar">
          <a className="wordmark" href="#top" aria-label="Galanterie Nová Karolina, domů">
            <span className="wordmark__mark" aria-hidden="true">
              <span className="btn-hole" />
              <span className="btn-hole" />
              <span className="btn-hole" />
              <span className="btn-hole" />
            </span>
            <span className="wordmark__txt">
              <b>Galanterie</b>
              <em>Nová Karolina</em>
            </span>
          </a>
          <p className="hero__open">
            <span className="dot" aria-hidden="true" /> Dnes otevřeno&nbsp;9–21
            <span className="sep">·</span> Ostrava
          </p>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Galanterie ve Foru Nová Karolina · Ostrava</p>
            <h1 className="hero__title">
              Chybí <span className="u">knoflík</span>,
              <br />
              najdeme přesně ten <span className="i">váš</span>.
            </h1>
            <p className="hero__lead">
              Zásuvka plná perleti, cívky nití seřazené podle odstínů, metry stuh
              na jedno natažení ruky. Přijďte s tím, co potřebujete došít, spravit
              nebo dozdobit — poradíme a odměříme na počkání.
            </p>
            <div className="hero__cta">
              <a className="pill pill--solid" href="#nabidka">
                Co u nás najdete
              </a>
              <a className="pill pill--ghost" href="#kde">
                Kde nás v centru hledat
              </a>
            </div>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Detail galanterie — knoflíky, cívky nití a stuhy seřazené podle barev"
              className="hero__img"
              width={880}
              height={1040}
            />
            <figcaption className="hero__tag">Odstíny nití řadíme jako paletu — přineste vzorek látky.</figcaption>
          </figure>
        </div>

        <dl className="tally" aria-label="Forum Nová Karolina v číslech">
          {directory.map((d) => (
            <div className="tally__item" key={d.name}>
              <dt className="tally__num">{d.num}</dt>
              <dd className="tally__meta">
                <b>{d.name}</b>
                <span>{d.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* NABÍDKA */}
      <section id="nabidka" className="offer" aria-labelledby="offer-h">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Nabídka</p>
          <h2 id="offer-h" className="section-title">
            Tři zásuvky, ze kterých žijeme
          </h2>
          <p className="section-sub">
            Netlačíme metry ani gramy. Odměříme přesně tolik stuhy nebo tolik
            gumy, kolik potřebujete — a když si nejste jistí, spočítáme to s vámi.
          </p>
        </div>

        <div className="offer__grid">
          <ol className="drawers">
            {kategorie.map((k, idx) => (
              <li className="drawer" key={k.title}>
                <span className="drawer__no" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="drawer__body">
                  <h3 className="drawer__title">
                    {k.title} <span className="drawer__hint">— {k.hint}</span>
                  </h3>
                  <ul className="drawer__list">
                    {k.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <figure className="offer__figure">
            <img
              src="/section-1.webp"
              alt="Regál galanterie plný stuh, přízí a drobného šicího vybavení"
              className="offer__img"
              width={760}
              height={900}
            />
            <figcaption className="offer__cap">
              Přineste vzorek látky nebo starý knoflík. Podle něj dohledáme pár,
              který v šatníku nikdo nepozná od originálu.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* KDE / O NÁS */}
      <section id="kde" className="about" aria-labelledby="about-h">
        <div className="about__grid">
          <figure className="about__figure">
            <img
              src="/section-2.webp"
              alt="Pult galanterie s odměřenou stuhou a nůžkami"
              className="about__img"
              width={760}
              height={620}
            />
          </figure>

          <div className="about__copy">
            <p className="eyebrow eyebrow--dark">Kde nás najdete</p>
            <h2 id="about-h" className="section-title">
              V patře plném módy, kousek od látek
            </h2>
            <p className="section-sub">
              Jsme v pasáži Fora Nová Karolina na Karolině v Ostravě — mezi 220
              obchody a 24 restauracemi. Zaparkujete v centru, doděláte nákup a
              cestou vyřešíte i ten knoflík, co už měsíc leží doma na komodě.
            </p>

            <dl className="facts">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Ne 9:00–21:00, i o svátcích</dd>
              </div>
              <div>
                <dt>Kde přesně</dt>
                <dd>Pasáž Fora Nová Karolina, Ostrava</dd>
              </div>
              <div>
                <dt>Odměřování</dt>
                <dd>Stuhy, gumy a šňůry na metry na počkání</dd>
              </div>
              <div>
                <dt>Poradíme</dt>
                <dd>Vezmeme vzorek a najdeme odstín i knoflík</dd>
              </div>
            </dl>

            <blockquote className="quote">
              „Přišla jsem s utrženým knoflíkem od kabátu a odešla s pěti
              perleťovými, co sedí líp než originál. Za pět minut.“
              <cite>— zákaznice, kterou tu potkáváme každý podzim</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
