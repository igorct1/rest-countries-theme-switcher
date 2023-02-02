import { createContext, ReactNode, useState } from "react";

export const GlobalContext = createContext({} as GlobalContextProviderProps);

interface GlobalContextProviderProps {
  toggleTheme: () => void;
  theme: boolean;
}

interface GlobalContextProps {
  children: ReactNode;
  toggleTheme: () => void;
  theme: boolean;
}

export function GlobalStorage({
  children,
  toggleTheme,
  theme,
}: GlobalContextProps) {
  return (
    <GlobalContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </GlobalContext.Provider>
  );
}
