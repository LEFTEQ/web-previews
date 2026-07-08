import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Družstvo HLS Plzeň — pult centrální ochrany, alarmy a zásahová jednotka",
  description:
    "Střežíme firmy, provozovny i domácnosti v Plzni a okolí 24 hodin denně. Elektronické zabezpečení napojené na náš pult centrální ochrany a vlastní zásahová vozidla na cestě do minut.",
  openGraph: {
    title: "Družstvo HLS Plzeň — váš alarm hlídá náš dispečink 24/7",
    description:
      "Elektronické zabezpečení, kamery a napojení na pult centrální ochrany s vlastní výjezdovou jednotkou. Plzeň a Plzeňský kraj.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "PCO",
    nazev: "Napojení na pult centrální ochrany",
    popis:
      "Váš alarm mluví přímo s naším dispečinkem. Poplach dorazí v řádu sekund, operátor situaci vyhodnotí a rozhodne, zda vyjede hlídka.",
    detail: "Nepřetržitý dohled, více přenosových cest (GSM, IP, rádio) pro případ výpadku.",
  },
  {
    kod: "EZS",
    nazev: "Montáž alarmů a čidel",
    popis:
      "Navrhneme a nainstalujeme zabezpečení na míru objektu — pohybová čidla, magnety na dveře a okna, tísňová tlačítka i detekci tříštění skla.",
    detail: "Bezdrátové i drátové systémy, revize a pravidelný servis techniky.",
  },
  {
    kod: "CCTV",
    nazev: "Kamerové systémy",
    popis:
      "Kamery s nočním viděním a záznamem, do kterého se podíváte z mobilu. U firem propojíme obraz s pultem, aby operátor viděl, co se děje.",
    detail: "Instalace, kabeláž, úložiště i GDPR-korektní nastavení záznamu.",
  },
  {
    kod: "OUT",
    nazev: "Výjezd zásahové jednotky",
    popis:
      "Když čidlo sepne, nečekáte sami. Vyráží naše vozidlo, prověří objekt a v případě potřeby přivolá policii.",
    detail: "Vlastní posádky v Plzni a okolí, průměrný dojezd do několika minut.",
  },
];

const duvody = [
  {
    n: "Dispečink v Plzni",
    t: "Signál z vašeho alarmu vyhodnocuje operátor, ne automat. Zná zdejší adresy a ví, kam poslat hlídku.",
  },
  {
    n: "Vlastní zásahová vozidla",
    t: "Nespoléháme na cizí posádky. Naše hlídky křižují Plzeňský kraj a k poplachu dojedou během minut.",
  },
  {
    n: "Firmy i domácnosti",
    t: "Střežíme haly, prodejny a kanceláře stejně poctivě jako byty a rodinné domy. Řešení skládáme na míru.",
  },
  {
    n: "Výrobní družstvo s historií",
    t: "Fungujeme jako družstvo — o zabezpečení rozhodují lidé, kteří tu práci dělají, ne vzdálená centrála.",
  },
];

export default function Page() {
  return (
    <main className="hls">
      <a className="skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="hero" id="obsah">
        <div className="hero__grid">
          <div className="hero__panel">
            <div className="brand">
              <span className="brand__mark" aria-hidden="true">
                <span className="brand__pulse" />
              </span>
              <span className="brand__word">
                HLS
                <span className="brand__sub">Družstvo · Plzeň</span>
              </span>
            </div>

            <p className="hero__status">
              <span className="led" aria-hidden="true" />
              PULT CENTRÁLNÍ OCHRANY · STŘEŽÍME NONSTOP
            </p>

            <h1 className="hero__title">
              Váš alarm nikdy<br />
              nehlídá <span className="hl">sám.</span>
            </h1>

            <p className="hero__lede">
              Když u vás doma nebo ve firmě sepne čidlo, signál dorazí na náš
              plzeňský dispečink. Operátor situaci vyhodnotí a k objektu vyráží
              naše zásahové vozidlo — obvykle dřív, než si to stihnete uvědomit.
            </p>

            <div className="hero__cta">
              <a className="btn btn--go" href="tel:+420605292031">
                Zavolat na +420 605 292 031
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Co střežíme
              </a>
            </div>

            <dl className="hero__meta">
              <div>
                <dt>Dohled</dt>
                <dd>24 / 7 / 365</dd>
              </div>
              <div>
                <dt>Působnost</dt>
                <dd>Plzeň &amp; kraj</dd>
              </div>
              <div>
                <dt>Zásah</dt>
                <dd>Vlastní posádky</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Zásahové vozidlo Družstva HLS připravené k výjezdu při poplachu v Plzni"
              className="hero__img"
              width={1200}
              height={1400}
            />
            <figcaption className="hero__tag">
              <span className="led led--amber" aria-hidden="true" />
              Vozidlo v pohotovosti
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow">Signální cesta poplachu</p>
          <h2 id="sluzby-nadpis">Od čidla po výjezd — celý řetězec u nás</h2>
          <p className="section-lede">
            Zabezpečení dává smysl jen jako celek. Proto u nás najdete každý
            článek řetězu: techniku v objektu, pult, který ji poslouchá, i lidi,
            kteří na poplach reagují.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <div className="card__code" aria-hidden="true">
                {s.kod}
              </div>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <figure className="duvera__figure">
            <img
              src="/section-2.webp"
              alt="Operátor Družstva HLS u pultu centrální ochrany sleduje stav střežených objektů"
              className="duvera__img"
              width={1000}
              height={1200}
            />
          </figure>

          <div className="duvera__body">
            <p className="eyebrow">Proč právě HLS</p>
            <h2 id="duvera-nadpis">
              Zabezpečení je jenom tak dobré, jak dobří jsou lidé za pultem.
            </h2>
            <p className="section-lede">
              Jsme výrobní družstvo z Plzně. Alarmy montujeme, servisujeme a pak
              je taky sami hlídáme — celý příběh vašeho objektu zůstává v jedněch
              rukou.
            </p>

            <ul className="reasons">
              {duvody.map((d) => (
                <li className="reason" key={d.n}>
                  <span className="reason__dot" aria-hidden="true" />
                  <div>
                    <h3>{d.n}</h3>
                    <p>{d.t}</p>
                  </div>
                </li>
              ))}
            </ul>

            <blockquote className="quote">
              „Kvalita není nikdy náhoda, vždy je to výsledek inteligentní
              snahy.“
              <cite>— John Ruskin, zásada, podle které pracujeme</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
