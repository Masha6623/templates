import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RootState } from "../store/store";
import { Typography } from "@mui/material";
import { SubmitButton } from "./SubmitButton";
import { SingleField } from "./SingleField";
import { RepeatableField } from "./fields/RepeatableField";
import { formHttp } from "../service/formHttpService";
import { useAppSelector } from "../store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateValidationSchema } from "../assets/validationRules";
import { AlertSnackbar } from "./AlertSnackBar";

export const DynamicForm = () => {
  const selectedTemplate = useAppSelector(
    (state: RootState) => state.templates.selectedTemplate
  );
  const [openAlert, setOpenAlert] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      generateValidationSchema(selectedTemplate?.fields || [])
    ),
  });

  useEffect(() => {
    reset();
  }, [selectedTemplate, reset]);

  const form = formHttp();

  const onSubmit = async (data: any) => {
    try {
      await form.postForm(data);
      reset();
      setOpenAlert(true);
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  if (!selectedTemplate) {
    return (
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "20px" }}>
        No template selected
      </Typography>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {selectedTemplate.fields.map((field) =>
          field.repeatable ? (
            <RepeatableField
              key={field.name}
              name={field.name}
              label={field.label}
              control={control}
              register={register}
            />
          ) : (
            <SingleField
              key={field.name}
              field={field}
              register={register}
              control={control}
              setValue={setValue}
              errors={errors}
            />
          )
        )}
        <SubmitButton />
      </form>
      <AlertSnackbar open={openAlert} handleClose={handleCloseAlert} />
    </>
  );
};
