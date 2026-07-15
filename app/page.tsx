import type { CSSProperties } from "react";

const services = [
  {
    tag: "Osobní · dodávky · kamiony",
    title: "Kompletní lakování vozidel",
    desc: "Přelak celého vozu v jednom odstínu i dvouvrstvá metalíza. Osobní auta, dodávky i tahače — barvu namícháme na míru a nastříkáme v boxu.",
  },
  {
    tag: "Škrábance · nárazníky · kamínky",
    title: "Opravy laku a poškození",
    desc: "Odřený nárazník, škrábance od klíčů, kamínky od kol. Srovnáme, zastříkáme a zaleštíme do ztracena — bez viditelného přechodu.",
  },
  {
    tag: "Jeden panel · disky · retuše",
    title: "Lokální lakování a retuše",
    desc: "Jedny dveře, jeden blatník, jeden disk. Odstín ladíme přesně na váš stávající lak, aby oprava zůstala neviditelná.",
  },
];

const steps = [
  { n: "01", t: "Příprava a broušení", d: "Umytí, odmaštění a přebroušení podkladu — na čistý povrch drží lak nejlíp." },
  { n: "02", t: "Základ a plnič", d: "Antikorozní základ a plnič srovná drobné nerovnosti do roviny." },
  { n: "03", t: "Barva a metalíza", d: "Namíchaný odstín naneseme ve stříkacím boxu, flake plave v mokrém laku." },
  { n: "04", t: "Clearcoat", d: "Čirý lak uzavře flake, dá hloubku a vysoký lesk celému panelu." },
  { n: "05", t: "Leštění a kontrola", d: "Přeleštění a kontrola finiše pod inspekčním světlem, teprve pak výdej." },
];

const panels: { name: string; cat: string; bg: string }[] = [
  { name: "Oprava boční části", cat: "Osobní", bg: "linear-gradient(135deg,#16304e 0%,#0b0d10 78%)" },
  { name: "Oprava dveří", cat: "Osobní", bg: "linear-gradient(135deg,#0e5a34 0%,#0b0d10 78%)" },
  { name: "Přelak kamionu", cat: "Kamion", bg: "linear-gradient(135deg,#2a2f37 0%,#0b0d10 78%)" },
  { name: "Lakování disku", cat: "Ostatní", bg: "linear-gradient(135deg,#3d434c 0%,#111418 78%)" },
  { name: "Oprava zadní části", cat: "Osobní", bg: "linear-gradient(135deg,#1a2740 0%,#0b0d10 78%)" },
  { name: "Oprava nárazníku", cat: "Osobní", bg: "linear-gradient(135deg,#12433a 0%,#0b0d10 78%)" },
];

const specs = [
  { k: "Otevřeno", v: "Po–Pá 8:00–16:30 · nebo dle domluvy" },
  { k: "Kde nás najdete", v: "Hájecká 1194/12, Brno-Černovice 618 00" },
  { k: "Zodpovědná osoba", v: "Bc. Libor Janáček" },
  { k: "IČO / DIČ", v: "29294584 · CZ29294584" },
];

export default function Page() {
  return (
    <main className="ss-main">
      <header className="ss-topbar ss-wrap">
        <a className="ss-logo" href="#top" aria-label="Space Service, autolakovna Brno">
          <span className="ss-logo-mark" aria-hidden="true" />
          <span className="ss-logo-word">
            <b>SPACE</b>
            <i>SERVICE</i>
          </span>
        </a>
        <a className="ss-topcall" href="tel:+420728703130">+420 728 703 130</a>
      </header>

      <section className="ss-hero" id="top">
        <div className="ss-hero-inner ss-wrap">
          <p className="ss-eyebrow">Autolakovna · Brno-Černovice</p>
          <h1 className="ss-h1">
            Lak, který<br />
            <span className="ss-h1-accent">drží hvězdy.</span>
          </h1>
          <p className="ss-lead">
            V metalíze plave hliníkový flake — pod světlem lakovacího boxu jiskří
            přesně jako hvězdné nebe. Tenhle finiš nanášíme na váš vůz, panel po
            panelu, s kontrolou pod inspekčním světlem.
          </p>
          <div className="ss-cta-row">
            <a className="ss-btn ss-btn-primary" href="tel:+420728703130">
              Zavolat 728 703 130
            </a>
            <a className="ss-btn ss-btn-ghost" href="mailto:info@spaceservice.cz">
              Napsat na e-mail
            </a>
          </div>
          <dl className="ss-hero-meta">
            <div><dt>Otevřeno</dt><dd>Po–Pá 8:00–16:30</dd></div>
            <div><dt>Adresa</dt><dd>Hájecká 1194/12, Brno</dd></div>
            <div><dt>Zaměření</dt><dd>Osobní · kamiony · disky</dd></div>
          </dl>
        </div>
      </section>

      <section className="ss-section" aria-labelledby="sluzby-nadpis">
        <div className="ss-wrap">
          <div className="ss-head">
            <span className="ss-tape">Co umíme</span>
            <h2 className="ss-h2" id="sluzby-nadpis">Tři věci, které řešíme denně</h2>
          </div>

          <div className="ss-services">
            {services.map((s) => (
              <article className="ss-service" key={s.title}>
                <p className="ss-service-tag">{s.tag}</p>
                <h3 className="ss-service-title">{s.title}</h3>
                <p className="ss-service-desc">{s.desc}</p>
              </article>
            ))}
          </div>

          <div className="ss-process">
            <p className="ss-process-label">Jak vzniká finiš — pět kroků</p>
            <ol className="ss-steps">
              {steps.map((st) => (
                <li className="ss-step" key={st.n}>
                  <span className="ss-step-n">{st.n}</span>
                  <span className="ss-step-t">{st.t}</span>
                  <span className="ss-step-d">{st.d}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ss-section ss-section-alt" aria-labelledby="ukazky-nadpis">
        <div className="ss-wrap">
          <div className="ss-head">
            <span className="ss-tape">Ukázky &amp; kontakt</span>
            <h2 className="ss-h2" id="ukazky-nadpis">Panely pod inspekčním světlem</h2>
            <p className="ss-head-note">
              Najeďte na panel a nakloňte ho — světlo přejede přes lak stejně jako
              v boxu, když kontrolujeme čerstvý finiš.
            </p>
          </div>

          <div className="ss-gallery">
            {panels.map((p) => (
              <article
                className="ss-panel"
                key={p.name}
                style={{ background: p.bg } as CSSProperties}
              >
                <div className="ss-panel-body">
                  <span className="ss-panel-cat">{p.cat}</span>
                  <h3 className="ss-panel-name">{p.name}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="ss-about">
            <div className="ss-about-text">
              <h3 className="ss-about-title">Malá lakovna, kde víte, kdo vám auto lakuje</h3>
              <p>
                Jsme brněnská autolakovna s dlouholetou praxí. Každou zakázku
                vedeme sami — od nacenění po výdej vozu. Míchaní barvy na míru,
                ověřené laky renomovaných výrobců a poctivá příprava pod lakem, i
                když ji na hotovém voze nakonec nikdo neuvidí.
              </p>
              <a className="ss-btn ss-btn-primary" href="tel:+420728703130">
                Domluvit termín
              </a>
            </div>
            <dl className="ss-spectag">
              {specs.map((s) => (
                <div className="ss-spec-row" key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
