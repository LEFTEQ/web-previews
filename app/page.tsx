import type { CSSProperties } from "react";

export default function Page() {
  const denniMenu = [
    { den: "Pondělí", polevka: "Hovězí vývar s játrovými knedlíčky", hlavni: "Svíčková na smetaně, houskový knedlík" },
    { den: "Úterý", polevka: "Zelňačka s klobásou", hlavni: "Vepřo knedlo zelo po brněnsku" },
    { den: "Středa", polevka: "Česneková s krutony a sýrem", hlavni: "Kuřecí řízek, bramborová kaše" },
    { den: "Čtvrtek", polevka: "Bramboračka na houbách", hlavni: "Guláš z hovězího líčka, domácí houskový knedlík" },
    { den: "Pátek", polevka: "Dršťková", hlavni: "Smažený sýr, hranolky, tatarská omáčka" },
  ];

  const piva = [
    { nazev: "Poličská Otakar", styl: "11° ležák", pozn: "jemná hořkost, plná pěna" },
    { nazev: "Kamenice", styl: "12° ležák", pozn: "z malého pivovaru u Jihlavy" },
    { nazev: "Radegast", styl: "10° výčepní", pozn: "když má člověk žízeň, ne hlad" },
  ];

  return (
    <main className="pd">
      <a href="#obsah" className="pd-skip">Přeskočit na obsah</a>

      <header className="pd-nav" aria-label="Hlavní navigace">
        <a href="#hero" className="pd-wordmark" aria-label="Restaurace Podloubí — domů">
          <span className="pd-wm-arc" aria-hidden="true">
            <span className="pd-wm-arc-line" />
          </span>
          <span className="pd-wm-name">
            <span className="pd-wm-small">Restaurace</span>
            <span className="pd-wm-big">Podloubí</span>
          </span>
        </a>
        <nav className="pd-links">
          <a href="#menu">Denní menu</a>
          <a href="#pivo">Co točíme</a>
          <a href="#tel" className="pd-nav-tel">731 186 816</a>
        </nav>
      </header>

      <section id="hero" className="pd-hero" aria-labelledby="hero-nadpis">
        <div className="pd-hero-media">
          <img
            src="/hero.webp"
            alt="Točené pivo a talíř s domácím obědem na stole v restauraci Podloubí"
            className="pd-hero-img"
            width={1600}
            height={1200}
          />
          <div className="pd-hero-shade" aria-hidden="true" />
        </div>

        <div className="pd-hero-body" id="obsah">
          <p className="pd-hero-eyebrow">Smetanova 41 · Brno · pod podloubím</p>
          <h1 id="hero-nadpis" className="pd-hero-nadpis">
            Točíme <span className="pd-hl">Poličku</span>,<br />
            vaříme oběd<br />
            jako doma.
          </h1>
          <p className="pd-hero-lead">
            Poctivá brněnská hospoda pod loubím. Denní menu do 14:30, večer
            sportovní přenosy na O2 TV a k tomu tři piva, která stojí za to.
          </p>
          <div className="pd-hero-cta">
            <a href="#tel" className="pd-btn pd-btn-primary">Rezervovat stůl</a>
            <a href="#menu" className="pd-btn pd-btn-ghost">Co je dnes k obědu</a>
          </div>
          <dl className="pd-hero-fakta">
            <div>
              <dt>Kuchyně</dt>
              <dd>Po–Pá 11–22 · obědy do 14:30</dd>
            </div>
            <div>
              <dt>Víkend</dt>
              <dd>So–Ne 16–22</dd>
            </div>
            <div>
              <dt>Parkování</dt>
              <dd>hodina denně zdarma, víkend celý zdarma</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="menu" className="pd-menu" aria-labelledby="menu-nadpis">
        <div className="pd-sec-head">
          <p className="pd-sec-eyebrow">Polední nabídka</p>
          <h2 id="menu-nadpis">Denní menu, které se mění po dnech v týdnu</h2>
          <p className="pd-sec-note">
            Vaříme čerstvě, obědy točíme do 14:30. Ceny držíme lidové —
            přijďte, dokud je teplo na plotně.
          </p>
        </div>

        <ol className="pd-tydny" aria-label="Denní menu podle dnů v týdnu">
          {denniMenu.map((d) => (
            <li className="pd-den" key={d.den}>
              <span className="pd-den-tag">{d.den}</span>
              <div className="pd-den-jidla">
                <p className="pd-den-pol">{d.polevka}</p>
                <p className="pd-den-hl">{d.hlavni}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="pd-menu-foto">
          <img
            src="/section-1.webp"
            alt="Domácí hlavní jídlo naservírované v restauraci Podloubí"
            width={1200}
            height={900}
          />
          <p className="pd-menu-foto-pop">
            Kromě piva máme i nealko, kávu a chuťovky k pivu, když přijdete jen
            tak posedět.
          </p>
        </div>
      </section>

      <section id="pivo" className="pd-pivo" aria-labelledby="pivo-nadpis">
        <div className="pd-pivo-grid">
          <div className="pd-pivo-text">
            <p className="pd-sec-eyebrow pd-eyebrow-light">Za výčepem</p>
            <h2 id="pivo-nadpis">Tři pípy, o které se staráme jako o rodinu</h2>
            <p className="pd-pivo-lead">
              Neplýtváme kohouty na trendy — držíme piva, která nezklamou.
              Poličku a Kamenici z malých pivovarů, Radegast na žízeň.
            </p>

            <ul className="pd-pipy">
              {piva.map((p, i) => (
                <li className="pd-pipa" key={p.nazev}>
                  <span className="pd-pipa-cislo" aria-hidden="true">{`0${i + 1}`}</span>
                  <span className="pd-pipa-info">
                    <span className="pd-pipa-nazev">{p.nazev}</span>
                    <span className="pd-pipa-styl">{p.styl}</span>
                    <span className="pd-pipa-pozn">{p.pozn}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="pd-pivo-navic">
              <p>
                Večer u nás běží <strong>sportovní přenosy na O2 TV</strong> —
                fotbal, hokej i ten zápas, na který se nikde jinde nedíváte.
              </p>
            </div>
          </div>

          <div className="pd-pivo-media">
            <img
              src="/section-2.webp"
              alt="Výčep a interiér restaurace Podloubí v Brně"
              width={1000}
              height={1200}
            />
          </div>
        </div>

        <div id="tel" className="pd-kontakt">
          <div className="pd-kontakt-line">
            <span className="pd-kontakt-label">Rezervace a dotazy</span>
            <a href="tel:+420731186816" className="pd-kontakt-tel">731 186 816</a>
          </div>
          <p className="pd-kontakt-adr">
            Smetanova 593/41, Brno · U nás zaparkujete — první hodina denně
            zdarma, o víkendu celý den.
          </p>
        </div>
      </section>
    </main>
  );
}
