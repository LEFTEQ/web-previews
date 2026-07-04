import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Návrh a poradenství",
      lead: "Sejdeme se u vás, změříme prostor a spočítáme skutečnou tepelnou zátěž.",
      body: "Nemáte jasnou představu, jak dosáhnout tepelného komfortu? Navrhneme řešení na míru dispozici, orientaci oken i tomu, kolik lidí v místnosti bývá. Dostanete jeden konkrétní návrh, ne katalog.",
    },
    {
      code: "02",
      title: "Odborná montáž",
      lead: "Neodborná montáž zkracuje životnost jednotky, v horším případě ji nevratně poškodí.",
      body: "Klimatizace, tepelná čerpadla i vzduchotechniku instalujeme podle výrobce — vakuování okruhu, tlaková zkouška, správný spád kondenzátu. Po nás nezůstane díra ve zdi ani hučící venkovní jednotka u sousedova okna.",
    },
    {
      code: "03",
      title: "Servis a revize",
      lead: "Pravidelná prohlídka je jediná záruka, že jednotka poběží tiše a dlouho.",
      body: "Čištění výparníku, kontrola tlaku chladiva, povinné revize těsnosti okruhu. Záruční i pozáruční servis — ozvěte se a domluvíme termín tak, aby vám neomezil provoz domácnosti ani firmy.",
    },
  ];

  return (
    <main className="sk">
      <header className="sk-nav">
        <a className="sk-brand" href="#" aria-label="Systemklima, domů">
          <span className="sk-brand-mark" aria-hidden="true">
            <span className="sk-brand-dot" />
          </span>
          <span className="sk-brand-word">
            System<span className="sk-brand-thin">klima</span>
          </span>
        </a>
        <nav className="sk-menu" aria-label="Hlavní">
          <a href="#sluzby">Co umíme</a>
          <a href="#onas">O nás</a>
          <a className="sk-menu-cta" href="#kontakt">Chci nabídku</a>
        </nav>
      </header>

      <section className="sk-hero" aria-labelledby="sk-hero-title">
        <div className="sk-hero-copy">
          <p className="sk-eyebrow">Praha a okolí · klimatizace, tepelná čerpadla, VZT</p>
          <h1 id="sk-hero-title">
            Když venku <span className="sk-num">35&nbsp;°C</span>,<br />
            u vás doma příjemných{" "}
            <span className="sk-num sk-num-cool">22&nbsp;°C</span>.
          </h1>
          <p className="sk-hero-lead">
            Systemklima navrhuje, montuje a servisuje klimatizace v Praze od
            rodinných bytů po provozovny. Tiše, odborně a bez zbytečného omezení
            vašeho provozu.
          </p>
          <div className="sk-hero-actions">
            <a className="sk-btn" href="#kontakt">Poptat instalaci</a>
            <a className="sk-btn sk-btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
          <dl className="sk-gauge" aria-label="Rozsah teplot">
            <div>
              <dt>venku</dt>
              <dd>+35°</dd>
            </div>
            <div className="sk-gauge-line" aria-hidden="true" />
            <div>
              <dt>u vás</dt>
              <dd className="sk-gauge-cool">+22°</dd>
            </div>
          </dl>
        </div>
        <figure className="sk-hero-media">
          <img
            src="/hero.webp"
            alt="Nástěnná klimatizační jednotka nad oknem v provětrané pražské místnosti"
            width={960}
            height={1120}
            loading="eager"
          />
          <figcaption className="sk-hero-tag">
            <span className="sk-hero-tag-dot" aria-hidden="true" />
            jednotka běží · 22,0&nbsp;°C
          </figcaption>
        </figure>
      </section>

      <section className="sk-services" id="sluzby" aria-labelledby="sk-services-title">
        <div className="sk-section-head">
          <p className="sk-eyebrow">Co pro vás uděláme</p>
          <h2 id="sk-services-title">Od návrhu po první tichý start</h2>
          <p className="sk-section-note">
            Tři kroky, které u nás nepřeskakujeme. Každou zakázku vedeme od začátku
            do konce jeden technik — víte, s kým mluvíte.
          </p>
        </div>
        <ol className="sk-cards">
          {services.map((s) => (
            <li key={s.code} className="sk-card">
              <span className="sk-card-code" aria-hidden="true">
                {s.code}
              </span>
              <h3>{s.title}</h3>
              <p className="sk-card-lead">{s.lead}</p>
              <p className="sk-card-body">{s.body}</p>
            </li>
          ))}
        </ol>
        <figure className="sk-service-media">
          <img
            src="/section-1.webp"
            alt="Technik Systemklima při montáži venkovní jednotky klimatizace"
            width={1200}
            height={720}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="sk-about" id="onas" aria-labelledby="sk-about-title">
        <figure className="sk-about-media">
          <img
            src="/section-2.webp"
            alt="Detail chladicího okruhu a měřicích přístrojů při revizi klimatizace"
            width={1000}
            height={800}
            loading="lazy"
          />
        </figure>
        <div className="sk-about-copy" id="kontakt">
          <p className="sk-eyebrow">O firmě Systemklima s.r.o.</p>
          <h2 id="sk-about-title">
            Pražská firma, která ke klimatizaci přistupuje jako řemeslu
          </h2>
          <p>
            Zabýváme se prodejem a montáží klimatizací, tepelných čerpadel a
            vzduchotechniky, jejich servisem a revizemi. Působíme hlavně v Praze a
            okolí, po domluvě po celé ČR.
          </p>
          <p>
            Naším cílem je spokojený zákazník, odbornost a kvalitně odvedená práce
            — s co nejmenším omezením provozu vaší domácnosti nebo firmy během
            montáže. Garantujeme odbornou montáž i vysokou kvalitu záručního a
            pozáručního servisu.
          </p>
          <ul className="sk-facts">
            <li>
              <span className="sk-fact-label">Sídlo</span>
              <span className="sk-fact-value">Průmyslová 1472/11, Praha</span>
            </li>
            <li>
              <span className="sk-fact-label">Působnost</span>
              <span className="sk-fact-value">Praha a okolí, po ČR dle domluvy</span>
            </li>
            <li>
              <span className="sk-fact-label">Řešíme</span>
              <span className="sk-fact-value">
                Klimatizace · tepelná čerpadla · VZT · servis · revize
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

// typový import ponechán pro budoucí rozšíření stylů
export const dynamic = "force-static";
void (0 as unknown as CSSProperties);
