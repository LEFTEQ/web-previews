import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Na Kafkové — rodinný hotel v centru Ostravy",
  description:
    "Stylový rodinný hotel v klidové zóně centra Ostravy. Vlastní hlídané parkoviště a řecká kuchyně v domácí restauraci.",
  openGraph: {
    title: "Hotel Na Kafkové — rodinný hotel v centru Ostravy",
    description:
      "Klidné ubytování v centru Ostravy s vlastním hlídaným parkovištěm a řeckou restaurací.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

export default function Page() {
  return (
    <main className="nk">
      {/* HERO */}
      <header className="nk-hero">
        <div className="nk-nav">
          <a className="nk-wordmark" href="#" aria-label="Hotel Na Kafkové, domů">
            <span className="nk-wordmark__na">Na</span>
            <span className="nk-wordmark__kafkove">Kafkové</span>
          </a>
          <nav className="nk-menu" aria-label="Hlavní navigace">
            <a href="#pokoje">Pokoje</a>
            <a href="#restaurace">Restaurace</a>
            <a href="#hotel">O hotelu</a>
          </nav>
          <a className="nk-book" href="#pokoje">Rezervovat pobyt</a>
        </div>

        <div className="nk-hero__grid">
          <div className="nk-hero__text">
            <p className="nk-eyebrow">Ostrava · ulice Na Kafkové</p>
            <h1 className="nk-hero__title">
              Rodinný hotel<br />
              v <em>klidu</em> centra
            </h1>
            <p className="nk-hero__lede">
              Přijedete autem, zaparkujete za vlastní bránou pod kamerami a jste
              pár kroků od Masarykova náměstí. Večer vás čeká řecká kuchyně
              přímo v domě — jako u přátel, kteří vaří rádi.
            </p>
            <div className="nk-hero__actions">
              <a className="nk-btn" href="#pokoje">Zjistit volné termíny</a>
              <a className="nk-btn nk-btn--ghost" href="#restaurace">
                Nahlédnout do restaurace
              </a>
            </div>
            <ul className="nk-hero__facts">
              <li>
                <span className="nk-fact__k">Parkování</span>
                <span className="nk-fact__v">za bránou, hlídané kamerou</span>
              </li>
              <li>
                <span className="nk-fact__k">Do centra</span>
                <span className="nk-fact__v">pěšky, klidnou ulicí</span>
              </li>
              <li>
                <span className="nk-fact__k">Kuchyně</span>
                <span className="nk-fact__v">řecká, domácí, denně</span>
              </li>
            </ul>
          </div>
          <figure className="nk-hero__figure">
            <img
              src="/hero.webp"
              alt="Fasáda a interiér hotelu Na Kafkové v centru Ostravy"
              className="nk-hero__img"
            />
            <figcaption className="nk-hero__cap">
              Náš dům na tiché ulici, minutu od ruchu města.
            </figcaption>
          </figure>
        </div>
      </header>

      {/* POKOJE / UBYTOVÁNÍ */}
      <section className="nk-rooms" id="pokoje" aria-labelledby="rooms-h">
        <div className="nk-section__head">
          <p className="nk-eyebrow nk-eyebrow--dark">Ubytování</p>
          <h2 className="nk-h2" id="rooms-h">
            Pokoje, kde se ráno nespěchá
          </h2>
          <p className="nk-section__lede">
            Do klidové zóny nedoléhá provoz ani hluk barů. Postele povlékáme
            čistým lnem, snídani nosíme do restaurace v přízemí a auto máte celou
            noc na očích kamer.
          </p>
        </div>

        <div className="nk-rooms__grid">
          <figure className="nk-rooms__photo">
            <img
              src="/section-1.webp"
              alt="Ukázka pokoje v hotelu Na Kafkové"
              className="nk-rooms__img"
            />
          </figure>

          <ul className="nk-list">
            <li className="nk-list__item">
              <span className="nk-list__num">Dvoulůžkový pokoj</span>
              <p className="nk-list__desc">
                Manželská nebo oddělená lůžka, vlastní koupelna, tichá strana do
                dvora. Pro pár na víkend i pracovní cestu.
              </p>
            </li>
            <li className="nk-list__item">
              <span className="nk-list__num">Třílůžkový pokoj</span>
              <p className="nk-list__desc">
                Přistýlka navíc pro dítě nebo kolegu. Prostor na kufry i na to
                rozložit se po dlouhé cestě.
              </p>
            </li>
            <li className="nk-list__item">
              <span className="nk-list__num">Pokoj s parkováním</span>
              <p className="nk-list__desc">
                Přijedete autem? Rezervujte s místem za uzavřenou bránou. Ráno
                vyjedete odpočatí a bez hledání parkoviště.
              </p>
            </li>
          </ul>
        </div>

        <p className="nk-note">
          Konkrétní ceny a volné termíny vám rádi potvrdíme telefonicky —
          rezervaci držíme, dokud si nejste jistí.
        </p>
      </section>

      {/* RESTAURACE / O NÁS — DŮVĚRA */}
      <section className="nk-taverna" id="restaurace" aria-labelledby="tav-h">
        <div className="nk-taverna__grid">
          <div className="nk-taverna__text" id="hotel">
            <p className="nk-eyebrow">Restaurace v domě</p>
            <h2 className="nk-h2 nk-h2--light" id="tav-h">
              Řecká kuchyně,<br />o patro níž
            </h2>
            <p className="nk-taverna__lede">
              Nemusíte nikam. Souvlaki, musaka, čerstvý olivový olej a víno, které
              chutná po slunci. Vaříme tak, jak se vaří doma v Řecku — s časem a
              bez zbytečných příkras.
            </p>

            <dl className="nk-taverna__stats">
              <div>
                <dt>Rodinný hotel</dt>
                <dd>vede ho jedna rodina, ne řetězec</dd>
              </div>
              <div>
                <dt>Vlastní parkoviště</dt>
                <dd>uzavřené, střežené kamerovým systémem</dd>
              </div>
              <div>
                <dt>Centrum Ostravy</dt>
                <dd>a přitom klidová zóna bez hluku</dd>
              </div>
            </dl>

            <blockquote className="nk-quote">
              „Zaparkovali jsme za bránou, večeřeli řecky přímo v hotelu a ráno
              vyrazili do centra pěšky. Přesně tohle jsme od Ostravy čekali.“
              <cite>— host, wellness víkend</cite>
            </blockquote>
          </div>

          <figure className="nk-taverna__figure">
            <img
              src="/section-2.webp"
              alt="Prostředí řecké restaurace v hotelu Na Kafkové"
              className="nk-taverna__img"
            />
            <figcaption className="nk-taverna__cap">
              Restaurace v přízemí — otevřená hostům i sousedům.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
