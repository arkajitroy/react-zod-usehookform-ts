import { FieldValues, Path } from "react-hook-form";
import { Option } from "./TInputFields";
import { TextFieldProps } from "@mui/material";

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

export type RHFDateRangePickerProps<T extends FieldValues> = {
  name: Path<T>;
};

export interface RHFSliderProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export interface RHFSwitchProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export type RHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label">;
