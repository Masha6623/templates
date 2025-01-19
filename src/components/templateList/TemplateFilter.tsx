import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  OutlinedInput,
  Box,
  Chip,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { TemplateType } from "../../types/TemplateTypes";

interface TemplateFilterProps {
  uniqueTypes: TemplateType[];
  filterTypes: TemplateType[];
  onTypeChange: (newTypes: TemplateType[]) => void;
}

export const TemplateFilter = ({
  uniqueTypes,
  filterTypes,
  onTypeChange,
}: TemplateFilterProps) => {
  const handleTypeChange = (event: SelectChangeEvent<TemplateType[]>) => {
    const value = event.target.value as TemplateType[];
    onTypeChange(value);
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel id="demo-multiple-chip-label">Filter</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={filterTypes}
        onChange={handleTypeChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {uniqueTypes.map((type) => (
          <MenuItem key={type} value={type}>
            <Checkbox checked={filterTypes.includes(type)} />
            <ListItemText primary={type} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
