import { TextField } from "@mui/material";
import { Field } from "../../types/TemplateTypes";

interface TimeFieldProps {
  field: Field;
  register: any;
  error: any;
}

export const TimeField = ({ field, register, error }: TimeFieldProps) => {
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
