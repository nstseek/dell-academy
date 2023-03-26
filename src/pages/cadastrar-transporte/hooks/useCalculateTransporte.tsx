import { useGetFreightLoadedCost } from "@/api/Freight/useGetFreightLoadedCost";
import { useCreateObjetosForm } from "./useCreateObjetosForm";

export const useCalculateTransporte = ({
  objetosListForm,
}: {
  objetosListForm: ReturnType<typeof useCreateObjetosForm>["objetosListForm"];
}) => {
  const query = useGetFreightLoadedCost();

  const { mutate } = query;

  const submit = () => {
    const { objetos } = objetosListForm.getValues();

    // TODO: create the logic to integrate with BE
    // objetos[0].
  };

  return { ...query, submit };
};
