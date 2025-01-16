import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  Radio,
  FormHelperText,
} from "@mui/material";
import { Field } from "../../types/TemplateTypes";
import { Controller } from "react-hook-form";

interface RadioFieldProps {
  field: Field;
  control: any;
  setValue: (name: string, value: any) => void;
  error: any;
}

export const RadioField = ({
  field,
  setValue,
  control,
  error,
}: RadioFieldProps) => {
  return (
    <FormControl margin="normal">
      <Typography variant="h6">{field.label}</Typography>
      <Controller
        control={control}
        name={field.name}
        defaultValue=""
        render={({ field: controllerField }) => (
          <RadioGroup
            {...controllerField}
            onChange={(e) => setValue(field.name, e.target.value)}
            value={controllerField.value || ""}
          >
            {field.options?.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        )}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
