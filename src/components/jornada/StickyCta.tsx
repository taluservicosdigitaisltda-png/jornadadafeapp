import { useEffect, useState } from "react";

import { CheckoutButton } from "./shared";

/** Discreet mobile-only purchase bar, shown after the visitor starts scrolling. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom = y + window.innerHeight > doc.scrollHeight - 900;
      setVisible(y > 900 && !nearBottom);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div
        className="rounded-2xl border p-2"
        style={{
          borderColor: "oklch(0.76 0.106 79 / 35%)",
          background: "var(--gradient-brown)",
          boxShadow: "var(--shadow-deep)",
        }}
      >
        <CheckoutButton
          location="sticky_mobile"
          subLabel="Pagamento único • 7 dias de garantia"
          className="min-h-12 py-3"
        >
          Acessar por R$19
        </CheckoutButton>
      </div>
    </div>
  );
}
