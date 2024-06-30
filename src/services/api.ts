import axios from "axios";
import { Option } from "../@types/TInputFields";
import { LOCAL_SERVER_API_ENDPOINT } from "../config/config";
import { TSchema } from "../@types/schemas/ZSchemas";

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

// ============= ADD / POST / PATCH / DELETE ===================

export const addNewUserAPI = async (_payloadData: TSchema) => {
  await axios.post(`${LOCAL_SERVER_API_ENDPOINT}/users`, _payloadData);
};
