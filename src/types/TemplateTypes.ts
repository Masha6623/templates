export enum FieldType {
  Text = "text",
  Email = "email",
  Number = "number",
  Date = "date",
  Password = "password",
  Time = "time",
  Textarea = "textarea",
  Select = "select",
  MultiSelect = "multiselect",
  Checkbox = "checkbox",
  Radio = "radio",
}

export enum TemplateType {
  ALL = "All",
  Service1 = "Service 1",
  Service2 = "Service 2",
  Service3 = "Service 3",
}

export interface Field {
  name: string;
  type: FieldType;
  label: string;
  validation?: any;
  options?: string[];
  placeholder?: string;
  repeatable?: boolean;
}

export interface Template {
  id: number;
  templateName: string;
  type: TemplateType;
  fields: Field[];
}

export interface TemplatesState {
  templates: Template[];
  selectedTemplate: Template | null;
}
