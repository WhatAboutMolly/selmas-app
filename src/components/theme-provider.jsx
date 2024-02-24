import React, { createContext, useContext, useEffect, useState } from "react";

// Define the theme options
const Theme = "dark" | "light" | "system";

// Props for the ThemeProvider component
const ThemeProviderProps = {
  children: React.ReactNode,
  defaultTheme: Theme,
  storageKey: "",
};

// State for the ThemeProvider
const ThemeProviderState = {
  theme: Theme,
  setTheme: (theme) => null,
};

const initialState = {
  theme: "system",
  setTheme: () => null,
};

// Create the context for the theme provider
const ThemeProviderContext = createContext(initialState);

// ThemeProvider component
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
