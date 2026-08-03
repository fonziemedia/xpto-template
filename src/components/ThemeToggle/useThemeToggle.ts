import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type ThemeMode = "light" | "dark";

function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const systemTheme = getSystemTheme();
  window.localStorage.setItem("theme", systemTheme);
  return systemTheme;
}

function applyThemeMode(mode: ThemeMode) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(mode);
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.style.colorScheme = mode;
}

export default function useThemeToggle() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initialMode = getInitialMode();
    setMode(initialMode);
    applyThemeMode(initialMode);
  }, []);

  function toggleMode() {
    setMode(currentMode => {
      const nextMode: ThemeMode = currentMode === "light" ? "dark" : "light";
      applyThemeMode(nextMode);
      window.localStorage.setItem("theme", nextMode);
      return nextMode;
    });
  }

  const label = t("header.themeToggle");

  return {
    mode,
    label,
    toggleMode
  };
}
