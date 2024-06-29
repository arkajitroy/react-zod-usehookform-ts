import { TSchema } from "../@types/schemas/ZSchemas";
import { Option } from "../@types/TInputFields";

export const formDefaultValues: TSchema = {
  variant: "create",
  email: "",
  name: "",
  states: [],
  languagesSpoken: [],
  gender: "",
  skills: [],
  registrationDateAndTime: new Date(),
  formerEmploymentPeriod: [new Date(), new Date()],
  salaryRange: [0, 2000],
  isTeacher: false,
};

export const defaultStateOptions: Array<Option> = [
  {
    id: "1",
    label: "New York",
  },
  {
    id: "2",
    label: "California",
  },
  {
    id: "3",
    label: "Texas",
  },
  {
    id: "4",
    label: "Chicago",
  },
];
