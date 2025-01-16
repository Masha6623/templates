import { Field } from "../../types/TemplateTypes";
import { TextField } from "@mui/material";

interface TextInputFieldProps {
  field: Field;
  register: any;
  error: any;
}

export const TextInputField = ({
  field,
  register,
  error,
}: TextInputFieldProps) => {
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
