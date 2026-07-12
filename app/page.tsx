import React from 'react';

const obory = [
  { num: '01', name: 'Občanské právo', desc: 'Smlouvy, náhrada škody i běžné životní situace. Sepíšeme kupní i darovací smlouvu, zřídíme věcné břemeno.' },
  { num: '02', name: 'Nemovitostní právo', desc: 'Komplexní poradenství při převodu i správě nemovitostí — od rezervace po vklad do katastru.' },
  { num: '03', name: 'Rodinné právo', desc: 'Osobní i majetkové vztahy v rodině — rozvod, výživné, úprava poměrů k dětem.' },
  { num: '04', name: 'Pracovní právo', desc: 'Poradenství pro zaměstnance i zaměstnavatele — od smluv po ukončení pracovního poměru.' },
  { num: '05', name: 'Dědické právo', desc: 'Závěti, dědické řízení a asistence zůstavitelům i dědicům.' },
  { num: '06', name: 'Obchodní a korporátní právo', desc: 'Kompletní agenda pro podnikatele a obchodní korporace, včetně zakládání a prodeje ready made společností.' },
  { num: '07', name: 'Insolvence a oddlužení', desc: 'Zastoupení dlužníků i věřitelů, analýza situace a příprava postupu pro úspěšné oddlužení.' },
  { num: '08', name: 'Trestní a přestupkové právo', desc: 'Obhajoba v přípravném i hlavním líčení, zastoupení poškozených.' },
];

const tym = [
  'Mgr. Lukáš Hojdn, LL.B.',
  'Mgr. Pavel Kosař',
  'Mgr. František Hons',
  'Mgr. Vojtěch Bienek',
  'Mgr. Martin Židlický',
  'Mgr. Kateřina Řezníčková',
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="UP Legal, advokátní kancelář">
          <span className="wordmark__up">UP</span>
          <span className="wordmark__legal">Legal</span>
          <span className="wordmark__seat">§ Praha — Vršovice</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a href="tel:+420777737747">+420 777 737 747</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img className="hero__img" src="/hero.webp" alt="Advokátní kancelář UP Legal v Praze" />
        </div>
        <div className="hero__body">
          <p className="hero__eyebrow">Advokátní kancelář · Praha 10 — Vršovice · pobočky Brno a Ústí nad Labem</p>
          <h1 className="hero__title">
            <span className="hero__line">Vaše věc</span>
            <span className="hero__line hero__line--em">před soudem</span>
            <span className="hero__line">i mimo něj.</span>
          </h1>
          <p className="hero__lead">Nevíte si rady a raději byste řešení svěřili advokátovi? Od kupní smlouvy přes vymáhání pohledávek až po obhajobu — u nás záleží na osudu každého klienta.</p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#sluzby">Prohlédnout služby</a>
            <a className="btn btn--ghost" href="tel:+420777737747">Bezplatná první konzultace</a>
          </div>
        </div>
        <dl className="hero__docket">
          <div><dt>Sídlo</dt><dd>Francouzská 299/98</dd></div>
          <div><dt>Telefon</dt><dd>+420 777 737 747</dd></div>
          <div><dt>E-mail</dt><dd>info@uplegal.cz</dd></div>
        </dl>
      </section>

      <section className="sluzby" id="sluzby">
        <div className="sec-head">
          <p className="sec-head__mark">§ Rejstřík služeb</p>
          <h2 className="sec-head__title">Právo pro obvyklé i neobvyklé životní situace</h2>
          <p className="sec-head__note">Potřebujete sepsat smlouvu, vymáhat pohledávku, založit společnost nebo se bránit v řízení? Vyberte oblast — spojíme vás s advokátem, který se jí věnuje.</p>
        </div>
        <ol className="docket">
          {obory.map((o) => (
            <li className="docket__item" key={o.num}>
              <span className="docket__num">{o.num}</span>
              <div className="docket__text">
                <h3 className="docket__name">{o.name}</h3>
                <p className="docket__desc">{o.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="docket__more">Dále řešíme SVJ a družstva, veřejné zakázky, správní právo, autorské právo i právní pomoc městům a obcím. Nenašli jste svou situaci? Zavolejte, poradíme.</p>
      </section>

      <section className="onas" id="o-nas">
        <div className="onas__grid">
          <div className="onas__media">
            <img className="onas__img" src="/section-1.webp" alt="Tým advokátů UP Legal" />
            <img className="onas__img onas__img--sub" src="/section-2.webp" alt="Kancelář UP Legal ve Vršovicích" />
          </div>
          <div className="onas__body">
            <p className="sec-head__mark">§ O kanceláři</p>
            <h2 className="onas__title">Kompletní servis od advokátů s vlastní specializací</h2>
            <p className="onas__lead">Prostřednictvím spolupracujících advokátů a dalších specializovaných právníků získáte právní servis v oblastech práva soukromého i veřejného. Zastupujeme běžné klienty, podnikatele i mezinárodní obchodní korporace — se zkušeností ze zahraničí a znalostí mezinárodního práva.</p>

            <ul className="tym">
              {tym.map((jmeno) => (
                <li className="tym__item" key={jmeno}>{jmeno}</li>
              ))}
            </ul>

            <blockquote className="pull">
              „Konzultujte s námi bezplatně svůj problém telefonicky. Prioritou je vaše spokojenost s přístupem, rychlostí i pečlivostí odvedené práce.“
            </blockquote>

            <div className="onas__facts">
              <div className="fact"><span className="fact__k">Cena</span><span className="fact__v">Jasná dohoda předem — první konzultace bezplatně</span></div>
              <div className="fact"><span className="fact__k">Jazyky</span><span className="fact__v">Čeština i angličtina, znalost mezinárodního práva</span></div>
              <div className="fact"><span className="fact__k">Pobočky</span><span className="fact__v">Praha · Brno · Ústí nad Labem</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
