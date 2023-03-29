import { Distancias } from "@/bff/controllers/DNIT";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Distancias.GET());
}
