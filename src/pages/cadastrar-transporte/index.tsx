import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useCreateCidadesForm } from "./hooks/useCreateCidadesForm";
import { Cidades } from "./components/Cidades/Cidades";
import { Objetos } from "./components/Objetos/Objetos";
import { useCreateObjetosForm } from "./hooks/useCreateObjetosForm";
import { useGetCidades } from "@/api/Cidades/useGetCidades";
import { CidadesObjetosContextProvider } from "./context/CidadesObjetosContext";
import { useGetFreightObjects } from "@/api/Freight/useGetFreightObjects";
import { Resume } from "@/common/components/Resume/Resume";
import { useCalculateTransporte } from "./hooks/useCalculateTransporte";
import { useResetResume } from "./hooks/useResetResume";
import { useSaveTransporte } from "./hooks/useSaveTransporte";

const CadstrarTransporte = () => {
  const cidadesForms = useCreateCidadesForm();
  const objetosForms = useCreateObjetosForm();

  const cidadesQuery = useGetCidades();
  const objetosQuery = useGetFreightObjects();

  const { submit, data, error, isLoading, reset } = useCalculateTransporte({
    cidadesListForm: cidadesForms.cidadesListForm,
    objetosListForm: objetosForms.objetosListForm,
  });

  const onCalculate = () => {
    submit();
  };

  useResetResume({
    cidadesListForm: cidadesForms.cidadesListForm,
    objetosListForm: objetosForms.objetosListForm,
    data,
    isLoading,
    error,
    reset,
  });

  useSaveTransporte(data);

  return (
    <>
      <Head>
        <title>Dell Academy - Cadastrar transporte</title>
      </Head>
      <main>
        <Grid container flexDirection="column" alignItems="center" rowGap={4}>
          <Typography variant="h5">Cadastrar Transporte</Typography>
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            width="100%"
          >
            <CidadesObjetosContextProvider
              contextValue={{ cidades: cidadesQuery, objetos: objetosQuery }}
            >
              <Grid
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Cidades
                </Typography>
                <Cidades {...cidadesForms} />
              </Grid>
              <Grid
                flex={1}
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Objetos
                </Typography>
                <Objetos
                  {...objetosForms}
                  cidadesListFormControl={cidadesForms.cidadesListForm.control}
                />
              </Grid>
              <Grid
                flex={1}
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Resumo
                </Typography>
                <Resume
                  onCalculate={onCalculate}
                  data={data}
                  isLoading={isLoading}
                  error={error}
                />
              </Grid>
            </CidadesObjetosContextProvider>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default CadstrarTransporte;
