export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckMark() {
  // Délka cesty ≈ 29,75 → stroke-dasharray 31 (viz styles.css)
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M14 25 L21 32 L34 17" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
