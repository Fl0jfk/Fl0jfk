import React, { useContext, useState, useEffect, createContext, PropsWithChildren } from "react";

type Data = {
  
};

const DataContext = createContext<Data | undefined>(undefined);

export function APIContextProvider({ children } : DataProviderProps) {
  const [contexts, setContexts] = useState<Data[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Échec de la requête HTTP");
        }
        const data: Data = await response.json();
        setContexts([data]);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
      }
    }
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{contexts}}>
      {children}
    </DataContext.Provider>
  );
};
type DataProviderProps = PropsWithChildren<{}>;

export function useAPI() {
  const context = useContext<Data | undefined>(DataContext);;
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}