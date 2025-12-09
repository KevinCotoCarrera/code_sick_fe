"use client";

import { createContext, useContext, ReactNode } from "react";
import { ThemeConfig, lightTheme } from "./config";

const ThemeContext = createContext<ThemeConfig>(lightTheme);

export function useTheme() {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  theme?: ThemeConfig;
  children: ReactNode;
}

export function ThemeProvider({
  theme = lightTheme,
  children,
}: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
