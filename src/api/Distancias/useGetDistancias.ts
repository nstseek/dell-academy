import { Distancias } from "@/bff/controllers/DNIT";
import { useQuery } from "react-query";
import { APIError } from "@/pages/api/utils/makeError";

type DataType = Awaited<ReturnType<typeof Distancias["GET"]>>;

export const useGetDistancias = () => {
  return useQuery<DataType, APIError>("distancias", () =>
    fetch("/api/DNIT/distancias").then((res) => res.json())
  );
};