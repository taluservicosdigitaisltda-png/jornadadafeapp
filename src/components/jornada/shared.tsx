import type { ReactNode } from "react";

import logoAsset from "@/assets/logo.png.asset.json";
import appAsset from "@/assets/app.png.asset.json";

export const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQFFI1?upsell=true";
export const logoUrl = logoAsset.url;
export const appUrl = appAsset.url;

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

export function CtaButton({
  children,
  subLabel,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  subLabel?: string;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`cta-gold flex w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-6 py-4 text-center ${className}`}
    >
      <span className="text-sm font-bold tracking-[0.08em] sm:text-base">{children}</span>
      {subLabel ? (
        <span className="text-[11px] font-medium opacity-80 sm:text-xs">{subLabel}</span>
      ) : null}
    </a>
  );
}

export function AppFrame({ floating = false }: { floating?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
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
          alt="Aplicativo Jornada da Fé aberto na tela de reflexão do dia, ao lado de uma Bíblia e um rosário"
          width={1240}
          height={1240}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-[20px]"
        />
      </div>

      {floating ? (
        <div
          className="card-premium mx-4 -mt-8 max-w-[calc(100%-2rem)] rounded-2xl px-5 py-4 sm:absolute sm:-bottom-6 sm:left-6 sm:right-auto sm:mx-0 sm:mt-0 sm:max-w-[260px]"
          style={{ boxShadow: "var(--shadow-gold)" }}
        >
          <p className="font-display text-base text-gold-light">Conteúdo sempre renovado</p>
          <p className="mt-1 text-sm text-sand">Novas reflexões todos os meses</p>
        </div>
      ) : null}
    </div>
  );
}
