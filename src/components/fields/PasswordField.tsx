import { TextField } from "@mui/material";
import { Field } from "../../types/TemplateTypes";

interface PasswordFieldProps {
  field: Field;
  register: any;
  error: any;
}

export const PasswordField = ({
  field,
  register,
  error,
}: PasswordFieldProps) => {
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
