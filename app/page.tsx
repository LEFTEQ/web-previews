import type { CSSProperties } from "react";

type Pizza = {
  cislo: number;
  nazev: string;
  slozeni: string;
  cena: number;
  smetana?: boolean;
};

const pizzy: Pizza[] = [
  { cislo: 1, nazev: "Margherita", slozeni: "sugo, mozzarella, bazalka", cena: 210 },
  { cislo: 4, nazev: "Capricciosa", slozeni: "sugo, mozzarella, žampiony, olivy, artyčoky, parmská šunka", cena: 280 },
  { cislo: 6, nazev: "Quattro Formaggi", slozeni: "sugo, mozzarella, eidam, niva, parmezán", cena: 280 },
  { cislo: 10, nazev: "Opatova", slozeni: "smetana, mozzarella, losos, rozmarýn, parmezán, rukola, citrón", cena: 300, smetana: true },
  { cislo: 15, nazev: "Piccante", slozeni: "sugo, mozzarella, pikantní salám spianata, feferonky, klobása, olivy", cena: 290 },
  { cislo: 24, nazev: "Hawaii", slozeni: "sugo, mozzarella, šunka od kosti, ananas", cena: 270 },
  { cislo: 33, nazev: "Salmone fresco", slozeni: "sugo, mozzarella, špenát, losos, čerstvá rajčata, parmezán", cena: 300 },
  { cislo: 38, nazev: "Chef's special", slozeni: "sugo, mozzarella, spianata, sušená rajčata, vepřová panenka, feferonky, parmezán", cena: 310 },
  { cislo: 40, nazev: "Speciale di Giovanni", slozeni: "smetana, mozzarella, spianata, kuřecí maso, kukuřice, feferonky, parmezán", cena: 310, smetana: true },
];

const provoz = [
  { den: "úterý – pátek", cas: "15:00 – 21:00" },
  { den: "sobota – neděle", cas: "11:00 – 14:00 · 15:30 – 21:00" },
];

export default function Page() {
  return (
    <main className="mp">
      <header className="mp-top">
        <a className="mp-brand" href="#top" aria-label="Mistr Pizza, Opatovice nad Labem">
          <span className="mp-brand-mistr">Mistr</span>
          <span className="mp-brand-pizza">Pizza</span>
        </a>
        <a className="mp-tel" href="tel:733531531">
          <span className="mp-tel-label">Objednávky</span>
          <span className="mp-tel-num">733&nbsp;531&nbsp;531</span>
        </a>
      </header>

      <section className="mp-hero" id="top">
        <div className="mp-hero-media">
          <img
            src="/hero.webp"
            alt="Čerstvě upečená pizza z kamenné pece v Mistr Pizza"
            className="mp-hero-img"
            width={1200}
            height={900}
          />
        </div>
        <div className="mp-hero-text">
          <p className="mp-eyebrow">Pizzerie · Opatovice nad Labem u Hradce Králové</p>
          <h1 className="mp-h1">
            Pravá pizza<br />
            <span className="mp-h1-accent">z kamenné pece.</span>
          </h1>
          <p className="mp-lede">
            Rozvaříme sugo, ručně vytáhneme těsto a upečeme ho do křupava.
            Přivezeme vám ji horkou až domů — do Opatovic, Hradce Králové a okolí.
          </p>
          <div className="mp-hero-cta">
            <a className="mp-btn" href="tel:733531531">Objednat telefonem</a>
            <a className="mp-btn mp-btn-ghost" href="#nabidka">Prohlédnout menu</a>
          </div>
          <ul className="mp-hero-facts">
            <li><strong>40</strong> druhů pizzy</li>
            <li><strong>Ø&nbsp;33 cm</strong> na plech</li>
            <li><strong>Dovoz</strong> do 45&nbsp;minut</li>
          </ul>
        </div>
      </section>

      <section className="mp-menu" id="nabidka" aria-labelledby="nabidka-h">
        <div className="mp-section-head">
          <p className="mp-eyebrow">Z pece</p>
          <h2 id="nabidka-h" className="mp-h2">Výběr z nabídky</h2>
          <p className="mp-section-note">
            Každá pizza má průměr 33&nbsp;cm. Bílé se pečou na smetaně místo suga.
            Celé menu čítá 40&nbsp;druhů — tady je devět, které si zákazníci objednávají nejčastěji.
          </p>
        </div>

        <ol className="mp-list">
          {pizzy.map((p) => (
            <li key={p.cislo} className="mp-item">
              <span className="mp-item-no" aria-hidden="true">
                {String(p.cislo).padStart(2, "0")}
              </span>
              <div className="mp-item-body">
                <h3 className="mp-item-name">
                  {p.nazev}
                  {p.smetana && <span className="mp-tag">smetana</span>}
                </h3>
                <p className="mp-item-desc">{p.slozeni}</p>
              </div>
              <span className="mp-item-price">{p.cena}&nbsp;Kč</span>
            </li>
          ))}
        </ol>

        <p className="mp-menu-foot">
          Chuť na něco jiného? Zavolejte na <a href="tel:733531531">733&nbsp;531&nbsp;531</a> —
          celou nabídku vám rádi projdeme.
        </p>
      </section>

      <section className="mp-about" aria-labelledby="about-h">
        <div className="mp-about-media">
          <img
            src="/section-1.webp"
            alt="Pizzař v Mistr Pizza vytahuje ručně těsto"
            className="mp-about-img"
            width={900}
            height={700}
          />
        </div>
        <div className="mp-about-text">
          <p className="mp-eyebrow">O nás</p>
          <h2 id="about-h" className="mp-h2">Poctivé řemeslo, žádné zkratky</h2>
          <p className="mp-p">
            Pečeme v Opatovicích nad Labem, kousek za Hradcem Králové. Těsto
            necháváme kynout přes noc, sugo vaříme z italských loupaných rajčat
            a mozzarellu trháme ručně. Nic z mrazáku, nic narychlo.
          </p>
          <p className="mp-p">
            Losos, parmská šunka i vepřová panenka na pizze nejsou marketing —
            jsou to suroviny, které si sami vybíráme a stojíme si za nimi.
          </p>

          <div className="mp-info">
            <div className="mp-info-block">
              <h3 className="mp-info-h">Kde nás najdete</h3>
              <p className="mp-info-p">
                Pardubická 41<br />
                Opatovice nad Labem<br />
                533&nbsp;45
              </p>
            </div>
            <div className="mp-info-block">
              <h3 className="mp-info-h">Otevřeno</h3>
              <table className="mp-hours">
                <tbody>
                  {provoz.map((r) => (
                    <tr key={r.den}>
                      <th scope="row">{r.den}</th>
                      <td>{r.cas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mp-info-note">O prázdninách (1.&nbsp;7.–31.&nbsp;8.) i v pondělí od 15:00.</p>
            </div>
          </div>

          <a className="mp-btn" href="tel:733531531">Zavolat a objednat</a>
        </div>
      </section>

      <img
        src="/section-2.webp"
        alt="Rozkrojená pizza s tavenou mozzarellou"
        className="mp-strip"
        aria-hidden="true"
        width={1400}
        height={500}
      />
    </main>
  );
}
