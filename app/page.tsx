import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "C6000",
      name: "Digitální tisk",
      machine: "Canon imagePRESS C6000",
      desc: "Vizitky, letáky, brožury, katalogy i knihy. Ostrá kresba, věrné barvy, tisk už od 100 kusů.",
    },
    {
      code: "PLOTR",
      name: "Řezaná reklama",
      machine: "Řezací plotr",
      desc: "Samolepky, polepy aut, výlohy, firemní štíty a reklamní tabule vyříznuté přesně na milimetr.",
    },
    {
      code: "LIS",
      name: "Potisk textilu",
      machine: "Transferový lis",
      desc: "Tepelný přenos na trička, batohy, peněženky i puzzle — i na nerovné a členité materiály.",
    },
    {
      code: "V1/V2",
      name: "Vazba a dokončení",
      machine: "Skládání · bigování · falcování",
      desc: "Sešitová i lepená vazba, kroužková vazba, laminování, perforování, vrtání a výsek.",
    },
  ];

  const priceRows = [
    { label: "Jednostranně černobíle", spec: "1/0", price: "0,80" },
    { label: "Oboustranně černobíle", spec: "1/1", price: "1,30" },
    { label: "Jednostranně barevně", spec: "4/0", price: "1,00" },
    { label: "Oboustranně barevně", spec: "4/4", price: "1,60" },
  ];

  const canPrint = [
    "Vizitky", "Letáky", "Plakáty", "Brožury", "Katalogy", "Knihy",
    "Kalendáře", "Pozvánky", "Samolepky", "Bannery a cedule", "Jídelní lístky",
    "Novoročenky", "Vstupenky", "Poznámkové bloky", "Chlopňové desky", "QR kódy",
  ];

  return (
    <main className="mel">
      <header className="mel-top">
        <a className="mel-mark" href="#top" aria-label="Tiskárna Melmen, úvod">
          <span className="mel-mark-cyan">MEL</span><span className="mel-mark-mag">MEN</span>
          <span className="mel-mark-sub">tiskárna · Pardubice</span>
        </a>
        <nav className="mel-nav" aria-label="Hlavní navigace">
          <a href="#tisk">Co tiskneme</a>
          <a href="#duvera">O tiskárně</a>
          <a className="mel-nav-cta" href="tel:+420466566018">466 566 018</a>
        </nav>
      </header>

      <section className="mel-hero" id="top">
        <div className="mel-hero-copy">
          <p className="mel-eyebrow">Digitální tisk &amp; řezaná reklama · Sezemice u Pardubic</p>
          <h1 className="mel-h1">
            Vizitky vyzvednete
            <span className="mel-h1-em"> do 24 hodin</span>
            <br /> od dodání dat.
          </h1>
          <p className="mel-lead">
            Od stovky vizitek po velkoformátové polepy — v tiskárně Melmen si tiskoviny
            připravíme, vytiskneme i dokončíme pod jednou střechou. Přijďte s nápadem, odejdete s hotovou zakázkou.
          </p>
          <div className="mel-hero-actions">
            <a className="mel-btn" href="mailto:info@melmen.cz">Poslat data k tisku</a>
            <a className="mel-btn-ghost" href="#tisk">Prohlédnout ceník vizitek</a>
          </div>
          <dl className="mel-crop">
            <div><dt>od 100 ks</dt><dd>minimální náklad vizitek</dd></div>
            <div><dt>300 g</dt><dd>křída matná i lesklá</dd></div>
            <div><dt>CMYK</dt><dd>plnobarevný digitální tisk</dd></div>
          </dl>
        </div>
        <figure className="mel-hero-fig">
          <img src="/hero.webp" alt="Detail tiskového archu vycházejícího z digitálního stroje v tiskárně Melmen" className="mel-hero-img" />
          <div className="mel-registration" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </figure>
      </section>

      <section className="mel-section" id="tisk">
        <div className="mel-sec-head">
          <p className="mel-eyebrow mel-eyebrow-mag">Stroje &amp; služby</p>
          <h2 className="mel-h2">Čtyři linky, jedna zakázka</h2>
          <p className="mel-sec-lead">
            Předtisková příprava, tisk i knihařské dokončení běží na jednom místě. Nemusíte data
            posílat mezi třemi firmami — všechno vyřídíme tady.
          </p>
        </div>

        <ol className="mel-services">
          {services.map((s, i) => (
            <li className="mel-svc" key={s.code} style={{ "--i": i } as CSSProperties}>
              <span className="mel-svc-code">{s.code}</span>
              <div className="mel-svc-body">
                <h3>{s.name}</h3>
                <p className="mel-svc-machine">{s.machine}</p>
                <p className="mel-svc-desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mel-price">
          <div className="mel-price-head">
            <h3>Vizitky za kačku</h3>
            <p>Cena za kus bez DPH · 300g křída · tisk od 100 ks</p>
          </div>
          <table className="mel-price-tbl">
            <thead>
              <tr><th scope="col">Provedení</th><th scope="col">Tisk</th><th scope="col" className="mel-num">Kč / ks</th></tr>
            </thead>
            <tbody>
              {priceRows.map((r) => (
                <tr key={r.spec}>
                  <th scope="row">{r.label}</th>
                  <td className="mel-spec">{r.spec}</td>
                  <td className="mel-num">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mel-price-note">
            Chcete strukturovaný papír nebo tvrzený ENZOCOAT 300g? Rádi doporučíme alternativu podle toho, jak má vizitka působit.
          </p>
        </div>
      </section>

      <section className="mel-section mel-section-alt" id="duvera">
        <div className="mel-about">
          <div className="mel-about-copy">
            <p className="mel-eyebrow mel-eyebrow-mag">O tiskárně</p>
            <h2 className="mel-h2">Tiskárna Melmen v Sezemicích u Pardubic</h2>
            <p className="mel-sec-lead">
              Děláme kvalitní digitální tisk včetně kompletní předtiskové přípravy. Od banneru
              na plot po sešitovou brožuru — poradíme s materiálem i formátem a hotové tiskoviny
              vám i dopravíme až na místo.
            </p>
            <ul className="mel-contact">
              <li><span>Adresa</span><a href="https://mapy.cz">Družstevní 973, 533 04 Sezemice</a></li>
              <li><span>Telefon</span><a href="tel:+420466566018">+420 466 566 018</a></li>
              <li><span>E-mail</span><a href="mailto:info@melmen.cz">info@melmen.cz</a></li>
            </ul>
          </div>
          <figure className="mel-about-fig">
            <img src="/section-1.webp" alt="Řezací plotr při vyřezávání samolepek v tiskárně Melmen" />
            <figcaption>Řezací plotr — samolepky a polepy na milimetr přesně.</figcaption>
          </figure>
        </div>

        <div className="mel-can">
          <div className="mel-can-copy">
            <h3>Co všechno vytiskneme</h3>
            <p>Digitální tisk zvládne malý náklad rychle a bez kompromisu v kvalitě.</p>
            <img src="/section-2.webp" alt="Vytištěné tiskoviny — letáky, plakáty a brožury z tiskárny Melmen" className="mel-can-img" />
          </div>
          <ul className="mel-tags">
            {canPrint.map((t) => (<li key={t}>{t}</li>))}
          </ul>
        </div>
      </section>
    </main>
  );
}
