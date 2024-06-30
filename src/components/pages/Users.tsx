import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { TSchema } from "../../@types/schemas/ZSchemas";
import {
  RHFAutoComplete,
  RHFDateTimePicker,
  RHFRadioGroup,
  RHFSlider,
  RHFSwitch,
  RHFToggleButtonGroup,
} from "..";
import { useGetGenders, useGetLanguages, useGetSkills, useGetStates } from "../../services/queries";
import RHFCheckbox from "../custom/RHFCheckbox";

const Users: React.FC = () => {
  const { register, formState, watch } = useFormContext<TSchema>();
  const { errors } = formState;

  // react-query-apis
  const statesQueryData = useGetStates();
  const languagesQueryData = useGetLanguages();
  const genderQueryData = useGetGenders();
  const skillsQueryData = useGetSkills();

  useEffect(() => {
    const subscribe = watch((value) => console.log("values : ", value));
    return () => subscribe.unsubscribe();
  }, [watch]);

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Username"
        error={!!errors.name}
        helperText={errors.name?.message}
        placeholder="Enter your username"
      />
      <TextField
        {...register("email")}
        label="Email Address"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutoComplete<TSchema> name="states" label="States" options={statesQueryData.data} />
      <RHFToggleButtonGroup<TSchema> name="languagesSpoken" options={languagesQueryData.data} />
      <RHFRadioGroup<TSchema> name="gender" label="Gender" options={genderQueryData.data} />
      <RHFCheckbox<TSchema> name="skills" label="Skills" options={skillsQueryData.data} />
      <RHFDateTimePicker<TSchema> name="formerEmploymentPeriod" label="Registration Date & Time" />
      <RHFSlider<TSchema> name="salaryRange" label="Salary Range" />
      <RHFSwitch<TSchema> name="isTeacher" label="Are you a Teacher" />
    </Stack>
  );
};

export default Users;
