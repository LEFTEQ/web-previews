import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milan Válek — Truhlářství Ostrava | Nábytek na míru",
  description:
    "Truhlářství Milana Válka v Ostravě. Kuchyně, vestavěné skříně a nábytek na míru z masivu i dýhy. Zaměření zdarma, montáž v Ostravě a okolí.",
  openGraph: {
    title: "Milan Válek — Truhlářství Ostrava",
    description:
      "Nábytek na míru z ostravské dílny. Kuchyně, vestavěné skříně, stoly z masivu.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Kuchyně na míru",
    popis:
      "Zaměříme váš prostor do milimetru, navrhneme dispozici i úložné prostory a vyrobíme kuchyni, která sedne přesně do vašeho bytu — včetně dvířek z masivu, dýhy nebo lakovaného MDF.",
    detail: "masiv · dýha · lak · kování Blum",
  },
  {
    kod: "02",
    nazev: "Vestavěné skříně",
    popis:
      "Šatny a skříně do šikmin, výklenků a chodeb, kde běžný nábytek nefunguje. Posuvné i otevírací dveře, vnitřní organizéry a poličky přesně podle toho, co potřebujete uložit.",
    detail: "posuvné dveře · šikminy · zrcadla",
  },
  {
    kod: "03",
    nazev: "Stoly a nábytek z masivu",
    popis:
      "Jídelní stoly, lavice, komody a pracovní desky z dubu, jasanu nebo buku. Spoje na kolík a čep, ruční broušení, olej nebo lak — kus, který vydrží generace.",
    detail: "dub · jasan · buk · olejování",
  },
  {
    kod: "04",
    nazev: "Opravy a renovace",
    popis:
      "Vrátíme život starým dveřím, oknům a nábytku po prarodičích. Výměna kování, přebroušení, nová povrchová úprava i doplnění chybějících dílů podle originálu.",
    detail: "dveře · okna · starožitnosti",
  },
];

const duvody = [
  {
    cislo: "25 let",
    text: "v truhlářském řemesle — od učení po vlastní dílnu v Ostravě.",
  },
  {
    cislo: "Do 6 týdnů",
    text: "od zaměření k hotové montáži u běžné kuchyně nebo skříně.",
  },
  {
    cislo: "Zdarma",
    text: "zaměření a cenová nabídka po Ostravě a okolí.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a href="#uvod" className="wordmark" aria-label="Milan Válek Truhlářství, úvod">
          <span className="wordmark__grain">VÁLEK</span>
          <span className="wordmark__sub">truhlářství · Ostrava</span>
        </a>
        <a className="topbar__tel" href="tel:+420602111222">
          <span aria-hidden="true">☎</span> 602&nbsp;111&nbsp;222
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Truhlář hoblíkem opracovává dubové prkno v dílně, pod hoblíkem se kroutí hobliny"
            className="hero__img"
            width={1600}
            height={1000}
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Ruční truhlářská dílna v Ostravě</p>
          <h1 className="hero__title">
            Nábytek, který si<br />
            <span className="hero__title-accent">pamatuje ruku,</span><br />
            co ho vyrobila.
          </h1>
          <p className="hero__lead">
            Milan Válek dělá kuchyně, vestavěné skříně a stoly z masivu na míru
            vašemu bytu. Žádné katalogové polotovary — jen dřevo, přesné spoje a
            povrch, který vydrží.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420602111222">
              Zavolat truhláři
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co vyrábíme
            </a>
          </div>
          <p className="hero__note">
            Zaměření zdarma · Ostrava, Opava a okolí
          </p>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Z dílny na Slezské Ostravě</p>
          <h2 id="sluzby-nadpis" className="section-head__title">
            Čtyři věci, které umíme do posledního detailu
          </h2>
        </div>

        <ol className="sluzby__list">
          {sluzby.map((s) => (
            <li className="karta" key={s.kod}>
              <span className="karta__kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="karta__body">
                <h3 className="karta__nazev">{s.nazev}</h3>
                <p className="karta__popis">{s.popis}</p>
                <p className="karta__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Detail hotové kuchyňské linky z masivního dřeva s viditelnou kresbou letokruhů"
            width={1400}
            height={900}
          />
          <figcaption>
            Dubová kuchyň pro rodinu z Poruby — masivní dvířka, tichý dojezd,
            pracovní deska z jednoho kusu.
          </figcaption>
        </figure>
      </section>

      <section className="onas" id="o-mne" aria-labelledby="onas-nadpis">
        <figure className="onas__foto">
          <img
            src="/section-2.webp"
            alt="Milan Válek ve své truhlářské dílně u pracovního ponku obklopený nářadím"
            width={1200}
            height={1400}
          />
        </figure>

        <div className="onas__text">
          <p className="section-head__eyebrow">O truhláři</p>
          <h2 id="onas-nadpis" className="section-head__title">
            Jeden truhlář, jedna dílna, jeden podpis pod každou zakázkou
          </h2>
          <p className="onas__odstavec">
            Jmenuji se Milan Válek a truhlařině se věnuji přes dvacet let. U mě
            nenajdete montážní partu, která se u vás objeví poprvé až s hotovým
            nábytkem. Přijedu zaměřit, poradit a nakonec i namontovat — ať víte,
            s kým jednáte.
          </p>
          <p className="onas__odstavec">
            Dělám v rozumném množství zakázek, abych se každé mohl věnovat
            pořádně. Proto se dřevo v mé dílně nespěchá — vybere se, vyzraje a
            teprve pak z něj vzniká nábytek, který u vás zůstane roky.
          </p>

          <ul className="onas__cisla">
            {duvody.map((d) => (
              <li key={d.cislo}>
                <span className="onas__cislo">{d.cislo}</span>
                <span className="onas__cislo-text">{d.text}</span>
              </li>
            ))}
          </ul>

          <div className="onas__kontakt">
            <a className="btn btn--solid" href="tel:+420602111222">
              Zavolat: 602 111 222
            </a>
            <a className="btn btn--ghost" href="mailto:dilna@valek-truhlarstvi.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="onas__adresa">
            Dílna: Těšínská 12, Slezská Ostrava · Po–Pá 7:00–16:00
          </p>
        </div>
      </section>
    </main>
  );
}
