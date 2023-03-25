import { Cidades } from "@/bff/controllers/DNIT";
import { useQuery } from "react-query";
import { APIError } from "@/pages/api/utils/makeError";

type DataType = Awaited<ReturnType<typeof Cidades["GET"]>>;

export const useGetCidades = () => {
  return useQuery<DataType, APIError>("cidades", () =>
    fetch("/api/DNIT/cidades").then((res) => res.json())
  );
};
