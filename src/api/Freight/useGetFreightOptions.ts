import { Options } from "@/bff/controllers/Freight";
import { APIError } from "@/pages/api/utils/makeError";
import { useQuery } from "react-query";

type DataType = Awaited<ReturnType<typeof Options["GET"]>>;

export const useGetFreightOptions = () => {
  return useQuery<DataType, APIError>("freightOptions", () =>
    fetch("/api/Freight/options").then((res) => res.json())
  );
};
