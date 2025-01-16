import { useFieldArray } from "react-hook-form";
import { TextField, Button, Typography, Box } from "@mui/material";

interface RepeatableFieldProps {
  name: string;
  label: string;
  control: any;
  register: any;
}

export const RepeatableField = ({
  name,
  label,
  control,
  register,
}: RepeatableFieldProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h6">{label}:</Typography>
      {fields.map((item, index) => (
        <Box key={item.id} sx={{ display: "flex", gap: 1, marginBottom: 1 }}>
          <TextField
            {...register(`${name}.${index}`)}
            label={`${label} ${index + 1}`}
            fullWidth
          />
          <Button
            variant="outlined"
            color="error"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </Box>
      ))}
      <Button variant="outlined" onClick={() => append("")}>
        Add {label}
      </Button>
    </Box>
  );
};
