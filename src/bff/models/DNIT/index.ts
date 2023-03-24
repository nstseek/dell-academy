import { getRawDistanciasFile } from "@/bff/data-sources/DNIT";
import { parseCSV } from "@/utils/parseCSV";
import _ from "lodash";

export const getCidadesDistancias = async () => {
  const distanciasRawCSV = await getRawDistanciasFile();
  const [cidades, ...distancias] = parseCSV(distanciasRawCSV);
  return {
    cidades: cidades.map((cidade) => _.startCase(_.lowerCase(cidade))),
    distancias: distancias.map((distancia) =>
      distancia.map((valor) => Number(valor))
    ),
  };
};

export const getDistancia = async ({
  cidadeA,
  cidadeB,
}: {
  cidadeA: number;
  cidadeB: number;
}) => {
  const { cidades, distancias } = await getCidadesDistancias();

  return {
    cidadeA: { id: cidadeA, nome: cidades[cidadeA] },
    cidadeB: { id: cidadeB, nome: cidades[cidadeB] },
    distancia: distancias[cidadeA][cidadeB],
  };
};
