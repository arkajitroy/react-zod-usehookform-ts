import { useQuery } from "@tanstack/react-query";
import { getAllGendersAPI, getAllLanguagesAPI, getAllSkillsAPI, getAllStatesAPI } from "./api";

export const useGetStates = () => {
  return useQuery({
    queryKey: ["states"],
    queryFn: () => getAllStatesAPI(),
  });
};

export const useGetLanguages = () => {
  return useQuery({
    queryKey: ["languages"],
    queryFn: () => getAllLanguagesAPI(),
  });
};

export const useGetGenders = () => {
  return useQuery({
    queryKey: ["genders"],
    queryFn: () => getAllGendersAPI(),
  });
};

export const useGetSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: () => getAllSkillsAPI(),
  });
};
