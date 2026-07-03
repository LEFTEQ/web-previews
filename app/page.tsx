import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      idx: "01",
      name: "Bělení zubů",
      desc: "Šetrné ordinační bělení. Odstín si vybereme společně na vzorníku, výsledek uvidíte hned po prvním sezení.",
      detail: "cca 60 minut",
    },
    {
      idx: "02",
      name: "Zubní implantáty",
      desc: "Trvalá náhrada chybějícího zubu, která drží jako vlastní. Vhojení sledujeme na kontrolách, dokud není vše přesně tak, jak má.",
      detail: "titanový kořen",
    },
    {
      idx: "03",
      name: "Obličejová estetika",
      desc: "Doplnění péče o úsměv jemným ošetřením okolí rtů a tváří. Vždy střídmě a s rozvahou, přirozený výraz zůstane váš.",
      detail: "po konzultaci",
    },
  ];

  return (
    <main className="sd">
      <header className="sd-nav">
        <a className="sd-mark" href="#top" aria-label="Smile Dental, Plzeň">
          <span className="sd-mark__smile">Smile</span>
          <span className="sd-mark__dental">Dental</span>
          <span className="sd-mark__dot" aria-hidden="true" />
        </a>
        <a className="sd-nav__call" href="tel:+420377259073">
          Objednat se · 377 259 073
        </a>
      </header>

      <section className="sd-hero" id="top">
        <div className="sd-hero__copy">
          <p className="sd-eyebrow">Zubní ordinace · Alej Svobody 55, Plzeň</p>
          <h1 className="sd-hero__title">
            Sednete si.
            <br />
            <span className="sd-hero__accent">Vydechnete.</span>
            <br />
            Usmějete se.
          </h1>
          <p className="sd-hero__lead">
            Klidná ordinace v prvním patře GERA Medical &amp; Dental Spa. Bez
            spěchu, bez řečí přes hlavu — co s vámi budeme dělat, uslyšíte
            dřív, než se to stane.
          </p>
          <div className="sd-hero__actions">
            <a className="sd-btn" href="tel:+420377259073">
              Zavolat a objednat se
            </a>
            <a className="sd-btn sd-btn--ghost" href="#sluzby">
              Co u nás zvládneme
            </a>
          </div>
          <dl className="sd-hours">
            <div>
              <dt>Po–Pá</dt>
              <dd>8:00–19:00</dd>
            </div>
            <div>
              <dt>Sobota</dt>
              <dd>dle dohody</dd>
            </div>
          </dl>
        </div>
        <figure className="sd-hero__media">
          <img
            src="/hero.webp"
            alt="Světlá zubní ordinace Smile Dental v Plzni s křeslem u okna"
            className="sd-hero__img"
          />
        </figure>
      </section>

      <section className="sd-services" id="sluzby">
        <div className="sd-services__head">
          <p className="sd-eyebrow">Co u nás zvládneme</p>
          <h2 className="sd-h2">
            Tři věci, kvůli kterým sem lidé jezdí i přes celou Plzeň.
          </h2>
        </div>
        <ol className="sd-cards">
          {services.map((s) => (
            <li className="sd-card" key={s.idx}>
              <span className="sd-card__idx" aria-hidden="true">
                {s.idx}
              </span>
              <h3 className="sd-card__name">{s.name}</h3>
              <p className="sd-card__desc">{s.desc}</p>
              <span className="sd-card__detail">{s.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="sd-about" id="o-nas">
        <figure className="sd-about__media">
          <img
            src="/section-1.webp"
            alt="Detail ošetření v ordinaci Smile Dental"
            className="sd-about__img sd-about__img--1"
          />
          <img
            src="/section-2.webp"
            alt="Recepce a čekárna Smile Dental v Plzni"
            className="sd-about__img sd-about__img--2"
          />
        </figure>
        <div className="sd-about__copy">
          <p className="sd-eyebrow">Kde nás najdete</p>
          <h2 className="sd-h2">
            V prvním patře nad plzeňskou Alejí Svobody.
          </h2>
          <p className="sd-about__lead">
            Jsme součástí GERA Medical &amp; Dental Spa — máme blízko k dalším
            odborníkům, když je potřeba. Objednaný čas je opravdu váš: bereme
            jednoho pacienta v jednu chvíli, na nikoho nespěcháme.
          </p>
          <ul className="sd-facts">
            <li>
              <span className="sd-facts__k">Adresa</span>
              <span className="sd-facts__v">
                Alej Svobody 55, 323 00 Plzeň — 1. patro
              </span>
            </li>
            <li>
              <span className="sd-facts__k">Telefon</span>
              <span className="sd-facts__v">
                <a href="tel:+420377259073">377 259 073</a> ·{" "}
                <a href="tel:+420774336825">774&nbsp;DENTAL</a>
              </span>
            </li>
            <li>
              <span className="sd-facts__k">E-mail</span>
              <span className="sd-facts__v">
                <a href="mailto:info@smiledental.cz">info@smiledental.cz</a>
              </span>
            </li>
          </ul>
          <p className="sd-about__note">
            Bojíte se zubaře? Řekněte nám to hned na začátku. Domluvíme tempo,
            které zvládnete — i kdyby to mělo být po malých krocích.
          </p>
        </div>
      </section>
    </main>
  );
}
