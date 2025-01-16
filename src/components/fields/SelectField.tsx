import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Field } from "../../types/TemplateTypes";
import { Controller } from "react-hook-form";

interface SelectFieldProps {
  field: Field;
  setValue: (name: string, value: any) => void;
  control: any;
  error: any;
}

export const SelectField = ({
  field,
  setValue,
  control,
  error,
}: SelectFieldProps) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{field.label}</InputLabel>
      <Controller
        control={control}
        name={field.name}
        render={({ field: controllerField }) => (
          <Select
            {...controllerField}
            value={controllerField.value || ""}
            onChange={(e) => setValue(field.name, e.target.value)}
          >
            {field.options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
