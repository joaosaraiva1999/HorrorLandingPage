import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [lightMode, setLightMode] = useState(() => {
    return localStorage.getItem("lightMode") === "active";
  });

  useEffect(() => {
    document.body.classList.add("theme-transition");
    const timeout = setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 350);

    document.body.classList.toggle("light-mode", lightMode);
    localStorage.setItem("lightMode", lightMode ? "active" : "inactive");

    return () => clearTimeout(timeout);
  }, [lightMode]);

  const toggle = useCallback(() => setLightMode((prev) => !prev), []);

  const value = useMemo(() => ({ lightMode, toggle }), [lightMode, toggle]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
