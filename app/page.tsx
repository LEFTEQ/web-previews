import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spolehlivý úklid Brno — přijdeme, uklidíme, zmizíme",
  description:
    "Úklidové služby v Brně už 11 let. Jednorázový i pravidelný úklid domácností a firem, tepování, mytí oken. Pojištěno u UNIQA do 5 000 000 Kč.",
};

const sluzby = [
  {
    kod: "01",
    nazev: "Pravidelný úklid",
    popis:
      "Domů nebo do kanceláře přijdeme v den a čas, který si spolu domluvíme. Vždycky stejný tým, vždycky víte, co čekat.",
  },
  {
    kod: "02",
    nazev: "Jednorázový úklid",
    popis:
      "Domácnost i firma. Jednou pořádně od podlahy — a máte klid. Ideální před návštěvou nebo po sezóně.",
  },
  {
    kod: "03",
    nazev: "Úklid po rekonstrukci",
    popis:
      "Prach z broušení, zbytky lepidla, malířské cákance. Dostaneme byt z ‚staveniště‘ zpátky do stavu, kdy se v něm dá bydlet.",
  },
  {
    kod: "04",
    nazev: "Tepování",
    popis:
      "Koberce a látkové sedačky do hloubky. Odejde skvrna po kávě i to, co se za roky usadilo v tkanině.",
  },
  {
    kod: "05",
    nazev: "Mytí oken a žaluzií",
    popis:
      "Bez šmouh, i tam, kam se špatně dosáhne. Rámy, parapety a žaluzie k tomu.",
  },
  {
    kod: "06",
    nazev: "Žehlení a další",
    popis:
      "Košile i povlečení. K úklidu přibereme drobné domácí práce, ať máte den o starost lehčí.",
  },
];

const duvery = [
  {
    stitek: "Pojištění",
    hodnota: "5 000 000 Kč",
    detail: "Kryti u pojišťovny UNIQA pro případ nehody.",
  },
  {
    stitek: "S Brnem",
    hodnota: "11 let",
    detail: "Domácnosti i firmy, od Líšně po Bystrc.",
  },
  {
    stitek: "Kontrola kvality",
    hodnota: "Namátkově",
    detail: "Tým pravidelně školíme a práci si po sobě kontrolujeme.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="top">
        <a className="brand" href="#" aria-label="Spolehlivý úklid Brno">
          <span className="brand-mark" aria-hidden="true">✓</span>
          <span className="brand-name">
            Spolehlivý úklid
            <span className="brand-city">Brno</span>
          </span>
        </a>
        <a className="top-call" href="tel:+420776780338">
          776&nbsp;780&nbsp;338
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Úklidové služby · Valchařská 22, Brno</p>
          <h1 id="hero-title">
            Přijdeme, uklidíme,
            <br />
            <span className="accent">zmizíme.</span>
          </h1>
          <p className="lede">
            Neztrácejte večery hadrem a vysavačem. Ten drahocenný čas si
            necháte — o zbytek se postaráme my. Už jedenáct let po celém Brně.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420776780338">
              Zavolat 776 780 338
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co uklízíme
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Úklidový tým Spolehlivý úklid při práci v bytě v Brně"
            className="hero-img"
          />
          <span className="hero-tag">Pojištěno u UNIQA do 5 mil. Kč</span>
        </div>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-title">
        <div className="sec-head">
          <p className="eyebrow">Nabídka</p>
          <h2 id="sluzby-title">Vyberte si, co vám leze na nervy nejvíc</h2>
          <p className="sec-note">
            Pracujeme s profesionálními prostředky, ne s tím, co je zrovna v
            akci. Uvedené věci kombinujeme podle toho, co doma nebo ve firmě
            potřebujete.
          </p>
        </div>

        <ol className="grid">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ol>

        <div className="sluzby-media">
          <img
            src="/section-1.webp"
            alt="Detail čištění a leštění povrchu v domácnosti"
            className="band-img"
          />
          <p className="band-note">
            Ceny jsou orientační — záleží na míře znečištění. Zavolejte a
            řekneme vám nezávazně, na čem jste.
          </p>
        </div>
      </section>

      <section id="onas" className="onas" aria-labelledby="onas-title">
        <div className="onas-media">
          <img
            src="/section-2.webp"
            alt="Uklizený, prosvětlený obývací pokoj po úklidu"
            className="band-img"
          />
        </div>
        <div className="onas-copy">
          <p className="eyebrow">Proč zrovna my</p>
          <h2 id="onas-title">
            Za jedenáct let jsme v Brně poznali každý typ podlahy
          </h2>
          <p className="sec-note">
            Stejná parta, která ví, kde se doma usazuje prach a jak se čistí
            citlivá sedačka. Vaše spokojenost je to, kvůli čemu se k vám
            vracíme rádi.
          </p>
          <dl className="trust">
            {duvery.map((d) => (
              <div className="trust-item" key={d.stitek}>
                <dt>{d.stitek}</dt>
                <dd className="trust-val">{d.hodnota}</dd>
                <dd className="trust-detail">{d.detail}</dd>
              </div>
            ))}
          </dl>
          <a className="btn btn-solid" href="mailto:info@spolehlivyuklid.cz">
            Napsat na info@spolehlivyuklid.cz
          </a>
        </div>
      </section>
    </main>
  );
}
