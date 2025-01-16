import { TextField } from "@mui/material";
import { Field } from "../../types/TemplateTypes";

interface TextareaProps {
  field: Field;
  register: any;
  error: any;
}

export const Textarea = ({ field, register, error }: TextareaProps) => {
  return (
    <TextField
      {...register(field.name, field.validation)}
      label={field.label}
      placeholder={field.placeholder}
      multiline
      rows={4}
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error ? error.message : ""}
    />
  );
};
