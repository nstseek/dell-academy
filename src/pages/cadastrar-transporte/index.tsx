import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useCreateCidadesForm } from "./hooks/useCreateCidadesForm";
import { Cidades } from "./components/Cidades/Cidades";

const CadstrarTransporte = () => {
  const forms = useCreateCidadesForm();

  return (
    <>
      <Head>
        <title>Dell Academy - Cadastrar transporte</title>
      </Head>
      <main>
        <Grid container flexDirection="column" alignItems="center" rowGap={4}>
          <Typography variant="h6">Cadastrar Transporte</Typography>
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            width="100%"
          >
            <Grid height={300} width="100%">
              <Cidades {...forms} />
            </Grid>
            <Grid flex={1} width="100%">
              <Typography>Testing 2</Typography>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default CadstrarTransporte;
