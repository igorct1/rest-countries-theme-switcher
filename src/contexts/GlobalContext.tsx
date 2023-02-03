import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../libs/axios";

export const GlobalContext = createContext({} as GlobalContextProviderProps);

interface GlobalContextProviderProps {
  toggleTheme: () => void;
  theme: boolean;
  data: Country[];
}

interface GlobalContextProps {
  children: ReactNode;
  toggleTheme: () => void;
  theme: boolean;
}

export interface Country {
  name: string;
  population: number;
  capital: string;
  region: string;
  flags: {
    svg: string;
    png: string;
  };
  alpha2Code: string;
}

export function GlobalStorage({
  children,
  toggleTheme,
  theme,
}: GlobalContextProps) {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInitialData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("all");
      if (response.status) {
        setData(response.data);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <GlobalContext.Provider value={{ toggleTheme, theme, data }}>
      {children}
    </GlobalContext.Provider>
  );
}
