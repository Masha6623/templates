import { TextField } from "@mui/material";
import { Field } from "../../types/TemplateTypes";

interface NumberFieldProps {
  field: Field;
  register: any;
  error: any;
}

export const NumberField = ({ field, register, error }: NumberFieldProps) => {
  return (
    <TextField
      {...register(field.name, field.validation)}
      label={field.label}
      type={field.type}
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error ? error.message : ""}
    />
  );
};
