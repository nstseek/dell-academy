import { getCidadesDistancias, getDistancia } from "@/bff/models/DNIT";

export const Cidades = {
  GET: async () => {
    const { cidades } = await getCidadesDistancias();

    return { cidades };
  },
};

export const Distancias = {
  GET: async () => {
    const { distancias } = await getCidadesDistancias();

    return { distancias };
  },
};

export const CidadesDistancias = {
  GET: () => {
    return getCidadesDistancias();
  },
};

export const Distancia = {
  GET: ({ cidadeA, cidadeB }: { cidadeA: number; cidadeB: number }) => {
    return getDistancia({ cidadeA, cidadeB });
  },
};
