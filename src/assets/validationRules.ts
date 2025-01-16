import * as yup from "yup";
import { Field } from "../types/TemplateTypes";

export const generateValidationSchema = (fields: Field[]) => {
  const shape: any = {};

  fields.forEach((field) => {
    let fieldValidation = yup.string();

    if (field.type === "number") {
      fieldValidation = yup.number();
    }

    if (field.validation?.required) {
      fieldValidation = fieldValidation.required(`${field.label} is required`);
    }

    if (field.validation?.minLength) {
      fieldValidation = fieldValidation.min(
        field.validation.minLength,
        `${field.label} must be at least ${field.validation.minLength} characters`
      );
    }

    if (field.validation?.maxLength) {
      fieldValidation = fieldValidation.max(
        field.validation.maxLength,
        `${field.label} must be less than ${field.validation.maxLength} characters`
      );
    }

    if (field.validation?.pattern) {
      fieldValidation = fieldValidation.matches(
        field.validation.pattern,
        `${field.label} is not valid`
      );
    }

    if (field.validation?.min) {
      fieldValidation = fieldValidation.min(
        field.validation.min,
        `${field.label} must be greater than or equal to ${field.validation.min}`
      );
    }

    if (field.validation?.max) {
      fieldValidation = fieldValidation.max(
        field.validation.max,
        `${field.label} must be less than or equal to ${field.validation.max}`
      );
    }

    shape[field.name] = fieldValidation;
  });

  return yup.object().shape(shape);
};
