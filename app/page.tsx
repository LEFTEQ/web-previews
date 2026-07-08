import type { CSSProperties } from "react";

export default function Page() {
  const rims: { id: string; name: string; wood: string; price: string; note: string }[] = [
    { id: "008001", name: "Zlatý rám, ruční plátkové zlato", wood: "lípa", price: "850 Kč", note: "nejžádanější na olejomalby" },
    { id: "222", name: "Nusset ořech", wood: "ořech mořený", price: "436 Kč", note: "teplý tón k akvarelům" },
    { id: "34038", name: "Chicago černo-zlaté", wood: "dřevo + plátek", price: "340 Kč", note: "grafika a fotografie" },
    { id: "93513301", name: "Duna přírodní", wood: "masiv, olejovaný", price: "244 Kč", note: "skandinávsky civilní" },
  ];

  const steps: { n: string; title: string; body: string }[] = [
    {
      n: "01",
      title: "Přinesete obraz",
      body: "Stačí zajít do dílny v centru Prahy. Obraz, plátno, grafiku, zrcadlo i vyšívku — přiložíme lišty a hned uvidíte, jak bude rám vypadat vedle vašeho díla.",
    },
    {
      n: "02",
      title: "Vybereme lištu z 800 vzorků",
      body: "Máme skladem přes 800 druhů rámů a 370 druhů lišt ve velkoobchodě. Poradíme profil, pasparta i sklo — od plátkového zlata po hladké masivní dřevo.",
    },
    {
      n: "03",
      title: "Zarámujeme — i tentýž den",
      body: "Standardně rámujeme do pěti dnů. Spěcháte? Za příplatek zarámujeme expres ještě týž den, kdy obraz přinesete. Zavolejte předem, ať máme volnou kapacitu.",
    },
  ];

  return (
    <main className="nora">
      <header className="nora-nav" aria-label="Hlavní">
        <a className="nora-logo" href="#" aria-label="Galerie NORA — rámování obrazů Praha">
          <span className="nora-logo-mark" aria-hidden="true">◱</span>
          <span className="nora-logo-word">
            NORA<span className="nora-logo-sub">rámování obrazů · Praha</span>
          </span>
        </a>
        <a className="nora-phone" href="tel:+420224917922">224&nbsp;917&nbsp;922</a>
      </header>

      <section className="nora-hero">
        <div className="nora-hero-frame">
          <img
            className="nora-hero-img"
            src="/hero.webp"
            alt="Řezané rámařské lišty a rozpracované zlacené rámy v dílně Galerie NORA v centru Prahy"
          />
          <span className="nora-corner tl" aria-hidden="true" />
          <span className="nora-corner tr" aria-hidden="true" />
          <span className="nora-corner bl" aria-hidden="true" />
          <span className="nora-corner br" aria-hidden="true" />
        </div>
        <div className="nora-hero-text">
          <p className="nora-eyebrow">Rámařská dílna · centrum Prahy · od&nbsp;lišty po&nbsp;hotový rám</p>
          <h1 className="nora-h1">
            Váš obraz si<br />
            zaslouží <em>svou hranu.</em>
          </h1>
          <p className="nora-lede">
            Jediná dílna v centru Prahy, která má přes 800 lišt na skladě — a proto
            umí zarámovat i&nbsp;expres, ještě ten den, co obraz přinesete. Přijďte si
            přiložit lišty k&nbsp;dílu naživo. Uvidíte rozdíl, než vytáhnete peněženku.
          </p>
          <div className="nora-hero-cta">
            <a className="nora-btn" href="tel:+420224917922">Zavolat do dílny</a>
            <a className="nora-btn ghost" href="#listy">Prohlédnout lišty</a>
          </div>
          <dl className="nora-stats">
            <div><dt>800+</dt><dd>rámů skladem</dd></div>
            <div><dt>370+</dt><dd>lišt velkoobchod</dd></div>
            <div><dt>0 dní</dt><dd>expres týž den</dd></div>
          </dl>
        </div>
      </section>

      <section className="nora-listy" id="listy" aria-labelledby="listy-h">
        <div className="nora-sec-head">
          <p className="nora-eyebrow">Ze skladu · řež na běžný metr</p>
          <h2 id="listy-h" className="nora-h2">Vyberte lištu, kterou by váš obraz nosil rád</h2>
          <p className="nora-sec-lede">
            Dřevo, plast, zlacené i&nbsp;mořené profily — široké i&nbsp;hladké, zdobené
            i&nbsp;ploché. Ceny uvádíme za&nbsp;běžný metr, ať víte, do&nbsp;čeho jdete.
          </p>
        </div>

        <div className="nora-visual">
          <img
            className="nora-visual-img"
            src="/section-1.webp"
            alt="Vzorník rámařských lišt různých profilů a povrchů srovnaný vedle sebe"
          />
        </div>

        <ul className="nora-swatches">
          {rims.map((r) => (
            <li className="nora-swatch" key={r.id} style={{ "--i": r.id } as CSSProperties}>
              <div className="nora-swatch-top">
                <span className="nora-swatch-id">ID&nbsp;{r.id}</span>
                <span className="nora-swatch-avail">skladem</span>
              </div>
              <h3 className="nora-swatch-name">{r.name}</h3>
              <p className="nora-swatch-wood">{r.wood} — {r.note}</p>
              <p className="nora-swatch-price"><strong>{r.price}</strong> <span>/ běžný metr</span></p>
            </li>
          ))}
        </ul>
        <p className="nora-note">
          V katalogu je přes 610 rámů. Hledáte konkrétní profil, zrcadlo nebo
          paspartu? Řekneme rovnou, jestli to máme na pultě.
        </p>
      </section>

      <section className="nora-jak" aria-labelledby="jak-h">
        <div className="nora-jak-grid">
          <div className="nora-jak-media">
            <img
              className="nora-jak-img"
              src="/section-2.webp"
              alt="Rámař v dílně Galerie NORA sestavuje dřevěný rám kolem obrazu"
            />
          </div>
          <div className="nora-jak-text">
            <p className="nora-eyebrow">Jak to u&nbsp;nás chodí</p>
            <h2 id="jak-h" className="nora-h2">Od prahu dílny k&nbsp;pověšenému obrazu</h2>
            <ol className="nora-steps">
              {steps.map((s) => (
                <li className="nora-step" key={s.n}>
                  <span className="nora-step-n" aria-hidden="true">{s.n}</span>
                  <div>
                    <h3 className="nora-step-title">{s.title}</h3>
                    <p className="nora-step-body">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="nora-jak-foot">
              Rámujeme obrazy v&nbsp;Praze pro malíře, sběratele i&nbsp;lidi, co si
              nesou jednu vzácnou fotku. Maloobchod i&nbsp;velkoobchod pod jednou střechou.
            </p>
            <a className="nora-btn" href="tel:+420224917922">Domluvit rámování — 224&nbsp;917&nbsp;922</a>
          </div>
        </div>
      </section>
    </main>
  );
}
