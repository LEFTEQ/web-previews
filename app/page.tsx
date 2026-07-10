import type { CSSProperties } from "react";

export default function Page() {
  const mixes = [
    {
      code: "C20/25",
      name: "Základový beton",
      use: "Základové pasy, patky, desky pod haly i rodinné domy.",
      slump: "S3",
      max: "Dmax 22",
    },
    {
      code: "C25/30",
      name: "Konstrukční beton",
      use: "Stropy, věnce, sloupy a nosné stěny s vyšší zátěží.",
      slump: "S4",
      max: "Dmax 16",
    },
    {
      code: "C30/37",
      name: "Vodostavební beton",
      use: "Bílé vany, jímky a suterény vystavené tlakové vodě.",
      slump: "S4",
      max: "XC4 / XF3",
    },
    {
      code: "CB",
      name: "Cementová stabilizace",
      use: "Podkladní vrstvy komunikací a zpevněné plochy.",
      slump: "—",
      max: "KSC I–III",
    },
  ];

  const steps = [
    {
      n: "01",
      t: "Zavoláte s objednávkou",
      d: "Řeknete třídu betonu, množství v m³ a den. Poradíme, co se na stavbu hodí.",
    },
    {
      n: "02",
      t: "Namícháme na míru",
      d: "Recepturu namícháme v betonárně Vojkovice přesně podle normy ČSN EN 206.",
    },
    {
      n: "03",
      t: "Přivezeme v čas",
      d: "Autodomíchávač dorazí v domluvený okamžik. Čerpadlo dostane beton i tam, kam auto nevjede.",
    },
  ];

  return (
    <main className="fb">
      <header className="fb-top">
        <a className="fb-logo" href="#" aria-label="FRISCHBETON, betonárna Vojkovice">
          <span className="fb-logo-mark" aria-hidden="true" />
          <span className="fb-logo-word">
            FRISCH<span className="fb-logo-thin">BETON</span>
          </span>
        </a>
        <nav className="fb-nav" aria-label="Hlavní">
          <a href="#smesi">Betonové směsi</a>
          <a href="#jak">Jak dodáváme</a>
          <a href="#duvera">O betonárně</a>
        </nav>
        <a className="fb-call" href="tel:+420222868264">
          <span className="fb-call-label">Objednat beton</span>
          <span className="fb-call-num">222 868 264</span>
        </a>
      </header>

      <section className="fb-hero" aria-labelledby="hero-h">
        <div className="fb-hero-media">
          <img
            src="/hero.webp"
            alt="Autodomíchávač u betonárny FRISCHBETON ve Vojkovicích u Kralup nad Vltavou"
            width={1600}
            height={1100}
          />
          <div className="fb-hero-scrim" aria-hidden="true" />
        </div>
        <div className="fb-hero-body">
          <p className="fb-eyebrow">Betonárna · Kralupy nad Vltavou-Vojkovice</p>
          <h1 id="hero-h">
            Čerstvý beton<br />
            <span className="fb-hero-accent">namíchaný na dnešek</span>
          </h1>
          <p className="fb-hero-lead">
            Míchačka se točí od šesti ráno. Řeknete třídu a kubíky, my namícháme
            recepturu podle normy a autodomíchávač vyrazí z areálu České štěrkopísky
            k vám na stavbu.
          </p>
          <div className="fb-hero-actions">
            <a className="fb-btn" href="tel:+420222868264">Zavolat na betonárnu</a>
            <a className="fb-btn fb-btn-ghost" href="#smesi">Přehled směsí</a>
          </div>
          <dl className="fb-spec">
            <div>
              <dt>Norma</dt>
              <dd>ČSN EN 206</dd>
            </div>
            <div>
              <dt>Rozvoz</dt>
              <dd>Kralupsko a okolí</dd>
            </div>
            <div>
              <dt>Čerpadlo</dt>
              <dd>až 42 m dosah</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="fb-section fb-mixes" id="smesi" aria-labelledby="smesi-h">
        <div className="fb-section-head">
          <p className="fb-eyebrow">Výrobní sortiment</p>
          <h2 id="smesi-h">Betonové směsi z jedné receptury do druhé</h2>
          <p className="fb-section-lead">
            Každou třídu míchá naše betonárna z certifikovaného kameniva z České
            štěrkopísky. Nevíte, co potřebujete? Řekněte, co betonujete, a doporučíme.
          </p>
        </div>
        <ul className="fb-mix-grid">
          {mixes.map((m) => (
            <li className="fb-mix" key={m.code}>
              <div className="fb-mix-code">{m.code}</div>
              <h3>{m.name}</h3>
              <p>{m.use}</p>
              <div className="fb-mix-meta">
                <span>{m.slump}</span>
                <span>{m.max}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="fb-mix-note">
          <img
            src="/section-1.webp"
            alt="Čerstvě namíchaný beton stékající z bubnu autodomíchávače"
            width={900}
            height={640}
          />
          <div className="fb-mix-note-body">
            <h3>Doprava i pumpa v jednom telefonátu</h3>
            <p>
              K betonu domluvíme i autočerpadlo. Beton se dostane přes plot, do sklepa
              i na strop bez koleček a lopat. Řidiči znají Kralupsko i úzké příjezdy
              k rodinným domům.
            </p>
            <a className="fb-btn fb-btn-sm" href="tel:+420222868264">Domluvit dopravu</a>
          </div>
        </div>
      </section>

      <section className="fb-section fb-trust" id="duvera" aria-labelledby="duvera-h">
        <div className="fb-trust-media">
          <img
            src="/section-2.webp"
            alt="Betonárna FRISCHBETON v areálu České štěrkopísky ve Vojkovicích"
            width={900}
            height={720}
          />
        </div>
        <div className="fb-trust-body">
          <p className="fb-eyebrow">O betonárně</p>
          <h2 id="duvera-h">Míchá se přímo u štěrkopísku</h2>
          <p className="fb-trust-lead">
            Stojíme v areálu České štěrkopísky ve Vojkovicích u Kralup nad Vltavou —
            kamenivo máme přes cestu, ne přes půl republiky. Proto je beton čerstvý
            a na stavbě rychle. Jsme součástí koncernu STRABAG, ale objednávku bere
            náš člověk z Kralupska.
          </p>

          <ol className="fb-steps" id="jak" aria-label="Jak objednávka probíhá">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="fb-step-n" aria-hidden="true">{s.n}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="fb-contact-card">
            <div>
              <span className="fb-contact-label">Betonárna Vojkovice</span>
              <p className="fb-contact-addr">
                Areál České štěrkopísky<br />
                277 44 Kralupy nad Vltavou-Vojkovice
              </p>
            </div>
            <div className="fb-contact-actions">
              <a href="tel:+420222868264">Zavolat 222 868 264</a>
              <a href="mailto:office@frischbeton.eu">Napsat e-mail</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
