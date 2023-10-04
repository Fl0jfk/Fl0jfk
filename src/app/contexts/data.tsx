import React, { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const res = await fetch("/data.json");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any | null>(null);
  const getData = useCallback(async () => {
    try {
      const res = await api.loadData();
      setData(res);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    }
  }, []);

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, [data, getData]);

  return (
    <DataContext.Provider value={{data,error}}>
      {children}
    </DataContext.Provider>
  );
};

type DataProviderProps = PropsWithChildren<{}>;

export const useData = () => useContext(DataContext);

export default DataContext;
