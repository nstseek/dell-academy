import fs from "fs";

export const getRawDistanciasFile = () => {
  const file = fs.readFileSync(
    "./src/bff/assets/data/DNIT-Distancias.csv",
    "utf8"
  );
  return file;
};
