import fs from "fs";

export const getRawDistanciasFile = async () => {
  const file = await fs.readFileSync(
    "./src/bff/assets/data/DNIT-Distancias.csv",
    "utf8"
  );
  return file;
};
