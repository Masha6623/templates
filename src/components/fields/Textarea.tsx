import { TextField } from "@mui/material";
import { Field } from "../../types/TemplateTypes";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextareaProps {
  field: Field;
  register: any;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
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
