import { Checkbox, FormControlLabel } from "@mui/material";
import { Field } from "../../types/TemplateTypes";

interface CheckBoxProps {
  field: Field;
  register: any;
}

export const CheckBox = ({ field, register }: CheckBoxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox {...register(field.name)} />}
      label={field.label}
    />
  );
};
