import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VaKo montáže s.r.o. — Zámečnictví Ostrava | Kovovýroba, zábradlí, brány",
  description:
    "Zámečnická dílna v Ostravě. Zábradlí, brány, ocelové schodiště, mříže a zakázková kovovýroba. Zaměříme, vyrobíme, namontujeme — vlastní svářeči s certifikací.",
  openGraph: {
    title: "VaKo montáže — zámečnictví Ostrava",
    description:
      "Zakázková kovovýroba a zámečnictví: zábradlí, brány, schodiště, ocelové konstrukce. Dílna v Ostravě, montáže po celém Moravskoslezském kraji.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "Z-01",
    profil: "Jekl 40×40",
    nazev: "Zábradlí a madla",
    popis:
      "Schodišťová i balkonová zábradlí z oceli a nerezu. Zaměříme přímo u vás, svaříme v dílně, ukotvíme na chemické kotvy. Včetně revize a kotevního protokolu pro SVJ.",
  },
  {
    kod: "Z-02",
    profil: "Plech 3 mm",
    nazev: "Brány a vrata",
    popis:
      "Posuvné i křídlové brány, vjezdová vrata pro rodinné domy a areály. Pohon, fotobuňky a servis pantů řešíme my — vy dostanete jeden telefon na všechno.",
  },
  {
    kod: "Z-03",
    profil: "UPE 160",
    nazev: "Ocelové schodiště a konstrukce",
    popis:
      "Vřetenová i přímá schodiště, ocelové plošiny, přístřešky a nosné konstrukce hal. Statiku a výkres dodáme, svary provádí svářeči s platnými zkouškami ČSN EN ISO 9606-1.",
  },
  {
    kod: "Z-04",
    profil: "Pásovina 30×5",
    nazev: "Mříže a zajištění objektů",
    popis:
      "Pevné i otevírací mříže na okna, sklepní kóje, uzamykatelné klece pro kola. Žárový zinek nebo komaxit — v Ostravě rez pracuje rychle, my rychleji.",
  },
  {
    kod: "Z-05",
    profil: "Drobná ocel",
    nazev: "Opravy a montáže na místě",
    popis:
      "Utržený pant, prasklý svar, zaseknutá vrata. Přijedeme se svářečkou a flexou, opravíme na místě. Menší zásahy obvykle do tří pracovních dnů od zavolání.",
  },
];

const zakazky = [
  {
    misto: "Ostrava-Poruba",
    rok: "2023",
    co: "42 běžných metrů schodišťového zábradlí pro bytový dům SVJ Hlavní třída — demontáž starého, výroba, komaxit RAL 7016, montáž za provozu domu.",
  },
  {
    misto: "Vratimov",
    rok: "2024",
    co: "Posuvná brána 6 m s pohonem a ocelové oplocení areálu autoservisu. Od zaměření po předání za 5 týdnů.",
  },
  {
    misto: "Ostrava-Hrabová",
    rok: "2024",
    co: "Ocelová obslužná plošina s žebříkem pro výrobní halu — 1,8 tuny konstrukce, žárový zinek, montáž o víkendové odstávce.",
  },
];

export default function Page() {
  return (
    <main className="vk">
      {/* ===== HERO ===== */}
      <header className="vk-hero">
        <div className="vk-hero-topbar">
          <span className="vk-wordmark" aria-label="VaKo montáže">
            <span className="vk-wordmark-va">VA</span>
            <span className="vk-wordmark-weld" aria-hidden="true"></span>
            <span className="vk-wordmark-ko">KO</span>
            <span className="vk-wordmark-sub">montáže s.r.o.</span>
          </span>
          <nav className="vk-hero-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Co vyrábíme</a>
            <a href="#zakazky">Zakázky</a>
            <a className="vk-hero-tel" href="tel:+420596000000">
              +420 596 000 000
            </a>
          </nav>
        </div>

        <div className="vk-hero-body">
          <p className="vk-hero-eyebrow">Zámečnická dílna · Ostrava</p>
          <h1 className="vk-hero-title">
            <span className="vk-line vk-line-1">Ocel</span>
            <span className="vk-line vk-line-2">
              řežeme, svaříme<span className="vk-spark" aria-hidden="true"></span>
            </span>
            <span className="vk-line vk-line-3">a přišroubujeme.</span>
          </h1>
          <p className="vk-hero-lead">
            Zábradlí, brány, schodiště, mříže i konstrukce hal. Zaměříme u vás,
            vyrobíme v dílně v Ostravě a namontujeme tak, aby to drželo dalších
            třicet let.
          </p>
          <div className="vk-hero-actions">
            <a className="vk-btn vk-btn-primary" href="tel:+420596000000">
              Zavolat do dílny
            </a>
            <a className="vk-btn vk-btn-ghost" href="mailto:dilna@vakomontaze.cz">
              Poslat poptávku e-mailem
            </a>
          </div>
        </div>

        {/* signature: svarová housenka — šev, který drží celou stránku pohromadě */}
        <div className="vk-weldline" aria-hidden="true">
          <span className="vk-weld-bead"></span>
          <span className="vk-weld-label">svar č. 1 — nosný</span>
        </div>

        <ul className="vk-hero-facts">
          <li>
            <strong>Vlastní dílna</strong>
            <span>Ostrava-Kunčičky, 400 m²</span>
          </li>
          <li>
            <strong>Certifikovaní svářeči</strong>
            <span>ČSN EN ISO 9606-1</span>
          </li>
          <li>
            <strong>Dojezd na montáž</strong>
            <span>celý Moravskoslezský kraj</span>
          </li>
        </ul>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="vk-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="vk-section-head">
          <h2 id="sluzby-h">Co vyrábíme</h2>
          <p>
            Každá položka má v dílně svůj regál s profily. U ceny nehádáme —
            po zaměření dostanete rozpočet po položkách: materiál, výroba,
            povrchová úprava, montáž.
          </p>
        </div>

        <ul className="vk-sluzby">
          {sluzby.map((s) => (
            <li className="vk-sluzba" key={s.kod}>
              <div className="vk-sluzba-meta">
                <span className="vk-sluzba-kod">{s.kod}</span>
                <span className="vk-sluzba-profil">{s.profil}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
          <li className="vk-sluzba vk-sluzba-plna">
            <div className="vk-sluzba-meta">
              <span className="vk-sluzba-kod">Z-06</span>
              <span className="vk-sluzba-profil">Na míru</span>
            </div>
            <h3>Nenašli jste svoji zakázku?</h3>
            <p>
              Pošlete náčrt na ubrousku nebo fotku z mobilu na{" "}
              <a href="mailto:dilna@vakomontaze.cz">dilna@vakomontaze.cz</a>.
              Do dvou pracovních dnů se ozveme s tím, jestli to svaříme a za kolik.
            </p>
          </li>
        </ul>
      </section>

      {/* ===== ZAKÁZKY / DŮVĚRA ===== */}
      <section className="vk-section vk-section-dark" id="zakazky" aria-labelledby="zakazky-h">
        <div className="vk-section-head">
          <h2 id="zakazky-h">Poslední zakázky</h2>
          <p>
            Žádné katalogové fotky. Tohle jsme skutečně zaměřili, svařili a
            předali — s revizí, protokoly a zárukou 5 let na svary.
          </p>
        </div>

        <ol className="vk-zakazky">
          {zakazky.map((z) => (
            <li className="vk-zakazka" key={z.misto + z.rok}>
              <div className="vk-zakazka-stamp">
                <span className="vk-zakazka-misto">{z.misto}</span>
                <span className="vk-zakazka-rok">{z.rok}</span>
              </div>
              <p>{z.co}</p>
            </li>
          ))}
        </ol>

        <blockquote className="vk-reference">
          <p>
            „Přijeli, změřili, za tři týdny stálo nové zábradlí na čtyřech
            patrech. Během montáže po sobě každý den uklidili — na panelák
            v Porubě zázrak.“
          </p>
          <footer>— předseda SVJ, Ostrava-Poruba</footer>
        </blockquote>

        <div className="vk-duvera">
          <div className="vk-duvera-item">
            <strong>Ing. Václav Kotrbatý</strong>
            <span>jednatel — zakázku s vámi projde osobně, od výkresu po předání</span>
          </div>
          <div className="vk-duvera-item">
            <strong>Záruka 5 let na svary</strong>
            <span>a kotevní protokol ke každé montáži zábradlí</span>
          </div>
          <div className="vk-duvera-item">
            <strong>Pojištění odpovědnosti</strong>
            <span>do 10 mil. Kč — montujeme i za provozu firem a domů</span>
          </div>
        </div>
      </section>
    </main>
  );
}
