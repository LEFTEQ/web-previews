const obory = [
  {
    par: "§ 1",
    nazev: "Smlouvy a smluvní agenda",
    text: "Připravíme a sepíšeme smlouvu, povedeme za vás jednání o jejím uzavření a pohlídáme, aby vás žádné ustanovení nepřekvapilo. Kupní, nájemní, o dílo i smlouvy na míru.",
  },
  {
    par: "§ 2",
    nazev: "Zastoupení před soudy a úřady",
    text: "Sepíšeme žalobu či podání správnímu orgánu a zastoupíme vás v celém řízení — od prvního jednání až po pravomocné rozhodnutí. Nemusíte na nic chodit sami.",
  },
  {
    par: "§ 3",
    nazev: "Obhajoba v trestním řízení",
    text: "Převezmeme obhajobu v kterékoli fázi trestního řízení. Jsme u výslechu, u soudu i u vazebního zasedání — a mluvíme za vás tam, kde jde o nejvíc.",
  },
  {
    par: "§ 4",
    nazev: "Právní rozbory a stanoviska",
    text: "Než se rozhodnete, řekneme vám, jak na tom právně jste. Srozumitelný rozbor situace s doporučením dalšího postupu — písemně, s podpisem advokáta.",
  },
  {
    par: "§ 5",
    nazev: "Nemovitosti a katastr",
    text: "Převody nemovitostí, advokátní úschova kupní ceny, návrhy na vklad do katastru. Peníze i vlastnické právo předáváme tak, aby žádná strana nenesla zbytečné riziko.",
  },
  {
    par: "§ 6",
    nazev: "Právo pro firmy",
    text: "Založení a změny společností, valné hromady, pracovněprávní agenda, vymáhání pohledávek. Průběžné poradenství pro podnikatele z Hradce Králové a okolí.",
  },
];

const zasady = [
  {
    cislo: "01",
    nazev: "Specializace, ne univerzálnost",
    text: "Vaší věci se věnuje advokát, který se v daném oboru práva skutečně specializuje. A díky vzájemné zastupitelnosti advokátů kanceláře se váš případ nikdy nezastaví.",
  },
  {
    cislo: "02",
    nazev: "Pojištění a etika",
    text: "Kancelář i každý advokát jsou řádně pojištěni u Generali pojišťovny. Řídíme se zákonem o advokacii, etickým kodexem ČAK i Kodexem chování advokátů ES.",
  },
  {
    cislo: "03",
    nazev: "Kompletní zázemí",
    text: "Spolupracujeme s daňovými poradci, účetními, exekutory, patentovými zástupci i překladateli. Jednu věc tak vyřešíte na jednom místě — u nás.",
  },
];

export default function Page() {
  return (
    <main className="vp">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark">
            Všetečka<span className="wordmark-amp">&amp;</span>partneři
            <span className="wordmark-sub">advokátní kancelář · Hradec Králové</span>
          </span>
          <span className="hero-tel">
            <a href="tel:+420495409021">+420 495 409 021</a>
          </span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Zapsáno v seznamu ČAK · právní služby nepřetržitě od roku 1992</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Právo má</span>
            <span className="hero-line hero-line-2">
              <span className="hero-par" aria-hidden="true">§</span>
              svá pravidla.
            </span>
            <span className="hero-line hero-line-3">Známe je 32&nbsp;let.</span>
          </h1>
          <p className="hero-perex">
            Smlouvy, spory, obhajoba i nemovitosti — komplexní právní poradenství
            a zastupování v&nbsp;soukromém i&nbsp;veřejném právu. Osobně, v&nbsp;Orlické ulici
            v&nbsp;Hradci Králové.
          </p>
          <div className="hero-akce">
            <a className="btn btn-hlavni" href="tel:+420495409021">Zavolat do kanceláře</a>
            <a className="btn btn-tichy" href="mailto:kancelar@vsak.cz">kancelar@vsak.cz</a>
          </div>
        </div>

        <div className="hero-pata" aria-hidden="true">
          <span className="hero-pata-item">Od r. 1992</span>
          <span className="hero-pata-item">Veřejná obchodní společnost od r. 1997</span>
          <span className="hero-pata-item">Orlická 163, Hradec Králové</span>
          <span className="hero-pata-item">CZ / EN</span>
        </div>

        <div className="hero-znak" aria-hidden="true">§</div>
      </header>

      {/* ================= OBORY / SLUŽBY ================= */}
      <section className="sekce sekce-obory" aria-labelledby="obory-h">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Čím se zabýváme</p>
          <h2 id="obory-h" className="sekce-titul">
            Šest oborů, ve kterých za&nbsp;vás mluvíme
          </h2>
          <p className="sekce-perex">
            Každou věc vede advokát, který se v&nbsp;daném oboru specializuje.
            Vy popíšete, co se stalo — my řekneme, co s&nbsp;tím právo umí.
          </p>
        </div>

        <ul className="obory-mrizka">
          {obory.map((o) => (
            <li key={o.par} className="obor">
              <span className="obor-par" aria-hidden="true">{o.par}</span>
              <h3 className="obor-nazev">{o.nazev}</h3>
              <p className="obor-text">{o.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA / O KANCELÁŘI ================= */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-h">
        <div className="duvera-uvod">
          <p className="sekce-eyebrow sekce-eyebrow-svetly">Proč Všetečka &amp; partneři</p>
          <h2 id="duvera-h" className="sekce-titul sekce-titul-svetly">
            Kancelář, která tu byla dřív než&nbsp;internet
          </h2>
          <p className="duvera-perex">
            Právní služby poskytujeme nepřetržitě od roku 1992; od roku 1997 jako
            veřejná obchodní společnost. Tři dekády praxe znamenají jediné:
            většinu situací, do kterých se můžete dostat, jsme už řešili.
          </p>

          <dl className="duvera-cisla">
            <div className="cislo">
              <dt>Rok založení</dt>
              <dd>1992</dd>
            </div>
            <div className="cislo">
              <dt>Oborů práva</dt>
              <dd>6+</dd>
            </div>
            <div className="cislo">
              <dt>Jazyky jednání</dt>
              <dd>CZ&nbsp;/&nbsp;EN</dd>
            </div>
          </dl>
        </div>

        <ol className="zasady">
          {zasady.map((z) => (
            <li key={z.cislo} className="zasada">
              <span className="zasada-cislo" aria-hidden="true">{z.cislo}</span>
              <div>
                <h3 className="zasada-nazev">{z.nazev}</h3>
                <p className="zasada-text">{z.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="duvera-adresa">
          Najdete nás na adrese <strong>Orlická 163, 500&nbsp;03 Hradec Králové</strong> —
          pět minut pěšky od&nbsp;soutoku Labe a&nbsp;Orlice.
        </p>
      </section>
    </main>
  );
}
