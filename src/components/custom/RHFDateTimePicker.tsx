import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { RHFDateTimePickerProps } from "../../@types/RHFCustoms";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const RHFDateTimePicker = <T extends FieldValues>({ name, label }: RHFDateTimePickerProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker label={label} {...field} />
        </LocalizationProvider>
      )}
    />
  );
};

export default RHFDateTimePicker;
