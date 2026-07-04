import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TAXI Praha 999 — pevná cena, řidič do pár minut",
  description:
    "Pražská taxislužba nonstop. Cenu víte předem, řidič u vás obvykle do 7 minut. Letiště, senior taxi i běžná jízda po Praze.",
  openGraph: {
    title: "TAXI Praha 999 — pevná cena, řidič do pár minut",
    description:
      "Pražská taxislužba nonstop. Cenu víte předem, řidič u vás obvykle do 7 minut.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const tarify = [
  {
    kod: "01",
    nazev: "Taxi po Praze",
    popis: "Běžná jízda městem. Cenu řekneme u telefonu, na taxametru žádné překvapení.",
    nastup: "120 Kč",
    km: "30 Kč / km",
    min: "7 Kč / min",
    cekani: "prvních 5 min zdarma",
  },
  {
    kod: "02",
    nazev: "Transfer na letiště",
    popis: "Fixní cena z centra na Letiště Václava Havla. Bez příplatků za kilometry.",
    nastup: "700 Kč fix",
    km: "0 Kč / km",
    min: "7 Kč / min",
    cekani: "prvních 5 min zdarma",
  },
  {
    kod: "03",
    nazev: "Senior taxi",
    popis: "Klidná jízda i na kousek, řidič pomůže s nákupem i schody. Levnější sazba.",
    nastup: "100 Kč",
    km: "26 Kč / km",
    min: "5 Kč / min",
    cekani: "prvních 5 min zdarma",
  },
];

const reference = [
  {
    jmeno: "Petr Vavřinec",
    text: "Přijel pro nás brzo. Cena byla daná dopředu, ale řidič nás stejně vezl přes Waze rychlejší cestou a nic navíc nechtěl. Kliďas. Za mě pohoda.",
  },
  {
    jmeno: "Marta Ulmová",
    text: "Velká ochota a pochopení pro starého člověka i na krátkou jízdu. Děkuji.",
  },
  {
    jmeno: "Marek Hora",
    text: "Po objednání přijelo taxi za 10 minut, řidič slušný a cena velmi dobrá. Můžu doporučit.",
  },
  {
    jmeno: "Pavla R.",
    text: "Poděkování řidiči, který nás vezl ve 22.30 z Jana Želivského do Bohnic. Chování vstřícné a profesionální.",
  },
];

export default function Page() {
  return (
    <main className="tp">
      <header className="tp-top">
        <a className="tp-mark" href="#" aria-label="TAXI Praha 999">
          <span className="tp-mark-taxi">TAXI</span>
          <span className="tp-mark-praha">PRAHA</span>
          <span className="tp-mark-num" aria-hidden="true">
            <b>9</b><b>9</b><b>9</b>
          </span>
        </a>
        <a className="tp-callchip" href="tel:+420251000251">
          <span className="tp-callchip-label">Dispečink 24/7</span>
          <span className="tp-callchip-num">251 000 251</span>
        </a>
      </header>

      <section className="tp-hero" aria-label="Objednání taxi v Praze">
        <img
          className="tp-hero-img"
          src="/hero.webp"
          alt="Vůz taxislužby TAXI Praha 999 v ulicích Prahy"
        />
        <div className="tp-hero-veil" aria-hidden="true" />

        <div className="tp-hero-inner">
          <p className="tp-eyebrow">Praha a okolí · nonstop</p>
          <h1 className="tp-h1">
            Řekneme cenu<br />
            <span className="tp-h1-accent">dřív, než nasednete.</span>
          </h1>
          <p className="tp-lede">
            Zavoláte, my vám na místě spočítáme přesnou částku za jízdu. Žádné
            hádání z taxametru, žádné natahování trasy. Řidič u vás bývá do pár
            minut.
          </p>

          <div className="tp-actions">
            <a className="tp-btn tp-btn-primary" href="tel:+420251000251">
              Zavolat dispečink
            </a>
            <a className="tp-btn tp-btn-ghost" href="#tarify">
              Podívat se na ceny
            </a>
          </div>

          <dl className="tp-meter" aria-label="Jak to funguje">
            <div className="tp-meter-flag" aria-hidden="true">
              <span>VOLNÝ</span>
            </div>
            <div className="tp-meter-row">
              <dt>u vás obvykle za</dt>
              <dd>~7 min</dd>
            </div>
            <div className="tp-meter-row">
              <dt>dispečink jede</dt>
              <dd>24 h denně</dd>
            </div>
            <div className="tp-meter-row">
              <dt>cenu znáte</dt>
              <dd>předem</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tp-tarify" id="tarify" aria-label="Ceník a služby">
        <div className="tp-sec-head">
          <p className="tp-eyebrow tp-eyebrow-dark">Ceník</p>
          <h2 className="tp-h2">Tři jízdy, tři sazby. Žádná se pod vámi nezmění.</h2>
          <p className="tp-sec-note">
            Sazby platí pro Prahu. Přesnou cenu vám dispečink potvrdí ještě před
            výjezdem, ať přesně víte, na čem jste.
          </p>
        </div>

        <ul className="tp-cards">
          {tarify.map((t) => (
            <li className="tp-card" key={t.kod}>
              <div className="tp-card-top">
                <span className="tp-card-kod" aria-hidden="true">
                  {t.kod}
                </span>
                <h3 className="tp-card-nazev">{t.nazev}</h3>
              </div>
              <p className="tp-card-popis">{t.popis}</p>
              <dl className="tp-price">
                <div>
                  <dt>Nástup</dt>
                  <dd>{t.nastup}</dd>
                </div>
                <div>
                  <dt>Za kilometr</dt>
                  <dd>{t.km}</dd>
                </div>
                <div>
                  <dt>Za minutu</dt>
                  <dd>{t.min}</dd>
                </div>
                <div>
                  <dt>Čekání</dt>
                  <dd>{t.cekani}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <section className="tp-trust" aria-label="Zkušenosti zákazníků">
        <div className="tp-trust-media">
          <img
            className="tp-trust-img"
            src="/section-2.webp"
            alt="Řidič taxislužby za volantem v pražském provozu"
          />
        </div>

        <div className="tp-trust-body">
          <p className="tp-eyebrow tp-eyebrow-dark">Co říkají lidé, co s námi jeli</p>
          <h2 className="tp-h2">
            Pražáci nás poznají podle klidu za volantem.
          </h2>
          <p className="tp-sec-note">
            Hodnocení z Firmy.cz. Vybrali jsme ta, která nejlíp popisují, jak u
            nás jízda vypadá — od letiště po krátkou cestu se seniorem.
          </p>

          <ul className="tp-quotes">
            {reference.map((r) => (
              <li className="tp-quote" key={r.jmeno}>
                <p className="tp-quote-text">{r.text}</p>
                <p className="tp-quote-jmeno">{r.jmeno}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
