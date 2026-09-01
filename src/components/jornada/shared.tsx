import { useEffect, useState, type ReactNode } from "react";

import logoAsset from "@/assets/logo-5min.png.asset.json";
import { BRAND, PERFECTPAY_CHECKOUT_URL, checkoutUrl, track } from "@/lib/jornada";

export const container = "mx-auto w-full max-w-[1140px] px-5 sm:px-8";
export const heroAppImage = "/images/app-celular-hero-v4.webp";

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

/** Official "5 Minutos de Fé" logo, always at its natural aspect ratio (1200x381). */
export function BrandLogo({
  width = 240,
  className = "",
  align = "left",
  eager = false,
}: {
  width?: number;
  className?: string;
  align?: "left" | "center";
  eager?: boolean;
}) {
  return (
    <picture>
      <source srcSet="/images/logo-5min.webp" type="image/webp" />
      <img
        src={logoAsset.url}
        alt={BRAND}
        width={1200}
        height={381}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`${align === "center" ? "mx-auto" : ""} h-auto w-full ${className}`}
        style={{ maxWidth: width, aspectRatio: "1200 / 381" }}
      />
    </picture>
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
      onClick={(event) => handleCheckoutClick(event, location)}
      className={`cta-gold flex min-h-14 w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-6 py-4 text-center ${className}`}
    >
      <span className="text-sm font-bold tracking-[0.08em] sm:text-base">{children}</span>
      {subLabel ? (
        <span className="text-[11px] font-medium opacity-80 sm:text-xs">{subLabel}</span>
      ) : null}
    </a>
  );
}

/**
 * Fires checkout_click and gives the optional Meta Pixel a short window
 * (180ms) to send the event before navigating. UTMs stay in the href.
 */
export function handleCheckoutClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  location: string,
) {
  track("checkout_click", { location });
  if (!isPixelEnabled()) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

  const target = event.currentTarget.href;
  event.preventDefault();
  window.setTimeout(() => {
    window.location.href = target;
  }, 180);
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
