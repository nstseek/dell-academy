import { Options } from "@/bff/controllers/Freight";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(await Options.GET());
}
