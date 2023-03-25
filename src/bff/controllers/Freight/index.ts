import { getFreightCost, getFreightOptions } from "@/bff/models/Freight";

export const Options = {
  GET: () => getFreightOptions(),
};

export const Cost = {
  POST: (args: { cidadeAId: number; cidadeBId: number; freightType: number }) =>
    getFreightCost(args),
};
