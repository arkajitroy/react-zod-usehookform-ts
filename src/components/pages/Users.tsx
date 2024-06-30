import React, { Fragment, useEffect } from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Button, Stack } from "@mui/material";
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
  const { watch, control, unregister } = useFormContext<TSchema>();
  // field-array-functionality
  const { append, fields, remove, replace } = useFieldArray({
    control,
    name: "students",
  });

  // react-query-apis
  const statesQueryData = useGetStates();
  const languagesQueryData = useGetLanguages();
  const genderQueryData = useGetGenders();
  const skillsQueryData = useGetSkills();
  const isTeacherData = useWatch({ control, name: "isTeacher" });

  useEffect(() => {
    const subscribe = watch((value) => console.log("values : ", value));
    return () => subscribe.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (!isTeacherData) {
      replace([]);
      unregister("students");
    }
  }, [isTeacherData, replace, unregister]);

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
      {isTeacherData && (
        <Button onClick={() => append({ name: "" })} type="button">
          Add new student
        </Button>
      )}
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <RHFTextField<TSchema> name={`students.${index}.name`} label={field.name} />
          <Button type="button" variant="contained" color="error" onClick={() => remove(index)}>
            Remove
          </Button>
        </Fragment>
      ))}
    </Stack>
  );
};

export default Users;
