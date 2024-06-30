import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Stack } from "@mui/material";
import { TSchema } from "../../@types/schemas/ZSchemas";
import {
  RHFAutoComplete,
  RHFCheckbox,
  RHFDateTimePicker,
  RHFRadioGroup,
  RHFSlider,
  RHFSwitch,
  RHFTextField,
  RHFToggleButtonGroup,
} from "..";
import { useGetGenders, useGetLanguages, useGetSkills, useGetStates } from "../../services/queries";

const Users: React.FC = () => {
  const { watch } = useFormContext<TSchema>();

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
      <RHFTextField<TSchema> name="name" label="Username" />
      <RHFTextField<TSchema> name="email" label="Email Address" />
      <RHFAutoComplete<TSchema> name="states" label="States" options={statesQueryData.data} />
      <RHFToggleButtonGroup<TSchema> name="languagesSpoken" options={languagesQueryData.data} />
      <RHFRadioGroup<TSchema> name="gender" label="Gender" options={genderQueryData.data} />
      <RHFCheckbox<TSchema> name="skills" label="Skills" options={skillsQueryData.data} />
      <RHFDateTimePicker<TSchema> name="formerEmploymentPeriod" label="Registration Date & Time" />
      <RHFSlider<TSchema> name="salaryRange" label="Salary Range" />
      <RHFSwitch<TSchema> name="isTeacher" label="Are you a Teacher" />
      {/* {isTeacher && (
        <Button onClick={() => append({ name: "" })} type="button">
          Add new student
        </Button>
      )} */}
    </Stack>
  );
};

export default Users;
