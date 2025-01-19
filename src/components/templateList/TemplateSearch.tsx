import { Autocomplete, TextField } from "@mui/material";
import { Template } from "../../types/TemplateTypes";

interface TemplateSearchProps {
  templates: Template[];
  selectedTemplate: Template | null;
  inputValue: string;
  onSelect: (template: Template | null) => void;
  onInputChange: (newInputValue: string) => void;
}

export const TemplateSearch = ({
  templates,
  selectedTemplate,
  inputValue,
  onSelect,
  onInputChange,
}: TemplateSearchProps) => {
  return (
    <Autocomplete
      options={templates}
      getOptionLabel={(option) => option.templateName}
      value={selectedTemplate || null}
      onChange={(event, newValue) => onSelect(newValue)}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => onInputChange(newInputValue)}
      renderInput={(params) => (
        <TextField {...params} label="Template search" variant="outlined" />
      )}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
};
