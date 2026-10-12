import { EMAIL, MAIN_PHONE, NAV } from "../data";
import { Wordmark } from "./Header";

export function Footer() {
  return (
    <footer className="site-footer mt-6">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-3 lg:px-10">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed">
            panDOMO dekorativní podlahy a stěny, dřevěné podlahy, dveře a truhlářská výroba na míru. Showroom Praha 10.
          </p>
        </div>
        <nav aria-label="Patička">
          <p className="label">Stránka</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-link">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="label">Rychlý kontakt</p>
          <p className="mt-3">
            <a href={`tel:${MAIN_PHONE.tel}`} className="text-link font-medium">
              {MAIN_PHONE.display}
            </a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${EMAIL}`} className="text-link break-all">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-beton/15">
        <p className="mx-auto max-w-[1440px] px-5 py-5 font-mono text-[11px] leading-relaxed sm:px-8 lg:px-10">
          Neoficiální koncept redesignu webu firmy Parket&amp;pandomo s.r.o. — nejde o oficiální web. Všechny obrázky jsou
          ilustrační vizualizace vytvořené AI, nikoli realizace firmy. Wordmark je typografický návrh, ne logo firmy.
        </p>
      </div>
    </footer>
  );
}
