import { Cidades } from "@/bff/controllers/DNIT";
import { Options } from "@/bff/controllers/Freight";

type CidadesArray = Awaited<ReturnType<typeof Cidades["GET"]>>;

type FreightOptionsArray = Awaited<ReturnType<typeof Options["GET"]>>;

export const getCidadeOptions = (cidadesArray?: CidadesArray) => {
  return cidadesArray
    ? cidadesArray.cidades.map((cidade, index) => ({
        label: cidade,
        id: index.toString(),
      }))
    : [];
};

export const getFreightOptions = (
  freightOptionsArray?: FreightOptionsArray
) => {
  return freightOptionsArray
    ? freightOptionsArray.freightOptions.map((freightOption) => ({
        label: freightOption.title + ` (${freightOption.capacity} ton)`,
        id: freightOption.id.toString(),
      }))
    : [];
};
