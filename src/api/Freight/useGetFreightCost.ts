import { Cost } from "@/bff/controllers/Freight";
import { FreightForm } from "@/pages/consultar-trechos-x-modalidades/hooks/useCreateFreightForm";
import { useMutation, useQuery } from "react-query";
import { APIError } from "@/pages/api/utils/makeError";

type DataType = Awaited<ReturnType<typeof Cost["POST"]>>;

export const useGetFreightCost = () => {
  return useMutation<DataType, APIError, FreightForm>(
    `cost`,
    ({ cidadeA, cidadeB, freightType }) => {
      const body: Parameters<typeof Cost["POST"]>[0] = {
        cidadeAId: Number(cidadeA),
        cidadeBId: Number(cidadeB),
        freightType: Number(freightType),
      };

      return fetch("api/Freight/cost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());
    }
  );
};
