import { TextField } from "@mui/material";
import { Field } from "../../types/TemplateTypes";

interface DateFieldProps {
  field: Field;
  register: any;
  error: any;
}

export const DateField = ({ field, register, error }: DateFieldProps) => {
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
