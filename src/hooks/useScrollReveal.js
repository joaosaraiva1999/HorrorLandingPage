import { useEffect, useRef } from "react";

export function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll(
      ".reveal, .reveal--left, .reveal--right, .reveal--scale"
    );

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add("reveal--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return containerRef;
}
