import { FieldValues, Path } from "react-hook-form";
import { Option } from "./TInputFields";

export type TRHFAutocompleteProps<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
};

export type RHFToggleButtonProps<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
};

export type TRHFRadioGroupsProps<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
};

export type RHFCheckboxProps<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
};

export type RHFDateTimePickerProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};
