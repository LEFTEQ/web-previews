import type { CSSProperties } from 'react';

export default function Page() {
  const outputs = [
    { id: 'A1', label: 'Bojler', watt: 2000, status: 'ohřev', bar: 78 },
    { id: 'A2', label: 'Tepelné čerpadlo', watt: 900, status: 'topí', bar: 42 },
    { id: 'A3', label: 'Nabíječka auta', watt: 0, status: 'čeká', bar: 6 },
    { id: 'A4', label: 'Rekuperace', watt: 120, status: 'běží', bar: 14 }
  ];

  const products = [
    {
      no: '01',
      name: 'WATTrouter Mx',
      claim: 'Vlajkový regulátor přebytků',
      body: 'Měří tok energie na hlavním jističi a spíná zátěže tak, aby do sítě neodešla skoro žádná zbytečná kilowatthodina. Šest až devět výstupů, plynulá regulace přes polovodičová relé, ovládání přes web i mobil.',
      spec: ['6–9 výstupů', 'plynulá i pevná regulace', 'S-CONNECT']
    },
    {
      no: '02',
      name: 'Heating Control Mx',
      claim: 'Chytré vytápění z přebytků',
      body: 'Řídí topné okruhy a bojlery podle toho, kolik zrovna vyrábí střecha. Když slunce dá, topí zadarmo; když ne, hlídá komfort. Ideální pro domy bez baterie, které chtějí uložit energii do tepla.',
      spec: ['topné okruhy', 'priority zátěží', 'týdenní plán']
    },
    {
      no: '03',
      name: 'S-CONNECT + Shelly',
      claim: 'Propojení s chytrou zásuvkou',
      body: 'Nově řídíme i zásuvky Shelly Plus S Gen3 a další zařízení s API Gen2+. Přebytek tak roztočí i spotřebiče, ke kterým byste dřív žádný regulátor netahali — přes wi-fi, bez sekání do zdi.',
      spec: ['Shelly Gen3', 'API Gen2+', 'bez kabeláže']
    }
  ];

  return (
    <main className="sc">
      <header className="sc-nav" aria-label="Hlavní">
        <a className="sc-brand" href="#uvod" aria-label="SOLAR controls, úvod">
          <span className="sc-brand-mark" aria-hidden="true">◐</span>
          <span className="sc-brand-word">SOLAR<span className="sc-brand-thin">controls</span></span>
        </a>
        <nav className="sc-nav-links">
          <a href="#produkty">Regulátory</a>
          <a href="#firma">O firmě</a>
          <a className="sc-call" href="tel:+420377241730">Zavolat</a>
        </nav>
      </header>

      <section className="sc-hero" id="uvod">
        <div className="sc-hero-img">
          <img src="/hero.webp" alt="Fotovoltaická elektrárna a rozvaděč s regulátorem přebytků WATTrouter" />
        </div>

        <div className="sc-hero-body">
          <p className="sc-eyebrow">Plzeň · elektronika pro obnovitelné zdroje · od 2010</p>
          <h1 className="sc-h1">
            Vyrobené slunce<br />
            <span className="sc-h1-accent">nepouštíme do sítě</span><br />
            zadarmo.
          </h1>
          <p className="sc-lede">
            Vyvíjíme a vyrábíme regulátory přebytků <strong>WATTrouter</strong>. Místo aby vaše elektrárna
            posílala energii do sítě skoro za nic, náš přístroj ji hned na místě promění v teplou vodu,
            teplo a nabité auto.
          </p>
          <div className="sc-hero-cta">
            <a className="sc-btn" href="#produkty">Prohlédnout regulátory</a>
            <a className="sc-btn sc-btn-ghost" href="mailto:info@solarcontrols.cz">Napsat e-mail</a>
          </div>
        </div>

        <aside className="sc-panel" aria-label="Ukázka rozdělení přebytku na výstupy">
          <div className="sc-panel-head">
            <span className="sc-panel-dot" aria-hidden="true" />
            <span>Přebytek právě teď</span>
            <span className="sc-panel-kw">3,02 kW</span>
          </div>
          <ul className="sc-outputs">
            {outputs.map((o) => (
              <li key={o.id} className="sc-output">
                <span className="sc-output-id">{o.id}</span>
                <span className="sc-output-name">{o.label}</span>
                <span className="sc-output-track">
                  <span className="sc-output-fill" style={{ '--w': `${o.bar}%` } as CSSProperties} />
                </span>
                <span className="sc-output-w">{o.watt} W</span>
                <span className="sc-output-state">{o.status}</span>
              </li>
            ))}
          </ul>
          <p className="sc-panel-foot">Do sítě odešlo dnes jen <strong>0,4 kWh</strong>. Zbytek zůstal doma.</p>
        </aside>
      </section>

      <section className="sc-section" id="produkty">
        <div className="sc-sec-head">
          <p className="sc-eyebrow">Co vyrábíme</p>
          <h2 className="sc-h2">Tři přístroje, jeden úkol: nic nevyplýtvat</h2>
        </div>

        <div className="sc-prod-lead">
          <img src="/section-1.webp" alt="Detail regulátoru WATTrouter na DIN liště v domovním rozvaděči" />
          <p>
            Všechno vyvíjíme a testujeme tady v Plzni. Naše moduly splňují evropské normy na bezpečnost
            i elektromagnetickou kompatibilitu a než jdou na trh, běží u nás dlouhé měsíce v testu.
          </p>
        </div>

        <ol className="sc-prod-list">
          {products.map((p) => (
            <li key={p.no} className="sc-prod">
              <div className="sc-prod-no">{p.no}</div>
              <div className="sc-prod-main">
                <h3 className="sc-prod-name">{p.name}</h3>
                <p className="sc-prod-claim">{p.claim}</p>
                <p className="sc-prod-body">{p.body}</p>
                <ul className="sc-prod-spec">
                  {p.spec.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sc-section sc-about" id="firma">
        <div className="sc-about-grid">
          <div className="sc-about-img">
            <img src="/section-2.webp" alt="Vývoj a testování elektroniky ve firmě SOLAR controls v Plzni" />
          </div>
          <div className="sc-about-body">
            <p className="sc-eyebrow">Ryze česká technologická firma</p>
            <h2 className="sc-h2">Regulátory kreslíme, pájíme a testujeme sami — od roku 2010</h2>
            <p className="sc-about-text">
              Začali jsme prvním WATTrouterem řady CWx a dodneška platí totéž pravidlo: energie z vaší
              střechy má nejvyšší cenu ve chvíli, kdy ji spotřebujete doma. Kolem toho stavíme každý přístroj.
            </p>
            <dl className="sc-facts">
              <div><dt>Od</dt><dd>2010</dd></div>
              <div><dt>Sídlo</dt><dd>Plzeň</dd></div>
              <div><dt>Prodej</dt><dd>e-shop + montážní firmy</dd></div>
              <div><dt>Nově</dt><dd>Shelly Gen3</dd></div>
            </dl>
            <div className="sc-about-cta">
              <a className="sc-btn" href="tel:+420377241730">Zavolat na servis</a>
              <a className="sc-btn sc-btn-ghost" href="mailto:info@solarcontrols.cz">info@solarcontrols.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
