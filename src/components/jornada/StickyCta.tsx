import { useEffect, useState } from "react";

import { handleCheckoutClick } from "./shared";
import { PERFECTPAY_CHECKOUT_URL, PRICE, checkoutUrl } from "@/lib/jornada";

/**
 * Discreet mobile-only purchase bar.
 * Appears after the user scrolls past the first screens and hides again
 * near the end of the page so it never covers the footer or the FAQ tail.
 */
export function StickyCta() {
  const [href, setHref] = useState(PERFECTPAY_CHECKOUT_URL);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setHref(checkoutUrl());

    function onScroll() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const nearEnd = max > 0 && y > max - 720;
      setVisible(y > 900 && !nearEnd);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t px-4 pb-3 pt-3 transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{
        borderColor: "oklch(0.76 0.106 79 / 30%)",
        background: "var(--gradient-brown)",
        boxShadow: "var(--shadow-deep)",
      }}
      aria-hidden={!visible}
    >
      <a
        href={href}
        onClick={(event) => handleCheckoutClick(event, "sticky_mobile")}
        tabIndex={visible ? 0 : -1}
        className="cta-gold flex min-h-12 w-full flex-col items-center justify-center gap-0.5 rounded-xl px-5 py-2.5 text-center"
      >
        <span className="text-sm font-bold tracking-[0.06em]">
          Acessar por {PRICE.replace(",00", "")}
        </span>
        <span className="text-[11px] font-medium opacity-80">
          Pagamento único • 7 dias de garantia
        </span>
      </a>
    </div>
  );
}
