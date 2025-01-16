import { TextField } from "@mui/material";
import { Field } from "../../types/TemplateTypes";

interface EmailFieldProps {
  field: Field;
  register: any;
  error: any;
}

export const EmailField = ({ field, register, error }: EmailFieldProps) => {
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
