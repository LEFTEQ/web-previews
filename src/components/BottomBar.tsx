import { MAIN_PHONE } from "../data";
import { MailIcon, PhoneIcon } from "./Icons";

export function BottomBar() {
  return (
    <nav data-bottom-bar data-fixed-bar aria-label="Rychlý kontakt" className="bottom-bar md:hidden">
      <a href={`tel:${MAIN_PHONE.tel}`} className="bar-btn bar-btn--call" aria-label={`Zavolat ${MAIN_PHONE.display}`}>
        <PhoneIcon className="h-5 w-5" /> Zavolat
      </a>
      <a href="mailto:info@parket-pandomo.cz" className="bar-btn bar-btn--mail" aria-label="Napsat e-mail na info@parket-pandomo.cz">
        <MailIcon className="h-5 w-5" /> E-mail
      </a>
    </nav>
  );
}
