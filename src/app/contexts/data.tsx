import React, { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Profile = {
  firstname: string;
  lastname: string;
  profession: string;
  profilePhoto: string;
};

type Skill = {
  id: number;
  key: number;
  name: string;
  svg: string;
};

type Project = {
  id: number;
  key: number;
  name: string;
  category: string;
  img: string;
  description: string;
  techs: string;
};

type Mockup = {
  id: number;
  name: string;
  img: string;
};

type Data = {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  mockups: Mockup[];
  error: Error | null;
};

const initialData: Data = {
  profile: {
    firstname: "",
    lastname: "",
    profession: "",
    profilePhoto: ""
  },
  skills: [],
  projects: [],
  mockups: [],
  error: null
};

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData: Data = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataContext.Provider value={data || initialData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

