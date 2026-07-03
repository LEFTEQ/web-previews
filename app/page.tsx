export default function Page() {
  const sluzby = [
    {
      kod: "D",
      nazev: "Denní úklid kanceláří",
      popis:
        "Pravidelný úklid kancelářských prostor, recepcí a zasedaček — před příchodem vašich lidí, nebo po nich. Vysávání, stírání, koše, kuchyňky, sanita.",
      rezim: "denně / 3× týdně / 1× týdně",
    },
    {
      kod: "P",
      nazev: "Úklid provozů a hal",
      popis:
        "Strojové mytí podlah ve výrobních a skladových halách, čištění po směnách, údržba šaten a sociálních zázemí. Zvládáme i nepřetržité provozy.",
      rezim: "po směnách / nepřetržitě",
    },
    {
      kod: "O",
      nazev: "Mytí oken a fasád",
      popis:
        "Okna, výlohy, prosklené příčky i výškové plochy. Pracujeme s demineralizovanou vodou a teleskopickými tyčemi — beze šmouh a bez lešení tam, kde není třeba.",
      rezim: "jaro / podzim / dle dohody",
    },
    {
      kod: "S",
      nazev: "Úklid společných prostor domů",
      popis:
        "Schodiště, chodby, výtahy a sklepy bytových domů a SVJ v Ostravě a okolí. Pevný rozpis, podpis v knize úklidu, zástup při nemoci samozřejmostí.",
      rezim: "1–2× týdně",
    },
    {
      kod: "J",
      nazev: "Jednorázové a generální úklidy",
      popis:
        "Úklid po malířích a řemeslnících, před kolaudací, po stěhování. Přijedeme, projdeme prostor, řekneme cenu — a druhý den můžeme začít.",
      rezim: "do 48 hodin od poptávky",
    },
  ];

  const duvody = [
    {
      cislo: "20+",
      text: "let uklízíme ostravské firmy a domy. Fungujeme od roku 2003, na trhu jsme přežili nejednu krizi — a naši první klienti u nás uklízí dodnes.",
    },
    {
      cislo: "48 h",
      text: "do zahájení jednorázového úklidu. Zavoláte, přijedeme na obhlídku, pošleme cenu. Žádné čekání týdny na nabídku.",
    },
    {
      cislo: "1",
      text: "stálá kontaktní osoba pro váš objekt. Nevoláte na centrálu — voláte člověku, který váš provoz zná a řeší věci na místě.",
    },
  ];

  return (
    <main className="tf">
      {/* ================= HERO ================= */}
      <section className="hero" aria-label="Úvod">
        <header className="topbar">
          <a href="#" className="wordmark" aria-label="TEFCO CZ — úvod">
            <span className="wordmark-tefco">TEFCO</span>
            <span className="wordmark-cz">CZ</span>
          </a>
          <a href="tel:+420776370390" className="topbar-tel">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
              <path
                d="M3.7 1.5c.5-.5 1.3-.4 1.7.2l1.2 1.8c.3.5.3 1.1-.1 1.5l-.8.9c.5 1.2 1.5 2.2 2.7 2.7l.9-.8c.4-.4 1-.4 1.5-.1l1.8 1.2c.6.4.7 1.2.2 1.7l-.9.9c-.5.5-1.2.7-1.9.5-3.5-1-6.3-3.8-7.3-7.3-.2-.7 0-1.4.5-1.9l.5-.5Z"
                fill="currentColor"
              />
            </svg>
            776 370 390
          </a>
        </header>

        <div className="hero-inner">
          <p className="hero-eyebrow">
            <span className="stitek">Úklidové služby</span>
            <span className="stitek stitek-mesto">Ostrava</span>
          </p>

          <h1 className="hero-titulek">
            <span className="radek radek-1">Ráno přijdete —</span>
            <span className="radek radek-2">
              a je&nbsp;<em className="cisto">čisto<span className="stopa" aria-hidden="true" /></em>.
            </span>
          </h1>

          <p className="hero-perex">
            Uklízíme kanceláře, výrobní haly a bytové domy po celé Ostravě.
            Pravidelně, spolehlivě a se stálým týmem, který váš objekt zná jménem.
          </p>

          <div className="hero-akce">
            <a href="tel:+420776370390" className="btn btn-hlavni">
              Zavolat: 776 370 390
            </a>
            <a href="#sluzby" className="btn btn-vedlejsi">
              Co uklízíme
            </a>
          </div>

          <p className="hero-pozn">
            Nezávazná obhlídka objektu zdarma · odpovídáme do 24 hodin
          </p>
        </div>

        {/* signature: velká „stěrka“ — pruh dokonale umytého povrchu napříč heroem */}
        <div className="sterka" aria-hidden="true">
          <div className="sterka-pruh" />
          <div className="sterka-lista" />
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h">Co pro vás uklidíme</h2>
          <p className="sekce-perex">
            Každý objekt je jiný — proto nejdřív přijedeme, projdeme prostor s vámi
            a rozpis úklidu ušijeme na míru vašemu provozu.
          </p>
        </div>

        <ul className="sluzby-seznam">
          {sluzby.map((s) => (
            <li key={s.kod} className="sluzba">
              <span className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="sluzba-telo">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="sluzba-rezim">
                  <span className="rezim-tecka" aria-hidden="true" />
                  {s.rezim}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava-svetla">
          <h2 id="duvera-h">Proč Ostrava uklízí s&nbsp;TEFCO</h2>
          <p className="sekce-perex">
            Jsme akciová společnost s vlastními zaměstnanci, ne zprostředkovatel
            brigádníků. Za odvedenou práci ručíme my — a poznáte to na první pohled.
          </p>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <div key={d.cislo} className="duvod">
              <p className="duvod-cislo">{d.cislo}</p>
              <p className="duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <figure className="citace">
          <blockquote>
            <p>
              „Uklízí nám administrativní budovu i sklad už osmý rok. Když něco
              potřebujeme mimo rozpis, stačí zavolat paní vedoucí — druhý den je to
              hotové. Za nás bez připomínek.“
            </p>
          </blockquote>
          <figcaption>— správce objektu, výrobní areál Ostrava-Vítkovice</figcaption>
        </figure>

        <ul className="zaruky" aria-label="Naše záruky">
          <li>Pojištění odpovědnosti do 10 mil. Kč</li>
          <li>Vlastní stroje a profesionální chemie</li>
          <li>Zástup při nemoci — úklid nikdy nevypadne</li>
          <li>Smlouva bez dlouhé výpovědní lhůty</li>
        </ul>
      </section>
    </main>
  );
}
