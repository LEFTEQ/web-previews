import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KLEINER Brno — náhradní díly a servis spotřebičů',
  description: 'Náhradní díly GORENJE, MORA, KARMA a servis spotřebičů v Brně. Poradíme podle typového štítku, díly máme skladem, montáž sporáků a plynu po Brně a okolí.',
};

const brands = [
  'GORENJE', 'MORA', 'KARMA', 'FAGOR', 'AEG',
  'ELECTROLUX', 'ZANUSSI', 'HISENSE', 'ASKO', 'DRAŽICE',
];

const services = [
  {
    kod: 'DÍL',
    title: 'Náhradní díly na sklad i na počkání',
    text: 'Hořáky, trysky, termočlánky, těsnění dvířek, plotny, pečicí desky, žhaviče, sklokeramiky. Řekněte nám typové číslo ze štítku a my díl dohledáme přesně na váš model — ne „podobný“.',
    pointy: ['GORENJE · MORA · KARMA · MORA-TOP', 'FAGOR · AEG · Electrolux · Zanussi', 'Dražice · Gas · Kvart · Flexira'],
  },
  {
    kod: 'MONT',
    title: 'Montáž a připojení plynu',
    text: 'Sporáky, vestavné desky a plynová topidla nezapojujete sami. Přivezeme, připojíme na plyn i elektřinu a vystavíme doklad o montáži — jak to má být.',
    pointy: ['Připojení plynového sporáku', 'Vestavné desky a trouby', 'Revizní doklad k montáži'],
  },
  {
    kod: 'SERV',
    title: 'Oprava, když spotřebič zlobí',
    text: 'Netáhne plamen, nehřeje trouba, kape voda z ohřívače? Diagnostikujeme závadu a řekneme rovnou, jestli se oprava vyplatí, nebo je levnější nový kus.',
    pointy: ['Sporáky a trouby na plyn', 'Ohřívače vody Dražice', 'Odsavače par a myčky MORA'],
  },
];

export default function Page() {
  return (
    <main className="kb">
      <header className="kb-top">
        <a className="kb-mark" href="#" aria-label="KLEINER Brno, domů">
          <span className="kb-mark__name">KLEINER</span>
          <span className="kb-mark__city">BRNO</span>
        </a>
        <nav className="kb-nav" aria-label="Hlavní">
          <a href="#dily">Náhradní díly</a>
          <a href="#servis">Servis</a>
          <a href="#poznej">Kdo jsme</a>
        </nav>
        <a className="kb-tel" href="tel:+420549210297">549 210 297</a>
      </header>

      <section className="kb-hero" aria-labelledby="hero-h">
        <div className="kb-hero__copy">
          <p className="kb-eyebrow">Servis a náhradní díly · Brno &amp; Brno-venkov</p>
          <h1 id="hero-h">
            Ten díl, který nikde <em>nemají</em>, u nás najdeme podle
            <span className="kb-hi"> typového štítku.</span>
          </h1>
          <p className="kb-hero__lead">
            Přes třicet let opravujeme a zásobujeme sporáky MORA, ohřívače Dražice
            a plynová topidla KARMA. Řekněte nám číslo z výrobního štítku a dostanete
            přesně ten hořák, trysku nebo těsnění, co k vašemu spotřebiči patří.
          </p>
          <div className="kb-hero__cta">
            <a className="kb-btn" href="tel:+420549210297">Zavolat a poradit se</a>
            <a className="kb-btn kb-btn--ghost" href="#dily">Podle čeho díl hledáme</a>
          </div>
        </div>
        <figure className="kb-hero__figure">
          <img src="/hero.webp" alt="Detail plynového sporáku s hořáky a náhradními díly" width={1200} height={900} />
          <figcaption className="kb-plate">
            <span className="kb-plate__label">TYP / TYPE</span>
            <span className="kb-plate__code">MORA · GORENJE · KARMA</span>
          </figcaption>
        </figure>
      </section>

      <section className="kb-marquee" aria-label="Značky, které skladem servisujeme">
        <ul>
          {brands.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="kb-services" id="dily" aria-labelledby="serv-h">
        <div className="kb-services__head">
          <p className="kb-eyebrow">Co pro vás uděláme</p>
          <h2 id="serv-h">Díl, montáž, oprava — v jednom obchodě na Skácelově</h2>
        </div>
        <div className="kb-grid" id="servis">
          {services.map((s) => (
            <article className="kb-card" key={s.kod}>
              <span className="kb-card__kod">{s.kod}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.pointy.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="kb-about" id="poznej" aria-labelledby="about-h">
        <figure className="kb-about__figure">
          <img src="/section-1.webp" alt="Regály s náhradními díly ke spotřebičům v prodejně Kleiner Brno" width={1000} height={800} />
        </figure>
        <div className="kb-about__copy">
          <p className="kb-eyebrow">Kdo za pultem stojí</p>
          <h2 id="about-h">Nejsme e-shop bez lidí. Jsme dílna, která zvedne telefon.</h2>
          <p>
            KLEINER BRNO se náhradními díly a servisem spotřebičů zabývá od devadesátých let.
            Za tu dobu jsme dohledali díl skoro ke každému sporáku, který se v Brně kdy vařil.
            Když víte typové číslo, ušetříme vám cestu i špatný nákup.
          </p>
          <dl className="kb-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Prodejna a výdej v Brně · montáž po Brně a okolí</dd>
            </div>
            <div>
              <dt>Velké spotřebiče</dt>
              <dd>Sporáky a trouby s osobním odběrem, dovozem nebo montáží</dd>
            </div>
            <div>
              <dt>Když nevíte typ</dt>
              <dd>Vyfoťte štítek za spotřebičem, zbytek dořešíme</dd>
            </div>
          </dl>
          <a className="kb-btn" href="tel:+420549210297">Zavolat servisu</a>
        </div>
      </section>

      <section className="kb-band" aria-label="Jak probíhá objednávka dílu">
        <img src="/section-2.webp" alt="Technik připojuje plynový sporák" width={1200} height={600} />
        <div className="kb-band__copy">
          <p className="kb-eyebrow">Jak to u nás chodí</p>
          <ol className="kb-steps">
            <li><span>1</span> Najdete typový štítek na spotřebiči</li>
            <li><span>2</span> Zavoláte nebo napíšete číslo typu</li>
            <li><span>3</span> Díl máte skladem, nebo dovezeme s montáží</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
