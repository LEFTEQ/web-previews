import { useEffect, useRef, useState } from "react";

// Number pop-in (transitions.dev 02): při změně hodnoty se skupina
// znovu připojí (key) a s třídou .is-animating přehraje vstup číslic.
export default function DigitCounter({ value, className = "" }) {
  const str = String(value).padStart(2, "0");
  const first = useRef(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setAnimate(true);
  }, [str]);

  const chars = str.split("");
  return (
    <span key={str} className={`t-digit-group ${animate ? "is-animating" : ""} ${className}`} aria-hidden="true">
      {chars.map((ch, i) => (
        <span key={i} className="t-digit" data-stagger={i === chars.length - 1 && chars.length > 1 ? "1" : undefined}>
          {ch}
        </span>
      ))}
    </span>
  );
}
