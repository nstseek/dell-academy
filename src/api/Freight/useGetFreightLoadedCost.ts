import { LoadedCost } from "@/bff/controllers/Freight";
import { useMutation } from "react-query";
import { APIError } from "@/pages/api/utils/makeError";

type DataType = Awaited<ReturnType<typeof LoadedCost["POST"]>>;

type BodyType = Parameters<typeof LoadedCost["POST"]>[0];

export const useGetFreightLoadedCost = () => {
  return useMutation<DataType, APIError, BodyType>(
    `loaded-cost`,
    ({ cidadeBId, cidadeAId, objectIdsQuantity }) => {
      const body: BodyType = {
        cidadeAId,
        cidadeBId,
        objectIdsQuantity,
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
