import { Typography } from "@mui/material";
import { Field, FieldType } from "../types/TemplateTypes";
import { Textarea } from "./fields/Textarea";
import { SelectField } from "./fields/SelectField";
import { MultiSelectField } from "./fields/MultiselectField";
import { CheckBox } from "./fields/Checkbox";
import { RadioField } from "./fields/RadioField";
import { FieldErrors } from "react-hook-form";
import { EmailField } from "./fi/EmailField";
import { NumberField } from "./fi/NumberField";
import { DateField } from "./fi/DateFIeld";
import { PasswordField } from "./fi/PasswordField";
import { TimeField } from "./fi/TimeField";
import { TextInputField } from "./fi/TextInputField";

interface SingleFieldProps {
  field: Field;
  register: any;
  control: any;
  setValue: (name: string, value: any) => void;
  errors: FieldErrors;
}

export const SingleField = ({
  field,
  register,
  control,
  setValue,
  errors,
}: SingleFieldProps) => {
  const error = errors[field.name];

  switch (field.type) {
    case FieldType.Text:
      return <TextInputField field={field} register={register} error={error} />;
    case FieldType.Email:
      return <EmailField field={field} register={register} error={error} />;
    case FieldType.Number:
      return <NumberField field={field} register={register} error={error} />;
    case FieldType.Date:
      return <DateField field={field} register={register} error={error} />;
    case FieldType.Password:
      return <PasswordField field={field} register={register} error={error} />;
    case FieldType.Time:
      return <TimeField field={field} register={register} error={error} />;

    case FieldType.Textarea:
      return <Textarea field={field} register={register} error={error} />;

    case FieldType.Select:
      return (
        <SelectField
          field={field}
          setValue={setValue}
          control={control}
          error={error}
        />
      );

    case FieldType.MultiSelect:
      return (
        <MultiSelectField field={field} setValue={setValue} control={control} />
      );

    case FieldType.Checkbox:
      return <CheckBox field={field} register={register} />;

    case FieldType.Radio:
      return (
        <RadioField
          field={field}
          control={control}
          setValue={setValue}
          error={error}
        />
      );

    default:
      return (
        <Typography color="error">
          Unsupported field type: {field.type}
        </Typography>
      );
  }
};
