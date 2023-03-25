import {
  getFreightCost,
  getFreightObjects,
  getFreightOptions,
  getLoadedFreightCost,
} from "@/bff/models/Freight";

export const Options = {
  GET: () => getFreightOptions(),
};

export const Cost = {
  POST: (args: { cidadeAId: number; cidadeBId: number; freightType: number }) =>
    getFreightCost(args),
};

export const Objects = {
  GET: () => getFreightObjects(),
};

export const LoadedCost = {
  POST: (args: {
    cidadeAId: number;
    cidadeBId: number;
    objectIdsQuantity: { [key: number]: number };
  }) => getLoadedFreightCost(args),
};
