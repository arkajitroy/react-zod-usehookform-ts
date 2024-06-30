import { Controller, FieldValues, useFormContext } from "react-hook-form";

import { FormControlLabel, Switch } from "@mui/material";
import { RHFSwitchProps } from "../../@types/RHFCustoms";

const RHFSwitch = <T extends FieldValues>({ name, label }: RHFSwitchProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel control={<Switch {...field} checked={field.value} />} label={label} />
      )}
    />
  );
};

export default RHFSwitch;
