/**
 * Optional Meta Pixel layer.
 * Nothing is loaded or sent unless VITE_META_PIXEL_ID is configured.
 */

// Project's Meta Pixel ID (not a secret). VITE_META_PIXEL_ID can override it.
const DEFAULT_PIXEL_ID = "138902774862355";
const PIXEL_ID = (import.meta.env["VITE_META_PIXEL_ID"] as string | undefined)?.trim() || DEFAULT_PIXEL_ID;

type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; push?: unknown };

export function metaPixelEnabled(): boolean {
  return Boolean(PIXEL_ID) && typeof window !== "undefined";
}

export function initMetaPixel() {
  if (!metaPixelEnabled()) return;
  const w = window as unknown as { fbq?: Fbq; _fbq?: Fbq };
  if (!w.fbq) {
    const fbq: Fbq = function (...args: unknown[]) {
      // eslint-disable-next-line prefer-spread
      (fbq.queue as unknown[]).push(args);
    } as Fbq;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.push = fbq;
    w.fbq = fbq;
    w._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  try {
    w.fbq?.("init", PIXEL_ID);
    w.fbq?.("track", "PageView");
  } catch {
    /* ignore */
  }
}

function fbTrack(kind: "track" | "trackCustom", event: string, payload?: Record<string, unknown>) {
  if (!metaPixelEnabled()) return;
  try {
    const w = window as unknown as { fbq?: Fbq };
    w.fbq?.(kind, event, payload);
  } catch {
    /* ignore */
  }
}

/** Maps internal dataLayer events to Meta standard events. */
export function metaFromDataLayer(event: string, payload: Record<string, unknown> = {}) {
  if (!metaPixelEnabled()) return;
  switch (event) {
    case "quiz_complete":
      fbTrack("track", "Lead", { content_name: "Mapa de Fé" });
      break;
    case "result_view":
      fbTrack("track", "ViewContent", { content_name: "Resultado do Mapa de Fé" });
      break;
    case "checkout_click":
      fbTrack("track", "InitiateCheckout", {
        value: 19,
        currency: "BRL",
        content_name: "5 Minutos de Fé",
        ...payload,
      });
      break;
    default:
      break;
  }
}
