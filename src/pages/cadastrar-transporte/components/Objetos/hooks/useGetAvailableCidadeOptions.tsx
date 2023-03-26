import { CidadesListForm } from "@/pages/cadastrar-transporte/hooks/useCreateCidadesForm";
import { AutocompleteOption } from "@/utils/types";
import { Control, useWatch } from "react-hook-form";

export const useGetAvailableCidadeOptions = ({
  cidadesOptions,
  cidadesListFormControl,
}: {
  cidadesOptions: AutocompleteOption[];
  cidadesListFormControl: Control<CidadesListForm>;
}) => {
  const cidadesList = useWatch({
    control: cidadesListFormControl,
    name: "cidades",
  });

  const cidadesListIds = cidadesList.map(
    (cidadeListItem) => cidadeListItem.value
  );

  return cidadesOptions.filter((cidadeOption) =>
    cidadesListIds.find((cidadeListId) => cidadeListId === cidadeOption.id)
  );
};
