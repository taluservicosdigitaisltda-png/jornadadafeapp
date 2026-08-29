import { useEffect, useState, type ReactNode } from "react";

import logoAsset from "@/assets/logo.png.asset.json";
import appAsset from "@/assets/app.png.asset.json";
import { PERFECTPAY_CHECKOUT_URL, checkoutUrl, track } from "@/lib/jornada";

export const logoUrl = logoAsset.url;
export const appUrl = appAsset.url;
export const container = "mx-auto w-full max-w-[1140px] px-5 sm:px-8";

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

export function BrandLogo({
  width = 240,
  className = "",
  eager = false,
}: {
  width?: number;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={logoUrl}
      alt="Jornada da Fé"
      width={960}
      height={360}
      loading={eager ? "eager" : "lazy"}
      style={{ width, maxWidth: "100%" }}
      className={`h-auto ${className}`}
    />
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
          src={appUrl}
          alt="Aplicativo Jornada da Fé aberto na tela de uma oração narrada"
          width={1240}
          height={1240}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-[20px]"
        />
      </div>
    </div>
  );
}
