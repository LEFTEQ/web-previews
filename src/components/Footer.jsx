import { CONTACT, NAV } from "../data.js";
import { MailIcon, PhoneIcon } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer id="kontakt" className="site-footer" aria-labelledby="kontakt-title">
      <div className="wrap footer-grid">
        <div>
          <p className="eyebrow eyebrow-light">Kontakt</p>
          <h2 id="kontakt-title" className="section-title">
            Zavolejte nebo napište.
          </h2>
          <ul className="contact-list">
            <li>
              <a href={CONTACT.mobile.href}>
                <PhoneIcon />
                <span>
                  <small>Mobil</small>
                  {CONTACT.mobile.label}
                </span>
              </a>
            </li>
            <li>
              <a href={CONTACT.landline.href}>
                <PhoneIcon />
                <span>
                  <small>Pevná linka</small>
                  {CONTACT.landline.label}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <MailIcon />
                <span>
                  <small>E-mail</small>
                  {CONTACT.email}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="yard">
          <div className="stamp" aria-hidden="true">
            <span>Sídlo</span>
            <strong>Olomouc</strong>
            <span>Horní lán 9</span>
          </div>
          <address>
            <strong>{CONTACT.company}</strong>
            <br />
            {CONTACT.address.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
          </address>
          <a className="map-link" href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer">
            Zobrazit adresu na Mapy.cz <span aria-hidden="true">↗</span>
            <span className="sr-only"> (otevře se v novém okně)</span>
          </a>
        </div>

        <nav aria-label="Navigace v patičce" className="footer-nav">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap footer-legal">
        <p>
          Značka <strong>GEMARE AGENCY</strong> · provozovatel {CONTACT.company}, Horní lán 9, 779 00 Olomouc.
        </p>
        <p>
          Neoficiální koncept redesignu webu, nejde o oficiální stránky firmy. Obrázky a video jsou ilustrační,
          vytvořené pomocí AI, a nezobrazují skutečné akce ani realizace firmy. Wordmark je typografický návrh,
          nikoli logo firmy.
        </p>
      </div>
    </footer>
  );
}
