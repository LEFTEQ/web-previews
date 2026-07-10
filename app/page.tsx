import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pivovar Žumberk — malý nezávislý pivovar z Českých Budějovic",
  description:
    "Ruční vaření piva ve varně u Českých Budějovic. Spodně kvašené ležáky, nefiltrovaná dvanáctka i tmavý speciál. Podíváme se, kde točíme, co vaříme a proč to děláme po svém.",
  openGraph: {
    title: "Pivovar Žumberk — malý nezávislý pivovar",
    description:
      "Spodně kvašené ležáky vařené v malé várce u Českých Budějovic. Nefiltrované, nepasterizované, tažené v klidu.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const piva = [
  {
    stupen: "10°",
    nazev: "Žumberská desítka",
    styl: "světlý ležák",
    popis:
      "Lehká, řízná, s jemnou hořkinou žateckého chmele. To pivo, po kterém se sáhne podruhé.",
    ibu: "28 IBU",
    alk: "4,1 %",
  },
  {
    stupen: "12°",
    nazev: "Nefiltrovaná dvanáctka",
    styl: "nefiltrovaný ležák",
    popis:
      "Zakalená, plná, s chlebovou sladovou vůní. Zraje ve sklepě přes pět týdnů, nikam nespěchá.",
    ibu: "36 IBU",
    alk: "5,0 %",
  },
  {
    stupen: "13°",
    nazev: "Žumberský tmavý speciál",
    styl: "tmavý ležák",
    popis:
      "Karamel, kávová hořkost a náznak povidel. Vaříme ho jen v malých dávkách, hlavně na zimu.",
    ibu: "32 IBU",
    alk: "5,4 %",
  },
];

const hospody = [
  { mesto: "České Budějovice", podnik: "Hostinec U Solné brány", detail: "točíme tu desítku i dvanáctku, denně čerstvé" },
  { mesto: "České Budějovice", podnik: "Pivnice Na Sadech", detail: "nefiltrovaná dvanáctka na stálém kohoutu" },
  { mesto: "Žumberk", podnik: "Šenk ve varně", detail: "přímo u nás — pátek a sobota, rovnou od zdroje" },
  { mesto: "Hluboká nad Vltavou", podnik: "Restaurace Pod Hrází", detail: "sezónní speciály a tmavý ležák" },
];

export default function Page() {
  return (
    <main className="zb">
      <header className="zb-nav">
        <a className="zb-mark" href="#" aria-label="Pivovar Žumberk — úvod">
          <span className="zb-mark-est">est. 2014</span>
          <span className="zb-mark-name">Žumberk</span>
          <span className="zb-mark-sub">malý nezávislý pivovar</span>
        </a>
        <nav className="zb-nav-links" aria-label="Hlavní navigace">
          <a href="#piva">Naše piva</a>
          <a href="#kde">Kde točíme</a>
          <a href="#varna">Varna</a>
        </nav>
      </header>

      <section className="zb-hero" aria-labelledby="hero-nadpis">
        <img
          className="zb-hero-img"
          src="/hero.webp"
          alt="Čerstvě natočené nefiltrované pivo z pivovaru Žumberk se sklonem pěny"
          decoding="async"
        />
        <div className="zb-hero-veil" aria-hidden="true" />
        <div className="zb-hero-body">
          <p className="zb-eyebrow">Ležák z jižních Čech · Žumberk u Českých Budějovic</p>
          <h1 id="hero-nadpis" className="zb-hero-title">
            Pět týdnů ve sklepě.
            <br />
            Žádná zkratka.
          </h1>
          <p className="zb-hero-lead">
            Vaříme spodně kvašené ležáky v malé várce, kde na každou várku dohlédne
            jeden sládek. Nefiltrujeme, nepasterizujeme — necháváme pivo dozrát a
            teprve pak ho pustíme na kohout.
          </p>
          <div className="zb-hero-cta">
            <a className="zb-btn" href="#kde">Kde nás natočí</a>
            <a className="zb-btn zb-btn-ghost" href="#piva">Prohlédnout piva</a>
          </div>
        </div>
        <div className="zb-hero-strip" aria-hidden="true">
          <span>10°</span>
          <span>12°</span>
          <span>13°</span>
          <span>nefiltrováno</span>
          <span>nepasterizováno</span>
        </div>
      </section>

      <section className="zb-piva" id="piva" aria-labelledby="piva-nadpis">
        <div className="zb-sec-head">
          <p className="zb-eyebrow zb-eyebrow-dark">Na kohoutu</p>
          <h2 id="piva-nadpis" className="zb-sec-title">Tři piva, tři nálady</h2>
          <p className="zb-sec-note">
            Stálý sortiment vaříme celý rok. Speciály přibývají podle sezóny a
            podle toho, na co má sládek chuť.
          </p>
        </div>

        <ol className="zb-tap">
          {piva.map((p) => (
            <li className="zb-tap-item" key={p.nazev}>
              <div className="zb-tap-stupen" aria-hidden="true">{p.stupen}</div>
              <div className="zb-tap-main">
                <h3 className="zb-tap-nazev">{p.nazev}</h3>
                <p className="zb-tap-styl">{p.styl}</p>
                <p className="zb-tap-popis">{p.popis}</p>
                <p className="zb-tap-meta">
                  <span>{p.alk}</span>
                  <span aria-hidden="true">·</span>
                  <span>{p.ibu}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="zb-piva-fig">
          <img
            src="/section-1.webp"
            alt="Sladovna a várna pivovaru Žumberk během vaření várky ležáku"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Varní den v Žumberku — jedna várka, jeden sládek.</figcaption>
        </figure>
      </section>

      <section className="zb-varna" id="varna" aria-labelledby="varna-nadpis">
        <div className="zb-varna-grid">
          <figure className="zb-varna-fig">
            <img
              src="/section-2.webp"
              alt="Sklep pivovaru Žumberk s ležáckými tanky, kde piva dozrávají"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="zb-varna-text">
            <p className="zb-eyebrow zb-eyebrow-dark">O pivovaru</p>
            <h2 id="varna-nadpis" className="zb-sec-title">
              Malý pivovar, který zůstal malý schválně
            </h2>
            <p>
              Žumberk je nezávislý pivovar kousek od Českých Budějovic. Vaříme
              od roku 2014, pořád ve stejné várně a pořád stejně: klasické
              dekokční rmutování, žatecký chmel a čas ve sklepě, který se
              nedá uspěchat.
            </p>
            <p>
              Nechceme růst za každou cenu. Radši uvaříme méně a víme přesně,
              co je v každém tanku. Většina piva zůstane doma v jižních
              Čechách — u hospodských, kteří ho umí načepovat.
            </p>
            <dl className="zb-facts">
              <div><dt>Založeno</dt><dd>2014</dd></div>
              <div><dt>Kvašení</dt><dd>spodní, ležácké</dd></div>
              <div><dt>Úprava</dt><dd>bez filtrace a pasterizace</dd></div>
            </dl>
          </div>
        </div>

        <div className="zb-kde" id="kde">
          <h3 className="zb-kde-title">Kde nás natočíte</h3>
          <ul className="zb-kde-list">
            {hospody.map((h) => (
              <li className="zb-kde-item" key={h.podnik}>
                <span className="zb-kde-mesto">{h.mesto}</span>
                <span className="zb-kde-podnik">{h.podnik}</span>
                <span className="zb-kde-detail">{h.detail}</span>
              </li>
            ))}
          </ul>
          <p className="zb-kde-note">
            Seznam čepujících hospod držíme aktuální. Chcete Žumberk na svém
            kohoutu? Napište sládkovi — domluvíme se.
          </p>
        </div>
      </section>
    </main>
  );
}
