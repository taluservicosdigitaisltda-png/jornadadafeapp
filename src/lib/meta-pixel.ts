/**
 * Optional Meta Pixel layer.
 *
 * Nothing is loaded or sent unless VITE_META_PIXEL_ID is configured.
 * No ID is hardcoded here on purpose.
 */

const PIXEL_ID = (import.meta.env["VITE_META_PIXEL_ID"] as string | undefined)?.trim() ?? "";

type Fbq = ((...args: unknown[]) => void) & {
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
  callMethod?: (...args: unknown[]) => void;
};

type PixelWindow = Window & { fbq?: Fbq; _fbq?: Fbq };

export function isPixelEnabled(): boolean {
  return PIXEL_ID.length > 0;
}

/** Injects the Meta Pixel base code once and fires PageView. No-op without an ID. */
export function initMetaPixel() {
  if (typeof window === "undefined" || !isPixelEnabled()) return;

  const w = window as PixelWindow;
  if (w.fbq) {
    w.fbq("track", "PageView");
    return;
  }

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else (fbq.queue as unknown[]).push(args);
  } as Fbq;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  w.fbq = fbq;
  w._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", PIXEL_ID);
  fbq("track", "PageView");
}

/** Sends a standard or custom Meta event. No-op without an ID. */
export function pixelTrack(
  event: string,
  payload: Record<string, unknown> = {},
  custom = false,
) {
  if (typeof window === "undefined" || !isPixelEnabled()) return;
  const w = window as PixelWindow;
  try {
    w.fbq?.(custom ? "trackCustom" : "track", event, payload);
  } catch {
    /* ignore */
  }
}
