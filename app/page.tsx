import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="lm">
      {/* HERO */}
      <header className="lm-hero">
        <img
          className="lm-hero__img"
          src="/hero.webp"
          alt="Prodejna zahradní techniky LEMER v Ústí nad Labem s robotickými sekačkami a motorovými pilami"
          width={1600}
          height={1000}
        />
        <div className="lm-hero__shade" aria-hidden="true" />

        <nav className="lm-nav" aria-label="Hlavní navigace">
          <a className="lm-mark" href="#uvod" aria-label="LEMER — zahradní technika, úvod">
            <span className="lm-mark__word">LEMER</span>
            <span className="lm-mark__sub">zahradní technika · Ústí n. L.</span>
          </a>
          <ul className="lm-nav__links">
            <li><a href="#sortiment">Sortiment</a></li>
            <li><a href="#servis">Servis</a></li>
            <li><a href="tel:+420724699357" className="lm-nav__phone">724&nbsp;699&nbsp;357</a></li>
          </ul>
        </nav>

        <div className="lm-hero__body">
          <p className="lm-hero__eyebrow">Autorizovaný servis &amp; prodejna · od roku 1992</p>
          <h1 className="lm-hero__title">
            Ať vám trávník<br />roste. <em>Práci</em><br />nechte na strojích.
          </h1>
          <p className="lm-hero__lede">
            STIHL, STIGA, VARI, SECO i robotické sekačky Mammotion — vybalíme,
            sestavíme a předáme připravené k práci. A když je potřeba, opravíme
            u nás na dílně v Ústí nad Labem.
          </p>
          <div className="lm-hero__cta">
            <a className="lm-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="lm-btn lm-btn--ghost" href="tel:+420724699357">Zavolat na prodejnu</a>
          </div>
          <ul className="lm-hero__facts">
            <li><b>32</b><span>let na trhu</span></li>
            <li><b>6</b><span>značek pod jednou střechou</span></li>
            <li><b>0&nbsp;Kč</b><span>doprava &amp; sestavení stroje</span></li>
          </ul>
        </div>
      </header>

      {/* SORTIMENT */}
      <section id="sortiment" className="lm-sec lm-sec--grid" aria-labelledby="sortiment-nad">
        <div className="lm-sec__head">
          <p className="lm-kicker">Co u nás pořídíte</p>
          <h2 id="sortiment-nad" className="lm-h2">
            Od motorové pily po sekačku, která se stará sama
          </h2>
          <p className="lm-sec__intro">
            Značky, které opravdu prodáváme a servisujeme. U každého stroje
            poradíme, co se hodí na vaši zahradu — ne co je zrovna na skladě.
          </p>
        </div>

        <ul className="lm-cards">
          {[
            {
              tag: "STIHL",
              t: "Motorové pily a akubaterie",
              d: "Motorové i akumulátorové pily, kosy, rosiče, tlakové myčky. Akuprogram STIHL — výkon benzínu, klid elektřiny.",
            },
            {
              tag: "STIGA",
              t: "Sekačky a travní traktory",
              d: "Benzinové sekačky, travní traktory a sněhové frézy pro větší pozemky.",
            },
            {
              tag: "Roboti",
              t: "Robotické sekačky bez drátu",
              d: "LUBA, YUKA a Mammotion. Nastavíme, vysvětlíme — a vy už jen sledujete rovný trávník.",
            },
            {
              tag: "VARI",
              t: "Bubnové sekačky a štípače",
              d: "Mulčovače, bubnové sekačky a štípače dřeva na náročný terén.",
            },
            {
              tag: "SECO",
              t: "Zahradní traktory SECO",
              d: "Traktory a příslušenství pro celoroční údržbu velkých ploch.",
            },
            {
              tag: "B&S",
              t: "Motory a elektrocentrály",
              d: "Motory a elektrocentrály Briggs & Stratton, náhradní díly i příslušenství RYKOV.",
            },
          ].map((c, i) => (
            <li className="lm-card" key={c.tag} style={{ "--i": i } as CSSProperties}>
              <span className="lm-card__tag">{c.tag}</span>
              <h3 className="lm-card__t">{c.t}</h3>
              <p className="lm-card__d">{c.d}</p>
            </li>
          ))}
        </ul>

        <figure className="lm-figure">
          <img
            src="/section-1.webp"
            alt="Robotická sekačka udržuje trávník před rodinným domem"
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption>
            Robotická sekačka posekaná každý den — nikdy naráz, nikdy vysoko.
            Vejde se i pod keře a k plotu.
          </figcaption>
        </figure>
      </section>

      {/* SERVIS / KDO JSME */}
      <section id="servis" className="lm-sec lm-sec--split" aria-labelledby="servis-nad">
        <div className="lm-split__media">
          <img
            src="/section-2.webp"
            alt="Servisní technik LEMER sestavuje a kontroluje nový stroj na dílně"
            width={1200}
            height={1400}
            loading="lazy"
          />
        </div>

        <div className="lm-split__text">
          <p className="lm-kicker lm-kicker--light">Co je skryté v ceně</p>
          <h2 id="servis-nad" className="lm-h2 lm-h2--light">
            Nekoupíte krabici. Odvezete si hotový stroj.
          </h2>
          <p className="lm-split__intro">
            Radost z kvalitního stroje se zajištěným servisem vydrží déle než
            radost z levné náhražky. Proto u nás v ceně dostanete i to, co
            u konkurence platíte navíc.
          </p>

          <ol className="lm-steps">
            <li>
              <span className="lm-steps__no">01</span>
              <div>
                <h3>Přeprava na naše náklady</h3>
                <p>Stroj přivezeme až k vám — dopravu neplatíte.</p>
              </div>
            </li>
            <li>
              <span className="lm-steps__no">02</span>
              <div>
                <h3>Vybalíme a odborně sestavíme</h3>
                <p>Stroj z krabice připravíme do provozuschopného stavu.</p>
              </div>
            </li>
            <li>
              <span className="lm-steps__no">03</span>
              <div>
                <h3>Vyzkoušíte na prodejně</h3>
                <p>Sestavený stroj si osaháte a nastartujete ještě u nás.</p>
              </div>
            </li>
            <li>
              <span className="lm-steps__no">04</span>
              <div>
                <h3>Odpad zlikvidujeme za vás</h3>
                <p>Obaly odvezeme do tříděného sběru — nic po nás neuklízíte.</p>
              </div>
            </li>
          </ol>

          <p className="lm-split__sign">
            Autorizovaný servis STIHL, STIGA, SECO, VARI-Honda a Briggs &amp; Stratton.
            Prodejna: Masarykova 1037/203, Ústí nad Labem.
          </p>
        </div>
      </section>
    </main>
  );
}
