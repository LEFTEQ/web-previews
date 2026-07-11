import React from "react";

export default function Page() {
  return (
    <main className="pg">
      {/* HERO — postaveno na nůžkách a péči, ne na obecné šabloně */}
      <header className="pg-nav" aria-label="Hlavní navigace">
        <a className="pg-mark" href="#uvod" aria-label="PetGrooming Company, Praha 5">
          <span className="pg-mark__scissors" aria-hidden="true">✂</span>
          <span className="pg-mark__text">
            <span className="pg-mark__pg">PetGrooming</span>
            <span className="pg-mark__co">salon Praha&nbsp;5</span>
          </span>
        </a>
        <nav className="pg-nav__links" aria-label="Sekce">
          <a href="#sluzby">Služby</a>
          <a href="#salon">Náš salon</a>
          <a className="pg-nav__cta" href="tel:+420776390035">Zavolat salonu</a>
        </nav>
      </header>

      <section id="uvod" className="pg-hero">
        <div className="pg-hero__media">
          <img
            src="/hero.webp"
            alt="Střih psa v salonu PetGrooming Company na Radlické, Praha 5"
            className="pg-hero__img"
            width={1200}
            height={1400}
          />
        </div>
        <div className="pg-hero__copy">
          <p className="pg-hero__eyebrow">Radlická 571/70 · Praha 5 · otevřeno každý den 9–21</p>
          <h1 className="pg-hero__title">
            Od <span className="pg-hl">rozčesání</span> po
            <br />exkluzivní účes.
            <br />Klidně i&nbsp;<span className="pg-hl">vzor v&nbsp;srsti</span>.
          </h1>
          <p className="pg-hero__lead">
            Psí i&nbsp;kočičí salon, kde se nespěchá. Ať přijdete na krátké letní stříhání,
            nebo na několikahodinový stylový střih — každému mazlíčkovi věnujeme celou pozornost.
            Střiháme nástroji Moser a&nbsp;kosmetikou Chris Christensen, Jean Peau i&nbsp;PetLine.
          </p>
          <div className="pg-hero__actions">
            <a className="pg-btn" href="tel:+420776390035">Objednat termín · 776 390 035</a>
            <a className="pg-btn pg-btn--ghost" href="#sluzby">Co všechno umíme</a>
          </div>
          <ul className="pg-hero__tags">
            <li>Psi</li>
            <li>Kočky</li>
            <li>Králíci</li>
            <li>Psí hotel</li>
            <li>Mluvíme 5 jazyky</li>
          </ul>
        </div>
      </section>

      {/* SLUŽBY — číslování odpovídá reálné cestě srstí, ne dekoraci */}
      <section id="sluzby" className="pg-services">
        <div className="pg-services__head">
          <h2 className="pg-h2">Služby salonu</h2>
          <p className="pg-services__note">
            Od základní hygieny po kreativní práci. Řekneme vám dopředu, co srsti vašeho
            mazlíčka nejvíc prospěje — a&nbsp;co ne.
          </p>
        </div>

        <div className="pg-cards">
          <article className="pg-card">
            <span className="pg-card__no">01</span>
            <h3>Stříhání psů</h3>
            <p>Od nejjednodušších střihů po exkluzivní účesy podle plemene i&nbsp;vašeho přání.</p>
          </article>
          <article className="pg-card">
            <span className="pg-card__no">02</span>
            <h3>Stříhání koček</h3>
            <p>Konec poletující srsti na oblečení, v&nbsp;jídle i&nbsp;po celém bytě. Šetrně a&nbsp;v&nbsp;klidu.</p>
          </article>
          <article className="pg-card">
            <span className="pg-card__no">03</span>
            <h3>Trimování</h3>
            <p>Vytrhání odumřelé srsti u&nbsp;plemen, kde stříhání nestačí. Srst pak roste zdravě.</p>
          </article>
          <article className="pg-card">
            <span className="pg-card__no">04</span>
            <h3>Koupání a&nbsp;hygiena</h3>
            <p>Péče přesně podle typu srsti — drápky, uši, oči. Vždy s&nbsp;ohledem na vlákno srsti.</p>
          </article>
          <article className="pg-card">
            <span className="pg-card__no">05</span>
            <h3>Kreativní práce</h3>
            <p>Barvení srsti, vystříhané vzory, trimming tetování i&nbsp;tetování přírodní barvou.</p>
          </article>
          <article className="pg-card">
            <span className="pg-card__no">06</span>
            <h3>Focení se zvířaty</h3>
            <p>Profesionální fotografie mazlíčka po střihu — i&nbsp;společné focení s&nbsp;vámi.</p>
          </article>
        </div>

        <figure className="pg-services__figure">
          <img
            src="/section-1.webp"
            alt="Detail péče o srst psa — koupání a hygiena v salonu"
            className="pg-services__img"
            width={1200}
            height={800}
          />
          <figcaption>Kosmetická ošetření: masky, drápky, uši, oči i&nbsp;piercing.</figcaption>
        </figure>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section id="salon" className="pg-about">
        <div className="pg-about__media">
          <img
            src="/section-2.webp"
            alt="Upravený pes po střihu v salonu PetGrooming Company v Praze"
            className="pg-about__img"
            width={1000}
            height={1000}
          />
        </div>
        <div className="pg-about__copy">
          <h2 className="pg-h2">Salon, kde se nespěchá</h2>
          <p>
            Na Radlické v&nbsp;Praze 5 se o&nbsp;mazlíčky staráme každý den od 9 do 21 hodin.
            Věnujeme se běžnému stříhání stejně pečlivě jako složitým několikahodinovým střihům —
            a&nbsp;kromě psů a&nbsp;koček zvládneme i&nbsp;králíky a&nbsp;další drobné mazlíčky.
          </p>
          <dl className="pg-facts">
            <div>
              <dt>Značky, se kterými pracujeme</dt>
              <dd>Moser · Chris Christensen · Jean Peau · PetLine</dd>
            </div>
            <div>
              <dt>Domluvíme se</dt>
              <dd>Česky · rusky · anglicky · italsky · ukrajinsky</dd>
            </div>
            <div>
              <dt>Navíc u&nbsp;nás najdete</dt>
              <dd>Psí hotel pro psy, kočky, hlodavce i&nbsp;ptáky</dd>
            </div>
          </dl>
          <div className="pg-contactcard">
            <p className="pg-contactcard__addr">Radlická 571/70, 150 00 Praha 5</p>
            <p className="pg-contactcard__hours">Po–Ne 9:00–21:00</p>
            <a className="pg-btn" href="tel:+420776390035">Zavolat: 776 390 035</a>
            <a className="pg-link" href="mailto:info@strihanipsu-praha5.cz">info@strihanipsu-praha5.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
