const sportoviste = [
  {
    kod: "HALA",
    nazev: "Sportovní hala",
    popis:
      "Tělocvična pro sálový fotbal, volejbal, tenis i aerobic. Palubovka, šatny se sprchami, míče a sítě půjčíme na místě.",
    detail: "míčové sporty · aerobic · tanec",
  },
  {
    kod: "STĚNA",
    nazev: "Lezecká stěna",
    popis:
      "Vnitřní stěna s cestami pro začátečníky i pokročilé. Sedák, lano i lezečky máme k zapůjčení, instruktora domluvíme předem.",
    detail: "instruktor na objednání · vybavení v ceně",
  },
  {
    kod: "BOWLING",
    nazev: "Bowling",
    popis:
      "Dvě dráhy hned vedle restaurace. Ideální na večer s kamarády nebo firemní turnaj — boty půjčujeme zdarma.",
    detail: "2 dráhy · boty zdarma",
  },
  {
    kod: "KURT",
    nazev: "Tartanový kurt",
    popis:
      "Víceúčelový venkovní kurt s tartanovým povrchem. Tenis, volejbal nebo nohejbal pod širým nebem, rakety půjčíme.",
    detail: "tenis · volejbal · nohejbal",
  },
  {
    kod: "PUTTING",
    nazev: "Putting green",
    popis:
      "Trénink patování pro golfisty i úplné začátečníky. Hole a míčky dostanete u nás, stačí přijít.",
    detail: "hole a míčky na místě",
  },
  {
    kod: "SALÓNEK",
    nazev: "Restaurace a salónek",
    popis:
      "Restaurace s terasou a klimatizovaný salónek s výhledem na České Budějovice a Šumavu. Po sportu i pro firemní akce.",
    detail: "terasa · výhled na Šumavu",
  },
];

const duvody = [
  {
    titulek: "Vybavení půjčíme na místě",
    text: "Rakety, míče, lezečky i bowlingové boty. Přijďte jen ve sportovním — o zbytek se postaráme.",
  },
  {
    titulek: "Bezbariérový celý areál",
    text: "Všechna sportoviště, restaurace i terasa jsou přístupné bez schodů. Wi-Fi zdarma všude v areálu.",
  },
  {
    titulek: "Firemní a společenské akce",
    text: "Turnaj v bowlingu, teambuilding na stěně a večeře v salónku — dáme dohromady program na míru. U větších akcí posílíme gastro tým.",
  },
  {
    titulek: "5 minut od Budějovic",
    text: "Staré Hodějovice jsou hned za městem. Autem 5 minut z centra, parkování přímo v areálu.",
  },
];

export default function Page() {
  return (
    <main className="hs">
      {/* ===== HERO ===== */}
      <header className="hs-hero">
        <div className="hs-hero-top">
          <div className="hs-wordmark" aria-label="HoSPORT">
            Ho<span>SPORT</span>
          </div>
          <p className="hs-hero-loc">Staré Hodějovice · České Budějovice</p>
        </div>

        <div className="hs-hero-main">
          <h1 className="hs-hero-title">
            <span className="hs-line hs-line-1">Hala,</span>
            <span className="hs-line hs-line-2">stěna,</span>
            <span className="hs-line hs-line-3">bowling.</span>
          </h1>

          {/* Signature: lezecká stěna z chytů, vedená podél titulku */}
          <div className="hs-wall" aria-hidden="true">
            <svg viewBox="0 0 120 560" preserveAspectRatio="xMidYMid meet" focusable="false">
              <path
                className="hs-rope"
                d="M60 545 C 30 480, 95 430, 55 360 C 20 300, 100 250, 60 180 C 30 125, 85 80, 60 15"
                fill="none"
              />
              <circle className="hs-hold h1" cx="58" cy="520" r="11" />
              <circle className="hs-hold h2" cx="42" cy="440" r="9" />
              <circle className="hs-hold h3" cx="78" cy="388" r="12" />
              <circle className="hs-hold h4" cx="50" cy="312" r="8" />
              <circle className="hs-hold h5" cx="82" cy="246" r="10" />
              <circle className="hs-hold h6" cx="48" cy="172" r="12" />
              <circle className="hs-hold h7" cx="74" cy="98" r="9" />
              <circle className="hs-hold h8" cx="58" cy="28" r="13" />
            </svg>
          </div>

          <div className="hs-hero-side">
            <p className="hs-hero-lead">
              Sportovní areál pro rodiny, party kamarádů i firmy. Šest
              sportovišť, restaurace s výhledem na Šumavu — a všechno vybavení
              vám půjčíme na místě.
            </p>
            <div className="hs-hero-cta">
              <a className="hs-btn hs-btn-solid" href="tel:+420723111313">
                Zavolat 723 111 313
              </a>
              <a className="hs-btn hs-btn-ghost" href="#sportoviste">
                Co si u nás zahrajete
              </a>
            </div>
          </div>
        </div>

        <ul className="hs-ticker" aria-label="Sporty v areálu">
          <li>lezecká stěna</li>
          <li>bowling</li>
          <li>sálový fotbal</li>
          <li>tenis</li>
          <li>volejbal</li>
          <li>aerobic</li>
          <li>putting</li>
        </ul>
      </header>

      {/* ===== SPORTOVIŠTĚ ===== */}
      <section className="hs-sec" id="sportoviste" aria-labelledby="sportoviste-h">
        <div className="hs-sec-head">
          <p className="hs-eyebrow">Sportoviště v areálu</p>
          <h2 id="sportoviste-h">Vyberte si, na co máte dnes chuť</h2>
          <p className="hs-sec-sub">
            Všechna sportoviště rezervujete online nebo telefonicky na{" "}
            <a href="tel:+420723111313">723 111 313</a>. Čekáte-li víc diváků
            nebo sportovců, napište to do poznámky — posílíme kuchyň.
          </p>
        </div>

        <div className="hs-grid">
          {sportoviste.map((s) => (
            <article className="hs-card" key={s.kod}>
              <p className="hs-card-kod">{s.kod}</p>
              <h3>{s.nazev}</h3>
              <p className="hs-card-popis">{s.popis}</p>
              <p className="hs-card-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== PROČ HOSPORT ===== */}
      <section className="hs-sec hs-sec-dark" aria-labelledby="proc-h">
        <div className="hs-sec-head">
          <p className="hs-eyebrow">Proč HoSPORT</p>
          <h2 id="proc-h">Přijďte jen ve sportovním, zbytek je náš</h2>
        </div>

        <div className="hs-duvody">
          {duvody.map((d) => (
            <div className="hs-duvod" key={d.titulek}>
              <span className="hs-duvod-chyt" aria-hidden="true" />
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="hs-quote">
          <p>
            „Sobotní dopoledne na stěně s dětmi, oběd na terase a odpoledne
            bowling. Celý den v jednom areálu a nemuseli jsme nic řešit.“
          </p>
          <cite>— rodina z Českých Budějovic, stálí návštěvníci</cite>
        </blockquote>
      </section>
    </main>
  );
}
