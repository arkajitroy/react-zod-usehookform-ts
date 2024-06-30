import { Controller, FieldValues, useFormContext } from "react-hook-form";

import { Slider, Typography } from "@mui/material";
import { RHFSliderProps } from "../../@types/RHFCustoms";

const RHFSlider = <T extends FieldValues>({ name, label }: RHFSliderProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Typography>{label}</Typography>
          <Slider valueLabelDisplay="auto" {...field} />
        </>
      )}
    />
  );
};

export default RHFSlider;
