import { useState } from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Template, TemplateType } from "../../types/TemplateTypes";
import { selectTemplate } from "../../store/templatesSlice";
import { TemplateFilter } from "./TemplateFilter";
import { TemplateSearch } from "./TemplateSearch";

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

  const handleTypeChange = (newTypes: TemplateType[]) => {
    if (newTypes.includes(TemplateType.ALL)) {
      if (filterTypes.includes(TemplateType.ALL) && newTypes.length > 1) {
        setFilterTypes(newTypes.filter((type) => type !== TemplateType.ALL));
      } else {
        setFilterTypes([TemplateType.ALL]);
      }
    } else {
      setFilterTypes(newTypes);
    }
  };

  const filteredTemplates = templates.filter((template: Template) => {
    if (filterTypes.includes(TemplateType.ALL)) return true;
    return filterTypes.includes(template.type);
  });

  const handleSelect = (template: Template | null) => {
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
      <TemplateFilter
        uniqueTypes={uniqueTypes}
        filterTypes={filterTypes}
        onTypeChange={handleTypeChange}
      />
      <TemplateSearch
        templates={filteredTemplates}
        selectedTemplate={selectedTemplate}
        inputValue={inputValue}
        onSelect={handleSelect}
        onInputChange={(newInputValue) => setInputValue(newInputValue)}
      />
    </div>
  );
};
