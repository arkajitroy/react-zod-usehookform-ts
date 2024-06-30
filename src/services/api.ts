import axios from "axios";
import { Option } from "../@types/TInputFields";
import { LOCAL_SERVER_API_ENDPOINT } from "../config/config";
import { TSchema } from "../@types/schemas/ZSchemas";
import { ApiGet } from "../@types/TApi";
import { omit } from "lodash";
import { mapData } from "../constants/mapData";

// ======================== GET ========================

export const getAllStatesAPI = async () => {
  try {
    const response = await axios.get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/states`);
    return response.data;
  } catch (error) {
    console.error("Error fetching states:", error);
    throw error;
  }
};

export const getAllLanguagesAPI = async () => {
  try {
    const response = await axios.get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/languages`);
    return response.data;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
};

export const getAllGendersAPI = async () => {
  try {
    const response = await axios.get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/genders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching genders:", error);
    throw error;
  }
};

export const getAllSkillsAPI = async () => {
  try {
    const response = await axios.get<Array<Option>>(`${LOCAL_SERVER_API_ENDPOINT}/skills`);
    return response.data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};

export const getAllUsersAPI = async () => {
  try {
    const response = await axios.get<Array<ApiGet>>(`${LOCAL_SERVER_API_ENDPOINT}/users`);
    return response.data.map((user) => ({ id: user.id, label: user.name } satisfies Option));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserAPI = async (_userId: string): Promise<TSchema> => {
  try {
    const response = await axios.get<ApiGet>(`${LOCAL_SERVER_API_ENDPOINT}/users/${_userId}`);
    const {
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
    } = response.data;
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
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// ============= ADD / POST / PATCH / DELETE ===================

export const addNewUserAPI = async (_payloadData: TSchema) => {
  if (_payloadData.variant === "create") {
    try {
      await axios.post(
        `${LOCAL_SERVER_API_ENDPOINT}/users`,
        omit(mapData(_payloadData), "variant")
      );
    } catch (error) {
      console.error("Error adding new user:", error);
      throw error;
    }
  } else {
    throw new Error("Invalid payload: variant must be 'create' for adding a new user");
  }
};

export const editUserAPI = async (_payloadData: TSchema) => {
  if (_payloadData.variant === "edit" && _payloadData.id) {
    try {
      await axios.post(
        `${LOCAL_SERVER_API_ENDPOINT}/users/${_payloadData.id}`,
        omit(mapData(_payloadData), "variant")
      );
    } catch (error) {
      console.error("Error editing user:", error);
      throw error;
    }
  } else {
    throw new Error("Invalid payload: id is missing for edit operation");
  }
};
