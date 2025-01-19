import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Template, TemplatesState } from "../types/TemplateTypes";
import templatesData from "../data/templates.json";
import { SliceNames } from "../config/sliceNames";

const initialState: TemplatesState = {
  templates: templatesData as Template[],
  selectedTemplate: null,
};

const templatesSlice = createSlice({
  name: SliceNames.Templates.description as string,
  initialState,
  reducers: {
    selectTemplate: (state, action: PayloadAction<number>) => {
      state.selectedTemplate =
        state.templates.find((t) => t.id === action.payload) ?? null;
    },
  },
});

export const { selectTemplate } = templatesSlice.actions;
export default templatesSlice.reducer;
