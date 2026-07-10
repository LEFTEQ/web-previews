import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DANCE PERFECT — taneční studio na Národní 25, Praha 1',
  description:
    'Taneční studio v pasáži paláce Metro na Národní 25. Od baletu po street dance, od Pilates po contemporary. Přes 40 lekcí týdně pro děti i dospělé, začátečníky i pokročilé. Rozvrh 2025–2026.',
  openGraph: {
    title: 'DANCE PERFECT — taneční studio na Národní 25, Praha 1',
    description:
      'Od baletu po street dance. Přes 40 lekcí týdně v samém srdci Prahy, pasáž paláce Metro, Národní 25.',
    type: 'website',
    locale: 'cs_CZ',
    images: ['/hero.webp'],
  },
};

const styles = [
  'Balet',
  'Contemporary',
  'Hip hop',
  'House',
  'Dancehall',
  'Jazz dance',
  'Salsaton',
  'Zumba',
  'Pilates',
  'Total Barre',
  'Poppin’',
  'Lockin’',
  'Afro',
  'Reggaeton',
  'Musical dance',
  'Taneční akrobacie',
];

const offer = [
  {
    kdy: 'Po–Čt',
    nazev: 'Letní semináře',
    popis:
      'Čtyřdenní semináře oblíbených stylů, vždy od pondělí do čtvrtka. WEEK Card 60 nebo 90 minut za zvýhodněnou cenu, nebo si vezmi jen jednotlivé lekce podle svých možností.',
    detail: 'Červenec–srpen 2026',
  },
  {
    kdy: '13+',
    nazev: 'Streetová akademie',
    popis:
      'Hip hop, house, dancehall, poppin’, lockin’, afro, litefeet a fusion pro mírně i pokročilé tanečníky. Pro všechny streetové tanečníky od třinácti let.',
    detail: 'Mírně a pokročilí',
  },
  {
    kdy: '12+',
    nazev: 'Contemporary & akrobacie',
    popis:
      'Základy technik contemporary a taneční akrobacie. Tři lektoři, tři různé přístupy, jeden týden. Pro začínající a mírně pokročilé tanečníky od dvanácti let.',
    detail: '24.–28. 8. 2026',
  },
  {
    kdy: 'Děti',
    nazev: 'Kurzy pro nejmenší',
    popis:
      'Taneční průprava pro děti, které tanec teprve objevují. Vystoupení na velkém jevišti v Divadle IMAGE jsou pro ně vrcholem celé sezony.',
    detail: 'Celoroční kurzy',
  },
];

export default function Page() {
  return (
    <main className="dp">
      <header className="dp-nav" aria-label="Hlavní navigace">
        <a className="dp-mark" href="#top" aria-label="Dance Perfect, domů">
          <span className="dp-mark__d">DANCE</span>
          <span className="dp-mark__p">PERFECT</span>
        </a>
        <nav className="dp-links">
          <a href="#nabidka">Kurzy</a>
          <a href="#studio">Studio</a>
          <a href="#nabidka">Rozvrh</a>
        </nav>
        <span className="dp-loc">Národní&nbsp;25 · Praha&nbsp;1</span>
      </header>

      <section className="dp-hero" id="top">
        <div className="dp-hero__media">
          <img
            src="/hero.webp"
            alt="Tanečníci studia Dance Perfect v pohybu v sále na Národní třídě"
            className="dp-hero__img"
          />
        </div>
        <div className="dp-hero__text">
          <p className="dp-eyebrow">Taneční studio · pasáž paláce Metro</p>
          <h1 className="dp-title">
            <span className="dp-title__line">Tanec</span>
            <span className="dp-title__line dp-title__line--em">osvobozuje.</span>
            <span className="dp-title__line dp-title__sub">Alespoň na chvíli.</span>
          </h1>
          <p className="dp-lede">
            Od baletu po street dance, od Pilates po contemporary. Šestnáct stylů
            pod jednou střechou v samém srdci Prahy — na Národní&nbsp;25.
          </p>
          <div className="dp-hero__cta">
            <a className="dp-btn" href="#nabidka">
              Prohlédnout rozvrh
            </a>
            <a className="dp-btn dp-btn--ghost" href="tel:+420221085269">
              Zavolat na recepci
            </a>
          </div>
        </div>
      </section>

      <section className="dp-marquee" aria-label="Styly, které učíme">
        <ul className="dp-styles">
          {styles.map((s) => (
            <li key={s} className="dp-style">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="dp-offer" id="nabidka">
        <div className="dp-offer__head">
          <p className="dp-eyebrow dp-eyebrow--dark">Léto & sezona 2025–2026</p>
          <h2 className="dp-h2">
            Žádný stres, jen tanec
          </h2>
          <p className="dp-offer__intro">
            Letní rozvrh nabízí jako každý rok příjemné chvíle strávené tancem a
            pohybem. Vybere si každý — od úplných začátečníků po soutěžní
            tanečníky.
          </p>
        </div>
        <ol className="dp-cards">
          {offer.map((o, i) => (
            <li key={o.nazev} className="dp-card">
              <span className="dp-card__tag">{o.kdy}</span>
              <span className="dp-card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="dp-card__title">{o.nazev}</h3>
              <p className="dp-card__desc">{o.popis}</p>
              <p className="dp-card__detail">{o.detail}</p>
            </li>
          ))}
        </ol>
        <div className="dp-media">
          <img
            src="/section-1.webp"
            alt="Lekce v tanečním sále studia Dance Perfect"
            className="dp-media__img"
          />
        </div>
      </section>

      <section className="dp-studio" id="studio">
        <div className="dp-studio__grid">
          <div className="dp-studio__media">
            <img
              src="/section-2.webp"
              alt="Interiér studia Dance Perfect v pasáži paláce Metro na Národní 25"
              className="dp-studio__img"
            />
          </div>
          <div className="dp-studio__text">
            <p className="dp-eyebrow dp-eyebrow--dark">O studiu</p>
            <h2 className="dp-h2">
              Divadlo IMAGE máme přes chodbu
            </h2>
            <p className="dp-studio__lede">
              Studio sídlí v pasáži paláce Metro, schodiště C, první patro —
              a Divadlo IMAGE je na stejné adrese. Kurzy tu netančí jen pro
              sebe: závěrečná vystoupení dětí, streetového týmu The&nbsp;Mes(s)
              i souboru DOT504 Junior probíhají na skutečném jevišti přes chodbu.
            </p>
            <dl className="dp-facts">
              <div className="dp-fact">
                <dt>Kde nás najdete</dt>
                <dd>Národní 25, Praha 1 — Staré Město</dd>
              </div>
              <div className="dp-fact">
                <dt>Recepce</dt>
                <dd>
                  <a href="tel:+420221085269">+420 221 085 269</a>
                </dd>
              </div>
              <div className="dp-fact">
                <dt>Napište nám</dt>
                <dd>
                  <a href="mailto:info@danceperfect.cz">info@danceperfect.cz</a>
                </dd>
              </div>
            </dl>
            <blockquote className="dp-quote">
              „To nejdůležitější nenajdete na webu ani u nás, ale u sebe:
              vášeň, vůli, prožitek, přátelství. My vám v tom co nejvíc
              pomůžeme.“
              <cite>— Vaše studio Dance Perfect</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
