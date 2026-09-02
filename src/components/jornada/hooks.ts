import { useEffect, useRef } from "react";

import { trackOnce } from "@/lib/jornada";

/** Fires a dataLayer event once per session when the element enters the viewport. */
export function useTrackInView<T extends HTMLElement>(event: string, threshold = 0.35) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackOnce(event);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [event, threshold]);

  return ref;
}

/** Fires scroll_50 once per session when half of the page has been seen. */
export function useScrollDepth() {
  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if ((window.scrollY / scrollable) * 100 >= 50) {
        trackOnce("scroll_50");
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
