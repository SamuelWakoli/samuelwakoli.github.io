import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "samuelwakoli-theme";
const DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

const ThemeContext = createContext(null);

const getSystemTheme = () => {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia(DARK_MEDIA_QUERY).matches ? "dark" : "light";
};

const resolveTheme = (theme) =>
  theme === "system" ? getSystemTheme() : theme ?? "dark";

const readStoredTheme = () => {
  if (typeof window === "undefined") return "dark";

  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : "dark";
  } catch {
    return "dark";
  }
};

const applyTheme = (theme) => {
  if (typeof document === "undefined") return "dark";

  const resolvedTheme = resolveTheme(theme);
  const root = document.documentElement;

  root.dataset.theme = resolvedTheme;
  root.dataset.themePreference = theme;
  root.style.colorScheme = resolvedTheme;

  return resolvedTheme;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") return "dark";

    const datasetTheme = document.documentElement.dataset.themePreference;
    return datasetTheme === "light" || datasetTheme === "dark"
      ? datasetTheme
      : "dark";
  });
  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (typeof document === "undefined") return "dark";

    const datasetTheme = document.documentElement.dataset.theme;
    return datasetTheme === "light" || datasetTheme === "dark"
      ? datasetTheme
      : resolveTheme(readStoredTheme());
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);

    const syncTheme = () => {
      const nextResolvedTheme = applyTheme(theme);
      setResolvedTheme(nextResolvedTheme);
    };

    syncTheme();

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage write failures.
    }

    if (theme !== "system") return undefined;

    mediaQuery.addEventListener("change", syncTheme);

    return () => mediaQuery.removeEventListener("change", syncTheme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [resolvedTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
