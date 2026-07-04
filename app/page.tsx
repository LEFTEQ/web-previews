import type { CSSProperties } from "react";

export default function Page() {
  const kotva = [
    {
      cislo: "01",
      titul: "Pro chachary",
      popis:
        "Mikiny, trika a bundy, co vydrží zápas i cestu tam a zpátky. Střihy na chlapa z Ostravy, ne z katalogu.",
    },
    {
      cislo: "02",
      titul: "Pro chacharky",
      popis:
        "Dámské střihy v klubových barvách. Sedne to na tribunu i do hospody po výhře.",
    },
    {
      cislo: "03",
      titul: "Pro nejmenší",
      popis:
        "Baníkovec se vychovává odmala. Dětské body, čepice a mikiny pro budoucí kotel.",
    },
    {
      cislo: "04",
      titul: "Šály a čepice",
      popis:
        "Pletené šály a zimní čepice do ostravského větru. To, co držíš nad hlavou při hymně.",
    },
  ];

  return (
    <main className="cw">
      <header className="cw-topbar" aria-label="Značka">
        <a className="cw-wordmark" href="#" aria-label="Chachar slash Wear">
          <span className="cw-wm-1">CHACHAR</span>
          <span className="cw-wm-slash" aria-hidden="true">/</span>
          <span className="cw-wm-2">WEAR</span>
        </a>
        <span className="cw-mesto">Ostrava · Mariánské Hory</span>
      </header>

      <section className="cw-hero" aria-labelledby="cw-hero-nadpis">
        <div className="cw-hero-mrez" aria-hidden="true">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties} />
          ))}
        </div>

        <div className="cw-hero-obsah">
          <p className="cw-eyebrow">
            <span className="cw-tecka" aria-hidden="true" />
            Oblečení pro každého chachara
          </p>

          <h1 id="cw-hero-nadpis" className="cw-hero-nadpis">
            <span className="cw-radek cw-radek-a">NOSÍŠ</span>
            <span className="cw-radek cw-radek-b">MODROBÍLÝ</span>
            <span className="cw-radek cw-radek-c">
              KOTEL
              <em className="cw-akcent">.</em>
            </span>
          </h1>

          <p className="cw-hero-text">
            Fanouškovský textil pro příznivce Baníku. Šijeme, tiskneme a pleteme
            v Ostravě — a z každého kusu jde část zpátky na choreografie v kotli.
          </p>

          <div className="cw-hero-akce">
            <a className="cw-btn cw-btn-plny" href="#kolekce">
              Prohlédnout kolekci
            </a>
            <a className="cw-btn cw-btn-obrys" href="#prodejna">
              Najít prodejnu
            </a>
          </div>

          <p className="cw-hero-tag" aria-hidden="true">
            #JEDNOMĚSTO · #JEDENKLUB · #JEDNADRESA
          </p>
        </div>
      </section>

      <section id="kolekce" className="cw-sekce" aria-labelledby="cw-kolekce-nadpis">
        <div className="cw-sekce-hlava">
          <p className="cw-eyebrow cw-eyebrow-tmavy">Co u nás najdeš</p>
          <h2 id="cw-kolekce-nadpis">Vybav celou rodinu na tribunu</h2>
        </div>

        <ul className="cw-mrizka">
          {kotva.map((k) => (
            <li key={k.cislo} className="cw-karta">
              <span className="cw-karta-cislo">{k.cislo}</span>
              <h3 className="cw-karta-titul">{k.titul}</h3>
              <p className="cw-karta-popis">{k.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="prodejna" className="cw-duvera" aria-labelledby="cw-duvera-nadpis">
        <div className="cw-duvera-text">
          <p className="cw-eyebrow">
            <span className="cw-tecka" aria-hidden="true" />
            Jediní s originálem
          </p>
          <h2 id="cw-duvera-nadpis">
            Ne suvenýr z aleje — kus, co drží klub nad vodou
          </h2>
          <p className="cw-duvera-perex">
            Jako jediní děláme originální fanouškovský textil s licencí. Když si
            u nás koupíš mikinu, nekupuješ jen hadr — platíš dýmovnice, plachty a
            barvy pro další choreo v kotli. Přijď si sáhnout, ať víš, co bereš.
          </p>

          <dl className="cw-fakta">
            <div>
              <dt>Prodejna</dt>
              <dd>Prostorná 914/2, Ostrava — Mariánské Hory</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Pondělí až pátek, 10:00–17:00</dd>
            </div>
            <div>
              <dt>Platba</dt>
              <dd>Kartou, převodem i QR kódem. Dobírku neděláme.</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420735122050">+420 735 122 050</a>
              </dd>
            </div>
          </dl>
        </div>

        <aside className="cw-vlajka" aria-label="Klubové barvy">
          <div className="cw-vlajka-pruh cw-modry">
            <span>BANÍK</span>
          </div>
          <div className="cw-vlajka-pruh cw-bily">
            <span>OSTRAVA</span>
          </div>
          <p className="cw-vlajka-podpis">Modrobílá od roku 2016</p>
        </aside>
      </section>
    </main>
  );
}
