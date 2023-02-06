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
  data: Country[];
  loading: boolean;
  region: string;
  theme: boolean;
  search: string;
  toggleTheme: () => void;
  changeRegion: (region: string) => void;
  searchCountry: (query: string) => void;
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
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState("");
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

  // initial data
  useEffect(() => {
    fetchInitialData();
  }, []);

  function changeRegion(region: string) {
    setRegion(region);
  }

  function searchCountry(query: string) {
    setSearch(query);
  }

  // filter by search
  useEffect(() => {
    async function fetchDataBySearch() {
      if (search !== "") {
        try {
          setLoading(true);
          const response = await api.get(`name/${search}`);
          if (response.status) {
            setData(response.data);
          }
        } finally {
          setLoading(false);
        }
      } else {
        fetchInitialData();
      }
    }
    fetchDataBySearch();
  }, [search]);

  // filter by region
  useEffect(() => {
    async function fetchDataByRegion() {
      if (region !== "all") {
        try {
          setLoading(true);
          const response = await api.get(`region/${region}`);
          if (response.status) {
            setData(response.data);
          }
          console.log(region);
        } finally {
          setLoading(false);
        }
      } else {
        fetchInitialData();
      }
    }
    fetchDataByRegion();
  }, [region]);

  return (
    <GlobalContext.Provider
      value={{
        toggleTheme,
        theme,
        data,
        changeRegion,
        loading,
        search,
        searchCountry,
        region,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
