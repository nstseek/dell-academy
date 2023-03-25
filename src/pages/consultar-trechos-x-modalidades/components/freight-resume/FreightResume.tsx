import { useGetFreightCost } from "@/api/Freight/useGetFreightCost";
import { Alert, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "../../styles";

type Props = Pick<
  ReturnType<typeof useGetFreightCost>,
  "isLoading" | "data" | "error"
>;

export const FreightResume: React.FC<Props> = ({ data, isLoading, error }) => {
  return (
    <Wrapper>
      <>
        {isLoading && <CircularProgress />}
        {!isLoading && error && <Alert severity="error">{error.message}</Alert>}
        {!data && !error && !isLoading && (
          <Typography variant="h6">
            Escolha os parametros e calcule ao lado, os resultados aparecerão
            aqui
          </Typography>
        )}
        {data && !error && !isLoading && (
          <Typography>Tem dados aqui</Typography>
        )}
      </>
    </Wrapper>
  );
};
