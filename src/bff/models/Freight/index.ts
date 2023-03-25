import { getRawFreightOptions } from "@/bff/data-sources/Freight";
import { getDistancia } from "../DNIT";

export const getFreightOptions = () => ({
  freightOptions: getRawFreightOptions(),
});

export const getFreightOption = ({ id }: { id: number }) => ({
  freightOption: getRawFreightOptions().find(
    (freightOption) => freightOption.id === id
  ),
});

export const getFreightCost = async ({
  cidadeAId,
  cidadeBId,
  freightType,
}: {
  cidadeAId: number;
  cidadeBId: number;
  freightType: number;
}) => {
  const { cidadeA, cidadeB, distancia } = await getDistancia({
    cidadeA: cidadeAId,
    cidadeB: cidadeBId,
  });
  const { freightOption } = getFreightOption({ id: freightType });

  if (!freightOption) {
    throw new Error("Could not find the selected freight option");
  }

  return {
    cidadeA,
    cidadeB,
    freightOption,
    distancia,
    totalPrice: distancia * freightOption?.price,
  };
};
