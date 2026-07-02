// REMONST stavební, spol. s r.o. — České Budějovice
// Koncept: „Vrstvy stavby" — vizuální jazyk odvozený z řezu zdiva a stavebních výkresů.
// Signature: typografický hero jako technický výkres s kótami + pás cihelné vazby (běhounová vazba)
// vykreslený čistě v CSS, který se táhne stránkou jako konstrukční motiv.

const sluzby = [
  {
    kod: "HSV",
    nazev: "Novostavby a rekonstrukce",
    popis:
      "Bytová, občanská i průmyslová výstavba. Rodinný dům postavíme od základové desky po kolaudaci — včetně projektové dokumentace, kterou zajistíme za vás.",
    detail: "Hrubá stavba · dokončovací práce · projektová dokumentace",
  },
  {
    kod: "ZAT",
    nazev: "Zateplení a výměna oken",
    popis:
      "Kompletní zateplení objektu včetně výměny výplní otvorů. Snížíte účty za topení a dům dostane novou fasádu. Poradíme i s dotací Nová zelená úsporám.",
    detail: "Kontaktní zateplovací systémy · okna a dveře · fasády",
  },
  {
    kod: "STŘ",
    nazev: "Střechy a lešení",
    popis:
      "Vlastní středisko střech a lešení — nečekáte na subdodavatele. Krovy, krytiny, klempířské prvky i pronájem a montáž lešení pro vaši stavbu.",
    detail: "Krovy · krytiny · klempířina · pronájem lešení",
  },
  {
    kod: "ZEM",
    nazev: "Zemní práce a vodní toky",
    popis:
      "Specialita, kterou v kraji umí málokdo: údržba a čištění vodních toků, rybníků a nádrží. K tomu výkopy, terénní úpravy a vlastní autodoprava.",
    detail: "Výkopy · odbahnění rybníků · úpravy koryt · autodoprava",
  },
];

const duvody = [
  {
    cislo: "1992",
    titulek: "Na jihu Čech stavíme přes 30 let",
    text: "Firmu jsme založili v Českých Budějovicích v roce 1992. Za tu dobu jsme prošli stovkami staveb — od rodinných domů po průmyslové haly — a pořád nás najdete na stejné adrese.",
  },
  {
    cislo: "4",
    titulek: "Čtyři vlastní střediska",
    text: "Střechy, lešení, zemní práce a autodoprava máme pod jednou střechou. Nemusíme shánět subdodavatele, takže držíme termíny i cenu, na které jsme si plácli.",
  },
  {
    cislo: "PSV",
    titulek: "Stavbu dotáhneme do kliky na dveřích",
    text: "Veškeré přidružené stavební výroby — elektro, voda, topení, podlahy, obklady — zajistíme v rámci jedné zakázky. Předáváme hotový dům, ne staveniště.",
  },
];

const reference = [
  { misto: "České Budějovice", akce: "Zateplení bytového domu, 24 bytových jednotek, včetně výměny oken" },
  { misto: "Českobudějovicko", akce: "Novostavby rodinných domů na klíč, od projektu po kolaudaci" },
  { misto: "Jižní Čechy", akce: "Odbahnění a rekonstrukce hráze rybníka, úprava bezpečnostního přelivu" },
  { misto: "České Budějovice", akce: "Rekonstrukce střechy občanské stavby včetně krovů a klempířských prvků" },
];

export default function Page() {
  return (
    <main className="rm">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="REMONST stavební, spol. s r.o.">
            <span className="brand-mark" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>
            <span className="brand-word">
              REMONST<span className="brand-sub">stavební, spol. s r.o.</span>
            </span>
          </div>

          <p className="hero-eyebrow">
            <span className="kota" aria-hidden="true"></span>
            Stavební firma · České Budějovice · založeno 1992
          </p>

          <h1 className="hero-title">
            <span className="line line-1">Stavíme,</span>
            <span className="line line-2">zateplujeme,</span>
            <span className="line line-3">
              čistíme rybníky<span className="tecka">.</span>
            </span>
          </h1>

          <div className="hero-spodek">
            <p className="hero-perex">
              Od základové desky po hřeben střechy — a když je potřeba, i pod
              hladinu. Jihočeská stavební firma s vlastními středisky střech,
              lešení, zemních prací a autodopravy.
            </p>
            <ul className="hero-fakta" aria-label="Klíčová fakta o firmě">
              <li>
                <strong>30+ let</strong>
                <span>praxe ve stavebnictví</span>
              </li>
              <li>
                <strong>4 střediska</strong>
                <span>vše bez subdodávek</span>
              </li>
              <li>
                <strong>Jižní Čechy</strong>
                <span>jsme odsud, zůstáváme tu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* signature: cihelná běhounová vazba */}
        <div className="vazba" aria-hidden="true"></div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Co pro vás postavíme</p>
          <h2 id="sluzby-h">
            Jedna firma na celou stavbu — od výkopu po kolaudaci
          </h2>
        </div>

        <div className="sluzby-mrizka">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <div className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-pozn">
          Nevíte, do kterého šuplíku vaše stavba patří? Napište nám na{" "}
          <a href="mailto:info@remonst.cz">info@remonst.cz</a> — poradíme, i
          když to nakonec postaví někdo jiný.
        </p>
      </section>

      {/* ============ DŮVĚRA / REFERENCE ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava--svetla">
          <p className="sekce-eyebrow">Proč stavět s námi</p>
          <h2 id="duvera-h">Firma, která tu bude i po záruce</h2>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <div className="duvod" key={d.titulek}>
              <div className="duvod-cislo" aria-hidden="true">
                {d.cislo}
              </div>
              <div className="duvod-text">
                <h3>{d.titulek}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stavebni-denik">
          <h3 className="denik-titul">
            <span aria-hidden="true" className="denik-znak"></span>
            Ze stavebního deníku
          </h3>
          <ul className="denik-seznam">
            {reference.map((r) => (
              <li key={r.akce}>
                <span className="denik-misto">{r.misto}</span>
                <span className="denik-akce">{r.akce}</span>
              </li>
            ))}
          </ul>
          <p className="denik-pozn">
            Kompletní reference vám rádi ukážeme osobně — většina našich staveb
            stojí do půl hodiny cesty od Českých Budějovic, tak se na ně můžete
            zajet podívat.
          </p>
        </div>
      </section>
    </main>
  );
}
