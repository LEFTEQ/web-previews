import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="cr">
      {/* HERO — the most characteristic thing: the bent steel bar / stirrup */}
      <header className="cr-hero">
        <div className="cr-hero__grid">
          <div className="cr-hero__text">
            <div className="cr-wordmark" aria-label="Craftech, armovna v Pardubicích">
              <span className="cr-wordmark__mark" aria-hidden="true">⌐</span>
              <span className="cr-wordmark__name">Craftech</span>
              <span className="cr-wordmark__sub">armovna · Pardubice</span>
            </div>

            <p className="cr-eyebrow">Zpracování betonářské oceli od roku 2016</p>
            <h1 className="cr-hero__title">
              Ohýbáme ocel,<br />
              která drží<br />
              <em>mosty i domy.</em>
            </h1>
            <p className="cr-hero__lede">
              Tyče do průměru 32&nbsp;mm, svitky do 16&nbsp;mm, kari sítě na míru.
              Řežeme a ohýbáme na strojích SCHNELL a PEDAX — a přivezeme to rovnou
              na vaši stavbu.
            </p>
            <div className="cr-hero__actions">
              <a className="cr-btn cr-btn--solid" href="tel:+420602190000">Zavolat do armovny</a>
              <a className="cr-btn cr-btn--ghost" href="#vyroba">Co vyrábíme</a>
            </div>

            <dl className="cr-spec">
              <div>
                <dt>Tyče</dt>
                <dd>Ø&nbsp;až&nbsp;32&nbsp;mm</dd>
              </div>
              <div>
                <dt>Svitky</dt>
                <dd>Ø&nbsp;až&nbsp;16&nbsp;mm</dd>
              </div>
              <div>
                <dt>Jeřáby</dt>
                <dd>3&nbsp;×&nbsp;12,5&nbsp;t</dd>
              </div>
            </dl>
          </div>

          <figure className="cr-hero__figure">
            <img
              src="/hero.webp"
              alt="Naohýbaná betonářská ocel a armovací koše připravené k expedici v hale armovny"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption className="cr-hero__cap">
              Armovna Pardubice · střih &amp; ohyb · certifikovaný materiál
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SECTION 1 — VÝROBA / SLUŽBY */}
      <section className="cr-sec" id="vyroba" aria-labelledby="vyroba-h">
        <div className="cr-sec__head">
          <span className="cr-sec__no">01</span>
          <h2 id="vyroba-h" className="cr-sec__title">Výroba a doprava</h2>
          <p className="cr-sec__intro">
            Odebíráme jen certifikovanou ocel s atesty. Co naohýbáme, umíme také
            odborně uložit — s distančními prvky i vázacím drátem.
          </p>
        </div>

        <div className="cr-cards">
          <article className="cr-card">
            <span className="cr-card__tag">Ø ≤ 32 mm</span>
            <h3>Střih a ohyb tyčí</h3>
            <p>
              Betonářskou ocel v tyčích zpracujeme až do průměru 32&nbsp;mm.
              Přesný střih na požadované délky logisticky roztřídíme na tyče
              k finálnímu použití i k dalšímu ohybu.
            </p>
          </article>
          <article className="cr-card">
            <span className="cr-card__tag">Ø ≤ 16 mm</span>
            <h3>Třmínky ze svitků</h3>
            <p>
              Automatická obousměrná třmínkovačka zvládne za tepla válcovanou
              i za studena taženou ocel ve svitcích do průměru 16&nbsp;mm.
            </p>
          </article>
          <article className="cr-card">
            <span className="cr-card__tag">Na míru</span>
            <h3>Kari sítě</h3>
            <p>
              Vyrábíme a svařujeme kari sítě standardních i atypických rozměrů
              podle výkresu vaší stavby.
            </p>
          </article>
          <article className="cr-card">
            <span className="cr-card__tag">Na stavbu</span>
            <h3>Doprava a uložení</h3>
            <p>
              Zajistíme dopravu výrobků přímo na stavbu, jejich složení
              a odborné položení armatur včetně souvisejícího materiálu.
            </p>
          </article>
        </div>

        <figure className="cr-band">
          <img
            src="/section-1.webp"
            alt="Automatická linka na střih a ohyb betonářské oceli v provozu armovny Craftech"
            width={1400}
            height={800}
            loading="lazy"
          />
          <figcaption>Stroje SCHNELL &amp; PEDAX · pravidelný servis · přesné délky</figcaption>
        </figure>
      </section>

      {/* SECTION 2 — ARMOVNA + REFERENCE (trust) */}
      <section className="cr-sec cr-sec--dark" id="armovna" aria-labelledby="armovna-h">
        <div className="cr-about">
          <div className="cr-about__text">
            <span className="cr-sec__no cr-sec__no--light">02</span>
            <h2 id="armovna-h" className="cr-sec__title">O armovně</h2>
            <p>
              Armovna Craftech vznikla v roce 2016 v Pardubicích za účelem
              zpracování betonářské oceli. Pod jednou střechou máme soustředěné
              všechny stroje na střih a ohyb — plus tři jeřáby o nosnosti
              12,5&nbsp;tuny, které pokryjí celý prostor haly a usnadní nakládku.
            </p>
            <p>
              Cíl je jednoduchý: rychlá a spolehlivá výroba za nejnižší možnou
              cenu a v bezvadné kvalitě. V letech 2019–2022 jsme s podporou fondů
              EU pořídili automatickou třmínkovačku, dopravník tyčí, stříhací
              linku i ERP systém.
            </p>
            <a className="cr-btn cr-btn--solid" href="mailto:obchod@craftech.cz">Poptat výrobu</a>
          </div>

          <figure className="cr-about__figure">
            <img
              src="/section-2.webp"
              alt="Hala armovny Craftech s jeřábem a připravenými svazky armatury"
              width={900}
              height={700}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="cr-refs">
          <h3 className="cr-refs__h">Aktuálně stavíme výztuž pro</h3>
          <ul className="cr-refs__list">
            {[
              ["Most", "silnice III/29022, Josefův Dvůr"],
              ["Most", "Opatovice nad Labem"],
              ["Most", "I/11, Chlumec nad Cidlinou"],
              ["Bytový dům", "Rezidence J5, Chrudim"],
              ["Bytový dům", "Rezidence Podbaba, Praha 6"],
              ["Prodejní sklad", "Haberkorn Ulmer, Vratislavice n. L."],
              ["Nemocnice", "přístavba, Dvůr Králové n. L."],
              ["ČOV", "Moravany"],
              ["Stezka v korunách", "Janské Lázně"],
              ["Bytový dům", "Peprník, Pardubice"],
            ].map(([kind, place]) => (
              <li key={`${kind}-${place}`} className="cr-ref">
                <span className="cr-ref__kind">{kind}</span>
                <span className="cr-ref__place">{place}</span>
              </li>
            ))}
          </ul>

          <div className="cr-contact">
            <p className="cr-contact__label">Poptávky a termíny</p>
            <p className="cr-contact__line">
              <a href="tel:+420724900332">+420&nbsp;724&nbsp;900&nbsp;332</a>
              <span aria-hidden="true"> · </span>
              <a href="mailto:obchod@craftech.cz">obchod@craftech.cz</a>
            </p>
            <p className="cr-contact__note">Máte výkresy? Pošlete je — obratem spočítáme cenu i termín.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// keep import used for typing discipline in server component
export const dynamic = "force-static";
const _unused: CSSProperties = {};
void _unused;
