import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { TSchema } from "../../@types/schemas/ZSchemas";
import { RHFAutoComplete } from "..";
import { useGetLanguages, useGetStates } from "../../services/queries";
import RHFToggleButtonGroup from "../custom/RHFToggleButtonGroup";

const Users: React.FC = () => {
  const { register, formState, watch } = useFormContext<TSchema>();
  const { errors } = formState;

  // react-query-apis
  const statesQueryData = useGetStates();
  const languagesQueryData = useGetLanguages();

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
    </Stack>
  );
};

export default Users;
