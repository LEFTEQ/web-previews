/* "Falc" – profil stojaté drážky nebo vlny tašky jako oddělovač sekcí. Čistě dekorativní. */
export function FalcDivider({ variant = "seam" }: { variant?: "seam" | "wave" }) {
  return <div aria-hidden="true" className={`falc falc--${variant}`} />;
}
