import { ADDRESS, COMPANY, EMAIL, MAP_URL, NAV, PHONES } from '../data.js';
import { Eyebrow, MailIcon, PhoneIcon } from './Icons.jsx';
import { SoilEdge } from './SoilEdge.jsx';

export function Footer() {
  return (
    <footer
      id="kontakt"
      data-layer="contact"
      aria-labelledby="contact-title"
      className="on-dark relative bg-loam text-stake"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 30%, rgb(250 248 243 / 0.05) 0 3px, transparent 4px), radial-gradient(circle at 70% 60%, rgb(250 248 243 / 0.04) 0 5px, transparent 6px)',
        backgroundSize: '90px 70px, 140px 110px',
      }}
    >
      <SoilEdge variant={0} className="text-loam" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <Eyebrow depth="−3,0" name="Skalní podloží" dark />
        <h2 id="contact-title" className="mt-3 font-display text-[clamp(1.8rem,4.4vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
          Kontakt
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xl font-semibold">{COMPANY}</p>
            <address className="mt-2 not-italic text-stake/90">
              {ADDRESS[0]}
              <br />
              {ADDRESS[1]}
            </address>
            <ul className="mt-6 grid gap-2">
              {PHONES.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="inline-flex items-center gap-3 py-1 font-mono text-lg text-stake no-underline hover:underline">
                    <PhoneIcon /> {p.full}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 py-1 font-mono text-lg text-stake no-underline hover:underline">
                  <MailIcon /> {EMAIL}
                </a>
              </li>
            </ul>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark mt-6">
              Zobrazit adresu na Mapy.cz<span className="sr-only"> (otevře se v novém okně)</span>
            </a>
          </div>

          <nav aria-label="Odkazy v patičce">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-stake/75">Na stránce</p>
            <ul className="mt-3 grid gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-block py-1.5 text-stake underline decoration-clay underline-offset-4">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-dashed border-clay/70 pt-6 text-sm text-stake/80">
          <p>
            <strong className="text-stake">Neoficiální koncept redesignu.</strong> Tento web není oficiální stránkou firmy {COMPANY}. Služby a kontakty vycházejí ze zveřejněných stránek firmy. Obrázky označené jako ilustrační byly vytvořeny pomocí AI a nezobrazují skutečné realizace, stroje ani lidi firmy.
          </p>
        </div>
      </div>
    </footer>
  );
}
