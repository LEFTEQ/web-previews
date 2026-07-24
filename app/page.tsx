import { AiImage } from "./_ui";
import { VoltageReadout } from "./motion";

function Ground() {
  return (
    <svg className="gnd" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v9" />
      <path d="M3.5 11h17" />
      <path d="M6.5 15h11" />
      <path d="M9.5 19h5" />
    </svg>
  );
}

const services = [
  {
    tp: "TP·01",
    title: "Elektro opravy",
    body: "Elektrikářské práce, opravy a servis elektroinstalací, trasování kabelů, hledání zkratů, zapojení a montáž varných desek.",
  },
  {
    tp: "TP·02",
    title: "Revize elektro",
    body: "Revize elektroinstalací a hromosvodů. Výstupem je odborné posouzení bezpečné provozuschopnosti zařízení.",
  },
  {
    tp: "TP·03",
    title: "Elektroinstalace",
    body: "Přípojky, hlavní rozvaděče, rozvodné skříně a vedení. Řešíme i slaboproud pro soukromé i komerční objekty.",
  },
  {
    tp: "TP·04",
    title: "Určení vnějších vlivů",
    body: "Protokoly, které mohou ušetřit investorům a provozovatelům nemalé finanční prostředky. Jasně a podle normy.",
  },
];

export default function Page() {
  return (
    <main className="page" id="top">
      <span className="rail" aria-hidden="true" />

      <header className="nav">
        <a className="mark" href="#top" aria-label="Revize Elektro Tech, domů">
          <Ground />
          <span className="mark-word">
            Revize Elektro <span className="mark-tech">Tech</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#opravneni">Oprávnění</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Revizní technik měří napětí v rozvaděči"
            className="hero-img"
          />
        </div>
        <div className="hero-inner">
          <p className="eyebrow eyebrow--cyan">Spolehlivý partner pro · Praha</p>
          <h1 className="hero-title">
            Opravy a revize<br />elektrických zařízení
          </h1>
          <p className="hero-lead">
            Certifikovaní revizní technici pro domácnosti, komerční objekty
            i průmysl. Revize, opravy a instalace podle platných norem —
            s protokolem, kterému rozumí i úřad.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#sluzby">Nezávazná poptávka</a>
            <div className="meter" aria-label="Naměřené síťové napětí 230 voltů">
              <span className="meter-read">
                <VoltageReadout />
                <span className="meter-unit">V</span>
              </span>
              <span className="meter-label">síťové napětí · prověřeno</span>
            </div>
          </div>
        </div>
      </section>

      <section className="svc" id="sluzby">
        <p className="eyebrow eyebrow--cyan">
          <Ground /> Čím se zabýváme
        </p>
        <h2 className="sec-title">Čtyři body na jednom vedení</h2>
        <p className="sec-note">
          Veškeré instalace a revize provádějí certifikovaní revizní technici
          s platným osvědčením podle zákona č.&nbsp;250/2021&nbsp;Sb.
        </p>

        <div className="svc-figure">
          <AiImage
            src="/section-1.webp"
            alt="Detail práce na elektroinstalaci a rozvodné skříni"
            className="svc-img"
          />
        </div>

        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc-item" key={s.tp}>
              <span className="node" aria-hidden="true" />
              <div className="svc-body">
                <span className="tp">{s.tp}</span>
                <h3 className="svc-name">{s.title}</h3>
                <p className="svc-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cert" id="opravneni">
        <p className="eyebrow eyebrow--copper">
          <Ground /> Oprávnění a osvědčení
        </p>
        <h2 className="sec-title cert-title">
          Revizi smí podepsat jen technik s&nbsp;osvědčením.
        </h2>
        <p className="cert-lead">
          Elektro revizi provádí certifikovaný revizní technik s osvědčením dle
          zákona 250/2021&nbsp;Sb. (platného od 1.&nbsp;7.&nbsp;2022) a firma
          s oprávněním od Technické inspekce ČR. Výsledkem je revizní zpráva
          s doporučeným termínem příští kontroly.
        </p>

        <ul className="cert-points">
          <li>Osvědčení dle zákona č. 250/2021 Sb.</li>
          <li>Oprávnění od Technické inspekce ČR</li>
          <li>Revizní zpráva s termínem příští kontroly</li>
          <li>Působnost po celé Praze i okolí</li>
        </ul>

        <div className="cert-figure">
          <AiImage
            src="/section-2.webp"
            alt="Revizní zpráva a měřicí přístroj na pracovním stole"
            className="cert-img"
          />
          <p className="cert-cap">
            Revize Elektro Tech s.r.o. — česká firma s jedinečným
            elektrotechnickým know-how. Ukázková 123, Praha ·
            +420&nbsp;777&nbsp;111&nbsp;222 · info@example.cz
          </p>
        </div>
      </section>
    </main>
  );
}
