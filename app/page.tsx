// Pavel Palaš — sádrokartonář, Praha
// Koncept: „Rovina“ — celý design vychází z desky sádrokartonu, spárování a vodováhy.
// Signature: hero postavené na rastru desek (1250 mm formát) s přiznanými spárami,
// typografie sázená jako popisky na stavbě — velké, technické, přesné.

const sluzby = [
  {
    kod: "SDK-P",
    nazev: "Příčky a předstěny",
    popis:
      "Nová příčka v bytě za jeden až dva dny. Dvojité opláštění, minerální izolace uvnitř — sousedy za stěnou neuslyšíte. Předstěnou schovám rozvody i nerovné panelákové zdi.",
    detail: "Knauf W111–W116 · akustická vata 40–100 mm",
  },
  {
    kod: "SDK-S",
    nazev: "Podhledy a stropy",
    popis:
      "Snížený strop s bodovými světly nebo LED rampou. Do podhledu zmizí kabely, klimatizace i rekuperace. V podkroví zateplím a zaklopím šikminy včetně parozábrany.",
    detail: "závěsné rošty CD/UD · protipožární desky do REI 45",
  },
  {
    kod: "SDK-Q",
    nazev: "Tmelení do kvality Q3–Q4",
    popis:
      "Spára, kterou po vymalování nenajdete. Tmelím ve třech vrstvách, bruska s odsáváním — v bytě nezůstane vrstva prachu. Q4 pro stěny s bočním světlem a lesklé nátěry.",
    detail: "výztužná páska · finální stěrka · broušení s odsáváním",
  },
  {
    kod: "SDK-K",
    nazev: "Koupelny a vlhké provozy",
    popis:
      "Impregnované zelené desky, hydroizolační stěrka v celé sprchové zóně, rohy s těsnicí páskou. Podklad připravím tak, aby obkladač druhý den lepil.",
    detail: "desky H2 · tekutá lepenka · niky a poličky na míru",
  },
];

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedu, přeměřím laserem, proberu s vámi, co od stěny nebo stropu čekáte. Do dvou dnů máte cenu položkově — materiál a práce zvlášť.",
  },
  {
    krok: "Montáž",
    text: "Nastoupím v domluvený den. Rošt, izolace, opláštění, tmelení. Pracuju sám nebo s jedním kolegou — v bytě se nestřídá parta cizích lidí.",
  },
  {
    krok: "Předání",
    text: "Stěnu předávám přebroušenou, vysátou a připravenou k malování. Zkontrolujeme ji spolu latí a bočním světlem. Odvoz odřezků je v ceně.",
  },
];

const reference = [
  {
    misto: "Byt 3+kk, Vršovice",
    text: "Pan Palaš nám rozdělil velký pokoj příčkou na ložnici a pracovnu. Druhý den hotovo, uklizeno, spáru nenajdete ani proti oknu.",
    jmeno: "rodina Duškova",
  },
  {
    misto: "Podkroví RD, Horní Počernice",
    text: "Zateplení a záklop celého podkroví včetně parozábrany. Přesný rozpočet předem, konečná cena stejná jako nabídka.",
    jmeno: "p. Havelka",
  },
  {
    misto: "Ordinace, Praha 4",
    text: "Akustická příčka mezi čekárnou a ordinací. Pacienti přes stěnu neslyší nic — přesně to jsme potřebovali.",
    jmeno: "MUDr. Klimešová",
  },
];

export default function Page() {
  return (
    <main className="pp">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="Pavel Palaš — sádrokartony Praha">
        <div className="hero-board" aria-hidden="true">
          <span className="seam seam-1" />
          <span className="seam seam-2" />
          <span className="seam seam-3" />
          <span className="seam-h" />
        </div>

        <div className="hero-inner">
          <div className="wordmark">
            <span className="wordmark-name">PALAŠ</span>
            <span className="wordmark-sub">sádrokarton · Praha</span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Rovná stěna</span>
            <span className="line line-2">
              za&nbsp;<em>dva dny</em>.
            </span>
          </h1>

          <p className="hero-lead">
            Příčky, podhledy a&nbsp;tmelení do&nbsp;kvality Q4. Jeden řemeslník,
            který zaměří, namontuje a&nbsp;předá stěnu připravenou k&nbsp;malování
            — po&nbsp;celé Praze a&nbsp;okolí.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420600000000">
              Zavolat: 600 000 000
            </a>
            <a className="btn btn-ghost" href="mailto:info@sadrokartony-palas.cz">
              Poslat poptávku e‑mailem
            </a>
          </div>

          <dl className="hero-specs" aria-label="Základní údaje">
            <div>
              <dt>Praxe</dt>
              <dd>od r. 2004</dd>
            </div>
            <div>
              <dt>Formát desky</dt>
              <dd>1250 × 2000 mm</dd>
            </div>
            <div>
              <dt>Tolerance roviny</dt>
              <dd>± 2 mm / 2 m lať</dd>
            </div>
          </dl>
        </div>

        {/* vodováha — signature prvek */}
        <div className="level" aria-hidden="true">
          <span className="level-line" />
          <span className="level-bubble" />
          <span className="level-mark level-mark-l" />
          <span className="level-mark level-mark-r" />
          <span className="level-label">0,0° — v&nbsp;rovině</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <span className="eyebrow">Co pro vás postavím</span>
          <h2 id="sluzby-h">
            Od roštu po&nbsp;přebroušenou spáru
          </h2>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <div className="karta-head">
                <span className="karta-kod">{s.kod}</span>
                <h3>{s.nazev}</h3>
              </div>
              <p className="karta-popis">{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <div className="postup" aria-label="Jak zakázka probíhá">
          {kroky.map((k, i) => (
            <div className="postup-krok" key={k.krok}>
              <span className="postup-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{k.krok}</h3>
                <p>{k.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head">
          <span className="eyebrow eyebrow-light">Kdo za stěnou stojí</span>
          <h2 id="duvera-h">Jedno jméno, jedna odpovědnost</h2>
        </div>

        <div className="duvera-grid">
          <div className="onas">
            <p className="onas-velky">
              Sádrokarton dělám přes dvacet let. Ne jako firma s&nbsp;dispečinkem
              — přijedu já, Pavel Palaš, a&nbsp;ručím za&nbsp;každou spáru svým jménem.
            </p>
            <p>
              Většina mých zakázek je v&nbsp;obydlených bytech. Proto zakrývám podlahy,
              brousím s&nbsp;odsáváním a&nbsp;každý den po&nbsp;sobě uklidím. Termín, který
              si domluvíme, platí — nestane se, že v&nbsp;pondělí nikdo nepřijde.
            </p>
            <ul className="onas-body">
              <li>Cenová nabídka položkově, do&nbsp;2&nbsp;dnů od&nbsp;zaměření</li>
              <li>Materiál Knauf a&nbsp;Rigips, doklad ke&nbsp;každé desce</li>
              <li>Záruka 5&nbsp;let na&nbsp;montáž i&nbsp;spáry</li>
              <li>Praha 1–10 a&nbsp;do&nbsp;30&nbsp;km za&nbsp;hranicí města</li>
            </ul>
          </div>

          <div className="reference" role="list" aria-label="Reference zákazníků">
            {reference.map((r) => (
              <figure className="ref" role="listitem" key={r.misto}>
                <figcaption className="ref-misto">{r.misto}</figcaption>
                <blockquote>
                  <p>„{r.text}“</p>
                </blockquote>
                <span className="ref-jmeno">— {r.jmeno}</span>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
