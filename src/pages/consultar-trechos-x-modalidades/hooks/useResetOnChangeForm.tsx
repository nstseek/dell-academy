import { useGetFreightCost } from "@/api/Freight/useGetFreightCost";
import { useEffect } from "react";
import { Control, useWatch } from "react-hook-form";
import { FreightForm } from "./useCreateFreightForm";

export const useResetOnChangeForm = ({
  control,
  reset,
  data,
  isLoading,
  error,
}: {
  control: Control<FreightForm>;
  reset: () => void;
} & Pick<
  ReturnType<typeof useGetFreightCost>,
  "isLoading" | "data" | "error"
>) => {
  const watched = useWatch({ control });

  useEffect(() => {
    if (data || isLoading || error) {
      reset();
    }
  }, [watched, reset]);
};
