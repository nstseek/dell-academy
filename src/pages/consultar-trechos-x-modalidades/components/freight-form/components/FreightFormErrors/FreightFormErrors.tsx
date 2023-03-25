import { Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FreightForm as FreightFormType } from "../../../../hooks/useCreateFreightForm";

export const FreightFormErrors: React.FC = () => {
  const form = useFormContext<FreightFormType>();

  const { errors } = form.formState;

  return !!Object.values(errors).length ? (
    <Alert severity="error">
      <>{Object.values(errors)[0]?.message}</>
    </Alert>
  ) : null;
};
