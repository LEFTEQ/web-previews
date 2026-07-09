import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZAPA beton Liberec — čerstvý beton z Rochlice",
  description:
    "Betonárna ZAPA v Liberci-Rochlicích. Až 80 m³ čerstvého betonu za hodinu, plně automatizované dávkování, zimní provoz s ohřevem. Objednejte beton u dispečera.",
  openGraph: {
    title: "ZAPA beton Liberec — čerstvý beton z Rochlice",
    description:
      "Betonárna Stetter 2,25 DKX, výkon až 80 m³/h, 5 frakcí kameniva, 3 druhy pojiva, 6 přísad. Doprava a čerpání po celém Liberecku.",
    type: "website",
    locale: "cs_CZ",
  },
};

const mix = [
  { frakce: "5", label: "frakcí kameniva", detail: "od jemného písku po hrubý štěrk" },
  { frakce: "3", label: "druhy pojiva", detail: "cement a popílek dle receptury" },
  { frakce: "6", label: "druhů přísad", detail: "plastifikátory, zpomalovače, provzdušnění" },
];

const produkty = [
  {
    kod: "C",
    nazev: "Transportbeton",
    popis:
      "Běžné třídy pevnosti od C8/10 po konstrukční směsi. Namícháme přesně na projekt — základy, desky, stropy i pohledové konstrukce.",
  },
  {
    kod: "K",
    nazev: "Kamenivo",
    popis:
      "Praný i drcený materiál v pěti frakcích rovnou z betonárny. Vhodné do betonu, na podsypy i drenáže.",
  },
  {
    kod: "D",
    nazev: "Doprava a čerpání",
    popis:
      "Autodomíchávače i sklápěče přímo na stavbu. Čerpadlo dostane beton tam, kam se autem nedojede — na stropy i do výkopů.",
  },
  {
    kod: "B",
    nazev: "Betonové bloky",
    popis:
      "Prefabrikované prvky z vlastní výroby s certifikovaným řízením výroby. Opěrné stěny, silážní boxy, provizorní zdi.",
  },
];

const reference = [
  { stavba: "Technické centrum A. Raymond", misto: "Jablonec nad Nisou" },
  { stavba: "Viladomy Dreams Liberec", misto: "Liberec" },
  { stavba: "Bytový dům Riegrova", misto: "Liberec" },
  { stavba: "Výrobní hala BUSCH", misto: "Liberec" },
];

export default function Page() {
  return (
    <main className="zb">
      <header className="zb-top">
        <a className="zb-mark" href="#" aria-label="ZAPA beton Liberec">
          <span className="zb-mark__zapa">ZAPA</span>
          <span className="zb-mark__beton">beton</span>
          <span className="zb-mark__loc">Liberec · Rochlice</span>
        </a>
        <a className="zb-phone" href="tel:+420723360069">
          <span className="zb-phone__label">Dispečink</span>
          <span className="zb-phone__num">723 360 069</span>
        </a>
      </header>

      <section className="zb-hero">
        <div className="zb-hero__img">
          <img
            src="/hero.webp"
            alt="Autodomíchávač ZAPA při ukládce čerstvého betonu na stavbě v Liberci"
          />
        </div>
        <div className="zb-hero__panel">
          <p className="zb-eyebrow">Betonárna Liberec-Rochlice · od 6:30</p>
          <h1 className="zb-hero__title">
            Čerstvý beton,<br />
            <span className="zb-hero__accent">dokud tuhne čas.</span>
          </h1>
          <p className="zb-hero__lede">
            Namícháme, naložíme a přivezeme na Liberecko dřív, než beton začne
            tuhnout. Zavolejte dispečerovi a řekněte kam a kolik.
          </p>
          <div className="zb-hero__cta">
            <a className="zb-btn" href="tel:+420723360069">Zavolat dispečerovi</a>
            <a className="zb-btn zb-btn--ghost" href="mailto:liberec@zapa.cz">
              Napsat poptávku
            </a>
          </div>
          <dl className="zb-output">
            <div>
              <dt>Hodinový výkon</dt>
              <dd>
                <span className="zb-output__big">80</span>
                <span className="zb-output__unit">m³/h</span>
              </dd>
            </div>
            <div>
              <dt>Betonárna</dt>
              <dd className="zb-output__text">Stetter 2,25 DKX, řízení ASTERIX ATX 300</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="zb-recept" aria-labelledby="recept-h">
        <div className="zb-recept__head">
          <p className="zb-eyebrow">Naše nabídka</p>
          <h2 id="recept-h">Beton se míchá podle receptury — a my ji umíme.</h2>
          <p className="zb-recept__lede">
            Plně automatizovaná linka dávkuje každou složku na kilogram přesně.
            Od toho, co dostanete do bubnu, se odvíjí pevnost i trvanlivost.
          </p>
        </div>

        <div className="zb-batch">
          {mix.map((m) => (
            <div className="zb-batch__cell" key={m.label}>
              <span className="zb-batch__num">{m.frakce}</span>
              <span className="zb-batch__label">{m.label}</span>
              <span className="zb-batch__detail">{m.detail}</span>
            </div>
          ))}
        </div>

        <div className="zb-cards">
          {produkty.map((p) => (
            <article className="zb-card" key={p.nazev}>
              <span className="zb-card__kod" aria-hidden="true">
                {p.kod}
              </span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
            </article>
          ))}
        </div>

        <figure className="zb-recept__fig">
          <img
            src="/section-1.webp"
            alt="Dávkovací věž betonárny ZAPA se zásobníky kameniva a cementu"
          />
          <figcaption>
            Zateplená betonárna s ohřevem záměsové vody a předehřevem kameniva —
            beton mícháme i v mrazech. Zbytkový beton recyklujeme na místě.
          </figcaption>
        </figure>
      </section>

      <section className="zb-trust" aria-labelledby="trust-h">
        <div className="zb-trust__img">
          <img
            src="/section-2.webp"
            alt="Dokončená betonová konstrukce z dodávky ZAPA beton Liberec"
          />
        </div>
        <div className="zb-trust__body">
          <p className="zb-eyebrow">Reference a certifikace</p>
          <h2 id="trust-h">Beton, který stojí za liberecké stavby.</h2>
          <p className="zb-trust__lede">
            Z naší betonárny odjížděl beton na bytové domy, haly i technická
            centra po celém regionu. Výroba běží podle certifikovaných norem.
          </p>

          <ol className="zb-refs">
            {reference.map((r) => (
              <li key={r.stavba}>
                <span className="zb-refs__stavba">{r.stavba}</span>
                <span className="zb-refs__misto">{r.misto}</span>
              </li>
            ))}
          </ol>

          <ul className="zb-norms">
            <li>ČSN EN ISO 9001 — řízení kvality</li>
            <li>ČSN EN ISO 14001 — životní prostředí</li>
            <li>ČSN EN ISO 50001 — hospodaření s energií</li>
          </ul>

          <div className="zb-contact">
            <div>
              <span className="zb-contact__k">Adresa</span>
              <span className="zb-contact__v">České mládeže 993/80, 460 06 Liberec VI-Rochlice</span>
            </div>
            <div>
              <span className="zb-contact__k">Provoz (léto)</span>
              <span className="zb-contact__v">Po–Pá 6:30–16:00, So 7:30–11:00 na dotaz</span>
            </div>
            <div>
              <span className="zb-contact__k">E-mail</span>
              <span className="zb-contact__v">liberec@zapa.cz</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
