import { Distancia } from "@/bff/controllers/DNIT";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cidadeA = Number(req.query.cidadeA);
  const cidadeB = Number(req.query.cidadeB);

  if (isNaN(cidadeA)) {
    return res
      .status(400)
      .json({ error: "O query parameter cidadeA é inválido" });
  }
  if (isNaN(cidadeB)) {
    return res
      .status(400)
      .json({ error: "O query parameter cidadeB é inválido" });
  }

  res.status(200).json(await Distancia.GET({ cidadeA, cidadeB }));
}
