import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { RHFDateTimePickerProps } from "../../@types/RHFCustoms";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

const RHFDateRangePicker = <T extends FieldValues>({ name, label }: RHFDateTimePickerProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker {...restField} value={Array.isArray(value) ? value : [null, null]} />
        </LocalizationProvider>
      )}
    />
  );
};

export default RHFDateRangePicker;
