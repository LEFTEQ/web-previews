export const metadata = {
  title: "Rámy pasparty — rámování obrazů, Lípová 6, Praha 2",
  description:
    "Rámařství na Lípové 6 v Praze 2. Dřevěné rámy z dubu a břízy, kazetové rámy a vitríny, muzeální pasparty, přepravní boxy pro obrazy i celé výstavy.",
  openGraph: {
    title: "Rámy pasparty — rámování obrazů, Praha 2",
    description:
      "Rámy z dubu a břízy, kazetové vitríny, muzeální pasparty a přepravní boxy. Lípová 6, Praha 2 — Nové Město.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="rp">
      {/* ===================== HERO ===================== */}
      <header className="hero" aria-label="Rámy pasparty — rámařství, Praha 2">
        <div className="hero-frame">
          {/* Signature: typografie zarámovaná jako dílo — rám, paspartové okno, dílo */}
          <div className="mat">
            <div className="mat-window">
              <p className="hero-eyebrow">Rámařství · Lípová 6 · Praha 2</p>
              <h1 className="wordmark">
                <span className="wm-line wm-1">Rámy</span>
                <span className="wm-line wm-2">pasparty</span>
              </h1>
              <p className="hero-claim">
                Rámujeme obrazy, fotografie, kresby, grafiky i objekty.
                Z&nbsp;dubu a&nbsp;břízy, do&nbsp;paspart muzeální kvality.
              </p>
            </div>
            <span className="mat-plate" aria-hidden="true">
              dub / bříza · Praha 2 · od ruky, na míru
            </span>
          </div>

          <div className="hero-foot">
            <a className="hero-cta" href="tel:+420222711777">
              Zavolat 222 711 777
            </a>
            <a className="hero-cta hero-cta--ghost" href="mailto:my@ramypasparty.cz">
              Napsat e-mail
            </a>
            <p className="hero-note">
              Dílna a&nbsp;přijímací pult na jednom místě —{" "}
              <span className="nowrap">Lípová 471/6, Nové Město</span>
            </p>
          </div>
        </div>
      </header>

      {/* ===================== SEKCE: CO RÁMUJEME A JAK ===================== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <p className="eyebrow">Dílna</p>
          <h2 id="sluzby-h">Co pro vaše dílo umíme</h2>
          <p className="lead">
            Každé dílo je jiné, proto rám nevybíráme z&nbsp;katalogu, ale
            navrhujeme přímo k&nbsp;němu — profil, dřevo, moření, pasparta
            i&nbsp;sklo.
          </p>

          <ul className="karty">
            <li className="karta">
              <span className="karta-profil karta-profil--drevo" aria-hidden="true" />
              <h3>Dřevěné rámy</h3>
              <p>
                Vyrábíme z&nbsp;březového a&nbsp;dubového dřeva — bez povrchové
                úpravy, nebo mořené, voskované, lazurované a&nbsp;lakované.
                Profil rámu volíme podle díla, ne naopak.
              </p>
            </li>
            <li className="karta">
              <span className="karta-profil karta-profil--kazeta" aria-hidden="true" />
              <h3>Kazetové rámy a vitríny</h3>
              <p>
                Hluboký profil z&nbsp;dubu či břízy vytváří vzduchový prostor
                mezi dílem a&nbsp;sklem. Dílo vlepujeme PH neutrální archivní
                páskou a&nbsp;necháváme volně vyvěšené — může dýchat se změnami
                vlhkosti.
              </p>
            </li>
            <li className="karta">
              <span className="karta-profil karta-profil--pasparta" aria-hidden="true" />
              <h3>Pasparty</h3>
              <p>
                Plátěné i&nbsp;kartonové, standardní i&nbsp;muzeální kvality.
                Okno řežeme přesně na dílo — na milimetr, se zkoseným řezem.
              </p>
            </li>
            <li className="karta">
              <span className="karta-profil karta-profil--kov" aria-hidden="true" />
              <h3>Kovové rámy Nielsen</h3>
              <p>
                Sortiment dřevěných rámů doplňují hliníkové lišty Nielsen —
                úzké, přesné, vhodné pro fotografie a&nbsp;grafiky.
              </p>
            </li>
            <li className="karta">
              <span className="karta-profil karta-profil--box" aria-hidden="true" />
              <h3>Přepravní boxy</h3>
              <p>
                Boxy na míru pro jednotlivé obrazy i&nbsp;celé výstavy — aby
                dílo dojelo na vernisáž ve stejném stavu, v&nbsp;jakém opustilo
                ateliér.
              </p>
            </li>
            <li className="karta">
              <span className="karta-profil karta-profil--atyp" aria-hidden="true" />
              <h3>Atypická řešení</h3>
              <p>
                Prezentace objektů, trojrozměrných artefaktů a&nbsp;nestandardních
                formátů. Přineste dílo, vymyslíme adjustaci.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ===================== SEKCE: O NÁS / DŮVĚRA ===================== */}
      <section className="onas" aria-labelledby="onas-h">
        <div className="wrap onas-grid">
          <div className="onas-text">
            <p className="eyebrow eyebrow--light">Lípová 6</p>
            <h2 id="onas-h">Rámaři, kteří mluví s&nbsp;autory</h2>
            <p>
              Naší specializací je rámování uměleckých děl. Dialog mezi námi
              a&nbsp;autorem před nás staví nové výzvy — a&nbsp;právě na něm
              jsou založeny naše inovace. Rámujeme pro galerie, fotografy,
              malíře i&nbsp;pro lidi, kteří si domů nesou jeden jediný obraz
              po babičce.
            </p>
            <p>
              Lípová&nbsp;6 je společný projekt dvou firem: na jednom místě
              najdete výrobu klasických velkoformátových fotografií
              (proces&nbsp;RA-4), velkoformátový digitální Fine&nbsp;Art tisk —
              a&nbsp;naši rámařskou dílnu. Fotografii tak můžete nechat
              vytisknout, zapaspartovat a&nbsp;zarámovat, aniž byste vyšli
              ze dveří.
            </p>
            <div className="kontakt-radek">
              <a href="tel:+420222711777">+420 222 711 777</a>
              <a href="mailto:my@ramypasparty.cz">my@ramypasparty.cz</a>
              <span>Lípová 471/6, 120 00 Praha 2 — Nové Město</span>
            </div>
          </div>

          <ul className="zasady" aria-label="Jak pracujeme">
            <li>
              <strong>Archivní materiály</strong>
              <span>
                PH neutrální pásky a&nbsp;muzeální pasparty — dílo se rámu
                nedotýká tam, kde nemá.
              </span>
            </li>
            <li>
              <strong>Dílo může dýchat</strong>
              <span>
                V&nbsp;kazetových vitrínách necháváme papír volně vyvěšený,
                takže se s&nbsp;vlhkostí napíná i&nbsp;smršťuje bez zvlnění.
              </span>
            </li>
            <li>
              <strong>Dub a bříza z dílny</strong>
              <span>
                Rámy nevykupujeme v&nbsp;metráži — profil frézujeme
                a&nbsp;moříme sami, v&nbsp;odstínech hnědé, šedé, černé
                i&nbsp;bílé lazury.
              </span>
            </li>
            <li>
              <strong>Třetí rozměr adjustace</strong>
              <span>
                Hluboký kazetový profil dává dílu vzduch a&nbsp;stín — rám
                přestává být okrajem a&nbsp;stává se prostorem.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
