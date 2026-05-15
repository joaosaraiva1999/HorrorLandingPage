import { useState, useEffect, useRef } from "react";

export function useTypewriter(text, { speed = 100, startDelay = 500, enabled = true } = {}) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled || !text) {
      setDisplayText(text || "");
      setIsDone(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsDone(true);
      return;
    }

    setDisplayText("");
    setIsDone(false);
    setIsTyping(false);
    indexRef.current = 0;

    const startTimeout = setTimeout(() => {
      setIsTyping(true);

      const interval = setInterval(() => {
        indexRef.current += 1;
        setDisplayText(text.slice(0, indexRef.current));

        if (indexRef.current >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          setIsDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, enabled]);

  return { displayText, isTyping, isDone };
}
