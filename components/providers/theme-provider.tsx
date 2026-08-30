"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const THEME_STORAGE_KEY = "sanjay-theme";

/**
 * Runs before first paint (injected into <head>) so the correct theme is on
 * <html> by the time anything renders — no flash of the wrong theme.
 * Kept as a string because it must be inlined, not hydrated.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

/** Subscribes to the `data-theme` attribute the init script writes on <html>. */
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The DOM is the source of truth — the pre-paint script sets it before React
  // runs. Reading it as external state keeps server and client in agreement
  // without mirroring it into state inside an effect.
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, () => "light" as Theme);

  const applyTheme = useCallback((next: Theme) => {
    const root = document.documentElement;
    // Only crossfade on a deliberate switch — never on initial load.
    root.setAttribute("data-theme-transition", "");
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage can be unavailable (private mode); the theme still applies */
    }
    window.setTimeout(() => root.removeAttribute("data-theme-transition"), 300);
  }, []);

  // Follow the OS only while the visitor has expressed no preference.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      } catch {
        return;
      }
      const next: Theme = event.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.style.colorScheme = next;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: applyTheme,
      toggleTheme: () => applyTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme, applyTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
