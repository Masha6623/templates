import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Field } from "../../types/TemplateTypes";
import { Controller } from "react-hook-form";

interface MultiSelectFieldProps {
  field: Field;
  setValue: (name: string, value: any) => void;
  control: any;
}

export const MultiSelectField = ({
  field,
  setValue,
  control,
}: MultiSelectFieldProps) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{field.label}</InputLabel>
      <Controller
        control={control}
        name={field.name}
        defaultValue={[]}
        render={({ field: controllerField }) => (
          <Select
            {...controllerField}
            multiple
            value={
              Array.isArray(controllerField.value) ? controllerField.value : []
            }
            onChange={(e) => setValue(field.name, e.target.value)}
            renderValue={(selected) =>
              Array.isArray(selected) ? selected.join(", ") : ""
            }
          >
            {field.options?.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox
                  checked={
                    Array.isArray(controllerField.value) &&
                    controllerField.value.includes(option)
                  }
                />
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
