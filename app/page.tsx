const sluzby = [
  {
    label: "Rám",
    nazev: "Rámování na míru",
    text: "Lišty řežeme a sesazujeme přímo v dílně — libovolný rozměr, přírodní dřevo i barevné provedení. Smrk, borovice, teak, mahagon, ajous, ramín. Přineste obraz, plakát nebo vyšívku, vzorník máte v ruce do minuty.",
    detail: "od zaměření po zavěšení",
  },
  {
    label: "Pasparta",
    nazev: "Paspartování grafiky",
    text: "Správně zvolená pasparta je tečka za kresbou. Okno vyřezáváme přesně na milimetr, šířku a barvu ladíme k listu i k místu, kde bude viset. Kresba dostane vzduch a rám přestane konkurovat.",
    detail: "řez pod úhlem 45°",
  },
  {
    label: "Sklo",
    nazev: "Zasklení a ochrana",
    text: "Čiré nebo antireflexní sklo chrání kresbu před prachem, mastnotou a světlem. Zadní stranu uzavřeme, dodáme závěs — obraz odchází připravený rovnou na zeď.",
    detail: "včetně antireflexu",
  },
  {
    label: "Rada",
    nazev: "Poradíme s výběrem",
    text: "Nevíte, jaký rám k obrazu patří? Stačí přinést fotografii. K historickým motivům patří zdobnější profil, moderní malba chce jednoduchou linku. Vybereme spolu — bez tlaku, z pestrého vzorníku.",
    detail: "konzultace zdarma",
  },
];

const duvera = [
  {
    heading: "Dílna, ne přepážka",
    text: "Rámujeme v Ostravě-Zábřehu, U Studia 34. Zakázku přebírá ten, kdo ji taky vyrobí — Ing. Vladimír Chaloupecký. Žádné posílání do centrálního skladu, žádné týdny čekání.",
  },
  {
    heading: "Krátké lhůty, jasná cena",
    text: "Běžnou zakázku máte zpravidla do několika dnů. Cenu znáte předem, podle lišty a rozměru — spočítáme ji na místě, než odejdete.",
  },
  {
    heading: "Záruka i po záruce",
    text: "Za řemeslo ručíme. Když se po letech uvolní závěs nebo praskne sklo, přijďte — opravíme, přesklíme, vyměníme paspartu. Rám má vydržet déle než móda.",
  },
];

export default function Page() {
  return (
    <main className="ram-page">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-frame" aria-hidden="true">
          <span className="hf hf-top" />
          <span className="hf hf-right" />
          <span className="hf hf-bottom" />
          <span className="hf hf-left" />
          <span className="hf-corner hf-tl" />
          <span className="hf-corner hf-tr" />
          <span className="hf-corner hf-bl" />
          <span className="hf-corner hf-br" />
        </div>

        <div className="hero-inner">
          <p className="wordmark">
            <span className="wm-ch">CH</span>
            <span className="wm-amp">&amp;</span>
            <span className="wm-s">S</span>
            <span className="wm-sub">rámování obrazů · Ostrava</span>
          </p>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Obraz máte.</span>
            <span className="ht-line ht-2">Rám mu <em>uděláme</em>.</span>
          </h1>

          <p className="hero-lead">
            Rámařská dílna Ing. Vladimíra Chaloupeckého v Ostravě-Zábřehu.
            Rámy libovolných rozměrů, pasparty řezané na milimetr,
            zasklení i rada s výběrem — vše pod jednou střechou, U Studia 34.
          </p>

          <div className="hero-meta">
            <span className="hm-item">dřevo: smrk · borovice · teak · mahagon</span>
            <span className="hm-dot" aria-hidden="true">◆</span>
            <span className="hm-item">pasparta v barvě na přání</span>
            <span className="hm-dot" aria-hidden="true">◆</span>
            <span className="hm-item">krátké dodací lhůty</span>
          </div>

          <a className="hero-cta" href="#sluzby">
            Co v dílně děláme ↓
          </a>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Čtyři vrstvy jedné zakázky</p>
          <h2 id="sluzby-h">Od lišty ke stěně</h2>
          <p className="section-note">
            Každý zarámovaný obraz se skládá ve vrstvách — jako profil rámu.
            Můžete chtít všechny, nebo jen tu jednu, která vám chybí.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s, i) => (
            <article className="karta" key={s.label}>
              <div className="karta-hlava">
                <span className="karta-label">{s.label}</span>
                <span className="karta-profil" aria-hidden="true">
                  {Array.from({ length: i + 1 }).map((_, j) => (
                    <i key={j} />
                  ))}
                </span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.text}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-uvod">
            <p className="eyebrow eyebrow-svetly">Proč k Chaloupeckým</p>
            <h2 id="duvera-h">
              Rám chrání obraz.<br />
              Zkušenost chrání vás.
            </h2>
            <p className="duvera-lead">
              Rámujeme desítky obrazů týdně — olejomalby, grafické listy,
              diplomy, fotografie i dětské kresby. Každý kus projde stejnýma
              rukama, od prvního řezu po poslední hřebík.
            </p>
          </div>

          <ol className="duvera-list">
            {duvera.map((d) => (
              <li key={d.heading}>
                <h3>{d.heading}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>

          <blockquote className="citat">
            <p>
              „Správně zvolená pasparta se postupně sžívá s grafikou, až se
              stane její neoddělitelnou součástí. To je celé naše řemeslo:
              udělat rám tak, aby si ho nikdo nevšiml — a obraz zazářil.“
            </p>
            <footer className="citat-autor">
              Ing. Vladimír Chaloupecký, rámař · U Studia 34, Ostrava-Zábřeh
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
