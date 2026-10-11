import { ADDRESS_CITY, ADDRESS_STREET, COMPANY, EMAIL, MAP_URL, PHONES } from "../data";
import { LearnChevron, MailIcon, PhoneIcon } from "./Icons";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-titan">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ocel">Kontakt</p>
          <h2 id="kontakt-title" className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            {COMPANY}
          </h2>
          <address className="mt-5 not-italic text-lg leading-relaxed">
            {ADDRESS_STREET}
            <br />
            {ADDRESS_CITY}
          </address>
          <a href={MAP_URL} className="t-learn mt-4 inline-flex min-h-11 items-center gap-1 font-display font-bold text-cihla" rel="noopener">
            Otevřít adresu v Mapy.cz <LearnChevron />
          </a>
        </div>
        <dl className="grid gap-0 lg:col-span-7">
          {PHONES.map((p, i) => (
            <div key={p.href} className="seam-row grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:items-center">
              <dt className="font-mono text-xs uppercase tracking-wider text-ocel">Mobil {i + 1}</dt>
              <dd>
                <a href={p.href} className="inline-flex min-h-11 items-center gap-2 font-display text-2xl font-bold hover:text-cihla">
                  <PhoneIcon /> <span className="whitespace-nowrap">{p.label}</span>
                </a>
              </dd>
            </div>
          ))}
          <div className="seam-row grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:items-center">
            <dt className="font-mono text-xs uppercase tracking-wider text-ocel">E-mail</dt>
            <dd>
              <a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center gap-2 font-display text-xl font-bold break-all hover:text-cihla sm:text-2xl">
                <MailIcon /> {EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="on-dark bg-antracit text-titan">
      <div className="falc falc--seam falc--dark" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">ŠICHNÁREK</p>
          <p className="mt-1 font-mono text-xs text-titan/70">klempířství · Ostrava</p>
          <p className="mt-4 text-sm leading-relaxed">
            {COMPANY}
            <br />
            {ADDRESS_STREET}
            <br />
            {ADDRESS_CITY}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-titan/70">Kontakt</p>
          <ul className="mt-3 grid gap-2">
            {PHONES.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="u-link whitespace-nowrap">
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="u-link break-all">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-titan/70">Nabídka</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><a className="u-link" href="#krytiny">Střešní krytiny a montáž</a></li>
            <li><a className="u-link" href="#krovy">Krovy</a></li>
            <li><a className="u-link" href="#okna">Střešní okna</a></li>
            <li><a className="u-link" href="#okapy">Okapové systémy a příslušenství</a></li>
            <li><a className="u-link" href="#konzultace">Konzultace a nacenění</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-titan/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs leading-relaxed text-titan/75 sm:px-6">
          Neoficiální koncept redesignu webu — nejde o oficiální stránky firmy {COMPANY}. Obrázky označené jako
          ilustrační byly vytvořeny pomocí AI a nezobrazují realizace firmy. Barevný náhled je pouze schematická
          ilustrace.
        </p>
      </div>
    </footer>
  );
}
