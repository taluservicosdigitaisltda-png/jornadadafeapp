import { useEffect, useState, type ReactNode } from "react";

import { BRAND, PERFECTPAY_CHECKOUT_URL, checkoutUrl, track } from "@/lib/jornada";

export const container = "mx-auto w-full max-w-[1140px] px-5 sm:px-8";
export const heroAppImage = "/images/app-celular-hero-v3.webp";

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ConfirmBadge({ size = "sm" }: { size?: "sm" | "md" }) {
  const box = size === "md" ? "h-9 w-9" : "h-6 w-6";
  return (
    <span
      className={`${box} grid shrink-0 place-items-center rounded-full text-ink`}
      style={{
        backgroundColor: "var(--confirm)",
        boxShadow: "0 0 0 4px oklch(0.83 0.129 160 / 14%)",
      }}
      aria-hidden="true"
    >
      <CheckIcon className={size === "md" ? "h-5 w-5" : "h-3.5 w-3.5"} />
    </span>
  );
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 8"
      className={`h-2 w-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="4" x2="48" y2="4" stroke="var(--gold)" strokeWidth="1" opacity="0.7" />
      <path
        d="M60 1 L63 4 L60 7 L57 4 Z"
        fill="none"
        stroke="var(--gold-light)"
        strokeWidth="1"
      />
      <line x1="72" y1="4" x2="120" y2="4" stroke="var(--gold)" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

/** Typographic wordmark for 5 Minutos de Fé (premium placeholder until a logo file exists). */
export function BrandLogo({
  width = 240,
  className = "",
  align = "left",
}: {
  width?: number;
  className?: string;
  align?: "left" | "center";
  /** kept for API compatibility with previous image-based logo */
  eager?: boolean;
}) {
  const scale = width / 240;
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
      style={{ width, maxWidth: "100%" }}
      aria-label={BRAND}
      role="img"
    >
      <span
        className="block font-display leading-none text-gold-light"
        style={{ fontSize: `${2.6 * scale}rem`, letterSpacing: "0.02em" }}
      >
        5
      </span>
      <span
        className="mt-1 block font-display leading-tight text-ivory"
        style={{ fontSize: `${1.12 * scale}rem`, letterSpacing: "0.06em" }}
      >
        Minutos de Fé
      </span>
      <Ornament className="mt-2" />
    </div>
  );
}

/** CTA that opens the Perfect Pay checkout in the same tab, keeping UTMs. */
export function CheckoutButton({
  children,
  subLabel,
  location,
  className = "",
}: {
  children: ReactNode;
  subLabel?: string;
  location: string;
  className?: string;
}) {
  const [href, setHref] = useState(PERFECTPAY_CHECKOUT_URL);

  useEffect(() => {
    setHref(checkoutUrl());
  }, []);

  return (
    <a
      href={href}
      onClick={() => track("checkout_click", { location })}
      className={`cta-gold flex min-h-14 w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-6 py-4 text-center ${className}`}
    >
      <span className="text-sm font-bold tracking-[0.08em] sm:text-base">{children}</span>
      {subLabel ? (
        <span className="text-[11px] font-medium opacity-80 sm:text-xs">{subLabel}</span>
      ) : null}
    </a>
  );
}

export function AppMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[460px] ${className}`}>
      <div
        className="overflow-hidden rounded-[26px] border p-2"
        style={{
          borderColor: "oklch(0.76 0.106 79 / 40%)",
          background: "var(--gradient-brown)",
          boxShadow: "var(--shadow-deep)",
        }}
      >
        <img
          src={heroAppImage}
          alt={`Aplicativo ${BRAND} aberto em uma oração guiada no celular`}
          width={1024}
          height={1280}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-[20px]"
        />
      </div>
    </div>
  );
}
