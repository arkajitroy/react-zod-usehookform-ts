import { useQuery } from "@tanstack/react-query";
import {
  getAllGendersAPI,
  getAllLanguagesAPI,
  getAllSkillsAPI,
  getAllStatesAPI,
  getAllUsersAPI,
  getUserAPI,
} from "./api";

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

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsersAPI(),
  });
};

export const useGetUser = (userId: string) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserAPI(userId),
  });
};
