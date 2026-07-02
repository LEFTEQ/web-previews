export default function Page() {
  return (
    <main className="vp">
      {/* ================= HERO ================= */}
      <header className="vp-hero">
        <div className="vp-hero-top">
          <div className="vp-wordmark" aria-label="V-PODLAHY, s.r.o.">
            <span className="vp-wordmark-v">V</span>
            <span className="vp-wordmark-rest">PODLAHY</span>
          </div>
          <p className="vp-hero-loc">Olomouc a okolí</p>
        </div>

        <div className="vp-hero-main">
          <p className="vp-eyebrow">Betonové podlahy · lité, strojně hlazené</p>
          <h1 className="vp-h1">
            <span className="vp-h1-line">Rovina</span>
            <span className="vp-h1-line vp-h1-line--indent">na dvou metrech</span>
            <span className="vp-h1-line vp-h1-line--mm">± 2 mm.</span>
          </h1>
          <p className="vp-hero-sub">
            Lijeme, vibrujeme a strojně hladíme betonové podlahy do hal, garáží,
            dílen i novostaveb. Beton měříme latí, ne odhadem — a to, co slíbíme
            na milimetry, na milimetry předáme.
          </p>
        </div>

        {/* Signature: pás čerstvě zahlazeného betonu s nivelačními značkami */}
        <div className="vp-screed" aria-hidden="true">
          <div className="vp-screed-scale">
            <span className="vp-tick"><i /><b>0</b></span>
            <span className="vp-tick"><i /><b>50</b></span>
            <span className="vp-tick"><i /><b>100</b></span>
            <span className="vp-tick"><i /><b>150</b></span>
            <span className="vp-tick"><i /><b>200 cm</b></span>
          </div>
          <div className="vp-screed-bar">
            <div className="vp-screed-wet" />
          </div>
          <p className="vp-screed-caption">2m lať — kontrola roviny při každém předání</p>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="vp-section" aria-labelledby="sluzby-h">
        <div className="vp-section-head">
          <h2 id="sluzby-h" className="vp-h2">Co betonujeme</h2>
          <p className="vp-section-lead">
            Každá podlaha má jiný recept — jinou pevnost betonu, jinou výztuž,
            jiný povrch. Řekněte nám, co na ní bude stát, a navrhneme skladbu.
          </p>
        </div>

        <div className="vp-grid">
          <article className="vp-card">
            <p className="vp-card-tag">C25/30 · drátkobeton</p>
            <h3 className="vp-h3">Průmyslové haly a sklady</h3>
            <p>
              Drátkobetonové desky pro vysokozdvižné vozíky a regálové systémy.
              Strojně hlazený povrch se vsypem, dilatační řezy do 24 hodin od lití.
            </p>
            <p className="vp-card-meta">Plochy od 200 m² · pojezd do 5 t</p>
          </article>

          <article className="vp-card">
            <p className="vp-card-tag">C20/25 · kari síť</p>
            <h3 className="vp-h3">Garáže, dílny a hospodářské stavby</h3>
            <p>
              Deska s kari sítí a hlazeným povrchem, který snese olej, zimní sůl
              i pojezd auta. Spádujeme k vpusti, aby voda nestála pod vozem.
            </p>
            <p className="vp-card-meta">Realizace zpravidla za 1–2 dny</p>
          </article>

          <article className="vp-card">
            <p className="vp-card-tag">Anhydrit / cementový potěr</p>
            <h3 className="vp-h3">Lité potěry v novostavbách</h3>
            <p>
              Samonivelační potěry na podlahové topení — rovný podklad pro
              vinyl, dlažbu i dřevo. Byt do 100 m² zvládneme vylít za jeden den.
            </p>
            <p className="vp-card-meta">Včetně zaměření a dilatací</p>
          </article>

          <article className="vp-card">
            <p className="vp-card-tag">Bruska + penetrace</p>
            <h3 className="vp-h3">Opravy a broušení starých podlah</h3>
            <p>
              Vydrolenou nebo prasklou desku zbrousíme, praskliny sešijeme
              sponami a doplníme stěrkou. Levnější než bourat a lít znovu.
            </p>
            <p className="vp-card-meta">Posouzení stavu zdarma na místě</p>
          </article>
        </div>
      </section>

      {/* ================= DŮVĚRA / JAK PRACUJEME ================= */}
      <section className="vp-section vp-section--dark" aria-labelledby="postup-h">
        <div className="vp-section-head">
          <h2 id="postup-h" className="vp-h2">Beton neodpouští. Proto měříme.</h2>
          <p className="vp-section-lead vp-section-lead--dark">
            Podlaha se nedá „ještě trochu upravit" jako omítka. Co zatuhne, to
            zůstane. Tady je náš postup od zaměření po předání:
          </p>
        </div>

        <ol className="vp-steps">
          <li className="vp-step">
            <p className="vp-step-day">Den 0</p>
            <h3 className="vp-h3 vp-h3--light">Zaměření nivelákem</h3>
            <p>
              Přijedeme, laserem zaměříme výšky a domluvíme tloušťku desky.
              Nabídku dostanete do tří pracovních dnů, s cenou za m² i s betonem.
            </p>
          </li>
          <li className="vp-step">
            <p className="vp-step-day">Den lití</p>
            <h3 className="vp-h3 vp-h3--light">Lití, vibrování, hlazení</h3>
            <p>
              Beton vozíme z olomouckých betonáren — do hodiny od namíchání je
              v desce. Stahujeme vibrační lištou, hladíme rotační hladičkou.
            </p>
          </li>
          <li className="vp-step">
            <p className="vp-step-day">+ 24 h</p>
            <h3 className="vp-h3 vp-h3--light">Dilatace a ošetření</h3>
            <p>
              Do 24 hodin řežeme dilatační spáry a povrch kropíme nebo kryjeme
              fólií, aby beton zrál pomalu a nepopraskal.
            </p>
          </li>
          <li className="vp-step">
            <p className="vp-step-day">Předání</p>
            <h3 className="vp-h3 vp-h3--light">Kontrola 2m latí</h3>
            <p>
              Před vámi přiložíme lať a změříme rovinu. Do protokolu napíšeme
              skutečné odchylky — ne „vyhovuje", ale čísla v milimetrech.
            </p>
          </li>
        </ol>

        <div className="vp-refs">
          <figure className="vp-ref">
            <blockquote>
              „Hala 640 m² vylitá za dva dny, regály stojí bez podkládání.
              Odchylka na lati nikde přes 2 mm."
            </blockquote>
            <figcaption>Skladová hala, Olomouc-Holice</figcaption>
          </figure>
          <figure className="vp-ref">
            <blockquote>
              „V garáži jsem chtěl spád k vpusti. Vyspádovali přesně, voda ze
              sněhu teče kam má. Domluva rychlá, termín drželi."
            </blockquote>
            <figcaption>Dvojgaráž u RD, Velká Bystřice</figcaption>
          </figure>
          <figure className="vp-ref">
            <blockquote>
              „Anhydrit na topení v celém patře za den. Podlahář pak chválil,
              že nemusel nic stěrkovat."
            </blockquote>
            <figcaption>Novostavba RD, Hlubočky</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
