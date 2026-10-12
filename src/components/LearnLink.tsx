import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
};

export default function LearnLink({ href, children, className = "", ariaLabel, external }: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`t-learn inline-flex items-center gap-1.5 underline-offset-4 hover:underline ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className="t-learn-chevron" aria-hidden="true">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path className="t-learn-arm t-learn-arm-top" d="M6 4L10 8" />
          <path className="t-learn-arm t-learn-arm-bot" d="M10 8L6 12" />
        </svg>
      </span>
    </a>
  );
}
