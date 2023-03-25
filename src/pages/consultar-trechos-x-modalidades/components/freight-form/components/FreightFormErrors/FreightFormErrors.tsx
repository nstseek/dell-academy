import { Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FreightForm as FreightFormType } from "../../../../hooks/useCreateFreightForm";

export const FreightFormErrors: React.FC = () => {
  const form = useFormContext<FreightFormType>();

  const { errors } = form.formState;

  console.log(errors);

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  return !!Object.values(form.formState.errors).length ? (
    <Alert severity="error">
      <>{Object.values(form.formState.errors)[0]?.message}</>
    </Alert>
  ) : null;
};
