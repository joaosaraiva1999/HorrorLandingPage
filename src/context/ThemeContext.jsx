import { createContext, useContext, useState, useEffect } from "react";

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

  const toggle = () => setLightMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ lightMode, toggle }}>
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
