import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RootState } from "../store/store";
import { Alert, Snackbar, Typography } from "@mui/material";
import { SubmitButton } from "./SubmitButton";
import { SingleField } from "./SingleField";
import { RepeatableField } from "./RepeatableField";
import { postForm } from "../service/formHttpService";
import { useAppSelector } from "../store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateValidationSchema } from "../assets/validationRules";

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

  const onSubmit = async (data: any) => {
    try {
      await postForm(data);
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

      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleCloseAlert} variant="filled" severity="success">
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
