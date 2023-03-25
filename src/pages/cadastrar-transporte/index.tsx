import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

const CadstrarTransporte = () => {
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
          >
            <Grid flex={1}>
              <Typography>Testing 1</Typography>
            </Grid>
            <Grid flex={1}>
              <Typography>Testing 2</Typography>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default CadstrarTransporte;
