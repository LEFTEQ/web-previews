import type { CSSProperties } from 'react';

export default function Page() {
  const piva = [
    {
      stupne: '11°',
      typ: 'světlá',
      nazev: 'Světlý ležák',
      alk: '4,8 %',
      epm: '11 % EPM',
      slad: 'jeden slad — plzeňský typ',
      chmel: 'chmeleno „natřikrát“, hořké i aromatické',
      chut: 'jemná chmelová vůně, dobrý říz, příjemně hořké doznívání',
      cena: '410',
      barva: '#e0a53a',
    },
    {
      stupne: '12°',
      typ: 'světlá',
      nazev: 'Světlý ležák',
      alk: '5,2 %',
      epm: '12 % EPM',
      slad: 'plzeňský a mnichovský slad',
      chmel: 'Premiant, Sládek, Žatecký červeňák',
      chut: 'zlatavá barva, plná chuť, vyvážená hořkost',
      cena: '426',
      barva: '#d68a1c',
    },
    {
      stupne: '12°',
      typ: 'polotmavá',
      nazev: 'Polotmavý ležák',
      alk: '5,2 %',
      epm: '12 % EPM',
      slad: 'Pils, mnichovský, karamelový a barvicí slad',
      chmel: 'dávkováno ve čtyřech fázích',
      chut: 'granátová barva, karamelový tón, jemná hořkost',
      cena: '426',
      barva: '#9a3417',
    },
  ];

  return (
    <main className="rz">
      <header className="rz-top">
        <a className="rz-brand" href="#" aria-label="Pivovar Rezek — úvod">
          <span className="rz-brand-mark" aria-hidden="true">RZ</span>
          <span className="rz-brand-name">
            <span className="rz-brand-word">Rezek</span>
            <span className="rz-brand-sub">minipivovar · Zásada u Liberce</span>
          </span>
        </a>
        <nav className="rz-nav" aria-label="Hlavní">
          <a href="#piva">Naše piva</a>
          <a href="#pivovar">Pivovar</a>
          <a href="tel:+420602439889" className="rz-nav-tel">602&nbsp;439&nbsp;889</a>
        </nav>
      </header>

      <section className="rz-hero" aria-labelledby="rz-hero-h">
        <img className="rz-hero-img" src="/hero.webp" alt="Měděná varna Pivovaru Rezek, kde se vaří nefiltrovaný ležák" />
        <div className="rz-hero-veil" aria-hidden="true" />
        <div className="rz-hero-inner">
          <p className="rz-eyebrow">Vaříme od září 2015 · Zásada 154</p>
          <h1 id="rz-hero-h" className="rz-hero-h">
            Ležák z&nbsp;měděné varny.
            <br />Nefiltrovaný, nepasterovaný.
          </h1>
          <p className="rz-hero-lead">
            Spodně kvašené pivo z&nbsp;jednoho patra: český slad, žatecký chmel a čas ve
            spilce. Přijeďte se podívat, jak vzniká — nebo si ho nechte přivézt v&nbsp;litrových lahvích.
          </p>
          <div className="rz-hero-cta">
            <a className="rz-btn rz-btn-primary" href="#piva">Prohlédnout piva</a>
            <a className="rz-btn rz-btn-ghost" href="#pivovar">Exkurze &amp; ubytování v&nbsp;lágru</a>
          </div>
        </div>
        <dl className="rz-facts" aria-label="Základní údaje">
          <div><dt>Kvašení</dt><dd>spodní, otevřená spilka</dd></div>
          <div><dt>Lahev</dt><dd>1 litr</dd></div>
          <div><dt>Pivnice</dt><dd>až 80 hostů</dd></div>
        </dl>
      </section>

      <section className="rz-piva" id="piva" aria-labelledby="rz-piva-h">
        <div className="rz-sec-head">
          <p className="rz-eyebrow rz-eyebrow-dark">Sortiment · vaří se stále</p>
          <h2 id="rz-piva-h">Tři ležáky, jeden rukopis</h2>
          <p className="rz-sec-note">
            Každé pivo vedeme podle stupňovitosti — od nejlehčí jedenáctky po granátovou
            dvanáctku. Prodáváme po baleních 8&nbsp;litrových lahví.
          </p>
        </div>

        <ul className="rz-list">
          {piva.map((p, i) => (
            <li className="rz-card" key={i} style={{ '--rz-beer': p.barva } as CSSProperties}>
              <div className="rz-card-glass" aria-hidden="true">
                <span className="rz-card-fill" />
                <span className="rz-card-foam" />
              </div>
              <div className="rz-card-body">
                <p className="rz-card-degree">
                  <span className="rz-card-deg">{p.stupne}</span>
                  <span className="rz-card-type">{p.typ}</span>
                </p>
                <h3 className="rz-card-name">{p.nazev}</h3>
                <dl className="rz-card-meta">
                  <div><dt>Alkohol</dt><dd>{p.alk}</dd></div>
                  <div><dt>Extrakt</dt><dd>{p.epm}</dd></div>
                </dl>
                <p className="rz-card-slad"><span>Slad:</span> {p.slad}</p>
                <p className="rz-card-slad"><span>Chmel:</span> {p.chmel}</p>
                <p className="rz-card-chut">{p.chut}</p>
                <p className="rz-card-cena">
                  <span className="rz-card-price">{p.cena} Kč</span>
                  <span className="rz-card-unit">za 8 × 1 l</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rz-about" id="pivovar" aria-labelledby="rz-about-h">
        <div className="rz-about-media">
          <img src="/section-1.webp" alt="Pivnice a venkovní posezení v areálu Pivovaru Rezek" />
        </div>
        <div className="rz-about-text">
          <p className="rz-eyebrow rz-eyebrow-dark">Areál pivovaru · od roku 2015</p>
          <h2 id="rz-about-h">Přijeďte si uvařit vlastní pivo</h2>
          <p>
            Pivovar jsme otevřeli, abychom rozšířili nabídku piv z&nbsp;malých pivovarů a&nbsp;hlavně
            abychom výrobu ukázali návštěvníkům zblízka. Dominantou pivnice je varna, v&nbsp;létě
            doplněná venkovním posezením.
          </p>
          <ul className="rz-offer">
            <li>
              <span className="rz-offer-k">Exkurze do provozu</span>
              <span className="rz-offer-v">Uvidíte, jak vzniká tradiční český ležák — od várky po spilku.</span>
            </li>
            <li>
              <span className="rz-offer-k">Ubytování v&nbsp;lágru</span>
              <span className="rz-offer-v">Přespěte přímo v&nbsp;areálu pivovaru, kousek od varny.</span>
            </li>
            <li>
              <span className="rz-offer-k">Akce v&nbsp;pivnici</span>
              <span className="rz-offer-v">Srazy, svatby, taneční zábavy i&nbsp;rauty pro až 80 hostů.</span>
            </li>
            <li>
              <span className="rz-offer-k">Dárkové poukazy</span>
              <span className="rz-offer-v">Vlastní várka jako originální dárek pro milovníky piva.</span>
            </li>
          </ul>
          <p className="rz-kids">
            Myslíme i&nbsp;na děti — celoročně čepujeme <strong>Rezkovy limonády</strong> různých
            příchutí a&nbsp;v&nbsp;létě točenou zmrzlinu.
          </p>
        </div>
      </section>

      <section className="rz-trust" aria-labelledby="rz-trust-h">
        <div className="rz-trust-text">
          <p className="rz-eyebrow">Kde nás najdete</p>
          <h2 id="rz-trust-h">Zásada 154, u&nbsp;Liberce</h2>
          <p className="rz-trust-lead">
            Rezek, s.&nbsp;r.&nbsp;o. vaří v&nbsp;Zásadě v&nbsp;Jizerských horách. Zastavte se na pivo,
            objednejte si várku, nebo zavolejte a&nbsp;domluvte exkurzi.
          </p>
          <div className="rz-contact">
            <a className="rz-btn rz-btn-primary" href="tel:+420602439889">Zavolat 602&nbsp;439&nbsp;889</a>
            <a className="rz-btn rz-btn-ghost" href="mailto:info@pivovarrezek.cz">Napsat e-mail</a>
          </div>
          <p className="rz-addr">Zásada 154, 468 25 Zásada · IČ 27951626</p>
        </div>
        <div className="rz-trust-media">
          <img src="/section-2.webp" alt="Litrové lahve piva z Pivovaru Rezek" />
        </div>
      </section>
    </main>
  );
}
