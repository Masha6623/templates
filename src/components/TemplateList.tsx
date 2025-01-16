import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  OutlinedInput,
  Box,
  Chip,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectTemplate } from "../store/templatesSlice";
import { Template, TemplateType } from "../types/TemplateTypes";

export const TemplateList = () => {
  const templates = useAppSelector((state) => state.templates.templates);
  const selectedTemplate = useAppSelector(
    (state) => state.templates.selectedTemplate
  );
  const dispatch = useAppDispatch();

  const [filterTypes, setFilterTypes] = useState<TemplateType[]>([
    TemplateType.ALL,
  ]);
  const [inputValue, setInputValue] = useState<string>("");

  const uniqueTypes = [
    TemplateType.ALL,
    ...new Set(templates.map((template) => template.type)),
  ];

  const handleTypeChange = (event: SelectChangeEvent<TemplateType[]>) => {
    const value = event.target.value as TemplateType[];

    if (value.includes(TemplateType.ALL)) {
      if (filterTypes.includes(TemplateType.ALL) && value.length > 1) {
        setFilterTypes(value.filter((type) => type !== TemplateType.ALL));
      } else {
        setFilterTypes([TemplateType.ALL]);
      }
    } else {
      setFilterTypes(value);
    }
  };

  const filteredTemplates = templates.filter((template) => {
    if (filterTypes.includes(TemplateType.ALL)) return true;
    return filterTypes.includes(template.type);
  });

  const handleSelect = (
    event: React.SyntheticEvent,
    template: Template | null
  ) => {
    if (template) {
      dispatch(selectTemplate(template.id));
    }
  };

  return (
    <div>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginBottom: 2, display: "flex", justifyContent: "center" }}
      >
        Select a Template
      </Typography>
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
      <Autocomplete
        options={filteredTemplates}
        getOptionLabel={(option) => option.templateName}
        value={selectedTemplate || null}
        onChange={handleSelect}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        renderInput={(params) => (
          <TextField {...params} label="Template search" variant="outlined" />
        )}
        isOptionEqualToValue={(option, value) => option.id === value.id}
      />
    </div>
  );
};
