import { useEffect } from "react";
import { useLocation } from "react-router";

export default function Scroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, try to scroll to that element
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // Small delay so the target route has time to render
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    // No hash, or hash target not found → scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}