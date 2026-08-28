import { useEffect, useState, type ReactNode } from "react";

import { PERFECTPAY_CHECKOUT_URL, checkoutUrl, track } from "@/lib/jornada";

export const container = "mx-auto w-full max-w-[1140px] px-5 sm:px-8";

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ConfirmBadge({ size = "sm" }: { size?: "sm" | "md" }) {
  const box = size === "md" ? "h-9 w-9" : "h-6 w-6";
  return (
    <span className={`${box} grid shrink-0 place-items-center rounded-full text-ink`} style={{ backgroundColor: "var(--confirm)", boxShadow: "0 0 0 4px oklch(0.83 0.129 160 / 14%)" }} aria-hidden="true">
      <CheckIcon className={size === "md" ? "h-5 w-5" : "h-3.5 w-3.5"} />
    </span>
  );
}

export function BrandLogo({ width = 240, className = "", eager: _eager = false }: { width?: number; className?: string; eager?: boolean }) {
  return (
    <div role="img" aria-label="Pausa de Fé — seu momento diário com Deus" className={`inline-flex items-center gap-3 text-left ${className}`} style={{ width, maxWidth: "100%" }}>
      <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 bg-gold/10" aria-hidden="true">
        <span className="absolute h-6 w-px bg-gold-light" />
        <span className="absolute mt-[-5px] h-px w-4 bg-gold-light" />
        <span className="absolute inset-1 rounded-full border border-gold/20" />
      </span>
      <span className="min-w-0">
        <span className="block whitespace-nowrap font-display text-[1.55rem] leading-none text-gold-light">Pausa de Fé</span>
        <span className="mt-1 block whitespace-nowrap text-[0.55rem] font-semibold tracking-[0.2em] text-sand uppercase">Seu momento diário com Deus</span>
      </span>
    </div>
  );
}

export function CheckoutButton({ children, subLabel, location, className = "" }: { children: ReactNode; subLabel?: string; location: string; className?: string }) {
  const [href, setHref] = useState(PERFECTPAY_CHECKOUT_URL);
  useEffect(() => setHref(checkoutUrl()), []);

  return (
    <a href={href} onClick={() => track("InitiateCheckout", { location })} className={`cta-gold flex min-h-14 w-full flex-col items-center justify-center gap-0.5 rounded-2xl px-6 py-4 text-center ${className}`}>
      <span className="text-sm font-bold tracking-[0.08em] sm:text-base">{children}</span>
      {subLabel ? <span className="text-[11px] font-medium opacity-80 sm:text-xs">{subLabel}</span> : null}
    </a>
  );
}

export function AppMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[430px] ${className}`} role="img" aria-label="Tela do aplicativo Pausa de Fé com uma oração guiada de cinco minutos">
      <div className="absolute -inset-6 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[38px] border border-gold/40 bg-ink p-3 shadow-2xl">
        <div className="rounded-[29px] border border-gold/15 bg-espresso px-5 pb-6 pt-4">
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-sand/20" aria-hidden="true" />
          <BrandLogo width={180} />
          <p className="mt-7 text-xs tracking-[0.14em] text-gold uppercase">Sua pausa de hoje</p>
          <h3 className="mt-2 text-2xl leading-tight text-ivory">O que seu coração precisa agora?</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Paz", "Direção", "Esperança", "Gratidão", "Força"].map((item, index) => (
              <span key={item} className={`rounded-full border px-3 py-2 text-xs ${index === 0 ? "border-gold bg-gold/15 text-gold-light" : "border-gold/20 text-sand"}`}>{item}</span>
            ))}
          </div>
          <div className="card-premium mt-6 rounded-[22px] p-5">
            <p className="text-[0.65rem] tracking-[0.16em] text-gold uppercase">Paz • 5 minutos</p>
            <p className="mt-2 font-display text-xl text-gold-light">Pausa para acalmar o coração</p>
            <p className="mt-2 text-xs leading-relaxed text-sand">Uma oração guiada para respirar, silenciar e permanecer na presença de Deus.</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-ink" aria-hidden="true">▶</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand/15"><span className="block h-full w-2/5 rounded-full bg-gold" /></span>
              <span className="text-xs text-sand">02:01</span>
            </div>
          </div>
          <p className="mt-5 text-center text-xs text-sand/80">Cinco minutos. Sem pressa. Sem cobrança.</p>
        </div>
      </div>
    </div>
  );
}
