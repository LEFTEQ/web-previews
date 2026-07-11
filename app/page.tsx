import React from "react";

const sluzby = [
  {
    kod: "Míra",
    nazev: "Zakázkové šití na míru",
    popis:
      "Dámské oděvy střižené přesně na vaši postavu — od pouzdrových šatů po sako, které konečně sedí v ramenou. Začínáme rozměřením a plátěnou zkouškou, teprve pak stříháme do látky.",
  },
  {
    kod: "Úpravy",
    nazev: "Opravy a úpravy oděvů",
    popis:
      "Dámské, pánské i dětské. Zkrácení kalhot, zúžení saka, výměna zipu, obnošené švy. Většinu drobných úprav zvládneme do několika dní.",
  },
  {
    kod: "Domov",
    nazev: "Záclony, závěsy a lůžkoviny",
    popis:
      "Ušijeme na míru oknu i posteli — z vašich látek nebo z našich vzorníků. Olemujeme, nařasíme, zkrátíme.",
  },
  {
    kod: "Střih",
    nazev: "Střihová služba",
    popis:
      "Připravíme vám střih podle míry, když si chcete šít doma sama. Papírová šablona, kterou stačí obkreslit.",
  },
  {
    kod: "Látky",
    nazev: "Prodej látek a galanterie",
    popis:
      "Látky dle vzorníků a drobná textilní galanterie — knoflíky, zipy, nitě, stuhy. Poradíme, co se k vašemu záměru hodí.",
  },
  {
    kod: "Čištění",
    nazev: "Čištění oděvů a kůže",
    popis:
      "Příjem čistírny je opět v provozu. Postaráme se o oděvy i kožené kousky, které domácí praní nezvládne.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Martina Burianová, krejčovství">
          <span className="wordmark__name">Martina&nbsp;Burianová</span>
          <span className="wordmark__craft">krejčovská dílna · Praha 8</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#dilna">O dílně</a>
          <a className="topnav__call" href="tel:+420777235667">
            Zavolat 777&nbsp;235&nbsp;667
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            width={1600}
            height={1200}
            alt="Detail práce v krejčovské dílně — látka pod jehlou šicího stroje"
          />
        </div>
        <div className="hero__text">
          <p className="hero__eyebrow">Šije se tu už 30 let</p>
          <h1 id="hero-nadpis" className="hero__title">
            Střih, který<br />
            <em>sedne na míru</em>
          </h1>
          <p className="hero__lead">
            Malá dílna v Praze 8, kde se každý kus měří na vás — od plátěné
            zkoušky po poslední steh. Zakázkové šití, úpravy i domácí textil,
            precizně a bez spěchu.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420777235667">
              Domluvit zkoušku
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co ušijeme
            </a>
          </div>
          <p className="hero__note">
            Lodžská 598, 181&nbsp;00 Praha 8 · volejte 777&nbsp;235&nbsp;667
          </p>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="sec-head__eyebrow">Nabídka dílny</p>
          <h2 id="sluzby-nadpis" className="sec-head__title">
            Šest věcí, se kterými za mnou chodíte
          </h2>
          <p className="sec-head__note">
            Ceník je vždy k dispozici přímo na provozovně — vyčíslíme ho podle
            konkrétní práce, ne od stolu.
          </p>
        </div>
        <ul className="sluzby__grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.nazev}>
              <span className="karta__kod">{s.kod}</span>
              <h3 className="karta__nazev">{s.nazev}</h3>
              <p className="karta__popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="dilna" id="dilna" aria-labelledby="dilna-nadpis">
        <div className="dilna__media">
          <img
            src="/section-1.webp"
            width={1200}
            height={1500}
            alt="Krejčová u pracovního stolu s metrem a nůžkami"
            className="dilna__img dilna__img--a"
          />
          <img
            src="/section-2.webp"
            width={1200}
            height={1500}
            alt="Detail rozešité látky se špendlíky a křídovými značkami"
            className="dilna__img dilna__img--b"
          />
        </div>
        <div className="dilna__text">
          <p className="sec-head__eyebrow">O dílně</p>
          <h2 id="dilna-nadpis" className="sec-head__title">
            Jedna krejčová, třicet let u stroje
          </h2>
          <p className="dilna__odstavec">
            Jmenuji se Martina Burianová a šiju v Praze 8 už tři desetiletí.
            Každou zakázku vedu od první míry sama — proto vím, jak vám padne
            rukáv a kde švy sednou. Nic tu neprobíhá ve spěchu; radši zkoušku
            navíc než kus, který nakonec zůstane ve skříni.
          </p>
          <p className="dilna__odstavec">
            Chodí sem lidé z okolí i přes celou Prahu — pro nové šaty, pro
            záchranu oblíbeného saka i pro záclony na míru oknu. Příjem
            čistírny je opět v provozu.
          </p>
          <dl className="fakta">
            <div className="fakta__radek">
              <dt>Kde</dt>
              <dd>Lodžská 598, 181&nbsp;00 Praha 8</dd>
            </div>
            <div className="fakta__radek">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420777235667">+420 777 235 667</a>
              </dd>
            </div>
            <div className="fakta__radek">
              <dt>Zkušenost</dt>
              <dd>30 let zakázkového šití a úprav</dd>
            </div>
            <div className="fakta__radek">
              <dt>IČ</dt>
              <dd>70092303</dd>
            </div>
          </dl>
          <a className="btn btn--solid" href="tel:+420777235667">
            Zavolat do dílny
          </a>
        </div>
      </section>
    </main>
  );
}
