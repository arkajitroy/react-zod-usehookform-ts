import { FieldValues, Path } from "react-hook-form";
import { Option } from "./TInputFields";

export type TRHFAutocompleteProps<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
};
