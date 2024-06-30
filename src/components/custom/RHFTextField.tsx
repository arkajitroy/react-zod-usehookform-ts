import { Controller, FieldValues, useFormContext } from "react-hook-form";

import { TextField } from "@mui/material";
import { RHFTextFieldProps } from "../../@types/RHFCustoms";

const RHFTextField = <T extends FieldValues>({ name, ...props }: RHFTextFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} {...props} error={!!error} helperText={error?.message} />
      )}
    />
  );
};

export default RHFTextField;
