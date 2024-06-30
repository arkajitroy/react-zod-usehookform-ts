import axios from "axios";
import { Option } from "../@types/TInputFields";
import { LOCAL_SERVER_API_ENDPOINT } from "../config/config";
import { TSchema } from "../@types/schemas/ZSchemas";
import { ApiGet } from "../@types/TApi";

// ======================== GET ========================

export const getAllStatesAPI = () => {
  return axios
    .get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/states`)
    .then((response) => response.data);
};

export const getAllLanguagesAPI = () => {
  return axios
    .get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/languages`)
    .then((response) => response.data);
};

export const getAllGendersAPI = () => {
  return axios
    .get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/genders`)
    .then((response) => response.data);
};

export const getAllSkillsAPI = () => {
  return axios
    .get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/skills`)
    .then((response) => response.data);
};

export const getAllUsersAPI = () => {
  return axios
    .get<Array<ApiGet>>(`${LOCAL_SERVER_API_ENDPOINT}/users`)
    .then((response) =>
      response.data.map((user) => ({ id: user.id, label: user.name } satisfies Option))
    );
};

export const getUserAPI = async (_userId: string): Promise<TSchema> => {
  const response = await axios.get<ApiGet>(`${LOCAL_SERVER_API_ENDPOINT}/users/${_userId}`);
  const {
    data: {
      id,
      name,
      email,
      formerEmploymentPeriod,
      gender,
      languagesSpoken,
      registrationDateAndTime,
      salaryRange,
      skills,
      states,
      students,
      isTeacher,
    },
  } = response;
  return {
    variant: "edit",
    id,
    name,
    email,
    formerEmploymentPeriod: [
      new Date(formerEmploymentPeriod[0]),
      new Date(formerEmploymentPeriod[1]),
    ],
    gender,
    languagesSpoken,
    registrationDateAndTime: new Date(registrationDateAndTime),
    salaryRange: [salaryRange[0], salaryRange[1]],
    skills,
    states,
    students,
    isTeacher,
  };
};

// ============= ADD / POST / PATCH / DELETE ===================

export const addNewUserAPI = async (_payloadData: TSchema) => {
  await axios.post(`${LOCAL_SERVER_API_ENDPOINT}/users`, _payloadData);
};
