import React, { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Profile = {
  firstname: string;
  lastname: string;
  profession: string;
  profilePhoto: string;
  memoji: string;
};

type Skill = {
  id: number;
  key: number;
  name: string;
  svg: string;
  level: number;
};

type Project = {
  id: number;
  key: number;
  name: string;
  category: string;
  img: string;
  shortDescription: string;
  description: string;
  techs: string;
  github: string;
  website: string;
  background: string;
  mockupSrc: string;
  mockupAlt: string;
};

type Mockup = {
  id: number;
  name: string;
  img: string;
};

type Experience = {

};

type Testimonial = {
  id: number;
  author: string;
  job: string;
  photoAuthor: string;
  testimonial: string;
};

type Other = {
  id: number;
  name: string;
  src: string;
}

type Data = {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  mockups: Mockup[];
  experiences: Experience[];
  testimonials: Testimonial[];
  others: Other[];
  error: Error | null;
};

const initialData: Data = {
  profile: {
    firstname: "",
    lastname: "",
    profession: "",
    profilePhoto: "",
    memoji:""
  },
  skills: [],
  projects: [],
  mockups: [],
  experiences: [],
  testimonials: [],
  others: [],
  error: null
};

const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("https://fl0jfk.s3.eu-west-3.amazonaws.com/data.json");
      console.log(response)
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

