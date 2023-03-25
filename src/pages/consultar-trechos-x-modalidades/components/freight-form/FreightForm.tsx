import { Alert, Autocomplete, Button, TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import CalculateIcon from "@mui/icons-material/Calculate";
import { FreightForm as FreightFormType } from "../../hooks/useCreateFreightForm";
import { useGetCidades } from "@/api/Cidades/useGetCidades";
import { getCidadeOptions, getFreightOptions } from "./FreightForm.model";
import { useGetFreightOptions } from "@/api/Freight/useGetFreightOptions";
import CircularProgress from "@mui/material/CircularProgress";
import { Wrapper } from "../../styles";
import { FreightFormErrors } from "./components/FreightFormErrors/FreightFormErrors";

type Props = {
  onSubmit(values: FreightFormType): void;
};

export const FreightForm: React.FC<Props> = ({ onSubmit }) => {
  const { data: cidadesData, isLoading: isCidadesLoading } = useGetCidades();

  const cidadesOptions = getCidadeOptions(cidadesData);

  const { data: freightOptionsData, isLoading: isFreightOptionsLoading } =
    useGetFreightOptions();

  const freightOptions = getFreightOptions(freightOptionsData);

  const isLoading = isCidadesLoading || isFreightOptionsLoading;

  const form = useFormContext<FreightFormType>();

  const isOptionEqualToValue = (
    option: typeof freightOptions[0],
    value: typeof freightOptions[0]
  ) => option.id === value.id;

  return (
    <form
      style={{ width: "100%", display: "flex" }}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Wrapper>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <FreightFormErrors />
            <Autocomplete
              disablePortal
              fullWidth
              sx={{ borderColor: "red" }}
              id="cidade-de-origem"
              options={cidadesOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cidade de Origem"
                  error={!!form.formState.errors.cidadeA}
                />
              )}
              isOptionEqualToValue={isOptionEqualToValue}
              onChange={(_e, value) => {
                form.setValue("cidadeA", value?.id ?? "");
              }}
            />
            <Autocomplete
              disablePortal
              fullWidth
              id="cidade-de-destino"
              options={cidadesOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cidade de Destino"
                  error={!!form.formState.errors.cidadeB}
                />
              )}
              onChange={(_e, value) => {
                form.setValue("cidadeB", value?.id ?? "");
              }}
              isOptionEqualToValue={isOptionEqualToValue}
            />

            <Autocomplete
              disablePortal
              fullWidth
              id="modalidade-transporte"
              options={freightOptions}
              isOptionEqualToValue={isOptionEqualToValue}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Modalidade de Transporte"
                  error={!!form.formState.errors.freightType}
                />
              )}
              onChange={(_e, value) => {
                form.setValue("freightType", value?.id ?? "");
              }}
            />
            <Button
              startIcon={<CalculateIcon />}
              variant="contained"
              color="primary"
              type="submit"
            >
              Calcular
            </Button>
          </>
        )}
      </Wrapper>
    </form>
  );
};
