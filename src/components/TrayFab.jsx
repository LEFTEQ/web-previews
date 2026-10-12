import { useInquiry } from "../inquiry.jsx";
import DigitCounter from "./DigitCounter.jsx";

export default function TrayFab() {
  const { ids } = useInquiry();
  const n = ids.length;
  return (
    <a href="#poptavka" className="tray-fab" aria-label={`Poptávkový vozík, naloženo ${n}`}>
      <span className="tray-fab-label">Poptávka</span>
      <span className="tray-fab-count">
        <DigitCounter value={n} />
      </span>
    </a>
  );
}
