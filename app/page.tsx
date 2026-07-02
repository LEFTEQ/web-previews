const sluzby = [
  {
    kod: "§ 235/2004",
    nazev: "DPH a kontrolní hlášení",
    popis:
      "Hlídáme termíny podání za vás. Přiznání k DPH i kontrolní hlášení odevzdáme vždy do 25. dne v měsíci — za devatenáct let jsme nezmeškali jediný termín.",
    detail: "měsíční i čtvrtletní plátci",
  },
  {
    kod: "§ 586/1992",
    nazev: "Daň z příjmů",
    popis:
      "Přiznání fyzických i právnických osob včetně optimalizace. Projdeme s vámi, co si můžete legálně odečíst — paušály, odpisy, slevy na dani. Nic navíc nezaplatíte.",
    detail: "OSVČ, s.r.o., pronájmy",
  },
  {
    kod: "§ 563/1991",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní podvojné účetnictví i daňová evidence. Doklady nám pošlete elektronicky nebo přinesete v šanonu — obojí zpracujeme do konce měsíce.",
    detail: "vč. daňové evidence",
  },
  {
    kod: "§ 262/2006",
    nazev: "Mzdy a personalistika",
    popis:
      "Výplatní pásky, přehledy pro pojišťovny, přihlášky zaměstnanců. Mzdy počítáme do 10. dne, takže vaši lidé dostanou výplatu vždy včas.",
    detail: "do 50 zaměstnanců",
  },
  {
    kod: "zák. 523/1992",
    nazev: "Daňové poradenství",
    popis:
      "Jako registrovaný daňový poradce za vás převezmeme odpovědnost i jednání s finančním úřadem. U kontroly sedíme vedle vás — nebo místo vás.",
    detail: "zastupování před FÚ",
  },
  {
    kod: "odklad",
    nazev: "Odklad přiznání do 1. 7.",
    popis:
      "S plnou mocí daňovému poradci získáte tři měsíce navíc na podání přiznání i zaplacení daně. Plnou moc vyřídíme za vás, stačí podpis.",
    detail: "plná moc = 3 měsíce navíc",
  },
];

const duvody = [
  {
    cislo: "19 let",
    text: "vedeme účetnictví firmám a živnostníkům z Hradce Králové a okolí. Klienti, kteří k nám přišli v roce 2006, u nás účtují dodnes.",
  },
  {
    cislo: "1 osoba",
    text: "Vaše doklady zná Kateřina Sedláčková osobně — žádné přepojování mezi odděleními. Zavoláte a mluvíte přímo s tím, kdo vaši firmu účtuje.",
  },
  {
    cislo: "0 pokut",
    text: "našim klientům za zmeškaný termín. Kalendář daňových povinností hlídáme my a připomeneme se vám dřív, než se připomene finanční úřad.",
  },
];

export default function Page() {
  return (
    <main className="uc">
      {/* ————— HERO ————— */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            Sedláčková<em>&nbsp;·&nbsp;účetnictví&nbsp;s.r.o.</em>
          </span>
          <span className="hero-loc">Hradec Králové — Akademika Heyrovského 1178/6</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Daňová poradkyně a účetní</p>
          <h1 className="hero-h1">
            <span className="h1-line">Má dáti,</span>
            <span className="h1-line h1-dal">Dal.</span>
            <span className="h1-line h1-sub">Vaše čísla sedí na korunu.</span>
          </h1>
          <p className="hero-p">
            Účetnictví, mzdy a daně pro živnostníky a malé firmy z Hradce Králové.
            Termíny hlídáme my, vy podnikáte. Odpovědnost za přiznání bereme na sebe —
            jako registrovaný daňový poradce ze zákona.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420603289753">
              Zavolat: 603 289 753
            </a>
            <a className="btn btn-ghost" href="mailto:katka@ucetnictvisedlackova.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: účetní T-konto / soupiska jako grafický prvek */}
        <aside className="tkonto" aria-hidden="true">
          <div className="tkonto-head">
            <span>Má dáti</span>
            <span>Dal</span>
          </div>
          <div className="tkonto-row">
            <span>Váš čas na podnikání</span>
            <span className="tk-num">+ 12 h / měsíc</span>
          </div>
          <div className="tkonto-row">
            <span>Starost o termíny</span>
            <span className="tk-num tk-red">− 100 %</span>
          </div>
          <div className="tkonto-row">
            <span>Odklad přiznání</span>
            <span className="tk-num">do 1. 7.</span>
          </div>
          <div className="tkonto-row tkonto-sum">
            <span>Zůstatek</span>
            <span className="tk-num">klid v duši</span>
          </div>
        </aside>
      </header>

      {/* ————— SLUŽBY ————— */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <h2 id="sluzby-h">Co za vás vedeme</h2>
          <p className="sec-note">
            Každá služba má oporu v konkrétním zákoně — proto je značíme paragrafy, ne ikonkami.
          </p>
        </div>
        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.nazev} className="karta">
              <span className="karta-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="karta-detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ————— DŮVĚRA ————— */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sec-head sec-head-inv">
          <h2 id="duvera-h">Proč účtovat u Sedláčkové</h2>
          <p className="sec-note">
            Malá kancelář má jednu výhodu, kterou velká nikdy mít nebude: znáte jméno člověka, který drží vaše čísla.
          </p>
        </div>

        <div className="duvera-grid">
          {duvody.map((d) => (
            <article key={d.cislo} className="duvod">
              <span className="duvod-cislo">{d.cislo}</span>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <figure className="citace">
          <blockquote>
            „Paní Sedláčková mi před termínem sama volá, co jí ještě chybí. Za deset let
            jsem od finančního úřadu nedostal jediný dopis, kterému bych nerozuměl —
            protože ho vždycky vyřešila dřív, než přišel.“
          </blockquote>
          <figcaption>— truhlář, OSVČ, klient od roku 2014, Hradec Králové</figcaption>
        </figure>
      </section>
    </main>
  );
}
